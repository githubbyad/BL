<script>
if(!readCookie('firstVisit')){
createCookie('firstVisit','Yes');
var d = new Date();
var s = d.getSeconds();
var m = d.getMinutes();
var h = d.getHours();
var dt = d.getDate();
var mn = d.getMonth() + 1;
var y = d.getFullYear();
var vl = dt + '' + mn + '' + y + '' + h + '' + m + '' + s;

var links = document.getElementsByTagName("link");
for (var i = 0; i < links.length; i++) {
    var link = links[i];
    if (link.rel === "stylesheet") {
        link.href += "?v=" + vl;
    }
}

var scrt = document.getElementsByTagName("script");
for (var i = 0; i < links.length; i++) {
    var scrpt = scrt[i];
    if (scrpt.src.indexOf('custom.js') != -1) {
        scrpt.src += "?v=" + vl;
    }
}
}
</script>
