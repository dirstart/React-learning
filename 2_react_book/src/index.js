import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
class Title extends React.Component {
  handleClick(e) {
    console.log(this);
    console.log(e.target.innerHTML);
    console.log('click Title');
  }
  render() {
    return <h1 onClick={this.handleClick.bind(this)}>React 小书</h1>
  }
}
class Header extends React.Component {
  render() {
    return <div>
      <span>1.</span>
      <Title />
    </div>
  }
}

ReactDOM.render(<Header />, document.getElementById('root'));
registerServiceWorker();
