(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{161:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAABrVBMVEVHcEyZZpmNbaD/AP+NbJ+NbZ+Kbp+NbJ+NbZ+AgKqObJ+NbJ6NbJ+NbJ+NbJ+LbaCQcKGQcqSQcaOZZpmAgICYg6+NbJ+MbJ+Oa6CRcKGObqCNbaCOb6GOaKGPcKOJbZuObKCNbJ+Kap+MbaCNbJ+NbKCNbZ+MbZ+NbJ+NbZ+VapWqVaqObJ+ObZ+OcZyMbKCNbKCMbKCZeKGNbKCNbJ+NbJ/CzefO2e2st9D5467qzZjI0+rEz+iUfqvN2O3k6vSag7DV3u/M1+2chrKZgrDi6POchLHa4/Hfx6rS2+7j6fTDzufv1aCZg7D44azDzujU3O3e5PKXdp7P2u2bhbGzvtelpcSUfKqorsr54q7exqrq06yig6Hsz5rU3O7a4vHS3e/T3O3X4PDV3e7X3/DrzpmahLDny5jrzpq5mZzR3O62t9a4mpyst8++yuSuudGtuNHAy+WtudGuuNG9vdqjosKhnb+PcaKlp8Wqss2QdKSnq8mSeaiWhK6Xg66psMuTfamsttCPcKKqtM2pi6Ogm76niKO1maWVdKDmz6uObp/hyaqjhKL03a3ZwKq6p+DbAAAANXRSTlMABW4BwLwl5YgGh4nm6dRLqFz1CgK9wc8rff3J/Rv+HOTiGFvu2496+soMAy3+ErvTdvzz8XV3z8kAAAJrSURBVFjD7ZdVe9swFEBTtDNmZma+kWGZnSVNU9hKK60dMzNTx7zfPFlzHNvylSVvD3vofZBBOueTLFnfVS43Hf9F5GfOAqXQ9HxEoINy6BGBBjcK4rAJIXb9hpCHoEUEAGr8kcMASgKOLygIek4n8AqCnnNOF88rCC44Tvd5jrcVhtDVfZbnibzAJhcTeHlBwvdjt7ICjJcVoLykAOdxQYX/bdyCXfWu5RCPC1xecMwmZe96OcTLDEHQfymBmE8XpPAktjNxgjSexHYm4Sz8mYkoTwWWZZlmzd+ZhLPAZsLjzzR42xeY/reIDiHW/6N+/0tOKeALIgHGdzgdpTovEiB8p+NFp8+jgv4+hA/1gNUign5nYAjhg2/AajFB38B1lKejaPCYwB4S8CTEIwJ0/ByfKKicoC1c11tNZXpX9f5/9q5arhestuIiAgC2wtimzxar/44Ehe2/SxLcG74PYBiGVHF3+DYneGAYxaIhXdzhBIZixAQajKjxIzAYEYRSnNFbrMXbYkqKcy0iyOtaUDPGBB/F+ODNK5Z1qSFoxAJ44fFj72BjsF9aSPQmCBatgGeUfz8KbS1pglPHEwTL4Anl30zB+g05seBqr8dzgmZ4ZRiPnsO69tCWbwoiLlgKj5++Bli5NpdNMBfgJcCq5U2RJLSG87VYwjmHztCaxauFafCHcQqOf6o/zog0bp09b/7CeCIeWiMsTlLBBJJ0S8QW+EwF32F71pNB+7bdtAtfYV/ms4UOBybMn98OtmQVNLXCl1/mJOzK3IUdewF+TMLW7AeknfsP0QnY/DdnrD3NbZuWTB81/2X8BlOCJK5wgIZZAAAAAElFTkSuQmCC"},169:function(e,t,a){"use strict";(function(e){var n=a(23),c=a(24),i=a(28),o=a(27),r=a(0),s=a.n(r),l=a(26),u=a(170),m=a(96),p=a.n(m),d=a(13),h=a.n(d),g=a(8),f=a(18),v=function(t){Object(i.a)(r,t);var a=Object(o.a)(r);function r(e){var t;return Object(n.a)(this,r),(t=a.call(this,e)).state={ignore:!1},t}return Object(c.a)(r,[{key:"componentDidMount",value:function(){var e=this;this.notifyMe(),setTimeout(function(){e.setState({ignore:!e.props.switch})},100),h()(window).blur(function(){e.setState({activeWindow:!1})}),h()(window).focus(function(){e.setState({activeWindow:!0})})}},{key:"componentWillReceiveProps",value:function(){var e=this;setTimeout(function(){var t=e.props.newMessage,a=localStorage.getItem("newMes");t===a&&"undefined"!==a||(e.setState({newProp:t}),localStorage.setItem("newMes",t),!1===e.state.ignore&&e.notificationSend(t))},200),setTimeout(function(){void 0!==e.props.switch&&(e.setState({ignore:!e.props.switch}),!0===e.props.switch&&("denied"!==Notification.permission&&"default"!==Notification.permission||e.notifyMe()))},200)}},{key:"showSmile",value:function(e){if(e.match(/:\w+:/gm)){var t="",a="",n=[];return Object(f.a)(e).map(function(e,n){"object"===typeof e?a="./smiles/".concat(e[0],".png"):t+=e}),n.push(a),n.push(t),n}return e}},{key:"notificationSend",value:function(t){var a=this,n=this.showSmile(t)||"...",c=Date.now(),i="New message at Awesome Chat ".concat(c),o={tag:c,body:"Message: ".concat("object"===typeof n?n[1]:n),icon:"http://mobilusoss.github.io/react-web-notification/example/Notifications_button_24.png",lang:"en",dir:"ltr",sound:p.a,image:"object"===typeof n?n[0]:""};this.setState({title:i,options:o}),"Notification"in window&&"visible"!==document.visibilityState&&(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?Notification.requestPermission(function(t){"granted"===t&&navigator.serviceWorker.ready.then(function(e){e.showNotification(a.state.title,o)}).catch(function(t){return e.console.log(t)})}):(this.notification=new Notification(this.state.title,o),this.notification.onclick=function(e){e.preventDefault(),window.focus(),a.notification.close(),g.a.dispatch({type:"redirect",value:!0})},setTimeout(function(){a.notification.close()},2e3)),setTimeout(function(){a.playSound()},500))}},{key:"notifyMe",value:function(){u.a(),"Notification"in window?"granted"===Notification.permission||"default"===Notification.permission?Notification.requestPermission(function(t){"granted"===t&&navigator.serviceWorker.ready.then(function(e){e.showNotification("notification permissions have been granted")}).catch(function(t){return e.console.log(t)})}):"denied"===Notification.permission&&!0===this.props.switch&&(e.alert("You blocked notification request :( \n    If you want to receive notifications you should unblock it in the browser settings"),g.a.dispatch({type:"switch",value:!1})):e.alert("This browser does not support desktop notification")}},{key:"playSound",value:function(){"granted"===Notification.permission&&h()("#sound").trigger("play")}},{key:"render",value:function(){return s.a.createElement("audio",{id:"sound",preload:"auto"},s.a.createElement("source",{src:p.a,type:"audio/mpeg"}),s.a.createElement("embed",{hidden:!0,autostart:"false",loop:!1,src:p.a}))}}]),r}(r.Component);t.a=Object(l.b)(function(e){return{newMessage:e.newMessage,switch:e.switch}})(v)}).call(this,a(66))},170:function(e,t,a){"use strict";a.d(t,"a",function(){return c});var n=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function c(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");n?(!function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):i(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):i(t,e)})}}function i(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}},18:function(e,t,a){"use strict";a.d(t,"b",function(){return i}),a.d(t,"d",function(){return o}),a.d(t,"a",function(){return r}),a.d(t,"e",function(){return s}),a.d(t,"c",function(){return l});var n=a(13),c=a.n(n);function i(e){var t=new Date(e),a=t.getDate();a<10&&(a="0".concat(a));var n=t.getMonth()+1;n<10&&(n="0".concat(n));var c=t.getHours();c<10&&(c="0".concat(c));var i=t.getMinutes();return i<10&&(i="0".concat(i)),"".concat(c,":").concat(i," ").concat(a,"/").concat(n,"/").concat(t.getFullYear())}function o(e){return"./smiles/".concat(e,".png")}function r(e){for(var t=e,a=[];t.match(/:\w+:/gm);){var n=t.match(/:\w+:/gm)[0],c=t.split(n),i=n.split(":")[1];if(a.push(c[0]),a.push([i]),!c[1].match(/:\w+:/gm))return a.push(c[1]),a;t=c[1]}return a}function s(e){for(var t=e;-1!==t.indexOf("&nbsp;");){var a=t.replace("&nbsp;"," ");t=a}for(;-1!==t.indexOf("<br>");){var n=t.replace("<br>","").replace("</br>","");t=n}for(;-1!==t.indexOf("<span");){var c=t.replace('<span style="font-size: 1rem;">',"").replace("</span>","");t=c}for(;-1!==t.indexOf("./smiles/");){var i=t.replace("<img","").replace('height="32"',"").replace('width="32"',"").replace('src="./smiles/',":").replace('.png"',":").replace(">","");t=i}return t}function l(e){var t=new Image(32,32);t.src=o(e.unicode),c()("#inputChat").focus(),function(e){var t,a;if(window.getSelection){if((t=window.getSelection()).getRangeAt&&t.rangeCount){(a=t.getRangeAt(0)).deleteContents(),document.createElement("div").innerHTML=e;var n,c=document.createDocumentFragment();n=c.appendChild(e),a.insertNode(c),n&&((a=a.cloneRange()).setStartAfter(e),a.collapse(!0),t.removeAllRanges(),t.addRange(a))}}else document.selection&&"Control"!==document.selection.type&&document.selection.createRange().pasteHTML(e)}(t)}},184:function(e,t,a){e.exports=a(364)},192:function(e,t,a){},364:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(9),o=a.n(i),r=a(26),s=(a(192),a(23)),l=a(24),u=a(28),m=a(27),p=a(38),d=a(12),h=a(13),g=a.n(h),f=a(161),v=a.n(f),b=a(401),E=a(402),w=a(171),y=Object(w.a)({palette:{primary:{light:"#e7f2ff",main:"#b4bff1",dark:"#838fbe",contrastText:"#292733"},secondary:{light:"#524f5c",main:"#454153",dark:"#292733",contrastText:"#fce8c5"},golden:{light:"#ffffc5",main:"#fad694",dark:"#c6a565",contrastText:"#292733"},success:{light:"#e6ffe6",main:"#2ac92a",dark:"#288028"},fail:{light:"#fff7f5",main:"#f54922",dark:"#b53c21"}}});function N(e){return c.a.createElement(b.a,{theme:y},c.a.createElement(E.a,{variant:"contained",color:"secondary",style:{outline:"none"},onClick:e.showInputOnClick},"Log In"))}var k=a(59),O=a(64),C=a(61),j=a(5),S=a(405),A=a(411),I=a(406),M=Object(j.a)({root:{"& label.Mui-focused":{color:y.palette.primary.contrastText},"& .MuiInput-underline:after":{borderBottomColor:y.palette.secondary.dark},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:y.palette.primary.dark,color:y.palette.primary.contrastText},"&:hover fieldset":{borderColor:y.palette.secondary.dark},"&.Mui-focused fieldset":{borderColor:y.palette.secondary.dark}}}})(A.a),x=Object(S.a)(function(){return{root:{position:"absolute"},iconHover:{cursor:"pointer",position:"absolute",top:"31px",right:"5px",color:y.palette.primary.dark,"&:hover":{color:y.palette.secondary.light},"&:active":{color:y.palette.secondary.dark}}}});function H(e){var t,a=x(),n=c.a.useState({name:""}),i=Object(C.a)(n,2),o=i[0],r=i[1];return c.a.createElement("form",null,c.a.createElement(M,{id:"inputLogin",label:"Name",value:o.name,onChange:(t="name",function(e){r(Object(O.a)(Object(O.a)({},o),{},Object(k.a)({},t,e.target.value)))}),onKeyPress:function(t){13!==t.which&&13!==t.keyCode&&"enter"!==t.key||e.getInputLogin()},margin:"normal",variant:"outlined",style:{backgroundColor:y.palette.primary.light}}),c.a.createElement(I.a,{className:a.iconHover,onClick:e.getInputLogin},"send"))}var B=a(172),T=a(162),K=a.n(T),L=a(412),z=a(407),J=a(408),P=a(164),Z=a.n(P),D=a(165),W=a.n(D),G=a(163),q=a.n(G),R=a(8),F=Object(j.a)({paper:{border:"1px solid ".concat(y.palette.secondary.light),backgroundColor:y.palette.primary.light,color:y.palette.primary.contrastText}})(function(e){return c.a.createElement(B.a,Object.assign({elevation:0,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},e))}),V=Object(j.a)(function(){return{root:{"&:focus":{"& .MuiListItemIcon-root, & .MuiListItemText-primary":{color:y.palette.primary.contrastText}}}}})(L.a);function U(e){var t=c.a.useState(null),a=Object(C.a)(t,2),n=a[0],i=a[1];return c.a.createElement("div",null,c.a.createElement(b.a,{theme:y},c.a.createElement(E.a,{"aria-controls":"customized-menu","aria-haspopup":"true",variant:"contained",color:"secondary",onClick:function(e){i(e.currentTarget)},style:{outline:"none"}},e.name,c.a.createElement(K.a,{style:{marginRight:"-10px"}})),c.a.createElement(F,{id:"customized-menu",anchorEl:n,keepMounted:!0,open:Boolean(n),onClose:function(){i(null)}},c.a.createElement(V,{onClick:function(){i(null),e.editNameHandler()}},c.a.createElement(z.a,null,c.a.createElement(q.a,null)),c.a.createElement(J.a,{primary:"Change Name"})),c.a.createElement(V,{onClick:function(){i(null),R.a.dispatch({type:"redirect",value:!0})}},c.a.createElement(z.a,null,c.a.createElement(Z.a,null)),c.a.createElement(p.b,{to:"/chat",className:"menu-links"},c.a.createElement(J.a,{primary:"Join Chat"}))),c.a.createElement(V,{onClick:function(){i(null),e.logOutHandler()}},c.a.createElement(z.a,null,c.a.createElement(W.a,null)),c.a.createElement(p.b,{to:"/",className:"menu-links"},c.a.createElement(J.a,{primary:"Log Out"}))))))}var Y=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={name:"",active:!1,isLoggedIn:!1,error:!1},e}return Object(l.a)(a,[{key:"componentWillMount",value:function(){this.setState({name:this.props.login,isLoggedIn:"Guest"!==this.props.login})}},{key:"showInput",value:function(){this.state.active?(this.setState({active:!1}),R.a.dispatch({type:"activeInput",value:!1})):(this.setState({active:!0}),R.a.dispatch({type:"activeInput",value:!0}))}},{key:"inputOnChange",value:function(){var e=this,t=g()("#inputLogin").val();if(t&&t.length<=20)return R.a.dispatch({type:"login",value:t}),R.a.dispatch({type:"redirect",value:!0}),R.a.dispatch({type:"activeInput",value:!1}),this.setState({active:!1,isLoggedIn:!0,name:t,error:!1}),c.a.createElement(d.a,{to:"/chat"});this.setState({error:!0}),setTimeout(function(){g()(".input-error")&&!g()(".input-error").hasClass("hidden")&&e.setState({error:!1})},5e3)}},{key:"input",value:function(){var e=this;if(this.props.activeInput)return c.a.createElement("div",{id:"changeNameInput",className:"login-input-block"},c.a.createElement(H,{getInputLogin:function(t){return e.inputOnChange(t)}}))}},{key:"logOutOnClick",value:function(){R.a.dispatch({type:"login",value:"Guest"}),this.setState({isLoggedIn:!1})}},{key:"accountButton",value:function(){var e=this;return this.state.isLoggedIn?c.a.createElement(U,{name:this.state.name,editNameHandler:function(){return R.a.dispatch({type:"activeInput",value:!0})},logOutHandler:function(){return e.logOutOnClick()}}):c.a.createElement(N,{showInputOnClick:function(){return e.showInput()}})}},{key:"render",value:function(){return c.a.createElement("div",{className:"row header justify-content-between align-items-center"},c.a.createElement(p.b,{className:"col-auto icon-block",to:"/",onClick:function(){R.a.dispatch({type:"redirect",value:!1})}},c.a.createElement("img",{className:"header-img d-sm-block",src:v.a,alt:""}),c.a.createElement("h5",{className:"icon-name"},"Awesome Chat")),c.a.createElement("div",{className:"col-auto account-button"},this.accountButton()),c.a.createElement("span",{className:"text-danger input-error ".concat(this.state.error?"":"hidden")},"Input name (max 20 symbols)"),this.input())}}]),a}(c.a.Component),X=Object(r.b)(function(e){return{login:e.login,activeInput:e.activeInput}})(Y),Q=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={inputActive:!1},e}return Object(l.a)(a,[{key:"onClickHandler",value:function(e){"Guest"===this.props.login?!1===this.state.inputActive?(R.a.dispatch({type:"activeInput",value:!0}),this.setState({inputActive:!0}),e.preventDefault()):(R.a.dispatch({type:"activeInput",value:!1}),this.setState({inputActive:!1}),e.preventDefault()):(R.a.dispatch({type:"activeInput",value:!1}),R.a.dispatch({type:"redirect",value:!0}))}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"row justify-content-center align-items-center mainPage",onClick:function(){return e.state.inputActive?R.a.dispatch({type:"activeInput",value:!1}):null},role:"button",onKeyPress:void 0,tabIndex:"-1"},c.a.createElement(p.b,{to:"/chat",onClick:function(t){return e.onClickHandler(t)}},c.a.createElement("div",{className:"smile-text text-monospace text-uppercase"},c.a.createElement("div",{className:"circle"}),c.a.createElement("div",{className:"circle-blink"},c.a.createElement("div",{className:"shadow"}),c.a.createElement("div",{className:"blinked"})),c.a.createElement("span",{className:"char1"},"J"),c.a.createElement("span",{className:"char2"},"o"),c.a.createElement("span",{className:"char3"},"i"),c.a.createElement("span",{className:"char4"},"n"),c.a.createElement("span",{className:"char5"}),c.a.createElement("span",{className:"char6"},"o"),c.a.createElement("span",{className:"char7"},"u"),c.a.createElement("span",{className:"char8"},"r"),c.a.createElement("span",{className:"char9"}),c.a.createElement("span",{className:"char10"},"a"),c.a.createElement("span",{className:"char11"},"w"),c.a.createElement("span",{className:"char12"},"e"),c.a.createElement("span",{className:"char13"},"s"),c.a.createElement("span",{className:"char14"},"o"),c.a.createElement("span",{className:"char15"},"m"),c.a.createElement("span",{className:"char16"},"e"),c.a.createElement("span",{className:"char17"}),c.a.createElement("span",{className:"char18"},"c"),c.a.createElement("span",{className:"char19"},"h"),c.a.createElement("span",{className:"char20"},"a"),c.a.createElement("span",{className:"char21"},"t"))))}}]),a}(c.a.Component),_=Object(r.b)(function(e){return{login:e.login}})(Q);var $=function(){return c.a.createElement("div",{className:"row align-items-center footer"},c.a.createElement("span",{className:"rights text-wrap"},"\xa9 2019 Aleksandra Skirnevskaia, Email for contacts",c.a.createElement("a",{className:"footer-mail font-weight-bold",href:"mailto:a.skirnevskaia@gmail.com"},"a.skirnevskaia@gmail.com")))},ee=a(18);var te=function(e){var t=e.login,a=e.messagePack;return a.from===t?c.a.createElement(b.a,{theme:y},c.a.createElement("div",{className:"row chat-page-item justify-content-end"},c.a.createElement("div",{className:"my-message"},c.a.createElement("div",{className:"col-auto message-wrapper my-message-wrapper"},c.a.createElement("div",{className:"col-auto chat-item-from"},a.from),c.a.createElement("div",{className:"col-auto chat-item-message"},a.message),c.a.createElement("div",{className:"col-auto chat-item-date"},Object(ee.b)(a.time)))))):c.a.createElement(b.a,{theme:y},c.a.createElement("div",{className:"row chat-page-item justify-content-start"},c.a.createElement("div",{className:"their-message"},c.a.createElement("div",{className:"col-auto message-wrapper their-message-wrapper"},c.a.createElement("div",{className:"col-auto chat-item-from"},a.from),c.a.createElement("div",{className:"w-100"}),c.a.createElement("div",{className:"col-auto chat-item-message"},a.message),c.a.createElement("div",{className:"w-100"}),c.a.createElement("div",{className:"col-auto chat-item-date"},Object(ee.b)(a.time))))))};var ae=function(e){var t=e.login,a=e.messagePack;return a.from===t?c.a.createElement(b.a,{theme:y},c.a.createElement("div",{className:"row chat-page-item justify-content-end"},c.a.createElement("div",{className:"my-message"},c.a.createElement("div",{className:"col-auto message-wrapper my-message-wrapper"},c.a.createElement("div",{className:"col-auto chat-item-from"},a.from),c.a.createElement("div",{className:"col-auto chat-item-message"},Object(ee.a)(a.message).map(function(e,t){return"string"===typeof e?c.a.createElement("span",{key:t},e):c.a.createElement("img",{key:t,width:"32",height:"32",src:Object(ee.d)(e[0]),alt:e[0]})})),c.a.createElement("div",{className:"col-auto chat-item-date"},Object(ee.b)(a.time)))))):c.a.createElement(b.a,{theme:y},c.a.createElement("div",{className:"row chat-page-item justify-content-start"},c.a.createElement("div",{className:"their-message"},c.a.createElement("div",{className:"col-auto message-wrapper their-message-wrapper"},c.a.createElement("div",{className:"col-auto chat-item-from"},a.from),c.a.createElement("div",{className:"col-auto chat-item-message"},Object(ee.a)(a.message).map(function(e,t){return"string"===typeof e?c.a.createElement("span",{key:t},e):c.a.createElement("img",{key:t,width:"32",height:"32",src:Object(ee.d)(e[0]),alt:e[0]})})),c.a.createElement("div",{className:"col-auto chat-item-date"},Object(ee.b)(a.time))))))},ne=a(166),ce=a.n(ne),ie=a(409);function oe(e){var t=Object(S.a)(function(){return{root:{position:"absolute"},iconHover:{color:y.palette[e.theme].main,"&:hover":{color:y.palette[e.theme].light},"&:active":{color:y.palette[e.theme].dark}}}})();return c.a.createElement(b.a,{theme:y},c.a.createElement(ie.a,{variant:"contained",className:t.iconHover,style:{outline:"none"},onClick:e.onClickHandler},e.icon))}var re=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).handleChange=function(t){e.setState({html:t.target.value})},e.state={emoji:!1,html:"",attachment:!1},e.mounted=!1,e}return Object(l.a)(a,[{key:"componentWillMount",value:function(){this.mounted=!0}},{key:"componentWillUnmount",value:function(){this.setState(null),this.mounted=!1}},{key:"showSmilesOnHover",value:function(){this.setState({emoji:!0})}},{key:"hideSmilesOnMouseLeave",value:function(){this.setState({emoji:!1})}},{key:"toggleAttachBlock",value:function(){this.state.attachment?this.setState({attachment:!1}):this.setState({attachment:!0})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"row chat-page-form justify-content-center align-items-center"},c.a.createElement("div",{className:"input-area row justify-content-center align-items-center"},c.a.createElement("div",{className:"media-selector"},c.a.createElement(oe,{onClickHandler:function(){return e.toggleAttachBlock()},theme:"secondary",icon:c.a.createElement(I.a,null,"attach_file")}),c.a.createElement("div",{className:"media-selector-info ".concat(this.state.attachment?"":"hidden")},"Does not work yet")),c.a.createElement("span",{id:"inputChat",className:"input-text-area row align-items-center",__html:this.state.html,onChange:this.handleChange,contentEditable:"true","aria-multiline":"true",role:"textbox",tabIndex:"-1",onClick:function(e){if(g()(e.target).is("img")){var t=document.createRange();g()(e.target).focus(),t.selectNodeContents(e.target),t.collapse(!0),t.setEndAfter(e.target);var a=window.getSelection();return a.removeAllRanges(),a.addRange(t),g()("#inputChat").focus(),!1}},onKeyPress:function(t){"Enter"!==t.key&&13!==t.which&&13!==t.keyCode||(t.preventDefault(),e.props.submitClickHandler())}}),c.a.createElement("div",{className:"chat-buttons"},c.a.createElement("div",{id:"emoji-block",className:"emoji-block",onMouseEnter:function(){return e.showSmilesOnHover()},onMouseLeave:function(){return e.hideSmilesOnMouseLeave()}},c.a.createElement(oe,{onClickHandler:function(){return e.showSmilesOnHover()},theme:"secondary",icon:c.a.createElement(I.a,null,"emoji_emotions")}),c.a.createElement("div",{className:"".concat(this.state.emoji?"smile-block":"hidden")},c.a.createElement(ce.a,{id:"emoji-box",className:"emoji-picker",nonce:"NONCE_GENERATED_WHEN_TRANSMITTING",onChange:function(t){e.setState({html:Object(ee.c)(t)})}}))),c.a.createElement("div",{className:"send-button"},c.a.createElement(oe,{onClickHandler:function(){return e.props.submitClickHandler()},theme:"secondary",icon:c.a.createElement(I.a,null,"send")})))))}}]),a}(n.Component),se=a(167),le=a.n(se),ue=[];var me=a(410),pe=a(413),de=Object(j.a)({switchBase:{color:y.palette.golden.dark,"&$checked":{color:y.palette.primary.main},"&$checked + $track":{backgroundColor:y.palette.primary.dark}},checked:{},track:{}})(pe.a);function he(e){var t,a=c.a.useState({checked:e.ignore}),n=Object(C.a)(a,2),i=n[0],o=n[1];return c.a.createElement(me.a,{control:c.a.createElement(de,{checked:i.checked,onChange:(t="checked",function(e){o(Object(O.a)(Object(O.a)({},i),{},Object(k.a)({},t,e.target.checked))),R.a.dispatch({type:"switch",value:e.target.checked})}),value:"checked"}),label:"Notifications"})}var ge=a(168),fe=a.n(ge);function ve(e){return c.a.createElement("div",{className:"status-block"},1===e.status?c.a.createElement(oe,{onClickHandler:function(){},theme:"success",icon:c.a.createElement(I.a,null,"checkIcon")}):c.a.createElement(c.a.Fragment,null,c.a.createElement("span",null,"reconnecting"),c.a.createElement(oe,{onClickHandler:function(){},theme:"fail",icon:c.a.createElement(fe.a,null)})))}var be=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={},e.mounted=!1,e.ws=function(){var e=new le.a("wss://render-ws-server.onrender.com");return e.on("open",function(){setTimeout(function(){console.log("open",e.ws.readyState),R.a.dispatch({type:"status",value:e.ws.readyState})},300)}),e.on("close",function(){console.log("connection closed",e.ws.readyState,"reconnecting"),R.a.dispatch({type:"status",value:e.ws.readyState}),e.reconnect()}),e.on("message",function(e){var t=JSON.parse(e.data).splice(0,100).reverse();if(1===t.length){var a="".concat(t[0].from,": ").concat(t[0].message);ue.push(t[0]),R.a.dispatch({type:"newMessage",value:a}),R.a.dispatch({type:"messages",value:t})}else 0===ue.length&&(ue=t,R.a.dispatch({type:"messages",value:t}));var n=document.getElementById("messages-area");n&&setTimeout(function(){n.scrollTo({top:n.scrollHeight-n.clientHeight,behavior:"smooth"})},50)}),e}(),e}return Object(l.a)(a,[{key:"componentWillMount",value:function(){this.mounted=!0}},{key:"componentDidMount",value:function(){this.mounted=!0;var e=document.getElementById("messages-area");setTimeout(function(){e&&e.scrollTo({top:e.scrollHeight-e.clientHeight,behavior:"instant"})},1500)}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"submitClickHandler",value:function(){var e={from:this.props.login,message:Object(ee.e)(g()("#inputChat").html())};this.ws.emit(JSON.stringify(e)),g()("#inputChat").text("")}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"row chat-page justify-content-center align-items-center",onClick:function(){return R.a.dispatch({type:"activeInput",value:!1})},role:"button",onKeyPress:void 0,tabIndex:"-1"},c.a.createElement("div",{className:"switcher"},c.a.createElement(he,{ignore:this.props.switch}),c.a.createElement(ve,{status:this.props.status})),c.a.createElement("div",{className:"row chat-page-messages"},c.a.createElement("div",{id:"messages-area",className:"messages-wrapper"},this.props.messages.map(function(t){if(t&&t.message)return t.message.match(/:\w+:/gm)?c.a.createElement(ae,{key:t.id,login:e.props.login,messagePack:t}):c.a.createElement(te,{key:t.id,login:e.props.login,messagePack:t})}))),c.a.createElement(re,{submitClickHandler:function(){1===e.props.status&&e.submitClickHandler()}}))}}]),a}(n.Component),Ee=Object(r.b)(function(e){return{login:e.login,status:e.status,messages:e.messages,switch:e.switch}})(be),we=a(169),ye=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={},e}return Object(l.a)(a,[{key:"render",value:function(){return c.a.createElement(p.a,null,c.a.createElement("div",{className:"container-fluid",onClick:function(e){var t=g()("#changeNameInput");(g()(e.target).is(".container-fluid")||g()(e.target).is(".header"))&&t&&R.a.dispatch({type:"activeInput",value:!1})}},c.a.createElement(X,null),c.a.createElement(d.b,{exact:!0,path:"/"},this.props.login&&"Guest"!==this.props.login&&this.props.redirect?c.a.createElement(d.a,{to:"/chat"}):c.a.createElement(d.a,{to:"/"})),c.a.createElement(d.b,{exact:!0,path:"/chat"},this.props.login&&"Guest"!==this.props.login&&this.props.redirect?c.a.createElement(d.a,{to:"/chat"}):c.a.createElement(d.a,{to:"/"})),c.a.createElement(d.b,{path:"/",exact:!0,component:_}),c.a.createElement(d.b,{path:"/chat",component:Ee}),c.a.createElement($,null),c.a.createElement(we.a,null)))}}]),a}(n.Component),Ne=Object(r.b)(function(e){return{login:e.login,redirect:e.redirect}})(ye),ke=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(ke,"px")),o.a.render(c.a.createElement(r.a,{store:R.a},c.a.createElement(Ne,null)),document.getElementById("root"))},8:function(e,t,a){"use strict";var n,c=a(173);void 0===JSON.parse(localStorage.getItem("switch"))||null===JSON.parse(localStorage.getItem("switch"))?(n=!0,localStorage.setItem("switch",!0)):n=JSON.parse(localStorage.getItem("switch"));var i={login:localStorage.getItem("login")||"Guest",messages:["loading"],activeInput:!1,status:3,newMessage:localStorage.getItem("newMes")||"new message!",switch:n,redirect:!0},o=[];var r=Object(c.a)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"login":return localStorage.setItem("login",t.value),Object.assign({},e,{login:t.value});case"redirect":return Object.assign({},e,{redirect:t.value});case"switch":return localStorage.setItem("switch",t.value),Object.assign({},e,{switch:t.value});case"newMessage":return Object.assign({},e,{newMessage:t.value});case"messages":if("object"===typeof t.value)for(var a in t.value)o.push(t.value[a]);return Object.assign({},e,{messages:[].concat(o)});case"activeInput":return Object.assign({},e,{activeInput:t.value});case"status":return Object.assign({},e,{status:t.value});default:return e}});t.a=r},96:function(e,t,a){e.exports=a.p+"static/media/sound.13620510.mp3"}},[[184,1,2]]]);
//# sourceMappingURL=main.91a48418.chunk.js.map