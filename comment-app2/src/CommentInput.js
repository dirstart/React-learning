import React, {Component} from 'react';
export default class CommentInput extends Component {
	constructor() {
		super();
		this.state = {
			username: '',
			content: ''
		}
	}
	componentWillMount() {
		this._loadUser();
	}
	componentDidMount() {
		if (this.state.username) {
			this.textarea.focus();			
		} else {
			this.input.focus();
		}
	}
	_loadUser() {
		const username = localStorage.getItem('username');
		if (username && username.length) {
			this.setState({ username: username });
		}
	}
	_saveUser(username) {
		localStorage.setItem('username', username);
	}
	handleChangeUser(event) {
		this.setState({
			username: event.target.value
		})
	}
	handleChangeContent(event) {
		this.setState({
			content: event.target.value
		})
	}
	handleSubmit() {
		const {username, content} = this.state;
		if (this.props.onSubmit) {
			this.props.onSubmit({username, content});
		}
		this.setState({
			content: ''
		})
	}
	handleUserBlur(event) {
		this._saveUser(event.target.value);
	}
	render() {
		return <div className="comment-input">
			<section className="comment-field">
				<span className="field-label">用户名：</span>
				<input type="text" className="field-input"
					ref={(input) => this.input = input}
					value={this.state.username}
					onChange={this.handleChangeUser.bind(this)}
					onBlur={this.handleUserBlur.bind(this)}
				/>
			</section>
			<section className="comment-field">
				<span className="field-label">评论：</span>
				<textarea className="field-textarea"
					ref={(textarea) => this.textarea = textarea}
					value={this.state.content}
					onChange={this.handleChangeContent.bind(this)}
				></textarea>
			</section>
			<section className="comment-field-button">
				<button className="comment-submit"
					onClick={this.handleSubmit.bind(this)}
				>发送</button>
			</section>
		</div>
	}
}