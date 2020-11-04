// BEGIN: Underline Active Menu

$(document).ready(function(){
$('.sub-menu-ul').each(function(){ // For Menu without sub-menus
if($(this).css('display') == 'none') {
$(this).addClass('NONEUL');
}
});
$('.sub-menu-ul.NONEUL').siblings('a.menubodyhorizontal').addClass('BlankSibling');
$('a.BlankSibling').each(function(){
var myParameters = new Array();
myParameters = ReadSParameters();
var smenu = myParameters["smenu"];
if (this.href.indexOf('index' + smenu) != -1) {
$(this).css('text-decoration','underline');
}
});
$('a.submenubodyhorizontal').each(function(){ // For Menu with sub-menus
var myParameters = new Array();
myParameters = ReadSParameters();
var smenu = myParameters["smenu"];
if (this.href.indexOf('index' + smenu) != -1) {
$(this).parent('li.submenubodyhorizontal').addClass('ActiveLI');
$('.ActiveLI').parent('.sub-menu-ul').addClass('ActiveUL');
$('.ActiveUL').siblings('a.menubodyhorizontal').css('text-decoration','underline');
}
});
});

// END: Underline Active Menu
