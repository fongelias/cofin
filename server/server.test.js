import assert from 'assert';
import request from 'supertest';


import { server } from '../server';

jasmine.getEnv().defaultTimeoutInterval = 15000;


describe('Express routes from server level', () => {

	afterAll(() => {
		server.close();
	})

	describe('/api/stocks/', () => {
		describe('GET .../:ticker', () => {
			it('should return a 200 status', (done) => {
				return request(server)
					.get('/api/stocks/FB')
					.expect(200, done());
			})

			it('should return a json object with the passed ticker and relevant data', (done) => {
				return request(server).get('/api/stocks/FB').then(res => {
					const tickerIsCorrect = res.body.ticker == 'FB';
					const dataIsPresent = res.body.datatable.data.length > 0;
					assert(tickerIsCorrect && dataIsPresent);
					done();
				});
			})

			it('should return a json object with the passed ticker and no data when the ticker is incorrect', (done) => {
				return request(server).get('/api/stocks/TEST').then(res => {
					const tickerIsCorrect = res.body.ticker == 'TEST';
					const dataIsEmpty = res.body.datatable.data.length == 0;
					assert(tickerIsCorrect && dataIsEmpty);
					done();
				})
			})
		})
	})

	describe('nonexistent url', () => {
		it('should return a 404 status', () => {
			return request(server).get('/api/').expect(404);
		})
	})
})





