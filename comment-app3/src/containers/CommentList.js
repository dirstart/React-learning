import React, {
	Component
} from 'react';
import {
	connect
} from 'react-redux';
import PropTpyes from 'prop-types';
import CommentList from '../components/CommentList';
import {
	initComments,
	deleteComment
} from '../reducers/comment.js';

// CommentListContainer
// 一个Smart组件，负责评论列表加载，初始化和删除
class CommentListContainer extends Component {
	static propTypes = {
		comments: PropTpyes.array,
		initComments: PropTpyes.func,
		onDeleteComment: PropTpyes.func
	}

	handleDeleteComment(index) {
		if (!!this.props.onDeleteComment) {
			this.props.onDeleteComment(index);
		}
	}

	_loadComments() {
		let comments = localStorage.getItem('comments');
		comments = comments ? JSON.parse() : [];
	}
	render() {
		return (<CommentList comments={this.props.comments} 
					onDeleteComment={this.handleDeleteComment.bind(this)}
		/>)
	}
}