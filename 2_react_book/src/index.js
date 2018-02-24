import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

class BlackBorderContainer extends Component {
  render() {
    return <div>
      {this.props.children.map((item, index) => {
        return <div style={{border: '1px solid #000'}} key={index}>{item}</div>
      })}
    </div>
  }
}
class Index extends Component {
  render() {
    return <div>
      <BlackBorderContainer>
        <h1>hh</h1>
        <p>test<span>12</span></p>
      </BlackBorderContainer>
    </div>
  }
}

ReactDOM.render(<Index/>, document.getElementById('root'));

registerServiceWorker();
