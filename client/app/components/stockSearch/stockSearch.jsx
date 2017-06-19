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
			<div>
				<input ref="stocksearch" type="text" onKeyPress={this.handleSubmit}/>
			</div>
		)
	}
}