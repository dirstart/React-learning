function createStore(state, stateChanger) {
	const getState = () => state;
	const dispatch = (action) => stateChanger(state, action);
	return {
		getState,
		dispatch
	};
}

export default createStore;