(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[164],{5277:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addLocale",{enumerable:!0,get:function(){return addLocale}}),n(474);let addLocale=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),s=1;s<t;s++)n[s-1]=arguments[s];return e};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5468:function(e,t,n){"use strict";function getDomainLocale(e,t,n,s){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return getDomainLocale}}),n(474),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4724:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return b}});let s=n(1024),o=s._(n(2265)),i=n(7896),a=n(9357),u=n(7746),l=n(2337),c=n(5277),h=n(7650),d=n(1792),f=n(1013),p=n(5468),m=n(9207),g=n(2271),y=new Set;function prefetch(e,t,n,s,o,i){if(!i&&!(0,a.isLocalURL)(t))return;if(!s.bypassPrefetchedCheck){let o=void 0!==s.locale?s.locale:"locale"in e?e.locale:void 0,i=t+"%"+n+"%"+o;if(y.has(i))return;y.add(i)}let u=i?e.prefetch(t,o):e.prefetch(t,n,s);Promise.resolve(u).catch(e=>{})}function formatStringOrUrl(e){return"string"==typeof e?e:(0,u.formatUrl)(e)}let R=o.default.forwardRef(function(e,t){let n,s;let{href:u,as:y,children:R,prefetch:b=null,passHref:v,replace:O,shallow:S,scroll:P,locale:E,onClick:_,onMouseEnter:w,onTouchStart:C,legacyBehavior:I=!1,...N}=e;n=R,I&&("string"==typeof n||"number"==typeof n)&&(n=o.default.createElement("a",null,n));let j=o.default.useContext(h.RouterContext),x=o.default.useContext(d.AppRouterContext),U=null!=j?j:x,M=!j,T=!1!==b,Q=null===b?g.PrefetchKind.AUTO:g.PrefetchKind.FULL,{href:k,as:L}=o.default.useMemo(()=>{if(!j){let e=formatStringOrUrl(u);return{href:e,as:y?formatStringOrUrl(y):e}}let[e,t]=(0,i.resolveHref)(j,u,!0);return{href:e,as:y?(0,i.resolveHref)(j,y):t||e}},[j,u,y]),F=o.default.useRef(k),A=o.default.useRef(L);I&&(s=o.default.Children.only(n));let D=I?s&&"object"==typeof s&&s.ref:t,[z,W,B]=(0,f.useIntersection)({rootMargin:"200px"}),K=o.default.useCallback(e=>{(A.current!==L||F.current!==k)&&(B(),A.current=L,F.current=k),z(e),D&&("function"==typeof D?D(e):"object"==typeof D&&(D.current=e))},[L,D,k,B,z]);o.default.useEffect(()=>{U&&W&&T&&prefetch(U,k,L,{locale:E},{kind:Q},M)},[L,k,W,E,T,null==j?void 0:j.locale,U,M,Q]);let q={ref:K,onClick(e){I||"function"!=typeof _||_(e),I&&s.props&&"function"==typeof s.props.onClick&&s.props.onClick(e),U&&!e.defaultPrevented&&function(e,t,n,s,i,u,l,c,h,d){let{nodeName:f}=e.currentTarget,p="A"===f.toUpperCase();if(p&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!h&&!(0,a.isLocalURL)(n)))return;e.preventDefault();let navigate=()=>{let e=null==l||l;"beforePopState"in t?t[i?"replace":"push"](n,s,{shallow:u,locale:c,scroll:e}):t[i?"replace":"push"](s||n,{forceOptimisticNavigation:!d,scroll:e})};h?o.default.startTransition(navigate):navigate()}(e,U,k,L,O,S,P,E,M,T)},onMouseEnter(e){I||"function"!=typeof w||w(e),I&&s.props&&"function"==typeof s.props.onMouseEnter&&s.props.onMouseEnter(e),U&&(T||!M)&&prefetch(U,k,L,{locale:E,priority:!0,bypassPrefetchedCheck:!0},{kind:Q},M)},onTouchStart(e){I||"function"!=typeof C||C(e),I&&s.props&&"function"==typeof s.props.onTouchStart&&s.props.onTouchStart(e),U&&(T||!M)&&prefetch(U,k,L,{locale:E,priority:!0,bypassPrefetchedCheck:!0},{kind:Q},M)}};if((0,l.isAbsoluteUrl)(L))q.href=L;else if(!I||v||"a"===s.type&&!("href"in s.props)){let e=void 0!==E?E:null==j?void 0:j.locale,t=(null==j?void 0:j.isLocaleDomain)&&(0,p.getDomainLocale)(L,e,null==j?void 0:j.locales,null==j?void 0:j.domainLocales);q.href=t||(0,m.addBasePath)((0,c.addLocale)(L,e,null==j?void 0:j.defaultLocale))}return I?o.default.cloneElement(s,q):o.default.createElement("a",{...N,...q},n)}),b=R;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4913:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{requestIdleCallback:function(){return n},cancelIdleCallback:function(){return s}});let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},s="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7896:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"resolveHref",{enumerable:!0,get:function(){return resolveHref}});let s=n(8888),o=n(7746),i=n(9946),a=n(2337),u=n(474),l=n(9357),c=n(1956),h=n(5125);function resolveHref(e,t,n){let d;let f="string"==typeof t?t:(0,o.formatWithValidation)(t),p=f.match(/^[a-zA-Z]{1,}:\/\//),m=p?f.slice(p[0].length):f,g=m.split("?");if((g[0]||"").match(/(\/\/|\\)/)){console.error("Invalid href '"+f+"' passed to next/router in page: '"+e.pathname+"'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");let t=(0,a.normalizeRepeatedSlashes)(m);f=(p?p[0]:"")+t}if(!(0,l.isLocalURL)(f))return n?[f]:f;try{d=new URL(f.startsWith("#")?e.asPath:e.pathname,"http://n")}catch(e){d=new URL("/","http://n")}try{let e=new URL(f,d);e.pathname=(0,u.normalizePathTrailingSlash)(e.pathname);let t="";if((0,c.isDynamicRoute)(e.pathname)&&e.searchParams&&n){let n=(0,s.searchParamsToUrlQuery)(e.searchParams),{result:a,params:u}=(0,h.interpolateAs)(e.pathname,e.pathname,n);a&&(t=(0,o.formatWithValidation)({pathname:a,hash:e.hash,query:(0,i.omit)(n,u)}))}let a=e.origin===d.origin?e.href.slice(e.origin.length):e.href;return n?[a,t||a]:a}catch(e){return n?[f]:f}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1013:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return useIntersection}});let s=n(2265),o=n(4913),i="function"==typeof IntersectionObserver,a=new Map,u=[];function useIntersection(e){let{rootRef:t,rootMargin:n,disabled:l}=e,c=l||!i,[h,d]=(0,s.useState)(!1),f=(0,s.useRef)(null),p=(0,s.useCallback)(e=>{f.current=e},[]);(0,s.useEffect)(()=>{if(i){if(c||h)return;let e=f.current;if(e&&e.tagName){let s=function(e,t,n){let{id:s,observer:o,elements:i}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},s=u.find(e=>e.root===n.root&&e.margin===n.margin);if(s&&(t=a.get(s)))return t;let o=new Map,i=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:i,elements:o},u.push(n),a.set(n,t),t}(n);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),a.delete(s);let e=u.findIndex(e=>e.root===s.root&&e.margin===s.margin);e>-1&&u.splice(e,1)}}}(e,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:n});return s}}else if(!h){let e=(0,o.requestIdleCallback)(()=>d(!0));return()=>(0,o.cancelIdleCallback)(e)}},[c,n,t,h,f.current]);let m=(0,s.useCallback)(()=>{d(!1)},[]);return[p,h,m]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2361:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"escapeStringRegexp",{enumerable:!0,get:function(){return escapeStringRegexp}});let n=/[|\\{}()[\]^$+*?.-]/,s=/[|\\{}()[\]^$+*?.-]/g;function escapeStringRegexp(e){return n.test(e)?e.replace(s,"\\$&"):e}},7746:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{formatUrl:function(){return formatUrl},urlObjectKeys:function(){return a},formatWithValidation:function(){return formatWithValidation}});let s=n(8533),o=s._(n(8888)),i=/https?|ftp|gopher|file/;function formatUrl(e){let{auth:t,hostname:n}=e,s=e.protocol||"",a=e.pathname||"",u=e.hash||"",l=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:n&&(c=t+(~n.indexOf(":")?"["+n+"]":n),e.port&&(c+=":"+e.port)),l&&"object"==typeof l&&(l=String(o.urlQueryToSearchParams(l)));let h=e.search||l&&"?"+l||"";return s&&!s.endsWith(":")&&(s+=":"),e.slashes||(!s||i.test(s))&&!1!==c?(c="//"+(c||""),a&&"/"!==a[0]&&(a="/"+a)):c||(c=""),u&&"#"!==u[0]&&(u="#"+u),h&&"?"!==h[0]&&(h="?"+h),""+s+c+(a=a.replace(/[?#]/g,encodeURIComponent))+(h=h.replace("#","%23"))+u}let a=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function formatWithValidation(e){return formatUrl(e)}},1956:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{getSortedRoutes:function(){return s.getSortedRoutes},isDynamicRoute:function(){return o.isDynamicRoute}});let s=n(3799),o=n(9731)},5125:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"interpolateAs",{enumerable:!0,get:function(){return interpolateAs}});let s=n(5366),o=n(5319);function interpolateAs(e,t,n){let i="",a=(0,o.getRouteRegex)(e),u=a.groups,l=(t!==e?(0,s.getRouteMatcher)(a)(t):"")||n;i=e;let c=Object.keys(u);return c.every(e=>{let t=l[e]||"",{repeat:n,optional:s}=u[e],o="["+(n?"...":"")+e+"]";return s&&(o=(t?"":"/")+"["+o+"]"),n&&!Array.isArray(t)&&(t=[t]),(s||e in l)&&(i=i.replace(o,n?t.map(e=>encodeURIComponent(e)).join("/"):encodeURIComponent(t))||"/")})||(i=""),{params:c,result:i}}},9731:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isDynamicRoute",{enumerable:!0,get:function(){return isDynamicRoute}});let n=/\/\[[^/]+?\](?=\/|$)/;function isDynamicRoute(e){return n.test(e)}},9357:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isLocalURL",{enumerable:!0,get:function(){return isLocalURL}});let s=n(2337),o=n(4561);function isLocalURL(e){if(!(0,s.isAbsoluteUrl)(e))return!0;try{let t=(0,s.getLocationOrigin)(),n=new URL(e,t);return n.origin===t&&(0,o.hasBasePath)(n.pathname)}catch(e){return!1}}},9946:function(e,t){"use strict";function omit(e,t){let n={};return Object.keys(e).forEach(s=>{t.includes(s)||(n[s]=e[s])}),n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"omit",{enumerable:!0,get:function(){return omit}})},8888:function(e,t){"use strict";function searchParamsToUrlQuery(e){let t={};return e.forEach((e,n)=>{void 0===t[n]?t[n]=e:Array.isArray(t[n])?t[n].push(e):t[n]=[t[n],e]}),t}function stringifyUrlQueryParam(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function urlQueryToSearchParams(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[n,s]=e;Array.isArray(s)?s.forEach(e=>t.append(n,stringifyUrlQueryParam(e))):t.set(n,stringifyUrlQueryParam(s))}),t}function assign(e){for(var t=arguments.length,n=Array(t>1?t-1:0),s=1;s<t;s++)n[s-1]=arguments[s];return n.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,n)=>e.append(n,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{searchParamsToUrlQuery:function(){return searchParamsToUrlQuery},urlQueryToSearchParams:function(){return urlQueryToSearchParams},assign:function(){return assign}})},5366:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getRouteMatcher",{enumerable:!0,get:function(){return getRouteMatcher}});let s=n(2337);function getRouteMatcher(e){let{re:t,groups:n}=e;return e=>{let o=t.exec(e);if(!o)return!1;let decode=e=>{try{return decodeURIComponent(e)}catch(e){throw new s.DecodeError("failed to decode param")}},i={};return Object.keys(n).forEach(e=>{let t=n[e],s=o[t.pos];void 0!==s&&(i[e]=~s.indexOf("/")?s.split("/").map(e=>decode(e)):t.repeat?[decode(s)]:decode(s))}),i}}},5319:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{getRouteRegex:function(){return getRouteRegex},getNamedRouteRegex:function(){return getNamedRouteRegex},getNamedMiddlewareRegex:function(){return getNamedMiddlewareRegex}});let s=n(4507),o=n(2361),i=n(993);function parseParameter(e){let t=e.startsWith("[")&&e.endsWith("]");t&&(e=e.slice(1,-1));let n=e.startsWith("...");return n&&(e=e.slice(3)),{key:e,repeat:n,optional:t}}function getParametrizedRoute(e){let t=(0,i.removeTrailingSlash)(e).slice(1).split("/"),n={},a=1;return{parameterizedRoute:t.map(e=>{let t=s.INTERCEPTION_ROUTE_MARKERS.find(t=>e.startsWith(t)),i=e.match(/\[((?:\[.*\])|.+)\]/);if(t&&i){let{key:e,optional:s,repeat:u}=parseParameter(i[1]);return n[e]={pos:a++,repeat:u,optional:s},"/"+(0,o.escapeStringRegexp)(t)+"([^/]+?)"}if(!i)return"/"+(0,o.escapeStringRegexp)(e);{let{key:e,repeat:t,optional:s}=parseParameter(i[1]);return n[e]={pos:a++,repeat:t,optional:s},t?s?"(?:/(.+?))?":"/(.+?)":"/([^/]+?)"}}).join(""),groups:n}}function getRouteRegex(e){let{parameterizedRoute:t,groups:n}=getParametrizedRoute(e);return{re:RegExp("^"+t+"(?:/)?$"),groups:n}}function getSafeKeyFromSegment(e){let{getSafeRouteKey:t,segment:n,routeKeys:s,keyPrefix:o}=e,{key:i,optional:a,repeat:u}=parseParameter(n),l=i.replace(/\W/g,"");o&&(l=""+o+l);let c=!1;return(0===l.length||l.length>30)&&(c=!0),isNaN(parseInt(l.slice(0,1)))||(c=!0),c&&(l=t()),o?s[l]=""+o+i:s[l]=""+i,u?a?"(?:/(?<"+l+">.+?))?":"/(?<"+l+">.+?)":"/(?<"+l+">[^/]+?)"}function getNamedParametrizedRoute(e,t){let n;let a=(0,i.removeTrailingSlash)(e).slice(1).split("/"),u=(n=0,()=>{let e="",t=++n;for(;t>0;)e+=String.fromCharCode(97+(t-1)%26),t=Math.floor((t-1)/26);return e}),l={};return{namedParameterizedRoute:a.map(e=>{let n=s.INTERCEPTION_ROUTE_MARKERS.some(t=>e.startsWith(t)),i=e.match(/\[((?:\[.*\])|.+)\]/);return n&&i?getSafeKeyFromSegment({getSafeRouteKey:u,segment:i[1],routeKeys:l,keyPrefix:t?"nxtI":void 0}):i?getSafeKeyFromSegment({getSafeRouteKey:u,segment:i[1],routeKeys:l,keyPrefix:t?"nxtP":void 0}):"/"+(0,o.escapeStringRegexp)(e)}).join(""),routeKeys:l}}function getNamedRouteRegex(e,t){let n=getNamedParametrizedRoute(e,t);return{...getRouteRegex(e),namedRegex:"^"+n.namedParameterizedRoute+"(?:/)?$",routeKeys:n.routeKeys}}function getNamedMiddlewareRegex(e,t){let{parameterizedRoute:n}=getParametrizedRoute(e),{catchAll:s=!0}=t;if("/"===n)return{namedRegex:"^/"+(s?".*":"")+"$"};let{namedParameterizedRoute:o}=getNamedParametrizedRoute(e,!1);return{namedRegex:"^"+o+(s?"(?:(/.*)?)":"")+"$"}}},3799:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSortedRoutes",{enumerable:!0,get:function(){return getSortedRoutes}});let UrlNode=class UrlNode{insert(e){this._insert(e.split("/").filter(Boolean),[],!1)}smoosh(){return this._smoosh()}_smoosh(e){void 0===e&&(e="/");let t=[...this.children.keys()].sort();null!==this.slugName&&t.splice(t.indexOf("[]"),1),null!==this.restSlugName&&t.splice(t.indexOf("[...]"),1),null!==this.optionalRestSlugName&&t.splice(t.indexOf("[[...]]"),1);let n=t.map(t=>this.children.get(t)._smoosh(""+e+t+"/")).reduce((e,t)=>[...e,...t],[]);if(null!==this.slugName&&n.push(...this.children.get("[]")._smoosh(e+"["+this.slugName+"]/")),!this.placeholder){let t="/"===e?"/":e.slice(0,-1);if(null!=this.optionalRestSlugName)throw Error('You cannot define a route with the same specificity as a optional catch-all route ("'+t+'" and "'+t+"[[..."+this.optionalRestSlugName+']]").');n.unshift(t)}return null!==this.restSlugName&&n.push(...this.children.get("[...]")._smoosh(e+"[..."+this.restSlugName+"]/")),null!==this.optionalRestSlugName&&n.push(...this.children.get("[[...]]")._smoosh(e+"[[..."+this.optionalRestSlugName+"]]/")),n}_insert(e,t,n){if(0===e.length){this.placeholder=!1;return}if(n)throw Error("Catch-all must be the last part of the URL.");let s=e[0];if(s.startsWith("[")&&s.endsWith("]")){let o=s.slice(1,-1),i=!1;if(o.startsWith("[")&&o.endsWith("]")&&(o=o.slice(1,-1),i=!0),o.startsWith("...")&&(o=o.substring(3),n=!0),o.startsWith("[")||o.endsWith("]"))throw Error("Segment names may not start or end with extra brackets ('"+o+"').");if(o.startsWith("."))throw Error("Segment names may not start with erroneous periods ('"+o+"').");function handleSlug(e,n){if(null!==e&&e!==n)throw Error("You cannot use different slug names for the same dynamic path ('"+e+"' !== '"+n+"').");t.forEach(e=>{if(e===n)throw Error('You cannot have the same slug name "'+n+'" repeat within a single dynamic path');if(e.replace(/\W/g,"")===s.replace(/\W/g,""))throw Error('You cannot have the slug names "'+e+'" and "'+n+'" differ only by non-word symbols within a single dynamic path')}),t.push(n)}if(n){if(i){if(null!=this.restSlugName)throw Error('You cannot use both an required and optional catch-all route at the same level ("[...'+this.restSlugName+']" and "'+e[0]+'" ).');handleSlug(this.optionalRestSlugName,o),this.optionalRestSlugName=o,s="[[...]]"}else{if(null!=this.optionalRestSlugName)throw Error('You cannot use both an optional and required catch-all route at the same level ("[[...'+this.optionalRestSlugName+']]" and "'+e[0]+'").');handleSlug(this.restSlugName,o),this.restSlugName=o,s="[...]"}}else{if(i)throw Error('Optional route parameters are not yet supported ("'+e[0]+'").');handleSlug(this.slugName,o),this.slugName=o,s="[]"}}this.children.has(s)||this.children.set(s,new UrlNode),this.children.get(s)._insert(e.slice(1),t,n)}constructor(){this.placeholder=!0,this.children=new Map,this.slugName=null,this.restSlugName=null,this.optionalRestSlugName=null}};function getSortedRoutes(e){let t=new UrlNode;return e.forEach(e=>t.insert(e)),t.smoosh()}},2337:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{WEB_VITALS:function(){return n},execOnce:function(){return execOnce},isAbsoluteUrl:function(){return isAbsoluteUrl},getLocationOrigin:function(){return getLocationOrigin},getURL:function(){return getURL},getDisplayName:function(){return getDisplayName},isResSent:function(){return isResSent},normalizeRepeatedSlashes:function(){return normalizeRepeatedSlashes},loadGetInitialProps:function(){return loadGetInitialProps},SP:function(){return o},ST:function(){return i},DecodeError:function(){return DecodeError},NormalizeError:function(){return NormalizeError},PageNotFoundError:function(){return PageNotFoundError},MissingStaticPage:function(){return MissingStaticPage},MiddlewareNotFoundError:function(){return MiddlewareNotFoundError},stringifyError:function(){return stringifyError}});let n=["CLS","FCP","FID","INP","LCP","TTFB"];function execOnce(e){let t,n=!1;return function(){for(var s=arguments.length,o=Array(s),i=0;i<s;i++)o[i]=arguments[i];return n||(n=!0,t=e(...o)),t}}let s=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,isAbsoluteUrl=e=>s.test(e);function getLocationOrigin(){let{protocol:e,hostname:t,port:n}=window.location;return e+"//"+t+(n?":"+n:"")}function getURL(){let{href:e}=window.location,t=getLocationOrigin();return e.substring(t.length)}function getDisplayName(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function isResSent(e){return e.finished||e.headersSent}function normalizeRepeatedSlashes(e){let t=e.split("?"),n=t[0];return n.replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function loadGetInitialProps(e,t){let n=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await loadGetInitialProps(t.Component,t.ctx)}:{};let s=await e.getInitialProps(t);if(n&&isResSent(n))return s;if(!s){let t='"'+getDisplayName(e)+'.getInitialProps()" should resolve to an object. But found "'+s+'" instead.';throw Error(t)}return s}let o="undefined"!=typeof performance,i=o&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);let DecodeError=class DecodeError extends Error{};let NormalizeError=class NormalizeError extends Error{};let PageNotFoundError=class PageNotFoundError extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}};let MissingStaticPage=class MissingStaticPage extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}};let MiddlewareNotFoundError=class MiddlewareNotFoundError extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}};function stringifyError(e){return JSON.stringify({message:e.message,stack:e.stack})}},1396:function(e,t,n){e.exports=n(4724)},1172:function(e,t,n){"use strict";n.d(t,{w_:function(){return GenIcon}});var s=n(2265),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=s.createContext&&s.createContext(o),__assign=function(){return(__assign=Object.assign||function(e){for(var t,n=1,s=arguments.length;n<s;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},__rest=function(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&0>t.indexOf(s)&&(n[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,s=Object.getOwnPropertySymbols(e);o<s.length;o++)0>t.indexOf(s[o])&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(n[s[o]]=e[s[o]]);return n};function GenIcon(e){return function(t){return s.createElement(IconBase,__assign({attr:__assign({},e.attr)},t),function Tree2Element(e){return e&&e.map(function(e,t){return s.createElement(e.tag,__assign({key:t},e.attr),Tree2Element(e.child))})}(e.child))}}function IconBase(e){var elem=function(t){var n,o=e.attr,i=e.size,a=e.title,u=__rest(e,["attr","size","title"]),l=i||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),s.createElement("svg",__assign({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,u,{className:n,style:__assign(__assign({color:e.color||t.color},t.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),a&&s.createElement("title",null,a),e.children)};return void 0!==i?s.createElement(i.Consumer,null,function(e){return elem(e)}):elem(o)}},4874:function(e,t,n){"use strict";let s;n.d(t,{a:function(){return useQuery}});var o=n(6504),i=n(7156),a=n(8202),u=n(9492),l=n(3238);let QueryObserver=class QueryObserver extends u.l{constructor(e,t){super(),this.client=e,this.options=t,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(t)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){1===this.listeners.size&&(this.currentQuery.addObserver(this),shouldFetchOnMount(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return shouldFetchOn(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return shouldFetchOn(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(e,t){let n=this.options,s=this.currentQuery;if(this.options=this.client.defaultQueryOptions(e),(0,o.VS)(n,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),void 0!==this.options.enabled&&"boolean"!=typeof this.options.enabled)throw Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=n.queryKey),this.updateQuery();let i=this.hasListeners();i&&shouldFetchOptionally(this.currentQuery,s,this.options,n)&&this.executeFetch(),this.updateResult(t),i&&(this.currentQuery!==s||this.options.enabled!==n.enabled||this.options.staleTime!==n.staleTime)&&this.updateStaleTimeout();let a=this.computeRefetchInterval();i&&(this.currentQuery!==s||this.options.enabled!==n.enabled||a!==this.currentRefetchInterval)&&this.updateRefetchInterval(a)}getOptimisticResult(e){let t=this.client.getQueryCache().build(this.client,e),n=this.createResult(t,e);return e.keepPreviousData||(void 0!==e.placeholderData?!n.isPlaceholderData:(0,o.VS)(this.getCurrentResult(),n))||(this.currentResult=n,this.currentResultOptions=this.options,this.currentResultState=this.currentQuery.state),n}getCurrentResult(){return this.currentResult}trackResult(e){let t={};return Object.keys(e).forEach(n=>{Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(n),e[n])})}),t}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:e,...t}={}){return this.fetch({...t,meta:{refetchPage:e}})}fetchOptimistic(e){let t=this.client.defaultQueryOptions(e),n=this.client.getQueryCache().build(this.client,t);return n.isFetchingOptimistic=!0,n.fetch().then(()=>this.createResult(n,t))}fetch(e){var t;return this.executeFetch({...e,cancelRefetch:null==(t=e.cancelRefetch)||t}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(e){this.updateQuery();let t=this.currentQuery.fetch(this.options,e);return null!=e&&e.throwOnError||(t=t.catch(o.ZT)),t}updateStaleTimeout(){if(this.clearStaleTimeout(),o.sk||this.currentResult.isStale||!(0,o.PN)(this.options.staleTime))return;let e=(0,o.Kp)(this.currentResult.dataUpdatedAt,this.options.staleTime);this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},e+1)}computeRefetchInterval(){var e;return"function"==typeof this.options.refetchInterval?this.options.refetchInterval(this.currentResult.data,this.currentQuery):null!=(e=this.options.refetchInterval)&&e}updateRefetchInterval(e){this.clearRefetchInterval(),this.currentRefetchInterval=e,!o.sk&&!1!==this.options.enabled&&(0,o.PN)(this.currentRefetchInterval)&&0!==this.currentRefetchInterval&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||a.j.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(e,t){let n;let s=this.currentQuery,i=this.options,a=this.currentResult,u=this.currentResultState,c=this.currentResultOptions,h=e!==s,d=h?e.state:this.currentQueryInitialState,f=h?this.currentResult:this.previousQueryResult,{state:p}=e,{dataUpdatedAt:m,error:g,errorUpdatedAt:y,fetchStatus:R,status:b}=p,v=!1,O=!1;if(t._optimisticResults){let n=this.hasListeners(),o=!n&&shouldFetchOnMount(e,t),a=n&&shouldFetchOptionally(e,s,t,i);(o||a)&&(R=(0,l.Kw)(e.options.networkMode)?"fetching":"paused",m||(b="loading")),"isRestoring"===t._optimisticResults&&(R="idle")}if(t.keepPreviousData&&!p.dataUpdatedAt&&null!=f&&f.isSuccess&&"error"!==b)n=f.data,m=f.dataUpdatedAt,b=f.status,v=!0;else if(t.select&&void 0!==p.data){if(a&&p.data===(null==u?void 0:u.data)&&t.select===this.selectFn)n=this.selectResult;else try{this.selectFn=t.select,n=t.select(p.data),n=(0,o.oE)(null==a?void 0:a.data,n,t),this.selectResult=n,this.selectError=null}catch(e){this.selectError=e}}else n=p.data;if(void 0!==t.placeholderData&&void 0===n&&"loading"===b){let e;if(null!=a&&a.isPlaceholderData&&t.placeholderData===(null==c?void 0:c.placeholderData))e=a.data;else if(e="function"==typeof t.placeholderData?t.placeholderData():t.placeholderData,t.select&&void 0!==e)try{e=t.select(e),this.selectError=null}catch(e){this.selectError=e}void 0!==e&&(b="success",n=(0,o.oE)(null==a?void 0:a.data,e,t),O=!0)}this.selectError&&(g=this.selectError,n=this.selectResult,y=Date.now(),b="error");let S="fetching"===R,P="loading"===b,E="error"===b,_={status:b,fetchStatus:R,isLoading:P,isSuccess:"success"===b,isError:E,isInitialLoading:P&&S,data:n,dataUpdatedAt:m,error:g,errorUpdatedAt:y,failureCount:p.fetchFailureCount,failureReason:p.fetchFailureReason,errorUpdateCount:p.errorUpdateCount,isFetched:p.dataUpdateCount>0||p.errorUpdateCount>0,isFetchedAfterMount:p.dataUpdateCount>d.dataUpdateCount||p.errorUpdateCount>d.errorUpdateCount,isFetching:S,isRefetching:S&&!P,isLoadingError:E&&0===p.dataUpdatedAt,isPaused:"paused"===R,isPlaceholderData:O,isPreviousData:v,isRefetchError:E&&0!==p.dataUpdatedAt,isStale:isStale(e,t),refetch:this.refetch,remove:this.remove};return _}updateResult(e){let t=this.currentResult,n=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,(0,o.VS)(n,t))return;this.currentResult=n;let s={cache:!0};(null==e?void 0:e.listeners)!==!1&&(()=>{if(!t)return!0;let{notifyOnChangeProps:e}=this.options,n="function"==typeof e?e():e;if("all"===n||!n&&!this.trackedProps.size)return!0;let s=new Set(null!=n?n:this.trackedProps);return this.options.useErrorBoundary&&s.add("error"),Object.keys(this.currentResult).some(e=>{let n=this.currentResult[e]!==t[e];return n&&s.has(e)})})()&&(s.listeners=!0),this.notify({...s,...e})}updateQuery(){let e=this.client.getQueryCache().build(this.client,this.options);if(e===this.currentQuery)return;let t=this.currentQuery;this.currentQuery=e,this.currentQueryInitialState=e.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(null==t||t.removeObserver(this),e.addObserver(this))}onQueryUpdate(e){let t={};"success"===e.type?t.onSuccess=!e.manual:"error"!==e.type||(0,l.DV)(e.error)||(t.onError=!0),this.updateResult(t),this.hasListeners()&&this.updateTimers()}notify(e){i.V.batch(()=>{var t,n,s,o,i,a,u,l;e.onSuccess?(null==(t=(n=this.options).onSuccess)||t.call(n,this.currentResult.data),null==(s=(o=this.options).onSettled)||s.call(o,this.currentResult.data,null)):e.onError&&(null==(i=(a=this.options).onError)||i.call(a,this.currentResult.error),null==(u=(l=this.options).onSettled)||u.call(l,void 0,this.currentResult.error)),e.listeners&&this.listeners.forEach(({listener:e})=>{e(this.currentResult)}),e.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}};function shouldFetchOnMount(e,t){return!1!==t.enabled&&!e.state.dataUpdatedAt&&!("error"===e.state.status&&!1===t.retryOnMount)||e.state.dataUpdatedAt>0&&shouldFetchOn(e,t,t.refetchOnMount)}function shouldFetchOn(e,t,n){if(!1!==t.enabled){let s="function"==typeof n?n(e):n;return"always"===s||!1!==s&&isStale(e,t)}return!1}function shouldFetchOptionally(e,t,n,s){return!1!==n.enabled&&(e!==t||!1===s.enabled)&&(!n.suspense||"error"!==e.state.status)&&isStale(e,n)}function isStale(e,t){return e.isStaleByTime(t.staleTime)}var c=n(2265),h=n(5321);let d=c.createContext((s=!1,{clearReset:()=>{s=!1},reset:()=>{s=!0},isReset:()=>s})),useQueryErrorResetBoundary=()=>c.useContext(d);var f=n(165);let p=c.createContext(!1),useIsRestoring=()=>c.useContext(p);p.Provider;var m=n(7798);let ensurePreventErrorBoundaryRetry=(e,t)=>{(e.suspense||e.useErrorBoundary)&&!t.isReset()&&(e.retryOnMount=!1)},useClearResetErrorBoundary=e=>{c.useEffect(()=>{e.clearReset()},[e])},getHasError=({result:e,errorResetBoundary:t,useErrorBoundary:n,query:s})=>e.isError&&!t.isReset()&&!e.isFetching&&(0,m.L)(n,[e.error,s]),ensureStaleTime=e=>{e.suspense&&"number"!=typeof e.staleTime&&(e.staleTime=1e3)},willFetch=(e,t)=>e.isLoading&&e.isFetching&&!t,shouldSuspend=(e,t,n)=>(null==e?void 0:e.suspense)&&willFetch(t,n),fetchOptimistic=(e,t,n)=>t.fetchOptimistic(e).then(({data:t})=>{null==e.onSuccess||e.onSuccess(t),null==e.onSettled||e.onSettled(t,null)}).catch(t=>{n.clearReset(),null==e.onError||e.onError(t),null==e.onSettled||e.onSettled(void 0,t)});function useQuery(e,t,n){let s=(0,o._v)(e,t,n);return function(e,t){let n=(0,f.NL)({context:e.context}),s=useIsRestoring(),o=useQueryErrorResetBoundary(),a=n.defaultQueryOptions(e);a._optimisticResults=s?"isRestoring":"optimistic",a.onError&&(a.onError=i.V.batchCalls(a.onError)),a.onSuccess&&(a.onSuccess=i.V.batchCalls(a.onSuccess)),a.onSettled&&(a.onSettled=i.V.batchCalls(a.onSettled)),ensureStaleTime(a),ensurePreventErrorBoundaryRetry(a,o),useClearResetErrorBoundary(o);let[u]=c.useState(()=>new t(n,a)),l=u.getOptimisticResult(a);if((0,h.$)(c.useCallback(e=>{let t=s?()=>void 0:u.subscribe(i.V.batchCalls(e));return u.updateResult(),t},[u,s]),()=>u.getCurrentResult(),()=>u.getCurrentResult()),c.useEffect(()=>{u.setOptions(a,{listeners:!1})},[a,u]),shouldSuspend(a,l,s))throw fetchOptimistic(a,u,o);if(getHasError({result:l,errorResetBoundary:o,useErrorBoundary:a.useErrorBoundary,query:u.getCurrentQuery()}))throw l.error;return a.notifyOnChangeProps?l:u.trackResult(l)}(s,QueryObserver)}},5321:function(e,t,n){"use strict";n.d(t,{$:function(){return o}});var s=n(6272);let o=s.useSyncExternalStore},7798:function(e,t,n){"use strict";function shouldThrowError(e,t){return"function"==typeof e?e(...t):!!e}n.d(t,{L:function(){return shouldThrowError}})},7042:function(e,t,n){"use strict";t.Z=function(){for(var e,t,n=0,s="";n<arguments.length;)(e=arguments[n++])&&(t=function r(e){var t,n,s="";if("string"==typeof e||"number"==typeof e)s+=e;else if("object"==typeof e){if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(s&&(s+=" "),s+=n);else for(t in e)e[t]&&(s&&(s+=" "),s+=t)}return s}(e))&&(s&&(s+=" "),s+=t);return s}}}]);