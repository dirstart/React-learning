import React, {
	Component
} from 'react';
import PropTypes from 'prop-types';
import {
	connect
} from './react-redux';

class Header extends Component {
	static contextTypes = {
		themeColor: PropTypes.string
	}
	render() {
		return (<div>
			<h1 style={{color:this.props.themeColor}}>我是大TITLE</h1>
		</div>)
	}
}

const mapStateToProps = (state) => {
	return {
		themeColor: state.themeColor
	}
}
Header = connect(mapStateToProps)(Header);

export default Header;