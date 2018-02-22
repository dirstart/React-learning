import React,{Component} from 'react';

import Comment from './Comment';

export default class CommentList extends Component {
	constructor() {
		super();
	}
	render() {
		return (<div className="comment-list">
			<Comment />
		</div>)
	}
}