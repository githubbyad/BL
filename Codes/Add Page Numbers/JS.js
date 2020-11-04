// BEGIN: Page number JS

$(window).bind('load',function(){
$('#H4_pages > a').click(function(){
$('html, body').animate({scrollTop: $('#Highlight4').offset().top}, 1000);
if($('.H4_1').css('display') == 'block') {
$('.H4_page1').css('background','black');
$('.H4_page2').css('background','#0099ff');
$('.H4_page3').css('background','#0099ff');
$('.H4_page4').css('background','#0099ff');
$('.H4_page5').css('background','#0099ff');
}
if($('.H4_2').css('display') == 'block') {
$('.H4_page1').css('background','#0099ff');
$('.H4_page2').css('background','black');
$('.H4_page3').css('background','#0099ff');
$('.H4_page4').css('background','#0099ff');
$('.H4_page5').css('background','#0099ff');
}
if($('.H4_3').css('display') == 'block') {
$('.H4_page1').css('background','#0099ff');
$('.H4_page2').css('background','#0099ff');
$('.H4_page3').css('background','black');
$('.H4_page4').css('background','#0099ff');
$('.H4_page5').css('background','#0099ff');
}
if($('.H4_4').css('display') == 'block') {
$('.H4_page1').css('background','#0099ff');
$('.H4_page2').css('background','#0099ff');
$('.H4_page3').css('background','#0099ff');
$('.H4_page4').css('background','black');
$('.H4_page5').css('background','#0099ff');
}
if($('.H4_5').css('display') == 'block') {
$('.H4_page1').css('background','#0099ff');
$('.H4_page2').css('background','#0099ff');
$('.H4_page3').css('background','#0099ff');
$('.H4_page4').css('background','#0099ff');
$('.H4_page5').css('background','black');
}
});
});

$(document).ready(function(){
if($('.H4_1').length > 0)
$('.H4_page1').css('display','inline-block');
else
$('.H4_page1').css('display','none');
if($('.H4_2').length > 0)
$('.H4_page2').css('display','inline-block');
else
$('.H4_page2').css('display','none');
if($('.H4_3').length > 0)
$('.H4_page3').css('display','inline-block');
else
$('.H4_page3').css('display','none');
if($('.H4_4').length > 0)
$('.H4_page4').css('display','inline-block');
else
$('.H4_page4').css('display','none');
if($('.H4_5').length > 0)
$('.H4_page5').css('display','inline-block');
else
$('.H4_page5').css('display','none');

$('.H4_1').css('display', 'block');
$('.H4_2').css('display', 'none');
$('.H4_3').css('display', 'none');
$('.H4_4').css('display', 'none');
$('.H4_5').css('display', 'none');


$('.H4_page1').click(function () {
$('.H4_1').css({'display':'block', 'visibility':'hidden'});
setTimeout(function(){$('.H4_1').css('visibility', 'visible');}, 1000);
$('.H4_3').css('display', 'none');
$('.H4_2').css('display', 'none');
$('.H4_4').css('display', 'none');
$('.H4_5').css('display', 'none');
});
$('.H4_page2').click(function () {
$('.H4_1').css('display', 'none');
$('.H4_3').css('display', 'none');
$('.H4_2').css({'display':'block', 'visibility':'hidden'});
setTimeout(function(){$('.H4_2').css('visibility', 'visible');}, 1000);
$('.H4_4').css('display', 'none');
$('.H4_5').css('display', 'none');
});
$('.H4_page3').click(function () {
$('.H4_1').css('display', 'none');
$('.H4_3').css({'display':'block', 'visibility':'hidden'});
setTimeout(function(){$('.H4_3').css('visibility', 'visible');}, 1000);
$('.H4_2').css('display', 'none');
$('.H4_4').css('display', 'none');
$('.H4_5').css('display', 'none');
});
$('.H4_page4').click(function () {
$('.H4_1').css('display', 'none');
$('.H4_3').css('display', 'none');
$('.H4_2').css('display', 'none');
$('.H4_4').css({'display':'block', 'visibility':'hidden'});
setTimeout(function(){$('.H4_4').css('visibility', 'visible');}, 1000);
$('.H4_5').css('display', 'none');
});
$('.H4_page5').click(function () {
$('.H4_1').css('display', 'none');
$('.H4_3').css('display', 'none');
$('.H4_2').css('display', 'none');
$('.H4_4').css('display', 'none');
$('.H4_5').css({'display':'block', 'visibility':'hidden'});
setTimeout(function(){$('.H4_5').css('visibility', 'visible');}, 1000);
});
});

// END: Page number JS
