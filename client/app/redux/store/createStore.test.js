import assert from 'assert';
import createStore from './createStore';




describe('A store', () => {

	let store;
	//Test Actions
	const increment_action = {
		name: 'increment',
	}
	const decrement_action = {
		name: 'decrement',
	}
	const invalid_action = {
		name: 'invalidOperation'
	}
	
	beforeEach(() => {
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
			assert(store.getState() == 0);
		});


		it('should return a new state after a mutation', () => {
			store.dispatch(increment_action);
			assert(store.getState() == 1);
		});
	});

	describe('#dispatch()', () => {
		it('should transform the state given an action', () => {
			store.dispatch(increment_action);
			assert(store.getState() == 1);
		})

		it('should transform the state given a different action', () => {
			store.dispatch(decrement_action);
			assert(store.getState() == -1);
		})

		it('should not change when there is an invalid action', () => {
			store.dispatch(invalid_action);
			assert(store.getState() == 0);
		})

	})

	describe('#subscribe()', () => {
		it('should subscribe a function to the store', () => {
			let testBool = false;
			let boolChange = () => testBool = true;

			store.subscribe(boolChange);
			store.dispatch(invalid_action);

			assert(testBool);
		})

		it('should remove a subscribed function when called again', () => {
			let testBool = true;
			let boolChange = () => testBool = false;

			store.subscribe(boolChange);
			store.subscribe(boolChange)();
			store.dispatch(invalid_action);

			assert(testBool);

		})
	})


})







