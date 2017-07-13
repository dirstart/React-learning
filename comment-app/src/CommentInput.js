import React, {
	Component
} from 'react';
class CommentInput extends Component {
	constructor() {
		super();
		this.state = {
			username: '',
			content: ''
		}
	}
	handleUsernameChange(event) {
		this.setState({
			username: event.target.value
		})
	}
	handleUsercontentChange(event) {
		this.setState({
			content: event.target.value
		})
	}
	handleSubmit() {
		// 关于下方的这个我想知道，它只是想要判断存在，而不是想要判断bool吗？
		if (this.props.onSbumit) {
			const {
				username,
				content
			} = this.state;
			this.props.onSbumit({
				username,
				content
			});
			this.setState({
				content: ''
			});
		}
	}
	render() {
		return (
			<div className="comment-input">
				<div className="comment-field">
					<span className="comment-field-name">用户名:</span>
					<div className="comment-field-input">
						<input value={this.state.username} onChange={this.handleUsernameChange.bind(this)} />
					</div>
				</div>
				<div className = "comment-field">
					<span className="comment-field-name">评论内容:</span>
					<div className="comment-field-input">
						<textarea value={this.state.content} onChange={this.handleUsercontentChange.bind(this)} />
					</div>
				</div>
				<div className="comment-field-button">	
					<button onClick={this.handleSubmit.bind(this)}>
						发布
					</button>
				</div>
			</div>
		)
	}
}

export default CommentInput;