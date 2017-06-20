import assert from 'assert';

import series from './series';
import * as TYPES from '../../actions/types';


describe('A series reducer for redux state', () => {

	//Test states
	const seriesDefaultState = {};
	const seriesWithTicker = { GOOGL: [] };
	//Test actions
	const testAddSeries = {
		type: TYPES.ADD_SERIES,
		ticker: 'GOOGL',
		data: [],
	}
	const testDelSeries = {
		type: TYPES.DEL_SERIES,
		ticker: 'GOOGL',
	}
	const testInvalidAction = {
		type: 'INVALID_ACTION',
	}

	it('should return a default state when no arguments are supplied', () => {
		assert.deepEqual(series(), seriesDefaultState );
	})

	it('should add an empty series attribute if it is missing from the supplied state', () => {
		assert.deepEqual(series({}), seriesDefaultState);
	})

	it('should return an unchanged state when no actions are supplied', () => {
		assert.deepEqual(series(seriesDefaultState), seriesDefaultState);
	})

	it('should return an unchanged state when an invalid action is supplied', () => {
		assert.deepEqual(series(seriesDefaultState, testInvalidAction), seriesDefaultState);
	})

	it('should return a new state based on a ADD_SERIES action', () => {
		assert.deepEqual(series(seriesDefaultState, testAddSeries), seriesWithTicker);
	})

	it('should return a new state based on a DEL_SERIES action', () => {
		assert.deepEqual(series(seriesDefaultState, testDelSeries), seriesDefaultState);
	})

	it('should return a new object', () => {
		assert(series({}) !== {});
	})
})