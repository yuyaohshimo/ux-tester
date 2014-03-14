(function(window) {
	$(document).ready(function() {
		// input name
		var name = localStorage.getItem('name');
		var $modal = $('#myModal');
		var $send = $('.ux-name-send');
		var $form = $('.ux-name-form');
		if (!name) {
			$modal.modal();
			$form.bind('input', function() {
				if ($(this).val().length) {
					$send.attr('disabled', null);
				} else {
					$send.attr('disabled', 'disabled');
				}
			});
			$send.click(function() {
				var name = $form.val();
				localStorage.setItem('name', name);
				$modal.modal('hide');
			});
		}
	});

})();
