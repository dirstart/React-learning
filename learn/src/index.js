import React from 'react';
import ReactDOM from 'react-dom';

class CC extends React.Component {
	constructor() {
		super();
		this.state = {
			flag: true
		}
	}

	handleClick() {
		this.setState({
			flag: !this.state.flag
		})
	}

	render() {
		const likeText = this.props.likeText || "喜欢";
		const unlikeText = this.props.unlikeText || "不喜欢";
		return (<div>
			<button onClick={this.handleClick.bind(this)}>{this.state.flag?likeText:unlikeText}</button>
		</div>)
	}
}

ReactDOM.render(<CC likeText="oH Ye" unlikeText="oH No"/>, document.getElementById('root'));