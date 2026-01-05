import{m as Bn,l as tr,c as K,v as Ne,a as f,C as Vn,s as he,X as fa,D as Js,N as Uo,o as $,_ as mr,r as le,n as lc,q as ds,i as up,t as Ue,F as ts,k as ui,b as j,j as z,w as Q,T as nh,d as ge,z as rt,aN as hp,p as fs,G as dp,aQ as rh,aE as fp,a1 as pp,a4 as mp,a0 as gp,e as sh,ae as _p,ab as yp,R as _e,x as Qn,L as Yn,E as vp}from"#entry";const wp=Bn({__name:"BaseModal",props:{modelValue:{type:Boolean,required:!0},bgOpacity:{type:Number,default:60},noPadding:{type:Boolean,default:!1},noBorder:{type:Boolean,default:!1},fullMobile:{type:Boolean,default:!1},zIndex:{type:Number,default:150}},emits:["update:modelValue"],setup(n){return(e,t)=>($(),tr(Uo,{to:"body"},[n.modelValue?($(),K("div",{key:0,class:he(["fixed inset-0 flex items-center justify-center backdrop-blur-sm transition-all duration-300",n.fullMobile?"p-0 sm:p-4":"p-1 sm:p-4"]),style:Vn({backgroundColor:`rgba(0,0,0,${n.bgOpacity/100})`,zIndex:n.zIndex}),onClick:t[1]||(t[1]=Js(r=>e.$emit("update:modelValue",!1),["self"]))},[f("div",{class:he(["bg-gray-900 shadow-[0_0_50px_-12px_rgba(0,0,0,0.8)] w-full max-w-[1360px] relative animate-fade-in-modal flex flex-col",n.fullMobile?"h-[100dvh] sm:h-auto sm:max-h-[90dvh] rounded-none sm:rounded-2xl":"max-h-[100dvh] rounded-2xl",n.noBorder?"border-none":"border border-slate-800",n.noPadding?"p-0":"p-1 md:p-8"])},[f("button",{onClick:t[0]||(t[0]=r=>e.$emit("update:modelValue",!1)),"aria-label":"Close modal",class:he(["modal-close-btn cursor-pointer absolute bg-slate-800 border-2 border-slate-600 hover:border-[#e2b04a] text-slate-400 hover:text-white rounded-full w-10 h-10 flex items-center justify-center shadow-2xl transition-all duration-200 focus:outline-none group",n.noPadding?"top-2 right-2":n.fullMobile?"top-4 right-4 sm:top-4 sm:right-4 md:-top-1 md:-right-1":"top-4 right-4 md:-top-1 md:-right-1"]),style:Vn({zIndex:n.zIndex+10})},[...t[2]||(t[2]=[f("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",class:"w-6 h-6 transition-transform group-hover:rotate-90"},[f("path",{d:"M6 6l12 12M6 18L18 6",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round"})],-1)])],6),f("div",{class:he(["overflow-y-auto custom-scrollbar flex-1",n.noPadding?"":n.fullMobile?"p-4 sm:p-0 sm:pr-1":"pr-1"])},[fa(e.$slots,"default",{},void 0,!0)],2)],2)],6)):Ne("",!0)]))}}),bp=Object.assign(mr(wp,[["__scopeId","data-v-7f0b9dd7"]]),{__name:"BaseModal"}),Ep=()=>{};var cc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ih=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Tp=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},oh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,u=s+2<n.length,d=u?n[s+2]:0,m=i>>2,y=(i&3)<<4|c>>4;let T=(c&15)<<2|d>>6,P=d&63;u||(P=64,a||(T=64)),r.push(t[m],t[y],t[T],t[P])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ih(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Tp(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const y=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||d==null||y==null)throw new Ip;const T=i<<2|c>>4;if(r.push(T),d!==64){const P=c<<4&240|d>>2;if(r.push(P),y!==64){const N=d<<6&192|y;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ip extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Cp=function(n){const e=ih(n);return oh.encodeByteArray(e,!0)},hi=function(n){return Cp(n).replace(/\./g,"")},ah=function(n){try{return oh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ap(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rp=()=>Ap().__FIREBASE_DEFAULTS__,Sp=()=>{if(typeof process>"u"||typeof cc>"u")return;const n=cc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},xp=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ah(n[1]);return e&&JSON.parse(e)},Di=()=>{try{return Ep()||Rp()||Sp()||xp()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},lh=n=>Di()?.emulatorHosts?.[n],kp=n=>{const e=lh(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},ch=()=>Di()?.config,uh=n=>Di()?.[`_${n}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function hh(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vp(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[hi(JSON.stringify(t)),hi(JSON.stringify(a)),""].join(".")}const Qr={};function Mp(){const n={prod:[],emulator:[]};for(const e of Object.keys(Qr))Qr[e]?n.emulator.push(e):n.prod.push(e);return n}function Dp(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let uc=!1;function dh(n,e){if(typeof window>"u"||typeof document>"u"||!gr(window.location.host)||Qr[n]===e||Qr[n]||uc)return;Qr[n]=e;function t(T){return`__firebase__banner__${T}`}const r="__firebase__banner",i=Mp().prod.length>0;function a(){const T=document.getElementById(r);T&&T.remove()}function c(T){T.style.display="flex",T.style.background="#7faaf0",T.style.position="fixed",T.style.bottom="5px",T.style.left="5px",T.style.padding=".5em",T.style.borderRadius="5px",T.style.alignItems="center"}function u(T,P){T.setAttribute("width","24"),T.setAttribute("id",P),T.setAttribute("height","24"),T.setAttribute("viewBox","0 0 24 24"),T.setAttribute("fill","none"),T.style.marginLeft="-6px"}function d(){const T=document.createElement("span");return T.style.cursor="pointer",T.style.marginLeft="16px",T.style.fontSize="24px",T.innerHTML=" &times;",T.onclick=()=>{uc=!0,a()},T}function m(T,P){T.setAttribute("id",P),T.innerText="Learn more",T.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",T.setAttribute("target","__blank"),T.style.paddingLeft="5px",T.style.textDecoration="underline"}function y(){const T=Dp(r),P=t("text"),N=document.getElementById(P)||document.createElement("span"),L=t("learnmore"),S=document.getElementById(L)||document.createElement("a"),D=t("preprendIcon"),G=document.getElementById(D)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(T.created){const Z=T.element;c(Z),m(S,L);const we=d();u(G,D),Z.append(G,N,S,we),document.body.appendChild(Z)}i?(N.innerText="Preview backend disconnected.",G.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(G.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,N.innerText="Preview backend running in this workspace."),N.setAttribute("id",P)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",y):y()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Np(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xe())}function Lp(){const n=Di()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Op(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Fp(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Up(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Bp(){const n=Xe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function jp(){return!Lp()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function $p(){try{return typeof indexedDB=="object"}catch{return!1}}function qp(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zp="FirebaseError";class Bt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=zp,Object.setPrototypeOf(this,Bt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ps.prototype.create)}}class ps{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Hp(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new Bt(s,c,r)}}function Hp(n,e){return n.replace(Gp,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Gp=/\{\$([^}]+)}/g;function Wp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Dt(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(hc(i)&&hc(a)){if(!Dt(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function hc(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ms(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function qr(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function zr(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Kp(n,e){const t=new Qp(n,e);return t.subscribe.bind(t)}class Qp{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Yp(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Io),s.error===void 0&&(s.error=Io),s.complete===void 0&&(s.complete=Io);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Yp(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Io(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(n){return n&&n._delegate?n._delegate:n}class Nn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Pp;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Zp(e))try{this.getOrInitializeService({instanceIdentifier:Sn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Sn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Sn){return this.instances.has(e)}getOptions(e=Sn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Xp(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Sn){return this.component?this.component.multipleInstances?e:Sn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Xp(n){return n===Sn?void 0:n}function Zp(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Jp(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(de||(de={}));const tm={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},nm=de.INFO,rm={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},sm=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=rm[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pa{constructor(e){this.name=e,this._logLevel=nm,this._logHandler=sm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?tm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const im=(n,e)=>e.some(t=>n instanceof t);let dc,fc;function om(){return dc||(dc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function am(){return fc||(fc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fh=new WeakMap,Bo=new WeakMap,ph=new WeakMap,Co=new WeakMap,ma=new WeakMap;function lm(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(on(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&fh.set(t,n)}).catch(()=>{}),ma.set(e,n),e}function cm(n){if(Bo.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Bo.set(n,e)}let jo={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Bo.get(n);if(e==="objectStoreNames")return n.objectStoreNames||ph.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return on(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function um(n){jo=n(jo)}function hm(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Ao(this),e,...t);return ph.set(r,e.sort?e.sort():[e]),on(r)}:am().includes(n)?function(...e){return n.apply(Ao(this),e),on(fh.get(this))}:function(...e){return on(n.apply(Ao(this),e))}}function dm(n){return typeof n=="function"?hm(n):(n instanceof IDBTransaction&&cm(n),im(n,om())?new Proxy(n,jo):n)}function on(n){if(n instanceof IDBRequest)return lm(n);if(Co.has(n))return Co.get(n);const e=dm(n);return e!==n&&(Co.set(n,e),ma.set(e,n)),e}const Ao=n=>ma.get(n);function fm(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),c=on(a);return r&&a.addEventListener("upgradeneeded",u=>{r(on(a.result),u.oldVersion,u.newVersion,on(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const pm=["get","getKey","getAll","getAllKeys","count"],mm=["put","add","delete","clear"],Ro=new Map;function pc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ro.get(e))return Ro.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=mm.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||pm.includes(t)))return;const i=async function(a,...c){const u=this.transaction(a,s?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),s&&u.done]))[0]};return Ro.set(e,i),i}um(n=>({...n,get:(e,t,r)=>pc(e,t)||n.get(e,t,r),has:(e,t)=>!!pc(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(_m(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function _m(n){return n.getComponent()?.type==="VERSION"}const $o="@firebase/app",mc="0.14.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt=new pa("@firebase/app"),ym="@firebase/app-compat",vm="@firebase/analytics-compat",wm="@firebase/analytics",bm="@firebase/app-check-compat",Em="@firebase/app-check",Tm="@firebase/auth",Im="@firebase/auth-compat",Cm="@firebase/database",Am="@firebase/data-connect",Rm="@firebase/database-compat",Sm="@firebase/functions",xm="@firebase/functions-compat",km="@firebase/installations",Pm="@firebase/installations-compat",Vm="@firebase/messaging",Mm="@firebase/messaging-compat",Dm="@firebase/performance",Nm="@firebase/performance-compat",Lm="@firebase/remote-config",Om="@firebase/remote-config-compat",Fm="@firebase/storage",Um="@firebase/storage-compat",Bm="@firebase/firestore",jm="@firebase/ai",$m="@firebase/firestore-compat",qm="firebase",zm="12.3.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qo="[DEFAULT]",Hm={[$o]:"fire-core",[ym]:"fire-core-compat",[wm]:"fire-analytics",[vm]:"fire-analytics-compat",[Em]:"fire-app-check",[bm]:"fire-app-check-compat",[Tm]:"fire-auth",[Im]:"fire-auth-compat",[Cm]:"fire-rtdb",[Am]:"fire-data-connect",[Rm]:"fire-rtdb-compat",[Sm]:"fire-fn",[xm]:"fire-fn-compat",[km]:"fire-iid",[Pm]:"fire-iid-compat",[Vm]:"fire-fcm",[Mm]:"fire-fcm-compat",[Dm]:"fire-perf",[Nm]:"fire-perf-compat",[Lm]:"fire-rc",[Om]:"fire-rc-compat",[Fm]:"fire-gcs",[Um]:"fire-gcs-compat",[Bm]:"fire-fst",[$m]:"fire-fst-compat",[jm]:"fire-vertex","fire-js":"fire-js",[qm]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns=new Map,Gm=new Map,zo=new Map;function gc(n,e){try{n.container.addComponent(e)}catch(t){Nt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function or(n){const e=n.name;if(zo.has(e))return Nt.debug(`There were multiple attempts to register component ${e}.`),!1;zo.set(e,n);for(const t of ns.values())gc(t,n);for(const t of Gm.values())gc(t,n);return!0}function ga(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ct(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},an=new ps("app","Firebase",Wm);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Nn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw an.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r=zm;function mh(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:qo,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw an.create("bad-app-name",{appName:String(s)});if(t||(t=ch()),!t)throw an.create("no-options");const i=ns.get(s);if(i){if(Dt(t,i.options)&&Dt(r,i.config))return i;throw an.create("duplicate-app",{appName:s})}const a=new em(s);for(const u of zo.values())a.addComponent(u);const c=new Km(t,r,a);return ns.set(s,c),c}function gh(n=qo){const e=ns.get(n);if(!e&&n===qo&&ch())return mh();if(!e)throw an.create("no-app",{appName:n});return e}function _c(){return Array.from(ns.values())}function ln(n,e,t){let r=Hm[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Nt.warn(a.join(" "));return}or(new Nn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qm="firebase-heartbeat-database",Ym=1,rs="firebase-heartbeat-store";let So=null;function _h(){return So||(So=fm(Qm,Ym,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(rs)}catch(t){console.warn(t)}}}}).catch(n=>{throw an.create("idb-open",{originalErrorMessage:n.message})})),So}async function Jm(n){try{const t=(await _h()).transaction(rs),r=await t.objectStore(rs).get(yh(n));return await t.done,r}catch(e){if(e instanceof Bt)Nt.warn(e.message);else{const t=an.create("idb-get",{originalErrorMessage:e?.message});Nt.warn(t.message)}}}async function yc(n,e){try{const r=(await _h()).transaction(rs,"readwrite");await r.objectStore(rs).put(e,yh(n)),await r.done}catch(t){if(t instanceof Bt)Nt.warn(t.message);else{const r=an.create("idb-set",{originalErrorMessage:t?.message});Nt.warn(r.message)}}}function yh(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xm=1024,Zm=30;class eg{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ng(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=vc();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats.length>Zm){const s=rg(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Nt.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=vc(),{heartbeatsToSend:t,unsentEntries:r}=tg(this._heartbeatsCache.heartbeats),s=hi(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return Nt.warn(e),""}}}function vc(){return new Date().toISOString().substring(0,10)}function tg(n,e=Xm){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),wc(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),wc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class ng{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $p()?qp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Jm(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return yc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return yc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function wc(n){return hi(JSON.stringify({version:2,heartbeats:n})).length}function rg(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sg(n){or(new Nn("platform-logger",e=>new gm(e),"PRIVATE")),or(new Nn("heartbeat",e=>new eg(e),"PRIVATE")),ln($o,mc,n),ln($o,mc,"esm2020"),ln("fire-js","")}sg("");var ig="firebase",og="12.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ln(ig,og,"app");var bc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var cn,vh;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,_){function g(){}g.prototype=_.prototype,I.F=_.prototype,I.prototype=new g,I.prototype.constructor=I,I.D=function(E,b,A){for(var w=Array(arguments.length-2),Pe=2;Pe<arguments.length;Pe++)w[Pe-2]=arguments[Pe];return _.prototype[b].apply(E,w)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,_,g){g||(g=0);const E=Array(16);if(typeof _=="string")for(var b=0;b<16;++b)E[b]=_.charCodeAt(g++)|_.charCodeAt(g++)<<8|_.charCodeAt(g++)<<16|_.charCodeAt(g++)<<24;else for(b=0;b<16;++b)E[b]=_[g++]|_[g++]<<8|_[g++]<<16|_[g++]<<24;_=I.g[0],g=I.g[1],b=I.g[2];let A=I.g[3],w;w=_+(A^g&(b^A))+E[0]+3614090360&4294967295,_=g+(w<<7&4294967295|w>>>25),w=A+(b^_&(g^b))+E[1]+3905402710&4294967295,A=_+(w<<12&4294967295|w>>>20),w=b+(g^A&(_^g))+E[2]+606105819&4294967295,b=A+(w<<17&4294967295|w>>>15),w=g+(_^b&(A^_))+E[3]+3250441966&4294967295,g=b+(w<<22&4294967295|w>>>10),w=_+(A^g&(b^A))+E[4]+4118548399&4294967295,_=g+(w<<7&4294967295|w>>>25),w=A+(b^_&(g^b))+E[5]+1200080426&4294967295,A=_+(w<<12&4294967295|w>>>20),w=b+(g^A&(_^g))+E[6]+2821735955&4294967295,b=A+(w<<17&4294967295|w>>>15),w=g+(_^b&(A^_))+E[7]+4249261313&4294967295,g=b+(w<<22&4294967295|w>>>10),w=_+(A^g&(b^A))+E[8]+1770035416&4294967295,_=g+(w<<7&4294967295|w>>>25),w=A+(b^_&(g^b))+E[9]+2336552879&4294967295,A=_+(w<<12&4294967295|w>>>20),w=b+(g^A&(_^g))+E[10]+4294925233&4294967295,b=A+(w<<17&4294967295|w>>>15),w=g+(_^b&(A^_))+E[11]+2304563134&4294967295,g=b+(w<<22&4294967295|w>>>10),w=_+(A^g&(b^A))+E[12]+1804603682&4294967295,_=g+(w<<7&4294967295|w>>>25),w=A+(b^_&(g^b))+E[13]+4254626195&4294967295,A=_+(w<<12&4294967295|w>>>20),w=b+(g^A&(_^g))+E[14]+2792965006&4294967295,b=A+(w<<17&4294967295|w>>>15),w=g+(_^b&(A^_))+E[15]+1236535329&4294967295,g=b+(w<<22&4294967295|w>>>10),w=_+(b^A&(g^b))+E[1]+4129170786&4294967295,_=g+(w<<5&4294967295|w>>>27),w=A+(g^b&(_^g))+E[6]+3225465664&4294967295,A=_+(w<<9&4294967295|w>>>23),w=b+(_^g&(A^_))+E[11]+643717713&4294967295,b=A+(w<<14&4294967295|w>>>18),w=g+(A^_&(b^A))+E[0]+3921069994&4294967295,g=b+(w<<20&4294967295|w>>>12),w=_+(b^A&(g^b))+E[5]+3593408605&4294967295,_=g+(w<<5&4294967295|w>>>27),w=A+(g^b&(_^g))+E[10]+38016083&4294967295,A=_+(w<<9&4294967295|w>>>23),w=b+(_^g&(A^_))+E[15]+3634488961&4294967295,b=A+(w<<14&4294967295|w>>>18),w=g+(A^_&(b^A))+E[4]+3889429448&4294967295,g=b+(w<<20&4294967295|w>>>12),w=_+(b^A&(g^b))+E[9]+568446438&4294967295,_=g+(w<<5&4294967295|w>>>27),w=A+(g^b&(_^g))+E[14]+3275163606&4294967295,A=_+(w<<9&4294967295|w>>>23),w=b+(_^g&(A^_))+E[3]+4107603335&4294967295,b=A+(w<<14&4294967295|w>>>18),w=g+(A^_&(b^A))+E[8]+1163531501&4294967295,g=b+(w<<20&4294967295|w>>>12),w=_+(b^A&(g^b))+E[13]+2850285829&4294967295,_=g+(w<<5&4294967295|w>>>27),w=A+(g^b&(_^g))+E[2]+4243563512&4294967295,A=_+(w<<9&4294967295|w>>>23),w=b+(_^g&(A^_))+E[7]+1735328473&4294967295,b=A+(w<<14&4294967295|w>>>18),w=g+(A^_&(b^A))+E[12]+2368359562&4294967295,g=b+(w<<20&4294967295|w>>>12),w=_+(g^b^A)+E[5]+4294588738&4294967295,_=g+(w<<4&4294967295|w>>>28),w=A+(_^g^b)+E[8]+2272392833&4294967295,A=_+(w<<11&4294967295|w>>>21),w=b+(A^_^g)+E[11]+1839030562&4294967295,b=A+(w<<16&4294967295|w>>>16),w=g+(b^A^_)+E[14]+4259657740&4294967295,g=b+(w<<23&4294967295|w>>>9),w=_+(g^b^A)+E[1]+2763975236&4294967295,_=g+(w<<4&4294967295|w>>>28),w=A+(_^g^b)+E[4]+1272893353&4294967295,A=_+(w<<11&4294967295|w>>>21),w=b+(A^_^g)+E[7]+4139469664&4294967295,b=A+(w<<16&4294967295|w>>>16),w=g+(b^A^_)+E[10]+3200236656&4294967295,g=b+(w<<23&4294967295|w>>>9),w=_+(g^b^A)+E[13]+681279174&4294967295,_=g+(w<<4&4294967295|w>>>28),w=A+(_^g^b)+E[0]+3936430074&4294967295,A=_+(w<<11&4294967295|w>>>21),w=b+(A^_^g)+E[3]+3572445317&4294967295,b=A+(w<<16&4294967295|w>>>16),w=g+(b^A^_)+E[6]+76029189&4294967295,g=b+(w<<23&4294967295|w>>>9),w=_+(g^b^A)+E[9]+3654602809&4294967295,_=g+(w<<4&4294967295|w>>>28),w=A+(_^g^b)+E[12]+3873151461&4294967295,A=_+(w<<11&4294967295|w>>>21),w=b+(A^_^g)+E[15]+530742520&4294967295,b=A+(w<<16&4294967295|w>>>16),w=g+(b^A^_)+E[2]+3299628645&4294967295,g=b+(w<<23&4294967295|w>>>9),w=_+(b^(g|~A))+E[0]+4096336452&4294967295,_=g+(w<<6&4294967295|w>>>26),w=A+(g^(_|~b))+E[7]+1126891415&4294967295,A=_+(w<<10&4294967295|w>>>22),w=b+(_^(A|~g))+E[14]+2878612391&4294967295,b=A+(w<<15&4294967295|w>>>17),w=g+(A^(b|~_))+E[5]+4237533241&4294967295,g=b+(w<<21&4294967295|w>>>11),w=_+(b^(g|~A))+E[12]+1700485571&4294967295,_=g+(w<<6&4294967295|w>>>26),w=A+(g^(_|~b))+E[3]+2399980690&4294967295,A=_+(w<<10&4294967295|w>>>22),w=b+(_^(A|~g))+E[10]+4293915773&4294967295,b=A+(w<<15&4294967295|w>>>17),w=g+(A^(b|~_))+E[1]+2240044497&4294967295,g=b+(w<<21&4294967295|w>>>11),w=_+(b^(g|~A))+E[8]+1873313359&4294967295,_=g+(w<<6&4294967295|w>>>26),w=A+(g^(_|~b))+E[15]+4264355552&4294967295,A=_+(w<<10&4294967295|w>>>22),w=b+(_^(A|~g))+E[6]+2734768916&4294967295,b=A+(w<<15&4294967295|w>>>17),w=g+(A^(b|~_))+E[13]+1309151649&4294967295,g=b+(w<<21&4294967295|w>>>11),w=_+(b^(g|~A))+E[4]+4149444226&4294967295,_=g+(w<<6&4294967295|w>>>26),w=A+(g^(_|~b))+E[11]+3174756917&4294967295,A=_+(w<<10&4294967295|w>>>22),w=b+(_^(A|~g))+E[2]+718787259&4294967295,b=A+(w<<15&4294967295|w>>>17),w=g+(A^(b|~_))+E[9]+3951481745&4294967295,I.g[0]=I.g[0]+_&4294967295,I.g[1]=I.g[1]+(b+(w<<21&4294967295|w>>>11))&4294967295,I.g[2]=I.g[2]+b&4294967295,I.g[3]=I.g[3]+A&4294967295}r.prototype.v=function(I,_){_===void 0&&(_=I.length);const g=_-this.blockSize,E=this.C;let b=this.h,A=0;for(;A<_;){if(b==0)for(;A<=g;)s(this,I,A),A+=this.blockSize;if(typeof I=="string"){for(;A<_;)if(E[b++]=I.charCodeAt(A++),b==this.blockSize){s(this,E),b=0;break}}else for(;A<_;)if(E[b++]=I[A++],b==this.blockSize){s(this,E),b=0;break}}this.h=b,this.o+=_},r.prototype.A=function(){var I=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);I[0]=128;for(var _=1;_<I.length-8;++_)I[_]=0;_=this.o*8;for(var g=I.length-8;g<I.length;++g)I[g]=_&255,_/=256;for(this.v(I),I=Array(16),_=0,g=0;g<4;++g)for(let E=0;E<32;E+=8)I[_++]=this.g[g]>>>E&255;return I};function i(I,_){var g=c;return Object.prototype.hasOwnProperty.call(g,I)?g[I]:g[I]=_(I)}function a(I,_){this.h=_;const g=[];let E=!0;for(let b=I.length-1;b>=0;b--){const A=I[b]|0;E&&A==_||(g[b]=A,E=!1)}this.g=g}var c={};function u(I){return-128<=I&&I<128?i(I,function(_){return new a([_|0],_<0?-1:0)}):new a([I|0],I<0?-1:0)}function d(I){if(isNaN(I)||!isFinite(I))return y;if(I<0)return S(d(-I));const _=[];let g=1;for(let E=0;I>=g;E++)_[E]=I/g|0,g*=4294967296;return new a(_,0)}function m(I,_){if(I.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(I.charAt(0)=="-")return S(m(I.substring(1),_));if(I.indexOf("-")>=0)throw Error('number format error: interior "-" character');const g=d(Math.pow(_,8));let E=y;for(let A=0;A<I.length;A+=8){var b=Math.min(8,I.length-A);const w=parseInt(I.substring(A,A+b),_);b<8?(b=d(Math.pow(_,b)),E=E.j(b).add(d(w))):(E=E.j(g),E=E.add(d(w)))}return E}var y=u(0),T=u(1),P=u(16777216);n=a.prototype,n.m=function(){if(L(this))return-S(this).m();let I=0,_=1;for(let g=0;g<this.g.length;g++){const E=this.i(g);I+=(E>=0?E:4294967296+E)*_,_*=4294967296}return I},n.toString=function(I){if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(N(this))return"0";if(L(this))return"-"+S(this).toString(I);const _=d(Math.pow(I,6));var g=this;let E="";for(;;){const b=we(g,_).g;g=D(g,b.j(_));let A=((g.g.length>0?g.g[0]:g.h)>>>0).toString(I);if(g=b,N(g))return A+E;for(;A.length<6;)A="0"+A;E=A+E}},n.i=function(I){return I<0?0:I<this.g.length?this.g[I]:this.h};function N(I){if(I.h!=0)return!1;for(let _=0;_<I.g.length;_++)if(I.g[_]!=0)return!1;return!0}function L(I){return I.h==-1}n.l=function(I){return I=D(this,I),L(I)?-1:N(I)?0:1};function S(I){const _=I.g.length,g=[];for(let E=0;E<_;E++)g[E]=~I.g[E];return new a(g,~I.h).add(T)}n.abs=function(){return L(this)?S(this):this},n.add=function(I){const _=Math.max(this.g.length,I.g.length),g=[];let E=0;for(let b=0;b<=_;b++){let A=E+(this.i(b)&65535)+(I.i(b)&65535),w=(A>>>16)+(this.i(b)>>>16)+(I.i(b)>>>16);E=w>>>16,A&=65535,w&=65535,g[b]=w<<16|A}return new a(g,g[g.length-1]&-2147483648?-1:0)};function D(I,_){return I.add(S(_))}n.j=function(I){if(N(this)||N(I))return y;if(L(this))return L(I)?S(this).j(S(I)):S(S(this).j(I));if(L(I))return S(this.j(S(I)));if(this.l(P)<0&&I.l(P)<0)return d(this.m()*I.m());const _=this.g.length+I.g.length,g=[];for(var E=0;E<2*_;E++)g[E]=0;for(E=0;E<this.g.length;E++)for(let b=0;b<I.g.length;b++){const A=this.i(E)>>>16,w=this.i(E)&65535,Pe=I.i(b)>>>16,$e=I.i(b)&65535;g[2*E+2*b]+=w*$e,G(g,2*E+2*b),g[2*E+2*b+1]+=A*$e,G(g,2*E+2*b+1),g[2*E+2*b+1]+=w*Pe,G(g,2*E+2*b+1),g[2*E+2*b+2]+=A*Pe,G(g,2*E+2*b+2)}for(I=0;I<_;I++)g[I]=g[2*I+1]<<16|g[2*I];for(I=_;I<2*_;I++)g[I]=0;return new a(g,0)};function G(I,_){for(;(I[_]&65535)!=I[_];)I[_+1]+=I[_]>>>16,I[_]&=65535,_++}function Z(I,_){this.g=I,this.h=_}function we(I,_){if(N(_))throw Error("division by zero");if(N(I))return new Z(y,y);if(L(I))return _=we(S(I),_),new Z(S(_.g),S(_.h));if(L(_))return _=we(I,S(_)),new Z(S(_.g),_.h);if(I.g.length>30){if(L(I)||L(_))throw Error("slowDivide_ only works with positive integers.");for(var g=T,E=_;E.l(I)<=0;)g=Se(g),E=Se(E);var b=ve(g,1),A=ve(E,1);for(E=ve(E,2),g=ve(g,2);!N(E);){var w=A.add(E);w.l(I)<=0&&(b=b.add(g),A=w),E=ve(E,1),g=ve(g,1)}return _=D(I,b.j(_)),new Z(b,_)}for(b=y;I.l(_)>=0;){for(g=Math.max(1,Math.floor(I.m()/_.m())),E=Math.ceil(Math.log(g)/Math.LN2),E=E<=48?1:Math.pow(2,E-48),A=d(g),w=A.j(_);L(w)||w.l(I)>0;)g-=E,A=d(g),w=A.j(_);N(A)&&(A=T),b=b.add(A),I=D(I,w)}return new Z(b,I)}n.B=function(I){return we(this,I).h},n.and=function(I){const _=Math.max(this.g.length,I.g.length),g=[];for(let E=0;E<_;E++)g[E]=this.i(E)&I.i(E);return new a(g,this.h&I.h)},n.or=function(I){const _=Math.max(this.g.length,I.g.length),g=[];for(let E=0;E<_;E++)g[E]=this.i(E)|I.i(E);return new a(g,this.h|I.h)},n.xor=function(I){const _=Math.max(this.g.length,I.g.length),g=[];for(let E=0;E<_;E++)g[E]=this.i(E)^I.i(E);return new a(g,this.h^I.h)};function Se(I){const _=I.g.length+1,g=[];for(let E=0;E<_;E++)g[E]=I.i(E)<<1|I.i(E-1)>>>31;return new a(g,I.h)}function ve(I,_){const g=_>>5;_%=32;const E=I.g.length-g,b=[];for(let A=0;A<E;A++)b[A]=_>0?I.i(A+g)>>>_|I.i(A+g+1)<<32-_:I.i(A+g);return new a(b,I.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,vh=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,cn=a}).apply(typeof bc<"u"?bc:typeof self<"u"?self:typeof window<"u"?window:{});var $s=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var wh,Hr,bh,Xs,Ho,Eh,Th,Ih;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof $s=="object"&&$s];for(var l=0;l<o.length;++l){var h=o[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function s(o,l){if(l)e:{var h=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var R=o[p];if(!(R in h))break e;h=h[R]}o=o[o.length-1],p=h[o],l=l(p),l!=p&&l!=null&&e(h,o,{configurable:!0,writable:!0,value:l})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(l){var h=[],p;for(p in l)Object.prototype.hasOwnProperty.call(l,p)&&h.push([p,l[p]]);return h}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function c(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function u(o,l,h){return o.call.apply(o.bind,arguments)}function d(o,l,h){return d=u,d.apply(null,arguments)}function m(o,l){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function y(o,l){function h(){}h.prototype=l.prototype,o.Z=l.prototype,o.prototype=new h,o.prototype.constructor=o,o.Ob=function(p,R,k){for(var U=Array(arguments.length-2),ce=2;ce<arguments.length;ce++)U[ce-2]=arguments[ce];return l.prototype[R].apply(p,U)}}var T=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function P(o){const l=o.length;if(l>0){const h=Array(l);for(let p=0;p<l;p++)h[p]=o[p];return h}return[]}function N(o,l){for(let p=1;p<arguments.length;p++){const R=arguments[p];var h=typeof R;if(h=h!="object"?h:R?Array.isArray(R)?"array":h:"null",h=="array"||h=="object"&&typeof R.length=="number"){h=o.length||0;const k=R.length||0;o.length=h+k;for(let U=0;U<k;U++)o[h+U]=R[U]}else o.push(R)}}class L{constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return this.h>0?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function S(o){a.setTimeout(()=>{throw o},0)}function D(){var o=I;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class G{constructor(){this.h=this.g=null}add(l,h){const p=Z.get();p.set(l,h),this.h?this.h.next=p:this.g=p,this.h=p}}var Z=new L(()=>new we,o=>o.reset());class we{constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Se,ve=!1,I=new G,_=()=>{const o=Promise.resolve(void 0);Se=()=>{o.then(g)}};function g(){for(var o;o=D();){try{o.h.call(o.g)}catch(h){S(h)}var l=Z;l.j(o),l.h<100&&(l.h++,o.next=l.g,l.g=o)}ve=!1}function E(){this.u=this.u,this.C=this.C}E.prototype.u=!1,E.prototype.dispose=function(){this.u||(this.u=!0,this.N())},E.prototype[Symbol.dispose]=function(){this.dispose()},E.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function b(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}b.prototype.h=function(){this.defaultPrevented=!0};var A=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};a.addEventListener("test",h,l),a.removeEventListener("test",h,l)}catch{}return o})();function w(o){return/^[\s\xa0]*$/.test(o)}function Pe(o,l){b.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,l)}y(Pe,b),Pe.prototype.init=function(o,l){const h=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget,l||(h=="mouseover"?l=o.fromElement:h=="mouseout"&&(l=o.toElement)),this.relatedTarget=l,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&Pe.Z.h.call(this)},Pe.prototype.h=function(){Pe.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var $e="closure_listenable_"+(Math.random()*1e6|0),at=0;function Ht(o,l,h,p,R){this.listener=o,this.proxy=null,this.src=l,this.type=h,this.capture=!!p,this.ha=R,this.key=++at,this.da=this.fa=!1}function Gt(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Wt(o,l,h){for(const p in o)l.call(h,o[p],p,o)}function x(o,l){for(const h in o)l.call(void 0,o[h],h,o)}function C(o){const l={};for(const h in o)l[h]=o[h];return l}const Y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ee(o,l){let h,p;for(let R=1;R<arguments.length;R++){p=arguments[R];for(h in p)o[h]=p[h];for(let k=0;k<Y.length;k++)h=Y[k],Object.prototype.hasOwnProperty.call(p,h)&&(o[h]=p[h])}}function re(o){this.src=o,this.g={},this.h=0}re.prototype.add=function(o,l,h,p,R){const k=o.toString();o=this.g[k],o||(o=this.g[k]=[],this.h++);const U=F(o,l,p,R);return U>-1?(l=o[U],h||(l.fa=!1)):(l=new Ht(l,this.src,k,!!p,R),l.fa=h,o.push(l)),l};function oe(o,l){const h=l.type;if(h in o.g){var p=o.g[h],R=Array.prototype.indexOf.call(p,l,void 0),k;(k=R>=0)&&Array.prototype.splice.call(p,R,1),k&&(Gt(l),o.g[h].length==0&&(delete o.g[h],o.h--))}}function F(o,l,h,p){for(let R=0;R<o.length;++R){const k=o[R];if(!k.da&&k.listener==l&&k.capture==!!h&&k.ha==p)return R}return-1}var v="closure_lm_"+(Math.random()*1e6|0),J={};function se(o,l,h,p,R){if(Array.isArray(l)){for(let k=0;k<l.length;k++)se(o,l[k],h,p,R);return null}return h=ht(h),o&&o[$e]?o.J(l,h,c(p)?!!p.capture:!1,R):O(o,l,h,!1,p,R)}function O(o,l,h,p,R,k){if(!l)throw Error("Invalid event type");const U=c(R)?!!R.capture:!!R;let ce=Ze(o);if(ce||(o[v]=ce=new re(o)),h=ce.add(l,h,p,U,k),h.proxy)return h;if(p=q(),h.proxy=p,p.src=o,p.listener=h,o.addEventListener)A||(R=U),R===void 0&&(R=!1),o.addEventListener(l.toString(),p,R);else if(o.attachEvent)o.attachEvent(ue(l.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function q(){function o(h){return l.call(o.src,o.listener,h)}const l=Ke;return o}function W(o,l,h,p,R){if(Array.isArray(l))for(var k=0;k<l.length;k++)W(o,l[k],h,p,R);else p=c(p)?!!p.capture:!!p,h=ht(h),o&&o[$e]?(o=o.i,k=String(l).toString(),k in o.g&&(l=o.g[k],h=F(l,h,p,R),h>-1&&(Gt(l[h]),Array.prototype.splice.call(l,h,1),l.length==0&&(delete o.g[k],o.h--)))):o&&(o=Ze(o))&&(l=o.g[l.toString()],o=-1,l&&(o=F(l,h,p,R)),(h=o>-1?l[o]:null)&&Ve(h))}function Ve(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[$e])oe(l.i,o);else{var h=o.type,p=o.proxy;l.removeEventListener?l.removeEventListener(h,p,o.capture):l.detachEvent?l.detachEvent(ue(h),p):l.addListener&&l.removeListener&&l.removeListener(p),(h=Ze(l))?(oe(h,o),h.h==0&&(h.src=null,l[v]=null)):Gt(o)}}}function ue(o){return o in J?J[o]:J[o]="on"+o}function Ke(o,l){if(o.da)o=!0;else{l=new Pe(l,this);const h=o.listener,p=o.ha||o.src;o.fa&&Ve(o),o=h.call(p,l)}return o}function Ze(o){return o=o[v],o instanceof re?o:null}var et="__closure_events_fn_"+(Math.random()*1e9>>>0);function ht(o){return typeof o=="function"?o:(o[et]||(o[et]=function(l){return o.handleEvent(l)}),o[et])}function Ae(){E.call(this),this.i=new re(this),this.M=this,this.G=null}y(Ae,E),Ae.prototype[$e]=!0,Ae.prototype.removeEventListener=function(o,l,h,p){W(this,o,l,h,p)};function Ee(o,l){var h,p=o.G;if(p)for(h=[];p;p=p.G)h.push(p);if(o=o.M,p=l.type||l,typeof l=="string")l=new b(l,o);else if(l instanceof b)l.target=l.target||o;else{var R=l;l=new b(p,o),ee(l,R)}R=!0;let k,U;if(h)for(U=h.length-1;U>=0;U--)k=l.g=h[U],R=zn(k,p,!0,l)&&R;if(k=l.g=o,R=zn(k,p,!0,l)&&R,R=zn(k,p,!1,l)&&R,h)for(U=0;U<h.length;U++)k=l.g=h[U],R=zn(k,p,!1,l)&&R}Ae.prototype.N=function(){if(Ae.Z.N.call(this),this.i){var o=this.i;for(const l in o.g){const h=o.g[l];for(let p=0;p<h.length;p++)Gt(h[p]);delete o.g[l],o.h--}}this.G=null},Ae.prototype.J=function(o,l,h,p){return this.i.add(String(o),l,!1,h,p)},Ae.prototype.K=function(o,l,h,p){return this.i.add(String(o),l,!0,h,p)};function zn(o,l,h,p){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();let R=!0;for(let k=0;k<l.length;++k){const U=l[k];if(U&&!U.da&&U.capture==h){const ce=U.listener,Fe=U.ha||U.src;U.fa&&oe(o.i,U),R=ce.call(Fe,p)!==!1&&R}}return R&&!p.defaultPrevented}function oo(o,l){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=d(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(l)>2147483647?-1:a.setTimeout(o,l||0)}function Cs(o){o.g=oo(()=>{o.g=null,o.i&&(o.i=!1,Cs(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class As extends E{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Cs(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function vn(o){E.call(this),this.h=o,this.g={}}y(vn,E);var Cr=[];function Rs(o){Wt(o.g,function(l,h){this.g.hasOwnProperty(h)&&Ve(l)},o),o.g={}}vn.prototype.N=function(){vn.Z.N.call(this),Rs(this)},vn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ar=a.JSON.stringify,Ss=a.JSON.parse,xs=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function Hn(){}function ks(){}var wn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ao(){b.call(this,"d")}y(ao,b);function lo(){b.call(this,"c")}y(lo,b);var bn={},vl=null;function Ps(){return vl=vl||new Ae}bn.Ia="serverreachability";function wl(o){b.call(this,bn.Ia,o)}y(wl,b);function Rr(o){const l=Ps();Ee(l,new wl(l))}bn.STAT_EVENT="statevent";function bl(o,l){b.call(this,bn.STAT_EVENT,o),this.stat=l}y(bl,b);function tt(o){const l=Ps();Ee(l,new bl(l,o))}bn.Ja="timingevent";function El(o,l){b.call(this,bn.Ja,o),this.size=l}y(El,b);function Sr(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},l)}function xr(){this.g=!0}xr.prototype.ua=function(){this.g=!1};function $f(o,l,h,p,R,k){o.info(function(){if(o.g)if(k){var U="",ce=k.split("&");for(let be=0;be<ce.length;be++){var Fe=ce[be].split("=");if(Fe.length>1){const qe=Fe[0];Fe=Fe[1];const vt=qe.split("_");U=vt.length>=2&&vt[1]=="type"?U+(qe+"="+Fe+"&"):U+(qe+"=redacted&")}}}else U=null;else U=k;return"XMLHTTP REQ ("+p+") [attempt "+R+"]: "+l+`
`+h+`
`+U})}function qf(o,l,h,p,R,k,U){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+R+"]: "+l+`
`+h+`
`+k+" "+U})}function Gn(o,l,h,p){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+Hf(o,h)+(p?" "+p:"")})}function zf(o,l){o.info(function(){return"TIMEOUT: "+l})}xr.prototype.info=function(){};function Hf(o,l){if(!o.g)return l;if(!l)return null;try{const k=JSON.parse(l);if(k){for(o=0;o<k.length;o++)if(Array.isArray(k[o])){var h=k[o];if(!(h.length<2)){var p=h[1];if(Array.isArray(p)&&!(p.length<1)){var R=p[0];if(R!="noop"&&R!="stop"&&R!="close")for(let U=1;U<p.length;U++)p[U]=""}}}}return Ar(k)}catch{return l}}var Vs={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Tl={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Il;function co(){}y(co,Hn),co.prototype.g=function(){return new XMLHttpRequest},Il=new co;function kr(o){return encodeURIComponent(String(o))}function Gf(o){var l=1;o=o.split(":");const h=[];for(;l>0&&o.length;)h.push(o.shift()),l--;return o.length&&h.push(o.join(":")),h}function Kt(o,l,h,p){this.j=o,this.i=l,this.l=h,this.S=p||1,this.V=new vn(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Cl}function Cl(){this.i=null,this.g="",this.h=!1}var Al={},uo={};function ho(o,l,h){o.M=1,o.A=Ds(yt(l)),o.u=h,o.R=!0,Rl(o,null)}function Rl(o,l){o.F=Date.now(),Ms(o),o.B=yt(o.A);var h=o.B,p=o.S;Array.isArray(p)||(p=[String(p)]),Bl(h.i,"t",p),o.C=0,h=o.j.L,o.h=new Cl,o.g=sc(o.j,h?l:null,!o.u),o.P>0&&(o.O=new As(d(o.Y,o,o.g),o.P)),l=o.V,h=o.g,p=o.ba;var R="readystatechange";Array.isArray(R)||(R&&(Cr[0]=R.toString()),R=Cr);for(let k=0;k<R.length;k++){const U=se(h,R[k],p||l.handleEvent,!1,l.h||l);if(!U)break;l.g[U.key]=U}l=o.J?C(o.J):{},o.u?(o.v||(o.v="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,l)):(o.v="GET",o.g.ea(o.B,o.v,null,l)),Rr(),$f(o.i,o.v,o.B,o.l,o.S,o.u)}Kt.prototype.ba=function(o){o=o.target;const l=this.O;l&&Jt(o)==3?l.j():this.Y(o)},Kt.prototype.Y=function(o){try{if(o==this.g)e:{const ce=Jt(this.g),Fe=this.g.ya(),be=this.g.ca();if(!(ce<3)&&(ce!=3||this.g&&(this.h.h||this.g.la()||Wl(this.g)))){this.K||ce!=4||Fe==7||(Fe==8||be<=0?Rr(3):Rr(2)),fo(this);var l=this.g.ca();this.X=l;var h=Wf(this);if(this.o=l==200,qf(this.i,this.v,this.B,this.l,this.S,ce,l),this.o){if(this.U&&!this.L){t:{if(this.g){var p,R=this.g;if((p=R.g?R.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(p)){var k=p;break t}}k=null}if(o=k)Gn(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,po(this,o);else{this.o=!1,this.m=3,tt(12),En(this),Pr(this);break e}}if(this.R){o=!0;let qe;for(;!this.K&&this.C<h.length;)if(qe=Kf(this,h),qe==uo){ce==4&&(this.m=4,tt(14),o=!1),Gn(this.i,this.l,null,"[Incomplete Response]");break}else if(qe==Al){this.m=4,tt(15),Gn(this.i,this.l,h,"[Invalid Chunk]"),o=!1;break}else Gn(this.i,this.l,qe,null),po(this,qe);if(Sl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ce!=4||h.length!=0||this.h.h||(this.m=1,tt(16),o=!1),this.o=this.o&&o,!o)Gn(this.i,this.l,h,"[Invalid Chunked Response]"),En(this),Pr(this);else if(h.length>0&&!this.W){this.W=!0;var U=this.j;U.g==this&&U.aa&&!U.P&&(U.j.info("Great, no buffering proxy detected. Bytes received: "+h.length),Eo(U),U.P=!0,tt(11))}}else Gn(this.i,this.l,h,null),po(this,h);ce==4&&En(this),this.o&&!this.K&&(ce==4?ec(this.j,this):(this.o=!1,Ms(this)))}else lp(this.g),l==400&&h.indexOf("Unknown SID")>0?(this.m=3,tt(12)):(this.m=0,tt(13)),En(this),Pr(this)}}}catch{}finally{}};function Wf(o){if(!Sl(o))return o.g.la();const l=Wl(o.g);if(l==="")return"";let h="";const p=l.length,R=Jt(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return En(o),Pr(o),"";o.h.i=new a.TextDecoder}for(let k=0;k<p;k++)o.h.h=!0,h+=o.h.i.decode(l[k],{stream:!(R&&k==p-1)});return l.length=0,o.h.g+=h,o.C=0,o.h.g}function Sl(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function Kf(o,l){var h=o.C,p=l.indexOf(`
`,h);return p==-1?uo:(h=Number(l.substring(h,p)),isNaN(h)?Al:(p+=1,p+h>l.length?uo:(l=l.slice(p,p+h),o.C=p+h,l)))}Kt.prototype.cancel=function(){this.K=!0,En(this)};function Ms(o){o.T=Date.now()+o.H,xl(o,o.H)}function xl(o,l){if(o.D!=null)throw Error("WatchDog timer not null");o.D=Sr(d(o.aa,o),l)}function fo(o){o.D&&(a.clearTimeout(o.D),o.D=null)}Kt.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(zf(this.i,this.B),this.M!=2&&(Rr(),tt(17)),En(this),this.m=2,Pr(this)):xl(this,this.T-o)};function Pr(o){o.j.I==0||o.K||ec(o.j,o)}function En(o){fo(o);var l=o.O;l&&typeof l.dispose=="function"&&l.dispose(),o.O=null,Rs(o.V),o.g&&(l=o.g,o.g=null,l.abort(),l.dispose())}function po(o,l){try{var h=o.j;if(h.I!=0&&(h.g==o||mo(h.h,o))){if(!o.L&&mo(h.h,o)&&h.I==3){try{var p=h.Ba.g.parse(l)}catch{p=null}if(Array.isArray(p)&&p.length==3){var R=p;if(R[0]==0){e:if(!h.v){if(h.g)if(h.g.F+3e3<o.F)Us(h),Os(h);else break e;bo(h),tt(18)}}else h.xa=R[1],0<h.xa-h.K&&R[2]<37500&&h.F&&h.A==0&&!h.C&&(h.C=Sr(d(h.Va,h),6e3));Vl(h.h)<=1&&h.ta&&(h.ta=void 0)}else In(h,11)}else if((o.L||h.g==o)&&Us(h),!w(l))for(R=h.Ba.g.parse(l),l=0;l<R.length;l++){let be=R[l];const qe=be[0];if(!(qe<=h.K))if(h.K=qe,be=be[1],h.I==2)if(be[0]=="c"){h.M=be[1],h.ba=be[2];const vt=be[3];vt!=null&&(h.ka=vt,h.j.info("VER="+h.ka));const Cn=be[4];Cn!=null&&(h.za=Cn,h.j.info("SVER="+h.za));const Xt=be[5];Xt!=null&&typeof Xt=="number"&&Xt>0&&(p=1.5*Xt,h.O=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const Zt=o.g;if(Zt){const js=Zt.g?Zt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(js){var k=p.h;k.g||js.indexOf("spdy")==-1&&js.indexOf("quic")==-1&&js.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(go(k,k.h),k.h=null))}if(p.G){const To=Zt.g?Zt.g.getResponseHeader("X-HTTP-Session-Id"):null;To&&(p.wa=To,Ie(p.J,p.G,To))}}h.I=3,h.l&&h.l.ra(),h.aa&&(h.T=Date.now()-o.F,h.j.info("Handshake RTT: "+h.T+"ms")),p=h;var U=o;if(p.na=rc(p,p.L?p.ba:null,p.W),U.L){Ml(p.h,U);var ce=U,Fe=p.O;Fe&&(ce.H=Fe),ce.D&&(fo(ce),Ms(ce)),p.g=U}else Xl(p);h.i.length>0&&Fs(h)}else be[0]!="stop"&&be[0]!="close"||In(h,7);else h.I==3&&(be[0]=="stop"||be[0]=="close"?be[0]=="stop"?In(h,7):wo(h):be[0]!="noop"&&h.l&&h.l.qa(be),h.A=0)}}Rr(4)}catch{}}var Qf=class{constructor(o,l){this.g=o,this.map=l}};function kl(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Pl(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Vl(o){return o.h?1:o.g?o.g.size:0}function mo(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function go(o,l){o.g?o.g.add(l):o.h=l}function Ml(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}kl.prototype.cancel=function(){if(this.i=Dl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Dl(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const h of o.g.values())l=l.concat(h.G);return l}return P(o.i)}var Nl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Yf(o,l){if(o){o=o.split("&");for(let h=0;h<o.length;h++){const p=o[h].indexOf("=");let R,k=null;p>=0?(R=o[h].substring(0,p),k=o[h].substring(p+1)):R=o[h],l(R,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function Qt(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let l;o instanceof Qt?(this.l=o.l,Vr(this,o.j),this.o=o.o,this.g=o.g,Mr(this,o.u),this.h=o.h,_o(this,jl(o.i)),this.m=o.m):o&&(l=String(o).match(Nl))?(this.l=!1,Vr(this,l[1]||"",!0),this.o=Dr(l[2]||""),this.g=Dr(l[3]||"",!0),Mr(this,l[4]),this.h=Dr(l[5]||"",!0),_o(this,l[6]||"",!0),this.m=Dr(l[7]||"")):(this.l=!1,this.i=new Lr(null,this.l))}Qt.prototype.toString=function(){const o=[];var l=this.j;l&&o.push(Nr(l,Ll,!0),":");var h=this.g;return(h||l=="file")&&(o.push("//"),(l=this.o)&&o.push(Nr(l,Ll,!0),"@"),o.push(kr(h).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.u,h!=null&&o.push(":",String(h))),(h=this.h)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Nr(h,h.charAt(0)=="/"?Zf:Xf,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Nr(h,tp)),o.join("")},Qt.prototype.resolve=function(o){const l=yt(this);let h=!!o.j;h?Vr(l,o.j):h=!!o.o,h?l.o=o.o:h=!!o.g,h?l.g=o.g:h=o.u!=null;var p=o.h;if(h)Mr(l,o.u);else if(h=!!o.h){if(p.charAt(0)!="/")if(this.g&&!this.h)p="/"+p;else{var R=l.h.lastIndexOf("/");R!=-1&&(p=l.h.slice(0,R+1)+p)}if(R=p,R==".."||R==".")p="";else if(R.indexOf("./")!=-1||R.indexOf("/.")!=-1){p=R.lastIndexOf("/",0)==0,R=R.split("/");const k=[];for(let U=0;U<R.length;){const ce=R[U++];ce=="."?p&&U==R.length&&k.push(""):ce==".."?((k.length>1||k.length==1&&k[0]!="")&&k.pop(),p&&U==R.length&&k.push("")):(k.push(ce),p=!0)}p=k.join("/")}else p=R}return h?l.h=p:h=o.i.toString()!=="",h?_o(l,jl(o.i)):h=!!o.m,h&&(l.m=o.m),l};function yt(o){return new Qt(o)}function Vr(o,l,h){o.j=h?Dr(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function Mr(o,l){if(l){if(l=Number(l),isNaN(l)||l<0)throw Error("Bad port number "+l);o.u=l}else o.u=null}function _o(o,l,h){l instanceof Lr?(o.i=l,np(o.i,o.l)):(h||(l=Nr(l,ep)),o.i=new Lr(l,o.l))}function Ie(o,l,h){o.i.set(l,h)}function Ds(o){return Ie(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function Dr(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Nr(o,l,h){return typeof o=="string"?(o=encodeURI(o).replace(l,Jf),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Jf(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Ll=/[#\/\?@]/g,Xf=/[#\?:]/g,Zf=/[#\?]/g,ep=/[#\?@]/g,tp=/#/g;function Lr(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function Tn(o){o.g||(o.g=new Map,o.h=0,o.i&&Yf(o.i,function(l,h){o.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}n=Lr.prototype,n.add=function(o,l){Tn(this),this.i=null,o=Wn(this,o);let h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(l),this.h+=1,this};function Ol(o,l){Tn(o),l=Wn(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function Fl(o,l){return Tn(o),l=Wn(o,l),o.g.has(l)}n.forEach=function(o,l){Tn(this),this.g.forEach(function(h,p){h.forEach(function(R){o.call(l,R,p,this)},this)},this)};function Ul(o,l){Tn(o);let h=[];if(typeof l=="string")Fl(o,l)&&(h=h.concat(o.g.get(Wn(o,l))));else for(o=Array.from(o.g.values()),l=0;l<o.length;l++)h=h.concat(o[l]);return h}n.set=function(o,l){return Tn(this),this.i=null,o=Wn(this,o),Fl(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},n.get=function(o,l){return o?(o=Ul(this,o),o.length>0?String(o[0]):l):l};function Bl(o,l,h){Ol(o,l),h.length>0&&(o.i=null,o.g.set(Wn(o,l),P(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(let p=0;p<l.length;p++){var h=l[p];const R=kr(h);h=Ul(this,h);for(let k=0;k<h.length;k++){let U=R;h[k]!==""&&(U+="="+kr(h[k])),o.push(U)}}return this.i=o.join("&")};function jl(o){const l=new Lr;return l.i=o.i,o.g&&(l.g=new Map(o.g),l.h=o.h),l}function Wn(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function np(o,l){l&&!o.j&&(Tn(o),o.i=null,o.g.forEach(function(h,p){const R=p.toLowerCase();p!=R&&(Ol(this,p),Bl(this,R,h))},o)),o.j=l}function rp(o,l){const h=new xr;if(a.Image){const p=new Image;p.onload=m(Yt,h,"TestLoadImage: loaded",!0,l,p),p.onerror=m(Yt,h,"TestLoadImage: error",!1,l,p),p.onabort=m(Yt,h,"TestLoadImage: abort",!1,l,p),p.ontimeout=m(Yt,h,"TestLoadImage: timeout",!1,l,p),a.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else l(!1)}function sp(o,l){const h=new xr,p=new AbortController,R=setTimeout(()=>{p.abort(),Yt(h,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:p.signal}).then(k=>{clearTimeout(R),k.ok?Yt(h,"TestPingServer: ok",!0,l):Yt(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(R),Yt(h,"TestPingServer: error",!1,l)})}function Yt(o,l,h,p,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),p(h)}catch{}}function ip(){this.g=new xs}function yo(o){this.i=o.Sb||null,this.h=o.ab||!1}y(yo,Hn),yo.prototype.g=function(){return new Ns(this.i,this.h)};function Ns(o,l){Ae.call(this),this.H=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}y(Ns,Ae),n=Ns.prototype,n.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=l,this.readyState=1,Fr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const l={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(l.body=o),(this.H||a).fetch(new Request(this.D,l)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Or(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Fr(this)),this.g&&(this.readyState=3,Fr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;$l(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function $l(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.B.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?Or(this):Fr(this),this.readyState==3&&$l(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,Or(this))},n.Na=function(o){this.g&&(this.response=o,Or(this))},n.ga=function(){this.g&&Or(this)};function Or(o){o.readyState=4,o.l=null,o.j=null,o.B=null,Fr(o)}n.setRequestHeader=function(o,l){this.A.append(o,l)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=l.next();return o.join(`\r
`)};function Fr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Ns.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function ql(o){let l="";return Wt(o,function(h,p){l+=p,l+=":",l+=h,l+=`\r
`}),l}function vo(o,l,h){e:{for(p in h){var p=!1;break e}p=!0}p||(h=ql(h),typeof o=="string"?h!=null&&kr(h):Ie(o,l,h))}function xe(o){Ae.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}y(xe,Ae);var op=/^https?$/i,ap=["POST","PUT"];n=xe.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,l,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Il.g(),this.g.onreadystatechange=T(d(this.Ca,this));try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(k){zl(this,k);return}if(o=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var R in p)h.set(R,p[R]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const k of p.keys())h.set(k,p.get(k));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(k=>k.toLowerCase()=="content-type"),R=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(ap,l,void 0)>=0)||p||R||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,U]of h)this.g.setRequestHeader(k,U);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(k){zl(this,k)}};function zl(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.o=5,Hl(o),Ls(o)}function Hl(o){o.A||(o.A=!0,Ee(o,"complete"),Ee(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,Ee(this,"complete"),Ee(this,"abort"),Ls(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ls(this,!0)),xe.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Gl(this):this.Xa())},n.Xa=function(){Gl(this)};function Gl(o){if(o.h&&typeof i<"u"){if(o.v&&Jt(o)==4)setTimeout(o.Ca.bind(o),0);else if(Ee(o,"readystatechange"),Jt(o)==4){o.h=!1;try{const k=o.ca();e:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var h;if(!(h=l)){var p;if(p=k===0){let U=String(o.D).match(Nl)[1]||null;!U&&a.self&&a.self.location&&(U=a.self.location.protocol.slice(0,-1)),p=!op.test(U?U.toLowerCase():"")}h=p}if(h)Ee(o,"complete"),Ee(o,"success");else{o.o=6;try{var R=Jt(o)>2?o.g.statusText:""}catch{R=""}o.l=R+" ["+o.ca()+"]",Hl(o)}}finally{Ls(o)}}}}function Ls(o,l){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const h=o.g;o.g=null,l||Ee(o,"ready");try{h.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Jt(o){return o.g?o.g.readyState:0}n.ca=function(){try{return Jt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),Ss(l)}};function Wl(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function lp(o){const l={};o=(o.g&&Jt(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(w(o[p]))continue;var h=Gf(o[p]);const R=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const k=l[R]||[];l[R]=k,k.push(h)}x(l,function(p){return p.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ur(o,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||l}function Kl(o){this.za=0,this.i=[],this.j=new xr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ur("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ur("baseRetryDelayMs",5e3,o),this.Za=Ur("retryDelaySeedMs",1e4,o),this.Ta=Ur("forwardChannelMaxRetries",2,o),this.va=Ur("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new kl(o&&o.concurrentRequestLimit),this.Ba=new ip,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Kl.prototype,n.ka=8,n.I=1,n.connect=function(o,l,h,p){tt(0),this.W=o,this.H=l||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.J=rc(this,null,this.W),Fs(this)};function wo(o){if(Ql(o),o.I==3){var l=o.V++,h=yt(o.J);if(Ie(h,"SID",o.M),Ie(h,"RID",l),Ie(h,"TYPE","terminate"),Br(o,h),l=new Kt(o,o.j,l),l.M=2,l.A=Ds(yt(h)),h=!1,a.navigator&&a.navigator.sendBeacon)try{h=a.navigator.sendBeacon(l.A.toString(),"")}catch{}!h&&a.Image&&(new Image().src=l.A,h=!0),h||(l.g=sc(l.j,null),l.g.ea(l.A)),l.F=Date.now(),Ms(l)}nc(o)}function Os(o){o.g&&(Eo(o),o.g.cancel(),o.g=null)}function Ql(o){Os(o),o.v&&(a.clearTimeout(o.v),o.v=null),Us(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function Fs(o){if(!Pl(o.h)&&!o.m){o.m=!0;var l=o.Ea;Se||_(),ve||(Se(),ve=!0),I.add(l,o),o.D=0}}function cp(o,l){return Vl(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=l.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=Sr(d(o.Ea,o,l),tc(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const R=new Kt(this,this.j,o);let k=this.o;if(this.U&&(k?(k=C(k),ee(k,this.U)):k=this.U),this.u!==null||this.R||(R.J=k,k=null),this.S)e:{for(var l=0,h=0;h<this.i.length;h++){t:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(l+=p,l>4096){l=h;break e}if(l===4096||h===this.i.length-1){l=h+1;break e}}l=1e3}else l=1e3;l=Jl(this,R,l),h=yt(this.J),Ie(h,"RID",o),Ie(h,"CVER",22),this.G&&Ie(h,"X-HTTP-Session-Id",this.G),Br(this,h),k&&(this.R?l="headers="+kr(ql(k))+"&"+l:this.u&&vo(h,this.u,k)),go(this.h,R),this.Ra&&Ie(h,"TYPE","init"),this.S?(Ie(h,"$req",l),Ie(h,"SID","null"),R.U=!0,ho(R,h,null)):ho(R,h,l),this.I=2}}else this.I==3&&(o?Yl(this,o):this.i.length==0||Pl(this.h)||Yl(this))};function Yl(o,l){var h;l?h=l.l:h=o.V++;const p=yt(o.J);Ie(p,"SID",o.M),Ie(p,"RID",h),Ie(p,"AID",o.K),Br(o,p),o.u&&o.o&&vo(p,o.u,o.o),h=new Kt(o,o.j,h,o.D+1),o.u===null&&(h.J=o.o),l&&(o.i=l.G.concat(o.i)),l=Jl(o,h,1e3),h.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),go(o.h,h),ho(h,p,l)}function Br(o,l){o.H&&Wt(o.H,function(h,p){Ie(l,p,h)}),o.l&&Wt({},function(h,p){Ie(l,p,h)})}function Jl(o,l,h){h=Math.min(o.i.length,h);const p=o.l?d(o.l.Ka,o.l,o):null;e:{var R=o.i;let ce=-1;for(;;){const Fe=["count="+h];ce==-1?h>0?(ce=R[0].g,Fe.push("ofs="+ce)):ce=0:Fe.push("ofs="+ce);let be=!0;for(let qe=0;qe<h;qe++){var k=R[qe].g;const vt=R[qe].map;if(k-=ce,k<0)ce=Math.max(0,R[qe].g-100),be=!1;else try{k="req"+k+"_"||"";try{var U=vt instanceof Map?vt:Object.entries(vt);for(const[Cn,Xt]of U){let Zt=Xt;c(Xt)&&(Zt=Ar(Xt)),Fe.push(k+Cn+"="+encodeURIComponent(Zt))}}catch(Cn){throw Fe.push(k+"type="+encodeURIComponent("_badmap")),Cn}}catch{p&&p(vt)}}if(be){U=Fe.join("&");break e}}U=void 0}return o=o.i.splice(0,h),l.G=o,U}function Xl(o){if(!o.g&&!o.v){o.Y=1;var l=o.Da;Se||_(),ve||(Se(),ve=!0),I.add(l,o),o.A=0}}function bo(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=Sr(d(o.Da,o),tc(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,Zl(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=Sr(d(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,tt(10),Os(this),Zl(this))};function Eo(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function Zl(o){o.g=new Kt(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var l=yt(o.na);Ie(l,"RID","rpc"),Ie(l,"SID",o.M),Ie(l,"AID",o.K),Ie(l,"CI",o.F?"0":"1"),!o.F&&o.ia&&Ie(l,"TO",o.ia),Ie(l,"TYPE","xmlhttp"),Br(o,l),o.u&&o.o&&vo(l,o.u,o.o),o.O&&(o.g.H=o.O);var h=o.g;o=o.ba,h.M=1,h.A=Ds(yt(l)),h.u=null,h.R=!0,Rl(h,o)}n.Va=function(){this.C!=null&&(this.C=null,Os(this),bo(this),tt(19))};function Us(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function ec(o,l){var h=null;if(o.g==l){Us(o),Eo(o),o.g=null;var p=2}else if(mo(o.h,l))h=l.G,Ml(o.h,l),p=1;else return;if(o.I!=0){if(l.o)if(p==1){h=l.u?l.u.length:0,l=Date.now()-l.F;var R=o.D;p=Ps(),Ee(p,new El(p,h)),Fs(o)}else Xl(o);else if(R=l.m,R==3||R==0&&l.X>0||!(p==1&&cp(o,l)||p==2&&bo(o)))switch(h&&h.length>0&&(l=o.h,l.i=l.i.concat(h)),R){case 1:In(o,5);break;case 4:In(o,10);break;case 3:In(o,6);break;default:In(o,2)}}}function tc(o,l){let h=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(h*=2),h*l}function In(o,l){if(o.j.info("Error code "+l),l==2){var h=d(o.bb,o),p=o.Ua;const R=!p;p=new Qt(p||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Vr(p,"https"),Ds(p),R?rp(p.toString(),h):sp(p.toString(),h)}else tt(2);o.I=0,o.l&&o.l.pa(l),nc(o),Ql(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),tt(2)):(this.j.info("Failed to ping google.com"),tt(1))};function nc(o){if(o.I=0,o.ja=[],o.l){const l=Dl(o.h);(l.length!=0||o.i.length!=0)&&(N(o.ja,l),N(o.ja,o.i),o.h.i.length=0,P(o.i),o.i.length=0),o.l.oa()}}function rc(o,l,h){var p=h instanceof Qt?yt(h):new Qt(h);if(p.g!="")l&&(p.g=l+"."+p.g),Mr(p,p.u);else{var R=a.location;p=R.protocol,l=l?l+"."+R.hostname:R.hostname,R=+R.port;const k=new Qt(null);p&&Vr(k,p),l&&(k.g=l),R&&Mr(k,R),h&&(k.h=h),p=k}return h=o.G,l=o.wa,h&&l&&Ie(p,h,l),Ie(p,"VER",o.ka),Br(o,p),p}function sc(o,l,h){if(l&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Aa&&!o.ma?new xe(new yo({ab:h})):new xe(o.ma),l.Fa(o.L),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ic(){}n=ic.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Bs(){}Bs.prototype.g=function(o,l){return new lt(o,l)};function lt(o,l){Ae.call(this),this.g=new Kl(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.sa&&(o?o["X-WebChannel-Client-Profile"]=l.sa:o={"X-WebChannel-Client-Profile":l.sa}),this.g.U=o,(o=l&&l.Qb)&&!w(o)&&(this.g.u=o),this.A=l&&l.supportsCrossDomainXhr||!1,this.v=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!w(l)&&(this.g.G=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new Kn(this)}y(lt,Ae),lt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},lt.prototype.close=function(){wo(this.g)},lt.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.v&&(h={},h.__data__=Ar(o),o=h);l.i.push(new Qf(l.Ya++,o)),l.I==3&&Fs(l)},lt.prototype.N=function(){this.g.l=null,delete this.j,wo(this.g),delete this.g,lt.Z.N.call(this)};function oc(o){ao.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const h in l){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}y(oc,ao);function ac(){lo.call(this),this.status=1}y(ac,lo);function Kn(o){this.g=o}y(Kn,ic),Kn.prototype.ra=function(){Ee(this.g,"a")},Kn.prototype.qa=function(o){Ee(this.g,new oc(o))},Kn.prototype.pa=function(o){Ee(this.g,new ac)},Kn.prototype.oa=function(){Ee(this.g,"b")},Bs.prototype.createWebChannel=Bs.prototype.g,lt.prototype.send=lt.prototype.o,lt.prototype.open=lt.prototype.m,lt.prototype.close=lt.prototype.close,Ih=function(){return new Bs},Th=function(){return Ps()},Eh=bn,Ho={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Vs.NO_ERROR=0,Vs.TIMEOUT=8,Vs.HTTP_ERROR=6,Xs=Vs,Tl.COMPLETE="complete",bh=Tl,ks.EventType=wn,wn.OPEN="a",wn.CLOSE="b",wn.ERROR="c",wn.MESSAGE="d",Ae.prototype.listen=Ae.prototype.J,Hr=ks,xe.prototype.listenOnce=xe.prototype.K,xe.prototype.getLastError=xe.prototype.Ha,xe.prototype.getLastErrorCode=xe.prototype.ya,xe.prototype.getStatus=xe.prototype.ca,xe.prototype.getResponseJson=xe.prototype.La,xe.prototype.getResponseText=xe.prototype.la,xe.prototype.send=xe.prototype.ea,xe.prototype.setWithCredentials=xe.prototype.Fa,wh=xe}).apply(typeof $s<"u"?$s:typeof self<"u"?self:typeof window<"u"?window:{});const Ec="@firebase/firestore",Tc="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ye.UNAUTHENTICATED=new Ye(null),Ye.GOOGLE_CREDENTIALS=new Ye("google-credentials-uid"),Ye.FIRST_PARTY=new Ye("first-party-uid"),Ye.MOCK_USER=new Ye("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yr="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln=new pa("@firebase/firestore");function Jn(){return Ln.logLevel}function H(n,...e){if(Ln.logLevel<=de.DEBUG){const t=e.map(_a);Ln.debug(`Firestore (${yr}): ${n}`,...t)}}function Lt(n,...e){if(Ln.logLevel<=de.ERROR){const t=e.map(_a);Ln.error(`Firestore (${yr}): ${n}`,...t)}}function ar(n,...e){if(Ln.logLevel<=de.WARN){const t=e.map(_a);Ln.warn(`Firestore (${yr}): ${n}`,...t)}}function _a(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Ch(n,r,t)}function Ch(n,e,t){let r=`FIRESTORE (${yr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Lt(r),new Error(r)}function ye(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||Ch(e,s,r)}function ae(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends Bt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ag{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ye.UNAUTHENTICATED)))}shutdown(){}}class lg{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class cg{constructor(e){this.t=e,this.currentUser=Ye.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ye(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new Vt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Vt,e.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const u=i;e.enqueueRetryable((async()=>{await u.promise,await s(this.currentUser)}))},c=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((u=>c(u))),setTimeout((()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Vt)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ye(typeof r.accessToken=="string",31837,{l:r}),new Ah(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ye(e===null||typeof e=="string",2055,{h:e}),new Ye(e)}}class ug{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Ye.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class hg{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new ug(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ye.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ic{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class dg{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ct(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ye(this.o===void 0,3512);const r=i=>{i.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,H("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Ic(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(ye(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Ic(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fg(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=fg(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function fe(n,e){return n<e?-1:n>e?1:0}function Go(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return xo(s)===xo(i)?fe(s,i):xo(s)?1:-1}return fe(n.length,e.length)}const pg=55296,mg=57343;function xo(n){const e=n.charCodeAt(0);return e>=pg&&e<=mg}function lr(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cc="__name__";class wt{constructor(e,t,r){t===void 0?t=0:t>e.length&&ne(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&ne(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return wt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof wt?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=wt.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return fe(e.length,t.length)}static compareSegments(e,t){const r=wt.isNumericId(e),s=wt.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?wt.extractNumericId(e).compare(wt.extractNumericId(t)):Go(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return cn.fromString(e.substring(4,e.length-2))}}class Te extends wt{construct(e,t,r){return new Te(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new Te(t)}static emptyPath(){return new Te([])}}const gg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ge extends wt{construct(e,t,r){return new Ge(e,t,r)}static isValidIdentifier(e){return gg.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ge.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Cc}static keyField(){return new Ge([Cc])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new B(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new B(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new B(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new B(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ge(t)}static emptyPath(){return new Ge([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(Te.fromString(e))}static fromName(e){return new X(Te.fromString(e).popFirst(5))}static empty(){return new X(Te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Te.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new Te(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rh(n,e,t){if(!t)throw new B(V.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function _g(n,e,t,r){if(e===!0&&r===!0)throw new B(V.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Ac(n){if(!X.isDocumentKey(n))throw new B(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Rc(n){if(X.isDocumentKey(n))throw new B(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Sh(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Ni(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ne(12329,{type:typeof n})}function ot(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new B(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ni(n);throw new B(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function yg(n,e){if(e<=0)throw new B(V.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(n,e){const t={typeString:n};return e&&(t.value=e),t}function gs(n,e){if(!Sh(n))throw new B(V.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new B(V.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc=-62135596800,xc=1e6;class Ce{static now(){return Ce.fromMillis(Date.now())}static fromDate(e){return Ce.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*xc);return new Ce(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new B(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new B(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Sc)throw new B(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/xc}_compareTo(e){return this.seconds===e.seconds?fe(this.nanoseconds,e.nanoseconds):fe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ce._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(gs(e,Ce._jsonSchema))return new Ce(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Sc;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ce._jsonSchemaVersion="firestore/timestamp/1.0",Ce._jsonSchema={type:Oe("string",Ce._jsonSchemaVersion),seconds:Oe("number"),nanoseconds:Oe("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{static fromTimestamp(e){return new ie(e)}static min(){return new ie(new Ce(0,0))}static max(){return new ie(new Ce(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss=-1;function vg(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=ie.fromTimestamp(r===1e9?new Ce(t+1,0):new Ce(t,r));return new hn(s,X.empty(),e)}function wg(n){return new hn(n.readTime,n.key,ss)}class hn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new hn(ie.min(),X.empty(),ss)}static max(){return new hn(ie.max(),X.empty(),ss)}}function bg(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=X.comparator(n.documentKey,e.documentKey),t!==0?t:fe(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Tg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vr(n){if(n.code!==V.FAILED_PRECONDITION||n.message!==Eg)throw n;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ne(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new M(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof M?t:M.resolve(t)}catch(t){return M.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):M.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):M.reject(t)}static resolve(e){return new M(((t,r)=>{t(e)}))}static reject(e){return new M(((t,r)=>{r(e)}))}static waitFor(e){return new M(((t,r)=>{let s=0,i=0,a=!1;e.forEach((c=>{++s,c.next((()=>{++i,a&&i===s&&t()}),(u=>r(u)))})),a=!0,i===s&&t()}))}static or(e){let t=M.resolve(!1);for(const r of e)t=t.next((s=>s?M.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,i)=>{r.push(t.call(this,s,i))})),this.waitFor(r)}static mapArray(e,t){return new M(((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let u=0;u<i;u++){const d=u;t(e[d]).next((m=>{a[d]=m,++c,c===i&&r(a)}),(m=>s(m)))}}))}static doWhile(e,t){return new M(((r,s)=>{const i=()=>{e()===!0?t().next((()=>{i()}),s):r()};i()}))}}function Ig(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function wr(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Li.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const va=-1;function Oi(n){return n==null}function di(n){return n===0&&1/n==-1/0}function Cg(n){return typeof n=="number"&&Number.isInteger(n)&&!di(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xh="";function Ag(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=kc(e)),e=Rg(n.get(t),e);return kc(e)}function Rg(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case xh:t+="";break;default:t+=i}}return t}function kc(n){return n+xh+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function _n(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function kh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,t){this.comparator=e,this.root=t||He.EMPTY}insert(e,t){return new Re(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,He.BLACK,null,null))}remove(e){return new Re(this.comparator,this.root.remove(e,this.comparator).copy(null,null,He.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new qs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new qs(this.root,e,this.comparator,!1)}getReverseIterator(){return new qs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new qs(this.root,e,this.comparator,!0)}}class qs{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class He{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??He.RED,this.left=s??He.EMPTY,this.right=i??He.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new He(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return He.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return He.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,He.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,He.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ne(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ne(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ne(27949);return e+(this.isRed()?0:1)}}He.EMPTY=null,He.RED=!0,He.BLACK=!1;He.EMPTY=new class{constructor(){this.size=0}get key(){throw ne(57766)}get value(){throw ne(16141)}get color(){throw ne(16727)}get left(){throw ne(29726)}get right(){throw ne(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new He(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.comparator=e,this.data=new Re(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Vc(this.data.getIterator())}getIteratorFrom(e){return new Vc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof Be)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Be(this.comparator);return t.data=e,t}}class Vc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.fields=e,e.sort(Ge.comparator)}static empty(){return new ut([])}unionWith(e){let t=new Be(Ge.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new ut(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return lr(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Ph("Invalid base64 string: "+i):i}})(e);return new We(t)}static fromUint8Array(e){const t=(function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i})(e);return new We(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return fe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}We.EMPTY_BYTE_STRING=new We("");const Sg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function dn(n){if(ye(!!n,39018),typeof n=="string"){let e=0;const t=Sg.exec(n);if(ye(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Me(n.seconds),nanos:Me(n.nanos)}}function Me(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function fn(n){return typeof n=="string"?We.fromBase64String(n):We.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vh="server_timestamp",Mh="__type__",Dh="__previous_value__",Nh="__local_write_time__";function wa(n){return(n?.mapValue?.fields||{})[Mh]?.stringValue===Vh}function Fi(n){const e=n.mapValue.fields[Dh];return wa(e)?Fi(e):e}function is(n){const e=dn(n.mapValue.fields[Nh].timestampValue);return new Ce(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(e,t,r,s,i,a,c,u,d,m){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=d,this.isUsingEmulator=m}}const fi="(default)";class os{constructor(e,t){this.projectId=e,this.database=t||fi}static empty(){return new os("","")}get isDefaultDatabase(){return this.database===fi}isEqual(e){return e instanceof os&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lh="__type__",kg="__max__",zs={mapValue:{}},Oh="__vector__",pi="value";function pn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?wa(n)?4:Vg(n)?9007199254740991:Pg(n)?10:11:ne(28295,{value:n})}function Rt(n,e){if(n===e)return!0;const t=pn(n);if(t!==pn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return is(n).isEqual(is(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=dn(s.timestampValue),c=dn(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,i){return fn(s.bytesValue).isEqual(fn(i.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,i){return Me(s.geoPointValue.latitude)===Me(i.geoPointValue.latitude)&&Me(s.geoPointValue.longitude)===Me(i.geoPointValue.longitude)})(n,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return Me(s.integerValue)===Me(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Me(s.doubleValue),c=Me(i.doubleValue);return a===c?di(a)===di(c):isNaN(a)&&isNaN(c)}return!1})(n,e);case 9:return lr(n.arrayValue.values||[],e.arrayValue.values||[],Rt);case 10:case 11:return(function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Pc(a)!==Pc(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!Rt(a[u],c[u])))return!1;return!0})(n,e);default:return ne(52216,{left:n})}}function as(n,e){return(n.values||[]).find((t=>Rt(t,e)))!==void 0}function cr(n,e){if(n===e)return 0;const t=pn(n),r=pn(e);if(t!==r)return fe(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return fe(n.booleanValue,e.booleanValue);case 2:return(function(i,a){const c=Me(i.integerValue||i.doubleValue),u=Me(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1})(n,e);case 3:return Mc(n.timestampValue,e.timestampValue);case 4:return Mc(is(n),is(e));case 5:return Go(n.stringValue,e.stringValue);case 6:return(function(i,a){const c=fn(i),u=fn(a);return c.compareTo(u)})(n.bytesValue,e.bytesValue);case 7:return(function(i,a){const c=i.split("/"),u=a.split("/");for(let d=0;d<c.length&&d<u.length;d++){const m=fe(c[d],u[d]);if(m!==0)return m}return fe(c.length,u.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,a){const c=fe(Me(i.latitude),Me(a.latitude));return c!==0?c:fe(Me(i.longitude),Me(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Dc(n.arrayValue,e.arrayValue);case 10:return(function(i,a){const c=i.fields||{},u=a.fields||{},d=c[pi]?.arrayValue,m=u[pi]?.arrayValue,y=fe(d?.values?.length||0,m?.values?.length||0);return y!==0?y:Dc(d,m)})(n.mapValue,e.mapValue);case 11:return(function(i,a){if(i===zs.mapValue&&a===zs.mapValue)return 0;if(i===zs.mapValue)return 1;if(a===zs.mapValue)return-1;const c=i.fields||{},u=Object.keys(c),d=a.fields||{},m=Object.keys(d);u.sort(),m.sort();for(let y=0;y<u.length&&y<m.length;++y){const T=Go(u[y],m[y]);if(T!==0)return T;const P=cr(c[u[y]],d[m[y]]);if(P!==0)return P}return fe(u.length,m.length)})(n.mapValue,e.mapValue);default:throw ne(23264,{he:t})}}function Mc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return fe(n,e);const t=dn(n),r=dn(e),s=fe(t.seconds,r.seconds);return s!==0?s:fe(t.nanos,r.nanos)}function Dc(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=cr(t[s],r[s]);if(i)return i}return fe(t.length,r.length)}function ur(n){return Wo(n)}function Wo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=dn(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return fn(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return X.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Wo(i);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Wo(t.fields[a])}`;return s+"}"})(n.mapValue):ne(61005,{value:n})}function Zs(n){switch(pn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Fi(n);return e?16+Zs(e):16;case 5:return 2*n.stringValue.length;case 6:return fn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+Zs(i)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return _n(r.fields,((i,a)=>{s+=i.length+Zs(a)})),s})(n.mapValue);default:throw ne(13486,{value:n})}}function Nc(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Ko(n){return!!n&&"integerValue"in n}function ba(n){return!!n&&"arrayValue"in n}function Lc(n){return!!n&&"nullValue"in n}function Oc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ei(n){return!!n&&"mapValue"in n}function Pg(n){return(n?.mapValue?.fields||{})[Lh]?.stringValue===Oh}function Yr(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return _n(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=Yr(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Yr(n.arrayValue.values[t]);return e}return{...n}}function Vg(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===kg}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.value=e}static empty(){return new it({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ei(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Yr(t)}setAll(e){let t=Ge.emptyPath(),r={},s=[];e.forEach(((a,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=Yr(a):s.push(c.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());ei(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Rt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];ei(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){_n(t,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new it(Yr(this.value))}}function Fh(n){const e=[];return _n(n.fields,((t,r)=>{const s=new Ge([t]);if(ei(r)){const i=Fh(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)})),new ut(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,t,r,s,i,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Je(e,0,ie.min(),ie.min(),ie.min(),it.empty(),0)}static newFoundDocument(e,t,r,s){return new Je(e,1,t,ie.min(),r,s,0)}static newNoDocument(e,t){return new Je(e,2,t,ie.min(),ie.min(),it.empty(),0)}static newUnknownDocument(e,t){return new Je(e,3,t,ie.min(),ie.min(),it.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=it.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=it.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Je&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Je(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e,t){this.position=e,this.inclusive=t}}function Fc(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=X.comparator(X.fromName(a.referenceValue),t.key):r=cr(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Uc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Rt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e,t="asc"){this.field=e,this.dir=t}}function Mg(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{}class Le extends Uh{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Ng(e,t,r):t==="array-contains"?new Fg(e,r):t==="in"?new Ug(e,r):t==="not-in"?new Bg(e,r):t==="array-contains-any"?new jg(e,r):new Le(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Lg(e,r):new Og(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(cr(t,this.value)):t!==null&&pn(this.value)===pn(t)&&this.matchesComparison(cr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ne(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class _t extends Uh{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new _t(e,t)}matches(e){return Bh(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Bh(n){return n.op==="and"}function jh(n){return Dg(n)&&Bh(n)}function Dg(n){for(const e of n.filters)if(e instanceof _t)return!1;return!0}function Qo(n){if(n instanceof Le)return n.field.canonicalString()+n.op.toString()+ur(n.value);if(jh(n))return n.filters.map((e=>Qo(e))).join(",");{const e=n.filters.map((t=>Qo(t))).join(",");return`${n.op}(${e})`}}function $h(n,e){return n instanceof Le?(function(r,s){return s instanceof Le&&r.op===s.op&&r.field.isEqual(s.field)&&Rt(r.value,s.value)})(n,e):n instanceof _t?(function(r,s){return s instanceof _t&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,a,c)=>i&&$h(a,s.filters[c])),!0):!1})(n,e):void ne(19439)}function qh(n){return n instanceof Le?(function(t){return`${t.field.canonicalString()} ${t.op} ${ur(t.value)}`})(n):n instanceof _t?(function(t){return t.op.toString()+" {"+t.getFilters().map(qh).join(" ,")+"}"})(n):"Filter"}class Ng extends Le{constructor(e,t,r){super(e,t,r),this.key=X.fromName(r.referenceValue)}matches(e){const t=X.comparator(e.key,this.key);return this.matchesComparison(t)}}class Lg extends Le{constructor(e,t){super(e,"in",t),this.keys=zh("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Og extends Le{constructor(e,t){super(e,"not-in",t),this.keys=zh("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function zh(n,e){return(e.arrayValue?.values||[]).map((t=>X.fromName(t.referenceValue)))}class Fg extends Le{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ba(t)&&as(t.arrayValue,this.value)}}class Ug extends Le{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&as(this.value.arrayValue,t)}}class Bg extends Le{constructor(e,t){super(e,"not-in",t)}matches(e){if(as(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!as(this.value.arrayValue,t)}}class jg extends Le{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ba(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>as(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.Te=null}}function Bc(n,e=null,t=[],r=[],s=null,i=null,a=null){return new $g(n,e,t,r,s,i,a)}function Ea(n){const e=ae(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>Qo(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),Oi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>ur(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>ur(r))).join(",")),e.Te=t}return e.Te}function Ta(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Mg(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!$h(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Uc(n.startAt,e.startAt)&&Uc(n.endAt,e.endAt)}function Yo(n){return X.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function qg(n,e,t,r,s,i,a,c){return new br(n,e,t,r,s,i,a,c)}function Ui(n){return new br(n)}function jc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Hh(n){return n.collectionGroup!==null}function Jr(n){const e=ae(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new Be(Ge.comparator);return a.filters.forEach((u=>{u.getFlattenedFilters().forEach((d=>{d.isInequality()&&(c=c.add(d.field))}))})),c})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new ls(i,r))})),t.has(Ge.keyField().canonicalString())||e.Ie.push(new ls(Ge.keyField(),r))}return e.Ie}function Et(n){const e=ae(n);return e.Ee||(e.Ee=zg(e,Jr(n))),e.Ee}function zg(n,e){if(n.limitType==="F")return Bc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new ls(s.field,i)}));const t=n.endAt?new mi(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new mi(n.startAt.position,n.startAt.inclusive):null;return Bc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Jo(n,e){const t=n.filters.concat([e]);return new br(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function gi(n,e,t){return new br(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Bi(n,e){return Ta(Et(n),Et(e))&&n.limitType===e.limitType}function Gh(n){return`${Ea(Et(n))}|lt:${n.limitType}`}function Xn(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>qh(s))).join(", ")}]`),Oi(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>ur(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>ur(s))).join(",")),`Target(${r})`})(Et(n))}; limitType=${n.limitType})`}function ji(n,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):X.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(n,e)&&(function(r,s){for(const i of Jr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(a,c,u){const d=Fc(a,c,u);return a.inclusive?d<=0:d<0})(r.startAt,Jr(r),s)||r.endAt&&!(function(a,c,u){const d=Fc(a,c,u);return a.inclusive?d>=0:d>0})(r.endAt,Jr(r),s))})(n,e)}function Hg(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Wh(n){return(e,t)=>{let r=!1;for(const s of Jr(n)){const i=Gg(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Gg(n,e,t){const r=n.field.isKeyField()?X.comparator(e.key,t.key):(function(i,a,c){const u=a.data.field(i),d=c.data.field(i);return u!==null&&d!==null?cr(u,d):ne(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return ne(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){_n(this.inner,((t,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return kh(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg=new Re(X.comparator);function Ot(){return Wg}const Kh=new Re(X.comparator);function Gr(...n){let e=Kh;for(const t of n)e=e.insert(t.key,t);return e}function Qh(n){let e=Kh;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function xn(){return Xr()}function Yh(){return Xr()}function Xr(){return new jn((n=>n.toString()),((n,e)=>n.isEqual(e)))}const Kg=new Re(X.comparator),Qg=new Be(X.comparator);function pe(...n){let e=Qg;for(const t of n)e=e.add(t);return e}const Yg=new Be(fe);function Jg(){return Yg}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:di(e)?"-0":e}}function Jh(n){return{integerValue:""+n}}function Xg(n,e){return Cg(e)?Jh(e):Ia(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(){this._=void 0}}function Zg(n,e,t){return n instanceof cs?(function(s,i){const a={fields:{[Mh]:{stringValue:Vh},[Nh]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&wa(i)&&(i=Fi(i)),i&&(a.fields[Dh]=i),{mapValue:a}})(t,e):n instanceof hr?Zh(n,e):n instanceof dr?ed(n,e):(function(s,i){const a=Xh(s,i),c=$c(a)+$c(s.Ae);return Ko(a)&&Ko(s.Ae)?Jh(c):Ia(s.serializer,c)})(n,e)}function e0(n,e,t){return n instanceof hr?Zh(n,e):n instanceof dr?ed(n,e):t}function Xh(n,e){return n instanceof _i?(function(r){return Ko(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class cs extends $i{}class hr extends $i{constructor(e){super(),this.elements=e}}function Zh(n,e){const t=td(e);for(const r of n.elements)t.some((s=>Rt(s,r)))||t.push(r);return{arrayValue:{values:t}}}class dr extends $i{constructor(e){super(),this.elements=e}}function ed(n,e){let t=td(e);for(const r of n.elements)t=t.filter((s=>!Rt(s,r)));return{arrayValue:{values:t}}}class _i extends $i{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function $c(n){return Me(n.integerValue||n.doubleValue)}function td(n){return ba(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e,t){this.field=e,this.transform=t}}function t0(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof hr&&s instanceof hr||r instanceof dr&&s instanceof dr?lr(r.elements,s.elements,Rt):r instanceof _i&&s instanceof _i?Rt(r.Ae,s.Ae):r instanceof cs&&s instanceof cs})(n.transform,e.transform)}class n0{constructor(e,t){this.version=e,this.transformResults=t}}class ft{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ft}static exists(e){return new ft(void 0,e)}static updateTime(e){return new ft(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ti(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class qi{}function nd(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Aa(n.key,ft.none()):new _s(n.key,n.data,ft.none());{const t=n.data,r=it.empty();let s=new Be(Ge.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new yn(n.key,r,new ut(s.toArray()),ft.none())}}function r0(n,e,t){n instanceof _s?(function(s,i,a){const c=s.value.clone(),u=zc(s.fieldTransforms,i,a.transformResults);c.setAll(u),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(n,e,t):n instanceof yn?(function(s,i,a){if(!ti(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=zc(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(rd(s)),u.setAll(c),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()})(n,e,t):(function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function Zr(n,e,t,r){return n instanceof _s?(function(i,a,c,u){if(!ti(i.precondition,a))return c;const d=i.value.clone(),m=Hc(i.fieldTransforms,u,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null})(n,e,t,r):n instanceof yn?(function(i,a,c,u){if(!ti(i.precondition,a))return c;const d=Hc(i.fieldTransforms,u,a),m=a.data;return m.setAll(rd(i)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((y=>y.field)))})(n,e,t,r):(function(i,a,c){return ti(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c})(n,e,t)}function s0(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Xh(r.transform,s||null);i!=null&&(t===null&&(t=it.empty()),t.set(r.field,i))}return t||null}function qc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&lr(r,s,((i,a)=>t0(i,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class _s extends qi{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class yn extends qi{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function rd(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function zc(n,e,t){const r=new Map;ye(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,e0(a,c,t[s]))}return r}function Hc(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,Zg(i,a,e))}return r}class Aa extends qi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class i0 extends qi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&r0(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Zr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Zr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Yh();return this.mutations.forEach((s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const u=nd(a,c);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(ie.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),pe())}isEqual(e){return this.batchId===e.batchId&&lr(this.mutations,e.mutations,((t,r)=>qc(t,r)))&&lr(this.baseMutations,e.baseMutations,((t,r)=>qc(t,r)))}}class Ra{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){ye(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=(function(){return Kg})();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Ra(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var De,me;function c0(n){switch(n){case V.OK:return ne(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return ne(15467,{code:n})}}function sd(n){if(n===void 0)return Lt("GRPC error has no .code"),V.UNKNOWN;switch(n){case De.OK:return V.OK;case De.CANCELLED:return V.CANCELLED;case De.UNKNOWN:return V.UNKNOWN;case De.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case De.INTERNAL:return V.INTERNAL;case De.UNAVAILABLE:return V.UNAVAILABLE;case De.UNAUTHENTICATED:return V.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case De.NOT_FOUND:return V.NOT_FOUND;case De.ALREADY_EXISTS:return V.ALREADY_EXISTS;case De.PERMISSION_DENIED:return V.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case De.ABORTED:return V.ABORTED;case De.OUT_OF_RANGE:return V.OUT_OF_RANGE;case De.UNIMPLEMENTED:return V.UNIMPLEMENTED;case De.DATA_LOSS:return V.DATA_LOSS;default:return ne(39323,{code:n})}}(me=De||(De={}))[me.OK=0]="OK",me[me.CANCELLED=1]="CANCELLED",me[me.UNKNOWN=2]="UNKNOWN",me[me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",me[me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",me[me.NOT_FOUND=5]="NOT_FOUND",me[me.ALREADY_EXISTS=6]="ALREADY_EXISTS",me[me.PERMISSION_DENIED=7]="PERMISSION_DENIED",me[me.UNAUTHENTICATED=16]="UNAUTHENTICATED",me[me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",me[me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",me[me.ABORTED=10]="ABORTED",me[me.OUT_OF_RANGE=11]="OUT_OF_RANGE",me[me.UNIMPLEMENTED=12]="UNIMPLEMENTED",me[me.INTERNAL=13]="INTERNAL",me[me.UNAVAILABLE=14]="UNAVAILABLE",me[me.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u0(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h0=new cn([4294967295,4294967295],0);function Gc(n){const e=u0().encode(n),t=new vh;return t.update(e),new Uint8Array(t.digest())}function Wc(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new cn([t,r],0),new cn([s,i],0)]}class Sa{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Wr(`Invalid padding: ${t}`);if(r<0)throw new Wr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Wr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Wr(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=cn.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(cn.fromNumber(r)));return s.compare(h0)===1&&(s=new cn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Gc(e),[r,s]=Wc(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);if(!this.we(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Sa(i,s,t);return r.forEach((c=>a.insert(c))),a}insert(e){if(this.ge===0)return;const t=Gc(e),[r,s]=Wc(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);this.Se(a)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Wr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,ys.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new zi(ie.min(),s,new Re(fe),Ot(),pe())}}class ys{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new ys(r,t,pe(),pe(),pe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,t,r,s){this.be=e,this.removedTargetIds=t,this.key=r,this.De=s}}class id{constructor(e,t){this.targetId=e,this.Ce=t}}class od{constructor(e,t,r=We.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Kc{constructor(){this.ve=0,this.Fe=Qc(),this.Me=We.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=pe(),t=pe(),r=pe();return this.Fe.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:ne(38017,{changeType:i})}})),new ys(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=Qc()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,ye(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class d0{constructor(e){this.Ge=e,this.ze=new Map,this.je=Ot(),this.Je=Hs(),this.He=Hs(),this.Ye=new Re(fe)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:ne(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((r,s)=>{this.rt(s)&&t(s)}))}st(e){const t=e.targetId,r=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(Yo(i))if(r===0){const a=new X(i.path);this.et(t,a,Je.newNoDocument(a,ie.min()))}else ye(r===1,20013,{expectedCount:r});else{const a=this._t(t);if(a!==r){const c=this.ut(e),u=c?this.ct(c,e,a):1;if(u!==0){this.it(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,d)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=fn(r).toUint8Array()}catch(u){if(u instanceof Ph)return ar("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new Sa(a,s,i)}catch(u){return ar(u instanceof Wr?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.ge===0?null:c}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach((i=>{const a=this.Ge.ht(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(t,i,null),s++)})),s}Tt(e){const t=new Map;this.ze.forEach(((i,a)=>{const c=this.ot(a);if(c){if(i.current&&Yo(c.target)){const u=new X(c.target.path);this.It(u).has(a)||this.Et(a,u)||this.et(a,u,Je.newNoDocument(u,e))}i.Be&&(t.set(a,i.ke()),i.qe())}}));let r=pe();this.He.forEach(((i,a)=>{let c=!0;a.forEachWhile((u=>{const d=this.ot(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.je.forEach(((i,a)=>a.setReadTime(e)));const s=new zi(e,t,this.Ye,this.je,r);return this.je=Ot(),this.Je=Hs(),this.He=Hs(),this.Ye=new Re(fe),s}Xe(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.Qe(t,1):s.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new Kc,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Be(fe),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Be(fe),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||H("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Kc),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Hs(){return new Re(X.comparator)}function Qc(){return new Re(X.comparator)}const f0={asc:"ASCENDING",desc:"DESCENDING"},p0={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},m0={and:"AND",or:"OR"};class g0{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Xo(n,e){return n.useProto3Json||Oi(e)?e:{value:e}}function yi(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ad(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function _0(n,e){return yi(n,e.toTimestamp())}function Tt(n){return ye(!!n,49232),ie.fromTimestamp((function(t){const r=dn(t);return new Ce(r.seconds,r.nanos)})(n))}function xa(n,e){return Zo(n,e).canonicalString()}function Zo(n,e){const t=(function(s){return new Te(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function ld(n){const e=Te.fromString(n);return ye(fd(e),10190,{key:e.toString()}),e}function ea(n,e){return xa(n.databaseId,e.path)}function ko(n,e){const t=ld(e);if(t.get(1)!==n.databaseId.projectId)throw new B(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new B(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new X(ud(t))}function cd(n,e){return xa(n.databaseId,e)}function y0(n){const e=ld(n);return e.length===4?Te.emptyPath():ud(e)}function ta(n){return new Te(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function ud(n){return ye(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Yc(n,e,t){return{name:ea(n,e),fields:t.value.mapValue.fields}}function v0(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:ne(39313,{state:d})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(d,m){return d.useProto3Json?(ye(m===void 0||typeof m=="string",58123),We.fromBase64String(m||"")):(ye(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),We.fromUint8Array(m||new Uint8Array))})(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&(function(d){const m=d.code===void 0?V.UNKNOWN:sd(d.code);return new B(m,d.message||"")})(a);t=new od(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ko(n,r.document.name),i=Tt(r.document.updateTime),a=r.document.createTime?Tt(r.document.createTime):ie.min(),c=new it({mapValue:{fields:r.document.fields}}),u=Je.newFoundDocument(s,i,a,c),d=r.targetIds||[],m=r.removedTargetIds||[];t=new ni(d,m,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ko(n,r.document),i=r.readTime?Tt(r.readTime):ie.min(),a=Je.newNoDocument(s,i),c=r.removedTargetIds||[];t=new ni([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ko(n,r.document),i=r.removedTargetIds||[];t=new ni([],i,s,null)}else{if(!("filter"in e))return ne(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new l0(s,i),c=r.targetId;t=new id(c,a)}}return t}function w0(n,e){let t;if(e instanceof _s)t={update:Yc(n,e.key,e.value)};else if(e instanceof Aa)t={delete:ea(n,e.key)};else if(e instanceof yn)t={update:Yc(n,e.key,e.data),updateMask:x0(e.fieldMask)};else{if(!(e instanceof i0))return ne(16599,{Vt:e.type});t={verify:ea(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(i,a){const c=a.transform;if(c instanceof cs)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof hr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof dr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof _i)return{fieldPath:a.field.canonicalString(),increment:c.Ae};throw ne(20930,{transform:a.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:_0(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ne(27497)})(n,e.precondition)),t}function b0(n,e){return n&&n.length>0?(ye(e!==void 0,14353),n.map((t=>(function(s,i){let a=s.updateTime?Tt(s.updateTime):Tt(i);return a.isEqual(ie.min())&&(a=Tt(i)),new n0(a,s.transformResults||[])})(t,e)))):[]}function E0(n,e){return{documents:[cd(n,e.path)]}}function T0(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=cd(n,s);const i=(function(d){if(d.length!==0)return dd(_t.create(d,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const a=(function(d){if(d.length!==0)return d.map((m=>(function(T){return{field:Zn(T.field),direction:A0(T.dir)}})(m)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=Xo(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(e.endAt)),{ft:t,parent:s}}function I0(n){let e=y0(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){ye(r===1,65062);const m=t.from[0];m.allDescendants?s=m.collectionId:e=e.child(m.collectionId)}let i=[];t.where&&(i=(function(y){const T=hd(y);return T instanceof _t&&jh(T)?T.getFilters():[T]})(t.where));let a=[];t.orderBy&&(a=(function(y){return y.map((T=>(function(N){return new ls(er(N.field),(function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(N.direction))})(T)))})(t.orderBy));let c=null;t.limit&&(c=(function(y){let T;return T=typeof y=="object"?y.value:y,Oi(T)?null:T})(t.limit));let u=null;t.startAt&&(u=(function(y){const T=!!y.before,P=y.values||[];return new mi(P,T)})(t.startAt));let d=null;return t.endAt&&(d=(function(y){const T=!y.before,P=y.values||[];return new mi(P,T)})(t.endAt)),qg(e,s,a,i,c,"F",u,d)}function C0(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ne(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function hd(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=er(t.unaryFilter.field);return Le.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=er(t.unaryFilter.field);return Le.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=er(t.unaryFilter.field);return Le.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=er(t.unaryFilter.field);return Le.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ne(61313);default:return ne(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Le.create(er(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ne(58110);default:return ne(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return _t.create(t.compositeFilter.filters.map((r=>hd(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ne(1026)}})(t.compositeFilter.op))})(n):ne(30097,{filter:n})}function A0(n){return f0[n]}function R0(n){return p0[n]}function S0(n){return m0[n]}function Zn(n){return{fieldPath:n.canonicalString()}}function er(n){return Ge.fromServerFormat(n.fieldPath)}function dd(n){return n instanceof Le?(function(t){if(t.op==="=="){if(Oc(t.value))return{unaryFilter:{field:Zn(t.field),op:"IS_NAN"}};if(Lc(t.value))return{unaryFilter:{field:Zn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Oc(t.value))return{unaryFilter:{field:Zn(t.field),op:"IS_NOT_NAN"}};if(Lc(t.value))return{unaryFilter:{field:Zn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zn(t.field),op:R0(t.op),value:t.value}}})(n):n instanceof _t?(function(t){const r=t.getFilters().map((s=>dd(s)));return r.length===1?r[0]:{compositeFilter:{op:S0(t.op),filters:r}}})(n):ne(54877,{filter:n})}function x0(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function fd(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e,t,r,s,i=ie.min(),a=ie.min(),c=We.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new sn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new sn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new sn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new sn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0{constructor(e){this.yt=e}}function P0(n){const e=I0({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?gi(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{constructor(){this.Cn=new M0}addToCollectionParentIndex(e,t){return this.Cn.add(t),M.resolve()}getCollectionParents(e,t){return M.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return M.resolve()}deleteFieldIndex(e,t){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,t){return M.resolve()}getDocumentsMatchingTarget(e,t){return M.resolve(null)}getIndexType(e,t){return M.resolve(0)}getFieldIndexes(e,t){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,t){return M.resolve(hn.min())}getMinOffsetFromCollectionGroup(e,t){return M.resolve(hn.min())}updateCollectionGroup(e,t,r){return M.resolve()}updateIndexEntries(e,t){return M.resolve()}}class M0{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Be(Te.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Be(Te.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},pd=41943040;class st{static withCacheSize(e){return new st(e,st.DEFAULT_COLLECTION_PERCENTILE,st.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */st.DEFAULT_COLLECTION_PERCENTILE=10,st.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,st.DEFAULT=new st(pd,st.DEFAULT_COLLECTION_PERCENTILE,st.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),st.DISABLED=new st(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new fr(0)}static cr(){return new fr(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc="LruGarbageCollector",D0=1048576;function Zc([n,e],[t,r]){const s=fe(n,t);return s===0?fe(e,r):s}class N0{constructor(e){this.Ir=e,this.buffer=new Be(Zc),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Zc(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class L0{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){H(Xc,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){wr(t)?H(Xc,"Ignoring IndexedDB error during garbage collection: ",t):await vr(t)}await this.Vr(3e5)}))}}class O0{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return M.resolve(Li.ce);const r=new N0(t);return this.mr.forEachTarget(e,(s=>r.Ar(s.sequenceNumber))).next((()=>this.mr.pr(e,(s=>r.Ar(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.mr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(Jc)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Jc):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let r,s,i,a,c,u,d;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((y=>(y>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${y}`),s=this.params.maximumSequenceNumbersToCollect):s=y,a=Date.now(),this.nthSequenceNumber(e,s)))).next((y=>(r=y,c=Date.now(),this.removeTargets(e,r,t)))).next((y=>(i=y,u=Date.now(),this.removeOrphanedDocuments(e,r)))).next((y=>(d=Date.now(),Jn()<=de.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(u-c)+`ms
	Removed ${y} documents in `+(d-u)+`ms
Total Duration: ${d-m}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:y}))))}}function F0(n,e){return new O0(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(){this.changes=new jn((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Je.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?M.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&Zr(r.mutation,s,ut.empty(),Ce.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,pe()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=pe()){const s=xn();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((i=>{let a=Gr();return i.forEach(((c,u)=>{a=a.insert(c,u.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const r=xn();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,pe())))}populateOverlays(e,t,r){const s=[];return r.forEach((i=>{t.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((a,c)=>{t.set(a,c)}))}))}computeViews(e,t,r,s){let i=Ot();const a=Xr(),c=(function(){return Xr()})();return t.forEach(((u,d)=>{const m=r.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof yn)?i=i.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),Zr(m.mutation,d,m.mutation.getFieldMask(),Ce.now())):a.set(d.key,ut.empty())})),this.recalculateAndSaveOverlays(e,i).next((u=>(u.forEach(((d,m)=>a.set(d,m))),t.forEach(((d,m)=>c.set(d,new B0(m,a.get(d)??null)))),c)))}recalculateAndSaveOverlays(e,t){const r=Xr();let s=new Re(((a,c)=>a-c)),i=pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const c of a)c.keys().forEach((u=>{const d=t.get(u);if(d===null)return;let m=r.get(u)||ut.empty();m=c.applyToLocalView(d,m),r.set(u,m);const y=(s.get(c.batchId)||pe()).add(u);s=s.insert(c.batchId,y)}))})).next((()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),d=u.key,m=u.value,y=Yh();m.forEach((T=>{if(!i.has(T)){const P=nd(t.get(T),r.get(T));P!==null&&y.set(T,P),i=i.add(T)}})),a.push(this.documentOverlayCache.saveOverlays(e,d,y))}return M.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return(function(a){return X.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Hh(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):M.resolve(xn());let c=ss,u=i;return a.next((d=>M.forEach(d,((m,y)=>(c<y.largestBatchId&&(c=y.largestBatchId),i.get(m)?M.resolve():this.remoteDocumentCache.getEntry(e,m).next((T=>{u=u.insert(m,T)}))))).next((()=>this.populateOverlays(e,d,i))).next((()=>this.computeViews(e,u,d,pe()))).next((m=>({batchId:c,changes:Qh(m)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new X(t)).next((r=>{let s=Gr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=Gr();return this.indexManager.getCollectionParents(e,i).next((c=>M.forEach(c,(u=>{const d=(function(y,T){return new br(T,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)})(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next((m=>{m.forEach(((y,T)=>{a=a.insert(y,T)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s)))).next((a=>{i.forEach(((u,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,Je.newInvalidDocument(m)))}));let c=Gr();return a.forEach(((u,d)=>{const m=i.get(u);m!==void 0&&Zr(m.mutation,d,ut.empty(),Ce.now()),ji(t,d)&&(c=c.insert(u,d))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return M.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:Tt(s.createTime)}})(t)),M.resolve()}getNamedQuery(e,t){return M.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(s){return{name:s.name,query:P0(s.bundledQuery),readTime:Tt(s.readTime)}})(t)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0{constructor(){this.overlays=new Re(X.comparator),this.qr=new Map}getOverlay(e,t){return M.resolve(this.overlays.get(t))}getOverlays(e,t){const r=xn();return M.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((s,i)=>{this.St(e,t,i)})),M.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(r)),M.resolve()}getOverlaysForCollection(e,t,r){const s=xn(),i=t.length+1,a=new X(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return M.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Re(((d,m)=>d-m));const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let m=i.get(d.largestBatchId);m===null&&(m=xn(),i=i.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const c=xn(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach(((d,m)=>c.set(d,m))),!(c.size()>=s)););return M.resolve(c)}St(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new a0(t,r));let i=this.qr.get(t);i===void 0&&(i=pe(),this.qr.set(t,i)),this.qr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{constructor(){this.sessionToken=We.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(){this.Qr=new Be(ze.$r),this.Ur=new Be(ze.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const r=new ze(e,t);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Gr(new ze(e,t))}zr(e,t){e.forEach((r=>this.removeReference(r,t)))}jr(e){const t=new X(new Te([])),r=new ze(t,e),s=new ze(t,e+1),i=[];return this.Ur.forEachInRange([r,s],(a=>{this.Gr(a),i.push(a.key)})),i}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new X(new Te([])),r=new ze(t,e),s=new ze(t,e+1);let i=pe();return this.Ur.forEachInRange([r,s],(a=>{i=i.add(a.key)})),i}containsKey(e){const t=new ze(e,0),r=this.Qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ze{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return X.comparator(e.key,t.key)||fe(e.Yr,t.Yr)}static Kr(e,t){return fe(e.Yr,t.Yr)||X.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Be(ze.$r)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new o0(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.Zr=this.Zr.add(new ze(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return M.resolve(a)}lookupMutationBatch(e,t){return M.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.ei(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?va:this.tr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ze(t,0),s=new ze(t,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],(a=>{const c=this.Xr(a.Yr);i.push(c)})),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Be(fe);return t.forEach((s=>{const i=new ze(s,0),a=new ze(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,a],(c=>{r=r.add(c.Yr)}))})),M.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;X.isDocumentKey(i)||(i=i.child(""));const a=new ze(new X(i),0);let c=new Be(fe);return this.Zr.forEachWhile((u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(c=c.add(u.Yr)),!0)}),a),M.resolve(this.ti(c))}ti(e){const t=[];return e.forEach((r=>{const s=this.Xr(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){ye(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return M.forEach(t.mutations,(s=>{const i=new ze(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Zr=r}))}ir(e){}containsKey(e,t){const r=new ze(t,0),s=this.Zr.firstAfterOrEqual(r);return M.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0{constructor(e){this.ri=e,this.docs=(function(){return new Re(X.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ri(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return M.resolve(r?r.document.mutableCopy():Je.newInvalidDocument(t))}getEntries(e,t){let r=Ot();return t.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Je.newInvalidDocument(s))})),M.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=Ot();const a=t.path,c=new X(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:d,value:{document:m}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||bg(wg(m),r)<=0||(s.has(m.key)||ji(t,m))&&(i=i.insert(m.key,m.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,t,r,s){ne(9500)}ii(e,t){return M.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new W0(this)}getSize(e){return M.resolve(this.size)}}class W0 extends U0{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)})),M.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{constructor(e){this.persistence=e,this.si=new jn((t=>Ea(t)),Ta),this.lastRemoteSnapshotVersion=ie.min(),this.highestTargetId=0,this.oi=0,this._i=new ka,this.targetCount=0,this.ai=fr.ur()}forEachTarget(e,t){return this.si.forEach(((r,s)=>t(s))),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.oi&&(this.oi=t),M.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new fr(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,M.resolve()}updateTargetData(e,t){return this.Pr(t),M.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.si.forEach(((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.si.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),M.waitFor(i).next((()=>s))}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,t){const r=this.si.get(t)||null;return M.resolve(r)}addMatchingKeys(e,t,r){return this._i.Wr(t,r),M.resolve()}removeMatchingKeys(e,t,r){this._i.zr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach((a=>{i.push(s.markPotentiallyOrphaned(e,a))})),M.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),M.resolve()}getMatchingKeysForTargetId(e,t){const r=this._i.Hr(t);return M.resolve(r)}containsKey(e,t){return M.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(e,t){this.ui={},this.overlays={},this.ci=new Li(0),this.li=!1,this.li=!0,this.hi=new z0,this.referenceDelegate=e(this),this.Pi=new K0(this),this.indexManager=new V0,this.remoteDocumentCache=(function(s){return new G0(s)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new k0(t),this.Ii=new $0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new q0,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ui[e.toKey()];return r||(r=new H0(t,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,r){H("MemoryPersistence","Starting transaction:",e);const s=new Q0(this.ci.next());return this.referenceDelegate.Ei(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ai(e,t){return M.or(Object.values(this.ui).map((r=>()=>r.containsKey(e,t))))}}class Q0 extends Tg{constructor(e){super(),this.currentSequenceNumber=e}}class Pa{constructor(e){this.persistence=e,this.Ri=new ka,this.Vi=null}static mi(e){return new Pa(e)}get fi(){if(this.Vi)return this.Vi;throw ne(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.fi.delete(r.toString()),M.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.fi.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),M.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((s=>this.fi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((i=>this.fi.add(i.toString())))})).next((()=>r.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.fi,(r=>{const s=X.fromPath(r);return this.gi(e,s).next((i=>{i||t.removeEntry(s,ie.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((r=>{r?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return M.or([()=>M.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class vi{constructor(e,t){this.persistence=e,this.pi=new jn((r=>Ag(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=F0(this,t)}static mi(e,t){return new vi(e,t)}Ei(){}di(e){return M.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}wr(e){let t=0;return this.pr(e,(r=>{t++})).next((()=>t))}pr(e,t){return M.forEach(this.pi,((r,s)=>this.br(e,r,s).next((i=>i?M.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,(a=>this.br(e,a,t).next((c=>{c||(r++,i.removeEntry(a,ie.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),M.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),M.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Zs(e.data.value)),t}br(e,t,r){return M.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.pi.get(t);return M.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Es=r,this.ds=s}static As(e,t){let r=pe(),s=pe();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Va(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return jp()?8:Ig(Xe())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ys(e,t).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.ws(e,t,s,r).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new Y0;return this.Ss(e,t,a).next((c=>{if(i.result=c,this.Vs)return this.bs(e,t,a,c.size)}))})).next((()=>i.result))}bs(e,t,r,s){return r.documentReadCount<this.fs?(Jn()<=de.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",Xn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),M.resolve()):(Jn()<=de.DEBUG&&H("QueryEngine","Query:",Xn(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(Jn()<=de.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",Xn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Et(t))):M.resolve())}ys(e,t){if(jc(t))return M.resolve(null);let r=Et(t);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=gi(t,null,"F"),r=Et(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const a=pe(...i);return this.ps.getDocuments(e,a).next((c=>this.indexManager.getMinOffset(e,r).next((u=>{const d=this.Ds(t,c);return this.Cs(t,d,a,u.readTime)?this.ys(e,gi(t,null,"F")):this.vs(e,d,t,u)}))))})))))}ws(e,t,r,s){return jc(t)||s.isEqual(ie.min())?M.resolve(null):this.ps.getDocuments(e,r).next((i=>{const a=this.Ds(t,i);return this.Cs(t,a,r,s)?M.resolve(null):(Jn()<=de.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Xn(t)),this.vs(e,a,t,vg(s,ss)).next((c=>c)))}))}Ds(e,t){let r=new Be(Wh(e));return t.forEach(((s,i)=>{ji(e,i)&&(r=r.add(i))})),r}Cs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,t,r){return Jn()<=de.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Xn(t)),this.ps.getDocumentsMatchingQuery(e,t,hn.min(),r)}vs(e,t,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next((i=>(t.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma="LocalStore",X0=3e8;class Z0{constructor(e,t,r,s){this.persistence=e,this.Fs=t,this.serializer=s,this.Ms=new Re(fe),this.xs=new jn((i=>Ea(i)),Ta),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new j0(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function e1(n,e,t,r){return new Z0(n,e,t,r)}async function gd(n,e){const t=ae(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,t.Bs(e),t.mutationQueue.getAllMutationBatches(r)))).next((i=>{const a=[],c=[];let u=pe();for(const d of s){a.push(d.batchId);for(const m of d.mutations)u=u.add(m.key)}for(const d of i){c.push(d.batchId);for(const m of d.mutations)u=u.add(m.key)}return t.localDocuments.getDocuments(r,u).next((d=>({Ls:d,removedBatchIds:a,addedBatchIds:c})))}))}))}function t1(n,e){const t=ae(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(c,u,d,m){const y=d.batch,T=y.keys();let P=M.resolve();return T.forEach((N=>{P=P.next((()=>m.getEntry(u,N))).next((L=>{const S=d.docVersions.get(N);ye(S!==null,48541),L.version.compareTo(S)<0&&(y.applyToRemoteDocument(L,d),L.isValidDocument()&&(L.setReadTime(d.commitVersion),m.addEntry(L)))}))})),P.next((()=>c.mutationQueue.removeMutationBatch(u,y)))})(t,r,e,i).next((()=>i.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let u=pe();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(u=u.add(c.batch.mutations[d].key));return u})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function _d(n){const e=ae(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function n1(n,e){const t=ae(n),r=e.snapshotVersion;let s=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=t.Ns.newChangeBuffer({trackRemovals:!0});s=t.Ms;const c=[];e.targetChanges.forEach(((m,y)=>{const T=s.get(y);if(!T)return;c.push(t.Pi.removeMatchingKeys(i,m.removedDocuments,y).next((()=>t.Pi.addMatchingKeys(i,m.addedDocuments,y))));let P=T.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(y)!==null?P=P.withResumeToken(We.EMPTY_BYTE_STRING,ie.min()).withLastLimboFreeSnapshotVersion(ie.min()):m.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(m.resumeToken,r)),s=s.insert(y,P),(function(L,S,D){return L.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=X0?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0})(T,P,m)&&c.push(t.Pi.updateTargetData(i,P))}));let u=Ot(),d=pe();if(e.documentUpdates.forEach((m=>{e.resolvedLimboDocuments.has(m)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,m))})),c.push(r1(i,a,e.documentUpdates).next((m=>{u=m.ks,d=m.qs}))),!r.isEqual(ie.min())){const m=t.Pi.getLastRemoteSnapshotVersion(i).next((y=>t.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(m)}return M.waitFor(c).next((()=>a.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,u,d))).next((()=>u))})).then((i=>(t.Ms=s,i)))}function r1(n,e,t){let r=pe(),s=pe();return t.forEach((i=>r=r.add(i))),e.getEntries(n,r).next((i=>{let a=Ot();return t.forEach(((c,u)=>{const d=i.get(c);u.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),u.isNoDocument()&&u.version.isEqual(ie.min())?(e.removeEntry(c,u.readTime),a=a.insert(c,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),a=a.insert(c,u)):H(Ma,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",u.version)})),{ks:a,qs:s}}))}function s1(n,e){const t=ae(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=va),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function i1(n,e){const t=ae(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.Pi.getTargetData(r,e).next((i=>i?(s=i,M.resolve(s)):t.Pi.allocateTargetId(r).next((a=>(s=new sn(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Pi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(r.targetId,r),t.xs.set(e,r.targetId)),r}))}async function na(n,e,t){const r=ae(n),s=r.Ms.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!wr(a))throw a;H(Ma,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function eu(n,e,t){const r=ae(n);let s=ie.min(),i=pe();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(u,d,m){const y=ae(u),T=y.xs.get(m);return T!==void 0?M.resolve(y.Ms.get(T)):y.Pi.getTargetData(d,m)})(r,a,Et(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,c.targetId).next((u=>{i=u}))})).next((()=>r.Fs.getDocumentsMatchingQuery(a,e,t?s:ie.min(),t?i:pe()))).next((c=>(o1(r,Hg(e),c),{documents:c,Qs:i})))))}function o1(n,e,t){let r=n.Os.get(e)||ie.min();t.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),n.Os.set(e,r)}class tu{constructor(){this.activeTargetIds=Jg()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class a1{constructor(){this.Mo=new tu,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,r){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new tu,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l1{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nu="ConnectivityMonitor";class ru{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){H(nu,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){H(nu,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gs=null;function ra(){return Gs===null?Gs=(function(){return 268435456+Math.round(2147483648*Math.random())})():Gs++,"0x"+Gs.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po="RestConnection",c1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class u1{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===fi?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,t,r,s,i){const a=ra(),c=this.zo(e,t.toUriEncodedString());H(Po,`Sending RPC '${e}' ${a}:`,c,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,s,i);const{host:d}=new URL(c),m=gr(d);return this.Jo(e,c,u,r,m).then((y=>(H(Po,`Received RPC '${e}' ${a}: `,y),y)),(y=>{throw ar(Po,`RPC '${e}' ${a} failed with error: `,y,"url: ",c,"request:",r),y}))}Ho(e,t,r,s,i,a){return this.Go(e,t,r,s,i)}jo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+yr})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}zo(e,t){const r=c1[e];return`${this.Uo}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h1{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qe="WebChannelConnection";class d1 extends u1{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,s,i){const a=ra();return new Promise(((c,u)=>{const d=new wh;d.setWithCredentials(!0),d.listenOnce(bh.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case Xs.NO_ERROR:const y=d.getResponseJson();H(Qe,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(y)),c(y);break;case Xs.TIMEOUT:H(Qe,`RPC '${e}' ${a} timed out`),u(new B(V.DEADLINE_EXCEEDED,"Request time out"));break;case Xs.HTTP_ERROR:const T=d.getStatus();if(H(Qe,`RPC '${e}' ${a} failed with status:`,T,"response text:",d.getResponseText()),T>0){let P=d.getResponseJson();Array.isArray(P)&&(P=P[0]);const N=P?.error;if(N&&N.status&&N.message){const L=(function(D){const G=D.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(G)>=0?G:V.UNKNOWN})(N.status);u(new B(L,N.message))}else u(new B(V.UNKNOWN,"Server responded with status "+d.getStatus()))}else u(new B(V.UNAVAILABLE,"Connection failed."));break;default:ne(9055,{l_:e,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{H(Qe,`RPC '${e}' ${a} completed.`)}}));const m=JSON.stringify(s);H(Qe,`RPC '${e}' ${a} sending request:`,s),d.send(t,"POST",m,r,15)}))}T_(e,t,r){const s=ra(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Ih(),c=Th(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const m=i.join("");H(Qe,`Creating RPC '${e}' stream ${s}: ${m}`,u);const y=a.createWebChannel(m,u);this.I_(y);let T=!1,P=!1;const N=new h1({Yo:S=>{P?H(Qe,`Not sending because RPC '${e}' stream ${s} is closed:`,S):(T||(H(Qe,`Opening RPC '${e}' stream ${s} transport.`),y.open(),T=!0),H(Qe,`RPC '${e}' stream ${s} sending:`,S),y.send(S))},Zo:()=>y.close()}),L=(S,D,G)=>{S.listen(D,(Z=>{try{G(Z)}catch(we){setTimeout((()=>{throw we}),0)}}))};return L(y,Hr.EventType.OPEN,(()=>{P||(H(Qe,`RPC '${e}' stream ${s} transport opened.`),N.o_())})),L(y,Hr.EventType.CLOSE,(()=>{P||(P=!0,H(Qe,`RPC '${e}' stream ${s} transport closed`),N.a_(),this.E_(y))})),L(y,Hr.EventType.ERROR,(S=>{P||(P=!0,ar(Qe,`RPC '${e}' stream ${s} transport errored. Name:`,S.name,"Message:",S.message),N.a_(new B(V.UNAVAILABLE,"The operation could not be completed")))})),L(y,Hr.EventType.MESSAGE,(S=>{if(!P){const D=S.data[0];ye(!!D,16349);const G=D,Z=G?.error||G[0]?.error;if(Z){H(Qe,`RPC '${e}' stream ${s} received error:`,Z);const we=Z.status;let Se=(function(_){const g=De[_];if(g!==void 0)return sd(g)})(we),ve=Z.message;Se===void 0&&(Se=V.INTERNAL,ve="Unknown error status: "+we+" with message "+Z.message),P=!0,N.a_(new B(Se,ve)),y.close()}else H(Qe,`RPC '${e}' stream ${s} received:`,D),N.u_(D)}})),L(c,Eh.STAT_EVENT,(S=>{S.stat===Ho.PROXY?H(Qe,`RPC '${e}' stream ${s} detected buffering proxy`):S.stat===Ho.NOPROXY&&H(Qe,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{N.__()}),0),N}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function Vo(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(n){return new g0(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&H("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su="PersistentStream";class vd{constructor(e,t,r,s,i,a,c,u){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new yd(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===V.RESOURCE_EXHAUSTED?(Lt(t.toString()),Lt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===t&&this.G_(r,s)}),(r=>{e((()=>{const s=new B(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(e,t){const r=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return H(su,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(H(su,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class f1 extends vd{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=v0(this.serializer,e),r=(function(i){if(!("targetChange"in i))return ie.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?ie.min():a.readTime?Tt(a.readTime):ie.min()})(e);return this.listener.H_(t,r)}Y_(e){const t={};t.database=ta(this.serializer),t.addTarget=(function(i,a){let c;const u=a.target;if(c=Yo(u)?{documents:E0(i,u)}:{query:T0(i,u).ft},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=ad(i,a.resumeToken);const d=Xo(i,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(ie.min())>0){c.readTime=yi(i,a.snapshotVersion.toTimestamp());const d=Xo(i,a.expectedCount);d!==null&&(c.expectedCount=d)}return c})(this.serializer,e);const r=C0(this.serializer,e);r&&(t.labels=r),this.q_(t)}Z_(e){const t={};t.database=ta(this.serializer),t.removeTarget=e,this.q_(t)}}class p1 extends vd{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return ye(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ye(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ye(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=b0(e.writeResults,e.commitTime),r=Tt(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=ta(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>w0(this.serializer,r)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m1{}class g1 extends m1{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new B(V.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Go(e,Zo(t,r),s,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new B(V.UNKNOWN,i.toString())}))}Ho(e,t,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,c])=>this.connection.Ho(e,Zo(t,r),s,a,c,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new B(V.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class _1{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Lt(t),this.aa=!1):H("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const On="RemoteStore";class y1{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((a=>{r.enqueueAndForget((async()=>{$n(this)&&(H(On,"Restarting streams for network reachability change."),await(async function(u){const d=ae(u);d.Ea.add(4),await vs(d),d.Ra.set("Unknown"),d.Ea.delete(4),await Gi(d)})(this))}))})),this.Ra=new _1(r,s)}}async function Gi(n){if($n(n))for(const e of n.da)await e(!0)}async function vs(n){for(const e of n.da)await e(!1)}function wd(n,e){const t=ae(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Oa(t)?La(t):Er(t).O_()&&Na(t,e))}function Da(n,e){const t=ae(n),r=Er(t);t.Ia.delete(e),r.O_()&&bd(t,e),t.Ia.size===0&&(r.O_()?r.L_():$n(t)&&t.Ra.set("Unknown"))}function Na(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ie.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Er(n).Y_(e)}function bd(n,e){n.Va.Ue(e),Er(n).Z_(e)}function La(n){n.Va=new d0({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Er(n).start(),n.Ra.ua()}function Oa(n){return $n(n)&&!Er(n).x_()&&n.Ia.size>0}function $n(n){return ae(n).Ea.size===0}function Ed(n){n.Va=void 0}async function v1(n){n.Ra.set("Online")}async function w1(n){n.Ia.forEach(((e,t)=>{Na(n,e)}))}async function b1(n,e){Ed(n),Oa(n)?(n.Ra.ha(e),La(n)):n.Ra.set("Unknown")}async function E1(n,e,t){if(n.Ra.set("Online"),e instanceof od&&e.state===2&&e.cause)try{await(async function(s,i){const a=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.Ia.delete(c),s.Va.removeTarget(c))})(n,e)}catch(r){H(On,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await wi(n,r)}else if(e instanceof ni?n.Va.Ze(e):e instanceof id?n.Va.st(e):n.Va.tt(e),!t.isEqual(ie.min()))try{const r=await _d(n.localStore);t.compareTo(r)>=0&&await(function(i,a){const c=i.Va.Tt(a);return c.targetChanges.forEach(((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const m=i.Ia.get(d);m&&i.Ia.set(d,m.withResumeToken(u.resumeToken,a))}})),c.targetMismatches.forEach(((u,d)=>{const m=i.Ia.get(u);if(!m)return;i.Ia.set(u,m.withResumeToken(We.EMPTY_BYTE_STRING,m.snapshotVersion)),bd(i,u);const y=new sn(m.target,u,d,m.sequenceNumber);Na(i,y)})),i.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(r){H(On,"Failed to raise snapshot:",r),await wi(n,r)}}async function wi(n,e,t){if(!wr(e))throw e;n.Ea.add(1),await vs(n),n.Ra.set("Offline"),t||(t=()=>_d(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{H(On,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Gi(n)}))}function Td(n,e){return e().catch((t=>wi(n,t,e)))}async function Wi(n){const e=ae(n),t=mn(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:va;for(;T1(e);)try{const s=await s1(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,I1(e,s)}catch(s){await wi(e,s)}Id(e)&&Cd(e)}function T1(n){return $n(n)&&n.Ta.length<10}function I1(n,e){n.Ta.push(e);const t=mn(n);t.O_()&&t.X_&&t.ea(e.mutations)}function Id(n){return $n(n)&&!mn(n).x_()&&n.Ta.length>0}function Cd(n){mn(n).start()}async function C1(n){mn(n).ra()}async function A1(n){const e=mn(n);for(const t of n.Ta)e.ea(t.mutations)}async function R1(n,e,t){const r=n.Ta.shift(),s=Ra.from(r,e,t);await Td(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await Wi(n)}async function S1(n,e){e&&mn(n).X_&&await(async function(r,s){if((function(a){return c0(a)&&a!==V.ABORTED})(s.code)){const i=r.Ta.shift();mn(r).B_(),await Td(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await Wi(r)}})(n,e),Id(n)&&Cd(n)}async function iu(n,e){const t=ae(n);t.asyncQueue.verifyOperationInProgress(),H(On,"RemoteStore received new credentials");const r=$n(t);t.Ea.add(3),await vs(t),r&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Gi(t)}async function x1(n,e){const t=ae(n);e?(t.Ea.delete(2),await Gi(t)):e||(t.Ea.add(2),await vs(t),t.Ra.set("Unknown"))}function Er(n){return n.ma||(n.ma=(function(t,r,s){const i=ae(t);return i.sa(),new f1(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Xo:v1.bind(null,n),t_:w1.bind(null,n),r_:b1.bind(null,n),H_:E1.bind(null,n)}),n.da.push((async e=>{e?(n.ma.B_(),Oa(n)?La(n):n.Ra.set("Unknown")):(await n.ma.stop(),Ed(n))}))),n.ma}function mn(n){return n.fa||(n.fa=(function(t,r,s){const i=ae(t);return i.sa(),new p1(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:C1.bind(null,n),r_:S1.bind(null,n),ta:A1.bind(null,n),na:R1.bind(null,n)}),n.da.push((async e=>{e?(n.fa.B_(),await Wi(n)):(await n.fa.stop(),n.Ta.length>0&&(H(On,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Vt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new Fa(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ua(n,e){if(Lt("AsyncQueue",`${e}: ${n}`),wr(n))return new B(V.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{static emptySet(e){return new nr(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||X.comparator(t.key,r.key):(t,r)=>X.comparator(t.key,r.key),this.keyedMap=Gr(),this.sortedSet=new Re(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof nr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new nr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(){this.ga=new Re(X.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):ne(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,r)=>{e.push(r)})),e}}class pr{constructor(e,t,r,s,i,a,c,u,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach((c=>{a.push({type:0,doc:c})})),new pr(e,t,nr.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Bi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k1{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class P1{constructor(){this.queries=au(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const s=ae(t),i=s.queries;s.queries=au(),i.forEach(((a,c)=>{for(const u of c.Sa)u.onError(r)}))})(this,new B(V.ABORTED,"Firestore shutting down"))}}function au(){return new jn((n=>Gh(n)),Bi)}async function Ba(n,e){const t=ae(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new k1,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await t.onListen(s,!0);break;case 1:i.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=Ua(a,`Initialization of query '${Xn(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.Sa.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&$a(t)}async function ja(n,e){const t=ae(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.Sa.indexOf(e);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function V1(n,e){const t=ae(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.Sa)c.Fa(s)&&(r=!0);a.wa=s}}r&&$a(t)}function M1(n,e,t){const r=ae(n),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(t);r.queries.delete(e)}function $a(n){n.Ca.forEach((e=>{e.next()}))}var sa,lu;(lu=sa||(sa={})).Ma="default",lu.Cache="cache";class qa{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new pr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=pr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==sa.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e){this.key=e}}class Rd{constructor(e){this.key=e}}class D1{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=pe(),this.mutatedKeys=pe(),this.eu=Wh(e),this.tu=new nr(this.eu)}get nu(){return this.Ya}ru(e,t){const r=t?t.iu:new ou,s=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((m,y)=>{const T=s.get(m),P=ji(this.query,y)?y:null,N=!!T&&this.mutatedKeys.has(T.key),L=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let S=!1;T&&P?T.data.isEqual(P.data)?N!==L&&(r.track({type:3,doc:P}),S=!0):this.su(T,P)||(r.track({type:2,doc:P}),S=!0,(u&&this.eu(P,u)>0||d&&this.eu(P,d)<0)&&(c=!0)):!T&&P?(r.track({type:0,doc:P}),S=!0):T&&!P&&(r.track({type:1,doc:T}),S=!0,(u||d)&&(c=!0)),S&&(P?(a=a.add(P),i=L?i.add(m):i.delete(m)):(a=a.delete(m),i=i.delete(m)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),i=i.delete(m.key),r.track({type:1,doc:m})}return{tu:a,iu:r,Cs:c,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort(((m,y)=>(function(P,N){const L=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ne(20277,{Rt:S})}};return L(P)-L(N)})(m.type,y.type)||this.eu(m.doc,y.doc))),this.ou(r),s=s??!1;const c=t&&!s?this._u():[],u=this.Xa.size===0&&this.current&&!s?1:0,d=u!==this.Za;return this.Za=u,a.length!==0||d?{snapshot:new pr(this.query,e.tu,i,a,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new ou,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=pe(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const t=[];return e.forEach((r=>{this.Xa.has(r)||t.push(new Rd(r))})),this.Xa.forEach((r=>{e.has(r)||t.push(new Ad(r))})),t}cu(e){this.Ya=e.Qs,this.Xa=pe();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return pr.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const za="SyncEngine";class N1{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class L1{constructor(e){this.key=e,this.hu=!1}}class O1{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new jn((c=>Gh(c)),Bi),this.Iu=new Map,this.Eu=new Set,this.du=new Re(X.comparator),this.Au=new Map,this.Ru=new ka,this.Vu={},this.mu=new Map,this.fu=fr.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function F1(n,e,t=!0){const r=Md(n);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await Sd(r,e,t,!0),s}async function U1(n,e){const t=Md(n);await Sd(t,e,!0,!1)}async function Sd(n,e,t,r){const s=await i1(n.localStore,Et(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await B1(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&wd(n.remoteStore,s),c}async function B1(n,e,t,r,s){n.pu=(y,T,P)=>(async function(L,S,D,G){let Z=S.view.ru(D);Z.Cs&&(Z=await eu(L.localStore,S.query,!1).then((({documents:I})=>S.view.ru(I,Z))));const we=G&&G.targetChanges.get(S.targetId),Se=G&&G.targetMismatches.get(S.targetId)!=null,ve=S.view.applyChanges(Z,L.isPrimaryClient,we,Se);return uu(L,S.targetId,ve.au),ve.snapshot})(n,y,T,P);const i=await eu(n.localStore,e,!0),a=new D1(e,i.Qs),c=a.ru(i.documents),u=ys.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),d=a.applyChanges(c,n.isPrimaryClient,u);uu(n,t,d.au);const m=new N1(e,t,a);return n.Tu.set(e,m),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),d.snapshot}async function j1(n,e,t){const r=ae(n),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter((a=>!Bi(a,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await na(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Da(r.remoteStore,s.targetId),ia(r,s.targetId)})).catch(vr)):(ia(r,s.targetId),await na(r.localStore,s.targetId,!0))}async function $1(n,e){const t=ae(n),r=t.Tu.get(e),s=t.Iu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Da(t.remoteStore,r.targetId))}async function q1(n,e,t){const r=Y1(n);try{const s=await(function(a,c){const u=ae(a),d=Ce.now(),m=c.reduce(((P,N)=>P.add(N.key)),pe());let y,T;return u.persistence.runTransaction("Locally write mutations","readwrite",(P=>{let N=Ot(),L=pe();return u.Ns.getEntries(P,m).next((S=>{N=S,N.forEach(((D,G)=>{G.isValidDocument()||(L=L.add(D))}))})).next((()=>u.localDocuments.getOverlayedDocuments(P,N))).next((S=>{y=S;const D=[];for(const G of c){const Z=s0(G,y.get(G.key).overlayedDocument);Z!=null&&D.push(new yn(G.key,Z,Fh(Z.value.mapValue),ft.exists(!0)))}return u.mutationQueue.addMutationBatch(P,d,D,c)})).next((S=>{T=S;const D=S.applyToLocalDocumentSet(y,L);return u.documentOverlayCache.saveOverlays(P,S.batchId,D)}))})).then((()=>({batchId:T.batchId,changes:Qh(y)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(a,c,u){let d=a.Vu[a.currentUser.toKey()];d||(d=new Re(fe)),d=d.insert(c,u),a.Vu[a.currentUser.toKey()]=d})(r,s.batchId,t),await ws(r,s.changes),await Wi(r.remoteStore)}catch(s){const i=Ua(s,"Failed to persist write");t.reject(i)}}async function xd(n,e){const t=ae(n);try{const r=await n1(t.localStore,e);e.targetChanges.forEach(((s,i)=>{const a=t.Au.get(i);a&&(ye(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?ye(a.hu,14607):s.removedDocuments.size>0&&(ye(a.hu,42227),a.hu=!1))})),await ws(t,r,e)}catch(r){await vr(r)}}function cu(n,e,t){const r=ae(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Tu.forEach(((i,a)=>{const c=a.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(a,c){const u=ae(a);u.onlineState=c;let d=!1;u.queries.forEach(((m,y)=>{for(const T of y.Sa)T.va(c)&&(d=!0)})),d&&$a(u)})(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function z1(n,e,t){const r=ae(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Au.get(e),i=s&&s.key;if(i){let a=new Re(X.comparator);a=a.insert(i,Je.newNoDocument(i,ie.min()));const c=pe().add(i),u=new zi(ie.min(),new Map,new Re(fe),a,c);await xd(r,u),r.du=r.du.remove(i),r.Au.delete(e),Ha(r)}else await na(r.localStore,e,!1).then((()=>ia(r,e,t))).catch(vr)}async function H1(n,e){const t=ae(n),r=e.batch.batchId;try{const s=await t1(t.localStore,e);Pd(t,r,null),kd(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ws(t,s)}catch(s){await vr(s)}}async function G1(n,e,t){const r=ae(n);try{const s=await(function(a,c){const u=ae(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let m;return u.mutationQueue.lookupMutationBatch(d,c).next((y=>(ye(y!==null,37113),m=y.keys(),u.mutationQueue.removeMutationBatch(d,y)))).next((()=>u.mutationQueue.performConsistencyCheck(d))).next((()=>u.documentOverlayCache.removeOverlaysForBatchId(d,m,c))).next((()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m))).next((()=>u.localDocuments.getDocuments(d,m)))}))})(r.localStore,e);Pd(r,e,t),kd(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ws(r,s)}catch(s){await vr(s)}}function kd(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function Pd(n,e,t){const r=ae(n);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function ia(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach((r=>{n.Ru.containsKey(r)||Vd(n,r)}))}function Vd(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Da(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),Ha(n))}function uu(n,e,t){for(const r of t)r instanceof Ad?(n.Ru.addReference(r.key,e),W1(n,r)):r instanceof Rd?(H(za,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,e),n.Ru.containsKey(r.key)||Vd(n,r.key)):ne(19791,{wu:r})}function W1(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Eu.has(r)||(H(za,"New document in limbo: "+t),n.Eu.add(r),Ha(n))}function Ha(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new X(Te.fromString(e)),r=n.fu.next();n.Au.set(r,new L1(t)),n.du=n.du.insert(t,r),wd(n.remoteStore,new sn(Et(Ui(t.path)),r,"TargetPurposeLimboResolution",Li.ce))}}async function ws(n,e,t){const r=ae(n),s=[],i=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach(((c,u)=>{a.push(r.pu(u,e,t).then((d=>{if((d||t)&&r.isPrimaryClient){const m=d?!d.fromCache:t?.targetChanges.get(u.targetId)?.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(d){s.push(d);const m=Va.As(u.targetId,d);i.push(m)}})))})),await Promise.all(a),r.Pu.H_(s),await(async function(u,d){const m=ae(u);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",(y=>M.forEach(d,(T=>M.forEach(T.Es,(P=>m.persistence.referenceDelegate.addReference(y,T.targetId,P))).next((()=>M.forEach(T.ds,(P=>m.persistence.referenceDelegate.removeReference(y,T.targetId,P)))))))))}catch(y){if(!wr(y))throw y;H(Ma,"Failed to update sequence numbers: "+y)}for(const y of d){const T=y.targetId;if(!y.fromCache){const P=m.Ms.get(T),N=P.snapshotVersion,L=P.withLastLimboFreeSnapshotVersion(N);m.Ms=m.Ms.insert(T,L)}}})(r.localStore,i))}async function K1(n,e){const t=ae(n);if(!t.currentUser.isEqual(e)){H(za,"User change. New user:",e.toKey());const r=await gd(t.localStore,e);t.currentUser=e,(function(i,a){i.mu.forEach((c=>{c.forEach((u=>{u.reject(new B(V.CANCELLED,a))}))})),i.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ws(t,r.Ls)}}function Q1(n,e){const t=ae(n),r=t.Au.get(e);if(r&&r.hu)return pe().add(r.key);{let s=pe();const i=t.Iu.get(e);if(!i)return s;for(const a of i){const c=t.Tu.get(a);s=s.unionWith(c.view.nu)}return s}}function Md(n){const e=ae(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=xd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Q1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=z1.bind(null,e),e.Pu.H_=V1.bind(null,e.eventManager),e.Pu.yu=M1.bind(null,e.eventManager),e}function Y1(n){const e=ae(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=H1.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=G1.bind(null,e),e}class bi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Hi(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return e1(this.persistence,new J0,e.initialUser,this.serializer)}Cu(e){return new md(Pa.mi,this.serializer)}Du(e){return new a1}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}bi.provider={build:()=>new bi};class J1 extends bi{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){ye(this.persistence.referenceDelegate instanceof vi,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new L0(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?st.withCacheSize(this.cacheSizeBytes):st.DEFAULT;return new md((r=>vi.mi(r,t)),this.serializer)}}class oa{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>cu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=K1.bind(null,this.syncEngine),await x1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new P1})()}createDatastore(e){const t=Hi(e.databaseInfo.databaseId),r=(function(i){return new d1(i)})(e.databaseInfo);return(function(i,a,c,u){return new g1(i,a,c,u)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,i,a,c){return new y1(r,s,i,a,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>cu(this.syncEngine,t,0)),(function(){return ru.v()?new ru:new l1})())}createSyncEngine(e,t){return(function(s,i,a,c,u,d,m){const y=new O1(s,i,a,c,u,d);return m&&(y.gu=!0),y})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const r=ae(t);H(On,"RemoteStore shutting down."),r.Ea.add(5),await vs(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}oa.provider={build:()=>new oa};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Lt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn="FirestoreClient";class X1{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Ye.UNAUTHENTICATED,this.clientId=ya.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async a=>{H(gn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(H(gn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Vt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Ua(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Mo(n,e){n.asyncQueue.verifyOperationInProgress(),H(gn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await gd(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function hu(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Z1(n);H(gn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>iu(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>iu(e.remoteStore,s))),n._onlineComponents=e}async function Z1(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){H(gn,"Using user provided OfflineComponentProvider");try{await Mo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;ar("Error using user provided cache. Falling back to memory cache: "+t),await Mo(n,new bi)}}else H(gn,"Using default OfflineComponentProvider"),await Mo(n,new J1(void 0));return n._offlineComponents}async function Dd(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(H(gn,"Using user provided OnlineComponentProvider"),await hu(n,n._uninitializedComponentsProvider._online)):(H(gn,"Using default OnlineComponentProvider"),await hu(n,new oa))),n._onlineComponents}function e2(n){return Dd(n).then((e=>e.syncEngine))}async function Ei(n){const e=await Dd(n),t=e.eventManager;return t.onListen=F1.bind(null,e.syncEngine),t.onUnlisten=j1.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=U1.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=$1.bind(null,e.syncEngine),t}function t2(n,e,t={}){const r=new Vt;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,c,u,d){const m=new Ga({next:T=>{m.Nu(),a.enqueueAndForget((()=>ja(i,y)));const P=T.docs.has(c);!P&&T.fromCache?d.reject(new B(V.UNAVAILABLE,"Failed to get document because the client is offline.")):P&&T.fromCache&&u&&u.source==="server"?d.reject(new B(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(T)},error:T=>d.reject(T)}),y=new qa(Ui(c.path),m,{includeMetadataChanges:!0,qa:!0});return Ba(i,y)})(await Ei(n),n.asyncQueue,e,t,r))),r.promise}function n2(n,e,t={}){const r=new Vt;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,c,u,d){const m=new Ga({next:T=>{m.Nu(),a.enqueueAndForget((()=>ja(i,y))),T.fromCache&&u.source==="server"?d.reject(new B(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(T)},error:T=>d.reject(T)}),y=new qa(c,m,{includeMetadataChanges:!0,qa:!0});return Ba(i,y)})(await Ei(n),n.asyncQueue,e,t,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nd(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const du=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ld="firestore.googleapis.com",fu=!0;class pu{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new B(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ld,this.ssl=fu}else this.host=e.host,this.ssl=e.ssl??fu;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=pd;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<D0)throw new B(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}_g("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Nd(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new B(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new B(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new B(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ki{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new pu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new B(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new B(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new pu(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new ag;switch(r.type){case"firstParty":return new hg(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=du.get(t);r&&(H("ComponentProvider","Removing Datastore"),du.delete(t),r.terminate())})(this),Promise.resolve()}}function r2(n,e,t,r={}){n=ot(n,Ki);const s=gr(e),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;s&&(hh(`https://${c}`),dh("Firestore",!0)),i.host!==Ld&&i.host!==c&&ar("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:c,ssl:s,emulatorOptions:r};if(!Dt(u,a)&&(n._setSettings(u),r.mockUserToken)){let d,m;if(typeof r.mockUserToken=="string")d=r.mockUserToken,m=Ye.MOCK_USER;else{d=Vp(r.mockUserToken,n._app?.options.projectId);const y=r.mockUserToken.sub||r.mockUserToken.user_id;if(!y)throw new B(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new Ye(y)}n._authCredentials=new lg(new Ah(d,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new jt(this.firestore,e,this._query)}}class ke{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new un(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ke(this.firestore,e,this._key)}toJSON(){return{type:ke._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(gs(t,ke._jsonSchema))return new ke(e,r||null,new X(Te.fromString(t.referencePath)))}}ke._jsonSchemaVersion="firestore/documentReference/1.0",ke._jsonSchema={type:Oe("string",ke._jsonSchemaVersion),referencePath:Oe("string")};class un extends jt{constructor(e,t,r){super(e,t,Ui(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ke(this.firestore,null,new X(e))}withConverter(e){return new un(this.firestore,e,this._path)}}function Wa(n,e,...t){if(n=je(n),Rh("collection","path",e),n instanceof Ki){const r=Te.fromString(e,...t);return Rc(r),new un(n,null,r)}{if(!(n instanceof ke||n instanceof un))throw new B(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Te.fromString(e,...t));return Rc(r),new un(n.firestore,null,r)}}function kn(n,e,...t){if(n=je(n),arguments.length===1&&(e=ya.newId()),Rh("doc","path",e),n instanceof Ki){const r=Te.fromString(e,...t);return Ac(r),new ke(n,null,new X(r))}{if(!(n instanceof ke||n instanceof un))throw new B(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Te.fromString(e,...t));return Ac(r),new ke(n.firestore,n instanceof un?n.converter:null,new X(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mu="AsyncQueue";class gu{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new yd(this,"async_queue_retry"),this._c=()=>{const r=Vo();r&&H(mu,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=Vo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Vo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Vt;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!wr(e))throw e;H(mu,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,Lt("INTERNAL UNHANDLED ERROR: ",_u(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=Fa.createAndSchedule(this,e,t,r,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&ne(47125,{Pc:_u(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function _u(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yu(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(n,["next","error","complete"])}class Ft extends Ki{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new gu,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new gu(e),this._firestoreClient=void 0,await e}}}function s2(n,e){const t=typeof n=="object"?n:gh(),r=typeof n=="string"?n:fi,s=ga(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=kp("firestore");i&&r2(s,...i)}return s}function Qi(n){if(n._terminated)throw new B(V.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||i2(n),n._firestoreClient}function i2(n){const e=n._freezeSettings(),t=(function(s,i,a,c){return new xg(s,i,a,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,Nd(c.experimentalLongPollingOptions),c.useFetchStreams,c.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new X1(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new dt(We.fromBase64String(e))}catch(t){throw new B(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new dt(We.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:dt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(gs(e,dt._jsonSchema))return dt.fromBase64String(e.bytes)}}dt._jsonSchemaVersion="firestore/bytes/1.0",dt._jsonSchema={type:Oe("string",dt._jsonSchemaVersion),bytes:Oe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new B(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new B(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new B(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return fe(this._lat,e._lat)||fe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:It._jsonSchemaVersion}}static fromJSON(e){if(gs(e,It._jsonSchema))return new It(e.latitude,e.longitude)}}It._jsonSchemaVersion="firestore/geoPoint/1.0",It._jsonSchema={type:Oe("string",It._jsonSchemaVersion),latitude:Oe("number"),longitude:Oe("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Ct._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(gs(e,Ct._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Ct(e.vectorValues);throw new B(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ct._jsonSchemaVersion="firestore/vectorValue/1.0",Ct._jsonSchema={type:Oe("string",Ct._jsonSchemaVersion),vectorValues:Oe("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o2=/^__.*__$/;class a2{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new yn(e,this.data,this.fieldMask,t,this.fieldTransforms):new _s(e,this.data,t,this.fieldTransforms)}}class Od{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new yn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Fd(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ne(40011,{Ac:n})}}class Ji{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Ji({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),r=this.Vc({path:t,fc:!1});return r.gc(e),r}yc(e){const t=this.path?.child(e),r=this.Vc({path:t,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Ti(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Fd(this.Ac)&&o2.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class l2{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Hi(e)}Cc(e,t,r,s=!1){return new Ji({Ac:e,methodName:t,Dc:r,path:Ge.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Xi(n){const e=n._freezeSettings(),t=Hi(n._databaseId);return new l2(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Ud(n,e,t,r,s,i={}){const a=n.Cc(i.merge||i.mergeFields?2:0,e,t,s);Ja("Data must be an object, but it was:",a,r);const c=jd(r,a);let u,d;if(i.merge)u=new ut(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const m=[];for(const y of i.mergeFields){const T=aa(e,y,t);if(!a.contains(T))throw new B(V.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);qd(m,T)||m.push(T)}u=new ut(m),d=a.fieldTransforms.filter((y=>u.covers(y.field)))}else u=null,d=a.fieldTransforms;return new a2(new it(c),u,d)}class Zi extends Tr{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Zi}}function Bd(n,e,t){return new Ji({Ac:3,Dc:e.settings.Dc,methodName:n._methodName,fc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Ka extends Tr{_toFieldTransform(e){return new Ca(e.path,new cs)}isEqual(e){return e instanceof Ka}}class Qa extends Tr{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=Bd(this,e,!0),r=this.vc.map((i=>qn(i,t))),s=new hr(r);return new Ca(e.path,s)}isEqual(e){return e instanceof Qa&&Dt(this.vc,e.vc)}}class Ya extends Tr{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=Bd(this,e,!0),r=this.vc.map((i=>qn(i,t))),s=new dr(r);return new Ca(e.path,s)}isEqual(e){return e instanceof Ya&&Dt(this.vc,e.vc)}}function c2(n,e,t,r){const s=n.Cc(1,e,t);Ja("Data must be an object, but it was:",s,r);const i=[],a=it.empty();_n(r,((u,d)=>{const m=Xa(e,u,t);d=je(d);const y=s.yc(m);if(d instanceof Zi)i.push(m);else{const T=qn(d,y);T!=null&&(i.push(m),a.set(m,T))}}));const c=new ut(i);return new Od(a,c,s.fieldTransforms)}function u2(n,e,t,r,s,i){const a=n.Cc(1,e,t),c=[aa(e,r,t)],u=[s];if(i.length%2!=0)throw new B(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let T=0;T<i.length;T+=2)c.push(aa(e,i[T])),u.push(i[T+1]);const d=[],m=it.empty();for(let T=c.length-1;T>=0;--T)if(!qd(d,c[T])){const P=c[T];let N=u[T];N=je(N);const L=a.yc(P);if(N instanceof Zi)d.push(P);else{const S=qn(N,L);S!=null&&(d.push(P),m.set(P,S))}}const y=new ut(d);return new Od(m,y,a.fieldTransforms)}function h2(n,e,t,r=!1){return qn(t,n.Cc(r?4:3,e))}function qn(n,e){if($d(n=je(n)))return Ja("Unsupported field value:",e,n),jd(n,e);if(n instanceof Tr)return(function(r,s){if(!Fd(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(r,s){const i=[];let a=0;for(const c of r){let u=qn(c,s.wc(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}})(n,e)}return(function(r,s){if((r=je(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Xg(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ce.fromDate(r);return{timestampValue:yi(s.serializer,i)}}if(r instanceof Ce){const i=new Ce(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:yi(s.serializer,i)}}if(r instanceof It)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof dt)return{bytesValue:ad(s.serializer,r._byteString)};if(r instanceof ke){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:xa(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Ct)return(function(a,c){return{mapValue:{fields:{[Lh]:{stringValue:Oh},[pi]:{arrayValue:{values:a.toArray().map((d=>{if(typeof d!="number")throw c.Sc("VectorValues must only contain numeric values.");return Ia(c.serializer,d)}))}}}}}})(r,s);throw s.Sc(`Unsupported field value: ${Ni(r)}`)})(n,e)}function jd(n,e){const t={};return kh(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):_n(n,((r,s)=>{const i=qn(s,e.mc(r));i!=null&&(t[r]=i)})),{mapValue:{fields:t}}}function $d(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ce||n instanceof It||n instanceof dt||n instanceof ke||n instanceof Tr||n instanceof Ct)}function Ja(n,e,t){if(!$d(t)||!Sh(t)){const r=Ni(t);throw r==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+r)}}function aa(n,e,t){if((e=je(e))instanceof Yi)return e._internalPath;if(typeof e=="string")return Xa(n,e);throw Ti("Field path arguments must be of type string or ",n,!1,void 0,t)}const d2=new RegExp("[~\\*/\\[\\]]");function Xa(n,e,t){if(e.search(d2)>=0)throw Ti(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Yi(...e.split("."))._internalPath}catch{throw Ti(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ti(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new B(V.INVALID_ARGUMENT,c+n+u)}function qd(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ke(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new f2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(eo("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class f2 extends zd{data(){return super.data()}}function eo(n,e){return typeof e=="string"?Xa(n,e):e instanceof Yi?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hd(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new B(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Za{}class el extends Za{}function Ii(n,e,...t){let r=[];e instanceof Za&&r.push(e),r=r.concat(t),(function(i){const a=i.filter((u=>u instanceof tl)).length,c=i.filter((u=>u instanceof to)).length;if(a>1||a>0&&c>0)throw new B(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class to extends el{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new to(e,t,r)}_apply(e){const t=this._parse(e);return Wd(e._query,t),new jt(e.firestore,e.converter,Jo(e._query,t))}_parse(e){const t=Xi(e.firestore);return(function(i,a,c,u,d,m,y){let T;if(d.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new B(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){wu(y,m);const N=[];for(const L of y)N.push(vu(u,i,L));T={arrayValue:{values:N}}}else T=vu(u,i,y)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||wu(y,m),T=h2(c,a,y,m==="in"||m==="not-in");return Le.create(d,m,T)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Gd(n,e,t){const r=e,s=eo("where",n);return to._create(s,r,t)}class tl extends Za{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new tl(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:_t.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,i){let a=s;const c=i.getFlattenedFilters();for(const u of c)Wd(a,u),a=Jo(a,u)})(e._query,t),new jt(e.firestore,e.converter,Jo(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class nl extends el{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new nl(e,t)}_apply(e){const t=(function(s,i,a){if(s.startAt!==null)throw new B(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new B(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ls(i,a)})(e._query,this._field,this._direction);return new jt(e.firestore,e.converter,(function(s,i){const a=s.explicitOrderBy.concat([i]);return new br(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,t))}}function la(n,e="asc"){const t=e,r=eo("orderBy",n);return nl._create(r,t)}class rl extends el{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new rl(e,t,r)}_apply(e){return new jt(e.firestore,e.converter,gi(e._query,this._limit,this._limitType))}}function Ci(n){return yg("limit",n),rl._create("limit",n,"F")}function vu(n,e,t){if(typeof(t=je(t))=="string"){if(t==="")throw new B(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Hh(e)&&t.indexOf("/")!==-1)throw new B(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Te.fromString(t));if(!X.isDocumentKey(r))throw new B(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Nc(n,new X(r))}if(t instanceof ke)return Nc(n,t._key);throw new B(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ni(t)}.`)}function wu(n,e){if(!Array.isArray(n)||n.length===0)throw new B(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Wd(n,e){const t=(function(s,i){for(const a of s)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new B(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new B(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class p2{convertValue(e,t="none"){switch(pn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(fn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ne(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return _n(e,((s,i)=>{r[s]=this.convertValue(i,t)})),r}convertVectorValue(e){const t=e.fields?.[pi].arrayValue?.values?.map((r=>Me(r.doubleValue)));return new Ct(t)}convertGeoPoint(e){return new It(Me(e.latitude),Me(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Fi(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(is(e));default:return null}}convertTimestamp(e){const t=dn(e);return new Ce(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Te.fromString(e);ye(fd(r),9688,{name:e});const s=new os(r.get(1),r.get(3)),i=new X(r.popFirst(5));return s.isEqual(t)||Lt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kd(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class Kr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Mn extends zd{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ri(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(eo("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new B(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Mn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Mn._jsonSchemaVersion="firestore/documentSnapshot/1.0",Mn._jsonSchema={type:Oe("string",Mn._jsonSchemaVersion),bundleSource:Oe("string","DocumentSnapshot"),bundleName:Oe("string"),bundle:Oe("string")};class ri extends Mn{data(e={}){return super.data(e)}}class Dn{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Kr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new ri(this._firestore,this._userDataWriter,r.key,r,new Kr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new B(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((c=>{const u=new ri(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Kr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const u=new ri(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Kr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),m=a.indexOf(c.doc.key)),{type:m2(c.type),doc:u,oldIndex:d,newIndex:m}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new B(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Dn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ya.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function m2(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ne(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(n){n=ot(n,ke);const e=ot(n.firestore,Ft);return t2(Qi(e),n._key).then((t=>Qd(e,n,t)))}Dn._jsonSchemaVersion="firestore/querySnapshot/1.0",Dn._jsonSchema={type:Oe("string",Dn._jsonSchemaVersion),bundleSource:Oe("string","QuerySnapshot"),bundleName:Oe("string"),bundle:Oe("string")};class sl extends p2{constructor(e){super(),this.firestore=e}convertBytes(e){return new dt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ke(this.firestore,null,t)}}function il(n){n=ot(n,jt);const e=ot(n.firestore,Ft),t=Qi(e),r=new sl(e);return Hd(n._query),n2(t,n._query).then((s=>new Dn(e,r,n,s)))}function ii(n,e,t){n=ot(n,ke);const r=ot(n.firestore,Ft),s=Kd(n.converter,e,t);return no(r,[Ud(Xi(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,ft.none())])}function g2(n,e,t,...r){n=ot(n,ke);const s=ot(n.firestore,Ft),i=Xi(s);let a;return a=typeof(e=je(e))=="string"||e instanceof Yi?u2(i,"updateDoc",n._key,e,t,r):c2(i,"updateDoc",n._key,e),no(s,[a.toMutation(n._key,ft.exists(!0))])}function E4(n){return no(ot(n.firestore,Ft),[new Aa(n._key,ft.none())])}function T4(n,e){const t=ot(n.firestore,Ft),r=kn(n),s=Kd(n.converter,e);return no(t,[Ud(Xi(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,ft.exists(!1))]).then((()=>r))}function I4(n,...e){n=je(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||yu(e[r])||(t=e[r++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(yu(e[r])){const u=e[r];e[r]=u.next?.bind(u),e[r+1]=u.error?.bind(u),e[r+2]=u.complete?.bind(u)}let i,a,c;if(n instanceof ke)a=ot(n.firestore,Ft),c=Ui(n._key.path),i={next:u=>{e[r]&&e[r](Qd(a,n,u))},error:e[r+1],complete:e[r+2]};else{const u=ot(n,jt);a=ot(u.firestore,Ft),c=u._query;const d=new sl(a);i={next:m=>{e[r]&&e[r](new Dn(a,d,u,m))},error:e[r+1],complete:e[r+2]},Hd(n._query)}return(function(d,m,y,T){const P=new Ga(T),N=new qa(m,P,y);return d.asyncQueue.enqueueAndForget((async()=>Ba(await Ei(d),N))),()=>{P.Nu(),d.asyncQueue.enqueueAndForget((async()=>ja(await Ei(d),N)))}})(Qi(a),c,s,i)}function no(n,e){return(function(r,s){const i=new Vt;return r.asyncQueue.enqueueAndForget((async()=>q1(await e2(r),s,i))),i.promise})(Qi(n),e)}function Qd(n,e,t){const r=t.docs.get(e._key),s=new sl(n);return new Mn(n,s,e._key,r,new Kr(t.hasPendingWrites,t.fromCache),e.converter)}function bu(){return new Ka("serverTimestamp")}function C4(...n){return new Qa("arrayUnion",n)}function A4(...n){return new Ya("arrayRemove",n)}(function(e,t=!0){(function(s){yr=s})(_r),or(new Nn("firestore",((r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new Ft(new cg(r.getProvider("auth-internal")),new dg(a,r.getProvider("app-check-internal")),(function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new B(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new os(d.options.projectId,m)})(a,s),a);return i={useFetchStreams:t,...i},c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),ln(Ec,Tc,e),ln(Ec,Tc,"esm2020")})();function Yd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _2=Yd,Jd=new ps("auth","Firebase",Yd());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai=new pa("@firebase/auth");function y2(n,...e){Ai.logLevel<=de.WARN&&Ai.warn(`Auth (${_r}): ${n}`,...e)}function oi(n,...e){Ai.logLevel<=de.ERROR&&Ai.error(`Auth (${_r}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(n,...e){throw al(n,...e)}function gt(n,...e){return al(n,...e)}function ol(n,e,t){const r={..._2(),[e]:t};return new ps("auth","Firebase",r).create(e,{appName:n.name})}function Mt(n){return ol(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function v2(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&pt(n,"argument-error"),ol(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function al(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Jd.create(n,...e)}function te(n,e,...t){if(!n)throw al(e,...t)}function kt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw oi(e),new Error(e)}function Ut(n,e){n||kt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ca(){return typeof self<"u"&&self.location?.href||""}function w2(){return Eu()==="http:"||Eu()==="https:"}function Eu(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(w2()||Fp()||"connection"in navigator)?navigator.onLine:!0}function E2(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ut(t>e,"Short delay should be less than long delay!"),this.isMobile=Np()||Up()}get(){return b2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(n,e){Ut(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;kt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;kt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;kt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I2=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],C2=new bs(3e4,6e4);function $t(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function qt(n,e,t,r,s={}){return Zd(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=ms({key:n.config.apiKey,...a}).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const d={method:e,headers:u,...i};return Op()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&gr(n.emulatorConfig.host)&&(d.credentials="include"),Xd.fetch()(await ef(n,n.config.apiHost,t,c),d)})}async function Zd(n,e,t){n._canInitEmulator=!1;const r={...T2,...e};try{const s=new R2(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Ws(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[u,d]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ws(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Ws(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw Ws(n,"user-disabled",a);const m=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw ol(n,m,d);pt(n,m)}}catch(s){if(s instanceof Bt)throw s;pt(n,"network-request-failed",{message:String(s)})}}async function Es(n,e,t,r,s={}){const i=await qt(n,e,t,r,s);return"mfaPendingCredential"in i&&pt(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function ef(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?ll(n.config,s):`${n.config.apiScheme}://${s}`;return I2.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function A2(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class R2{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(gt(this.auth,"network-request-failed")),C2.get())})}}function Ws(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=gt(n,e,r);return s.customData._tokenResponse=t,s}function Tu(n){return n!==void 0&&n.enterprise!==void 0}class S2{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return A2(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function x2(n,e){return qt(n,"GET","/v2/recaptchaConfig",$t(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k2(n,e){return qt(n,"POST","/v1/accounts:delete",e)}async function Ri(n,e){return qt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function es(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function P2(n,e=!1){const t=je(n),r=await t.getIdToken(e),s=cl(r);te(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i?.sign_in_provider;return{claims:s,token:r,authTime:es(Do(s.auth_time)),issuedAtTime:es(Do(s.iat)),expirationTime:es(Do(s.exp)),signInProvider:a||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Do(n){return Number(n)*1e3}function cl(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return oi("JWT malformed, contained fewer than 3 sections"),null;try{const s=ah(t);return s?JSON.parse(s):(oi("Failed to decode base64 JWT payload"),null)}catch(s){return oi("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Iu(n){const e=cl(n);return te(e,"internal-error"),te(typeof e.exp<"u","internal-error"),te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function us(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Bt&&V2(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function V2({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=es(this.lastLoginAt),this.creationTime=es(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Si(n){const e=n.auth,t=await n.getIdToken(),r=await us(n,Ri(e,{idToken:t}));te(r?.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=s.providerUserInfo?.length?tf(s.providerUserInfo):[],a=N2(n.providerData,i),c=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!a?.length,d=c?u:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new ua(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(n,m)}async function D2(n){const e=je(n);await Si(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function N2(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function tf(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L2(n,e){const t=await Zd(n,{},async()=>{const r=ms({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await ef(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:r};return n.emulatorConfig&&gr(n.emulatorConfig.host)&&(u.credentials="include"),Xd.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function O2(n,e){return qt(n,"POST","/v2/accounts:revokeToken",$t(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken<"u","internal-error"),te(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Iu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){te(e.length!==0,"internal-error");const t=Iu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await L2(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new rr;return r&&(te(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(te(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(te(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new rr,this.toJSON())}_performRefresh(){return kt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(n,e){te(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class mt{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new M2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ua(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await us(this,this.stsTokenManager.getToken(this.auth,e));return te(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return P2(this,e)}reload(){return D2(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new mt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Si(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ct(this.auth.app))return Promise.reject(Mt(this.auth));const e=await this.getIdToken();return await us(this,k2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,c=t.tenantId??void 0,u=t._redirectEventId??void 0,d=t.createdAt??void 0,m=t.lastLoginAt??void 0,{uid:y,emailVerified:T,isAnonymous:P,providerData:N,stsTokenManager:L}=t;te(y&&L,e,"internal-error");const S=rr.fromJSON(this.name,L);te(typeof y=="string",e,"internal-error"),en(r,e.name),en(s,e.name),te(typeof T=="boolean",e,"internal-error"),te(typeof P=="boolean",e,"internal-error"),en(i,e.name),en(a,e.name),en(c,e.name),en(u,e.name),en(d,e.name),en(m,e.name);const D=new mt({uid:y,auth:e,email:s,emailVerified:T,displayName:r,isAnonymous:P,photoURL:a,phoneNumber:i,tenantId:c,stsTokenManager:S,createdAt:d,lastLoginAt:m});return N&&Array.isArray(N)&&(D.providerData=N.map(G=>({...G}))),u&&(D._redirectEventId=u),D}static async _fromIdTokenResponse(e,t,r=!1){const s=new rr;s.updateFromServerResponse(t);const i=new mt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Si(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];te(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?tf(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!i?.length,c=new rr;c.updateFromIdToken(r);const u=new mt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new ua(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cu=new Map;function Pt(n){Ut(n instanceof Function,"Expected a class definition");let e=Cu.get(n);return e?(Ut(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Cu.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}nf.type="NONE";const Au=nf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(n,e,t){return`firebase:${n}:${e}:${t}`}class sr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ai(this.userKey,s.apiKey,i),this.fullPersistenceKey=ai("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ri(this.auth,{idToken:e}).catch(()=>{});return t?mt._fromGetAccountInfoResponse(this.auth,t,e):null}return mt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new sr(Pt(Au),e,r);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||Pt(Au);const a=ai(r,e.config.apiKey,e.name);let c=null;for(const d of t)try{const m=await d._get(a);if(m){let y;if(typeof m=="string"){const T=await Ri(e,{idToken:m}).catch(()=>{});if(!T)break;y=await mt._fromGetAccountInfoResponse(e,T,m)}else y=mt._fromJSON(e,m);d!==i&&(c=y),i=d;break}}catch{}const u=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new sr(i,e,r):(i=u[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new sr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ru(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(af(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(rf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(cf(e))return"Blackberry";if(uf(e))return"Webos";if(sf(e))return"Safari";if((e.includes("chrome/")||of(e))&&!e.includes("edge/"))return"Chrome";if(lf(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function rf(n=Xe()){return/firefox\//i.test(n)}function sf(n=Xe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function of(n=Xe()){return/crios\//i.test(n)}function af(n=Xe()){return/iemobile/i.test(n)}function lf(n=Xe()){return/android/i.test(n)}function cf(n=Xe()){return/blackberry/i.test(n)}function uf(n=Xe()){return/webos/i.test(n)}function ul(n=Xe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function F2(n=Xe()){return ul(n)&&!!window.navigator?.standalone}function U2(){return Bp()&&document.documentMode===10}function hf(n=Xe()){return ul(n)||lf(n)||uf(n)||cf(n)||/windows phone/i.test(n)||af(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function df(n,e=[]){let t;switch(n){case"Browser":t=Ru(Xe());break;case"Worker":t=`${Ru(Xe())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${_r}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,c)=>{try{const u=e(i);a(u)}catch(u){c(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j2(n,e={}){return qt(n,"GET","/v2/passwordPolicy",$t(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $2=6;class q2{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??$2,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z2{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Su(this),this.idTokenSubscription=new Su(this),this.beforeStateQueue=new B2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Jd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Pt(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await sr.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ri(this,{idToken:e}),r=await mt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(ct(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(a,a))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,a=r?._redirectEventId,c=await this.tryRedirectSignIn(e);(!i||i===a)&&c?.user&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Si(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=E2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ct(this.app))return Promise.reject(Mt(this));const t=e?je(e):null;return t&&te(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ct(this.app)?Promise.reject(Mt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ct(this.app)?Promise.reject(Mt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Pt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await j2(this),t=new q2(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ps("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await O2(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Pt(e)||this._popupRedirectResolver;te(t,this,"argument-error"),this.redirectPersistenceManager=await sr.create(this,[Pt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(te(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=df(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(ct(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&y2(`Error while retrieving App Check token: ${e.error}`),e?.token}}function zt(n){return je(n)}class Su{constructor(e){this.auth=e,this.observer=null,this.addObserver=Kp(t=>this.observer=t)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ro={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function H2(n){ro=n}function ff(n){return ro.loadJS(n)}function G2(){return ro.recaptchaEnterpriseScript}function W2(){return ro.gapiScript}function K2(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Q2{constructor(){this.enterprise=new Y2}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Y2{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const J2="recaptcha-enterprise",pf="NO_RECAPTCHA";class X2{constructor(e){this.type=J2,this.auth=zt(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,c)=>{x2(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new S2(u);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,a(d.siteKey)}}).catch(u=>{c(u)})})}function s(i,a,c){const u=window.grecaptcha;Tu(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(d=>{a(d)}).catch(()=>{a(pf)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Q2().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{r(this.auth).then(c=>{if(!t&&Tu(window.grecaptcha))s(c,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=G2();u.length!==0&&(u+=c),ff(u).then(()=>{s(c,i,a)}).catch(d=>{a(d)})}}).catch(c=>{a(c)})})}}async function xu(n,e,t,r=!1,s=!1){const i=new X2(n);let a;if(s)a=pf;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const u=c.phoneEnrollmentInfo.phoneNumber,d=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const u=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function xi(n,e,t,r,s){if(n._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await xu(n,e,t,t==="getOobCode");return r(n,i)}else return r(n,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await xu(n,e,t,t==="getOobCode");return r(n,a)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z2(n,e){const t=ga(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Dt(i,e??{}))return s;pt(s,"already-initialized")}return t.initialize({options:e})}function e_(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(Pt);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function t_(n,e,t){const r=zt(n);te(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=mf(e),{host:a,port:c}=n_(e),u=c===null?"":`:${c}`,d={url:`${i}//${a}${u}/`},m=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){te(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),te(Dt(d,r.config.emulator)&&Dt(m,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=m,r.settings.appVerificationDisabledForTesting=!0,gr(a)?(hh(`${i}//${a}${u}`),dh("Auth",!0)):r_()}function mf(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function n_(n){const e=mf(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:ku(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:ku(a)}}}function ku(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function r_(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return kt("not implemented")}_getIdTokenResponse(e){return kt("not implemented")}_linkToIdToken(e,t){return kt("not implemented")}_getReauthenticationResolver(e){return kt("not implemented")}}async function s_(n,e){return qt(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i_(n,e){return Es(n,"POST","/v1/accounts:signInWithPassword",$t(n,e))}async function o_(n,e){return qt(n,"POST","/v1/accounts:sendOobCode",$t(n,e))}async function a_(n,e){return o_(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l_(n,e){return Es(n,"POST","/v1/accounts:signInWithEmailLink",$t(n,e))}async function c_(n,e){return Es(n,"POST","/v1/accounts:signInWithEmailLink",$t(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs extends hl{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new hs(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new hs(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return xi(e,t,"signInWithPassword",i_);case"emailLink":return l_(e,{email:this._email,oobCode:this._password});default:pt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return xi(e,r,"signUpPassword",s_);case"emailLink":return c_(e,{idToken:t,email:this._email,oobCode:this._password});default:pt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ir(n,e){return Es(n,"POST","/v1/accounts:signInWithIdp",$t(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u_="http://localhost";class Fn extends hl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Fn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):pt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const a=new Fn(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return ir(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,ir(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ir(e,t)}buildRequest(){const e={requestUri:u_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ms(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h_(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function d_(n){const e=qr(zr(n)).link,t=e?qr(zr(e)).deep_link_id:null,r=qr(zr(n)).deep_link_id;return(r?qr(zr(r)).link:null)||r||t||e||n}class dl{constructor(e){const t=qr(zr(e)),r=t.apiKey??null,s=t.oobCode??null,i=h_(t.mode??null);te(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=d_(e);try{return new dl(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(){this.providerId=Ir.PROVIDER_ID}static credential(e,t){return hs._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=dl.parseLink(t);return te(r,"argument-error"),hs._fromEmailAndCode(e,r.code,r.tenantId)}}Ir.PROVIDER_ID="password";Ir.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ir.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts extends fl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn extends Ts{constructor(){super("facebook.com")}static credential(e){return Fn._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tn.credential(e.oauthAccessToken)}catch{return null}}}tn.FACEBOOK_SIGN_IN_METHOD="facebook.com";tn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends Ts{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Fn._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return St.credential(t,r)}catch{return null}}}St.GOOGLE_SIGN_IN_METHOD="google.com";St.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn extends Ts{constructor(){super("github.com")}static credential(e){return Fn._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nn.credential(e.oauthAccessToken)}catch{return null}}}nn.GITHUB_SIGN_IN_METHOD="github.com";nn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn extends Ts{constructor(){super("twitter.com")}static credential(e,t){return Fn._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return rn.credential(t,r)}catch{return null}}}rn.TWITTER_SIGN_IN_METHOD="twitter.com";rn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f_(n,e){return Es(n,"POST","/v1/accounts:signUp",$t(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await mt._fromIdTokenResponse(e,r,s),a=Pu(r);return new Un({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Pu(r);return new Un({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Pu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki extends Bt{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ki.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new ki(e,t,r,s)}}function gf(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ki._fromErrorAndOperation(n,i,e,r):i})}async function p_(n,e,t=!1){const r=await us(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Un._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function m_(n,e,t=!1){const{auth:r}=n;if(ct(r.app))return Promise.reject(Mt(r));const s="reauthenticate";try{const i=await us(n,gf(r,s,e,n),t);te(i.idToken,r,"internal-error");const a=cl(i.idToken);te(a,r,"internal-error");const{sub:c}=a;return te(n.uid===c,r,"user-mismatch"),Un._forOperation(n,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&pt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _f(n,e,t=!1){if(ct(n.app))return Promise.reject(Mt(n));const r="signIn",s=await gf(n,r,e),i=await Un._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function g_(n,e){return _f(zt(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yf(n){const e=zt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function __(n,e,t){const r=zt(n);await xi(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",a_)}async function y_(n,e,t){if(ct(n.app))return Promise.reject(Mt(n));const r=zt(n),a=await xi(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",f_).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&yf(n),u}),c=await Un._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function v_(n,e,t){return ct(n.app)?Promise.reject(Mt(n)):g_(je(n),Ir.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&yf(n),r})}function w_(n,e,t,r){return je(n).onIdTokenChanged(e,t,r)}function b_(n,e,t){return je(n).beforeAuthStateChanged(e,t)}function vf(n,e,t,r){return je(n).onAuthStateChanged(e,t,r)}function E_(n){return je(n).signOut()}const Pi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Pi,"1"),this.storage.removeItem(Pi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T_=1e3,I_=10;class bf extends wf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=hf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);U2()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,I_):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},T_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}bf.type="LOCAL";const C_=bf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef extends wf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ef.type="SESSION";const Tf=Ef;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A_(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new so(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async d=>d(t.origin,i)),u=await A_(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}so.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pl(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,u)=>{const d=pl("",20);s.port1.start();const m=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(y){const T=y;if(T.data.eventId===d)switch(T.data.status){case"ack":clearTimeout(m),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(T.data.response);break;default:clearTimeout(m),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(){return window}function S_(n){At().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function If(){return typeof At().WorkerGlobalScope<"u"&&typeof At().importScripts=="function"}async function x_(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function k_(){return navigator?.serviceWorker?.controller||null}function P_(){return If()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cf="firebaseLocalStorageDb",V_=1,Vi="firebaseLocalStorage",Af="fbase_key";class Is{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function io(n,e){return n.transaction([Vi],e?"readwrite":"readonly").objectStore(Vi)}function M_(){const n=indexedDB.deleteDatabase(Cf);return new Is(n).toPromise()}function ha(){const n=indexedDB.open(Cf,V_);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Vi,{keyPath:Af})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Vi)?e(r):(r.close(),await M_(),e(await ha()))})})}async function Vu(n,e,t){const r=io(n,!0).put({[Af]:e,value:t});return new Is(r).toPromise()}async function D_(n,e){const t=io(n,!1).get(e),r=await new Is(t).toPromise();return r===void 0?null:r.value}function Mu(n,e){const t=io(n,!0).delete(e);return new Is(t).toPromise()}const N_=800,L_=3;class Rf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ha(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>L_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return If()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=so._getInstance(P_()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await x_(),!this.activeServiceWorker)return;this.sender=new R_(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||k_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ha();return await Vu(e,Pi,"1"),await Mu(e,Pi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Vu(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>D_(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Mu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=io(s,!1).getAll();return new Is(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),N_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Rf.type="LOCAL";const O_=Rf;new bs(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sf(n,e){return e?Pt(e):(te(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml extends hl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ir(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ir(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ir(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function F_(n){return _f(n.auth,new ml(n),n.bypassAuthState)}function U_(n){const{auth:e,user:t}=n;return te(t,e,"internal-error"),m_(t,new ml(n),n.bypassAuthState)}async function B_(n){const{auth:e,user:t}=n;return te(t,e,"internal-error"),p_(t,new ml(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return F_;case"linkViaPopup":case"linkViaRedirect":return B_;case"reauthViaPopup":case"reauthViaRedirect":return U_;default:pt(this.auth,"internal-error")}}resolve(e){Ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j_=new bs(2e3,1e4);async function $_(n,e,t){if(ct(n.app))return Promise.reject(gt(n,"operation-not-supported-in-this-environment"));const r=zt(n);v2(n,e,fl);const s=Sf(r,t);return new Pn(r,"signInViaPopup",e,s).executeNotNull()}class Pn extends xf{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Pn.currentPopupAction&&Pn.currentPopupAction.cancel(),Pn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){Ut(this.filter.length===1,"Popup operations only handle one event");const e=pl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Pn.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(gt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,j_.get())};e()}}Pn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q_="pendingRedirect",li=new Map;class z_ extends xf{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=li.get(this.auth._key());if(!e){try{const r=await H_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}li.set(this.auth._key(),e)}return this.bypassAuthState||li.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function H_(n,e){const t=K_(e),r=W_(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function G_(n,e){li.set(n._key(),e)}function W_(n){return Pt(n._redirectPersistence)}function K_(n){return ai(q_,n.config.apiKey,n.name)}async function Q_(n,e,t=!1){if(ct(n.app))return Promise.reject(Mt(n));const r=zt(n),s=Sf(r,e),a=await new z_(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y_=600*1e3;class J_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!X_(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!kf(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";t.onError(gt(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Y_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Du(e))}saveEventToCache(e){this.cachedEventUids.add(Du(e)),this.lastProcessedEventTime=Date.now()}}function Du(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function kf({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function X_(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return kf(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z_(n,e={}){return qt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ey=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ty=/^https?/;async function ny(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Z_(n);for(const t of e)try{if(ry(t))return}catch{}pt(n,"unauthorized-domain")}function ry(n){const e=ca(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!ty.test(t))return!1;if(ey.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sy=new bs(3e4,6e4);function Nu(){const n=At().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function iy(n){return new Promise((e,t)=>{function r(){Nu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Nu(),t(gt(n,"network-request-failed"))},timeout:sy.get()})}if(At().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(At().gapi?.load)r();else{const s=K2("iframefcb");return At()[s]=()=>{gapi.load?r():t(gt(n,"network-request-failed"))},ff(`${W2()}?onload=${s}`).catch(i=>t(i))}}).catch(e=>{throw ci=null,e})}let ci=null;function oy(n){return ci=ci||iy(n),ci}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay=new bs(5e3,15e3),ly="__/auth/iframe",cy="emulator/auth/iframe",uy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function dy(n){const e=n.config;te(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ll(e,cy):`https://${n.config.authDomain}/${ly}`,r={apiKey:e.apiKey,appName:n.name,v:_r},s=hy.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${ms(r).slice(1)}`}async function fy(n){const e=await oy(n),t=At().gapi;return te(t,n,"internal-error"),e.open({where:document.body,url:dy(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:uy,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=gt(n,"network-request-failed"),c=At().setTimeout(()=>{i(a)},ay.get());function u(){At().clearTimeout(c),s(r)}r.ping(u).then(u,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const py={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},my=500,gy=600,_y="_blank",yy="http://localhost";class Lu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function vy(n,e,t,r=my,s=gy){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u={...py,width:r.toString(),height:s.toString(),top:i,left:a},d=Xe().toLowerCase();t&&(c=of(d)?_y:t),rf(d)&&(e=e||yy,u.scrollbars="yes");const m=Object.entries(u).reduce((T,[P,N])=>`${T}${P}=${N},`,"");if(F2(d)&&c!=="_self")return wy(e||"",c),new Lu(null);const y=window.open(e||"",c,m);te(y,n,"popup-blocked");try{y.focus()}catch{}return new Lu(y)}function wy(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const by="__/auth/handler",Ey="emulator/auth/handler",Ty=encodeURIComponent("fac");async function Ou(n,e,t,r,s,i){te(n.config.authDomain,n,"auth-domain-config-required"),te(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:_r,eventId:s};if(e instanceof fl){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Wp(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,y]of Object.entries({}))a[m]=y}if(e instanceof Ts){const m=e.getScopes().filter(y=>y!=="");m.length>0&&(a.scopes=m.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const m of Object.keys(c))c[m]===void 0&&delete c[m];const u=await n._getAppCheckToken(),d=u?`#${Ty}=${encodeURIComponent(u)}`:"";return`${Iy(n)}?${ms(c).slice(1)}${d}`}function Iy({config:n}){return n.emulator?ll(n,Ey):`https://${n.authDomain}/${by}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No="webStorageSupport";class Cy{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Tf,this._completeRedirectFn=Q_,this._overrideRedirectResult=G_}async _openPopup(e,t,r,s){Ut(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await Ou(e,t,r,ca(),s);return vy(e,i,pl())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Ou(e,t,r,ca(),s);return S_(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Ut(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await fy(e),r=new J_(e);return t.register("authEvent",s=>(te(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(No,{type:No},s=>{const i=s?.[0]?.[No];i!==void 0&&t(!!i),pt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ny(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return hf()||sf()||ul()}}const Ay=Cy;var Fu="@firebase/auth",Uu="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sy(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function xy(n){or(new Nn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;te(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:df(n)},d=new z2(r,s,i,u);return e_(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),or(new Nn("auth-internal",e=>{const t=zt(e.getProvider("auth").getImmediate());return(r=>new Ry(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ln(Fu,Uu,Sy(n)),ln(Fu,Uu,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ky=300,Py=uh("authIdTokenMaxAge")||ky;let Bu=null;const Vy=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Py)return;const s=t?.token;Bu!==s&&(Bu=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function My(n=gh()){const e=ga(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Z2(n,{popupRedirectResolver:Ay,persistence:[O_,C_,Tf]}),r=uh("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=Vy(i.toString());b_(t,a,()=>a(t.currentUser)),w_(t,c=>a(c))}}const s=lh("auth");return s&&t_(t,`http://${s}`),t}function Dy(){return document.getElementsByTagName("head")?.[0]??document}H2({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=gt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",Dy().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});xy("Browser");const Ny={apiKey:"AIzaSyAaqnWcFLOwmNYoyFgyRCe1z5EhSbDKXRc",authDomain:"empuzzled-3de4d.firebaseapp.com",projectId:"empuzzled-3de4d",storageBucket:"empuzzled-3de4d.firebasestorage.app",messagingSenderId:"984365730335",appId:"1:984365730335:web:19c961e053a66399c92251"},Pf=_c().length===0?mh(Ny):_c()[0],xt=s2(Pf),bt=My(Pf);var gl={};(function n(e,t,r,s){var i=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),a=typeof Path2D=="function"&&typeof DOMMatrix=="function",c=(function(){if(!e.OffscreenCanvas)return!1;var x=new OffscreenCanvas(1,1),C=x.getContext("2d");C.fillRect(0,0,1,1);var Y=x.transferToImageBitmap();try{C.createPattern(Y,"no-repeat")}catch{return!1}return!0})();function u(){}function d(x){var C=t.exports.Promise,Y=C!==void 0?C:e.Promise;return typeof Y=="function"?new Y(x):(x(u,u),null)}var m=(function(x,C){return{transform:function(Y){if(x)return Y;if(C.has(Y))return C.get(Y);var ee=new OffscreenCanvas(Y.width,Y.height),re=ee.getContext("2d");return re.drawImage(Y,0,0),C.set(Y,ee),ee},clear:function(){C.clear()}}})(c,new Map),y=(function(){var x=Math.floor(16.666666666666668),C,Y,ee={},re=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(C=function(oe){var F=Math.random();return ee[F]=requestAnimationFrame(function v(J){re===J||re+x-1<J?(re=J,delete ee[F],oe()):ee[F]=requestAnimationFrame(v)}),F},Y=function(oe){ee[oe]&&cancelAnimationFrame(ee[oe])}):(C=function(oe){return setTimeout(oe,x)},Y=function(oe){return clearTimeout(oe)}),{frame:C,cancel:Y}})(),T=(function(){var x,C,Y={};function ee(re){function oe(F,v){re.postMessage({options:F||{},callback:v})}re.init=function(v){var J=v.transferControlToOffscreen();re.postMessage({canvas:J},[J])},re.fire=function(v,J,se){if(C)return oe(v,null),C;var O=Math.random().toString(36).slice(2);return C=d(function(q){function W(Ve){Ve.data.callback===O&&(delete Y[O],re.removeEventListener("message",W),C=null,m.clear(),se(),q())}re.addEventListener("message",W),oe(v,O),Y[O]=W.bind(null,{data:{callback:O}})}),C},re.reset=function(){re.postMessage({reset:!0});for(var v in Y)Y[v](),delete Y[v]}}return function(){if(x)return x;if(!r&&i){var re=["var CONFETTI, SIZE = {}, module = {};","("+n.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{x=new Worker(URL.createObjectURL(new Blob([re])))}catch(oe){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",oe),null}ee(x)}return x}})(),P={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function N(x,C){return C?C(x):x}function L(x){return x!=null}function S(x,C,Y){return N(x&&L(x[C])?x[C]:P[C],Y)}function D(x){return x<0?0:Math.floor(x)}function G(x,C){return Math.floor(Math.random()*(C-x))+x}function Z(x){return parseInt(x,16)}function we(x){return x.map(Se)}function Se(x){var C=String(x).replace(/[^0-9a-f]/gi,"");return C.length<6&&(C=C[0]+C[0]+C[1]+C[1]+C[2]+C[2]),{r:Z(C.substring(0,2)),g:Z(C.substring(2,4)),b:Z(C.substring(4,6))}}function ve(x){var C=S(x,"origin",Object);return C.x=S(C,"x",Number),C.y=S(C,"y",Number),C}function I(x){x.width=document.documentElement.clientWidth,x.height=document.documentElement.clientHeight}function _(x){var C=x.getBoundingClientRect();x.width=C.width,x.height=C.height}function g(x){var C=document.createElement("canvas");return C.style.position="fixed",C.style.top="0px",C.style.left="0px",C.style.pointerEvents="none",C.style.zIndex=x,C}function E(x,C,Y,ee,re,oe,F,v,J){x.save(),x.translate(C,Y),x.rotate(oe),x.scale(ee,re),x.arc(0,0,1,F,v,J),x.restore()}function b(x){var C=x.angle*(Math.PI/180),Y=x.spread*(Math.PI/180);return{x:x.x,y:x.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:x.startVelocity*.5+Math.random()*x.startVelocity,angle2D:-C+(.5*Y-Math.random()*Y),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:x.color,shape:x.shape,tick:0,totalTicks:x.ticks,decay:x.decay,drift:x.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:x.gravity*3,ovalScalar:.6,scalar:x.scalar,flat:x.flat}}function A(x,C){C.x+=Math.cos(C.angle2D)*C.velocity+C.drift,C.y+=Math.sin(C.angle2D)*C.velocity+C.gravity,C.velocity*=C.decay,C.flat?(C.wobble=0,C.wobbleX=C.x+10*C.scalar,C.wobbleY=C.y+10*C.scalar,C.tiltSin=0,C.tiltCos=0,C.random=1):(C.wobble+=C.wobbleSpeed,C.wobbleX=C.x+10*C.scalar*Math.cos(C.wobble),C.wobbleY=C.y+10*C.scalar*Math.sin(C.wobble),C.tiltAngle+=.1,C.tiltSin=Math.sin(C.tiltAngle),C.tiltCos=Math.cos(C.tiltAngle),C.random=Math.random()+2);var Y=C.tick++/C.totalTicks,ee=C.x+C.random*C.tiltCos,re=C.y+C.random*C.tiltSin,oe=C.wobbleX+C.random*C.tiltCos,F=C.wobbleY+C.random*C.tiltSin;if(x.fillStyle="rgba("+C.color.r+", "+C.color.g+", "+C.color.b+", "+(1-Y)+")",x.beginPath(),a&&C.shape.type==="path"&&typeof C.shape.path=="string"&&Array.isArray(C.shape.matrix))x.fill(Ht(C.shape.path,C.shape.matrix,C.x,C.y,Math.abs(oe-ee)*.1,Math.abs(F-re)*.1,Math.PI/10*C.wobble));else if(C.shape.type==="bitmap"){var v=Math.PI/10*C.wobble,J=Math.abs(oe-ee)*.1,se=Math.abs(F-re)*.1,O=C.shape.bitmap.width*C.scalar,q=C.shape.bitmap.height*C.scalar,W=new DOMMatrix([Math.cos(v)*J,Math.sin(v)*J,-Math.sin(v)*se,Math.cos(v)*se,C.x,C.y]);W.multiplySelf(new DOMMatrix(C.shape.matrix));var Ve=x.createPattern(m.transform(C.shape.bitmap),"no-repeat");Ve.setTransform(W),x.globalAlpha=1-Y,x.fillStyle=Ve,x.fillRect(C.x-O/2,C.y-q/2,O,q),x.globalAlpha=1}else if(C.shape==="circle")x.ellipse?x.ellipse(C.x,C.y,Math.abs(oe-ee)*C.ovalScalar,Math.abs(F-re)*C.ovalScalar,Math.PI/10*C.wobble,0,2*Math.PI):E(x,C.x,C.y,Math.abs(oe-ee)*C.ovalScalar,Math.abs(F-re)*C.ovalScalar,Math.PI/10*C.wobble,0,2*Math.PI);else if(C.shape==="star")for(var ue=Math.PI/2*3,Ke=4*C.scalar,Ze=8*C.scalar,et=C.x,ht=C.y,Ae=5,Ee=Math.PI/Ae;Ae--;)et=C.x+Math.cos(ue)*Ze,ht=C.y+Math.sin(ue)*Ze,x.lineTo(et,ht),ue+=Ee,et=C.x+Math.cos(ue)*Ke,ht=C.y+Math.sin(ue)*Ke,x.lineTo(et,ht),ue+=Ee;else x.moveTo(Math.floor(C.x),Math.floor(C.y)),x.lineTo(Math.floor(C.wobbleX),Math.floor(re)),x.lineTo(Math.floor(oe),Math.floor(F)),x.lineTo(Math.floor(ee),Math.floor(C.wobbleY));return x.closePath(),x.fill(),C.tick<C.totalTicks}function w(x,C,Y,ee,re){var oe=C.slice(),F=x.getContext("2d"),v,J,se=d(function(O){function q(){v=J=null,F.clearRect(0,0,ee.width,ee.height),m.clear(),re(),O()}function W(){r&&!(ee.width===s.width&&ee.height===s.height)&&(ee.width=x.width=s.width,ee.height=x.height=s.height),!ee.width&&!ee.height&&(Y(x),ee.width=x.width,ee.height=x.height),F.clearRect(0,0,ee.width,ee.height),oe=oe.filter(function(Ve){return A(F,Ve)}),oe.length?v=y.frame(W):q()}v=y.frame(W),J=q});return{addFettis:function(O){return oe=oe.concat(O),se},canvas:x,promise:se,reset:function(){v&&y.cancel(v),J&&J()}}}function Pe(x,C){var Y=!x,ee=!!S(C||{},"resize"),re=!1,oe=S(C,"disableForReducedMotion",Boolean),F=i&&!!S(C||{},"useWorker"),v=F?T():null,J=Y?I:_,se=x&&v?!!x.__confetti_initialized:!1,O=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,q;function W(ue,Ke,Ze){for(var et=S(ue,"particleCount",D),ht=S(ue,"angle",Number),Ae=S(ue,"spread",Number),Ee=S(ue,"startVelocity",Number),zn=S(ue,"decay",Number),oo=S(ue,"gravity",Number),Cs=S(ue,"drift",Number),As=S(ue,"colors",we),vn=S(ue,"ticks",Number),Cr=S(ue,"shapes"),Rs=S(ue,"scalar"),Ar=!!S(ue,"flat"),Ss=ve(ue),xs=et,Hn=[],ks=x.width*Ss.x,wn=x.height*Ss.y;xs--;)Hn.push(b({x:ks,y:wn,angle:ht,spread:Ae,startVelocity:Ee,color:As[xs%As.length],shape:Cr[G(0,Cr.length)],ticks:vn,decay:zn,gravity:oo,drift:Cs,scalar:Rs,flat:Ar}));return q?q.addFettis(Hn):(q=w(x,Hn,J,Ke,Ze),q.promise)}function Ve(ue){var Ke=oe||S(ue,"disableForReducedMotion",Boolean),Ze=S(ue,"zIndex",Number);if(Ke&&O)return d(function(Ee){Ee()});Y&&q?x=q.canvas:Y&&!x&&(x=g(Ze),document.body.appendChild(x)),ee&&!se&&J(x);var et={width:x.width,height:x.height};v&&!se&&v.init(x),se=!0,v&&(x.__confetti_initialized=!0);function ht(){if(v){var Ee={getBoundingClientRect:function(){if(!Y)return x.getBoundingClientRect()}};J(Ee),v.postMessage({resize:{width:Ee.width,height:Ee.height}});return}et.width=et.height=null}function Ae(){q=null,ee&&(re=!1,e.removeEventListener("resize",ht)),Y&&x&&(document.body.contains(x)&&document.body.removeChild(x),x=null,se=!1)}return ee&&!re&&(re=!0,e.addEventListener("resize",ht,!1)),v?v.fire(ue,et,Ae):W(ue,et,Ae)}return Ve.reset=function(){v&&v.reset(),q&&q.reset()},Ve}var $e;function at(){return $e||($e=Pe(null,{useWorker:!0,resize:!0})),$e}function Ht(x,C,Y,ee,re,oe,F){var v=new Path2D(x),J=new Path2D;J.addPath(v,new DOMMatrix(C));var se=new Path2D;return se.addPath(J,new DOMMatrix([Math.cos(F)*re,Math.sin(F)*re,-Math.sin(F)*oe,Math.cos(F)*oe,Y,ee])),se}function Gt(x){if(!a)throw new Error("path confetti are not supported in this browser");var C,Y;typeof x=="string"?C=x:(C=x.path,Y=x.matrix);var ee=new Path2D(C),re=document.createElement("canvas"),oe=re.getContext("2d");if(!Y){for(var F=1e3,v=F,J=F,se=0,O=0,q,W,Ve=0;Ve<F;Ve+=2)for(var ue=0;ue<F;ue+=2)oe.isPointInPath(ee,Ve,ue,"nonzero")&&(v=Math.min(v,Ve),J=Math.min(J,ue),se=Math.max(se,Ve),O=Math.max(O,ue));q=se-v,W=O-J;var Ke=10,Ze=Math.min(Ke/q,Ke/W);Y=[Ze,0,0,Ze,-Math.round(q/2+v)*Ze,-Math.round(W/2+J)*Ze]}return{type:"path",path:C,matrix:Y}}function Wt(x){var C,Y=1,ee="#000000",re='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof x=="string"?C=x:(C=x.text,Y="scalar"in x?x.scalar:Y,re="fontFamily"in x?x.fontFamily:re,ee="color"in x?x.color:ee);var oe=10*Y,F=""+oe+"px "+re,v=new OffscreenCanvas(oe,oe),J=v.getContext("2d");J.font=F;var se=J.measureText(C),O=Math.ceil(se.actualBoundingBoxRight+se.actualBoundingBoxLeft),q=Math.ceil(se.actualBoundingBoxAscent+se.actualBoundingBoxDescent),W=2,Ve=se.actualBoundingBoxLeft+W,ue=se.actualBoundingBoxAscent+W;O+=W+W,q+=W+W,v=new OffscreenCanvas(O,q),J=v.getContext("2d"),J.font=F,J.fillStyle=ee,J.fillText(C,Ve,ue);var Ke=1/Y;return{type:"bitmap",bitmap:v.transferToImageBitmap(),matrix:[Ke,0,0,Ke,-O*Ke/2,-q*Ke/2]}}t.exports=function(){return at().apply(this,arguments)},t.exports.reset=function(){at().reset()},t.exports.create=Pe,t.exports.shapeFromPath=Gt,t.exports.shapeFromText=Wt})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),gl,!1);const Ks=gl.exports;gl.exports.create;const Ly=globalThis.setInterval,ju=["SUMMONSGREETINGS2025","XMAS2025","HAPPY2026"],$u=le(ju[Math.floor(Math.random()*ju.length)]),Vf=()=>{const n=["❄️","🎁","🎅","🎄","🍪","🥛","⛄","🌟","🧣","🧤","⛸️","🏔️","🌬️","🧊"],e=(r=!1,s)=>{const u=(s||["❄️","❄️","❄️","❄️","❄️","❄️","❅","❅","❆","❆","🧊","🧊","🧊","🎁","🎁","🎁","🎄","⛄","🌟","☃️","🧣","🧤","🍪","🥛","🌬️","🌲","🏔️","⛸️"]).map(y=>{try{return Ks.shapeFromText({text:y,scalar:3})}catch{return"circle"}}),d=(y,T)=>Math.random()*(T-y)+y,m=["#ffffff","#bae6fd","#60a5fa","#38bdf8","#fef3c7"];if(r){const T=Date.now()+4e3,P=Ly(()=>{const N=T-Date.now();if(N<=0)return clearInterval(P);const L=15*(N/4e3);Ks({particleCount:L,spread:100,origin:{x:d(.1,.3),y:Math.random()-.2},scalar:3,shapes:u,ticks:150,gravity:.6,colors:m,zIndex:200}),Ks({particleCount:L,spread:100,origin:{x:d(.7,.9),y:Math.random()-.2},scalar:3,shapes:u,ticks:150,gravity:.6,colors:m,zIndex:200})},250)}else Ks({particleCount:40,spread:90,origin:{x:.5,y:.4},scalar:3,shapes:u,ticks:250,gravity:.6,colors:m,zIndex:200})};async function t(){try{const r=Ii(Wa(xt,"codes"),Gd("status","==","holiday"),Ci(1)),s=await il(r);if(!s.empty){const i=s.docs[0].data();$u.value=i.code}}catch(r){console.error("Error fetching holiday code:",r)}}return{winterCode:$u,holidayIcons:n,fireHolidayConfetti:e,fetchHolidayCode:t}};function qu(n,e){return $(),K("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[f("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"})])}function Oy(n,e){return $(),K("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[f("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"})])}function Fy(n,e){return $(),K("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[f("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})])}function zu(n,e){return $(),K("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[f("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"})])}function Uy(n,e){return $(),K("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[f("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m4.5 15.75 7.5-7.5 7.5 7.5"})])}function By(n,e){return $(),K("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[f("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"})])}function Hu(n,e){return $(),K("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[f("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"})])}function Lo(n,e){return $(),K("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[f("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"})])}function Mf(n,e){return $(),K("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[f("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18 18 6M6 6l12 12"})])}const jy={class:"holiday-gift group relative overflow-hidden rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-cyan-400/30 shadow-2xl transition-all duration-500 max-h-[90vh] overflow-y-auto custom-scrollbar select-none"},$y={class:"absolute -top-3 -right-10 w-48 md:w-80 opacity-30 md:opacity-40 pointer-events-none transform -rotate-12 transition-all duration-1000 group-hover:scale-110 group-hover:-rotate-6 group-active:scale-110 group-active:-rotate-6 not-prose"},qy=["src"],zy={class:"absolute -top-6 -left-6 w-40 md:w-72 opacity-20 md:opacity-30 pointer-events-none transform rotate-12 transition-all duration-1000 group-hover:scale-110 group-hover:rotate-6 group-active:scale-110 group-active:rotate-6 not-prose"},Hy=["src"],Gy={class:"relative z-10 pt-8 pb-4 px-4 flex flex-col items-center text-center border-b border-white/5 mb-4"},Wy={class:"transform transition-transform duration-500 group-hover/icon:rotate-12 group-active/icon:scale-75 inline-block pointer-events-none"},Ky={class:"relative z-10 flex flex-col gap-12 pb-12"},Qy={key:0,class:"gift-section flex flex-col items-center px-4 md:px-10"},Yy={class:"mb-4 flex items-center gap-3"},Jy={class:"text-[10px] font-black uppercase tracking-[0.3em] text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]"},Xy={class:"flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-6 max-w-xl mx-auto"},Zy=["onClick","title"],ev=["src","alt"],tv={class:"text-xs sm:text-sm font-black text-white"},nv={key:1,class:"jiggle-wiggle pointer-events-none"},rv={class:"mb-4 w-full max-w-sm"},sv={class:"text-[16px] md:text-2xl font-mono font-black text-yellow-400 tracking-wider drop-shadow-[0_0_10px_rgba(250,204,21,0.3)] group-hover:text-yellow-300 transition-colors pointer-events-none uppercase"},iv={key:0,class:"absolute inset-0 flex items-center justify-center bg-cyan-600/90 rounded-xl text-white font-black uppercase tracking-widest text-xs md:text-sm backdrop-blur-sm"},ov={class:"absolute bottom-10 -right-16 w-48 md:w-80 opacity-30 md:opacity-40 pointer-events-none transform -rotate-12 transition-all duration-1000 group-hover:scale-110 group-hover:-rotate-6 group-active:scale-110 group-active:-rotate-6 not-prose"},av=["src"],lv={class:"absolute bottom-40 -left-16 w-48 md:w-80 opacity-30 md:opacity-40 pointer-events-none transform -rotate-12 transition-all duration-1000 group-hover:scale-110 group-hover:-rotate-6 group-active:scale-110 group-active:-rotate-6 not-prose"},cv=["src"],jr="https://raw.githubusercontent.com/vabe44/31f5d518-epzl-cdn/main",uv=Bn({__name:"HolidayGift",props:{code:{}},setup(n){const e=n,{holidayIcons:t,fireHolidayConfetti:r}=Vf(),s=le("❄️"),i=le(null),a=lc({}),c=lc({}),u={SUMMONSGREETINGS2025:[{id:"gems",name:"Gems",quantity:25,image:"symbol_gem.webp",emojis:["💎"]},{id:"tickets",name:"Loot Tickets",quantity:12,image:"loot_ticket.webp",emojis:["🎟"]},{id:"hurricanes",name:"Hurricanes",quantity:20,image:"titan_battle_hurricane.webp",emojis:["🌀"]},{id:"harpoons",name:"Giant Harpoons",quantity:25,image:"titan_battle_giant_harpoon.webp",emojis:["🔱"]}],XMAS2025:[{id:"avatars",name:"Avatars",quantity:2,image:"profile_avatar.webp",emojis:["👤","🎅"]},{id:"covenant",name:"Covenant Coins",quantity:100,image:"covenant_coin.webp",emojis:["🪙"]},{id:"aethers",name:"Aether Shards",quantity:10,image:"aether_crystal.webp",emojis:["💎"]},{id:"dragon",name:"Ancient Dragon Coins",quantity:100,image:"ancient_dragon_coin.webp",emojis:["🐉"]},{id:"energy",name:"World Energy Flask",quantity:1,image:"energy_pve_full.webp",emojis:["⚡"]}],HAPPY2026:[{id:"avatar",name:"Avatar",quantity:1,image:"profile_avatar.webp",emojis:["👤"]},{id:"tickets",name:"Loot Tickets",quantity:5,image:"loot_ticket.webp",emojis:["🎟"]},{id:"untold",name:"Untold Tales Coins",quantity:50,image:"coin_untold_tales.webp",emojis:["📖"]}]},d=S=>S==="SUMMONSGREETINGS2025"?"December Greeting":S==="XMAS2025"?"Christmas Special":S==="HAPPY2026"?"New Year Countdown":"Limited Reward",m=(S,D)=>a[S]?.[D]||!1,y=()=>{const S=t.filter(D=>D!==s.value);s.value=S[Math.floor(Math.random()*S.length)]},T=()=>{r(!1,[s.value]),y()},P=(S,D,G)=>{a[S]||(a[S]={}),a[S][D]||(a[S][D]=!0),r(!1,G)},N=S=>{navigator.clipboard.writeText(S).then(()=>{c[S]=!0,setTimeout(()=>{c[S]=!1},2e3)})},L=S=>{N(S),r(!0),setTimeout(()=>{window.open(`https://www.empiresandpuzzles.com/redeem?code=${S}`,"_blank")},1e3)};return ds(()=>{s.value=t[Math.floor(Math.random()*t.length)];const S=Object.keys(u);e.code&&u[e.code]?i.value=e.code:i.value=S[Math.floor(Math.random()*S.length)]}),(S,D)=>($(),K("div",jy,[D[8]||(D[8]=f("div",{class:"absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/snow.png')] opacity-10 pointer-events-none sticky top-0 h-full"},null,-1)),f("div",$y,[f("img",{src:`${jr}/avatar/christmas_carol.webp`,alt:"",class:"w-full h-auto"},null,8,qy)]),f("div",zy,[f("img",{src:`${jr}/avatar/christmas_ginger_costume_gift_wrapper.webp`,alt:"",class:"w-full h-auto"},null,8,Hy)]),f("div",Gy,[f("div",{onClick:T,class:"holiday-icon-toggle animate-holiday-float group/icon w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-3xl md:text-4xl shadow-[0_0_20px_rgba(59,130,246,0.5)] cursor-pointer hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] transition-all duration-300 active:scale-90 select-none mb-4",title:"Click for a surprise!"},[f("span",Wy,Ue(s.value),1)]),D[2]||(D[2]=up('<h2 class="text-[30px] md:text-5xl font-black py-2 mb-2 tracking-tighter bg-gradient-to-b from-white via-cyan-100 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(59,130,246,0.8)] leading-tight not-prose" data-v-9b1372fc> Happy Winter Holidays! </h2><div class="space-y-0 text-center max-w-lg" data-v-9b1372fc><p class="text-base md:text-lg text-slate-300 leading-relaxed m-0" data-v-9b1372fc> Warmest greetings from <span class="text-yellow-400 font-bold" data-v-9b1372fc>Small Giant</span> and the <span class="text-cyan-400 font-bold" data-v-9b1372fc>Empuzzled</span> team! </p><p class="text-base md:text-lg text-slate-300 leading-relaxed m-0" data-v-9b1372fc>Scroll down to unwrap all your special gifts.</p></div>',2))]),f("div",Ky,[i.value?($(),K("div",Qy,[f("div",Yy,[D[3]||(D[3]=f("div",{class:"h-px w-8 md:w-16 bg-gradient-to-r from-transparent to-cyan-500/50"},null,-1)),f("span",Jy,Ue(d(i.value)),1),D[4]||(D[4]=f("div",{class:"h-px w-8 md:w-16 bg-gradient-to-l from-transparent to-cyan-500/50"},null,-1))]),D[7]||(D[7]=f("span",{class:"block text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-4 font-black"},"Click to Unwrap Rewards",-1)),f("div",Xy,[($(!0),K(ts,null,ui(u[i.value],G=>($(),K("div",{key:G.id,onClick:Z=>P(i.value,G.id,G.emojis),class:"bg-black/40 rounded-xl p-1.5 sm:p-2 border border-white/5 flex items-center gap-1 sm:gap-2 group/reward hover:border-cyan-400/30 transition-all cursor-pointer active:scale-95 not-prose min-w-[65px] sm:min-w-[85px] justify-center h-11 sm:h-14 select-none",title:m(i.value,G.id)?`Click for a ${G.name} rain!`:"Click to unwrap!"},[m(i.value,G.id)?($(),K(ts,{key:0},[f("img",{src:`${jr}/items/${G.image}`,class:he(["h-8 w-8 sm:h-10 sm:w-10 object-contain pointer-events-none",{"bg-black rounded-full":G.image==="profile_avatar.webp"}]),alt:G.name},null,10,ev),f("span",tv,"x"+Ue(G.quantity),1)],64)):($(),K("div",nv,[j(z(By),{class:"h-6 w-6 sm:h-8 sm:w-8 text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.4)]"})]))],8,Zy))),128))]),f("div",rv,[D[5]||(D[5]=f("span",{class:"block text-[10px] text-center uppercase tracking-[0.2em] text-slate-500 mb-1 font-black"},"Code",-1)),f("div",{onClick:D[0]||(D[0]=G=>N(i.value)),class:"relative text-center bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-3 group transition-all hover:border-cyan-400/50 cursor-pointer active:scale-95 transform-gpu select-none",title:"Click to copy"},[f("span",sv,Ue(i.value),1),j(nh,{name:"fade"},{default:Q(()=>[c[i.value]?($(),K("div",iv," Copied! ")):Ne("",!0)]),_:1})])]),f("button",{onClick:D[1]||(D[1]=G=>L(i.value)),class:"w-full max-w-sm px-2 md:px-10 py-3 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 hover:from-blue-600 hover:via-blue-500 hover:to-blue-600 text-white font-black uppercase tracking-widest rounded-xl shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3 group cursor-pointer border border-white/20 relative overflow-hidden"},[...D[6]||(D[6]=[f("div",{class:"absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/snow.png')] opacity-10 pointer-events-none"},null,-1),f("span",{class:"flex items-center gap-2 drop-shadow-[0_2px_3px_rgba(0,0,0,0.5)] text-xs md:text-sm"},[f("span",{class:"text-lg animate-pulse group-hover:rotate-12 transition-transform"},"🎁"),ge(" Redeem ")],-1)])])])):Ne("",!0)]),f("div",ov,[f("img",{src:`${jr}/avatar/christmas_noel.webp`,alt:"",class:"w-full h-auto"},null,8,av)]),f("div",lv,[f("img",{src:`${jr}/avatar/christmas_augustus.webp`,alt:"",class:"w-full h-auto"},null,8,cv)])]))}}),Df=Object.assign(mr(uv,[["__scopeId","data-v-9b1372fc"]]),{__name:"HolidayGift"}),R4=Object.freeze(Object.defineProperty({__proto__:null,default:Df},Symbol.toStringTag,{value:"Module"})),hv=Bn({__name:"BaseTooltip",props:{style:{type:Object,default:()=>({})}},setup(n){const e=n,t=rt(()=>e.style);return(r,s)=>($(),K("span",hp({class:"base-tooltip text-sm md:text-[1.05rem] px-[0.45rem] py-[0.3rem] md:px-[1.1rem] md:py-[0.45rem]",style:t.value,role:"tooltip"},r.$attrs),[fa(r.$slots,"default",{},void 0,!0)],16))}}),nt=Object.assign(mr(hv,[["__scopeId","data-v-bce57719"]]),{__name:"BaseTooltip"});function Gu(n,e){return mp()?(gp(n,e),!0):!1}const Wu=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const dv=Object.prototype.toString,S4=n=>dv.call(n)==="[object Object]",x4=()=>{};function k4(n){return Array.isArray(n)?n:[n]}function fv(n,e=1e3,t={}){const{immediate:r=!0,immediateCallback:s=!1}=t;let i=null;const a=dp(!1);function c(){i&&(clearInterval(i),i=null)}function u(){a.value=!1,c()}function d(){const m=pp(e);m<=0||(a.value=!0,s&&n(),c(),a.value&&(i=setInterval(n,m)))}return r&&Wu&&d(),(rh(e)||typeof e=="function")&&Gu(fs(e,()=>{a.value&&Wu&&d()})),Gu(u),{isActive:fp(a),pause:u,resume:d}}function P4(n,e,t){return fs(n,e,{...t,immediate:!0})}const pv={key:0,class:"w-full bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 text-slate-900 py-1.5 px-0 text-left md:text-center text-sm md:text-base font-black shadow-[0_0_15px_rgba(250,204,21,0.3)] flex items-center justify-left md:justify-center gap-2 relative overflow-hidden z-[60] border-b border-yellow-600/20"},mv={class:"flex items-center gap-2 relative z-10"},gv={class:"tracking-tight uppercase text-sm"},_v={class:"font-mono bg-slate-900/10 px-1.5 py-0.5 rounded ml-1"},yv=Bn({__name:"CountdownNotificationBar",props:{modelValue:{type:Boolean}},emits:["update:modelValue"],setup(n){const e=new Date("2026-01-06T07:00:00Z").getTime(),t=le(Date.now()),r=rt(()=>t.value>=e),s=rt(()=>{const i=e-t.value;if(i<=0)return"00:00:00";const a=Math.floor(i/(1e3*60*60)),c=Math.floor(i%(1e3*60*60)/(1e3*60)),u=Math.floor(i%(1e3*60)/1e3);return`${a.toString().padStart(2,"0")}:${c.toString().padStart(2,"0")}:${u.toString().padStart(2,"0")}`});return fv(()=>{t.value=Date.now()},1e3),ds(()=>{t.value=Date.now()}),(i,a)=>i.modelValue&&!r.value?($(),K("div",pv,[a[4]||(a[4]=f("div",{class:"absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none"},null,-1)),f("div",mv,[a[2]||(a[2]=f("span",{class:"animate-bounce select-none text-base"},"🖤",-1)),f("span",gv,[a[1]||(a[1]=ge(" Holy Aether Mimic in: ",-1)),f("span",_v,Ue(s.value),1)]),a[3]||(a[3]=f("span",{class:"animate-bounce select-none text-base"},"🖤",-1))]),f("button",{onClick:a[0]||(a[0]=c=>i.$emit("update:modelValue",!1)),class:"absolute right-3 text-slate-900/60 hover:text-slate-900 transition-colors cursor-pointer","aria-label":"Close notification"},[j(z(Mf),{class:"w-5 h-5"})])])):Ne("",!0)}}),vv=Object.assign(yv,{__name:"CountdownNotificationBar"}),Mi=le([]),Nf=le({}),Lf=le([]),Of=le({}),Ff=le({}),da=le(!0),Uf=le(null);let Ku=!1;const wv=async()=>{if(!(Ku||Mi.value.length>0)){Ku=!0;try{const e=await(await fetch("https://raw.githubusercontent.com/vabe44/31f5d518-epzl-cdn/main/assets/cached_configurations/characters.json")).json(),t=Object.values(e.charactersConfig.heroes),i=(await(await fetch("https://raw.githubusercontent.com/vabe44/31f5d518-epzl-cdn/main/assets/languages/English")).text()).split(`
`).slice(1),a={},c={},u={};for(const L of i){const S=L.split(",");if(S.length>=2){const D=S[0]?S[0].trim().replace(/"/g,""):"",G=S.slice(1).join(",").trim().replace(/"/g,"");D&&G&&(D.startsWith("heroes.name.")||D.startsWith("heroes.name_fancy.")||D.startsWith("specials.name."))?a[D]=G:D&&G&&D.startsWith("herocard.family.title.")?c[D.replace("herocard.family.title.","")]=G:D&&G&&D.startsWith("limitbreak.gift.title.")&&(u[D.replace("limitbreak.gift.title.","")]=G)}}Nf.value=c,Ff.value=u;const d=e.charactersConfig.heroes,y=await(await fetch("https://raw.githubusercontent.com/vabe44/31f5d518-epzl-cdn/main/assets/heroes_audio_map.json")).json(),P=await(await fetch("https://raw.githubusercontent.com/vabe44/31f5d518-epzl-cdn/main/assets/data_en.json")).json();Of.value=P.family_values||{},Lf.value=P.families_bonus||[];const N=new Set(P.allHeroes.map(L=>L.name));for(const L of P.allHeroes){const S=L.name+" C1";L.hasCostume=N.has(S)}Mi.value=t.map(L=>{const S=L.specialId;let D=L.specialId;if(L.parentHeroId){const E=d[L.parentHeroId];E&&(D=E.specialId)}const G=`heroes.name.${L.id}`,Z=`heroes.name_fancy.${L.id}`,we=`specials.name.${D}`,Se=L.canBeReceivedDate??549590400,ve=new Date("2000-01-01T00:00:00Z").getTime(),I=new Date(ve+Se*1e3),_=y[L.id]||[],g=P.allHeroes.find(E=>E.heroId===L.id);return{...L,costume:!!L.parentHeroId,trainer:!!L.trainerType,specialId:D,specialImageId:S,name:a[G]||g?.name||L.id,fancyName:a[Z],specialName:a[we],canBeReceivedDateParsed:I,specialAudioFiles:_,heroData:g||null}}),da.value=!1}catch(n){console.log("Error fetching heroes:",n),Uf.value=n,da.value=!1}}};function bv(){const n=le(!1),e=le(!1),t=rt(()=>{let u=Mi.value;return n.value||(u=u.filter(d=>!d.costume)),e.value||(u=u.filter(d=>!d.trainer)),u}),r=rt(()=>Mi.value),s=rt(()=>Nf.value),i=rt(()=>Ff.value),a=rt(()=>Lf.value),c=rt(()=>Of.value);return ds(wv),{heroesAll:r,heroes:t,loading:da,error:Uf,showCostumes:n,familiesAll:s,aetherGiftsAll:i,familiesBonusAll:a,familiesValuesAll:c}}const Qu=le(null),Oo=le([]),$r=le(!1);function _l(){const{heroesAll:n,loading:e}=bv(),t=(c,u)=>{const d=u.filter(N=>N.claimed),m=d.length,y=d.reduce((N,L)=>{const S=n.value.find(D=>D.id===L.answerId);if(S&&S.heroData){const D=S.heroData.lb2||S.heroData.lb1||S.heroData;return N+(D.power||0)+125}return N},0),T=u.length,P=u.filter(N=>N.won).length;return{totalPower:y,claimedCount:m,gamesPlayed:T,gamesWon:P}},r=async(c,u)=>{const d=bt.currentUser;if(!d)return u;if(n.value.length===0||e.value){let P=0;for(;(n.value.length===0||e.value)&&P<20;)await new Promise(N=>setTimeout(N,500)),P++}const m=kn(xt,"users",d.uid),y=kn(xt,"users",d.uid,"gameData",c),T=kn(xt,"leaderboard",d.uid);try{$r.value=!0;const P=await si(m),N=P.exists()?P.data():{stats:{}},L=N.displayName||d.displayName||"Hero",S=N.photoURL||d.photoURL||"",D=await si(y);let G=[];D.exists()&&(G=D.data().results||[]);const Z=[...G];u.forEach(g=>{const E=Z.findIndex(b=>b.gameDocId===g.gameDocId&&b.difficulty===g.difficulty);E===-1?Z.push(g):((g.won&&!Z[E].won||g.claimed&&!Z[E].claimed)&&(Z[E]={...Z[E],...g}),g.guessesHistory?.length>(Z[E].guessesHistory?.length||0)&&(Z[E].guessesHistory=g.guessesHistory,Z[E].guesses=g.guesses))}),await ii(y,{results:Z},{merge:!0});const we=t(c,Z),Se=["shadow","classic","skill"].filter(g=>g!==c);let ve=we.totalPower;Se.forEach(g=>{ve+=N.stats?.[g]?.totalPower||0});const I={displayName:L,photoURL:S,lastUpdated:bu(),totalPowerScore:ve,stats:{[c]:we}};await ii(m,I,{merge:!0});const _={uid:d.uid,displayName:L,photoURL:S,lastUpdated:bu(),totalPowerScore:ve,stats:{[c]:{totalPower:we.totalPower,claimedCount:we.claimedCount}}};return await ii(T,_,{merge:!0}),Z}catch(P){return console.error(`Error syncing ${c} results:`,P),u}finally{$r.value=!1}},s=async()=>{if(!bt.currentUser)return;const c=["shadow","classic","skill"];for(const u of c){const d=localStorage.getItem(`${u}ModeResults`);if(d)try{const m=JSON.parse(d);await r(u,m)}catch(m){console.error(`Error parsing local results for ${u}:`,m)}else await r(u,[])}await i()},i=async()=>{const c=bt.currentUser;if(c)try{const u=kn(xt,"users",c.uid),d=await si(u);d.exists()&&(Qu.value=d.data())}catch(u){console.error("Error fetching profile:",u)}};return{profile:Qu,leaderboard:Oo,loading:$r,syncGameResults:r,syncAllModes:s,fetchProfile:i,calculateStats:t,fetchLeaderboard:async(c="shadow",u=20)=>{try{$r.value=!0,Oo.value=[];const d=Wa(xt,"leaderboard");let m;c==="global"?m=Ii(d,la("totalPowerScore","desc"),Ci(u)):m=Ii(d,la(`stats.${c}.totalPower`,"desc"),Ci(u));const y=await il(m),T=[];y.forEach(P=>{T.push({uid:P.id,...P.data()})}),Oo.value=T}catch(d){console.error("Error fetching leaderboard:",d)}finally{$r.value=!1}}}}const Fo=le(null),Yu=le(!0),Ev=le(!1);let Ju=!1;function yl(){const{syncAllModes:n}=_l();return!Ju&&typeof window<"u"&&(Ju=!0,vf(bt,async e=>{Fo.value=e,e&&await n(),Yu.value=!1})),{user:Fo,loading:Yu,isAuthenticated:rt(()=>!!Fo.value),showLoginModal:Ev}}const Bf="classicModeResults",An=le([]),Xu=le({rare:[],epic:[],legendary:[]});function Zu(){if(typeof window>"u")return[];const n=localStorage.getItem(Bf);if(!n)return[];try{return JSON.parse(n)}catch{return[]}}function Qs(n){typeof window>"u"||localStorage.setItem(Bf,JSON.stringify(n))}function Tv(){const{isAuthenticated:n}=yl(),{syncGameResults:e}=_l(),t=async s=>{let i=Zu();An.value=i,n.value&&(i=await e("classic",i),An.value=i,Qs(i));for(const a of["rare","epic","legendary"]){const c=i.find(u=>u.difficulty===a&&u.gameDocId===s&&!u.finished);Xu.value[a]=c?c.guessesHistory.map(u=>({id:u})):[]}},r=async(s,i=!1)=>{const a=[...An.value],c=a.findIndex(u=>u.gameDocId===s.gameDocId&&u.difficulty===s.difficulty);if(i&&c!==-1&&a[c]!==void 0&&!a[c].finished||c!==-1?a[c]=s:a.push(s),An.value=a,Qs(a),n.value){const u=await e("classic",a);An.value=u,Qs(u)}};return fs(n,async s=>{if(s){const i=Zu(),a=await e("classic",i);An.value=a,Qs(a)}}),{classicResults:An,guessesByDifficulty:Xu,initializeClassicGameState:t,saveClassicGameResult:r}}const jf="shadowModeResults",Rn=le([]),eh=le({rare:[],epic:[],legendary:[]});function th(){if(typeof window>"u")return[];const n=localStorage.getItem(jf);if(!n)return[];try{return JSON.parse(n)}catch{return[]}}function Ys(n){typeof window>"u"||localStorage.setItem(jf,JSON.stringify(n))}function Iv(){const{isAuthenticated:n}=yl(),{syncGameResults:e}=_l(),t=async s=>{let i=th();Rn.value=i,n.value&&(i=await e("shadow",i),Rn.value=i,Ys(i));for(const a of["rare","epic","legendary"]){const c=i.find(u=>u.difficulty===a&&u.gameDocId===s&&!u.finished);eh.value[a]=c?c.guessesHistory.map(u=>({id:u})):[]}},r=async(s,i=!1)=>{const a=[...Rn.value],c=a.findIndex(u=>u.gameDocId===s.gameDocId&&u.difficulty===s.difficulty);if(i&&c!==-1&&!a[c].finished||c!==-1?a[c]=s:a.push(s),Rn.value=a,Ys(a),n.value){const u=await e("shadow",a);Rn.value=u,Ys(u)}};return fs(n,async s=>{if(s){const i=th(),a=await e("shadow",i);Rn.value=a,Ys(a)}}),{shadowResults:Rn,guessesByDifficulty:eh,initializeShadowGameState:t,saveShadowGameResult:r}}const Cv=[{name:"Chadmo",message:"Thanks for all you do for the community",note:"Mythic Supporter",tier:"mythic"},{name:"MyB!",message:"Amazing site you've created... Thanks for sharing!",note:"Mythic Supporter",tier:"mythic"},{name:"Gary",message:"This site is really well done.",note:"Mythic Supporter",tier:"mythic"},{name:"Combonator",message:"Thanks for making this awesome site!",note:"First Supporter",tier:"first"},{name:"MMMiaMMM",message:"Thank you for this!",note:"Legendary Supporter",tier:"legendary"},{name:"L33t-Vortex",message:"Thanks for all the hard work",note:"Legendary Supporter",tier:"legendary"},{name:"Arkin",message:"This site is amazing! Keep up the great work",note:"Epic Supporter",tier:"epic"},{name:"Lamerko1993",message:"Good work deserves a reward and Gastille too. :)",note:"Epic Supporter",tier:"epic"},{name:"Hoots",message:"Thank you",note:"Epic Supporter",tier:"epic"},{name:"Regina",message:null,note:"Epic Supporter",tier:"epic"},{name:"King Klecko",message:null,note:"Epic Supporter",tier:"epic"},{name:"Shazam",message:"😘",note:"Epic Supporter",tier:"epic"},{name:"Vic",message:"Thank you so much for the huge help!",note:"Epic Supporter",tier:"epic"}],Av=()=>{const n=Cv,e=["#f87171","#fb923c","#fbbf24","#facc15","#a3e635","#4ade80","#2dd4bf","#22d3ee","#38bdf8","#60a5fa","#818cf8","#a78bfa","#c084fc","#e879f9","#f472b6","#fb7185"],t=()=>e[Math.floor(Math.random()*e.length)];return{supporters:n,getTierConfig:i=>{switch(i){case"mythic":return{icon:"💎",label:"Mythic",class:"tier-mythic",glowIntensity:"0.9",shadowSize:"25px"};case"first":return{icon:"🥇",label:"First",class:"tier-first",glowIntensity:"0.8",shadowSize:"20px"};case"legendary":return{icon:"🌟",label:"Legendary",class:"tier-legendary",glowIntensity:"0.7",shadowSize:"15px"};case"epic":return{icon:"🔥",label:"Epic",class:"tier-epic",glowIntensity:"0.5",shadowSize:"10px"};default:return{icon:"⚔️",label:"Hero",class:"tier-rare",glowIntensity:"0.3",shadowSize:"6px"}}},getProcessedSupporters:(i=!1)=>{const a=n.map(d=>({...d,color:t()}));if(i)return[...a].sort(()=>Math.random()-.5);const c=["mythic","first","legendary","epic","rare"],u=a.reduce((d,m)=>(d[m.tier]=d[m.tier]||[],d[m.tier].push(m),d),{});return c.flatMap(d=>[...u[d]||[]].sort(()=>Math.random()-.5))},getRandomColor:t}},Rv={class:"supporter-marquee-container w-full relative group"},Sv={class:"flex items-center justify-center gap-2 mb-1 relative"},xv={class:"marquee-wrapper bg-black/20 backdrop-blur-sm border-y border-white/5 py-1.5 md:py-2 relative h-8 md:h-9 flex items-center overflow-hidden"},kv=["onMouseenter"],Pv={class:"text-[11px] opacity-80"},Vv={class:"text-xs font-black uppercase tracking-wider italic"},Mv=["onMouseenter"],Dv={class:"text-[11px] opacity-80"},Nv={class:"text-xs font-black uppercase tracking-wider italic"},Lv=Bn({__name:"SupporterMarquee",setup(n){const{getProcessedSupporters:e,getTierConfig:t}=Av(),r=le(e(!0)),s=le(null),i=rt(()=>`${Math.max(20,r.value.length*3)}s`);return ds(()=>{r.value=e(!0)}),(a,c)=>{const u=sh;return $(),K("div",Rv,[f("div",Sv,[j(u,{to:"/support-us",class:"relative group/title inline-flex items-center justify-center no-underline"},{default:Q(()=>[c[2]||(c[2]=f("span",{class:"text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 flex items-center gap-1.5 cursor-pointer hover:text-[#e2b04a] transition-colors"},[f("svg",{class:"w-3 h-3 text-yellow-500 animate-pulse",fill:"currentColor",viewBox:"0 0 24 24"},[f("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"})]),ge(" Hall of Heroes ")],-1)),s.value&&s.value!=="null"?($(),tr(nt,{key:0,class:"whitespace-nowrap"},{default:Q(()=>[ge(Ue(s.value),1)]),_:1})):Ne("",!0)]),_:1})]),f("div",xv,[c[3]||(c[3]=f("div",{class:"absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#111827] via-[#111827]/80 to-transparent z-20 pointer-events-none"},null,-1)),c[4]||(c[4]=f("div",{class:"absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#111827] via-[#111827]/80 to-transparent z-20 pointer-events-none"},null,-1)),f("div",{class:"marquee-content flex gap-12 whitespace-nowrap px-4 hover:pause-animation",style:Vn({animationDuration:i.value})},[($(!0),K(ts,null,ui(r.value,(d,m)=>($(),K("div",{key:"a-"+d.name+m,onMouseenter:y=>s.value=d.message,onMouseleave:c[0]||(c[0]=y=>s.value=null),class:"inline-flex items-center gap-1 cursor-help transition-all duration-300 hover:scale-110 active:scale-95",style:Vn({color:d.color,textShadow:`0 0 ${z(t)(d.tier).shadowSize} ${d.color}${Math.round(parseFloat(z(t)(d.tier).glowIntensity)*255).toString(16).padStart(2,"0")}`})},[f("span",Pv,Ue(z(t)(d.tier).icon),1),f("span",Vv,Ue(d.name),1)],44,kv))),128)),($(!0),K(ts,null,ui(r.value,(d,m)=>($(),K("div",{key:"b-"+d.name+m,onMouseenter:y=>s.value=d.message,onMouseleave:c[1]||(c[1]=y=>s.value=null),class:"inline-flex items-center gap-1 cursor-help transition-all duration-300 hover:scale-110 active:scale-95",style:Vn({color:d.color,textShadow:`0 0 ${z(t)(d.tier).shadowSize} ${d.color}${Math.round(parseFloat(z(t)(d.tier).glowIntensity)*255).toString(16).padStart(2,"0")}`})},[f("span",Dv,Ue(z(t)(d.tier).icon),1),f("span",Nv,Ue(d.name),1)],44,Mv))),128))],4)])])}}}),Ov=Object.assign(mr(Lv,[["__scopeId","data-v-f16b9fb4"]]),{__name:"SupporterMarquee"}),Fv={class:"flex flex-col items-center bg-transparent shadow-none w-full relative z-40"},Uv={class:"relative w-full flex flex-col items-center px-4 mt-2 md:pt-1"},Bv={class:"flex flex-col items-center justify-center relative"},jv=["src"];const $v=["src"],qv={class:"mt-2 px-2"},zv={class:"w-full mt-2 max-w-2xl mx-auto relative z-10"},Hv={key:0,class:"hidden md:flex wrapper w-100 mt-4 items-center justify-center relative"},Gv={class:"flex items-center gap-3 z-10 relative justify-center w-auto"},Wv={class:"w-12 h-12 md:w-16 md:h-16 flex items-center justify-center relative group"},Kv=["onClick"],Qv={key:0,class:"checkmark-overlay"},Yv={class:"w-12 h-12 md:w-16 md:h-16 flex items-center justify-center relative group"},Jv=["onClick"],Xv={key:0,class:"checkmark-overlay"},Zv={class:"w-12 h-12 md:w-16 md:h-16 flex items-center justify-center relative group"},ew=["onClick"],tw={key:0,class:"checkmark-overlay"},nw={class:"w-12 h-12 md:w-16 md:h-16 flex items-center justify-center relative group"},rw=["onClick"],sw={class:"w-12 h-12 md:w-16 md:h-16 flex items-center justify-center relative group"},iw=["onClick"],ow={class:"w-12 h-12 md:w-16 md:h-16 flex items-center justify-center relative group"},aw=["onClick"],lw={class:"w-12 h-12 md:w-16 md:h-16 flex items-center justify-center relative group"},cw=["onClick"],uw={class:"w-12 h-12 md:w-16 md:h-16 flex items-center justify-center relative group"},hw=["onClick"],dw={class:"w-12 h-12 md:w-16 md:h-16 flex items-center justify-center relative group"},fw=["onClick"],pw={class:"w-12 h-12 md:w-16 md:h-16 flex items-center justify-center relative group"},mw=["onClick"],gw={class:"w-12 h-12 md:w-16 md:h-16 flex items-center justify-center relative group"},_w=["onClick"],yw={class:"w-12 h-12 md:w-16 md:h-16 flex items-center justify-center relative group"},vw=["onClick"],ww={class:"w-12 h-12 md:w-16 md:h-16 flex items-center justify-center relative group"},bw=["onClick"],Ew={class:"w-12 h-12 md:w-16 md:h-16 flex items-center justify-center relative group"},Tw=["onClick"],Iw={key:0,class:"fixed inset-0 z-[100] bg-black/95 overflow-y-auto"},Cw={class:"flex flex-col p-4 min-h-screen"},Aw={class:"flex justify-center relative mb-2"},Rw=["src"],Sw=["src"],xw={class:"mt-2 px-4"},kw={class:"grid grid-cols-1 md:grid-cols-2 gap-4 w-full mb-12 mt-4"},Pw={class:"h-full flex items-center p-4 bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-2xl transition-all duration-300 group-hover:border-blue-400/50 group-hover:bg-slate-800/60 shadow-xl"},Vw={class:"flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center mr-4 shadow-lg border-2 border-yellow-400/20"},Mw={class:"h-full flex items-center p-4 bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-2xl transition-all duration-300 group-hover:border-purple-400/50 group-hover:bg-slate-800/60 shadow-xl"},Dw={class:"flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center mr-4 shadow-lg border-2 border-yellow-400/20"},Nw={class:"h-full flex items-center p-4 bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-2xl transition-all duration-300 group-hover:border-yellow-400/50 group-hover:bg-slate-800/60 shadow-xl relative overflow-visible"},Lw={class:"flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center mr-4 shadow-lg border-2 border-yellow-400/20"},Ow={class:"overflow-y-auto md:px-4 py-3 max-w-md mx-auto"},Fw={key:0,class:"flex flex-col items-center gap-4 py-4"},Uw={class:"flex flex-col items-center gap-2"},Bw=["src"],jw={key:1,class:"w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center"},$w={class:"text-white text-xl font-semibold"},qw={key:2,class:"text-gray-400 text-sm"},zw={class:"w-full mt-6 bg-gray-800/50 p-4 rounded-xl border border-gray-700"},Hw={class:"flex flex-col gap-2"},Gw={class:"flex gap-2"},Ww=["disabled"],Kw={class:"w-full mt-4"},Qw={key:0,class:"text-gray-400 text-sm italic"},Yw={key:1,class:"text-gray-500 text-sm italic"},Jw={key:2,class:"space-y-2 max-h-60 overflow-y-auto pr-2"},Xw={class:"text-xs text-gray-500"},Zw={key:1},e4={key:0,class:"bg-red-500/20 border border-red-500 text-red-200 px-4 py-2 rounded-lg mb-4 text-sm"},t4={class:"flex justify-center mb-6"},n4=["disabled"],r4=["disabled"],s4={key:2,class:"flex flex-col gap-2 mt-4 text-sm text-gray-300"},i4={class:"flex flex-col gap-6 mt-2"},o4=["disabled"],a4={key:0,class:"w-5 h-5 text-white",fill:"none",stroke:"currentColor","stroke-width":"2",viewBox:"0 0 24 24"},l4={class:"flex flex-col gap-6 mt-2"},c4=["disabled"],u4={key:0,class:"w-5 h-5 text-white",fill:"none",stroke:"currentColor","stroke-width":"2",viewBox:"0 0 24 24"},h4="https://raw.githubusercontent.com/vabe44/31f5d518-epzl-cdn/main",d4=Bn({__name:"AppHeader",props:{showNav:{type:Boolean,default:!0},showScrollToTop:{type:Boolean,default:!0},forceShowLoginMobile:{type:Boolean,default:!1}},setup(n){const e=h4,t=le(!0),r=le(!1),{winterCode:s}=Vf(),i=["rgba(226, 88, 34, 0.8)","rgba(248, 200, 10, 0.8)","rgba(185, 56, 248, 0.8)","rgba(24, 188, 8, 0.8)","rgba(56, 189, 248, 0.8)"],a=le(i[Math.floor(Math.random()*i.length)]),c=()=>{a.value=i[Math.floor(Math.random()*i.length)]};le(!1);const u=le(!1),d=_p(),m=rt(()=>d.path.startsWith("/blog")),y=rt(()=>d.path==="/shadow"),{classicResults:T}=Tv(),P=le(!1),N=()=>{P.value=window.scrollY>400},L=()=>{window.scrollTo({top:0,behavior:"smooth"})},{user:S,showLoginModal:D}=yl(),{shadowResults:G}=Iv(),Z=["rare","epic","legendary"],we=rt(()=>{if(!T?.value)return!1;const F=Array.from(new Set(T.value.map(J=>J.gameDocId)));if(F.length===0)return!1;const v=F[F.length-1];return Z.every(J=>T.value.some(se=>se.won&&se.difficulty===J&&se.gameDocId===v))}),Se=rt(()=>{if(!G?.value)return!1;const F=Array.from(new Set(G.value.map(J=>J.gameDocId)));if(F.length===0)return!1;const v=F[F.length-1];return Z.every(J=>G.value.some(se=>se.won&&se.difficulty===J&&se.gameDocId===v))}),ve=le(60),I=le(!1),_=le(!1),g=le(""),E=le(""),b=le(""),A=le(!1),w=le([]),Pe=le(!1),$e=le(null),at=le(""),Ht=le(!1);async function Gt(F){const v=kn(xt,"users",F.uid),J=await si(v);if(J.exists())$e.value=J.data();else{const se={uid:F.uid,email:F.email,displayName:F.displayName||"Hero",photoURL:F.photoURL||"",createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};await ii(v,se),$e.value=se}at.value=$e.value?.displayName||""}async function Wt(){if(!(!S.value||!at.value||!at.value.trim())){Ht.value=!0;try{const F=kn(xt,"users",S.value.uid);await g2(F,{displayName:at.value.trim(),updatedAt:new Date().toISOString()}),$e.value&&($e.value.displayName=at.value.trim()),alert("Profile updated!")}catch(F){console.error("Error updating profile:",F)}finally{Ht.value=!1}}}async function x(F){Pe.value=!0;try{const v=Ii(Wa(xt,"tierlists"),Gd("userId","==",F),la("updatedAt","desc"),Ci(10)),J=await il(v),se=[];J.forEach(O=>{se.push({id:O.id,...O.data()})}),w.value=se}catch(v){console.error("Error fetching tierlists:",v)}finally{Pe.value=!1}}ds(()=>{window.addEventListener("scroll",N),vf(bt,F=>{S.value=F,F?(Gt(F),x(F.uid)):(w.value=[],$e.value=null)})}),yp(()=>{window.removeEventListener("scroll",N)}),fs(D,F=>{F||(I.value=!1,_.value=!1,b.value="",E.value="")});const C=async()=>{b.value="",A.value=!0;try{await v_(bt,g.value,E.value),D.value=!1,g.value="",E.value=""}catch(F){b.value=F.message}finally{A.value=!1}},Y=async()=>{b.value="",A.value=!0;try{await y_(bt,g.value,E.value),D.value=!1,g.value="",E.value=""}catch(F){b.value=F.message}finally{A.value=!1}},ee=async()=>{if(!g.value){b.value="Please enter your email address.";return}b.value="",A.value=!0;try{await __(bt,g.value),alert("Password reset email sent!"),_.value=!1}catch(F){b.value=F.message}finally{A.value=!1}},re=async()=>{b.value="",A.value=!0;const F=new St;try{await $_(bt,F),D.value=!1}catch(v){b.value=v.message}finally{A.value=!1}},oe=async()=>{try{await E_(bt),D.value=!1}catch(F){console.error("Error signing out:",F)}};return(F,v)=>{const J=bp,se=Df;return $(),K("header",Fv,[j(vv,{modelValue:t.value,"onUpdate:modelValue":v[0]||(v[0]=O=>t.value=O)},null,8,["modelValue"]),f("div",Uv,[f("div",Bv,[j(z(_e),{to:"/",class:"block group relative transition-all duration-500"},{default:Q(()=>[v[18]||(v[18]=f("div",{class:"absolute -inset-4 bg-blue-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"},null,-1)),f("img",{alt:"Empuzzled logo",class:"logo w-[100px] md:w-[112px] relative z-10 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110 group-hover:-rotate-2 group-active:scale-95 group-hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]",src:`${z(e)}/logo-crop.webp`,loading:"lazy"},null,8,jv),Ne("",!0)]),_:1})]),f("div",{class:he(["absolute top-0 right-2",F.forceShowLoginMobile?"block":"hidden md:block"])},[f("button",{onClick:v[1]||(v[1]=O=>D.value=!0),class:"text-white p-1 rounded-full hover:bg-blue-600 shadow-lg transition duration-150 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer overflow-hidden","aria-label":"Account"},[z(S)?.photoURL?($(),K("img",{key:0,src:z(S).photoURL,class:"w-9 h-9 rounded-full object-cover"},null,8,$v)):($(),tr(z(Lo),{key:1,class:"w-8 h-8 m-0.5"}))])],2),f("div",qv,[f("h2",{onMouseenter:c,class:"text-[14px] sm:text-lg md:text-2xl font-black text-center tracking-tight leading-tight bg-gradient-to-b from-white via-slate-200 to-slate-400 bg-clip-text text-transparent drop-shadow-md max-w-[300px] sm:max-w-none mx-auto transition-all duration-500 ease-out hover:scale-[1.02] hover:brightness-125 cursor-default select-none companion-glow",style:Vn({"--glow-color":a.value})}," Your Ultimate E&P Companion ",36)]),f("div",zv,[j(Ov)]),F.showNav?($(),K("button",{key:0,onClick:v[2]||(v[2]=O=>u.value=!0),class:"md:hidden absolute top-0 right-4 text-white p-2","aria-label":"Open menu"},[j(z(Fy),{class:"w-8 h-8"})])):Ne("",!0)]),F.showNav?($(),K("div",Hv,[f("nav",Gv,[j(z(_e),{to:"/classic",custom:""},{default:Q(({navigate:O,isActive:q,isExactActive:W})=>[f("div",Wv,[f("button",{type:"button",class:he([["flex items-center justify-center rounded-2xl border-2 shadow-lg transition-all duration-200 relative cursor-pointer origin-center",q||W?"border-yellow-400 bg-gradient-to-br from-yellow-400 to-yellow-600 ring-4 ring-yellow-400/50 scale-110":"border-slate-700 bg-slate-800 hover:bg-gradient-to-br hover:from-yellow-400 hover:to-yellow-600 hover:border-yellow-400/50","hover:scale-110 focus:outline-none"],"w-[48px] h-[48px] md:w-[56px] md:h-[56px]"]),onClick:O,"aria-label":"Classic mode"},[j(z(qu),{class:he(["h-8 w-8 flex-shrink-0 transition-colors",q||W?"text-black":"text-slate-400 group-hover:text-black"])},null,8,["class"]),we.value?($(),K("span",Qv,[...v[19]||(v[19]=[f("svg",{viewBox:"0 0 24 24",class:"checkmark-svg"},[f("circle",{cx:"12",cy:"12",r:"11",fill:"#22c55e"}),f("path",{d:"M7 12.5l3 3 6-6",stroke:"#fff","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round",fill:"none"})],-1)])])):Ne("",!0)],10,Kv),j(nt,null,{default:Q(()=>[...v[20]||(v[20]=[ge("Classic Mode",-1)])]),_:1})])]),_:1}),j(z(_e),{to:"/skill",custom:""},{default:Q(({navigate:O,isActive:q,isExactActive:W})=>[f("div",Yv,[f("button",{type:"button",class:he([["flex items-center justify-center rounded-2xl border-2 shadow-lg transition-all duration-200 relative cursor-pointer origin-center",q||W?"border-yellow-400 bg-gradient-to-br from-yellow-400 to-yellow-600 ring-4 ring-yellow-400/50 scale-110":"border-slate-700 bg-slate-800 hover:bg-gradient-to-br hover:from-yellow-400 hover:to-yellow-600 hover:border-yellow-400/50","hover:scale-110 focus:outline-none"],"w-[48px] h-[48px] md:w-[56px] md:h-[56px]"]),onClick:O,"aria-label":"Skill mode"},[j(z(zu),{class:he(["h-8 w-8 flex-shrink-0 transition-colors",q||W?"text-black":"text-slate-400 group-hover:text-black"])},null,8,["class"]),we.value?($(),K("span",Xv,[...v[21]||(v[21]=[f("svg",{viewBox:"0 0 24 24",class:"checkmark-svg"},[f("circle",{cx:"12",cy:"12",r:"11",fill:"#22c55e"}),f("path",{d:"M7 12.5l3 3 6-6",stroke:"#fff","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round",fill:"none"})],-1)])])):Ne("",!0)],10,Jv),j(nt,null,{default:Q(()=>[...v[22]||(v[22]=[ge("Skill Mode",-1)])]),_:1})])]),_:1}),j(z(_e),{to:"/shadow",custom:""},{default:Q(({navigate:O,isActive:q,isExactActive:W})=>[f("div",Zv,[f("button",{type:"button",class:he([["flex items-center justify-center rounded-2xl border-2 shadow-lg transition-all duration-200 relative cursor-pointer origin-center",q||W?"border-yellow-400 bg-gradient-to-br from-yellow-400 to-yellow-600 ring-4 ring-yellow-400/50 scale-110":"border-slate-700 bg-slate-800 hover:bg-gradient-to-br hover:from-yellow-400 hover:to-yellow-600 hover:border-yellow-400/50","hover:scale-110 focus:outline-none"],"w-[48px] h-[48px] md:w-[56px] md:h-[56px]"]),onClick:O,"aria-label":"Shadow mode"},[j(z(Hu),{class:he(["h-8 w-8 flex-shrink-0 transition-colors",q||W?"text-black":"text-slate-400 group-hover:text-black"])},null,8,["class"]),Se.value?($(),K("span",tw,[...v[23]||(v[23]=[f("svg",{viewBox:"0 0 24 24",class:"checkmark-svg"},[f("circle",{cx:"12",cy:"12",r:"11",fill:"#22c55e"}),f("path",{d:"M7 12.5l3 3 6-6",stroke:"#fff","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round",fill:"none"})],-1)])])):($(),K("span",{key:1,class:he(["absolute -top-2 -right-2 text-[8px] font-black px-1.5 py-0.5 rounded-full shadow-lg animate-pulse z-20 transition-all duration-300 border",q||W?"bg-slate-900 text-yellow-400 border-yellow-400/50":"bg-gradient-to-r from-yellow-400 to-yellow-600 text-slate-900 border-yellow-300/50"])}," NEW ",2))],10,ew),j(nt,null,{default:Q(()=>[...v[24]||(v[24]=[ge("Shadow Mode",-1)])]),_:1})])]),_:1}),j(z(_e),{to:"/blog",custom:""},{default:Q(({navigate:O})=>[f("div",nw,[f("button",{type:"button",class:he([["flex items-center justify-center rounded-2xl border-2 shadow-lg transition-all duration-200 relative cursor-pointer origin-center",m.value?"border-red-400 bg-gradient-to-br from-red-400 to-red-600 ring-4 ring-red-500/50 scale-110":"border-slate-700 bg-slate-800 hover:bg-gradient-to-br hover:from-red-400 hover:to-red-600 hover:border-red-400/50","hover:scale-110 focus:outline-none"],"w-[48px] h-[48px] md:w-[56px] md:h-[56px]"]),onClick:O,"aria-label":"Blog page"},[($(),K("svg",{version:"1.1",id:"_x32_",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512","xml:space":"preserve",fill:"currentColor",class:he(["h-8 w-8 flex-shrink-0 transition-colors",m.value?"text-black":"text-slate-400 group-hover:text-black"])},[...v[25]||(v[25]=[f("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"},null,-1),f("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),f("g",{id:"SVGRepo_iconCarrier"},[f("g",null,[f("rect",{x:"293.186",y:"307.184",width:"131.572",height:"112.986"}),f("rect",{x:"87.243",y:"308.893",width:"154.448",height:"17.162"}),f("rect",{x:"87.243",y:"401.298",width:"154.448",height:"17.162"}),f("rect",{x:"87.243",y:"355.1",width:"154.448",height:"17.162"}),f("path",{d:"M416.428,0.004H95.58C42.787,0.013,0.016,42.792,0,95.577v303.685 c0.025,62.262,50.463,112.717,112.742,112.734h286.524c62.27-0.017,112.717-50.464,112.734-112.734V95.577 C511.992,42.792,469.212,0.013,416.428,0.004z M464.805,399.262c-0.008,18.15-7.308,34.424-19.198,46.34 c-11.916,11.891-28.19,19.19-46.34,19.198H112.742c-18.15-0.009-34.433-7.308-46.348-19.198 c-11.892-11.916-19.182-28.19-19.198-46.34V118.696h417.61V399.262z"}),f("path",{d:"M88.96,267.908h34.583c19.71,0,31.642-8.581,31.642-26.548c0-10.852-6.167-18.368-12.2-20.648v-0.268 c6.034-3.352,10.592-9.519,10.592-19.432c0-14.489-9.251-24.268-29.086-24.268H88.96c-0.796,0-1.332,0.536-1.332,1.34v88.475 C87.628,267.371,88.164,267.908,88.96,267.908z M107.338,193.495c0-0.528,0.251-0.804,0.804-0.804h13.944 c7.5,0,11.925,3.888,11.925,10.584c0,6.712-4.425,10.734-11.925,10.734h-13.944c-0.553,0-0.804-0.268-0.804-0.804V193.495z M107.338,229.955c0-0.528,0.251-0.795,0.804-0.795h15c8.061,0,12.343,4.424,12.343,11.405c0,7.097-4.282,11.396-12.343,11.396h-15 c-0.553,0-0.804-0.276-0.804-0.812V229.955z"}),f("path",{d:"M181.516,267.908h59.404c0.796,0,1.332-0.536,1.332-1.349v-14.874c0-0.813-0.536-1.341-1.332-1.341h-40.224 c-0.544,0-0.804-0.268-0.804-0.812v-71.447c0-0.804-0.528-1.34-1.341-1.34h-17.036c-0.805,0-1.332,0.536-1.332,1.34v88.475 C180.183,267.371,180.711,267.908,181.516,267.908z"}),f("path",{d:"M292.708,269.374c15.963,0,28.558-7.366,33.251-22.115c2.011-6.301,2.539-11.396,2.539-24.938 c0-13.542-0.528-18.637-2.539-24.939c-4.693-14.739-17.288-22.114-33.251-22.114c-15.956,0-28.558,7.375-33.243,22.114 c-2.02,6.302-2.556,11.397-2.556,24.939c0,13.542,0.536,18.637,2.556,24.938C264.149,262.009,276.752,269.374,292.708,269.374z M278.361,202.746c2.011-6.301,6.847-10.055,14.346-10.055c7.508,0,12.335,3.754,14.346,10.055 c1.073,3.226,1.474,7.634,1.474,19.576c0,11.924-0.402,16.357-1.474,19.567c-2.011,6.31-6.838,10.072-14.346,10.072 c-7.5,0-12.335-3.763-14.346-10.072c-1.064-3.21-1.475-7.643-1.475-19.567C276.886,210.38,277.297,205.972,278.361,202.746z"}),f("path",{d:"M387.961,269.374c16.081,0,28.685-8.171,33.251-22.794c1.6-4.952,2.263-12.46,2.263-20.505v-7.517 c0-0.788-0.536-1.333-1.332-1.333h-31.366c-0.813,0-1.349,0.545-1.349,1.333v12.888c0,0.796,0.536,1.332,1.349,1.332h12.326 c0.536,0,0.805,0.277,0.805,0.805c0,3.879-0.403,6.703-1.073,8.991c-1.878,6.026-7.777,9.386-14.614,9.386 c-7.91,0-12.88-3.763-14.891-10.072c-1.064-3.21-1.466-7.643-1.466-19.567c0-11.941,0.402-16.223,1.466-19.441 c2.011-6.302,6.847-10.19,14.631-10.19c7.5,0,12.05,3.218,15.678,9.385c0.269,0.67,0.939,0.939,1.886,0.67l14.338-6.033 c0.796-0.402,0.947-1.206,0.536-2.019c-4.299-10.995-15.419-19.425-32.439-19.425c-16.232,0-28.835,7.375-33.527,22.114 c-2.012,6.302-2.556,11.397-2.556,24.939c0,13.542,0.545,18.637,2.556,24.938C359.126,262.009,371.73,269.374,387.961,269.374z"})])],-1)])],2))],10,rw),j(nt,null,{default:Q(()=>[...v[26]||(v[26]=[ge("Hero Reviews & Guides",-1)])]),_:1})])]),_:1}),j(z(_e),{to:"/farming-guide",custom:""},{default:Q(({navigate:O,isActive:q,isExactActive:W})=>[f("div",sw,[f("button",{type:"button",class:he([["flex items-center justify-center rounded-2xl border-2 shadow-lg transition-all duration-200 relative cursor-pointer origin-center",q||W?"border-indigo-400 bg-gradient-to-br from-indigo-400 to-indigo-600 ring-4 ring-indigo-500/50 scale-110":"border-slate-700 bg-slate-800 hover:bg-gradient-to-br hover:from-indigo-400 hover:to-indigo-600 hover:border-indigo-400/50","hover:scale-110 focus:outline-none"],"w-[48px] h-[48px] md:w-[56px] md:h-[56px]"]),onClick:O,"aria-label":"Farming Guide"},[($(),K("svg",{viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",class:he(["h-8 w-8 flex-shrink-0 transition-colors",q||W?"text-black":"text-slate-400 group-hover:text-black"])},[...v[27]||(v[27]=[f("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"},null,-1),f("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),f("g",{id:"SVGRepo_iconCarrier"},[f("path",{d:"M16 0H13L3.70711 9.29289L2.20711 7.79289L0.792893 9.20711L3.08579 11.5L1.5835 13.0023C1.55586 13.0008 1.52802 13 1.5 13C0.671573 13 0 13.6716 0 14.5C0 15.3284 0.671573 16 1.5 16C2.32843 16 3 15.3284 3 14.5C3 14.472 2.99923 14.4441 2.99771 14.4165L4.5 12.9142L6.79289 15.2071L8.20711 13.7929L6.70711 12.2929L16 3V0Z"})],-1)])],2))],10,iw),j(nt,null,{default:Q(()=>[...v[28]||(v[28]=[ge("Farming Guide",-1)])]),_:1})])]),_:1}),j(z(_e),{to:"/calendar",custom:""},{default:Q(({navigate:O,isActive:q,isExactActive:W})=>[f("div",ow,[f("button",{type:"button",class:he([["flex items-center justify-center rounded-2xl border-2 shadow-lg transition-all duration-200 relative cursor-pointer origin-center",q||W?"border-orange-400 bg-gradient-to-br from-orange-400 to-orange-600 ring-4 ring-orange-400/50 scale-110":"border-slate-700 bg-slate-800 hover:bg-gradient-to-br hover:from-orange-400 hover:to-orange-600 hover:border-orange-400/50","hover:scale-110 focus:outline-none"],"w-[48px] h-[48px] md:w-[56px] md:h-[56px]"]),onClick:O,"aria-label":"Calendar"},[($(),K("svg",{viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",class:he(["h-8 w-8 flex-shrink-0 transition-colors",q||W?"text-black":"text-slate-400 group-hover:text-black"])},[...v[29]||(v[29]=[f("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"},null,-1),f("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),f("g",{id:"SVGRepo_iconCarrier"},[f("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7 1C6.44772 1 6 1.44772 6 2V3H5C3.34315 3 2 4.34315 2 6V20C2 21.6569 3.34315 23 5 23H13.101C12.5151 22.4259 12.0297 21.7496 11.6736 21H5C4.44772 21 4 20.5523 4 20V11H20V11.2899C20.7224 11.5049 21.396 11.8334 22 12.2547V6C22 4.34315 20.6569 3 19 3H18V2C18 1.44772 17.5523 1 17 1C16.4477 1 16 1.44772 16 2V3H8V2C8 1.44772 7.55228 1 7 1ZM16 6V5H8V6C8 6.55228 7.55228 7 7 7C6.44772 7 6 6.55228 6 6V5H5C4.44772 5 4 5.44772 4 6V9H20V6C20 5.44772 19.5523 5 19 5H18V6C18 6.55228 17.5523 7 17 7C16.4477 7 16 6.55228 16 6Z"}),f("path",{d:"M17 16C17 15.4477 17.4477 15 18 15C18.5523 15 19 15.4477 19 16V17.703L19.8801 18.583C20.2706 18.9736 20.2706 19.6067 19.8801 19.9973C19.4896 20.3878 18.8564 20.3878 18.4659 19.9973L17.2929 18.8243C17.0828 18.6142 16.9857 18.3338 17.0017 18.0588C17.0006 18.0393 17 18.0197 17 18V16Z"}),f("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 18C24 21.3137 21.3137 24 18 24C14.6863 24 12 21.3137 12 18C12 14.6863 14.6863 12 18 12C21.3137 12 24 14.6863 24 18ZM13.9819 18C13.9819 20.2191 15.7809 22.0181 18 22.0181C20.2191 22.0181 22.0181 20.2191 22.0181 18C22.0181 15.7809 20.2191 13.9819 18 13.9819C15.7809 13.9819 13.9819 15.7809 13.9819 18Z"})],-1)])],2))],10,aw),j(nt,null,{default:Q(()=>[...v[30]||(v[30]=[ge("Calendar",-1)])]),_:1})])]),_:1}),j(z(_e),{to:"/hero-database",custom:""},{default:Q(({navigate:O,isActive:q,isExactActive:W})=>[f("div",lw,[f("button",{type:"button",class:he([["flex items-center justify-center rounded-2xl border-2 shadow-lg transition-all duration-200 relative cursor-pointer origin-center",q||W?"border-teal-400 bg-gradient-to-br from-teal-400 to-teal-600 ring-4 ring-teal-500/50 scale-110":"border-slate-700 bg-slate-800 hover:bg-gradient-to-br hover:from-teal-400 hover:to-teal-600 hover:border-teal-400/50","hover:scale-110 focus:outline-none"],"w-[48px] h-[48px] md:w-[56px] md:h-[56px]"]),onClick:O,"aria-label":"Hero Database"},[($(),K("svg",{viewBox:"0 0 600 600",version:"1.1",id:"svg9724",fill:"currentColor",class:he(["h-8 w-8 flex-shrink-0 transition-colors",q||W?"text-black":"text-slate-400 group-hover:text-black"])},[...v[31]||(v[31]=[f("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"},null,-1),f("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),f("g",{id:"SVGRepo_iconCarrier"},[f("defs",{id:"defs9728"}),f("path",{id:"path3428",style:{color:"currentColor",fill:"currentColor","stroke-linejoin":"round","paint-order":"stroke fill markers"},d:"M 300 0 C 221.30245 0 150.09841 8.0113158 97.068359 21.535156 C 70.553346 28.297076 48.605538 36.277916 31.677734 46.484375 C 16.579982 55.587421 3.2445893 67.928721 0.53125 85 L 0 85 L 0 90 C 0 95.160045 3.6392602 102.94345 17.03125 112.83789 C 30.423241 122.73233 52.11942 133.00486 79.691406 141.62109 C 134.83535 158.85361 213.32376 170 300 170 C 386.67624 170 465.16467 158.85361 520.30859 141.62109 C 547.8806 133.00486 569.57675 122.73233 582.96875 112.83789 C 596.36075 102.94345 600 95.160045 600 90 L 599.87305 90 C 599.19452 70.318664 584.84711 56.447884 568.32227 46.484375 C 551.39442 36.277916 529.44664 28.297076 502.93164 21.535156 C 449.90159 8.0113158 378.69755 0 300 0 z M 0 149.67969 L 0 234.10742 C 0.70499641 239.21983 4.6599347 246.30446 16.722656 255.2168 C 30.11466 265.11125 51.810798 275.38376 79.382812 284 C 134.52681 301.23251 213.01506 312.37891 299.69141 312.37891 C 386.36774 312.37891 464.85602 301.23251 520 284 C 547.57201 275.38376 569.26815 265.11125 582.66016 255.2168 C 596.05215 245.32235 599.69141 237.53895 599.69141 232.37891 L 600 232.37891 L 600 149.67969 C 581.93283 161.57337 559.1282 171.3983 532.24023 179.80078 C 471.56758 198.761 390.05399 210 300 210 C 209.94601 210 128.43244 198.761 67.759766 179.80078 C 40.871811 171.3983 18.067172 161.57337 0 149.67969 z M 600 291.79688 C 590.25148 298.2521 579.18165 304.12941 566.75 309.46875 C 556.06951 314.05598 544.44003 318.27081 531.93164 322.17969 C 471.2589 341.13992 389.74549 352.37891 299.69141 352.37891 C 209.63733 352.37891 128.12391 341.13993 67.451172 322.17969 C 40.720883 313.82647 18.016718 304.0712 0 292.27148 L 0 380 C 0 385.16005 3.6392334 392.94343 17.03125 402.83789 C 30.423267 412.73235 52.119364 423.00484 79.691406 431.62109 C 134.83545 448.85363 213.32358 460 300 460 C 386.67642 460 465.16455 448.85363 520.30859 431.62109 C 547.88068 423.00484 569.57666 412.73235 582.96875 402.83789 C 596.36074 392.94343 600 385.16005 600 380 L 600 291.79688 z M 0 439.67969 L 0 508.59375 L 0 515 L 0.53125 515 C 3.2445947 532.0713 16.579952 544.41257 31.677734 553.51562 C 48.605572 563.7221 70.553292 571.70292 97.068359 578.46484 C 150.09851 591.98873 221.30229 600 300 600 C 378.69771 600 449.90149 591.98873 502.93164 578.46484 C 529.4467 571.70292 551.3944 563.7221 568.32227 553.51562 C 583.42003 544.41257 596.7554 532.0713 599.46875 515 L 600 515 L 600 508.59375 L 600 439.67969 C 581.93278 451.57339 559.1283 461.39828 532.24023 469.80078 C 471.56747 488.76104 390.05417 500 300 500 C 209.94583 500 128.43256 488.76104 67.759766 469.80078 C 40.871757 461.39828 18.067208 451.57339 0 439.67969 z "})],-1)])],2))],10,cw),j(nt,null,{default:Q(()=>[...v[32]||(v[32]=[ge("Hero Database",-1)])]),_:1})])]),_:1}),j(z(_e),{to:"/hero-coach",custom:""},{default:Q(({navigate:O,isActive:q,isExactActive:W})=>[f("div",uw,[f("button",{type:"button",class:he([["flex items-center justify-center rounded-2xl border-2 shadow-lg transition-all duration-200 relative cursor-pointer origin-center",q||W?"border-yellow-400 bg-gradient-to-br from-yellow-400 to-yellow-600 ring-4 ring-yellow-400/50 scale-110":"border-slate-700 bg-slate-800 hover:bg-gradient-to-br hover:from-yellow-400 hover:to-yellow-600 hover:border-yellow-400/50","hover:scale-110 focus:outline-none"],"w-[48px] h-[48px] md:w-[56px] md:h-[56px]"]),onClick:O,"aria-label":"Hero Coach"},[($(),K("svg",{version:"1.1",id:"_x32_",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512","xml:space":"preserve",fill:"currentColor",class:he(["h-8 w-8 flex-shrink-0 transition-colors",q||W?"text-black":"text-slate-400 group-hover:text-black"])},[...v[33]||(v[33]=[f("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"},null,-1),f("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),f("g",{id:"SVGRepo_iconCarrier"},[f("g",null,[f("path",{d:"M141.698,141.549H79.077c-8.488,0-15.37,6.882-15.37,15.362v198.179c0,8.479,6.882,15.362,15.37,15.362h62.622 c8.489,0,15.371-6.883,15.371-15.362V156.911C157.07,148.431,150.187,141.549,141.698,141.549z"}),f("path",{d:"M32.374,189.734H12.803C5.736,189.734,0,195.47,0,202.537v106.925c0,7.068,5.736,12.803,12.803,12.803h19.571 c7.067,0,12.803-5.736,12.803-12.803V202.537C45.177,195.47,39.441,189.734,32.374,189.734z"}),f("rect",{x:"177.69",y:"228.894",width:"156.62",height:"54.212"}),f("path",{d:"M432.922,141.549h-62.621c-8.488,0-15.371,6.882-15.371,15.362v198.179c0,8.479,6.882,15.362,15.371,15.362 h62.621c8.488,0,15.371-6.883,15.371-15.362V156.911C448.293,148.431,441.411,141.549,432.922,141.549z"}),f("path",{d:"M499.197,189.734h-19.57c-7.068,0-12.803,5.736-12.803,12.803v106.925c0,7.068,5.736,12.803,12.803,12.803 h19.57c7.068,0,12.803-5.736,12.803-12.803V202.537C512,195.47,506.264,189.734,499.197,189.734z"})])],-1)])],2))],10,hw),j(nt,null,{default:Q(()=>[...v[34]||(v[34]=[ge("Hero Coach",-1)])]),_:1})])]),_:1}),j(z(_e),{to:"/visiting-outfitter",custom:""},{default:Q(({navigate:O,isActive:q,isExactActive:W})=>[f("div",dw,[f("button",{type:"button",class:he([["flex items-center justify-center rounded-2xl border-2 shadow-lg transition-all duration-200 relative cursor-pointer origin-center",q||W?"border-pink-400 bg-gradient-to-br from-pink-400 to-pink-600 ring-4 ring-pink-400/50 scale-110":"border-slate-700 bg-slate-800 hover:bg-gradient-to-br hover:from-pink-400 hover:to-pink-600 hover:border-pink-400/50","hover:scale-110 focus:outline-none"],"w-[48px] h-[48px] md:w-[56px] md:h-[56px]"]),onClick:O,"aria-label":"Visiting Outfitter"},[($(),K("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:he(["h-8 w-8 flex-shrink-0 transition-colors",q||W?"text-black":"text-slate-400 group-hover:text-black"])},[...v[35]||(v[35]=[f("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"},null,-1),f("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),f("g",{id:"SVGRepo_iconCarrier"},[f("path",{d:"M21 18L14.9339 13.8837M11.7895 11.75L7 8.5M21 5.5L7 15M8 6.5C8 7.88071 6.88071 9 5.5 9C4.11929 9 3 7.88071 3 6.5C3 5.11929 4.11929 4 5.5 4C6.88071 4 8 5.11929 8 6.5ZM8 17C8 15.6193 6.88071 14.5 5.5 14.5C4.11929 14.5 3 15.6193 3 17C3 18.3807 4.11929 19.5 5.5 19.5C6.88071 19.5 8 18.3807 8 17Z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])],2))],10,fw),j(nt,null,{default:Q(()=>[...v[36]||(v[36]=[ge("Visiting Outfitter",-1)])]),_:1})])]),_:1}),j(z(_e),{to:"/soul-exchange",custom:""},{default:Q(({navigate:O,isActive:q,isExactActive:W})=>[f("div",pw,[f("button",{type:"button",class:he([["flex items-center justify-center rounded-2xl border-2 shadow-lg transition-all duration-200 relative cursor-pointer origin-center",q||W?"border-purple-400 bg-gradient-to-br from-purple-400 to-purple-600 ring-4 ring-purple-400/50 scale-110":"border-slate-700 bg-slate-800 hover:bg-gradient-to-br hover:from-purple-400 hover:to-purple-600 hover:border-purple-400/50","hover:scale-110 focus:outline-none"],"w-[48px] h-[48px] md:w-[56px] md:h-[56px]"]),onClick:O,"aria-label":"Soul Exchange"},[($(),K("svg",{version:"1.1",id:"_x32_",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512","xml:space":"preserve",fill:"currentColor",class:he(["h-8 w-8 flex-shrink-0 transition-colors",q||W?"text-black":"text-slate-400 group-hover:text-black"])},[...v[37]||(v[37]=[f("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"},null,-1),f("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),f("g",{id:"SVGRepo_iconCarrier"},[f("g",null,[f("path",{d:"M405.878,357.099c-3.641-41.297-29.703-99.953-92.734-102.781c-92.922,0.25-106.391,72.141-97.656,103.984 c7.328,26.75,26.781,48.078,54.422,45.656s48.469-26.844,45.656-54.438c-0.484-29.266,24.344-28.5,25.094,3.875 c1.016,43.094-28.094,80.922-71.031,84.703c-42.938,3.75-77.531-28.547-84.719-71.031c-4.344-25.781,0.594-75.172,44.438-113.766 c56.344-49.594,117.719,9.875,112.734-70.578c-5.031-81.188-25.438-82.906-78.063-114.531 c-34.797-20.922-40.75-54.109-38.797-67.109c0.078-0.625,0.078-1.563-1.156-0.781c-32.594,20.469-32.859,58-13.813,87.25 c9.141,14.016,28.031,21.234,29.969,43.422c2.641,30.094-14.672,39.281-28.938,51.703c-14.25,12.422-31.219,25.75-56.813,52.078 c-40.875,42.063-51.625,95.219-48.359,140.266c3.609,41.281,23.625,77.203,53.031,101.875 c29.453,24.688,68.313,38.141,109.594,34.516c41.297-3.625,77.203-23.641,101.906-53.063 C395.315,428.911,409.487,398.38,405.878,357.099z"})])],-1)])],2))],10,mw),j(nt,null,{default:Q(()=>[...v[38]||(v[38]=[ge("Soul Exchange",-1)])]),_:1})])]),_:1}),j(z(_e),{to:"/fated-summon",custom:""},{default:Q(({navigate:O,isActive:q,isExactActive:W})=>[f("div",gw,[f("button",{type:"button",class:he([["flex items-center justify-center rounded-2xl border-2 shadow-lg transition-all duration-200 relative cursor-pointer origin-center",q||W?"border-cyan-400 bg-gradient-to-br from-cyan-400 to-cyan-600 ring-4 ring-cyan-500/50 scale-110":"border-slate-700 bg-slate-800 hover:bg-gradient-to-br hover:from-cyan-400 hover:to-cyan-600 hover:border-cyan-400/50","hover:scale-110 focus:outline-none"],"w-[48px] h-[48px] md:w-[56px] md:h-[56px]"]),onClick:O,"aria-label":"Fated Summon"},[($(),K("svg",{viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",class:he(["h-8 w-8 flex-shrink-0 transition-colors",q||W?"text-black":"text-slate-400 group-hover:text-black"])},[...v[39]||(v[39]=[f("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"},null,-1),f("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),f("g",{id:"SVGRepo_iconCarrier"},[f("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M12.4722 10C13.4223 8.93849 14 7.53671 14 6C14 2.68629 11.3137 0 8 0C4.68629 0 2 2.68629 2 6C2 7.53671 2.57771 8.93849 3.52779 10H12.4722ZM8 5L10 3L12 5L10 7L8 5Z"}),f("path",{d:"M15 15V14L13 12H3L1 14V15H15Z"})],-1)])],2))],10,_w),j(nt,null,{default:Q(()=>[...v[40]||(v[40]=[ge("Fated Summon",-1)])]),_:1})])]),_:1}),j(z(_e),{to:"/tier-list",custom:""},{default:Q(({navigate:O,isActive:q,isExactActive:W})=>[f("div",yw,[f("button",{type:"button",class:he([["flex items-center justify-center rounded-2xl border-2 shadow-lg transition-all duration-200 relative cursor-pointer origin-center",q||W?"border-lime-400 bg-gradient-to-br from-lime-400 to-lime-600 ring-4 ring-lime-500/50 scale-110":"border-slate-700 bg-slate-800 hover:bg-gradient-to-br hover:from-lime-400 hover:to-lime-600 hover:border-lime-400/50","hover:scale-110 focus:outline-none"],"w-[48px] h-[48px] md:w-[56px] md:h-[56px]"]),onClick:O,"aria-label":"Tier List Maker"},[($(),K("svg",{class:he(["h-8 w-8 flex-shrink-0 transition-colors",q||W?"text-black":"text-slate-400 group-hover:text-black"]),viewBox:"0 0 24 24",version:"1.1",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},[...v[41]||(v[41]=[f("path",{d:"M7.23767,17.0125 C7.62819,16.622 8.26136,16.622 8.65188,17.0125 C9.01236,17.3729615 9.04008923,17.9402207 8.73506769,18.3324973 L8.65188,18.4267 L6.35378,20.7248 C5.89817333,21.1804533 5.17834996,21.2108302 4.68751439,20.8159307 L4.58602,20.7248 L3.34856,19.4874 C2.95803,19.0968 2.95803,18.4637 3.34856,18.0731 C3.70904,17.7126385 4.27627503,17.6849107 4.6685635,17.9899166 L4.76277,18.0731 L5.4699,18.7803 L7.23767,17.0125 Z M20.0002,17.9999 C20.5525,17.9999 21.0002,18.4477 21.0002,18.9999 C21.0002,19.5522 20.5525,19.9999 20.0002,19.9999 L11.0002,19.9999 C10.4479,19.9999 10.0002,19.5522 10.0002,18.9999 C10.0002,18.4477 10.4479,17.9999 11.0002,17.9999 L20.0002,17.9999 Z M8.65188,10.0125 C9.0424,10.403 9.0424,11.0362 8.65188,11.4267 L6.35378,13.7248 C5.86563,14.213 5.07417,14.213 4.58602,13.7248 L3.34856,12.4873 C2.95803,12.0968 2.95803,11.4637 3.34856,11.0731 C3.73908,10.6826 4.37225,10.6826 4.76277,11.0731 L5.4699,11.7803 L7.23767,10.0125 C7.62819,9.62197 8.26136,9.62197 8.65188,10.0125 Z M20.0002,10.9999 C20.5525,10.9999 21.0002,11.4477 21.0002,11.9999 C21.0002,12.51275 20.614173,12.9354092 20.1168239,12.9931725 L20.0002,12.9999 L11.0002,12.9999 C10.4479,12.9999 10.0002,12.5522 10.0002,11.9999 C10.0002,11.4871429 10.386227,11.0644041 10.8835761,11.0066289 L11.0002,10.9999 L20.0002,10.9999 Z M7.23767,3.0125 C7.62819,2.62197 8.26136,2.62197 8.65188,3.0125 C9.01236,3.37298 9.04008923,3.94021503 8.73506769,4.3325035 L8.65188,4.42671 L6.35378,6.72481 C5.89817333,7.18041667 5.17834996,7.21079044 4.68751439,6.81593133 L4.58602,6.72481 L3.34856,5.48735 C2.95803,5.09683 2.95803,4.46366 3.34856,4.07314 C3.70904,3.71265077 4.27627503,3.68492083 4.6685635,3.98995018 L4.76277,4.07314 L5.4699,4.78026 L7.23767,3.0125 Z M20.0002,3.99995 C20.5525,3.99995 21.0002,4.44766 21.0002,4.99995 C21.0002,5.51278143 20.614173,5.93545653 20.1168239,5.9932222 L20.0002,5.99995 L11.0002,5.99995 C10.4479,5.99995 10.0002,5.55223 10.0002,4.99995 C10.0002,4.48710929 10.386227,4.06429043 10.8835761,4.00651523 L11.0002,3.99995 L20.0002,3.99995 Z"},null,-1)])],2))],10,vw),j(nt,null,{default:Q(()=>[...v[42]||(v[42]=[ge("Tier List Maker",-1)])]),_:1})])]),_:1}),j(z(_e),{to:"/talent-simulator",custom:""},{default:Q(({navigate:O,isActive:q,isExactActive:W})=>[f("div",ww,[f("button",{type:"button",class:he([["flex items-center justify-center rounded-2xl border-2 shadow-lg transition-all duration-200 relative cursor-pointer origin-center",q||W?"border-orange-400 bg-gradient-to-br from-orange-400 to-orange-600 ring-4 ring-orange-500/50 scale-110":"border-slate-700 bg-slate-800 hover:bg-gradient-to-br hover:from-orange-400 hover:to-orange-600 hover:border-orange-400/50","hover:scale-110 focus:outline-none"],"w-[48px] h-[48px] md:w-[56px] md:h-[56px]"]),onClick:O,"aria-label":"Talent Simulator"},[($(),K("svg",{fill:"currentColor",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"1.5",class:he(["h-8 w-8 flex-shrink-0 transition-colors",q||W?"text-black":"text-slate-400 group-hover:text-black"])},[...v[43]||(v[43]=[f("circle",{cx:"12",cy:"7",r:"2"},null,-1),f("circle",{cx:"8",cy:"17",r:"2"},null,-1),f("circle",{cx:"16",cy:"17",r:"2"},null,-1),f("line",{x1:"12",y1:"9",x2:"8",y2:"15"},null,-1),f("line",{x1:"12",y1:"9",x2:"16",y2:"15"},null,-1)])],2))],10,bw),j(nt,null,{default:Q(()=>[...v[44]||(v[44]=[ge("Talent Simulator",-1)])]),_:1})])]),_:1}),j(z(_e),{to:"/codes",custom:""},{default:Q(({navigate:O,isActive:q,isExactActive:W})=>[f("div",Ew,[f("button",{type:"button",class:he([["flex items-center justify-center rounded-2xl border-2 shadow-lg transition-all duration-200 relative cursor-pointer origin-center",q||W?"border-green-400 bg-gradient-to-br from-green-400 to-green-600 ring-4 ring-green-500/50 scale-110":"border-slate-700 bg-slate-800 hover:bg-gradient-to-br hover:from-green-400 hover:to-green-600 hover:border-green-400/50","hover:scale-110 focus:outline-none"],"w-[48px] h-[48px] md:w-[56px] md:h-[56px]"]),onClick:O,"aria-label":"Redeem Codes"},[($(),K("svg",{viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:he(["h-8 w-8 flex-shrink-0 transition-colors",q||W?"text-black":"text-slate-400 group-hover:text-black"])},[...v[45]||(v[45]=[f("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"},null,-1),f("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),f("g",{id:"SVGRepo_iconCarrier"},[f("g",{id:"Layer_2","data-name":"Layer 2"},[f("g",{id:"invisible_box","data-name":"invisible box"},[f("rect",{width:"48",height:"48",fill:"none"})]),f("g",{id:"Layer_7","data-name":"Layer 7"},[f("g",null,[f("path",{d:"M43,12H38.3a4.2,4.2,0,0,0,.4-1,7,7,0,0,0-.6-5.3,6.7,6.7,0,0,0-4.3-3.4A7.1,7.1,0,0,0,25,7l-1,3.4L23,7a7.1,7.1,0,0,0-8.8-4.7A6.7,6.7,0,0,0,9.9,5.7,7,7,0,0,0,9.3,11a4.2,4.2,0,0,0,.4,1H5a2.9,2.9,0,0,0-3,3v7H17V16h4v6h6V16h4v6H46V15A2.9,2.9,0,0,0,43,12ZM17,12h-.9a3.1,3.1,0,0,1-3-2.2,2.9,2.9,0,0,1,.3-2.2,3,3,0,0,1,1.8-1.5,3.3,3.3,0,0,1,4,2.1L20.3,12ZM34.9,9.8a3.1,3.1,0,0,1-3,2.2H27.7l1.1-3.8a3.3,3.3,0,0,1,4-2.1,3,3,0,0,1,1.8,1.5A2.9,2.9,0,0,1,34.9,9.8Z"}),f("rect",{x:"21",y:"26",width:"6",height:"20"}),f("path",{d:"M4,43a3,3,0,0,0,3,3H17V26H4Z"}),f("path",{d:"M31,46H41a3,3,0,0,0,3-3V26H31Z"})])])])],-1)])],2))],10,Tw),j(nt,null,{default:Q(()=>[...v[46]||(v[46]=[ge("Redeem Codes",-1)])]),_:1})])]),_:1}),v[47]||(v[47]=f("div",{class:"menu-bar-decor"},null,-1))])])):Ne("",!0),($(),tr(Uo,{to:"body"},[u.value?($(),K("div",Iw,[f("div",Cw,[f("div",Aw,[f("button",{onClick:v[3]||(v[3]=O=>{D.value=!0,u.value=!1}),class:"absolute top-1 left-1 text-white p-1 rounded-full hover:bg-blue-600 shadow-lg transition duration-150 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer overflow-hidden","aria-label":"Account"},[z(S)?.photoURL?($(),K("img",{key:0,src:z(S).photoURL,class:"w-9 h-9 rounded-full object-cover"},null,8,Rw)):($(),tr(z(Lo),{key:1,class:"w-8 h-8 m-0.5"}))]),j(z(_e),{to:"/",class:"block"},{default:Q(()=>[f("img",{alt:"Empuzzled logo",class:"logo w-[100px] md:w-[180px]",src:`${z(e)}/logo-crop.webp`,loading:"lazy"},null,8,Sw)]),_:1}),f("button",{onClick:v[4]||(v[4]=O=>u.value=!1),class:"absolute top-1 right-1 text-white p-2","aria-label":"Close menu"},[j(z(Mf),{class:"w-8 h-8"})])]),f("div",xw,[f("h2",{onMouseenter:c,class:"text-[14px] sm:text-lg md:text-2xl font-black text-center tracking-tight leading-tight bg-gradient-to-b from-white via-slate-200 to-slate-400 bg-clip-text text-transparent drop-shadow-md max-w-[300px] sm:max-w-none mx-auto transition-all duration-500 ease-out hover:scale-[1.02] hover:brightness-125 cursor-default select-none companion-glow",style:Vn({"--glow-color":a.value})}," Your Ultimate E&P Companion ",36)]),f("div",kw,[j(z(_e),{to:"/classic",class:"group no-underline"},{default:Q(()=>[f("div",Pw,[f("div",Vw,[j(z(qu),{class:"h-8 w-8 text-black"})]),v[48]||(v[48]=f("div",{class:"flex-1"},[f("h2",{class:"text-xl font-bold text-white leading-tight"},"Daily Hero Hunt"),f("p",{class:"text-sm text-slate-400 mt-0.5"},"Test your knowledge! Crack the clues and find today's mystery hero.")],-1))])]),_:1}),j(z(_e),{to:"/skill",class:"group no-underline"},{default:Q(()=>[f("div",Mw,[f("div",Dw,[j(z(zu),{class:"h-8 w-8 text-black"})]),v[49]||(v[49]=f("div",{class:"flex-1"},[f("h2",{class:"text-xl font-bold text-white leading-tight"},"Skill Master Quest"),f("p",{class:"text-sm text-slate-400 mt-0.5"},"Recognize the power! Can you identify the hero by their unique ability?")],-1))])]),_:1}),j(z(_e),{to:"/shadow",class:"group no-underline"},{default:Q(()=>[f("div",Nw,[f("div",Lw,[j(z(Hu),{class:"h-8 w-8 text-black"})]),v[50]||(v[50]=f("div",{class:"flex-1"},[f("h2",{class:"text-xl font-bold text-white leading-tight"},"Into The Shadows"),f("p",{class:"text-sm text-slate-400 mt-0.5"},"The hunt is on! Unmask the hero lurking in the darkness of the shadow realm.")],-1)),f("span",{class:he(["absolute -top-1 -right-1 text-[8px] font-black px-2 py-0.5 rounded-full shadow-lg border animate-pulse z-20 transition-all duration-300",y.value?"bg-slate-900 text-yellow-400 border-yellow-400/50":"bg-gradient-to-r from-yellow-400 to-yellow-600 text-slate-900 border-yellow-300/50"])}," NEW ",2)])]),_:1}),j(z(_e),{to:"/blog",class:"group no-underline"},{default:Q(()=>[...v[51]||(v[51]=[f("div",{class:"h-full flex items-center p-4 bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-2xl transition-all duration-300 group-hover:border-red-400/50 group-hover:bg-slate-800/60 shadow-xl"},[f("div",{class:"flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center mr-4 shadow-lg border-2 border-red-400/20"},[f("svg",{class:"h-8 w-8 text-black",version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor"},[f("rect",{x:"293.186",y:"307.184",width:"131.572",height:"112.986"}),f("rect",{x:"87.243",y:"308.893",width:"154.448",height:"17.162"}),f("rect",{x:"87.243",y:"401.298",width:"154.448",height:"17.162"}),f("rect",{x:"87.243",y:"355.1",width:"154.448",height:"17.162"}),f("path",{d:"M416.428,0.004H95.58C42.787,0.013,0.016,42.792,0,95.577v303.685 c0.025,62.262,50.463,112.717,112.742,112.734h286.524c62.27-0.017,112.717-50.464,112.734-112.734V95.577 C511.992,42.792,469.212,0.013,416.428,0.004z M464.805,399.262c-0.008,18.15-7.308,34.424-19.198,46.34 c-11.916,11.891-28.19,19.19-46.34,19.198H112.742c-18.15-0.009-34.433-7.308-46.348-19.198 c-11.892-11.916-19.182-28.19-19.198-46.34V118.696h417.61V399.262z"}),f("path",{d:"M88.96,267.908h34.583c19.71,0,31.642-8.581,31.642-26.548c0-10.852-6.167-18.368-12.2-20.648v-0.268 c6.034-3.352,10.592-9.519,10.592-19.432c0-14.489-9.251-24.268-29.086-24.268H88.96c-0.796,0-1.332,0.536-1.332,1.34v88.475 C87.628,267.371,88.164,267.908,88.96,267.908z M107.338,193.495c0-0.528,0.251-0.804,0.804-0.804h13.944 c7.5,0,11.925,3.888,11.925,10.584c0,6.712-4.425,10.734-11.925,10.734h-13.944c-0.553,0-0.804-0.268-0.804-0.804V193.495z M107.338,229.955c0-0.528,0.251-0.795,0.804-0.795h15c8.061,0,12.343,4.424,12.343,11.405c0,7.097-4.282,11.396-12.343,11.396h-15 c-0.553,0-0.804-0.276-0.804-0.812V229.955z"}),f("path",{d:"M181.516,267.908h59.404c0.796,0,1.332-0.536,1.332-1.349v-14.874c0-0.813-0.536-1.341-1.332-1.341h-40.224 c-0.544,0-0.804-0.268-0.804-0.812v-71.447c0-0.804-0.528-1.34-1.341-1.34h-17.036c-0.805,0-1.332,0.536-1.332,1.34v88.475 C180.183,267.371,180.711,267.908,181.516,267.908z"}),f("path",{d:"M292.708,269.374c15.963,0,28.558-7.366,33.251-22.115c2.011-6.301,2.539-11.396,2.539-24.938 c0-13.542-0.528-18.637-2.539-24.939c-4.693-14.739-17.288-22.114-33.251-22.114c-15.956,0-28.558,7.375-33.243,22.114 c-2.02,6.302-2.556,11.397-2.556,24.939c0,13.542,0.536,18.637,2.556,24.938C264.149,262.009,276.752,269.374,292.708,269.374z M278.361,202.746c2.011-6.301,6.847-10.055,14.346-10.055c7.508,0,12.335,3.754,14.346,10.055 c1.073,3.226,1.474,7.634,1.474,19.576c0,11.924-0.402,16.357-1.474,19.567c-2.011,6.31-6.838,10.072-14.346,10.072 c-7.5,0-12.335-3.763-14.346-10.072c-1.064-3.21-1.475-7.643-1.475-19.567C276.886,210.38,277.297,205.972,278.361,202.746z"}),f("path",{d:"M387.961,269.374c16.081,0,28.685-8.171,33.251-22.794c1.6-4.952,2.263-12.46,2.263-20.505v-7.517 c0-0.788-0.536-1.333-1.332-1.333h-31.366c-0.813,0-1.349,0.545-1.349,1.333v12.888c0,0.796,0.536,1.332,1.349,1.332h12.326 c0.536,0,0.805,0.277,0.805,0.805c0,3.879-0.403,6.703-1.073,8.991c-1.878,6.026-7.777,9.386-14.614,9.386 c-7.91,0-12.88-3.763-14.891-10.072c-1.064-3.21-1.466-7.643-1.466-19.567c0-11.941,0.402-16.223,1.466-19.441 c2.011-6.302,6.847-10.19,14.631-10.19c7.5,0,12.05,3.218,15.678,9.385c0.269,0.67,0.939,0.939,1.886,0.67l14.338-6.033 c0.796-0.402,0.947-1.206,0.536-2.019c-4.299-10.995-15.419-19.425-32.439-19.425c-16.232,0-28.835,7.375-33.527,22.114 c-2.012,6.302-2.556,11.397-2.556,24.939c0,13.542,0.545,18.637,2.556,24.938C359.126,262.009,371.73,269.374,387.961,269.374z"})])]),f("div",{class:"flex-1"},[f("h2",{class:"text-xl font-bold text-white leading-tight"},"Reviews & Guides"),f("p",{class:"text-sm text-slate-400 mt-0.5"},"Read hero reviews, guides and latest news")])],-1)])]),_:1}),j(z(_e),{to:"/hero-database",class:"group no-underline"},{default:Q(()=>[...v[52]||(v[52]=[f("div",{class:"h-full flex items-center p-4 bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-2xl transition-all duration-300 group-hover:border-teal-400/50 group-hover:bg-slate-800/60 shadow-xl"},[f("div",{class:"flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center mr-4 shadow-lg border-2 border-teal-400/20"},[f("svg",{class:"h-8 w-8 text-black",viewBox:"0 0 600 600",fill:"currentColor"},[f("path",{d:"M 300 0 C 221.30245 0 150.09841 8.0113158 97.068359 21.535156 C 70.553346 28.297076 48.605538 36.277916 31.677734 46.484375 C 16.579982 55.587421 3.2445893 67.928721 0.53125 85 L 0 85 L 0 90 C 0 95.160045 3.6392602 102.94345 17.03125 112.83789 C 30.423241 122.73233 52.11942 133.00486 79.691406 141.62109 C 134.83535 158.85361 213.32376 170 300 170 C 386.67624 170 465.16467 158.85361 520.30859 141.62109 C 547.8806 133.00486 569.57675 122.73233 582.96875 112.83789 C 596.36075 102.94345 600 95.160045 600 90 L 599.87305 90 C 599.19452 70.318664 584.84711 56.447884 568.32227 46.484375 C 551.39442 36.277916 529.44664 28.297076 502.93164 21.535156 C 449.90159 8.0113158 378.69755 0 300 0 z M 0 149.67969 L 0 234.10742 C 0.70499641 239.21983 4.6599347 246.30446 16.722656 255.2168 C 30.11466 265.11125 51.810798 275.38376 79.382812 284 C 134.52681 301.23251 213.01506 312.37891 299.69141 312.37891 C 386.36774 312.37891 464.85602 301.23251 520 284 C 547.57201 275.38376 569.26815 265.11125 582.66016 255.2168 C 596.05215 245.32235 599.69141 237.53895 599.69141 232.37891 L 600 232.37891 L 600 149.67969 C 581.93283 161.57337 559.1282 171.3983 532.24023 179.80078 C 471.56758 198.761 390.05399 210 300 210 C 209.94601 210 128.43244 198.761 67.759766 179.80078 C 40.871811 171.3983 18.067172 161.57337 0 149.67969 z M 600 291.79688 C 590.25148 298.2521 579.18165 304.12941 566.75 309.46875 C 556.06951 314.05598 544.44003 318.27081 531.93164 322.17969 C 471.2589 341.13992 389.74549 352.37891 299.69141 352.37891 C 209.63733 352.37891 128.12391 341.13993 67.451172 322.17969 C 40.720883 313.82647 18.016718 304.0712 0 292.27148 L 0 380 C 0 385.16005 3.6392334 392.94343 17.03125 402.83789 C 30.423267 412.73235 52.119364 423.00484 79.691406 431.62109 C 134.83545 448.85363 213.32358 460 300 460 C 386.67642 460 465.16455 448.85363 520.30859 431.62109 C 547.88068 423.00484 569.57666 412.73235 582.96875 402.83789 C 596.36074 392.94343 600 385.16005 600 380 L 600 291.79688 z M 0 292.27148 L 0 380 C 0 385.16005 3.6392334 392.94343 17.03125 402.83789 C 30.423267 412.73235 52.119364 423.00484 79.691406 431.62109 C 134.83545 448.85363 213.32358 460 300 460 C 386.67642 460 465.16455 448.85363 520.30859 431.62109 C 547.88068 423.00484 569.57666 412.73235 582.96875 402.83789 C 596.36074 392.94343 600 385.16005 600 380 L 600 464.10742 C 599.295 469.21983 595.34007 476.30446 583.27734 485.2168 C 569.88534 495.11125 548.1892 505.38376 520.61719 514 C 465.47319 531.23251 386.98494 542.37891 300.30859 542.37891 C 213.63226 542.37891 135.14398 531.23251 80 514 C 52.427994 505.38376 30.73185 495.11125 17.339844 485.2168 C 3.9478438 475.32235 0.30859375 467.53895 0.30859375 462.37891 L 0 462.37891 L 0 380 C 18.067282 391.82663 40\\.871811 401\\.6016 67\\.759766 410\\.05859 C 128\\.43242 429\\.01883 209\\.94601 440 300 440 C 390.05399 440 471.56756 429.01883 532.24023 410.05859 C 559.12819 401.6016 581.93283 391.82663 600 380 L 600 292.27148 z"})])]),f("div",{class:"flex-1"},[f("h2",{class:"text-xl font-bold text-white leading-tight"},"Hero Database"),f("p",{class:"text-sm text-slate-400 mt-0.5"},"Browse stats and skills for all heroes")])],-1)])]),_:1}),j(z(_e),{to:"/farming-guide",class:"group no-underline"},{default:Q(()=>[...v[53]||(v[53]=[f("div",{class:"h-full flex items-center p-4 bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-2xl transition-all duration-300 group-hover:border-indigo-400/50 group-hover:bg-slate-800/60 shadow-xl"},[f("div",{class:"flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center mr-4 shadow-lg border-2 border-indigo-400/20"},[f("svg",{class:"h-8 w-8 text-black",viewBox:"0 0 16 16",fill:"currentColor"},[f("path",{d:"M16 0H13L3.70711 9.29289L2.20711 7.79289L0.792893 9.20711L3.08579 11.5L1.5835 13.0023C1.55586 13.0008 1.52802 13 1.5 13C0.671573 13 0 13.6716 0 14.5C0 15.3284 0.671573 16 1.5 16C2.32843 16 3 15.3284 3 14.5C3 14.472 2.99923 14.4441 2.99771 14.4165L4.5 12.9142L6.79289 15.2071L8.20711 13.7929L6.70711 12.2929L16 3V0Z"})])]),f("div",{class:"flex-1"},[f("h2",{class:"text-xl font-bold text-white leading-tight"},"Farming Guide"),f("p",{class:"text-sm text-slate-400 mt-0.5"},"Optimize your resource farming routes")])],-1)])]),_:1}),j(z(_e),{to:"/calendar",class:"group no-underline"},{default:Q(()=>[...v[54]||(v[54]=[f("div",{class:"h-full flex items-center p-4 bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-2xl transition-all duration-300 group-hover:border-orange-400/50 group-hover:bg-slate-800/60 shadow-xl"},[f("div",{class:"flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center mr-4 shadow-lg border-2 border-orange-400/20"},[f("svg",{class:"h-8 w-8 text-black",viewBox:"0 0 24 24",fill:"currentColor"},[f("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7 1C6.44772 1 6 1.44772 6 2V3H5C3.34315 3 2 4.34315 2 6V20C2 21.6569 3.34315 23 5 23H13.101C12.5151 22.4259 12.0297 21.7496 11.6736 21H5C4.44772 21 4 20.5523 4 20V11H20V11.2899C20.7224 11.5049 21.396 11.8334 22 12.2547V6C22 4.34315 20.6569 3 19 3H18V2C18 1.44772 17.5523 1 17 1C16.4477 1 16 1.44772 16 2V3H8V2C8 1.44772 7.55228 1 7 1ZM16 6V5H8V6C8 6.55228 7.55228 7 7 7C6.44772 7 6 6.55228 6 6V5H5C4.44772 5 4 5.44772 4 6V9H20V6C20 5.44772 19.5523 5 19 5H18V6C18 6.55228 17.5523 7 17 7C16.4477 7 16 6.55228 16 6Z"}),f("path",{d:"M17 16C17 15.4477 17.4477 15 18 15C18.5523 15 19 15.4477 19 16V17.703L19.8801 18.583C20.2706 18.9736 20.2706 19.6067 19.8801 19.9973C19.4896 20.3878 18.8564 20.3878 18.4659 19.9973L17.2929 18.8243C17.0828 18.6142 16.9857 18.3338 17.0017 18.0588C17.0006 18.0393 17 18.0197 17 18V16Z"}),f("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 18C24 21.3137 21.3137 24 18 24C14.6863 24 12 21.3137 12 18C12 14.6863 14.6863 12 18 12C21.3137 12 24 14.6863 24 18ZM13.9819 18C13.9819 20.2191 15.7809 22.0181 18 22.0181C20.2191 22.0181 22.0181 20.2191 22.0181 18C22.0181 15.7809 20.2191 13.9819 18 13.9819C15.7809 13.9819 13.9819 15.7809 13.9819 18Z"})])]),f("div",{class:"flex-1"},[f("h2",{class:"text-xl font-bold text-white leading-tight"},"Event Calendar"),f("p",{class:"text-sm text-slate-400 mt-0.5"},"Track monthly events and hero schedules")])],-1)])]),_:1}),j(z(_e),{to:"/hero-coach",class:"group no-underline"},{default:Q(()=>[...v[55]||(v[55]=[f("div",{class:"h-full flex items-center p-4 bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-2xl transition-all duration-300 group-hover:border-yellow-400/50 group-hover:bg-slate-800/60 shadow-xl"},[f("div",{class:"flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center mr-4 shadow-lg border-2 border-yellow-400/20"},[f("svg",{class:"h-8 w-8 text-black",version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor"},[f("path",{d:"M141.698,141.549H79.077c-8.488,0-15.37,6.882-15.37,15.362v198.179c0,8.479,6.882,15.362,15.37,15.362h62.622 c8.489,0,15.371-6.883,15.371-15.362V156.911C157.07,148.431,150.187,141.549,141.698,141.549z"}),f("path",{d:"M32.374,189.734H12.803C5.736,189.734,0,195.47,0,202.537v106.925c0,7.068,5.736,12.803,12.803,12.803h19.571 c7.067,0,12.803-5.736,12.803-12.803V202.537C45.177,195.47,39.441,189.734,32.374,189.734z"}),f("rect",{x:"177.69",y:"228.894",width:"156.62",height:"54.212"}),f("path",{d:"M432.922,141.549h-62.621c-8.488,0-15.371,6.882-15.371,15.362v198.179c0,8.479,6.882,15.362,15.371,15.362 h62.621c8.488,0,15.371-6.883,15.371-15.362V156.911C448.293,148.431,441.411,141.549,432.922,141.549z"}),f("path",{d:"M499.197,189.734h-19.57c-7.068,0-12.803,5.736-12.803,12.803v106.925c0,7.068,5.736,12.803,12.803,12.803 h19.57c7.068,0,12.803-5.736,12.803-12.803V202.537C512,195.47,506.264,189.734,499.197,189.734z"})])]),f("div",{class:"flex-1"},[f("h2",{class:"text-xl font-bold text-white leading-tight"},"Hero Coach"),f("p",{class:"text-sm text-slate-400 mt-0.5"},"See eligible heroes for instant max")])],-1)])]),_:1}),j(z(_e),{to:"/visiting-outfitter",class:"group no-underline"},{default:Q(()=>[...v[56]||(v[56]=[f("div",{class:"h-full flex items-center p-4 bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-2xl transition-all duration-300 group-hover:border-pink-400/50 group-hover:bg-slate-800/60 shadow-xl"},[f("div",{class:"flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center mr-4 shadow-lg border-2 border-pink-400/20"},[f("svg",{class:"h-8 w-8 text-black",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[f("path",{d:"M21 18L14.9339 13.8837M11.7895 11.75L7 8.5M21 5.5L7 15M8 6.5C8 7.88071 6.88071 9 5.5 9C4.11929 9 3 7.88071 3 6.5C3 5.11929 4.11929 4 5.5 4C6.88071 4 8 5.11929 8 6.5ZM8 17C8 15.6193 6.88071 14.5 5.5 14.5C4.11929 14.5 3 15.6193 3 17C3 18.3807 4.11929 19.5 5.5 19.5C6.88071 19.5 8 18.3807 8 17Z"})])]),f("div",{class:"flex-1"},[f("h2",{class:"text-xl font-bold text-white leading-tight"},"Visiting Outfitter"),f("p",{class:"text-sm text-slate-400 mt-0.5"},"See costumes available in Outfitter")])],-1)])]),_:1}),j(z(_e),{to:"/soul-exchange",class:"group no-underline"},{default:Q(()=>[...v[57]||(v[57]=[f("div",{class:"h-full flex items-center p-4 bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-2xl transition-all duration-300 group-hover:border-purple-400/50 group-hover:bg-slate-800/60 shadow-xl"},[f("div",{class:"flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center mr-4 shadow-lg border-2 border-purple-400/20"},[f("svg",{class:"h-8 w-8 text-black",version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor"},[f("path",{d:"M405.878,357.099c-3.641-41.297-29.703-99.953-92.734-102.781c-92.922,0.25-106.391,72.141-97.656,103.984 c7.328,26.75,26.781,48.078,54.422,45.656s48.469-26.844,45.656-54.438c-0.484-29.266,24.344-28.5,25.094,3.875 c1.016,43.094-28.094,80.922-71.031,84.703c-42.938,3.75-77.531-28.547-84.719-71.031c-4.344-25.781,0.594-75.172,44.438-113.766 c56.344-49.594,117.719,9.875,112.734-70.578c-5.031-81.188-25.438-82.906-78.063-114.531 c-34.797-20.922-40.75-54.109-38.797-67.109c0.078-0.625,0.078-1.563-1.156-0.781c-32.594,20.469-32.859,58-13.813,87.25 c9.141,14.016,28.031,21.234,29.969,43.422c2.641,30.094-14.672,39.281-28.938,51.703c-14.25,12.422-31.219,25.75-56.813,52.078 c-40.875,42.063-51.625,95.219-48.359,140.266c3.609,41.281,23.625,77.203,53.031,101.875 c29.453,24.688,68.313,38.141,109.594,34.516c41.297-3.625,77.203-23.641,101.906-53.063 C395.315,428.911,409.487,398.38,405.878,357.099z"})])]),f("div",{class:"flex-1"},[f("h2",{class:"text-xl font-bold text-white leading-tight"},"Soul Exchange"),f("p",{class:"text-sm text-slate-400 mt-0.5"},"Browse Soul Exchange heroes")])],-1)])]),_:1}),j(z(_e),{to:"/fated-summon",class:"group no-underline"},{default:Q(()=>[...v[58]||(v[58]=[f("div",{class:"h-full flex items-center p-4 bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-2xl transition-all duration-300 group-hover:border-cyan-400/50 group-hover:bg-slate-800/60 shadow-xl"},[f("div",{class:"flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center mr-4 shadow-lg border-2 border-cyan-400/20"},[f("svg",{class:"h-8 w-8 text-black",viewBox:"0 0 16 16",fill:"currentColor"},[f("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M12.4722 10C13.4223 8.93849 14 7.53671 14 6C14 2.68629 11.3137 0 8 0C4.68629 0 2 2.68629 2 6C2 7.53671 2.57771 8.93849 3.52779 10H12.4722ZM8 5L10 3L12 5L10 7L8 5Z"}),f("path",{d:"M15 15V14L13 12H3L1 14V15H15Z"})])]),f("div",{class:"flex-1"},[f("h2",{class:"text-xl font-bold text-white leading-tight"},"Fated Summon"),f("p",{class:"text-sm text-slate-400 mt-0.5"},"Pick a guaranteed legendary hero")])],-1)])]),_:1}),j(z(_e),{to:"/tier-list",class:"group no-underline"},{default:Q(()=>[...v[59]||(v[59]=[f("div",{class:"h-full flex items-center p-4 bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-2xl transition-all duration-300 group-hover:border-lime-400/50 group-hover:bg-slate-800/60 shadow-xl"},[f("div",{class:"flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-lime-400 to-lime-600 flex items-center justify-center mr-4 shadow-lg border-2 border-lime-400/20"},[f("svg",{class:"h-8 w-8 text-black",viewBox:"0 0 24 24",version:"1.1",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},[f("path",{d:"M7.23767,17.0125 C7.62819,16.622 8.26136,16.622 8.65188,17.0125 C9.01236,17.3729615 9.04008923,17.9402207 8.73506769,18.3324973 L8.65188,18.4267 L6.35378,20.7248 C5.89817333,21.1804533 5.17834996,21.2108302 4.68751439,20.8159307 L4.58602,20.7248 L3.34856,19.4874 C2.95803,19.0968 2.95803,18.4637 3.34856,18.0731 C3.70904,17.7126385 4.27627503,17.6849107 4.6685635,17.9899166 L4.76277,18.0731 L5.4699,18.7803 L7.23767,17.0125 Z M20.0002,17.9999 C20.5525,17.9999 21.0002,18.4477 21.0002,18.9999 C21.0002,19.5522 20.5525,19.9999 20.0002,19.9999 L11.0002,19.9999 C10.4479,19.9999 10.0002,19.5522 10.0002,18.9999 C10.0002,18.4477 10.4479,17.9999 11.0002,17.9999 L20.0002,17.9999 Z M8.65188,10.0125 C9.0424,10.403 9.0424,11.0362 8.65188,11.4267 L6.35378,13.7248 C5.86563,14.213 5.07417,14.213 4.58602,13.7248 L3.34856,12.4873 C2.95803,12.0968 2.95803,11.4637 3.34856,11.0731 C3.73908,10.6826 4.37225,10.6826 4.76277,11.0731 L5.4699,11.7803 L7.23767,10.0125 C7.62819,9.62197 8.26136,9.62197 8.65188,10.0125 Z M20.0002,10.9999 C20.5525,10.9999 21.0002,11.4477 21.0002,11.9999 C21.0002,12.51275 20.614173,12.9354092 20.1168239,12.9931725 L20.0002,12.9999 L11.0002,12.9999 C10.4479,12.9999 10.0002,12.5522 10.0002,11.9999 C10.0002,11.4871429 10.386227,11.0644041 10.8835761,11.0066289 L11.0002,10.9999 L20.0002,10.9999 Z M7.23767,3.0125 C7.62819,2.62197 8.26136,2.62197 8.65188,3.0125 C9.01236,3.37298 9.04008923,3.94021503 8.73506769,4.3325035 L8.65188,4.42671 L6.35378,6.72481 C5.89817333,7.18041667 5.17834996,7.21079044 4.68751439,6.81593133 L4.58602,6.72481 L3.34856,5.48735 C2.95803,5.09683 2.95803,4.46366 3.34856,4.07314 C3.70904,3.71265077 4.27627503,3.68492083 4.6685635,3.98995018 L4.76277,4.07314 L5.4699,4.78026 L7.23767,3.0125 Z M20.0002,3.99995 C20.5525,3.99995 21.0002,4.44766 21.0002,4.99995 C21.0002,5.51278143 20.614173,5.93545653 20.1168239,5.9932222 L20.0002,5.99995 L11.0002,5.99995 C10.4479,5.99995 10.0002,5.55223 10.0002,4.99995 C10.0002,4.48710929 10.386227,4.06429043 10.8835761,4.00651523 L11.0002,3.99995 L20.0002,3.99995 Z"})])]),f("div",{class:"flex-1"},[f("h2",{class:"text-xl font-bold text-white leading-tight"},"Tier List"),f("p",{class:"text-sm text-slate-400 mt-0.5"},"Create and view hero tier lists")])],-1)])]),_:1}),j(z(_e),{to:"/talent-simulator",class:"group no-underline"},{default:Q(()=>[...v[60]||(v[60]=[f("div",{class:"h-full flex items-center p-4 bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-2xl transition-all duration-300 group-hover:border-orange-400/50 group-hover:bg-slate-800/60 shadow-xl"},[f("div",{class:"flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center mr-4 shadow-lg border-2 border-orange-400/20"},[f("svg",{class:"h-8 w-8 text-black",fill:"currentColor",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"1.5"},[f("circle",{cx:"12",cy:"7",r:"2",fill:"currentColor",stroke:"currentColor"}),f("circle",{cx:"8",cy:"17",r:"2",fill:"currentColor",stroke:"currentColor"}),f("circle",{cx:"16",cy:"17",r:"2",fill:"currentColor",stroke:"currentColor"}),f("line",{x1:"12",y1:"9",x2:"8",y2:"15",stroke:"currentColor","stroke-width":"1.5"}),f("line",{x1:"12",y1:"9",x2:"16",y2:"15",stroke:"currentColor","stroke-width":"1.5"})])]),f("div",{class:"flex-1"},[f("h2",{class:"text-xl font-bold text-white leading-tight"},"Talent Simulator"),f("p",{class:"text-sm text-slate-400 mt-0.5"},"Plan your hero's talent grid")])],-1)])]),_:1}),j(z(_e),{to:"/codes",class:"group no-underline"},{default:Q(()=>[...v[61]||(v[61]=[f("div",{class:"h-full flex items-center p-4 bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-2xl transition-all duration-300 group-hover:border-green-400/50 group-hover:bg-slate-800/60 shadow-xl"},[f("div",{class:"flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mr-4 shadow-lg border-2 border-green-400/20"},[f("svg",{class:"h-8 w-8 text-black",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},[f("path",{d:"M43,12H38.3a4.2,4.2,0,0,0,.4-1,7,7,0,0,0-.6-5.3,6.7,6.7,0,0,0-4.3-3.4A7.1,7.1,0,0,0,25,7l-1,3.4L23,7a7.1,7.1,0,0,0-8.8-4.7A6.7,6.7,0,0,0,9.9,5.7,7,7,0,0,0,9.3,11a4.2,4.2,0,0,0,.4,1H5a2.9,2.9,0,0,0-3,3v7H17V16h4v6h6V16h4v6H46V15A2.9,2.9,0,0,0,43,12ZM17,12h-.9a3.1,3.1,0,0,1-3-2.2,2.9,2.9,0,0,1,.3-2.2,3,3,0,0,1,1.8-1.5,3.3,3.3,0,0,1,4,2.1L20.3,12ZM34.9,9.8a3.1,3.1,0,0,1-3,2.2H27.7l1.1-3.8a3.3,3.3,0,0,1,4-2.1,3,3,0,0,1,1.8,1.5A2.9,2.9,0,0,1,34.9,9.8Z"}),f("rect",{x:"21",y:"26",width:"6",height:"20"}),f("path",{d:"M4,43a3,3,0,0,0,3,3H17V26H4Z"}),f("path",{d:"M31,46H41a3,3,0,0,0,3-3V26H31Z"})])]),f("div",{class:"flex-1"},[f("h2",{class:"text-xl font-bold text-white leading-tight"},"Redeem Codes"),f("p",{class:"text-sm text-slate-400 mt-0.5"},"Find and redeem the latest E&P codes")])],-1)])]),_:1})])])])):Ne("",!0)])),f("div",null,[j(J,{modelValue:z(D),"onUpdate:modelValue":v[16]||(v[16]=O=>rh(D)?D.value=O:null),"bg-opacity":ve.value,"z-index":200},{default:Q(()=>[f("div",Ow,[v[80]||(v[80]=f("h2",{class:"text-center text-3xl font-bold text-white mb-2"},"Account",-1)),z(S)?($(),K("div",Fw,[f("div",Uw,[z(S).photoURL?($(),K("img",{key:0,src:z(S).photoURL,class:"w-16 h-16 rounded-full border-2 border-blue-500"},null,8,Bw)):($(),K("div",jw,[j(z(Lo),{class:"w-8 h-8 text-gray-400"})])),f("p",$w,Ue(z(S).displayName||z(S).email),1),z(S).displayName?($(),K("p",qw,Ue(z(S).email),1)):Ne("",!0)]),f("div",zw,[v[64]||(v[64]=f("h3",{class:"font-bold mb-3 text-sm uppercase tracking-wider text-gray-400"},"Profile Settings",-1)),f("div",Hw,[v[62]||(v[62]=f("label",{for:"display-name",class:"text-xs text-gray-400"},"Public Display Name",-1)),f("div",Gw,[Qn(f("input",{id:"display-name","onUpdate:modelValue":v[5]||(v[5]=O=>at.value=O),type:"text",placeholder:"Enter display name",class:"flex-1 bg-gray-900 border border-gray-600 rounded px-3 py-2 text-white focus:outline-none focus:border-blue-500 transition"},null,512),[[Yn,at.value]]),f("button",{onClick:Wt,disabled:Ht.value||!at.value,class:"bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white px-4 py-2 rounded font-bold text-sm transition"},Ue(Ht.value?"...":"Save"),9,Ww)]),v[63]||(v[63]=f("p",{class:"text-[10px] text-gray-500 mt-1 italic"},"This name will be shown on the leaderboard and on your tier lists. ",-1))])]),f("div",Kw,[v[65]||(v[65]=f("h3",{class:"text-white font-bold mb-2 border-b border-gray-700 pb-1"},"My Saved Tierlists",-1)),Pe.value?($(),K("div",Qw,"Loading lists...")):w.value.length===0?($(),K("div",Yw,"No saved tierlists yet. ")):($(),K("ul",Jw,[($(!0),K(ts,null,ui(w.value,O=>($(),K("li",{key:O.id,class:"flex items-center justify-between group"},[j(z(_e),{to:`/tier-list/${O.id}`,onClick:v[6]||(v[6]=q=>D.value=!1),class:"text-blue-400 hover:text-blue-300 truncate flex-1 mr-2"},{default:Q(()=>[ge(Ue(O.name||"Untitled List"),1)]),_:2},1032,["to"]),f("span",Xw,Ue(new Date(O.updatedAt?.toDate()).toLocaleDateString()),1)]))),128))]))]),f("button",{onClick:oe,class:"flex items-center gap-2 px-6 py-2 rounded-lg bg-red-500/80 hover:bg-red-600 text-white font-semibold transition cursor-pointer mt-4"},[j(z(Oy),{class:"w-5 h-5"}),v[66]||(v[66]=ge(" Sign Out ",-1))])])):($(),K("div",Zw,[b.value?($(),K("div",e4,Ue(b.value),1)):Ne("",!0),f("div",t4,[f("button",{class:"flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-gray-900 font-semibold shadow hover:bg-gray-100 transition cursor-pointer disabled:opacity-50",onClick:re,"aria-label":"Sign in with Google",type:"button",disabled:A.value},[...v[67]||(v[67]=[f("svg",{class:"w-6 h-6",viewBox:"0 0 48 48"},[f("g",null,[f("path",{fill:"#4285F4",d:"M44.5 20H24v8.5h11.7C34.9 33.1 30.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.1 8.1 2.9l6.1-6.1C34.5 6.2 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 19.7-8 19.7-20 0-1.3-.1-2.7-.3-4z"}),f("path",{fill:"#34A853",d:"M6.3 14.7l7 5.1C15.3 16.2 19.3 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6.1-6.1C34.5 6.2 29.6 4 24 4c-7.2 0-13.4 4.1-16.7 10.7z"}),f("path",{fill:"#FBBC05",d:"M24 44c5.2 0 9.9-1.7 13.2-4.7l-6.1-5.1C29.9 36.9 27.1 38 24 38c-6.2 0-11.4-4.2-13.3-9.9l-7 5.4C6.6 39.9 14.7 44 24 44z"}),f("path",{fill:"#EA4335",d:"M44.5 20H24v8.5h11.7c-1.1 3.1-4.1 5.5-7.7 5.5-4.6 0-8.3-3.7-8.3-8.3s3.7-8.3 8.3-8.3c2.6 0 4.9 1.1 6.5 2.8l6.2-6.2C37.9 10.1 31.4 7 24 7c-9.4 0-17 7.6-17 17s7.6 17 17 17c8.8 0 16.1-6.2 16.1-15.1 0-1-.1-2-.3-3z"})])],-1),ge(" Continue with Google ",-1)])],8,n4)]),v[79]||(v[79]=f("div",{class:"flex items-center mb-4"},[f("div",{class:"flex-grow border-t border-gray-600"}),f("span",{class:"mx-3 text-gray-400"},"or"),f("div",{class:"flex-grow border-t border-gray-600"})],-1)),!I.value&&!_.value?($(),K("form",{key:1,onSubmit:Js(C,["prevent"]),class:"space-y-4"},[f("div",null,[v[68]||(v[68]=f("label",{class:"block text-gray-200 mb-1",for:"email"},"Email",-1)),Qn(f("input",{id:"email","onUpdate:modelValue":v[7]||(v[7]=O=>g.value=O),type:"email",class:"w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400",autocomplete:"email",required:""},null,512),[[Yn,g.value]])]),f("div",null,[v[69]||(v[69]=f("label",{class:"block text-gray-200 mb-1",for:"password"},"Password",-1)),Qn(f("input",{id:"password","onUpdate:modelValue":v[8]||(v[8]=O=>E.value=O),type:"password",class:"w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400",autocomplete:"current-password",required:""},null,512),[[Yn,E.value]])]),f("button",{type:"submit",class:"w-full py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow transition cursor-pointer disabled:opacity-50",disabled:A.value},Ue(A.value?"Signing In...":"Sign In"),9,r4)],32)):Ne("",!0),!I.value&&!_.value?($(),K("div",s4,[f("button",{class:"flex items-center justify-center gap-1 px-3 py-2 rounded transition hover:bg-gray-800/60 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer",type:"button",onClick:v[9]||(v[9]=O=>{_.value=!0,b.value=""})},[...v[70]||(v[70]=[f("svg",{class:"w-4 h-4 mr-1 text-blue-400",fill:"none",stroke:"currentColor","stroke-width":"2",viewBox:"0 0 24 24"},[f("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})],-1),ge(" Forgot password? ",-1)])]),f("button",{class:"flex items-center justify-center gap-1 px-3 py-2 rounded transition hover:bg-gray-800/60 focus:outline-none focus:ring-2 focus:ring-green-400 cursor-pointer",type:"button",onClick:v[10]||(v[10]=O=>{I.value=!0,b.value=""})},[...v[71]||(v[71]=[f("svg",{class:"w-4 h-4 mr-1 text-green-400",fill:"none",stroke:"currentColor","stroke-width":"2",viewBox:"0 0 24 24"},[f("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 4v16m8-8H4"})],-1),f("span",null,[ge("Don't have an account? "),f("span",{class:"underline"},"Sign Up")],-1)])])])):Ne("",!0),I.value?($(),K("form",{key:3,onSubmit:Js(Y,["prevent"]),class:"space-y-4 mt-2"},[f("div",null,[v[72]||(v[72]=f("label",{class:"block text-gray-200 mb-1",for:"signup-email"},"Email",-1)),Qn(f("input",{id:"signup-email","onUpdate:modelValue":v[11]||(v[11]=O=>g.value=O),type:"email",class:"w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400",autocomplete:"email",required:""},null,512),[[Yn,g.value]])]),f("div",null,[v[73]||(v[73]=f("label",{class:"block text-gray-200 mb-1",for:"signup-password"},"Password",-1)),Qn(f("input",{id:"signup-password","onUpdate:modelValue":v[12]||(v[12]=O=>E.value=O),type:"password",class:"w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400",autocomplete:"new-password",required:""},null,512),[[Yn,E.value]])]),f("div",i4,[f("button",{type:"submit",class:"flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white font-semibold shadow transition focus:outline-none focus:ring-2 focus:ring-green-300 cursor-pointer disabled:opacity-50",disabled:A.value},[A.value?Ne("",!0):($(),K("svg",a4,[...v[74]||(v[74]=[f("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 4v16m8-8H4"},null,-1)])])),ge(" "+Ue(A.value?"Creating Account...":"Create Account"),1)],8,o4),f("button",{class:"flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-200 font-semibold transition focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer",type:"button",onClick:v[13]||(v[13]=O=>{I.value=!1,b.value=""})},[...v[75]||(v[75]=[f("svg",{class:"w-4 h-4 text-blue-400",fill:"none",stroke:"currentColor","stroke-width":"2",viewBox:"0 0 24 24"},[f("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 19l-7-7 7-7"})],-1),ge(" Back to Sign In ",-1)])])])],32)):Ne("",!0),_.value?($(),K("form",{key:4,onSubmit:Js(ee,["prevent"]),class:"space-y-4 mt-2"},[f("div",null,[v[76]||(v[76]=f("label",{class:"block text-gray-200 mb-1",for:"forgot-email"},"Email",-1)),Qn(f("input",{id:"forgot-email","onUpdate:modelValue":v[14]||(v[14]=O=>g.value=O),type:"email",class:"w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400",autocomplete:"email",required:""},null,512),[[Yn,g.value]])]),f("div",l4,[f("button",{type:"submit",class:"flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white font-semibold shadow transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-300 disabled:opacity-50",disabled:A.value},[A.value?Ne("",!0):($(),K("svg",u4,[...v[77]||(v[77]=[f("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16 12v1a4 4 0 01-8 0v-1m8 0V8a4 4 0 00-8 0v4m8 0H8"},null,-1)])])),ge(" "+Ue(A.value?"Sending...":"Send Reset Link"),1)],8,c4),f("button",{class:"flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-200 font-semibold transition focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer",type:"button",onClick:v[15]||(v[15]=O=>{_.value=!1,b.value=""})},[...v[78]||(v[78]=[f("svg",{class:"w-4 h-4 text-blue-400",fill:"none",stroke:"currentColor","stroke-width":"2",viewBox:"0 0 24 24"},[f("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 19l-7-7 7-7"})],-1),ge(" Back to Sign In ",-1)])])])],32)):Ne("",!0)]))])]),_:1},8,["modelValue","bg-opacity"])]),j(J,{modelValue:r.value,"onUpdate:modelValue":v[17]||(v[17]=O=>r.value=O),"bg-opacity":70,"no-padding":"","no-border":""},{default:Q(()=>[j(se,{code:z(s)},null,8,["code"])]),_:1},8,["modelValue"]),($(),tr(Uo,{to:"body"},[j(nh,{"enter-active-class":"transition duration-300 ease-out","enter-from-class":"transform translate-y-10 opacity-0","enter-to-class":"transform translate-y-0 opacity-100","leave-active-class":"transition duration-200 ease-in","leave-from-class":"transform translate-y-0 opacity-100","leave-to-class":"transform translate-y-10 opacity-0"},{default:Q(()=>[F.showScrollToTop&&P.value?($(),K("button",{key:0,onClick:L,class:"fixed bottom-6 right-6 z-[90] p-3 rounded-full bg-slate-900/80 border border-cyan-400/30 text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:bg-cyan-400 hover:text-slate-900 hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-all duration-300 cursor-pointer backdrop-blur-sm group","aria-label":"Scroll to top"},[j(z(Uy),{class:"w-6 h-6 transform group-hover:-translate-y-0.5 transition-transform duration-300"})])):Ne("",!0)]),_:1})]))])}}}),V4=Object.assign(mr(d4,[["__scopeId","data-v-78d2f8cd"]]),{__name:"AppHeader"}),f4={class:"w-full text-gray-400 text-center py-6 px-3 mt-12 mb-0 md:mb-0 border-t border-gray-900 bottom-0"},p4={class:"container mx-auto flex flex-col items-center space-y-2"},m4={class:"mb-2 flex flex-wrap justify-center gap-4 text-sm"},g4={class:"flex md:hidden flex-col items-center justify-center relative"},_4=["src"],y4="https://raw.githubusercontent.com/vabe44/31f5d518-epzl-cdn/main",v4=Bn({__name:"AppFooter",setup(n){const e=y4;return(t,r)=>{const s=sh,i=vp("RouterLink");return $(),K("footer",f4,[f("div",p4,[f("nav",m4,[j(s,{to:"/about",class:"hover:underline"},{default:Q(()=>[...r[0]||(r[0]=[ge("About Us",-1)])]),_:1}),j(s,{to:"/contact",class:"hover:underline"},{default:Q(()=>[...r[1]||(r[1]=[ge("Contact Us",-1)])]),_:1}),j(s,{to:"/privacy-policy",class:"hover:underline"},{default:Q(()=>[...r[2]||(r[2]=[ge("Privacy Policy",-1)])]),_:1}),j(s,{to:"/terms",class:"hover:underline"},{default:Q(()=>[...r[3]||(r[3]=[ge("Terms & Conditions",-1)])]),_:1}),j(s,{to:"/disclaimer",class:"hover:underline"},{default:Q(()=>[...r[4]||(r[4]=[ge("Disclaimer",-1)])]),_:1}),j(s,{to:"/support-us",class:"hover:underline"},{default:Q(()=>[...r[5]||(r[5]=[ge("Support Us",-1)])]),_:1})]),fa(t.$slots,"default",{},void 0,!0)]),f("div",g4,[j(i,{to:"/",class:"block"},{default:Q(()=>[f("img",{alt:"Empuzzled logo",class:"logo w-[128px] md:w-[180px]",src:`${z(e)}/logo-crop.webp`,loading:"lazy"},null,8,_4)]),_:1})])])}}}),M4=Object.assign(mr(v4,[["__scopeId","data-v-9622ae2d"]]),{__name:"AppFooter"});export{il as A,g2 as B,Uy as C,bt as D,ii as E,C4 as F,A4 as G,x4 as H,Wu as I,k4 as J,P4 as K,S4 as L,By as M,R4 as N,Ce as T,V4 as _,M4 as a,zu as b,Hu as c,_l as d,bv as e,Ks as f,nt as g,bp as h,Mf as i,kn as j,xt as k,Iv as l,Tv as m,T4 as n,I4 as o,Wa as p,Av as q,qu as r,Ly as s,si as t,yl as u,E4 as v,Ii as w,Gd as x,la as y,Ci as z};
