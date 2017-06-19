import React, { Component } from 'react';
import timeSeriesGraph from '../charts/timeSeriesGraph';


export default class StockGraph extends Component {
	constructor(props) {
		super(props);

		this.timeSeries = new timeSeriesGraph();
	}

	componentDidMount() {
		let element = this.refs.stockgraph;

		//Subscribe to store
		this.props.store.subscribe(() => {
			this.timeSeries.update(element, this.props.store.getState());
		});

		//Draw Graph
		this.timeSeries.create(element, this.props.store.getState());
		
	}

	componentDidUpdate() {
		this.timeSeries.update(element, this.props.store.getState());
	}

	render() {
		return(
			<div ref="stockgraph" className="stock-graph"></div>
		)
	}
}


