import{a as c,d as m,l as x}from"./index.ddd2b5a1.js";import{e as T}from"./index.f0e906af.js";import{h as p}from"./index.b93551d5.js";import{p as v,e as l}from"./index.68a3cb8a.js";import{d as C}from"./store.1adf2ee7.js";import{o as q}from"./share-url.00ff47ef.js";import"./video.722c2cc9.js";import"./hoisted.1a30a975.js";import"./hoisted.495a90f1.js";import"./hoisted.efbfdfb2.js";import"./lazy.ec63ec52.js";import"./signals.module.e26a8f2a.js";import"./preact.module.284f119c.js";import"./hooks.module.15c9a964.js";import"./preload-helper.e8d31950.js";function k(){import.meta.url,import("data:text/javascript,").catch(()=>1);async function*e(){}k.g=e}const u=(e,t)=>{if(+__PN_DATA__.uid<=0)return t&&t();e()};let d=null;const w=()=>{if(d)return d;const e=document.querySelector("[data-closest]");return d=Object.assign({},e==null?void 0:e.dataset),d};c("click","[data-downld-name]",function(){const e=this.dataset.downldName,t=this.dataset.downldUrl,n=this.dataset.downldSuffix,s=this.dataset.hueid,i=this.dataset.hasBuy=="1",a=w();if(!e)return;const o=document.getElementById("GoPremiumBtn");u(()=>{switch(s&&l(s),e){case"png":case"rar":case"ppt":case"twibbon":const r=a.fee=="1"&&e==="png";i&&t?window.open(t,"_blank"):C({type:a.type||"1",btnType:e,rarName:n||"PSD",goPremiumTxt:(o==null?void 0:o.textContent)||"Go Premium",href:t,downUrl:t,fee:r,licenseType:a.licenseType||0},!1);break;case"edit":t&&window.open(t,"_blank");break;case"mobile":const b=document.querySelector("._o2b");T(b,S=>S-40);break;case"freevideo":const f=document.getElementById("_ijc");f&&f.currentSrc&&D(f.currentSrc,"down_ifr");break;default:t&&setTimeout(()=>{window.open(t,"_blank")},100);break}},()=>{t&&e==="edit"&&window.open(t,"_blank"),l("down-btnnologin-"+e)})});function B(e){u(()=>{const t=e.target,n=document.getElementById("_hjc"),s=document.getElementById("_jjc");n&&s&&(n.hidden=t&&t.value==="down",s.hidden=!n.hidden)})}document.querySelectorAll('input[type="radio"][name="size-selection"]').forEach(e=>{e.addEventListener("change",B)});function D(e,t){const n=document.getElementById(t)||document.createElement("iframe");n.id=t,n.src=e,document.body.appendChild(n)}if(__PN_DATA__.no_bot=="1"){const{id:e,type:t,detect_status:n}=w();p.get("/api/statistics/view",{id:e,type:t,t:n}),t=="1"?p.get("/api/statistics/detail-out-view",{id:e}):t=="5"&&v("font_detail",1,"come")}c("click","[data-share-btn]",function(){const e=A();e.name=this.dataset.shareBtn||"",q(e)});function A(){const e={title:"",media:"",word:"",name:""},t=document.querySelector("[data-share-media]");if(t){const{shareTitle:n,shareMedia:s,shareWord:i}=t.dataset;e.title=n||"",e.media=s||"",e.word=i||""}return e}const I="._z_b";c("click",I,function(){setTimeout(()=>{l("der-followmain")}),u(()=>{const e=this.dataset.follow,t=this.textContent,n=this.dataset.txt;this.disabled=!0,p.post("/api/async/designer-follow",{id:e}).then(s=>{s.status===200&&(this.textContent=n,this.dataset.txt=t)}).finally(()=>{this.disabled=!1})})});const E="._t2b a";c("click","[data-prf-type]",function(){u(()=>{const e=this.dataset.prfType,n=this.dataset.limitedTime=="1"?!1:this.dataset.hasBuy=="1",s=e==="enterprise",i=s?"team":"",a=w(),{vip_type:o,enterprise_status:r}=window.__PN_DATA__;!n&&a.licenseType==2&&r!="1"?window.open("/team-pay/card?type=2&b=121","_blank"):!n&&+o<=0?(m(document,"dialog:toggle",{name:"prf-license",show:!0}),l("prfview-btn"+i)):(this.disabled=!0,m(document,"down:prf",{data:a,isTeam:s,hasBuy:n,resolve:()=>{this.disabled=!1},reject:()=>{this.disabled=!1}}),l("prfdown-btn"+i))})});c("click",E,function(e){e.preventDefault(),l("relatekeyword-report"),this.href&&setTimeout(()=>{window.open(this.href,"_blank")},100)});const N="._w8b ._i_b";c("click",N,function(){const e=this.dataset.id;e&&l("url-similartype-".concat(e))});c("click","._b3b>span",function(){m(this.parentElement.querySelector('[data-huejs="der-linkmain"]'),"click")});const P="._pdc",j="._qdc",L="._rdc",H=["_h","_w8"];W();function W(){if(window.innerWidth<1024)return;const e=document.querySelectorAll(P);for(const t of e){const n=t.querySelector(j),s=t.querySelector(L);if(!n||!s)continue;const i=n.children,a=i.length,o=i[a-1];if(a<=1||o&&o.offsetTop<=0)continue;const r=F({btnEl:s,boxEl:n,btns:i,len:a});z(r,n,s,t)}}function z(e,t,n,s){const i=s.offsetHeight,a=()=>{e.show=!1,n.textContent="+"+e.count,t.insertBefore(n,e.el),n.style.removeProperty("width"),s.style.cssText+="height:".concat(i,"px;")};x(n,"click",()=>{if(e.show)return a();e.show=!0,t.appendChild(n),n.textContent=n.dataset.less,n.style.width="auto",s.style.cssText+="height:".concat(t.offsetHeight,"px;")}),a(),e.count>0&&requestAnimationFrame(()=>{n.classList.remove(...H)})}function F({btns:e,len:t,btnEl:n,boxEl:s}){const i={el:null,i:0,count:0,show:!1};for(let o=0;o<t;o++){const r=e[o];if(r!==n){if(r.offsetTop>0)break;i.i++,i.el=r}}i.count=t-i.i;const a=e[t-2];if(i.count>1){n.textContent="+"+i.count,s.insertBefore(n,i.el);let o=n.nextElementSibling;for(;o&&o.offsetTop<=0;)o=o.nextElementSibling,s.insertBefore(n,o),i.el=o,i.i++,i.count--}else i.el===a&&(i.el=null);return i}const y="._bac",U="._ndc",g=()=>{m(document,"dialog:toggle",{name:"PreviewImage",show:!0})},_=e=>{var t;(t=document.querySelector(U))==null||t.classList[e?"add":"remove"]("_ck")},h=e=>{e.preventDefault()};c("click",y,function(e){h(e),setTimeout(()=>{l("detail-preview-image")},100);const t=document.getElementById("PreviewImage");if(t){if(t.querySelector("img"))return g()}else return;const n=this.querySelector("a"),s=this.querySelector("img");if(!n||!s)return;const i=n.href||s.currentSrc||s.src;if(!i)return;g();const a=n.offsetHeight>n.parentElement.offsetHeight,o=document.createElement("img"),r=a?t:o;r.style.maxWidth=window.innerWidth-40+"px",r.style.maxHeight=window.innerHeight-120+"px",o.className=t.dataset.imgClass||"",o.style.minWidth=a?"640px":"auto",o.alt="",o.oncontextmenu=h,o.onload=o.onabort=o.onerror=()=>{requestAnimationFrame(()=>{_(!0)})},o.src=i,requestAnimationFrame(()=>{_(),t.appendChild(o)})});c("contextmenu",y,h);export{k as __vite_legacy_guard};