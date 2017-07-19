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
	deleteComments
} from '../reducers/comment.js';
//	我终于理解了。是这样的.
// 1.在WillMount里面我们从localStorage获取原来的comments，通过JSON.parse将字符串解析为JSON格式
// 2.其后立马通过this.initComments()这个函数将其与state绑定
// 3.之后在render()中组件便可以获取到props中的comments了

// CommentListContainer
// 一个Smart组件，负责评论列表加载，初始化和删除
class CommentListContainer extends Component {
	static propTypes = {
		comments: PropTpyes.array,
		initComments: PropTpyes.func,
		onDeleteComment: PropTpyes.func

	}
	componentWillMount() {
		this._loadComments();
	}
	_loadComments() {
		let comments = localStorage.getItem('comments');
		comments = comments ? JSON.parse() : [];
		this.initComments(comments);
	}

	handleDeleteComment(index) {
		if (!!this.props.onDeleteComment) {
			this.props.onDeleteComment(index);
		}
	}
	render() {
		return (<CommentList comments={this.props.comments} 
					onDeleteComment={this.handleDeleteComment.bind(this)}
		/>)
	}
}