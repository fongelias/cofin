import * as d3 from 'd3';




export default class timeSeriesGraph {
	create(element, state, propOverwrite) {
		this.props = this.propDefaults(propOverwrite);

		let svg = d3.select(element).append('svg')
			.attr('class', 'timeSeriesGraph')
			.attr('width', this.props.width + this.props.padding * 2 + this.props.yAxisWidth)
			.attr('height', this.props.height + this.props.padding * 2 + this.props.xAxisHeight);


		let axisGroup = svg.append('g')
			.attr('class', 'axis-group');
		axisGroup.append('g')
			.attr('height', this.props.xAxisHeight)
			.attr('transform', this.translateString(this.props.padding + this.props.yAxisWidth, this.props.padding + this.props.height))
			.attr('class', 'x-axis');
		axisGroup.append('g')
			.attr('width', this.props.yAxisWidth)
			.attr('transform', this.translateString(this.props.padding + this.props.yAxisWidth, this.props.padding))
			.attr('class', 'y-axis');


		let lineGroup = svg.append('g')
			.attr('transform', this.translateString(this.props.padding + this.props.yAxisWidth, this.props.padding))
			.attr('class', 'line-group');

		this.update(svg, state.series.GOOGL);
	}

	translateString(x,y) {
		return 'translate(' + x + ',' + y + ')';
	}



	update(element, state) {
		//Scale
		let scale = this.scale(this.props, state);
		//Data
		this.drawAxes(element, scale);
		this.drawLine(element, scale, state, this.props);
	}



	destroy(element) {

	}



	propDefaults(propsOverwrite) {
		let props = propsOverwrite || {};
		let colorRange = props.colorRange || ['#7c0920','#44094d', '#03396c', '#005555', '#ffbe4f'];

		return {
			height: props.height || 150,
			width: props.width || 300,
			strokeWidth: props.strokeWidth || 1.5,
			padding: props.padding || 20,
			xAxisHeight: 21,
			yAxisWidth: 21,
			colorRange: d3.scaleOrdinal().range(colorRange),
		}
	}

	/*extent(state) {
		let max;
		let min;
		let shape = this.dimensions(state);


	}

	dimensions(arr, count = 0) {
		return Array.isArray(arr[0]) ? 
			this.dimensions(arr[0], count + 1) : 
			{count: count + 1, type: arr};
	}*/

	dateCast(d) {
		return new Date(Date.parse(d));
	}



	scale(props, state) {
		console.log(state);
		let domain_y = d3.extent(state, (d) => d[1]);
		let domain_x = d3.extent(state, (d) => this.dateCast(d[0]));

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
		let axis_x = d3.axisBottom(scale.x).ticks().tickFormat(d3.timeFormat('%-m-%-d'));
		let axis_y = d3.axisLeft(scale.y).ticks();


		element.select('.axis-group').select('.x-axis')
			.call(axis_x);
		element.select('.axis-group').select('.y-axis')
			.call(axis_y);
	}



	drawLine(element, scale, state, props) {
		let line = d3.line()
			.x(d => scale.x(this.dateCast(d[0])))
			.y(d => scale.y(d[1]));

		let lineSelector = element.select('.line-group').selectAll('path')
			.data([state]);

		let newlines = lineSelector.enter()
			.append('path')
			.attr("fill", "none")
			.attr("stroke", (d ,i) => props.colorRange(i))
			.attr("stroke-linejoin", "round")
			.attr("stroke-linecap", "round")
			.attr("stroke-width", 1.5)
			.attr('d', line)


	}


	
}








