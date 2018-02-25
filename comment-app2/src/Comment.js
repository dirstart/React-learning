import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Comment extends Component {
  static propTypes = {
    comment: PropTypes.object.isRequired,
    onDelete: PropTypes.func

  }
  constructor() {
    super();
    this.state = {
      timeString: ''
    }    
  }
  handleDelete() {
    if (this.props.onDelete) {
      this.props.onDelete(this.props.index);
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
    this.timer = setInterval(this._updateTime.bind(this), 10000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
	render() {
		return <div className="comment-item">
			<span className="comment-user">{this.props.comment.username} ：</span>
			<span className="comment-content">{this.props.comment.content}</span>
      <p className="comment-time">{this.state.timeString}</p>
      <p className="comment-delete"
        onClick={this.handleDelete.bind(this)}
      >删除</p>
		</div>
	}
}