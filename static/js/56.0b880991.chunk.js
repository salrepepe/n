(this.webpackJsonpnetex=this.webpackJsonpnetex||[]).push([[56],{524:function(e,t,i){"use strict";i.r(t);var n=i(48),c=i(565),r=i(212),a=i(210),s=i(1),o=i.n(s),u=i(219),l=i(225),d=i(291),j=i(240),f=i(49),b=i(85),O=i(51),h=i(5);t.default=function(e){var t,i,m,x=e.t,p=e.setVerificationPush,w=e.mode,v=Object(f.b)(),g=Object(s.useState)(""),y=Object(n.a)(g,2),L=y[0],k=y[1],P=Object(f.c)((function(e){return e.\u0421urrenciesReducer})),C=P.\u0421urrenciesList,J=P.\u0421urrenciesLoading,R=Object(f.c)((function(e){return e.MyProfileReducer})).profileData,S=null===R||void 0===R||null===(t=R.data)||void 0===t||null===(i=t.profile)||void 0===i||null===(m=i.verification)||void 0===m?void 0:m.value,V=Object(f.c)((function(e){return e.withdrawReducer})).isLoading,A=o.a.useMemo((function(){return C.filter((function(e){return e.name.toLocaleLowerCase().startsWith(L.toLocaleLowerCase().trim())}))}),[L]),D=L?A:C;return Object(s.useEffect)((function(){V||v(Object(b.e)(!0)),v(Object(O.c)())}),[]),Object(h.jsx)(c.a,{component:"section",children:Object(h.jsxs)(r.a,{children:[Object(h.jsx)(u.a,{}),Object(h.jsx)(l.a,{title:x("WithdrawFunds"),t:x,input:!0,setFilter:k}),Object(h.jsx)(a.a,{container:!0,spacing:2,children:J?D.filter((function(e){return e.can_withdraw})).map((function(e,t){return Object(h.jsx)(a.a,{item:!0,xs:12,sm:6,md:3,lg:3,xl:3,onClick:function(){localStorage.setItem("sellDetail",JSON.stringify(e))},children:2==S?Object(h.jsx)(d.b,{mode:w,t:x,setVerificationPush:p,item:e,href:"/dashboard/withdraw/".concat(e.currency)}):Object(h.jsx)(d.a,{mode:w,t:x,setVerificationPush:p,item:e})},t)})):Array.from(Array(12).keys()).map((function(e,t){return Object(h.jsx)(a.a,{item:!0,xs:12,sm:6,md:3,lg:3,xl:3,children:Object(h.jsx)(j.a,{style:{width:389}})},t)}))})]})})}}}]);
//# sourceMappingURL=56.0b880991.chunk.js.map