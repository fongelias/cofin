import React, { Component } from 'react';
import StockGraph from '../stockGraph/stockGraph.jsx';
import StockList from '../stockList/stockList.jsx';
import StockSearch from '../stockSearch/stockSearch.jsx';
import PropTypes from 'prop-types';



export default class CofinStocks extends Component {
	render() {
		return(
			<div className="cofinStocks">
				<StockGraph store={this.context.store}/>
				<StockSearch store={this.context.store}/> 
				<StockList store={this.context.store}/>
			</div>
		)
	}
}

CofinStocks.contextTypes = {
	store: PropTypes.object,
};