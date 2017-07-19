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
export const deleteComments = (xxindex) => {
	return {
		type: DELETE_COMMENTS,
		xxindex
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