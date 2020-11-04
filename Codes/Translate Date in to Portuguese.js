// BEGIN: Portuguese Date 
// Replace {{PutDate}} with <span class="date"></span>

$(document).ready(function() {
var d = new Date();
var weekday = new Array(7);
weekday[0] = "Dom";
weekday[1] = "Seg";
weekday[2] = "Ter";
weekday[3] = "Qua";
weekday[4] = "Qui";
weekday[5] = "Sex";
weekday[6] = "Sáb";
var nDate = weekday[d.getDay()];
var nDay = d.getDate();
var nYear = d.getFullYear(); 
var d = new Date();
var month = new Array();
month[0] = "Janeiro";
month[1] = "Fevereiro";
month[2] = "Março";
month[3] = "Abril";
month[4] = "Maio";
month[5] = "Junho";
month[6] = "Julho";
month[7] = "Agosto";
month[8] = "Setembro";
month[9] = "Outubro";
month[10] = "Novembro";
month[11] = "Dezembro";
var nMonth = month[d.getMonth()];
$(".date" ).replaceWith( "<span class='date'>" + nDate + ", " + nDay + " " + nMonth + ", " + nYear + "</span>" );
});

// END: Portuguese Date
