!function e(t,r,n){function a(s,i){if(!r[s]){if(!t[s]){var l="function"==typeof require&&require;if(!i&&l)return l(s,!0);if(o)return o(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var p=r[s]={exports:{}};t[s][0].call(p.exports,(function(e){return a(t[s][1][e]||e)}),p,p.exports,e,t,r,n)}return r[s].exports}for(var o="function"==typeof require&&require,s=0;s<n.length;s++)a(n[s]);return a}({1:[function(e,t,r){var n=function(e){"use strict";var t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",s=n.toStringTag||"@@toStringTag";function i(e,t,r,n){var a=t&&t.prototype instanceof p?t:p,o=Object.create(a.prototype),s=new R(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return _()}for(r.method=a,r.arg=o;;){var s=r.delegate;if(s){var i=w(s,r);if(i){if(i===c)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var p=l(e,t,r);if("normal"===p.type){if(n=r.done?"completed":"suspendedYield",p.arg===c)continue;return{value:p.arg,done:r.done}}"throw"===p.type&&(n="completed",r.method="throw",r.arg=p.arg)}}}(e,r,s),o}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=i;var c={};function p(){}function u(){}function d(){}var h={};h[a]=function(){return this};var m=Object.getPrototypeOf,y=m&&m(m(x([])));y&&y!==t&&r.call(y,a)&&(h=y);var f=d.prototype=p.prototype=Object.create(h);function g(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function v(e,t){var n;this._invoke=function(a,o){function s(){return new t((function(n,s){!function n(a,o,s,i){var c=l(e[a],e,o);if("throw"!==c.type){var p=c.arg,u=p.value;return u&&"object"==typeof u&&r.call(u,"__await")?t.resolve(u.__await).then((function(e){n("next",e,s,i)}),(function(e){n("throw",e,s,i)})):t.resolve(u).then((function(e){p.value=e,s(p)}),(function(e){return n("throw",e,s,i)}))}i(c.arg)}(a,o,n,s)}))}return n=n?n.then(s,s):s()}}function w(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return c;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return c}var n=l(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,c;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,c):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,c)}function b(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function R(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(b,this),this.reset(!0)}function x(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:_}}function _(){return{value:void 0,done:!0}}return u.prototype=f.constructor=d,d.constructor=u,d[s]=u.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===u||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,s in e||(e[s]="GeneratorFunction")),e.prototype=Object.create(f),e},e.awrap=function(e){return{__await:e}},g(v.prototype),v.prototype[o]=function(){return this},e.AsyncIterator=v,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var s=new v(i(t,r,n,a),o);return e.isGeneratorFunction(r)?s:s.next().then((function(e){return e.done?e.value:s.next()}))},g(f),f[s]="Generator",f[a]=function(){return this},f.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=x,R.prototype={constructor:R,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return s.type="throw",s.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var i=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(i&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=e,s.arg=t,o?(this.method="next",this.next=o.finallyLoc,c):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),c},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),E(r),c}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;E(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:x(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),c}},e}("object"==typeof t?t.exports:{});try{regeneratorRuntime=n}catch(e){Function("r","regeneratorRuntime = r")(n)}},{}],2:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n,a=e("../Other/Commands"),o=(n=a)&&n.__esModule?n:{default:n};class s extends React.Component{constructor(e){super(),this.messageList=React.createRef(),e.app.player.on("message",e=>{this.addMessage(e)}),e.app.addMessage=this.addMessage.bind(this)}render(){return React.createElement("div",null,React.createElement("div",{className:"play-messageList",ref:this.messageList}),React.createElement("input",{type:"text",className:"play-messageBox",onKeyUp:e=>{if(""!==e.target.value&&" "!==e.target.value&&(e.persist(),13===e.keyCode)){if(o.default.cmds.some(t=>e.target.value.startsWith(t)))return o.default.run(e.target.value,this.props.app),void(e.target.value="");e.persist(),this.props.app.player.send("message",{content:e.target.value.replace(/<\/?[^>]+(>|$)/g,""),sender:this.props.app.player.name}),e.target.value=""}}}))}addMessage(e){let t=e.content;t="system"===e.sender?`<span style="font-weight: bold; color: red">${e.content}</span>`:e.whisper?e.receiver==this.props.app.player.name?`Whisper from <span style="font-weight: bold; color: green">${e.sender}</span>: ${e.content}`:e.sender==this.props.player.name?`Whisper to <span style="font-weight: bold; color: green">${e.receiver}</span>: ${e.content}`:`<span style="font-weight: bold">${e.sender} is whispering to ${receiver}</span>`:`<span style="font-weight: bold">${e.sender}</span>: ${e.content}`;const r=document.createElement("p");r.innerHTML=t,this.messageList.current.appendChild(r),r.scrollIntoView()}}r.default=s},{"../Other/Commands":7}],3:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});class n extends React.Component{constructor(e){super(e),this.state={players:[]}}render(){return React.createElement("div",{className:"play-graveyardBox"})}}r.default=n},{}],4:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){let t="black";e.disconnected?t="gray":e.admin?t="red":e.host&&(t="green");return React.createElement("div",{className:"play-playerInPlayerList"},React.createElement("p",{style:{color:t,fontWeight:e.host||e.admin||e.disconnected?"bold":"none"}},e.number,". ",e.name))}},{}],5:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n,a=e("./Player"),o=(n=a)&&n.__esModule?n:{default:n};class s extends React.Component{constructor(e){super(),this.state={players:[]},e.app.hasPlayer=e=>this.state.players.some(t=>t.name===e),e.app.getPlayerByIndexOrName=e=>this.state.players.find((t,r)=>t.name===e||r+1==e),e.app.getPlayer=e=>this.state.players.find(t=>t.name===e),e.app.getPlayerById=e=>this.state.players.find(t=>t.id===e),e.app.player.on("lobbyInfo",t=>{e.app.player.name=t.yourName,this.setState({players:t.players}),e.app.setRolelist(t.rl)}),e.app.player.on("playerTempDisconnect",t=>{const r=e.app.getPlayerById(t.id);r&&(r.disconnected=!0,this.forceUpdate())}),e.app.player.on("playerJoin",t=>{e.app.addMessage({content:t.name+" has joined the game!",sender:"system"}),this.setState(()=>(this.state.players.push(t),this.state.players)),e.app.addRolelistSlot("Any")}),e.app.player.on("playerLeave",t=>{const r=e.app.getPlayerById(t.id);r&&(e.app.addMessage({content:r.name+" left the game!",sender:"system"}),this.setState(()=>{const e=this.state.players.findIndex(e=>e.id===t.id);return this.state.players.splice(e,1),this.state.players.forEach(t=>{t.number>e+1&&t.number--}),this.state.players[0]&&!this.state.players[0].host&&(this.state.players[0].host=!0),this.state.players}))}),e.app.player.on("playerReconnect",t=>{const r=e.app.getPlayerById(t.id);r&&(r.disconnected=!1,this.forceUpdate())}),e.app.player.on("admin",t=>{const r=e.app.getPlayerById(t.id);console.log(t,r),r&&(r.admin=!0,this.forceUpdate())})}render(){const e=this.state.players.map((e,t)=>React.createElement(o.default,{name:e.name,host:e.host,admin:e.admin,disconnected:e.disconnected,number:t+1,key:t}));return React.createElement("div",{className:"play-playerList"},e)}}r.default=s},{"./Player":4}],6:[function(e,t,r){"use strict";function n(e){const t=e.app.getPlayer?e.app.getPlayer(e.app.player.name):null;let r="";return React.createElement("input",{type:"text",disabled:!!t&&(!0!==t.host&&!0!==t.admin),defaultValue:e.content,onChange:e=>{r+=e.target.value},onKeyUp:async t=>{if(13===t.keyCode){const n=r.replace(/\s+/g," ").trim();if(""===n)return t.target.value="Any";t.persist(),!1===(await e.app.getRequest(`changerl?index=${e.index}&content=${n}&lobbyId=${e.app.player.lobbyId}&setter=${e.app.player.id}`)).res&&(t.target.value="Any",e.app.addMessage({content:"Something went wrong!",sender:"system"}))}}})}Object.defineProperty(r,"__esModule",{value:!0});class a extends React.Component{constructor(e){super(e),this.state={slots:[]},e.app.addRolelistSlot=e=>{this.state.slots.push(e),this.forceUpdate()},e.app.setRolelist=e=>{this.state.slots=e,this.forceUpdate()},e.app.player.on("rolelistChange",e=>{this.state.slots[Number(e.index)]=e.content,this.props.app.addMessage({content:`The rolelist was changed by ${e.changedBy}!`,sender:"system"}),this.forceUpdate()})}render(){const e=this.state.slots.map((e,t)=>React.createElement(n,{content:e,key:t,index:t,app:this.props.app}));return React.createElement("div",{className:"play-rolelistBox"},e.length&&e||"")}}r.default=a},{}],7:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default={run:async function(e,t){const r=e.split(" "),n=r.shift();if("/admin"===n){if(!r.length)return!0;return(await t.getRequest(`pwd?password=${r[0]}&player=${t.player.id}&lobbyId=${t.player.lobbyId}`)).res?t.addMessage({content:"You are now an admin!",sender:"system"}):t.addMessage({content:"Wrong password!",sender:"system"}),!0}if("/kick"===n){if(!r.length)return!0;if(!t.getPlayer(t.player.name).admin)return t.addMessage({content:"Only admins can use this command!",sender:"system"}),!0;if(!t.hasPlayer(r[0]))return t.addMessage({content:"This player doesn't exist!",sender:"system"}),!0;const e=t.getPlayerByIndexOrName(r[0]);return console.log(e),(await t.getRequest(`kick?player=${e.id}&kicker=${t.player.id}&lobbyId=${t.player.lobbyId}`)).res?t.addMessage({content:"Player kicked!",sender:"system"}):t.addMessage({content:"Something went wrong!",sender:"system"}),!0}return!1},cmds:["/admin","/kick"]}},{}],8:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});const n="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";class a extends EventEmitter3{constructor(e,t){super(),this.lobbyId=t,this.name=e,this.ready=!1,sessionStorage.setItem("_room_",t),this.id=sessionStorage.getItem("_sid_"),this.id||(this.id=a.genid(),sessionStorage.setItem("_sid_",this.id)),this.socket=new WebSocket(`ws://localhost:4000?roomId=${t}&name=${e}&socketId=${this.id}`),this.socket.onopen=()=>{this.ready=!0,this.emit("ready",this),this.socket.onmessage=e=>{try{const t=JSON.parse(e.data);t.e&&this.emit(t.e,t.d)}catch(e){return}},this.socket.onerror=e=>this.emit("error",e),this.socket.onclose=e=>this.emit("close",e)}}send(e,t){this.socket.send(JSON.stringify({e:e,d:t}))}static genid(e=18){let t="";for(let r=0;r<e;r++)t+=n.charAt(Math.floor(Math.random()*n.length));return t}}r.default=a},{}],9:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){const t=React.useRef();let r="";return React.createElement("div",{className:"container"},React.createElement("div",{className:"row home-center"},React.createElement("div",null,React.createElement("h1",null,"The Testing Grounds"),React.createElement("p",null,"Welcome to the Testing Grounds, where role ideas are tested in simulated gameplay. If you have any questions regarding the Testing Grounds, please view the ",React.createElement("a",{href:"https://www.blankmediagames.com/phpbb/viewtopic.php?f=50&t=72338",target:"_blank"},"FAQ"),". You can also ask questions and report bugs in our ",React.createElement("a",{href:"https://discord.com/invite/EVS55Zb",target:"_blank"},"discord server"),". Created by ",React.createElement("a",{href:"https://blankmediagames.com/phpbb/memberlist.php?mode=viewprofile&un=GoogleFeud",target:"_blank"},"GoogleFeud")," "),React.createElement("input",{type:"text",className:"home-input",placeholder:"Your name...",onInput:e=>{r=e.target.value}}),React.createElement("input",{type:"text",className:"home-name-input",disabled:!0,value:"1111"}),React.createElement("br",null),React.createElement("p",{ref:t,className:"home-error"}),React.createElement("button",{onClick:async a=>{if(a.persist(),r.length<=3)return t.current.innerHTML="Your username must be longer than 3 characters!";if(n.some(e=>r.includes(e)))return t.current.innerHTML=`Your name contains invalid characters! (${n.join(", ")})`;if((await e.app.getRequest("playersIn?roomId=1111")).some(e=>e.toLowerCase()===r.toLowerCase()))return t.current.innerHTML="This username is taken!";e.app.joinGame(r,"1111"),a.target.disabled=!0,t.current.innerHTML="Please wait..."}},"JOIN!"))),React.createElement("div",{className:"home-center"},React.createElement("iframe",{src:"https://discordapp.com/widget?id=239404476178366465&theme=dark",width:"350",height:"500",allowtransparency:"true",frameBorder:"0"})))};const n=["!",">","<","^","?","-","=","|","\\","/","@","%","&","*","(",")","+",":",";","~","{","}","[","]"]},{}],10:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e.app.player.on("kick",()=>{e.app.goto("/"),location.reload()}),React.createElement("div",null,React.createElement(o.default,{app:e.app}),React.createElement(s.default,{app:e.app}),React.createElement(a.default,{app:e.app}),React.createElement(n.default,{app:e.app}))};var n=i(e("../Components/ChatBox")),a=i(e("../Components/PlayerList")),o=i(e("../Components/GraveyardBox")),s=i(e("../Components/RolelistBox"));function i(e){return e&&e.__esModule?e:{default:e}}},{"../Components/ChatBox":2,"../Components/GraveyardBox":3,"../Components/PlayerList":5,"../Components/RolelistBox":6}],11:[function(e,t,r){"use strict";e("regenerator-runtime");var n=s(e("./Pages/Home")),a=s(e("./Pages/Play")),o=s(e("./Other/WebSocket"));function s(e){return e&&e.__esModule?e:{default:e}}let i;const l={"/":n.default,"/play":a.default};class c extends React.Component{constructor(e){super();const t=this.resolveURL();this.state={url:t.path},this.player=null,"/play"===t.path&&sessionStorage.getItem("_room_")&&sessionStorage.getItem("_sid_")?this.player=new o.default("a",sessionStorage.getItem("_room_")):this.state.url="/",window.history.pushState({url:this.state.url},null,this.state.url),window.onpopstate=e=>{if(e.state)return this.setState({path:e.state.url})}}render(){let e=l[this.state.url]||n.default;return React.createElement("div",null,React.createElement(e,{app:this}))}resolveURL(e){const t=new URL(e||location.href,(location.hostname,"http://localhost:4000"));return{path:t.pathname,query:t.searchParams,formed:t.toString()}}goto(e){l[e]||(e=this.resolveURL(e));let t=e.path||e;return window.history.pushState({url:e.formed||e},null,e.formed||e),this.setState({url:t}),null}joinGame(e,t){this.player=new o.default(e,t),this.goto("/play")}async getRequest(e){const t=await fetch("/api/"+e);return!!t.ok&&await t.json()}}window.onload=async()=>{i=document.getElementById("main"),ReactDOM.render(React.createElement(c,null),i)}},{"./Other/WebSocket":8,"./Pages/Home":9,"./Pages/Play":10,"regenerator-runtime":1}]},{},[11]);