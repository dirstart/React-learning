let Redux = require('redux');

const defaultState = {
	data: []
}

const SetData = (pre_data) => {
	let res_data = [];
	if (typeof pre_data !== 'undefined') {
		res_data = (pre_data).map((item, i) => {
			item.key = i;
			return item
		})

	} else {
		console.log("请求数据不符合规范");
	}

	console.log(res_data instanceof Array);
	return res_data;
}

let reducer = (state = defaultState, action) => {
	let newState = {};
	switch (action.type) {
		case "GET_DATA":
			newState.data = SetData(action.data);
			return {
				data: action.data
			}
		default:
			return state
	}
}

let store = Redux.createStore(reducer);
export {
	store
};