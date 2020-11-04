$('#sm_submenu_H a').each(function () {
var text = $(this).text();
$(this).text(text.replace('and', '&'));
});
