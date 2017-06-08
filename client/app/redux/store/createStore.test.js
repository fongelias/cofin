import assert from 'assert';
import createStore from './createStore';

describe('A store', () => {

	let store = {};
	//Test Actions
	const increment_action = {
		name: 'increment',
	}
	const decrement_action = {
		name: 'decrement',
	}
	
	beforeAll(() => {
		const testReducer = (state = 0, action) => {
			switch(action.name) {
				case 'increment':
					return state + 1;
				case 'decrement':
					return state - 1;
				default:
					return state;
			}
		} 

		store = createStore(testReducer);
	})

	describe('#getState()', () => {
		it('should return an inital state', () => {
			asserts(store.getState() == 0);
		});


		it('should return a new state after a mutation', () => {
			store.dispatch(increment_action);
			asserts(store.getState() == 1);
		});
	});

	describe('#dispatch()', () => {
		it('should transform the state given an action', () => {
			store.dispatch(increment_action);
			asserts(store.getState() == 1);
		})

		it('should transform the state given a different action', () => {
			store.dispatch(decrement_action);
			asserts(store.getState() == 0, 'Make sure this test is correct');
		})

		it('should not change when there is no action', () => {
			store.dispatch();
			asserts(store.getState() == 0);
		})
	})

	describe('#subscribe()', () => {
		it('should call a subscribed function when the state changes', () => {
			let testBool = false;
			let boolChange = () => testBool = true;

			store.subscribe(boolChange);

			asserts(testBool);
		})

		it('should remove a subscribed function when called again', () => {
			let testBool = false;
			let boolChange = () => testBool = true;
			
			store.subscribe(boolChange);
			store.subscribe(boolChange);

			asserts(testBool);

		})
	})


})