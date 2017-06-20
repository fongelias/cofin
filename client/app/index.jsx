import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, store } from './redux';
import CofinStocks from './components/containers/cofinStocks.jsx';
//Styles
require('../scss/cofin.scss');




ReactDOM.render(
	<Provider store={store}>
		<CofinStocks />
	</Provider>,
	document.getElementById("root")
)