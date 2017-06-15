import * as TYPES from '../../actions/types';



export default function series(state = {}, action = {}) {

	let newState;

	switch(action.type) {
		case TYPES.ADD_SERIES:
			newState = Object.assign({}, state);
			newState.series[action.ticker] = action.data;

			return newState;

		case TYPES.DEL_SERIES:
			newState = Object.assign({}, state);
			delete newState.series[action.ticker];

			return newState;


		default:
			return Object.assign({}, state, {
				series: state.series || {},
			})
	}
}