import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Comment from './Comment';

export default class CommentList extends Component {
	static defaultProps = {
		comments: []
	}
	static propTyps = {
		comments: PropTypes.array,
		onDelete: PropTypes.func
	}
	handleDelete(index) {
	    if (this.props.onDelete) {
	      this.props.onDelete(index);
	    }
	  }
	render() {
		return <div className="comment-list">
			{this.props.comments.map((item, index) => {
				return <Comment 
					key={index} comment={item} index={index}
					onDelete={this.handleDelete.bind(this)}
				/>
			})}
		</div>
	}
}