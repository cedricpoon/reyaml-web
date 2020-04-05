(this["webpackJsonpreyaml-web"]=this["webpackJsonpreyaml-web"]||[]).push([[0],{102:function(e,t,n){e.exports={card:"toast_card__1VR9f font_base__2USid"}},103:function(e,t,n){e.exports={appFrame:"AppFrame_appFrame__9zBLk font_base__2USid"}},104:function(e,t,n){e.exports=n(231)},22:function(e,t,n){e.exports={menuItem:"MenuItem_menuItem__2lNL3",button:"MenuItem_button__2Mm5B",strong:"MenuItem_strong__zWajT",disabled:"MenuItem_disabled__1YauT",active:"MenuItem_active__1FB6q",relative:"MenuItem_relative__22Fyb",dropdown:"MenuItem_dropdown__25Ux8",left:"MenuItem_left__2sOVe",right:"MenuItem_right__1SCUQ"}},230:function(e,t,n){},231:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(9),i=n.n(o),c=n(3),s=n(2),l=n(4),u=n(5),p=n(11),d=n(21),f=n(17),b=n(93),m=n(36),h=n(94),v=n(37),O=(n(123),n(60)),E=n.n(O),w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A.appStatus,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_APP_STATUS":return t.status;default:return e}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A.lint,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LINT":return t.status;default:return e}},_=n(28),g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A.context,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CONTEXT_D3OBJECT":return Object(_.a)({},e,{d3Object:t.d3Object});case"SET_CONTEXT_YAML":return Object(_.a)({},e,{yaml:t.yaml});case"SET_CONTEXT_ROW":return Object(_.a)({},e,{row:t.row});case"REVOKE_CONTEXT":return Object(_.a)({},e,{},A.context);default:return e}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A.cursor,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_CURSOR":return Object(_.a)({},e,{index:t.index,goto:t.goto});default:return e}},k="INIT_LOADING",C="LOADING",T="NORMAL",S="ERROR",x="OK",A={appStatus:T,context:{d3Object:null,yaml:""},cursor:{index:0,goto:!0},lint:x},R={root:{key:"root",storage:E.a,blacklist:["cursor"]},cursor:{key:"cursor",storage:E.a,blacklist:["goto"]}},N=Object(f.c)({cursor:Object(m.a)(R.cursor,y),appStatus:w,lint:j,context:g}),L=Object(m.a)(R.root,N),D=n(64),P=n(95),I=n(96);D.a.use(P.a).use(I.a).use(p.b).init({fallbackLng:"en",debug:!1,backend:{loadPath:"/".concat("reyaml-web","/locales/{{lng}}/{{ns}}.json")},interpolation:{escapeValue:!1},load:"languageOnly"});var M=D.a,B=n(13),U=n.n(B),W=n(23),F=n(39),z=(n(128),n(45)),Y=function(e){return{type:"SET_APP_STATUS",status:e}},X=function(e){return{type:"SET_LINT",status:e}},J=function(e){return{type:"SET_CONTEXT_YAML",yaml:e}},V=function(e){return{type:"UPDATE_CURSOR",index:e.index,goto:!!e.goto}},G=function(e){var t=e.yaml,n=e.row;return function(e){return new Promise((function(r,a){if(!z.Ryaml.isJunkLine({line:t.split("\n")[n]})){var o=n-new z.Ryaml(t).countJunkLine({lineNo:n}),i=new z.Ryaml(t).toRjson({profile:"d3Tree"}).markLine({lineNo:o}).truncate({lineNo:o,level:2,siblingSize:2}).toD3({profile:"d3Tree"});e(X(Array.isArray(i)&&1===i.length?x:S)),Array.isArray(i)&&1===i.length&&e({type:"SET_CONTEXT_D3OBJECT",d3Object:i}),r()}a()}))}},K=n(99),Q=n.n(K),q=n(16),$=n.n(q),H=n(61),Z=n.n(H),ee=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidUpdate",value:function(){this.props.updated&&this.props.updated()}},{key:"render",value:function(){return a.a.createElement(Q.a,{className:$()([Z.a.spinner,!this.props.enabled&&Z.a.hidden]),name:"pulse",fadeIn:"none"})}}]),n}(a.a.Component);ee.defaultProps={enabled:!0};var te=ee,ne=n(100),re=n.n(ne),ae=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props,t=e.containerRect,n=e.dataObject;return a.a.createElement(re.a,{translate:t&&{x:t.width/4,y:t.height/2},data:n,orientation:"vertical",initialDepth:1,transitionDuration:0,zoom:.75,pathFunc:"straight",collapsible:!1,separation:{siblings:1,nonSiblings:1}})}}]),n}(a.a.Component),oe=n(101),ie=n.n(oe),ce=(n(228),n(229),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement(ie.a,Object.assign({mode:"yaml",theme:"chrome",editorProps:{$blockScrolling:!0},height:"100%",width:"100%",value:this.props.text},this.props.aceEditorProps))}}]),n}(a.a.Component));ce.defaultProps={aceEditorProps:null,text:""};var se=ce,le=n(22),ue=n.n(le),pe=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e))._onDropdownClick=function(e){r.props.disabled||r.props.dropdown&&r.setState({active:r.dropdown.contains(e.target)})},r.state={active:e.active},r}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.dropdown&&document.addEventListener("click",this._onDropdownClick,!1)}},{key:"componentWillUnmount",value:function(){this.props.dropdown&&document.removeEventListener("click",this._onDropdownClick,!1)}},{key:"render",value:function(){var e=this,t=a.a.createElement("div",{title:this.props.tooltip,className:$()([ue.a.menuItem,!this.props.disabled&&[(this.props.button||this.props.dropdown)&&ue.a.button,this.props.dropdown&&this.state.active&&ue.a.active],this.props.strong&&ue.a.strong,this.props.disabled&&ue.a.disabled]),onClick:function(t){e.props.onClick&&e.props.onClick(t)}},this.props.children);return this.props.dropdown&&!this.props.disabled?a.a.createElement("span",{className:ue.a.relative,ref:function(t){e.dropdown=t}},t,this.state.active&&a.a.createElement("div",{className:$()([ue.a.dropdown,"left"===this.props.dropDirection&&ue.a.left,"right"===this.props.dropDirection&&ue.a.right])},this.props.dropdown)):t}}]),n}(a.a.Component);pe.defaultProps={};var de=pe,fe=n(46),be=n.n(fe),me=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{style:{color:this.props.color},className:$()([be.a.icon,be.a[this.props.size],this.props.color&&be.a.colorTrans])},this.props.children)}}]),n}(a.a.Component);me.defaultProps={size:"medium"};var he=me,ve=n(62),Oe=n.n(ve);var Ee=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:Oe.a.dropdownMenu},this.props.children)}}]),n}(a.a.Component);Ee.defaultProps={},Ee.LineBreak=function(e){return a.a.createElement("div",{className:Oe.a.lineBreak})};var we=Ee,je=n(63),_e=n.n(je),ge=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).onChange=function(e){if(r.AceEditor){var t=r.AceEditor.editor.selection.getCursor().row;r.props.startLoading(),r.props.updateYaml(e),r.props.updateRow(t),r.setState({shouldRenderD3Object:!0})}},r.onCursorChange=function(){if(r.AceEditor){var e=r.AceEditor.editor.selection.getCursor().row;e!==r.state.row&&(r.props.startLoading(),r.props.updateRow(e),r.setState({shouldRenderD3Object:!0}))}},r.renderD3Object=Object(W.a)(U.a.mark((function e(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.props.compileD3Object({yaml:r.props.yaml,row:r.props.row});case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:r.setState({shouldRenderD3Object:!1}),r.props.completeLoading();case 9:case"end":return e.stop()}}),e,null,[[0,5]])}))),r.state={defaultD3Object:{name:"".concat("reyaml-web","-v").concat("0.2.0"),attributes:{"":e.t("tree-placeholder")}},shouldRenderD3Object:!1},r}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.setState({containerRect:this.Container.getBoundingClientRect()}),this.AceEditor&&(this.AceEditor.editor.session.setNewLineMode("unix"),this.AceEditor.editor.session.setOptions({tabSize:2,useSoftTabs:!0}))}},{key:"componentDidUpdate",value:function(){var e=this;if(this.AceEditor){var t=this.AceEditor.editor.selection.getSelectionAnchor(),n={row:this.props.row,column:this.props.resetSelectionRange?0:this.AceEditor.editor.selection.getCursor().column};this.AceEditor.editor.selection.setSelectionRange({start:this.props.resetSelectionRange?n:t,end:n}),this.props.resetSelectionRange&&(this.AceEditor.editor.resize(!0),this.AceEditor.editor.scrollToLine(this.props.row,!0,!1))}this.state.shouldRenderD3Object&&!this.state.updateLock&&setTimeout((function(){e.renderD3Object()}))}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:_e.a.container,ref:function(t){return e.Container=t}},a.a.createElement(F.a,{orientation:"vertical"},a.a.createElement(F.b,null,a.a.createElement(ae,{containerRect:this.state.containerRect,dataObject:this.props.d3Object||this.state.defaultD3Object})),a.a.createElement(F.c,{className:_e.a.seperator}),a.a.createElement(F.b,null,a.a.createElement(se,{text:this.props.yaml,aceEditorProps:{onChange:this.onChange,onCursorChange:this.onCursorChange,ref:function(t){e.AceEditor=t}}}))))}}]),n}(a.a.Component),ye=Object(p.c)()(Object(d.b)((function(e){return{updateLock:e.appStatus===k,d3Object:e.context.d3Object,yaml:e.context.yaml,row:e.cursor.index,resetSelectionRange:e.cursor.goto}}),(function(e,t){return{startLoading:function(){return e(Y(k))},completeLoading:function(){return e(Y(T))},compileD3Object:function(t){return e(G(t))},updateYaml:function(t){return e(J(t))},updateRow:function(t){return e(V({index:t}))}}}))(ge)),ke=n(48),Ce=n(102),Te=n.n(Ce),Se=function(e){v.a.info("> ".concat(e),{position:v.a.POSITION.BOTTOM_RIGHT,className:Te.a.card})},xe=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a)))._openYaml=function(t){if(e.fileOpen.files[0]){var n=new FileReader;n.readAsText(e.fileOpen.files[0],"UTF-8"),n.onload=function(){var t=Object(W.a)(U.a.mark((function t(n){return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.updateContext(n.target.result);case 2:Se('"'.concat(e.fileOpen.files[0].name,'" ').concat(e.props.t("alert-file-loaded")));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),n.onerror=function(t){Se("".concat(e.props.t("alert-file-error"),' "').concat(e.fileOpen.files[0].name,'"'))}}},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.props.t;return a.a.createElement(we,null,a.a.createElement(de,{button:!0,onClick:Object(W.a)(U.a.mark((function t(){return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.confirm(e.props.t("alert-new-confirm"))){t.next=4;break}return t.next=3,e.props.resetContext();case 3:Se(e.props.t("alert-new-done"));case 4:case"end":return t.stop()}}),t)})))},t("toolbar-file-new")),a.a.createElement(de,{button:!0,onClick:function(t){e.fileOpen.click()}},t("toolbar-file-open")),a.a.createElement(we.LineBreak,null),a.a.createElement(de,{button:!0,onClick:function(t){Qe.flush(),Se(e.props.t("alert-save-done"))}},t("toolbar-file-save")),a.a.createElement(de,{button:!0,onClick:function(t){e.saveAs.download=window.prompt(e.props.t("alert-saveas-filename"),e.saveAs.download)||"",e.saveAs.download.length>0&&(e.saveAs.click(),Se("".concat(e.props.t("alert-saveas-done"),' "').concat(e.saveAs.download,'"')))}},t("toolbar-file-saveas")),a.a.createElement(we.LineBreak,null),a.a.createElement(de,{button:!0},t("toolbar-file-export-link")),a.a.createElement(de,{button:!0},t("toolbar-file-export-diagram")),a.a.createElement("section",{hidden:!0},a.a.createElement("input",{type:"file",accept:".yaml,.yml",ref:function(t){return e.fileOpen=t},onChange:this._openYaml}),a.a.createElement("a",{ref:function(t){return e.saveAs=t},href:"data:application/x-yaml;charset=utf-8,".concat(encodeURIComponent(this.props.yaml)),download:"download.yml"},"-")))}}]),n}(a.a.Component);xe.defaultProps={};var Ae=Object(p.c)()(Object(d.b)((function(e,t){return{yaml:e.context.yaml}}),(function(e,t){return{resetContext:function(){return e((function(e){return new Promise((function(t){e({type:"REVOKE_CONTEXT"}),e(X(x)),t()}))}))},updateContext:function(t){return e(function(e){return function(t){return new Promise(function(){var n=Object(W.a)(U.a.mark((function n(r){return U.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t(J(e)),t(V(A.cursor)),n.next=4,t(G({yaml:e,row:0}));case 4:r();case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}}(t))}}}))(xe)),Re=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.t;return a.a.createElement(we,null,a.a.createElement(de,{button:!0},e("toolbar-edit-undo")),a.a.createElement(de,{button:!0},e("toolbar-edit-redo")),a.a.createElement(we.LineBreak,null),a.a.createElement(de,{button:!0},e("toolbar-edit-cut")),a.a.createElement(de,{button:!0},e("toolbar-edit-copy")),a.a.createElement(de,{button:!0},e("toolbar-edit-paste")),a.a.createElement(we.LineBreak,null),a.a.createElement(de,{button:!0},e("toolbar-edit-find")),a.a.createElement(de,{button:!0},e("toolbar-edit-replace")))}}]),n}(a.a.Component);Re.defaultProps={};var Ne=Object(p.c)()(Re),Le=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.t;return a.a.createElement(we,null,a.a.createElement(de,{button:!0},e("toolbar-help-report")),a.a.createElement(de,{button:!0},e("toolbar-help-github")),a.a.createElement(we.LineBreak,null),a.a.createElement(de,{disabled:!0},"Version: ".concat("0.2.0")),a.a.createElement(de,{disabled:!0},"Author: ".concat("Cedric Poon <cedric@poons.me>")))}}]),n}(a.a.Component);Le.defaultProps={};var De=Object(p.c)()(Le),Pe=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.t;return a.a.createElement(we,null,a.a.createElement(de,{button:!0},e("toolbar-view-reset")),a.a.createElement(we.LineBreak,null),a.a.createElement(de,{button:!0},e("toolbar-view-hide-yaml")),a.a.createElement(de,{button:!0},e("toolbar-view-hide-d3")))}}]),n}(a.a.Component);Pe.defaultProps={};var Ie=Object(p.c)()(Pe),Me=n(47),Be=n.n(Me),Ue=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.t;return a.a.createElement("nav",{className:Be.a.toolbar},a.a.createElement("section",{className:Be.a.left},a.a.createElement(de,{strong:!0},"reyaml-web"),a.a.createElement(de,{dropdown:a.a.createElement(Ae,null)},e("toolbar-file")),a.a.createElement(de,{dropdown:a.a.createElement(Ne,null)},e("toolbar-edit")),a.a.createElement(de,{dropdown:a.a.createElement(Ie,null)},e("toolbar-view")),a.a.createElement(de,{dropdown:a.a.createElement(De,null)},e("toolbar-help"))),a.a.createElement("section",{className:Be.a.right},a.a.createElement(de,{tooltip:this.props.lint?e("toolbar-lint-success"):e("toolbar-lint-failure")},a.a.createElement(he,{color:this.props.lint?"darkgreen":"crimson"},this.props.lint?a.a.createElement(ke.a,null):a.a.createElement(ke.b,null))),a.a.createElement(de,{button:!0,tooltip:e("toolbar-settings")},a.a.createElement(he,null,a.a.createElement(ke.c,null)))))}}]),n}(a.a.Component);Ue.defaultProps={lint:!0};var We=Object(p.c)(null,{withRef:!0})(Object(d.b)((function(e,t){return{lint:e.lint===x}}),null)(Ue)),Fe=n(103),ze=n.n(Fe),Ye=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:ze.a.appFrame},a.a.createElement(We,null),a.a.createElement(ye,null),a.a.createElement(te,{enabled:this.props.appStatus===k||this.props.appStatus===C,updated:function(){e.props.appStatus===k&&e.props.spinnerDidUpdate()}}))}}]),n}(a.a.Component),Xe=Object(d.b)((function(e){return{appStatus:e.appStatus}}),(function(e){return{spinnerDidUpdate:function(){return e(Y(C))}}}))(Ye),Je=f.d,Ve=Object(f.e)(L,Je(Object(f.a)(b.a))),Ge=Object(m.b)(Ve);v.a.configure();var Ke=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).state={},r}return Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement(a.a.Suspense,{fallback:a.a.createElement(te,null)},a.a.createElement(d.a,{store:Ve},a.a.createElement(h.a,{persistor:Ge},a.a.createElement(p.a,{i18n:M},a.a.createElement(Xe,null)))))}}]),n}(a.a.Component),Qe=Ge,qe=Ke,$e=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function He(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(230);i.a.render(a.a.createElement(qe,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/reyaml-web",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/reyaml-web","/service-worker.js");$e?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):He(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):He(t,e)}))}}()},46:function(e,t,n){e.exports={colorTrans:"Icon_colorTrans__1w3A-",icon:"Icon_icon__2mc5K",medium:"Icon_medium__2NfBW"}},47:function(e,t,n){e.exports={toolbar:"Toolbar_toolbar__1fAPx",left:"Toolbar_left__syRz3",right:"Toolbar_right__2jy0L"}},61:function(e,t,n){e.exports={spinner:"Spinner_spinner__2FBIW",hidden:"Spinner_hidden__kjMBL"}},62:function(e,t,n){e.exports={dropdownMenu:"DropdownMenu_dropdownMenu__136GQ",lineBreak:"DropdownMenu_lineBreak__MYacq"}},63:function(e,t,n){e.exports={container:"Workbench_container__3Q8as",seperator:"Workbench_seperator__2l0eQ"}}},[[104,1,2]]]);