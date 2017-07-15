import React from 'react';
import ReactDOM from 'react-dom';
class AutoInput extends React.Component {
	componentDidMount() {
		this.input.focus();
	}
	render() {
		return (<input type="text" ref={(input)=>{this.input=input}}/>)
	}
}

ReactDOM.render(<AutoInput />, document.getElementById('root'));