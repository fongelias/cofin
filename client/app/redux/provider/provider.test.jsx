import React, { Component } from 'react';
import { shallow, render } from 'enzyme';
import assert from 'assert';

import TestChild from './testChild';
import { Provider } from './provider';


describe('A Provider Component', () => {

	const store = { data: "test string" };

	it('should render its children', () => {
		const testProvider = <Provider><div/></Provider>;
		assert(shallow(testProvider).contains(<div/>));
	})

	it('its context should be available to its children', () => {
		const testProviderwithProps = <Provider store={store}><TestChild/></Provider>;
		assert(render(testProviderwithProps).text() == store.data);
	})


})






