import React, {
	Component
} from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
// 文件字母开头大写则表示文件导出的是一个类

class CommentApp extends Component {
	handleSubmitComment(comment) {
		console.log(comment);
	}
	render() {
		return (
			<div className='wrapper'>
				<CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
				<CommentList />
			</div>
		)
	}
}

export default CommentApp;