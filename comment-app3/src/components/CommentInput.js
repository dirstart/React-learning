import React from 'react';
import PropTypes from 'prop-types';

class CommentInput extends React.Component {
	static propTypes = {
		username: PropTypes.any,
		onSubmit: PropTypes.func,
		onUsernameInputBlur: PropTypes.func
	}
	static defaultProps = {
		username: ''
	}

	constructor(props) {
		super(props);
		this.state = {
			username: props.username,
			content: ''
		}
	}

	componentDidMount() {
		this.textarea.focus()
	}

	handleUsernameBlur(event) {
		if (this.props.onUsernameInputBlur) {
			this.props.onUsernameInputBlur(event.target.value);
			console.log("Dump组件:UsernameBlur");
		} else {
			console.log("Dump组件：username没有传到值,说明onUsernameInputBlur不存在");
		}
	}

	handleUsernameChange(event) {
		this.setState({
			username: event.target.value
		})
	}

	handleContentChange(event) {
		this.setState({
			content: event.target.value
		})
	}

	handleSubmit() {
		if (this.props.onSubmit) {
			this.props.onSubmit({
				username: this.state.username,
				content: this.state.content,
				createdTime: +new Date()
			});
			this.setState({
				content: ''
			})
			console.log("Dump组件:onSubmit");
		} else {
			console.log("Dump组件:没有传到值");
		}
	}
	render() {
		return (
			<div className="comment-input">
				<div className="comment-field">
					<span className="comment-field-name">用户名:</span>
					<div className="comment-field-input">
						<input value={this.state.username} 
						onBlur={this.handleUsernameBlur.bind(this)}
						onChange={this.handleUsernameChange.bind(this)} />
					</div>
				</div>
				<div className="comment-field">
					<span className="comment-field-name">评论内容:</span>
					<div className="comment-field-input">
						<textarea value={this.state.content} ref={(textarea)=>this.textarea=textarea}
						onChange={this.handleContentChange.bind(this)}/>
					</div>
				</div>
				<div className="comment-field-button">
					<button onClick={this.handleSubmit.bind(this)}>发布</button>
				</div>
			</div>)
	}
}

export default CommentInput;