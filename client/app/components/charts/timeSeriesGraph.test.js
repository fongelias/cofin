import assert from 'assert';


import timeSeriesGraph from './timeSeriesGraph';


describe('A d3 line graph', () => {

	const props = {
		height: 100,
		width: 200,
	}

	const dataSet1 = [
		["2012-05-18", 42.05],
		["2012-05-21", 36.53],
		["2012-05-22", 32.61],
	]

	const dataSet2 = [
		["2012-05-18", 42.05],
		["2012-05-21", 36.53],
		["2012-05-22", 32.61],
		["2012-05-23", 35.61],
	]

	let graph;

	beforeEach(()=> {
		graph = new timeSeriesGraph();
	});

	//document.createElement('body')
	//let line = document.getElementsByTagName('body');
	//console.log(line);
	
	describe('#create()', () => {

		it('should mount the graph', () => {
			assert();
		})

		it('should represent its data', () => {
			assert();
		})
	})

	describe('#update()', () => {

		it('should add new data', () => {

		})

		it('should delete old data', () => {

		})
	})

	describe('#scale()', () => {
		//Test Data
		const scaleDataSet = [
			["2011-12-31", 0],
			["2012-01-10", 10], //10 days
		];
		const testPoint = ["2012-01-05", 5];

		//Tests
		it('should return a scale function as a property for X', () => {
			const testDate = new Date(Date.parse(testPoint[0]));
			const scaledPixel = graph.scale(props, scaleDataSet).x(testDate);
			const expectedPixel = props.width * 5 / 10;

			assert(scaledPixel == expectedPixel);
		})

		it('should return a scale function as a property for Y', () => {
			const testPrice = testPoint[1];
			const scaledPixel = graph.scale(props, scaleDataSet).y(testPrice);
			const expectedPixel = props.height * 5 / 10;

			assert(scaledPixel == expectedPixel);

		})
	})

	describe('#destroy()', () => {
		it('should destroy the existing graph', () => {

		})
	})
})