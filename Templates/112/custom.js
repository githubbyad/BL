// BEGIN: SEARCH BOX Text

$(document).ready(function(){
$(window).load(function(){

$('.gsib_a > input').attr('value', 'Search');
$('.gsib_a > input').focus(function () {
  if (this.value == 'Search')
  this.value = '';
});
$('.gsib_a > input').blur(function () {
  if (this.value === '')
  this.value = 'Search';
});
});
});


// END: SEARCH BOX Text

// BEGIN: New Responsive Menu


$(window).bind('load',function() {
$('#cssmenu ul ul').css('background-color', $('.submenubodyhorizontal').css('background-color'));
$('.submenubodyhorizontal').each(function(){
if($(this).css('display') == 'none')
$(this).remove();
});
if ($(window).width() > 1024)
{
$('#cssmenu ul ul').each(function () {
if ($(this).children('li').length > 32)
$(this).addClass('columnsFive');
else if ($(this).children('li').length > 24)
$(this).addClass('columnsFour');
else if ($(this).children('li').length > 16)
$(this).addClass('columnsThree');
else if ($(this).children('li').length > 8)
$(this).addClass('columnsTwo');
});
}
});
(function($) {

  $.fn.menumaker = function(options) {
      
      var cssmenu = $(this), settings = $.extend({
        title: "Menu",
        format: "dropdown",
        sticky: false
      }, options);

      return this.each(function() {
        cssmenu.prepend('<div id="menu-button">' + 'MENU' + '</div>');
        $(this).find("#menu-button").on('click', function(){
          $(this).toggleClass('menu-opened');
          var mainmenu = $(this).next('ul');
          if (mainmenu.hasClass('open')) { 
            mainmenu.hide().removeClass('open');
          }
          else {
            mainmenu.show().addClass('open');
            if (settings.format === "dropdown") {
              mainmenu.find('ul').show();
            }
          }
        });

        cssmenu.find('li ul').parent().addClass('has-sub');

        multiTg = function() {
          cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
          cssmenu.find('.menubodyhorizontal').on('click', function() {
            $(this).toggleClass('submenu-opened');
            if ($(this).siblings('ul').hasClass('open')) {
              $(this).siblings('ul').removeClass('open').hide();
            }

            else {
              $(this).siblings('ul').addClass('open').show();
            }
          });
		     cssmenu.find('.submenu-button').on('click', function() {
            $(this).parents('li').toggleClass('submenu-opened');
            if ($(this).siblings('ul').hasClass('open')) {
              $(this).siblings('ul').removeClass('open').hide();
            }

            else {
              $(this).siblings('ul').addClass('open').show();
            }
          });
        };

        if (settings.format === 'multitoggle') multiTg();
        else cssmenu.addClass('dropdown');

        if (settings.sticky === true) cssmenu.css('position', 'fixed');

        resizeFix = function() {
          if ($( window ).width() > 1024) {
            cssmenu.find('ul').show();
          }

          if ($(window).width() <= 1024) {
            cssmenu.find('ul').hide().removeClass('open');
          }
        };
        resizeFix();
        return $(window).on('resize', resizeFix);

      });
  };
})(jQuery);

(function($){
$(document).ready(function(){

$(document).ready(function() {
  $("#cssmenu").menumaker({
    title: "Menu",
    format: "multitoggle"
  });

  $("#cssmenu").prepend("");

var foundActive = false, activeElement, linePosition = 0, menuLine = $("#cssmenu #menu-line"), lineWidth, defaultPosition, defaultWidth;

$("#cssmenu > ul > li").each(function() {
  if ($(this).hasClass('active')) {
    activeElement = $(this);
    foundActive = true;
  }
});

if (foundActive === false) {
  activeElement = $("#cssmenu > ul > li").first();
}

defaultWidth = lineWidth = activeElement.width();

defaultPosition = linePosition = activeElement.position().left;

menuLine.css("width", lineWidth);
menuLine.css("left", linePosition);

$("#cssmenu > ul > li").hover(function() {
  activeElement = $(this);
  lineWidth = activeElement.width();
  linePosition = activeElement.position().left;
  menuLine.css("width", lineWidth);
  menuLine.css("left", linePosition);
}, 
function() {
  menuLine.css("left", defaultPosition);
  menuLine.css("width", defaultWidth);
});

});


});
})(jQuery);

$(document).ready(function(){
$(window).load(function(){
$('a.menubodyhorizontal[href*="#"]').prev('.submenu-button').css('visibility', 'visible');
});
});

$(document).ready(function(){
if ($(window).width() <= 1024) {
$('#menu-button').css('display','none');
}
});
$(window).bind('load',function(){
if ($(window).width() <= 1024) {
$('#menu-button').css({'display':'block', 'width':'100%'});
$('#menu-button').css('background-color',$('.column6').css('backgroundColor'));
$('#cssmenu > ul').css('background-color',$('.column6').css('backgroundColor'));
$('#menu-button').toggle(function(){
$('body').css('overflow','hidden');
$('#cssmenu').css({'height':$(window).height(true), 'overflow-y':'visible', 'z-index':'9999', 'top':0, 'position':'fixed','display':'block'});
$('#cssmenu > ul').css({'height' : $(window).height() - $('#menu-button').innerHeight('true'), 'overflow-y':'auto'});
}, function(){
$('body').css('overflow','visible');
$('#cssmenu').css({'height':'auto','overflow-y':'auto', 'z-index':'auto', 'top':0, 'position':'relative','display':'flex'});
$('#cssmenu > ul').css('height', 'auto');
});
}
});

// BEGIN: New Responsive Menu
// BEGIN: Read Cookie

$(document).ready(function () {
setInterval(function(){
if (readCookie('loginStatus') != 'Yes') {
$('.LOGIN').css('display', 'block');
$('.LOGOUT').css('display', 'none');
} 
else {
$('.LOGIN').css('display', 'none');
$('.LOGOUT').css('display', 'block');
}
}, 10); 
});

// END: Read Cookie
