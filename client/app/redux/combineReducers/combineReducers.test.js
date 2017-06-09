import assert from 'assert';
import combineReducers from './combineReducers';





describe('A combined reducer object', () => {

	let state;

	const invalid_action = { name: 'invalid_action' };

	const boolA = (state = true, action) => {
		return !state;
	}
	const boolB = (state = true, action) => {
		return !state;
	}


	//Tests
	it('should return an object that has functionality of input reducers', () => {
		let combinedReducer = combineReducers({ boolA, boolB });

		let state = combinedReducer(invalid_action);
		state = combinedReducer(state);

		assert(state.boolA && state.boolB);
	})
})