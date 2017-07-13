import React, {
	Component
} from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
// 文件字母开头大写则表示文件导出的是一个类

class CommentApp extends Component {
	constructor() {
		super();
		this.state = {
			comments: []
		}
	}
	handleSubmitComment(comment) {
		if (!comment) return;
		if (!comment.username) return alert("请输入用户名");
		if (!comment.content) return alert("请输入用户评论内容");
		this.state.comments.push(comment);
		this.setState({
			comments: this.state.comments
		})
	}
	render() {
		return (
			<div className='wrapper'>
				<CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
				<CommentList comments={this.state.comments}/>
			</div>
		)
	}
}

export default CommentApp;