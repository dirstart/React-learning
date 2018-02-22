import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

class Computer extends Component {
  constructor () {
    super();
    this.state = {
      status: 'off'
    }
  }
  handleClick() {
  	this.setState({
  		status: this.state.status === 'off' ? 'on' : 'off'
  	})
  }
  render () {
    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>开关</button>
        <Screen showContent={this.state.status === 'off' ? '显示器关了' : '显示器亮了'} />
      </div>
    )
  }
}

class Screen extends Component {
  static defaultProps = {
    showContent: "无内容"
  }
  render () {
    return (
      <div className='screen'>{this.props.showContent}</div>
    )
  }
}


ReactDOM.render(<Computer />, document.getElementById('root'));

registerServiceWorker();
