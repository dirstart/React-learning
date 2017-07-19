import React from 'react';
import PropTypes from 'prop-types';
import {
	connect
} from 'react-redux';
import {
	addComments
} from '../reducers/comment.js';
import CommentInput from '../components/CommentInput';

class CommentInputContainer extends React.Component {
	static propTypes = {
		comments: PropTypes.array,
		onSubmit: PropTypes.func
	}
	constructor() {
		super();
		this.state = {
			username: ''
		}
	}
	componentWillMount() {
		this._loadUsername();
		console.log("WillMount: 调用_loadUsername,加载用户名");
	}
	_loadUsername() {
		const username = localStorage.getItem('username');
		if (username) {
			this.setState({
				username
			})
		} else {
			console.log("_loadUsername: 并没有在localStorage中找到username");
		}
	}
	_saveUsername(username) {
		console.log("高阶组件：usernameBlur")
		localStorage.setItem('username', username);
	}
	handleSubmitComment(comment) {
		if (!comment) return;
		if (!comment.username) return alert("输入用户名");
		if (!comment.content) return alert("输入评论内容");
		const {
			comments
		} = this.props;
		const newComments = [...comments, comment];
		localStorage.setItem('comments', JSON.stringify(newComments));
		if (this.props.onSubmit) {
			this.props.onSubmit(comment);
		}

		console.log("高阶组件：传值")
	}

	render() {
		return (<CommentInput username={this.state.username}
			onSubmit={this.handleSubmitComment.bind(this)}
			onUsernameInputBlur={this._saveUsername.bind(this)}
		 />)
	}
}

const mapStateToProps = (state) => {
	return {
		comments: state.comments
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		onSubmit: (comment) => {
			dispatch(addComments(comment))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentInputContainer);