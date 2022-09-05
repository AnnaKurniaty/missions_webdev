//<![CDATA[
    var snowStorm=null;
    function SnowStorm(){
        this.flakesMax=128,this.flakesMaxActive=64,this.animationInterval=33,this.flakeBottom=null,this.targetElement=null,
        this.followMouse=true,this.snowColor="#fff",this.snowCharacter="&bull;",this.snowStick=!0,this.useMeltEffect=!0,
        this.useTwinkleEffect=!1,this.usePositionFixed=!1,this.flakeLeftOffset=0,this.flakeRightOffset=0,this.flakeWidth=8,
        this.flakeHeight=8,this.vMaxX=5,this.vMaxY=4,this.zIndex=0;
        var e=void 0===window.attachEvent?function(e,t,i){
            return e.addEventListener(t,i,!1)
        }:function(e,t,i){
            return e.attachEvent("on"+t,i)
        },t=void 0===window.attachEvent?function(e,t,i){
            return e.removeEventListener(t,i,!1)
        }:function(e,t,i){
            return e.detachEvent("on"+t,i)
        };function i(e,t){
            return isNaN(t)&&(t=0),Math.random()*e+t}var n=this,o=this;this.timers=[],this.flakes=[],this.disabled=!1,this.active=!1;
            var s=navigator.userAgent.match(/msie/i),l=navigator.userAgent.match(/msie 6/i),a=s&&(l||navigator.userAgent.match(/msie 5/i)),r=navigator.appVersion.match(/windows 98/i),f=navigator.userAgent.match(/iphone/i),m=!!(s&&"BackCompat"==document.compatMode||l||f),h=null,c=null,d=null,u=null,v=null,k=null,g=1,w=!1,y=function(){try{document.createElement("div").style.opacity="0.5"}catch(e){return!1}return!0}(),p=document.createDocumentFragment();null===n.flakeLeftOffset&&(n.flakeLeftOffset=0),null===n.flakeRightOffset&&(n.flakeRightOffset=0),this.meltFrameCount=20,this.meltFrames=[];for(var x=0;x<this.meltFrameCount;x++)this.meltFrames.push(1-x/this.meltFrameCount);this.randomizeWind=function(){var e;if(e=i(n.vMaxX,.2),v=1==parseInt(i(2),10)?-1*e:e,k=i(n.vMaxY,.2),this.flakes)for(var t=0;t<this.flakes.length;t++)this.flakes[t].active&&this.flakes[t].setVelocities()},this.scrollHandler=function(){if(u=n.flakeBottom?0:parseInt(window.scrollY||document.documentElement.scrollTop||document.body.scrollTop,10),isNaN(u)&&(u=0),!w&&!n.flakeBottom&&n.flakes)for(var e=n.flakes.length;e--;)0===n.flakes[e].active&&n.flakes[e].stick()},this.resizeHandler=function(){window.innerWidth||window.innerHeight?(h=window.innerWidth-(s?2:16)-n.flakeRightOffset,d=n.flakeBottom?n.flakeBottom:window.innerHeight):(h=(document.documentElement.clientWidth||document.body.clientWidth||document.body.scrollWidth)-(s?0:8)-n.flakeRightOffset,d=n.flakeBottom?n.flakeBottom:document.documentElement.clientHeight||document.body.clientHeight||document.body.scrollHeight),c=parseInt(h/2,10)},this.resizeHandlerAlt=function(){h=n.targetElement.offsetLeft+n.targetElement.offsetWidth-n.flakeRightOffset,d=n.flakeBottom?n.flakeBottom:n.targetElement.offsetTop+n.targetElement.offsetHeight,c=parseInt(h/2,10)},this.freeze=function(){if(n.disabled)return!1;n.disabled=1;for(var e=n.timers.length;e--;)clearInterval(n.timers[e])},this.resume=function(){if(!n.disabled)return!1;n.disabled=0,n.timerInit()},this.toggleSnow=function(){n.flakes.length?(n.active=!n.active,n.active?(n.show(),n.resume()):(n.stop(),n.freeze())):n.start()},this.stop=function(){this.freeze();for(var e=this.flakes.length;e--;)this.flakes[e].o.style.display="none";t(window,"scroll",n.scrollHandler),t(window,"resize",n.resizeHandler),a||(t(window,"blur",n.freeze),t(window,"focus",n.resume))},this.show=function(){for(var e=this.flakes.length;e--;)this.flakes[e].o.style.display="block"},this.SnowFlake=function(e,t,n,o){var s=this,l=e;this.type=t,this.x=n||parseInt(i(h-20),10),this.y=isNaN(o)?-i(d)-12:o,this.vX=null,this.vY=null,this.vAmpTypes=[1,1.2,1.4,1.6,1.8],this.vAmp=this.vAmpTypes[this.type],this.melting=!1,this.meltFrameCount=l.meltFrameCount,this.meltFrames=l.meltFrames,this.meltFrame=0,this.twinkleFrame=0,this.active=1,this.fontSize=10+this.type/5*10,this.o=document.createElement("div"),this.o.innerHTML=l.snowCharacter,this.o.style.color=l.snowColor,this.o.style.position=w?"fixed":"absolute",this.o.style.width=l.flakeWidth+"px",this.o.style.height=l.flakeHeight+"px",this.o.style.fontFamily="arial,verdana",this.o.style.overflow="hidden",this.o.style.fontWeight="normal",this.o.style.zIndex=l.zIndex,p.appendChild(this.o),this.refresh=function(){if(isNaN(s.x)||isNaN(s.y))return!1;s.o.style.left=s.x+"px",s.o.style.top=s.y+"px"},this.stick=function(){m||l.targetElement!=document.documentElement&&l.targetElement!=document.body?s.o.style.top=d+u-l.flakeHeight+"px":l.flakeBottom?s.o.style.top=l.flakeBottom+"px":(s.o.style.display="none",s.o.style.top="auto",s.o.style.bottom="0px",s.o.style.position="fixed",s.o.style.display="block")},this.vCheck=function(){s.vX>=0&&s.vX<.2?s.vX=.2:s.vX<0&&s.vX>-.2&&(s.vX=-.2),s.vY>=0&&s.vY<.2&&(s.vY=.2)},this.move=function(){var e=s.vX*g;s.x+=e,s.y+=s.vY*s.vAmp,s.x>=h||h-s.x<l.flakeWidth?s.x=0:e<0&&s.x-l.flakeLeftOffset<0-l.flakeWidth&&(s.x=h-l.flakeWidth-1),s.refresh(),d+u-s.y<l.flakeHeight?(s.active=0,l.snowStick?s.stick():s.recycle()):(l.useMeltEffect&&s.active&&s.type<3&&!s.melting&&Math.random()>.998&&(s.melting=!0,s.melt()),l.useTwinkleEffect&&(s.twinkleFrame?(s.twinkleFrame--,s.o.style.visibility=s.twinkleFrame&&s.twinkleFrame%2==0?"hidden":"visible"):Math.random()>.9&&(s.twinkleFrame=parseInt(20*Math.random(),10))))},this.animate=function(){s.move()},this.setVelocities=function(){s.vX=v+i(.12*l.vMaxX,.1),s.vY=k+i(.12*l.vMaxY,.1)},this.setOpacity=function(e,t){if(!y)return!1;e.style.opacity=t},this.melt=function(){l.useMeltEffect&&s.melting&&s.meltFrame<s.meltFrameCount?(s.meltFrame++,s.setOpacity(s.o,s.meltFrames[s.meltFrame]),s.o.style.fontSize=s.fontSize-s.fontSize*(s.meltFrame/s.meltFrameCount)+"px",s.o.style.lineHeight=l.flakeHeight+2+.75*l.flakeHeight*(s.meltFrame/s.meltFrameCount)+"px"):s.recycle()},this.recycle=function(){s.o.style.display="none",s.o.style.position=w?"fixed":"absolute",s.o.style.bottom="auto",s.setVelocities(),s.vCheck(),s.meltFrame=0,s.melting=!1,s.setOpacity(s.o,1),s.o.style.padding="0px",s.o.style.margin="0px",s.o.style.fontSize=s.fontSize+"px",s.o.style.lineHeight=l.flakeHeight+2+"px",s.o.style.textAlign="center",s.o.style.verticalAlign="baseline",s.x=parseInt(i(h-l.flakeWidth-20),10),s.y=parseInt(-1*i(d),10)-l.flakeHeight,s.refresh(),s.o.style.display="block",s.active=1},this.recycle(),this.refresh()},this.snow=function(){for(var e=0,t=null,o=n.flakes.length;o--;)1==n.flakes[o].active?(n.flakes[o].move(),e++):0===n.flakes[o].active?0:0,n.flakes[o].melting&&n.flakes[o].melt();e<n.flakesMaxActive&&0===(t=n.flakes[parseInt(i(n.flakes.length),10)]).active&&(t.melting=!0)},this.mouseMove=function(e){if(!n.followMouse)return!0;var t=parseInt(e.clientX,10);g=t<c?t/c*2-2:(t-=c)/c*2},this.createSnow=function(e,t){for(var s=0;s<e;s++)n.flakes[n.flakes.length]=new n.SnowFlake(n,parseInt(i(6),10)),(t||s>n.flakesMaxActive)&&(n.flakes[n.flakes.length-1].active=-1);o.targetElement.appendChild(p)},this.timerInit=function(){n.timers=r?[setInterval(n.snow,3*n.animationInterval),setInterval(n.snow,n.animationInterval)]:[setInterval(n.snow,n.animationInterval)]},this.init=function(){n.randomizeWind(),n.createSnow(n.flakesMax),e(window,"resize",n.resizeHandler),e(window,"scroll",n.scrollHandler),a||(e(window,"blur",n.freeze),e(window,"focus",n.resume)),n.resizeHandler(),n.scrollHandler(),n.followMouse&&e(document,"mousemove",n.mouseMove),n.animationInterval=Math.max(20,n.animationInterval),n.timerInit()};var E=!1;function F(){n.start(!0)}this.start=function(e){if(E){if(e)return!0}else E=!0;if("string"==typeof n.targetElement){var t=n.targetElement;if(n.targetElement=document.getElementById(t),!n.targetElement)throw new Error('Snowstorm: Unable to get targetElement "'+t+'"')}n.targetElement||(n.targetElement=s?document.body:document.documentElement?document.documentElement:document.body),n.targetElement!=document.documentElement&&n.targetElement!=document.body&&(n.resizeHandler=n.resizeHandlerAlt),n.resizeHandler(),n.usePositionFixed=n.usePositionFixed&&!m,w=n.usePositionFixed,h&&d&&!n.disabled&&(n.init(),n.active=!0)},document.addEventListener?(document.addEventListener("DOMContentLoaded",F,!1),window.addEventListener("load",F,!1)):e(window,"load",F)}snowStorm=new SnowStorm;
    //]]>
    const AnimateType = {
        NORMAL: 0,
        LOOP: 1,
        LOOPREVERSE: 2
        };

        class Animate {
        type = 0;
        handle = null;
        isRun = false;
        isPause = false;
        duration = 0;
        draw;
        timing;

        proc = {
            start: 0,
            timeFraction: 0,
            isReverse: false,
            pauseTime: 0,
            deltaTime: 0
        }

        animateFunction = function animate(time) {
            time = time - this.proc.deltaTime;

            this.proc.timeFraction = (time - this.proc.start) / this.duration;
            if (this.proc.timeFraction > 1) this.proc.timeFraction = 1;

            let progress = this.timing(this.proc.timeFraction)
            this.draw(progress);

            if (this.proc.timeFraction < 1 && this.isRun && !this.isPause) {
                this.handle = requestAnimationFrame(this.callback.call);
            } else if (this.callback.end != null && this.proc.timeFraction >= 1) {
                this.callback.end.start();
            }
        };
        animateLoopFunction = function animate(time) {
            time = time - this.proc.deltaTime;

            this.proc.timeFraction = (time - this.proc.start) / this.duration;
            if (this.proc.timeFraction > 1) {
                this.proc.timeFraction = 1;
                this.proc.start = performance.now() - this.proc.deltaTime;
            }

            let progress = this.timing(this.proc.timeFraction)
            this.draw(progress);

            if (this.isRun && !this.isPause) {
                this.handle = requestAnimationFrame(this.callback.call);
            }
        };
        animateLoopReverseFunction = function animate(time) {
            time -= this.proc.deltaTime;
            //this.proc.start = this.proc.start + this.proc.deltaTime;
            
            if (!this.proc.isReverse) {
                this.proc.timeFraction = (time - this.proc.start) / this.duration;
            }
            else {
            this.proc.timeFraction = ((this.proc.start+this.duration) - time) / this.duration;
            }
            if (this.proc.timeFraction > 1) {
            this.proc.timeFraction = 1;
            this.proc.isReverse = true;
            this.proc.start = performance.now() - this.proc.deltaTime;
            }
            if (this.proc.timeFraction < 0) {
            this.proc.timeFraction = 0;
            this.proc.isReverse = false;
            this.proc.start = performance.now() - this.proc.deltaTime;
            }

            let progress = this.timing(this.proc.timeFraction)
            this.draw(progress);

            if (this.isRun && !this.isPause) {
            this.handle = requestAnimationFrame(this.callback.call);
            }
        };

        callback = {
            call: null,
            end: null
        }

        constructor(duration, draw, timing, type, end = null) {
            this.duration = duration;
            this.draw = draw;
            this.timing = timing;
            this.type = type;
            switch(this.type) {
                case AnimateType.NORMAL:
                    this.callback.call = (this.animateFunction).bind(this);
                    this.callback.end = end;
                    break;
                case AnimateType.LOOP:
                    this.callback.call = (this.animateLoopFunction).bind(this);
                    break;
                case AnimateType.LOOPREVERSE:
                    this.callback.call = (this.animateLoopReverseFunction).bind(this);
                    break;
            }
            
        }

        start() {
            if(!this.isRun) {
                this.proc.pauseTime = 0;
                this.proc.deltaTime = 0;
                this.isRun = true;
                this.isPause = false;
                this.animating();
            }
        }

        resume() {
            if(this.isRun && this.isPause) {
                this.isPause = false;
                this.proc.deltaTime += performance.now() - this.proc.pauseTime;
                this.requestAnimate();
            }
        }

        stop() {
            if(this.isRun) {
                this.isPause = false;
                this.isRun = false;
                if(this.handle) {
                    cancelAnimationFrame(this.handle);
                    this.handle = null;
                }
            }
        }

        pause() {
            if(this.isRun && !this.isPause) {
                this.isPause = true;
                this.proc.pauseTime = performance.now();
                if(this.handle) {
                    cancelAnimationFrame(this.handle);
                }
            }
        }

        // private
        requestAnimate() {
            requestAnimationFrame(this.callback.call);
        }
        animating() {
            this.proc.isReverse = false;
            this.proc.start = performance.now();
            if(this.handle != null) {
                this.isRun = true;
            }
            this.requestAnimate();
        }
        }

        function rand(min, max) {
        return (Math.random() * (max - min) ) + min;
        };
        function randInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
        }
        // https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep
        function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
        }
        // https://javascript.info/js-animation#back-bow-shooting
        function back(x, timeFraction) {
        return Math.pow(timeFraction, 2) * ((x + 1) * timeFraction - x)
        };
        // https://javascript.info/js-animation#elastic-animation
        function elastic(x, timeFraction) {
        return Math.pow(2, 10 * (timeFraction - 1)) * Math.cos(20 * Math.PI * x / 3 * timeFraction)
        }
        
        let In = new Animate(
            duration=2000, 
            draw=function(progress) {
                el = document.querySelector("#overlay");
                el.style.removeProperty('z-index');
            },
            timing=function(timeFraction) {
                return 1 - back(1.5, 1 - timeFraction);
            },
            type=AnimateType.NORMAL
        );

        function doDialog1() {
        var n = 1
        let textDialogTypeIn = new Animate(
            duration=500, 
            draw=function(progress) {
                el = document.querySelector("#chat-"+n)
                var elText = el.querySelector(".chat-text");
                var text = elText.getAttribute('text');
                var textLength = text.length;

                elText.innerHTML = text.substr(0, Math.floor(textLength * progress));
            },
            timing=function(timeFraction) {
                return timeFraction;
            },
            type=AnimateType.NORMAL
        );
        let textDialogIn = new Animate(
            duration=500, 
            draw=function(progress) {
                el = document.querySelector("#chat-"+n)
                var elText = el.querySelector(".chat-text");
                elText.style.cssText = elText.getAttribute('init');
                var textWidth = elText.style['width'];
                var textPaddingX = elText.style['padding-left'];
                var textPaddingY = elText.style['padding-top'];

                //elText.style['bottom'] = "calc(-100vh + " + textBottom + " + " + progress * 100 + "vh)";
                elText.style['width'] = "calc(" + textWidth + " * " + progress * 1 + ")";
                elText.style['padding-left'] = "calc(" + textPaddingX + " * " + progress * 1 + ")";
                elText.style['padding-right'] = "calc(" + textPaddingX + " * " + progress * 1 + ")";
                elText.style['padding-top'] = "calc(" + textPaddingY + " * " + progress * 1 + ")";
                elText.style['padding-bottom'] = "calc(" + textPaddingY + " * " + progress * 1 + ")";
                
            },
            timing=function(timeFraction) {
                return 1 - back(1.2, 1 - timeFraction);
            },
            type=AnimateType.NORMAL,
            end=textDialogTypeIn
        );
        let dialogIn = new Animate(
            duration=1000, 
            draw=function(progress) {
                el = document.querySelector("#chat-"+n)
                var elImage = el;//.querySelector(".chat-image");
                var elText = el.querySelector(".chat-text");
                elImage.style.cssText = elImage.getAttribute('init');
                
                var imageBottom = elImage.style['bottom'];
                
                elImage.style['bottom'] = "calc(-100vh + " + imageBottom + " + " + progress * 100 + "vh)";

                elText.style['width'] = "0px";
                elText.style['padding-top'] = "0px";
                elText.style['padding-bottom'] = "0px";
                elText.style['padding-left'] = "0px";
                elText.style['padding-right'] = "0px";
                elText.innerHTML = "";
            },
            timing=function(timeFraction) {
                return 1 - back(1.2, 1 - timeFraction);
            },
            type=AnimateType.NORMAL,
            end=textDialogIn
        );
        dialogIn.start();
        }

        function doExitDialog1() {
        var n = 1
        let dialogOut = new Animate(
            duration=1000, 
            draw=function(progress) {
                el = document.querySelector("#chat-"+n)
                var elImage = el;//.querySelector(".chat-image");
                elImage.style.cssText = elImage.getAttribute('init');
                
                var imageBottom = elImage.style['bottom'];
                
                elImage.style['bottom'] = "calc(" + imageBottom + " - " + progress * 100 + "vh)";
            },
            timing=function(timeFraction) {
                return back(1.2, timeFraction);
            },
            type=AnimateType.NORMAL
        );
        let textDialogOut = new Animate(
            duration=500, 
            draw=function(progress) {
                el = document.querySelector("#chat-"+n)
                var elText = el.querySelector(".chat-text");
                elText.style.cssText = elText.getAttribute('init');
                var textWidth = elText.style['width'];
                var textPaddingX = elText.style['padding-left'];
                var textPaddingY = elText.style['padding-top'];

                //elText.style['bottom'] = "calc(-100vh + " + textBottom + " + " + progress * 100 + "vh)";
                elText.style['width'] = "calc(" + textWidth + " * " + (1 - (progress * 1)) + ")";
                elText.style['padding-left'] = "calc(" + textPaddingX + " * " + (1 - (progress * 1)) + ")";
                elText.style['padding-right'] = "calc(" + textPaddingX + " * " + (1 - (progress * 1)) + ")";
                elText.style['padding-top'] = "calc(" + textPaddingY + " * " + (1 - (progress * 1)) + ")";
                elText.style['padding-bottom'] = "calc(" + textPaddingY + " * " + (1 - (progress * 1)) + ")";
                elText.innerHTML = "";
            },
            timing=function(timeFraction) {
                return back(1.2, timeFraction);
            },
            type=AnimateType.NORMAL,
            end=dialogOut
        );

        let textDialogTypeOut = new Animate(
            duration=500, 
            draw=function(progress) {
                el = document.querySelector("#chat-"+n)
                var elText = el.querySelector(".chat-text");
                var text = elText.getAttribute('text');
                var textLength = text.length;

                elText.innerHTML = text.substr(0, textLength - Math.floor(textLength * progress));
            },
            timing=function(timeFraction) {
                return timeFraction;
            },
            type=AnimateType.NORMAL,
            end=textDialogOut
        );
        textDialogTypeOut.start();
        sleep(1500);
        }

        function cloudMaker(n, durationIn, leftIn, durationAnimation, leftAnimation, durationOut, leftOut) {
        // var n = 2;
        // var durationIn = 2500;
        // var leftIn = 10; //vw
        // var durationAnimation = 2500;
        // var leftAnimation = 10; //vw
        // var durationOut = 2500;
        // var leftOut = 10; //vw

        let cloudsOut = new Animate(
            duration=durationOut, 
            draw=function(progress) {
                document.querySelectorAll("#awan-"+n).forEach(
                    function(el) {
                        el.style.cssText = el.getAttribute('init');
                        var filter = el.style['filter'];
                        var left = el.style['left'];
                        el.style['left'] = "calc(" + left + " + " + leftIn + "vw" + " + " + leftAnimation + "vw" + " + " + progress * leftOut + "vw)";
                        el.style['filter'] += "opacity("+ (100 - Math.floor(progress * 100)) +"%)";
                    }
                );
            },
            timing=function(timeFraction) {
                return timeFraction;
            },
            type=AnimateType.NORMAL
        );
        let cloudsAnimation = new Animate(
            duration=durationAnimation, 
            draw=function(progress) {
                document.querySelectorAll("#awan-"+n).forEach(
                    function(el) {
                        el.style.cssText = el.getAttribute('init');
                        var left = el.style['left'];
                        el.style['left'] = "calc(" + left + " + " + leftIn + "vw" + " + " + progress * leftAnimation + "vw)";
                    }
                );
            },
            timing=function(timeFraction) {
                return timeFraction;
            },
            type=AnimateType.NORMAL,
            end=cloudsOut
        );
        let cloudsIn = new Animate(
            duration=durationIn, 
            draw=function(progress) {
                document.querySelectorAll("#awan-"+n).forEach(
                    function(el) {
                        el.style.cssText = el.getAttribute('init');
                        var left = el.style['left'];
                        el.style['left'] = "calc(" + left + " + " + progress * leftIn + "vw)";
                        el.style['filter'] += "opacity("+ Math.floor(progress * 100) +"%)";
                    }
                );
            },
            timing=function(timeFraction) {
                return timeFraction;
            },
            type=AnimateType.NORMAL,
            end=cloudsAnimation
        );
        cloudsIn.start();

        var _durationIn = randInteger(1500, 3000);
        var _leftIn = randInteger(1, 8); //vw
        var _durationAnimation = _durationIn;
        var _leftAnimation = _leftIn + randInteger(1, 5); //vw
        var _durationOut = _durationIn;
        var _leftOut = _leftAnimation + randInteger(1, 2); //vw
        setTimeout(cloudMaker, randInteger(2500, 10000) + durationIn + durationAnimation + durationOut, n, _durationIn, _leftIn, _durationAnimation, _leftAnimation, _durationOut, _leftOut);
        }

        document.querySelectorAll('img').forEach(
            function(el) {
                el.setAttribute('draggable', false);
            }
        );

        // init inline css
        function initCss() {
        console.log("Window Loaded!");
        var el;
        el = document.querySelector('body')
        el.style['position'] = "relative";
        el.style['min-height'] = "100%";
        el.style['background-image'] = "url('Assets/snow.jpg')";
        el.style['background-size'] = "1400px 650px";
        el.style['background-repeat'] = "no-repeat";
        el.style['height'] = "100vh";
        el.style['overflow'] = "hidden";
        el.setAttribute("init", el.style.cssText);

        document.querySelectorAll('[id*=awan-]').forEach(
            function(el) {
                var id = el.getAttribute('id');
                var height = el.naturalHeight;
                var width = el.naturalWidth;
                
                id = id.substring(id.indexOf('awan-') + 6);
                el.style['position'] = "absolute";
                
                el.style['height'] = "var(--awan-height)";
                el.style['width'] = "auto";
                el.style['max-width'] = width + "px";
                el.style['max-height'] = height + "px";
                var top = rand(0, 0.4);
                var left = Math.random();

                el.style['top'] = "calc(100vh * "+ top +")";
                el.style['left'] = "calc(100vw * "+ left +")";
                if(id != 11 && id != 12) {
                    // https://codepen.io/sosuke/pen/Pjoqqp
                    el.style['filter'] += " hue-rotate(335deg) brightness(110%) contrast(101%) opacity(75%)";
                }
                el.setAttribute("init", el.style.cssText);
            }
        );

        document.querySelectorAll('[class*=opacity-]').forEach(
            function(el) {
                var px = el.className.substring(el.className.indexOf('opacity-') + 5);
                el.style['filter'] += " blur("+ px +"px)";
                el.setAttribute("init", el.style.cssText);
            }
        );

        document.querySelectorAll('.slide-anim').forEach(
            function(el) {
                el.style['width'] = "100%";
                el.style['height'] = "auto";
                el.setAttribute("init", el.style.cssText);
            }
        );

        document.querySelectorAll('[id*=chat-]').forEach(
            function(el) {
                var elImage = el.querySelector(".chat-image");
                var elText = el.querySelector(".chat-text");
                var imageHeight = elImage.naturalHeight;
                var imageWidth = elImage.naturalWidth;

                elImage.style['height'] = "auto";
                elImage.style['width'] = "20vw";
                elImage.style['max-width'] = imageWidth + "px";
                elImage.style['max-height'] = imageHeight + "px";
                elImage.style['bottom'] = "0vh";
                elImage.style['left'] = "0vw";

                var textLeft = "calc(min(20vw, "+ imageWidth +"px) + var(--chat-gap))";
                elText.style['left'] = textLeft;
                elText.style['height'] = "calc(min(auto + 10px, "+ imageHeight +"px)/2)";
                elText.style['width'] = "calc(100vw - min("+ textLeft +", "+ imageWidth +"px) - var(--chat-gap) - 10px - 5vw)";
                elText.style['bottom'] = "25%";
                
                elText.style['padding-left'] = "50px";
                elText.style['padding-right'] = "50px";
                elText.style['padding-top'] = "10px";
                elText.style['padding-bottom'] = "10px";

                el.style['bottom'] = "0vh";
                el.style['left'] = "0vw";
                el.style['display'] = "";
                
                el.setAttribute("init", el.style.cssText);
                elImage.setAttribute("init", elImage.style.cssText);
                elText.setAttribute("init", elText.style.cssText);
            
            }
        );

        // !important class
        document.querySelectorAll('.slider.slide-anim').forEach(
            function(el) {
                el.style['left'] = "calc(-100vw + 2px)";
                el.setAttribute("init", el.style.cssText);
            }
        );

        // first condition before going in
        document.querySelectorAll('[id*=awan-]').forEach(
            function(el) {
                el.style['filter'] += " opacity(0%)";
            }
        );
        };

        // init animation queue
        function initAnimation() {
        for(var n = 1; n < 13; n++) {
            var _durationIn = randInteger(1500, 3000);
            var _leftIn = randInteger(1, 8); //vw
            var _durationAnimation = _durationIn;
            var _leftAnimation = _leftIn + randInteger(1, 5); //vw
            var _durationOut = _durationIn;
            var _leftOut = _leftAnimation + randInteger(1, 2); //vw
            setTimeout(cloudMaker, randInteger(1000, 10000), n, _durationIn, _leftIn, _durationAnimation, _leftAnimation, _durationOut, _leftOut);
        }
        }

        let isInDialog = false;
        let lastClick = 0;
        document.addEventListener('click', function() {
        var now = performance.now();
        });

        (function(){
        function id(v){return document.getElementById(v); }
        function loadPage() {
            initCss();
            var ovrl = id("overlay"),
                prog = id("progress"),
                stat = id("progstat"),
                img = document.images,
                c = 0;
                tot = img.length;

            function imgLoaded(){
                c += 1;
                var perc = ((100/tot*c) << 0) +"%";
                prog.style.width = perc;
                stat.innerHTML = "Loading "+ perc;
                if(c===tot) return doneLoading();
            }
            function doneLoading(){
                In.start();
                setTimeout(function(){ 
                    ovrl.style.opacity = 0;
                    setTimeout(function() {
                        initAnimation();
                        ovrl.style.display = "none";
                    }, 1200);
                    
                }, 2000);
            }
            for(var i=0; i<tot; i++) {
                var tImg     = new Image();
                tImg.onload  = imgLoaded;
                tImg.onerror = imgLoaded;
                tImg.src     = img[i].src;
            }    
        }
        document.addEventListener('DOMContentLoaded', loadPage, false);
        }());