(this["webpackJsonpmock-trader-client"]=this["webpackJsonpmock-trader-client"]||[]).push([[0],{47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},57:function(e,t,a){},59:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var s=a(2),c=a(3),r=a.n(c),i=a(40),n=a.n(i),l=(a(47),a(10)),o=a(11),d=(a(48),a(6)),j=(a(49),a(30)),h=(j.a.initializeApp({apiKey:"AIzaSyBwnAONdyUlykAZCi8q5EzJWxP5EHxGK3w",authDomain:"mock-trader.firebaseapp.com",projectId:"mock-trader",storageBucket:"mock-trader.appspot.com",messagingSenderId:"957707573896",appId:"1:957707573896:web:b77f2a103f2d22f8b41d3d",measurementId:"G-HKP4CNXBF9"}),j.a.auth()),u=Object(c.createContext)(),b=function(e){var t=e.reducer,a=e.initialState,r=e.children;return Object(s.jsx)(u.Provider,{value:Object(c.useReducer)(t,a),children:r})},m=function(){return Object(c.useContext)(u)};var p=function(){var e=m(),t=Object(d.a)(e,2),a=(t[0].userID,t[1]),r=Object(c.useState)(""),i=Object(d.a)(r,2),n=i[0],o=i[1],j=Object(c.useState)(""),u=Object(d.a)(j,2),b=u[0],p=u[1];return Object(s.jsxs)("div",{className:"login row",children:[Object(s.jsx)("div",{className:"login_image col-sm-6 d-none d-sm-block",children:Object(s.jsx)("img",{alt:"login image",src:"/mock-trader-full-stack/image/login.jpg"})}),Object(s.jsx)("div",{className:"login_form col-sm-6",children:Object(s.jsxs)("form",{children:[Object(s.jsx)("h3",{children:"Welcome to Mock Trader"}),Object(s.jsx)("br",{}),"Email",Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"email",size:"22",value:n,onChange:function(e){return o(e.target.value)}}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),"Password",Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"password",size:"22",value:b,onChange:function(e){return p(e.target.value)}}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsxs)("button",{type:"submit",onClick:function(e){e.preventDefault(),h.signInWithEmailAndPassword(n,b).then((function(){var e=h.currentUser;e.emailVerified?(localStorage.setItem("userID",e.uid),a({type:"SET_USER",userID:e.uid}),window.location.reload()):(e.sendEmailVerification(),alert("Email not verified.\nVerification link sent to ".concat(n,".\nPlease verify your email.")),h.signOut())})).catch((function(e){return alert(e.message)}))},className:"login_signIn btn btn-success",children:["Sign In ",Object(s.jsx)("i",{className:"fa fa-sign-in"})]}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("div",{children:Object(s.jsx)(l.b,{to:"/signup",children:Object(s.jsx)("a",{children:"New user? Create account here."})})}),Object(s.jsx)("div",{children:Object(s.jsx)(l.b,{to:"/reset",children:Object(s.jsx)("a",{children:"Forgot password? Reset password here."})})})]})})]})};a(57);var O=function(){var e=m(),t=Object(d.a)(e,2),a=t[0],c=a.fund,r=a.portfolio,i=t[1];function n(e){return(e=e.toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}return Object(s.jsx)("div",{className:"header container",children:Object(s.jsxs)("div",{className:"header_row row",children:[Object(s.jsxs)("div",{className:"header_cash col-5 col-sm-4",children:[Object(s.jsxs)("div",{className:"header_cash_top row",children:["Buying Power \u2003",Object(s.jsx)("i",{className:"fa fa-money"})]}),Object(s.jsxs)("div",{className:"header_cash_bottom row",children:["$",c?n(c):""]})]}),Object(s.jsxs)("div",{className:"header_stock col-5 col-sm-4",children:[Object(s.jsxs)("div",{className:"header_stock_top row",children:["Investing \u2003",Object(s.jsx)("i",{className:"fa fa-line-chart"})]}),Object(s.jsxs)("div",{className:"header_stock_bottom row",children:["$",r.shares.length?n(r.shares.reduce((function(e,t,a){return e+t*parseFloat(r.price[a].replace(",",""))}),0)):0]})]}),Object(s.jsx)("div",{className:"header_logout col-2",children:Object(s.jsx)("button",{className:"header_button",onClick:function(){localStorage.setItem("userID",""),i({type:"RESET",reset:null}),window.location.reload()},children:Object(s.jsx)(l.b,{to:"/",children:Object(s.jsx)("i",{className:"fa fa-power-off fa-2x"})})})})]})})},x=a(9),f=a.n(x),v=a(18),g=(a(59),a(19)),_=a.n(g);var y=function(){var e=m(),t=Object(d.a)(e,2),a=t[0],r=a.watchlist,i=a.portfolio,n=t[1];Object(c.useEffect)((function(){if(localStorage.getItem("userID")){function e(){return(e=Object(v.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://mock-trader.glitch.me/loadData",e.next=3,_.a.post("https://mock-trader.glitch.me/loadData",{userID:localStorage.getItem("userID")});case 3:return t=e.sent,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n({type:"TOGGLE_LOADING",loadingDisplay:"block"}),function(){return e.apply(this,arguments)}().then((function(e){var t=e.data.data;n({type:"LOAD_DATA",data:{fund:t.fund,watchlist:t.watchlist,portfolio:t.portfolio,history:t.history}}),n({type:"TOGGLE_LOADING",loadingDisplay:"none"})}))}}),[]);var o=function(e){e.preventDefault();var t=e.currentTarget.value;function a(){return(a=Object(v.a)(f.a.mark((function e(){var a,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://mock-trader.glitch.me/getPrice/"+t,e.next=3,_.a.get(a);case 3:return s=e.sent,e.abrupt("return",s);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n({type:"TOGGLE_LOADING",loadingDisplay:"block"}),function(){return a.apply(this,arguments)}().then((function(e){if(""==e.data.price)alert("No such stock exists!");else{var a=i.ticker.includes(t.toUpperCase())?i.shares[i.ticker.indexOf(t.toUpperCase())]:0,s=i.ticker.includes(t.toUpperCase())?i.averageC[i.ticker.indexOf(t.toUpperCase())]:0;n({type:"SET_SEARCH",search:{price:e.data.price,plusButtonClass:r.ticker.includes(t.toUpperCase())?"fa fa-minus-square fa-3x":"fa fa-plus-square fa-3x",searchedTicker:t.toUpperCase(),shares:a,averCost:s}}),n({type:"TOGGLE_LOADING",loadingDisplay:"none"})}}))},j=r.ticker.map((function(e,t){return Object(s.jsx)("div",{className:"home_stock row",children:Object(s.jsx)("button",{className:"home_watchlist_button",value:e,onClick:o,children:Object(s.jsxs)(l.b,{to:"/search",className:"home_watchlist_link",children:[Object(s.jsx)("div",{className:"home_stock_ticker col-6",children:e}),Object(s.jsxs)("div",{className:"home_stock_price col-6",children:["$",r.price[t]]})]})})},t+"wl")})),h=i.ticker.map((function(e,t){return Object(s.jsx)("div",{className:"home_stock row",children:Object(s.jsx)("button",{className:"home_watchlist_button",value:e,onClick:o,children:Object(s.jsxs)(l.b,{to:"/search",className:"home_watchlist_link",children:[Object(s.jsx)("div",{className:"home_stock_ticker col-4",children:e}),Object(s.jsxs)("div",{className:"home_stock_share col-4",children:[i.shares[t]," shares"]}),Object(s.jsxs)("div",{className:"home_stock_price col-4",children:["$",i.price[t]]})]})})},t+"in")}));return Object(s.jsx)("div",{className:"home container",children:Object(s.jsxs)("div",{className:"home_row row",children:[Object(s.jsxs)("div",{className:"home_investing row",children:[Object(s.jsxs)("div",{className:"home_header row",children:[Object(s.jsx)("div",{className:"home_header_title col-6",children:"Investing"}),Object(s.jsx)("div",{className:"home_header_icon col-6",children:Object(s.jsx)("i",{className:"fa fa-line-chart"})})]}),h]}),Object(s.jsxs)("div",{className:"home_watchlist row",children:[Object(s.jsxs)("div",{className:"home_header row",children:[Object(s.jsx)("div",{className:"home_header_title col-6",children:"Watchlist"}),Object(s.jsx)("div",{className:"home_header_icon col-6",children:Object(s.jsx)("i",{className:"fa fa-bolt"})})]}),j]})]})})};a(77);var k=function(){return Object(s.jsx)("div",{className:"footer container",children:Object(s.jsxs)("div",{className:"footer_row row",children:[Object(s.jsx)("div",{className:"footer_home col-4",children:Object(s.jsx)(l.b,{to:"/",children:Object(s.jsx)("button",{className:"footer_button",children:Object(s.jsx)("i",{className:"fa fa-home fa-2x"})})})}),Object(s.jsx)("div",{className:"footer_search col-4",children:Object(s.jsx)(l.b,{to:"/search",children:Object(s.jsx)("button",{className:"footer_button",children:Object(s.jsx)("i",{className:"fa fa-search fa-2x"})})})}),Object(s.jsx)("div",{className:"footer_history col-4",children:Object(s.jsx)(l.b,{to:"/history",children:Object(s.jsx)("button",{className:"footer_button",children:Object(s.jsx)("i",{className:"fa fa-history fa-2x"})})})})]})})};a(78);var N=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),a=t[0],r=t[1],i=m(),n=Object(d.a)(i,2),l=n[0],o=(l.userID,l.search),j=l.watchlist,h=l.fund,u=l.portfolio,b=n[1],p=Object(c.useState)(["Trade","purple","hidden","hidden"]),O=Object(d.a)(p,2),x=O[0],g=O[1],y=Object(c.useState)(""),k=Object(d.a)(y,2),N=k[0],w=k[1],D=Object(c.useState)(""),C=Object(d.a)(D,2),T=C[0],I=C[1],E=Object(c.useState)(""),S=Object(d.a)(E,2),G=S[0],A=S[1],L=Object(c.useState)(""),U=Object(d.a)(L,2),P=U[0],F=U[1],B=Object(c.useState)(!1),R=Object(d.a)(B,2),$=R[0],H=R[1],M=Object(c.useState)(!1),q=Object(d.a)(M,2),z=q[0],W=q[1];function V(e){return(e=(e=parseFloat(e)).toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}var Y=function(e){if(e.preventDefault(),a.split(" ").join("")){function t(){return(t=Object(v.a)(f.a.mark((function e(){var t,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://mock-trader.glitch.me/getPrice/"+a,e.next=3,_.a.get(t);case 3:return s=e.sent,e.abrupt("return",s);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}b({type:"TOGGLE_LOADING",loadingDisplay:"block"}),function(){return t.apply(this,arguments)}().then((function(e){if(""==e.data.price)alert("No such stock exists!"),b({type:"TOGGLE_LOADING",loadingDisplay:"none"});else{var t=u.ticker.includes(a.toUpperCase())?u.shares[u.ticker.indexOf(a.toUpperCase())]:0,s=u.ticker.includes(a.toUpperCase())?u.averageC[u.ticker.indexOf(a.toUpperCase())]:0;b({type:"SET_SEARCH",search:{price:e.data.price,plusButtonClass:j.ticker.includes(a.toUpperCase())?"fa fa-minus-square fa-3x":"fa fa-plus-square fa-3x",searchedTicker:a.toUpperCase(),shares:t,averCost:s}}),b({type:"TOGGLE_LOADING",loadingDisplay:"none"}),g(["Trade","purple","hidden","hidden"])}}))}else alert("ticker field is empty")},K=o.price&&o.averCost?parseFloat(o.price.replace(",",""))/parseFloat(o.averCost.replace(",",""))-1>0?"green":parseFloat(o.price.replace(",",""))/parseFloat(o.averCost.replace(",",""))-1<0?"red":"white":"white";return Object(c.useEffect)((function(){if(localStorage.getItem("userID")){function e(){return(e=Object(v.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://mock-trader.glitch.me/loadData",e.next=3,_.a.post("https://mock-trader.glitch.me/loadData",{userID:localStorage.getItem("userID")});case 3:return t=e.sent,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}b({type:"TOGGLE_LOADING",loadingDisplay:"block"}),function(){return e.apply(this,arguments)}().then((function(e){var t=e.data.data;b({type:"LOAD_DATA",data:{fund:t.fund,watchlist:t.watchlist,portfolio:t.portfolio,history:t.history}}),b({type:"TOGGLE_LOADING",loadingDisplay:"none"})}))}}),[]),Object(s.jsx)("div",{className:"search container",children:Object(s.jsxs)("div",{className:"search_row row",children:[Object(s.jsxs)("div",{className:"search_input_section row",children:[Object(s.jsx)("input",{className:"search_input",type:"text",value:a,onChange:function(e){return r(e.target.value)},placeholder:"stock ticker symbol",onKeyPress:function(e){"Enter"===e.key&&Y(e)}}),Object(s.jsx)("button",{className:"search_button",onClick:Y,id:"searchB",children:Object(s.jsx)("i",{className:"fa fa-search"})})]}),o.searchedTicker?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"search_header row",children:[Object(s.jsxs)("div",{className:"search_header_detail col-6",children:[Object(s.jsx)("div",{className:"search_header_title row",children:o.searchedTicker}),Object(s.jsxs)("div",{className:"search_header_price row",children:["$",o.price]})]}),Object(s.jsx)("div",{className:"search_add col-6",children:Object(s.jsx)("button",{className:"search_add_button",onClick:function(e){if(e.preventDefault(),b({type:"TOGGLE_LOADING",loadingDisplay:"block"}),j.ticker.includes(o.searchedTicker.toUpperCase())){var t=j.ticker.indexOf(o.searchedTicker.toUpperCase());j.ticker.splice(t,1)}else j.ticker.push(o.searchedTicker.toUpperCase());function a(){return(a=Object(v.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.post("https://mock-trader.glitch.me/updateWatchlist",{userID:localStorage.getItem("userID"),newWatchlist:j});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){return a.apply(this,arguments)})().then((function(e){o.plusButtonClass=e.data.watchlist.ticker.includes(o.searchedTicker.toUpperCase())?"fa fa-minus-square fa-3x":"fa fa-plus-square fa-3x",b({type:"UPDATE_WATCHLIST",watchlist:e.data.watchlist}),b({type:"TOGGLE_LOADING",loadingDisplay:"none"})}))},children:Object(s.jsx)("i",{className:o.plusButtonClass})})})]}),Object(s.jsxs)("div",{className:"search_position row",children:[Object(s.jsx)("div",{className:"search_position_title col-12",children:"POSITION"}),Object(s.jsxs)("div",{className:"search_shares col-6",children:[Object(s.jsx)("div",{className:"search_shares_top row",children:"Shares"}),Object(s.jsx)("div",{className:"search_shares_bottom row",children:o.shares})]}),Object(s.jsxs)("div",{className:"search_value col-6",children:[Object(s.jsx)("div",{className:"search_value_top row",children:"Market Value"}),Object(s.jsxs)("div",{className:"search_value_bottom row",children:["$",V(o.shares*parseFloat(o.price.replace(",","")))]})]}),Object(s.jsxs)("div",{className:"search_cost col-12",children:[Object(s.jsx)("div",{className:"search_cost_top row",children:"Average Cost"}),Object(s.jsxs)("div",{className:"search_cost_bottom row",children:["$",o.averCost?V(o.averCost.replace(",","")):V(o.averCost)]})]}),Object(s.jsxs)("div",{className:"search_return col-6",children:[Object(s.jsx)("div",{className:"search_return_top row",children:"Total Return"}),Object(s.jsxs)("div",{className:"search_return_bottom row",style:{color:K},children:["$","".concat(V(o.shares*(parseFloat(o.price.replace(",",""))-parseFloat(o.averCost?o.averCost.replace(",",""):o.averCost))))," ",Object(s.jsx)("br",{})," ",o.averCost?"(".concat(V(100*(parseFloat(o.price.replace(",",""))/parseFloat(o.averCost?o.averCost.replace(",",""):o.averCost)-1)),"%)"):null]})]}),Object(s.jsxs)("div",{className:"search_trade col-6",children:[Object(s.jsx)("button",{className:"search_trade_button search_sell",style:{visibility:x[3]},onClick:function(){function e(){return(e=Object(v.a)(f.a.mark((function e(){var t,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://mock-trader.glitch.me/getPrice/"+o.searchedTicker,e.next=3,_.a.get(t);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}document.getElementById("limitOrder").checked&&document.getElementById("limitOrder").click(),document.getElementById("sShares").value&&(document.getElementById("sShares").value="",I("")),window.$("#sellModal").modal("show"),b({type:"TOGGLE_LOADING",loadingDisplay:"block"}),function(){return e.apply(this,arguments)}().then((function(e){var t=u.ticker.includes(o.searchedTicker.toUpperCase())?u.shares[u.ticker.indexOf(o.searchedTicker.toUpperCase())]:0,a=u.ticker.includes(o.searchedTicker.toUpperCase())?u.averageC[u.ticker.indexOf(o.searchedTicker.toUpperCase())]:0;b({type:"SET_SEARCH",search:{price:e.data.price,plusButtonClass:j.ticker.includes(o.searchedTicker.toUpperCase())?"fa fa-minus-square fa-3x":"fa fa-plus-square fa-3x",searchedTicker:o.searchedTicker.toUpperCase(),shares:t,averCost:a}}),b({type:"TOGGLE_LOADING",loadingDisplay:"none"})}))},children:"Sell"}),Object(s.jsx)("button",{className:"search_trade_button search_buy",style:{visibility:x[2]},onClick:function(){function e(){return(e=Object(v.a)(f.a.mark((function e(){var t,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://mock-trader.glitch.me/getPrice/"+o.searchedTicker,e.next=3,_.a.get(t);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}document.getElementById("limitPrice").checked&&document.getElementById("limitPrice").click(),document.getElementById("bShares").value&&(document.getElementById("bShares").value="",w("")),window.$("#buyModal").modal("show"),b({type:"TOGGLE_LOADING",loadingDisplay:"block"}),function(){return e.apply(this,arguments)}().then((function(e){var t=u.ticker.includes(o.searchedTicker.toUpperCase())?u.shares[u.ticker.indexOf(o.searchedTicker.toUpperCase())]:0,a=u.ticker.includes(o.searchedTicker.toUpperCase())?u.averageC[u.ticker.indexOf(o.searchedTicker.toUpperCase())]:0;b({type:"SET_SEARCH",search:{price:e.data.price,plusButtonClass:j.ticker.includes(o.searchedTicker.toUpperCase())?"fa fa-minus-square fa-3x":"fa fa-plus-square fa-3x",searchedTicker:o.searchedTicker.toUpperCase(),shares:t,averCost:a}}),b({type:"TOGGLE_LOADING",loadingDisplay:"none"})}))},children:"Buy"}),Object(s.jsx)("button",{className:"search_trade_button search_trade_b",style:{backgroundColor:x[1]},onClick:function(){return g("Trade"===x[0]?["X","grey","",o.shares?"":"hidden"]:["Trade","purple","hidden","hidden"])},children:x[0]})]})]})]}):null,Object(s.jsx)("div",{className:"modal",role:"dialog",id:"buyModal",children:Object(s.jsx)("div",{className:"modal-dialog",role:"document",children:Object(s.jsxs)("div",{className:"modal-content",children:[Object(s.jsxs)("div",{className:"modal-header row",children:[Object(s.jsxs)("h3",{className:"modal-title",children:["Buy ",o.searchedTicker]}),Object(s.jsx)("button",{type:"button",className:"close modal_close_button","data-dismiss":"modal","aria-label":"Close",children:Object(s.jsx)("span",{"aria-hidden":"true",className:"modal_x",children:"\xd7"})}),Object(s.jsxs)("p",{className:"modal_fund col-12",children:["$",h?V(h):""," available"]})]}),Object(s.jsxs)("div",{className:"modal-body",children:[Object(s.jsxs)("div",{className:"modal_share",children:[Object(s.jsx)("div",{className:"modal_share_text",children:"Number of Shares"}),Object(s.jsx)("div",{className:"modal_share_input",children:Object(s.jsx)("input",{type:"number",placeholder:"0",id:"bShares",onChange:function(e){return w(e.target.value)}})})]}),Object(s.jsxs)("div",{className:"modal_price",children:[Object(s.jsx)("div",{className:"modal_price_text",children:"Market Price"}),Object(s.jsxs)("div",{className:"modal_price_num",children:["$",o.price]})]}),Object(s.jsxs)("div",{className:"modal_cost",children:[Object(s.jsx)("div",{className:"modal_cost_text",children:"Estimated Cost"}),Object(s.jsxs)("div",{className:"modal_cost_num",children:["$",N?V(N*parseFloat(o.price.replace(",",""))):0]})]}),Object(s.jsxs)("div",{className:"modal_limit",children:[Object(s.jsxs)("div",{className:"modal_limit_check",children:[Object(s.jsx)("label",{children:"Limit Price"}),Object(s.jsx)("input",{type:"checkbox",id:"limitPrice",onChange:function(e){return e.target.checked||(A(""),document.getElementById("ptext").value=""),H(e.target.checked)}})]}),Object(s.jsx)("div",{className:"modal_limit_input",children:Object(s.jsx)("input",{type:"number",min:"0",placeholder:"$",id:"ptext",onChange:function(e){return A(e.target.value)},style:{backgroundColor:$?"lightgreen":"darkgrey"},disabled:!$})})]})]}),Object(s.jsxs)("div",{className:"modal-footer",children:[Object(s.jsx)("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal",children:"Cancel"}),Object(s.jsx)("button",{type:"button",className:"btn btn-success",onClick:function(e){if(e.preventDefault(),!N.split(" ").join("")||parseFloat(N)<=0)alert("Enter number of shares more than 0.");else{function t(){return(t=Object(v.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.post("https://mock-trader.glitch.me/buyTicker",{userID:localStorage.getItem("userID"),ticker:o.searchedTicker,shares:parseFloat(N),limitPrice:parseFloat(G)});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}b({type:"TOGGLE_LOADING",loadingDisplay:"block"}),function(){return t.apply(this,arguments)}().then((function(e){if(e.data.success){var t=e.data.data;alert(t.message),b({type:"UPDATE_PORTFOLIO",portfolio:t.data.portfolio}),b({type:"UPDATE_FUND",fund:t.data.fund}),b({type:"UPDATE_HISTORY",history:t.data.history}),window.$("#buyModal").modal("hide"),r(o.searchedTicker),document.getElementById("searchB").click()}else alert(e.data.message),b({type:"TOGGLE_LOADING",loadingDisplay:"none"})}))}},children:"Buy"})]})]})})}),Object(s.jsx)("div",{className:"modal",role:"dialog",id:"sellModal",children:Object(s.jsx)("div",{className:"modal-dialog",role:"document",children:Object(s.jsxs)("div",{className:"modal-content",children:[Object(s.jsxs)("div",{className:"modal-header row",children:[Object(s.jsxs)("h3",{className:"modal-title",children:["Sell ",o.searchedTicker]}),Object(s.jsx)("button",{type:"button",className:"close modal_close_button","data-dismiss":"modal","aria-label":"Close",children:Object(s.jsx)("span",{"aria-hidden":"true",className:"modal_x",children:"\xd7"})}),Object(s.jsxs)("p",{className:"modal_fund col-12",children:[o.shares," shares available"]})]}),Object(s.jsxs)("div",{className:"modal-body",children:[Object(s.jsxs)("div",{className:"modal_share",children:[Object(s.jsx)("div",{className:"modal_share_text",children:"Number of Shares"}),Object(s.jsx)("div",{className:"modal_share_input",children:Object(s.jsx)("input",{type:"number",placeholder:"0",id:"sShares",onChange:function(e){return I(e.target.value)}})})]}),Object(s.jsxs)("div",{className:"modal_price",children:[Object(s.jsx)("div",{className:"modal_price_text",children:"Market Price"}),Object(s.jsxs)("div",{className:"modal_price_num",children:["$",o.price]})]}),Object(s.jsxs)("div",{className:"modal_cost",children:[Object(s.jsx)("div",{className:"modal_cost_text",children:"Estimated Credit"}),Object(s.jsxs)("div",{className:"modal_cost_num",children:["$",T?V(T*parseFloat(o.price.replace(",",""))):0]})]}),Object(s.jsxs)("div",{className:"modal_limit",children:[Object(s.jsxs)("div",{className:"modal_limit_check",children:[Object(s.jsx)("label",{children:"Limit Order"}),Object(s.jsx)("input",{type:"checkbox",id:"limitOrder",onChange:function(e){return e.target.checked||(F(""),document.getElementById("oText").value=""),W(e.target.checked)}})]}),Object(s.jsx)("div",{className:"modal_limit_input",children:Object(s.jsx)("input",{type:"number",placeholder:"$",id:"oText",onChange:function(e){return F(e.target.value)},style:{backgroundColor:z?"lightgreen":"darkgrey"},disabled:!z})})]})]}),Object(s.jsxs)("div",{className:"modal-footer",children:[Object(s.jsx)("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal",children:"Cancel"}),Object(s.jsx)("button",{type:"button",className:"btn btn-success",onClick:function(e){if(e.preventDefault(),!T.split(" ").join("")||parseFloat(T)<=0)alert("Enter number of shares more than 0.");else if(parseFloat(T)>o.shares)alert("You only have ".concat(o.shares," shares!"));else{function t(){return(t=Object(v.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.post("https://mock-trader.glitch.me/sellTicker",{userID:localStorage.getItem("userID"),ticker:o.searchedTicker,shares:parseFloat(T),limitOrder:parseFloat(P)});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}b({type:"TOGGLE_LOADING",loadingDisplay:"block"}),function(){return t.apply(this,arguments)}().then((function(e){if(e.data.success){var t=e.data.data;alert(t.message),b({type:"UPDATE_PORTFOLIO",portfolio:t.data.portfolio}),b({type:"UPDATE_FUND",fund:t.data.fund}),b({type:"UPDATE_HISTORY",history:t.data.history}),window.$("#sellModal").modal("hide"),r(o.searchedTicker),document.getElementById("searchB").click()}else alert(e.data.message),b({type:"TOGGLE_LOADING",loadingDisplay:"none"})}))}},children:"Sell"})]})]})})})]})})};a(79);var w=function(){var e=m(),t=Object(d.a)(e,2),a=t[0],r=a.history,i=a.loadingDisplay,n=t[1];function l(e){return(e=e.toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}var o=0!==r.ticker.length?r.ticker.map((function(e,t){var a=new Date(r.date[t]);return a=new Date(a.getTime()-6e4*a.getTimezoneOffset()).toDateString(),Object(s.jsxs)("div",{className:"history_list row",children:[Object(s.jsxs)("div",{className:"history_list_top row",children:[Object(s.jsxs)("div",{className:"history_list_stock col-6",children:[e,": ",r.limit[t]]}),Object(s.jsx)("div",{className:"history_list_price col-6",children:r.value[t]<0?"-$".concat(l(Math.abs(r.value[t]))):"$".concat(l(r.value[t]))})]}),Object(s.jsxs)("div",{className:"history_list_bottom row",children:[Object(s.jsx)("div",{className:"history_list_date col-6",children:a}),Object(s.jsx)("div",{className:"history_list_value col-6",children:"".concat(r.shares[t]," shares @ $").concat(r.price[t])})]})]},t+"hist")})):Object(s.jsx)("div",{className:"history_list row",children:"block"===i?"":Object(s.jsxs)(s.Fragment,{children:["You Have No History. ",Object(s.jsx)("br",{})," Go Make Some!!"]})});return Object(c.useEffect)((function(){if(console.log(localStorage.getItem("userID")),localStorage.getItem("userID")){function e(){return(e=Object(v.a)(f.a.mark((function e(){var t,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://mock-trader.glitch.me/loadData",console.log(t),e.next=4,_.a.post(t,{userID:localStorage.getItem("userID")});case 4:return a=e.sent,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n({type:"TOGGLE_LOADING",loadingDisplay:"block"}),function(){return e.apply(this,arguments)}().then((function(e){var t=e.data.data;console.log(t.watchlist,t.portfolio,t.history),n({type:"LOAD_DATA",data:{fund:t.fund,watchlist:t.watchlist,portfolio:t.portfolio,history:t.history}}),n({type:"TOGGLE_LOADING",loadingDisplay:"none"})}))}}),[]),Object(s.jsx)("div",{className:"history container",children:Object(s.jsx)("div",{className:"history_row row",children:Object(s.jsxs)("div",{className:"history_section row",children:[Object(s.jsx)("div",{className:"history_header row",children:"History"}),o]})})})};a(80);var D=function(){var e=m(),t=Object(d.a)(e,1)[0].loadingDisplay;return Object(s.jsx)("div",{className:"loading",style:{display:t},children:Object(s.jsxs)("div",{className:"loading_row row",children:[Object(s.jsx)("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw col-12"}),Object(s.jsx)("div",{className:"col-12 text",children:"Loading . . . "})]})})};a(81);var C=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),a=t[0],r=t[1],i=Object(c.useState)(""),n=Object(d.a)(i,2),o=n[0],j=n[1],u=Object(c.useState)(null),b=Object(d.a)(u,2),m=b[0],p=b[1];return Object(s.jsxs)("div",{className:"signup row",children:[Object(s.jsx)("div",{className:"login_image col-sm-6 d-none d-sm-block",children:Object(s.jsx)("img",{alt:"login image",src:"/mock-trader-full-stack/image/login.jpg"})}),Object(s.jsx)("div",{className:"login_form col-sm-6",children:Object(s.jsxs)("form",{children:[Object(s.jsx)("h4",{children:"Create Account on Mock Trader"}),Object(s.jsx)("br",{}),"Email",Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"email",size:"22",value:a,onChange:function(e){return r(e.target.value)}}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),"Password",Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"password",size:"22",value:o,onChange:function(e){return j(e.target.value)}}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("button",{onClick:function(e){e.preventDefault(),m||h.createUserWithEmailAndPassword(a,o).then((function(){h.currentUser.sendEmailVerification().then((function(){h.signOut(),alert("Verification link sent to ".concat(a,". \n Please click on the link to verify your email and log into your acount.")),p(!0),document.getElementById("signup").click()})).catch((function(e){alert(e)}))})).catch((function(e){return alert(e.message)}))},className:"login_signUp btn btn-success",children:Object(s.jsxs)(l.b,{to:m?"/":"/signup",className:"signUp_link",id:"signup",children:["Sign Up ",Object(s.jsx)("i",{className:"fa fa-user-plus"})]})}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("div",{children:Object(s.jsx)(l.b,{to:"/",children:Object(s.jsx)("a",{children:"Existing user? Sign in here."})})}),Object(s.jsx)("div",{children:Object(s.jsx)(l.b,{to:"/reset",children:Object(s.jsx)("a",{children:"Forgot password? Reset password here."})})})]})})]})};a(82);var T=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),a=t[0],r=t[1];return Object(s.jsxs)("div",{className:"reset row",children:[Object(s.jsx)("div",{className:"reset_image col-sm-6 d-none d-sm-block",children:Object(s.jsx)("img",{alt:"reset image",src:"/mock-trader-full-stack/image/login.jpg"})}),Object(s.jsx)("div",{className:"reset_form col-sm-6",children:Object(s.jsxs)("form",{children:[Object(s.jsx)("h4",{children:"Mock Trader Password Reset"}),Object(s.jsx)("br",{}),"Email",Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"email",size:"22",value:a,onChange:function(e){return r(e.target.value)}}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsxs)("button",{type:"submit",onClick:function(e){e.preventDefault(),h.sendPasswordResetEmail(a).then((function(){alert("Password reset link sent to ".concat(a,".")),r(""),document.getElementById("login_link").click()})).catch((function(e){alert(e.message)})).catch((function(e){alert(e.message)}))},className:"reset_pass btn btn-success",children:["Reset Password ",Object(s.jsx)("i",{className:"fa fa-key"})]}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("div",{children:Object(s.jsx)(l.b,{to:"/signup",children:Object(s.jsx)("a",{children:"New user? Create account here."})})}),Object(s.jsx)("div",{children:Object(s.jsx)(l.b,{to:"/",children:Object(s.jsx)("a",{id:"login_link",children:"Remember Password? Sign in here."})})})]})})]})};var I=function(){var e,t;return e=localStorage.getItem("userID")?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(O,{}),Object(s.jsx)(D,{}),Object(s.jsx)(y,{}),Object(s.jsx)(k,{})]}):Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(D,{}),Object(s.jsx)(p,{})]}),t=localStorage.getItem("userID")?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(O,{}),Object(s.jsx)(D,{}),Object(s.jsx)(y,{}),Object(s.jsx)(k,{})]}):Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(D,{}),Object(s.jsx)(C,{})]}),Object(s.jsx)(l.a,{basename:"/mock-trader-full-stack",children:Object(s.jsx)("div",{className:"App",children:Object(s.jsxs)(o.c,{children:[Object(s.jsx)(o.a,{path:"/search",children:localStorage.getItem("userID")?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(O,{}),Object(s.jsx)(D,{}),Object(s.jsx)(N,{}),Object(s.jsx)(k,{})]}):Object(s.jsx)("div",{children:"Page access not authorized!"})}),Object(s.jsx)(o.a,{path:"/history",children:localStorage.getItem("userID")?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(O,{}),Object(s.jsx)(D,{}),Object(s.jsx)(w,{}),Object(s.jsx)(k,{})]}):Object(s.jsx)("div",{children:"Page access not authorized!"})}),Object(s.jsx)(o.a,{path:"/empty",children:Object(s.jsxs)("div",{children:["Verification link sent to your email! ",Object(s.jsx)("br",{}),"Please click on link to verify email....then ",Object(s.jsx)("button",{children:Object(s.jsx)(l.b,{to:"/",children:"Login"})})]})}),Object(s.jsx)(o.a,{path:"/signup",children:t}),Object(s.jsx)(o.a,{path:"/reset",children:Object(s.jsx)(T,{})}),Object(s.jsx)(o.a,{path:"/",children:e})]})})})},E=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,84)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),s(e),c(e),r(e),i(e)}))},S=a(14),G={userID:"",loadingDisplay:"none",fund:"",search:{price:0,plusButtonClass:"",searchedTicker:"",shares:0,averCost:0},watchlist:{ticker:[],price:[]},portfolio:{ticker:[],price:[],shares:[],averageC:[]},history:{ticker:[],price:[],shares:[],value:[],limit:[],date:[]}},A=function(e,t){switch(t.type){case"RESET":return G;case"SET_USER":return Object(S.a)(Object(S.a)({},e),{},{userID:t.userID});case"LOAD_DATA":return Object(S.a)(Object(S.a)({},e),{},{fund:t.data.fund,watchlist:t.data.watchlist,portfolio:t.data.portfolio,history:t.data.history});case"SET_SEARCH":return Object(S.a)(Object(S.a)({},e),{},{search:t.search});case"UPDATE_FUND":return Object(S.a)(Object(S.a)({},e),{},{fund:t.fund});case"UPDATE_WATCHLIST":return Object(S.a)(Object(S.a)({},e),{},{watchlist:t.watchlist});case"UPDATE_PORTFOLIO":return Object(S.a)(Object(S.a)({},e),{},{portfolio:t.portfolio});case"UPDATE_HISTORY":return Object(S.a)(Object(S.a)({},e),{},{history:t.history});case"TOGGLE_LOADING":return Object(S.a)(Object(S.a)({},e),{},{loadingDisplay:t.loadingDisplay});default:return e}};n.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(b,{initialState:G,reducer:A,children:Object(s.jsx)(I,{})})}),document.getElementById("root")),E()}},[[83,1,2]]]);
//# sourceMappingURL=main.8852740e.chunk.js.map