import React,{Component} from 'react';

import Comment from './Comment';

export default class CommentList extends Component {
	constructor() {
		super();
	}
	static defaultProps = {
		comments: []
	}
	render() {
		// const comments = [
	 //      {username: 'Jerry', content: 'Hello'},
	 //      {username: 'Tomy', content: 'World'},
	 //      {username: 'Lucy', content: 'Good'}
	 //    ]
		return (<div className="comment-list"> {
			this.props.comments.map((comment, index) => {
				return <Comment key={index} comment={comment} />
			})
		} </div>)
	}
}