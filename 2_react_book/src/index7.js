import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './index7.css';

class Card extends Component {
  render() {
    return <div>
      <div className="card-content">{this.props.content}</div>
    </div>
  }
}
class Card2 extends Component {
  componentWillMount() {
    console.log(this.props);
  }
  render() {
    return <div>
      <div className="card-content">{this.props.children}</div>
    </div>
  }
}
class Card3 extends Component {
  render() {
    return (<div>
      <div className="sidebar">
        {this.props.children[0]}
      </div>
      <div className="main">
        {this.props.children[1]}
      </div>
    </div>)
  }
}
class Index extends Component {
  render(){
    return <div>
      <Card content={
        <div>
          <h2>React.js小书</h2>
          <div>开源、免费、专业</div>
        </div>
      } />
      <Card2>
          <h2>React.js小书</h2>
          <div>开源、免费、专业</div>
      </Card2>
      <Card3>
        <div>123</div>
        <div>345</div>
      </Card3>
    </div>
  }
}

ReactDOM.render(<Index/>, document.getElementById('root'));

registerServiceWorker();
