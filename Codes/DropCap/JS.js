// BEGIN: Remove blank HTML code from Body

$(document).ready(function(){
$('.default-pagebody').each(function() {
var html = $(this).html();
var word = html .substr(0, html.indexOf(" "));
var rest = html .substr(html.indexOf(" "));
$(this).html(rest).prepend($("<span/>").addClass("a_blank"));
$('.a_blank').remove();
});
});

// END: Remove blank HTML code from Body
