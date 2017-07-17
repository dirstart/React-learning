import React, {
	Component
} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
class Index extends Component {
	static childContextTypes = {
		themeColor: PropTypes.string
	}
	constructor() {
		super();
		this.state = {
			themeColor: 'red'
		}
	}
	componentWillMount() {
		this.setState({
			themeColor: 'green'
		})
	}
	getChildContext() {
		return {
			themeColor: this.state.themeColor
		}
	}
	render() {
		return (<div>
			<Header />
			<Main />
		</div>)
	}
}
class Header extends Component {
	render() {
		return (<div>
		<h1>I'm Header</h1>
		<Title />
		</div>);
	}
}
class Title extends Component {
	static contextTypes = {
		themeColor: PropTypes.string
	}
	render() {
		return (<div><h1 style={{color:this.context.themeColor}}>React.js 小标题</h1></div>)
	}
}
class Main extends Component {
	render() {
		return (<div>
			<h1>This is Main</h1>
			<Content />
		</div>)
	}
}
class Content extends Component {
	render() {
		return (<div>
			<h1>React.js内容</h1>
		</div>)
	}
}
ReactDOM.render(<Index/ >, document.getElementById('root'));