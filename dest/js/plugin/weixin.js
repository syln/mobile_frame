define(function(require,exports){var a=require("ajax"),b=require("jweixin"),c=function(a,b){return Math.floor(Math.random()*(b-a+1))+a},d=function(a){for(var b="qwertyuiopasdfghjklzcxvbnmQWERTYUIOPASDFGHJKLZCXVBNM",d="";d.length<a;)d+=b[c(0,51)];return d},e=0,f=function(){var c="weixin_callback_"+(new Date-0),g=d(16),h={callback:c,noncestr:g,timestamp:parseInt(new Date/1e3),url:String(location.href).split("#")[0],state:0};a({type:"POST",url:"http://one.jcmob.cn/jssdk/get_signature2.do",data:h,dataType:"jsonp",jsonp:c,success:function(a){a&&a.code&&"success"===a.code&&(b.error(function(a){e++<3?f():console.log(JSON.stringify(a,null,"  "))}),b.config({debug:!1,appId:a.appid,timestamp:a.timestamp,nonceStr:a.noncestr,signature:a.signature,jsApiList:["checkJsApi","onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo","hideMenuItems","showMenuItems","hideAllNonBaseMenuItem","showAllNonBaseMenuItem","translateVoice","startRecord","stopRecord","onRecordEnd","playVoice","pauseVoice","stopVoice","uploadVoice","downloadVoice","chooseImage","previewImage","uploadImage","downloadImage","getNetworkType","openLocation","getLocation","hideOptionMenu","showOptionMenu","closeWindow","scanQRCode","chooseWXPay","openProductSpecificView","addCard","chooseCard","openCard"]}),b.showOptionMenu(),b.showMenuItems({menuList:["menuItem:exposeArticle","menuItem:setFont","menuItem:dayMode","menuItem:nightMode","menuItem:refresh","menuItem:profile","menuItem:addContact","menuItem:share:appMessage","menuItem:share:timeline","menuItem:share:qq","menuItem:share:weiboApp","menuItem:favorite","menuItem:share:facebook","menuItem:share:QZone","menuItem:jsDebug","menuItem:editTag","menuItem:delete","menuItem:copyUrl","menuItem:originPage","menuItem:readMode","menuItem:openWithQQBrowser","menuItem:openWithSafari","menuItem:share:email","menuItem:share:brand"]}))}})};return f(),b});