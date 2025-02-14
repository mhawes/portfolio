import{a as z,h as j,d as N,V as C,w as W,o as O,g as $,e as q,p,l as c,s as B,W as I}from"./index.30832201.js";import{v as _,j as M,k as D}from"./QBtn.5f9ad26f.js";const le={name:String};function re(e={}){return(o,r,t)=>{o[r](j("input",{class:"hidden"+(t||""),...e.value}))}}function ie(e){return z(()=>e.name||e.for)}function ne(e,o,r){let t;function i(){t!==void 0&&(C.remove(t),t=void 0)}return N(()=>{e.value===!0&&i()}),{removeFromHistory:i,addToHistory(){t={condition:()=>r.value===!0,handler:o},C.add(t)}}}const se={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},ue=["beforeShow","show","beforeHide","hide"];function de({showing:e,canShow:o,hideOnRouteChange:r,handleShow:t,handleHide:i,processOnMount:m}){const n=$(),{props:s,emit:u,proxy:L}=n;let d;function k(l){e.value===!0?y(l):S(l)}function S(l){if(s.disable===!0||l!==void 0&&l.qAnchorHandled===!0||o!==void 0&&o(l)!==!0)return;const f=s["onUpdate:modelValue"]!==void 0;f===!0&&(u("update:modelValue",!0),d=l,q(()=>{d===l&&(d=void 0)})),(s.modelValue===null||f===!1)&&V(l)}function V(l){e.value!==!0&&(e.value=!0,u("beforeShow",l),t!==void 0?t(l):u("show",l))}function y(l){if(s.disable===!0)return;const f=s["onUpdate:modelValue"]!==void 0;f===!0&&(u("update:modelValue",!1),d=l,q(()=>{d===l&&(d=void 0)})),(s.modelValue===null||f===!1)&&H(l)}function H(l){e.value!==!1&&(e.value=!1,u("beforeHide",l),i!==void 0?i(l):u("hide",l))}function P(l){s.disable===!0&&l===!0?s["onUpdate:modelValue"]!==void 0&&u("update:modelValue",!1):l===!0!==e.value&&(l===!0?V:H)(d)}W(()=>s.modelValue,P),r!==void 0&&_(n)===!0&&W(()=>L.$route.fullPath,()=>{r.value===!0&&e.value===!0&&y()}),m===!0&&O(()=>{P(s.modelValue)});const x={show:S,hide:y,toggle:k};return Object.assign(L,x),x}const ce=[Element,String],K=[null,document,document.body,document.scrollingElement,document.documentElement];function ae(e,o){let r=D(o);if(r===void 0){if(e==null)return window;r=e.closest(".scroll,.scroll-y,.overflow-auto")}return K.includes(r)?window:r}function R(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function G(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let h;function fe(){if(h!==void 0)return h;const e=document.createElement("p"),o=document.createElement("div");M(e,{width:"100%",height:"200px"}),M(o,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),o.appendChild(e),document.body.appendChild(o);const r=e.offsetWidth;o.style.overflow="scroll";let t=e.offsetWidth;return r===t&&(t=o.clientWidth),o.remove(),h=r-t,h}function J(e,o=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:o?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}let w=0,b,T,v,E=!1,A,X,Y,a=null;function Q(e){Z(e)&&B(e)}function Z(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const o=I(e),r=e.shiftKey&&!e.deltaX,t=!r&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),i=r||t?e.deltaY:e.deltaX;for(let m=0;m<o.length;m++){const n=o[m];if(J(n,t))return t?i<0&&n.scrollTop===0?!0:i>0&&n.scrollTop+n.clientHeight===n.scrollHeight:i<0&&n.scrollLeft===0?!0:i>0&&n.scrollLeft+n.clientWidth===n.scrollWidth}return!0}function F(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function g(e){E!==!0&&(E=!0,requestAnimationFrame(()=>{E=!1;const{height:o}=e.target,{clientHeight:r,scrollTop:t}=document.scrollingElement;(v===void 0||o!==window.innerHeight)&&(v=r-o,document.scrollingElement.scrollTop=t),t>v&&(document.scrollingElement.scrollTop-=Math.ceil((t-v)/8))}))}function U(e){const o=document.body,r=window.visualViewport!==void 0;if(e==="add"){const{overflowY:t,overflowX:i}=window.getComputedStyle(o);b=G(window),T=R(window),A=o.style.left,X=o.style.top,Y=window.location.href,o.style.left=`-${b}px`,o.style.top=`-${T}px`,i!=="hidden"&&(i==="scroll"||o.scrollWidth>window.innerWidth)&&o.classList.add("q-body--force-scrollbar-x"),t!=="hidden"&&(t==="scroll"||o.scrollHeight>window.innerHeight)&&o.classList.add("q-body--force-scrollbar-y"),o.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,p.is.ios===!0&&(r===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",g,c.passiveCapture),window.visualViewport.addEventListener("scroll",g,c.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",F,c.passiveCapture))}p.is.desktop===!0&&p.is.mac===!0&&window[`${e}EventListener`]("wheel",Q,c.notPassive),e==="remove"&&(p.is.ios===!0&&(r===!0?(window.visualViewport.removeEventListener("resize",g,c.passiveCapture),window.visualViewport.removeEventListener("scroll",g,c.passiveCapture)):window.removeEventListener("scroll",F,c.passiveCapture)),o.classList.remove("q-body--prevent-scroll"),o.classList.remove("q-body--force-scrollbar-x"),o.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,o.style.left=A,o.style.top=X,window.location.href===Y&&window.scrollTo(b,T),v=void 0)}function ee(e){let o="add";if(e===!0){if(w++,a!==null){clearTimeout(a),a=null;return}if(w>1)return}else{if(w===0||(w--,w>0))return;if(o="remove",p.is.ios===!0&&p.is.nativeMobile===!0){a!==null&&clearTimeout(a),a=setTimeout(()=>{U(o),a=null},100);return}}U(o)}function pe(){let e;return{preventBodyScroll(o){o!==e&&(e!==void 0||o===!0)&&(e=o,ee(o))}}}export{re as a,se as b,ue as c,de as d,ne as e,pe as f,ae as g,R as h,G as i,fe as j,ie as k,ce as s,le as u};
