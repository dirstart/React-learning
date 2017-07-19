import React, {
	Component
} from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Content from './Content';

import {
	createStore
} from 'redux';
import {
	Provider
} from 'react-redux';

const themeReducer = (state, action) => {
	if (!state) {
		console.log("刚开始没有store");
		return {
			themeColor: 'Blue'
		}
	}
	switch (action.type) {
		case 'CHANGE_COLOR':
			return {
				...state,
				themeColor: action.themeColor
			}
		default:
			return state;
	}
}
const store = createStore(themeReducer);
//感觉总算想明白了，这里先定义了一个store然后作为Provider的属性包在Index外面
//最后，Index里面的组件把它当成原来的Context

class Index extends Component {
	render() {
		return (<div>
			<Header />
			<Content />
		</div>)
	}
}

ReactDOM.render(<Provider store={store}><Index /></Provider>, document.getElementById('root'));