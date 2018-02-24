import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

class Index extends Component {
  componentDidMount() {
    this.input.focus();
  }
  render() {
    return <div>
      <input type="text" ref={(input) => this.input = input}/>
    </div>
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));

registerServiceWorker();
