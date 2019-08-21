//
// Touch screen detection function
//
function is_touch_device() 
{
	var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
	var mq = function(query) {
		return window.matchMedia(query).matches;
	}
	if( ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch ) {
		return true;
	}
	var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
	return mq(query);
}