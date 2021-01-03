<script type="text/javascript" language="javascript">
if (!readCookie('firstVisit')) {
    document.getElementById("blbodymain").style.opacity = "0.05";
    var d_che = new Date();
    var s_che = d_che.getSeconds();
    var m_che = d_che.getMinutes();
    var h_che = d_che.getHours();
    var dt_che = d_che.getDate();
    var mnt_che = d_che.getMonth() + 1;
    var y_che = d_che.getFullYear();
    var vl_che = dt_che + '' + mnt_che + '' + y_che + '' + h_che + '' + m_che + '' + s_che;
    var scrt = document.getElementsByTagName("script");
    var lnks = document.getElementsByTagName("link");
    var che_js = ["/client-parveen133.", "custom", "Menus-Horizontal", "jscript", "preview", "articlegroup"];
    var che_cs = ["custom", "layout"];
    for (var i = 0; i < scrt.length; i++) {
        var c_j;
        for (c_j = 0; c_j < che_js.length; c_j++) {
            var scrpt = scrt[i];
            if (scrpt.src.indexOf(che_js[c_j]) != -1 && scrpt.src.endsWith('.js?v=2') == true) {
                scrpt.src += "_" + vl_che;
            }
        }
    }
    for (var i = 0; i < lnks.length; i++) {
        var c_cs;
        for (c_cs = 0; c_cs < che_cs.length; c_cs++) {
            var link = lnks[i];
            if (link.href.indexOf(che_cs[c_cs]) != -1 && link.href.endsWith('.css?v=2') == true) {
                link.href += "_" + vl_che;
            }
        }
    }
    createCookie('firstVisit', 'Yes');
    setTimeout(function() {
        document.getElementById("blbodymain").style.opacity = "1";
    }, 1000);
}
</script>
