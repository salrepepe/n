(this.webpackJsonpnetex=this.webpackJsonpnetex||[]).push([[31],{243:function(e,t,i){"use strict";t.a=i.p+"static/media/commissionDark.c1451589.svg"},275:function(e,t,i){"use strict";t.a=i.p+"static/media/coin.f1bea9ad.svg"},323:function(e,t,i){"use strict";t.a=i.p+"static/media/timer.bd2a34ce.svg"},526:function(e,t,i){"use strict";i.r(t);var n=i(6),a=i(0),s=i(48),c=i(1),r=i(218),o=i(502),l=i(565),d=i(550),u=i(213),j=i(212),b=i(210),m=i(506),x=i(569),p=i(563),O=i(243),h=i(275),f=i(323),v=i(8),g=i(49),y=i(87),C=i(356),D=i(537),T=i(84),A=i(285),N=i(313),k=i(82),w=i(209),S=i(5),E=Object(w.a)((function(e){return{whiteBox:Object(n.a)({boxShadow:"0px 1px 0px #E2E8F0",borderRadius:8,background:"#FFF",height:167,display:"flex",justifyContent:"flex-start",alignItems:"center",padding:"30px",transition:"all 0.2s linear","&:hover":{boxShadow:"0px 0px 6px 2px #E2E8F0"}},e.breakpoints.down(576),{display:"flex",flexDirection:"column"}),SupTitle:Object(n.a)({color:"#323A46",fontWeight:300,margin:"22px 0 8px"},e.breakpoints.down("md"),{fontSize:20}),DetailsTitle:Object(n.a)({fontWeight:600,color:"#323A46",marginBottom:16,fontSize:23},e.breakpoints.down("md"),{fontSize:23}),balanceAmount:{transition:"all .3s",cursor:"pointer","&:hover":{borderBottom:"2px solid #000"}},DetailsLabel:{color:"#000000",fontWeight:600,display:"flex",flexDirection:"column",alignItems:"center !important",justifyContent:"center",padding:"0 18px",backgroundColor:"#E7EAEE",borderRadius:"8px 0 0 8px",boxShadow:"0px 1px 0px #E2E8F0",minWidth:"70px"},button:Object(n.a)({margin:"30px auto 0",display:"block"},e.breakpoints.down("sm"),{width:"100%"}),DetailsInput:{"& .MuiOutlinedInput-input":{backgroundColor:"#fff",transition:"all 0.2s linear",borderRadius:"0 8px 8px 0!important"},"& .MuiOutlinedInput-notchedOutline":{borderRadius:"0 8px 8px 0!important"}},img:{width:66,height:66}}}));t.default=function(e){var t,i,w,W=e.t,I=E(),B=Object(g.b)(),F=Object(v.useParams)().parameter,R=Object(r.a)(),z=Object(o.a)(R.breakpoints.up("md")),P=Object(v.useHistory)(),_=Object(c.useState)("market"),L=Object(s.a)(_,2),U=L[0],M=(L[1],Object(g.c)((function(e){return e.sell}))),q=M.setSellByParameterCoin,H=M.sell,J=Object(g.c)((function(e){return e.\u0421urrenciesReducer})).\u0421urrenciesList,K=Object(g.c)((function(e){return e.orders})).order_data;Object(c.useEffect)((function(){B(Object(y.c)(F))}),[]);var V=J.filter((function(e){return e.currency===F}))[0],G=J.filter((function(e){return"USDT"===e.currency}))[0],Q=Object(c.useState)({AmountToCredited:"",WriteOffAmount:"",price:null===V||void 0===V?void 0:V.rate}),X=Object(s.a)(Q,2),Y=X[0],Z=X[1],$=function(e){var t=e.target,i=t.value,s=t.name;Z((function(e){return Object(a.a)(Object(a.a)({},e),{},Object(n.a)({},s,i))}))},ee=Y.AmountToCredited*(null===Y||void 0===Y?void 0:Y.price),te=ee-ee*(null===(t=q.parameters)||void 0===t?void 0:t.commission)/100;return Object(c.useEffect)((function(){200===K.severity&&setTimeout((function(){P.push("/dashboard/orders")}),1e3)}),[K]),Object(c.useEffect)((function(){Z("limit"===U?Object(a.a)(Object(a.a)({},Y),{},{price:null===V||void 0===V?void 0:V.rate}):Object(a.a)(Object(a.a)({},Y),{},{price:null===V||void 0===V?void 0:V.rate,limit:null===V||void 0===V?void 0:V.rate}))}),[V,U]),Object(S.jsx)(S.Fragment,{children:400===q.status?Object(S.jsx)(T.a,{}):403===q.status?Object(S.jsx)(v.Redirect,{exact:!0,from:"/",to:"/dashboard/settings/verification"}):Object(S.jsxs)(l.a,{sx:{pt:4,pb:4},children:[Object(S.jsx)(d.a,{autoHideDuration:1e3,open:H.severity&&200!==H.severity,anchorOrigin:{vertical:"top",horizontal:"center"},onClose:function(){return B(Object(y.f)(Object(a.a)(Object(a.a)({},H),{},{open:!1,severity:H.severity,message:H.message})))},children:Object(S.jsx)(D.a,{onClose:function(){return B(Object(y.f)(Object(a.a)(Object(a.a)({},alert),{},{open:!1})))},severity:200===H.severity?"success":"error",variant:"filled",children:200===H.severity?"":H.message&&H.message.messages})}),Object(S.jsx)(A.a,{}),Object(S.jsx)(C.a,{t:W}),Object(S.jsxs)(u.a,{variant:"h2",style:{color:"#000",textAlign:"center"},children:[W("sell")," ",null===V||void 0===V?void 0:V.name," ",W("atRate")]}),Object(S.jsxs)(u.a,{variant:"h3",style:{color:"#64748B",textAlign:"center",fontWeight:300,margin:"24px 0 56px"},children:["1.00 ",null===V||void 0===V?void 0:V.currency," = ",null===V||void 0===V?void 0:V.rate," USDT"]}),Object(S.jsxs)(j.a,{children:[Object(S.jsxs)(b.a,{container:!0,spacing:2,justifyContent:"center",style:{marginTop:40},children:[Object(S.jsx)(b.a,{xs:12,sm:6,md:3,item:!0,children:Object(S.jsxs)(m.a,{style:{height:210,flexDirection:"column"},className:I.whiteBox,children:[Object(S.jsx)("img",{className:I.img,src:f.a,alt:"time-icon"}),Object(S.jsx)(u.a,{variant:"h5",className:I.SupTitle,children:W("DueDate")}),Object(S.jsx)(u.a,{variant:"h4",className:I.DetailsTitle,children:W("Instantly")})]})}),Object(S.jsx)(b.a,{xs:12,sm:6,md:3,item:!0,children:Object(S.jsxs)(m.a,{style:{height:210,flexDirection:"column"},className:I.whiteBox,children:[Object(S.jsx)("img",{className:I.img,src:h.a,alt:"Coin-icon"}),Object(S.jsx)(u.a,{variant:"h5",className:I.SupTitle,children:W("MinAmount")}),Object(S.jsxs)(u.a,{variant:"h4",className:I.DetailsTitle,children:[null===(i=q.parameters)||void 0===i?void 0:i.min_qty," ",null===V||void 0===V?void 0:V.currency]})]})}),Object(S.jsx)(b.a,{xs:12,sm:6,md:3,item:!0,children:Object(S.jsxs)(m.a,{style:{height:210,flexDirection:"column"},className:I.whiteBox,children:[Object(S.jsx)("img",{className:I.img,src:O.a,alt:"Commission-icon"}),Object(S.jsx)(u.a,{variant:"h5",className:I.SupTitle,children:W("OurCommission")}),Object(S.jsxs)(u.a,{variant:"h4",className:I.DetailsTitle,children:[null===(w=q.parameters)||void 0===w?void 0:w.commission," %"]})]})})]}),Object(S.jsxs)(b.a,{style:{marginTop:40},container:!0,spacing:2,children:[Object(S.jsxs)(b.a,{item:!0,md:6,xs:12,children:[Object(S.jsx)(m.a,{display:"flex",justifyContent:"space-between",style:{flexDirection:!z&&"column"},children:Object(S.jsxs)(u.a,{className:I.DetailsTitle,children:[Object(S.jsx)("span",{style:{fontWeight:400},children:W("balance")}),":"," ",Object(S.jsx)("span",{className:I.balanceAmount,style:{cursor:"pointer"},onClick:function(){return Z((function(e){return Object(a.a)(Object(a.a)({},e),{},{AmountToCredited:null===V||void 0===V?void 0:V.balance})}))},children:null===V||void 0===V?void 0:V.balance})," ",null===V||void 0===V?void 0:V.currency]})}),Object(S.jsx)(N.a,{order:U,classes:I,parameter:F,t:W,form:Y,handleValueChange:$}),Object(S.jsxs)(m.a,{display:"flex",children:[Object(S.jsx)(m.a,{className:I.DetailsLabel,children:null===V||void 0===V?void 0:V.currency}),Object(S.jsx)(x.a,{fullWidth:!0,type:"text",InputProps:{inputProps:{pattern:"\\d*.\\d*"}},onKeyPress:function(e){/[0-9.]/.test(e.key)||e.preventDefault()},label:z?"0.000000":W("WriteOffAmount"),variant:"outlined",name:"AmountToCredited",value:Y.AmountToCredited,className:I.DetailsInput,onChange:$})]})]}),Object(S.jsxs)(b.a,{item:!0,md:6,xs:12,children:[Object(S.jsx)(m.a,{display:"flex",justifyContent:"space-between",style:{flexDirection:!z&&"column"},children:Object(S.jsxs)(u.a,{className:I.DetailsTitle,children:[Object(S.jsx)("span",{style:{fontWeight:400},children:W("balance")}),":"," ",null===G||void 0===G?void 0:G.balance," USDT"]})}),Object(S.jsxs)(m.a,{display:"flex",children:[Object(S.jsx)(m.a,{className:I.DetailsLabel,children:"USDT"}),Object(S.jsx)(x.a,{fullWidth:!0,label:z?"0.000000":W("AmountToCredited"),name:"WriteOffAmount",variant:"outlined",className:I.DetailsInput,onChange:$,value:te.toFixed(null===G||void 0===G?void 0:G.decimal),disabled:!0})]})]})]}),Object(S.jsx)(p.a,{variant:"contained",size:"large",color:"primary",className:I.button,onClick:function(){return function(){if("market"!==U){var e={order_type:U,order_side:"sell",currency:F,quantity:Y.WriteOffAmountCalc,amount:Y.AmountToCredited,price:Y.price,stop_price:Y.stop};B(Object(k.b)(e))}else{var t={sum:Y.AmountToCredited,currency:F};B(Object(y.d)(t))}}()},children:W("Continue")})]})]})})}}}]);
//# sourceMappingURL=31.aca648cf.chunk.js.map