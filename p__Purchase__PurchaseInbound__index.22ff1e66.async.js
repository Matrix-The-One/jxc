"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[13,402],{86994:function(oe,L,e){e.d(L,{Z:function(){return ae}});var s=e(185),C=e(75188),g=e(50959),p=e(26534),t=e(58057),Q=e(11527),V=["proFieldProps","fieldProps"],F="date",U=g.forwardRef(function(v,S){var K=v.proFieldProps,b=v.fieldProps,M=(0,C.Z)(v,V),Y=(0,g.useContext)(p.Z);return(0,Q.jsx)(t.Z,(0,s.Z)({ref:S,valueType:F,fieldProps:(0,s.Z)({getPopupContainer:Y.getPopupContainer},b),proFieldProps:K,filedConfig:{valueType:F,customLightMode:!0}},M))}),h=U,D=["proFieldProps","fieldProps"],T="dateMonth",m=g.forwardRef(function(v,S){var K=v.proFieldProps,b=v.fieldProps,M=(0,C.Z)(v,D),Y=(0,g.useContext)(p.Z);return(0,Q.jsx)(t.Z,(0,s.Z)({ref:S,valueType:T,fieldProps:(0,s.Z)({getPopupContainer:Y.getPopupContainer},b),proFieldProps:K,filedConfig:{valueType:T,customLightMode:!0}},M))}),P=m,z=["fieldProps"],O="dateQuarter",ie=g.forwardRef(function(v,S){var K=v.fieldProps,b=(0,C.Z)(v,z),M=(0,g.useContext)(p.Z);return(0,Q.jsx)(t.Z,(0,s.Z)({ref:S,valueType:O,fieldProps:(0,s.Z)({getPopupContainer:M.getPopupContainer},K),filedConfig:{valueType:O,customLightMode:!0}},b))}),de=ie,ne=["proFieldProps","fieldProps"],ee="dateWeek",ue=g.forwardRef(function(v,S){var K=v.proFieldProps,b=v.fieldProps,M=(0,C.Z)(v,ne),Y=(0,g.useContext)(p.Z);return(0,Q.jsx)(t.Z,(0,s.Z)({ref:S,valueType:ee,fieldProps:(0,s.Z)({getPopupContainer:Y.getPopupContainer},b),proFieldProps:K,filedConfig:{valueType:ee,customLightMode:!0}},M))}),d=ue,se=["proFieldProps","fieldProps"],te="dateYear",ve=g.forwardRef(function(v,S){var K=v.proFieldProps,b=v.fieldProps,M=(0,C.Z)(v,se),Y=(0,g.useContext)(p.Z);return(0,Q.jsx)(t.Z,(0,s.Z)({ref:S,valueType:te,fieldProps:(0,s.Z)({getPopupContainer:Y.getPopupContainer},b),proFieldProps:K,filedConfig:{valueType:te,customLightMode:!0}},M))}),ce=ve,G=h;G.Week=d,G.Month=P,G.Quarter=de,G.Year=ce,G.displayName="ProFormComponent";var ae=G},97333:function(oe,L,e){var s=e(185),C=e(75188),g=e(50959),p=e(58057),t=e(11527),Q=["fieldProps","min","proFieldProps","max"],V=function(h,D){var T=h.fieldProps,m=h.min,P=h.proFieldProps,z=h.max,O=(0,C.Z)(h,Q);return(0,t.jsx)(p.Z,(0,s.Z)({valueType:"digit",fieldProps:(0,s.Z)({min:m,max:z},T),ref:D,filedConfig:{defaultProps:{width:"100%"}},proFieldProps:P},O))},F=g.forwardRef(V);L.Z=F},303:function(oe,L,e){var s=e(185),C=e(75188),g=e(50959),p=e(58057),t=e(11527),Q=["fieldProps","proFieldProps"],V=function(U,h){var D=U.fieldProps,T=U.proFieldProps,m=(0,C.Z)(U,Q);return(0,t.jsx)(p.Z,(0,s.Z)({ref:h,valueType:"textarea",fieldProps:D,proFieldProps:T},m))};L.Z=g.forwardRef(V)},78250:function(oe,L,e){var s=e(185),C=e(75188),g=e(50959),p=e(58057),t=e(11527),Q=["fieldProps","proFieldProps"],V=["fieldProps","proFieldProps"],F="text",U=function(m){var P=m.fieldProps,z=m.proFieldProps,O=(0,C.Z)(m,Q);return(0,t.jsx)(p.Z,(0,s.Z)({valueType:F,fieldProps:P,filedConfig:{valueType:F},proFieldProps:z},O))},h=function(m){var P=m.fieldProps,z=m.proFieldProps,O=(0,C.Z)(m,V);return(0,t.jsx)(p.Z,(0,s.Z)({valueType:"password",fieldProps:P,proFieldProps:z,filedConfig:{valueType:F}},O))},D=U;D.Password=h,D.displayName="ProFormComponent",L.Z=D},25789:function(oe,L,e){e.r(L),e.d(L,{default:function(){return Je}});var s=e(57213),C=e.n(s),g=e(54306),p=e.n(g),t=e(50959),Q=e(20140),V=e(11662),F=e(4555),U=e(42204),h=e(38664),D=e(96430),T=e(75127),m=e(78250),P=e(97333),z=e(86994),O=e(303),ie=e(45389),de=e(66441),ne=e(75188),ee=e(63287),ue=e(8850),d=e(185),se=e(87),te=e(6569),ve=e(33932),ce=e(62521),G=e(79713),ae=e(64477),v=e(899),S=e(94634),K=e(4046),b=e(90426),M=e(13290),Y=e(76398),ye=e(15819),o=e(11527),Be=["onTableChange","maxLength","formItemProps","recordCreatorProps","rowKey","controlled","defaultValue","onChange","editableFormRef"],Fe=["record","position","creatorButtonText","newRecordType","parentKey","style"],ge=t.createContext(void 0);function me(r){var x=r.children,B=r.record,k=r.position,X=r.newRecordType,w=r.parentKey,$=(0,t.useContext)(ge);return t.cloneElement(x,(0,d.Z)((0,d.Z)({},x.props),{},{onClick:function(){var R=(0,ue.Z)((0,ee.Z)().mark(function W(j){var y,N,I,J;return(0,ee.Z)().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,(y=(N=x.props).onClick)===null||y===void 0?void 0:y.call(N,j);case 2:if(J=E.sent,J!==!1){E.next=5;break}return E.abrupt("return");case 5:$==null||(I=$.current)===null||I===void 0||I.addEditRecord(B,{position:k,newRecordType:X,parentKey:w});case 6:case"end":return E.stop()}},W)}));function Z(W){return R.apply(this,arguments)}return Z}()}))}function pe(r){var x,B,k=(0,ce.YB)(),X=r.onTableChange,w=r.maxLength,$=r.formItemProps,R=r.recordCreatorProps,Z=r.rowKey,W=r.controlled,j=r.defaultValue,y=r.onChange,N=r.editableFormRef,I=(0,ne.Z)(r,Be),J=(0,G.D)(r.value),le=(0,t.useRef)(),E=(0,t.useRef)();(0,t.useImperativeHandle)(I.actionRef,function(){return le.current});var Le=(0,b.Z)(function(){return r.value||j||[]},{value:r.value,onChange:r.onChange}),Qe=(0,de.Z)(Le,2),u=Qe[0],Ue=Qe[1],q=t.useMemo(function(){return typeof Z=="function"?Z:function(A,n){return A[Z]||n}},[Z]),xe=function(n){if(typeof n=="number"&&!r.name){if(n>=u.length)return n;var a=u&&u[n];return q==null?void 0:q(a,n)}if((typeof n=="string"||n>=u.length)&&r.name){var l=u.findIndex(function(i,c){var f;return(q==null||(f=q(i,c))===null||f===void 0?void 0:f.toString())===(n==null?void 0:n.toString())});return l}return n};(0,t.useImperativeHandle)(N,function(){var A=function(l){var i,c;if(l==null)throw new Error("rowIndex is required");var f=xe(l),H=[r.name,(i=f==null?void 0:f.toString())!==null&&i!==void 0?i:""].flat(1).filter(Boolean);return(c=E.current)===null||c===void 0?void 0:c.getFieldValue(H)},n=function(){var l,i=[r.name].flat(1).filter(Boolean);if(Array.isArray(i)&&i.length===0){var c,f=(c=E.current)===null||c===void 0?void 0:c.getFieldsValue();return Array.isArray(f)?f:Object.keys(f).map(function(H){return f[H]})}return(l=E.current)===null||l===void 0?void 0:l.getFieldValue(i)};return(0,d.Z)((0,d.Z)({},E.current),{},{getRowData:A,getRowsData:n,setRowData:function(l,i){var c,f,H,Pe;if(l==null)throw new Error("rowIndex is required");var Ee=xe(l),Ge=[r.name,(c=Ee==null?void 0:Ee.toString())!==null&&c!==void 0?c:""].flat(1).filter(Boolean),Xe=((f=E.current)===null||f===void 0||(H=f.getFieldsValue)===null||H===void 0?void 0:H.call(f))||{},$e=(0,Y.Z)(Xe,Ge,(0,d.Z)((0,d.Z)({},A(l)),i||{}));return(Pe=E.current)===null||Pe===void 0||Pe.setFieldsValue($e),!0}})}),(0,t.useEffect)(function(){r.controlled&&u.forEach(function(A,n){var a;(a=E.current)===null||a===void 0||a.setFieldsValue((0,ie.Z)({},q(A,n),A))},{})},[u,r.controlled]),(0,t.useEffect)(function(){if(r.name){var A;E.current=r==null||(A=r.editable)===null||A===void 0?void 0:A.form}},[(x=r.editable)===null||x===void 0?void 0:x.form,r.name]);var _=R||{},Oe=_.record,Ae=_.position,Ye=_.creatorButtonText,we=_.newRecordType,We=_.parentKey,Ve=_.style,ze=(0,ne.Z)(_,Fe),Ze=Ae==="top",re=(0,t.useMemo)(function(){return typeof w=="number"&&w<=(u==null?void 0:u.length)?!1:R!==!1&&(0,o.jsx)(me,{record:(0,ae.h)(Oe,u==null?void 0:u.length,u)||{},position:Ae,parentKey:(0,ae.h)(We,u==null?void 0:u.length,u),newRecordType:we,children:(0,o.jsx)(h.ZP,(0,d.Z)((0,d.Z)({type:"dashed",style:(0,d.Z)({display:"block",margin:"10px 0",width:"100%"},Ve),icon:(0,o.jsx)(se.Z,{})},ze),{},{children:Ye||k.getMessage("editableTable.action.add","\u6DFB\u52A0\u4E00\u884C\u6570\u636E")}))})},[R,w,u==null?void 0:u.length]),ke=(0,t.useMemo)(function(){return re?Ze?{components:{header:{wrapper:function(n){var a,l=n.className,i=n.children;return(0,o.jsxs)("thead",{className:l,children:[i,(0,o.jsxs)("tr",{style:{position:"relative"},children:[(0,o.jsx)("td",{colSpan:0,style:{visibility:"hidden"},children:re}),(0,o.jsx)("td",{style:{position:"absolute",left:0,width:"100%"},colSpan:(a=I.columns)===null||a===void 0?void 0:a.length,children:re})]})]})}}}}:{tableViewRender:function(n,a){var l,i;return(0,o.jsxs)(o.Fragment,{children:[(l=(i=r.tableViewRender)===null||i===void 0?void 0:i.call(r,n,a))!==null&&l!==void 0?l:a,re]})}}:{}},[Ze,re]),fe=(0,d.Z)({},r.editable),He=(0,v.J)(function(A,n){var a,l,i;if((a=r.editable)===null||a===void 0||(l=a.onValuesChange)===null||l===void 0||l.call(a,A,n),(i=r.onValuesChange)===null||i===void 0||i.call(r,n,A),r.controlled){var c;r==null||(c=r.onChange)===null||c===void 0||c.call(r,n)}});return(r!=null&&r.onValuesChange||(B=r.editable)!==null&&B!==void 0&&B.onValuesChange||r.controlled&&r!==null&&r!==void 0&&r.onChange)&&(fe.onValuesChange=He),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(ge.Provider,{value:le,children:(0,o.jsx)(ye.Z,(0,d.Z)((0,d.Z)((0,d.Z)({search:!1,options:!1,pagination:!1,rowKey:Z,revalidateOnFocus:!1},I),ke),{},{tableLayout:"fixed",actionRef:le,onChange:X,editable:(0,d.Z)((0,d.Z)({},fe),{},{formProps:(0,d.Z)({formRef:E},fe.formProps)}),dataSource:u,onDataSourceChange:function(n){if(Ue(n),r.name&&Ae==="top"){var a,l=(0,Y.Z)({},[r.name].flat(1).filter(Boolean),n);(a=E.current)===null||a===void 0||a.setFieldsValue(l)}}}))}),r.name?(0,o.jsx)(te.Z,{name:[r.name],children:function(n){var a,l,i=(0,M.Z)(n,[r.name].flat(1)),c=i==null?void 0:i.find(function(f,H){return!(0,S.A)(f,J==null?void 0:J[H])});return c&&J&&(r==null||(a=r.editable)===null||a===void 0||(l=a.onValuesChange)===null||l===void 0||l.call(a,c,i)),null}}):null]})}function he(r){var x=ve.ZP.useFormInstance();return r.name?(0,o.jsx)(K.Z.Item,(0,d.Z)((0,d.Z)({style:{maxWidth:"100%"}},r==null?void 0:r.formItemProps),{},{name:r.name,children:(0,o.jsx)(pe,(0,d.Z)((0,d.Z)({},r),{},{editable:(0,d.Z)((0,d.Z)({},r.editable),{},{form:x})}))})):(0,o.jsx)(pe,(0,d.Z)({},r))}he.RecordCreator=me;var Re=he,je=e(75506),Ie=e(42808),De=e(89421),Te=function(x){var B=x.value,k=x.onChange,X=(0,t.useState)(!1),w=p()(X,2),$=w[0],R=w[1],Z=(0,t.useState)(),W=p()(Z,2),j=W[0],y=W[1];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(je.Z,{value:B==null?void 0:B.name,onClick:function(){return R(!0)},onFocus:function(I){return I.target.blur()},placeholder:"\u9009\u62E9\u8D27\u54C1"}),(0,o.jsx)(Ie.Z,{open:$,title:"\u9009\u62E9\u8D27\u54C1",destroyOnClose:!0,maskClosable:!1,extra:(0,o.jsxs)(F.Z,{children:[(0,o.jsx)(h.ZP,{onClick:function(){return R(!1)},children:"\u53D6\u6D88"}),(0,o.jsx)(h.ZP,{onClick:function(){k==null||k(j),R(!1)},type:"primary",children:"\u786E\u8BA4"})]}),width:800,onClose:function(){return R(!1)},children:(0,o.jsx)(De.default,{scene:"select",rowSelection:{type:"radio",onChange:function(I,J){return y(J[0])}},tableAlertRender:void 0,tableAlertOptionRender:void 0})})]})},Se=Te,Ke=e(74637),Ce=e.n(Ke),be=e(32699),Me=e(90570),Ne=function(){var x=(0,t.useRef)(),B=(0,t.useRef)(),k=(0,t.useState)([]),X=p()(k,2),w=X[0],$=X[1],R=[{title:"\u56FE\u7247",dataIndex:"pic",fixed:"left",width:80,renderFormItem:function(W,j){var y=j.record.pic;return y?(0,o.jsx)(Q.Z,{src:y,width:50}):(0,o.jsx)(Q.Z,{width:50,src:"error",preview:!1,fallback:"data:image/png;base64,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"})}},{title:"\u8D27\u54C1",key:"state",dataIndex:"state",width:120,renderFormItem:function(W,j){var y=j.record.id;return(0,o.jsx)(Se,{onChange:function(I){var J=B.current.getRowData(y);B.current.setRowData(y,C()(C()({},J),(0,be.omit)(I,"id")))}})}},{title:"\u989C\u8272",dataIndex:"color",width:100},{title:"\u5C3A\u7801",dataIndex:"size",width:100},{title:"\u6570\u91CF",dataIndex:"quantity",width:100},{title:"\u5355\u4EF7",dataIndex:"price",width:100},{title:"\u5C0F\u8BA1",dataIndex:"total",width:100},{title:"\u5907\u6CE8",dataIndex:"remark",width:100},{title:"\u64CD\u4F5C",valueType:"option",fixed:"right",width:100}];return(0,o.jsxs)(T.A,{grid:!0,formRef:x,onValuesChange:console.log,layout:"horizontal",labelCol:{flex:"0 1 auto"},autoFocusFirstInput:!1,initialValues:{p8:Ce()(),p9:Ce()().year(),p13:10},submitter:{render:function(W,j){return(0,o.jsx)(V.Z,{justify:"center",style:{marginBlockStart:10},children:(0,o.jsx)(F.Z,{children:j})})}},style:{background:"#fff",padding:"12px 24px",borderRadius:6},children:[(0,o.jsxs)(U.Z,{span:6,style:{display:"flex",paddingInline:0},children:[(0,o.jsx)(m.Z,{label:"\u5382\u5546",name:"p1",colProps:{flex:"0 1 auto"},rules:[{required:!0}]}),(0,o.jsx)(h.ZP,{type:"primary",style:{height:31.6,paddingInline:8,marginInlineEnd:4},children:(0,o.jsx)(D.Z,{style:{marginBlockEnd:8}})})]}),(0,o.jsx)(m.Z,{label:"\u5E97\u5458",name:"p2",colProps:{span:6},rules:[{required:!0}]}),(0,o.jsx)(P.Z,{label:"\u7ED3\u4F59",name:"p3",colProps:{span:6},fieldProps:{precision:2},min:0}),(0,o.jsx)(P.Z,{label:"\u5FAE\u4FE1",name:"p4",colProps:{span:6},fieldProps:{precision:2},min:0}),(0,o.jsx)(z.Z,{label:"\u65E5\u671F",name:"p5",colProps:{span:6},rules:[{required:!0}],fieldProps:{inputReadOnly:(0,Me.t)(),style:{width:"100%"}}}),(0,o.jsx)(m.Z,{label:"\u6838\u9500",name:"p6",colProps:{span:6},rules:[{required:!0}]}),(0,o.jsx)(P.Z,{label:"\u73B0\u91D1",name:"p7",colProps:{span:6},fieldProps:{precision:2},min:0}),(0,o.jsx)(P.Z,{label:"\u652F\u4ED8\u5B9D",name:"p8",colProps:{span:6},fieldProps:{precision:2},min:0}),(0,o.jsx)(O.Z,{label:"\u5907\u6CE8",name:"p9",colProps:{span:12},fieldProps:{rows:1},placeholder:"\u5148\u8BBE\u7F6E\u989C\u8272\u5C3A\u7801\uFF0C\u518D\u5F55\u5165\u5E93\u5B58"}),(0,o.jsx)(P.Z,{label:"\u5E94\u4ED8",name:"p10",colProps:{span:6},fieldProps:{precision:2},min:0}),(0,o.jsx)(P.Z,{label:"\u5B9E\u4ED8",name:"p11",colProps:{span:6},fieldProps:{precision:2},min:0}),(0,o.jsx)(P.Z,{label:"\u603B\u6570",name:"p12",colProps:{span:6},fieldProps:{precision:2},min:0}),(0,o.jsx)(P.Z,{label:"\u6C47\u6B3E",name:"p13",colProps:{span:6},fieldProps:{precision:2},min:0}),(0,o.jsx)(P.Z,{label:"\u5237\u6B3E",name:"p14",colProps:{span:6},fieldProps:{precision:2},min:0}),(0,o.jsx)(P.Z,{label:"\u7ED3\u4F59",name:"p15",colProps:{span:6},fieldProps:{precision:2},min:0}),(0,o.jsx)(T.A.Item,{name:"dataSource",trigger:"onValuesChange",children:(0,o.jsx)(Re,{rowKey:"id",size:"small",columns:R,editableFormRef:B,toolBarRender:!1,recordCreatorProps:{newRecordType:"dataSource",record:function(){return{id:Date.now()}}},editable:{type:"multiple",editableKeys:w,onChange:$,actionRender:function(W,j,y){return[y.delete]}}})})]})},Je=Ne}}]);
