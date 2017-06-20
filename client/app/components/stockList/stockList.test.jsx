import React from 'react';
import assert from 'assert';
import { mount, shallow, render } from 'enzyme';
import { deleteSeries } from '../../redux';

import StockList from './stockList';


describe('A StockList component', () => {

	//Test stores and states
	let testState = {
		series: {
			tickerA: [],
			tickerB: [],
		},
	};
	let mockStore = {
		nextAction: null,
		listeners: [],
		getState: () => testState,
	};
	//Declared outside to use 'this'
	mockStore.dispatch = function(action) { this.nextAction = action };
	mockStore.subscribe = function(callback) { this.listeners.push(callback) };;

	//Test DOM objects
	const testStockList = <StockList store={mockStore}/>;


	//Reset mockStore
	afterEach(()=> {
		mockStore.listeners = [];
		mockStore.nextAction = null;
	})
	

	//Tests
	it('should render a list of stocks based on a passed store', () => {
		assert(render(testStockList).find('.list-item-container').length === 2);
	})

	it('should add the names of tickers in span elements', () => {
		const testSpans = render(testStockList).find('.list-item-container span');
		const renderedTickers = [
			testSpans.first().text(),
			testSpans.last().text(),
		]
		const stateTickers = Object.keys(testState.series);
		const equals = (arr1, arr2) => {
			return arr1.map((val, i)=>{
				return val == arr2[i];
			}).reduce((prev, curr) => prev && curr);
		}

		assert(equals(renderedTickers, stateTickers));
	})


	it('should dispatch an action for deleting a stock from the passed store', () => {
		const mountedStockList = mount(testStockList);
		mountedStockList.find('button').first().simulate('click');

		assert.deepEqual(mockStore.nextAction, deleteSeries(Object.keys(testState.series)[0]));
	})


	it('should subscribe an update function to the passed store', () => {
		const mountedStockList = mount(testStockList);
		
		assert(typeof mockStore.listeners[0] == 'function');
	})
})






