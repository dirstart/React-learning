import React,{Component} from 'react';

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
		console.log(comment);
		if (!comment) return;
		if (!comment.username) return alert('输入用户名');
		if (!comment.content) return alert('输入评论内容');
		this.state.comments.push(comment);
		this.setState({
			comments: this.state.comments
		})
	}
	render() {
		return (<div className="comment-app">
			<CommentInput onSubmit={this.handleSubmit.bind(this)}/>
			<CommentList comments={this.state.comments} />
		</div>)
	}
}