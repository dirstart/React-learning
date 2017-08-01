var React = require("react");
var ReactDOM = require("react-dom");
import Header from './component/Header';
import Footer from './component/Footer';
import PropTypes from 'prop-types';

import {Input} from 'antd';
import 'antd/dist/antd.css';

export default class Index extends React.Component {
    constructor() {
        super();
    }
	handleClick(){
		console.log("I'm click");
	}
    render() {
        return (
        	<div>
				<Header />
				<button onClick={this.handleClick.bind(this)}>111</button>
				<Input placeholder="hhhh" />
				<Footer/>
			</div>)
    }
}


// ReactDOM.render(<Index />, document.getElementById('root'));