(self.webpackChunkreact_modele=self.webpackChunkreact_modele||[]).push([[179],{8736:(e,n,t)=>{"use strict";var a=t(7294),r=t(3727),c=t(3935),o=t(4494),s=t(8676),l=t(9669),i=t.n(l),u=(t(8309),"Le composant Channel est chargé, requête à l'API"),m="L'API a renvoyé les infos du channel",h="L'API renvoie une erreur",p="Changement dans l'input du form de la page Channel",d="L'utilisateur valide le formulaire dans son channel",f="On reçoit un nouveau message",g="Click on search button, displays search input",v="Show or hide nav menu",E="Fetch data to hydrate search and select in Navbar",b="FETCH_NAV_DATA_SUCCESS",y="FETCH_NAV_DATA_ERROR",O="SEARCH_NAV_CHANGE",w="SET_NAV_SEARCH_RESULT";var _;t(9070),t(7941),t(2526),t(7327),t(5003),t(9554),t(4747),t(9337),t(3321);function S(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function j(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?S(Object(t),!0).forEach((function(n){k(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):S(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function k(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var C={appRoutes:[{slug:"/",name:"Accueil"},{slug:"/login",name:"Connexion"},{slug:"/signup",name:"Créer un compte"},{slug:"/home",name:"Home"},{slug:"/profile",name:"Mes paramètres"},{slug:"/discovery",name:"Découverte"},{slug:"/channels/1",name:"Channel test"}],tags:[{id:"af",name:"Films d'horreur"},{id:"ax",name:"Cuisine"},{id:"al",name:"Mangas"},{id:"dz",name:"Jeux video"},{id:"as",name:"Sports d'hiver"}],channels:[{id:56,title:"un channel anglais",keywords:["napoleon","british"],tags:["Les poissons rouges"]},{id:57,title:"Baxter dury",keywords:["rap","british","classe","voix"],tags:["Le chocolat"]},{id:58,title:"Justice",keywords:["techno","french","touch"],tags:["Les poissons rouges","La littérature anglaise du 16ème siècle"]}],isShowLoginButton:!1,isShowSearch:!0,isShowMenu:!1,isSearchLoading:!1,searchedValue:"",searchResult:{}};const N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case g:return j(j({},e),{},{isShowSearch:!e.isShowSearch});case v:return j(j({},e),{},{isShowMenu:!e.isShowMenu});case b:return j(j({},e),{},{tags:n.data.tags});case y:return j(j({},e),{},{tags:[{id:"error",name:"Oups, ça n'a pas fonctionné..."}]});case O:return j(j({},e),{},{searchedValue:n.value});case w:return console.log(n.list),j(j({},e),{},{searchResult:n.list});default:return j({},e)}};t(2222),t(9753),t(1817),t(1539),t(2165),t(6992),t(8783),t(3948),t(1038),t(7042);function P(e){return function(e){if(Array.isArray(e))return L(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return L(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return L(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}function A(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function D(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?A(Object(t),!0).forEach((function(n){F(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):A(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function F(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var R={id:5246,title:"Le channel de test",messages:[{id:1,nickname:"Bernard",content:"Tu la connais celle des deux poissons rouge dans un bocal ?"},{id:2,nickname:"Bianca",content:"Non, raconte !"},{id:3,nickname:"Belle",content:"Moi je la connais"},{id:4,nickname:"Sébastien",content:"Ouais, ben ils sont en train de tourner et puis d'un seul coup, y'en a un qui dit à l'autre \"J'arrive pas à croire qu'on est déjà jeudi\""}],users:[{id:1,nickname:"Bernard",avatar:"(_;_)",isConnected:!0},{id:2,nickname:"Bianca",avatar:";o)",isConnected:!0},{id:3,nickname:"Belle",avatar:":-/",isConnected:!1},{id:4,nickname:"Sébastien",avatar:"o.0",isConnected:!1}],inputForm:"Je suis le contenu du formulaire",isLoading:!1,error:!1};const I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case u:return console.log(n),D(D({},e),{},{isLoading:!0});case m:return console.log(n),D(D(D({},e),n.channel),{},{isLoading:!1});case h:return console.log(n),D(D({},e),{},{isLoading:!1,error:!0});case p:return console.log(n),D(D({},e),{},F({},n.name,n.value));case d:return console.log(n),D(D({},e),{},{inputForm:""});case f:return console.log(n),D(D({},e),{},{messages:[].concat(P(e.messages),[{id:n.message.id,nickname:"Bernard",content:n.message.content}])});default:return D({},e)}};function M(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function V(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?M(Object(t),!0).forEach((function(n){B(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):M(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function B(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var T={password:"bob",email:"jefume@despieds.fr",token:"3568dgfbh854dwqfb4wdfb"};const U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n.type,V({},e)};function x(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function W(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?x(Object(t),!0).forEach((function(n){H(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function H(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var Z={id:124,nickname:"Bob",loggued:!0,myChannelLinks:[{id:1,slug:"filmsdhorreur",name:"Films d'horreur"},{id:2,slug:"cuisine",name:"Cuisine méditéranéenne"}],myTags:[{id:1,name:"Films"},{id:2,name:"Cuisine"},{id:3,name:"Karaté"}]};const q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n.type,W({},e)};const J=(0,s.UY)({app:N,channel:I,auth:U,user:q});var z=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.qC)((0,s.md)((function(e){return function(n){return function(t){switch(t.type){case m:n(t),console.log(t);(_=window.io("http://localhost:8000")).emit("auth",{user:{id:5,nickname:"bob"},channel:{id:1}}),_.on("message",(function(n){console.log("message reçu dans socketMW ",n);var t=function(e){return{type:f,message:e}}(n);e.dispatch(t)}));break;case d:console.log(t);var a=e.getState(),r=a.channel,c=a.user,o={channel:{id:r.id},user:{id:c.id,nickname:c.nickname},content:r.inputForm};console.log("msg dans socketMW",o),_.emit("message",o),n(t);break;default:n(t)}}}}),(function(e){return function(n){return function(t){switch(t.type){case u:console.log(t),n(t),i()({url:"".concat("http://localhost:8000","/v1/channel/1"),method:"GET"}).then((function(n){var t;console.log("res.data :",n.data),e.dispatch((t=n.data,{type:m,channel:t}))})).catch((function(n){console.log("catch error: ",n),e.dispatch({type:h})}));break;case E:break;default:n(t)}}}})));const $=(0,s.MT)(J,z);var G=t(5977);t(1249);const K=function(e){var n=e.myChannelLinks;return a.createElement("section",{className:"mychannels"},a.createElement("h1",{className:"mychannels__title"},"Mes Channels"),n.map((function(e){return a.createElement(r.rU,{key:e.id,to:"/channels/".concat(e.slug)},e.name)})))};const X=function(e){var n=e.users;return a.createElement("section",{className:"usersinchannellist"},a.createElement("h1",{className:"usersinchannellist__title"},"En ligne"),n.map((function(e){return a.createElement("div",{key:e.id,className:"usersinchannellist__user"},a.createElement("span",null,"".concat(e.nickname)))})))};const Y=function(e){var n=e.messages,t=e.title,r=(0,a.useRef)(null);return(0,a.useEffect)((function(){r.current.scrollTo({top:r.current.scrollHeight,left:0,behavior:"smooth"})})),a.createElement("section",{className:"channelmessages"},a.createElement("h1",{className:"channelmessages__title"},t),a.createElement("div",{className:"channelmessages__messagelist",ref:r},n.map((function(e){return a.createElement("div",{key:e.id,className:"channelmessages__message"},a.createElement("span",null,"".concat(e.nickname))," : ",a.createElement("span",null,"".concat(e.content)))}))))};var Q=t(5573),ee=t(8237);const ne=function(e){var n=e.setInputValue,t=e.inputValue,r=e.channelFormSubmit;return a.createElement("section",{className:"channelForm"},a.createElement(Q.Z,{onSubmit:function(e){e.preventDefault(),console.log("submit"),r()}},a.createElement("div",{className:"channelForm__row"},a.createElement(Q.Z.Field,null,a.createElement("input",{name:"inputForm",placeholder:"Saisir un message",value:t,onChange:function(e){n({name:"inputForm",value:e.target.value})}})),a.createElement(ee.Z,{type:"submit"},a.createElement("i",{className:"fas fa-paper-plane"})))))};t(6699),t(2023);const te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{name:""},t=n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}));return t};var ae=t(3234),re=t(1581);const ce=function(e){var n=e.links;return a.createElement("section",{className:"nav__menu"},n.map((function(e){return a.createElement(r.OL,{key:e.name,to:e.slug,className:"nav__menu__link"},e.name)})))};const oe=function(e){var n=e.tags,t=(e.channels,e.isShowLoginButton),c=e.isShowSearch,o=e.isSearchLoading,s=e.isShowMenu,l=e.links,i=e.searchedValue,u=e.searchResult,m=e.toggleSearch,h=e.toggleMenu,p=e.fetchData,d=e.searchChange,f=e.setSearchResult;(0,a.useEffect)((function(){p()}),[]);var g=n.map((function(e){return{key:e.id,value:e.name,text:e.name}}));return a.createElement("section",{className:"nav"},a.createElement("div",{className:"nav__logo"}),t&&a.createElement(r.rU,{to:"/login",className:"nav__loginButton"},"S'incrire / Se connecter"),!t&&a.createElement("div",{className:"nav__button__row"},c&&a.createElement("div",{className:"nav__search__container"},a.createElement(ae.Z,{category:!0,loading:o,onResultSelect:function(){},onSearchChange:function(e){d(e.target.value);var t=te(e.target.value,n).map((function(e){return{title:e.name}}));f({channels:{name:"Salons",results:[{title:"Baxter dury"},{title:"Justice"}]},tags:{name:"Catégories",results:t}})},results:u,value:i}),a.createElement(re.Z,{placeholder:"Catégories",options:g})),a.createElement("button",{className:"nav__search__button",onClick:m},a.createElement("i",{className:"fas fa-search"})),a.createElement("button",{className:"nav__hamburger",onClick:h},a.createElement("i",{className:"fas fa-bars"}))),s&&a.createElement(ce,{links:l}))};const se=(0,o.$j)((function(e){var n=e.app;return{tags:n.tags,channels:n.channels,isShowLoginButton:n.isShowLoginButton,isShowSearch:n.isShowSearch,isShowMenu:n.isShowMenu,links:n.appRoutes,isSearchLoading:n.isSearchLoading,searchedValue:n.searchedValue,searchResult:n.searchResult}}),(function(e){return{fetchData:function(){e({type:E})},toggleSearch:function(){e({type:g})},toggleMenu:function(){e({type:v})},searchChange:function(n){e(function(e){return{type:O,value:e}}(n))},setSearchResult:function(n){e(function(e){return{type:w,list:e}}(n))}}}))(oe);const le=function(){return a.createElement("section",{className:"footer"},a.createElement(r.rU,{to:"/terms"},"Conditions d'utilisation"),a.createElement(r.rU,{to:"/privacy"},"Confidentialité"),a.createElement(r.rU,{to:"/about"},"A propos de TeaCup"),a.createElement(r.rU,{to:"/contact"},"Contact"))};var ie=t(5766),ue=t(1463),me=t(849);const he=function(){return a.createElement("div",null,a.createElement(ie.Z,null,a.createElement(ue.Z,{active:!0},a.createElement(me.Z,{active:!0,size:"massive"},"Loading"))))};const pe=function(){return a.createElement("section",{className:"error"},a.createElement("h1",{className:"error__title"},"Ça marche paaaas !!!"))};const de=function(e){var n=e.channel,t=e.user,r=e.setInputValue,c=e.fetchChannel,o=e.channelFormSubmit;return(0,a.useEffect)((function(){c(n.id)}),[]),n.isLoading?a.createElement("section",{className:"channels"},a.createElement(se,null),a.createElement("div",{className:"channels__row"},a.createElement(he,null)),a.createElement(le,null)):n.error?a.createElement("section",{className:"channels"},a.createElement(se,null),a.createElement("div",{className:"channels__row"},a.createElement(pe,null)),a.createElement(le,null)):a.createElement("section",{className:"channels"},a.createElement(se,null),a.createElement("div",{className:"channels__row"},a.createElement(K,{myChannelLinks:t.myChannelLinks}),a.createElement("div",{className:"channel__container"},a.createElement(Y,{title:n.title,messages:n.messages}),a.createElement(ne,{setInputValue:r,inputValue:n.inputForm,channelFormSubmit:o})),a.createElement(X,{users:n.users})),a.createElement(le,null))};const fe=(0,o.$j)((function(e){return{channel:e.channel,user:e.user}}),(function(e){return{setInputValue:function(n){e(function(e){return{type:p,name:e.name,value:e.value}}(n))},fetchChannel:function(n){e(function(e){return{type:u,route:"channels/".concat(e)}}(n))},channelFormSubmit:function(){e({type:d})}}}))(de);const ge=function(){return a.createElement("h1",null,"Composant Landing")};const ve=function(e){e.text;return a.createElement("div",{className:"app"},a.createElement(G.rs,null,a.createElement(G.AW,{path:"/login"},a.createElement(se,null),a.createElement("h1",null,"Il n'y a pas encore de composant 'Login'")),a.createElement(G.AW,{path:"/signup"},a.createElement(se,null),a.createElement("h1",null,"Il n'y a pas encore de composant 'Signup'")),a.createElement(G.AW,{path:"/home"},a.createElement(se,null),a.createElement("h1",null,"Il n'y a pas encore de composant 'Home'")),a.createElement(G.AW,{path:"/channels/:id"},a.createElement(fe,null)),a.createElement(G.AW,{path:"/profile"},a.createElement(se,null),a.createElement("h1",null,"Il n'y a pas encore de composant 'Profile'")),a.createElement(G.AW,{path:"/discovery"},a.createElement(se,null),a.createElement("h1",null,"Il n'y a pas encore de composant 'Discovery'")),a.createElement(G.AW,{path:"/error"},a.createElement(se,null),a.createElement(pe,null)),a.createElement(G.AW,{path:"/",exact:!0},a.createElement(se,null),a.createElement(ge,null)),a.createElement(G.l_,{to:"/error"})))};var Ee=a.createElement(o.zt,{store:$},a.createElement(r.VK,null,a.createElement(ve,null))),be=document.getElementById("root");(0,c.render)(Ee,be)},9193:()=>{}},e=>{"use strict";var n=n=>e(e.s=n);e.O(0,[404],(()=>(n(9193),n(8736))));e.O()}]);