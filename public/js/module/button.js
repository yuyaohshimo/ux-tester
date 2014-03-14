(function(window) {
	var hash = location.hash;
	var toggleActive = function(hash) {
		// clear active class
		$('.ux-btn .btn-group-justified .btn').each(function() {
			$(this).removeClass('active');
		});
		$('.ux-btn .btn-group-justified').find('[href=' + hash + ']').addClass('active');
	};

	if (!hash) {
		$(window).one('hashchange', function(e) {
			$('.ux-btn-primary').css('display', 'block');
			$('.ux-like').css('display', 'block');
		});
	} else {
		toggleActive(hash);
		$('.ux-btn-primary')
		.css('display', 'block')
		.attr('data-type', hash);
		$('.ux-like').css('display', 'block');
	}

	$(window).bind('hashchange', function(e) {
		var hash = location.hash;
		toggleActive(hash);
		$('.ux-btn-primary').attr('data-type', hash);
		$('.ux-tap-text').remove();
	});

	// Button events
	$('.ux-btn-primary')
	.bind('touchstart', function() {
		$(this).addClass('tap');
	})
	.bind('touchend', function() {
		$(this).removeClass('tap');
		$('.ux-like').before($('<h6>').addClass('ux-tap-text').text('tap'));
	});

	$('.ux-btn .ux-like').click(function() {
		var name = localStorage.getItem('name');
		var button = location.hash.charAt(1);
		$.ajax({
			type: 'POST',
			url: '/api/data',
			data: {
				name: name,
				button: button
			}
		});
	});

})(window);
