import React, { Component } from 'react';


export default class TestChild extends Component {
	render() {
		console.log(this.context.store.data);
		return (
			<div>{this.context.store.data}</div>
		)
	}

}

TestChild.contextTypes = {
	store: React.PropTypes.object
};
