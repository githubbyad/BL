// BEGIN: Custom Login JS

function OpenLoginPopup2(ctl) {
var s = readCookie('loginStatus');
var myParameters = new Array();
var qrStr;
if (ctl == null) {
qrStr = location.href;
}
else {
qrStr = ctl.href;
}
myParameters = ReadSParameters(qrStr);
var a = myParameters['a'];
if (s != 'Yes') {
createCookie('curl', escape(qrStr));
$.magnificPopup.open({
items: [
{
src: '/target_form2.asp?sname=target_form.asp&pform={{Login}}', 
type: 'iframe'
}
],
gallery: { enabled: true },
modal: true,
iframe: {markup: '<div style="width:80vw !important; height:90vh !important;"><a class="close-to-home" href="/"><i class="fa fa-times" aria-hidden="true"></i></a>'+'<div class="mfp-iframe-scaler" >'+'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+'</div></div>'}
});
return false;
}
}
$(document).ready(function(){
if (url.indexOf('/index178.htm') >= 0){
OpenLoginPopup2();
}
});

// END: Custom Login JS
