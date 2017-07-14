import React from 'react';
import ReactDOM from 'react-dom';
class Layout extends React.Component {
	render() {
		return (<div className="two-cols-layout">
				<div className="sidebar">{this.props.children[0]}</div>
				<div className="main">{this.props.children[1]}</div>
			</div>)
	}
}

ReactDOM.render(<Layout a="1" b="2" />, document.getElementById('root'));