jQuery(document).ready(function($) {
	$('body').on('click', '[data-behaviour~="ajax"]', function(e) {
		var $this = $(this),
		$target = $($this.data('target')),
		$href = $this.attr('href');
		
		$target.html('').load($href);
		e.preventDefault();
	});
});