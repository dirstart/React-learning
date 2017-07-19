import React, {
	Component
} from 'react';
import PropTypes from 'prop-types';
import {
	connect
} from 'react-redux';

import ThemeSwitch from './ThemeSwitch';

class Content extends Component {
	static propTypes = {
		themeColor: PropTypes.string
	}

	render() {
		return (<div>
			<h1 style={{color:this.props.themeColor}}>I'm Content.</h1>
			<ThemeSwitch />
		</div>)
	}
}

const mapStateToProps = (state) => {
	return {
		themeColor: state.themeColor
	}
}

Content = connect(mapStateToProps)(Content);

export default Content;