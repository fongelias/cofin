import React, { Component } from 'react';
import timeSeriesGraph from '../charts/timeSeriesGraph';
import PropTypes from 'prop-types';

export default class StockGraph extends Component {
	constructor(props) {
		super(props);

		this.timeSeries = new timeSeriesGraph();
	}

	componentDidMount() {
		//Subscribe to store
		this.context.store.subscribe(this.render());

		//Draw Graph
		let element = this.refs.stockgraph;

		/*const dataSet1 = [
			["2012-05-18", 42.05],
			["2012-05-21", 36.53],
			["2012-05-22", 32.61],
		]*/

		this.timeSeries.create(element, this.context.store.getState());
		
	}

	componentDidUpdate() {

	}

	componentWillUnmount() {

	}

	render() {
		return(
			<div ref="stockgraph" className="stock-graph"></div>
		)
	}
}

StockGraph.contextTypes = {
	store: PropTypes.object,
};

