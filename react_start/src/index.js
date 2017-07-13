import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }

  componentDidMount() {
    // 真实的DOM被渲染出来后调用
    this.timerID = setInterval(() => this.tick(), 1000);
  };
  componentWillUnmount() {
    clearInterval(this.timerID);
  };
  tick() {
    this.setState({
      date: new Date()
    })
  };

}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);