import React from 'react';
import ReactDOM from 'react-dom';
class Clock extends React.Component {
	constructor() {
		super();
		this.state = {
			date: new Date()
		}
	}
	componentWillMount() {
		this.timer = setInterval(() => {
			this.setState({
				date: new Date()
			});
		}, 1000)
	}
	componentWillUnmount() {
		clearInterval(this.timer);
	}
	render() {
		return (<div><h1><p>现在的时间是</p>{this.state.date.toLocaleTimeString()}</h1></div>)
	}
}
class Index extends React.Component {
	constructor() {
		super();
		this.state = {
			isShow: true
		}
	}
	handleDisplay() {
		this.setState({
			isShow: !this.state.isShow
		})
	}
	render() {
		return (<div>
			{this.state.isShow?<Clock />:null}
			<button onClick={this.handleDisplay.bind(this)}>控制时间的显示或者消失</button>
		</div>)
	}
}
ReactDOM.render(<Index />, document.getElementById('root'));