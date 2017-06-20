import React, { Component } from 'react';
import { deleteSeries } from '../../redux';


export default class StockList extends Component {
	componentDidMount() {
		this.props.store.subscribe(() => this.forceUpdate());
	}
	
	render() {
		let store = this.props.store;

		return(
			<div className="stock-list">
				{
					Object.keys(store.getState().series).map((ticker) => {
						return (
							<div className="list-item-container" key={ticker}>
								<button onClick={() => {store.dispatch(deleteSeries(ticker))}}>x</button>
								<span>{ticker}</span>
							</div>
						)
					})
				}
			</div>
		)
	}
}