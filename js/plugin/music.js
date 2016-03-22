define(function(require,exports){var a=function(a,b,c){var d=function(e){a.removeEventListener(b,d,!1),c.call(this,e)};a.addEventListener(b,d,!1)},b=/i(Phone|P(o|a)d)/.test(navigator.userAgent),c=function(){var a=document.createElement("i");return a.className="icon-music",a},d=function(a,b,d,e){this.isPlay=!1,this.autoPlay=!!d,this.audio=new Audio(a),this.audio.loop=!!b,this.audio.autoplay=!1,this.icon=c(),!!e&&document.body.appendChild(this.icon),this.timeStamp="music_current_time"+a,this.stateStamp="music_play_state"+a,this.currentTime=Number(sessionStorage[this.timeStamp])||0,this.play_state=sessionStorage[this.stateStamp],this.init()};return d.prototype={constructor:d,onPlay:function(){},onStop:function(){},play:function(){this.isPlay=!0,this.audio.play()},pause:function(){this.isPlay=!1,this.audio.pause()},stop:function(){this.isPlay=!1,this.audio.pause();try{this.audio.previousTime=0,this.audio.currentTime=0}catch(a){}},setPlayState:function(){this.icon.className="icon-music icon-music-animation",this.onPlay()},setStopState:function(){this.icon.className="icon-music",this.onStop()},continuePlay:function(){if(this.currentTime)try{this.audio.previousTime=this.currentTime,this.audio.currentTime=this.currentTime}catch(a){}},volume:function(){if(arguments.length){var a=Number(arguments[0]);!isNaN(a)&&a>=0&&(this.audio.volume=a)}return this.audio.volume},init:function(){var c=this;c.audio.addEventListener("playing",function(){c.setPlayState()},!1),c.audio.addEventListener("ended",function(){c.setStopState()},!1),c.audio.addEventListener("pause",function(){c.setStopState()},!1),c.audio.addEventListener("loadeddata",function(){c.continuePlay()},!1),c.play_state&&"play"!==c.play_state||!c.autoPlay||(c.play(),b&&a(document,"touchstart",function(){c.play()})),c.icon.addEventListener("touchend",function(a){a.stopPropagation(),a.preventDefault(),sessionStorage[c.stateStamp]=c.isPlay?"stop":"play",c.isPlay?c.stop():c.play()},!1),window.addEventListener("beforeunload",function(){try{sessionStorage[c.timeStamp]=c.audio.previousTime||c.audio.currentTime}catch(a){}c.audio.pause()})}},d});