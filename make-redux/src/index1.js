import React, {
	Component
} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import Content from './Content';
import Header from './Header';

function CreateStore(reducer) {
	let state = null;
	const listeners = [];
	const subscribe = (listener) => listeners.push(listener);
	const getState = () => state;
	const dispatch = (action) => {
		state = reducer(state, action);
		listeners.forEach((listener) => listener());
	}
	dispatch({}); //初始化
	return {
		getState,
		dispatch,
		subscribe
	}
}

const themeReducer = (state, action) => {
	if (!state) return {
		themeColor: 'green'
	}
	switch (action.type) {
		case 'CHANGE_COLOR':
			console.log(action.themeColor);
			return {
				...state,
				themeColor: action.themeColor
			}
		default:
			return state
	}
}

const store = CreateStore(themeReducer);


class Index extends Component {
	static childContextTypes = {
		store: PropTypes.object
	}
	getChildContext() {
		return {
			store
		};
	}
	render() {
		return (<div>
			<Header />
			<Content />
		</div>)
	}
}

ReactDOM.render(<Index />, document.getElementById('root'));