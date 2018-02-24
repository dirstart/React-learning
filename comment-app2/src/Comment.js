import React, {Component} from 'react';

export default class Comment extends Component {
  constructor() {
    super();
    this.state = {
      timeString: ''
    }    
  }
  componentWillMount() {
    const comment = this.props.comment;
    this.setState({
      timeString: comment.createdTime
    })
  }
	render() {
		return <div>
			<span>{this.props.comment.username} ：</span>
			<span>{this.props.comment.content}</span>
      <p className="send-time">{this.state.timeString}</p>
		</div>
	}
}