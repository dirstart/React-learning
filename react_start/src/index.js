import React from 'react';
import ReactDOM from 'react-dom';

// function tick(){
// 	const element=(
// 		<div><h1>Hello</h1><h2>It's {new Date().toLocaleTimeString()}</h2></div>
// 	);
// 	ReactDOM.render(element,document.getElementById('root'));
// }

// setInterval(tick,1000);

// -----------------------------------------
// function Welcome(props){
// 	return <h1>helo,{props.name}</h1>;
// }
// function App(){
// 	return(<div><Welcome name="Sara" /><Welcome name="AA" /></div>)
// }
// // const element=<Welcome name="AA" />;
// ReactDOM.render(<App />,document.getElementById("root"));


// -------------------------
// function Clock(props){
// 	return(<div><h1>Hello,world</h1><h2>It's {props.date.toLocaleTimeString()}</h2></div>);
// }

// function tick(){
// 	ReactDOM.render(<Clock date={new Date()}/>,
// 	document.getElementById("root")
// 	);
// }
// setInterval(tick,1000);

// ---------------------
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }

  componentDidMount(){
// 真实的DOM被渲染出来后调用
	this.timerID=setInterval(()=>this.tick(),1000);
  };
  componentWillUnmount(){
  	clearInterval(this.timerID);
  };
  tick(){
  	this.setState({
  		date:new Date()
  	})
  };

}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);

