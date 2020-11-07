/*
 *  Konfiguration / Configuration
 */ 
 
var pagearSmallImg = '';
var pagearSmallSwf = '/AdsPeeler/pageear_s.swf';  // pageear_s_v2_5_p.swf
var pagearBigImg = '';
var pagearBigSwf = '/AdsPeeler/pageear_b.swf';    // pageear_b_v2_5_p.swf
 
var speedSmall = 2; 
var mirror = 'true'; 
var pageearColor = 'ffffff';  
var jumpTo = '' 
var openLink = ''; 
var openOnLoad = 'false'; 
var closeOnLoad = 0; 
var setDirection = ''; 
var softFadeIn = '2'; 

var playSound = 'false';  
var playOpenSound = 'false'; 
var playCloseSound = 'false'; 
var closeOnClick = 'false'; 
var closeOnClickText = 'Close';
 
var eventLogUrl = 'http://pageear/files/';
var pageearId = '1';
var preview = '';
var videoBufferTime = '6';
var sKey = 'a8fa3c8e035cf26461d25cf448047f04';

var range = '10';
var ptype = 1; //'';

var shadowAlpha = '60';
var scrollText = '';
var scrollColor = 'ffffff';
var scrollSpeed = '0';
var scrollShadow = '0';
var scrollShadowDist = '35';
		 
/*
 *  Ab hier nichts mehr ändern  / Do not change anything after this line
 */ 

// Flash check vars
var reqMaV = 8;
var reqMiV = 0;
var reqR = 0;

// Copyright
var copyright = 'Webpicasso Media, www.webpicasso.de';

// Size small peel 
var thumbWidth  = '';
var thumbHeight = '';
 
// Size big peel
var bigWidth  = '';
var bigHeight = '';

// Css style default x-position
var xPos = 'right';
 
// Flashvars - Params
var flashvars = {}; 
flashvars.pagearSmallImg=escape(pagearSmallImg); 
flashvars.pagearBigImg=escape(pagearBigImg); 
flashvars.pageearColor=pageearColor; 
flashvars.jumpTo=escape(jumpTo); 
flashvars.openLink=escape(openLink); 
flashvars.mirror=escape(mirror); 
flashvars.copyright=escape(copyright); 
flashvars.speedSmall=escape(speedSmall); 
flashvars.openOnLoad=escape(openOnLoad); 
flashvars.closeOnLoad=escape(closeOnLoad); 
flashvars.setDirection=escape(setDirection); 
flashvars.softFadeIn=escape(softFadeIn); 
flashvars.playSound=escape(playSound); 
flashvars.playOpenSound=escape(playOpenSound); 
flashvars.playCloseSound=escape(playCloseSound); 
flashvars.closeOnClick=escape(closeOnClick);
 
flashvars.closeOnClickText=escape(utf8encode(closeOnClickText)); 
flashvars.eventLogUrl=escape(eventLogUrl); 
flashvars.pageearId=escape(pageearId); 
flashvars.lcKey=escape(Math.random()); 
flashvars.sKey=escape(sKey); 
flashvars.bigWidth=escape(bigWidth); 
flashvars.thumbWidth=escape(thumbWidth); 
flashvars.videoBufferTime=escape(videoBufferTime); 
flashvars.preview=escape(preview); 

flashvars.range=escape(range);  
flashvars.ptype=escape(ptype);

flashvars.shadowAlpha=escape(shadowAlpha);
flashvars.scrollText=escape(scrollText);
flashvars.scrollColor=escape(scrollColor);
flashvars.scrollSpeed=escape(scrollSpeed);
flashvars.scrollShadow=escape(scrollShadow);
flashvars.scrollShadowDist=escape(scrollShadowDist);

flashvars.syncSwfs= 'true';
flashvars.shortContextMenu = 'false';
flashvars.debug = 'false';
flashvars.host=escape(window.location.hostname);
//flashvars.license=escape('');
//flashvars.mail=escape('');
flashvars.license = escape('9e541e4e36fcdbbf41b8a8240224436a');
flashvars.mail = escape('sales@bulletlink.com');
    
function openPeel(){
    //debugOutput("JS function openPeel");
      
	document.getElementById('bigDiv').style.top = '0px'; 
	document.getElementById('bigDiv').style[xPos] = '0px';
	document.getElementById('thumbDiv').style.top = '-1000px';
	 
}

function closePeel(){
	//debugOutput("JS function closePeel");
    
	document.getElementById("thumbDiv").style.top = "0px";
	document.getElementById("bigDiv").style.top = "-1000px";
	 
}

function writeObjects(pagearSmallImg1, pagearBigImg1, thumbWidth1, thumbHeight1, bigWidth1, bigHeight1, jumpTo1, setDirection1, openLink1) {
    // Added by Abhijeet
    flashvars.pagearSmallImg = escape(pagearSmallImg1);
    flashvars.pagearBigImg = escape(pagearBigImg1);
    flashvars.thumbWidth = parseInt(escape(thumbWidth1));
    thumbWidth = parseInt(escape(thumbWidth1));
    thumbHeight = parseInt(escape(thumbHeight1));
    flashvars.bigWidth = parseInt(escape(bigWidth1));
    bigWidth = parseInt(escape(bigWidth1));
    bigHeight = parseInt(escape(bigHeight1));
    flashvars.jumpTo = escape(jumpTo1);
    flashvars.setDirection = escape(setDirection1);
    setDirection = escape(setDirection1);
    flashvars.openLink = escape(openLink1);
      
    // Check direction 
    if(setDirection == 'lt') {
        xPosBig = 'left:-'+(bigWidth-50)+'px';  
        xPos = 'left';   
    } else {
        xPosBig = 'right:0px';
        xPos = 'right';              
    }  
 
    // Check IE <7
    fixedSupported = true;    
    if (window.XMLHttpRequest == undefined && document.all) {
        fixedSupported = false;
    }   
    
    var stPos = 'absolute';  
    if('1' == '1' && fixedSupported == true) { 
        stPos = 'fixed';   
    } else if('1' == '1') {
        document.write('<style type="text/css">'+"\n"+
                       ' <!--[if IE 7]> '+ "\n"+
                       ' #thumbDiv { width: 100px; height: 100px; background: red; z-index: 100; } '+"\n"+
                       ' * html #thumbDiv { /*\*/position: absolute; top: expression((0 + (ignoreMe = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop)) + \'px\'); right: 0px;/**/ } '+"\n"+
                       ' #foo > #thumbDiv { position: fixed; top: 0px; right: 0px; } '+"\n"+
                       ' * html,* html body{ background: #fff url(foo) fixed; }'+ "\n"+
                       ' <![endif]-->'+"\n"+
                       ' </style>');
    }   
    
    // Write div layer for big swf
    //debugOutput("JS write bigDiv");
    document.write('<div id="bigDiv" style="position:'+stPos+';width:'+ (bigWidth+50) +'px;height:'+ bigHeight +'px;z-index:9999;'+xPosBig+';top:'+ (-bigHeight+10) +'px;">');    	        
	
	var useSwfobject = 1	
	if(useSwfobject == 1) {
    	document.write('<div id="bigDivObj"></div></div>');
    	var paramsBig = {};
        paramsBig.quality = "high";
    	paramsBig.scale = "noscale";
    	paramsBig.salign = "tr";
    	paramsBig.wmode = "transparent";
    	paramsBig.bgcolor = "#ffffff";
    	paramsBig.allowscriptaccess = "always";
    	paramsBig.swliveconnect = "true";
        var attributesBig = {}; 
    	attributesBig.name = "bigSwf";
    	attributesBig.align = "middle";
    	attributesBig.id = "bigSwf";
    	swfobject.embedSWF(pagearBigSwf, "bigDivObj", bigWidth+50, bigHeight+50, reqMaV+"."+reqMiV+"."+reqR, "expressInstall.swf", flashvars, paramsBig, attributesBig);
    
    } else {
        var fvars = '';
        for (var k in flashvars) {
            fvars += k+'='+flashvars[k]+'&';
        }
        
        // Check for flash version >= 8 
        if(DetectFlashVer(8,0,0) == true) {
        
            // Check if flash exists/ version matched
        	AC_FL_RunContent(
        				"src", pagearBigSwf,
        				"width", bigWidth+50,
        				"height", bigHeight+50,
        				"align", "middle",
        				"id", "bigSwf",
        				"quality", "high",
        				"bgcolor", "#FFFFFF",
        				"flashvars", fvars,
        				"name", "bigSwf",
        				"wmode", "transparent",
        				"scale", "noscale",
        				"salign", "tr",
        				"allowScriptAccess","always",
        				"type", "application/x-shockwave-flash",
        				'codebase', 'http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab',
        				"pluginspage", "http://www.adobe.com/go/getflashplayer"
        	);
        }
        // Close div layer for big swf
        document.write('</div>');     
    }
    
    
   
    // Write div layer for small swf
    //debugOutput("JS write thumbDiv");
    document.write('<div id="thumbDiv" style="position:'+stPos+';width:'+ (thumbWidth+50) +'px;height:'+ thumbHeight +'px;z-index:9999;'+xPos+':0px;top:0px;">');
    
    
    if(useSwfobject == 1) { 
        document.write('<div id="thumbDivObj"></div></div>');
    	var paramsSmall = {};    
        paramsSmall.quality = "high";
    	paramsSmall.scale = "noscale";
    	paramsSmall.salign = "";
    	paramsSmall.wmode = "transparent";
    	paramsSmall.bgcolor = "#ffffff";
    	paramsSmall.allowscriptaccess = "always";	
    	var attributesSmall = {}; 
    	attributesSmall.name = "smallSwf";
    	attributesSmall.align = "middle";
    	attributesSmall.id = "smallSwf";
     	swfobject.embedSWF(pagearSmallSwf, "thumbDivObj", thumbWidth+50, thumbHeight+50, reqMaV+"."+reqMiV+"."+reqR, "expressInstall.swf", flashvars, paramsSmall, attributesSmall);
    } else { 
             
         AC_FL_RunContent(
				"src", pagearSmallSwf,
				"width", thumbWidth+50,
				"height", thumbHeight+50,
				"align", "middle",
				"id", "smallSwf",
				"scale", "noscale",
				"quality", "high",
				"bgcolor", "#FFFFFF",
				"flashvars", fvars,
				"name", "bigSwf",
				"wmode", "transparent",
				"allowScriptAccess","always",
				"type", "application/x-shockwave-flash",
				'codebase', 'http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab',
				"pluginspage", "http://www.adobe.com/go/getflashplayer"
    	);
         
        document.write('</div>');  
         
    }
   
    setTimeout('document.getElementById("bigDiv").style.top = "-'+(bigWidth+45)+'px";',500);
    
}

function utf8encode(txt) { 
    txt = txt.replace(/\r\n/g,"\n");
    var utf8txt = "";
    for(var i=0;i<txt.length;i++) {        
        var uc=txt.charCodeAt(i); 
        if (uc<128) {
            utf8txt += String.fromCharCode(uc);        
        } else if((uc>127) && (uc<2048)) {
            utf8txt += String.fromCharCode((uc>>6)|192);
            utf8txt += String.fromCharCode((uc&63)|128);
        } else {
            utf8txt += String.fromCharCode((uc>>12)|224);
            utf8txt += String.fromCharCode(((uc>>6)&63)|128);
            utf8txt += String.fromCharCode((uc&63)|128);
        }        
    }
    return utf8txt;
} 

/* Open on exit */
  

  
 
// Set some lines for debugging 
// ****************************

    function debugOutput(txt) {
           
        countlog++;
        var outDiv = window.document.getElementById('jsdebug');   
        outDiv.innerHTML = countlog+': '+txt+ '('+ getPastTime(debugTime) +'s)<br>'+outDiv.innerHTML; 
        
    }
    
    function getPastTime (mseconds) {
        var cDate = new Date(); 
        return Math.round((cDate.getTime() - mseconds) / 1000);
    }
  
    var countlog = 0;
    var currentDate = new Date(); 
    var debugTime = currentDate.getTime();
    
    var setPosition = 'left';
    if (setDirection == 'lt') setPosition = 'right';

    //Commented by Abhijeet : debugDiv
    //document.write('<style type="text/css">'+                    
                    //'.debugDiv { position:absolute;z-index:10000;top:450px;'+setPosition+':50px;background-color:#FDFCEA;font-size:12px; font-family:verdana,arial,helvetica;border:1px solid #aa0000;width:500px;height:200px;} '+
                    //'.debugDiv #head { font-size:10px;font-weight:bold;background-color:#dddddd;padding:4px;margin:0px; } '+
                    //'.debugDiv #jsdebug { font-size:10px;background-color:#efefef;padding:2px;margin:1px;overflow : auto; height:174px;} '+
                    //'</style>');
    //document.write ('<div class="debugDiv">'+
                    //'<div id="head">Debug output</div>'+
                    //'<div id="jsdebug"></div>'+
                    //'</div>');  
// ****************************



//Commented by Abhijeet
//writeObjects('pageear_s.jpg', 'pageear_b.jpg', '100', '100', '600', '600', 'http://bulletlink.com', 'rt');
