import { ADD_SERIES } from '../types';


const addSeries = (ticker, data) => {
	return {
		type: ADD_SERIES,
		ticker,
		data,
	}
}


export const addSeriesCourier = (ticker, dispatcher) => {
	fetch('api/stocks/' + ticker, {
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
		}
	}).then((response) => response.json())
	.then((json) => {
		dispatcher(addSeries(ticker, json.datatable.data));
	}).catch((error) => {
		//Show error in UI
		console.log(error);
	})
}