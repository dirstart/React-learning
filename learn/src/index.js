import React, {
  Component
} from 'react';
import ReactDOM from 'react-dom';

class Comment extends Component {
  const {
    comment
  } = this.props;

  render() {
    return (
      <div className='comment'>
        <div className='comment-user'>
          <span>{comment.username} </span>：
        </div>
        <p>{comment.content}</p>
      </div>
    )
  }
}

ReactDOM.render(<Comment />, document.getElementById('root'));