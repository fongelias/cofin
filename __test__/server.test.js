import assert from 'assert';
import request from 'supertest';


import { server } from '../server';


describe('Express routes from server level', () => {

	afterAll(() => {
		server.close();
	})

	describe('/api/stocks/', () => {
		describe('GET .../:ticker', () => {
			it('should return a 200 status', () => {
				return request(server).get('/api/stocks/FB').expect(200);
			})
		})
	})

	describe('nonexistent url', () => {
		it('should return a 404 status', () => {
			return request(server).get('/api/').expect(404);
		})
	})
})





