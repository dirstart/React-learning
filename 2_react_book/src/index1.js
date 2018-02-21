import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

class LikeButton extends Component {
  constructor() {
    super();
    this.state = { isLiked: false }
  }
  handleClick() {
  	// 无需担心的是 setState  不会带来性能问题。
  	// React内部，setState变成一个循环事件 合并 渲染。
    this.setState({
      isLiked: !this.state.isLiked
    });
    this.setState({
    	count: 0
    }, () => {
    	console.log(this.state.count);
    });
    this.setState((preState) => {
    	return { count: preState.count + 1 }
    });
    // this.setState((preState) => {
    // 	return { count: 0 }
    // }, () => {
    // 	console.log(this.state.count);
    // });
  }
  render() {
    return (<button onClick={this.handleClick.bind(this)}>
    	{this.state.isLiked ? '取消' : '点赞'}
    </button>)
  }
}

ReactDOM.render(<LikeButton />, document.getElementById('root'));

registerServiceWorker();
