import React from 'react';
import ReactDOM from 'react-dom';
import {
	createStore
} from 'redux';
import {
	Provider
} from 'react-redux';
import commentsReducer from './reducers/comment';
import './index.css';

import CommentApp from './containers/CommentApp';

const store = createStore(commentsReducer);

ReactDOM.render(<Provider store={store} >
		<CommentApp />
	</Provider>, document.getElementById('root'));