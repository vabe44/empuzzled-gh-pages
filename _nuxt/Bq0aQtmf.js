import{y as fr,j as Vi,D as op,v as Zn,c as Q,n as Ue,a as f,G as Pn,x as ue,$ as fa,H as Qs,Q as Uo,o as $,_ as pr,r as ae,E as ap,z as lc,A as Mi,m as lp,t as qe,F as ts,q as li,b as j,p as G,w as Y,T as eh,d as me,k as at,aI as cp,e as th,a4 as up,a1 as hp,R as _e,B as Wn,O as Kn,aS as dp,I as fp}from"#entry";const pp=fr({__name:"BaseModal",props:{modelValue:{type:Boolean,required:!0},bgOpacity:{type:Number,default:60},noPadding:{type:Boolean,default:!1},noBorder:{type:Boolean,default:!1},fullMobile:{type:Boolean,default:!1},zIndex:{type:Number,default:150}},emits:["update:modelValue"],setup(n){const e=n,t=()=>document.querySelectorAll(".base-modal-open").length;return Vi(()=>e.modelValue,r=>{r?document.body.style.overflow="hidden":setTimeout(()=>{t()===0&&(document.body.style.overflow="")},0)},{immediate:!0}),op(()=>{e.modelValue&&setTimeout(()=>{t()===0&&(document.body.style.overflow="")},0)}),(r,s)=>($(),Zn(Uo,{to:"body"},[n.modelValue?($(),Q("div",{key:0,class:ue(["fixed inset-0 flex items-center justify-center backdrop-blur-sm transition-all duration-300 base-modal-open",n.fullMobile?"p-0 sm:p-4":"p-1 sm:p-4"]),style:Pn({backgroundColor:`rgba(0,0,0,${n.bgOpacity/100})`,zIndex:n.zIndex}),onClick:s[1]||(s[1]=Qs(o=>r.$emit("update:modelValue",!1),["self"]))},[f("div",{class:ue(["bg-gray-900 shadow-[0_0_50px_-12px_rgba(0,0,0,0.8)] w-full max-w-[1360px] relative animate-fade-in-modal flex flex-col",n.fullMobile?"h-[100dvh] sm:h-auto sm:max-h-[90dvh] rounded-none sm:rounded-2xl":"max-h-[100dvh] rounded-2xl",n.noBorder?"border-none":"border border-slate-800",n.noPadding?"p-0":"p-1 md:p-8"])},[f("button",{onClick:s[0]||(s[0]=o=>r.$emit("update:modelValue",!1)),"aria-label":"Close modal",class:ue(["modal-close-btn cursor-pointer absolute bg-slate-800 border-2 border-slate-600 hover:border-[#e2b04a] text-slate-400 hover:text-white rounded-full w-10 h-10 flex items-center justify-center shadow-2xl transition-all duration-200 focus:outline-none group",n.noPadding?"top-2 right-2":n.fullMobile?"top-4 right-4 sm:top-4 sm:right-4 md:-top-1 md:-right-1":"top-4 right-4 md:-top-1 md:-right-1"]),style:Pn({zIndex:n.zIndex+10})},[...s[2]||(s[2]=[f("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",class:"w-6 h-6 transition-transform group-hover:rotate-90"},[f("path",{d:"M6 6l12 12M6 18L18 6",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round"})],-1)])],6),f("div",{class:ue(["overflow-y-auto overflow-x-hidden custom-scrollbar flex-1 overscroll-contain",n.noPadding?"":n.fullMobile?"p-4 sm:p-0 sm:pr-1":"pr-1"])},[fa(r.$slots,"default",{},void 0,!0)],2)],2)],6)):Ue("",!0)]))}}),gp=Object.assign(pr(pp,[["__scopeId","data-v-244f9adb"]]),{__name:"BaseModal"}),mp=()=>{};var cc={};/**
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
 */const nh=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},_p=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[t++];e[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[t++],a=n[t++],c=n[t++],u=((s&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const o=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return e.join("")},rh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,c=a?n[s+1]:0,u=s+2<n.length,d=u?n[s+2]:0,g=o>>2,y=(o&3)<<4|c>>4;let I=(c&15)<<2|d>>6,P=d&63;u||(P=64,a||(I=64)),r.push(t[g],t[y],t[I],t[P])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(nh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):_p(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const y=s<n.length?t[n.charAt(s)]:64;if(++s,o==null||c==null||d==null||y==null)throw new yp;const I=o<<2|c>>4;if(r.push(I),d!==64){const P=c<<4&240|d>>2;if(r.push(P),y!==64){const N=d<<6&192|y;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class yp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const vp=function(n){const e=nh(n);return rh.encodeByteArray(e,!0)},ci=function(n){return vp(n).replace(/\./g,"")},sh=function(n){try{return rh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function wp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const bp=()=>wp().__FIREBASE_DEFAULTS__,Ep=()=>{if(typeof process>"u"||typeof cc>"u")return;const n=cc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Tp=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&sh(n[1]);return e&&JSON.parse(e)},Di=()=>{try{return mp()||bp()||Ep()||Tp()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ih=n=>Di()?.emulatorHosts?.[n],Ip=n=>{const e=ih(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},oh=()=>Di()?.config,ah=n=>Di()?.[`_${n}`];/**
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
 */class Cp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function gr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function lh(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Ap(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...n};return[ci(JSON.stringify(t)),ci(JSON.stringify(a)),""].join(".")}const Qr={};function Rp(){const n={prod:[],emulator:[]};for(const e of Object.keys(Qr))Qr[e]?n.emulator.push(e):n.prod.push(e);return n}function Sp(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let uc=!1;function ch(n,e){if(typeof window>"u"||typeof document>"u"||!gr(window.location.host)||Qr[n]===e||Qr[n]||uc)return;Qr[n]=e;function t(I){return`__firebase__banner__${I}`}const r="__firebase__banner",o=Rp().prod.length>0;function a(){const I=document.getElementById(r);I&&I.remove()}function c(I){I.style.display="flex",I.style.background="#7faaf0",I.style.position="fixed",I.style.bottom="5px",I.style.left="5px",I.style.padding=".5em",I.style.borderRadius="5px",I.style.alignItems="center"}function u(I,P){I.setAttribute("width","24"),I.setAttribute("id",P),I.setAttribute("height","24"),I.setAttribute("viewBox","0 0 24 24"),I.setAttribute("fill","none"),I.style.marginLeft="-6px"}function d(){const I=document.createElement("span");return I.style.cursor="pointer",I.style.marginLeft="16px",I.style.fontSize="24px",I.innerHTML=" &times;",I.onclick=()=>{uc=!0,a()},I}function g(I,P){I.setAttribute("id",P),I.innerText="Learn more",I.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",I.setAttribute("target","__blank"),I.style.paddingLeft="5px",I.style.textDecoration="underline"}function y(){const I=Sp(r),P=t("text"),N=document.getElementById(P)||document.createElement("span"),D=t("learnmore"),S=document.getElementById(D)||document.createElement("a"),L=t("preprendIcon"),W=document.getElementById(L)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(I.created){const ee=I.element;c(ee),g(S,D);const we=d();u(W,L),ee.append(W,N,S,we),document.body.appendChild(ee)}o?(N.innerText="Preview backend disconnected.",W.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(W.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
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
 */function Xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xe())}function kp(){const n=Di()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Pp(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Vp(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Mp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Dp(){const n=Xe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Np(){return!kp()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Lp(){try{return typeof indexedDB=="object"}catch{return!1}}function Op(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(t){e(t)}})}/**
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
 */const Fp="FirebaseError";class Bt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Fp,Object.setPrototypeOf(this,Bt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ds.prototype.create)}}class ds{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,o=this.errors[e],a=o?Up(o,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new Bt(s,c,r)}}function Up(n,e){return n.replace(Bp,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Bp=/\{\$([^}]+)}/g;function jp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Dt(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const o=n[s],a=e[s];if(hc(o)&&hc(a)){if(!Dt(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function hc(n){return n!==null&&typeof n=="object"}/**
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
 */function fs(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function qr(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,o]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(o)}}),e}function zr(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function $p(n,e){const t=new qp(n,e);return t.subscribe.bind(t)}class qp{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");zp(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Io),s.error===void 0&&(s.error=Io),s.complete===void 0&&(s.complete=Io);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function zp(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Io(){}/**
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
 */function je(n){return n&&n._delegate?n._delegate:n}class Dn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Rn="[DEFAULT]";/**
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
 */class Hp{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Cp;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Wp(e))try{this.getOrInitializeService({instanceIdentifier:Rn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(e=Rn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Rn){return this.instances.has(e)}getOptions(e=Rn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&a.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Gp(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Rn){return this.component?this.component.multipleInstances?e:Rn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Gp(n){return n===Rn?void 0:n}function Wp(n){return n.instantiationMode==="EAGER"}/**
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
 */class Kp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Hp(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var he;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(he||(he={}));const Qp={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},Yp=he.INFO,Jp={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},Xp=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Jp[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pa{constructor(e){this.name=e,this._logLevel=Yp,this._logHandler=Xp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Qp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const Zp=(n,e)=>e.some(t=>n instanceof t);let dc,fc;function eg(){return dc||(dc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tg(){return fc||(fc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const uh=new WeakMap,Bo=new WeakMap,hh=new WeakMap,Co=new WeakMap,ga=new WeakMap;function ng(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{t(sn(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&uh.set(t,n)}).catch(()=>{}),ga.set(e,n),e}function rg(n){if(Bo.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Bo.set(n,e)}let jo={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Bo.get(n);if(e==="objectStoreNames")return n.objectStoreNames||hh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return sn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function sg(n){jo=n(jo)}function ig(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Ao(this),e,...t);return hh.set(r,e.sort?e.sort():[e]),sn(r)}:tg().includes(n)?function(...e){return n.apply(Ao(this),e),sn(uh.get(this))}:function(...e){return sn(n.apply(Ao(this),e))}}function og(n){return typeof n=="function"?ig(n):(n instanceof IDBTransaction&&rg(n),Zp(n,eg())?new Proxy(n,jo):n)}function sn(n){if(n instanceof IDBRequest)return ng(n);if(Co.has(n))return Co.get(n);const e=og(n);return e!==n&&(Co.set(n,e),ga.set(e,n)),e}const Ao=n=>ga.get(n);function ag(n,e,{blocked:t,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,e),c=sn(a);return r&&a.addEventListener("upgradeneeded",u=>{r(sn(a.result),u.oldVersion,u.newVersion,sn(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{o&&u.addEventListener("close",()=>o()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const lg=["get","getKey","getAll","getAllKeys","count"],cg=["put","add","delete","clear"],Ro=new Map;function pc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ro.get(e))return Ro.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=cg.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||lg.includes(t)))return;const o=async function(a,...c){const u=this.transaction(a,s?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),s&&u.done]))[0]};return Ro.set(e,o),o}sg(n=>({...n,get:(e,t,r)=>pc(e,t)||n.get(e,t,r),has:(e,t)=>!!pc(e,t)||n.has(e,t)}));/**
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
 */class ug{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(hg(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function hg(n){return n.getComponent()?.type==="VERSION"}const $o="@firebase/app",gc="0.14.3";/**
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
 */const Nt=new pa("@firebase/app"),dg="@firebase/app-compat",fg="@firebase/analytics-compat",pg="@firebase/analytics",gg="@firebase/app-check-compat",mg="@firebase/app-check",_g="@firebase/auth",yg="@firebase/auth-compat",vg="@firebase/database",wg="@firebase/data-connect",bg="@firebase/database-compat",Eg="@firebase/functions",Tg="@firebase/functions-compat",Ig="@firebase/installations",Cg="@firebase/installations-compat",Ag="@firebase/messaging",Rg="@firebase/messaging-compat",Sg="@firebase/performance",xg="@firebase/performance-compat",kg="@firebase/remote-config",Pg="@firebase/remote-config-compat",Vg="@firebase/storage",Mg="@firebase/storage-compat",Dg="@firebase/firestore",Ng="@firebase/ai",Lg="@firebase/firestore-compat",Og="firebase",Fg="12.3.0";/**
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
 */const qo="[DEFAULT]",Ug={[$o]:"fire-core",[dg]:"fire-core-compat",[pg]:"fire-analytics",[fg]:"fire-analytics-compat",[mg]:"fire-app-check",[gg]:"fire-app-check-compat",[_g]:"fire-auth",[yg]:"fire-auth-compat",[vg]:"fire-rtdb",[wg]:"fire-data-connect",[bg]:"fire-rtdb-compat",[Eg]:"fire-fn",[Tg]:"fire-fn-compat",[Ig]:"fire-iid",[Cg]:"fire-iid-compat",[Ag]:"fire-fcm",[Rg]:"fire-fcm-compat",[Sg]:"fire-perf",[xg]:"fire-perf-compat",[kg]:"fire-rc",[Pg]:"fire-rc-compat",[Vg]:"fire-gcs",[Mg]:"fire-gcs-compat",[Dg]:"fire-fst",[Lg]:"fire-fst-compat",[Ng]:"fire-vertex","fire-js":"fire-js",[Og]:"fire-js-all"};/**
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
 */const ns=new Map,Bg=new Map,zo=new Map;function mc(n,e){try{n.container.addComponent(e)}catch(t){Nt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function sr(n){const e=n.name;if(zo.has(e))return Nt.debug(`There were multiple attempts to register component ${e}.`),!1;zo.set(e,n);for(const t of ns.values())mc(t,n);for(const t of Bg.values())mc(t,n);return!0}function ma(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function lt(n){return n==null?!1:n.settings!==void 0}/**
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
 */const jg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},on=new ds("app","Firebase",jg);/**
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
 */class $g{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Dn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw on.create("app-deleted",{appName:this._name})}}/**
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
 */const mr=Fg;function dh(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:qo,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw on.create("bad-app-name",{appName:String(s)});if(t||(t=oh()),!t)throw on.create("no-options");const o=ns.get(s);if(o){if(Dt(t,o.options)&&Dt(r,o.config))return o;throw on.create("duplicate-app",{appName:s})}const a=new Kp(s);for(const u of zo.values())a.addComponent(u);const c=new $g(t,r,a);return ns.set(s,c),c}function fh(n=qo){const e=ns.get(n);if(!e&&n===qo&&oh())return dh();if(!e)throw on.create("no-app",{appName:n});return e}function _c(){return Array.from(ns.values())}function an(n,e,t){let r=Ug[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Nt.warn(a.join(" "));return}sr(new Dn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const qg="firebase-heartbeat-database",zg=1,rs="firebase-heartbeat-store";let So=null;function ph(){return So||(So=ag(qg,zg,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(rs)}catch(t){console.warn(t)}}}}).catch(n=>{throw on.create("idb-open",{originalErrorMessage:n.message})})),So}async function Hg(n){try{const t=(await ph()).transaction(rs),r=await t.objectStore(rs).get(gh(n));return await t.done,r}catch(e){if(e instanceof Bt)Nt.warn(e.message);else{const t=on.create("idb-get",{originalErrorMessage:e?.message});Nt.warn(t.message)}}}async function yc(n,e){try{const r=(await ph()).transaction(rs,"readwrite");await r.objectStore(rs).put(e,gh(n)),await r.done}catch(t){if(t instanceof Bt)Nt.warn(t.message);else{const r=on.create("idb-set",{originalErrorMessage:t?.message});Nt.warn(r.message)}}}function gh(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Gg=1024,Wg=30;class Kg{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Yg(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=vc();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats.length>Wg){const s=Jg(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Nt.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=vc(),{heartbeatsToSend:t,unsentEntries:r}=Qg(this._heartbeatsCache.heartbeats),s=ci(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return Nt.warn(e),""}}}function vc(){return new Date().toISOString().substring(0,10)}function Qg(n,e=Gg){const t=[];let r=n.slice();for(const s of n){const o=t.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),wc(t)>e){o.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),wc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Yg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Lp()?Op().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Hg(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return yc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return yc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function wc(n){return ci(JSON.stringify({version:2,heartbeats:n})).length}function Jg(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function Xg(n){sr(new Dn("platform-logger",e=>new ug(e),"PRIVATE")),sr(new Dn("heartbeat",e=>new Kg(e),"PRIVATE")),an($o,gc,n),an($o,gc,"esm2020"),an("fire-js","")}Xg("");var Zg="firebase",em="12.3.0";/**
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
 */an(Zg,em,"app");var bc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ln,mh;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,m){function _(){}_.prototype=m.prototype,T.F=m.prototype,T.prototype=new _,T.prototype.constructor=T,T.D=function(E,b,A){for(var v=Array(arguments.length-2),Ae=2;Ae<arguments.length;Ae++)v[Ae-2]=arguments[Ae];return m.prototype[b].apply(E,v)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,m,_){_||(_=0);const E=Array(16);if(typeof m=="string")for(var b=0;b<16;++b)E[b]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(b=0;b<16;++b)E[b]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=T.g[0],_=T.g[1],b=T.g[2];let A=T.g[3],v;v=m+(A^_&(b^A))+E[0]+3614090360&4294967295,m=_+(v<<7&4294967295|v>>>25),v=A+(b^m&(_^b))+E[1]+3905402710&4294967295,A=m+(v<<12&4294967295|v>>>20),v=b+(_^A&(m^_))+E[2]+606105819&4294967295,b=A+(v<<17&4294967295|v>>>15),v=_+(m^b&(A^m))+E[3]+3250441966&4294967295,_=b+(v<<22&4294967295|v>>>10),v=m+(A^_&(b^A))+E[4]+4118548399&4294967295,m=_+(v<<7&4294967295|v>>>25),v=A+(b^m&(_^b))+E[5]+1200080426&4294967295,A=m+(v<<12&4294967295|v>>>20),v=b+(_^A&(m^_))+E[6]+2821735955&4294967295,b=A+(v<<17&4294967295|v>>>15),v=_+(m^b&(A^m))+E[7]+4249261313&4294967295,_=b+(v<<22&4294967295|v>>>10),v=m+(A^_&(b^A))+E[8]+1770035416&4294967295,m=_+(v<<7&4294967295|v>>>25),v=A+(b^m&(_^b))+E[9]+2336552879&4294967295,A=m+(v<<12&4294967295|v>>>20),v=b+(_^A&(m^_))+E[10]+4294925233&4294967295,b=A+(v<<17&4294967295|v>>>15),v=_+(m^b&(A^m))+E[11]+2304563134&4294967295,_=b+(v<<22&4294967295|v>>>10),v=m+(A^_&(b^A))+E[12]+1804603682&4294967295,m=_+(v<<7&4294967295|v>>>25),v=A+(b^m&(_^b))+E[13]+4254626195&4294967295,A=m+(v<<12&4294967295|v>>>20),v=b+(_^A&(m^_))+E[14]+2792965006&4294967295,b=A+(v<<17&4294967295|v>>>15),v=_+(m^b&(A^m))+E[15]+1236535329&4294967295,_=b+(v<<22&4294967295|v>>>10),v=m+(b^A&(_^b))+E[1]+4129170786&4294967295,m=_+(v<<5&4294967295|v>>>27),v=A+(_^b&(m^_))+E[6]+3225465664&4294967295,A=m+(v<<9&4294967295|v>>>23),v=b+(m^_&(A^m))+E[11]+643717713&4294967295,b=A+(v<<14&4294967295|v>>>18),v=_+(A^m&(b^A))+E[0]+3921069994&4294967295,_=b+(v<<20&4294967295|v>>>12),v=m+(b^A&(_^b))+E[5]+3593408605&4294967295,m=_+(v<<5&4294967295|v>>>27),v=A+(_^b&(m^_))+E[10]+38016083&4294967295,A=m+(v<<9&4294967295|v>>>23),v=b+(m^_&(A^m))+E[15]+3634488961&4294967295,b=A+(v<<14&4294967295|v>>>18),v=_+(A^m&(b^A))+E[4]+3889429448&4294967295,_=b+(v<<20&4294967295|v>>>12),v=m+(b^A&(_^b))+E[9]+568446438&4294967295,m=_+(v<<5&4294967295|v>>>27),v=A+(_^b&(m^_))+E[14]+3275163606&4294967295,A=m+(v<<9&4294967295|v>>>23),v=b+(m^_&(A^m))+E[3]+4107603335&4294967295,b=A+(v<<14&4294967295|v>>>18),v=_+(A^m&(b^A))+E[8]+1163531501&4294967295,_=b+(v<<20&4294967295|v>>>12),v=m+(b^A&(_^b))+E[13]+2850285829&4294967295,m=_+(v<<5&4294967295|v>>>27),v=A+(_^b&(m^_))+E[2]+4243563512&4294967295,A=m+(v<<9&4294967295|v>>>23),v=b+(m^_&(A^m))+E[7]+1735328473&4294967295,b=A+(v<<14&4294967295|v>>>18),v=_+(A^m&(b^A))+E[12]+2368359562&4294967295,_=b+(v<<20&4294967295|v>>>12),v=m+(_^b^A)+E[5]+4294588738&4294967295,m=_+(v<<4&4294967295|v>>>28),v=A+(m^_^b)+E[8]+2272392833&4294967295,A=m+(v<<11&4294967295|v>>>21),v=b+(A^m^_)+E[11]+1839030562&4294967295,b=A+(v<<16&4294967295|v>>>16),v=_+(b^A^m)+E[14]+4259657740&4294967295,_=b+(v<<23&4294967295|v>>>9),v=m+(_^b^A)+E[1]+2763975236&4294967295,m=_+(v<<4&4294967295|v>>>28),v=A+(m^_^b)+E[4]+1272893353&4294967295,A=m+(v<<11&4294967295|v>>>21),v=b+(A^m^_)+E[7]+4139469664&4294967295,b=A+(v<<16&4294967295|v>>>16),v=_+(b^A^m)+E[10]+3200236656&4294967295,_=b+(v<<23&4294967295|v>>>9),v=m+(_^b^A)+E[13]+681279174&4294967295,m=_+(v<<4&4294967295|v>>>28),v=A+(m^_^b)+E[0]+3936430074&4294967295,A=m+(v<<11&4294967295|v>>>21),v=b+(A^m^_)+E[3]+3572445317&4294967295,b=A+(v<<16&4294967295|v>>>16),v=_+(b^A^m)+E[6]+76029189&4294967295,_=b+(v<<23&4294967295|v>>>9),v=m+(_^b^A)+E[9]+3654602809&4294967295,m=_+(v<<4&4294967295|v>>>28),v=A+(m^_^b)+E[12]+3873151461&4294967295,A=m+(v<<11&4294967295|v>>>21),v=b+(A^m^_)+E[15]+530742520&4294967295,b=A+(v<<16&4294967295|v>>>16),v=_+(b^A^m)+E[2]+3299628645&4294967295,_=b+(v<<23&4294967295|v>>>9),v=m+(b^(_|~A))+E[0]+4096336452&4294967295,m=_+(v<<6&4294967295|v>>>26),v=A+(_^(m|~b))+E[7]+1126891415&4294967295,A=m+(v<<10&4294967295|v>>>22),v=b+(m^(A|~_))+E[14]+2878612391&4294967295,b=A+(v<<15&4294967295|v>>>17),v=_+(A^(b|~m))+E[5]+4237533241&4294967295,_=b+(v<<21&4294967295|v>>>11),v=m+(b^(_|~A))+E[12]+1700485571&4294967295,m=_+(v<<6&4294967295|v>>>26),v=A+(_^(m|~b))+E[3]+2399980690&4294967295,A=m+(v<<10&4294967295|v>>>22),v=b+(m^(A|~_))+E[10]+4293915773&4294967295,b=A+(v<<15&4294967295|v>>>17),v=_+(A^(b|~m))+E[1]+2240044497&4294967295,_=b+(v<<21&4294967295|v>>>11),v=m+(b^(_|~A))+E[8]+1873313359&4294967295,m=_+(v<<6&4294967295|v>>>26),v=A+(_^(m|~b))+E[15]+4264355552&4294967295,A=m+(v<<10&4294967295|v>>>22),v=b+(m^(A|~_))+E[6]+2734768916&4294967295,b=A+(v<<15&4294967295|v>>>17),v=_+(A^(b|~m))+E[13]+1309151649&4294967295,_=b+(v<<21&4294967295|v>>>11),v=m+(b^(_|~A))+E[4]+4149444226&4294967295,m=_+(v<<6&4294967295|v>>>26),v=A+(_^(m|~b))+E[11]+3174756917&4294967295,A=m+(v<<10&4294967295|v>>>22),v=b+(m^(A|~_))+E[2]+718787259&4294967295,b=A+(v<<15&4294967295|v>>>17),v=_+(A^(b|~m))+E[9]+3951481745&4294967295,T.g[0]=T.g[0]+m&4294967295,T.g[1]=T.g[1]+(b+(v<<21&4294967295|v>>>11))&4294967295,T.g[2]=T.g[2]+b&4294967295,T.g[3]=T.g[3]+A&4294967295}r.prototype.v=function(T,m){m===void 0&&(m=T.length);const _=m-this.blockSize,E=this.C;let b=this.h,A=0;for(;A<m;){if(b==0)for(;A<=_;)s(this,T,A),A+=this.blockSize;if(typeof T=="string"){for(;A<m;)if(E[b++]=T.charCodeAt(A++),b==this.blockSize){s(this,E),b=0;break}}else for(;A<m;)if(E[b++]=T[A++],b==this.blockSize){s(this,E),b=0;break}}this.h=b,this.o+=m},r.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var m=1;m<T.length-8;++m)T[m]=0;m=this.o*8;for(var _=T.length-8;_<T.length;++_)T[_]=m&255,m/=256;for(this.v(T),T=Array(16),m=0,_=0;_<4;++_)for(let E=0;E<32;E+=8)T[m++]=this.g[_]>>>E&255;return T};function o(T,m){var _=c;return Object.prototype.hasOwnProperty.call(_,T)?_[T]:_[T]=m(T)}function a(T,m){this.h=m;const _=[];let E=!0;for(let b=T.length-1;b>=0;b--){const A=T[b]|0;E&&A==m||(_[b]=A,E=!1)}this.g=_}var c={};function u(T){return-128<=T&&T<128?o(T,function(m){return new a([m|0],m<0?-1:0)}):new a([T|0],T<0?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return y;if(T<0)return S(d(-T));const m=[];let _=1;for(let E=0;T>=_;E++)m[E]=T/_|0,_*=4294967296;return new a(m,0)}function g(T,m){if(T.length==0)throw Error("number format error: empty string");if(m=m||10,m<2||36<m)throw Error("radix out of range: "+m);if(T.charAt(0)=="-")return S(g(T.substring(1),m));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=d(Math.pow(m,8));let E=y;for(let A=0;A<T.length;A+=8){var b=Math.min(8,T.length-A);const v=parseInt(T.substring(A,A+b),m);b<8?(b=d(Math.pow(m,b)),E=E.j(b).add(d(v))):(E=E.j(_),E=E.add(d(v)))}return E}var y=u(0),I=u(1),P=u(16777216);n=a.prototype,n.m=function(){if(D(this))return-S(this).m();let T=0,m=1;for(let _=0;_<this.g.length;_++){const E=this.i(_);T+=(E>=0?E:4294967296+E)*m,m*=4294967296}return T},n.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(N(this))return"0";if(D(this))return"-"+S(this).toString(T);const m=d(Math.pow(T,6));var _=this;let E="";for(;;){const b=we(_,m).g;_=L(_,b.j(m));let A=((_.g.length>0?_.g[0]:_.h)>>>0).toString(T);if(_=b,N(_))return A+E;for(;A.length<6;)A="0"+A;E=A+E}},n.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function N(T){if(T.h!=0)return!1;for(let m=0;m<T.g.length;m++)if(T.g[m]!=0)return!1;return!0}function D(T){return T.h==-1}n.l=function(T){return T=L(this,T),D(T)?-1:N(T)?0:1};function S(T){const m=T.g.length,_=[];for(let E=0;E<m;E++)_[E]=~T.g[E];return new a(_,~T.h).add(I)}n.abs=function(){return D(this)?S(this):this},n.add=function(T){const m=Math.max(this.g.length,T.g.length),_=[];let E=0;for(let b=0;b<=m;b++){let A=E+(this.i(b)&65535)+(T.i(b)&65535),v=(A>>>16)+(this.i(b)>>>16)+(T.i(b)>>>16);E=v>>>16,A&=65535,v&=65535,_[b]=v<<16|A}return new a(_,_[_.length-1]&-2147483648?-1:0)};function L(T,m){return T.add(S(m))}n.j=function(T){if(N(this)||N(T))return y;if(D(this))return D(T)?S(this).j(S(T)):S(S(this).j(T));if(D(T))return S(this.j(S(T)));if(this.l(P)<0&&T.l(P)<0)return d(this.m()*T.m());const m=this.g.length+T.g.length,_=[];for(var E=0;E<2*m;E++)_[E]=0;for(E=0;E<this.g.length;E++)for(let b=0;b<T.g.length;b++){const A=this.i(E)>>>16,v=this.i(E)&65535,Ae=T.i(b)>>>16,De=T.i(b)&65535;_[2*E+2*b]+=v*De,W(_,2*E+2*b),_[2*E+2*b+1]+=A*De,W(_,2*E+2*b+1),_[2*E+2*b+1]+=v*Ae,W(_,2*E+2*b+1),_[2*E+2*b+2]+=A*Ae,W(_,2*E+2*b+2)}for(T=0;T<m;T++)_[T]=_[2*T+1]<<16|_[2*T];for(T=m;T<2*m;T++)_[T]=0;return new a(_,0)};function W(T,m){for(;(T[m]&65535)!=T[m];)T[m+1]+=T[m]>>>16,T[m]&=65535,m++}function ee(T,m){this.g=T,this.h=m}function we(T,m){if(N(m))throw Error("division by zero");if(N(T))return new ee(y,y);if(D(T))return m=we(S(T),m),new ee(S(m.g),S(m.h));if(D(m))return m=we(T,S(m)),new ee(S(m.g),m.h);if(T.g.length>30){if(D(T)||D(m))throw Error("slowDivide_ only works with positive integers.");for(var _=I,E=m;E.l(T)<=0;)_=xe(_),E=xe(E);var b=ge(_,1),A=ge(E,1);for(E=ge(E,2),_=ge(_,2);!N(E);){var v=A.add(E);v.l(T)<=0&&(b=b.add(_),A=v),E=ge(E,1),_=ge(_,1)}return m=L(T,b.j(m)),new ee(b,m)}for(b=y;T.l(m)>=0;){for(_=Math.max(1,Math.floor(T.m()/m.m())),E=Math.ceil(Math.log(_)/Math.LN2),E=E<=48?1:Math.pow(2,E-48),A=d(_),v=A.j(m);D(v)||v.l(T)>0;)_-=E,A=d(_),v=A.j(m);N(A)&&(A=I),b=b.add(A),T=L(T,v)}return new ee(b,T)}n.B=function(T){return we(this,T).h},n.and=function(T){const m=Math.max(this.g.length,T.g.length),_=[];for(let E=0;E<m;E++)_[E]=this.i(E)&T.i(E);return new a(_,this.h&T.h)},n.or=function(T){const m=Math.max(this.g.length,T.g.length),_=[];for(let E=0;E<m;E++)_[E]=this.i(E)|T.i(E);return new a(_,this.h|T.h)},n.xor=function(T){const m=Math.max(this.g.length,T.g.length),_=[];for(let E=0;E<m;E++)_[E]=this.i(E)^T.i(E);return new a(_,this.h^T.h)};function xe(T){const m=T.g.length+1,_=[];for(let E=0;E<m;E++)_[E]=T.i(E)<<1|T.i(E-1)>>>31;return new a(_,T.h)}function ge(T,m){const _=m>>5;m%=32;const E=T.g.length-_,b=[];for(let A=0;A<E;A++)b[A]=m>0?T.i(A+_)>>>m|T.i(A+_+1)<<32-m:T.i(A+_);return new a(b,T.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,mh=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=g,ln=a}).apply(typeof bc<"u"?bc:typeof self<"u"?self:typeof window<"u"?window:{});var Bs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _h,Hr,yh,Ys,Ho,vh,wh,bh;(function(){var n,e=Object.defineProperty;function t(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Bs=="object"&&Bs];for(var l=0;l<i.length;++l){var h=i[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function s(i,l){if(l)e:{var h=r;i=i.split(".");for(var p=0;p<i.length-1;p++){var R=i[p];if(!(R in h))break e;h=h[R]}i=i[i.length-1],p=h[i],l=l(p),l!=p&&l!=null&&e(h,i,{configurable:!0,writable:!0,value:l})}}s("Symbol.dispose",function(i){return i||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(i){return i||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(i){return i||function(l){var h=[],p;for(p in l)Object.prototype.hasOwnProperty.call(l,p)&&h.push([p,l[p]]);return h}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(i){var l=typeof i;return l=="object"&&i!=null||l=="function"}function u(i,l,h){return i.call.apply(i.bind,arguments)}function d(i,l,h){return d=u,d.apply(null,arguments)}function g(i,l){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),i.apply(this,p)}}function y(i,l){function h(){}h.prototype=l.prototype,i.Z=l.prototype,i.prototype=new h,i.prototype.constructor=i,i.Ob=function(p,R,k){for(var U=Array(arguments.length-2),le=2;le<arguments.length;le++)U[le-2]=arguments[le];return l.prototype[R].apply(p,U)}}var I=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?i=>i&&AsyncContext.Snapshot.wrap(i):i=>i;function P(i){const l=i.length;if(l>0){const h=Array(l);for(let p=0;p<l;p++)h[p]=i[p];return h}return[]}function N(i,l){for(let p=1;p<arguments.length;p++){const R=arguments[p];var h=typeof R;if(h=h!="object"?h:R?Array.isArray(R)?"array":h:"null",h=="array"||h=="object"&&typeof R.length=="number"){h=i.length||0;const k=R.length||0;i.length=h+k;for(let U=0;U<k;U++)i[h+U]=R[U]}else i.push(R)}}class D{constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return this.h>0?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function S(i){a.setTimeout(()=>{throw i},0)}function L(){var i=T;let l=null;return i.g&&(l=i.g,i.g=i.g.next,i.g||(i.h=null),l.next=null),l}class W{constructor(){this.h=this.g=null}add(l,h){const p=ee.get();p.set(l,h),this.h?this.h.next=p:this.g=p,this.h=p}}var ee=new D(()=>new we,i=>i.reset());class we{constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let xe,ge=!1,T=new W,m=()=>{const i=Promise.resolve(void 0);xe=()=>{i.then(_)}};function _(){for(var i;i=L();){try{i.h.call(i.g)}catch(h){S(h)}var l=ee;l.j(i),l.h<100&&(l.h++,i.next=l.g,l.g=i)}ge=!1}function E(){this.u=this.u,this.C=this.C}E.prototype.u=!1,E.prototype.dispose=function(){this.u||(this.u=!0,this.N())},E.prototype[Symbol.dispose]=function(){this.dispose()},E.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function b(i,l){this.type=i,this.g=this.target=l,this.defaultPrevented=!1}b.prototype.h=function(){this.defaultPrevented=!0};var A=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var i=!1,l=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const h=()=>{};a.addEventListener("test",h,l),a.removeEventListener("test",h,l)}catch{}return i})();function v(i){return/^[\s\xa0]*$/.test(i)}function Ae(i,l){b.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i&&this.init(i,l)}y(Ae,b),Ae.prototype.init=function(i,l){const h=this.type=i.type,p=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;this.target=i.target||i.srcElement,this.g=l,l=i.relatedTarget,l||(h=="mouseover"?l=i.fromElement:h=="mouseout"&&(l=i.toElement)),this.relatedTarget=l,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=i.pointerType,this.state=i.state,this.i=i,i.defaultPrevented&&Ae.Z.h.call(this)},Ae.prototype.h=function(){Ae.Z.h.call(this);const i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var De="closure_listenable_"+(Math.random()*1e6|0),Rt=0;function Ir(i,l,h,p,R){this.listener=i,this.proxy=null,this.src=l,this.type=h,this.capture=!!p,this.ha=R,this.key=++Rt,this.da=this.fa=!1}function Ht(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function Gt(i,l,h){for(const p in i)l.call(h,i[p],p,i)}function x(i,l){for(const h in i)l.call(void 0,i[h],h,i)}function C(i){const l={};for(const h in i)l[h]=i[h];return l}const J="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function te(i,l){let h,p;for(let R=1;R<arguments.length;R++){p=arguments[R];for(h in p)i[h]=p[h];for(let k=0;k<J.length;k++)h=J[k],Object.prototype.hasOwnProperty.call(p,h)&&(i[h]=p[h])}}function se(i){this.src=i,this.g={},this.h=0}se.prototype.add=function(i,l,h,p,R){const k=i.toString();i=this.g[k],i||(i=this.g[k]=[],this.h++);const U=w(i,l,p,R);return U>-1?(l=i[U],h||(l.fa=!1)):(l=new Ir(l,this.src,k,!!p,R),l.fa=h,i.push(l)),l};function F(i,l){const h=l.type;if(h in i.g){var p=i.g[h],R=Array.prototype.indexOf.call(p,l,void 0),k;(k=R>=0)&&Array.prototype.splice.call(p,R,1),k&&(Ht(l),i.g[h].length==0&&(delete i.g[h],i.h--))}}function w(i,l,h,p){for(let R=0;R<i.length;++R){const k=i[R];if(!k.da&&k.listener==l&&k.capture==!!h&&k.ha==p)return R}return-1}var z="closure_lm_"+(Math.random()*1e6|0),X={};function O(i,l,h,p,R){if(Array.isArray(l)){for(let k=0;k<l.length;k++)O(i,l[k],h,p,R);return null}return h=ut(h),i&&i[De]?i.J(l,h,c(p)?!!p.capture:!1,R):K(i,l,h,!1,p,R)}function K(i,l,h,p,R,k){if(!l)throw Error("Invalid event type");const U=c(R)?!!R.capture:!!R;let le=Ze(i);if(le||(i[z]=le=new se(i)),h=le.add(l,h,p,U,k),h.proxy)return h;if(p=H(),h.proxy=p,p.src=i,p.listener=h,i.addEventListener)A||(R=U),R===void 0&&(R=!1),i.addEventListener(l.toString(),p,R);else if(i.attachEvent)i.attachEvent(ce(l.toString()),p);else if(i.addListener&&i.removeListener)i.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function H(){function i(h){return l.call(i.src,i.listener,h)}const l=Ke;return i}function Te(i,l,h,p,R){if(Array.isArray(l))for(var k=0;k<l.length;k++)Te(i,l[k],h,p,R);else p=c(p)?!!p.capture:!!p,h=ut(h),i&&i[De]?(i=i.i,k=String(l).toString(),k in i.g&&(l=i.g[k],h=w(l,h,p,R),h>-1&&(Ht(l[h]),Array.prototype.splice.call(l,h,1),l.length==0&&(delete i.g[k],i.h--)))):i&&(i=Ze(i))&&(l=i.g[l.toString()],i=-1,l&&(i=w(l,h,p,R)),(h=i>-1?l[i]:null)&&Ve(h))}function Ve(i){if(typeof i!="number"&&i&&!i.da){var l=i.src;if(l&&l[De])F(l.i,i);else{var h=i.type,p=i.proxy;l.removeEventListener?l.removeEventListener(h,p,i.capture):l.detachEvent?l.detachEvent(ce(h),p):l.addListener&&l.removeListener&&l.removeListener(p),(h=Ze(l))?(F(h,i),h.h==0&&(h.src=null,l[z]=null)):Ht(i)}}}function ce(i){return i in X?X[i]:X[i]="on"+i}function Ke(i,l){if(i.da)i=!0;else{l=new Ae(l,this);const h=i.listener,p=i.ha||i.src;i.fa&&Ve(i),i=h.call(p,l)}return i}function Ze(i){return i=i[z],i instanceof se?i:null}var et="__closure_events_fn_"+(Math.random()*1e9>>>0);function ut(i){return typeof i=="function"?i:(i[et]||(i[et]=function(l){return i.handleEvent(l)}),i[et])}function Re(){E.call(this),this.i=new se(this),this.M=this,this.G=null}y(Re,E),Re.prototype[De]=!0,Re.prototype.removeEventListener=function(i,l,h,p){Te(this,i,l,h,p)};function be(i,l){var h,p=i.G;if(p)for(h=[];p;p=p.G)h.push(p);if(i=i.M,p=l.type||l,typeof l=="string")l=new b(l,i);else if(l instanceof b)l.target=l.target||i;else{var R=l;l=new b(p,i),te(l,R)}R=!0;let k,U;if(h)for(U=h.length-1;U>=0;U--)k=l.g=h[U],R=$n(k,p,!0,l)&&R;if(k=l.g=i,R=$n(k,p,!0,l)&&R,R=$n(k,p,!1,l)&&R,h)for(U=0;U<h.length;U++)k=l.g=h[U],R=$n(k,p,!1,l)&&R}Re.prototype.N=function(){if(Re.Z.N.call(this),this.i){var i=this.i;for(const l in i.g){const h=i.g[l];for(let p=0;p<h.length;p++)Ht(h[p]);delete i.g[l],i.h--}}this.G=null},Re.prototype.J=function(i,l,h,p){return this.i.add(String(i),l,!1,h,p)},Re.prototype.K=function(i,l,h,p){return this.i.add(String(i),l,!0,h,p)};function $n(i,l,h,p){if(l=i.i.g[String(l)],!l)return!0;l=l.concat();let R=!0;for(let k=0;k<l.length;++k){const U=l[k];if(U&&!U.da&&U.capture==h){const le=U.listener,Fe=U.ha||U.src;U.fa&&F(i.i,U),R=le.call(Fe,p)!==!1&&R}}return R&&!p.defaultPrevented}function oo(i,l){if(typeof i!="function")if(i&&typeof i.handleEvent=="function")i=d(i.handleEvent,i);else throw Error("Invalid listener argument");return Number(l)>2147483647?-1:a.setTimeout(i,l||0)}function Ts(i){i.g=oo(()=>{i.g=null,i.i&&(i.i=!1,Ts(i))},i.l);const l=i.h;i.h=null,i.m.apply(null,l)}class Is extends E{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Ts(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function yn(i){E.call(this),this.h=i,this.g={}}y(yn,E);var Cr=[];function Cs(i){Gt(i.g,function(l,h){this.g.hasOwnProperty(h)&&Ve(l)},i),i.g={}}yn.prototype.N=function(){yn.Z.N.call(this),Cs(this)},yn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ar=a.JSON.stringify,As=a.JSON.parse,Rs=class{stringify(i){return a.JSON.stringify(i,void 0)}parse(i){return a.JSON.parse(i,void 0)}};function qn(){}function Ss(){}var vn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ao(){b.call(this,"d")}y(ao,b);function lo(){b.call(this,"c")}y(lo,b);var wn={},vl=null;function xs(){return vl=vl||new Re}wn.Ia="serverreachability";function wl(i){b.call(this,wn.Ia,i)}y(wl,b);function Rr(i){const l=xs();be(l,new wl(l))}wn.STAT_EVENT="statevent";function bl(i,l){b.call(this,wn.STAT_EVENT,i),this.stat=l}y(bl,b);function tt(i){const l=xs();be(l,new bl(l,i))}wn.Ja="timingevent";function El(i,l){b.call(this,wn.Ja,i),this.size=l}y(El,b);function Sr(i,l){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){i()},l)}function xr(){this.g=!0}xr.prototype.ua=function(){this.g=!1};function Ff(i,l,h,p,R,k){i.info(function(){if(i.g)if(k){var U="",le=k.split("&");for(let ve=0;ve<le.length;ve++){var Fe=le[ve].split("=");if(Fe.length>1){const $e=Fe[0];Fe=Fe[1];const yt=$e.split("_");U=yt.length>=2&&yt[1]=="type"?U+($e+"="+Fe+"&"):U+($e+"=redacted&")}}}else U=null;else U=k;return"XMLHTTP REQ ("+p+") [attempt "+R+"]: "+l+`
`+h+`
`+U})}function Uf(i,l,h,p,R,k,U){i.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+R+"]: "+l+`
`+h+`
`+k+" "+U})}function zn(i,l,h,p){i.info(function(){return"XMLHTTP TEXT ("+l+"): "+jf(i,h)+(p?" "+p:"")})}function Bf(i,l){i.info(function(){return"TIMEOUT: "+l})}xr.prototype.info=function(){};function jf(i,l){if(!i.g)return l;if(!l)return null;try{const k=JSON.parse(l);if(k){for(i=0;i<k.length;i++)if(Array.isArray(k[i])){var h=k[i];if(!(h.length<2)){var p=h[1];if(Array.isArray(p)&&!(p.length<1)){var R=p[0];if(R!="noop"&&R!="stop"&&R!="close")for(let U=1;U<p.length;U++)p[U]=""}}}}return Ar(k)}catch{return l}}var ks={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Tl={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Il;function co(){}y(co,qn),co.prototype.g=function(){return new XMLHttpRequest},Il=new co;function kr(i){return encodeURIComponent(String(i))}function $f(i){var l=1;i=i.split(":");const h=[];for(;l>0&&i.length;)h.push(i.shift()),l--;return i.length&&h.push(i.join(":")),h}function Wt(i,l,h,p){this.j=i,this.i=l,this.l=h,this.S=p||1,this.V=new yn(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Cl}function Cl(){this.i=null,this.g="",this.h=!1}var Al={},uo={};function ho(i,l,h){i.M=1,i.A=Vs(_t(l)),i.u=h,i.R=!0,Rl(i,null)}function Rl(i,l){i.F=Date.now(),Ps(i),i.B=_t(i.A);var h=i.B,p=i.S;Array.isArray(p)||(p=[String(p)]),Bl(h.i,"t",p),i.C=0,h=i.j.L,i.h=new Cl,i.g=sc(i.j,h?l:null,!i.u),i.P>0&&(i.O=new Is(d(i.Y,i,i.g),i.P)),l=i.V,h=i.g,p=i.ba;var R="readystatechange";Array.isArray(R)||(R&&(Cr[0]=R.toString()),R=Cr);for(let k=0;k<R.length;k++){const U=O(h,R[k],p||l.handleEvent,!1,l.h||l);if(!U)break;l.g[U.key]=U}l=i.J?C(i.J):{},i.u?(i.v||(i.v="POST"),l["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.B,i.v,i.u,l)):(i.v="GET",i.g.ea(i.B,i.v,null,l)),Rr(),Ff(i.i,i.v,i.B,i.l,i.S,i.u)}Wt.prototype.ba=function(i){i=i.target;const l=this.O;l&&Yt(i)==3?l.j():this.Y(i)},Wt.prototype.Y=function(i){try{if(i==this.g)e:{const le=Yt(this.g),Fe=this.g.ya(),ve=this.g.ca();if(!(le<3)&&(le!=3||this.g&&(this.h.h||this.g.la()||Wl(this.g)))){this.K||le!=4||Fe==7||(Fe==8||ve<=0?Rr(3):Rr(2)),fo(this);var l=this.g.ca();this.X=l;var h=qf(this);if(this.o=l==200,Uf(this.i,this.v,this.B,this.l,this.S,le,l),this.o){if(this.U&&!this.L){t:{if(this.g){var p,R=this.g;if((p=R.g?R.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(p)){var k=p;break t}}k=null}if(i=k)zn(this.i,this.l,i,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,po(this,i);else{this.o=!1,this.m=3,tt(12),bn(this),Pr(this);break e}}if(this.R){i=!0;let $e;for(;!this.K&&this.C<h.length;)if($e=zf(this,h),$e==uo){le==4&&(this.m=4,tt(14),i=!1),zn(this.i,this.l,null,"[Incomplete Response]");break}else if($e==Al){this.m=4,tt(15),zn(this.i,this.l,h,"[Invalid Chunk]"),i=!1;break}else zn(this.i,this.l,$e,null),po(this,$e);if(Sl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),le!=4||h.length!=0||this.h.h||(this.m=1,tt(16),i=!1),this.o=this.o&&i,!i)zn(this.i,this.l,h,"[Invalid Chunked Response]"),bn(this),Pr(this);else if(h.length>0&&!this.W){this.W=!0;var U=this.j;U.g==this&&U.aa&&!U.P&&(U.j.info("Great, no buffering proxy detected. Bytes received: "+h.length),Eo(U),U.P=!0,tt(11))}}else zn(this.i,this.l,h,null),po(this,h);le==4&&bn(this),this.o&&!this.K&&(le==4?ec(this.j,this):(this.o=!1,Ps(this)))}else sp(this.g),l==400&&h.indexOf("Unknown SID")>0?(this.m=3,tt(12)):(this.m=0,tt(13)),bn(this),Pr(this)}}}catch{}finally{}};function qf(i){if(!Sl(i))return i.g.la();const l=Wl(i.g);if(l==="")return"";let h="";const p=l.length,R=Yt(i.g)==4;if(!i.h.i){if(typeof TextDecoder>"u")return bn(i),Pr(i),"";i.h.i=new a.TextDecoder}for(let k=0;k<p;k++)i.h.h=!0,h+=i.h.i.decode(l[k],{stream:!(R&&k==p-1)});return l.length=0,i.h.g+=h,i.C=0,i.h.g}function Sl(i){return i.g?i.v=="GET"&&i.M!=2&&i.j.Aa:!1}function zf(i,l){var h=i.C,p=l.indexOf(`
`,h);return p==-1?uo:(h=Number(l.substring(h,p)),isNaN(h)?Al:(p+=1,p+h>l.length?uo:(l=l.slice(p,p+h),i.C=p+h,l)))}Wt.prototype.cancel=function(){this.K=!0,bn(this)};function Ps(i){i.T=Date.now()+i.H,xl(i,i.H)}function xl(i,l){if(i.D!=null)throw Error("WatchDog timer not null");i.D=Sr(d(i.aa,i),l)}function fo(i){i.D&&(a.clearTimeout(i.D),i.D=null)}Wt.prototype.aa=function(){this.D=null;const i=Date.now();i-this.T>=0?(Bf(this.i,this.B),this.M!=2&&(Rr(),tt(17)),bn(this),this.m=2,Pr(this)):xl(this,this.T-i)};function Pr(i){i.j.I==0||i.K||ec(i.j,i)}function bn(i){fo(i);var l=i.O;l&&typeof l.dispose=="function"&&l.dispose(),i.O=null,Cs(i.V),i.g&&(l=i.g,i.g=null,l.abort(),l.dispose())}function po(i,l){try{var h=i.j;if(h.I!=0&&(h.g==i||go(h.h,i))){if(!i.L&&go(h.h,i)&&h.I==3){try{var p=h.Ba.g.parse(l)}catch{p=null}if(Array.isArray(p)&&p.length==3){var R=p;if(R[0]==0){e:if(!h.v){if(h.g)if(h.g.F+3e3<i.F)Os(h),Ns(h);else break e;bo(h),tt(18)}}else h.xa=R[1],0<h.xa-h.K&&R[2]<37500&&h.F&&h.A==0&&!h.C&&(h.C=Sr(d(h.Va,h),6e3));Vl(h.h)<=1&&h.ta&&(h.ta=void 0)}else Tn(h,11)}else if((i.L||h.g==i)&&Os(h),!v(l))for(R=h.Ba.g.parse(l),l=0;l<R.length;l++){let ve=R[l];const $e=ve[0];if(!($e<=h.K))if(h.K=$e,ve=ve[1],h.I==2)if(ve[0]=="c"){h.M=ve[1],h.ba=ve[2];const yt=ve[3];yt!=null&&(h.ka=yt,h.j.info("VER="+h.ka));const In=ve[4];In!=null&&(h.za=In,h.j.info("SVER="+h.za));const Jt=ve[5];Jt!=null&&typeof Jt=="number"&&Jt>0&&(p=1.5*Jt,h.O=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const Xt=i.g;if(Xt){const Us=Xt.g?Xt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Us){var k=p.h;k.g||Us.indexOf("spdy")==-1&&Us.indexOf("quic")==-1&&Us.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(mo(k,k.h),k.h=null))}if(p.G){const To=Xt.g?Xt.g.getResponseHeader("X-HTTP-Session-Id"):null;To&&(p.wa=To,Ie(p.J,p.G,To))}}h.I=3,h.l&&h.l.ra(),h.aa&&(h.T=Date.now()-i.F,h.j.info("Handshake RTT: "+h.T+"ms")),p=h;var U=i;if(p.na=rc(p,p.L?p.ba:null,p.W),U.L){Ml(p.h,U);var le=U,Fe=p.O;Fe&&(le.H=Fe),le.D&&(fo(le),Ps(le)),p.g=U}else Xl(p);h.i.length>0&&Ls(h)}else ve[0]!="stop"&&ve[0]!="close"||Tn(h,7);else h.I==3&&(ve[0]=="stop"||ve[0]=="close"?ve[0]=="stop"?Tn(h,7):wo(h):ve[0]!="noop"&&h.l&&h.l.qa(ve),h.A=0)}}Rr(4)}catch{}}var Hf=class{constructor(i,l){this.g=i,this.map=l}};function kl(i){this.l=i||10,a.PerformanceNavigationTiming?(i=a.performance.getEntriesByType("navigation"),i=i.length>0&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Pl(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Vl(i){return i.h?1:i.g?i.g.size:0}function go(i,l){return i.h?i.h==l:i.g?i.g.has(l):!1}function mo(i,l){i.g?i.g.add(l):i.h=l}function Ml(i,l){i.h&&i.h==l?i.h=null:i.g&&i.g.has(l)&&i.g.delete(l)}kl.prototype.cancel=function(){if(this.i=Dl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Dl(i){if(i.h!=null)return i.i.concat(i.h.G);if(i.g!=null&&i.g.size!==0){let l=i.i;for(const h of i.g.values())l=l.concat(h.G);return l}return P(i.i)}var Nl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Gf(i,l){if(i){i=i.split("&");for(let h=0;h<i.length;h++){const p=i[h].indexOf("=");let R,k=null;p>=0?(R=i[h].substring(0,p),k=i[h].substring(p+1)):R=i[h],l(R,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function Kt(i){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let l;i instanceof Kt?(this.l=i.l,Vr(this,i.j),this.o=i.o,this.g=i.g,Mr(this,i.u),this.h=i.h,_o(this,jl(i.i)),this.m=i.m):i&&(l=String(i).match(Nl))?(this.l=!1,Vr(this,l[1]||"",!0),this.o=Dr(l[2]||""),this.g=Dr(l[3]||"",!0),Mr(this,l[4]),this.h=Dr(l[5]||"",!0),_o(this,l[6]||"",!0),this.m=Dr(l[7]||"")):(this.l=!1,this.i=new Lr(null,this.l))}Kt.prototype.toString=function(){const i=[];var l=this.j;l&&i.push(Nr(l,Ll,!0),":");var h=this.g;return(h||l=="file")&&(i.push("//"),(l=this.o)&&i.push(Nr(l,Ll,!0),"@"),i.push(kr(h).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.u,h!=null&&i.push(":",String(h))),(h=this.h)&&(this.g&&h.charAt(0)!="/"&&i.push("/"),i.push(Nr(h,h.charAt(0)=="/"?Qf:Kf,!0))),(h=this.i.toString())&&i.push("?",h),(h=this.m)&&i.push("#",Nr(h,Jf)),i.join("")},Kt.prototype.resolve=function(i){const l=_t(this);let h=!!i.j;h?Vr(l,i.j):h=!!i.o,h?l.o=i.o:h=!!i.g,h?l.g=i.g:h=i.u!=null;var p=i.h;if(h)Mr(l,i.u);else if(h=!!i.h){if(p.charAt(0)!="/")if(this.g&&!this.h)p="/"+p;else{var R=l.h.lastIndexOf("/");R!=-1&&(p=l.h.slice(0,R+1)+p)}if(R=p,R==".."||R==".")p="";else if(R.indexOf("./")!=-1||R.indexOf("/.")!=-1){p=R.lastIndexOf("/",0)==0,R=R.split("/");const k=[];for(let U=0;U<R.length;){const le=R[U++];le=="."?p&&U==R.length&&k.push(""):le==".."?((k.length>1||k.length==1&&k[0]!="")&&k.pop(),p&&U==R.length&&k.push("")):(k.push(le),p=!0)}p=k.join("/")}else p=R}return h?l.h=p:h=i.i.toString()!=="",h?_o(l,jl(i.i)):h=!!i.m,h&&(l.m=i.m),l};function _t(i){return new Kt(i)}function Vr(i,l,h){i.j=h?Dr(l,!0):l,i.j&&(i.j=i.j.replace(/:$/,""))}function Mr(i,l){if(l){if(l=Number(l),isNaN(l)||l<0)throw Error("Bad port number "+l);i.u=l}else i.u=null}function _o(i,l,h){l instanceof Lr?(i.i=l,Xf(i.i,i.l)):(h||(l=Nr(l,Yf)),i.i=new Lr(l,i.l))}function Ie(i,l,h){i.i.set(l,h)}function Vs(i){return Ie(i,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),i}function Dr(i,l){return i?l?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Nr(i,l,h){return typeof i=="string"?(i=encodeURI(i).replace(l,Wf),h&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Wf(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var Ll=/[#\/\?@]/g,Kf=/[#\?:]/g,Qf=/[#\?]/g,Yf=/[#\?@]/g,Jf=/#/g;function Lr(i,l){this.h=this.g=null,this.i=i||null,this.j=!!l}function En(i){i.g||(i.g=new Map,i.h=0,i.i&&Gf(i.i,function(l,h){i.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}n=Lr.prototype,n.add=function(i,l){En(this),this.i=null,i=Hn(this,i);let h=this.g.get(i);return h||this.g.set(i,h=[]),h.push(l),this.h+=1,this};function Ol(i,l){En(i),l=Hn(i,l),i.g.has(l)&&(i.i=null,i.h-=i.g.get(l).length,i.g.delete(l))}function Fl(i,l){return En(i),l=Hn(i,l),i.g.has(l)}n.forEach=function(i,l){En(this),this.g.forEach(function(h,p){h.forEach(function(R){i.call(l,R,p,this)},this)},this)};function Ul(i,l){En(i);let h=[];if(typeof l=="string")Fl(i,l)&&(h=h.concat(i.g.get(Hn(i,l))));else for(i=Array.from(i.g.values()),l=0;l<i.length;l++)h=h.concat(i[l]);return h}n.set=function(i,l){return En(this),this.i=null,i=Hn(this,i),Fl(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[l]),this.h+=1,this},n.get=function(i,l){return i?(i=Ul(this,i),i.length>0?String(i[0]):l):l};function Bl(i,l,h){Ol(i,l),h.length>0&&(i.i=null,i.g.set(Hn(i,l),P(h)),i.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],l=Array.from(this.g.keys());for(let p=0;p<l.length;p++){var h=l[p];const R=kr(h);h=Ul(this,h);for(let k=0;k<h.length;k++){let U=R;h[k]!==""&&(U+="="+kr(h[k])),i.push(U)}}return this.i=i.join("&")};function jl(i){const l=new Lr;return l.i=i.i,i.g&&(l.g=new Map(i.g),l.h=i.h),l}function Hn(i,l){return l=String(l),i.j&&(l=l.toLowerCase()),l}function Xf(i,l){l&&!i.j&&(En(i),i.i=null,i.g.forEach(function(h,p){const R=p.toLowerCase();p!=R&&(Ol(this,p),Bl(this,R,h))},i)),i.j=l}function Zf(i,l){const h=new xr;if(a.Image){const p=new Image;p.onload=g(Qt,h,"TestLoadImage: loaded",!0,l,p),p.onerror=g(Qt,h,"TestLoadImage: error",!1,l,p),p.onabort=g(Qt,h,"TestLoadImage: abort",!1,l,p),p.ontimeout=g(Qt,h,"TestLoadImage: timeout",!1,l,p),a.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=i}else l(!1)}function ep(i,l){const h=new xr,p=new AbortController,R=setTimeout(()=>{p.abort(),Qt(h,"TestPingServer: timeout",!1,l)},1e4);fetch(i,{signal:p.signal}).then(k=>{clearTimeout(R),k.ok?Qt(h,"TestPingServer: ok",!0,l):Qt(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(R),Qt(h,"TestPingServer: error",!1,l)})}function Qt(i,l,h,p,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),p(h)}catch{}}function tp(){this.g=new Rs}function yo(i){this.i=i.Sb||null,this.h=i.ab||!1}y(yo,qn),yo.prototype.g=function(){return new Ms(this.i,this.h)};function Ms(i,l){Re.call(this),this.H=i,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}y(Ms,Re),n=Ms.prototype,n.open=function(i,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=i,this.D=l,this.readyState=1,Fr(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const l={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};i&&(l.body=i),(this.H||a).fetch(new Request(this.D,l)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Or(this)),this.readyState=0},n.Pa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,Fr(this)),this.g&&(this.readyState=3,Fr(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;$l(this)}else i.text().then(this.Oa.bind(this),this.ga.bind(this))};function $l(i){i.j.read().then(i.Ma.bind(i)).catch(i.ga.bind(i))}n.Ma=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var l=i.value?i.value:new Uint8Array(0);(l=this.B.decode(l,{stream:!i.done}))&&(this.response=this.responseText+=l)}i.done?Or(this):Fr(this),this.readyState==3&&$l(this)}},n.Oa=function(i){this.g&&(this.response=this.responseText=i,Or(this))},n.Na=function(i){this.g&&(this.response=i,Or(this))},n.ga=function(){this.g&&Or(this)};function Or(i){i.readyState=4,i.l=null,i.j=null,i.B=null,Fr(i)}n.setRequestHeader=function(i,l){this.A.append(i,l)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,i.push(h[0]+": "+h[1]),h=l.next();return i.join(`\r
`)};function Fr(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Ms.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function ql(i){let l="";return Gt(i,function(h,p){l+=p,l+=":",l+=h,l+=`\r
`}),l}function vo(i,l,h){e:{for(p in h){var p=!1;break e}p=!0}p||(h=ql(h),typeof i=="string"?h!=null&&kr(h):Ie(i,l,h))}function ke(i){Re.call(this),this.headers=new Map,this.L=i||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}y(ke,Re);var np=/^https?$/i,rp=["POST","PUT"];n=ke.prototype,n.Fa=function(i){this.H=i},n.ea=function(i,l,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);l=l?l.toUpperCase():"GET",this.D=i,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Il.g(),this.g.onreadystatechange=I(d(this.Ca,this));try{this.B=!0,this.g.open(l,String(i),!0),this.B=!1}catch(k){zl(this,k);return}if(i=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var R in p)h.set(R,p[R]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const k of p.keys())h.set(k,p.get(k));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(k=>k.toLowerCase()=="content-type"),R=a.FormData&&i instanceof a.FormData,!(Array.prototype.indexOf.call(rp,l,void 0)>=0)||p||R||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,U]of h)this.g.setRequestHeader(k,U);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(i),this.v=!1}catch(k){zl(this,k)}};function zl(i,l){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=l,i.o=5,Hl(i),Ds(i)}function Hl(i){i.A||(i.A=!0,be(i,"complete"),be(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=i||7,be(this,"complete"),be(this,"abort"),Ds(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ds(this,!0)),ke.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Gl(this):this.Xa())},n.Xa=function(){Gl(this)};function Gl(i){if(i.h&&typeof o<"u"){if(i.v&&Yt(i)==4)setTimeout(i.Ca.bind(i),0);else if(be(i,"readystatechange"),Yt(i)==4){i.h=!1;try{const k=i.ca();e:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var h;if(!(h=l)){var p;if(p=k===0){let U=String(i.D).match(Nl)[1]||null;!U&&a.self&&a.self.location&&(U=a.self.location.protocol.slice(0,-1)),p=!np.test(U?U.toLowerCase():"")}h=p}if(h)be(i,"complete"),be(i,"success");else{i.o=6;try{var R=Yt(i)>2?i.g.statusText:""}catch{R=""}i.l=R+" ["+i.ca()+"]",Hl(i)}}finally{Ds(i)}}}}function Ds(i,l){if(i.g){i.m&&(clearTimeout(i.m),i.m=null);const h=i.g;i.g=null,l||be(i,"ready");try{h.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Yt(i){return i.g?i.g.readyState:0}n.ca=function(){try{return Yt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(i){if(this.g){var l=this.g.responseText;return i&&l.indexOf(i)==0&&(l=l.substring(i.length)),As(l)}};function Wl(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.F){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function sp(i){const l={};i=(i.g&&Yt(i)>=2&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<i.length;p++){if(v(i[p]))continue;var h=$f(i[p]);const R=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const k=l[R]||[];l[R]=k,k.push(h)}x(l,function(p){return p.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ur(i,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[i]||l}function Kl(i){this.za=0,this.i=[],this.j=new xr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ur("failFast",!1,i),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ur("baseRetryDelayMs",5e3,i),this.Za=Ur("retryDelaySeedMs",1e4,i),this.Ta=Ur("forwardChannelMaxRetries",2,i),this.va=Ur("forwardChannelRequestTimeoutMs",2e4,i),this.ma=i&&i.xmlHttpFactory||void 0,this.Ua=i&&i.Rb||void 0,this.Aa=i&&i.useFetchStreams||!1,this.O=void 0,this.L=i&&i.supportsCrossDomainXhr||!1,this.M="",this.h=new kl(i&&i.concurrentRequestLimit),this.Ba=new tp,this.S=i&&i.fastHandshake||!1,this.R=i&&i.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=i&&i.Pb||!1,i&&i.ua&&this.j.ua(),i&&i.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&i&&i.detectBufferingProxy||!1,this.ia=void 0,i&&i.longPollingTimeout&&i.longPollingTimeout>0&&(this.ia=i.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Kl.prototype,n.ka=8,n.I=1,n.connect=function(i,l,h,p){tt(0),this.W=i,this.H=l||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.J=rc(this,null,this.W),Ls(this)};function wo(i){if(Ql(i),i.I==3){var l=i.V++,h=_t(i.J);if(Ie(h,"SID",i.M),Ie(h,"RID",l),Ie(h,"TYPE","terminate"),Br(i,h),l=new Wt(i,i.j,l),l.M=2,l.A=Vs(_t(h)),h=!1,a.navigator&&a.navigator.sendBeacon)try{h=a.navigator.sendBeacon(l.A.toString(),"")}catch{}!h&&a.Image&&(new Image().src=l.A,h=!0),h||(l.g=sc(l.j,null),l.g.ea(l.A)),l.F=Date.now(),Ps(l)}nc(i)}function Ns(i){i.g&&(Eo(i),i.g.cancel(),i.g=null)}function Ql(i){Ns(i),i.v&&(a.clearTimeout(i.v),i.v=null),Os(i),i.h.cancel(),i.m&&(typeof i.m=="number"&&a.clearTimeout(i.m),i.m=null)}function Ls(i){if(!Pl(i.h)&&!i.m){i.m=!0;var l=i.Ea;xe||m(),ge||(xe(),ge=!0),T.add(l,i),i.D=0}}function ip(i,l){return Vl(i.h)>=i.h.j-(i.m?1:0)?!1:i.m?(i.i=l.G.concat(i.i),!0):i.I==1||i.I==2||i.D>=(i.Sa?0:i.Ta)?!1:(i.m=Sr(d(i.Ea,i,l),tc(i,i.D)),i.D++,!0)}n.Ea=function(i){if(this.m)if(this.m=null,this.I==1){if(!i){this.V=Math.floor(Math.random()*1e5),i=this.V++;const R=new Wt(this,this.j,i);let k=this.o;if(this.U&&(k?(k=C(k),te(k,this.U)):k=this.U),this.u!==null||this.R||(R.J=k,k=null),this.S)e:{for(var l=0,h=0;h<this.i.length;h++){t:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(l+=p,l>4096){l=h;break e}if(l===4096||h===this.i.length-1){l=h+1;break e}}l=1e3}else l=1e3;l=Jl(this,R,l),h=_t(this.J),Ie(h,"RID",i),Ie(h,"CVER",22),this.G&&Ie(h,"X-HTTP-Session-Id",this.G),Br(this,h),k&&(this.R?l="headers="+kr(ql(k))+"&"+l:this.u&&vo(h,this.u,k)),mo(this.h,R),this.Ra&&Ie(h,"TYPE","init"),this.S?(Ie(h,"$req",l),Ie(h,"SID","null"),R.U=!0,ho(R,h,null)):ho(R,h,l),this.I=2}}else this.I==3&&(i?Yl(this,i):this.i.length==0||Pl(this.h)||Yl(this))};function Yl(i,l){var h;l?h=l.l:h=i.V++;const p=_t(i.J);Ie(p,"SID",i.M),Ie(p,"RID",h),Ie(p,"AID",i.K),Br(i,p),i.u&&i.o&&vo(p,i.u,i.o),h=new Wt(i,i.j,h,i.D+1),i.u===null&&(h.J=i.o),l&&(i.i=l.G.concat(i.i)),l=Jl(i,h,1e3),h.H=Math.round(i.va*.5)+Math.round(i.va*.5*Math.random()),mo(i.h,h),ho(h,p,l)}function Br(i,l){i.H&&Gt(i.H,function(h,p){Ie(l,p,h)}),i.l&&Gt({},function(h,p){Ie(l,p,h)})}function Jl(i,l,h){h=Math.min(i.i.length,h);const p=i.l?d(i.l.Ka,i.l,i):null;e:{var R=i.i;let le=-1;for(;;){const Fe=["count="+h];le==-1?h>0?(le=R[0].g,Fe.push("ofs="+le)):le=0:Fe.push("ofs="+le);let ve=!0;for(let $e=0;$e<h;$e++){var k=R[$e].g;const yt=R[$e].map;if(k-=le,k<0)le=Math.max(0,R[$e].g-100),ve=!1;else try{k="req"+k+"_"||"";try{var U=yt instanceof Map?yt:Object.entries(yt);for(const[In,Jt]of U){let Xt=Jt;c(Jt)&&(Xt=Ar(Jt)),Fe.push(k+In+"="+encodeURIComponent(Xt))}}catch(In){throw Fe.push(k+"type="+encodeURIComponent("_badmap")),In}}catch{p&&p(yt)}}if(ve){U=Fe.join("&");break e}}U=void 0}return i=i.i.splice(0,h),l.G=i,U}function Xl(i){if(!i.g&&!i.v){i.Y=1;var l=i.Da;xe||m(),ge||(xe(),ge=!0),T.add(l,i),i.A=0}}function bo(i){return i.g||i.v||i.A>=3?!1:(i.Y++,i.v=Sr(d(i.Da,i),tc(i,i.A)),i.A++,!0)}n.Da=function(){if(this.v=null,Zl(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var i=4*this.T;this.j.info("BP detection timer enabled: "+i),this.B=Sr(d(this.Wa,this),i)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,tt(10),Ns(this),Zl(this))};function Eo(i){i.B!=null&&(a.clearTimeout(i.B),i.B=null)}function Zl(i){i.g=new Wt(i,i.j,"rpc",i.Y),i.u===null&&(i.g.J=i.o),i.g.P=0;var l=_t(i.na);Ie(l,"RID","rpc"),Ie(l,"SID",i.M),Ie(l,"AID",i.K),Ie(l,"CI",i.F?"0":"1"),!i.F&&i.ia&&Ie(l,"TO",i.ia),Ie(l,"TYPE","xmlhttp"),Br(i,l),i.u&&i.o&&vo(l,i.u,i.o),i.O&&(i.g.H=i.O);var h=i.g;i=i.ba,h.M=1,h.A=Vs(_t(l)),h.u=null,h.R=!0,Rl(h,i)}n.Va=function(){this.C!=null&&(this.C=null,Ns(this),bo(this),tt(19))};function Os(i){i.C!=null&&(a.clearTimeout(i.C),i.C=null)}function ec(i,l){var h=null;if(i.g==l){Os(i),Eo(i),i.g=null;var p=2}else if(go(i.h,l))h=l.G,Ml(i.h,l),p=1;else return;if(i.I!=0){if(l.o)if(p==1){h=l.u?l.u.length:0,l=Date.now()-l.F;var R=i.D;p=xs(),be(p,new El(p,h)),Ls(i)}else Xl(i);else if(R=l.m,R==3||R==0&&l.X>0||!(p==1&&ip(i,l)||p==2&&bo(i)))switch(h&&h.length>0&&(l=i.h,l.i=l.i.concat(h)),R){case 1:Tn(i,5);break;case 4:Tn(i,10);break;case 3:Tn(i,6);break;default:Tn(i,2)}}}function tc(i,l){let h=i.Qa+Math.floor(Math.random()*i.Za);return i.isActive()||(h*=2),h*l}function Tn(i,l){if(i.j.info("Error code "+l),l==2){var h=d(i.bb,i),p=i.Ua;const R=!p;p=new Kt(p||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Vr(p,"https"),Vs(p),R?Zf(p.toString(),h):ep(p.toString(),h)}else tt(2);i.I=0,i.l&&i.l.pa(l),nc(i),Ql(i)}n.bb=function(i){i?(this.j.info("Successfully pinged google.com"),tt(2)):(this.j.info("Failed to ping google.com"),tt(1))};function nc(i){if(i.I=0,i.ja=[],i.l){const l=Dl(i.h);(l.length!=0||i.i.length!=0)&&(N(i.ja,l),N(i.ja,i.i),i.h.i.length=0,P(i.i),i.i.length=0),i.l.oa()}}function rc(i,l,h){var p=h instanceof Kt?_t(h):new Kt(h);if(p.g!="")l&&(p.g=l+"."+p.g),Mr(p,p.u);else{var R=a.location;p=R.protocol,l=l?l+"."+R.hostname:R.hostname,R=+R.port;const k=new Kt(null);p&&Vr(k,p),l&&(k.g=l),R&&Mr(k,R),h&&(k.h=h),p=k}return h=i.G,l=i.wa,h&&l&&Ie(p,h,l),Ie(p,"VER",i.ka),Br(i,p),p}function sc(i,l,h){if(l&&!i.L)throw Error("Can't create secondary domain capable XhrIo object.");return l=i.Aa&&!i.ma?new ke(new yo({ab:h})):new ke(i.ma),l.Fa(i.L),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ic(){}n=ic.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Fs(){}Fs.prototype.g=function(i,l){return new ot(i,l)};function ot(i,l){Re.call(this),this.g=new Kl(l),this.l=i,this.h=l&&l.messageUrlParams||null,i=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(i?i["X-WebChannel-Content-Type"]=l.messageContentType:i={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.sa&&(i?i["X-WebChannel-Client-Profile"]=l.sa:i={"X-WebChannel-Client-Profile":l.sa}),this.g.U=i,(i=l&&l.Qb)&&!v(i)&&(this.g.u=i),this.A=l&&l.supportsCrossDomainXhr||!1,this.v=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!v(l)&&(this.g.G=l,i=this.h,i!==null&&l in i&&(i=this.h,l in i&&delete i[l])),this.j=new Gn(this)}y(ot,Re),ot.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},ot.prototype.close=function(){wo(this.g)},ot.prototype.o=function(i){var l=this.g;if(typeof i=="string"){var h={};h.__data__=i,i=h}else this.v&&(h={},h.__data__=Ar(i),i=h);l.i.push(new Hf(l.Ya++,i)),l.I==3&&Ls(l)},ot.prototype.N=function(){this.g.l=null,delete this.j,wo(this.g),delete this.g,ot.Z.N.call(this)};function oc(i){ao.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var l=i.__sm__;if(l){e:{for(const h in l){i=h;break e}i=void 0}(this.i=i)&&(i=this.i,l=l!==null&&i in l?l[i]:void 0),this.data=l}else this.data=i}y(oc,ao);function ac(){lo.call(this),this.status=1}y(ac,lo);function Gn(i){this.g=i}y(Gn,ic),Gn.prototype.ra=function(){be(this.g,"a")},Gn.prototype.qa=function(i){be(this.g,new oc(i))},Gn.prototype.pa=function(i){be(this.g,new ac)},Gn.prototype.oa=function(){be(this.g,"b")},Fs.prototype.createWebChannel=Fs.prototype.g,ot.prototype.send=ot.prototype.o,ot.prototype.open=ot.prototype.m,ot.prototype.close=ot.prototype.close,bh=function(){return new Fs},wh=function(){return xs()},vh=wn,Ho={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ks.NO_ERROR=0,ks.TIMEOUT=8,ks.HTTP_ERROR=6,Ys=ks,Tl.COMPLETE="complete",yh=Tl,Ss.EventType=vn,vn.OPEN="a",vn.CLOSE="b",vn.ERROR="c",vn.MESSAGE="d",Re.prototype.listen=Re.prototype.J,Hr=Ss,ke.prototype.listenOnce=ke.prototype.K,ke.prototype.getLastError=ke.prototype.Ha,ke.prototype.getLastErrorCode=ke.prototype.ya,ke.prototype.getStatus=ke.prototype.ca,ke.prototype.getResponseJson=ke.prototype.La,ke.prototype.getResponseText=ke.prototype.la,ke.prototype.send=ke.prototype.ea,ke.prototype.setWithCredentials=ke.prototype.Fa,_h=ke}).apply(typeof Bs<"u"?Bs:typeof self<"u"?self:typeof window<"u"?window:{});const Ec="@firebase/firestore",Tc="4.9.2";/**
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
 */let _r="12.3.0";/**
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
 */const Nn=new pa("@firebase/firestore");function Qn(){return Nn.logLevel}function q(n,...e){if(Nn.logLevel<=he.DEBUG){const t=e.map(_a);Nn.debug(`Firestore (${_r}): ${n}`,...t)}}function Lt(n,...e){if(Nn.logLevel<=he.ERROR){const t=e.map(_a);Nn.error(`Firestore (${_r}): ${n}`,...t)}}function ir(n,...e){if(Nn.logLevel<=he.WARN){const t=e.map(_a);Nn.warn(`Firestore (${_r}): ${n}`,...t)}}function _a(n){if(typeof n=="string")return n;try{/**
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
 */function re(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Eh(n,r,t)}function Eh(n,e,t){let r=`FIRESTORE (${_r}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Lt(r),new Error(r)}function ye(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||Eh(e,s,r)}function oe(n,e){return n}/**
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
 */class Th{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class tm{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ye.UNAUTHENTICATED)))}shutdown(){}}class nm{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class rm{constructor(e){this.t=e,this.currentUser=Ye.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ye(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let o=new Vt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Vt,e.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const u=o;e.enqueueRetryable((async()=>{await u.promise,await s(this.currentUser)}))},c=u=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((u=>c(u))),setTimeout((()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Vt)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ye(typeof r.accessToken=="string",31837,{l:r}),new Th(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ye(e===null||typeof e=="string",2055,{h:e}),new Ye(e)}}class sm{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Ye.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class im{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new sm(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ye.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ic{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class om{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,lt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ye(this.o===void 0,3512);const r=o=>{o.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,q("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable((()=>r(o)))};const s=o=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((o=>s(o))),setTimeout((()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Ic(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(ye(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Ic(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function am(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class ya{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=am(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<t&&(r+=e.charAt(s[o]%62))}return r}}function de(n,e){return n<e?-1:n>e?1:0}function Go(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),o=e.charAt(r);if(s!==o)return xo(s)===xo(o)?de(s,o):xo(s)?1:-1}return de(n.length,e.length)}const lm=55296,cm=57343;function xo(n){const e=n.charCodeAt(0);return e>=lm&&e<=cm}function or(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}/**
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
 */const Cc="__name__";class vt{constructor(e,t,r){t===void 0?t=0:t>e.length&&re(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&re(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return vt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof vt?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const o=vt.compareSegments(e.get(s),t.get(s));if(o!==0)return o}return de(e.length,t.length)}static compareSegments(e,t){const r=vt.isNumericId(e),s=vt.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?vt.extractNumericId(e).compare(vt.extractNumericId(t)):Go(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ln.fromString(e.substring(4,e.length-2))}}class Ee extends vt{construct(e,t,r){return new Ee(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new Ee(t)}static emptyPath(){return new Ee([])}}const um=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ge extends vt{construct(e,t,r){return new Ge(e,t,r)}static isValidIdentifier(e){return um.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ge.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Cc}static keyField(){return new Ge([Cc])}static fromServerFormat(e){const t=[];let r="",s=0;const o=()=>{if(r.length===0)throw new B(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new B(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new B(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(o(),s++)}if(o(),a)throw new B(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ge(t)}static emptyPath(){return new Ge([])}}/**
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
 */class Z{constructor(e){this.path=e}static fromPath(e){return new Z(Ee.fromString(e))}static fromName(e){return new Z(Ee.fromString(e).popFirst(5))}static empty(){return new Z(Ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ee.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Z(new Ee(e.slice()))}}/**
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
 */function Ih(n,e,t){if(!t)throw new B(V.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function hm(n,e,t,r){if(e===!0&&r===!0)throw new B(V.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Ac(n){if(!Z.isDocumentKey(n))throw new B(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Rc(n){if(Z.isDocumentKey(n))throw new B(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ch(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Ni(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":re(12329,{type:typeof n})}function it(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new B(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ni(n);throw new B(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function dm(n,e){if(e<=0)throw new B(V.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */function Oe(n,e){const t={typeString:n};return e&&(t.value=e),t}function ps(n,e){if(!Ch(n))throw new B(V.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,o="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(o!==void 0&&a!==o.value){t=`Expected '${r}' field to equal '${o.value}'`;break}}if(t)throw new B(V.INVALID_ARGUMENT,t);return!0}/**
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
 */const Sc=-62135596800,xc=1e6;class Ce{static now(){return Ce.fromMillis(Date.now())}static fromDate(e){return Ce.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*xc);return new Ce(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new B(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new B(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Sc)throw new B(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/xc}_compareTo(e){return this.seconds===e.seconds?de(this.nanoseconds,e.nanoseconds):de(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ce._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ps(e,Ce._jsonSchema))return new Ce(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Sc;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ce._jsonSchemaVersion="firestore/timestamp/1.0",Ce._jsonSchema={type:Oe("string",Ce._jsonSchemaVersion),seconds:Oe("number"),nanoseconds:Oe("number")};/**
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
 */const ss=-1;function fm(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=ie.fromTimestamp(r===1e9?new Ce(t+1,0):new Ce(t,r));return new un(s,Z.empty(),e)}function pm(n){return new un(n.readTime,n.key,ss)}class un{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new un(ie.min(),Z.empty(),ss)}static max(){return new un(ie.max(),Z.empty(),ss)}}function gm(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Z.comparator(n.documentKey,e.documentKey),t!==0?t:de(n.largestBatchId,e.largestBatchId))}/**
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
 */const mm="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _m{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function yr(n){if(n.code!==V.FAILED_PRECONDITION||n.message!==mm)throw n;q("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&re(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new M(((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof M?t:M.resolve(t)}catch(t){return M.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):M.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):M.reject(t)}static resolve(e){return new M(((t,r)=>{t(e)}))}static reject(e){return new M(((t,r)=>{r(e)}))}static waitFor(e){return new M(((t,r)=>{let s=0,o=0,a=!1;e.forEach((c=>{++s,c.next((()=>{++o,a&&o===s&&t()}),(u=>r(u)))})),a=!0,o===s&&t()}))}static or(e){let t=M.resolve(!1);for(const r of e)t=t.next((s=>s?M.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,o)=>{r.push(t.call(this,s,o))})),this.waitFor(r)}static mapArray(e,t){return new M(((r,s)=>{const o=e.length,a=new Array(o);let c=0;for(let u=0;u<o;u++){const d=u;t(e[d]).next((g=>{a[d]=g,++c,c===o&&r(a)}),(g=>s(g)))}}))}static doWhile(e,t){return new M(((r,s)=>{const o=()=>{e()===!0?t().next((()=>{o()}),s):r()};o()}))}}function ym(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function vr(n){return n.name==="IndexedDbTransactionError"}/**
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
 */const va=-1;function Oi(n){return n==null}function ui(n){return n===0&&1/n==-1/0}function vm(n){return typeof n=="number"&&Number.isInteger(n)&&!ui(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Ah="";function wm(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=kc(e)),e=bm(n.get(t),e);return kc(e)}function bm(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const o=n.charAt(s);switch(o){case"\0":t+="";break;case Ah:t+="";break;default:t+=o}}return t}function kc(n){return n+Ah+""}/**
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
 */function Pc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function mn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Rh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class Se{constructor(e,t){this.comparator=e,this.root=t||He.EMPTY}insert(e,t){return new Se(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,He.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,He.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new js(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new js(this.root,e,this.comparator,!1)}getReverseIterator(){return new js(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new js(this.root,e,this.comparator,!0)}}class js{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&s&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class He{constructor(e,t,r,s,o){this.key=e,this.value=t,this.color=r??He.RED,this.left=s??He.EMPTY,this.right=o??He.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,o){return new He(e??this.key,t??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const o=r(e,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(e,t,r),null):o===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return He.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return He.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,He.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,He.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw re(43730,{key:this.key,value:this.value});if(this.right.isRed())throw re(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw re(27949);return e+(this.isRed()?0:1)}}He.EMPTY=null,He.RED=!0,He.BLACK=!1;He.EMPTY=new class{constructor(){this.size=0}get key(){throw re(57766)}get value(){throw re(16141)}get color(){throw re(16727)}get left(){throw re(29726)}get right(){throw re(36894)}copy(e,t,r,s,o){return this}insert(e,t,r){return new He(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Be{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Vc(this.data.getIterator())}getIteratorFrom(e){return new Vc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof Be)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Be(this.comparator);return t.data=e,t}}class Vc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class ct{constructor(e){this.fields=e,e.sort(Ge.comparator)}static empty(){return new ct([])}unionWith(e){let t=new Be(Ge.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new ct(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return or(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
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
 */class Sh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class We{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Sh("Invalid base64 string: "+o):o}})(e);return new We(t)}static fromUint8Array(e){const t=(function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o})(e);return new We(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return de(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}We.EMPTY_BYTE_STRING=new We("");const Em=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function hn(n){if(ye(!!n,39018),typeof n=="string"){let e=0;const t=Em.exec(n);if(ye(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Me(n.seconds),nanos:Me(n.nanos)}}function Me(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function dn(n){return typeof n=="string"?We.fromBase64String(n):We.fromUint8Array(n)}/**
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
 */const xh="server_timestamp",kh="__type__",Ph="__previous_value__",Vh="__local_write_time__";function wa(n){return(n?.mapValue?.fields||{})[kh]?.stringValue===xh}function Fi(n){const e=n.mapValue.fields[Ph];return wa(e)?Fi(e):e}function is(n){const e=hn(n.mapValue.fields[Vh].timestampValue);return new Ce(e.seconds,e.nanos)}/**
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
 */class Tm{constructor(e,t,r,s,o,a,c,u,d,g){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=d,this.isUsingEmulator=g}}const hi="(default)";class os{constructor(e,t){this.projectId=e,this.database=t||hi}static empty(){return new os("","")}get isDefaultDatabase(){return this.database===hi}isEqual(e){return e instanceof os&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Mh="__type__",Im="__max__",$s={mapValue:{}},Dh="__vector__",di="value";function fn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?wa(n)?4:Am(n)?9007199254740991:Cm(n)?10:11:re(28295,{value:n})}function At(n,e){if(n===e)return!0;const t=fn(n);if(t!==fn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return is(n).isEqual(is(e));case 3:return(function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=hn(s.timestampValue),c=hn(o.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,o){return dn(s.bytesValue).isEqual(dn(o.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,o){return Me(s.geoPointValue.latitude)===Me(o.geoPointValue.latitude)&&Me(s.geoPointValue.longitude)===Me(o.geoPointValue.longitude)})(n,e);case 2:return(function(s,o){if("integerValue"in s&&"integerValue"in o)return Me(s.integerValue)===Me(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=Me(s.doubleValue),c=Me(o.doubleValue);return a===c?ui(a)===ui(c):isNaN(a)&&isNaN(c)}return!1})(n,e);case 9:return or(n.arrayValue.values||[],e.arrayValue.values||[],At);case 10:case 11:return(function(s,o){const a=s.mapValue.fields||{},c=o.mapValue.fields||{};if(Pc(a)!==Pc(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!At(a[u],c[u])))return!1;return!0})(n,e);default:return re(52216,{left:n})}}function as(n,e){return(n.values||[]).find((t=>At(t,e)))!==void 0}function ar(n,e){if(n===e)return 0;const t=fn(n),r=fn(e);if(t!==r)return de(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return de(n.booleanValue,e.booleanValue);case 2:return(function(o,a){const c=Me(o.integerValue||o.doubleValue),u=Me(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1})(n,e);case 3:return Mc(n.timestampValue,e.timestampValue);case 4:return Mc(is(n),is(e));case 5:return Go(n.stringValue,e.stringValue);case 6:return(function(o,a){const c=dn(o),u=dn(a);return c.compareTo(u)})(n.bytesValue,e.bytesValue);case 7:return(function(o,a){const c=o.split("/"),u=a.split("/");for(let d=0;d<c.length&&d<u.length;d++){const g=de(c[d],u[d]);if(g!==0)return g}return de(c.length,u.length)})(n.referenceValue,e.referenceValue);case 8:return(function(o,a){const c=de(Me(o.latitude),Me(a.latitude));return c!==0?c:de(Me(o.longitude),Me(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Dc(n.arrayValue,e.arrayValue);case 10:return(function(o,a){const c=o.fields||{},u=a.fields||{},d=c[di]?.arrayValue,g=u[di]?.arrayValue,y=de(d?.values?.length||0,g?.values?.length||0);return y!==0?y:Dc(d,g)})(n.mapValue,e.mapValue);case 11:return(function(o,a){if(o===$s.mapValue&&a===$s.mapValue)return 0;if(o===$s.mapValue)return 1;if(a===$s.mapValue)return-1;const c=o.fields||{},u=Object.keys(c),d=a.fields||{},g=Object.keys(d);u.sort(),g.sort();for(let y=0;y<u.length&&y<g.length;++y){const I=Go(u[y],g[y]);if(I!==0)return I;const P=ar(c[u[y]],d[g[y]]);if(P!==0)return P}return de(u.length,g.length)})(n.mapValue,e.mapValue);default:throw re(23264,{he:t})}}function Mc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return de(n,e);const t=hn(n),r=hn(e),s=de(t.seconds,r.seconds);return s!==0?s:de(t.nanos,r.nanos)}function Dc(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const o=ar(t[s],r[s]);if(o)return o}return de(t.length,r.length)}function lr(n){return Wo(n)}function Wo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=hn(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return dn(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return Z.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const o of t.values||[])s?s=!1:r+=",",r+=Wo(o);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${Wo(t.fields[a])}`;return s+"}"})(n.mapValue):re(61005,{value:n})}function Js(n){switch(fn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Fi(n);return e?16+Js(e):16;case 5:return 2*n.stringValue.length;case 6:return dn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,o)=>s+Js(o)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return mn(r.fields,((o,a)=>{s+=o.length+Js(a)})),s})(n.mapValue);default:throw re(13486,{value:n})}}function Nc(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Ko(n){return!!n&&"integerValue"in n}function ba(n){return!!n&&"arrayValue"in n}function Lc(n){return!!n&&"nullValue"in n}function Oc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Xs(n){return!!n&&"mapValue"in n}function Cm(n){return(n?.mapValue?.fields||{})[Mh]?.stringValue===Dh}function Yr(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return mn(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=Yr(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Yr(n.arrayValue.values[t]);return e}return{...n}}function Am(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Im}/**
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
 */class st{constructor(e){this.value=e}static empty(){return new st({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Xs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Yr(t)}setAll(e){let t=Ge.emptyPath(),r={},s=[];e.forEach(((a,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=Yr(a):s.push(c.lastSegment())}));const o=this.getFieldsMap(t);this.applyChanges(o,r,s)}delete(e){const t=this.field(e.popLast());Xs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return At(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Xs(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){mn(t,((s,o)=>e[s]=o));for(const s of r)delete e[s]}clone(){return new st(Yr(this.value))}}function Nh(n){const e=[];return mn(n.fields,((t,r)=>{const s=new Ge([t]);if(Xs(r)){const o=Nh(r.mapValue).fields;if(o.length===0)e.push(s);else for(const a of o)e.push(s.child(a))}else e.push(s)})),new ct(e)}/**
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
 */class Je{constructor(e,t,r,s,o,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Je(e,0,ie.min(),ie.min(),ie.min(),st.empty(),0)}static newFoundDocument(e,t,r,s){return new Je(e,1,t,ie.min(),r,s,0)}static newNoDocument(e,t){return new Je(e,2,t,ie.min(),ie.min(),st.empty(),0)}static newUnknownDocument(e,t){return new Je(e,3,t,ie.min(),ie.min(),st.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=st.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=st.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Je&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Je(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class fi{constructor(e,t){this.position=e,this.inclusive=t}}function Fc(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const o=e[s],a=n.position[s];if(o.field.isKeyField()?r=Z.comparator(Z.fromName(a.referenceValue),t.key):r=ar(a,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Uc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!At(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class ls{constructor(e,t="asc"){this.field=e,this.dir=t}}function Rm(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Lh{}class Le extends Lh{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new xm(e,t,r):t==="array-contains"?new Vm(e,r):t==="in"?new Mm(e,r):t==="not-in"?new Dm(e,r):t==="array-contains-any"?new Nm(e,r):new Le(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new km(e,r):new Pm(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(ar(t,this.value)):t!==null&&fn(this.value)===fn(t)&&this.matchesComparison(ar(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return re(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class mt extends Lh{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new mt(e,t)}matches(e){return Oh(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Oh(n){return n.op==="and"}function Fh(n){return Sm(n)&&Oh(n)}function Sm(n){for(const e of n.filters)if(e instanceof mt)return!1;return!0}function Qo(n){if(n instanceof Le)return n.field.canonicalString()+n.op.toString()+lr(n.value);if(Fh(n))return n.filters.map((e=>Qo(e))).join(",");{const e=n.filters.map((t=>Qo(t))).join(",");return`${n.op}(${e})`}}function Uh(n,e){return n instanceof Le?(function(r,s){return s instanceof Le&&r.op===s.op&&r.field.isEqual(s.field)&&At(r.value,s.value)})(n,e):n instanceof mt?(function(r,s){return s instanceof mt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((o,a,c)=>o&&Uh(a,s.filters[c])),!0):!1})(n,e):void re(19439)}function Bh(n){return n instanceof Le?(function(t){return`${t.field.canonicalString()} ${t.op} ${lr(t.value)}`})(n):n instanceof mt?(function(t){return t.op.toString()+" {"+t.getFilters().map(Bh).join(" ,")+"}"})(n):"Filter"}class xm extends Le{constructor(e,t,r){super(e,t,r),this.key=Z.fromName(r.referenceValue)}matches(e){const t=Z.comparator(e.key,this.key);return this.matchesComparison(t)}}class km extends Le{constructor(e,t){super(e,"in",t),this.keys=jh("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Pm extends Le{constructor(e,t){super(e,"not-in",t),this.keys=jh("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function jh(n,e){return(e.arrayValue?.values||[]).map((t=>Z.fromName(t.referenceValue)))}class Vm extends Le{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ba(t)&&as(t.arrayValue,this.value)}}class Mm extends Le{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&as(this.value.arrayValue,t)}}class Dm extends Le{constructor(e,t){super(e,"not-in",t)}matches(e){if(as(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!as(this.value.arrayValue,t)}}class Nm extends Le{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ba(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>as(this.value.arrayValue,r)))}}/**
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
 */class Lm{constructor(e,t=null,r=[],s=[],o=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=c,this.Te=null}}function Bc(n,e=null,t=[],r=[],s=null,o=null,a=null){return new Lm(n,e,t,r,s,o,a)}function Ea(n){const e=oe(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>Qo(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(o){return o.field.canonicalString()+o.dir})(r))).join(","),Oi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>lr(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>lr(r))).join(",")),e.Te=t}return e.Te}function Ta(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Rm(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Uh(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Uc(n.startAt,e.startAt)&&Uc(n.endAt,e.endAt)}function Yo(n){return Z.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class wr{constructor(e,t=null,r=[],s=[],o=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Om(n,e,t,r,s,o,a,c){return new wr(n,e,t,r,s,o,a,c)}function Ui(n){return new wr(n)}function jc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function $h(n){return n.collectionGroup!==null}function Jr(n){const e=oe(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const o of e.explicitOrderBy)e.Ie.push(o),t.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new Be(Ge.comparator);return a.filters.forEach((u=>{u.getFlattenedFilters().forEach((d=>{d.isInequality()&&(c=c.add(d.field))}))})),c})(e).forEach((o=>{t.has(o.canonicalString())||o.isKeyField()||e.Ie.push(new ls(o,r))})),t.has(Ge.keyField().canonicalString())||e.Ie.push(new ls(Ge.keyField(),r))}return e.Ie}function bt(n){const e=oe(n);return e.Ee||(e.Ee=Fm(e,Jr(n))),e.Ee}function Fm(n,e){if(n.limitType==="F")return Bc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const o=s.dir==="desc"?"asc":"desc";return new ls(s.field,o)}));const t=n.endAt?new fi(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new fi(n.startAt.position,n.startAt.inclusive):null;return Bc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Jo(n,e){const t=n.filters.concat([e]);return new wr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function pi(n,e,t){return new wr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Bi(n,e){return Ta(bt(n),bt(e))&&n.limitType===e.limitType}function qh(n){return`${Ea(bt(n))}|lt:${n.limitType}`}function Yn(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>Bh(s))).join(", ")}]`),Oi(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>lr(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>lr(s))).join(",")),`Target(${r})`})(bt(n))}; limitType=${n.limitType})`}function ji(n,e){return e.isFoundDocument()&&(function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):Z.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)})(n,e)&&(function(r,s){for(const o of Jr(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(a,c,u){const d=Fc(a,c,u);return a.inclusive?d<=0:d<0})(r.startAt,Jr(r),s)||r.endAt&&!(function(a,c,u){const d=Fc(a,c,u);return a.inclusive?d>=0:d>0})(r.endAt,Jr(r),s))})(n,e)}function Um(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function zh(n){return(e,t)=>{let r=!1;for(const s of Jr(n)){const o=Bm(s,e,t);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function Bm(n,e,t){const r=n.field.isKeyField()?Z.comparator(e.key,t.key):(function(o,a,c){const u=a.data.field(o),d=c.data.field(o);return u!==null&&d!==null?ar(u,d):re(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return re(19790,{direction:n.dir})}}/**
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
 */class Un{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return void(s[o]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){mn(this.inner,((t,r)=>{for(const[s,o]of r)e(s,o)}))}isEmpty(){return Rh(this.inner)}size(){return this.innerSize}}/**
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
 */const jm=new Se(Z.comparator);function Ot(){return jm}const Hh=new Se(Z.comparator);function Gr(...n){let e=Hh;for(const t of n)e=e.insert(t.key,t);return e}function Gh(n){let e=Hh;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function Sn(){return Xr()}function Wh(){return Xr()}function Xr(){return new Un((n=>n.toString()),((n,e)=>n.isEqual(e)))}const $m=new Se(Z.comparator),qm=new Be(Z.comparator);function fe(...n){let e=qm;for(const t of n)e=e.add(t);return e}const zm=new Be(de);function Hm(){return zm}/**
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
 */function Ia(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ui(e)?"-0":e}}function Kh(n){return{integerValue:""+n}}function Gm(n,e){return vm(e)?Kh(e):Ia(n,e)}/**
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
 */class $i{constructor(){this._=void 0}}function Wm(n,e,t){return n instanceof cs?(function(s,o){const a={fields:{[kh]:{stringValue:xh},[Vh]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&wa(o)&&(o=Fi(o)),o&&(a.fields[Ph]=o),{mapValue:a}})(t,e):n instanceof cr?Yh(n,e):n instanceof ur?Jh(n,e):(function(s,o){const a=Qh(s,o),c=$c(a)+$c(s.Ae);return Ko(a)&&Ko(s.Ae)?Kh(c):Ia(s.serializer,c)})(n,e)}function Km(n,e,t){return n instanceof cr?Yh(n,e):n instanceof ur?Jh(n,e):t}function Qh(n,e){return n instanceof gi?(function(r){return Ko(r)||(function(o){return!!o&&"doubleValue"in o})(r)})(e)?e:{integerValue:0}:null}class cs extends $i{}class cr extends $i{constructor(e){super(),this.elements=e}}function Yh(n,e){const t=Xh(e);for(const r of n.elements)t.some((s=>At(s,r)))||t.push(r);return{arrayValue:{values:t}}}class ur extends $i{constructor(e){super(),this.elements=e}}function Jh(n,e){let t=Xh(e);for(const r of n.elements)t=t.filter((s=>!At(s,r)));return{arrayValue:{values:t}}}class gi extends $i{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function $c(n){return Me(n.integerValue||n.doubleValue)}function Xh(n){return ba(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class Ca{constructor(e,t){this.field=e,this.transform=t}}function Qm(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof cr&&s instanceof cr||r instanceof ur&&s instanceof ur?or(r.elements,s.elements,At):r instanceof gi&&s instanceof gi?At(r.Ae,s.Ae):r instanceof cs&&s instanceof cs})(n.transform,e.transform)}class Ym{constructor(e,t){this.version=e,this.transformResults=t}}class dt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new dt}static exists(e){return new dt(void 0,e)}static updateTime(e){return new dt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Zs(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class qi{}function Zh(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Aa(n.key,dt.none()):new gs(n.key,n.data,dt.none());{const t=n.data,r=st.empty();let s=new Be(Ge.comparator);for(let o of e.fields)if(!s.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new _n(n.key,r,new ct(s.toArray()),dt.none())}}function Jm(n,e,t){n instanceof gs?(function(s,o,a){const c=s.value.clone(),u=zc(s.fieldTransforms,o,a.transformResults);c.setAll(u),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(n,e,t):n instanceof _n?(function(s,o,a){if(!Zs(s.precondition,o))return void o.convertToUnknownDocument(a.version);const c=zc(s.fieldTransforms,o,a.transformResults),u=o.data;u.setAll(ed(s)),u.setAll(c),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()})(n,e,t):(function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function Zr(n,e,t,r){return n instanceof gs?(function(o,a,c,u){if(!Zs(o.precondition,a))return c;const d=o.value.clone(),g=Hc(o.fieldTransforms,u,a);return d.setAll(g),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null})(n,e,t,r):n instanceof _n?(function(o,a,c,u){if(!Zs(o.precondition,a))return c;const d=Hc(o.fieldTransforms,u,a),g=a.data;return g.setAll(ed(o)),g.setAll(d),a.convertToFoundDocument(a.version,g).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map((y=>y.field)))})(n,e,t,r):(function(o,a,c){return Zs(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c})(n,e,t)}function Xm(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),o=Qh(r.transform,s||null);o!=null&&(t===null&&(t=st.empty()),t.set(r.field,o))}return t||null}function qc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&or(r,s,((o,a)=>Qm(o,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class gs extends qi{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class _n extends qi{constructor(e,t,r,s,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function ed(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function zc(n,e,t){const r=new Map;ye(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let s=0;s<t.length;s++){const o=n[s],a=o.transform,c=e.data.field(o.field);r.set(o.field,Km(a,c,t[s]))}return r}function Hc(n,e,t){const r=new Map;for(const s of n){const o=s.transform,a=t.data.field(s.field);r.set(s.field,Wm(o,a,e))}return r}class Aa extends qi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Zm extends qi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class e0{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(e.key)&&Jm(o,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Zr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Zr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Wh();return this.mutations.forEach((s=>{const o=e.get(s.key),a=o.overlayedDocument;let c=this.applyToLocalView(a,o.mutatedFields);c=t.has(s.key)?null:c;const u=Zh(a,c);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(ie.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),fe())}isEqual(e){return this.batchId===e.batchId&&or(this.mutations,e.mutations,((t,r)=>qc(t,r)))&&or(this.baseMutations,e.baseMutations,((t,r)=>qc(t,r)))}}class Ra{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){ye(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=(function(){return $m})();const o=e.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new Ra(e,t,r,s)}}/**
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
 */class t0{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class n0{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Ne,pe;function r0(n){switch(n){case V.OK:return re(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return re(15467,{code:n})}}function td(n){if(n===void 0)return Lt("GRPC error has no .code"),V.UNKNOWN;switch(n){case Ne.OK:return V.OK;case Ne.CANCELLED:return V.CANCELLED;case Ne.UNKNOWN:return V.UNKNOWN;case Ne.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Ne.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Ne.INTERNAL:return V.INTERNAL;case Ne.UNAVAILABLE:return V.UNAVAILABLE;case Ne.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Ne.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Ne.NOT_FOUND:return V.NOT_FOUND;case Ne.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Ne.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Ne.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Ne.ABORTED:return V.ABORTED;case Ne.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Ne.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Ne.DATA_LOSS:return V.DATA_LOSS;default:return re(39323,{code:n})}}(pe=Ne||(Ne={}))[pe.OK=0]="OK",pe[pe.CANCELLED=1]="CANCELLED",pe[pe.UNKNOWN=2]="UNKNOWN",pe[pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pe[pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pe[pe.NOT_FOUND=5]="NOT_FOUND",pe[pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",pe[pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",pe[pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",pe[pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pe[pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pe[pe.ABORTED=10]="ABORTED",pe[pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",pe[pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",pe[pe.INTERNAL=13]="INTERNAL",pe[pe.UNAVAILABLE=14]="UNAVAILABLE",pe[pe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function s0(){return new TextEncoder}/**
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
 */const i0=new ln([4294967295,4294967295],0);function Gc(n){const e=s0().encode(n),t=new mh;return t.update(e),new Uint8Array(t.digest())}function Wc(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new ln([t,r],0),new ln([s,o],0)]}class Sa{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Wr(`Invalid padding: ${t}`);if(r<0)throw new Wr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Wr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Wr(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=ln.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(ln.fromNumber(r)));return s.compare(i0)===1&&(s=new ln([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Gc(e),[r,s]=Wc(t);for(let o=0;o<this.hashCount;o++){const a=this.ye(r,s,o);if(!this.we(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),a=new Sa(o,s,t);return r.forEach((c=>a.insert(c))),a}insert(e){if(this.ge===0)return;const t=Gc(e),[r,s]=Wc(t);for(let o=0;o<this.hashCount;o++){const a=this.ye(r,s,o);this.Se(a)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Wr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class zi{constructor(e,t,r,s,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,ms.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new zi(ie.min(),s,new Se(de),Ot(),fe())}}class ms{constructor(e,t,r,s,o){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new ms(r,t,fe(),fe(),fe())}}/**
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
 */class ei{constructor(e,t,r,s){this.be=e,this.removedTargetIds=t,this.key=r,this.De=s}}class nd{constructor(e,t){this.targetId=e,this.Ce=t}}class rd{constructor(e,t,r=We.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Kc{constructor(){this.ve=0,this.Fe=Qc(),this.Me=We.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=fe(),t=fe(),r=fe();return this.Fe.forEach(((s,o)=>{switch(o){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:re(38017,{changeType:o})}})),new ms(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=Qc()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,ye(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class o0{constructor(e){this.Ge=e,this.ze=new Map,this.je=Ot(),this.Je=qs(),this.He=qs(),this.Ye=new Se(de)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:re(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((r,s)=>{this.rt(s)&&t(s)}))}st(e){const t=e.targetId,r=e.Ce.count,s=this.ot(t);if(s){const o=s.target;if(Yo(o))if(r===0){const a=new Z(o.path);this.et(t,a,Je.newNoDocument(a,ie.min()))}else ye(r===1,20013,{expectedCount:r});else{const a=this._t(t);if(a!==r){const c=this.ut(e),u=c?this.ct(c,e,a):1;if(u!==0){this.it(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,d)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=t;let a,c;try{a=dn(r).toUint8Array()}catch(u){if(u instanceof Sh)return ir("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new Sa(a,s,o)}catch(u){return ir(u instanceof Wr?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.ge===0?null:c}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach((o=>{const a=this.Ge.ht(),c=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;e.mightContain(c)||(this.et(t,o,null),s++)})),s}Tt(e){const t=new Map;this.ze.forEach(((o,a)=>{const c=this.ot(a);if(c){if(o.current&&Yo(c.target)){const u=new Z(c.target.path);this.It(u).has(a)||this.Et(a,u)||this.et(a,u,Je.newNoDocument(u,e))}o.Be&&(t.set(a,o.ke()),o.qe())}}));let r=fe();this.He.forEach(((o,a)=>{let c=!0;a.forEachWhile((u=>{const d=this.ot(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(o))})),this.je.forEach(((o,a)=>a.setReadTime(e)));const s=new zi(e,t,this.Ye,this.je,r);return this.je=Ot(),this.Je=qs(),this.He=qs(),this.Ye=new Se(de),s}Xe(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.Qe(t,1):s.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new Kc,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Be(de),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Be(de),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||q("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Kc),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function qs(){return new Se(Z.comparator)}function Qc(){return new Se(Z.comparator)}const a0={asc:"ASCENDING",desc:"DESCENDING"},l0={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},c0={and:"AND",or:"OR"};class u0{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Xo(n,e){return n.useProto3Json||Oi(e)?e:{value:e}}function mi(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function sd(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function h0(n,e){return mi(n,e.toTimestamp())}function Et(n){return ye(!!n,49232),ie.fromTimestamp((function(t){const r=hn(t);return new Ce(r.seconds,r.nanos)})(n))}function xa(n,e){return Zo(n,e).canonicalString()}function Zo(n,e){const t=(function(s){return new Ee(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function id(n){const e=Ee.fromString(n);return ye(ud(e),10190,{key:e.toString()}),e}function ea(n,e){return xa(n.databaseId,e.path)}function ko(n,e){const t=id(e);if(t.get(1)!==n.databaseId.projectId)throw new B(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new B(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Z(ad(t))}function od(n,e){return xa(n.databaseId,e)}function d0(n){const e=id(n);return e.length===4?Ee.emptyPath():ad(e)}function ta(n){return new Ee(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function ad(n){return ye(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Yc(n,e,t){return{name:ea(n,e),fields:t.value.mapValue.fields}}function f0(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:re(39313,{state:d})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],o=(function(d,g){return d.useProto3Json?(ye(g===void 0||typeof g=="string",58123),We.fromBase64String(g||"")):(ye(g===void 0||g instanceof Buffer||g instanceof Uint8Array,16193),We.fromUint8Array(g||new Uint8Array))})(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&(function(d){const g=d.code===void 0?V.UNKNOWN:td(d.code);return new B(g,d.message||"")})(a);t=new rd(r,s,o,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ko(n,r.document.name),o=Et(r.document.updateTime),a=r.document.createTime?Et(r.document.createTime):ie.min(),c=new st({mapValue:{fields:r.document.fields}}),u=Je.newFoundDocument(s,o,a,c),d=r.targetIds||[],g=r.removedTargetIds||[];t=new ei(d,g,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ko(n,r.document),o=r.readTime?Et(r.readTime):ie.min(),a=Je.newNoDocument(s,o),c=r.removedTargetIds||[];t=new ei([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ko(n,r.document),o=r.removedTargetIds||[];t=new ei([],o,s,null)}else{if(!("filter"in e))return re(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new n0(s,o),c=r.targetId;t=new nd(c,a)}}return t}function p0(n,e){let t;if(e instanceof gs)t={update:Yc(n,e.key,e.value)};else if(e instanceof Aa)t={delete:ea(n,e.key)};else if(e instanceof _n)t={update:Yc(n,e.key,e.data),updateMask:T0(e.fieldMask)};else{if(!(e instanceof Zm))return re(16599,{Vt:e.type});t={verify:ea(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(o,a){const c=a.transform;if(c instanceof cs)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof cr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof ur)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof gi)return{fieldPath:a.field.canonicalString(),increment:c.Ae};throw re(20930,{transform:a.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,o){return o.updateTime!==void 0?{updateTime:h0(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:re(27497)})(n,e.precondition)),t}function g0(n,e){return n&&n.length>0?(ye(e!==void 0,14353),n.map((t=>(function(s,o){let a=s.updateTime?Et(s.updateTime):Et(o);return a.isEqual(ie.min())&&(a=Et(o)),new Ym(a,s.transformResults||[])})(t,e)))):[]}function m0(n,e){return{documents:[od(n,e.path)]}}function _0(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=od(n,s);const o=(function(d){if(d.length!==0)return cd(mt.create(d,"and"))})(e.filters);o&&(t.structuredQuery.where=o);const a=(function(d){if(d.length!==0)return d.map((g=>(function(I){return{field:Jn(I.field),direction:w0(I.dir)}})(g)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=Xo(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(e.endAt)),{ft:t,parent:s}}function y0(n){let e=d0(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){ye(r===1,65062);const g=t.from[0];g.allDescendants?s=g.collectionId:e=e.child(g.collectionId)}let o=[];t.where&&(o=(function(y){const I=ld(y);return I instanceof mt&&Fh(I)?I.getFilters():[I]})(t.where));let a=[];t.orderBy&&(a=(function(y){return y.map((I=>(function(N){return new ls(Xn(N.field),(function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(N.direction))})(I)))})(t.orderBy));let c=null;t.limit&&(c=(function(y){let I;return I=typeof y=="object"?y.value:y,Oi(I)?null:I})(t.limit));let u=null;t.startAt&&(u=(function(y){const I=!!y.before,P=y.values||[];return new fi(P,I)})(t.startAt));let d=null;return t.endAt&&(d=(function(y){const I=!y.before,P=y.values||[];return new fi(P,I)})(t.endAt)),Om(e,s,a,o,c,"F",u,d)}function v0(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return re(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function ld(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Xn(t.unaryFilter.field);return Le.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Xn(t.unaryFilter.field);return Le.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Xn(t.unaryFilter.field);return Le.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Xn(t.unaryFilter.field);return Le.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return re(61313);default:return re(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Le.create(Xn(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return re(58110);default:return re(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return mt.create(t.compositeFilter.filters.map((r=>ld(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return re(1026)}})(t.compositeFilter.op))})(n):re(30097,{filter:n})}function w0(n){return a0[n]}function b0(n){return l0[n]}function E0(n){return c0[n]}function Jn(n){return{fieldPath:n.canonicalString()}}function Xn(n){return Ge.fromServerFormat(n.fieldPath)}function cd(n){return n instanceof Le?(function(t){if(t.op==="=="){if(Oc(t.value))return{unaryFilter:{field:Jn(t.field),op:"IS_NAN"}};if(Lc(t.value))return{unaryFilter:{field:Jn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Oc(t.value))return{unaryFilter:{field:Jn(t.field),op:"IS_NOT_NAN"}};if(Lc(t.value))return{unaryFilter:{field:Jn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Jn(t.field),op:b0(t.op),value:t.value}}})(n):n instanceof mt?(function(t){const r=t.getFilters().map((s=>cd(s)));return r.length===1?r[0]:{compositeFilter:{op:E0(t.op),filters:r}}})(n):re(54877,{filter:n})}function T0(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function ud(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class rn{constructor(e,t,r,s,o=ie.min(),a=ie.min(),c=We.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new rn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new rn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new rn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new rn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class I0{constructor(e){this.yt=e}}function C0(n){const e=y0({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?pi(e,e.limit,"L"):e}/**
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
 */class A0{constructor(){this.Cn=new R0}addToCollectionParentIndex(e,t){return this.Cn.add(t),M.resolve()}getCollectionParents(e,t){return M.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return M.resolve()}deleteFieldIndex(e,t){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,t){return M.resolve()}getDocumentsMatchingTarget(e,t){return M.resolve(null)}getIndexType(e,t){return M.resolve(0)}getFieldIndexes(e,t){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,t){return M.resolve(un.min())}getMinOffsetFromCollectionGroup(e,t){return M.resolve(un.min())}updateCollectionGroup(e,t,r){return M.resolve()}updateIndexEntries(e,t){return M.resolve()}}class R0{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Be(Ee.comparator),o=!s.has(r);return this.index[t]=s.add(r),o}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Be(Ee.comparator)).toArray()}}/**
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
 */const Jc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},hd=41943040;class rt{static withCacheSize(e){return new rt(e,rt.DEFAULT_COLLECTION_PERCENTILE,rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */rt.DEFAULT_COLLECTION_PERCENTILE=10,rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,rt.DEFAULT=new rt(hd,rt.DEFAULT_COLLECTION_PERCENTILE,rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),rt.DISABLED=new rt(-1,0,0);/**
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
 */class hr{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new hr(0)}static cr(){return new hr(-1)}}/**
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
 */const Xc="LruGarbageCollector",S0=1048576;function Zc([n,e],[t,r]){const s=de(n,t);return s===0?de(e,r):s}class x0{constructor(e){this.Ir=e,this.buffer=new Be(Zc),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Zc(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class k0{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){q(Xc,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){vr(t)?q(Xc,"Ignoring IndexedDB error during garbage collection: ",t):await yr(t)}await this.Vr(3e5)}))}}class P0{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return M.resolve(Li.ce);const r=new x0(t);return this.mr.forEachTarget(e,(s=>r.Ar(s.sequenceNumber))).next((()=>this.mr.pr(e,(s=>r.Ar(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.mr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(q("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(Jc)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(q("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Jc):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let r,s,o,a,c,u,d;const g=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((y=>(y>this.params.maximumSequenceNumbersToCollect?(q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${y}`),s=this.params.maximumSequenceNumbersToCollect):s=y,a=Date.now(),this.nthSequenceNumber(e,s)))).next((y=>(r=y,c=Date.now(),this.removeTargets(e,r,t)))).next((y=>(o=y,u=Date.now(),this.removeOrphanedDocuments(e,r)))).next((y=>(d=Date.now(),Qn()<=he.DEBUG&&q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-g}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${o} targets in `+(u-c)+`ms
	Removed ${y} documents in `+(d-u)+`ms
Total Duration: ${d-g}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:y}))))}}function V0(n,e){return new P0(n,e)}/**
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
 */class M0{constructor(){this.changes=new Un((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Je.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?M.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class D0{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class N0{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&Zr(r.mutation,s,ct.empty(),Ce.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,fe()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=fe()){const s=Sn();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((o=>{let a=Gr();return o.forEach(((c,u)=>{a=a.insert(c,u.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const r=Sn();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,fe())))}populateOverlays(e,t,r){const s=[];return r.forEach((o=>{t.has(o)||s.push(o)})),this.documentOverlayCache.getOverlays(e,s).next((o=>{o.forEach(((a,c)=>{t.set(a,c)}))}))}computeViews(e,t,r,s){let o=Ot();const a=Xr(),c=(function(){return Xr()})();return t.forEach(((u,d)=>{const g=r.get(d.key);s.has(d.key)&&(g===void 0||g.mutation instanceof _n)?o=o.insert(d.key,d):g!==void 0?(a.set(d.key,g.mutation.getFieldMask()),Zr(g.mutation,d,g.mutation.getFieldMask(),Ce.now())):a.set(d.key,ct.empty())})),this.recalculateAndSaveOverlays(e,o).next((u=>(u.forEach(((d,g)=>a.set(d,g))),t.forEach(((d,g)=>c.set(d,new D0(g,a.get(d)??null)))),c)))}recalculateAndSaveOverlays(e,t){const r=Xr();let s=new Se(((a,c)=>a-c)),o=fe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const c of a)c.keys().forEach((u=>{const d=t.get(u);if(d===null)return;let g=r.get(u)||ct.empty();g=c.applyToLocalView(d,g),r.set(u,g);const y=(s.get(c.batchId)||fe()).add(u);s=s.insert(c.batchId,y)}))})).next((()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),d=u.key,g=u.value,y=Wh();g.forEach((I=>{if(!o.has(I)){const P=Zh(t.get(I),r.get(I));P!==null&&y.set(I,P),o=o.add(I)}})),a.push(this.documentOverlayCache.saveOverlays(e,d,y))}return M.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return(function(a){return Z.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):$h(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-o.size):M.resolve(Sn());let c=ss,u=o;return a.next((d=>M.forEach(d,((g,y)=>(c<y.largestBatchId&&(c=y.largestBatchId),o.get(g)?M.resolve():this.remoteDocumentCache.getEntry(e,g).next((I=>{u=u.insert(g,I)}))))).next((()=>this.populateOverlays(e,d,o))).next((()=>this.computeViews(e,u,d,fe()))).next((g=>({batchId:c,changes:Gh(g)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Z(t)).next((r=>{let s=Gr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const o=t.collectionGroup;let a=Gr();return this.indexManager.getCollectionParents(e,o).next((c=>M.forEach(c,(u=>{const d=(function(y,I){return new wr(I,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)})(t,u.child(o));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next((g=>{g.forEach(((y,I)=>{a=a.insert(y,I)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,s)))).next((a=>{o.forEach(((u,d)=>{const g=d.getKey();a.get(g)===null&&(a=a.insert(g,Je.newInvalidDocument(g)))}));let c=Gr();return a.forEach(((u,d)=>{const g=o.get(u);g!==void 0&&Zr(g.mutation,d,ct.empty(),Ce.now()),ji(t,d)&&(c=c.insert(u,d))})),c}))}}/**
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
 */class L0{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return M.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:Et(s.createTime)}})(t)),M.resolve()}getNamedQuery(e,t){return M.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(s){return{name:s.name,query:C0(s.bundledQuery),readTime:Et(s.readTime)}})(t)),M.resolve()}}/**
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
 */class O0{constructor(){this.overlays=new Se(Z.comparator),this.qr=new Map}getOverlay(e,t){return M.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Sn();return M.forEach(t,(s=>this.getOverlay(e,s).next((o=>{o!==null&&r.set(s,o)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((s,o)=>{this.St(e,t,o)})),M.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach((o=>this.overlays=this.overlays.remove(o))),this.qr.delete(r)),M.resolve()}getOverlaysForCollection(e,t,r){const s=Sn(),o=t.length+1,a=new Z(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===o&&u.largestBatchId>r&&s.set(u.getKey(),u)}return M.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let o=new Se(((d,g)=>d-g));const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let g=o.get(d.largestBatchId);g===null&&(g=Sn(),o=o.insert(d.largestBatchId,g)),g.set(d.getKey(),d)}}const c=Sn(),u=o.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach(((d,g)=>c.set(d,g))),!(c.size()>=s)););return M.resolve(c)}St(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new t0(t,r));let o=this.qr.get(t);o===void 0&&(o=fe(),this.qr.set(t,o)),this.qr.set(t,o.add(r.key))}}/**
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
 */class F0{constructor(){this.sessionToken=We.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,M.resolve()}}/**
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
 */class ka{constructor(){this.Qr=new Be(ze.$r),this.Ur=new Be(ze.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const r=new ze(e,t);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Gr(new ze(e,t))}zr(e,t){e.forEach((r=>this.removeReference(r,t)))}jr(e){const t=new Z(new Ee([])),r=new ze(t,e),s=new ze(t,e+1),o=[];return this.Ur.forEachInRange([r,s],(a=>{this.Gr(a),o.push(a.key)})),o}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new Z(new Ee([])),r=new ze(t,e),s=new ze(t,e+1);let o=fe();return this.Ur.forEachInRange([r,s],(a=>{o=o.add(a.key)})),o}containsKey(e){const t=new ze(e,0),r=this.Qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ze{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return Z.comparator(e.key,t.key)||de(e.Yr,t.Yr)}static Kr(e,t){return de(e.Yr,t.Yr)||Z.comparator(e.key,t.key)}}/**
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
 */class U0{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Be(ze.$r)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const o=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new e0(o,t,r,s);this.mutationQueue.push(a);for(const c of s)this.Zr=this.Zr.add(new ze(c.key,o)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return M.resolve(a)}lookupMutationBatch(e,t){return M.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.ei(r),o=s<0?0:s;return M.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?va:this.tr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ze(t,0),s=new ze(t,Number.POSITIVE_INFINITY),o=[];return this.Zr.forEachInRange([r,s],(a=>{const c=this.Xr(a.Yr);o.push(c)})),M.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Be(de);return t.forEach((s=>{const o=new ze(s,0),a=new ze(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([o,a],(c=>{r=r.add(c.Yr)}))})),M.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let o=r;Z.isDocumentKey(o)||(o=o.child(""));const a=new ze(new Z(o),0);let c=new Be(de);return this.Zr.forEachWhile((u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(c=c.add(u.Yr)),!0)}),a),M.resolve(this.ti(c))}ti(e){const t=[];return e.forEach((r=>{const s=this.Xr(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){ye(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return M.forEach(t.mutations,(s=>{const o=new ze(s.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Zr=r}))}ir(e){}containsKey(e,t){const r=new ze(t,0),s=this.Zr.firstAfterOrEqual(r);return M.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class B0{constructor(e){this.ri=e,this.docs=(function(){return new Se(Z.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),o=s?s.size:0,a=this.ri(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return M.resolve(r?r.document.mutableCopy():Je.newInvalidDocument(t))}getEntries(e,t){let r=Ot();return t.forEach((s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():Je.newInvalidDocument(s))})),M.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let o=Ot();const a=t.path,c=new Z(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:d,value:{document:g}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||gm(pm(g),r)<=0||(s.has(g.key)||ji(t,g))&&(o=o.insert(g.key,g.mutableCopy()))}return M.resolve(o)}getAllFromCollectionGroup(e,t,r,s){re(9500)}ii(e,t){return M.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new j0(this)}getSize(e){return M.resolve(this.size)}}class j0 extends M0{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)})),M.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
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
 */class $0{constructor(e){this.persistence=e,this.si=new Un((t=>Ea(t)),Ta),this.lastRemoteSnapshotVersion=ie.min(),this.highestTargetId=0,this.oi=0,this._i=new ka,this.targetCount=0,this.ai=hr.ur()}forEachTarget(e,t){return this.si.forEach(((r,s)=>t(s))),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.oi&&(this.oi=t),M.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new hr(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,M.resolve()}updateTargetData(e,t){return this.Pr(t),M.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,t,r){let s=0;const o=[];return this.si.forEach(((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.si.delete(a),o.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),M.waitFor(o).next((()=>s))}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,t){const r=this.si.get(t)||null;return M.resolve(r)}addMatchingKeys(e,t,r){return this._i.Wr(t,r),M.resolve()}removeMatchingKeys(e,t,r){this._i.zr(t,r);const s=this.persistence.referenceDelegate,o=[];return s&&t.forEach((a=>{o.push(s.markPotentiallyOrphaned(e,a))})),M.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),M.resolve()}getMatchingKeysForTargetId(e,t){const r=this._i.Hr(t);return M.resolve(r)}containsKey(e,t){return M.resolve(this._i.containsKey(t))}}/**
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
 */class dd{constructor(e,t){this.ui={},this.overlays={},this.ci=new Li(0),this.li=!1,this.li=!0,this.hi=new F0,this.referenceDelegate=e(this),this.Pi=new $0(this),this.indexManager=new A0,this.remoteDocumentCache=(function(s){return new B0(s)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new I0(t),this.Ii=new L0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new O0,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ui[e.toKey()];return r||(r=new U0(t,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,r){q("MemoryPersistence","Starting transaction:",e);const s=new q0(this.ci.next());return this.referenceDelegate.Ei(),r(s).next((o=>this.referenceDelegate.di(s).next((()=>o)))).toPromise().then((o=>(s.raiseOnCommittedEvent(),o)))}Ai(e,t){return M.or(Object.values(this.ui).map((r=>()=>r.containsKey(e,t))))}}class q0 extends _m{constructor(e){super(),this.currentSequenceNumber=e}}class Pa{constructor(e){this.persistence=e,this.Ri=new ka,this.Vi=null}static mi(e){return new Pa(e)}get fi(){if(this.Vi)return this.Vi;throw re(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.fi.delete(r.toString()),M.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.fi.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),M.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((s=>this.fi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((o=>this.fi.add(o.toString())))})).next((()=>r.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.fi,(r=>{const s=Z.fromPath(r);return this.gi(e,s).next((o=>{o||t.removeEntry(s,ie.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((r=>{r?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return M.or([()=>M.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class _i{constructor(e,t){this.persistence=e,this.pi=new Un((r=>wm(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=V0(this,t)}static mi(e,t){return new _i(e,t)}Ei(){}di(e){return M.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}wr(e){let t=0;return this.pr(e,(r=>{t++})).next((()=>t))}pr(e,t){return M.forEach(this.pi,((r,s)=>this.br(e,r,s).next((o=>o?M.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.ii(e,(a=>this.br(e,a,t).next((c=>{c||(r++,o.removeEntry(a,ie.min()))})))).next((()=>o.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),M.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),M.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Js(e.data.value)),t}br(e,t,r){return M.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.pi.get(t);return M.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Va{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Es=r,this.ds=s}static As(e,t){let r=fe(),s=fe();for(const o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new Va(e,t.fromCache,r,s)}}/**
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
 */class z0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class H0{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return Np()?8:ym(Xe())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const o={result:null};return this.ys(e,t).next((a=>{o.result=a})).next((()=>{if(!o.result)return this.ws(e,t,s,r).next((a=>{o.result=a}))})).next((()=>{if(o.result)return;const a=new z0;return this.Ss(e,t,a).next((c=>{if(o.result=c,this.Vs)return this.bs(e,t,a,c.size)}))})).next((()=>o.result))}bs(e,t,r,s){return r.documentReadCount<this.fs?(Qn()<=he.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",Yn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),M.resolve()):(Qn()<=he.DEBUG&&q("QueryEngine","Query:",Yn(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(Qn()<=he.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",Yn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,bt(t))):M.resolve())}ys(e,t){if(jc(t))return M.resolve(null);let r=bt(t);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=pi(t,null,"F"),r=bt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((o=>{const a=fe(...o);return this.ps.getDocuments(e,a).next((c=>this.indexManager.getMinOffset(e,r).next((u=>{const d=this.Ds(t,c);return this.Cs(t,d,a,u.readTime)?this.ys(e,pi(t,null,"F")):this.vs(e,d,t,u)}))))})))))}ws(e,t,r,s){return jc(t)||s.isEqual(ie.min())?M.resolve(null):this.ps.getDocuments(e,r).next((o=>{const a=this.Ds(t,o);return this.Cs(t,a,r,s)?M.resolve(null):(Qn()<=he.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Yn(t)),this.vs(e,a,t,fm(s,ss)).next((c=>c)))}))}Ds(e,t){let r=new Be(zh(e));return t.forEach(((s,o)=>{ji(e,o)&&(r=r.add(o))})),r}Cs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Ss(e,t,r){return Qn()<=he.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",Yn(t)),this.ps.getDocumentsMatchingQuery(e,t,un.min(),r)}vs(e,t,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next((o=>(t.forEach((a=>{o=o.insert(a.key,a)})),o)))}}/**
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
 */const Ma="LocalStore",G0=3e8;class W0{constructor(e,t,r,s){this.persistence=e,this.Fs=t,this.serializer=s,this.Ms=new Se(de),this.xs=new Un((o=>Ea(o)),Ta),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new N0(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function K0(n,e,t,r){return new W0(n,e,t,r)}async function fd(n,e){const t=oe(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((o=>(s=o,t.Bs(e),t.mutationQueue.getAllMutationBatches(r)))).next((o=>{const a=[],c=[];let u=fe();for(const d of s){a.push(d.batchId);for(const g of d.mutations)u=u.add(g.key)}for(const d of o){c.push(d.batchId);for(const g of d.mutations)u=u.add(g.key)}return t.localDocuments.getDocuments(r,u).next((d=>({Ls:d,removedBatchIds:a,addedBatchIds:c})))}))}))}function Q0(n,e){const t=oe(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),o=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(c,u,d,g){const y=d.batch,I=y.keys();let P=M.resolve();return I.forEach((N=>{P=P.next((()=>g.getEntry(u,N))).next((D=>{const S=d.docVersions.get(N);ye(S!==null,48541),D.version.compareTo(S)<0&&(y.applyToRemoteDocument(D,d),D.isValidDocument()&&(D.setReadTime(d.commitVersion),g.addEntry(D)))}))})),P.next((()=>c.mutationQueue.removeMutationBatch(u,y)))})(t,r,e,o).next((()=>o.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let u=fe();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(u=u.add(c.batch.mutations[d].key));return u})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function pd(n){const e=oe(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function Y0(n,e){const t=oe(n),r=e.snapshotVersion;let s=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(o=>{const a=t.Ns.newChangeBuffer({trackRemovals:!0});s=t.Ms;const c=[];e.targetChanges.forEach(((g,y)=>{const I=s.get(y);if(!I)return;c.push(t.Pi.removeMatchingKeys(o,g.removedDocuments,y).next((()=>t.Pi.addMatchingKeys(o,g.addedDocuments,y))));let P=I.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(y)!==null?P=P.withResumeToken(We.EMPTY_BYTE_STRING,ie.min()).withLastLimboFreeSnapshotVersion(ie.min()):g.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(g.resumeToken,r)),s=s.insert(y,P),(function(D,S,L){return D.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=G0?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0})(I,P,g)&&c.push(t.Pi.updateTargetData(o,P))}));let u=Ot(),d=fe();if(e.documentUpdates.forEach((g=>{e.resolvedLimboDocuments.has(g)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(o,g))})),c.push(J0(o,a,e.documentUpdates).next((g=>{u=g.ks,d=g.qs}))),!r.isEqual(ie.min())){const g=t.Pi.getLastRemoteSnapshotVersion(o).next((y=>t.Pi.setTargetsMetadata(o,o.currentSequenceNumber,r)));c.push(g)}return M.waitFor(c).next((()=>a.apply(o))).next((()=>t.localDocuments.getLocalViewOfDocuments(o,u,d))).next((()=>u))})).then((o=>(t.Ms=s,o)))}function J0(n,e,t){let r=fe(),s=fe();return t.forEach((o=>r=r.add(o))),e.getEntries(n,r).next((o=>{let a=Ot();return t.forEach(((c,u)=>{const d=o.get(c);u.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),u.isNoDocument()&&u.version.isEqual(ie.min())?(e.removeEntry(c,u.readTime),a=a.insert(c,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),a=a.insert(c,u)):q(Ma,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",u.version)})),{ks:a,qs:s}}))}function X0(n,e){const t=oe(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=va),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function Z0(n,e){const t=oe(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.Pi.getTargetData(r,e).next((o=>o?(s=o,M.resolve(s)):t.Pi.allocateTargetId(r).next((a=>(s=new rn(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Pi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(r.targetId,r),t.xs.set(e,r.targetId)),r}))}async function na(n,e,t){const r=oe(n),s=r.Ms.get(e),o=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",o,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!vr(a))throw a;q(Ma,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function eu(n,e,t){const r=oe(n);let s=ie.min(),o=fe();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(u,d,g){const y=oe(u),I=y.xs.get(g);return I!==void 0?M.resolve(y.Ms.get(I)):y.Pi.getTargetData(d,g)})(r,a,bt(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,c.targetId).next((u=>{o=u}))})).next((()=>r.Fs.getDocumentsMatchingQuery(a,e,t?s:ie.min(),t?o:fe()))).next((c=>(e1(r,Um(e),c),{documents:c,Qs:o})))))}function e1(n,e,t){let r=n.Os.get(e)||ie.min();t.forEach(((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)})),n.Os.set(e,r)}class tu{constructor(){this.activeTargetIds=Hm()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class t1{constructor(){this.Mo=new tu,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,r){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new tu,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class n1{Oo(e){}shutdown(){}}/**
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
 */const nu="ConnectivityMonitor";class ru{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){q(nu,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){q(nu,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let zs=null;function ra(){return zs===null?zs=(function(){return 268435456+Math.round(2147483648*Math.random())})():zs++,"0x"+zs.toString(16)}/**
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
 */const Po="RestConnection",r1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class s1{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===hi?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,t,r,s,o){const a=ra(),c=this.zo(e,t.toUriEncodedString());q(Po,`Sending RPC '${e}' ${a}:`,c,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,s,o);const{host:d}=new URL(c),g=gr(d);return this.Jo(e,c,u,r,g).then((y=>(q(Po,`Received RPC '${e}' ${a}: `,y),y)),(y=>{throw ir(Po,`RPC '${e}' ${a} failed with error: `,y,"url: ",c,"request:",r),y}))}Ho(e,t,r,s,o,a){return this.Go(e,t,r,s,o)}jo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+_r})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,o)=>e[o]=s)),r&&r.headers.forEach(((s,o)=>e[o]=s))}zo(e,t){const r=r1[e];return`${this.Uo}/v1/${t}:${r}`}terminate(){}}/**
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
 */class i1{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const Qe="WebChannelConnection";class o1 extends s1{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,s,o){const a=ra();return new Promise(((c,u)=>{const d=new _h;d.setWithCredentials(!0),d.listenOnce(yh.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case Ys.NO_ERROR:const y=d.getResponseJson();q(Qe,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(y)),c(y);break;case Ys.TIMEOUT:q(Qe,`RPC '${e}' ${a} timed out`),u(new B(V.DEADLINE_EXCEEDED,"Request time out"));break;case Ys.HTTP_ERROR:const I=d.getStatus();if(q(Qe,`RPC '${e}' ${a} failed with status:`,I,"response text:",d.getResponseText()),I>0){let P=d.getResponseJson();Array.isArray(P)&&(P=P[0]);const N=P?.error;if(N&&N.status&&N.message){const D=(function(L){const W=L.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(W)>=0?W:V.UNKNOWN})(N.status);u(new B(D,N.message))}else u(new B(V.UNKNOWN,"Server responded with status "+d.getStatus()))}else u(new B(V.UNAVAILABLE,"Connection failed."));break;default:re(9055,{l_:e,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{q(Qe,`RPC '${e}' ${a} completed.`)}}));const g=JSON.stringify(s);q(Qe,`RPC '${e}' ${a} sending request:`,s),d.send(t,"POST",g,r,15)}))}T_(e,t,r){const s=ra(),o=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=bh(),c=wh(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const g=o.join("");q(Qe,`Creating RPC '${e}' stream ${s}: ${g}`,u);const y=a.createWebChannel(g,u);this.I_(y);let I=!1,P=!1;const N=new i1({Yo:S=>{P?q(Qe,`Not sending because RPC '${e}' stream ${s} is closed:`,S):(I||(q(Qe,`Opening RPC '${e}' stream ${s} transport.`),y.open(),I=!0),q(Qe,`RPC '${e}' stream ${s} sending:`,S),y.send(S))},Zo:()=>y.close()}),D=(S,L,W)=>{S.listen(L,(ee=>{try{W(ee)}catch(we){setTimeout((()=>{throw we}),0)}}))};return D(y,Hr.EventType.OPEN,(()=>{P||(q(Qe,`RPC '${e}' stream ${s} transport opened.`),N.o_())})),D(y,Hr.EventType.CLOSE,(()=>{P||(P=!0,q(Qe,`RPC '${e}' stream ${s} transport closed`),N.a_(),this.E_(y))})),D(y,Hr.EventType.ERROR,(S=>{P||(P=!0,ir(Qe,`RPC '${e}' stream ${s} transport errored. Name:`,S.name,"Message:",S.message),N.a_(new B(V.UNAVAILABLE,"The operation could not be completed")))})),D(y,Hr.EventType.MESSAGE,(S=>{if(!P){const L=S.data[0];ye(!!L,16349);const W=L,ee=W?.error||W[0]?.error;if(ee){q(Qe,`RPC '${e}' stream ${s} received error:`,ee);const we=ee.status;let xe=(function(m){const _=Ne[m];if(_!==void 0)return td(_)})(we),ge=ee.message;xe===void 0&&(xe=V.INTERNAL,ge="Unknown error status: "+we+" with message "+ee.message),P=!0,N.a_(new B(xe,ge)),y.close()}else q(Qe,`RPC '${e}' stream ${s} received:`,L),N.u_(L)}})),D(c,vh.STAT_EVENT,(S=>{S.stat===Ho.PROXY?q(Qe,`RPC '${e}' stream ${s} detected buffering proxy`):S.stat===Ho.NOPROXY&&q(Qe,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{N.__()}),0),N}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function Vo(){return typeof document<"u"?document:null}/**
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
 */function Hi(n){return new u0(n,!0)}/**
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
 */class gd{constructor(e,t,r=1e3,s=1.5,o=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=s,this.R_=o,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&q("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const su="PersistentStream";class md{constructor(e,t,r,s,o,a,c,u){this.Mi=e,this.S_=r,this.b_=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new gd(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===V.RESOURCE_EXHAUSTED?(Lt(t.toString()),Lt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===t&&this.G_(r,s)}),(r=>{e((()=>{const s=new B(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(e,t){const r=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return q(su,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(q(su,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class a1 extends md{constructor(e,t,r,s,o,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=o}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=f0(this.serializer,e),r=(function(o){if(!("targetChange"in o))return ie.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?ie.min():a.readTime?Et(a.readTime):ie.min()})(e);return this.listener.H_(t,r)}Y_(e){const t={};t.database=ta(this.serializer),t.addTarget=(function(o,a){let c;const u=a.target;if(c=Yo(u)?{documents:m0(o,u)}:{query:_0(o,u).ft},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=sd(o,a.resumeToken);const d=Xo(o,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(ie.min())>0){c.readTime=mi(o,a.snapshotVersion.toTimestamp());const d=Xo(o,a.expectedCount);d!==null&&(c.expectedCount=d)}return c})(this.serializer,e);const r=v0(this.serializer,e);r&&(t.labels=r),this.q_(t)}Z_(e){const t={};t.database=ta(this.serializer),t.removeTarget=e,this.q_(t)}}class l1 extends md{constructor(e,t,r,s,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=o}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return ye(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ye(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ye(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=g0(e.writeResults,e.commitTime),r=Et(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=ta(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>p0(this.serializer,r)))};this.q_(t)}}/**
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
 */class c1{}class u1 extends c1{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new B(V.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.Go(e,Zo(t,r),s,o,a))).catch((o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new B(V.UNKNOWN,o.toString())}))}Ho(e,t,r,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,c])=>this.connection.Ho(e,Zo(t,r),s,a,c,o))).catch((a=>{throw a.name==="FirebaseError"?(a.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new B(V.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class h1{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Lt(t),this.aa=!1):q("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Ln="RemoteStore";class d1{constructor(e,t,r,s,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=o,this.Aa.Oo((a=>{r.enqueueAndForget((async()=>{Bn(this)&&(q(Ln,"Restarting streams for network reachability change."),await(async function(u){const d=oe(u);d.Ea.add(4),await _s(d),d.Ra.set("Unknown"),d.Ea.delete(4),await Gi(d)})(this))}))})),this.Ra=new h1(r,s)}}async function Gi(n){if(Bn(n))for(const e of n.da)await e(!0)}async function _s(n){for(const e of n.da)await e(!1)}function _d(n,e){const t=oe(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Oa(t)?La(t):br(t).O_()&&Na(t,e))}function Da(n,e){const t=oe(n),r=br(t);t.Ia.delete(e),r.O_()&&yd(t,e),t.Ia.size===0&&(r.O_()?r.L_():Bn(t)&&t.Ra.set("Unknown"))}function Na(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ie.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}br(n).Y_(e)}function yd(n,e){n.Va.Ue(e),br(n).Z_(e)}function La(n){n.Va=new o0({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),br(n).start(),n.Ra.ua()}function Oa(n){return Bn(n)&&!br(n).x_()&&n.Ia.size>0}function Bn(n){return oe(n).Ea.size===0}function vd(n){n.Va=void 0}async function f1(n){n.Ra.set("Online")}async function p1(n){n.Ia.forEach(((e,t)=>{Na(n,e)}))}async function g1(n,e){vd(n),Oa(n)?(n.Ra.ha(e),La(n)):n.Ra.set("Unknown")}async function m1(n,e,t){if(n.Ra.set("Online"),e instanceof rd&&e.state===2&&e.cause)try{await(async function(s,o){const a=o.cause;for(const c of o.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.Ia.delete(c),s.Va.removeTarget(c))})(n,e)}catch(r){q(Ln,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await yi(n,r)}else if(e instanceof ei?n.Va.Ze(e):e instanceof nd?n.Va.st(e):n.Va.tt(e),!t.isEqual(ie.min()))try{const r=await pd(n.localStore);t.compareTo(r)>=0&&await(function(o,a){const c=o.Va.Tt(a);return c.targetChanges.forEach(((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const g=o.Ia.get(d);g&&o.Ia.set(d,g.withResumeToken(u.resumeToken,a))}})),c.targetMismatches.forEach(((u,d)=>{const g=o.Ia.get(u);if(!g)return;o.Ia.set(u,g.withResumeToken(We.EMPTY_BYTE_STRING,g.snapshotVersion)),yd(o,u);const y=new rn(g.target,u,d,g.sequenceNumber);Na(o,y)})),o.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(r){q(Ln,"Failed to raise snapshot:",r),await yi(n,r)}}async function yi(n,e,t){if(!vr(e))throw e;n.Ea.add(1),await _s(n),n.Ra.set("Offline"),t||(t=()=>pd(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{q(Ln,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Gi(n)}))}function wd(n,e){return e().catch((t=>yi(n,t,e)))}async function Wi(n){const e=oe(n),t=pn(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:va;for(;_1(e);)try{const s=await X0(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,y1(e,s)}catch(s){await yi(e,s)}bd(e)&&Ed(e)}function _1(n){return Bn(n)&&n.Ta.length<10}function y1(n,e){n.Ta.push(e);const t=pn(n);t.O_()&&t.X_&&t.ea(e.mutations)}function bd(n){return Bn(n)&&!pn(n).x_()&&n.Ta.length>0}function Ed(n){pn(n).start()}async function v1(n){pn(n).ra()}async function w1(n){const e=pn(n);for(const t of n.Ta)e.ea(t.mutations)}async function b1(n,e,t){const r=n.Ta.shift(),s=Ra.from(r,e,t);await wd(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await Wi(n)}async function E1(n,e){e&&pn(n).X_&&await(async function(r,s){if((function(a){return r0(a)&&a!==V.ABORTED})(s.code)){const o=r.Ta.shift();pn(r).B_(),await wd(r,(()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s))),await Wi(r)}})(n,e),bd(n)&&Ed(n)}async function iu(n,e){const t=oe(n);t.asyncQueue.verifyOperationInProgress(),q(Ln,"RemoteStore received new credentials");const r=Bn(t);t.Ea.add(3),await _s(t),r&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Gi(t)}async function T1(n,e){const t=oe(n);e?(t.Ea.delete(2),await Gi(t)):e||(t.Ea.add(2),await _s(t),t.Ra.set("Unknown"))}function br(n){return n.ma||(n.ma=(function(t,r,s){const o=oe(t);return o.sa(),new a1(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)})(n.datastore,n.asyncQueue,{Xo:f1.bind(null,n),t_:p1.bind(null,n),r_:g1.bind(null,n),H_:m1.bind(null,n)}),n.da.push((async e=>{e?(n.ma.B_(),Oa(n)?La(n):n.Ra.set("Unknown")):(await n.ma.stop(),vd(n))}))),n.ma}function pn(n){return n.fa||(n.fa=(function(t,r,s){const o=oe(t);return o.sa(),new l1(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:v1.bind(null,n),r_:E1.bind(null,n),ta:w1.bind(null,n),na:b1.bind(null,n)}),n.da.push((async e=>{e?(n.fa.B_(),await Wi(n)):(await n.fa.stop(),n.Ta.length>0&&(q(Ln,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
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
 */class Fa{constructor(e,t,r,s,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new Vt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,o){const a=Date.now()+r,c=new Fa(e,t,a,s,o);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ua(n,e){if(Lt("AsyncQueue",`${e}: ${n}`),vr(n))return new B(V.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class er{static emptySet(e){return new er(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||Z.comparator(t.key,r.key):(t,r)=>Z.comparator(t.key,r.key),this.keyedMap=Gr(),this.sortedSet=new Se(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof er)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new er;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class ou{constructor(){this.ga=new Se(Z.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):re(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,r)=>{e.push(r)})),e}}class dr{constructor(e,t,r,s,o,a,c,u,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,s,o){const a=[];return t.forEach((c=>{a.push({type:0,doc:c})})),new dr(e,t,er.emptySet(t),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Bi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class I1{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class C1{constructor(){this.queries=au(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const s=oe(t),o=s.queries;s.queries=au(),o.forEach(((a,c)=>{for(const u of c.Sa)u.onError(r)}))})(this,new B(V.ABORTED,"Firestore shutting down"))}}function au(){return new Un((n=>qh(n)),Bi)}async function Ba(n,e){const t=oe(n);let r=3;const s=e.query;let o=t.queries.get(s);o?!o.ba()&&e.Da()&&(r=2):(o=new I1,r=e.Da()?0:1);try{switch(r){case 0:o.wa=await t.onListen(s,!0);break;case 1:o.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=Ua(a,`Initialization of query '${Yn(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,o),o.Sa.push(e),e.va(t.onlineState),o.wa&&e.Fa(o.wa)&&$a(t)}async function ja(n,e){const t=oe(n),r=e.query;let s=3;const o=t.queries.get(r);if(o){const a=o.Sa.indexOf(e);a>=0&&(o.Sa.splice(a,1),o.Sa.length===0?s=e.Da()?0:1:!o.ba()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function A1(n,e){const t=oe(n);let r=!1;for(const s of e){const o=s.query,a=t.queries.get(o);if(a){for(const c of a.Sa)c.Fa(s)&&(r=!0);a.wa=s}}r&&$a(t)}function R1(n,e,t){const r=oe(n),s=r.queries.get(e);if(s)for(const o of s.Sa)o.onError(t);r.queries.delete(e)}function $a(n){n.Ca.forEach((e=>{e.next()}))}var sa,lu;(lu=sa||(sa={})).Ma="default",lu.Cache="cache";class qa{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new dr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=dr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==sa.Cache}}/**
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
 */class Td{constructor(e){this.key=e}}class Id{constructor(e){this.key=e}}class S1{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=fe(),this.mutatedKeys=fe(),this.eu=zh(e),this.tu=new er(this.eu)}get nu(){return this.Ya}ru(e,t){const r=t?t.iu:new ou,s=t?t.tu:this.tu;let o=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((g,y)=>{const I=s.get(g),P=ji(this.query,y)?y:null,N=!!I&&this.mutatedKeys.has(I.key),D=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let S=!1;I&&P?I.data.isEqual(P.data)?N!==D&&(r.track({type:3,doc:P}),S=!0):this.su(I,P)||(r.track({type:2,doc:P}),S=!0,(u&&this.eu(P,u)>0||d&&this.eu(P,d)<0)&&(c=!0)):!I&&P?(r.track({type:0,doc:P}),S=!0):I&&!P&&(r.track({type:1,doc:I}),S=!0,(u||d)&&(c=!0)),S&&(P?(a=a.add(P),o=D?o.add(g):o.delete(g)):(a=a.delete(g),o=o.delete(g)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const g=this.query.limitType==="F"?a.last():a.first();a=a.delete(g.key),o=o.delete(g.key),r.track({type:1,doc:g})}return{tu:a,iu:r,Cs:c,mutatedKeys:o}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const o=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort(((g,y)=>(function(P,N){const D=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return re(20277,{Rt:S})}};return D(P)-D(N)})(g.type,y.type)||this.eu(g.doc,y.doc))),this.ou(r),s=s??!1;const c=t&&!s?this._u():[],u=this.Xa.size===0&&this.current&&!s?1:0,d=u!==this.Za;return this.Za=u,a.length!==0||d?{snapshot:new dr(this.query,e.tu,o,a,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new ou,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=fe(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const t=[];return e.forEach((r=>{this.Xa.has(r)||t.push(new Id(r))})),this.Xa.forEach((r=>{e.has(r)||t.push(new Td(r))})),t}cu(e){this.Ya=e.Qs,this.Xa=fe();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return dr.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const za="SyncEngine";class x1{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class k1{constructor(e){this.key=e,this.hu=!1}}class P1{constructor(e,t,r,s,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new Un((c=>qh(c)),Bi),this.Iu=new Map,this.Eu=new Set,this.du=new Se(Z.comparator),this.Au=new Map,this.Ru=new ka,this.Vu={},this.mu=new Map,this.fu=hr.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function V1(n,e,t=!0){const r=kd(n);let s;const o=r.Tu.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.lu()):s=await Cd(r,e,t,!0),s}async function M1(n,e){const t=kd(n);await Cd(t,e,!0,!1)}async function Cd(n,e,t,r){const s=await Z0(n.localStore,bt(e)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,t);let c;return r&&(c=await D1(n,e,o,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&_d(n.remoteStore,s),c}async function D1(n,e,t,r,s){n.pu=(y,I,P)=>(async function(D,S,L,W){let ee=S.view.ru(L);ee.Cs&&(ee=await eu(D.localStore,S.query,!1).then((({documents:T})=>S.view.ru(T,ee))));const we=W&&W.targetChanges.get(S.targetId),xe=W&&W.targetMismatches.get(S.targetId)!=null,ge=S.view.applyChanges(ee,D.isPrimaryClient,we,xe);return uu(D,S.targetId,ge.au),ge.snapshot})(n,y,I,P);const o=await eu(n.localStore,e,!0),a=new S1(e,o.Qs),c=a.ru(o.documents),u=ms.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),d=a.applyChanges(c,n.isPrimaryClient,u);uu(n,t,d.au);const g=new x1(e,t,a);return n.Tu.set(e,g),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),d.snapshot}async function N1(n,e,t){const r=oe(n),s=r.Tu.get(e),o=r.Iu.get(s.targetId);if(o.length>1)return r.Iu.set(s.targetId,o.filter((a=>!Bi(a,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await na(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Da(r.remoteStore,s.targetId),ia(r,s.targetId)})).catch(yr)):(ia(r,s.targetId),await na(r.localStore,s.targetId,!0))}async function L1(n,e){const t=oe(n),r=t.Tu.get(e),s=t.Iu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Da(t.remoteStore,r.targetId))}async function O1(n,e,t){const r=z1(n);try{const s=await(function(a,c){const u=oe(a),d=Ce.now(),g=c.reduce(((P,N)=>P.add(N.key)),fe());let y,I;return u.persistence.runTransaction("Locally write mutations","readwrite",(P=>{let N=Ot(),D=fe();return u.Ns.getEntries(P,g).next((S=>{N=S,N.forEach(((L,W)=>{W.isValidDocument()||(D=D.add(L))}))})).next((()=>u.localDocuments.getOverlayedDocuments(P,N))).next((S=>{y=S;const L=[];for(const W of c){const ee=Xm(W,y.get(W.key).overlayedDocument);ee!=null&&L.push(new _n(W.key,ee,Nh(ee.value.mapValue),dt.exists(!0)))}return u.mutationQueue.addMutationBatch(P,d,L,c)})).next((S=>{I=S;const L=S.applyToLocalDocumentSet(y,D);return u.documentOverlayCache.saveOverlays(P,S.batchId,L)}))})).then((()=>({batchId:I.batchId,changes:Gh(y)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(a,c,u){let d=a.Vu[a.currentUser.toKey()];d||(d=new Se(de)),d=d.insert(c,u),a.Vu[a.currentUser.toKey()]=d})(r,s.batchId,t),await ys(r,s.changes),await Wi(r.remoteStore)}catch(s){const o=Ua(s,"Failed to persist write");t.reject(o)}}async function Ad(n,e){const t=oe(n);try{const r=await Y0(t.localStore,e);e.targetChanges.forEach(((s,o)=>{const a=t.Au.get(o);a&&(ye(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?ye(a.hu,14607):s.removedDocuments.size>0&&(ye(a.hu,42227),a.hu=!1))})),await ys(t,r,e)}catch(r){await yr(r)}}function cu(n,e,t){const r=oe(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Tu.forEach(((o,a)=>{const c=a.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(a,c){const u=oe(a);u.onlineState=c;let d=!1;u.queries.forEach(((g,y)=>{for(const I of y.Sa)I.va(c)&&(d=!0)})),d&&$a(u)})(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function F1(n,e,t){const r=oe(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Au.get(e),o=s&&s.key;if(o){let a=new Se(Z.comparator);a=a.insert(o,Je.newNoDocument(o,ie.min()));const c=fe().add(o),u=new zi(ie.min(),new Map,new Se(de),a,c);await Ad(r,u),r.du=r.du.remove(o),r.Au.delete(e),Ha(r)}else await na(r.localStore,e,!1).then((()=>ia(r,e,t))).catch(yr)}async function U1(n,e){const t=oe(n),r=e.batch.batchId;try{const s=await Q0(t.localStore,e);Sd(t,r,null),Rd(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ys(t,s)}catch(s){await yr(s)}}async function B1(n,e,t){const r=oe(n);try{const s=await(function(a,c){const u=oe(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let g;return u.mutationQueue.lookupMutationBatch(d,c).next((y=>(ye(y!==null,37113),g=y.keys(),u.mutationQueue.removeMutationBatch(d,y)))).next((()=>u.mutationQueue.performConsistencyCheck(d))).next((()=>u.documentOverlayCache.removeOverlaysForBatchId(d,g,c))).next((()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,g))).next((()=>u.localDocuments.getDocuments(d,g)))}))})(r.localStore,e);Sd(r,e,t),Rd(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ys(r,s)}catch(s){await yr(s)}}function Rd(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function Sd(n,e,t){const r=oe(n);let s=r.Vu[r.currentUser.toKey()];if(s){const o=s.get(e);o&&(t?o.reject(t):o.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function ia(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach((r=>{n.Ru.containsKey(r)||xd(n,r)}))}function xd(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Da(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),Ha(n))}function uu(n,e,t){for(const r of t)r instanceof Td?(n.Ru.addReference(r.key,e),j1(n,r)):r instanceof Id?(q(za,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,e),n.Ru.containsKey(r.key)||xd(n,r.key)):re(19791,{wu:r})}function j1(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Eu.has(r)||(q(za,"New document in limbo: "+t),n.Eu.add(r),Ha(n))}function Ha(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new Z(Ee.fromString(e)),r=n.fu.next();n.Au.set(r,new k1(t)),n.du=n.du.insert(t,r),_d(n.remoteStore,new rn(bt(Ui(t.path)),r,"TargetPurposeLimboResolution",Li.ce))}}async function ys(n,e,t){const r=oe(n),s=[],o=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach(((c,u)=>{a.push(r.pu(u,e,t).then((d=>{if((d||t)&&r.isPrimaryClient){const g=d?!d.fromCache:t?.targetChanges.get(u.targetId)?.current;r.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(d){s.push(d);const g=Va.As(u.targetId,d);o.push(g)}})))})),await Promise.all(a),r.Pu.H_(s),await(async function(u,d){const g=oe(u);try{await g.persistence.runTransaction("notifyLocalViewChanges","readwrite",(y=>M.forEach(d,(I=>M.forEach(I.Es,(P=>g.persistence.referenceDelegate.addReference(y,I.targetId,P))).next((()=>M.forEach(I.ds,(P=>g.persistence.referenceDelegate.removeReference(y,I.targetId,P)))))))))}catch(y){if(!vr(y))throw y;q(Ma,"Failed to update sequence numbers: "+y)}for(const y of d){const I=y.targetId;if(!y.fromCache){const P=g.Ms.get(I),N=P.snapshotVersion,D=P.withLastLimboFreeSnapshotVersion(N);g.Ms=g.Ms.insert(I,D)}}})(r.localStore,o))}async function $1(n,e){const t=oe(n);if(!t.currentUser.isEqual(e)){q(za,"User change. New user:",e.toKey());const r=await fd(t.localStore,e);t.currentUser=e,(function(o,a){o.mu.forEach((c=>{c.forEach((u=>{u.reject(new B(V.CANCELLED,a))}))})),o.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ys(t,r.Ls)}}function q1(n,e){const t=oe(n),r=t.Au.get(e);if(r&&r.hu)return fe().add(r.key);{let s=fe();const o=t.Iu.get(e);if(!o)return s;for(const a of o){const c=t.Tu.get(a);s=s.unionWith(c.view.nu)}return s}}function kd(n){const e=oe(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ad.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=q1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=F1.bind(null,e),e.Pu.H_=A1.bind(null,e.eventManager),e.Pu.yu=R1.bind(null,e.eventManager),e}function z1(n){const e=oe(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=U1.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=B1.bind(null,e),e}class vi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Hi(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return K0(this.persistence,new H0,e.initialUser,this.serializer)}Cu(e){return new dd(Pa.mi,this.serializer)}Du(e){return new t1}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}vi.provider={build:()=>new vi};class H1 extends vi{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){ye(this.persistence.referenceDelegate instanceof _i,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new k0(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?rt.withCacheSize(this.cacheSizeBytes):rt.DEFAULT;return new dd((r=>_i.mi(r,t)),this.serializer)}}class oa{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>cu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=$1.bind(null,this.syncEngine),await T1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new C1})()}createDatastore(e){const t=Hi(e.databaseInfo.databaseId),r=(function(o){return new o1(o)})(e.databaseInfo);return(function(o,a,c,u){return new u1(o,a,c,u)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,o,a,c){return new d1(r,s,o,a,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>cu(this.syncEngine,t,0)),(function(){return ru.v()?new ru:new n1})())}createSyncEngine(e,t){return(function(s,o,a,c,u,d,g){const y=new P1(s,o,a,c,u,d);return g&&(y.gu=!0),y})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const r=oe(t);q(Ln,"RemoteStore shutting down."),r.Ea.add(5),await _s(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}oa.provider={build:()=>new oa};/**
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
 */const gn="FirestoreClient";class G1{constructor(e,t,r,s,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Ye.UNAUTHENTICATED,this.clientId=ya.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,(async a=>{q(gn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(q(gn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Vt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Ua(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Mo(n,e){n.asyncQueue.verifyOperationInProgress(),q(gn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await fd(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function hu(n,e){n.asyncQueue.verifyOperationInProgress();const t=await W1(n);q(gn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>iu(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>iu(e.remoteStore,s))),n._onlineComponents=e}async function W1(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){q(gn,"Using user provided OfflineComponentProvider");try{await Mo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;ir("Error using user provided cache. Falling back to memory cache: "+t),await Mo(n,new vi)}}else q(gn,"Using default OfflineComponentProvider"),await Mo(n,new H1(void 0));return n._offlineComponents}async function Pd(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(q(gn,"Using user provided OnlineComponentProvider"),await hu(n,n._uninitializedComponentsProvider._online)):(q(gn,"Using default OnlineComponentProvider"),await hu(n,new oa))),n._onlineComponents}function K1(n){return Pd(n).then((e=>e.syncEngine))}async function wi(n){const e=await Pd(n),t=e.eventManager;return t.onListen=V1.bind(null,e.syncEngine),t.onUnlisten=N1.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=M1.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=L1.bind(null,e.syncEngine),t}function Q1(n,e,t={}){const r=new Vt;return n.asyncQueue.enqueueAndForget((async()=>(function(o,a,c,u,d){const g=new Ga({next:I=>{g.Nu(),a.enqueueAndForget((()=>ja(o,y)));const P=I.docs.has(c);!P&&I.fromCache?d.reject(new B(V.UNAVAILABLE,"Failed to get document because the client is offline.")):P&&I.fromCache&&u&&u.source==="server"?d.reject(new B(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(I)},error:I=>d.reject(I)}),y=new qa(Ui(c.path),g,{includeMetadataChanges:!0,qa:!0});return Ba(o,y)})(await wi(n),n.asyncQueue,e,t,r))),r.promise}function Y1(n,e,t={}){const r=new Vt;return n.asyncQueue.enqueueAndForget((async()=>(function(o,a,c,u,d){const g=new Ga({next:I=>{g.Nu(),a.enqueueAndForget((()=>ja(o,y))),I.fromCache&&u.source==="server"?d.reject(new B(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(I)},error:I=>d.reject(I)}),y=new qa(c,g,{includeMetadataChanges:!0,qa:!0});return Ba(o,y)})(await wi(n),n.asyncQueue,e,t,r))),r.promise}/**
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
 */function Vd(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Md="firestore.googleapis.com",fu=!0;class pu{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new B(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Md,this.ssl=fu}else this.host=e.host,this.ssl=e.ssl??fu;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=hd;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<S0)throw new B(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}hm("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Vd(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new B(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new B(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new B(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ki{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new pu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new B(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new B(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new pu(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new tm;switch(r.type){case"firstParty":return new im(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=du.get(t);r&&(q("ComponentProvider","Removing Datastore"),du.delete(t),r.terminate())})(this),Promise.resolve()}}function J1(n,e,t,r={}){n=it(n,Ki);const s=gr(e),o=n._getSettings(),a={...o,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;s&&(lh(`https://${c}`),ch("Firestore",!0)),o.host!==Md&&o.host!==c&&ir("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...o,host:c,ssl:s,emulatorOptions:r};if(!Dt(u,a)&&(n._setSettings(u),r.mockUserToken)){let d,g;if(typeof r.mockUserToken=="string")d=r.mockUserToken,g=Ye.MOCK_USER;else{d=Ap(r.mockUserToken,n._app?.options.projectId);const y=r.mockUserToken.sub||r.mockUserToken.user_id;if(!y)throw new B(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Ye(y)}n._authCredentials=new nm(new Th(d,g))}}/**
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
 */class jt{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new jt(this.firestore,e,this._query)}}class Pe{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new cn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Pe(this.firestore,e,this._key)}toJSON(){return{type:Pe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(ps(t,Pe._jsonSchema))return new Pe(e,r||null,new Z(Ee.fromString(t.referencePath)))}}Pe._jsonSchemaVersion="firestore/documentReference/1.0",Pe._jsonSchema={type:Oe("string",Pe._jsonSchemaVersion),referencePath:Oe("string")};class cn extends jt{constructor(e,t,r){super(e,t,Ui(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Pe(this.firestore,null,new Z(e))}withConverter(e){return new cn(this.firestore,e,this._path)}}function Wa(n,e,...t){if(n=je(n),Ih("collection","path",e),n instanceof Ki){const r=Ee.fromString(e,...t);return Rc(r),new cn(n,null,r)}{if(!(n instanceof Pe||n instanceof cn))throw new B(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Ee.fromString(e,...t));return Rc(r),new cn(n.firestore,null,r)}}function xn(n,e,...t){if(n=je(n),arguments.length===1&&(e=ya.newId()),Ih("doc","path",e),n instanceof Ki){const r=Ee.fromString(e,...t);return Ac(r),new Pe(n,null,new Z(r))}{if(!(n instanceof Pe||n instanceof cn))throw new B(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Ee.fromString(e,...t));return Ac(r),new Pe(n.firestore,n instanceof cn?n.converter:null,new Z(r))}}/**
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
 */const gu="AsyncQueue";class mu{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new gd(this,"async_queue_retry"),this._c=()=>{const r=Vo();r&&q(gu,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=Vo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Vo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Vt;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!vr(e))throw e;q(gu,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,Lt("INTERNAL UNHANDLED ERROR: ",_u(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=Fa.createAndSchedule(this,e,t,r,(o=>this.hc(o)));return this.tc.push(s),s}uc(){this.nc&&re(47125,{Pc:_u(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function _u(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function yu(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const o of r)if(o in s&&typeof s[o]=="function")return!0;return!1})(n,["next","error","complete"])}class Ft extends Ki{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new mu,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new mu(e),this._firestoreClient=void 0,await e}}}function X1(n,e){const t=typeof n=="object"?n:fh(),r=typeof n=="string"?n:hi,s=ma(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=Ip("firestore");o&&J1(s,...o)}return s}function Qi(n){if(n._terminated)throw new B(V.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Z1(n),n._firestoreClient}function Z1(n){const e=n._freezeSettings(),t=(function(s,o,a,c){return new Tm(s,o,a,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,Vd(c.experimentalLongPollingOptions),c.useFetchStreams,c.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new G1(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(s){const o=s?._online.build();return{_offline:s?._offline.build(o),_online:o}})(n._componentsProvider))}/**
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
 */class ht{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ht(We.fromBase64String(e))}catch(t){throw new B(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ht(We.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:ht._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ps(e,ht._jsonSchema))return ht.fromBase64String(e.bytes)}}ht._jsonSchemaVersion="firestore/bytes/1.0",ht._jsonSchema={type:Oe("string",ht._jsonSchemaVersion),bytes:Oe("string")};/**
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
 */class Er{constructor(e){this._methodName=e}}/**
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
 */class Tt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new B(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new B(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return de(this._lat,e._lat)||de(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Tt._jsonSchemaVersion}}static fromJSON(e){if(ps(e,Tt._jsonSchema))return new Tt(e.latitude,e.longitude)}}Tt._jsonSchemaVersion="firestore/geoPoint/1.0",Tt._jsonSchema={type:Oe("string",Tt._jsonSchemaVersion),latitude:Oe("number"),longitude:Oe("number")};/**
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
 */class It{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0})(this._values,e._values)}toJSON(){return{type:It._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ps(e,It._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new It(e.vectorValues);throw new B(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}It._jsonSchemaVersion="firestore/vectorValue/1.0",It._jsonSchema={type:Oe("string",It._jsonSchemaVersion),vectorValues:Oe("object")};/**
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
 */const e2=/^__.*__$/;class t2{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new _n(e,this.data,this.fieldMask,t,this.fieldTransforms):new gs(e,this.data,t,this.fieldTransforms)}}class Dd{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new _n(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Nd(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw re(40011,{Ac:n})}}class Ji{constructor(e,t,r,s,o,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.Rc(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Ji({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),r=this.Vc({path:t,fc:!1});return r.gc(e),r}yc(e){const t=this.path?.child(e),r=this.Vc({path:t,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return bi(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Nd(this.Ac)&&e2.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class n2{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Hi(e)}Cc(e,t,r,s=!1){return new Ji({Ac:e,methodName:t,Dc:r,path:Ge.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Xi(n){const e=n._freezeSettings(),t=Hi(n._databaseId);return new n2(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Ld(n,e,t,r,s,o={}){const a=n.Cc(o.merge||o.mergeFields?2:0,e,t,s);Ja("Data must be an object, but it was:",a,r);const c=Fd(r,a);let u,d;if(o.merge)u=new ct(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const g=[];for(const y of o.mergeFields){const I=aa(e,y,t);if(!a.contains(I))throw new B(V.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);Bd(g,I)||g.push(I)}u=new ct(g),d=a.fieldTransforms.filter((y=>u.covers(y.field)))}else u=null,d=a.fieldTransforms;return new t2(new st(c),u,d)}class Zi extends Er{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Zi}}function Od(n,e,t){return new Ji({Ac:3,Dc:e.settings.Dc,methodName:n._methodName,fc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Ka extends Er{_toFieldTransform(e){return new Ca(e.path,new cs)}isEqual(e){return e instanceof Ka}}class Qa extends Er{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=Od(this,e,!0),r=this.vc.map((o=>jn(o,t))),s=new cr(r);return new Ca(e.path,s)}isEqual(e){return e instanceof Qa&&Dt(this.vc,e.vc)}}class Ya extends Er{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=Od(this,e,!0),r=this.vc.map((o=>jn(o,t))),s=new ur(r);return new Ca(e.path,s)}isEqual(e){return e instanceof Ya&&Dt(this.vc,e.vc)}}function r2(n,e,t,r){const s=n.Cc(1,e,t);Ja("Data must be an object, but it was:",s,r);const o=[],a=st.empty();mn(r,((u,d)=>{const g=Xa(e,u,t);d=je(d);const y=s.yc(g);if(d instanceof Zi)o.push(g);else{const I=jn(d,y);I!=null&&(o.push(g),a.set(g,I))}}));const c=new ct(o);return new Dd(a,c,s.fieldTransforms)}function s2(n,e,t,r,s,o){const a=n.Cc(1,e,t),c=[aa(e,r,t)],u=[s];if(o.length%2!=0)throw new B(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let I=0;I<o.length;I+=2)c.push(aa(e,o[I])),u.push(o[I+1]);const d=[],g=st.empty();for(let I=c.length-1;I>=0;--I)if(!Bd(d,c[I])){const P=c[I];let N=u[I];N=je(N);const D=a.yc(P);if(N instanceof Zi)d.push(P);else{const S=jn(N,D);S!=null&&(d.push(P),g.set(P,S))}}const y=new ct(d);return new Dd(g,y,a.fieldTransforms)}function i2(n,e,t,r=!1){return jn(t,n.Cc(r?4:3,e))}function jn(n,e){if(Ud(n=je(n)))return Ja("Unsupported field value:",e,n),Fd(n,e);if(n instanceof Er)return(function(r,s){if(!Nd(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(r,s){const o=[];let a=0;for(const c of r){let u=jn(c,s.wc(a));u==null&&(u={nullValue:"NULL_VALUE"}),o.push(u),a++}return{arrayValue:{values:o}}})(n,e)}return(function(r,s){if((r=je(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Gm(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=Ce.fromDate(r);return{timestampValue:mi(s.serializer,o)}}if(r instanceof Ce){const o=new Ce(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:mi(s.serializer,o)}}if(r instanceof Tt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ht)return{bytesValue:sd(s.serializer,r._byteString)};if(r instanceof Pe){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:xa(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof It)return(function(a,c){return{mapValue:{fields:{[Mh]:{stringValue:Dh},[di]:{arrayValue:{values:a.toArray().map((d=>{if(typeof d!="number")throw c.Sc("VectorValues must only contain numeric values.");return Ia(c.serializer,d)}))}}}}}})(r,s);throw s.Sc(`Unsupported field value: ${Ni(r)}`)})(n,e)}function Fd(n,e){const t={};return Rh(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):mn(n,((r,s)=>{const o=jn(s,e.mc(r));o!=null&&(t[r]=o)})),{mapValue:{fields:t}}}function Ud(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ce||n instanceof Tt||n instanceof ht||n instanceof Pe||n instanceof Er||n instanceof It)}function Ja(n,e,t){if(!Ud(t)||!Ch(t)){const r=Ni(t);throw r==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+r)}}function aa(n,e,t){if((e=je(e))instanceof Yi)return e._internalPath;if(typeof e=="string")return Xa(n,e);throw bi("Field path arguments must be of type string or ",n,!1,void 0,t)}const o2=new RegExp("[~\\*/\\[\\]]");function Xa(n,e,t){if(e.search(o2)>=0)throw bi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Yi(...e.split("."))._internalPath}catch{throw bi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function bi(n,e,t,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(o||a)&&(u+=" (found",o&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new B(V.INVALID_ARGUMENT,c+n+u)}function Bd(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class jd{constructor(e,t,r,s,o){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Pe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new a2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(eo("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class a2 extends jd{data(){return super.data()}}function eo(n,e){return typeof e=="string"?Xa(n,e):e instanceof Yi?e._internalPath:e._delegate._internalPath}/**
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
 */function $d(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new B(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Za{}class el extends Za{}function Ei(n,e,...t){let r=[];e instanceof Za&&r.push(e),r=r.concat(t),(function(o){const a=o.filter((u=>u instanceof tl)).length,c=o.filter((u=>u instanceof to)).length;if(a>1||a>0&&c>0)throw new B(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class to extends el{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new to(e,t,r)}_apply(e){const t=this._parse(e);return zd(e._query,t),new jt(e.firestore,e.converter,Jo(e._query,t))}_parse(e){const t=Xi(e.firestore);return(function(o,a,c,u,d,g,y){let I;if(d.isKeyField()){if(g==="array-contains"||g==="array-contains-any")throw new B(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${g}' queries on documentId().`);if(g==="in"||g==="not-in"){wu(y,g);const N=[];for(const D of y)N.push(vu(u,o,D));I={arrayValue:{values:N}}}else I=vu(u,o,y)}else g!=="in"&&g!=="not-in"&&g!=="array-contains-any"||wu(y,g),I=i2(c,a,y,g==="in"||g==="not-in");return Le.create(d,g,I)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function qd(n,e,t){const r=e,s=eo("where",n);return to._create(s,r,t)}class tl extends Za{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new tl(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:mt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,o){let a=s;const c=o.getFlattenedFilters();for(const u of c)zd(a,u),a=Jo(a,u)})(e._query,t),new jt(e.firestore,e.converter,Jo(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class nl extends el{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new nl(e,t)}_apply(e){const t=(function(s,o,a){if(s.startAt!==null)throw new B(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new B(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ls(o,a)})(e._query,this._field,this._direction);return new jt(e.firestore,e.converter,(function(s,o){const a=s.explicitOrderBy.concat([o]);return new wr(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,t))}}function la(n,e="asc"){const t=e,r=eo("orderBy",n);return nl._create(r,t)}class rl extends el{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new rl(e,t,r)}_apply(e){return new jt(e.firestore,e.converter,pi(e._query,this._limit,this._limitType))}}function Ti(n){return dm("limit",n),rl._create("limit",n,"F")}function vu(n,e,t){if(typeof(t=je(t))=="string"){if(t==="")throw new B(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!$h(e)&&t.indexOf("/")!==-1)throw new B(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Ee.fromString(t));if(!Z.isDocumentKey(r))throw new B(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Nc(n,new Z(r))}if(t instanceof Pe)return Nc(n,t._key);throw new B(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ni(t)}.`)}function wu(n,e){if(!Array.isArray(n)||n.length===0)throw new B(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function zd(n,e){const t=(function(s,o){for(const a of s)for(const c of a.getFlattenedFilters())if(o.indexOf(c.op)>=0)return c.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new B(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new B(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class l2{convertValue(e,t="none"){switch(fn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(dn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw re(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return mn(e,((s,o)=>{r[s]=this.convertValue(o,t)})),r}convertVectorValue(e){const t=e.fields?.[di].arrayValue?.values?.map((r=>Me(r.doubleValue)));return new It(t)}convertGeoPoint(e){return new Tt(Me(e.latitude),Me(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Fi(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(is(e));default:return null}}convertTimestamp(e){const t=hn(e);return new Ce(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Ee.fromString(e);ye(ud(r),9688,{name:e});const s=new os(r.get(1),r.get(3)),o=new Z(r.popFirst(5));return s.isEqual(t)||Lt(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
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
 */function Hd(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class Kr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Vn extends jd{constructor(e,t,r,s,o,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ti(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(eo("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new B(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Vn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Vn._jsonSchemaVersion="firestore/documentSnapshot/1.0",Vn._jsonSchema={type:Oe("string",Vn._jsonSchemaVersion),bundleSource:Oe("string","DocumentSnapshot"),bundleName:Oe("string"),bundle:Oe("string")};class ti extends Vn{data(e={}){return super.data(e)}}class Mn{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Kr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new ti(this._firestore,this._userDataWriter,r.key,r,new Kr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new B(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((c=>{const u=new ti(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Kr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>o||c.type!==3)).map((c=>{const u=new ti(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Kr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,g=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),g=a.indexOf(c.doc.key)),{type:c2(c.type),doc:u,oldIndex:d,newIndex:g}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new B(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Mn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ya.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((o=>{o._document!==null&&(t.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),s.push(o.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function c2(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return re(61501,{type:n})}}/**
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
 */function ni(n){n=it(n,Pe);const e=it(n.firestore,Ft);return Q1(Qi(e),n._key).then((t=>Gd(e,n,t)))}Mn._jsonSchemaVersion="firestore/querySnapshot/1.0",Mn._jsonSchema={type:Oe("string",Mn._jsonSchemaVersion),bundleSource:Oe("string","QuerySnapshot"),bundleName:Oe("string"),bundle:Oe("string")};class sl extends l2{constructor(e){super(),this.firestore=e}convertBytes(e){return new ht(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Pe(this.firestore,null,t)}}function il(n){n=it(n,jt);const e=it(n.firestore,Ft),t=Qi(e),r=new sl(e);return $d(n._query),Y1(t,n._query).then((s=>new Mn(e,r,n,s)))}function ri(n,e,t){n=it(n,Pe);const r=it(n.firestore,Ft),s=Hd(n.converter,e,t);return no(r,[Ld(Xi(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,dt.none())])}function u2(n,e,t,...r){n=it(n,Pe);const s=it(n.firestore,Ft),o=Xi(s);let a;return a=typeof(e=je(e))=="string"||e instanceof Yi?s2(o,"updateDoc",n._key,e,t,r):r2(o,"updateDoc",n._key,e),no(s,[a.toMutation(n._key,dt.exists(!0))])}function l4(n){return no(it(n.firestore,Ft),[new Aa(n._key,dt.none())])}function c4(n,e){const t=it(n.firestore,Ft),r=xn(n),s=Hd(n.converter,e);return no(t,[Ld(Xi(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,dt.exists(!1))]).then((()=>r))}function u4(n,...e){n=je(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||yu(e[r])||(t=e[r++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(yu(e[r])){const u=e[r];e[r]=u.next?.bind(u),e[r+1]=u.error?.bind(u),e[r+2]=u.complete?.bind(u)}let o,a,c;if(n instanceof Pe)a=it(n.firestore,Ft),c=Ui(n._key.path),o={next:u=>{e[r]&&e[r](Gd(a,n,u))},error:e[r+1],complete:e[r+2]};else{const u=it(n,jt);a=it(u.firestore,Ft),c=u._query;const d=new sl(a);o={next:g=>{e[r]&&e[r](new Mn(a,d,u,g))},error:e[r+1],complete:e[r+2]},$d(n._query)}return(function(d,g,y,I){const P=new Ga(I),N=new qa(g,P,y);return d.asyncQueue.enqueueAndForget((async()=>Ba(await wi(d),N))),()=>{P.Nu(),d.asyncQueue.enqueueAndForget((async()=>ja(await wi(d),N)))}})(Qi(a),c,s,o)}function no(n,e){return(function(r,s){const o=new Vt;return r.asyncQueue.enqueueAndForget((async()=>O1(await K1(r),s,o))),o.promise})(Qi(n),e)}function Gd(n,e,t){const r=t.docs.get(e._key),s=new sl(n);return new Vn(n,s,e._key,r,new Kr(t.hasPendingWrites,t.fromCache),e.converter)}function bu(){return new Ka("serverTimestamp")}function h4(...n){return new Qa("arrayUnion",n)}function d4(...n){return new Ya("arrayRemove",n)}(function(e,t=!0){(function(s){_r=s})(mr),sr(new Dn("firestore",((r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),c=new Ft(new rm(r.getProvider("auth-internal")),new om(a,r.getProvider("app-check-internal")),(function(d,g){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new B(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new os(d.options.projectId,g)})(a,s),a);return o={useFetchStreams:t,...o},c._setSettings(o),c}),"PUBLIC").setMultipleInstances(!0)),an(Ec,Tc,e),an(Ec,Tc,"esm2020")})();function Wd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const h2=Wd,Kd=new ds("auth","Firebase",Wd());/**
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
 */const Ii=new pa("@firebase/auth");function d2(n,...e){Ii.logLevel<=he.WARN&&Ii.warn(`Auth (${mr}): ${n}`,...e)}function si(n,...e){Ii.logLevel<=he.ERROR&&Ii.error(`Auth (${mr}): ${n}`,...e)}/**
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
 */function ft(n,...e){throw al(n,...e)}function gt(n,...e){return al(n,...e)}function ol(n,e,t){const r={...h2(),[e]:t};return new ds("auth","Firebase",r).create(e,{appName:n.name})}function Mt(n){return ol(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function f2(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&ft(n,"argument-error"),ol(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function al(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Kd.create(n,...e)}function ne(n,e,...t){if(!n)throw al(e,...t)}function kt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw si(e),new Error(e)}function Ut(n,e){n||kt(e)}/**
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
 */function ca(){return typeof self<"u"&&self.location?.href||""}function p2(){return Eu()==="http:"||Eu()==="https:"}function Eu(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function g2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(p2()||Vp()||"connection"in navigator)?navigator.onLine:!0}function m2(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class vs{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ut(t>e,"Short delay should be less than long delay!"),this.isMobile=xp()||Mp()}get(){return g2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */class Qd{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;kt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;kt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;kt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const _2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const y2=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],v2=new vs(3e4,6e4);function $t(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function qt(n,e,t,r,s={}){return Yd(n,s,async()=>{let o={},a={};r&&(e==="GET"?a=r:o={body:JSON.stringify(r)});const c=fs({key:n.config.apiKey,...a}).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const d={method:e,headers:u,...o};return Pp()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&gr(n.emulatorConfig.host)&&(d.credentials="include"),Qd.fetch()(await Jd(n,n.config.apiHost,t,c),d)})}async function Yd(n,e,t){n._canInitEmulator=!1;const r={..._2,...e};try{const s=new b2(n),o=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw Hs(n,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const c=o.ok?a.errorMessage:a.error.message,[u,d]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Hs(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Hs(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw Hs(n,"user-disabled",a);const g=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw ol(n,g,d);ft(n,g)}}catch(s){if(s instanceof Bt)throw s;ft(n,"network-request-failed",{message:String(s)})}}async function ws(n,e,t,r,s={}){const o=await qt(n,e,t,r,s);return"mfaPendingCredential"in o&&ft(n,"multi-factor-auth-required",{_serverResponse:o}),o}async function Jd(n,e,t,r){const s=`${e}${t}?${r}`,o=n,a=o.config.emulator?ll(n.config,s):`${n.config.apiScheme}://${s}`;return y2.includes(t)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(a).toString():a}function w2(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class b2{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(gt(this.auth,"network-request-failed")),v2.get())})}}function Hs(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=gt(n,e,r);return s.customData._tokenResponse=t,s}function Tu(n){return n!==void 0&&n.enterprise!==void 0}class E2{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return w2(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function T2(n,e){return qt(n,"GET","/v2/recaptchaConfig",$t(n,e))}/**
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
 */async function I2(n,e){return qt(n,"POST","/v1/accounts:delete",e)}async function Ci(n,e){return qt(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function es(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function C2(n,e=!1){const t=je(n),r=await t.getIdToken(e),s=cl(r);ne(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const o=typeof s.firebase=="object"?s.firebase:void 0,a=o?.sign_in_provider;return{claims:s,token:r,authTime:es(Do(s.auth_time)),issuedAtTime:es(Do(s.iat)),expirationTime:es(Do(s.exp)),signInProvider:a||null,signInSecondFactor:o?.sign_in_second_factor||null}}function Do(n){return Number(n)*1e3}function cl(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return si("JWT malformed, contained fewer than 3 sections"),null;try{const s=sh(t);return s?JSON.parse(s):(si("Failed to decode base64 JWT payload"),null)}catch(s){return si("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Iu(n){const e=cl(n);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function us(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Bt&&A2(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function A2({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class R2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */async function Ai(n){const e=n.auth,t=await n.getIdToken(),r=await us(n,Ci(e,{idToken:t}));ne(r?.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const o=s.providerUserInfo?.length?Xd(s.providerUserInfo):[],a=x2(n.providerData,o),c=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!a?.length,d=c?u:!1,g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new ua(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(n,g)}async function S2(n){const e=je(n);await Ai(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function x2(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Xd(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function k2(n,e){const t=await Yd(n,{},async()=>{const r=fs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:o}=n.config,a=await Jd(n,s,"/v1/token",`key=${o}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:r};return n.emulatorConfig&&gr(n.emulatorConfig.host)&&(u.credentials="include"),Qd.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function P2(n,e){return qt(n,"POST","/v2/accounts:revokeToken",$t(n,e))}/**
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
 */class tr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Iu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ne(e.length!==0,"internal-error");const t=Iu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ne(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:o}=await k2(e,t);this.updateTokensAndExpiration(r,s,Number(o))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:o}=t,a=new tr;return r&&(ne(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(ne(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),o&&(ne(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new tr,this.toJSON())}_performRefresh(){return kt("not implemented")}}/**
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
 */function Zt(n,e){ne(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class pt{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new R2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ua(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await us(this,this.stsTokenManager.getToken(this.auth,e));return ne(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return C2(this,e)}reload(){return S2(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new pt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ai(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(lt(this.auth.app))return Promise.reject(Mt(this.auth));const e=await this.getIdToken();return await us(this,I2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,o=t.phoneNumber??void 0,a=t.photoURL??void 0,c=t.tenantId??void 0,u=t._redirectEventId??void 0,d=t.createdAt??void 0,g=t.lastLoginAt??void 0,{uid:y,emailVerified:I,isAnonymous:P,providerData:N,stsTokenManager:D}=t;ne(y&&D,e,"internal-error");const S=tr.fromJSON(this.name,D);ne(typeof y=="string",e,"internal-error"),Zt(r,e.name),Zt(s,e.name),ne(typeof I=="boolean",e,"internal-error"),ne(typeof P=="boolean",e,"internal-error"),Zt(o,e.name),Zt(a,e.name),Zt(c,e.name),Zt(u,e.name),Zt(d,e.name),Zt(g,e.name);const L=new pt({uid:y,auth:e,email:s,emailVerified:I,displayName:r,isAnonymous:P,photoURL:a,phoneNumber:o,tenantId:c,stsTokenManager:S,createdAt:d,lastLoginAt:g});return N&&Array.isArray(N)&&(L.providerData=N.map(W=>({...W}))),u&&(L._redirectEventId=u),L}static async _fromIdTokenResponse(e,t,r=!1){const s=new tr;s.updateFromServerResponse(t);const o=new pt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ai(o),o}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];ne(s.localId!==void 0,"internal-error");const o=s.providerUserInfo!==void 0?Xd(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!o?.length,c=new tr;c.updateFromIdToken(r);const u=new pt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new ua(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!o?.length};return Object.assign(u,d),u}}/**
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
 */class Zd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Zd.type="NONE";const Au=Zd;/**
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
 */function ii(n,e,t){return`firebase:${n}:${e}:${t}`}class nr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:o}=this.auth;this.fullUserKey=ii(this.userKey,s.apiKey,o),this.fullPersistenceKey=ii("persistence",s.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ci(this.auth,{idToken:e}).catch(()=>{});return t?pt._fromGetAccountInfoResponse(this.auth,t,e):null}return pt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new nr(Pt(Au),e,r);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=s[0]||Pt(Au);const a=ii(r,e.config.apiKey,e.name);let c=null;for(const d of t)try{const g=await d._get(a);if(g){let y;if(typeof g=="string"){const I=await Ci(e,{idToken:g}).catch(()=>{});if(!I)break;y=await pt._fromGetAccountInfoResponse(e,I,g)}else y=pt._fromJSON(e,g);d!==o&&(c=y),o=d;break}}catch{}const u=s.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!u.length?new nr(o,e,r):(o=u[0],c&&await o._set(a,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==o)try{await d._remove(a)}catch{}})),new nr(o,e,r))}}/**
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
 */function Ru(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(rf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ef(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(of(e))return"Blackberry";if(af(e))return"Webos";if(tf(e))return"Safari";if((e.includes("chrome/")||nf(e))&&!e.includes("edge/"))return"Chrome";if(sf(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function ef(n=Xe()){return/firefox\//i.test(n)}function tf(n=Xe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function nf(n=Xe()){return/crios\//i.test(n)}function rf(n=Xe()){return/iemobile/i.test(n)}function sf(n=Xe()){return/android/i.test(n)}function of(n=Xe()){return/blackberry/i.test(n)}function af(n=Xe()){return/webos/i.test(n)}function ul(n=Xe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function V2(n=Xe()){return ul(n)&&!!window.navigator?.standalone}function M2(){return Dp()&&document.documentMode===10}function lf(n=Xe()){return ul(n)||sf(n)||af(n)||of(n)||/windows phone/i.test(n)||rf(n)}/**
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
 */function cf(n,e=[]){let t;switch(n){case"Browser":t=Ru(Xe());break;case"Worker":t=`${Ru(Xe())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${mr}/${r}`}/**
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
 */class D2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=o=>new Promise((a,c)=>{try{const u=e(o);a(u)}catch(u){c(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function N2(n,e={}){return qt(n,"GET","/v2/passwordPolicy",$t(n,e))}/**
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
 */const L2=6;class O2{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??L2,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
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
 */class F2{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Su(this),this.idTokenSubscription=new Su(this),this.beforeStateQueue=new D2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Kd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Pt(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await nr.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ci(this,{idToken:e}),r=await pt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(lt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=this.redirectUser?._redirectEventId,a=r?._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&c?.user&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ai(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=m2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(lt(this.app))return Promise.reject(Mt(this));const t=e?je(e):null;return t&&ne(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return lt(this.app)?Promise.reject(Mt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return lt(this.app)?Promise.reject(Mt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Pt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await N2(this),t=new O2(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ds("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await P2(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Pt(e)||this._popupRedirectResolver;ne(t,this,"argument-error"),this.redirectPersistenceManager=await nr.create(this,[Pt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(c,this,"internal-error"),c.then(()=>{a||o(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=cf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(lt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&d2(`Error while retrieving App Check token: ${e.error}`),e?.token}}function zt(n){return je(n)}class Su{constructor(e){this.auth=e,this.observer=null,this.addObserver=$p(t=>this.observer=t)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ro={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function U2(n){ro=n}function uf(n){return ro.loadJS(n)}function B2(){return ro.recaptchaEnterpriseScript}function j2(){return ro.gapiScript}function $2(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class q2{constructor(){this.enterprise=new z2}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class z2{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const H2="recaptcha-enterprise",hf="NO_RECAPTCHA";class G2{constructor(e){this.type=H2,this.auth=zt(e)}async verify(e="verify",t=!1){async function r(o){if(!t){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(a,c)=>{T2(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new E2(u);return o.tenantId==null?o._agentRecaptchaConfig=d:o._tenantRecaptchaConfigs[o.tenantId]=d,a(d.siteKey)}}).catch(u=>{c(u)})})}function s(o,a,c){const u=window.grecaptcha;Tu(u)?u.enterprise.ready(()=>{u.enterprise.execute(o,{action:e}).then(d=>{a(d)}).catch(()=>{a(hf)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new q2().execute("siteKey",{action:"verify"}):new Promise((o,a)=>{r(this.auth).then(c=>{if(!t&&Tu(window.grecaptcha))s(c,o,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=B2();u.length!==0&&(u+=c),uf(u).then(()=>{s(c,o,a)}).catch(d=>{a(d)})}}).catch(c=>{a(c)})})}}async function xu(n,e,t,r=!1,s=!1){const o=new G2(n);let a;if(s)a=hf;else try{a=await o.verify(t)}catch{a=await o.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const u=c.phoneEnrollmentInfo.phoneNumber,d=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const u=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Ri(n,e,t,r,s){if(n._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await xu(n,e,t,t==="getOobCode");return r(n,o)}else return r(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await xu(n,e,t,t==="getOobCode");return r(n,a)}else return Promise.reject(o)})}/**
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
 */function W2(n,e){const t=ma(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),o=t.getOptions();if(Dt(o,e??{}))return s;ft(s,"already-initialized")}return t.initialize({options:e})}function K2(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(Pt);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function Q2(n,e,t){const r=zt(n);ne(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,o=df(e),{host:a,port:c}=Y2(e),u=c===null?"":`:${c}`,d={url:`${o}//${a}${u}/`},g=Object.freeze({host:a,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ne(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ne(Dt(d,r.config.emulator)&&Dt(g,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=g,r.settings.appVerificationDisabledForTesting=!0,gr(a)?(lh(`${o}//${a}${u}`),ch("Auth",!0)):J2()}function df(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Y2(n){const e=df(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const o=s[1];return{host:o,port:ku(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:ku(a)}}}function ku(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function J2(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class hl{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return kt("not implemented")}_getIdTokenResponse(e){return kt("not implemented")}_linkToIdToken(e,t){return kt("not implemented")}_getReauthenticationResolver(e){return kt("not implemented")}}async function X2(n,e){return qt(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Z2(n,e){return ws(n,"POST","/v1/accounts:signInWithPassword",$t(n,e))}async function e_(n,e){return qt(n,"POST","/v1/accounts:sendOobCode",$t(n,e))}async function t_(n,e){return e_(n,e)}/**
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
 */async function n_(n,e){return ws(n,"POST","/v1/accounts:signInWithEmailLink",$t(n,e))}async function r_(n,e){return ws(n,"POST","/v1/accounts:signInWithEmailLink",$t(n,e))}/**
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
 */class hs extends hl{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new hs(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new hs(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ri(e,t,"signInWithPassword",Z2);case"emailLink":return n_(e,{email:this._email,oobCode:this._password});default:ft(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ri(e,r,"signUpPassword",X2);case"emailLink":return r_(e,{idToken:t,email:this._email,oobCode:this._password});default:ft(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function rr(n,e){return ws(n,"POST","/v1/accounts:signInWithIdp",$t(n,e))}/**
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
 */const s_="http://localhost";class On extends hl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new On(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ft("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...o}=t;if(!r||!s)return null;const a=new On(r,s);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return rr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,rr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,rr(e,t)}buildRequest(){const e={requestUri:s_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=fs(t)}return e}}/**
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
 */function i_(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function o_(n){const e=qr(zr(n)).link,t=e?qr(zr(e)).deep_link_id:null,r=qr(zr(n)).deep_link_id;return(r?qr(zr(r)).link:null)||r||t||e||n}class dl{constructor(e){const t=qr(zr(e)),r=t.apiKey??null,s=t.oobCode??null,o=i_(t.mode??null);ne(r&&s&&o,"argument-error"),this.apiKey=r,this.operation=o,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=o_(e);try{return new dl(t)}catch{return null}}}/**
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
 */class Tr{constructor(){this.providerId=Tr.PROVIDER_ID}static credential(e,t){return hs._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=dl.parseLink(t);return ne(r,"argument-error"),hs._fromEmailAndCode(e,r.code,r.tenantId)}}Tr.PROVIDER_ID="password";Tr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Tr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class bs extends fl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class en extends bs{constructor(){super("facebook.com")}static credential(e){return On._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return en.credential(e.oauthAccessToken)}catch{return null}}}en.FACEBOOK_SIGN_IN_METHOD="facebook.com";en.PROVIDER_ID="facebook.com";/**
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
 */class St extends bs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return On._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return St.credential(t,r)}catch{return null}}}St.GOOGLE_SIGN_IN_METHOD="google.com";St.PROVIDER_ID="google.com";/**
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
 */class tn extends bs{constructor(){super("github.com")}static credential(e){return On._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tn.credential(e.oauthAccessToken)}catch{return null}}}tn.GITHUB_SIGN_IN_METHOD="github.com";tn.PROVIDER_ID="github.com";/**
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
 */class nn extends bs{constructor(){super("twitter.com")}static credential(e,t){return On._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return nn.credential(t,r)}catch{return null}}}nn.TWITTER_SIGN_IN_METHOD="twitter.com";nn.PROVIDER_ID="twitter.com";/**
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
 */async function a_(n,e){return ws(n,"POST","/v1/accounts:signUp",$t(n,e))}/**
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
 */class Fn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const o=await pt._fromIdTokenResponse(e,r,s),a=Pu(r);return new Fn({user:o,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Pu(r);return new Fn({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Pu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Si extends Bt{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Si.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Si(e,t,r,s)}}function ff(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Si._fromErrorAndOperation(n,o,e,r):o})}async function l_(n,e,t=!1){const r=await us(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Fn._forOperation(n,"link",r)}/**
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
 */async function c_(n,e,t=!1){const{auth:r}=n;if(lt(r.app))return Promise.reject(Mt(r));const s="reauthenticate";try{const o=await us(n,ff(r,s,e,n),t);ne(o.idToken,r,"internal-error");const a=cl(o.idToken);ne(a,r,"internal-error");const{sub:c}=a;return ne(n.uid===c,r,"user-mismatch"),Fn._forOperation(n,s,o)}catch(o){throw o?.code==="auth/user-not-found"&&ft(r,"user-mismatch"),o}}/**
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
 */async function pf(n,e,t=!1){if(lt(n.app))return Promise.reject(Mt(n));const r="signIn",s=await ff(n,r,e),o=await Fn._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(o.user),o}async function u_(n,e){return pf(zt(n),e)}/**
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
 */async function gf(n){const e=zt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function h_(n,e,t){const r=zt(n);await Ri(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",t_)}async function d_(n,e,t){if(lt(n.app))return Promise.reject(Mt(n));const r=zt(n),a=await Ri(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",a_).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&gf(n),u}),c=await Fn._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function f_(n,e,t){return lt(n.app)?Promise.reject(Mt(n)):u_(je(n),Tr.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&gf(n),r})}function p_(n,e,t,r){return je(n).onIdTokenChanged(e,t,r)}function g_(n,e,t){return je(n).beforeAuthStateChanged(e,t)}function mf(n,e,t,r){return je(n).onAuthStateChanged(e,t,r)}function m_(n){return je(n).signOut()}const xi="__sak";/**
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
 */class _f{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(xi,"1"),this.storage.removeItem(xi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const __=1e3,y_=10;class yf extends _f{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=lf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);M2()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,y_):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},__)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}yf.type="LOCAL";const v_=yf;/**
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
 */class vf extends _f{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}vf.type="SESSION";const wf=vf;/**
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
 */function w_(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class so{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new so(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:o}=t.data,a=this.handlersMap[s];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async d=>d(t.origin,o)),u=await w_(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}so.receivers=[];/**
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
 */class b_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let o,a;return new Promise((c,u)=>{const d=pl("",20);s.port1.start();const g=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(y){const I=y;if(I.data.eventId===d)switch(I.data.status){case"ack":clearTimeout(g),o=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),c(I.data.response);break;default:clearTimeout(g),clearTimeout(o),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Ct(){return window}function E_(n){Ct().location.href=n}/**
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
 */function bf(){return typeof Ct().WorkerGlobalScope<"u"&&typeof Ct().importScripts=="function"}async function T_(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function I_(){return navigator?.serviceWorker?.controller||null}function C_(){return bf()?self:null}/**
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
 */const Ef="firebaseLocalStorageDb",A_=1,ki="firebaseLocalStorage",Tf="fbase_key";class Es{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function io(n,e){return n.transaction([ki],e?"readwrite":"readonly").objectStore(ki)}function R_(){const n=indexedDB.deleteDatabase(Ef);return new Es(n).toPromise()}function ha(){const n=indexedDB.open(Ef,A_);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ki,{keyPath:Tf})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ki)?e(r):(r.close(),await R_(),e(await ha()))})})}async function Vu(n,e,t){const r=io(n,!0).put({[Tf]:e,value:t});return new Es(r).toPromise()}async function S_(n,e){const t=io(n,!1).get(e),r=await new Es(t).toPromise();return r===void 0?null:r.value}function Mu(n,e){const t=io(n,!0).delete(e);return new Es(t).toPromise()}const x_=800,k_=3;class If{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ha(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>k_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return bf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=so._getInstance(C_()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await T_(),!this.activeServiceWorker)return;this.sender=new b_(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||I_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ha();return await Vu(e,xi,"1"),await Mu(e,xi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Vu(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>S_(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Mu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const o=io(s,!1).getAll();return new Es(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:o}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(o)&&(this.notifyListeners(s,o),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),x_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}If.type="LOCAL";const P_=If;new vs(3e4,6e4);/**
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
 */function Cf(n,e){return e?Pt(e):(ne(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class gl extends hl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return rr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return rr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return rr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function V_(n){return pf(n.auth,new gl(n),n.bypassAuthState)}function M_(n){const{auth:e,user:t}=n;return ne(t,e,"internal-error"),c_(t,new gl(n),n.bypassAuthState)}async function D_(n){const{auth:e,user:t}=n;return ne(t,e,"internal-error"),l_(t,new gl(n),n.bypassAuthState)}/**
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
 */class Af{constructor(e,t,r,s,o=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:o,error:a,type:c}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:o||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return V_;case"linkViaPopup":case"linkViaRedirect":return D_;case"reauthViaPopup":case"reauthViaRedirect":return M_;default:ft(this.auth,"internal-error")}}resolve(e){Ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const N_=new vs(2e3,1e4);async function L_(n,e,t){if(lt(n.app))return Promise.reject(gt(n,"operation-not-supported-in-this-environment"));const r=zt(n);f2(n,e,fl);const s=Cf(r,t);return new kn(r,"signInViaPopup",e,s).executeNotNull()}class kn extends Af{constructor(e,t,r,s,o){super(e,t,s,o),this.provider=r,this.authWindow=null,this.pollId=null,kn.currentPopupAction&&kn.currentPopupAction.cancel(),kn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){Ut(this.filter.length===1,"Popup operations only handle one event");const e=pl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,kn.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(gt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,N_.get())};e()}}kn.currentPopupAction=null;/**
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
 */const O_="pendingRedirect",oi=new Map;class F_ extends Af{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=oi.get(this.auth._key());if(!e){try{const r=await U_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}oi.set(this.auth._key(),e)}return this.bypassAuthState||oi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function U_(n,e){const t=$_(e),r=j_(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function B_(n,e){oi.set(n._key(),e)}function j_(n){return Pt(n._redirectPersistence)}function $_(n){return ii(O_,n.config.apiKey,n.name)}async function q_(n,e,t=!1){if(lt(n.app))return Promise.reject(Mt(n));const r=zt(n),s=Cf(r,e),a=await new F_(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const z_=600*1e3;class H_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!G_(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Rf(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";t.onError(gt(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=z_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Du(e))}saveEventToCache(e){this.cachedEventUids.add(Du(e)),this.lastProcessedEventTime=Date.now()}}function Du(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Rf({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function G_(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Rf(n);default:return!1}}/**
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
 */async function W_(n,e={}){return qt(n,"GET","/v1/projects",e)}/**
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
 */const K_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Q_=/^https?/;async function Y_(n){if(n.config.emulator)return;const{authorizedDomains:e}=await W_(n);for(const t of e)try{if(J_(t))return}catch{}ft(n,"unauthorized-domain")}function J_(n){const e=ca(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Q_.test(t))return!1;if(K_.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const X_=new vs(3e4,6e4);function Nu(){const n=Ct().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Z_(n){return new Promise((e,t)=>{function r(){Nu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Nu(),t(gt(n,"network-request-failed"))},timeout:X_.get()})}if(Ct().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Ct().gapi?.load)r();else{const s=$2("iframefcb");return Ct()[s]=()=>{gapi.load?r():t(gt(n,"network-request-failed"))},uf(`${j2()}?onload=${s}`).catch(o=>t(o))}}).catch(e=>{throw ai=null,e})}let ai=null;function ey(n){return ai=ai||Z_(n),ai}/**
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
 */const ty=new vs(5e3,15e3),ny="__/auth/iframe",ry="emulator/auth/iframe",sy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},iy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function oy(n){const e=n.config;ne(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ll(e,ry):`https://${n.config.authDomain}/${ny}`,r={apiKey:e.apiKey,appName:n.name,v:mr},s=iy.get(n.config.apiHost);s&&(r.eid=s);const o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${t}?${fs(r).slice(1)}`}async function ay(n){const e=await ey(n),t=Ct().gapi;return ne(t,n,"internal-error"),e.open({where:document.body,url:oy(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sy,dontclear:!0},r=>new Promise(async(s,o)=>{await r.restyle({setHideOnLeave:!1});const a=gt(n,"network-request-failed"),c=Ct().setTimeout(()=>{o(a)},ty.get());function u(){Ct().clearTimeout(c),s(r)}r.ping(u).then(u,()=>{o(a)})}))}/**
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
 */const ly={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},cy=500,uy=600,hy="_blank",dy="http://localhost";class Lu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function fy(n,e,t,r=cy,s=uy){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u={...ly,width:r.toString(),height:s.toString(),top:o,left:a},d=Xe().toLowerCase();t&&(c=nf(d)?hy:t),ef(d)&&(e=e||dy,u.scrollbars="yes");const g=Object.entries(u).reduce((I,[P,N])=>`${I}${P}=${N},`,"");if(V2(d)&&c!=="_self")return py(e||"",c),new Lu(null);const y=window.open(e||"",c,g);ne(y,n,"popup-blocked");try{y.focus()}catch{}return new Lu(y)}function py(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const gy="__/auth/handler",my="emulator/auth/handler",_y=encodeURIComponent("fac");async function Ou(n,e,t,r,s,o){ne(n.config.authDomain,n,"auth-domain-config-required"),ne(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:mr,eventId:s};if(e instanceof fl){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",jp(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[g,y]of Object.entries({}))a[g]=y}if(e instanceof bs){const g=e.getScopes().filter(y=>y!=="");g.length>0&&(a.scopes=g.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const g of Object.keys(c))c[g]===void 0&&delete c[g];const u=await n._getAppCheckToken(),d=u?`#${_y}=${encodeURIComponent(u)}`:"";return`${yy(n)}?${fs(c).slice(1)}${d}`}function yy({config:n}){return n.emulator?ll(n,my):`https://${n.authDomain}/${gy}`}/**
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
 */const No="webStorageSupport";class vy{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wf,this._completeRedirectFn=q_,this._overrideRedirectResult=B_}async _openPopup(e,t,r,s){Ut(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const o=await Ou(e,t,r,ca(),s);return fy(e,o,pl())}async _openRedirect(e,t,r,s){await this._originValidation(e);const o=await Ou(e,t,r,ca(),s);return E_(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:o}=this.eventManagers[t];return s?Promise.resolve(s):(Ut(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await ay(e),r=new H_(e);return t.register("authEvent",s=>(ne(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(No,{type:No},s=>{const o=s?.[0]?.[No];o!==void 0&&t(!!o),ft(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Y_(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return lf()||tf()||ul()}}const wy=vy;var Fu="@firebase/auth",Uu="1.11.0";/**
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
 */class by{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Ey(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ty(n){sr(new Dn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;ne(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:cf(n)},d=new F2(r,s,o,u);return K2(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),sr(new Dn("auth-internal",e=>{const t=zt(e.getProvider("auth").getImmediate());return(r=>new by(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),an(Fu,Uu,Ey(n)),an(Fu,Uu,"esm2020")}/**
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
 */const Iy=300,Cy=ah("authIdTokenMaxAge")||Iy;let Bu=null;const Ay=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Cy)return;const s=t?.token;Bu!==s&&(Bu=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Ry(n=fh()){const e=ma(n,"auth");if(e.isInitialized())return e.getImmediate();const t=W2(n,{popupRedirectResolver:wy,persistence:[P_,v_,wf]}),r=ah("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const a=Ay(o.toString());g_(t,a,()=>a(t.currentUser)),p_(t,c=>a(c))}}const s=ih("auth");return s&&Q2(t,`http://${s}`),t}function Sy(){return document.getElementsByTagName("head")?.[0]??document}U2({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const o=gt("internal-error");o.customData=s,t(o)},r.type="text/javascript",r.charset="UTF-8",Sy().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ty("Browser");const xy={apiKey:"AIzaSyAaqnWcFLOwmNYoyFgyRCe1z5EhSbDKXRc",authDomain:"empuzzled-3de4d.firebaseapp.com",projectId:"empuzzled-3de4d",storageBucket:"empuzzled-3de4d.firebasestorage.app",messagingSenderId:"984365730335",appId:"1:984365730335:web:19c961e053a66399c92251"},Sf=_c().length===0?dh(xy):_c()[0],xt=X1(Sf),wt=Ry(Sf);var ml={};(function n(e,t,r,s){var o=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),a=typeof Path2D=="function"&&typeof DOMMatrix=="function",c=(function(){if(!e.OffscreenCanvas)return!1;var x=new OffscreenCanvas(1,1),C=x.getContext("2d");C.fillRect(0,0,1,1);var J=x.transferToImageBitmap();try{C.createPattern(J,"no-repeat")}catch{return!1}return!0})();function u(){}function d(x){var C=t.exports.Promise,J=C!==void 0?C:e.Promise;return typeof J=="function"?new J(x):(x(u,u),null)}var g=(function(x,C){return{transform:function(J){if(x)return J;if(C.has(J))return C.get(J);var te=new OffscreenCanvas(J.width,J.height),se=te.getContext("2d");return se.drawImage(J,0,0),C.set(J,te),te},clear:function(){C.clear()}}})(c,new Map),y=(function(){var x=Math.floor(16.666666666666668),C,J,te={},se=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(C=function(F){var w=Math.random();return te[w]=requestAnimationFrame(function z(X){se===X||se+x-1<X?(se=X,delete te[w],F()):te[w]=requestAnimationFrame(z)}),w},J=function(F){te[F]&&cancelAnimationFrame(te[F])}):(C=function(F){return setTimeout(F,x)},J=function(F){return clearTimeout(F)}),{frame:C,cancel:J}})(),I=(function(){var x,C,J={};function te(se){function F(w,z){se.postMessage({options:w||{},callback:z})}se.init=function(z){var X=z.transferControlToOffscreen();se.postMessage({canvas:X},[X])},se.fire=function(z,X,O){if(C)return F(z,null),C;var K=Math.random().toString(36).slice(2);return C=d(function(H){function Te(Ve){Ve.data.callback===K&&(delete J[K],se.removeEventListener("message",Te),C=null,g.clear(),O(),H())}se.addEventListener("message",Te),F(z,K),J[K]=Te.bind(null,{data:{callback:K}})}),C},se.reset=function(){se.postMessage({reset:!0});for(var z in J)J[z](),delete J[z]}}return function(){if(x)return x;if(!r&&o){var se=["var CONFETTI, SIZE = {}, module = {};","("+n.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{x=new Worker(URL.createObjectURL(new Blob([se])))}catch(F){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",F),null}te(x)}return x}})(),P={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function N(x,C){return C?C(x):x}function D(x){return x!=null}function S(x,C,J){return N(x&&D(x[C])?x[C]:P[C],J)}function L(x){return x<0?0:Math.floor(x)}function W(x,C){return Math.floor(Math.random()*(C-x))+x}function ee(x){return parseInt(x,16)}function we(x){return x.map(xe)}function xe(x){var C=String(x).replace(/[^0-9a-f]/gi,"");return C.length<6&&(C=C[0]+C[0]+C[1]+C[1]+C[2]+C[2]),{r:ee(C.substring(0,2)),g:ee(C.substring(2,4)),b:ee(C.substring(4,6))}}function ge(x){var C=S(x,"origin",Object);return C.x=S(C,"x",Number),C.y=S(C,"y",Number),C}function T(x){x.width=document.documentElement.clientWidth,x.height=document.documentElement.clientHeight}function m(x){var C=x.getBoundingClientRect();x.width=C.width,x.height=C.height}function _(x){var C=document.createElement("canvas");return C.style.position="fixed",C.style.top="0px",C.style.left="0px",C.style.pointerEvents="none",C.style.zIndex=x,C}function E(x,C,J,te,se,F,w,z,X){x.save(),x.translate(C,J),x.rotate(F),x.scale(te,se),x.arc(0,0,1,w,z,X),x.restore()}function b(x){var C=x.angle*(Math.PI/180),J=x.spread*(Math.PI/180);return{x:x.x,y:x.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:x.startVelocity*.5+Math.random()*x.startVelocity,angle2D:-C+(.5*J-Math.random()*J),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:x.color,shape:x.shape,tick:0,totalTicks:x.ticks,decay:x.decay,drift:x.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:x.gravity*3,ovalScalar:.6,scalar:x.scalar,flat:x.flat}}function A(x,C){C.x+=Math.cos(C.angle2D)*C.velocity+C.drift,C.y+=Math.sin(C.angle2D)*C.velocity+C.gravity,C.velocity*=C.decay,C.flat?(C.wobble=0,C.wobbleX=C.x+10*C.scalar,C.wobbleY=C.y+10*C.scalar,C.tiltSin=0,C.tiltCos=0,C.random=1):(C.wobble+=C.wobbleSpeed,C.wobbleX=C.x+10*C.scalar*Math.cos(C.wobble),C.wobbleY=C.y+10*C.scalar*Math.sin(C.wobble),C.tiltAngle+=.1,C.tiltSin=Math.sin(C.tiltAngle),C.tiltCos=Math.cos(C.tiltAngle),C.random=Math.random()+2);var J=C.tick++/C.totalTicks,te=C.x+C.random*C.tiltCos,se=C.y+C.random*C.tiltSin,F=C.wobbleX+C.random*C.tiltCos,w=C.wobbleY+C.random*C.tiltSin;if(x.fillStyle="rgba("+C.color.r+", "+C.color.g+", "+C.color.b+", "+(1-J)+")",x.beginPath(),a&&C.shape.type==="path"&&typeof C.shape.path=="string"&&Array.isArray(C.shape.matrix))x.fill(Ir(C.shape.path,C.shape.matrix,C.x,C.y,Math.abs(F-te)*.1,Math.abs(w-se)*.1,Math.PI/10*C.wobble));else if(C.shape.type==="bitmap"){var z=Math.PI/10*C.wobble,X=Math.abs(F-te)*.1,O=Math.abs(w-se)*.1,K=C.shape.bitmap.width*C.scalar,H=C.shape.bitmap.height*C.scalar,Te=new DOMMatrix([Math.cos(z)*X,Math.sin(z)*X,-Math.sin(z)*O,Math.cos(z)*O,C.x,C.y]);Te.multiplySelf(new DOMMatrix(C.shape.matrix));var Ve=x.createPattern(g.transform(C.shape.bitmap),"no-repeat");Ve.setTransform(Te),x.globalAlpha=1-J,x.fillStyle=Ve,x.fillRect(C.x-K/2,C.y-H/2,K,H),x.globalAlpha=1}else if(C.shape==="circle")x.ellipse?x.ellipse(C.x,C.y,Math.abs(F-te)*C.ovalScalar,Math.abs(w-se)*C.ovalScalar,Math.PI/10*C.wobble,0,2*Math.PI):E(x,C.x,C.y,Math.abs(F-te)*C.ovalScalar,Math.abs(w-se)*C.ovalScalar,Math.PI/10*C.wobble,0,2*Math.PI);else if(C.shape==="star")for(var ce=Math.PI/2*3,Ke=4*C.scalar,Ze=8*C.scalar,et=C.x,ut=C.y,Re=5,be=Math.PI/Re;Re--;)et=C.x+Math.cos(ce)*Ze,ut=C.y+Math.sin(ce)*Ze,x.lineTo(et,ut),ce+=be,et=C.x+Math.cos(ce)*Ke,ut=C.y+Math.sin(ce)*Ke,x.lineTo(et,ut),ce+=be;else x.moveTo(Math.floor(C.x),Math.floor(C.y)),x.lineTo(Math.floor(C.wobbleX),Math.floor(se)),x.lineTo(Math.floor(F),Math.floor(w)),x.lineTo(Math.floor(te),Math.floor(C.wobbleY));return x.closePath(),x.fill(),C.tick<C.totalTicks}function v(x,C,J,te,se){var F=C.slice(),w=x.getContext("2d"),z,X,O=d(function(K){function H(){z=X=null,w.clearRect(0,0,te.width,te.height),g.clear(),se(),K()}function Te(){r&&!(te.width===s.width&&te.height===s.height)&&(te.width=x.width=s.width,te.height=x.height=s.height),!te.width&&!te.height&&(J(x),te.width=x.width,te.height=x.height),w.clearRect(0,0,te.width,te.height),F=F.filter(function(Ve){return A(w,Ve)}),F.length?z=y.frame(Te):H()}z=y.frame(Te),X=H});return{addFettis:function(K){return F=F.concat(K),O},canvas:x,promise:O,reset:function(){z&&y.cancel(z),X&&X()}}}function Ae(x,C){var J=!x,te=!!S(C||{},"resize"),se=!1,F=S(C,"disableForReducedMotion",Boolean),w=o&&!!S(C||{},"useWorker"),z=w?I():null,X=J?T:m,O=x&&z?!!x.__confetti_initialized:!1,K=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,H;function Te(ce,Ke,Ze){for(var et=S(ce,"particleCount",L),ut=S(ce,"angle",Number),Re=S(ce,"spread",Number),be=S(ce,"startVelocity",Number),$n=S(ce,"decay",Number),oo=S(ce,"gravity",Number),Ts=S(ce,"drift",Number),Is=S(ce,"colors",we),yn=S(ce,"ticks",Number),Cr=S(ce,"shapes"),Cs=S(ce,"scalar"),Ar=!!S(ce,"flat"),As=ge(ce),Rs=et,qn=[],Ss=x.width*As.x,vn=x.height*As.y;Rs--;)qn.push(b({x:Ss,y:vn,angle:ut,spread:Re,startVelocity:be,color:Is[Rs%Is.length],shape:Cr[W(0,Cr.length)],ticks:yn,decay:$n,gravity:oo,drift:Ts,scalar:Cs,flat:Ar}));return H?H.addFettis(qn):(H=v(x,qn,X,Ke,Ze),H.promise)}function Ve(ce){var Ke=F||S(ce,"disableForReducedMotion",Boolean),Ze=S(ce,"zIndex",Number);if(Ke&&K)return d(function(be){be()});J&&H?x=H.canvas:J&&!x&&(x=_(Ze),document.body.appendChild(x)),te&&!O&&X(x);var et={width:x.width,height:x.height};z&&!O&&z.init(x),O=!0,z&&(x.__confetti_initialized=!0);function ut(){if(z){var be={getBoundingClientRect:function(){if(!J)return x.getBoundingClientRect()}};X(be),z.postMessage({resize:{width:be.width,height:be.height}});return}et.width=et.height=null}function Re(){H=null,te&&(se=!1,e.removeEventListener("resize",ut)),J&&x&&(document.body.contains(x)&&document.body.removeChild(x),x=null,O=!1)}return te&&!se&&(se=!0,e.addEventListener("resize",ut,!1)),z?z.fire(ce,et,Re):Te(ce,et,Re)}return Ve.reset=function(){z&&z.reset(),H&&H.reset()},Ve}var De;function Rt(){return De||(De=Ae(null,{useWorker:!0,resize:!0})),De}function Ir(x,C,J,te,se,F,w){var z=new Path2D(x),X=new Path2D;X.addPath(z,new DOMMatrix(C));var O=new Path2D;return O.addPath(X,new DOMMatrix([Math.cos(w)*se,Math.sin(w)*se,-Math.sin(w)*F,Math.cos(w)*F,J,te])),O}function Ht(x){if(!a)throw new Error("path confetti are not supported in this browser");var C,J;typeof x=="string"?C=x:(C=x.path,J=x.matrix);var te=new Path2D(C),se=document.createElement("canvas"),F=se.getContext("2d");if(!J){for(var w=1e3,z=w,X=w,O=0,K=0,H,Te,Ve=0;Ve<w;Ve+=2)for(var ce=0;ce<w;ce+=2)F.isPointInPath(te,Ve,ce,"nonzero")&&(z=Math.min(z,Ve),X=Math.min(X,ce),O=Math.max(O,Ve),K=Math.max(K,ce));H=O-z,Te=K-X;var Ke=10,Ze=Math.min(Ke/H,Ke/Te);J=[Ze,0,0,Ze,-Math.round(H/2+z)*Ze,-Math.round(Te/2+X)*Ze]}return{type:"path",path:C,matrix:J}}function Gt(x){var C,J=1,te="#000000",se='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof x=="string"?C=x:(C=x.text,J="scalar"in x?x.scalar:J,se="fontFamily"in x?x.fontFamily:se,te="color"in x?x.color:te);var F=10*J,w=""+F+"px "+se,z=new OffscreenCanvas(F,F),X=z.getContext("2d");X.font=w;var O=X.measureText(C),K=Math.ceil(O.actualBoundingBoxRight+O.actualBoundingBoxLeft),H=Math.ceil(O.actualBoundingBoxAscent+O.actualBoundingBoxDescent),Te=2,Ve=O.actualBoundingBoxLeft+Te,ce=O.actualBoundingBoxAscent+Te;K+=Te+Te,H+=Te+Te,z=new OffscreenCanvas(K,H),X=z.getContext("2d"),X.font=w,X.fillStyle=te,X.fillText(C,Ve,ce);var Ke=1/J;return{type:"bitmap",bitmap:z.transferToImageBitmap(),matrix:[Ke,0,0,Ke,-K*Ke/2,-H*Ke/2]}}t.exports=function(){return Rt().apply(this,arguments)},t.exports.reset=function(){Rt().reset()},t.exports.create=Ae,t.exports.shapeFromPath=Ht,t.exports.shapeFromText=Gt})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),ml,!1);const Gs=ml.exports;ml.exports.create;const ju=["SUMMONSGREETINGS2025","XMAS2025","HAPPY2026"],$u=ae(ju[Math.floor(Math.random()*ju.length)]),xf=()=>{const n=["❄️","🎁","🎅","🎄","🍪","🥛","⛄","🌟","🧣","🧤","⛸️","🏔️","🌬️","🧊"],e=(r=!1,s)=>{const u=(s||["❄️","❄️","❄️","❄️","❄️","❄️","❅","❅","❆","❆","🧊","🧊","🧊","🎁","🎁","🎁","🎄","⛄","🌟","☃️","🧣","🧤","🍪","🥛","🌬️","🌲","🏔️","⛸️"]).map(y=>{try{return Gs.shapeFromText({text:y,scalar:3})}catch{return"circle"}}),d=(y,I)=>Math.random()*(I-y)+y,g=["#ffffff","#bae6fd","#60a5fa","#38bdf8","#fef3c7"];if(r){const I=Date.now()+4e3,P=ap(()=>{const N=I-Date.now();if(N<=0)return clearInterval(P);const D=15*(N/4e3);Gs({particleCount:D,spread:100,origin:{x:d(.1,.3),y:Math.random()-.2},scalar:3,shapes:u,ticks:150,gravity:.6,colors:g,zIndex:200}),Gs({particleCount:D,spread:100,origin:{x:d(.7,.9),y:Math.random()-.2},scalar:3,shapes:u,ticks:150,gravity:.6,colors:g,zIndex:200})},250)}else Gs({particleCount:40,spread:90,origin:{x:.5,y:.4},scalar:3,shapes:u,ticks:250,gravity:.6,colors:g,zIndex:200})};async function t(){try{const r=Ei(Wa(xt,"codes"),qd("status","==","holiday"),Ti(1)),s=await il(r);if(!s.empty){const o=s.docs[0].data();$u.value=o.code}}catch(r){console.error("Error fetching holiday code:",r)}}return{winterCode:$u,holidayIcons:n,fireHolidayConfetti:e,fetchHolidayCode:t}};function qu(n,e){return $(),Q("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[f("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"})])}function ky(n,e){return $(),Q("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[f("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"})])}function Py(n,e){return $(),Q("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[f("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})])}function zu(n,e){return $(),Q("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[f("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"})])}function Vy(n,e){return $(),Q("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[f("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m4.5 15.75 7.5-7.5 7.5 7.5"})])}function My(n,e){return $(),Q("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[f("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"})])}function Hu(n,e){return $(),Q("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[f("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"})])}function Lo(n,e){return $(),Q("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[f("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"})])}function Dy(n,e){return $(),Q("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[f("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18 18 6M6 6l12 12"})])}const Ny={class:"holiday-gift group relative overflow-hidden rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-cyan-400/30 shadow-2xl transition-all duration-500 max-h-[90vh] overflow-y-auto custom-scrollbar select-none"},Ly={class:"absolute -top-3 -right-10 w-48 md:w-80 opacity-30 md:opacity-40 pointer-events-none transform -rotate-12 transition-all duration-1000 group-hover:scale-110 group-hover:-rotate-6 group-active:scale-110 group-active:-rotate-6 not-prose"},Oy=["src"],Fy={class:"absolute -top-6 -left-6 w-40 md:w-72 opacity-20 md:opacity-30 pointer-events-none transform rotate-12 transition-all duration-1000 group-hover:scale-110 group-hover:rotate-6 group-active:scale-110 group-active:rotate-6 not-prose"},Uy=["src"],By={class:"relative z-10 pt-8 pb-4 px-4 flex flex-col items-center text-center border-b border-white/5 mb-4"},jy={class:"transform transition-transform duration-500 group-hover/icon:rotate-12 group-active/icon:scale-75 inline-block pointer-events-none"},$y={class:"relative z-10 flex flex-col gap-12 pb-12"},qy={key:0,class:"gift-section flex flex-col items-center px-4 md:px-10"},zy={class:"mb-4 flex items-center gap-3"},Hy={class:"text-[10px] font-black uppercase tracking-[0.3em] text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]"},Gy={class:"flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-6 max-w-xl mx-auto"},Wy=["onClick","title"],Ky=["src","alt"],Qy={class:"text-xs sm:text-sm font-black text-white"},Yy={key:1,class:"jiggle-wiggle pointer-events-none"},Jy={class:"mb-4 w-full max-w-sm"},Xy={class:"text-[16px] md:text-2xl font-mono font-black text-yellow-400 tracking-wider drop-shadow-[0_0_10px_rgba(250,204,21,0.3)] group-hover:text-yellow-300 transition-colors pointer-events-none uppercase"},Zy={key:0,class:"absolute inset-0 flex items-center justify-center bg-cyan-600/90 rounded-xl text-white font-black uppercase tracking-widest text-xs md:text-sm backdrop-blur-sm"},ev={class:"absolute bottom-10 -right-16 w-48 md:w-80 opacity-30 md:opacity-40 pointer-events-none transform -rotate-12 transition-all duration-1000 group-hover:scale-110 group-hover:-rotate-6 group-active:scale-110 group-active:-rotate-6 not-prose"},tv=["src"],nv={class:"absolute bottom-40 -left-16 w-48 md:w-80 opacity-30 md:opacity-40 pointer-events-none transform -rotate-12 transition-all duration-1000 group-hover:scale-110 group-hover:-rotate-6 group-active:scale-110 group-active:-rotate-6 not-prose"},rv=["src"],jr="https://raw.githubusercontent.com/vabe44/31f5d518-epzl-cdn/main",sv=fr({__name:"HolidayGift",props:{code:{}},setup(n){const e=n,{holidayIcons:t,fireHolidayConfetti:r}=xf(),s=ae("❄️"),o=ae(null),a=lc({}),c=lc({}),u={SUMMONSGREETINGS2025:[{id:"gems",name:"Gems",quantity:25,image:"symbol_gem.webp",emojis:["💎"]},{id:"tickets",name:"Loot Tickets",quantity:12,image:"loot_ticket.webp",emojis:["🎟"]},{id:"hurricanes",name:"Hurricanes",quantity:20,image:"titan_battle_hurricane.webp",emojis:["🌀"]},{id:"harpoons",name:"Giant Harpoons",quantity:25,image:"titan_battle_giant_harpoon.webp",emojis:["🔱"]}],XMAS2025:[{id:"avatars",name:"Avatars",quantity:2,image:"profile_avatar.webp",emojis:["👤","🎅"]},{id:"covenant",name:"Covenant Coins",quantity:100,image:"covenant_coin.webp",emojis:["🪙"]},{id:"aethers",name:"Aether Shards",quantity:10,image:"aether_crystal.webp",emojis:["💎"]},{id:"dragon",name:"Ancient Dragon Coins",quantity:100,image:"ancient_dragon_coin.webp",emojis:["🐉"]},{id:"energy",name:"World Energy Flask",quantity:1,image:"energy_pve_full.webp",emojis:["⚡"]}],HAPPY2026:[{id:"avatar",name:"Avatar",quantity:1,image:"profile_avatar.webp",emojis:["👤"]},{id:"tickets",name:"Loot Tickets",quantity:5,image:"loot_ticket.webp",emojis:["🎟"]},{id:"untold",name:"Untold Tales Coins",quantity:50,image:"coin_untold_tales.webp",emojis:["📖"]}]},d=S=>S==="SUMMONSGREETINGS2025"?"December Greeting":S==="XMAS2025"?"Christmas Special":S==="HAPPY2026"?"New Year Countdown":"Limited Reward",g=(S,L)=>a[S]?.[L]||!1,y=()=>{const S=t.filter(L=>L!==s.value);s.value=S[Math.floor(Math.random()*S.length)]},I=()=>{r(!1,[s.value]),y()},P=(S,L,W)=>{a[S]||(a[S]={}),a[S][L]||(a[S][L]=!0),r(!1,W)},N=S=>{navigator.clipboard.writeText(S).then(()=>{c[S]=!0,setTimeout(()=>{c[S]=!1},2e3)})},D=S=>{N(S),r(!0),setTimeout(()=>{window.open(`https://www.empiresandpuzzles.com/redeem?code=${S}`,"_blank")},1e3)};return Mi(()=>{s.value=t[Math.floor(Math.random()*t.length)];const S=Object.keys(u);e.code&&u[e.code]?o.value=e.code:o.value=S[Math.floor(Math.random()*S.length)]}),(S,L)=>($(),Q("div",Ny,[L[8]||(L[8]=f("div",{class:"absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/snow.png')] opacity-10 pointer-events-none sticky top-0 h-full"},null,-1)),f("div",Ly,[f("img",{src:`${jr}/avatar/christmas_carol.webp`,alt:"",class:"w-full h-auto"},null,8,Oy)]),f("div",Fy,[f("img",{src:`${jr}/avatar/christmas_ginger_costume_gift_wrapper.webp`,alt:"",class:"w-full h-auto"},null,8,Uy)]),f("div",By,[f("div",{onClick:I,class:"holiday-icon-toggle animate-holiday-float group/icon w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-3xl md:text-4xl shadow-[0_0_20px_rgba(59,130,246,0.5)] cursor-pointer hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] transition-all duration-300 active:scale-90 select-none mb-4",title:"Click for a surprise!"},[f("span",jy,qe(s.value),1)]),L[2]||(L[2]=lp('<h2 class="text-[30px] md:text-5xl font-black py-2 mb-2 tracking-tighter bg-gradient-to-b from-white via-cyan-100 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(59,130,246,0.8)] leading-tight not-prose" data-v-9b1372fc> Happy Winter Holidays! </h2><div class="space-y-0 text-center max-w-lg" data-v-9b1372fc><p class="text-base md:text-lg text-slate-300 leading-relaxed m-0" data-v-9b1372fc> Warmest greetings from <span class="text-yellow-400 font-bold" data-v-9b1372fc>Small Giant</span> and the <span class="text-cyan-400 font-bold" data-v-9b1372fc>Empuzzled</span> team! </p><p class="text-base md:text-lg text-slate-300 leading-relaxed m-0" data-v-9b1372fc>Scroll down to unwrap all your special gifts.</p></div>',2))]),f("div",$y,[o.value?($(),Q("div",qy,[f("div",zy,[L[3]||(L[3]=f("div",{class:"h-px w-8 md:w-16 bg-gradient-to-r from-transparent to-cyan-500/50"},null,-1)),f("span",Hy,qe(d(o.value)),1),L[4]||(L[4]=f("div",{class:"h-px w-8 md:w-16 bg-gradient-to-l from-transparent to-cyan-500/50"},null,-1))]),L[7]||(L[7]=f("span",{class:"block text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-4 font-black"},"Click to Unwrap Rewards",-1)),f("div",Gy,[($(!0),Q(ts,null,li(u[o.value],W=>($(),Q("div",{key:W.id,onClick:ee=>P(o.value,W.id,W.emojis),class:"bg-black/40 rounded-xl p-1.5 sm:p-2 border border-white/5 flex items-center gap-1 sm:gap-2 group/reward hover:border-cyan-400/30 transition-all cursor-pointer active:scale-95 not-prose min-w-[65px] sm:min-w-[85px] justify-center h-11 sm:h-14 select-none",title:g(o.value,W.id)?`Click for a ${W.name} rain!`:"Click to unwrap!"},[g(o.value,W.id)?($(),Q(ts,{key:0},[f("img",{src:`${jr}/items/${W.image}`,class:ue(["h-8 w-8 sm:h-10 sm:w-10 object-contain pointer-events-none",{"bg-black rounded-full":W.image==="profile_avatar.webp"}]),alt:W.name},null,10,Ky),f("span",Qy,"x"+qe(W.quantity),1)],64)):($(),Q("div",Yy,[j(G(My),{class:"h-6 w-6 sm:h-8 sm:w-8 text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.4)]"})]))],8,Wy))),128))]),f("div",Jy,[L[5]||(L[5]=f("span",{class:"block text-[10px] text-center uppercase tracking-[0.2em] text-slate-500 mb-1 font-black"},"Code",-1)),f("div",{onClick:L[0]||(L[0]=W=>N(o.value)),class:"relative text-center bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-3 group transition-all hover:border-cyan-400/50 cursor-pointer active:scale-95 transform-gpu select-none",title:"Click to copy"},[f("span",Xy,qe(o.value),1),j(eh,{name:"fade"},{default:Y(()=>[c[o.value]?($(),Q("div",Zy," Copied! ")):Ue("",!0)]),_:1})])]),f("button",{onClick:L[1]||(L[1]=W=>D(o.value)),class:"w-full max-w-sm px-2 md:px-10 py-3 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 hover:from-blue-600 hover:via-blue-500 hover:to-blue-600 text-white font-black uppercase tracking-widest rounded-xl shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3 group cursor-pointer border border-white/20 relative overflow-hidden"},[...L[6]||(L[6]=[f("div",{class:"absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/snow.png')] opacity-10 pointer-events-none"},null,-1),f("span",{class:"flex items-center gap-2 drop-shadow-[0_2px_3px_rgba(0,0,0,0.5)] text-xs md:text-sm"},[f("span",{class:"text-lg animate-pulse group-hover:rotate-12 transition-transform"},"🎁"),me(" Redeem ")],-1)])])])):Ue("",!0)]),f("div",ev,[f("img",{src:`${jr}/avatar/christmas_noel.webp`,alt:"",class:"w-full h-auto"},null,8,tv)]),f("div",nv,[f("img",{src:`${jr}/avatar/christmas_augustus.webp`,alt:"",class:"w-full h-auto"},null,8,rv)])]))}}),kf=Object.assign(pr(sv,[["__scopeId","data-v-9b1372fc"]]),{__name:"HolidayGift"}),f4=Object.freeze(Object.defineProperty({__proto__:null,default:kf},Symbol.toStringTag,{value:"Module"})),iv=fr({__name:"BaseTooltip",props:{style:{type:Object,default:()=>({})}},setup(n){const e=n,t=at(()=>e.style);return(r,s)=>($(),Q("span",cp({class:"base-tooltip text-sm md:text-[1.05rem] px-[0.45rem] py-[0.3rem] md:px-[1.1rem] md:py-[0.45rem]",style:t.value,role:"tooltip"},r.$attrs),[fa(r.$slots,"default",{},void 0,!0)],16))}}),nt=Object.assign(pr(iv,[["__scopeId","data-v-bce57719"]]),{__name:"BaseTooltip"}),Pi=ae([]),Pf=ae({}),Vf=ae([]),Mf=ae({}),Df=ae({}),da=ae(!0),Nf=ae(null);let Gu=!1;const ov=async()=>{if(!(Gu||Pi.value.length>0)){Gu=!0;try{const e=await(await fetch("https://raw.githubusercontent.com/vabe44/31f5d518-epzl-cdn/main/assets/cached_configurations/characters.json")).json(),t=Object.values(e.charactersConfig.heroes),o=(await(await fetch("https://raw.githubusercontent.com/vabe44/31f5d518-epzl-cdn/main/assets/languages/English")).text()).split(`
`).slice(1),a={},c={},u={};for(const D of o){const S=D.split(",");if(S.length>=2){const L=S[0]?S[0].trim().replace(/"/g,""):"",W=S.slice(1).join(",").trim().replace(/"/g,"");L&&W&&(L.startsWith("heroes.name.")||L.startsWith("heroes.name_fancy.")||L.startsWith("specials.name."))?a[L]=W:L&&W&&L.startsWith("herocard.family.title.")?c[L.replace("herocard.family.title.","")]=W:L&&W&&L.startsWith("limitbreak.gift.title.")&&(u[L.replace("limitbreak.gift.title.","")]=W)}}Pf.value=c,Df.value=u;const d=e.charactersConfig.heroes,y=await(await fetch("https://raw.githubusercontent.com/vabe44/31f5d518-epzl-cdn/main/assets/heroes_audio_map.json")).json(),P=await(await fetch("https://raw.githubusercontent.com/vabe44/31f5d518-epzl-cdn/main/assets/data_en.json")).json();Mf.value=P.family_values||{},Vf.value=P.families_bonus||[];const N=new Set(P.allHeroes.map(D=>D.name));for(const D of P.allHeroes){const S=D.name+" C1";D.hasCostume=N.has(S)}Pi.value=t.map(D=>{const S=D.specialId;let L=D.specialId;if(D.parentHeroId){const E=d[D.parentHeroId];E&&(L=E.specialId)}const W=`heroes.name.${D.id}`,ee=`heroes.name_fancy.${D.id}`,we=`specials.name.${L}`,xe=D.canBeReceivedDate??549590400,ge=new Date("2000-01-01T00:00:00Z").getTime(),T=new Date(ge+xe*1e3),m=y[D.id]||[],_=P.allHeroes.find(E=>E.heroId===D.id);return{...D,costume:!!D.parentHeroId,trainer:!!D.trainerType,specialId:L,specialImageId:S,name:a[W]||_?.name||D.id,fancyName:a[ee],specialName:a[we],canBeReceivedDateParsed:T,specialAudioFiles:m,heroData:_||null}}),da.value=!1}catch(n){console.log("Error fetching heroes:",n),Nf.value=n,da.value=!1}}};function av(){const n=ae(!1),e=ae(!1),t=at(()=>{let u=Pi.value;return n.value||(u=u.filter(d=>!d.costume)),e.value||(u=u.filter(d=>!d.trainer)),u}),r=at(()=>Pi.value),s=at(()=>Pf.value),o=at(()=>Df.value),a=at(()=>Vf.value),c=at(()=>Mf.value);return Mi(ov),{heroesAll:r,heroes:t,loading:da,error:Nf,showCostumes:n,familiesAll:s,aetherGiftsAll:o,familiesBonusAll:a,familiesValuesAll:c}}const Wu=ae(null),Oo=ae([]),$r=ae(!1);function _l(){const{heroesAll:n,loading:e}=av(),t=(c,u)=>{const d=u.filter(N=>N.claimed),g=d.length,y=d.reduce((N,D)=>{const S=n.value.find(L=>L.id===D.answerId);if(S&&S.heroData){const L=S.heroData.lb2||S.heroData.lb1||S.heroData;return N+(L.power||0)+125}return N},0),I=u.length,P=u.filter(N=>N.won).length;return{totalPower:y,claimedCount:g,gamesPlayed:I,gamesWon:P}},r=async(c,u)=>{const d=wt.currentUser;if(!d)return u;if(n.value.length===0||e.value){let P=0;for(;(n.value.length===0||e.value)&&P<20;)await new Promise(N=>setTimeout(N,500)),P++}const g=xn(xt,"users",d.uid),y=xn(xt,"users",d.uid,"gameData",c),I=xn(xt,"leaderboard",d.uid);try{$r.value=!0;const P=await ni(g),N=P.exists()?P.data():{stats:{}},D=N.displayName||d.displayName||"Hero",S=N.photoURL||d.photoURL||"",L=await ni(y);let W=[];L.exists()&&(W=L.data().results||[]);const ee=[...W];u.forEach(_=>{const E=ee.findIndex(b=>b.gameDocId===_.gameDocId&&b.difficulty===_.difficulty);E===-1?ee.push(_):((_.won&&!ee[E].won||_.claimed&&!ee[E].claimed)&&(ee[E]={...ee[E],..._}),_.guessesHistory?.length>(ee[E].guessesHistory?.length||0)&&(ee[E].guessesHistory=_.guessesHistory,ee[E].guesses=_.guesses))}),await ri(y,{results:ee},{merge:!0});const we=t(c,ee),xe=["shadow","classic","skill"].filter(_=>_!==c);let ge=we.totalPower;xe.forEach(_=>{ge+=N.stats?.[_]?.totalPower||0});const T={displayName:D,photoURL:S,lastUpdated:bu(),totalPowerScore:ge,stats:{[c]:we}};await ri(g,T,{merge:!0});const m={uid:d.uid,displayName:D,photoURL:S,lastUpdated:bu(),totalPowerScore:ge,stats:{[c]:{totalPower:we.totalPower,claimedCount:we.claimedCount}}};return await ri(I,m,{merge:!0}),ee}catch(P){return console.error(`Error syncing ${c} results:`,P),u}finally{$r.value=!1}},s=async()=>{if(!wt.currentUser)return;const c=["shadow","classic","skill"];for(const u of c){const d=localStorage.getItem(`${u}ModeResults`);if(d)try{const g=JSON.parse(d);await r(u,g)}catch(g){console.error(`Error parsing local results for ${u}:`,g)}else await r(u,[])}await o()},o=async()=>{const c=wt.currentUser;if(c)try{const u=xn(xt,"users",c.uid),d=await ni(u);d.exists()&&(Wu.value=d.data())}catch(u){console.error("Error fetching profile:",u)}};return{profile:Wu,leaderboard:Oo,loading:$r,syncGameResults:r,syncAllModes:s,fetchProfile:o,calculateStats:t,fetchLeaderboard:async(c="shadow",u=20)=>{try{$r.value=!0,Oo.value=[];const d=Wa(xt,"leaderboard");let g;c==="global"?g=Ei(d,la("totalPowerScore","desc"),Ti(u)):g=Ei(d,la(`stats.${c}.totalPower`,"desc"),Ti(u));const y=await il(g),I=[];y.forEach(P=>{I.push({uid:P.id,...P.data()})}),Oo.value=I}catch(d){console.error("Error fetching leaderboard:",d)}finally{$r.value=!1}}}}const Fo=ae(null),Ku=ae(!0),lv=ae(!1);let Qu=!1;function yl(){const{syncAllModes:n}=_l();return!Qu&&typeof window<"u"&&(Qu=!0,mf(wt,async e=>{Fo.value=e,e&&await n(),Ku.value=!1})),{user:Fo,loading:Ku,isAuthenticated:at(()=>!!Fo.value),showLoginModal:lv}}const Lf="classicModeResults",Cn=ae([]),Yu=ae({rare:[],epic:[],legendary:[]});function Ju(){if(typeof window>"u")return[];const n=localStorage.getItem(Lf);if(!n)return[];try{return JSON.parse(n)}catch{return[]}}function Ws(n){typeof window>"u"||localStorage.setItem(Lf,JSON.stringify(n))}function cv(){const{isAuthenticated:n}=yl(),{syncGameResults:e}=_l(),t=async s=>{let o=Ju();Cn.value=o,n.value&&(o=await e("classic",o),Cn.value=o,Ws(o));for(const a of["rare","epic","legendary"]){const c=o.find(u=>u.difficulty===a&&u.gameDocId===s&&!u.finished);Yu.value[a]=c?c.guessesHistory.map(u=>({id:u})):[]}},r=async(s,o=!1)=>{const a=[...Cn.value],c=a.findIndex(u=>u.gameDocId===s.gameDocId&&u.difficulty===s.difficulty);if(o&&c!==-1&&a[c]!==void 0&&!a[c].finished||c!==-1?a[c]=s:a.push(s),Cn.value=a,Ws(a),n.value){const u=await e("classic",a);Cn.value=u,Ws(u)}};return Vi(n,async s=>{if(s){const o=Ju(),a=await e("classic",o);Cn.value=a,Ws(a)}}),{classicResults:Cn,guessesByDifficulty:Yu,initializeClassicGameState:t,saveClassicGameResult:r}}const Of="shadowModeResults",An=ae([]),Xu=ae({rare:[],epic:[],legendary:[]});function Zu(){if(typeof window>"u")return[];const n=localStorage.getItem(Of);if(!n)return[];try{return JSON.parse(n)}catch{return[]}}function Ks(n){typeof window>"u"||localStorage.setItem(Of,JSON.stringify(n))}function uv(){const{isAuthenticated:n}=yl(),{syncGameResults:e}=_l(),t=async s=>{let o=Zu();An.value=o,n.value&&(o=await e("shadow",o),An.value=o,Ks(o));for(const a of["rare","epic","legendary"]){const c=o.find(u=>u.difficulty===a&&u.gameDocId===s&&!u.finished);Xu.value[a]=c?c.guessesHistory.map(u=>({id:u})):[]}},r=async(s,o=!1)=>{const a=[...An.value],c=a.findIndex(u=>u.gameDocId===s.gameDocId&&u.difficulty===s.difficulty);if(o&&c!==-1&&!a[c].finished||c!==-1?a[c]=s:a.push(s),An.value=a,Ks(a),n.value){const u=await e("shadow",a);An.value=u,Ks(u)}};return Vi(n,async s=>{if(s){const o=Zu(),a=await e("shadow",o);An.value=a,Ks(a)}}),{shadowResults:An,guessesByDifficulty:Xu,initializeShadowGameState:t,saveShadowGameResult:r}}const hv=[{name:"Chadmo",message:"Thanks for all you do for the community",note:"Mythic Supporter",tier:"mythic"},{name:"MyB!",message:"Amazing site you've created... Thanks for sharing!",note:"Mythic Supporter",tier:"mythic"},{name:"Gary",message:"This site is really well done.",note:"Mythic Supporter",tier:"mythic"},{name:"Combonator",message:"Thanks for making this awesome site!",note:"First Supporter",tier:"first"},{name:"MMMiaMMM",message:"Thank you for this!",note:"Legendary Supporter",tier:"legendary"},{name:"L33t-Vortex",message:"Thanks for all the hard work",note:"Legendary Supporter",tier:"legendary"},{name:"Arkin",message:"This site is amazing! Keep up the great work",note:"Epic Supporter",tier:"epic"},{name:"Lamerko1993",message:"Good work deserves a reward and Gastille too. :)",note:"Epic Supporter",tier:"epic"},{name:"Hoots",message:"Thank you",note:"Epic Supporter",tier:"epic"},{name:"Regina",message:null,note:"Epic Supporter",tier:"epic"},{name:"King Klecko",message:null,note:"Epic Supporter",tier:"epic"},{name:"Shazam",message:"😘",note:"Epic Supporter",tier:"epic"},{name:"Vic",message:"Thank you so much for the huge help!",note:"Epic Supporter",tier:"epic"},{name:"Ship",message:"Thank you for everything",note:"Legendary Supporter",tier:"legendary"},{name:"Caput Corvi",message:"This is an awesome site! Many, many thanks!",note:"Epic Supporter",tier:"epic"},{name:"Psycrowsis [YouTube]",message:"Awesome for the community!",note:"Epic Supporter",tier:"epic"},{name:"Ruby Sorceresses",message:"Amazing website! TY:)",note:"Epic Supporter",tier:"epic"}],dv=()=>{const n=hv,e=["#f87171","#fb923c","#fbbf24","#facc15","#a3e635","#4ade80","#2dd4bf","#22d3ee","#38bdf8","#60a5fa","#818cf8","#a78bfa","#c084fc","#e879f9","#f472b6","#fb7185"],t=()=>e[Math.floor(Math.random()*e.length)];return{supporters:n,getTierConfig:o=>{switch(o){case"mythic":return{icon:"💎",label:"Mythic",class:"tier-mythic",glowIntensity:"0.9",shadowSize:"25px"};case"first":return{icon:"🥇",label:"First",class:"tier-first",glowIntensity:"0.8",shadowSize:"20px"};case"legendary":return{icon:"🌟",label:"Legendary",class:"tier-legendary",glowIntensity:"0.7",shadowSize:"15px"};case"epic":return{icon:"🔥",label:"Epic",class:"tier-epic",glowIntensity:"0.5",shadowSize:"10px"};default:return{icon:"⚔️",label:"Hero",class:"tier-rare",glowIntensity:"0.3",shadowSize:"6px"}}},getProcessedSupporters:(o=!1)=>{const a=n.map(d=>({...d,color:t()}));if(o)return[...a].sort(()=>Math.random()-.5);const c=["mythic","first","legendary","epic","rare"],u=a.reduce((d,g)=>(d[g.tier]=d[g.tier]||[],d[g.tier].push(g),d),{});return c.flatMap(d=>[...u[d]||[]].sort(()=>Math.random()-.5))},getRandomColor:t}},fv={class:"supporter-marquee-container w-full relative group"},pv={class:"flex items-center justify-center gap-2 mb-1 relative"},gv={class:"marquee-wrapper bg-black/20 backdrop-blur-sm border-y border-white/5 py-1.5 md:py-2 relative h-8 md:h-9 flex items-center overflow-hidden"},mv=["onMouseenter"],_v={class:"text-[11px] opacity-80"},yv={class:"text-xs font-black uppercase tracking-wider italic"},vv=["onMouseenter"],wv={class:"text-[11px] opacity-80"},bv={class:"text-xs font-black uppercase tracking-wider italic"},Ev=fr({__name:"SupporterMarquee",setup(n){const{getProcessedSupporters:e,getTierConfig:t}=dv(),r=ae(e(!0)),s=ae(null),o=at(()=>`${Math.max(20,r.value.length*3)}s`);return Mi(()=>{r.value=e(!0)}),(a,c)=>{const u=th;return $(),Q("div",fv,[f("div",pv,[j(u,{to:"/support-us",class:"relative group/title inline-flex items-center justify-center no-underline"},{default:Y(()=>[c[2]||(c[2]=f("span",{class:"text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 flex items-center gap-1.5 cursor-pointer hover:text-[#e2b04a] transition-colors"},[f("svg",{class:"w-3 h-3 text-yellow-500 animate-pulse",fill:"currentColor",viewBox:"0 0 24 24"},[f("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"})]),me(" Hall of Heroes ")],-1)),s.value&&s.value!=="null"?($(),Zn(nt,{key:0,class:"whitespace-nowrap"},{default:Y(()=>[me(qe(s.value),1)]),_:1})):Ue("",!0)]),_:1})]),f("div",gv,[c[3]||(c[3]=f("div",{class:"absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#111827] via-[#111827]/80 to-transparent z-20 pointer-events-none"},null,-1)),c[4]||(c[4]=f("div",{class:"absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#111827] via-[#111827]/80 to-transparent z-20 pointer-events-none"},null,-1)),f("div",{class:"marquee-content flex gap-12 whitespace-nowrap px-4 hover:pause-animation",style:Pn({animationDuration:o.value})},[($(!0),Q(ts,null,li(r.value,(d,g)=>($(),Q("div",{key:"a-"+d.name+g,onMouseenter:y=>s.value=d.message,onMouseleave:c[0]||(c[0]=y=>s.value=null),class:"inline-flex items-center gap-1 cursor-help transition-all duration-300 hover:scale-110 active:scale-95",style:Pn({color:d.color,textShadow:`0 0 ${G(t)(d.tier).shadowSize} ${d.color}${Math.round(parseFloat(G(t)(d.tier).glowIntensity)*255).toString(16).padStart(2,"0")}`})},[f("span",_v,qe(G(t)(d.tier).icon),1),f("span",yv,qe(d.name),1)],44,mv))),128)),($(!0),Q(ts,null,li(r.value,(d,g)=>($(),Q("div",{key:"b-"+d.name+g,onMouseenter:y=>s.value=d.message,onMouseleave:c[1]||(c[1]=y=>s.value=null),class:"inline-flex items-center gap-1 cursor-help transition-all duration-300 hover:scale-110 active:scale-95",style:Pn({color:d.color,textShadow:`0 0 ${G(t)(d.tier).shadowSize} ${d.color}${Math.round(parseFloat(G(t)(d.tier).glowIntensity)*255).toString(16).padStart(2,"0")}`})},[f("span",wv,qe(G(t)(d.tier).icon),1),f("span",bv,qe(d.name),1)],44,vv))),128))],4)])])}}}),Tv=Object.assign(pr(Ev,[["__scopeId","data-v-f16b9fb4"]]),{__name:"SupporterMarquee"}),Iv={class:"flex flex-col items-center bg-transparent shadow-none w-full relative z-40"},Cv={class:"relative w-full flex flex-col items-center px-4 mt-2 md:pt-1"},Av={class:"flex flex-col items-center justify-center relative"},Rv=["src"];const Sv=["src"],xv={class:"mt-2 px-2"},kv={class:"w-full mt-2 max-w-2xl mx-auto relative z-10"},Pv={key:0,class:"hidden md:flex wrapper w-100 mt-4 items-center justify-center relative"},Vv={class:"flex items-center gap-3 z-10 relative justify-center w-auto"},Mv={class:"w-12 h-12 md:w-16 md:h-16 flex items-center justify-center relative group"},Dv=["onClick"],Nv={key:0,class:"checkmark-overlay"},Lv={class:"w-12 h-12 md:w-16 md:h-16 flex items-center justify-center relative group"},Ov=["onClick"],Fv={key:0,class:"checkmark-overlay"},Uv={class:"w-12 h-12 md:w-16 md:h-16 flex items-center justify-center relative group"},Bv=["onClick"],jv={key:0,class:"checkmark-overlay"},$v={class:"w-12 h-12 md:w-16 md:h-16 flex items-center justify-center relative group"},qv=["onClick"],zv={class:"w-12 h-12 md:w-16 md:h-16 flex items-center justify-center relative group"},Hv=["onClick"],Gv={class:"w-12 h-12 md:w-16 md:h-16 flex items-center justify-center relative group"},Wv=["onClick"],Kv={class:"w-12 h-12 md:w-16 md:h-16 flex items-center justify-center relative group"},Qv=["onClick"],Yv={class:"w-12 h-12 md:w-16 md:h-16 flex items-center justify-center relative group"},Jv=["onClick"],Xv={class:"w-12 h-12 md:w-16 md:h-16 flex items-center justify-center relative group"},Zv=["onClick"],ew={class:"w-12 h-12 md:w-16 md:h-16 flex items-center justify-center relative group"},tw=["onClick"],nw={class:"w-12 h-12 md:w-16 md:h-16 flex items-center justify-center relative group"},rw=["onClick"],sw={class:"w-12 h-12 md:w-16 md:h-16 flex items-center justify-center relative group"},iw=["onClick"],ow={class:"w-12 h-12 md:w-16 md:h-16 flex items-center justify-center relative group"},aw=["onClick"],lw={class:"w-12 h-12 md:w-16 md:h-16 flex items-center justify-center relative group"},cw=["onClick"],uw={key:0,class:"fixed inset-0 z-[100] bg-black/95 overflow-y-auto"},hw={class:"flex flex-col p-4 min-h-screen"},dw={class:"flex justify-center relative mb-2"},fw=["src"],pw=["src"],gw={class:"mt-2 px-4"},mw={class:"grid grid-cols-1 md:grid-cols-2 gap-4 w-full mb-12 mt-4"},_w={class:"h-full flex items-center p-4 bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-2xl transition-all duration-300 group-hover:border-blue-400/50 group-hover:bg-slate-800/60 shadow-xl"},yw={class:"flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center mr-4 shadow-lg border-2 border-yellow-400/20"},vw={class:"h-full flex items-center p-4 bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-2xl transition-all duration-300 group-hover:border-purple-400/50 group-hover:bg-slate-800/60 shadow-xl"},ww={class:"flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center mr-4 shadow-lg border-2 border-yellow-400/20"},bw={class:"h-full flex items-center p-4 bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-2xl transition-all duration-300 group-hover:border-yellow-400/50 group-hover:bg-slate-800/60 shadow-xl relative overflow-visible"},Ew={class:"flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center mr-4 shadow-lg border-2 border-yellow-400/20"},Tw={class:"overflow-y-auto md:px-4 py-3 max-w-md mx-auto"},Iw={key:0,class:"flex flex-col items-center gap-4 py-4"},Cw={class:"flex flex-col items-center gap-2"},Aw=["src"],Rw={key:1,class:"w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center"},Sw={class:"text-white text-xl font-semibold"},xw={key:2,class:"text-gray-400 text-sm"},kw={class:"w-full mt-6 bg-gray-800/50 p-4 rounded-xl border border-gray-700"},Pw={class:"flex flex-col gap-2"},Vw={class:"flex gap-2"},Mw=["disabled"],Dw={class:"w-full mt-4"},Nw={key:0,class:"text-gray-400 text-sm italic"},Lw={key:1,class:"text-gray-500 text-sm italic"},Ow={key:2,class:"space-y-2 max-h-60 overflow-y-auto pr-2"},Fw={class:"text-xs text-gray-500"},Uw={key:1},Bw={key:0,class:"bg-red-500/20 border border-red-500 text-red-200 px-4 py-2 rounded-lg mb-4 text-sm"},jw={class:"flex justify-center mb-6"},$w=["disabled"],qw=["disabled"],zw={key:2,class:"flex flex-col gap-2 mt-4 text-sm text-gray-300"},Hw={class:"flex flex-col gap-6 mt-2"},Gw=["disabled"],Ww={key:0,class:"w-5 h-5 text-white",fill:"none",stroke:"currentColor","stroke-width":"2",viewBox:"0 0 24 24"},Kw={class:"flex flex-col gap-6 mt-2"},Qw=["disabled"],Yw={key:0,class:"w-5 h-5 text-white",fill:"none",stroke:"currentColor","stroke-width":"2",viewBox:"0 0 24 24"},Jw="https://raw.githubusercontent.com/vabe44/31f5d518-epzl-cdn/main",Xw=fr({__name:"AppHeader",props:{showNav:{type:Boolean,default:!0},showScrollToTop:{type:Boolean,default:!0},forceShowLoginMobile:{type:Boolean,default:!1}},setup(n){const e=Jw;ae(!0);const t=ae(!1),{winterCode:r}=xf(),s=["rgba(226, 88, 34, 0.8)","rgba(248, 200, 10, 0.8)","rgba(185, 56, 248, 0.8)","rgba(24, 188, 8, 0.8)","rgba(56, 189, 248, 0.8)"],o=ae(s[Math.floor(Math.random()*s.length)]),a=()=>{o.value=s[Math.floor(Math.random()*s.length)]};ae(!1);const c=ae(!1),u=up(),d=at(()=>u.path.startsWith("/blog")),g=at(()=>u.path==="/shadow"),{classicResults:y}=cv(),I=ae(!1),P=()=>{I.value=window.scrollY>400},N=()=>{window.scrollTo({top:0,behavior:"smooth"})},{user:D,showLoginModal:S}=yl(),{shadowResults:L}=uv(),W=["rare","epic","legendary"],ee=at(()=>{if(!y?.value)return!1;const F=Array.from(new Set(y.value.map(z=>z.gameDocId)));if(F.length===0)return!1;const w=F[F.length-1];return W.every(z=>y.value.some(X=>X.won&&X.difficulty===z&&X.gameDocId===w))}),we=at(()=>{if(!L?.value)return!1;const F=Array.from(new Set(L.value.map(z=>z.gameDocId)));if(F.length===0)return!1;const w=F[F.length-1];return W.every(z=>L.value.some(X=>X.won&&X.difficulty===z&&X.gameDocId===w))}),xe=ae(60),ge=ae(!1),T=ae(!1),m=ae(""),_=ae(""),E=ae(""),b=ae(!1),A=ae([]),v=ae(!1),Ae=ae(null),De=ae(""),Rt=ae(!1);async function Ir(F){const w=xn(xt,"users",F.uid),z=await ni(w);if(z.exists())Ae.value=z.data();else{const X={uid:F.uid,email:F.email,displayName:F.displayName||"Hero",photoURL:F.photoURL||"",createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};await ri(w,X),Ae.value=X}De.value=Ae.value?.displayName||""}async function Ht(){if(!(!D.value||!De.value||!De.value.trim())){Rt.value=!0;try{const F=xn(xt,"users",D.value.uid);await u2(F,{displayName:De.value.trim(),updatedAt:new Date().toISOString()}),Ae.value&&(Ae.value.displayName=De.value.trim()),alert("Profile updated!")}catch(F){console.error("Error updating profile:",F)}finally{Rt.value=!1}}}async function Gt(F){v.value=!0;try{const w=Ei(Wa(xt,"tierlists"),qd("userId","==",F),la("updatedAt","desc"),Ti(10)),z=await il(w),X=[];z.forEach(O=>{X.push({id:O.id,...O.data()})}),A.value=X}catch(w){console.error("Error fetching tierlists:",w)}finally{v.value=!1}}Mi(()=>{window.addEventListener("scroll",P),mf(wt,F=>{D.value=F,F?(Ir(F),Gt(F.uid)):(A.value=[],Ae.value=null)})}),hp(()=>{window.removeEventListener("scroll",P)}),Vi(S,F=>{F||(ge.value=!1,T.value=!1,E.value="",_.value="")});const x=async()=>{E.value="",b.value=!0;try{await f_(wt,m.value,_.value),S.value=!1,m.value="",_.value=""}catch(F){E.value=F.message}finally{b.value=!1}},C=async()=>{E.value="",b.value=!0;try{await d_(wt,m.value,_.value),S.value=!1,m.value="",_.value=""}catch(F){E.value=F.message}finally{b.value=!1}},J=async()=>{if(!m.value){E.value="Please enter your email address.";return}E.value="",b.value=!0;try{await h_(wt,m.value),alert("Password reset email sent!"),T.value=!1}catch(F){E.value=F.message}finally{b.value=!1}},te=async()=>{E.value="",b.value=!0;const F=new St;try{await L_(wt,F),S.value=!1}catch(w){E.value=w.message}finally{b.value=!1}},se=async()=>{try{await m_(wt),S.value=!1}catch(F){console.error("Error signing out:",F)}};return(F,w)=>{const z=gp,X=kf;return $(),Q("header",Iv,[f("div",Cv,[f("div",Av,[j(G(_e),{to:"/",class:"block group relative transition-all duration-500"},{default:Y(()=>[w[17]||(w[17]=f("div",{class:"absolute -inset-4 bg-blue-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"},null,-1)),f("img",{alt:"Empuzzled logo",class:"logo w-[100px] md:w-[112px] relative z-10 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110 group-hover:-rotate-2 group-active:scale-95 group-hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]",src:`${G(e)}/logo-crop.webp`,loading:"lazy"},null,8,Rv),Ue("",!0)]),_:1})]),f("div",{class:ue(["absolute top-0 right-2",F.forceShowLoginMobile?"block":"hidden md:block"])},[f("button",{onClick:w[0]||(w[0]=O=>S.value=!0),class:"text-white p-1 rounded-full hover:bg-blue-600 shadow-lg transition duration-150 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer overflow-hidden","aria-label":"Account"},[G(D)?.photoURL?($(),Q("img",{key:0,src:G(D).photoURL,class:"w-9 h-9 rounded-full object-cover"},null,8,Sv)):($(),Zn(G(Lo),{key:1,class:"w-8 h-8 m-0.5"}))])],2),f("div",xv,[f("h2",{onMouseenter:a,class:"text-[14px] sm:text-lg md:text-2xl font-black text-center tracking-tight leading-tight bg-gradient-to-b from-white via-slate-200 to-slate-400 bg-clip-text text-transparent drop-shadow-md max-w-[300px] sm:max-w-none mx-auto transition-all duration-500 ease-out hover:scale-[1.02] hover:brightness-125 cursor-default select-none companion-glow",style:Pn({"--glow-color":o.value})}," Your Ultimate E&P Companion ",36)]),f("div",kv,[j(Tv)]),F.showNav?($(),Q("button",{key:0,onClick:w[1]||(w[1]=O=>c.value=!0),class:"md:hidden absolute top-0 right-4 text-white p-2","aria-label":"Open menu"},[j(G(Py),{class:"w-8 h-8"})])):Ue("",!0)]),F.showNav?($(),Q("div",Pv,[f("nav",Vv,[j(G(_e),{to:"/classic",custom:""},{default:Y(({navigate:O,isActive:K,isExactActive:H})=>[f("div",Mv,[f("button",{type:"button",class:ue([["flex items-center justify-center rounded-2xl border-2 shadow-lg transition-all duration-200 relative cursor-pointer origin-center",K||H?"border-yellow-400 bg-gradient-to-br from-yellow-400 to-yellow-600 ring-4 ring-yellow-400/50 scale-110":"border-slate-700 bg-slate-800 group-hover:bg-gradient-to-br group-hover:from-yellow-400 group-hover:to-yellow-600 group-hover:border-yellow-400/50","group-hover:scale-110 focus:outline-none"],"w-[48px] h-[48px] md:w-[56px] md:h-[56px]"]),onClick:O,"aria-label":"Classic mode"},[j(G(qu),{class:ue(["h-8 w-8 flex-shrink-0 transition-colors",K||H?"text-black":"text-slate-400 group-hover:text-black"])},null,8,["class"]),ee.value?($(),Q("span",Nv,[...w[18]||(w[18]=[f("svg",{viewBox:"0 0 24 24",class:"checkmark-svg"},[f("circle",{cx:"12",cy:"12",r:"11",fill:"#22c55e"}),f("path",{d:"M7 12.5l3 3 6-6",stroke:"#fff","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round",fill:"none"})],-1)])])):Ue("",!0)],10,Dv),j(nt,null,{default:Y(()=>[...w[19]||(w[19]=[me("Classic Mode",-1)])]),_:1})])]),_:1}),j(G(_e),{to:"/skill",custom:""},{default:Y(({navigate:O,isActive:K,isExactActive:H})=>[f("div",Lv,[f("button",{type:"button",class:ue([["flex items-center justify-center rounded-2xl border-2 shadow-lg transition-all duration-200 relative cursor-pointer origin-center",K||H?"border-yellow-400 bg-gradient-to-br from-yellow-400 to-yellow-600 ring-4 ring-yellow-400/50 scale-110":"border-slate-700 bg-slate-800 group-hover:bg-gradient-to-br group-hover:from-yellow-400 group-hover:to-yellow-600 group-hover:border-yellow-400/50","group-hover:scale-110 focus:outline-none"],"w-[48px] h-[48px] md:w-[56px] md:h-[56px]"]),onClick:O,"aria-label":"Skill mode"},[j(G(zu),{class:ue(["h-8 w-8 flex-shrink-0 transition-colors",K||H?"text-black":"text-slate-400 group-hover:text-black"])},null,8,["class"]),ee.value?($(),Q("span",Fv,[...w[20]||(w[20]=[f("svg",{viewBox:"0 0 24 24",class:"checkmark-svg"},[f("circle",{cx:"12",cy:"12",r:"11",fill:"#22c55e"}),f("path",{d:"M7 12.5l3 3 6-6",stroke:"#fff","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round",fill:"none"})],-1)])])):Ue("",!0)],10,Ov),j(nt,null,{default:Y(()=>[...w[21]||(w[21]=[me("Skill Mode",-1)])]),_:1})])]),_:1}),j(G(_e),{to:"/shadow",custom:""},{default:Y(({navigate:O,isActive:K,isExactActive:H})=>[f("div",Uv,[f("button",{type:"button",class:ue([["flex items-center justify-center rounded-2xl border-2 shadow-lg transition-all duration-200 relative cursor-pointer origin-center",K||H?"border-yellow-400 bg-gradient-to-br from-yellow-400 to-yellow-600 ring-4 ring-yellow-400/50 scale-110":"border-slate-700 bg-slate-800 group-hover:bg-gradient-to-br group-hover:from-yellow-400 group-hover:to-yellow-600 group-hover:border-yellow-400/50","group-hover:scale-110 focus:outline-none"],"w-[48px] h-[48px] md:w-[56px] md:h-[56px]"]),onClick:O,"aria-label":"Shadow mode"},[j(G(Hu),{class:ue(["h-8 w-8 flex-shrink-0 transition-colors",K||H?"text-black":"text-slate-400 group-hover:text-black"])},null,8,["class"]),we.value?($(),Q("span",jv,[...w[22]||(w[22]=[f("svg",{viewBox:"0 0 24 24",class:"checkmark-svg"},[f("circle",{cx:"12",cy:"12",r:"11",fill:"#22c55e"}),f("path",{d:"M7 12.5l3 3 6-6",stroke:"#fff","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round",fill:"none"})],-1)])])):($(),Q("span",{key:1,class:ue(["absolute -top-2 -right-2 text-[8px] font-black px-1.5 py-0.5 rounded-full shadow-lg animate-pulse z-20 transition-all duration-300 border",K||H?"bg-slate-900 text-yellow-400 border-yellow-400/50":"bg-gradient-to-r from-yellow-400 to-yellow-600 text-slate-900 border-yellow-300/50"])}," NEW ",2))],10,Bv),j(nt,null,{default:Y(()=>[...w[23]||(w[23]=[me("Shadow Mode",-1)])]),_:1})])]),_:1}),j(G(_e),{to:"/blog",custom:""},{default:Y(({navigate:O})=>[f("div",$v,[f("button",{type:"button",class:ue([["flex items-center justify-center rounded-2xl border-2 shadow-lg transition-all duration-200 relative cursor-pointer origin-center",d.value?"border-red-400 bg-gradient-to-br from-red-400 to-red-600 ring-4 ring-red-500/50 scale-110":"border-slate-700 bg-slate-800 group-hover:bg-gradient-to-br group-hover:from-red-400 group-hover:to-red-600 group-hover:border-red-400/50","group-hover:scale-110 focus:outline-none"],"w-[48px] h-[48px] md:w-[56px] md:h-[56px]"]),onClick:O,"aria-label":"Blog page"},[($(),Q("svg",{version:"1.1",id:"_x32_",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512","xml:space":"preserve",fill:"currentColor",class:ue(["h-8 w-8 flex-shrink-0 transition-colors",d.value?"text-black":"text-slate-400 group-hover:text-black"])},[...w[24]||(w[24]=[f("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"},null,-1),f("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),f("g",{id:"SVGRepo_iconCarrier"},[f("g",null,[f("rect",{x:"293.186",y:"307.184",width:"131.572",height:"112.986"}),f("rect",{x:"87.243",y:"308.893",width:"154.448",height:"17.162"}),f("rect",{x:"87.243",y:"401.298",width:"154.448",height:"17.162"}),f("rect",{x:"87.243",y:"355.1",width:"154.448",height:"17.162"}),f("path",{d:"M416.428,0.004H95.58C42.787,0.013,0.016,42.792,0,95.577v303.685 c0.025,62.262,50.463,112.717,112.742,112.734h286.524c62.27-0.017,112.717-50.464,112.734-112.734V95.577 C511.992,42.792,469.212,0.013,416.428,0.004z M464.805,399.262c-0.008,18.15-7.308,34.424-19.198,46.34 c-11.916,11.891-28.19,19.19-46.34,19.198H112.742c-18.15-0.009-34.433-7.308-46.348-19.198 c-11.892-11.916-19.182-28.19-19.198-46.34V118.696h417.61V399.262z"}),f("path",{d:"M88.96,267.908h34.583c19.71,0,31.642-8.581,31.642-26.548c0-10.852-6.167-18.368-12.2-20.648v-0.268 c6.034-3.352,10.592-9.519,10.592-19.432c0-14.489-9.251-24.268-29.086-24.268H88.96c-0.796,0-1.332,0.536-1.332,1.34v88.475 C87.628,267.371,88.164,267.908,88.96,267.908z M107.338,193.495c0-0.528,0.251-0.804,0.804-0.804h13.944 c7.5,0,11.925,3.888,11.925,10.584c0,6.712-4.425,10.734-11.925,10.734h-13.944c-0.553,0-0.804-0.268-0.804-0.804V193.495z M107.338,229.955c0-0.528,0.251-0.795,0.804-0.795h15c8.061,0,12.343,4.424,12.343,11.405c0,7.097-4.282,11.396-12.343,11.396h-15 c-0.553,0-0.804-0.276-0.804-0.812V229.955z"}),f("path",{d:"M181.516,267.908h59.404c0.796,0,1.332-0.536,1.332-1.349v-14.874c0-0.813-0.536-1.341-1.332-1.341h-40.224 c-0.544,0-0.804-0.268-0.804-0.812v-71.447c0-0.804-0.528-1.34-1.341-1.34h-17.036c-0.805,0-1.332,0.536-1.332,1.34v88.475 C180.183,267.371,180.711,267.908,181.516,267.908z"}),f("path",{d:"M292.708,269.374c15.963,0,28.558-7.366,33.251-22.115c2.011-6.301,2.539-11.396,2.539-24.938 c0-13.542-0.528-18.637-2.539-24.939c-4.693-14.739-17.288-22.114-33.251-22.114c-15.956,0-28.558,7.375-33.243,22.114 c-2.02,6.302-2.556,11.397-2.556,24.939c0,13.542,0.536,18.637,2.556,24.938C264.149,262.009,276.752,269.374,292.708,269.374z M278.361,202.746c2.011-6.301,6.847-10.055,14.346-10.055c7.508,0,12.335,3.754,14.346,10.055 c1.073,3.226,1.474,7.634,1.474,19.576c0,11.924-0.402,16.357-1.474,19.567c-2.011,6.31-6.838,10.072-14.346,10.072 c-7.5,0-12.335-3.763-14.346-10.072c-1.064-3.21-1.475-7.643-1.475-19.567C276.886,210.38,277.297,205.972,278.361,202.746z"}),f("path",{d:"M387.961,269.374c16.081,0,28.685-8.171,33.251-22.794c1.6-4.952,2.263-12.46,2.263-20.505v-7.517 c0-0.788-0.536-1.333-1.332-1.333h-31.366c-0.813,0-1.349,0.545-1.349,1.333v12.888c0,0.796,0.536,1.332,1.349,1.332h12.326 c0.536,0,0.805,0.277,0.805,0.805c0,3.879-0.403,6.703-1.073,8.991c-1.878,6.026-7.777,9.386-14.614,9.386 c-7.91,0-12.88-3.763-14.891-10.072c-1.064-3.21-1.466-7.643-1.466-19.567c0-11.941,0.402-16.223,1.466-19.441 c2.011-6.302,6.847-10.19,14.631-10.19c7.5,0,12.05,3.218,15.678,9.385c0.269,0.67,0.939,0.939,1.886,0.67l14.338-6.033 c0.796-0.402,0.947-1.206,0.536-2.019c-4.299-10.995-15.419-19.425-32.439-19.425c-16.232,0-28.835,7.375-33.527,22.114 c-2.012,6.302-2.556,11.397-2.556,24.939c0,13.542,0.545,18.637,2.556,24.938C359.126,262.009,371.73,269.374,387.961,269.374z"})])],-1)])],2))],10,qv),j(nt,null,{default:Y(()=>[...w[25]||(w[25]=[me("Hero Reviews & Guides",-1)])]),_:1})])]),_:1}),j(G(_e),{to:"/farming-guide",custom:""},{default:Y(({navigate:O,isActive:K,isExactActive:H})=>[f("div",zv,[f("button",{type:"button",class:ue([["flex items-center justify-center rounded-2xl border-2 shadow-lg transition-all duration-200 relative cursor-pointer origin-center",K||H?"border-indigo-400 bg-gradient-to-br from-indigo-400 to-indigo-600 ring-4 ring-indigo-500/50 scale-110":"border-slate-700 bg-slate-800 group-hover:bg-gradient-to-br group-hover:from-indigo-400 group-hover:to-indigo-600 group-hover:border-indigo-400/50","group-hover:scale-110 focus:outline-none"],"w-[48px] h-[48px] md:w-[56px] md:h-[56px]"]),onClick:O,"aria-label":"Farming Guide"},[($(),Q("svg",{viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",class:ue(["h-8 w-8 flex-shrink-0 transition-colors",K||H?"text-black":"text-slate-400 group-hover:text-black"])},[...w[26]||(w[26]=[f("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"},null,-1),f("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),f("g",{id:"SVGRepo_iconCarrier"},[f("path",{d:"M16 0H13L3.70711 9.29289L2.20711 7.79289L0.792893 9.20711L3.08579 11.5L1.5835 13.0023C1.55586 13.0008 1.52802 13 1.5 13C0.671573 13 0 13.6716 0 14.5C0 15.3284 0.671573 16 1.5 16C2.32843 16 3 15.3284 3 14.5C3 14.472 2.99923 14.4441 2.99771 14.4165L4.5 12.9142L6.79289 15.2071L8.20711 13.7929L6.70711 12.2929L16 3V0Z"})],-1)])],2))],10,Hv),j(nt,null,{default:Y(()=>[...w[27]||(w[27]=[me("Farming Guide",-1)])]),_:1})])]),_:1}),j(G(_e),{to:"/calendar",custom:""},{default:Y(({navigate:O,isActive:K,isExactActive:H})=>[f("div",Gv,[f("button",{type:"button",class:ue([["flex items-center justify-center rounded-2xl border-2 shadow-lg transition-all duration-200 relative cursor-pointer origin-center",K||H?"border-orange-400 bg-gradient-to-br from-orange-400 to-orange-600 ring-4 ring-orange-400/50 scale-110":"border-slate-700 bg-slate-800 group-hover:bg-gradient-to-br group-hover:from-orange-400 group-hover:to-orange-600 group-hover:border-orange-400/50","group-hover:scale-110 focus:outline-none"],"w-[48px] h-[48px] md:w-[56px] md:h-[56px]"]),onClick:O,"aria-label":"Calendar"},[($(),Q("svg",{viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",class:ue(["h-8 w-8 flex-shrink-0 transition-colors",K||H?"text-black":"text-slate-400 group-hover:text-black"])},[...w[28]||(w[28]=[f("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"},null,-1),f("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),f("g",{id:"SVGRepo_iconCarrier"},[f("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7 1C6.44772 1 6 1.44772 6 2V3H5C3.34315 3 2 4.34315 2 6V20C2 21.6569 3.34315 23 5 23H13.101C12.5151 22.4259 12.0297 21.7496 11.6736 21H5C4.44772 21 4 20.5523 4 20V11H20V11.2899C20.7224 11.5049 21.396 11.8334 22 12.2547V6C22 4.34315 20.6569 3 19 3H18V2C18 1.44772 17.5523 1 17 1C16.4477 1 16 1.44772 16 2V3H8V2C8 1.44772 7.55228 1 7 1ZM16 6V5H8V6C8 6.55228 7.55228 7 7 7C6.44772 7 6 6.55228 6 6V5H5C4.44772 5 4 5.44772 4 6V9H20V6C20 5.44772 19.5523 5 19 5H18V6C18 6.55228 17.5523 7 17 7C16.4477 7 16 6.55228 16 6Z"}),f("path",{d:"M17 16C17 15.4477 17.4477 15 18 15C18.5523 15 19 15.4477 19 16V17.703L19.8801 18.583C20.2706 18.9736 20.2706 19.6067 19.8801 19.9973C19.4896 20.3878 18.8564 20.3878 18.4659 19.9973L17.2929 18.8243C17.0828 18.6142 16.9857 18.3338 17.0017 18.0588C17.0006 18.0393 17 18.0197 17 18V16Z"}),f("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 18C24 21.3137 21.3137 24 18 24C14.6863 24 12 21.3137 12 18C12 14.6863 14.6863 12 18 12C21.3137 12 24 14.6863 24 18ZM13.9819 18C13.9819 20.2191 15.7809 22.0181 18 22.0181C20.2191 22.0181 22.0181 20.2191 22.0181 18C22.0181 15.7809 20.2191 13.9819 18 13.9819C15.7809 13.9819 13.9819 15.7809 13.9819 18Z"})],-1)])],2))],10,Wv),j(nt,null,{default:Y(()=>[...w[29]||(w[29]=[me("Calendar",-1)])]),_:1})])]),_:1}),j(G(_e),{to:"/hero-database",custom:""},{default:Y(({navigate:O,isActive:K,isExactActive:H})=>[f("div",Kv,[f("button",{type:"button",class:ue([["flex items-center justify-center rounded-2xl border-2 shadow-lg transition-all duration-200 relative cursor-pointer origin-center",K||H?"border-teal-400 bg-gradient-to-br from-teal-400 to-teal-600 ring-4 ring-teal-500/50 scale-110":"border-slate-700 bg-slate-800 group-hover:bg-gradient-to-br group-hover:from-teal-400 group-hover:to-teal-600 group-hover:border-teal-400/50","group-hover:scale-110 focus:outline-none"],"w-[48px] h-[48px] md:w-[56px] md:h-[56px]"]),onClick:O,"aria-label":"Hero Database"},[($(),Q("svg",{viewBox:"0 0 600 600",version:"1.1",id:"svg9724",fill:"currentColor",class:ue(["h-8 w-8 flex-shrink-0 transition-colors",K||H?"text-black":"text-slate-400 group-hover:text-black"])},[...w[30]||(w[30]=[f("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"},null,-1),f("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),f("g",{id:"SVGRepo_iconCarrier"},[f("defs",{id:"defs9728"}),f("path",{id:"path3428",style:{color:"currentColor",fill:"currentColor","stroke-linejoin":"round","paint-order":"stroke fill markers"},d:"M 300 0 C 221.30245 0 150.09841 8.0113158 97.068359 21.535156 C 70.553346 28.297076 48.605538 36.277916 31.677734 46.484375 C 16.579982 55.587421 3.2445893 67.928721 0.53125 85 L 0 85 L 0 90 C 0 95.160045 3.6392602 102.94345 17.03125 112.83789 C 30.423241 122.73233 52.11942 133.00486 79.691406 141.62109 C 134.83535 158.85361 213.32376 170 300 170 C 386.67624 170 465.16467 158.85361 520.30859 141.62109 C 547.8806 133.00486 569.57675 122.73233 582.96875 112.83789 C 596.36075 102.94345 600 95.160045 600 90 L 599.87305 90 C 599.19452 70.318664 584.84711 56.447884 568.32227 46.484375 C 551.39442 36.277916 529.44664 28.297076 502.93164 21.535156 C 449.90159 8.0113158 378.69755 0 300 0 z M 0 149.67969 L 0 234.10742 C 0.70499641 239.21983 4.6599347 246.30446 16.722656 255.2168 C 30.11466 265.11125 51.810798 275.38376 79.382812 284 C 134.52681 301.23251 213.01506 312.37891 299.69141 312.37891 C 386.36774 312.37891 464.85602 301.23251 520 284 C 547.57201 275.38376 569.26815 265.11125 582.66016 255.2168 C 596.05215 245.32235 599.69141 237.53895 599.69141 232.37891 L 600 232.37891 L 600 149.67969 C 581.93283 161.57337 559.1282 171.3983 532.24023 179.80078 C 471.56758 198.761 390.05399 210 300 210 C 209.94601 210 128.43244 198.761 67.759766 179.80078 C 40.871811 171.3983 18.067172 161.57337 0 149.67969 z M 600 291.79688 C 590.25148 298.2521 579.18165 304.12941 566.75 309.46875 C 556.06951 314.05598 544.44003 318.27081 531.93164 322.17969 C 471.2589 341.13992 389.74549 352.37891 299.69141 352.37891 C 209.63733 352.37891 128.12391 341.13993 67.451172 322.17969 C 40.720883 313.82647 18.016718 304.0712 0 292.27148 L 0 380 C 0 385.16005 3.6392334 392.94343 17.03125 402.83789 C 30.423267 412.73235 52.119364 423.00484 79.691406 431.62109 C 134.83545 448.85363 213.32358 460 300 460 C 386.67642 460 465.16455 448.85363 520.30859 431.62109 C 547.88068 423.00484 569.57666 412.73235 582.96875 402.83789 C 596.36074 392.94343 600 385.16005 600 380 L 600 291.79688 z M 0 439.67969 L 0 508.59375 L 0 515 L 0.53125 515 C 3.2445947 532.0713 16.579952 544.41257 31.677734 553.51562 C 48.605572 563.7221 70.553292 571.70292 97.068359 578.46484 C 150.09851 591.98873 221.30229 600 300 600 C 378.69771 600 449.90149 591.98873 502.93164 578.46484 C 529.4467 571.70292 551.3944 563.7221 568.32227 553.51562 C 583.42003 544.41257 596.7554 532.0713 599.46875 515 L 600 515 L 600 508.59375 L 600 439.67969 C 581.93278 451.57339 559.1283 461.39828 532.24023 469.80078 C 471.56747 488.76104 390.05417 500 300 500 C 209.94583 500 128.43256 488.76104 67.759766 469.80078 C 40.871757 461.39828 18.067208 451.57339 0 439.67969 z "})],-1)])],2))],10,Qv),j(nt,null,{default:Y(()=>[...w[31]||(w[31]=[me("Hero Database",-1)])]),_:1})])]),_:1}),j(G(_e),{to:"/hero-coach",custom:""},{default:Y(({navigate:O,isActive:K,isExactActive:H})=>[f("div",Yv,[f("button",{type:"button",class:ue([["flex items-center justify-center rounded-2xl border-2 shadow-lg transition-all duration-200 relative cursor-pointer origin-center",K||H?"border-yellow-400 bg-gradient-to-br from-yellow-400 to-yellow-600 ring-4 ring-yellow-400/50 scale-110":"border-slate-700 bg-slate-800 group-hover:bg-gradient-to-br group-hover:from-yellow-400 group-hover:to-yellow-600 group-hover:border-yellow-400/50","group-hover:scale-110 focus:outline-none"],"w-[48px] h-[48px] md:w-[56px] md:h-[56px]"]),onClick:O,"aria-label":"Hero Coach"},[($(),Q("svg",{version:"1.1",id:"_x32_",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512","xml:space":"preserve",fill:"currentColor",class:ue(["h-8 w-8 flex-shrink-0 transition-colors",K||H?"text-black":"text-slate-400 group-hover:text-black"])},[...w[32]||(w[32]=[f("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"},null,-1),f("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),f("g",{id:"SVGRepo_iconCarrier"},[f("g",null,[f("path",{d:"M141.698,141.549H79.077c-8.488,0-15.37,6.882-15.37,15.362v198.179c0,8.479,6.882,15.362,15.37,15.362h62.622 c8.489,0,15.371-6.883,15.371-15.362V156.911C157.07,148.431,150.187,141.549,141.698,141.549z"}),f("path",{d:"M32.374,189.734H12.803C5.736,189.734,0,195.47,0,202.537v106.925c0,7.068,5.736,12.803,12.803,12.803h19.571 c7.067,0,12.803-5.736,12.803-12.803V202.537C45.177,195.47,39.441,189.734,32.374,189.734z"}),f("rect",{x:"177.69",y:"228.894",width:"156.62",height:"54.212"}),f("path",{d:"M432.922,141.549h-62.621c-8.488,0-15.371,6.882-15.371,15.362v198.179c0,8.479,6.882,15.362,15.371,15.362 h62.621c8.488,0,15.371-6.883,15.371-15.362V156.911C448.293,148.431,441.411,141.549,432.922,141.549z"}),f("path",{d:"M499.197,189.734h-19.57c-7.068,0-12.803,5.736-12.803,12.803v106.925c0,7.068,5.736,12.803,12.803,12.803 h19.57c7.068,0,12.803-5.736,12.803-12.803V202.537C512,195.47,506.264,189.734,499.197,189.734z"})])],-1)])],2))],10,Jv),j(nt,null,{default:Y(()=>[...w[33]||(w[33]=[me("Hero Coach",-1)])]),_:1})])]),_:1}),j(G(_e),{to:"/visiting-outfitter",custom:""},{default:Y(({navigate:O,isActive:K,isExactActive:H})=>[f("div",Xv,[f("button",{type:"button",class:ue([["flex items-center justify-center rounded-2xl border-2 shadow-lg transition-all duration-200 relative cursor-pointer origin-center",K||H?"border-pink-400 bg-gradient-to-br from-pink-400 to-pink-600 ring-4 ring-pink-400/50 scale-110":"border-slate-700 bg-slate-800 group-hover:bg-gradient-to-br group-hover:from-pink-400 group-hover:to-pink-600 group-hover:border-pink-400/50","group-hover:scale-110 focus:outline-none"],"w-[48px] h-[48px] md:w-[56px] md:h-[56px]"]),onClick:O,"aria-label":"Visiting Outfitter"},[($(),Q("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:ue(["h-8 w-8 flex-shrink-0 transition-colors",K||H?"text-black":"text-slate-400 group-hover:text-black"])},[...w[34]||(w[34]=[f("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"},null,-1),f("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),f("g",{id:"SVGRepo_iconCarrier"},[f("path",{d:"M21 18L14.9339 13.8837M11.7895 11.75L7 8.5M21 5.5L7 15M8 6.5C8 7.88071 6.88071 9 5.5 9C4.11929 9 3 7.88071 3 6.5C3 5.11929 4.11929 4 5.5 4C6.88071 4 8 5.11929 8 6.5ZM8 17C8 15.6193 6.88071 14.5 5.5 14.5C4.11929 14.5 3 15.6193 3 17C3 18.3807 4.11929 19.5 5.5 19.5C6.88071 19.5 8 18.3807 8 17Z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])],2))],10,Zv),j(nt,null,{default:Y(()=>[...w[35]||(w[35]=[me("Visiting Outfitter",-1)])]),_:1})])]),_:1}),j(G(_e),{to:"/soul-exchange",custom:""},{default:Y(({navigate:O,isActive:K,isExactActive:H})=>[f("div",ew,[f("button",{type:"button",class:ue([["flex items-center justify-center rounded-2xl border-2 shadow-lg transition-all duration-200 relative cursor-pointer origin-center",K||H?"border-purple-400 bg-gradient-to-br from-purple-400 to-purple-600 ring-4 ring-purple-400/50 scale-110":"border-slate-700 bg-slate-800 group-hover:bg-gradient-to-br group-hover:from-purple-400 group-hover:to-purple-600 group-hover:border-purple-400/50","group-hover:scale-110 focus:outline-none"],"w-[48px] h-[48px] md:w-[56px] md:h-[56px]"]),onClick:O,"aria-label":"Soul Exchange"},[($(),Q("svg",{version:"1.1",id:"_x32_",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512","xml:space":"preserve",fill:"currentColor",class:ue(["h-8 w-8 flex-shrink-0 transition-colors",K||H?"text-black":"text-slate-400 group-hover:text-black"])},[...w[36]||(w[36]=[f("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"},null,-1),f("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),f("g",{id:"SVGRepo_iconCarrier"},[f("g",null,[f("path",{d:"M405.878,357.099c-3.641-41.297-29.703-99.953-92.734-102.781c-92.922,0.25-106.391,72.141-97.656,103.984 c7.328,26.75,26.781,48.078,54.422,45.656s48.469-26.844,45.656-54.438c-0.484-29.266,24.344-28.5,25.094,3.875 c1.016,43.094-28.094,80.922-71.031,84.703c-42.938,3.75-77.531-28.547-84.719-71.031c-4.344-25.781,0.594-75.172,44.438-113.766 c56.344-49.594,117.719,9.875,112.734-70.578c-5.031-81.188-25.438-82.906-78.063-114.531 c-34.797-20.922-40.75-54.109-38.797-67.109c0.078-0.625,0.078-1.563-1.156-0.781c-32.594,20.469-32.859,58-13.813,87.25 c9.141,14.016,28.031,21.234,29.969,43.422c2.641,30.094-14.672,39.281-28.938,51.703c-14.25,12.422-31.219,25.75-56.813,52.078 c-40.875,42.063-51.625,95.219-48.359,140.266c3.609,41.281,23.625,77.203,53.031,101.875 c29.453,24.688,68.313,38.141,109.594,34.516c41.297-3.625,77.203-23.641,101.906-53.063 C395.315,428.911,409.487,398.38,405.878,357.099z"})])],-1)])],2))],10,tw),j(nt,null,{default:Y(()=>[...w[37]||(w[37]=[me("Soul Exchange",-1)])]),_:1})])]),_:1}),j(G(_e),{to:"/fated-summon",custom:""},{default:Y(({navigate:O,isActive:K,isExactActive:H})=>[f("div",nw,[f("button",{type:"button",class:ue([["flex items-center justify-center rounded-2xl border-2 shadow-lg transition-all duration-200 relative cursor-pointer origin-center",K||H?"border-cyan-400 bg-gradient-to-br from-cyan-400 to-cyan-600 ring-4 ring-cyan-500/50 scale-110":"border-slate-700 bg-slate-800 group-hover:bg-gradient-to-br group-hover:from-cyan-400 group-hover:to-cyan-600 group-hover:border-cyan-400/50","group-hover:scale-110 focus:outline-none"],"w-[48px] h-[48px] md:w-[56px] md:h-[56px]"]),onClick:O,"aria-label":"Fated Summon"},[($(),Q("svg",{viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",class:ue(["h-8 w-8 flex-shrink-0 transition-colors",K||H?"text-black":"text-slate-400 group-hover:text-black"])},[...w[38]||(w[38]=[f("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"},null,-1),f("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),f("g",{id:"SVGRepo_iconCarrier"},[f("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M12.4722 10C13.4223 8.93849 14 7.53671 14 6C14 2.68629 11.3137 0 8 0C4.68629 0 2 2.68629 2 6C2 7.53671 2.57771 8.93849 3.52779 10H12.4722ZM8 5L10 3L12 5L10 7L8 5Z"}),f("path",{d:"M15 15V14L13 12H3L1 14V15H15Z"})],-1)])],2))],10,rw),j(nt,null,{default:Y(()=>[...w[39]||(w[39]=[me("Fated Summon",-1)])]),_:1})])]),_:1}),j(G(_e),{to:"/tier-list",custom:""},{default:Y(({navigate:O,isActive:K,isExactActive:H})=>[f("div",sw,[f("button",{type:"button",class:ue([["flex items-center justify-center rounded-2xl border-2 shadow-lg transition-all duration-200 relative cursor-pointer origin-center",K||H?"border-lime-400 bg-gradient-to-br from-lime-400 to-lime-600 ring-4 ring-lime-500/50 scale-110":"border-slate-700 bg-slate-800 group-hover:bg-gradient-to-br group-hover:from-lime-400 group-hover:to-lime-600 group-hover:border-lime-400/50","group-hover:scale-110 focus:outline-none"],"w-[48px] h-[48px] md:w-[56px] md:h-[56px]"]),onClick:O,"aria-label":"Tier List Maker"},[($(),Q("svg",{class:ue(["h-8 w-8 flex-shrink-0 transition-colors",K||H?"text-black":"text-slate-400 group-hover:text-black"]),viewBox:"0 0 24 24",version:"1.1",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},[...w[40]||(w[40]=[f("path",{d:"M7.23767,17.0125 C7.62819,16.622 8.26136,16.622 8.65188,17.0125 C9.01236,17.3729615 9.04008923,17.9402207 8.73506769,18.3324973 L8.65188,18.4267 L6.35378,20.7248 C5.89817333,21.1804533 5.17834996,21.2108302 4.68751439,20.8159307 L4.58602,20.7248 L3.34856,19.4874 C2.95803,19.0968 2.95803,18.4637 3.34856,18.0731 C3.70904,17.7126385 4.27627503,17.6849107 4.6685635,17.9899166 L4.76277,18.0731 L5.4699,18.7803 L7.23767,17.0125 Z M20.0002,17.9999 C20.5525,17.9999 21.0002,18.4477 21.0002,18.9999 C21.0002,19.5522 20.5525,19.9999 20.0002,19.9999 L11.0002,19.9999 C10.4479,19.9999 10.0002,19.5522 10.0002,18.9999 C10.0002,18.4477 10.4479,17.9999 11.0002,17.9999 L20.0002,17.9999 Z M8.65188,10.0125 C9.0424,10.403 9.0424,11.0362 8.65188,11.4267 L6.35378,13.7248 C5.86563,14.213 5.07417,14.213 4.58602,13.7248 L3.34856,12.4873 C2.95803,12.0968 2.95803,11.4637 3.34856,11.0731 C3.73908,10.6826 4.37225,10.6826 4.76277,11.0731 L5.4699,11.7803 L7.23767,10.0125 C7.62819,9.62197 8.26136,9.62197 8.65188,10.0125 Z M20.0002,10.9999 C20.5525,10.9999 21.0002,11.4477 21.0002,11.9999 C21.0002,12.51275 20.614173,12.9354092 20.1168239,12.9931725 L20.0002,12.9999 L11.0002,12.9999 C10.4479,12.9999 10.0002,12.5522 10.0002,11.9999 C10.0002,11.4871429 10.386227,11.0644041 10.8835761,11.0066289 L11.0002,10.9999 L20.0002,10.9999 Z M7.23767,3.0125 C7.62819,2.62197 8.26136,2.62197 8.65188,3.0125 C9.01236,3.37298 9.04008923,3.94021503 8.73506769,4.3325035 L8.65188,4.42671 L6.35378,6.72481 C5.89817333,7.18041667 5.17834996,7.21079044 4.68751439,6.81593133 L4.58602,6.72481 L3.34856,5.48735 C2.95803,5.09683 2.95803,4.46366 3.34856,4.07314 C3.70904,3.71265077 4.27627503,3.68492083 4.6685635,3.98995018 L4.76277,4.07314 L5.4699,4.78026 L7.23767,3.0125 Z M20.0002,3.99995 C20.5525,3.99995 21.0002,4.44766 21.0002,4.99995 C21.0002,5.51278143 20.614173,5.93545653 20.1168239,5.9932222 L20.0002,5.99995 L11.0002,5.99995 C10.4479,5.99995 10.0002,5.55223 10.0002,4.99995 C10.0002,4.48710929 10.386227,4.06429043 10.8835761,4.00651523 L11.0002,3.99995 L20.0002,3.99995 Z"},null,-1)])],2))],10,iw),j(nt,null,{default:Y(()=>[...w[41]||(w[41]=[me("Tier List Maker",-1)])]),_:1})])]),_:1}),j(G(_e),{to:"/talent-simulator",custom:""},{default:Y(({navigate:O,isActive:K,isExactActive:H})=>[f("div",ow,[f("button",{type:"button",class:ue([["flex items-center justify-center rounded-2xl border-2 shadow-lg transition-all duration-200 relative cursor-pointer origin-center",K||H?"border-orange-400 bg-gradient-to-br from-orange-400 to-orange-600 ring-4 ring-orange-500/50 scale-110":"border-slate-700 bg-slate-800 group-hover:bg-gradient-to-br group-hover:from-orange-400 group-hover:to-orange-600 group-hover:border-orange-400/50","group-hover:scale-110 focus:outline-none"],"w-[48px] h-[48px] md:w-[56px] md:h-[56px]"]),onClick:O,"aria-label":"Talent Simulator"},[($(),Q("svg",{fill:"currentColor",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"1.5",class:ue(["h-8 w-8 flex-shrink-0 transition-colors",K||H?"text-black":"text-slate-400 group-hover:text-black"])},[...w[42]||(w[42]=[f("circle",{cx:"12",cy:"7",r:"2"},null,-1),f("circle",{cx:"8",cy:"17",r:"2"},null,-1),f("circle",{cx:"16",cy:"17",r:"2"},null,-1),f("line",{x1:"12",y1:"9",x2:"8",y2:"15"},null,-1),f("line",{x1:"12",y1:"9",x2:"16",y2:"15"},null,-1)])],2))],10,aw),j(nt,null,{default:Y(()=>[...w[43]||(w[43]=[me("Talent Simulator",-1)])]),_:1})])]),_:1}),j(G(_e),{to:"/codes",custom:""},{default:Y(({navigate:O,isActive:K,isExactActive:H})=>[f("div",lw,[f("button",{type:"button",class:ue([["flex items-center justify-center rounded-2xl border-2 shadow-lg transition-all duration-200 relative cursor-pointer origin-center",K||H?"border-green-400 bg-gradient-to-br from-green-400 to-green-600 ring-4 ring-green-500/50 scale-110":"border-slate-700 bg-slate-800 group-hover:bg-gradient-to-br group-hover:from-green-400 group-hover:to-green-600 group-hover:border-green-400/50","group-hover:scale-110 focus:outline-none"],"w-[48px] h-[48px] md:w-[56px] md:h-[56px]"]),onClick:O,"aria-label":"Redeem Codes"},[($(),Q("svg",{viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:ue(["h-8 w-8 flex-shrink-0 transition-colors",K||H?"text-black":"text-slate-400 group-hover:text-black"])},[...w[44]||(w[44]=[f("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"},null,-1),f("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),f("g",{id:"SVGRepo_iconCarrier"},[f("g",{id:"Layer_2","data-name":"Layer 2"},[f("g",{id:"invisible_box","data-name":"invisible box"},[f("rect",{width:"48",height:"48",fill:"none"})]),f("g",{id:"Layer_7","data-name":"Layer 7"},[f("g",null,[f("path",{d:"M43,12H38.3a4.2,4.2,0,0,0,.4-1,7,7,0,0,0-.6-5.3,6.7,6.7,0,0,0-4.3-3.4A7.1,7.1,0,0,0,25,7l-1,3.4L23,7a7.1,7.1,0,0,0-8.8-4.7A6.7,6.7,0,0,0,9.9,5.7,7,7,0,0,0,9.3,11a4.2,4.2,0,0,0,.4,1H5a2.9,2.9,0,0,0-3,3v7H17V16h4v6h6V16h4v6H46V15A2.9,2.9,0,0,0,43,12ZM17,12h-.9a3.1,3.1,0,0,1-3-2.2,2.9,2.9,0,0,1,.3-2.2,3,3,0,0,1,1.8-1.5,3.3,3.3,0,0,1,4,2.1L20.3,12ZM34.9,9.8a3.1,3.1,0,0,1-3,2.2H27.7l1.1-3.8a3.3,3.3,0,0,1,4-2.1,3,3,0,0,1,1.8,1.5A2.9,2.9,0,0,1,34.9,9.8Z"}),f("rect",{x:"21",y:"26",width:"6",height:"20"}),f("path",{d:"M4,43a3,3,0,0,0,3,3H17V26H4Z"}),f("path",{d:"M31,46H41a3,3,0,0,0,3-3V26H31Z"})])])])],-1)])],2))],10,cw),j(nt,null,{default:Y(()=>[...w[45]||(w[45]=[me("Redeem Codes",-1)])]),_:1})])]),_:1}),w[46]||(w[46]=f("div",{class:"menu-bar-decor"},null,-1))])])):Ue("",!0),($(),Zn(Uo,{to:"body"},[c.value?($(),Q("div",uw,[f("div",hw,[f("div",dw,[f("button",{onClick:w[2]||(w[2]=O=>{S.value=!0,c.value=!1}),class:"absolute top-1 left-1 text-white p-1 rounded-full hover:bg-blue-600 shadow-lg transition duration-150 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer overflow-hidden","aria-label":"Account"},[G(D)?.photoURL?($(),Q("img",{key:0,src:G(D).photoURL,class:"w-9 h-9 rounded-full object-cover"},null,8,fw)):($(),Zn(G(Lo),{key:1,class:"w-8 h-8 m-0.5"}))]),j(G(_e),{to:"/",class:"block"},{default:Y(()=>[f("img",{alt:"Empuzzled logo",class:"logo w-[100px] md:w-[180px]",src:`${G(e)}/logo-crop.webp`,loading:"lazy"},null,8,pw)]),_:1}),f("button",{onClick:w[3]||(w[3]=O=>c.value=!1),class:"absolute top-1 right-1 text-white p-2","aria-label":"Close menu"},[j(G(Dy),{class:"w-8 h-8"})])]),f("div",gw,[f("h2",{onMouseenter:a,class:"text-[14px] sm:text-lg md:text-2xl font-black text-center tracking-tight leading-tight bg-gradient-to-b from-white via-slate-200 to-slate-400 bg-clip-text text-transparent drop-shadow-md max-w-[300px] sm:max-w-none mx-auto transition-all duration-500 ease-out hover:scale-[1.02] hover:brightness-125 cursor-default select-none companion-glow",style:Pn({"--glow-color":o.value})}," Your Ultimate E&P Companion ",36)]),f("div",mw,[j(G(_e),{to:"/classic",class:"group no-underline"},{default:Y(()=>[f("div",_w,[f("div",yw,[j(G(qu),{class:"h-8 w-8 text-black"})]),w[47]||(w[47]=f("div",{class:"flex-1"},[f("h2",{class:"text-xl font-bold text-white leading-tight"},"Daily Hero Hunt"),f("p",{class:"text-sm text-slate-400 mt-0.5"},"Test your knowledge! Crack the clues and find today's mystery hero.")],-1))])]),_:1}),j(G(_e),{to:"/skill",class:"group no-underline"},{default:Y(()=>[f("div",vw,[f("div",ww,[j(G(zu),{class:"h-8 w-8 text-black"})]),w[48]||(w[48]=f("div",{class:"flex-1"},[f("h2",{class:"text-xl font-bold text-white leading-tight"},"Skill Master Quest"),f("p",{class:"text-sm text-slate-400 mt-0.5"},"Recognize the power! Can you identify the hero by their unique ability?")],-1))])]),_:1}),j(G(_e),{to:"/shadow",class:"group no-underline"},{default:Y(()=>[f("div",bw,[f("div",Ew,[j(G(Hu),{class:"h-8 w-8 text-black"})]),w[49]||(w[49]=f("div",{class:"flex-1"},[f("h2",{class:"text-xl font-bold text-white leading-tight"},"Into The Shadows"),f("p",{class:"text-sm text-slate-400 mt-0.5"},"The hunt is on! Unmask the hero lurking in the darkness of the shadow realm.")],-1)),f("span",{class:ue(["absolute -top-1 -right-1 text-[8px] font-black px-2 py-0.5 rounded-full shadow-lg border animate-pulse z-20 transition-all duration-300",g.value?"bg-slate-900 text-yellow-400 border-yellow-400/50":"bg-gradient-to-r from-yellow-400 to-yellow-600 text-slate-900 border-yellow-300/50"])}," NEW ",2)])]),_:1}),j(G(_e),{to:"/blog",class:"group no-underline"},{default:Y(()=>[...w[50]||(w[50]=[f("div",{class:"h-full flex items-center p-4 bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-2xl transition-all duration-300 group-hover:border-red-400/50 group-hover:bg-slate-800/60 shadow-xl"},[f("div",{class:"flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center mr-4 shadow-lg border-2 border-red-400/20"},[f("svg",{class:"h-8 w-8 text-black",version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor"},[f("rect",{x:"293.186",y:"307.184",width:"131.572",height:"112.986"}),f("rect",{x:"87.243",y:"308.893",width:"154.448",height:"17.162"}),f("rect",{x:"87.243",y:"401.298",width:"154.448",height:"17.162"}),f("rect",{x:"87.243",y:"355.1",width:"154.448",height:"17.162"}),f("path",{d:"M416.428,0.004H95.58C42.787,0.013,0.016,42.792,0,95.577v303.685 c0.025,62.262,50.463,112.717,112.742,112.734h286.524c62.27-0.017,112.717-50.464,112.734-112.734V95.577 C511.992,42.792,469.212,0.013,416.428,0.004z M464.805,399.262c-0.008,18.15-7.308,34.424-19.198,46.34 c-11.916,11.891-28.19,19.19-46.34,19.198H112.742c-18.15-0.009-34.433-7.308-46.348-19.198 c-11.892-11.916-19.182-28.19-19.198-46.34V118.696h417.61V399.262z"}),f("path",{d:"M88.96,267.908h34.583c19.71,0,31.642-8.581,31.642-26.548c0-10.852-6.167-18.368-12.2-20.648v-0.268 c6.034-3.352,10.592-9.519,10.592-19.432c0-14.489-9.251-24.268-29.086-24.268H88.96c-0.796,0-1.332,0.536-1.332,1.34v88.475 C87.628,267.371,88.164,267.908,88.96,267.908z M107.338,193.495c0-0.528,0.251-0.804,0.804-0.804h13.944 c7.5,0,11.925,3.888,11.925,10.584c0,6.712-4.425,10.734-11.925,10.734h-13.944c-0.553,0-0.804-0.268-0.804-0.804V193.495z M107.338,229.955c0-0.528,0.251-0.795,0.804-0.795h15c8.061,0,12.343,4.424,12.343,11.405c0,7.097-4.282,11.396-12.343,11.396h-15 c-0.553,0-0.804-0.276-0.804-0.812V229.955z"}),f("path",{d:"M181.516,267.908h59.404c0.796,0,1.332-0.536,1.332-1.349v-14.874c0-0.813-0.536-1.341-1.332-1.341h-40.224 c-0.544,0-0.804-0.268-0.804-0.812v-71.447c0-0.804-0.528-1.34-1.341-1.34h-17.036c-0.805,0-1.332,0.536-1.332,1.34v88.475 C180.183,267.371,180.711,267.908,181.516,267.908z"}),f("path",{d:"M292.708,269.374c15.963,0,28.558-7.366,33.251-22.115c2.011-6.301,2.539-11.396,2.539-24.938 c0-13.542-0.528-18.637-2.539-24.939c-4.693-14.739-17.288-22.114-33.251-22.114c-15.956,0-28.558,7.375-33.243,22.114 c-2.02,6.302-2.556,11.397-2.556,24.939c0,13.542,0.536,18.637,2.556,24.938C264.149,262.009,276.752,269.374,292.708,269.374z M278.361,202.746c2.011-6.301,6.847-10.055,14.346-10.055c7.508,0,12.335,3.754,14.346,10.055 c1.073,3.226,1.474,7.634,1.474,19.576c0,11.924-0.402,16.357-1.474,19.567c-2.011,6.31-6.838,10.072-14.346,10.072 c-7.5,0-12.335-3.763-14.346-10.072c-1.064-3.21-1.475-7.643-1.475-19.567C276.886,210.38,277.297,205.972,278.361,202.746z"}),f("path",{d:"M387.961,269.374c16.081,0,28.685-8.171,33.251-22.794c1.6-4.952,2.263-12.46,2.263-20.505v-7.517 c0-0.788-0.536-1.333-1.332-1.333h-31.366c-0.813,0-1.349,0.545-1.349,1.333v12.888c0,0.796,0.536,1.332,1.349,1.332h12.326 c0.536,0,0.805,0.277,0.805,0.805c0,3.879-0.403,6.703-1.073,8.991c-1.878,6.026-7.777,9.386-14.614,9.386 c-7.91,0-12.88-3.763-14.891-10.072c-1.064-3.21-1.466-7.643-1.466-19.567c0-11.941,0.402-16.223,1.466-19.441 c2.011-6.302,6.847-10.19,14.631-10.19c7.5,0,12.05,3.218,15.678,9.385c0.269,0.67,0.939,0.939,1.886,0.67l14.338-6.033 c0.796-0.402,0.947-1.206,0.536-2.019c-4.299-10.995-15.419-19.425-32.439-19.425c-16.232,0-28.835,7.375-33.527,22.114 c-2.012,6.302-2.556,11.397-2.556,24.939c0,13.542,0.545,18.637,2.556,24.938C359.126,262.009,371.73,269.374,387.961,269.374z"})])]),f("div",{class:"flex-1"},[f("h2",{class:"text-xl font-bold text-white leading-tight"},"Reviews & Guides"),f("p",{class:"text-sm text-slate-400 mt-0.5"},"Read hero reviews, guides and latest news")])],-1)])]),_:1}),j(G(_e),{to:"/hero-database",class:"group no-underline"},{default:Y(()=>[...w[51]||(w[51]=[f("div",{class:"h-full flex items-center p-4 bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-2xl transition-all duration-300 group-hover:border-teal-400/50 group-hover:bg-slate-800/60 shadow-xl"},[f("div",{class:"flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center mr-4 shadow-lg border-2 border-teal-400/20"},[f("svg",{class:"h-8 w-8 text-black",viewBox:"0 0 600 600",fill:"currentColor"},[f("path",{d:"M 300 0 C 221.30245 0 150.09841 8.0113158 97.068359 21.535156 C 70.553346 28.297076 48.605538 36.277916 31.677734 46.484375 C 16.579982 55.587421 3.2445893 67.928721 0.53125 85 L 0 85 L 0 90 C 0 95.160045 3.6392602 102.94345 17.03125 112.83789 C 30.423241 122.73233 52.11942 133.00486 79.691406 141.62109 C 134.83535 158.85361 213.32376 170 300 170 C 386.67624 170 465.16467 158.85361 520.30859 141.62109 C 547.8806 133.00486 569.57675 122.73233 582.96875 112.83789 C 596.36075 102.94345 600 95.160045 600 90 L 599.87305 90 C 599.19452 70.318664 584.84711 56.447884 568.32227 46.484375 C 551.39442 36.277916 529.44664 28.297076 502.93164 21.535156 C 449.90159 8.0113158 378.69755 0 300 0 z M 0 149.67969 L 0 234.10742 C 0.70499641 239.21983 4.6599347 246.30446 16.722656 255.2168 C 30.11466 265.11125 51.810798 275.38376 79.382812 284 C 134.52681 301.23251 213.01506 312.37891 299.69141 312.37891 C 386.36774 312.37891 464.85602 301.23251 520 284 C 547.57201 275.38376 569.26815 265.11125 582.66016 255.2168 C 596.05215 245.32235 599.69141 237.53895 599.69141 232.37891 L 600 232.37891 L 600 149.67969 C 581.93283 161.57337 559.1282 171.3983 532.24023 179.80078 C 471.56758 198.761 390.05399 210 300 210 C 209.94601 210 128.43244 198.761 67.759766 179.80078 C 40.871811 171.3983 18.067172 161.57337 0 149.67969 z M 600 291.79688 C 590.25148 298.2521 579.18165 304.12941 566.75 309.46875 C 556.06951 314.05598 544.44003 318.27081 531.93164 322.17969 C 471.2589 341.13992 389.74549 352.37891 299.69141 352.37891 C 209.63733 352.37891 128.12391 341.13993 67.451172 322.17969 C 40.720883 313.82647 18.016718 304.0712 0 292.27148 L 0 380 C 0 385.16005 3.6392334 392.94343 17.03125 402.83789 C 30.423267 412.73235 52.119364 423.00484 79.691406 431.62109 C 134.83545 448.85363 213.32358 460 300 460 C 386.67642 460 465.16455 448.85363 520.30859 431.62109 C 547.88068 423.00484 569.57666 412.73235 582.96875 402.83789 C 596.36074 392.94343 600 385.16005 600 380 L 600 291.79688 z M 0 292.27148 L 0 380 C 0 385.16005 3.6392334 392.94343 17.03125 402.83789 C 30.423267 412.73235 52.119364 423.00484 79.691406 431.62109 C 134.83545 448.85363 213.32358 460 300 460 C 386.67642 460 465.16455 448.85363 520.30859 431.62109 C 547.88068 423.00484 569.57666 412.73235 582.96875 402.83789 C 596.36074 392.94343 600 385.16005 600 380 L 600 464.10742 C 599.295 469.21983 595.34007 476.30446 583.27734 485.2168 C 569.88534 495.11125 548.1892 505.38376 520.61719 514 C 465.47319 531.23251 386.98494 542.37891 300.30859 542.37891 C 213.63226 542.37891 135.14398 531.23251 80 514 C 52.427994 505.38376 30.73185 495.11125 17.339844 485.2168 C 3.9478438 475.32235 0.30859375 467.53895 0.30859375 462.37891 L 0 462.37891 L 0 380 C 18.067282 391.82663 40\\.871811 401\\.6016 67\\.759766 410\\.05859 C 128\\.43242 429\\.01883 209\\.94601 440 300 440 C 390.05399 440 471.56756 429.01883 532.24023 410.05859 C 559.12819 401.6016 581.93283 391.82663 600 380 L 600 292.27148 z"})])]),f("div",{class:"flex-1"},[f("h2",{class:"text-xl font-bold text-white leading-tight"},"Hero Database"),f("p",{class:"text-sm text-slate-400 mt-0.5"},"Browse stats and skills for all heroes")])],-1)])]),_:1}),j(G(_e),{to:"/farming-guide",class:"group no-underline"},{default:Y(()=>[...w[52]||(w[52]=[f("div",{class:"h-full flex items-center p-4 bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-2xl transition-all duration-300 group-hover:border-indigo-400/50 group-hover:bg-slate-800/60 shadow-xl"},[f("div",{class:"flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center mr-4 shadow-lg border-2 border-indigo-400/20"},[f("svg",{class:"h-8 w-8 text-black",viewBox:"0 0 16 16",fill:"currentColor"},[f("path",{d:"M16 0H13L3.70711 9.29289L2.20711 7.79289L0.792893 9.20711L3.08579 11.5L1.5835 13.0023C1.55586 13.0008 1.52802 13 1.5 13C0.671573 13 0 13.6716 0 14.5C0 15.3284 0.671573 16 1.5 16C2.32843 16 3 15.3284 3 14.5C3 14.472 2.99923 14.4441 2.99771 14.4165L4.5 12.9142L6.79289 15.2071L8.20711 13.7929L6.70711 12.2929L16 3V0Z"})])]),f("div",{class:"flex-1"},[f("h2",{class:"text-xl font-bold text-white leading-tight"},"Farming Guide"),f("p",{class:"text-sm text-slate-400 mt-0.5"},"Optimize your resource farming routes")])],-1)])]),_:1}),j(G(_e),{to:"/calendar",class:"group no-underline"},{default:Y(()=>[...w[53]||(w[53]=[f("div",{class:"h-full flex items-center p-4 bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-2xl transition-all duration-300 group-hover:border-orange-400/50 group-hover:bg-slate-800/60 shadow-xl"},[f("div",{class:"flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center mr-4 shadow-lg border-2 border-orange-400/20"},[f("svg",{class:"h-8 w-8 text-black",viewBox:"0 0 24 24",fill:"currentColor"},[f("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7 1C6.44772 1 6 1.44772 6 2V3H5C3.34315 3 2 4.34315 2 6V20C2 21.6569 3.34315 23 5 23H13.101C12.5151 22.4259 12.0297 21.7496 11.6736 21H5C4.44772 21 4 20.5523 4 20V11H20V11.2899C20.7224 11.5049 21.396 11.8334 22 12.2547V6C22 4.34315 20.6569 3 19 3H18V2C18 1.44772 17.5523 1 17 1C16.4477 1 16 1.44772 16 2V3H8V2C8 1.44772 7.55228 1 7 1ZM16 6V5H8V6C8 6.55228 7.55228 7 7 7C6.44772 7 6 6.55228 6 6V5H5C4.44772 5 4 5.44772 4 6V9H20V6C20 5.44772 19.5523 5 19 5H18V6C18 6.55228 17.5523 7 17 7C16.4477 7 16 6.55228 16 6Z"}),f("path",{d:"M17 16C17 15.4477 17.4477 15 18 15C18.5523 15 19 15.4477 19 16V17.703L19.8801 18.583C20.2706 18.9736 20.2706 19.6067 19.8801 19.9973C19.4896 20.3878 18.8564 20.3878 18.4659 19.9973L17.2929 18.8243C17.0828 18.6142 16.9857 18.3338 17.0017 18.0588C17.0006 18.0393 17 18.0197 17 18V16Z"}),f("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 18C24 21.3137 21.3137 24 18 24C14.6863 24 12 21.3137 12 18C12 14.6863 14.6863 12 18 12C21.3137 12 24 14.6863 24 18ZM13.9819 18C13.9819 20.2191 15.7809 22.0181 18 22.0181C20.2191 22.0181 22.0181 20.2191 22.0181 18C22.0181 15.7809 20.2191 13.9819 18 13.9819C15.7809 13.9819 13.9819 15.7809 13.9819 18Z"})])]),f("div",{class:"flex-1"},[f("h2",{class:"text-xl font-bold text-white leading-tight"},"Event Calendar"),f("p",{class:"text-sm text-slate-400 mt-0.5"},"Track monthly events and hero schedules")])],-1)])]),_:1}),j(G(_e),{to:"/hero-coach",class:"group no-underline"},{default:Y(()=>[...w[54]||(w[54]=[f("div",{class:"h-full flex items-center p-4 bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-2xl transition-all duration-300 group-hover:border-yellow-400/50 group-hover:bg-slate-800/60 shadow-xl"},[f("div",{class:"flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center mr-4 shadow-lg border-2 border-yellow-400/20"},[f("svg",{class:"h-8 w-8 text-black",version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor"},[f("path",{d:"M141.698,141.549H79.077c-8.488,0-15.37,6.882-15.37,15.362v198.179c0,8.479,6.882,15.362,15.37,15.362h62.622 c8.489,0,15.371-6.883,15.371-15.362V156.911C157.07,148.431,150.187,141.549,141.698,141.549z"}),f("path",{d:"M32.374,189.734H12.803C5.736,189.734,0,195.47,0,202.537v106.925c0,7.068,5.736,12.803,12.803,12.803h19.571 c7.067,0,12.803-5.736,12.803-12.803V202.537C45.177,195.47,39.441,189.734,32.374,189.734z"}),f("rect",{x:"177.69",y:"228.894",width:"156.62",height:"54.212"}),f("path",{d:"M432.922,141.549h-62.621c-8.488,0-15.371,6.882-15.371,15.362v198.179c0,8.479,6.882,15.362,15.371,15.362 h62.621c8.488,0,15.371-6.883,15.371-15.362V156.911C448.293,148.431,441.411,141.549,432.922,141.549z"}),f("path",{d:"M499.197,189.734h-19.57c-7.068,0-12.803,5.736-12.803,12.803v106.925c0,7.068,5.736,12.803,12.803,12.803 h19.57c7.068,0,12.803-5.736,12.803-12.803V202.537C512,195.47,506.264,189.734,499.197,189.734z"})])]),f("div",{class:"flex-1"},[f("h2",{class:"text-xl font-bold text-white leading-tight"},"Hero Coach"),f("p",{class:"text-sm text-slate-400 mt-0.5"},"See eligible heroes for instant max")])],-1)])]),_:1}),j(G(_e),{to:"/visiting-outfitter",class:"group no-underline"},{default:Y(()=>[...w[55]||(w[55]=[f("div",{class:"h-full flex items-center p-4 bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-2xl transition-all duration-300 group-hover:border-pink-400/50 group-hover:bg-slate-800/60 shadow-xl"},[f("div",{class:"flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center mr-4 shadow-lg border-2 border-pink-400/20"},[f("svg",{class:"h-8 w-8 text-black",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[f("path",{d:"M21 18L14.9339 13.8837M11.7895 11.75L7 8.5M21 5.5L7 15M8 6.5C8 7.88071 6.88071 9 5.5 9C4.11929 9 3 7.88071 3 6.5C3 5.11929 4.11929 4 5.5 4C6.88071 4 8 5.11929 8 6.5ZM8 17C8 15.6193 6.88071 14.5 5.5 14.5C4.11929 14.5 3 15.6193 3 17C3 18.3807 4.11929 19.5 5.5 19.5C6.88071 19.5 8 18.3807 8 17Z"})])]),f("div",{class:"flex-1"},[f("h2",{class:"text-xl font-bold text-white leading-tight"},"Visiting Outfitter"),f("p",{class:"text-sm text-slate-400 mt-0.5"},"See costumes available in Outfitter")])],-1)])]),_:1}),j(G(_e),{to:"/soul-exchange",class:"group no-underline"},{default:Y(()=>[...w[56]||(w[56]=[f("div",{class:"h-full flex items-center p-4 bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-2xl transition-all duration-300 group-hover:border-purple-400/50 group-hover:bg-slate-800/60 shadow-xl"},[f("div",{class:"flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center mr-4 shadow-lg border-2 border-purple-400/20"},[f("svg",{class:"h-8 w-8 text-black",version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor"},[f("path",{d:"M405.878,357.099c-3.641-41.297-29.703-99.953-92.734-102.781c-92.922,0.25-106.391,72.141-97.656,103.984 c7.328,26.75,26.781,48.078,54.422,45.656s48.469-26.844,45.656-54.438c-0.484-29.266,24.344-28.5,25.094,3.875 c1.016,43.094-28.094,80.922-71.031,84.703c-42.938,3.75-77.531-28.547-84.719-71.031c-4.344-25.781,0.594-75.172,44.438-113.766 c56.344-49.594,117.719,9.875,112.734-70.578c-5.031-81.188-25.438-82.906-78.063-114.531 c-34.797-20.922-40.75-54.109-38.797-67.109c0.078-0.625,0.078-1.563-1.156-0.781c-32.594,20.469-32.859,58-13.813,87.25 c9.141,14.016,28.031,21.234,29.969,43.422c2.641,30.094-14.672,39.281-28.938,51.703c-14.25,12.422-31.219,25.75-56.813,52.078 c-40.875,42.063-51.625,95.219-48.359,140.266c3.609,41.281,23.625,77.203,53.031,101.875 c29.453,24.688,68.313,38.141,109.594,34.516c41.297-3.625,77.203-23.641,101.906-53.063 C395.315,428.911,409.487,398.38,405.878,357.099z"})])]),f("div",{class:"flex-1"},[f("h2",{class:"text-xl font-bold text-white leading-tight"},"Soul Exchange"),f("p",{class:"text-sm text-slate-400 mt-0.5"},"Browse Soul Exchange heroes")])],-1)])]),_:1}),j(G(_e),{to:"/fated-summon",class:"group no-underline"},{default:Y(()=>[...w[57]||(w[57]=[f("div",{class:"h-full flex items-center p-4 bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-2xl transition-all duration-300 group-hover:border-cyan-400/50 group-hover:bg-slate-800/60 shadow-xl"},[f("div",{class:"flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center mr-4 shadow-lg border-2 border-cyan-400/20"},[f("svg",{class:"h-8 w-8 text-black",viewBox:"0 0 16 16",fill:"currentColor"},[f("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M12.4722 10C13.4223 8.93849 14 7.53671 14 6C14 2.68629 11.3137 0 8 0C4.68629 0 2 2.68629 2 6C2 7.53671 2.57771 8.93849 3.52779 10H12.4722ZM8 5L10 3L12 5L10 7L8 5Z"}),f("path",{d:"M15 15V14L13 12H3L1 14V15H15Z"})])]),f("div",{class:"flex-1"},[f("h2",{class:"text-xl font-bold text-white leading-tight"},"Fated Summon"),f("p",{class:"text-sm text-slate-400 mt-0.5"},"Pick a guaranteed legendary hero")])],-1)])]),_:1}),j(G(_e),{to:"/tier-list",class:"group no-underline"},{default:Y(()=>[...w[58]||(w[58]=[f("div",{class:"h-full flex items-center p-4 bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-2xl transition-all duration-300 group-hover:border-lime-400/50 group-hover:bg-slate-800/60 shadow-xl"},[f("div",{class:"flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-lime-400 to-lime-600 flex items-center justify-center mr-4 shadow-lg border-2 border-lime-400/20"},[f("svg",{class:"h-8 w-8 text-black",viewBox:"0 0 24 24",version:"1.1",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},[f("path",{d:"M7.23767,17.0125 C7.62819,16.622 8.26136,16.622 8.65188,17.0125 C9.01236,17.3729615 9.04008923,17.9402207 8.73506769,18.3324973 L8.65188,18.4267 L6.35378,20.7248 C5.89817333,21.1804533 5.17834996,21.2108302 4.68751439,20.8159307 L4.58602,20.7248 L3.34856,19.4874 C2.95803,19.0968 2.95803,18.4637 3.34856,18.0731 C3.70904,17.7126385 4.27627503,17.6849107 4.6685635,17.9899166 L4.76277,18.0731 L5.4699,18.7803 L7.23767,17.0125 Z M20.0002,17.9999 C20.5525,17.9999 21.0002,18.4477 21.0002,18.9999 C21.0002,19.5522 20.5525,19.9999 20.0002,19.9999 L11.0002,19.9999 C10.4479,19.9999 10.0002,19.5522 10.0002,18.9999 C10.0002,18.4477 10.4479,17.9999 11.0002,17.9999 L20.0002,17.9999 Z M8.65188,10.0125 C9.0424,10.403 9.0424,11.0362 8.65188,11.4267 L6.35378,13.7248 C5.86563,14.213 5.07417,14.213 4.58602,13.7248 L3.34856,12.4873 C2.95803,12.0968 2.95803,11.4637 3.34856,11.0731 C3.73908,10.6826 4.37225,10.6826 4.76277,11.0731 L5.4699,11.7803 L7.23767,10.0125 C7.62819,9.62197 8.26136,9.62197 8.65188,10.0125 Z M20.0002,10.9999 C20.5525,10.9999 21.0002,11.4477 21.0002,11.9999 C21.0002,12.51275 20.614173,12.9354092 20.1168239,12.9931725 L20.0002,12.9999 L11.0002,12.9999 C10.4479,12.9999 10.0002,12.5522 10.0002,11.9999 C10.0002,11.4871429 10.386227,11.0644041 10.8835761,11.0066289 L11.0002,10.9999 L20.0002,10.9999 Z M7.23767,3.0125 C7.62819,2.62197 8.26136,2.62197 8.65188,3.0125 C9.01236,3.37298 9.04008923,3.94021503 8.73506769,4.3325035 L8.65188,4.42671 L6.35378,6.72481 C5.89817333,7.18041667 5.17834996,7.21079044 4.68751439,6.81593133 L4.58602,6.72481 L3.34856,5.48735 C2.95803,5.09683 2.95803,4.46366 3.34856,4.07314 C3.70904,3.71265077 4.27627503,3.68492083 4.6685635,3.98995018 L4.76277,4.07314 L5.4699,4.78026 L7.23767,3.0125 Z M20.0002,3.99995 C20.5525,3.99995 21.0002,4.44766 21.0002,4.99995 C21.0002,5.51278143 20.614173,5.93545653 20.1168239,5.9932222 L20.0002,5.99995 L11.0002,5.99995 C10.4479,5.99995 10.0002,5.55223 10.0002,4.99995 C10.0002,4.48710929 10.386227,4.06429043 10.8835761,4.00651523 L11.0002,3.99995 L20.0002,3.99995 Z"})])]),f("div",{class:"flex-1"},[f("h2",{class:"text-xl font-bold text-white leading-tight"},"Tier List"),f("p",{class:"text-sm text-slate-400 mt-0.5"},"Create and view hero tier lists")])],-1)])]),_:1}),j(G(_e),{to:"/talent-simulator",class:"group no-underline"},{default:Y(()=>[...w[59]||(w[59]=[f("div",{class:"h-full flex items-center p-4 bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-2xl transition-all duration-300 group-hover:border-orange-400/50 group-hover:bg-slate-800/60 shadow-xl"},[f("div",{class:"flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center mr-4 shadow-lg border-2 border-orange-400/20"},[f("svg",{class:"h-8 w-8 text-black",fill:"currentColor",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"1.5"},[f("circle",{cx:"12",cy:"7",r:"2",fill:"currentColor",stroke:"currentColor"}),f("circle",{cx:"8",cy:"17",r:"2",fill:"currentColor",stroke:"currentColor"}),f("circle",{cx:"16",cy:"17",r:"2",fill:"currentColor",stroke:"currentColor"}),f("line",{x1:"12",y1:"9",x2:"8",y2:"15",stroke:"currentColor","stroke-width":"1.5"}),f("line",{x1:"12",y1:"9",x2:"16",y2:"15",stroke:"currentColor","stroke-width":"1.5"})])]),f("div",{class:"flex-1"},[f("h2",{class:"text-xl font-bold text-white leading-tight"},"Talent Simulator"),f("p",{class:"text-sm text-slate-400 mt-0.5"},"Plan your hero's talent grid")])],-1)])]),_:1}),j(G(_e),{to:"/codes",class:"group no-underline"},{default:Y(()=>[...w[60]||(w[60]=[f("div",{class:"h-full flex items-center p-4 bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-2xl transition-all duration-300 group-hover:border-green-400/50 group-hover:bg-slate-800/60 shadow-xl"},[f("div",{class:"flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mr-4 shadow-lg border-2 border-green-400/20"},[f("svg",{class:"h-8 w-8 text-black",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},[f("path",{d:"M43,12H38.3a4.2,4.2,0,0,0,.4-1,7,7,0,0,0-.6-5.3,6.7,6.7,0,0,0-4.3-3.4A7.1,7.1,0,0,0,25,7l-1,3.4L23,7a7.1,7.1,0,0,0-8.8-4.7A6.7,6.7,0,0,0,9.9,5.7,7,7,0,0,0,9.3,11a4.2,4.2,0,0,0,.4,1H5a2.9,2.9,0,0,0-3,3v7H17V16h4v6h6V16h4v6H46V15A2.9,2.9,0,0,0,43,12ZM17,12h-.9a3.1,3.1,0,0,1-3-2.2,2.9,2.9,0,0,1,.3-2.2,3,3,0,0,1,1.8-1.5,3.3,3.3,0,0,1,4,2.1L20.3,12ZM34.9,9.8a3.1,3.1,0,0,1-3,2.2H27.7l1.1-3.8a3.3,3.3,0,0,1,4-2.1,3,3,0,0,1,1.8,1.5A2.9,2.9,0,0,1,34.9,9.8Z"}),f("rect",{x:"21",y:"26",width:"6",height:"20"}),f("path",{d:"M4,43a3,3,0,0,0,3,3H17V26H4Z"}),f("path",{d:"M31,46H41a3,3,0,0,0,3-3V26H31Z"})])]),f("div",{class:"flex-1"},[f("h2",{class:"text-xl font-bold text-white leading-tight"},"Redeem Codes"),f("p",{class:"text-sm text-slate-400 mt-0.5"},"Find and redeem the latest E&P codes")])],-1)])]),_:1})])])])):Ue("",!0)])),f("div",null,[j(z,{modelValue:G(S),"onUpdate:modelValue":w[15]||(w[15]=O=>dp(S)?S.value=O:null),"bg-opacity":xe.value,"z-index":200},{default:Y(()=>[f("div",Tw,[w[79]||(w[79]=f("h2",{class:"text-center text-3xl font-bold text-white mb-2"},"Account",-1)),G(D)?($(),Q("div",Iw,[f("div",Cw,[G(D).photoURL?($(),Q("img",{key:0,src:G(D).photoURL,class:"w-16 h-16 rounded-full border-2 border-blue-500"},null,8,Aw)):($(),Q("div",Rw,[j(G(Lo),{class:"w-8 h-8 text-gray-400"})])),f("p",Sw,qe(G(D).displayName||G(D).email),1),G(D).displayName?($(),Q("p",xw,qe(G(D).email),1)):Ue("",!0)]),f("div",kw,[w[63]||(w[63]=f("h3",{class:"font-bold mb-3 text-sm uppercase tracking-wider text-gray-400"},"Profile Settings",-1)),f("div",Pw,[w[61]||(w[61]=f("label",{for:"display-name",class:"text-xs text-gray-400"},"Public Display Name",-1)),f("div",Vw,[Wn(f("input",{id:"display-name","onUpdate:modelValue":w[4]||(w[4]=O=>De.value=O),type:"text",placeholder:"Enter display name",class:"flex-1 bg-gray-900 border border-gray-600 rounded px-3 py-2 text-white focus:outline-none focus:border-blue-500 transition"},null,512),[[Kn,De.value]]),f("button",{onClick:Ht,disabled:Rt.value||!De.value,class:"bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white px-4 py-2 rounded font-bold text-sm transition"},qe(Rt.value?"...":"Save"),9,Mw)]),w[62]||(w[62]=f("p",{class:"text-[10px] text-gray-500 mt-1 italic"},"This name will be shown on the leaderboard and on your tier lists. ",-1))])]),f("div",Dw,[w[64]||(w[64]=f("h3",{class:"text-white font-bold mb-2 border-b border-gray-700 pb-1"},"My Saved Tierlists",-1)),v.value?($(),Q("div",Nw,"Loading lists...")):A.value.length===0?($(),Q("div",Lw,"No saved tierlists yet. ")):($(),Q("ul",Ow,[($(!0),Q(ts,null,li(A.value,O=>($(),Q("li",{key:O.id,class:"flex items-center justify-between group"},[j(G(_e),{to:`/tier-list/${O.id}`,onClick:w[5]||(w[5]=K=>S.value=!1),class:"text-blue-400 hover:text-blue-300 truncate flex-1 mr-2"},{default:Y(()=>[me(qe(O.name||"Untitled List"),1)]),_:2},1032,["to"]),f("span",Fw,qe(new Date(O.updatedAt?.toDate()).toLocaleDateString()),1)]))),128))]))]),f("button",{onClick:se,class:"flex items-center gap-2 px-6 py-2 rounded-lg bg-red-500/80 hover:bg-red-600 text-white font-semibold transition cursor-pointer mt-4"},[j(G(ky),{class:"w-5 h-5"}),w[65]||(w[65]=me(" Sign Out ",-1))])])):($(),Q("div",Uw,[E.value?($(),Q("div",Bw,qe(E.value),1)):Ue("",!0),f("div",jw,[f("button",{class:"flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-gray-900 font-semibold shadow hover:bg-gray-100 transition cursor-pointer disabled:opacity-50",onClick:te,"aria-label":"Sign in with Google",type:"button",disabled:b.value},[...w[66]||(w[66]=[f("svg",{class:"w-6 h-6",viewBox:"0 0 48 48"},[f("g",null,[f("path",{fill:"#4285F4",d:"M44.5 20H24v8.5h11.7C34.9 33.1 30.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.1 8.1 2.9l6.1-6.1C34.5 6.2 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 19.7-8 19.7-20 0-1.3-.1-2.7-.3-4z"}),f("path",{fill:"#34A853",d:"M6.3 14.7l7 5.1C15.3 16.2 19.3 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6.1-6.1C34.5 6.2 29.6 4 24 4c-7.2 0-13.4 4.1-16.7 10.7z"}),f("path",{fill:"#FBBC05",d:"M24 44c5.2 0 9.9-1.7 13.2-4.7l-6.1-5.1C29.9 36.9 27.1 38 24 38c-6.2 0-11.4-4.2-13.3-9.9l-7 5.4C6.6 39.9 14.7 44 24 44z"}),f("path",{fill:"#EA4335",d:"M44.5 20H24v8.5h11.7c-1.1 3.1-4.1 5.5-7.7 5.5-4.6 0-8.3-3.7-8.3-8.3s3.7-8.3 8.3-8.3c2.6 0 4.9 1.1 6.5 2.8l6.2-6.2C37.9 10.1 31.4 7 24 7c-9.4 0-17 7.6-17 17s7.6 17 17 17c8.8 0 16.1-6.2 16.1-15.1 0-1-.1-2-.3-3z"})])],-1),me(" Continue with Google ",-1)])],8,$w)]),w[78]||(w[78]=f("div",{class:"flex items-center mb-4"},[f("div",{class:"flex-grow border-t border-gray-600"}),f("span",{class:"mx-3 text-gray-400"},"or"),f("div",{class:"flex-grow border-t border-gray-600"})],-1)),!ge.value&&!T.value?($(),Q("form",{key:1,onSubmit:Qs(x,["prevent"]),class:"space-y-4"},[f("div",null,[w[67]||(w[67]=f("label",{class:"block text-gray-200 mb-1",for:"email"},"Email",-1)),Wn(f("input",{id:"email","onUpdate:modelValue":w[6]||(w[6]=O=>m.value=O),type:"email",class:"w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400",autocomplete:"email",required:""},null,512),[[Kn,m.value]])]),f("div",null,[w[68]||(w[68]=f("label",{class:"block text-gray-200 mb-1",for:"password"},"Password",-1)),Wn(f("input",{id:"password","onUpdate:modelValue":w[7]||(w[7]=O=>_.value=O),type:"password",class:"w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400",autocomplete:"current-password",required:""},null,512),[[Kn,_.value]])]),f("button",{type:"submit",class:"w-full py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow transition cursor-pointer disabled:opacity-50",disabled:b.value},qe(b.value?"Signing In...":"Sign In"),9,qw)],32)):Ue("",!0),!ge.value&&!T.value?($(),Q("div",zw,[f("button",{class:"flex items-center justify-center gap-1 px-3 py-2 rounded transition hover:bg-gray-800/60 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer",type:"button",onClick:w[8]||(w[8]=O=>{T.value=!0,E.value=""})},[...w[69]||(w[69]=[f("svg",{class:"w-4 h-4 mr-1 text-blue-400",fill:"none",stroke:"currentColor","stroke-width":"2",viewBox:"0 0 24 24"},[f("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})],-1),me(" Forgot password? ",-1)])]),f("button",{class:"flex items-center justify-center gap-1 px-3 py-2 rounded transition hover:bg-gray-800/60 focus:outline-none focus:ring-2 focus:ring-green-400 cursor-pointer",type:"button",onClick:w[9]||(w[9]=O=>{ge.value=!0,E.value=""})},[...w[70]||(w[70]=[f("svg",{class:"w-4 h-4 mr-1 text-green-400",fill:"none",stroke:"currentColor","stroke-width":"2",viewBox:"0 0 24 24"},[f("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 4v16m8-8H4"})],-1),f("span",null,[me("Don't have an account? "),f("span",{class:"underline"},"Sign Up")],-1)])])])):Ue("",!0),ge.value?($(),Q("form",{key:3,onSubmit:Qs(C,["prevent"]),class:"space-y-4 mt-2"},[f("div",null,[w[71]||(w[71]=f("label",{class:"block text-gray-200 mb-1",for:"signup-email"},"Email",-1)),Wn(f("input",{id:"signup-email","onUpdate:modelValue":w[10]||(w[10]=O=>m.value=O),type:"email",class:"w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400",autocomplete:"email",required:""},null,512),[[Kn,m.value]])]),f("div",null,[w[72]||(w[72]=f("label",{class:"block text-gray-200 mb-1",for:"signup-password"},"Password",-1)),Wn(f("input",{id:"signup-password","onUpdate:modelValue":w[11]||(w[11]=O=>_.value=O),type:"password",class:"w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400",autocomplete:"new-password",required:""},null,512),[[Kn,_.value]])]),f("div",Hw,[f("button",{type:"submit",class:"flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white font-semibold shadow transition focus:outline-none focus:ring-2 focus:ring-green-300 cursor-pointer disabled:opacity-50",disabled:b.value},[b.value?Ue("",!0):($(),Q("svg",Ww,[...w[73]||(w[73]=[f("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 4v16m8-8H4"},null,-1)])])),me(" "+qe(b.value?"Creating Account...":"Create Account"),1)],8,Gw),f("button",{class:"flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-200 font-semibold transition focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer",type:"button",onClick:w[12]||(w[12]=O=>{ge.value=!1,E.value=""})},[...w[74]||(w[74]=[f("svg",{class:"w-4 h-4 text-blue-400",fill:"none",stroke:"currentColor","stroke-width":"2",viewBox:"0 0 24 24"},[f("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 19l-7-7 7-7"})],-1),me(" Back to Sign In ",-1)])])])],32)):Ue("",!0),T.value?($(),Q("form",{key:4,onSubmit:Qs(J,["prevent"]),class:"space-y-4 mt-2"},[f("div",null,[w[75]||(w[75]=f("label",{class:"block text-gray-200 mb-1",for:"forgot-email"},"Email",-1)),Wn(f("input",{id:"forgot-email","onUpdate:modelValue":w[13]||(w[13]=O=>m.value=O),type:"email",class:"w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400",autocomplete:"email",required:""},null,512),[[Kn,m.value]])]),f("div",Kw,[f("button",{type:"submit",class:"flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white font-semibold shadow transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-300 disabled:opacity-50",disabled:b.value},[b.value?Ue("",!0):($(),Q("svg",Yw,[...w[76]||(w[76]=[f("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16 12v1a4 4 0 01-8 0v-1m8 0V8a4 4 0 00-8 0v4m8 0H8"},null,-1)])])),me(" "+qe(b.value?"Sending...":"Send Reset Link"),1)],8,Qw),f("button",{class:"flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-200 font-semibold transition focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer",type:"button",onClick:w[14]||(w[14]=O=>{T.value=!1,E.value=""})},[...w[77]||(w[77]=[f("svg",{class:"w-4 h-4 text-blue-400",fill:"none",stroke:"currentColor","stroke-width":"2",viewBox:"0 0 24 24"},[f("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 19l-7-7 7-7"})],-1),me(" Back to Sign In ",-1)])])])],32)):Ue("",!0)]))])]),_:1},8,["modelValue","bg-opacity"])]),j(z,{modelValue:t.value,"onUpdate:modelValue":w[16]||(w[16]=O=>t.value=O),"bg-opacity":70,"no-padding":"","no-border":""},{default:Y(()=>[j(X,{code:G(r)},null,8,["code"])]),_:1},8,["modelValue"]),($(),Zn(Uo,{to:"body"},[j(eh,{"enter-active-class":"transition duration-300 ease-out","enter-from-class":"transform translate-y-10 opacity-0","enter-to-class":"transform translate-y-0 opacity-100","leave-active-class":"transition duration-200 ease-in","leave-from-class":"transform translate-y-0 opacity-100","leave-to-class":"transform translate-y-10 opacity-0"},{default:Y(()=>[F.showScrollToTop&&I.value?($(),Q("button",{key:0,onClick:N,class:"fixed bottom-6 right-6 z-[90] p-3 rounded-full bg-slate-900/80 border border-cyan-400/30 text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:bg-cyan-400 hover:text-slate-900 hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-all duration-300 cursor-pointer backdrop-blur-sm group","aria-label":"Scroll to top"},[j(G(Vy),{class:"w-6 h-6 transform group-hover:-translate-y-0.5 transition-transform duration-300"})])):Ue("",!0)]),_:1})]))])}}}),p4=Object.assign(pr(Xw,[["__scopeId","data-v-15aeb13e"]]),{__name:"AppHeader"}),Zw={class:"w-full text-gray-400 text-center py-6 px-3 mt-12 mb-0 md:mb-0 border-t border-gray-900 bottom-0"},e4={class:"container mx-auto flex flex-col items-center space-y-2"},t4={class:"mb-2 flex flex-wrap justify-center gap-4 text-sm"},n4={class:"flex md:hidden flex-col items-center justify-center relative"},r4=["src"],s4="https://raw.githubusercontent.com/vabe44/31f5d518-epzl-cdn/main",i4=fr({__name:"AppFooter",setup(n){const e=s4;return(t,r)=>{const s=th,o=fp("RouterLink");return $(),Q("footer",Zw,[f("div",e4,[f("nav",t4,[j(s,{to:"/about",class:"hover:underline"},{default:Y(()=>[...r[0]||(r[0]=[me("About Us",-1)])]),_:1}),j(s,{to:"/contact",class:"hover:underline"},{default:Y(()=>[...r[1]||(r[1]=[me("Contact Us",-1)])]),_:1}),j(s,{to:"/privacy-policy",class:"hover:underline"},{default:Y(()=>[...r[2]||(r[2]=[me("Privacy Policy",-1)])]),_:1}),j(s,{to:"/terms",class:"hover:underline"},{default:Y(()=>[...r[3]||(r[3]=[me("Terms & Conditions",-1)])]),_:1}),j(s,{to:"/disclaimer",class:"hover:underline"},{default:Y(()=>[...r[4]||(r[4]=[me("Disclaimer",-1)])]),_:1}),j(s,{to:"/support-us",class:"hover:underline"},{default:Y(()=>[...r[5]||(r[5]=[me("Support Us",-1)])]),_:1})]),fa(t.$slots,"default",{},void 0,!0)]),f("div",n4,[j(o,{to:"/",class:"block"},{default:Y(()=>[f("img",{alt:"Empuzzled logo",class:"logo w-[128px] md:w-[180px]",src:`${G(e)}/logo-crop.webp`,loading:"lazy"},null,8,r4)]),_:1})])])}}}),g4=Object.assign(pr(i4,[["__scopeId","data-v-adfa0299"]]),{__name:"AppFooter"});export{u2 as A,Vy as B,wt as C,ri as D,h4 as E,d4 as F,My as G,f4 as H,Ce as T,p4 as _,g4 as a,zu as b,Hu as c,_l as d,av as e,Gs as f,nt as g,gp as h,Dy as i,xn as j,xt as k,uv as l,cv as m,c4 as n,u4 as o,Wa as p,dv as q,qu as r,ni as s,l4 as t,yl as u,Ei as v,qd as w,la as x,Ti as y,il as z};
