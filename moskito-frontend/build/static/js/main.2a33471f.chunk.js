(this["webpackJsonpmoskito-frontend"]=this["webpackJsonpmoskito-frontend"]||[]).push([[0],{48:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n(2),r=n.n(i),o=n(29),s=n.n(o),c=n(7),d=n(4),l=n(3),p=n(23);function u(e){return e.features.filter((function(e){return e.value}))}function m(e){return b().find((function(t){return t.dbName===e.type})).name}function b(){return[{id:1,name:"kein W-Lan",dbName:"wlan",isFeature:!1},{id:2,name:"keine Bar/Diskothek",dbName:"music",isFeature:!1},{id:3,name:"keine Animation",dbName:"animation",isFeature:!1},{id:4,name:"Lagerfeuerstelle",dbName:"fire",isFeature:!1},{id:5,name:"Kies- oder Sandwege",dbName:"path",isFeature:!1},{id:6,name:"Bulli-Wiese",dbName:"bulli",isFeature:!1},{id:7,name:"Zeltbereiche",dbName:"tents",isFeature:!1},{id:8,name:"keine Parzellierung",dbName:"subdevision",isFeature:!1},{id:9,name:"wenig/keine Dauercamper",dbName:"permanent",isFeature:!1},{id:10,name:"mind. 80qm Standfl\xe4che",dbName:"size",isFeature:!1},{id:11,name:"Bio/Regionale Lebensmittel",dbName:"bio",isFeature:!1},{id:12,name:"Imbiss",dbName:"snack",isFeature:!1},{id:13,name:"Hunde erlaubt",dbName:"animals",isFeature:!1},{id:14,name:"Zugang zum See/Meer",dbName:"seaside",isFeature:!1},{id:15,name:"Badestelle f\xfcr Kinder",dbName:"bathing",isFeature:!1},{id:16,name:"mit Wald",dbName:"forest",isFeature:!1}]}function h(e){var t=e.feature;return Object(a.jsx)(j,{children:m(t)})}var j=l.b.li.withConfig({displayName:"FeatureListItem__FeatureItem",componentId:"sc-1l4j6b6-0"})(["border-radius:10px;display:inline-block;box-shadow:inset 4px 4px 6px 0 rgba(0,0,0,0.2),inset -3px -4px 6px 0 rgba(255,255,255,0.3);padding:.5em 1em;margin:.5em;"]),x=n(6),f=n(17);function g(e,t,n,a){var i={method:t,headers:n,body:JSON.stringify(e),redirect:"follow"};try{return fetch(a,i).then((function(e){return e.json()}))}catch(r){return{error:"Server does not answer!"}}}function O(e){try{return JSON.parse(localStorage.getItem(e))}catch(t){console.log(t)}}function k(){var e=O("tokens");return function(e,t){var n={method:"GET",headers:e,redirect:"follow"};try{return fetch(t,n).then((function(e){return e.json()}))}catch(a){return{error:"Server does not answer!"}}}({Authorization:"Bearer ".concat(e.value)},"".concat("https://backend.moskito.uber.space","/bookmark"))}function v(e){var t=e.id,n=e.isPinned,r=Object(i.useState)(n),o=Object(x.a)(r,2),s=o[0],c=o[1];return Object(a.jsx)(w,{pinned:s,onClick:function(){c(!s),function(e){var t=O("tokens");g("","POST",{Authorization:"Bearer ".concat(t.value)},"".concat("https://backend.moskito.uber.space","/bookmark/").concat(e)).then((function(e){return console.log(e)})).catch((function(e){return console.log("error",e)}))}(t)},children:Object(a.jsx)(f.a,{})})}var w=l.b.div.withConfig({displayName:"LikeButton__CampsiteLikeButton",componentId:"sc-1leozx1-0"})(["position:absolute;right:1em;top:1em;height:3.5em;width:3.5em;border-radius:10px;box-shadow:2px 4px 8px -4px rgba(0,0,0,0.6),-2px -2px 2px 0px rgba(255,255,255,0.5);display:flex;justify-content:center;svg{width:2.1em;height:2.1em;stroke:#c97f63;stroke-width:3em;fill:",";align-self:center;margin-bottom:3px;}"],(function(e){return e.pinned?"#c97f63":"#c2d6d3"}));function y(e){var t=e.campsite;return Object(a.jsxs)(C,{children:[Object(a.jsx)("h2",{children:t.name}),Object(a.jsxs)(N,{children:[Object(a.jsx)("p",{children:t.street}),Object(a.jsxs)("p",{children:[t.postalCode," ",t.place]})]}),Object(a.jsxs)(F,{children:[t.telephone&&Object(a.jsxs)("p",{children:[Object(a.jsx)(p.b,{}),t.telephone]}),t.email&&Object(a.jsxs)("p",{children:[Object(a.jsx)(p.a,{})," ",t.email]}),Object(a.jsx)("a",{rel:"noopener noreferrer",href:t.web,target:"_blank",children:t.web})]}),Object(a.jsx)(S,{children:u(t).map((function(e){return Object(a.jsx)(h,{feature:e},e.id)}))}),Object(a.jsx)(v,{isPinned:t.pinned,id:t.id})]})}var C=l.b.div.withConfig({displayName:"CampsiteListItem__CampItem",componentId:"w00kd9-0"})(["display:grid;grid-template-columns:2fr 3fr;box-shadow:2px 4px 8px -4px rgba(0,0,0,0.6),-2px -2px 2px 0px rgba(255,255,255,0.5);border-radius:20px;margin:2em 1em;padding:.5em 1em;position:relative;h2{grid-column:1/-1;width:75%;}"]),N=l.b.div.withConfig({displayName:"CampsiteListItem__Address",componentId:"w00kd9-1"})(["margin-left:.5em;"]),F=l.b.div.withConfig({displayName:"CampsiteListItem__Contact",componentId:"w00kd9-2"})(["p{position:relative;padding-left:2em;}svg{width:20px;height:20px;color:#476c85;position:absolute;top:0;left:0;}a{display:block;margin-top:1em;}"]),S=l.b.ul.withConfig({displayName:"CampsiteListItem__FeatureList",componentId:"w00kd9-3"})(['grid-column:1/-1;list-style:none;padding-left:0;position:relative;margin-top:3em;&::before{content:" ";display:inline-block;position:absolute;width:90%;height:5px;left:5%;top:-25px;transition:all .2s ease;border-radius:5px;box-shadow:0.5px 0.5px 2px 0px rgba(0,0,0,0.4),-1.25px -1.25px 2px 0px rgba(255,255,255,0.5);}']);function _(e){var t=e.campsites;return Object(a.jsx)(I,{children:t.map((function(e){return Object(a.jsx)(y,{campsite:e},e.id)}))})}var I=l.b.div.withConfig({displayName:"CampsiteList__CampList",componentId:"nwxjwm-0"})(["margin-bottom:5em;"]);function L(e){var t=e.children;return Object(a.jsx)(B,{children:Object(a.jsx)("h1",{children:t})})}var B=l.b.div.withConfig({displayName:"Header__HeaderStyled",componentId:"sc-1i4lzpb-0"})(["width:80%;margin:1em auto 2em;padding:.25em .5em;border-radius:20px;text-align:center;box-shadow:2px 4px 8px -4px rgba(0,0,0,0.6),-2px -2px 2px 0px rgba(255,255,255,0.5);"]),T=n(33),z=Object(i.createContext)();function P(){return Object(i.useContext)(z)}function M(){var e=P(),t=e.deleteTokens,n=e.setAuthTokens,i=e.authTokens;return Object(a.jsx)(A,{children:Object(a.jsxs)(D,{children:[Object(a.jsx)(E,{children:Object(a.jsx)(c.b,{to:"/find-campsite",children:Object(a.jsx)(f.b,{})})}),Object(a.jsx)(E,{children:Object(a.jsx)(c.b,{to:"/bookmarks",children:Object(a.jsx)(f.a,{})})}),Object(a.jsx)(E,{children:Object(a.jsx)("button",{onClick:function(e){e.preventDefault();var a=i;n(),t(a)},children:Object(a.jsx)(T.a,{})})})]})})}var A=l.b.nav.withConfig({displayName:"Navigation__Navbar",componentId:"pcx57h-0"})(["width:100vw;background-color:#c2d6d3;border-top:1px solid grey;position:fixed;bottom:0;left:0;"]),D=l.b.ul.withConfig({displayName:"Navigation__NavList",componentId:"pcx57h-1"})(["padding-left:0;list-style-type:none;display:flex;justify-content:space-around;"]),E=l.b.li.withConfig({displayName:"Navigation__NavListItem",componentId:"pcx57h-2"})(["width:20%;text-align:center;button{background-color:#c2d6d3;border:none;}a svg,button svg{width:2em;height:2em;stroke:#c97f63;}"]);function H(e){var t=e.headline,n=e.campsites;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(L,{children:t}),Object(a.jsx)(_,{campsites:n}),Object(a.jsx)(M,{})]})}var W=n(27),R=n(10);function Z(e){var t=e.feature,n=e.filter,i=e.setFilter;return Object(a.jsxs)(q,{children:[Object(a.jsx)("input",{id:t.dbName,type:"checkbox",defaultChecked:t.isFeature,onChange:function(e){var t=n.features.findIndex((function(t){return t.dbName===e.target.id})),a=n.features[t];i(Object(R.a)(Object(R.a)({},n),{},{features:[].concat(Object(W.a)(n.features.slice(0,t)),[Object(R.a)(Object(R.a)({},a),{},{isFeature:!a.isFeature})],Object(W.a)(n.features.slice(t+1)))}))}}),Object(a.jsx)("label",{htmlFor:t.dbName,children:Object(a.jsx)("p",{children:t.name})})]},t.id)}var q=l.b.div.withConfig({displayName:"FilterCampsiteCheckbox__Feature",componentId:"sc-16kcsos-0"})(['position:relative;height:2.5em;input[type="checkbox"]{opacity:0;position:absolute;visibility:hidden;}p{margin:0;padding-left:2em;}p::before{content:" ";display:inline-block;position:absolute;width:20px;height:20px;left:0;top:0;-webkit-transition:all .2s ease;transition:all .2s ease;border-radius:5px;background-color:#d8e6e4;box-shadow:inset 4px 4px 6px 0 rgba(0,0,0,0.2),inset -3px -4px 6px 0 rgba(255,255,255,0.3);}p::after{content:" ";width:10px;height:10px;top:6px;position:absolute;opacity:0;background-color:#c97f63;font-weight:900;border-radius:2px;display:inline-block;left:6px;}input[type="checkbox"]:checked+label>p::after{opacity:1;}input[type="checkbox"]:checked+label>p::before{box-shadow:inset 5px 5px 3px -3px rgba(0,0,0,0.2),inset -3px -4px 6px 0 rgba(255,255,255,.9);}']);function J(e){var t=e.children,n=e.onClick;return Object(a.jsx)(K,{onClick:n,children:t})}var K=l.b.button.withConfig({displayName:"Button__ButtonStyled",componentId:"sc-1b627y-0"})(["padding:1em 2em;font-family:'Arvo';border-radius:10px;width:auto;border:none;background:#c2d6d3;box-shadow:2px 4px 8px -4px rgba(0,0,0,0.6),-2px -2px 2px 0px rgba(255,255,255,0.5);color:#476c85;text-transform:uppercase;margin:3em auto;&:hover{background:linear-gradient(145deg,#A2B2B0,#E2FAF6);box-shadow:2px 4px 8px -4px rgba(0,0,0,0.6),-2px -2px 2px 0px rgba(255,255,255,0.5);outline:none;}"]);function V(e){var t=e.type,n=e.name,i=e.value,r=e.onChange,o=e.placeholder;return Object(a.jsx)(G,{children:Object(a.jsx)("input",{type:t,name:n,value:i,onChange:r,placeholder:o})})}var G=l.b.label.withConfig({displayName:"InputField__Label",componentId:"prd5g3-0"})(["grid-column:1 / -1;width:100%;text-align:center;margin:0 auto 2em;input{width:100%;padding:1.5em;border:none;border-radius:10px;color:#6b717e;background-color:#d8e6e4;box-shadow:inset 4px 4px 6px 0 rgba(0,0,0,0.2),inset -3px -4px 6px 0 rgba(255,255,255,0.3);height:3em;}input:focus{outline:none;box-shadow:inset 4px 4px 6px 0 rgba(0,0,0,0.2),inset -3px -4px 6px 0 rgba(255,255,255,0.3),0 0 0px 1.7px #d3a392;}"]),U=n(20);function Q(e){var t=Object(i.useState)(e),n=Object(x.a)(t,2),a=n[0],r=n[1],o=Object(d.g)();return{fields:a,handleChange:function(e){r(Object(R.a)(Object(R.a)({},a),{},Object(U.a)({},e.target.name,e.target.value)))},handleClick:function(e){e.preventDefault(),o.push("/")},setValues:r}}function X(e){var t=e.getCampsites,n={name:"Postleitzahl/Ort",dbName:"postalCode",postalCode:"",features:[{id:1,name:"kein W-Lan",dbName:"wlan",isFeature:!1},{id:2,name:"keine Bar/Diskothek",dbName:"music",isFeature:!1},{id:3,name:"keine Animation",dbName:"animation",isFeature:!1},{id:4,name:"Lagerfeuerstelle",dbName:"fire",isFeature:!1},{id:5,name:"Kies- oder Sandwege",dbName:"path",isFeature:!1},{id:6,name:"Bulli-Wiese",dbName:"bulli",isFeature:!1},{id:7,name:"Zeltbereiche",dbName:"tents",isFeature:!1},{id:8,name:"keine Parzellierung",dbName:"subdevision",isFeature:!1},{id:9,name:"wenig/keine Dauercamper",dbName:"permanent",isFeature:!1},{id:10,name:"mind. 80qm Standfl\xe4che",dbName:"size",isFeature:!1},{id:11,name:"Bio/Regionale Lebensmittel",dbName:"bio",isFeature:!1},{id:12,name:"Imbiss",dbName:"snack",isFeature:!1},{id:13,name:"Hunde erlaubt",dbName:"animals",isFeature:!1},{id:14,name:"Zugang zum See/Meer",dbName:"seaside",isFeature:!1},{id:15,name:"Badestelle f\xfcr Kinder",dbName:"bathing",isFeature:!1},{id:16,name:"mit Wald",dbName:"forest",isFeature:!1}]},i=Q(n),r=i.fields,o=i.setValues,s=i.handleChange,c=Object(d.g)();return Object(a.jsxs)(Y,{onSubmit:function(e){e.preventDefault(),t(r),c.push("/campsites")},children:[Object(a.jsx)(V,{type:"text",name:"postalCode",value:r.postalCode,onChange:s,placeholder:n.name}),Object(a.jsx)($,{children:n.features.map((function(e){return Object(a.jsx)(Z,{feature:e,filter:r,setFilter:o},e.id)}))}),Object(a.jsx)(J,{children:"Campingpl\xe4tze finden"})]})}var Y=l.b.form.withConfig({displayName:"FilterCampsiteForm__FilterCampsite",componentId:"sc-1gro8oo-0"})(["max-width:500px;display:grid;margin:2em 2em 5em 2em;"]),$=l.b.div.withConfig({displayName:"FilterCampsiteForm__Checkboxes",componentId:"sc-1gro8oo-1"})(["padding:0 1em;display:grid;gap:1em 1em;grid-template-columns:1fr 1fr;"]);function ee(e){var t=e.getCampsites;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(L,{children:"Was Du willst"}),Object(a.jsx)(X,{getCampsites:t}),Object(a.jsx)(M,{})]})}function te(e){var t=O("tokens").value;return g(e,"POST",{Authorization:"Bearer ".concat(t),"Content-Type":"application/json"},"".concat("https://backend.moskito.uber.space","/campsite-filter"))}O("tokens");function ne(){var e=Object(i.useState)([]),t=Object(x.a)(e,2),n=t[0],a=t[1],r=Object(i.useState)([]),o=Object(x.a)(r,2),s=o[0],c=o[1];return{campsites:n,bookmarks:s,getCampsites:function(e){te(function(e){return e.features.filter((function(e){return e.isFeature}))}(e)).then((function(e){return a(e)})).catch((function(e){console.log("error",e)}))},setBookmarks:function(){k().then((function(e){c(e),console.log(e)})).catch((function(e){return console.log("error",e)}))}}}function ae(e){var t=e.headline,n=ne(),r=n.bookmarks,o=n.setBookmarks;return Object(i.useEffect)((function(){o()}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(L,{children:t}),Object(a.jsx)(_,{campsites:r}),Object(a.jsx)(M,{})]})}function ie(e){var t=e.children;return Object(a.jsx)(re,{children:t})}var re=l.b.h1.withConfig({displayName:"FrontHeadline__HeadlineStyled",componentId:"gtyoh2-0"})(["font-family:'Hind Madurai';font-size:1.5em;text-align:center;margin-top:1em;"]),oe=n(12),se=n.n(oe),ce=n.p+"static/media/moskitoLogo.8f73289d.svg";function de(e){var t=e.inputMargin;return Object(a.jsx)(le,{inputMargin:t,children:Object(a.jsx)(pe,{src:ce,alt:"Moskito Logo"})})}de.protoTypes={inputMargin:se.a.string};var le=l.b.div.withConfig({displayName:"Logo__LogoStyled",componentId:"sc-11aqx9j-0"})(["margin-top:",";text-align:center;"],(function(e){return e.inputMargin||"9em"})),pe=l.b.img.withConfig({displayName:"Logo__LogoImage",componentId:"sc-11aqx9j-1"})(["box-shadow:inset 4px 4px 6px 0 rgba(0,0,0,0.2),inset -3px -4px 6px 0 rgba(255,255,255,0.3);border-radius:20px;padding:1em 2em;width:85%;"]);function ue(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(de,{}),Object(a.jsx)(ie,{children:"Camping back to the roots"}),Object(a.jsxs)(me,{children:[Object(a.jsxs)(c.b,{to:"/login",children:[Object(a.jsx)(J,{children:"Login "})," "]}),Object(a.jsx)(c.b,{to:"/signin",children:Object(a.jsx)(J,{children:"SignIn "})})]})]})}var me=l.b.div.withConfig({displayName:"Landing__UserButtons",componentId:"sc-125629q-0"})(["display:grid;justify-items:center;margin-top:4em;Button{margin:.5em;width:10em;}"]);function be(e){var t=e.text1,n=e.text2,i=e.onClick;e.disabled;return Object(a.jsxs)(he,{children:[Object(a.jsx)(J,{children:t}),Object(a.jsx)(J,{type:"button",onClick:i,children:n})]})}var he=l.b.div.withConfig({displayName:"ButtonBackGroup__Buttons",componentId:"yrfass-0"})(["display:grid;justify-items:center;Button{margin:.5em;width:10em;}"]);function je(){var e=Q({email:"",password:""}),t=e.fields,n=e.handleChange,r=e.handleClick,o=Object(i.useState)(!1),s=Object(x.a)(o,2),c=s[0],l=s[1],p=Object(i.useState)(!1),u=Object(x.a)(p,2),m=u[0],b=u[1],h=P(),j=h.setAuthTokens,f=h.getToken;return c?Object(a.jsx)(d.a,{to:"/find-campsite"}):Object(a.jsxs)(xe,{onSubmit:function(e){e.preventDefault(),f(t).then((function(e){e.validUntil?(j(e),l(!0)):b(!0)})).catch((function(e){return b(!0)}))},children:[m&&Object(a.jsx)("p",{children:"E-Mail oder Password-Eingabe nicht korrekt!"}),Object(a.jsx)(V,{type:"text",name:"email",value:t.email,onChange:n,placeholder:"E-Mail"}),Object(a.jsx)(V,{type:"password",name:"password",value:t.password,onChange:n,placeholder:"Password"}),Object(a.jsx)(be,{text1:"Login",text2:"Zur\xfcck",onClick:r})]})}var xe=l.b.form.withConfig({displayName:"LoginForm__LoginFormStyled",componentId:"sc-1jo0o9n-0"})(["max-width:500px;display:grid;margin:2em;"]);function fe(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(de,{}),Object(a.jsx)(ie,{children:"Login"}),Object(a.jsx)(je,{})]})}var ge=n(18),Oe=n.n(ge),ke=n(26);function ve(){var e=O("tokens"),t=Object(i.useState)(e),n=Object(x.a)(t,2),a=n[0],r=n[1],o="https://backend.moskito.uber.space",s=new Headers;s.append("Content-Type","application/json");return{authTokens:a,setAuthTokens:r,setTokens:function(e){!function(e,t){localStorage.setItem(e,JSON.stringify(t))}("tokens",e),r(e)},deleteTokens:function(){var e=Object(ke.a)(Oe.a.mark((function e(t){return Oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.removeItem("tokens"),e.abrupt("return",g(t,"DELETE",s,"".concat(o,"/logout")));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getToken:function(){var e=Object(ke.a)(Oe.a.mark((function e(t){return Oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",g(t,"POST",s,"".concat(o,"/login")));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}var we=n(35);function ye(e){var t=e.component,n=Object(we.a)(e,["component"]),i=P().authTokens;return Object(a.jsx)(d.b,Object(R.a)(Object(R.a)({},n),{},{render:function(e){return i?Object(a.jsx)(t,Object(R.a)({},e)):Object(a.jsx)(d.a,{to:"/login"})}}))}var Ce=function(e){var t=e.children,n=e.waitBeforeShow,a=void 0===n?500:n,r=Object(i.useState)(!1),o=Object(x.a)(r,2),s=o[0],c=o[1];return Object(i.useEffect)((function(){setTimeout((function(){c(!0)}),a)}),[a]),s?t:null};function Ne(){var e=Q({firstName:"",lastName:"",email:"",password:"",passwordControl:""}),t=e.fields,n=e.handleChange,r=e.handleClick,o=Object(i.useState)(!0),s=Object(x.a)(o,2),c=s[0],l=s[1],p=Object(i.useState)(!1),u=Object(x.a)(p,2),m=u[0],b=u[1],h=Object(i.useState)(),j=Object(x.a)(h,2),f=j[0],O=j[1];return Object(i.useEffect)((function(){l(t.password===t.passwordControl)}),[t]),Object(a.jsxs)(Fe,{onSubmit:function(e){e.preventDefault(),c&&(n=t,g(n,"POST",{"Content-Type":"application/json"},"".concat("https://backend.moskito.uber.space","/register"))).then((function(e){e.errors?O(e.errors):b(!0)})).catch((function(e){return console.log("error",e)}));var n},children:[m&&Object(a.jsxs)(Se,{children:["Registrierung ergolgreich, Du wirst zum Login weitergeleitet.",Object(a.jsx)(Ce,{waitBeforeShow:2500,children:Object(a.jsx)(d.a,{to:"/login"})})]}),f&&f.map((function(e,t){return Object(a.jsx)(Se,{children:e},t)})),Object(a.jsx)(V,{type:"text",name:"firstName",value:t.firstName,onChange:n,placeholder:"Vorname"}),Object(a.jsx)(V,{type:"text",name:"lastName",value:t.lastName,onChange:n,placeholder:"Nachname"}),Object(a.jsx)(V,{type:"text",name:"email",value:t.email,onChange:n,placeholder:"E-Mail"}),!c&&Object(a.jsx)(Se,{children:"Die Passw\xf6rter stimmen nicht \xfcberein!"}),Object(a.jsx)(V,{type:"password",name:"password",value:t.password,onChange:n,placeholder:"Password"}),Object(a.jsx)(V,{type:"password",name:"passwordControl",value:t.passwordControl,onChange:n,placeholder:"Password"}),Object(a.jsx)(be,{text1:"SignIn",text2:"Zur\xfcck",onClick:r})]})}var Fe=l.b.form.withConfig({displayName:"SignInForm__SigninFormStyled",componentId:"sc-1590gah-0"})(["max-width:500px;display:grid;margin:2em;"]),Se=l.b.p.withConfig({displayName:"SignInForm__RedParagraph",componentId:"sc-1590gah-1"})(["color:#c97f63;"]);function _e(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(de,{inputMargin:"1.5em"}),Object(a.jsx)(ie,{children:"Sign In"}),Object(a.jsx)(Ne,{})]})}function Ie(){var e=ne(),t=e.campsites,n=e.getCampsites,i=ve(),r=i.authTokens,o=i.setTokens,s=i.deleteTokens,l=i.getToken;return Object(a.jsx)(z.Provider,{value:{authTokens:r,setAuthTokens:o,deleteTokens:s,getToken:l},children:Object(a.jsx)(c.a,{children:Object(a.jsxs)(d.d,{children:[Object(a.jsx)(d.b,{exact:!0,path:"/",children:Object(a.jsx)(ue,{})}),Object(a.jsx)(d.b,{path:"/login",children:Object(a.jsx)(fe,{})}),Object(a.jsx)(d.b,{path:"/signin",children:Object(a.jsx)(_e,{})}),Object(a.jsx)(ye,{path:"/find-campsite",component:function(){return Object(a.jsx)(ee,{getCampsites:n})}}),Object(a.jsx)(ye,{path:"/campsites",component:function(){return Object(a.jsx)(H,{headline:"DeineSuche",campsites:t})}}),Object(a.jsx)(ye,{path:"/bookmarks",component:function(){return Object(a.jsx)(ae,{headline:"Bookmarks"})}})]})})})}var Le=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),i(e),r(e),o(e)}))},Be=n(34),Te=n.p+"static/media/arvoBold.01f011cc.woff",ze=n.p+"static/media/arvoBold2.891ffc5d.woff2",Pe=n.p+"static/media/hindMaduraiRegular.88397b1b.woff",Me=n.p+"static/media/hindMaduraiRegular2.464f2397.woff2";function Ae(){var e=Object(Be.a)(["\n\n\n    @font-face {\n        font-family: 'Arvo';\n        src: local(''),\n        url(",") format('woff2'),\n        url(",") format('woff');\n        font-weight: 700;\n        font-style: normal;\n    }\n\n    @font-face {\n        font-family: 'Hind Madurai';\n        src: local(''),\n        url(",") format('woff2'),\n        url(",") format('woff');\n        font-weight: 400;\n        font-style: normal;\n    } \n\n    * {\n        box-sizing: border-box;\n    }   \n\n    body {\n        margin: 0 auto;\n        padding: 0;\n        font-family: 'Hind Madurai';\n        font-size: 16px;\n        color: #6b717e;\n        background-color: #c2d6d3;\n        max-width: 500px;\n        \n    }\n\n    h1, h2, h3, h4, h5, h6 {\n        font-family: 'Arvo';\n        color: #476c85;\n    }\n\n    h1 {\n        font-size: 1.7em;\n    }\n\n    h2 {\n        font-size: 1.4em;\n    }\n\n    a {\n        color: #c97f63;\n        text-decoration: none;\n    }\n\n    a:hover {\n        color: #d3a392;\n    }\n"]);return Ae=function(){return e},e}var De=Object(l.a)(Ae(),ze,Te,Me,Pe);s.a.render(Object(a.jsxs)(r.a.StrictMode,{children:[Object(a.jsx)(De,{}),Object(a.jsx)(Ie,{})]}),document.getElementById("root")),Le()}},[[48,1,2]]]);
//# sourceMappingURL=main.2a33471f.chunk.js.map