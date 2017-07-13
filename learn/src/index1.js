import React from 'react';
import ReactDOM from 'react-dom';

const isGood=true;
const element=(<h1>React is {isGood?"good":"no good"}</h1>);

ReactDOM.render(element,document.getElementById('root'));
//会产生的是替代，当两个共存的时候。

class Welcome extends React.Component{
	render(){
		return <h1>Hello,{this.props.ha}</h1>
	}
};
ReactDOM.render(<Welcome ha="jiang" />,document.getElementById('root'));
//也就是说，最后它只调用一次render，最后一起渲染

class Judge extends React.Component{
	render(){
		const flag=true;
		return (<div><h1>'chp '{flag?<strong>hen shuai</strong>:<span>chaoji shuai</span>} </h1></div>);
	}

	div	
}
ReactDOM.render(<Judge />,document.getElementById('x'));