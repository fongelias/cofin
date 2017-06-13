export default (reducer, preloadedState) => {
	let state = preloadedState || undefined;
	let listeners = [];

	console.log( state );
	 
	const getState = () => state;

	const dispatch = (action) => {
		state = reducer(state, action);
		listeners.forEach(listener => listener());
	}

	const subscribe = (listener) => {
		listeners.push(listener);
		return () => {
			listeners = listeners.filter(l => l !== listener);
		};
	}

	dispatch({});

	return {
		getState,
		dispatch,
		subscribe,
	}
}