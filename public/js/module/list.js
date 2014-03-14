(function(window) {

	var showMore = function(hash) {
		if (hash === '#A') {
			$('.ux-showmore').show();
		} else if (hash === '#B') {
			$('.ux-showmore').hide();

			// auto paging
			var isLoading = false;
			var baseMediaListH = $('.media-list').outerHeight(true);
			var top = $('.navbar').outerHeight(true) + $('.page-header').outerHeight(true) + $('.btn-group').outerHeight(true) + $('.ux-like').outerHeight(true);
			var $spinner = $('<img>').attr('src', './img/spinner.gif').css({ display: 'block', margin: '0 auto' });
			var autoPage = function() {
				if (isLoading) { return; }
				if (document.body.scrollTop > top) {
					isLoading = true;
					top += baseMediaListH;

					$('.ux-showmore').before($spinner);

					setTimeout(function() {
						var media1 = $($('.media')[0]).clone();
						var media2 = $($('.media')[0]).clone();
						var media3 = $($('.media')[0]).clone();
						var media4 = $($('.media')[0]).clone();
						var media5 = $($('.media')[0]).clone();

						$('.media-list')
						.prepend(media1)
						.prepend(media2)
						.prepend(media3)
						.prepend(media4)
						.prepend(media5);

						$spinner.remove();

						isLoading = false;
					}, 2000);
				}
			}
			$(window).bind('scroll', autoPage);
			$(window).one('hashchange', function() {
				$(window).off('scroll', autoPage);
			});
		}
	};
	var toggleActive = function(hash) {
		// clear active class
		$('.ux-list .btn-group-justified .btn').each(function() {
			$(this).removeClass('active');
		});
		$('.ux-list .btn-group-justified').find('[href=' + hash + ']').addClass('active');
	};

	var hash = location.hash;
	if (hash) {
		$('.ux-list .media-list').show();
		$('.ux-like').show();
		toggleActive(hash);
		showMore(hash);
	}

	/**
	 * Button Events
	 */

	$('.ux-showmore').click(function() {
		var media1 = $($('.media')[0]).clone();
		var media2 = $($('.media')[0]).clone();
		var media3 = $($('.media')[0]).clone();
		var media4 = $($('.media')[0]).clone();
		var media5 = $($('.media')[0]).clone();

		$(this)
		.before(media1)
		.before(media2)
		.before(media3)
		.before(media4)
		.before(media5);
	});

	$(window).bind('hashchange', function(e) {
		var hash = location.hash;
		$('.ux-list .media-list').show();
		$('.ux-like').show();
		toggleActive(hash);
		showMore(hash);
	});

	$('.ux-list .ux-like').click(function() {
		var name = localStorage.getItem('name');
		var list = location.hash.charAt(1);
		$.ajax({
			type: 'POST',
			url: '/api/data',
			data: {
				name: name,
				list: list
			}
		});
	});

})(window);
