import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import CommentApp from './CommentApp';
import './index.css';

class Index extends Component {
  render() {
    return <div className="wrap">
      <CommentApp/>
    </div>
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));