(this.webpackJsonpnetex=this.webpackJsonpnetex||[]).push([[36],{226:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(0),i=n(81),o=n(1),c=n(280),r=n(5),l=["onChange","id"],s=o.forwardRef((function(e,t){var n=e.onChange,o=e.id,s=Object(i.a)(e,l);return Object(r.jsx)(c.a,Object(a.a)(Object(a.a)({},s),{},{mask:o,definitions:{"#":/[1-9]/},inputRef:t,onAccept:function(t){return n({target:{name:e.name,value:t}})},overwrite:!0}))}))},436:function(e,t,n){"use strict";n.r(t);var a=n(6),i=n(48),o=n(1),c=n(565),r=n(550),l=n(212),s=n(563),d=n(552),u=n(213),j=n(506),m=n(8),b=n(209),p=n(39),v=n(49),h=n(80),x=n(569),O=n(512),f=n(216),g=n(226),y=n(572),S=n(573),_=n(540),C=n(370),I=n(5),k=function(e){var t=e.item,n=e.classes,a=e.handleChange;return Object(I.jsxs)(y.a,{fullWidth:!0,className:n.formControl,children:[Object(I.jsx)(S.a,{children:t["@label"]}),Object(I.jsx)(_.a,{name:t["@name_code"],variant:"outlined",required:!0,label:t["@label"],onChange:a,children:t.data.map((function(e,t){return Object(I.jsx)(C.a,{"aria-label":"None",value:Object.values(e)[0],children:Object.values(e)[1]},t)}))})]})},G=n(503),K=n(242),w=n(434),N=n(83),D=function(e){var t,n,a,c,r,l,d,j,m,b,p,h,y,S,_=e.values,C=e.handleChange,D=e.dataContent,T=(e.errors,e.classes),B=e.t,E=e.data,F=e.details,R=e.setFieldValue,W=Object(v.b)(),P=Object(v.c)((function(e){return e.MainReducer})).balance,U=Object(o.useState)(!1),A=Object(i.a)(U,2),L=A[0],z=A[1],M=Object(o.useState)(!1),H=Object(i.a)(M,2),V=H[0],q=H[1],J=Object(o.useState)(!1),Z=Object(i.a)(J,2),Y=(Z[0],Z[1]),$=Object(v.c)((function(e){return e.\u0421urrenciesReducer})).\u0421urrenciesListFiat,Q=Object(v.c)((function(e){return e.MainReducer})).selectedCurrency;Object(o.useEffect)((function(){_.amountInKGS&&V&&R("amountInUSDT",(parseInt(_.amountInKGS)/parseInt(F.currency)).toFixed(2)),_.amountInUSDT&&L&&R("amountInKGS",parseInt(F.currency*_.amountInUSDT))}),[_.amountInKGS,_.amountInUSDT]);var X=Object(o.useState)(!1),ee=Object(i.a)(X,2),te=ee[0],ne=ee[1],ae=Object(o.useState)(!1),ie=Object(i.a)(ae,2),oe=ie[0],ce=ie[1],re=function(){ne(!1)},le=/^[?!,.\u0430-\u044f\u0410-\u042f\u0451\u0401]+$/;return Object(o.useEffect)((function(){W(Object(N.e)({})),W(Object(N.d)({error_code_from_pay24:"0"}))}),[]),Object(o.useEffect)((function(){if(null===$||void 0===$?void 0:$.currencies){var e,t=null===(e=Object.values(null===$||void 0===$?void 0:$.currencies))||void 0===e?void 0:e.find((function(e){return e.currency===Q}));Y(t)}}),[$,Q]),Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(x.a,{fullWidth:!0,label:D&&D["@header"],type:"text",required:!0,variant:"outlined",name:D&&D["@name"],id:1==E["@grpId"]&&"\u0420\u043e\u0441\u0441\u0438\u044f"==E["@country"]?"+70000000000":"1203"===E["@id"]?"+996000000000":D&&" "===D["@mask"]?"":D["@mask"]&&D["@mask"].replace(/_/gi,"0"),placeholder:1==E["@grpId"]&&"\u0420\u043e\u0441\u0441\u0438\u044f"==E["@country"]?"+7_____________":"1203"===E["@id"]||"3107"===E["@id"]?"+996_________":D&&D["@mask"],value:D&&_.account,onChange:C,className:T.input,error:_.account.length>2&&!_.account,autoComplete:106==E["@grpId"]&&"cc-number",pattern:D&&D["@regexp"],InputProps:{inputComponent:" "!=D["@mask"]&&D["@mask"]?g.a:""}}),1781==E["@id"]||1986==E["@id"]?null:(null===E||void 0===E||null===(t=E.additionalFieldDescriptions)||void 0===t?void 0:t.field.length)>1&&106==E["@grpId"]||1==E["@grpId"]&&"\u0420\u043e\u0441\u0441\u0438\u044f"==E["@country"]?null===E||void 0===E||null===(n=E.additionalFieldDescriptions)||void 0===n||null===(a=n.field)||void 0===a||null===(c=a.filter((function(e){return"fio"===e["@name"]})))||void 0===c?void 0:c.map((function(e,t){return Object(I.jsx)(x.a,{fullWidth:!0,label:e["@label"],type:"text",variant:"outlined",name:e["@name"],onChange:C,className:T.input,onKeyPress:function(e){le.test(e.key)?ce("fio"):ce(!1)},helperText:B("onlyLatine"),error:"fio"===oe,InputProps:{inputComponent:f.a,inputProps:{pattern:"[A-Za-z ]+"}}},t)})):(null===E||void 0===E||null===(r=E.additionalFieldDescriptions)||void 0===r?void 0:r.field.length)>1?null===E||void 0===E||null===(l=E.additionalFieldDescriptions)||void 0===l||null===(d=l.field)||void 0===d?void 0:d.map((function(e,t){return"select"===e["@type"]?Object(I.jsx)(k,{item:e,classes:T,handleChange:C},t):Object(I.jsx)(x.a,{fullWidth:!0,className:T.input,type:"text",label:e["@label"],variant:"outlined",onKeyPress:function(e){le.test(e.key)?ce(t):ce(!1)},onBlur:function(){return ce(!1)},helperText:oe===t&&B("onlyLatine"),error:oe===t,value:_["".concat(e["@name"])],id:e&&e["@mask"]&&e["@mask"].replace(/_/gi,"0"),name:e["@name"],onChange:C,InputProps:{inputProps:{pattern:"[A-Za-z]+"}}},t)})):"currency_code"===(null===E||void 0===E||null===(j=E.additionalFieldDescriptions)||void 0===j?void 0:j.field["@name_code"])?Object(I.jsx)(I.Fragment,{}):"select"===(null===E||void 0===E||null===(m=E.additionalFieldDescriptions)||void 0===m?void 0:m.field["@type"])?Object(I.jsx)(k,{item:null===E||void 0===E||null===(b=E.additionalFieldDescriptions)||void 0===b?void 0:b.field,classes:T,handleChange:C}):(null===E||void 0===E||null===(p=E.additionalFieldDescriptions)||void 0===p?void 0:p.field)&&Object(I.jsx)(x.a,{fullWidth:!0,label:null===E||void 0===E||null===(h=E.additionalFieldDescriptions)||void 0===h?void 0:h.field["@label"],type:"text",variant:"outlined",name:null===E||void 0===E||null===(y=E.additionalFieldDescriptions)||void 0===y?void 0:y.field["@name"],onChange:C,className:T.input,pattern:null===E||void 0===E||null===(S=E.additionalFieldDescriptions)||void 0===S?void 0:S.field.regexp,InputProps:{inputComponent:f.a}}),Object(I.jsxs)(G.a,{display:"flex",columnGap:"16px",rowGap:"16px",mb:1,sx:{"& .currency":{display:"flex",justifyContent:"center",alignItems:"center",height:{xs:"56px",lg:"58px"},color:"#000",whiteSpace:"nowrap",backgroundColor:"#E7EAEE",borderRadius:"0 8px 8px 0",boxShadow:"0px 1px 0px #E2E8F0",p:"0 18px",position:"relative",maxHeight:"58px",border:"2px solid transparent",cursor:"pointer","&.usdt:hover":{border:"2px solid #fce34d"}}},children:[Object(I.jsxs)(G.a,{display:"flex",maxWidth:"50%",width:"50%",sx:{"& .MuiFormHelperText-root":{m:0,whiteSpace:"nowrap"}},children:[1781==E["@id"]?Object(I.jsx)(x.a,{fullWidth:!0,name:"amountInKGS",onClick:function(){return q(!0)},onBlur:function(){return q(!1)},error:_.amountInKGS&&_.amountInKGS<15||_.amountInKGS>E["@max_sum"],label:B("amount"),helperText:_.amountInKGS&&_.amountInKGS<15||_.amountInKGS>E["@max_sum"]?"\u043c\u0438\u043d-15/\u043c\u0430\u043a\u0441-".concat(E["@max_sum"]):null,type:"number",variant:"outlined",value:_.amountInKGS,onChange:C,className:T.inputWithBlock}):Object(I.jsx)(x.a,{fullWidth:!0,name:"amountInKGS",onClick:function(){return q(!0)},onBlur:function(){return q(!1)},error:_.amountInKGS&&_.amountInKGS<E["@min_sum"]||_.amountInKGS>E["@max_sum"],label:B("amount"),helperText:_.amountInKGS&&_.amountInKGS<E["@min_sum"]||_.amountInKGS>E["@max_sum"]?"\u043c\u0438\u043d-".concat(E["@min_sum"],"/\u043c\u0430\u043a\u0441-").concat(E["@max_sum"]):null,type:"number",variant:"outlined",value:_.amountInKGS,onChange:C,className:T.inputWithBlock}),Object(I.jsxs)(G.a,{className:"currency",children:["KGS",Object(I.jsx)(O.a,{onClickAway:re,children:Object(I.jsx)("div",{children:Object(I.jsx)(w.a,{PopperProps:{disablePortal:!0},sx:{maxWidth:"unset"},title:null===F||void 0===F?void 0:F.commission_info,placement:"top-start",onClose:re,open:te,disableFocusListener:!0,disableHoverListener:!0,disableTouchListener:!0,children:Object(I.jsx)(s.a,{className:T.question,onClick:function(){ne(!0)},children:Object(I.jsx)(K.c,{})})})})})]})]}),Object(I.jsxs)(G.a,{display:"flex",width:"50%",maxWidth:"50%",children:[Object(I.jsx)(x.a,{fullWidth:!0,name:"amountInUSDT",onClick:function(){return z(!0)},onBlur:function(){return z(!1)},label:B("USDT"),type:"number",variant:"outlined",value:_.amountInUSDT,onChange:C,className:T.inputWithBlock}),Object(I.jsx)(G.a,{className:"currency usdt",onClick:function(){R("amountInUSDT",P),z(!0),setTimeout((function(){return z(!1)}),1e3)},children:"USDT"})]})]}),Object(I.jsxs)(u.a,{variant:"h5",style:{color:"#000",marginBottom:16},children:["1.00 USDT ~"," ",F.currency," KGS"]}),Object(I.jsx)(s.a,{className:T.buttonSubmit,type:"submit",variant:"contained",size:"large",color:"primary",disabled:_.amountInKGS<E["@min_sum"]||_.amountInKGS>E["@max_sum"],children:B("further")})]})},T=Object(o.memo)(D),B=n(0),E=n(551),F=n(577),R=n(544),W=function(e){var t=e.classes,n=e.activeStep,a=e.steps,i=e.isStepSkipped;return Object(I.jsx)(E.a,{activeStep:n,children:a.map((function(e,n){var a={};return i(n)&&(a.completed=!1),Object(I.jsx)(F.a,Object(B.a)(Object(B.a)({},a),{},{children:Object(I.jsx)(R.a,Object(B.a)({className:t.stepLabel},{}))}),e)}))})},P=n(88),U=n(543),A=n.p+"static/media/binance-pay.df6e2c6e.png",L=function(e){var t,n,a,i,c,r=e.t,l=e.setLoading,d=e.loading,m=e.handleNext,b=e.main,p=z(),x=Object(v.b)(),O=Object(v.c)((function(e){return e.Pay24Reducer})),f=O.check,g=O.payment,y=Object(v.c)((function(e){return e.binancePay})).qrCode,S=Object(o.useRef)(!0);return Object(o.useLayoutEffect)((function(){S.current?S.current=!1:200==(null===g||void 0===g?void 0:g.status)?(m(),l(!1)):l(!1)}),[g]),Object(o.useLayoutEffect)((function(){S.current?S.current=!1:"SUCCESS"==(null===y||void 0===y?void 0:y.status)?(m(),l(!1)):l(!1)}),[y]),Object(I.jsxs)(j.a,{sx:{backgroundColor:"#fff",padding:4,borderRadius:2,boxShadow:"0px 1px 0px #E2E8F0"},children:[Object(I.jsx)(u.a,{variant:"h3",className:p.title,children:r("payment\u0421onfirmation")}),Object(I.jsx)(u.a,{variant:"h4",className:p.subtitle,children:null===f||void 0===f||null===(t=f.data)||void 0===t?void 0:t.result}),Object(I.jsxs)("ul",{className:p.ul,children:[Object(I.jsxs)(u.a,{variant:"h5",component:"li",children:[r("AmountToBeDebited"),Object(I.jsx)("div",{}),Object(I.jsxs)("span",{children:[null===f||void 0===f||null===(n=f.data)||void 0===n?void 0:n.amount_usdt," USDT"]})]}),Object(I.jsxs)(u.a,{variant:"h5",component:"li",children:[r("AmountReceivable"),Object(I.jsx)("div",{}),Object(I.jsxs)("span",{children:[null===f||void 0===f||null===(a=f.data)||void 0===a?void 0:a.amount_kgs," KGS"]})]}),Object(I.jsxs)(u.a,{variant:"h5",component:"li",children:[r("systemCommission"),Object(I.jsx)("div",{}),Object(I.jsxs)("span",{children:[null===f||void 0===f||null===(i=f.data)||void 0===i?void 0:i.pay24_commission," KGS"]})]}),Object(I.jsxs)(u.a,{variant:"h5",component:"li",children:[r("OurCommission"),Object(I.jsx)("div",{}),Object(I.jsxs)("span",{children:[null===f||void 0===f||null===(c=f.data)||void 0===c?void 0:c.netex_commission," KGS"]})]}),!b&&Object(I.jsx)(s.a,{variant:"contained",color:"primary",disabled:d,className:p.button,size:"large",onClick:function(){l(!0),x(Object(h.f)(f.data.id))},children:r("confirm")}),Object(I.jsx)(s.a,{style:{marginTop:16},variant:"contained",color:"secondary",disabled:d,className:p.button,size:"large",onClick:function(){x(Object(N.c)(f.data.id)),l(!0)},children:Object(I.jsx)("img",{src:A,width:"100",alt:""})})]})]})},z=Object(b.a)((function(e){return{title:{color:"#000",textAlign:"center",lineHeight:"1"},subtitle:{textAlign:"center",marginBottom:50,lineHeight:"1",color:"#00bb29",marginTop:10,fontWeight:300},button:{width:"100%",height:56},ul:{width:"100%","& li":{color:"#000",fontWeight:300,marginBottom:16,display:"flex",justifyContent:"space-between",whiteSpace:"nowrap",alignItems:"baseline","& div":{width:"100%",height:"fit-content",borderBottom:"2px dotted #B8C0CC",margin:"0 3px"},"& span":{fontWeight:500,maxWidth:"50%"}}}}})),M=function(e){var t,n,a,i,c,r,l,d,m,b,p,h,x,O=e.t,f=e.handleReset,g=(e.data,e.values,H()),y=Object(v.b)(),S=Object(v.c)((function(e){return e.Pay24Reducer})),_=S.check,C=S.payment,k=Object(v.c)((function(e){return e.binancePay})),G=k.qrCode,K=k.payment_details;return Object(o.useEffect)((function(){"SUCCESS"===G.status&&setTimeout((function(){(null===K||void 0===K?void 0:K.paid)||y(Object(N.b)(null===G||void 0===G?void 0:G.guid))}),1e4)}),[K]),Object(I.jsx)(I.Fragment,{children:Object(I.jsx)(j.a,{sx:{backgroundColor:"#fff",padding:4,borderRadius:2,boxShadow:"0px 1px 0px #E2E8F0",position:"relative"},children:"SUCCESS"===G.status?Object(I.jsx)(j.a,{display:"flex",justifyContent:"center",flexDirection:"column",color:"#000",alignItems:"center",children:"0"!==(null===K||void 0===K?void 0:K.error_code_from_pay24)?Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)("svg",{width:"160",height:"160",viewBox:"0 0 160 160",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(I.jsx)("path",{d:"M80 13.3333C43.2667 13.3333 13.3334 43.2667 13.3334 80C13.3334 116.733 43.2667 146.667 80 146.667C116.733 146.667 146.667 116.733 146.667 80C146.667 43.2667 116.733 13.3333 80 13.3333ZM75 53.3333C75 50.6 77.2667 48.3333 80 48.3333C82.7334 48.3333 85 50.6 85 53.3333V86.6667C85 89.4 82.7334 91.6667 80 91.6667C77.2667 91.6667 75 89.4 75 86.6667V53.3333ZM86.1334 109.2C85.8 110.067 85.3334 110.733 84.7334 111.4C84.0667 112 83.3334 112.467 82.5334 112.8C81.7334 113.133 80.8667 113.333 80 113.333C79.1334 113.333 78.2667 113.133 77.4667 112.8C76.6667 112.467 75.9334 112 75.2667 111.4C74.6667 110.733 74.2 110.067 73.8667 109.2C73.5334 108.4 73.3334 107.533 73.3334 106.667C73.3334 105.8 73.5334 104.933 73.8667 104.133C74.2 103.333 74.6667 102.6 75.2667 101.933C75.9334 101.333 76.6667 100.867 77.4667 100.533C79.0667 99.8667 80.9334 99.8667 82.5334 100.533C83.3334 100.867 84.0667 101.333 84.7334 101.933C85.3334 102.6 85.8 103.333 86.1334 104.133C86.4667 104.933 86.6667 105.8 86.6667 106.667C86.6667 107.533 86.4667 108.4 86.1334 109.2Z",fill:"#EF4444"})}),Object(I.jsx)(u.a,{variant:"h2",className:g.error,children:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a"}),Object(I.jsx)(s.a,{onClick:f,variant:"contained",type:"button",color:"secondary",size:"large",className:g.button,children:O("tryAgain")})]}):(null===K||void 0===K?void 0:K.paid)&&"0"===(null===K||void 0===K?void 0:K.error_code_from_pay24)?Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)(u.a,{variant:"h4",className:g.subtitle,children:[O("paymentWasSuccessful")," "]}),Object(I.jsx)(u.a,{variant:"h3",className:g.title,children:O("paymentCheck")}),Object(I.jsxs)("ul",{className:g.ul,children:[Object(I.jsxs)(u.a,{variant:"h5",component:"li",children:[O("AmountToBeDebited"),Object(I.jsx)("div",{}),Object(I.jsxs)("span",{children:[null===_||void 0===_||null===(t=_.data)||void 0===t?void 0:t.amount_usdt," USDT"]})]}),Object(I.jsxs)(u.a,{variant:"h5",component:"li",children:[O("atRate"),Object(I.jsx)("div",{}),Object(I.jsxs)("span",{children:[null===_||void 0===_||null===(n=_.data)||void 0===n?void 0:n.currency," KGS"]})]}),Object(I.jsxs)(u.a,{variant:"h5",component:"li",children:[O("ReceiptNumber"),Object(I.jsx)("div",{}),Object(I.jsx)("span",{children:null===_||void 0===_||null===(a=_.data)||void 0===a?void 0:a.guid})]}),Object(I.jsxs)(u.a,{variant:"h5",component:"li",children:[O("AmountReceivable"),Object(I.jsx)("div",{}),Object(I.jsxs)("span",{children:[null===_||void 0===_||null===(i=_.data)||void 0===i?void 0:i.amount_kgs," KGS"]})]}),Object(I.jsxs)(u.a,{variant:"h5",component:"li",children:[O("systemCommission"),Object(I.jsx)("div",{}),Object(I.jsxs)("span",{children:[null===_||void 0===_||null===(c=_.data)||void 0===c?void 0:c.pay24_commission," KGS"]})]}),Object(I.jsxs)(u.a,{variant:"h5",component:"li",children:[O("OurCommission"),Object(I.jsx)("div",{}),Object(I.jsxs)("span",{children:[null===_||void 0===_||null===(r=_.data)||void 0===r?void 0:r.netex_commission," KGS"]})]})]}),Object(I.jsx)(s.a,{onClick:f,variant:"contained",type:"button",color:"primary",size:"large",className:g.button,children:O("reset")})]}):Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)(u.a,{style:{textAlign:"center"},children:[O("binancePayTitle"),' "',O("SliderButton2"),'"']}),Object(I.jsx)("img",{src:G.data.qrcodeLink,width:"300",height:"300",style:{display:"block",margin:"0 auto"},alt:""}),Object(I.jsx)(u.a,{style:{marginBottom:16}}),Object(I.jsx)(s.a,{size:"large",variant:"contained",color:"primary",href:G.data.universalUrl,target:"_blank",children:O("SliderButton2")})]})}):Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(u.a,{variant:"h4",className:g.subtitle,children:null===C||void 0===C||null===(l=C.data)||void 0===l?void 0:l.result}),Object(I.jsx)(u.a,{variant:"h3",className:g.title,children:O("paymentCheck")}),Object(I.jsxs)("ul",{className:g.ul,children:[Object(I.jsxs)(u.a,{variant:"h5",component:"li",children:[O("AmountToBeDebited"),Object(I.jsx)("div",{}),Object(I.jsxs)("span",{children:[null===_||void 0===_||null===(d=_.data)||void 0===d?void 0:d.amount_usdt," USDT"]})]}),Object(I.jsxs)(u.a,{variant:"h5",component:"li",children:[O("atRate"),Object(I.jsx)("div",{}),Object(I.jsxs)("span",{children:[null===_||void 0===_||null===(m=_.data)||void 0===m?void 0:m.currency," KGS"]})]}),Object(I.jsxs)(u.a,{variant:"h5",component:"li",children:[O("ReceiptNumber"),Object(I.jsx)("div",{}),Object(I.jsx)("span",{children:null===_||void 0===_||null===(b=_.data)||void 0===b?void 0:b.guid})]}),Object(I.jsxs)(u.a,{variant:"h5",component:"li",children:[O("AmountReceivable"),Object(I.jsx)("div",{}),Object(I.jsxs)("span",{children:[null===_||void 0===_||null===(p=_.data)||void 0===p?void 0:p.amount_kgs," KGS"]})]}),Object(I.jsxs)(u.a,{variant:"h5",component:"li",children:[O("systemCommission"),Object(I.jsx)("div",{}),Object(I.jsxs)("span",{children:[null===_||void 0===_||null===(h=_.data)||void 0===h?void 0:h.pay24_commission," KGS"]})]}),Object(I.jsxs)(u.a,{variant:"h5",component:"li",children:[O("OurCommission"),Object(I.jsx)("div",{}),Object(I.jsxs)("span",{children:[null===_||void 0===_||null===(x=_.data)||void 0===x?void 0:x.netex_commission," KGS"]})]})]}),Object(I.jsx)(j.a,{display:"flex",alignItems:"center",columnGap:2,children:Object(I.jsx)(s.a,{onClick:f,variant:"contained",type:"button",fullWidth:!0,color:"primary",size:"large",className:g.button,children:O("reset")})})]})})})},H=Object(b.a)((function(e){return{title:{color:"#000",textAlign:"center",lineHeight:"1",marginBottom:24},subtitle:{textAlign:"center",marginBottom:32,lineHeight:"1",color:"#00bb29",marginTop:10,fontWeight:300},button:{height:56},error:{fontWeight:600,marginTop:16,marginBottom:16},ul:{width:"100%","& li":{color:"#000",fontWeight:300,marginBottom:16,display:"flex",justifyContent:"space-between",whiteSpace:"nowrap",alignItems:"baseline","& div":{width:"100%",height:"fit-content",borderBottom:"2px dotted #B8C0CC",margin:"0 3px"},"& span":{fontWeight:500}}}}})),V=n(219),q=(t.default=function(e){var t,n,a,b,x,O,g,y,S,_,C=e.t,k=e.main,G=q(),K=Object(m.useHistory)(),w=Object(v.b)(),N=["1","2","3"],D=Object(o.useState)(0),B=Object(i.a)(D,2),E=B[0],F=B[1],R=Object(o.useState)(new Set),A=Object(i.a)(R,2),z=A[0],H=A[1],J=Object(o.useState)(!1),Z=Object(i.a)(J,2),Y=Z[0],$=Z[1],Q=Object(m.useParams)().detailsId,X=Object(o.useRef)(!0),ee=Object(v.c)((function(e){return e.Pay24Reducer})),te=ee.ServicesDetail,ne=ee.check,ae=ee.name,ie=ee.isDetailLoading,oe=ee.payment,ce=Object(v.c)((function(e){return e.MyProfileReducer})).profileData,re=(null===te||void 0===te?void 0:te.data)&&JSON.parse(null===te||void 0===te?void 0:te.data).provider,le=null===re||void 0===re||null===(t=re.pages)||void 0===t||null===(n=t.page)||void 0===n||null===(a=n.controls)||void 0===a?void 0:a.control[0],se=function(e){return z.has(e)},de=function(){var e=z;se(E)&&(e=new Set(e.values())).delete(E),1===E&&F(2),F((function(e){return e+1})),H(e)},ue=function(){F(0)};return Object(o.useEffect)((function(){w(Object(h.c)(Q))}),[]),Object(o.useLayoutEffect)((function(){X.current?X.current=!1:200==(null===ne||void 0===ne?void 0:ne.status)?(de(),$(!1)):$(!1)}),[ne]),Object(o.useEffect)((function(){k&&re&&(document.title="Binance Pay | ".concat(re&&re["@name"]))}),[re]),Object(I.jsx)(I.Fragment,{children:!k&&(null===ce||void 0===ce?void 0:ce.data)&&2!=(null===ce||void 0===ce||null===(b=ce.data)||void 0===b||null===(x=b.profile)||void 0===x||null===(O=x.verification)||void 0===O?void 0:O.value)?Object(I.jsx)(m.Redirect,{exact:!0,from:"/",to:"/dashboard/settings/verification"}):"1"===(null===te||void 0===te?void 0:te.active)?Object(I.jsx)(m.Redirect,{exact:!0,from:"/",to:"/dashboard/payment-for-services/"}):Object(I.jsxs)(c.a,{component:"section",sx:{pt:k&&4,pb:k&&4,minHeight:k?"100vh":"66vh"},className:G.section,children:[Y&&Object(I.jsx)(P.a,{}),Object(I.jsx)(r.a,{open:(null===ne||void 0===ne||null===(g=ne.data)||void 0===g?void 0:g.result)&&200!=ne.status||(null===oe||void 0===oe||null===(y=oe.data)||void 0===y?void 0:y.result)&&200!=oe.status,autoHideDuration:3e3,onClose:function(){var e;(null===ne||void 0===ne||null===(e=ne.data)||void 0===e?void 0:e.result)&&200!=ne.status?w(Object(h.k)(null)):w(Object(h.l)(null))},anchorOrigin:{vertical:"top",horizontal:"center"},children:Object(I.jsx)(U.a,{severity:"error",color:"error",variant:"filled",children:(null===oe||void 0===oe||null===(S=oe.data)||void 0===S?void 0:S.result)||(null===ne||void 0===ne||null===(_=ne.data)||void 0===_?void 0:_.result)})}),Object(I.jsxs)(l.a,{children:[Object(I.jsx)(s.a,{style:{marginBottom:16,display:"block"},variant:"contained",size:"large",onClick:function(){0===E?K.goBack():F(3===E?function(e){return e-2}:function(e){return e-1})},children:C("GoBack")}),!k&&Object(I.jsx)(V.a,{}),Object(I.jsxs)(d.a,{className:G.breadcrumb,children:[Object(I.jsx)(p.b,{className:G.link,to:"/dashboard/payment-for-services",children:"\u0412\u0441\u0435 \u0443\u0441\u043b\u0443\u0433\u0438"}),ae&&Object(I.jsx)(p.b,{className:G.link,to:"/dashboard/payment-for-services/".concat(re&&re["@grpId"]),children:ae}),Object(I.jsx)(u.a,{className:G.link,children:re&&re["@country"]}),Object(I.jsx)(u.a,{className:G.link,children:re&&re["@name"]})]}),le&&Object(I.jsxs)(j.a,{className:G.wrapper,children:[Object(I.jsx)(W,{classes:G,activeStep:E,steps:N,isStepSkipped:se}),ie?Object(I.jsx)(P.a,{}):Object(I.jsx)(f.c,{initialValues:{account:"",amountInUSDT:"",amountInKGS:"",comment:"",currency_code:""},onSubmit:function(e){$(!0),(1==re["@grpId"]&&"\u0420\u043e\u0441\u0441\u0438\u044f"==re["@country"]||"1203"===re["@id"]||"3107"===re["@id"])&&(e.account=e.account.replace(/[\s+().,-]/g,"")),1==re["@grpId"]&&"\u0420\u043e\u0441\u0441\u0438\u044f"==re["@country"]?e.account=e.account.slice(1):e.account=e.account.replace(/[\s+().,-]/g,"");var t=Object.entries(e);1781==re["@id"]?w(Object(h.e)({data:"<to service='".concat(Q,"' amount='").concat(e.amountInKGS,"' currency='417' commission='5' identification_data='ya' fio_uzcard='Yusupov Javlonbek' fio='Yusupov Javlonbek' payer_dateto='29373637' payer_issuer='Hdhdhdh' payer_passport_num='8363636' payer_inn='7463636' to_fio='Hdhdhdbdb' ").concat(t.filter((function(e){return"amountInKGS"!==e[0]&&"amountInUSDT"!==e[0]&&"currency_code"!==e[0]})).map((function(e){return"".concat(e[0],"='").concat(e[1],"'")})).join(" ")," />")})):1986==re["@id"]?w(Object(h.e)({data:"<to service='".concat(Q,"' amount='").concat(e.amountInKGS,"' currency='417' commission='5' identification_data='12131' fio_uzcard='Yusupov Javlonbek' fio='Yusupov Javlonbek' payer_dateto='ya' payer_issuer='ya' payer_passport_num='ya' payer_inn='ya' to_fio='ya' ").concat(t.map((function(e){return"".concat(e[0],"='").concat(e[1],"'")})).join(" ")," />")})):106==re["@grpId"]?w(Object(h.e)({data:"<to service='".concat(Q,"' amount='").concat(e.amountInKGS,"' currency='417' commission='5' unmasked_phone_number='0999999999' identification_data='ya'  payer_dateto='ya' payer_issuer='ya' payer_passport_num='ya' payer_inn='ya' to_fio='ya' currency_text='KGS' currency_code='KGS'\n                             ").concat(t.filter((function(e){return"amountInKGS"!==e[0]&&"amountInUSDT"!==e[0]&&"currency_code"!==e[0]&&"currency_text"!==e[1]})).map((function(e){return"".concat(e[0],"='").concat(e[1],"'")})).join(" ")," />")})):1==re["@grpId"]&&"\u0420\u043e\u0441\u0441\u0438\u044f"==re["@country"]?w(Object(h.e)({data:"<to service='".concat(Q,"' amount='").concat(e.amountInKGS,"' currency='417'  commission='5' identification_data='Vasya' email='vasya@gmail.com' payer_dateto='Vasya' payer_issuer='Vasya' payer_passport_num='Vasya' payer_inn='Vasya' to_fio='Vasya' ").concat(t.map((function(e){return"".concat(e[0],"='").concat(e[1],"'")})).join(" ")," />")})):w(Object(h.e)({data:"<to service='".concat(Q,"' amount='").concat(e.amountInKGS,"' currency='417' commission='5' ").concat(t.map((function(e){return"".concat(e[0],"='").concat(e[1],"'")})).join(" ")," />")}))},children:function(e){var t=e.values,n=e.handleChange,a=e.setFieldValue,i=e.errors;return Object(I.jsx)(f.b,{className:G.content,children:E===N.length?Object(I.jsx)(M,{values:t,data:re,t:C,handleReset:ue}):Object(I.jsxs)(I.Fragment,{children:[0===E&&Object(I.jsx)(T,{errors:i,details:te,values:t,setFieldValue:a,handleChange:n,dataContent:le,classes:G,t:C,data:re})," ",1===E&&Object(I.jsx)(L,{t:C,main:k,setLoading:$,loading:Y,handleNext:de})]})})}})]})]})]})})},Object(b.a)((function(e){var t;return{content:{marginTop:50},section:{"& .MuiStepper-root ":{backgroundColor:"transparent",padding:0}},formControl:{marginBottom:16,"& .MuiInputLabel-formControl":{},"& .MuiInputLabel-shrink":{left:0}},breadcrumb:{marginTop:40,marginBottom:26},link:{color:"#000",fontSize:23},stepLabel:{"& svg":(t={color:"transparent",borderRadius:50,width:"85px",height:"85px",border:"1px solid #E5E5E5"},Object(a.a)(t,e.breakpoints.down(768),{width:60,height:60}),Object(a.a)(t,"&.Mui-active",{color:"#E7EAEE",border:"none"}),Object(a.a)(t,"&.Mui-completed",{color:"#FCE34D",border:"none"}),Object(a.a)(t,"& text",{fill:"#000",fontSize:9}),t)},input:{"& .MuiOutlinedInput-input":{backgroundColor:"#fff",boxShadow:"0px 1px 0px #E2E8F0",borderRadius:8},marginBottom:16},question:{position:"absolute",top:2,right:2,padding:"0!important",minWidth:"unset"},inputWithBlock:{"& .MuiOutlinedInput-input":{backgroundColor:"#fff",transition:"all 0.2s linear",borderRadius:"8px 0 0 8px!important"},"& .MuiOutlinedInput-notchedOutline":{borderRadius:"8px 0 0 8px!important"}},wrapper:Object(a.a)({width:"60%"},e.breakpoints.down(992),{width:"100%"}),buttonSubmit:{width:"100%",height:56}}})))}}]);
//# sourceMappingURL=36.69b1552e.chunk.js.map