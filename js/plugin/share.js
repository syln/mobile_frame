define(function(require,exports){var a=require("weixin");return{qq:function(a){var b={url:location.href,desc:"",title:"",summary:"",pics:"",flash:"",site:"",style:"201",width:32,height:32},c=[];for(var d in b)b.hasOwnProperty(d)&&c.push(d+"="+encodeURIComponent(a[d]||b[d]));setTimeout(function(){window.location="http://connect.qq.com/widget/shareqq/index.html?"+c.join("&")},0)},sina:function(a,b,c){var d="http://v.t.sina.com.cn/share/share.php?",e=[];a&&e.push("title="+encodeURIComponent(a)),b&&e.push("url="+encodeURIComponent(b)),c&&e.push("pic="+encodeURIComponent(c)),setTimeout(function(){window.location=d+e.join("&")},0)},bindWeixin:function(b){a.ready(function(){a.onMenuShareAppMessage(b),a.onMenuShareTimeline(b),a.onMenuShareQQ(b),a.onMenuShareWeibo(b)})}}});