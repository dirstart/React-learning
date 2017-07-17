import React from 'react';
import PropTypes from 'prop-types';

class CommentInput extends React.Component {
	static propTypes = {
		bindInApp: PropTypes.func
	}

	constructor() {
		super();
		this.state = {
			username: '',
			content: ''
		}
	}

	componentWillMount() {
		this._localUsername();
	}
	_localUsername() {
		const username = localStorage.getItem('username');
		if (!!username) {
			this.setState({
				username
			});
		}
	}
	_saveUsername(username) {
		localStorage.setItem('username', username);
	}
	handleInputChange(event) {
		this.setState({
			username: event.target.value
		})
	}
	handleTextareaChange(event) {
		this.setState({
			content: event.target.value
		})
	}
	handleUsernameBlur(event) {
		this._saveUsername(event.target.value);
	}
	handleKeyEnter(event) {
		event.stopPropagation();
		if (this.props.bindInApp && event.key === 'Enter') {
			this.props.bindInApp({
				username: this.state.username,
				content: this.state.content,
				createdTime: +new Date()
			});
			this.setState({
				content: ''
			})
		}
	}
	bindInApp() {
		if (this.props.bindInApp) {
			this.props.bindInApp({
				username: this.state.username,
				content: this.state.content,
				createdTime: +new Date()
			});
			this.setState({
				content: ''
			})
		}
	}
	render() {
		return (
			<div onKeyPress={this.handleKeyEnter.bind(this)} className="comment-input">
				<div className="comment-field">
					<span className="comment-field-name">用户名:</span>
					<div className="comment-field-input">
						<input value={this.state.username} 
						onBlur={this.handleUsernameBlur.bind(this)}
						onChange={this.handleInputChange.bind(this)} />
					</div>
				</div>
				<div className="comment-field">
					<span className="comment-field-name">评论内容:</span>
					<div className="comment-field-input">
						<textarea value={this.state.content} ref={(textarea)=>this.textarea=textarea}
						onChange={this.handleTextareaChange.bind(this)}/>
					</div>
				</div>
				<div className="comment-field-button">
					<button onClick={this.bindInApp.bind(this)}
					>发布</button>
				</div>
			</div>)
	}

	componentDidMount() {
		this.textarea.focus()
	}
}

export default CommentInput;