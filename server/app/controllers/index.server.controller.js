exports.renderIndex = function(req, res) {
	res.render('pages/index', {
		state: {
			tickers: ['FB'],
			prices: {
				'FB':[],
			}
		},
	})
}