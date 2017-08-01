import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import  Header from './Header';

class Index extends Component{
	constructor(){
		super();
		this.state=({
			dataList:[]
		})
	}
	componentWillMount(){
		//我打算在这里
	}
	render(){
		return (<div>
			<Header />
		</div>)
	}
}

ReactDOM.render(<Index/>,document.getElementById('root'));