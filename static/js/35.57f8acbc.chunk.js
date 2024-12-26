(this.webpackJsonpnetex=this.webpackJsonpnetex||[]).push([[35],{316:function(e,t,n){"use strict";n(1);var r=n(358),i=n.n(r),a=n(5);t.a=function(e){var t=e.height,n=e.color,r=e.tooltip,o=e.rates,c={options:{chart:{type:"area",stacked:!1,sparkline:{enabled:!0},toolbar:{autoSelected:"zoom"},background:"transparent"},theme:{mode:"dark",monochrome:{enabled:!1,color:"#fff",shadeTo:"dark",shadeIntensity:.65}},markers:{size:0,style:"hollow"},stroke:{curve:"straight"},tooltip:{enabled:r},fill:{type:"gradient",gradient:{shadeIntensity:1,opacityFrom:.7,opacityTo:.9,stops:[0,100]}},colors:[n],xaxis:{categories:o&&o.map((function(e){return e.date}))}},series:[{name:"price",data:o&&o.map((function(e){return e.price}))}]};return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(i.a,{options:c.options,series:c.series,type:"area",height:t})})}},553:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n(48),a=n(6),o=n(1),c=n.n(o),s=n(218),l=n(502),d=n(212),u=n(210),b=n(213),p=n(506),j=n(2),x=n(7),f=n(32),m=n(204),O=n(27),h=n(33),g=n(565),v=n(184),w=n(205);function C(e){return Object(v.a)("MuiCard",e)}Object(w.a)("MuiCard",["root"]);var y=n(5),T=["className","raised"],k=Object(O.a)(g.a,{name:"MuiCard",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{overflow:"hidden"}})),F=o.forwardRef((function(e,t){var n=Object(h.a)({props:e,name:"MuiCard"}),r=n.className,i=n.raised,a=void 0!==i&&i,o=Object(x.a)(n,T),c=Object(j.a)({},n,{raised:a}),s=function(e){var t=e.classes;return Object(m.a)({root:["root"]},C,t)}(c);return Object(y.jsx)(k,Object(j.a)({className:Object(f.a)(s.root,r),elevation:a?8:void 0,ref:t,ownerState:c},o))})),N=n(219),S=n(209),B=n(225),R=n(49),E=n(316),A=n(51);t.default=function(e){var t=e.t,n=Object(S.a)((function(e){var t,n,r,i;return{root:{},courseTableHead:(t={borderTop:"2px solid #E7EAEE",padding:"24px 0 24px",marginTop:34,background:"transparent"},Object(a.a)(t,e.breakpoints.down(992),{padding:"20px 40px 24px"}),Object(a.a)(t,e.breakpoints.down(576),{padding:"20px 14px 24px"}),t),courseTableHeadCell:{fontSize:"20px",lineHeight:"24px",color:"#64748B",border:"none",textAlign:"center"},courseTableRow:(n={boxShadow:"0px 1px 0px #E2E8F0",borderRadius:"16px",padding:"16px 0 16px 0",marginBottom:"8px"},Object(a.a)(n,e.breakpoints.down(992),{padding:"16px 40px 16px 40px"}),Object(a.a)(n,e.breakpoints.down(576),{padding:"16px 15px 16px 15px"}),n),courseTableBoldText:(r={color:"inherit",fontWeight:600,fontSize:"19px",lineHeight:"23px",textAlign:"center"},Object(a.a)(r,e.breakpoints.down(992),{textAlign:"left",fontSize:"28px"}),Object(a.a)(r,e.breakpoints.down(576),{fontSize:"23px"}),Object(a.a)(r,e.breakpoints.down(320),{fontSize:"20px"}),r),courseCoinDynamic:{fontWeight:600,fontSize:"19px",lineHeight:"23px",textAlign:"center",background:"#ECFDF5",padding:"8px 12px",borderRadius:"8px",color:"#10B981"},courseCoinImgWrapper:(i={marginRight:"16px"},Object(a.a)(i,e.breakpoints.down(992),{marginRight:"20px"}),Object(a.a)(i,e.breakpoints.down(576),{marginRight:"8px"}),i),courseTableBodyRow:{background:"#fff",padding:"16px 32px",boxShadow:"0px 1px 0px #E2E8F0",borderRadius:"16px",marginBottom:"16px"},courseTableCoinCell:Object(a.a)({justifyContent:"flex-start",paddingLeft:"60px"},e.breakpoints.down(992),{paddingLeft:"0"}),courseButton:{display:"block",margin:"24px auto 0 auto"},courseTableCoinNames:Object(a.a)({display:"flex"},e.breakpoints.down(992),{flexDirection:"column"}),courseTableRowContanier:Object(a.a)({},e.breakpoints.down(992),{flexWrap:"nowrap"}),courseTableCoinPrice:Object(a.a)({},e.breakpoints.down(992),{justifyContent:"flex-end"}),courseCoinFullName:Object(a.a)({color:"#64748B",fontWeight:"400"},e.breakpoints.down(992),{marginTop:"4px"})}})),j=n(),x=Object(R.b)(),f=Object(s.a)(),m=Object(l.a)(f.breakpoints.down(992)),O=Object(R.c)((function(e){return e.\u0421urrenciesReducer})),h=O.\u0421urrenciesList,g=O.\u0421urrenciesListFiat;c.a.useEffect((function(){x(Object(A.d)())}),[]);var v=Object(o.useState)(""),w=Object(i.a)(v,2),C=w[0],T=w[1],k=Object.values("object"===typeof(null===g||void 0===g?void 0:g.currencies)&&(null===g||void 0===g?void 0:g.currencies)),I=(null===k||void 0===k?void 0:k.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{type:"fiat"})}))).concat(h).filter((function(e){return"USD"!==e.currency&"USDT"!==e.currency})),H=c.a.useMemo((function(){return I.filter((function(e){return e.currency.toLocaleLowerCase().startsWith(C.toLocaleLowerCase().trim())}))}),[C]),D=C?H:I;return Object(y.jsx)("section",{children:Object(y.jsxs)(d.a,{maxWidth:"lg",children:[Object(y.jsx)(N.a,{}),Object(y.jsx)(B.a,{title:t("exchangeRates"),input:!0,courses:!0,last_update:null===h||void 0===h?void 0:h.last_update,setFilter:T,t:t}),Object(y.jsxs)(d.a,{children:[Object(y.jsxs)(u.a,{className:j.courseTableHead,container:!0,direction:"row",justifyContent:"space-between",alignItems:"center",children:[Object(y.jsx)(u.a,{item:!0,md:3,children:Object(y.jsx)(b.a,{className:j.courseTableHeadCell,children:t("coinTitle")})}),Object(y.jsx)(u.a,{item:!0,md:3,children:Object(y.jsx)(b.a,{className:j.courseTableHeadCell,children:t("price")})}),!m&&Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(u.a,{item:!0,md:3,children:Object(y.jsx)(b.a,{className:j.courseTableHeadCell,children:t("market")})}),Object(y.jsx)(u.a,{item:!0,md:3,children:Object(y.jsx)(b.a,{className:j.courseTableHeadCell,children:t("dynamic")})})]})]}),Object(y.jsx)(p.a,{children:Array.isArray(D)&&D.filter((function(e){return e.rate})).map((function(e,t){return Object(y.jsx)(F,{className:j.courseTableRow,children:Object(y.jsxs)(u.a,{className:j.courseTableRowContanier,container:!0,direction:"row",justifyContent:"space-between",alignItems:"center",children:[Object(y.jsx)(u.a,{className:j.courseTableCoinCell,item:!0,md:3,container:!0,direction:"row",justifyContent:"center",alignItems:"center",children:Object(y.jsxs)(p.a,{sx:{display:"flex",alignItems:"center"},children:[Object(y.jsx)(p.a,{className:j.courseCoinImgWrapper,children:Object(y.jsx)("img",{style:{objectFit:"contain"},width:"40",height:"40",src:e.logo,alt:"Coin icon"})}),Object(y.jsxs)(p.a,{className:j.courseTableCoinNames,children:[Object(y.jsx)(p.a,{mr:1,children:Object(y.jsxs)(b.a,{className:j.courseTableBoldText,children:["KGS"===e.currency&&"USDT/",null===e||void 0===e?void 0:e.currency]})}),Object(y.jsx)(b.a,{className:j.courseCoinFullName,children:"fiat"!==e.type&&(null===e||void 0===e?void 0:e.name)})]})]})}),Object(y.jsx)(u.a,{className:j.courseTableCoinPrice,item:!0,md:3,container:!0,direction:"row",justifyContent:"center",alignItems:"center",children:Object(y.jsxs)(b.a,{className:j.courseTableBoldText,children:["KGS"!==(null===e||void 0===e?void 0:e.currency)&&"$",null===e||void 0===e?void 0:e.rate,"fiat"===e.type&&(null===e||void 0===e?void 0:e.name),"KGS"===(null===e||void 0===e?void 0:e.currency)&&" \u0441\u043e\u043c"]})}),!m&&Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(u.a,{item:!0,md:3,container:!0,direction:"row",justifyContent:"center",alignItems:"center",children:(null===e||void 0===e?void 0:e.difference)&&Object(y.jsx)(p.a,{className:j.courseCoinDynamic,style:{background:(null===e||void 0===e?void 0:e.difference)&&"+"===e.difference[0]?"#ECFDF5":(null===e||void 0===e?void 0:e.difference)&&"-"===e.difference[0]?"#FEF2F2":"#F7F8F9",color:(null===e||void 0===e?void 0:e.difference)&&"+"===e.difference[0]?"#10B981":(null===e||void 0===e?void 0:e.difference)&&"-"===e.difference[0]?"#EF4444":"#A0ABBB"},children:Object(y.jsxs)(b.a,{color:"inherit",className:j.courseTableBoldText,children:[void 0===(null===e||void 0===e?void 0:e.difference)?"0.00":null===e||void 0===e?void 0:e.difference,"$"]})})}),Object(y.jsx)(u.a,{item:!0,md:3,container:!0,direction:"row",justifyContent:"center",alignItems:"center",children:Object(y.jsx)(p.a,{style:{width:100},children:Object(y.jsx)(E.a,{height:37,color:(null===e||void 0===e?void 0:e.difference)&&"+"===e.difference[0]?"#10B981":(null===e||void 0===e?void 0:e.difference)&&"-"===e.difference[0]?"#F15A5A":"#C1C7D2",rates:e.rates})})})]})]})},t)}))})]})]})})}}}]);
//# sourceMappingURL=35.57f8acbc.chunk.js.map