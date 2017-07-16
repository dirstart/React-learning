import React from 'react';
import ReactDOM from 'react-dom';
import './index6.css';
class Post extends React.Component {
	constructor() {
		super();
		this.state = {
			height: 0
		}
	}
	handleClick() {
		console.log(this.state.height);
	}
	componentDidMount() {
		this.setState({
			height: this.p.offsetHeight
		})
	}
	render() {
		return (<p onClick={this.handleClick.bind(this)} ref={(p)=>{this.p=p}} >{this.props.content}</p>)
	}
}

ReactDOM.render(<Post content="slfjlsfj" />, document.getElementById('root'));