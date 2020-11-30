// BEGIN: Read Cookie

$(document).ready(function () {
setInterval(function(){
if (readCookie('loginStatus') != 'Yes') {
$('.login-link').css('display', 'inline');
$('.logout-link').css('display', 'none');
} 
else {
$('.login-link').css('display', 'none');
$('.logout-link').css('display', 'inline');
}
}, 10); 
});

// END: Read Cookie


// BEGIN: target form

$(document).ready(function(){
if (window.location.href.indexOf("/target_form") > -1) { 
$('#col1, #col2').hide();
}
});

// END: target form


// BEGIN: Menu

$(document).ready(function(){
if($(document).width() > 768){
var mh = $('.menu_content').outerHeight(true);
var lh = $('.logo_ad').offset().top + $('.logo_ad').outerHeight(true);
$(document).scroll(function(){
if($(document).scrollTop() > lh){
$('.mainbody').css('padding-top', mh);
$('.menu_content').addClass('menu_sticky');
}
else {
$('.mainbody').css('padding-top',0);
$('.menu_content').removeClass('menu_sticky');
}
});
}

if($(document).width() < 769){ // Mobile Menu
$('.mmenu').toggle(function(){
$('.icon-menu-bars').addClass('openm');
$('.column6').slideDown(400);
}, function(){
$('.icon-menu-bars').removeClass('openm');
$('.column6').slideUp(200);
});
$('a.menubodyhorizontal').each(function(){
if($(this).attr('href') == '#'){
$(this).toggle(function () {
$(this).siblings('.submenu_div').slideDown(300);
}, function () {
$(this).siblings('.submenu_div').slideUp(200);
});
}
});
}
});

$(window).bind('load',function(){
$('div.menubodyhorizontal').each(function () {
if (!$(this).children('.submenu_div').is(':empty'))
$(this).children('a').children('i').css('display','inline');
else {
$(this).children('a.menubodyhorizontal').off();
}
});
$('a.menubodyhorizontal').siblings('i').css('display','none');
});

$(window).bind('load',function(){
$('.submenu_div').each(function () {
if ($(this).children('.submenubodyhorizontal').length == 0)
$(this).remove();
});
});

// END: Menu


// BEGIN: Load More

(function($) {
$.fn.uncomment = function(recurse) {
$(this).contents().each(function() {
if ( recurse && this.hasChildNodes() ) {
$(this).uncomment(recurse);
} else if ( this.nodeType == 8 ) {
var e = $('<span>' + this.nodeValue + '</span>');
$(this).replaceWith(e.contents());
}
});
};
})(jQuery);


$(document).ready(function () {
$('.load_more').click(function(){


if($('.uncomment1').css('display') == 'block' && $('.uncomment2').css('display') == 'none'){ // Load more articles on click
$('.uncomment2').css('display','block');
$('.uncomment2').uncomment(true);
}
else if($('.uncomment2').css('display') == 'block' && $('.uncomment3').css('display') == 'none'){
$('.uncomment3').css('display','block');
$('.uncomment3').uncomment(true);
}
else if($('.uncomment3').css('display') == 'block' && $('.uncomment4').css('display') == 'none'){
$('.uncomment4').css('display','block');
$('.uncomment4').uncomment(true);
}
else if($('.uncomment4').css('display') == 'block' && $('.uncomment5').css('display') == 'none'){
$('.uncomment5').css('display','block');
$('.uncomment5').uncomment(true);
}
else if($('.uncomment5').css('display') == 'block' && $('.uncomment6').css('display') == 'none'){
$('.uncomment6').css('display','block');
$('.uncomment6').uncomment(true);
}
else if($('.uncomment6').css('display') == 'block' && $('.uncomment7').css('display') == 'none'){
$('.uncomment7').css('display','block');
$('.uncomment7').uncomment(true);
}
else if($('.uncomment7').css('display') == 'block' && $('.uncomment8').css('display') == 'none'){
$('.uncomment8').css('display','block');
$('.uncomment8').uncomment(true);
}
else if($('.uncomment8').css('display') == 'block' && $('.uncomment9').css('display') == 'none'){
$('.uncomment9').css('display','block');
$('.uncomment9').uncomment(true);
}
else if($('.uncomment9').css('display') == 'block' && $('.uncomment10').css('display') == 'none'){
$('.uncomment10').css('display','block');
$('.uncomment10').uncomment(true);
}

if($('.uncomment3').length) {} // Remove "Load More" if next pages not available
else{
if($('.uncomment2').css('display') == 'block') {
$('.load_more').css('display','none');
}
}
if($('.uncomment4').length) {}
else{
if($('.uncomment3').css('display') == 'block') {
$('.load_more').css('display','none');
}
}
if($('.uncomment5').length) {}
else{
if($('.uncomment4').css('display') == 'block') {
$('.load_more').css('display','none');
}
}
if($('.uncomment6').length) {}
else{
if($('.uncomment5').css('display') == 'block') {
$('.load_more').css('display','none');
}
}
if($('.uncomment7').length) {}
else{
if($('.uncomment6').css('display') == 'block') {
$('.load_more').css('display','none');
}
}
if($('.uncomment8').length) {}
else{
if($('.uncomment7').css('display') == 'block') {
$('.load_more').css('display','none');
}
}
if($('.uncomment9').length) {}
else{
if($('.uncomment8').css('display') == 'block') {
$('.load_more').css('display','none');
}
}
if($('.uncomment10').length) {}
else{
if($('.uncomment9').css('display') == 'block') {
$('.load_more').css('display','none');
}
}
});
});

// END: Load More


// BEGIN: Preview Gropu1

function GetPreviewGroup1(){document.write('<div class="preview-group"><div class="pg">{{PutPreview103}}</div><div class="pg">{{PutPreview118}}</div><div class="pg">{{PutPreview119}}</div><div class="pg">{{PutPreview117}}</div><div class="pg">{{PutPreview122}}</div><div class="pg">{{PutPreview96}}</div><div class="pg">{{PutPreview120}}</div><div class="pg">{{PutPreview95}}</div><div class="pg">{{PutPreview73}}</div></div>');}

// END: Preview Gropu1


// BEGIN: Popup

function OpenPopup4(pageUrl, window_type, fwidth, fheight){
$.magnificPopup.open({
items: [
{
src: pageUrl, // can be a HTML string, jQuery object, or CSS selector
type: window_type
}
],   
gallery: { enabled: true },
modal: true,
iframe: {markup: '<div class="popup4-article">'+'<div class="mfp-iframe-scaler" >'+'<button title="Close (Esc)" type="button" class="mfp-close">✕</button>'+'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+'</div></div>'}
});
}

function OpenPopup2(pageUrl, window_type, fwidth, fheight){
$.magnificPopup.open({
items: [
{
src: pageUrl, // can be a HTML string, jQuery object, or CSS selector
type: window_type
}
],   
gallery: { enabled: true },
modal: true,
iframe: {markup: '<div class="popup4-article">'+'<div class="mfp-iframe-scaler" >'+'<button title="Close (Esc)" type="button" class="mfp-close">✕</button>'+'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+'</div></div>'}
});
}

// END: Popup


// BEGIN: Poll

function Poll(){document.write('<div class="Poll1" id="Poll1" style="display:none;"><div id="column-label"><span>Quick Poll</span></div><script type="text/javascript" language="JavaScript">GetPoll1();<\/script></div>');DisplayHighlight('Poll1');}

// END: Poll


// BEGIN: Script scroll top 

$(window).bind('load',function () {
var offset = 600;
var duration = 300;
$(window).scroll(function () {
if (jQuery(this).scrollTop() > offset) {
jQuery('.back-to-top').slideDown(duration);
} else {
jQuery('.back-to-top').slideUp(duration);
}
});
jQuery('.back-to-top').click(function (event) {
event.preventDefault();
jQuery('html, body').animate({
scrollTop: 0
}, duration);
return false;
});
});

// END: Script scroll top


// BEGIN: Convert YouTube video in to image

$(document).ready(function() {
$('.video-body').each(function(){
var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
var match = $(this).find('img').attr('src').match(regExp);
if (match && match[2].length == 11) {
$(this).find('img').attr('src', 'https://img.youtube.com/vi/' + match[2] + '/maxresdefault.jpg' );
} else {}
});
});

// END: Convert YouTube video in to image


// BEGIN: Google Custom Search

$(document).ready(function() {
$('.gsib_a > input').attr('value', 'Type keywords and press Enter');
$('.searchIcons .fa-search').click(function(){
$('.gsib_a > input').attr('value', 'Type keywords and press Enter');
$('.searchIcons .fa-search').css('display','none');
$('.searchIcons .fa-times').css('display','inline');
$('.search_content').css('display','block');
});
$('.searchIcons .fa-times').click(function(){
$('.gsib_a > input').attr('value', 'Type keywords and press Enter');
$('.searchIcons .fa-search').css('display','inline');
$('.searchIcons .fa-times').css('display','none');
$('.search_content').css('display','none');
});
});

$(window).bind('load',function(){
$('.gsib_a > input').attr('value', 'Type keywords and press Enter');
$('.gsib_a > input').focus(function () {
if (this.value == 'Type keywords and press Enter')
this.value = '';
});
$('.gsib_a > input').blur(function () {
if (this.value === '')
this.value = 'Type keywords and press Enter';
});
});

// END: Google Custom Search


// BEGIN: Section Layout

$(document).ready(function () {

if(!$('.uncommentx').length) { $('.archive-load_more').remove();} // Remove load more when previous article per page = 0

$('.archive-load_more').click(function(){ // Click to view more archived articles
$('.uncommentx').uncomment(true);
$('.archive-load_more').remove();
});

$('.article-section-body').each(function () {
if ($(this).children('span').hasClass('pagemore')) {
$(this).next('.article-section-more').css('display', 'inline-block');
} 
else {
$(this).next('.article-section-more').css('display', 'none');
}
$('.article-section-body').css('max-height', 'none');
if ($(this).height() > 72) {
$(this).next('.article-section-more').css('display', 'inline-block');
} 
else {
if ($(this).children('span').hasClass('pagemore'))
$(this).next('.article-section-more').css('display', 'inline-block');
else
$(this).next('.article-section-more').css('display', 'none');
}
$('.article-section-body').css('max-height', '72px');
$('.article-section-image img[src^=\'/images/blank.gif\']').parents('.article-section-image').css('display', 'none');
if ($(window).width() > 768) {
$('.article-section-image img[src^=\'/images/blank.gif\']').parents('.article-section-image').siblings('.article-section-heading').css('width', '100%');
$('.article-section-image img[src^=\'/images/blank.gif\']').parents('.article-section-image').siblings('.article-section-date').css('width', '100%');
$('.article-section-image img[src^=\'/images/blank.gif\']').parents('.article-section-image').siblings('.article-section-body').css('width', '100%');
}
});
});

// END: Section Layout

// BEGIN: News ticker - count articles

$(document).ready(function () {
if($('.Breaking_News ul li').length == 1) $('.Breaking_News ul').addClass('tr1');
if($('.Breaking_News ul li').length == 2) $('.Breaking_News ul').addClass('tr2');
if($('.Breaking_News ul li').length == 3) $('.Breaking_News ul').addClass('tr3');
if($('.Breaking_News ul li').length == 4) $('.Breaking_News ul').addClass('tr4');
if($('.Breaking_News ul li').length == 5) $('.Breaking_News ul').addClass('tr5');
if($('.Breaking_News ul li').length == 6) $('.Breaking_News ul').addClass('tr6');
if($('.Breaking_News ul li').length == 7) $('.Breaking_News ul').addClass('tr7');
if($('.Breaking_News ul li').length == 8) $('.Breaking_News ul').addClass('tr8');
if($('.Breaking_News ul li').length == 9) $('.Breaking_News ul').addClass('tr9');
});

// END: News ticker - count articles
