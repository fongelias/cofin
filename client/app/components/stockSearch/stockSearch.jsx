import React, { Component } from 'react';
import { addSeriesCourier } from '../../redux';

export default class StockSearch extends Component {
	constructor(props) {
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		if (e.key === 'Enter') {
			addSeriesCourier(this.refs.stocksearch.value.toUpperCase(), this.props.store.dispatch);
		}
	}

	render() {
		let store = this.props.store;

		return (
			<div className="stock-search">
				<input ref="stocksearch" type="text" placeholder="Add a ticker" onKeyPress={this.handleSubmit}/>
				<label>Press Enter to add the ticker</label>
			</div>
		)
	}
}