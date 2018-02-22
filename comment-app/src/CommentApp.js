import React,{Component} from 'react';

import CommentInput from './CommentInput';
import CommentList from './CommentList';

export default class CommentApp extends Component {
	constructor() {
		super();
	}
	render() {
		return (<div className="comment-app">
			<CommentInput />
			<CommentList />
		</div>)
	}
}