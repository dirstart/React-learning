let nextTodoId = 0

// 1.增加todo
export const addTodo = (text) => ({
	type: 'ADD_TODO',
	id: nextTodoId++,
	text
})

// 2.可视性筛选
export const setVisibilityFilter = (filter) => ({
	type: 'SET_VISIBILITY_FILTER',
	filter
})

// 3.切换任务
export const toggleTodo = (id) => ({
	type: 'TOGGLE_TODO',
	id
})