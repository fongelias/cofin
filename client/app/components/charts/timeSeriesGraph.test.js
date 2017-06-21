import assert from 'assert';


import timeSeriesGraph from './timeSeriesGraph';


describe('A d3 line graph', () => {

	const props = {
		height: 100,
		width: 200,
	}
	let graph;



	beforeEach(()=> {
		graph = new timeSeriesGraph();
	});




	describe('#translateString()', () => {
		it('should take an x and y input and insert it to a string CSS property', () => {
			assert(graph.translateString(0,0) == 'translate(0,0)');
		})
	})

	describe('#combineEntries()', () => {
		it('should take an object and combine the entries into an array', () => {
			const testObject = {
				tickerA: [[1,2]],
				tickerB: [[3,4]],
			}
			const result = graph.combineEntries(testObject);
			console.log(result);
			const expectedResult = [[1,2],[3,4]];
			const arraysDeepEqual = (arr1, arr2) => {
				if(arr1.length !== arr2.length) {
					return false;
				}

				arr1.forEach((val, i) => {
					if (Array.isArray(val) && Array.isArray(arr2[i])) {
						if (!arraysDeepEqual(val, arr2[i])) {
							return false;
						}
					} else if (val !== arr2[i]) {
						return false;
					}
				})

				return true;
			}

			assert(arraysDeepEqual(result, expectedResult));
		})
	})


	describe('#scale()', () => {
		//Test Data
		const scaleDataSet = {
			series: {
				tickerA: [
					["2011-12-31", 0],
					["2012-01-10", 10], //10 days
				],
			},
		}
			
		const testPoint = ["2012-01-05", 5];

		//Tests
		it('should return a scale function as a property for X', () => {
			const testDate = new Date(testPoint[0]);
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

})






