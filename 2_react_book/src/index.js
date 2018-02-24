import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import PropTypes from 'prop-types';

class Comment extends Component {
  static propTypes = {
    comment: PropTypes.object.isRequired
  }
  render() {
    const {comment} = this.props;
    return (<div>
      <span>{comment.username}</span>
    </div>)
  }
}
class Index extends Component {
  render() {
    return (<div>
      <Comment comment={{username: 'haha'}}></Comment>
      <Comment></Comment>      
    </div>)
  }
}

ReactDOM.render(<Index/>, document.getElementById('root'));

registerServiceWorker();
