(function( $ ) {
	var
	defaults = {
		width: 300,
		height: 300,
		title: false
	},
	prefix = 'time_';
	
	$.fn.timepicker = function () {
		$this = $(this);
		jQuery('<div/>', {
			id: prefix+'modal',
			text: 'Pick a Time!'
		}).appendTo($this);
	}
})( jQuery );