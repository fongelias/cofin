import assert from 'assert';

import { addSeriesCourier } from './addSeriesCourier';
import { ADD_SERIES } from '../types';



describe('A courier for the add series action', () => {

	global.fetch = jest.fn().mockImplementation(() => Promise.resolve(mockResponse(200, null, testResponseJson)));

	const mockResponse = (status, statusText, json) => {
		return {
			status,
			statusText,
			json,
		}
	}

	let testJsonObj = {
		ticker: 'placeholder',
		datatable: { data: [["date", 100]] },
	}

	let testResponseJson = () => Promise.resolve(testJsonObj);




	//Tests
	it('should dispatch an ADD_SERIES action with a passed dispatcher', () => {
		let testDispatcher = value => assert(value.type == ADD_SERIES);

		addSeriesCourier('', testDispatcher);
	})

	it('should pass a specified ticker into the dispatched action', () => {
		const ticker = 'FB';
		let testDispatcher = value => assert(value.ticker == ticker);

		addSeriesCourier('FB', testDispatcher);
	})

	it('should pass data from the api call to the dispatched action', () => {
		let testDispatcher = value => assert(Array.isArray(value.data));

		addSeriesCourier('FB', testDispatcher);
	})
})






