import React, {Component} from 'react';

export default class CommentInput extends Component {
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
	handleContentChange(event) {
		this.setState({
			content: event.target.value
		})
	}
	handleSubmit() {
		console.log('this');
		if (this.props.onSubmit) {
			const {username, content} = this.state;
			this.props.onSubmit({username, content})
		}
		this.setState({content: ''});
	}
	render() {
		return (<div className="comment-input">
			<section className="comment-field">
				<span className="field-label">用户名：</span>
				<input className="field-input" value={this.state.username}
					onChange={this.handleUsernameChange.bind(this)}
				/>
			</section>
			<section className="comment-field">
				<span className="field-label">评论：</span>
				<textarea className="field-textarea" value={this.state.content}
					onChange={this.handleContentChange.bind(this)}
				/>
			</section>
			<section className="comment-field-button">
				<button className="comment-submit"
					onClick={this.handleSubmit.bind(this)}>发布
				</button>
			</section>
		</div>)
	}
}