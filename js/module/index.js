define(function(require,exports){var a=(require("log"),require("ajax"),require("event"),require("popup"),require("share")),b=window.navigator.userAgent,c={isFromAndroid:/android/gi.test(b),isFromIos:/iphone|ipod|ios/gi.test(b),isFromWx:/MicroMessenger/gi.test(b),isFromQQ:/mobile.*qq/gi.test(b),isFromUC:/ucbrowser/gi.test(b),isFromQQBrower:/mqqbrowser[^LightApp]/gi.test(b),isFromQQBrowerLight:/MQQBrowserLightApp/gi.test(b)},d=new a({title:"广发银行",description:"华扬腾亚 特别制作",img:seajs.data.cwd+"images/icon-share.jpg",url:seajs.data.cwd+"index.html"});c.isFromWx&&d.bindWeixin();var e=([seajs.data.cwd+"images/bg-share.png",seajs.data.cwd+"images/icon-fail.png",seajs.data.cwd+"images/icon-success.png",seajs.data.cwd+"images/loading.gif"],document.getElementById("wrap")),f=document.getElementById("success-image"),g=1,h=0,i=1,j=0,k=function(a){if(a.preventDefault(),a.stopPropagation(),"touchstart"===a.type)h=j,g=i;else if("swipe"===a.type){var b=a.data,c=b.endX.length;if(c>1){var d=b.endApart-b.startApart;d>0?i=g+d/100:0>d&&(i=g-Math.abs(d)/100),.2>i&&(i=.2),j=(h+b.startAngle-b.endAngle)%360,e.innerHTML=h+"|"+g+"<br>"+j+"|"+i,f.style.transform=f.style.webkitTransform="scale("+i+") rotate("+j+"deg)"}}};f.addEventListener("touchstart",k),f.addEventListener("touchmove",k),f.addEventListener("touchcancel",k),f.addEventListener("touchend",k),f.addEventListener("swipe",k)});