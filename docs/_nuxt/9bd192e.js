(window.webpackJsonp=window.webpackJsonp||[]).push([[7,2,3,4,5,6],{290:function(t,e){var r={props:{val:{type:Object,default:null}},computed:{loc:function(){return this.$i18n.locale}}};e.isCard=r},300:function(t,e,r){var content=r(319);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(89).default)("3c71ab11",content,!0,{sourceMap:!1})},301:function(t,e,r){var content=r(321);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(89).default)("7f3b03a7",content,!0,{sourceMap:!1})},302:function(t,e,r){var content=r(323);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(89).default)("b6ad50ca",content,!0,{sourceMap:!1})},303:function(t,e,r){var content=r(325);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(89).default)("64856d31",content,!0,{sourceMap:!1})},304:function(t,e,r){var content=r(327);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(89).default)("3b2d2991",content,!0,{sourceMap:!1})},318:function(t,e,r){"use strict";r(300)},319:function(t,e,r){var n=r(88)(!1);n.push([t.i,".event{padding:2rem}.event>.title{text-decoration:underline;text-decoration-thickness:2px}",""]),t.exports=n},320:function(t,e,r){"use strict";r(301)},321:function(t,e,r){var n=r(88)(!1);n.push([t.i,".html{padding:2rem}.html>.content>p{font-size:1.125rem}.html>.content>p:not(:last-child){margin-bottom:1rem}",""]),t.exports=n},322:function(t,e,r){"use strict";r(302)},323:function(t,e,r){var n=r(88)(!1);n.push([t.i,".person>.avatar{width:100%}",""]),t.exports=n},324:function(t,e,r){"use strict";r(303)},325:function(t,e,r){var n=r(88)(!1);n.push([t.i,".project{padding:2rem}.project>:not(:last-child){margin-bottom:1rem}.project>.title{text-decoration:underline;text-decoration-thickness:2px}.project>.description{font-size:.875rem}",""]),t.exports=n},326:function(t,e,r){"use strict";r(304)},327:function(t,e,r){var n=r(88)(!1);n.push([t.i,".slideshow{width:100%;display:flex;flex-wrap:nowrap;overflow-x:auto}.slideshow>.slide{min-width:100%}.slideshow>.slide>.image{display:block;width:100%}.slideshow>.slide>.description{padding:.5rem;font-size:.75rem;color:var(--fto-blue)}",""]),t.exports=n},328:function(t,e,r){"use strict";r.r(e);var n={mixins:[r(290).isCard]},l=(r(318),r(49)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"event"},[r("div",{staticClass:"title",domProps:{innerHTML:t._s(t.val.title[t.loc])}}),t._v(" "),r("div",{staticClass:"place",domProps:{innerHTML:t._s(t.val.place[t.loc])}}),t._v(" "),r("div",{staticClass:"date",domProps:{innerHTML:t._s(t.val.date[t.loc])}}),t._v(" "),r("div",{staticClass:"time",domProps:{innerHTML:t._s(t.val.time[t.loc])}}),t._v(" "),r("div",{staticClass:"register",domProps:{innerHTML:t._s(t.val.register[t.loc])}}),t._v(" "),r("div",{staticClass:"info",domProps:{innerHTML:t._s(t.val.info[t.loc])}})])}),[],!1,null,null,null);e.default=component.exports},329:function(t,e,r){"use strict";r.r(e);var n={mixins:[r(290).isCard]},l=(r(320),r(49)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"html"},[r("div",{staticClass:"content",domProps:{innerHTML:t._s(t.val.content[t.loc])}})])}),[],!1,null,null,null);e.default=component.exports},330:function(t,e,r){"use strict";r.r(e);var n={mixins:[r(290).isCard]},l=(r(322),r(49)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"person"},[t.val.avatar?r("img",{staticClass:"avatar",attrs:{src:t.val.avatar}}):t._e(),t._v(" "),r("div",{staticClass:"id"},[t._v(t._s(t.val.id))]),t._v(" "),t.val.keywords.length>0?r("div",{staticClass:"keywords"},[t._v(t._s(t.val.keywords))]):t._e(),t._v(" "),t.val.handle?r("div",{staticClass:"handle"},[t._v(t._s(t.val.handle))]):t._e()])}),[],!1,null,null,null);e.default=component.exports},331:function(t,e,r){"use strict";r.r(e);var n={mixins:[r(290).isCard]},l=(r(324),r(49)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"project"},[r("div",{staticClass:"title",domProps:{innerHTML:t._s(t.val.title[t.loc])}}),t._v(" "),r("div",{staticClass:"description",domProps:{innerHTML:t._s(t.val.description[t.loc])}}),t._v(" "),r("div",{staticClass:"contributors",domProps:{innerHTML:t._s(t.val.contributors[t.loc])}}),t._v(" "),r("div",{staticClass:"links",domProps:{innerHTML:t._s(t.val.links[t.loc])}})])}),[],!1,null,null,null);e.default=component.exports},332:function(t,e,r){"use strict";r.r(e);r(90);var n={mixins:[r(290).isCard],data:function(){return{timeInterval:2e3,slideIndex:0}},computed:{currentSlide:function(){return this.val.slides[this.slideIndex]}},mounted:function(){var t=this;setInterval((function(){t.slideIndex=(t.slideIndex+1)%t.val.slides.length}),this.timeInterval)}},l=(r(326),r(49)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"slideshow"},[r("div",{staticClass:"slide"},[r("img",{staticClass:"image",attrs:{src:t.currentSlide.image}}),t._v(" "),r("div",{staticClass:"description",domProps:{innerHTML:t._s(t.currentSlide.description[t.loc])}})])])}),[],!1,null,null,null);e.default=component.exports},360:function(t,e,r){var content=r(425);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(89).default)("28f1127f",content,!0,{sourceMap:!1})},361:function(t,e,r){var n=r(362),l=r(363),o=r(364),c=r(368);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){l(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}r(50),r(20),r(73),r(372),r(92),r(13),r(35),r(45),r(51),r(52),r(74),r(44),r(116),r(117),r(151),r(63),r(36),r(25),r(39),r(53),r(54);var m=r(87),v=r(375),h=r(378),_=r(423),y=/&#x([A-F\d]+);/g,w=/\s*{{\s*[0-9a-zA-Z-][^{}]+(=.+)?\s*}}\s*/g,x=function(t){return t.replace("{{","").replace("}}","").trim()},C=function(content){var t=(content=content.replace(y,(function(t,e){return String.fromCharCode(parseInt(e,16))}))).match(w),e=[],r={};return t&&(content=content.replace(w,"").trim(),t.map(x).forEach((function(t){if(t.includes("=")){var n=t.split("=",2).map((function(t){return(""+t).trim()})),l=c(n,2),o=l[0],d=l[1];r[o]=isNaN(d)?d:+d}else e.push(""+t.trim())}))),{content:content=content.trim(),classes:e,attributes:r}},j=_.map((function(t){return t.code})),M=function(){return Object.assign.apply(Object,[{}].concat(o(j.map((function(t){return l({},t,{})})))))};function O(){return(O=n(regeneratorRuntime.mark((function t(e){var r,n,l,o,c,title,d,_,y,w,x,summary,O,k,P,i,table,T,H,L,E,I,$,S,D,A,b,R,z,F,a,J,N,U,B,G,W,Q,V,X,Z,K,Y,tt,et,nt,st,it,at,lt,ot,image,ct,pt,ut,col,html,ft,mt,vt,ht,gt,_t,yt,wt,xt,bt,Ct,jt,Mt;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.get(e);case 2:for(r=(r=(r=(r=(r=(r=(r=t.sent).data).split("\n").map((function(line){return line.trim()})).join("")).replace(/<head[^>]*>.*<\/head>/,"")).replace(/<style[^>]*>.*<\/style>/,"")).replace(/line-height/g,"line-height-disabled")).replace(/<script[^>]*>.*<\/script>/,""),n=[],(l=r.match(/<\s*a[^>]*>(.*?)<\s*\/\s*a>/g))&&l.forEach((function(t){var e=null,r=t.match(/href="(.+)"/);if(r){var l=r[1],o=v(l,!0);["google.com","www.google.com"].includes(o.host)&&"/url"===o.pathname&&(e=t.replace(l,o.query.q))}e&&n.push({find:t,replace:e})})),n.forEach((function(t){r=r.replace(t.find,t.replace)})),r=(r=(r=(r=(r=r.replace(new RegExp(String.fromCharCode(160),"g")," ")).replace(/<span[^>]*>\s*<\/span>/g,"")).replace(/<p[^>]*>\s*<\/p>/g,"")).replace(/<hr>/g,'<div class="divider"></div>')).replace(/([0-9]+)\^(th|st|nd|rd)/g,"$1<sup>$2</sup>"),(o=h.load(r))("#header, #footer, #banners").remove(),o("#contents").removeAttr("id").addClass("content-wrapper").children().first().removeClass().addClass("content"),c=o("p.title"),title="What the title",c.length>0&&(title=c.text(),c.remove()),d=o("p.subtitle"),_="",d.length>0&&(_=d.text(),d.remove()),k=[],P=o("table"),i=0;i<P.length;i++)if(table=P.eq(i),T=table.find("td"),H=C(T.eq(0).text()),L=H.content,E=H.classes,I=table.find("tr"),"end"===L)table.nextAll().remove(),table.remove();else if("meta"===L)($=table.find("td")).length>=5&&(y=$.eq(1).html(),w=$.eq(2).html(),x=$.eq(3).find("ul").html(),O=$.eq(4).html(),summary=$.eq(4).text().trim(),S=y.match(/src="([^"]+)"/),y=S?S[1]:null,x&&(x=x.replace(/([0-9]{4})\/([0-9]{1,2})\/([0-9]{1,2})/g,"$1.$2.$3"))),table.remove();else if("html"===L){if(4===(D=I.eq(1).find("td")).length){for(A=M(),b=0;b<4;b++)R=j[b],A[R]=D.eq(b).text().trim().length>0?D.eq(b).html():D.eq(0).html();k.push({type:L,classes:E,content:A})}}else if("event"===L){if(z=["_","title","place","date","time","register","info"],I.length===z.length){for(F={type:L,classes:E},a=1;a<z.length;a++)if(J=M(),N=z[a],U=I.eq(a),4===(B=U.find("td")).length){for(G=0;G<4;G++)W=j[G],J[W]=B.eq(G).text().trim().length>0?B.eq(G).html():B.eq(0).html();F[N]=J}k.push(F)}}else if("project"===L){if(Q=["_","title","description","contributors","links"],I.length===Q.length){for(V={type:L,classes:E},X=1;X<Q.length;X++)if(Z=M(),K=Q[X],Y=I.eq(X),4===(tt=Y.find("td")).length){for(et=0;et<4;et++)nt=j[et],Z[nt]=tt.eq(et).text().trim().length>0?tt.eq(et).html():tt.eq(0).html();V[K]=Z}k.push(V)}}else if("slideshow"===L){for(st=[],it=1;it<I.length;it++)if(at=M(),lt=I.eq(it),4===(ot=lt.find("td")).length){for(image=void 0,ct=void 0,pt=0;pt<4;pt++)ut=j[pt],col=ot.eq(pt),0===pt&&(image=col.find("img").remove().attr("src")),col.find("span:empty").remove(),col.find("p:empty").remove(),html=col.html(),0===pt&&(ct=html),at[ut]=col.text().length>0?html:ct;image&&st.push({image:image,description:at})}st.length>0&&k.push({type:L,classes:E,slides:st})}else if("people"===L){for(ft=[],mt=1;mt<I.length;mt++)if(vt=I.eq(mt),ht=vt.find("td"),gt=["id","avatar","keywords","handle"],ht.length>=gt.length){for(_t={},yt=0;yt<gt.length;yt++)wt=gt[yt],xt=ht.eq(yt),bt=xt.text(),"avatar"===wt?bt=xt.find("img").attr("src"):"keywords"===wt&&(bt=xt.find("li").map((function(i,t){return o(t).text()})).toArray()),_t[wt]=bt;ft.push(_t)}ft.length>0&&k.push({type:L,classes:E,people:ft})}else if("object"===L&&(Ct=["_","title","description"],I.length===Ct.length)){for(jt={type:L,classes:E},Mt=1;Mt<Ct.length;Mt++);k.push(jt)}return t.abrupt("return",f(f(f(f(f(f(f({title:title},_&&_.length>0?{subtitle:_}:{}),y?{coverImage:y}:{}),w&&w.length>0?{coverImageDescHTML:w}:{}),x&&x.length>0?{authorInfoHTML:x}:{}),summary&&summary.length>0?{summary:summary}:{}),O&&O.length>0?{summaryHTML:O}:{}),{},{cards:k}));case 31:case"end":return t.stop()}}),t)})))).apply(this,arguments)}e.getDoc=function(t){return O.apply(this,arguments)}},423:function(t,e){t.exports=[{code:"un",name:"Aa"},{code:"tw",name:"文"},{code:"kr",name:"한"},{code:"jp",name:"あ"}]},424:function(t,e,r){"use strict";r(360)},425:function(t,e,r){var n=r(88)(!1);n.push([t.i,".cards>.card.people{display:flex;flex-wrap:wrap;margin:1rem}.cards>.card.people>.person{margin:1rem;flex-basis:8rem}",""]),t.exports=n},427:function(t,e,r){"use strict";r.r(e);var n=r(7),l=(r(50),"https://s3-ap-northeast-1.amazonaws.com/g0v-hackmd-images/uploads/upload_b4afb12475444a71d503d0c47f2bcb40.png"),o=r(361),c=r(195);r(116),r(44);var d=r(328),f=r(329),m=r(330),v=r(331),h=r(332),_={components:{Event:d.default,HTMLCard:f.default,Person:m.default,Project:v.default,Slideshow:h.default},asyncData:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.getDoc)("https://docs.google.com/document/d/e/2PACX-1vRmPiw6kdgpFM_iCTcjf8eacFM1j08ka0-BzpeiDarfUNGI_uVoxnhWl7RbCQUGp246jOJ5tUBtS8ky/pub");case 2:return e=t.sent,t.abrupt("return",{doc:e});case 4:case"end":return t.stop()}}),t)})))()},head:function(){return function(title){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",image=arguments.length>3&&void 0!==arguments[3]?arguments[3]:l,r="–",meta=[{hid:"description",name:"description",content:e},{hid:"og-type",name:"og:type",property:"og:type",content:"website"},{vmid:"og-title",name:"og:title",property:"og:title",content:title=[title].concat(Object(c.a)(t?[r,t]:[]),[r,"FtO"]).join(" ")},{vmid:"og-description",name:"og:description",property:"og:description",content:e},{vmid:"og-image",name:"og:image",property:"og:image",content:image},{vmid:"twitter-card",name:"twitter:card",property:"twitter:card",content:"summary_large_image"},{vmid:"twitter-title",name:"twitter:title",property:"twitter:title",content:title},{vmid:"twitter-description",name:"twitter:description",property:"twitter:description",content:e},{vmid:"twitter-image",name:"twitter:image",property:"twitter:image",content:image}];return{title:title,_description:e,_image:image,meta:meta}}(this.doc.title,this.doc.subtitle,this.doc.summary,this.doc.coverImage)},computed:{loc:function(){return this.$i18n.locale}}},y=_,w=(r(424),r(49)),component=Object(w.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page index"},[r("div",{staticClass:"cards"},[t._l(t.doc.cards,(function(e,n){return["html"===e.type?r("HTMLCard",{key:n,staticClass:"card",attrs:{val:e}}):"event"===e.type?r("event",{key:n,staticClass:"card",attrs:{val:e}}):"project"===e.type?r("project",{key:n,staticClass:"card",attrs:{val:e}}):"slideshow"===e.type?r("slideshow",{key:n,staticClass:"card",attrs:{val:e}}):"people"===e.type?r("div",{key:n,staticClass:"card people",attrs:{val:e}},t._l(e.people,(function(t,e){return r("person",{key:e,staticClass:"s",attrs:{val:t}})})),1):t._e()]}))],2)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HTMLCard:r(329).default,Event:r(328).default,Project:r(331).default,Slideshow:r(332).default,Person:r(330).default})}}]);