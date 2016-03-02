jQuery(document).ready(function($) {
	$('body').on('click', '[data-behaviour~="autocomplete-options"] a', function(e) {
		var $this = $(this),
		$val = $this.data('value'),
		$text = $this.text(),
		$target = $($this.data('target')),
		$source = $this.parents('[data-behaviour~="autocomplete-options"]');
		
		if($val != '') {
			$target.val($val);
			$($source.data('target')).val($text);
			$source.html('');
			e.preventDefault();
		}
	}).on('click', '[data-behaviour~="autocomplete-options"] a', function(e) {
		var $this = $(this),
		$val = $this.data('value'),
		$text = $this.text(),
		$target = $($this.data('target')),
		$source = $this.parents('[data-behaviour~="autocomplete-options"]');
		
		if($val != '') {
			$target.val($val);
			$($source.data('target')).val($text);
			$source.html('');
			e.preventDefault();
		}
	}).on('input propertychange paste', '[data-behaviour~="autocomplete"]', function(e) {
		var $this = $(this),
		$val = $this.val(),
		$target = $($this.data('target')),
		$options = $($this.data('options'));
		
		if($val != '') {
			var $optionsHTML = '';
			$target.val('').children('option[value!=""]').filter(function() {
				return $(this).text().toLowerCase().indexOf($val.toLowerCase()) >= 0;
			}).each(function() {
				$optionsHTML += '<li><a href="#" data-value="'+$(this).val()+'" data-target="'+$this.data('target')+'" class="button">'+$(this).text()+'</a></li>';
			});
			$options.html($optionsHTML).show();
		} else {
			$options.html('').hide();
		}
	});
});