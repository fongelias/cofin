import * as d3 from 'd3';




export default class timeSeriesGraph {
	create(element, props, state) {
		let svg = d3.select(element).append('svg')
			.attr('class', '.timeSeriesGraph')
			.attr('width', props.width)
			.attr('height', props.height);


		let axisGroup = svg.append('g')
			.attr('class', 'axis-group');
		axisGroup.append('g')
			.attr('class', 'x-axis');
		axisGroup.append('g')
			.attr('class', 'y-axis');


		let lineGroup = svg.append('g')
			.attr('class', 'line-group');

		this.update(svg, props, state);
	}


	update(element, props, state) {
		//Scale
		let scale = scale(props, state);
		//Data
		drawAxes(element, scale);
		drawLine(element, scale, state);
	}


	scale(props, state) {
		let domain_y = d3.extent(state, (d) => d[1]);
		let domain_x = d3.extent(state, (d) => new Date(Date.parse(d[0])));

		let y = d3.scaleLinear()
			.domain(domain_y)
			.range([props.height, 0]);
		let x = d3.scaleTime()
			.domain(domain_x)
			.range([0, props.width]);

		return {
			y,
			x,
		}
	}


	drawAxes(element, scale) {
		let axis_x = d3.axisBottom(scale.x).ticks().tickFormat('%m-%d');
		let axis_y = d3.axisleft(scale.y);

		element.select('axis-group').select('.x-axis')
			.duration(750)
			.call(axis_x);
		element.select('axis-group').select('.y-axis')
			.duration(750)
			.call(axis_y);
	}


	drawLine(element, scale, state) {
		let line = d3.line()
			.x(d => scale.x(new Date(Date.parse(d[0]))))
			.y(d => scale.y(d[1]));

		element.select('line-group').selectAll('path')
			.datum(state)
			.transition()
			.duration(750)
			.attr('d', line);
	}


	destroy(element) {

	}
}








