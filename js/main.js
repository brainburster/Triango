!function(t){var e={};function s(a){if(e[a])return e[a].exports;var n=e[a]={i:a,l:!1,exports:{}};return t[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=e,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=2)}([function(t,e,s){"use strict";e.a={void:-1,blank:0,black:1,white:2,ban:3,ko:4}},function(t,e,s){"use strict";var a=s(0);const n=1.732,i=n,r=n/2;var h=class{constructor(t,e,s,a=!0,n="white"){this.x=t,this.y=e,this.r=s,this.up=a,this.color=n,this.creatShape()}creatShape(){this.x1=this.x,this.y1=this.y,this.x2=this.x+this.r*n,this.y2=this.y,this.x3=this.x+this.r*r,this.y3=this.y+1.5*this.r,this.up&&(this.y3=this.y,this.y2=this.y+1.5*this.r,this.y1=this.y+1.5*this.r)}draw(t){t.beginPath(),t.moveTo(this.x1,this.y1),t.lineTo(this.x2,this.y2),t.lineTo(this.x3,this.y3),t.fillStyle=this.color,t.closePath(),t.fill(),t.strokeStyle="black",t.stroke()}mouseCheck(t,e){if(t<this.x1||t>this.x2)return!1;if(this.up){if(e<this.y3||e>this.y1)return!1}else if(e>this.y3||e<this.y1)return!1;if(this.up){if(t<this.x3){if(e<(t-this.x3)*-i+this.y3)return!1}else if(e<(t-this.x3)*i+this.y3)return!1}else if(t<this.x3){if(e>(t-this.x1)*i+this.y1)return!1}else if(e>(t-this.x3)*-i+this.y3)return!1;return!0}};const o={normal:{onStart:t=>{let e="gray";switch(t.data){case a.a.black:e="black";break;case a.a.white:e="white";break;case a.a.blank:e="gray";break;case a.a.ban:e="pink";break;case a.a.ko:e="green";break;default:e="blue"}t.setColor(e)},update:t=>{o.normal.onStart(t)},handleInput:(t,e,s,n)=>{n.data===a.a.blank&&n.triangle.mouseCheck(t,e)&&(s?n.changeState(o.keydown):n.changeState(o.hover))}},hover:{onStart:t=>{t.setColor("yellow")},handleInput:(t,e,s,a)=>{s?a.changeState(o.keydown):a.triangle.mouseCheck(t,e)||a.changeState(o.normal)}},keydown:{onStart:t=>{t.setColor("red")},handleInput:(t,e,s,a)=>{a.triangle.mouseCheck(t,e)||a.changeState(o.normal),s||(a.onactive(a),a.changeState(o.normal))}}};var c=class{constructor(t,e,s,n,i,r){this.triangle=new h(t,e,s,n),this.coordinate=i,this.data=a.a.blank,this.state=o.normal,this.state.onStart(this),this.onactive=r}setData(t){this.data=t}setColor(t){this.triangle.color=t}changeState(t){this.state=t,this.state.onStart(this)}render(t){return this.triangle.draw&&this.triangle.draw(t)}handleInput(t,e,s){return this.state.handleInput&&this.state.handleInput(t,e,s,this)}update(){return this.state.update&&this.state.update(this)}};s.d(e,"a",function(){return k}),s.d(e,"b",function(){return w});const l=.866;class u{constructor(t){this.data=[],this.current=-1,this.push(t)}push(t){this.data.length=this.current+1,this.data.push({black:t.black,white:t.white,ban:t.ban,ko:t.ko,cclr:t.currentColor}),this.current+=1}undo(t){if(this.current-=1,-1===this.current)return this.current=0,!1;const e=this.data[this.current];return t.black=e.black,t.white=e.white,t.ko=e.ko,t.ban=e.ban,t.currentColor=e.cclr,!0}redo(t){if(this.current+=1,this.current===this.data.length)return this.current=this.data.length-1,!1;const e=this.data[this.current];return t.black=e.black,t.white=e.white,t.ko=e.ko,t.ban=e.ban,t.currentColor=e.cclr,!0}contain(t,e,s){for(let a=this.current;a>-1;a-=1){const n=this.data[a];if(n.black===t&&n.white===e&&n.cclr===s)return!0}return!1}clear(){this.data.length=1,this.current=0}}class d{constructor(){this.data=[]}static index2xy(t){return{x:7&t,y:t>>>3}}static xy2index(t,e){let s=e<<3;return s|=7&t}push(t,e){this.data.push(d.xy2index(t,e))}indexof(t,e){const s=d.xy2index(t,e);return this.data.indexOf(s)}clear(){this.data.length=0}forEach(t){for(let e=0;e<this.data.length;e+=1){const s=this.data[e],{x:a,y:n}=d.index2xy(s);t(a,n)}}}function p(t){switch(t){case a.a.black:return a.a.white;case a.a.white:return a.a.black;default:return a.a.void}}class k{constructor(t){if(t)return this.black=t.black,this.white=t.white,this.ban=t.ban,this.ko=t.ko,this.currentColor=t.currentColor,this.history=new u(this),this.history.data=t.history.data,this.history.current=t.history.current,void(this.adjacencylist=t.adjacencylist);this.black=0,this.white=0,this.ban=0,this.ko=0,this.currentColor=a.a.black,this.history=new u(this),this.adjacencylist=[];for(let t=0;t<8;t+=1)this.adjacencylist.push([]);for(let t=0;t<4;t+=1)for(let e=0;e<8;e+=1){this.adjacencylist[e][t]=[];const s=e-1,a=e+1,n=1&e?e-1:e+1,i=1&e?t+1:t-1;s>-1&&this.adjacencylist[e][t].push({x:s,y:t}),a<8&&this.adjacencylist[e][t].push({x:a,y:t}),n<8&&n>-1&&i<4&&i>-1&&this.adjacencylist[e][t].push({x:n,y:i})}}swapColor(){this.currentColor=p(this.currentColor)}save(){this.history.push(this)}undo(){return this.history.undo(this)}redo(){return this.history.redo(this)}setCurrentColor(t){this.currentColor=t}getScore(){let t=0,e=0;for(let s=0;s<4;s+=1)for(let n=0;n<8;n+=1){const i=this.getData(n,s);if(i===a.a.black)t+=1;else if(i===a.a.white)e+=1;else if(i!==a.a.void){const i=this.adjacencylist[n][s],r=i.reduce((t,e)=>{const s=this.getData(e.x,e.y);return t+(s===a.a.black?4:s===a.a.white?-1:0)},0);r===4*i.length?t+=1:r===-i.length?e+=1:0!==r&&(t+=.5,e+=.5)}}return{black:t,white:e}}getData(t,e){if(t<0||t>7||e<0||e>3)return a.a.void;const s=1<<(t|e<<3);return this.black&s?a.a.black:this.white&s?a.a.white:this.ban&s?a.a.ban:this.ko&s?a.a.ko:a.a.blank}setData(t,e,s){if(t<0||t>7||e<0||e>3)return;const n=1<<(t|e<<3);switch(this.black&=~n,this.white&=~n,this.ban&=~n,this.ko&=~n,s){case a.a.black:this.black|=n;break;case a.a.white:this.white|=n;break;case a.a.ban:this.ban|=n;break;case a.a.ko:this.ko|=n}}isGameEnd(){return-1==(this.black|this.white|this.ban|this.ko)}updateBanAndKo(t){this.ban=0,this.ko=0;const e=[];for(let t=0;t<4;t+=1)for(let s=0;s<8;s+=1)if(this.getData(s,t)===a.a.blank){const n=this.adjacencylist[s][t];n.reduce((t,e)=>{return t+(this.getData(e.x,e.y)===a.a.blank?0:1)},0)===n.length&&e.push({x:s,y:t})}const s=this.black,n=this.white;e.forEach(e=>{const{x:i,y:r}=e;this.setData(i,r,t),this.updateBlackAndWhite(i,r),this.getData(i,r)===a.a.blank?this.setData(i,r,a.a.ban):this.history.contain(this.black,this.white,p(t))&&this.setData(i,r,a.a.ko),this.black=s,this.white=n})}updateBlackAndWhite(t,e){const s=new d,n=this.adjacencylist[t][e],i=[],r=(t,e,n)=>{if(s.indexof(t,e)>-1)return!1;const i=this.getData(t,e);return i===a.a.blank||i===a.a.ko||i===a.a.ban||i===n&&(s.push(t,e),this.adjacencylist[t][e].reduce((t,e)=>t||r(e.x,e.y,n),!1))};let h,o=!1;const c=this.getData(t,e);n.forEach(t=>{if(-1!==s.indexof(t.x,t.y))return;const e=t.x,n=t.y,l=this.getData(e,n);l===p(c)?(s.clear(),(h=r(e,n,l))||(o=!0,s.forEach((t,e)=>{i.push({x:t,y:e})}))):l===a.a.blank&&(o=!0)}),o||(s.clear(),(h=r(t,e,c))||s.forEach((t,e)=>{i.push({x:t,y:e})})),i.forEach(t=>{this.setData(t.x,t.y,a.a.blank)}),s.clear()}clear(){this.black=0,this.white=0,this.ban=0,this.ko=0,this.currentColor=a.a.black,this.history.clear()}}class f{constructor(t){this.triCheckers=[];let e=!0;const s=1/l;for(let a=0;a<4;a+=1)for(let n=0;n<8;n+=1){const i=new c(90+n*(60*l+s)+a*(60*l+1),520-91*(1+a),60,e,{x:n,y:a},t);this.triCheckers.push(i),e=!e}}update(){this.triCheckers.forEach(t=>{t.update()})}render(t){this.triCheckers.forEach(e=>{e.render(t)})}}class w{constructor(){this.data=new k,this.view=new f(t=>{const{x:e,y:s}=t.coordinate;return this.placePiece(e,s,this.getCurrentColor()),this.getCurrentColor()}),this.updateAllCheckers()}save(){this.data.save()}setCurrentColor(t){this.data.setCurrentColor(t)}undo(){return!!this.data.undo()&&(this.updateBanAndKo(this.getCurrentColor()),this.updateAllCheckers(),!0)}redo(){return!!this.data.redo()&&(this.updateBanAndKo(this.getCurrentColor()),this.updateAllCheckers(),!0)}getScore(){return this.data.getScore()}getData(t,e){return this.data.getData(t,e)}setData(t,e,s){this.data.setData(t,e,s)}placePiece(t,e,s){this.setData(t,e,s),this.updateBlackAndWhite(t,e)}isGameEnd(){return this.data.isGameEnd()}updateBanAndKo(t){this.data.updateBanAndKo(t)}updateBlackAndWhite(t,e){this.data.updateBlackAndWhite(t,e)}updateAllCheckers(){this.view.triCheckers.forEach(t=>{const e=this.getData(t.coordinate.x,t.coordinate.y);t.setData(e)})}update(){this.view.update()}render(t){this.view.render(t)}getCurrentColor(){return this.data.currentColor}handleInput(t,e,s,a,n){const i=this.data.black,r=this.data.white;return this.view.triCheckers.forEach(a=>a.handleInput(t,e,s)),(i!==this.data.black||r!==this.data.white)&&(a&&a(),this.updateBanAndKo(this.getCurrentColor()),this.updateAllCheckers(),this.save(),this.isGameEnd()&&n&&n(),!0)}clear(){this.data.clear(),this.updateAllCheckers()}}w.instance=new w},function(t,e,s){"use strict";s.r(e);var a=class{constructor(){this.states=[],this.top=0}pop(){if(!(this.top<1))return this.states[--this.top]}push(t){this.states[this.top++]=t}peek(){if(this.top>0)return this.states[this.top-1]}length(){return this.top}clear(){delete this.states,this.states=[],this.top=0}start(){const t=this.peek();return t&&t.start&&t.start()}handleInput(){const t=this.peek();return t&&t.handleInput&&t.handleInput()}update(){const t=this.peek();return t&&t.update&&t.update()}render(){const t=this.peek();return t&&t.render&&t.render()}};var n=class{constructor(){this.canvas=document.createElement("canvas"),this.canvas.width=800,this.canvas.height=600,this.ctx=this.canvas.getContext("2d"),this.ms_update_delay=16,this.state_stack=new a}getCanvas(){return this.canvas}handleInput(){this.state_stack.handleInput()}update(){this.state_stack.update()}render(){this.ctx.fillStyle="#CCC",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.state_stack.render()}run(){let t=(new Date).getTime(),e=0;const s=()=>{const a=(new Date).getTime(),n=a-t;for(t=a,e+=n,this.handleInput();e>=this.ms_update_delay;)this.update(),e-=this.ms_update_delay;this.render(),requestAnimationFrame(s)};requestAnimationFrame(s)}changeState(t){this.state_stack.push(t),this.state_stack.start()}getState(){return this.state_stack.peek()}lastState(){this.state_stack.pop(),this.state_stack.start()}};var i=class{constructor(t){this.canvas=t,this.keyDown={},this.keyCodeDown=new Array(256),this.mouseX=0,this.mouseY=0,this.mouseWheel=0,this.lBtnDown=!1,this.mBtnDown=!1,this.rBtnDown=!1,this.mouseLeave=!0}listen(){this.canvas.addEventListener("mouseleave",()=>{this.mouseLeave=!0}),this.canvas.addEventListener("mouseenter",()=>{this.mouseLeave=!1}),this.canvas.addEventListener("mousemove",t=>{this.mouseX=t.offsetX,this.mouseY=t.offsetY}),this.canvas.addEventListener("mousedown",t=>{switch(this.mouseX=t.offsetX,this.mouseY=t.offsetY,t.button){case 0:this.lBtnDown=!0;break;case 1:this.mBtnDown=!0;break;case 2:this.rBtnDown=!0}}),this.canvas.addEventListener("mouseup",t=>{switch(this.mouseX=t.offsetX,this.mouseY=t.offsetY,t.button){case 0:this.lBtnDown=!1;break;case 1:this.mBtnDown=!1;break;case 2:this.rBtnDown=!1}}),this.canvas.addEventListener("wheel",t=>{this.mouseWheel+=Math.round(t.deltaY/100),this.mouseWheel=(this.mouseWheel+100)%100}),window.addEventListener("keydown",t=>{this.keyDown[t.key]=!0,this.keyCodeDown[t.keyCode]=!0}),window.addEventListener("keyup",t=>{this.keyDown[t.key]=!1,this.keyCodeDown[t.keyCode]=!1}),this.canvas.addEventListener("touchstart",t=>{this.mouseX=t.targetTouches[0].clientX-this.canvas.offsetLeft,this.mouseY=t.targetTouches[0].clientY-this.canvas.offsetTop,this.lBtnDown=!0,t.preventDefault()}),this.canvas.addEventListener("touchend",t=>{this.lBtnDown=!1,t.preventDefault()})}};var r=(()=>{const t=new n,e=new i(t.canvas);return e.listen(),{getGame:()=>t,getCtx:()=>t.ctx,getCanvas:()=>t.canvas,getInput:()=>e}})();var h=class{constructor(t,e,s,a,n,i,r,h,o,c,l){this.x=t,this.y=e,this.w=s,this.h=a,this.r=n,this.text=i,this.onclick=r,this.onmousedown=h,this.onmouseup=o,this.onmouseleave=c,this.onnormal=l,this.state=0,this.states={normal:0,pressed:1,hover:2},this.hidden=!1}render(t){if(this.hidden)return;const e=this.w+this.r/2,s=this.h+this.r/2,a=this.x-e/2,n=this.y-s/2,{r:i}=this,r=Math.PI;switch(t.beginPath(),t.lineTo(a,n+s-i),t.arc(a+i,n+i,i,r,1.5*r),t.lineTo(a+e-i,n),t.arc(a+e-i,n+i,i,1.5*r,2*r),t.lineTo(e+a,n+s-i),t.arc(a+e-i,n+s-i,i,0,.5*r),t.lineTo(a+i,s+n),t.arc(a+i,n+s-i,i,.5*r,r),this.state){case this.states.normal:t.fillStyle="white";break;case this.states.pressed:t.fillStyle="gray";break;case this.states.hover:t.fillStyle="yellow"}t.fill(),t.strokeStyle="black",t.stroke(),t.closePath(),t.font="20px Georgia",t.textBaseline="middle",t.textAlign="center",t.fillStyle="black",t.fillText(this.text,this.x,this.y,this.w-this.r/2)}handleInput(t,e,s){if(this.hidden)return;const a=this.x-this.w/2,n=this.y-this.h/2,i=this.x+this.w/2,r=this.y+this.h/2;t>a&&e>n&&t<i&&e<r?s?(this.state===this.states.hover||this.state===this.states.normal?this.onclick&&this.onclick():this.onmousedown&&this.onmousedown(),this.state=this.states.pressed):(this.state===this.states.pressed&&this.onmouseup&&this.onmouseup(),this.state=this.states.hover):(this.state===this.states.pressed?this.onmouseleave&&this.onmouseleave():this.onnormal&&this.onnormal(),this.state=this.states.normal)}},o=s(1),c=s(0);var l=class{constructor(t,e,s){this.board=t,this.onGameEnd=s,this.worker=new Worker("./js/AI.worker.js"),this.worker.onmessage=(t=>{e&&e(t.data)})}run(){this.board.updateBanAndKo(c.a.white),this.board.isGameEnd()?this.onGameEnd&&this.onGameEnd():this.worker.postMessage(this.board.data)}};const u=r.getGame(),d=r.getInput(),p=r.getCtx(),k=o.b.instance,f={gameStart:null,gameEnd:null,debug:null,twoP:null,playersTurn:null,aisTurn:null},w=(()=>{const t={};function e(){u.changeState(f.gameEnd)}const s=new h(80,50,80,50,20,"return",()=>{k.clear(),u.changeState(f.gameStart)}),a=new h(80,150,80,50,20,"undo",()=>{k.undo()&&k.updateAllCheckers()}),n=new h(80,250,80,50,20,"redo",()=>{k.redo()&&k.updateAllCheckers()});return t.handleInput=(t=>{const i=d.mouseX,r=d.mouseY,h=d.lBtnDown;return s.handleInput(i,r,h),n.handleInput(i,r,h),a.handleInput(i,r,h),k.handleInput(i,r,h,t,e)}),t.update=(()=>{k.update()}),t.render=(()=>{k.render(p),n.render(p),a.render(p),s.render(p);const{black:t,white:e}=k.getScore();p.fillText(`Black:[${t}]  White:[${e}]`,650,50)}),t})();f.gameStart=function(){const t={},e=new h(290,120,50,50,20,"2P",()=>{u.changeState(f.twoP)}),s=new h(390,120,50,50,20,"AI",()=>{u.changeState(f.playersTurn)}),a=new h(505,120,80,50,20,"debug",()=>{u.changeState(f.debug)});return t.handleInput=(()=>{const t=d.mouseX,n=d.mouseY,i=d.lBtnDown;e.handleInput(t,n,i),s.handleInput(t,n,i),a.handleInput(t,n,i)}),t.render=(()=>{e.render(p),s.render(p),a.render(p),p.fillStyle="black",p.fillText("GameStart!",400,50)}),t}(),f.gameEnd=function(){const t={},e=new h(80,50,80,50,20,"return",()=>{k.clear(),u.changeState(f.gameStart)}),s=new h(80,150,80,50,20,"undo",()=>{k.undo(),u.lastState()});return t.handleInput=(()=>{const t=d.mouseX,a=d.mouseY,n=d.lBtnDown;e.handleInput(t,a,n),s.handleInput(t,a,n)}),t.update=(()=>{k.update()}),t.render=(()=>{k.render(p),e.render(p),s.render(p),p.fillStyle="black",p.fillText("GameEnd!",400,30);const{black:t,white:a}=k.getScore();p.fillText(`Black:[${t}]  White:[${a}]`,400,80),p.fillText(`${t>a?"Black":"White"} Win`,400,130)}),t}(),f.debug=(()=>{const t={},e=new h(210,50,80,50,20,"black",()=>{k.setCurrentColor("black"===e.text?c.a.white:c.a.black),k.updateBanAndKo(k.getCurrentColor()),k.updateAllCheckers(),k.isGameEnd()&&u.changeState(f.gameEnd)}),s=new h(460,50,80,50,20,"clear",()=>{k.clear()});return t.handleInput=(()=>{const t=d.mouseX,a=d.mouseY,n=d.lBtnDown;e.handleInput(t,a,n),s.handleInput(t,a,n),w.handleInput()}),t.update=(()=>{e.text=k.getCurrentColor()===c.a.white?"white":"black",k.getCurrentColor()===c.a.white?e.x=210:e.x=330,w.update()}),t.render=(()=>{e.render(p),s.render(p),w.render()}),t})(),f.twoP=(()=>{const t={};function e(){k.setCurrentColor(k.getCurrentColor()===c.a.black?c.a.white:c.a.black)}return t.handleInput=(()=>{w.handleInput(e)}),t.update=(()=>{w.update()}),t.render=(()=>{w.render(),p.fillStyle="black",p.fillText("current:",240,50),p.fillStyle=k.getCurrentColor()===c.a.black?"black":"white",p.fillRect(300,40,20,20)}),t})(),f.playersTurn=function(){const t={};function e(){u.changeState(f.aisTurn)}return t.handleInput=(()=>{w.handleInput(e)}),t.update=(()=>{w.update()}),t.render=(()=>{w.render(),p.fillStyle="black",p.fillText("player",400,50)}),t}(),f.aisTurn=function(){const t={};let e="";const s=new l(k,t=>{k.placePiece(t.x,t.y,c.a.white),k.updateBanAndKo(c.a.black),k.updateAllCheckers(),k.data.history.current-=1,k.save(),u.changeState(f.playersTurn),k.isGameEnd()&&u.changeState(f.gameEnd)},()=>{k.updateAllCheckers(),u.changeState(f.playersTurn),u.changeState(f.gameEnd)});return t.handleInput=(()=>{}),t.start=(()=>{s.run()}),t.update=(()=>{w.update(),(e+=".").length>=16&&(e="")}),t.render=(()=>{w.render(),p.fillStyle="black",p.fillText("AI thinking:",400,50),p.fillText(e,400,80)}),t}();var y=f;!function(){const t=r.getGame();t.changeState(y.gameStart),document.getElementById("triango").appendChild(t.getCanvas()),t.run()}()}]);