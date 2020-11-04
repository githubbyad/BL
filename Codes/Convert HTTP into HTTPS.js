// BEGIN: Convert HTTP into HTTPS

$(document).ready(function(){
if (location.href.indexOf("https://") == -1) {
location.href = location.href.replace("http://", "https://");
}
});

// END: Convert HTTP into HTTPS
