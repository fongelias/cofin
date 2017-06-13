import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class TestChild extends Component {
	render() {
		//console.log(this.context.store.data);
		return (
			<div>{this.context.store.data}</div>
		)
	}

}

TestChild.contextTypes = {
	store: PropTypes.object,
};
