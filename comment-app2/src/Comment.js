import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Comment extends Component {
  static propTypes = {
    comment: PropTypes.object.isRequired
  }
  constructor() {
    super();
    this.state = {
      timeString: ''
    }    
  }
  _updateTime() {
    const {comment} = this.props;
    const duration = (+Date.now() - comment.createdTime) / 1000
    this.setState({
      timeString: duration > 60 ?
      `${Math.round(duration / 60)}分钟前`
      :
      `${Math.round(Math.max(duration, 1))}秒前`
    })
  }
  componentWillMount() {
    this._updateTime();
    this.timer = setInterval(this._updateTime.bind(this), 2000);
  }
	render() {
		return <div className="comment-item">
			<span className="comment-user">{this.props.comment.username} ：</span>
			<span className="comment-content">{this.props.comment.content}</span>
      <p className="comment-time">{this.state.timeString}</p>
		</div>
	}
}