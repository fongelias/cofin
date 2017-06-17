import * as TYPES from '../../actions/types';



export default function series(state = {}, action = {}) {

	let newState;

	switch(action.type) {
		case TYPES.ADD_SERIES:
			newState = Object.assign({}, state);
			newState[action.ticker] = action.data;

			return newState;

		case TYPES.DEL_SERIES:
			newState = Object.assign({}, state);
			delete newState[action.ticker];

			return newState;


		default:
			return Object.assign({}, state)
	}
}