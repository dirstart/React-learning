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
		console.log("I'm clicked");
		this.setState({
			flag: !this.state.flag
		})
	}

	render() {
		// const likeText = this.props.likeText || "喜欢";
		// const unlikeText = this.props.unlikeText || "不喜欢";
		//当只有两个属性的时候这样看起来还不错，可是当很多个这样的属性就很糟糕了
		const obj_text = this.props.obj_text || {
			likeText: "喜欢",
			unlikeText: "不喜欢"
		}
		return (<div>
			<button onClick={this.handleClick.bind(this)}>{this.state.flag?obj_text.likeText:obj_text.unlikeText}</button>
		</div>)
	}
}

class Index extends React.Component {
	handleClick2() {
		console.log("Click on CC");
	}
	render() {
		return (<div onClick={this.handleClick2.bind(this)}>
			<CC obj_text={{likeText:"oooo",unlikeText:"bbbb"}}
			/>
		</div>)
	}
}

ReactDOM.render(<Index />, document.getElementById('root'));