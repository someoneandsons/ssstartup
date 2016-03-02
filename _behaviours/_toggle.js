jQuery(document).ready(function($) {
	$('body').on('click', '[data-behaviour~="toggle"]', function(e) {
		var $this = $(this),
		$targets = $this.data('target').split(','),
		$classes = ($this.data('class'))? $this.data('class').split(','): 'active';
		
		$.each($targets, function($t, $target) {
			$($target).toggleClass(((typeof $classes != 'string')? $classes[$t]: $classes));
		});
		
		if($this.is('a')) {
			e.preventDefault();
		}
	});
});