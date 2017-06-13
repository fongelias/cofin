import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, store, actions } from './redux';
import { CofinStocks } from './components/containers/cofinStocks.jsx';

//Figure out app Structure
//Figure out redux module structure
//d3 redux

ReactDOM.render(
	<Provider store={store}>
		<CofinStocks />
	</Provider>,
	document.getElementById("root")
)