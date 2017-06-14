import React, { Component } from 'react';
import assert from 'assert';



import tickers from 'tickers';


describe('A ticker reducer for redux state', () => {

	const testStateNoSeries = { tickers: [] };
	const testStateEmpty = { tickers: [], series: {} };
	const testStateFilled = { 
		tickers: ['FB'], 
		series: { 
			FB: [
				["2012-05-01"],
			]
		}
	};
	const testStateGoogle = {
		tickers: ['GOOGL'],
		series: {},
	};



	const testAddGoogleAction = {
		type: 'ADD_TICKER',
		ticker: 'GOOGL',
	}
	const testDeleteFBAction = {
		type: 'DEL_TICKER',
		ticker: 'FB',
	}
	const testInvalidAction = {
		type: 'INVALID_ACTION',
	}



	it('should return a default state when one is not specified', () => {
		assert(tickers() == testStateNoSeries);
	})

	it('should return an unaltered state when no actions are specified', () => {
		assert(tickers(testStateEmpty) == testStateEmpty);
		assert(tickers(testStateFilled) == testStateFilled);
	})

	it('should not change when passed an invalid action', () => {
		assert(tickers(testStateFilled, testInvalidAction) == testStateFilled);
	})

	it('should return an altered state when an action is specified', () => {
		//Do this for each action
		assert(tickers(testStateEmpty, testAddGoogleAction) == testStateGoogle);
		assert(tickers(testStateFilled, testDeleteFBAction) == testStateFilled);
	})
})