import React, {Component} from 'react';

import CommentInput from './CommentInput';
import CommentList from './CommentList';

export default class CommentApp extends Component {
	constructor() {
		super();
		this.state = {
			comments: []
		}
	}
	handleSubmit(comment) {
		if (!comment.username) return alert('请输入用户名');
		if (!comment.content) return alert('请输入评论内容');
		let {comments} = this.state;
		comments.push(comment);
		this.setState({
			comments: comments
		});
	}
	render() {
		return <div>
			<CommentInput onSubmit={this.handleSubmit.bind(this)}/>
			<CommentList comments={this.state.comments}/>
		</div>
	}
}