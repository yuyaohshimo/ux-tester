(function(window) {
	$.ajax({
		type: 'GET',
		url: '/api/all'
	})
	.done(function(data) {
		// Button
		var buttonData = _.groupBy(data, function(item) {
			return item.button;
		});

		if (!buttonData.A) { buttonData.A = []; }
		if (!buttonData.B) { buttonData.B = []; }
		if (!buttonData.C) { buttonData.C = []; }

		$('.ux-sum-button-a .num').text(buttonData.A.length);
		$('.ux-sum-button-b .num').text(buttonData.B.length);
		$('.ux-sum-button-c .num').text(buttonData.C.length);

		var btnData = [
			{
				value: buttonData.A.length,
				color: '#F38630'
			},
			{
				value: buttonData.B.length,
				color: '#E0E4CC'
			},
			{
				value: buttonData.C.length,
				color: '#69D2E7'
			}
		];

		var btnPie = new Chart($('.ux-chart .canvas1')[0].getContext('2d')).Pie(btnData);

		// List
		var listData = _.groupBy(data, function(item) {
			return item.list;
		});

		if (!listData.A) { listData.A = []; }
		if (!listData.B) { listData.B = []; }

		$('.ux-sum-label-a .num').text(listData.A.length);
		$('.ux-sum-label-b .num').text(listData.B.length);

		var listData = [
			{
				value: listData.A.length,
				color: '#F38630'
			},
			{
				value: listData.B.length,
				color: '#E0E4CC'
			}
		];

		var listPie = new Chart($('.ux-chart .canvas2')[0].getContext('2d')).Pie(listData);

	});

})(window)
