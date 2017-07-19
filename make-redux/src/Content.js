import React, {
	Component
} from 'react';
import PropTypes from 'prop-types';
import ThemeSwitch from './ThemeSwitch';

class Content extends Component {
	static contextTypes = {
		store: PropTypes.object
	}
	constructor() {
		super();
		this.state = {
			themeColor: ''
		}
	}
	_updateThemeColor() {
		const {
			store
		} = this.context;
		const state = store.getState();
		this.setState({
			themeColor: state.themeColor
		})
	}
	componentWillMount() {
		const {
			store
		} = this.context;
		this._updateThemeColor();
		store.subscribe(() => this._updateThemeColor());
	}
	render() {
		return (<div>
			<h2 style={{color:this.state.themeColor}}>I'm Content</h2>
			<h3 style={{color:this.state.themeColor}}>Change me on button whick under me</h3>
			<ThemeSwitch />
		</div>)
	}
}

export default Content;