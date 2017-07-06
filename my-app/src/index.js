// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// function formatName(user){
// 	return user.firstName+user.lastName;
// }
// const user={
// 	firstName:'chen',
// 	lastName:'hongpeng'
// };

// ReactDOM.render(element,document.getElementById('root'));

import React,{Component} from'react';
import {render} from 'react-dom';
class HelloMessage extends Component{
	render(){
		return <div>Hello {this.props.name}</div>;
	}
}
render(<HelloMessage name="John" />,document.getElementById('root'));