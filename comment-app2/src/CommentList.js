import React, {Component} from 'react';

import Comment from './Comment';

export default class CommentList extends Component {
	static defaultProps = {
		comments: []
	}
	render() {
		return <div className="comment-list">
			{this.props.comments.map((item, index) => {
				return <Comment key={index} comment={item}/>
			})}
		</div>
	}
}