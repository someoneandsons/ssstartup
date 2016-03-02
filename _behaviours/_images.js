jQuery(document).ready(function($) {
	$('body').on('click', '[data-behaviour~="images"] a', function(e) {
		var $this = $(this),
		$parent = $this.parents('[data-behaviour~="images"]'),
		$current = $('.current', $parent),
		$direction = $this.data('direction'),
		$upcoming = ($direction == 'previous')? ($current.prev('.image').size()? $current.prev('.image'): $('.image:last', $parent)): ($current.next('.image').size()? $current.next('.image'): $('.image:first', $parent));
		
		$upcoming.add($current).toggleClass('current');
		
		e.preventDefault();
	});
});