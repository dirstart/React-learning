// action types
const INIT_COMMENTS = 'INIT_COMMENTS';
const ADD_COMMENTS = 'ADD_COMMENTS';
const DELETE_COMMENTS = 'DELETE_COMMENTS';

// action creators
export const initComments = (comments) => {
	return {
		type: INIT_COMMENTS,
		comments
	}
}
export const addComments = (comment) => {
		return {
			type: ADD_COMMENTS,
			comment
		}
	}
	// !!!!!! 如下写是正确的，但是，为什么我这里的index改成 其他的格式
	//   比如xxindex，删除的时候就会出现删除一次，commentList复制了一次所有的list，
	//		但是那样localStorage又是对的，刷新一次符合正常预期
	//    出错原因未知
export const deleteComments = (index) => {
	return {
		type: DELETE_COMMENTS,
		index
	}
}

// reducer
export default function(state, action) {
	if (!state) {
		state = {
			comments: []
		}
	}
	switch (action.type) {
		case INIT_COMMENTS:
			return {
				comments: action.comments
			}
		case ADD_COMMENTS:
			return {
				comments: [...state.comments, action.comment]
			}
		case DELETE_COMMENTS:
			return {
				comments: [...state.comments.slice(0, action.index),
					...state.comments.slice(action.index + 1)
				]
			}
		default:
			return false
	}
	// 上面这种返回comments的方法，保持一致，更加清楚
}