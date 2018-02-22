import React, {Component} from 'react';

export default class CommentInput extends Component {
	constructor() {
		super();
	}
	render() {
		return (<div className="comment-input">
			<section className="comment-field">
				<span className="field-label">用户名：</span>
				<input className="field-input" />
			</section>
			<section className="comment-field">
				<span className="field-label">评论：</span>
				<textarea className="field-textarea" />
			</section>
			<section className="comment-field-button">
				<button className="comment-submit">发布</button>
			</section>
		</div>)
	}
}