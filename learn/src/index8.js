import React from 'react';
import ReactDOM from 'react-dom';

class Editor extends React.Component {
	constructor() {
		super();
		this.state = {
			content: "<h1 style={{fontSize: '12px', color: 'red'}}>React.js 小书</h1>",
			color: "50px"
		}
	}

	render() {
		return (<div style={{fontSize:this.state.color}} dangerouslySetInnerHTML={{__html:this.state.content}}></div>)
	}
}

ReactDOM.render(<Editor />, document.getElementById('root'));