import createStore from './store.js';
let appState = {
	title: {
		text: 'React.js小书',
		color: 'green'
	},
	content: {
		text: 'learning React',
		color: 'blue'
	}
};

function stateChanger(state, action) {
	switch (action.type) {
		case 'UPDATE_TITLE_TEXT':
			state.title.text = action.text;
			break;
		case 'UPDATE_TITLE_COLOR':
			state.title.color = action.color;
			break;
		default:
			break;
	}
}

const store = createStore(appState, stateChanger);

function renderApp(Params) {
	renderTitle(Params.title);
	renderContent(Params.content);
}

function renderTitle(title) {
	const titleDOM = document.getElementById('title');
	titleDOM.innerHTML = title.text;
	titleDOM.style.color = title.color;
}

function renderContent(content) {
	const contentDOM = document.getElementById('content');
	contentDOM.innerHTML = content.text;
	contentDOM.style.color = content.color;
}

renderApp(store.getState()) // 首次渲染页面
store.dispatch({
		type: 'UPDATE_TITLE_TEXT',
		text: '《React.js 小书》'
	}) // 修改标题文本
store.dispatch({
		type: 'UPDATE_TITLE_COLOR',
		color: 'blue'
	}) // 修改标题颜色
renderApp(store.getState()) // 把新的数据渲染到页面上