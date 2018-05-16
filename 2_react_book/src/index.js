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
  constructor() {
    super();
    this.state = {
      test: '<h1>come on</h1>'
    }
  }
  render() {
    return (<div>
      <Comment comment={{username: 'haha'}}></Comment>
      <div dangerouslySetInnerHTML={{__html: this.state.test}}>
      </div>

    </div>)
  }
}

ReactDOM.render(<Index/>, document.getElementById('root'));

registerServiceWorker();
