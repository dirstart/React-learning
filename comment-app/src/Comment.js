import React,{Component} from 'react';

export default class Comment extends Component {
	constructor() {
		super();
	}
	render() {
		return <div>
			<span>
				{this.props.comment.username}
			</span>：
			<span>
				{this.props.comment.content}
			</span>
		</div>
	}
}