import assert from 'assert';
import request from 'supertest';


import * as quandlService from './quandl.server.service';

jasmine.getEnv().defaultTimeoutInterval = 15000;


describe('A service for Quandl API', () => {
	describe('#getStockData()', () => {
		it('should return a promise with stock data and the passed ticker', (done) => {
			const testTicker = 'GOOGL'
			return quandlService.getStockData(testTicker).then(res => {
				const tickerCorrect = testTicker == res.ticker;
				const dataIncluded = res.datatable.data.length > 0;
				assert(tickerCorrect && dataIncluded);
				done();
			})
		})

		it('should return a promise with stock data and the default ticker when no ticker is specified', (done) => {
			const defaultTicker = 'AAPL'
			return quandlService.getStockData().then(res => {
				const tickerCorrect = defaultTicker == res.ticker;
				const dataIncluded = res.datatable.data.length > 0;
				assert(tickerCorrect && dataIncluded);
				done();
			})
		})
	})
})