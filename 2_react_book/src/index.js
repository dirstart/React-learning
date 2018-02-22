import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

const users = [
  { username: 'Jerry', age: 21, gender: 'male' },
  { username: 'Tomy', age: 22, gender: 'male' },
  { username: 'Lily', age: 19, gender: 'female' },
  { username: 'Lucy', age: 20, gender: 'female' }
];

class Index extends Component {
	render() {
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
		</div>)
	}
}
// const userElement = [];
// for (let user of users) {
// 	userElement.push(<div>
// 		<span>姓名：{user.username}</span>
// 		<span>年龄：{user.age}</span>
// 		<span>性别：{user.gender}</span>
// 	</div>)
// }
// return <div>{userElement}</div>

ReactDOM.render(<Index />, document.getElementById('root'));

registerServiceWorker();
