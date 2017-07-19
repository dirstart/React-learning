//要求实现一个符合Redux要求的Reducer---userReducer
// 1-增加用户操作
dispatch({
	type: 'ADD_USER',
	user: {
		username: 'Lucy',
		age: 12,
		gender: 'female'
	}
});
// 2-通过id删除用户的操作
dispatch({
	type: 'DELETE_USER',
	index: 0 //删除特定下标的用户
});
// 3-修改用户操作
dispatch({
	type: 'UPDATE_USER',
	index: 0,
	user: {
		username: 'Tomy',
		age: 12,
		gender: 'male'
	}
});



// reducer

const userReducer = (state = [], action) => {
	switch (action.type) {
		case 'ADD_USER':
			return [...state, action.user];

	}
}