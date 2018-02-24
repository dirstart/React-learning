// 时间挂载
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Clock extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date()
    }
  }
  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick();
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    })
  }
  render() {
    return <div>
      {this.state.date.toLocaleTimeString()}
    </div>
  }
}

class Index extends Component {
  constructor(){
    super();
    this.state = {
      isShow: true
    }
  }
  render() {
    return <div>
      {this.state.isShow ? <Clock/> : null}
      <button onClick={
        () => {this.setState({isShow: !this.state.isShow})}
      }>是否渲染组件</button>
    </div>
  }
}
ReactDOM.render(<Index/>, document.getElementById('root'));