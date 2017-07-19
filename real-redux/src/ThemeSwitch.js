import React, {
	Component
} from 'react';
import PropTypes from 'prop-types';
import {
	connect
} from 'react-redux';


class ThemeSwitch extends Component {
	static propsTypes = {
		themeColor: PropTypes.string,
		onSwitchColor: PropTypes.func
	}
	handleSwitchColor(color) {
		if (this.props.onSwitchColor) {
			this.props.onSwitchColor(color)
		}
	}
	render() {
		return (<div className="button-wrapper">
			<button onClick={this.handleSwitchColor.bind(this,'green')}
			style={{color:this.props.themeColor}}>Green</button>
			<button onClick={this.handleSwitchColor.bind(this,'yellow')} 
			style={{color:this.props.themeColor}}>Yellow</button>
		</div>)
	}
}

const mapStateToProps = (state) => {
	return {
		themeColor: state.themeColor
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		onSwitchColor: (color) => {
			dispatch({
				type: 'CHANGE_COLOR',
				themeColor: color
			})
		}
	}
}

ThemeSwitch = connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch);

export default ThemeSwitch;