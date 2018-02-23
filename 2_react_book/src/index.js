import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

const users = [
  { username: 'Jerry', age: 21, gender: 'male' },
  { username: 'Tomy', age: 22, gender: 'male' },
  { username: 'Lily', age: 19, gender: 'female' },
  { username: 'Lucy', age: 20, gender: 'female' }
];

const Header = () => {
	this.componentWillUnmount = () => {
		console.log('1212');
	}
	return <span>我是标题</span>
}
class Footer extends Component {
	componentWillUnmount() {
		console.log('componentWillUnmount');
	}
	render() {
		console.log('render Footer');
		return <div>test componentWillUnmount</div>
	}
}

class Index extends Component {
	constructor() {
		super();
		this.state = {
			isShow: false
		}
		console.log('constructor');
	}
	componentWillMount() {
		console.log('componentWillMount');
	}
	componentDidMount() {
		console.log('componentDidMount');
	}
	componentWillUnmount() {
		console.log('componentWillUnmount');
	}
	render() {
		console.log('render index');
		return (<div>
		{
			// 一个问题
			// onClick= {() => console.log}
			// onClick={console.log}
			users.map((user, index) => {
				return (<div key={index} onClick={() => console.log('1')}>
					<span>姓名：{user.username}</span>
					<span>年龄：{user.age}</span>
					<span>性别：{user.gender}</span>
				</div>)
			})
		}
			{this.state.isShow ? <div><Footer/></div> : null}
			<button onClick={() => this.setState({ isShow: !this.state.isShow })}>
				是否显示标题
			</button>
		</div>);
	}
}

ReactDOM.render(<Index />, document.getElementById('root'));

registerServiceWorker();
