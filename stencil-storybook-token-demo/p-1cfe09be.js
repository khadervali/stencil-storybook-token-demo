const e="stencil-storybook-token-demo";let t,n,l=!1;const o="undefined"!=typeof window?window:{},s=o.CSS,r=o.document||{head:{}},c={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},i=(r.head.attachShadow+"").indexOf("[native")>-1,a=e=>Promise.resolve(e),u=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),f=new WeakMap,d=e=>"sc-"+e.o,p={},$=e=>"object"==(e=typeof e)||"function"===e,y="undefined"!=typeof Deno,b=!(y||"undefined"==typeof global||"function"!=typeof require||!global.process||"string"!=typeof __filename||global.origin&&"string"==typeof global.origin),m=(y&&Deno,b?process:y&&Deno,b?process:y&&Deno,(e,t,...n)=>{let l=null,o=!1,s=!1,r=[];const c=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?c(l):null!=l&&"boolean"!=typeof l&&((o="function"!=typeof e&&!$(l))&&(l+=""),o&&s?r[r.length-1].s+=l:r.push(o?h(null,l):l),s=o)};if(c(n),t){const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}const i=h(e,null);return i.i=t,r.length>0&&(i.u=r),i}),h=(e,t)=>({t:0,p:e,s:t,$:null,u:null,i:null}),w={},_=(e,t,n,l)=>{if(n!==l){let s=G(e,t),r=t.toLowerCase();if("class"===t){const t=e.classList,o=k(n),s=k(l);t.remove(...o.filter(e=>e&&!s.includes(e))),t.add(...s.filter(e=>e&&!o.includes(e)))}else s||"o"!==t[0]||"n"!==t[1]||(t="-"===t[2]?t.slice(3):G(o,r)?r.slice(2):r[2]+t.slice(3),n&&c.rel(e,t,n,!1),l&&c.ael(e,t,l,!1))}},g=/\s/,k=e=>e?e.split(g):[],j=(e,t,n,l)=>{const o=11===t.$.nodeType&&t.$.host?t.$.host:t.$,s=e&&e.i||p,r=t.i||p;for(l in s)l in r||_(o,l,s[l],void 0);for(l in r)_(o,l,s[l],r[l])},v=(e,n,l)=>{let o,s,c=n.u[l],i=0;if(null!==c.s)o=c.$=r.createTextNode(c.s);else if(o=c.$=r.createElement(c.p),j(null,c),null!=t&&o["s-si"]!==t&&o.classList.add(o["s-si"]=t),c.u)for(i=0;i<c.u.length;++i)s=v(e,c,i),s&&o.appendChild(s);return o},S=(e,t,l,o,s,r)=>{let c,i=e;for(i.shadowRoot&&i.tagName===n&&(i=i.shadowRoot);s<=r;++s)o[s]&&(c=v(null,l,s),c&&(o[s].$=c,i.insertBefore(c,t)))},M=(e,t,n,l)=>{for(;t<=n;++t)(l=e[t])&&l.$.remove()},C=(e,t)=>e.p===t.p,O=(e,t)=>{const n=t.$=e.$,l=e.u,o=t.u,s=t.s;null===s?(j(e,t),null!==l&&null!==o?((e,t,n,l)=>{let o,s=0,r=0,c=t.length-1,i=t[0],a=t[c],u=l.length-1,f=l[0],d=l[u];for(;s<=c&&r<=u;)null==i?i=t[++s]:null==a?a=t[--c]:null==f?f=l[++r]:null==d?d=l[--u]:C(i,f)?(O(i,f),i=t[++s],f=l[++r]):C(a,d)?(O(a,d),a=t[--c],d=l[--u]):C(i,d)?(O(i,d),e.insertBefore(i.$,a.$.nextSibling),i=t[++s],d=l[--u]):C(a,f)?(O(a,f),e.insertBefore(a.$,i.$),a=t[--c],f=l[++r]):(o=v(t&&t[r],n,r),f=l[++r],o&&i.$.parentNode.insertBefore(o,i.$));s>c?S(e,null==l[u+1]?null:l[u+1].$,n,l,r,u):r>u&&M(t,s,c)})(n,l,t,o):null!==o?(null!==e.s&&(n.textContent=""),S(n,null,t,o,0,o.length-1)):null!==l&&M(l,0,l.length-1)):e.s!==s&&(n.data=s)},D=(e,t,n)=>{const l=(e=>V(e).m)(e);return{emit:e=>P(l,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},P=(e,t,n)=>{const l=c.ce(t,n);return e.dispatchEvent(l),l},x=(e,t)=>{t&&!e.h&&t["s-p"]&&t["s-p"].push(new Promise(t=>e.h=t))},E=(e,t)=>{if(e.t|=16,!(4&e.t))return x(e,e._),le(()=>R(e,t));e.t|=512},R=(e,t)=>{const n=e.g;return L(void 0,()=>T(e,n,t))},T=(e,l,o)=>{const s=e.m,c=s["s-rc"];o&&(e=>{const t=e.k,n=e.m,l=t.t,o=((e,t)=>{let n=d(t),l=Q.get(n);if(e=11===e.nodeType?e:r,l)if("string"==typeof l){let t,o=f.get(e=e.head||e);o||f.set(e,o=new Set),o.has(n)||(t=r.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),o&&o.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(i&&n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=o,n.classList.add(o+"-h"))})(e),((e,l)=>{const o=e.m,s=e.j||h(null,null),r=(e=>e&&e.p===w)(l)?l:m(null,null,l);n=o.tagName,r.p=null,r.t|=4,e.j=r,r.$=s.$=o.shadowRoot||o,t=o["s-sc"],O(s,r)})(e,U(e,l)),c&&(c.map(e=>e()),s["s-rc"]=void 0);{const t=s["s-p"],n=()=>q(e);0===t.length?n():(Promise.all(t).then(n),e.t|=4,t.length=0)}},U=(e,t)=>{try{t=t.render(),e.t&=-17,e.t|=2}catch(n){I(n)}return t},q=e=>{const t=e.m,n=e._;64&e.t||(e.t|=64,N(t),e.v(t),n||A()),e.h&&(e.h(),e.h=void 0),512&e.t&&ne(()=>E(e,!1)),e.t&=-517},A=()=>{N(r.documentElement),ne(()=>P(o,"appload",{detail:{namespace:e}}))},L=(e,t)=>e&&e.then?e.then(t):t(),N=e=>e.classList.add("hydrated"),W=(e,t,n)=>{if(t.S){const l=Object.entries(t.S),o=e.prototype;if(l.map(([e,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(o,e,{get(){return((e,t)=>V(this).M.get(t))(0,e)},set(n){((e,t,n,l)=>{const o=V(this),s=o.M.get(t),r=o.t,c=o.g;n=((e,t)=>null==e||$(e)?e:4&t?"false"!==e&&(""===e||!!e):1&t?e+"":e)(n,l.S[t][0]),8&r&&void 0!==s||n===s||(o.M.set(t,n),c&&2==(18&r)&&E(o,!1))})(0,e,n,t)},configurable:!0,enumerable:!0})}),1&n){const t=new Map;o.attributeChangedCallback=function(e,n,l){c.jmp(()=>{const n=t.get(e);this[n]=(null!==l||"boolean"!=typeof this[n])&&l})},e.observedAttributes=l.filter(([e,t])=>15&t[0]).map(([e,n])=>{const l=n[1]||e;return t.set(l,e),l})}}return e},F=(e,t={})=>{const n=[],l=t.exclude||[],s=o.customElements,a=r.head,f=a.querySelector("meta[charset]"),p=r.createElement("style"),$=[];let y,b=!0;Object.assign(c,t),c.l=new URL(t.resourcesUrl||"./",r.baseURI).href,e.map(e=>e[1].map(t=>{const o={t:t[0],o:t[1],S:t[2],C:t[3]};o.S=t[2],!i&&1&o.t&&(o.t|=8);const r=o.o,a=class extends HTMLElement{constructor(e){super(e),B(e=this,o),1&o.t&&(i?e.attachShadow({mode:"open"}):"shadowRoot"in e||(e.shadowRoot=e))}connectedCallback(){y&&(clearTimeout(y),y=null),b?$.push(this):c.jmp(()=>(e=>{if(0==(1&c.t)){const t=V(e),n=t.k,l=()=>{};if(!(1&t.t)){t.t|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){x(t,t._=n);break}}n.S&&Object.entries(n.S).map(([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}}),ne(()=>(async(e,t,n,l,o)=>{if(0==(32&t.t)){{if(t.t|=32,(o=K(n)).then){const e=()=>{};o=await o,e()}o.isProxied||(W(o,n,2),o.isProxied=!0);const e=()=>{};t.t|=8;try{new o(t)}catch(c){I(c)}t.t&=-9,e()}if(o.style){let e=o.style;const t=d(n);if(!Q.has(t)){const l=()=>{};8&n.t&&(e=await __sc_import_stencil_storybook_token_demo("./p-ebb4d602.js").then(n=>n.scopeCss(e,t,!1))),((e,t,n)=>{let l=Q.get(e);u&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,Q.set(e,l)})(t,e,!!(1&n.t)),l()}}}const s=t._,r=()=>E(t,!0);s&&s["s-rc"]?s["s-rc"].push(r):r()})(0,t,n))}l()}})(this))}disconnectedCallback(){c.jmp(()=>{})}forceUpdate(){(()=>{{const e=V(this);e.m.isConnected&&2==(18&e.t)&&E(e,!1)}})()}componentOnReady(){return V(this).O}};o.D=e[0],l.includes(r)||s.get(r)||(n.push(r),s.define(r,W(a,o,1)))})),p.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",p.setAttribute("data-styles",""),a.insertBefore(p,f?f.nextSibling:a.firstChild),b=!1,$.length?$.map(e=>e.connectedCallback()):c.jmp(()=>y=setTimeout(A,30))},H=new WeakMap,V=e=>H.get(e),z=(e,t)=>H.set(t.g=e,t),B=(e,t)=>{const n={t:0,m:e,k:t,M:new Map};return n.O=new Promise(e=>n.v=e),e["s-p"]=[],e["s-rc"]=[],H.set(e,n)},G=(e,t)=>t in e,I=e=>console.error(e),J=new Map,K=e=>{const t=e.o.replace(/-/g,"_"),n=e.D,l=J.get(n);return l?l[t]:__sc_import_stencil_storybook_token_demo(`./${n}.entry.js`).then(e=>(J.set(n,e),e[t]),I)},Q=new Map,X=[],Y=[],Z=(e,t)=>n=>{e.push(n),l||(l=!0,t&&4&c.t?ne(te):c.raf(te))},ee=e=>{for(let n=0;n<e.length;n++)try{e[n](performance.now())}catch(t){I(t)}e.length=0},te=()=>{ee(X),ee(Y),(l=X.length>0)&&c.raf(te)},ne=e=>a().then(e),le=Z(Y,!0);export{s as C,e as N,a,F as b,D as c,r as d,m as h,c as p,z as r,o as w};