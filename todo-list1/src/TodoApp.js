import React from 'react';
import TodoList from './TodoList';
import TodoInput from './TodoInput';

class TodoApp extends React.Component {
	constructor() {
		super();
		this.state = {
			contents: []
		}
	}
	componentWillMount() {
		this._loadLocalStorage();
	}
	_loadLocalStorage() {
		let contents = localStorage.getItem('user_contents');
		if (contents) {
			contents = JSON.parse(contents);
			this.setState({
				contents: contents
			})
		}
	}
	_saveLocalStorage() {
		let {
			contents
		} = this.state;
		contents = JSON.stringify(contents);
		localStorage.setItem('user_contents', contents);
	}
	handleSubmit(obj) {
		const {
			contents
		} = this.state;
		contents.push(obj);
		console.log(obj);
		this.setState({
			contents: contents
		}, this._saveLocalStorage());
	}
	handleDelete(index) {
		const {
			contents
		} = this.state;
		contents[index].flag = false;
		console.log(contents[index].content + "变false");
		this.setState({
			contents: contents
		}, () => {
			this._saveLocalStorage();
			console.log(contents);
		})
	}

	render() {
		return (<div className="app-all-wrapper">
			<TodoList contents={this.state.contents} onHandleDelete={this.handleDelete.bind(this)}
			/>
			<TodoInput onSubmit={this.handleSubmit.bind(this)}/>
		</div>)
	}
}

export default TodoApp;