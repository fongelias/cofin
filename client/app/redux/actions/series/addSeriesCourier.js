import { ADD_SERIES } from '../types';


const addSeries = (ticker, data) => {
	return {
		type: ADD_SERIES,
		ticker,
		data,
	}
}

export default (ticker, dispatcher) => {
	fetch('api/stocks/' + ticker, {
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
		}
	}).then((response) => response.json())
	.then((json) => {
		console.log(json);
		dispatcher(addSeries(ticker, json));
	})
}