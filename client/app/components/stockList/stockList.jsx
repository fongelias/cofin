import React, { Component } from 'react';
import { deleteSeries } from '../../redux';


export default class StockList extends Component {
	componentDidMount() {
		this.props.store.subscribe(() => this.forceUpdate());
	}
	
	render() {
		let store = this.props.store;
		console.log(this.props.store.getState());
		return(
			<div className="stock-list">
				{
					Object.keys(store.getState().series).map((ticker) => {
						return (
							<div key={ticker}>
								<span>{ticker}</span>
								<button onClick={() => {store.dispatch(deleteSeries(ticker))}}>x</button>
							</div>
						)
					})
				}
			</div>
		)
	}
}