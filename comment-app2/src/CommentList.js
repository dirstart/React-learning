import React from 'react';
import Comment from './Comment';

class CommentList extends React.Component {
	static defaultProps = {
		comments: []
	}
	render() {
		const {
			comments
		} = this.props;
		return (<div>
			{comments.map((comment,i)=>{
				return (<Comment comment={comment} key={i} />)
			})}
		</div>)
	}
}

export default CommentList;