(function(){var d=(document.location.protocol=="https:"?"https":"http")+"://pb.sogou.com/pv.gif";var c={g:function(h){return document.getElementById(h)},extend:function(p){var o=[].slice.call(arguments);o.shift();for(var m=0,k=o.length;m<k;m++){var h=o[m];for(var n in h){if(h.hasOwnProperty(n)){p[n]=h[n]}}}return p},jsonToQuery:function(k,p){if(!k){return""}var o=[],n,h=p||function(q){return encodeURIComponent(q)};for(var j in k){if(k.hasOwnProperty(j)){var m=k[j];if("[object Array]"==Object.prototype.toString.call(m)){n=m.length;while(n--){o.push(j+"="+h(m[n],j))}}else{if(typeof m!="function"){o.push(j+"="+h(m,j))}}}}return o.join("&")},cookie:{get:function(h){var j=new RegExp("(^| )"+h+"=([^;]*)(;|\x24)"),k=j.exec(document.cookie);if(k){return k[2]||null}},set:function(j,m,h){h=h||{};var k=h.expires;if("number"==typeof h.expires){k=new Date();k.setTime(k.getTime()+h.expires)}document.cookie=j+"="+m+("; path="+(h.path?h.path:"/"))+(k?"; expires="+k.toGMTString():"")+(h.domain?"; domain="+h.domain:"")+(h.secure?"; secure":"")},remove:function(j,h){h=h||{};h.expires=new Date(0);this.set(j,"",h)}},getAncestorByTagName:function(j,h){if(!j.tagName){return null}h=h.toUpperCase();if(j.tagName.toUpperCase()==h){return j}while((j=j.parentNode)&&j.nodeType==1){if(j.tagName.toUpperCase()==h){return j}}return null},ie:/msie (\d+\.\d+)/i.test(navigator.userAgent),on:function(k,j,h){if(document.attachEvent){k.attachEvent("on"+j,h)}else{k.addEventListener(j,h,false)}}};var a=window.Pingback?window.Pingback:false;var g=function(){var t,s={},y={},w={};var k=navigator.userAgent;function x(){var D=[["se",/se 2.x/i,null,"\x241"],["ie",/msie (\d+\.\d+)/i,null,document.documentMode,"\x241"],["ff",/firefox\/(\d+\.\d+)/i,null,"\x241"],["ch",/chrome\/(\d+\.\d+)/i,null,"\x241"],["sf",/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i,/chrome/i,"\x241","\x242"],["op",/opera(\/| )(\d+(\.\d+)?)(.+?(version\/(\d+(\.\d+)?)))?/i,null,"\x246","\x242"]];for(var B=0,A=D.length;B<A;B++){var C=D[B];if(C[1].test(k)&&(!C[2]||!C[2].test(k))){s.b=C[0];s.v=(typeof C[3]=="string"?+RegExp[C[3]]:C[3])||(C[4]&&+RegExp[C[4]]);if(C[0]=="se"){s.v=document.attachEvent?0:1}break}}}function r(){var C=["win","mac","iphone","ipad","android"];for(i=0,l=C.length;i<l;i++){if((new RegExp(C[i],"i")).test(navigator.platform||k)){var B=C[i];if(B=="win"){var A=/Windows NT (.*?);/ig.exec(k);B+=(A&&A[1])||""}s.o=B;break}}s.s=[screen.width,screen.height].join("x");s.l=navigator.language||navigator.browserLanguage||navigator.systemLanguage||navigator.userLanguage||"";s.bi=(k.toLowerCase().search("wow64")==-1)?32:64;s.ls=+navigator.cookieEnabled+"_"+ +("localStorage" in window&&window.localStorage!==null)}function m(A){x();r();A&&A()}var n;function v(C,B){if(C){if(typeof spb_vars!="undefined"&&spb_vars.pingback){var A="";try{A=C.getElementsByTagName("input")[0].value}catch(D){}__send("click","module=wc_0_"+(B?"enter":"search")+"&kw="+A,false,true)}}}function u(){y.refer=document.referrer||"";y.page=(document.getElementsByTagName("title")[0]&&document.getElementsByTagName("title")[0].innerHTML)||"";y.pageUrl=document.location.href;if(c.cookie.get("ppinf")){y.ulogined=1}if(location.href.match(/qq\.com/g)){try{y._uiid=c.cookie.get("uiid")||"";var K=location.search.match(/[\?&]unc=[^&#]+/g);y._unc=K&&K[0]?K[0].split("=")[1]:"";y._logined=c.cookie.get("sginf")&&c.cookie.get("sgrdig")?1:0;window.getSupplyId&&(y._sid=window.getSupplyId());window.getGuid&&(y._cid=window.getGuid());window.getVersion&&(y._v=window.getVersion());if(n){return}var I;if(I=c.g("searchForm")){var C=I;I=c.g("searchInput");if(I){var F=c.g("hotArtcleClosed"),M;if(F){c.on(F,"mouseover",function(){clearTimeout(M);M=setTimeout(function(){var O=c.g("hotArtcleOpen");if(O&&O.style.display!="none"){__send("click","module=wc_0_hotword",false,true)}},500)})}var N=c.g("searchEngineLogo"),L;if(N){c.on(N,"mouseover",function(){clearTimeout(L);L=setTimeout(function(){var O=c.g("enginChange");if(O&&O.style.display!="none"){__send("click","module=wc_0_changeEngine",false,true)}},500)})}if(typeof jQuery!="undefined"){var E=jQuery;E("#logo").on("click",function(){__send("click","module=wc_0_logo",false,true)})}}else{I=0;if(typeof jQuery!="undefined"){}}if(I){var B;c.on(I,"keydown",function(O){var O=O||window.event;if(O&&O.keyCode==13){v(C,I)}});var H=C.getElementsByTagName("input"),A;for(var D=0,G=H.length;D<G;D++){if(H[D].type=="submit"){H[D].parentNode.setAttribute("pbflag","wc_0_search");H[D].setAttribute("pbtag","search");break}}}}}catch(J){}}}function o(){for(var E=0,D=g.plugins.length;E<D;E++){var C=g.plugins[E];var B=C.type;if(B=="page"){continue}var A=(function(F,G){return function(H){q(F,G,H||window.event)}})(B);if(B=="interval"){setInterval(A,C.time||100);continue}if(w[B]){continue}w[B]=true;if(B!="beforeunload"){c.on(document,B,A)}else{c.on(window,B,A)}}}function z(F,C,D){var B=+(new Date());var A=window["pb_"+B]=new Image();A.onload=A.onerror=A.onabort=function(){A.onload=A.onerror=A.onabort=null;A=null;window["pb_"+B]=null};var E="ct";if(C=="page"){E="pv"}else{if(C=="perf"){E="perf"}else{if(C=="extra"){E="extra"}}}F+="&"+c.jsonToQuery(y)+"&"+c.jsonToQuery(t);A.src=(d+"?uigs_productid="+(D?"ufo&ufoid=":"")+(t.productid||"daohang")+"&rdk="+B+"&img="+E+".gif&"+F).replace(/[&]{1,}/g,"&")}function q(J,F,L,M){var A=!!M;var K,I,B=(t.productid=="daohang"||!t.productid);K=I=(typeof F=="string")?F:c.jsonToQuery(F);for(var G=0,E=g.plugins.length;G<E;G++){var C=g.plugins[G];if(!(!J||C.type==J)){continue}var N=C.run(F,L,!J);var H=c.jsonToQuery(N);if(!H){continue}var D=K+"&"+H;if(D.length>2000){B&&z(D,J);z(D,J,"sendtoufo");K=I}else{K=D}A=true}if(!A){return}B&&z(K,J);z(K,J,"sendtoufo")}var p=window.performance;function j(){var A,B=p;if(!B&&a&&a.domready>=0){B=a;B.load=new Date().getTime();A="domready="+(B.domready-B.start)+"&load="+(B.load-B.start)}else{if(B&&B.timing){B=B.timing;A="dns="+(B.domainLookupEnd-B.domainLookupStart)+"&server="+(B.responseEnd-B.requestStart)+"&domready="+(B.domContentLoadedEventStart-B.domLoading)+"&load="+(B.loadEventStart-B.domLoading)+"&total="+(B.loadEventStart-B.navigationStart)}}A&&z(A,"perf","sendtoufo")}function h(){if(p&&p.timing){if(p.timing.loadEventStart>0){return true}return false}if(document&&document.readyState=="complete"){return true}return false}return{options:{},plugins:[],init:function(A){var B=this;t=A;B.options=(t.options&&("object"===typeof t.options))?t.options:{};delete t.options;if(A&&(A.perf||document.location.href.match("http://kan.sogou.com"))){delete A.perf;if(h()){j()}else{c.on(window,"load",j)}}m(function(){u();(!B.options.disablePv)&&q("page",s,null,"forcesend");o()})},register:function(A){this.plugins.push(A)},send:q,utils:c,compat:function(A,E,C,D,B){var B=B||"other";z(E,B);z(E,B,"sendtoufo")}}}();if(document.location.href.match("heatmap=1")){var f="utf-8",e="http://api.ufo.sogou-inc.com/data/page.show.php",b=document.createElement("script");b.setAttribute("charset",f);b.setAttribute("src",e);document.body.appendChild(b)}window.Pingback=g;window.__send=typeof spb_vars!="undefined"&&spb_vars.pingback?function(h,j){spb_vars.pingback(0,j,h)}:g.send})();(function(){var m=[],a=null,h=false,c,f,b=0,l=j(),e=false;function j(){var o=function(){var p=Math.floor(Math.random()*36864+4096).toString(16);return p};return(o()+o()+o()+o()+o()+o()+o()+o())}function n(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}var k=function(r){var o=r.clientX,s=r.clientY,p=document.body.clientWidth,q=n();return parseInt(o-p/2)+"_"+(s+q)};var g=function(r,o,q){if(o){a=k(o)}a&&m.push(a);if(m.length>100||q){var p=m.join(".");m=[];return{pos:p}}else{return false}};f=window.spb_vars&&window.spb_vars.mousemove&&window.spb_vars.mousemove(l);if(f){c=+(new Date());window.spb_vars.mousemove=l;m.push("r_0_"+d());setInterval(function(){h=true},50);function i(){var o=+(new Date()),p=o-c;c=o;return p}function d(){return Math.max(document.documentElement.clientWidth,document.body.clientWidth)+"_"+Math.max(document.documentElement.clientHeight,document.body.clientHeight)}Pingback.utils.on(document,"mouseout",function(){e=false;m.push("o_"+i())});Pingback.utils.on(document,"mouseover",function(){if(e){return}e=true;m.push("i_"+i()+"_"+k(event))});Pingback.utils.on(window,"resize",function(){m.push("r_"+i()+"_"+d())});Pingback.register({type:"beforeunload",run:function(p,o){m.push("l_"+i());return g(p,false,"dosend")}});Pingback.register({type:"interval",run:function(r,p,q){if((h&&a&&e)||q){var o=n();if(b!=o){b=o;m.push("s_"+o)}return g(r,null,q)}else{return false}},time:1000});Pingback.register({type:"mousemove",run:function(p,o){e=true;h=false;return g(p,o)},combo:true})}Pingback.register({type:"mousedown",run:function(r,p){if(f){m.push("c_"+k(p))}if(p&&Pingback.utils.getAncestorByTagName((p.target||p.srcElement),"a")){return g(r,p,true)}else{if(p&&(p.target||p.srcElement).tagName&&((p.target||p.srcElement).tagName.toLowerCase()=="input")&&((p.target||p.srcElement).type.toLowerCase().match(/submit|button/g))){var q=g(r,p,true);var o;if(o=(p.target||p.srcElement).getAttribute("pbflag")){q.module=o}return q}else{return false}}}})})();(function(){var b=Pingback.utils;function d(){switch((document.referrer.match(/[^\/.]+.com|[^\/.]+.cn/)||[]).join("")){case"youdao.com":return 9063;break;case"jike.com":return 9062;break;case"soso.com":return 9061;break;case"360so.com":return 9060;break;case"360sou.com":return 9060;break;case"360.cn":return 9048;break;case"google.com":return 9047;break;case"sogou.com":if(document.referrer.match(/\/www.sogou.com/)){return 9046}else{return""}break;case"baidu.com":return 9044;break;case"weibo.com":return 9100;break;case"sohu.com":if(document.referrer.match(/\/t.sohu.com/)){return 9074}else{return 9101}break;case"qq.com":if(document.referrer.match(/\/qzone.qq.com/)){return 9065}else{if(document.referrer.match(/\/t.qq.com/)){return 9064}else{return""}}break;default:return""}}function a(){return(document.location.href.match(/[\?&]fr=([0-9]{4})(-[0-9a-z]{4})?/g)||[]).join("").replace(/[\?&]fr=/g,"")||b.cookie.get("spid")||d()}var c=(spb_vars.spid||a())+"";if(!spb_vars.spid){c=c.match(/^Af/g)||!c?c:"Af9"+c}c&&b.cookie.set("spid",c,{expires:20*365*24*60*60*1000});if(c){spb_vars.spid=c}Pingback.register({type:"mousedown",run:function(l,f){if(!f){return}var g=f.target||f.srcElement;g=b.getAncestorByTagName(g,"a");var n={};if(g){var e=g.getAttribute("pburl")||g.getAttribute("href");var k=g.getAttribute("pbtitle")||g.getAttribute("title");if(e){n.url=e}if(k){n.urlName=k}var p=["pbtag","pbflag"];var j=[null,null,null,0];var h=true;while(g&&g.nodeType==1){var m=h?0:1;h=false;for(;m<2;m++){var o=g.getAttribute(p[m]);if(o&&!j[m]){j[m]=o;j[3]++}}if(j[3]==2){break}g=g.parentNode}if(j[0]){n.tag=j[0]}n.module=j[1]||"other";return n}}})})();window['spb_vars'] && Pingback.init( window['spb_vars'] );