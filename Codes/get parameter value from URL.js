$.urlParam = function(name){
	var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
	if (results==null) {
		return null;
	}
	return decodeURI(results[1]) || 0;
}
var fn = $.urlParam('pform'); // Where pfrom is parameter
