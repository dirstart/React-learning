// 封装时钟
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


class Clock extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
      isShow: false
    }
  }
  componentDidMount() {
    setInterval(() => {
      this.tick();
    }, 1000);
  }
  tick() {
    this.setState({
      date: new Date()
    })
  }
  render() {
    return <div>
      {this.state.isShow ? this.state.date.toLocaleTimeString() : null}
      <button onClick={() => this.setState({isShow: !this.state.isShow})}>
      时间挂载和卸载</button>
    </div>
  }
}

ReactDOM.render(<Clock/> , document.getElementById('root'));


registerServiceWorker();
