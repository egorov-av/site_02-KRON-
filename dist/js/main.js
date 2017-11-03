!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):t(jQuery)}(function(t){var e=-1,i=-1,n=function(t){return parseFloat(t)||0},r=function(e){var i=t(e),r=null,o=[];return i.each(function(){var e=t(this),i=e.offset().top-n(e.css("margin-top")),l=o.length>0?o[o.length-1]:null;null===l?o.push(e):Math.floor(Math.abs(r-i))<=1?o[o.length-1]=l.add(e):o.push(e),r=i}),o},o=function(e){var i={byRow:!0,property:"height",target:null,remove:!1};return"object"==typeof e?t.extend(i,e):("boolean"==typeof e?i.byRow=e:"remove"===e&&(i.remove=!0),i)},l=t.fn.matchHeight=function(e){var i=o(e);if(i.remove){var n=this;return this.css(i.property,""),t.each(l._groups,function(t,e){e.elements=e.elements.not(n)}),this}return this.length<=1&&!i.target?this:(l._groups.push({elements:this,options:i}),l._apply(this,i),this)};l.version="master",l._groups=[],l._throttle=80,l._maintainScroll=!1,l._beforeUpdate=null,l._afterUpdate=null,l._rows=r,l._parse=n,l._parseOptions=o,l._apply=function(e,i){var s=o(i),a=t(e),c=[a],h=t(window).scrollTop(),u=t("html").outerHeight(!0),d=a.parents().filter(":hidden");return d.each(function(){var e=t(this);e.data("style-cache",e.attr("style"))}),d.css("display","block"),s.byRow&&!s.target&&(a.each(function(){var e=t(this),i=e.css("display");"inline-block"!==i&&"flex"!==i&&"inline-flex"!==i&&(i="block"),e.data("style-cache",e.attr("style")),e.css({display:i,"padding-top":"0","padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px",overflow:"hidden"})}),c=r(a),a.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||"")})),t.each(c,function(e,i){var r=t(i),o=0;if(s.target)o=s.target.outerHeight(!1);else{if(s.byRow&&r.length<=1)return void r.css(s.property,"");r.each(function(){var e=t(this),i=e.attr("style"),n=e.css("display");"inline-block"!==n&&"flex"!==n&&"inline-flex"!==n&&(n="block");var r={display:n};r[s.property]="",e.css(r),e.outerHeight(!1)>o&&(o=e.outerHeight(!1)),i?e.attr("style",i):e.css("display","")})}r.each(function(){var e=t(this),i=0;s.target&&e.is(s.target)||("border-box"!==e.css("box-sizing")&&(i+=n(e.css("border-top-width"))+n(e.css("border-bottom-width")),i+=n(e.css("padding-top"))+n(e.css("padding-bottom"))),e.css(s.property,o-i+"px"))})}),d.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||null)}),l._maintainScroll&&t(window).scrollTop(h/u*t("html").outerHeight(!0)),this},l._applyDataApi=function(){var e={};t("[data-match-height], [data-mh]").each(function(){var i=t(this),n=i.attr("data-mh")||i.attr("data-match-height");e[n]=n in e?e[n].add(i):i}),t.each(e,function(){this.matchHeight(!0)})};var s=function(e){l._beforeUpdate&&l._beforeUpdate(e,l._groups),t.each(l._groups,function(){l._apply(this.elements,this.options)}),l._afterUpdate&&l._afterUpdate(e,l._groups)};l._update=function(n,r){if(r&&"resize"===r.type){var o=t(window).width();if(o===e)return;e=o}n?-1===i&&(i=setTimeout(function(){s(r),i=-1},l._throttle)):s(r)},t(l._applyDataApi);var a=t.fn.on?"on":"bind";t(window)[a]("load",function(t){l._update(!1,t)}),t(window)[a]("resize orientationchange",function(t){l._update(!0,t)})}),function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.PerfectScrollbar=e()}(this,function(){"use strict";function t(t){return getComputedStyle(t)}function e(t,e){for(var i in e){var n=e[i];"number"==typeof n&&(n+="px"),t.style[i]=n}return t}function i(t){var e=document.createElement("div");return e.className=t,e}function n(t,e){if(!v)throw new Error("No element matching method supported");return v.call(t,e)}function r(t){t.remove?t.remove():t.parentNode&&t.parentNode.removeChild(t)}function o(t,e){return Array.prototype.filter.call(t.children,function(t){return n(t,e)})}function l(t,e){var i=t.element.classList,n=m.state.scrolling(e);i.contains(n)?clearTimeout(w[e]):i.add(n)}function s(t,e){w[e]=setTimeout(function(){return t.element.classList.remove(m.state.scrolling(e))},t.settings.scrollingThreshold)}function a(t,e){l(t,e),s(t,e)}function c(t){if("function"==typeof window.CustomEvent)return new CustomEvent(t);var e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,void 0),e}function h(t,e,i,n){var r=i[0],o=i[1],l=i[2],s=i[3],h=i[4],u=i[5],d=t.element,p=!1;t.reach[s]=null,e<=0&&(e=0,t.reach[s]="start"),e>=t[r]-t[o]&&((e=t[r]-t[o])-d[l]<=2&&(p=!0),t.reach[s]="end");var f=d[l]-e;f&&(d.dispatchEvent(c("ps-scroll-"+s)),f>0?d.dispatchEvent(c("ps-scroll-"+h)):d.dispatchEvent(c("ps-scroll-"+u)),p||(d[l]=e),t.reach[s]&&d.dispatchEvent(c("ps-"+s+"-reach-"+t.reach[s])),n&&a(t,s))}function u(t){return parseInt(t,10)||0}function d(t){return n(t,"input,[contenteditable]")||n(t,"select,[contenteditable]")||n(t,"textarea,[contenteditable]")||n(t,"button,[contenteditable]")}function p(e){var i=t(e);return u(i.width)+u(i.paddingLeft)+u(i.paddingRight)+u(i.borderLeftWidth)+u(i.borderRightWidth)}function f(t,e){return t.settings.minScrollbarLength&&(e=Math.max(e,t.settings.minScrollbarLength)),t.settings.maxScrollbarLength&&(e=Math.min(e,t.settings.maxScrollbarLength)),e}function b(t,i){var n={width:i.railXWidth};i.isRtl?n.left=i.negativeScrollAdjustment+t.scrollLeft+i.containerWidth-i.contentWidth:n.left=t.scrollLeft,i.isScrollbarXUsingBottom?n.bottom=i.scrollbarXBottom-t.scrollTop:n.top=i.scrollbarXTop+t.scrollTop,e(i.scrollbarXRail,n);var r={top:t.scrollTop,height:i.railYHeight};i.isScrollbarYUsingRight?i.isRtl?r.right=i.contentWidth-(i.negativeScrollAdjustment+t.scrollLeft)-i.scrollbarYRight-i.scrollbarYOuterWidth:r.right=i.scrollbarYRight-t.scrollLeft:i.isRtl?r.left=i.negativeScrollAdjustment+t.scrollLeft+2*i.containerWidth-i.contentWidth-i.scrollbarYLeft-i.scrollbarYOuterWidth:r.left=i.scrollbarYLeft+t.scrollLeft,e(i.scrollbarYRail,r),e(i.scrollbarX,{left:i.scrollbarXLeft,width:i.scrollbarXWidth-i.railBorderXWidth}),e(i.scrollbarY,{top:i.scrollbarYTop,height:i.scrollbarYHeight-i.railBorderYWidth})}function g(t,e){function i(e){W(t,p,g+m*(e[a]-v),!1),l(t,f),R(t),e.stopPropagation(),e.preventDefault()}function n(){s(t,f),t.event.unbind(t.ownerDocument,"mousemove",i)}var r=e[0],o=e[1],a=e[2],c=e[3],h=e[4],u=e[5],d=e[6],p=e[7],f=e[8],b=t.element,g=null,v=null,m=null;t.event.bind(t[h],"mousedown",function(e){g=b[d],v=e[a],m=(t[o]-t[r])/(t[c]-t[u]),t.event.bind(t.ownerDocument,"mousemove",i),t.event.once(t.ownerDocument,"mouseup",n),e.stopPropagation(),e.preventDefault()})}var v=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.msMatchesSelector,m={main:"ps",element:{thumb:function(t){return"ps__thumb-"+t},rail:function(t){return"ps__rail-"+t},consuming:"ps__child--consume"},state:{focus:"ps--focus",active:function(t){return"ps--active-"+t},scrolling:function(t){return"ps--scrolling-"+t}}},w={x:null,y:null},y=function(t){this.element=t,this.handlers={}},Y={isEmpty:{configurable:!0}};y.prototype.bind=function(t,e){void 0===this.handlers[t]&&(this.handlers[t]=[]),this.handlers[t].push(e),this.element.addEventListener(t,e,!1)},y.prototype.unbind=function(t,e){var i=this;this.handlers[t]=this.handlers[t].filter(function(n){return!(!e||n===e)||(i.element.removeEventListener(t,n,!1),!1)})},y.prototype.unbindAll=function(){var t=this;for(var e in t.handlers)t.unbind(e)},Y.isEmpty.get=function(){var t=this;return Object.keys(this.handlers).every(function(e){return 0===t.handlers[e].length})},Object.defineProperties(y.prototype,Y);var X=function(){this.eventElements=[]};X.prototype.eventElement=function(t){var e=this.eventElements.filter(function(e){return e.element===t})[0];return e||(e=new y(t),this.eventElements.push(e)),e},X.prototype.bind=function(t,e,i){this.eventElement(t).bind(e,i)},X.prototype.unbind=function(t,e,i){var n=this.eventElement(t);n.unbind(e,i),n.isEmpty&&this.eventElements.splice(this.eventElements.indexOf(n),1)},X.prototype.unbindAll=function(){this.eventElements.forEach(function(t){return t.unbindAll()}),this.eventElements=[]},X.prototype.once=function(t,e,i){var n=this.eventElement(t),r=function(t){n.unbind(e,r),i(t)};n.bind(e,r)};var W=function(t,e,i,n){void 0===n&&(n=!0);var r;if("top"===e)r=["contentHeight","containerHeight","scrollTop","y","up","down"];else{if("left"!==e)throw new Error("A proper axis should be provided");r=["contentWidth","containerWidth","scrollLeft","x","left","right"]}h(t,i,r,n)},H={isWebKit:document&&"WebkitAppearance"in document.documentElement.style,supportsTouch:window&&("ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch),supportsIePointer:navigator&&navigator.msMaxTouchPoints},R=function(t){var e=t.element;t.containerWidth=e.clientWidth,t.containerHeight=e.clientHeight,t.contentWidth=e.scrollWidth,t.contentHeight=e.scrollHeight,e.contains(t.scrollbarXRail)||(o(e,m.element.rail("x")).forEach(function(t){return r(t)}),e.appendChild(t.scrollbarXRail)),e.contains(t.scrollbarYRail)||(o(e,m.element.rail("y")).forEach(function(t){return r(t)}),e.appendChild(t.scrollbarYRail)),!t.settings.suppressScrollX&&t.containerWidth+t.settings.scrollXMarginOffset<t.contentWidth?(t.scrollbarXActive=!0,t.railXWidth=t.containerWidth-t.railXMarginWidth,t.railXRatio=t.containerWidth/t.railXWidth,t.scrollbarXWidth=f(t,u(t.railXWidth*t.containerWidth/t.contentWidth)),t.scrollbarXLeft=u((t.negativeScrollAdjustment+e.scrollLeft)*(t.railXWidth-t.scrollbarXWidth)/(t.contentWidth-t.containerWidth))):t.scrollbarXActive=!1,!t.settings.suppressScrollY&&t.containerHeight+t.settings.scrollYMarginOffset<t.contentHeight?(t.scrollbarYActive=!0,t.railYHeight=t.containerHeight-t.railYMarginHeight,t.railYRatio=t.containerHeight/t.railYHeight,t.scrollbarYHeight=f(t,u(t.railYHeight*t.containerHeight/t.contentHeight)),t.scrollbarYTop=u(e.scrollTop*(t.railYHeight-t.scrollbarYHeight)/(t.contentHeight-t.containerHeight))):t.scrollbarYActive=!1,t.scrollbarXLeft>=t.railXWidth-t.scrollbarXWidth&&(t.scrollbarXLeft=t.railXWidth-t.scrollbarXWidth),t.scrollbarYTop>=t.railYHeight-t.scrollbarYHeight&&(t.scrollbarYTop=t.railYHeight-t.scrollbarYHeight),b(e,t),t.scrollbarXActive?e.classList.add(m.state.active("x")):(e.classList.remove(m.state.active("x")),t.scrollbarXWidth=0,t.scrollbarXLeft=0,W(t,"left",0)),t.scrollbarYActive?e.classList.add(m.state.active("y")):(e.classList.remove(m.state.active("y")),t.scrollbarYHeight=0,t.scrollbarYTop=0,W(t,"top",0))},L={"click-rail":function(t){var e=t.element;t.event.bind(t.scrollbarY,"mousedown",function(t){return t.stopPropagation()}),t.event.bind(t.scrollbarYRail,"mousedown",function(i){var n=i.pageY-window.pageYOffset-t.scrollbarYRail.getBoundingClientRect().top>t.scrollbarYTop?1:-1;W(t,"top",e.scrollTop+n*t.containerHeight),R(t),i.stopPropagation()}),t.event.bind(t.scrollbarX,"mousedown",function(t){return t.stopPropagation()}),t.event.bind(t.scrollbarXRail,"mousedown",function(i){var n=i.pageX-window.pageXOffset-t.scrollbarXRail.getBoundingClientRect().left>t.scrollbarXLeft?1:-1;W(t,"left",e.scrollLeft+n*t.containerWidth),R(t),i.stopPropagation()})},"drag-thumb":function(t){g(t,["containerWidth","contentWidth","pageX","railXWidth","scrollbarX","scrollbarXWidth","scrollLeft","left","x"]),g(t,["containerHeight","contentHeight","pageY","railYHeight","scrollbarY","scrollbarYHeight","scrollTop","top","y"])},keyboard:function(t){function e(e,n){var r=i.scrollTop;if(0===e){if(!t.scrollbarYActive)return!1;if(0===r&&n>0||r>=t.contentHeight-t.containerHeight&&n<0)return!t.settings.wheelPropagation}var o=i.scrollLeft;if(0===n){if(!t.scrollbarXActive)return!1;if(0===o&&e<0||o>=t.contentWidth-t.containerWidth&&e>0)return!t.settings.wheelPropagation}return!0}var i=t.element,r=function(){return n(i,":hover")},o=function(){return n(t.scrollbarX,":focus")||n(t.scrollbarY,":focus")};t.event.bind(t.ownerDocument,"keydown",function(n){if(!(n.isDefaultPrevented&&n.isDefaultPrevented()||n.defaultPrevented)&&(r()||o())){var l=document.activeElement?document.activeElement:t.ownerDocument.activeElement;if(l){if("IFRAME"===l.tagName)l=l.contentDocument.activeElement;else for(;l.shadowRoot;)l=l.shadowRoot.activeElement;if(d(l))return}var s=0,a=0;switch(n.which){case 37:s=n.metaKey?-t.contentWidth:n.altKey?-t.containerWidth:-30;break;case 38:a=n.metaKey?t.contentHeight:n.altKey?t.containerHeight:30;break;case 39:s=n.metaKey?t.contentWidth:n.altKey?t.containerWidth:30;break;case 40:a=n.metaKey?-t.contentHeight:n.altKey?-t.containerHeight:-30;break;case 32:a=n.shiftKey?t.containerHeight:-t.containerHeight;break;case 33:a=t.containerHeight;break;case 34:a=-t.containerHeight;break;case 36:a=t.contentHeight;break;case 35:a=-t.contentHeight;break;default:return}t.settings.suppressScrollX&&0!==s||t.settings.suppressScrollY&&0!==a||(W(t,"top",i.scrollTop-a),W(t,"left",i.scrollLeft+s),R(t),e(s,a)&&n.preventDefault())}})},wheel:function(e){function i(t,i){var n=l.scrollTop;if(0===t){if(!e.scrollbarYActive)return!1;if(0===n&&i>0||n>=e.contentHeight-e.containerHeight&&i<0)return!e.settings.wheelPropagation}var r=l.scrollLeft;if(0===i){if(!e.scrollbarXActive)return!1;if(0===r&&t<0||r>=e.contentWidth-e.containerWidth&&t>0)return!e.settings.wheelPropagation}return!0}function n(t){var e=t.deltaX,i=-1*t.deltaY;return void 0!==e&&void 0!==i||(e=-1*t.wheelDeltaX/6,i=t.wheelDeltaY/6),t.deltaMode&&1===t.deltaMode&&(e*=10,i*=10),e!==e&&i!==i&&(e=0,i=t.wheelDelta),t.shiftKey?[-i,-e]:[e,i]}function r(e,i,n){if(!H.isWebKit&&l.querySelector("select:focus"))return!0;if(!l.contains(e))return!1;for(var r=e;r&&r!==l;){if(r.classList.contains(m.element.consuming))return!0;var o=t(r);if([o.overflow,o.overflowX,o.overflowY].join("").match(/(scroll|auto)/)){var s=r.scrollHeight-r.clientHeight;if(s>0&&!(0===r.scrollTop&&n>0||r.scrollTop===s&&n<0))return!0;var a=r.scrollLeft-r.clientWidth;if(a>0&&!(0===r.scrollLeft&&i<0||r.scrollLeft===a&&i>0))return!0}r=r.parentNode}return!1}function o(t){var o=n(t),s=o[0],a=o[1];if(!r(t.target,s,a)){var c=!1;e.settings.useBothWheelAxes?e.scrollbarYActive&&!e.scrollbarXActive?(a?W(e,"top",l.scrollTop-a*e.settings.wheelSpeed):W(e,"top",l.scrollTop+s*e.settings.wheelSpeed),c=!0):e.scrollbarXActive&&!e.scrollbarYActive&&(s?W(e,"left",l.scrollLeft+s*e.settings.wheelSpeed):W(e,"left",l.scrollLeft-a*e.settings.wheelSpeed),c=!0):(W(e,"top",l.scrollTop-a*e.settings.wheelSpeed),W(e,"left",l.scrollLeft+s*e.settings.wheelSpeed)),R(e),(c=c||i(s,a))&&(t.stopPropagation(),t.preventDefault())}}var l=e.element;void 0!==window.onwheel?e.event.bind(l,"wheel",o):void 0!==window.onmousewheel&&e.event.bind(l,"mousewheel",o)},touch:function(t){function e(e,i){var n=h.scrollTop,r=h.scrollLeft,o=Math.abs(e),l=Math.abs(i);if(l>o){if(i<0&&n===t.contentHeight-t.containerHeight||i>0&&0===n)return{stop:!t.settings.swipePropagation,prevent:0===window.scrollY}}else if(o>l&&(e<0&&r===t.contentWidth-t.containerWidth||e>0&&0===r))return{stop:!t.settings.swipePropagation,prevent:!0};return{stop:!0,prevent:!0}}function i(e,i){W(t,"top",h.scrollTop-i),W(t,"left",h.scrollLeft-e),R(t)}function n(){b=!0}function r(){b=!1}function o(t){return t.targetTouches?t.targetTouches[0]:t}function l(t){return!(t.pointerType&&"pen"===t.pointerType&&0===t.buttons||(!t.targetTouches||1!==t.targetTouches.length)&&(!t.pointerType||"mouse"===t.pointerType||t.pointerType===t.MSPOINTER_TYPE_MOUSE))}function s(t){if(l(t)){g=!0;var e=o(t);u.pageX=e.pageX,u.pageY=e.pageY,d=(new Date).getTime(),null!==f&&clearInterval(f),t.stopPropagation()}}function a(n){if(!g&&t.settings.swipePropagation&&s(n),!b&&g&&l(n)){var r=o(n),a={pageX:r.pageX,pageY:r.pageY},c=a.pageX-u.pageX,h=a.pageY-u.pageY;i(c,h),u=a;var f=(new Date).getTime(),v=f-d;v>0&&(p.x=c/v,p.y=h/v,d=f);var m=e(c,h),w=m.stop,y=m.prevent;w&&n.stopPropagation(),y&&n.preventDefault()}}function c(){!b&&g&&(g=!1,t.settings.swipeEasing&&(clearInterval(f),f=setInterval(function(){t.isInitialized?clearInterval(f):p.x||p.y?Math.abs(p.x)<.01&&Math.abs(p.y)<.01?clearInterval(f):(i(30*p.x,30*p.y),p.x*=.8,p.y*=.8):clearInterval(f)},10)))}if(H.supportsTouch||H.supportsIePointer){var h=t.element,u={},d=0,p={},f=null,b=!1,g=!1;H.supportsTouch?(t.event.bind(window,"touchstart",n),t.event.bind(window,"touchend",r),t.event.bind(h,"touchstart",s),t.event.bind(h,"touchmove",a),t.event.bind(h,"touchend",c)):H.supportsIePointer&&(window.PointerEvent?(t.event.bind(window,"pointerdown",n),t.event.bind(window,"pointerup",r),t.event.bind(h,"pointerdown",s),t.event.bind(h,"pointermove",a),t.event.bind(h,"pointerup",c)):window.MSPointerEvent&&(t.event.bind(window,"MSPointerDown",n),t.event.bind(window,"MSPointerUp",r),t.event.bind(h,"MSPointerDown",s),t.event.bind(h,"MSPointerMove",a),t.event.bind(h,"MSPointerUp",c)))}}},T=function(n,r){var o=this;if(void 0===r&&(r={}),"string"==typeof n&&(n=document.querySelector(n)),!n||!n.nodeName)throw new Error("no element is specified to initialize PerfectScrollbar");this.element=n,n.classList.add(m.main),this.settings={handlers:["click-rail","drag-thumb","keyboard","wheel","touch"],maxScrollbarLength:null,minScrollbarLength:null,scrollingThreshold:1e3,scrollXMarginOffset:0,scrollYMarginOffset:0,suppressScrollX:!1,suppressScrollY:!1,swipePropagation:!0,swipeEasing:!0,useBothWheelAxes:!1,wheelPropagation:!1,wheelSpeed:1};for(var l in r)o.settings[l]=r[l];this.containerWidth=null,this.containerHeight=null,this.contentWidth=null,this.contentHeight=null;var s=function(){return n.classList.add(m.state.focus)},a=function(){return n.classList.remove(m.state.focus)};this.isRtl="rtl"===t(n).direction,this.isNegativeScroll=function(){var t=n.scrollLeft,e=null;return n.scrollLeft=-1,e=n.scrollLeft<0,n.scrollLeft=t,e}(),this.negativeScrollAdjustment=this.isNegativeScroll?n.scrollWidth-n.clientWidth:0,this.event=new X,this.ownerDocument=n.ownerDocument||document,this.scrollbarXRail=i(m.element.rail("x")),n.appendChild(this.scrollbarXRail),this.scrollbarX=i(m.element.thumb("x")),this.scrollbarXRail.appendChild(this.scrollbarX),this.scrollbarX.setAttribute("tabindex",0),this.event.bind(this.scrollbarX,"focus",s),this.event.bind(this.scrollbarX,"blur",a),this.scrollbarXActive=null,this.scrollbarXWidth=null,this.scrollbarXLeft=null;var c=t(this.scrollbarXRail);this.scrollbarXBottom=parseInt(c.bottom,10),isNaN(this.scrollbarXBottom)?(this.isScrollbarXUsingBottom=!1,this.scrollbarXTop=u(c.top)):this.isScrollbarXUsingBottom=!0,this.railBorderXWidth=u(c.borderLeftWidth)+u(c.borderRightWidth),e(this.scrollbarXRail,{display:"block"}),this.railXMarginWidth=u(c.marginLeft)+u(c.marginRight),e(this.scrollbarXRail,{display:""}),this.railXWidth=null,this.railXRatio=null,this.scrollbarYRail=i(m.element.rail("y")),n.appendChild(this.scrollbarYRail),this.scrollbarY=i(m.element.thumb("y")),this.scrollbarYRail.appendChild(this.scrollbarY),this.scrollbarY.setAttribute("tabindex",0),this.event.bind(this.scrollbarY,"focus",s),this.event.bind(this.scrollbarY,"blur",a),this.scrollbarYActive=null,this.scrollbarYHeight=null,this.scrollbarYTop=null;var h=t(this.scrollbarYRail);this.scrollbarYRight=parseInt(h.right,10),isNaN(this.scrollbarYRight)?(this.isScrollbarYUsingRight=!1,this.scrollbarYLeft=u(h.left)):this.isScrollbarYUsingRight=!0,this.scrollbarYOuterWidth=this.isRtl?p(this.scrollbarY):null,this.railBorderYWidth=u(h.borderTopWidth)+u(h.borderBottomWidth),e(this.scrollbarYRail,{display:"block"}),this.railYMarginHeight=u(h.marginTop)+u(h.marginBottom),e(this.scrollbarYRail,{display:""}),this.railYHeight=null,this.railYRatio=null,this.reach={x:n.scrollLeft<=0?"start":n.scrollLeft>=this.contentWidth-this.containerWidth?"end":null,y:n.scrollTop<=0?"start":n.scrollTop>=this.contentHeight-this.containerHeight?"end":null},this.settings.handlers.forEach(function(t){return L[t](o)}),this.event.bind(this.element,"scroll",function(){return R(o)}),R(this)},S={isInitialized:{configurable:!0}};return S.isInitialized.get=function(){return this.element.classList.contains(m.main)},T.prototype.update=function(){this.isInitialized&&(this.negativeScrollAdjustment=this.isNegativeScroll?this.element.scrollWidth-this.element.clientWidth:0,e(this.scrollbarXRail,{display:"block"}),e(this.scrollbarYRail,{display:"block"}),this.railXMarginWidth=u(t(this.scrollbarXRail).marginLeft)+u(t(this.scrollbarXRail).marginRight),this.railYMarginHeight=u(t(this.scrollbarYRail).marginTop)+u(t(this.scrollbarYRail).marginBottom),e(this.scrollbarXRail,{display:"none"}),e(this.scrollbarYRail,{display:"none"}),R(this),e(this.scrollbarXRail,{display:""}),e(this.scrollbarYRail,{display:""}))},T.prototype.destroy=function(){this.isInitialized&&(this.event.unbindAll(),r(this.scrollbarX),r(this.scrollbarY),r(this.scrollbarXRail),r(this.scrollbarYRail),this.removePsClasses(),this.element=null,this.scrollbarX=null,this.scrollbarY=null,this.scrollbarXRail=null,this.scrollbarYRail=null)},T.prototype.removePsClasses=function(){this.element.className=this.element.className.split(" ").filter(function(t){return!t.match(/^ps([-_].+|)$/)}).join(" ")},Object.defineProperties(T.prototype,S),T}),$(document).ready(function(){$(".column").matchHeight(),$("#service").click(function(){$(".header-center").slideToggle()}),new PerfectScrollbar(".modal-agreement",{maxScrollbarLength:100,wheelPropagation:!0,wheelSpeed:.3}).update()});