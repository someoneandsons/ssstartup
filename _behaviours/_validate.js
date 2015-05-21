jQuery(document).ready(function($) {
	var _rules = {
		tel: function(input) {
			var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
			return re.test(input);
		},
		url: function(input) {
			var re = /(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/;
			return re.test(input);
		},
		email: function(input) {
			var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
			return re.test(input);
		},
		minlength: function(input, length) {
			return input.length >= length;
		},
		maxlength: function(input, length) {
			return input.length <= length;
		},
		required: function(input) {
			return input !== '';
		}
	};
	
	$('body').on('input propertychange paste change', '[data-validate],[required]', function(e) {
		var $this = $(this),
		_validate = [],
		_value = ($this.is('select'))? $('option:selected', $this).attr('value'): $this.val(),
		_required = $this.is('[required]'),
		_results = [];
		
		if(_value === undefined) {
			_value = '';
		}
		
		console.log(_value);
		
		$this.attr('data-valid', true);
		
		if($this.is('[data-validate]')) {
			_validate = $this.data('validate').split(',');
		}
		
		if(_required) {
			_validate.push('required');
		}
		
		$.each(_validate, function(_r, _rule) {
			var _params = [];
			
			if(_rule.indexOf(':') > -1) {
				_params = _rule.split(':');
				_rule = _params.shift();
			}
			
			var _test = _rules[_rule];
			
			if((_test !== undefined && typeof _test === 'function') && (_value !== '' || _required || _params.length > 0)) {
				_results.push(_test(_value, _params));
			}
		});
		
		$.each(_results, function(_r, _result) {
			$this.attr('data-valid', _result);
			return _result;
		});
	});
	
	$('[data-validate],[required]').trigger('input');
});