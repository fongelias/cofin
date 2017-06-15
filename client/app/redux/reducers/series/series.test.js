import assert from 'assert';

import series from './series';


describe('A series reducer for redux state', () => {

	//Test states
	const seriesDefaultState = { series: {} };
	const seriesWithTicker = { series: { GOOGL: [] } };
	//Test actions
	const testAddSeries = {
		type: 'ADD_SERIES',
		ticker: 'GOOGL',
	}

	it('should return a default state when no arguments are supplied', () => {
		assert.deepEqual(series(), seriesDefaultState );
	})

	it('should add an empty series attribute if it is missing from the supplied state', () => {
		assert.deepEqual(series({}), seriesDefaultState);
	})

	it('should return an unchanged state when no arguments are supplied', () => {
		assert.deepEqual(series(seriesDefaultState), seriesDefaultState);
	})

	it('should return a new state based on a passed action', () => {
		assert.deepEqual(series(seriesDefaultState, testAddSeries), seriesWithTicker);
	})

	it('should return a new object', () => {
		assert(series({}) !== {});
	})
})