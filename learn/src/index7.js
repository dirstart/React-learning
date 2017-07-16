import React from 'react';
import ReactDOM from 'react-dom';
import './index7.css'
class Card extends React.Component {
	render() {
		return (<div className="card-wrapper">
				<div className="card-content">
				{this.props.children}
				</div>
			</div>)
	}
}

ReactDOM.render(<Card>
	<h2>React.js小书</h2>
	<div>OK</div>
</Card>, document.getElementById('root'));