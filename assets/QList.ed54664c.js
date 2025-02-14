import{c as v,a,h as c,r as b,T as I,s as K,g as q}from"./index.b52c8a51.js";import{h as k,f as R,d as $,b as w}from"./use-router-link.401dc321.js";import{a as g,u as y}from"./use-dark.5e821ebe.js";var T=v({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:n}){const l=a(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>c("div",{class:l.value},k(n.default))}}),F=v({name:"QItem",props:{...g,...R,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:n,emit:l}){const{proxy:{$q:i}}=q(),d=y(e,i),{hasLink:s,linkAttrs:h,linkClass:B,linkTag:_,navigateOnClick:C}=$(),o=b(null),r=b(null),m=a(()=>e.clickable===!0||s.value===!0||e.tag==="label"),u=a(()=>e.disable!==!0&&m.value===!0),x=a(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(d.value===!0?" q-item--dark":"")+(s.value===!0&&e.active===null?B.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(u.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),L=a(()=>{if(e.insetLevel===void 0)return null;const t=i.lang.rtl===!0?"Right":"Left";return{["padding"+t]:16+e.insetLevel*56+"px"}});function E(t){u.value===!0&&(r.value!==null&&(t.qKeyEvent!==!0&&document.activeElement===o.value?r.value.focus():document.activeElement===r.value&&o.value.focus()),C(t))}function Q(t){if(u.value===!0&&I(t,[13,32])===!0){K(t),t.qKeyEvent=!0;const f=new MouseEvent("click",t);f.qKeyEvent=!0,o.value.dispatchEvent(f)}l("keyup",t)}function S(){const t=w(n.default,[]);return u.value===!0&&t.unshift(c("div",{class:"q-focus-helper",tabindex:-1,ref:r})),t}return()=>{const t={ref:o,class:x.value,style:L.value,role:"listitem",onClick:E,onKeyup:Q};return u.value===!0?(t.tabindex=e.tabindex||"0",Object.assign(t,h.value)):m.value===!0&&(t["aria-disabled"]="true"),c(_.value,t,S())}}});const A=["ul","ol"];var N=v({name:"QList",props:{...g,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:n}){const l=q(),i=y(e,l.proxy.$q),d=a(()=>A.includes(e.tag)?null:"list"),s=a(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(i.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>c(e.tag,{class:s.value,role:d.value},k(n.default))}});export{N as Q,F as a,T as b};
