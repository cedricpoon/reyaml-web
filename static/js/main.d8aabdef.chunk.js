(this["webpackJsonpreyaml-web"]=this["webpackJsonpreyaml-web"]||[]).push([[0],{104:function(e,t,n){e.exports={root:"Link_root__dwwM2"}},105:function(e,t,n){e.exports={appFrame:"AppFrame_appFrame__9zBLk font_base__2USid"}},106:function(e,t,n){e.exports={root:"Settings_root__LM34H"}},107:function(e,t,n){e.exports=n(234)},233:function(e,t,n){},234:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(10),i=n.n(o),c=n(3),s=n(2),l=n(4),u=n(5),p=n(9),d=n(16),h=n(19),f=n(95),m=n(38),b=n(96),v=n(39),g=(n(126),n(61)),E=n.n(g),O="INIT_LOADING",w="LOADING",_="NORMAL",S="ERROR",j="OK",y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D.appStatus,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_APP_STATUS":return t.status;default:return e}},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D.lint,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LINT":return t.status;default:return e}},x=n(14),C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D.context,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CONTEXT_D3OBJECT":return Object(x.a)({},e,{d3Object:t.d3Object});case"SET_CONTEXT_YAML":return Object(x.a)({},e,{yaml:t.yaml});case"SET_CONTEXT_ROW":return Object(x.a)({},e,{row:t.row});case"RESET_CONTEXT":return Object(x.a)({},e,{},D.context);default:return e}},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D.cursor,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_CURSOR":return Object(x.a)({},e,{index:t.index,goto:t.goto});default:return e}},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D.banner,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"COMPLETE_BANNER":return!1;default:return e}},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D.workBench,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_WORKBENCH":return Object(x.a)({},e,{},t.workBench?t.workBench:D.workBench);case"RESET_WORKBENCH":return D.workBench;default:return e}},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D.version,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_VERSION":return t.version;default:return e}},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D.settings,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_DIAGRAM_SETTINGS":return Object(x.a)({},e,{diagram:Object(x.a)({},e.diagram,{},t.diagram)});case"SET_EDITOR_SETTINGS":return Object(x.a)({},e,{editor:Object(x.a)({},e.editor,{},t.editor)});default:return e}},D={appStatus:_,version:"0.6.5",context:{d3Object:null,yaml:""},cursor:{index:0,goto:!0},lint:j,banner:!0,workBench:{d3Tree:1,textEditor:1,settings:0},settings:{diagram:{renderHeight:2,renderWidth:2,maxStringSize:15},editor:{tabSize:2}}},I={root:{key:"root",storage:E.a,blacklist:["cursor"]},cursor:{key:"cursor",storage:E.a,blacklist:["goto"]}},L=Object(h.c)({cursor:Object(m.a)(I.cursor,T),appStatus:y,lint:k,context:C,banner:R,workBench:N,version:A,settings:B}),P=Object(m.a)(I.root,L),z=n(67),M=n(97),W=n(98);z.a.use(M.a).use(W.a).use(p.b).init({fallbackLng:"en",debug:!1,backend:{loadPath:"/".concat("reyaml-web","/locales/{{lng}}/{{ns}}.json")},interpolation:{escapeValue:!1},load:"languageOnly"});var U=z.a,F=n(12),V=n.n(F),H=n(22),Y=n(33),G=(n(131),n(46)),X=n(37),J=n.n(X),K=function(e){return{type:"SET_APP_STATUS",status:e}},Q=function(e){return{type:"SET_LINT",status:e}},q=function(e){return{type:"SET_CONTEXT_YAML",yaml:e}},$=function(e){return{type:"UPDATE_CURSOR",index:e.index,goto:!!e.goto}},Z=function(e){return{type:"SET_WORKBENCH",workBench:e}},ee=function(e){var t=e.yaml,n=e.row;return function(e,r){return new Promise((function(a,o){if(!G.Ryaml.isJunkLine({line:t.split("\n")[n]})){var i=n-new G.Ryaml(t).countJunkLine({lineNo:n}),c=r().settings,s=c.diagram,l=c.editor,u=s.renderHeight,p=s.renderWidth,d=s.maxStringSize;J.a.size={tabSize:l.tabSize,maxStringSize:d};var h=new G.Ryaml(t,J.a).toRjson({profile:"d3Tree"}).markLine({lineNo:i}).truncate(Object(x.a)({lineNo:i},u>0?{level:u}:null,{},p>0?{siblingSize:p}:null)).toD3({profile:"d3Tree"});e(Q(Array.isArray(h)&&1===h.length?j:S)),Array.isArray(h)&&1===h.length&&e({type:"SET_CONTEXT_D3OBJECT",d3Object:h}),a()}o()}))}},te=n(101),ne=n.n(te),re=n(15),ae=n.n(re),oe=n(62),ie=n.n(oe),ce=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidUpdate",value:function(){this.props.updated&&this.props.updated()}},{key:"render",value:function(){return a.a.createElement(ne.a,{className:ae()([ie.a.spinner,!this.props.enabled&&ie.a.hidden]),name:"pulse",fadeIn:"none"})}}]),n}(a.a.Component);ce.defaultProps={enabled:!0};var se=ce,le=n(102),ue=n.n(le),pe=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props,t=e.containerRect,n=e.dataObject;return a.a.createElement(ue.a,{translate:t&&{x:t.width/4,y:t.height/2},data:n,orientation:"vertical",initialDepth:1,transitionDuration:0,zoom:.75,pathFunc:"straight",collapsible:!1,separation:{siblings:1,nonSiblings:1}})}}]),n}(a.a.Component),de=n(103),he=n.n(de),fe=(n(231),n(232),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement(he.a,Object.assign({mode:"yaml",theme:"chrome",editorProps:{$blockScrolling:!0},height:"100%",width:"100%",value:this.props.text},this.props.aceEditorProps))}}]),n}(a.a.Component));fe.defaultProps={aceEditorProps:null,text:""};var me=fe,be=n(24),ve=n.n(be),ge=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e))._onDropdownClick=function(e){r.props.disabled||r.props.dropdown&&r.setState({active:r.dropdown.contains(e.target)})},r.state={active:e.active},r}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.dropdown&&document.addEventListener("click",this._onDropdownClick,!1)}},{key:"componentWillUnmount",value:function(){this.props.dropdown&&document.removeEventListener("click",this._onDropdownClick,!1)}},{key:"render",value:function(){var e=this,t=a.a.createElement("div",{title:this.props.tooltip,className:ae()([ve.a.menuItem,!this.props.disabled&&[(this.props.button||this.props.dropdown||this.props.radio)&&ve.a.button,this.props.dropdown&&this.state.active&&ve.a.active,this.props.radio&&this.props.active&&ve.a.active],this.props.strong&&ve.a.strong,this.props.disabled&&ve.a.disabled]),onClick:function(t){e.props.onClick&&e.props.onClick(t)}},this.props.children);return this.props.dropdown&&!this.props.disabled?a.a.createElement("span",{className:ve.a.relative,ref:function(t){e.dropdown=t}},t,this.state.active&&a.a.createElement("div",{className:ae()([ve.a.dropdown,"left"===this.props.dropDirection&&ve.a.left,"right"===this.props.dropDirection&&ve.a.right])},this.props.dropdown)):t}}]),n}(a.a.Component);ge.defaultProps={};var Ee=ge,Oe=n(47),we=n.n(Oe),_e=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{style:{color:this.props.color},className:ae()([we.a.icon,we.a[this.props.size],this.props.color&&we.a.colorTrans])},this.props.children)}}]),n}(a.a.Component);_e.defaultProps={size:"medium"};var Se=_e,je=n(63),ye=n.n(je);var ke=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:ye.a.dropdownMenu},this.props.children)}}]),n}(a.a.Component);ke.defaultProps={},ke.LineBreak=function(e){return a.a.createElement("div",{className:ye.a.lineBreak})};var xe=ke,Ce=n(64),Te=n.n(Ce),Re=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a)))._onClickWrapper=function(t){e.props.onClick&&(e.props.confirm&&window.confirm(e.props.confirm)||!e.props.confirm)&&e.props.onClick(t)},e}return Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement("button",{onClick:this._onClickWrapper,className:ae()([Te.a.root,this.props.important&&Te.a.important])},this.props.text)}}]),n}(a.a.Component);Re.defaultProps={};var Ne=Re,Ae=n(104),Be=n.n(Ae),De=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement("a",{className:Be.a.root,href:this.props.href,rel:"noreferrer noopener",target:"_blank"},this.props.text)}}]),n}(a.a.Component);De.defaultProps={};var Ie=De,Le=n(65),Pe=n.n(Le),ze=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).onChange=function(e){if(r.AceEditor){var t=r.AceEditor.editor.selection.getCursor().row;r.props.startLoading(),r.props.updateYaml(e),r.props.updateRow(t),r.setState({shouldRenderD3Object:!0})}},r.onCursorChange=function(){if(r.AceEditor){var e=r.AceEditor.editor.selection.getCursor().row;e!==r.state.row&&(r.props.startLoading(),r.props.updateRow(e),r.setState({shouldRenderD3Object:!0}))}},r.renderD3Object=Object(H.a)(V.a.mark((function e(){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.props.compileD3Object({yaml:r.props.yaml,row:r.props.row});case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:r.setState({shouldRenderD3Object:!1}),r.props.completeLoading();case 9:case"end":return e.stop()}}),e,null,[[0,5]])}))),r.state={defaultD3Object:{name:"".concat("reyaml-web","-v").concat("0.6.5"),attributes:{"":e.t("tree-placeholder")}},shouldRenderD3Object:!1},r}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.setState({containerRect:this.Container.getBoundingClientRect()})}},{key:"componentDidUpdate",value:function(){var e=this;if(this.AceEditor){this.AceEditor.editor.session.setNewLineMode("unix"),this.AceEditor.editor.session.setOptions({tabSize:this.props.settings.editor.tabSize,useSoftTabs:!0});var t=this.AceEditor.editor.selection.getSelectionAnchor(),n={row:this.props.row,column:this.props.resetSelectionRange?0:this.AceEditor.editor.selection.getCursor().column};this.AceEditor.editor.selection.setSelectionRange({start:this.props.resetSelectionRange?n:t,end:n}),this.props.resetSelectionRange&&(this.AceEditor.editor.resize(!0),this.AceEditor.editor.scrollToLine(this.props.row,!0,!1))}this.state.shouldRenderD3Object&&!this.state.updateLock&&setTimeout((function(){e.renderD3Object()}))}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:Pe.a.container,ref:function(t){return e.Container=t}},a.a.createElement(Y.a,{orientation:"vertical"},this.props.panelFlex.d3Tree>0&&a.a.createElement(Y.b,{flex:this.props.panelFlex.d3Tree,onStopResize:function(t){var n=t.component;e.props.updatePanelFlex({d3Tree:n.props.flex})}},a.a.createElement(pe,{containerRect:this.state.containerRect,dataObject:this.props.d3Object||this.state.defaultD3Object})),this.props.panelFlex.textEditor&&this.props.panelFlex.d3Tree&&a.a.createElement(Y.c,{className:Pe.a.seperator}),this.props.panelFlex.textEditor>0&&a.a.createElement(Y.b,{flex:this.props.panelFlex.textEditor,onStopResize:function(t){var n=t.component;e.props.updatePanelFlex({textEditor:n.props.flex})}},a.a.createElement(me,{text:this.props.yaml,aceEditorProps:{onChange:this.onChange,onCursorChange:this.onCursorChange,ref:function(t){e.AceEditor=t}}})),this.props.panelFlex.settings>0&&a.a.createElement(Y.b,{flex:this.props.panelFlex.settings},a.a.createElement(dt,null))))}}]),n}(a.a.Component);ze.defaultProps={settings:D.settings};var Me=Object(p.d)()(Object(d.b)((function(e){return{updateLock:e.appStatus===O,d3Object:e.context.d3Object,yaml:e.context.yaml,row:e.cursor.index,resetSelectionRange:e.cursor.goto,panelFlex:e.workBench,settings:e.settings}}),(function(e,t){return{startLoading:function(){return e(K(O))},completeLoading:function(){return e(K(_))},compileD3Object:function(t){return e(ee(t))},updateYaml:function(t){return e(q(t))},updateRow:function(t){return e($({index:t}))},updatePanelFlex:function(t){return e(Z(t))}}}))(ze)),We=n(49),Ue=n(66),Fe=n.n(Ue),Ve=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};v.a.info(t.noPrefix?e:"> ".concat(e),{position:v.a.POSITION.BOTTOM_RIGHT,className:t.persisted?Fe.a.darkCard:Fe.a.card,autoClose:!t.persisted})},He={container:["svg","g"],styles:{rect:["fill","stroke","stroke-width"],path:["fill","stroke","stroke-width"],circle:["fill","stroke","stroke-width"],line:["stroke","stroke-width"],text:["fill","font-size","text-anchor","font"],polygon:["stroke","fill"]}},Ye=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a)))._exportSvgStyle=function(t,n){t.childNodes.forEach((function(t,r){if(-1!==He.container.indexOf(t.tagName))e._exportSvgStyle(t,n.childNodes[r]);else if(t.tagName in He.styles){var a=window.getComputedStyle(n.childNodes[r]),o="";He.styles[t.tagName].forEach((function(e){o+="".concat(e,":").concat(a.getPropertyValue(e),"; ")})),t.setAttribute("style",o)}}))},e._openYaml=function(t){if(e.fileOpen.files[0]){var n=new FileReader;n.readAsText(e.fileOpen.files[0],"UTF-8"),n.onload=function(){var t=Object(H.a)(V.a.mark((function t(n){return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.updateContext(n.target.result);case 2:Ve('"'.concat(e.fileOpen.files[0].name,'" ').concat(e.props.t("alert-file-loaded")));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),n.onerror=function(t){Ve("".concat(e.props.t("alert-file-error"),' "').concat(e.fileOpen.files[0].name,'"'))}}},e._saveYaml=function(t){e.saveAs.download=window.prompt(e.props.t("alert-saveas-filename"),e.saveAs.download)||"",e.saveAs.download.length>0&&(e.saveAs.click(),Ve("".concat(e.props.t("alert-saveas-done"),' "').concat(e.saveAs.download,'"')))},e._exportSvg=function(t){try{var n=document.getElementsByClassName("rd3t-tree-container rd3t-grabbable")[0].children[0],r=n.cloneNode(!0);e._exportSvgStyle(r,n),e.export.href="data:image/svg+xml,".concat(encodeURIComponent((new XMLSerializer).serializeToString(r))),e.export.download=window.prompt(e.props.t("alert-saveas-filename"),e.export.download)||"",e.export.download.length>0&&(e.export.click(),Ve("".concat(e.props.t("alert-saveas-done"),' "').concat(e.export.download,'"')))}catch(t){Ve(e.props.t("alert-export-err")),console.warn(t)}},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.props.t;return a.a.createElement(xe,null,a.a.createElement(Ee,{button:!0,onClick:Object(H.a)(V.a.mark((function n(){return V.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!window.confirm(t("alert-new-confirm"))){n.next=4;break}return n.next=3,e.props.resetContext();case 3:Ve(t("alert-new-done"));case 4:case"end":return n.stop()}}),n)})))},t("toolbar-file-new")),a.a.createElement(Ee,{button:!0,onClick:function(t){e.fileOpen.click()}},t("toolbar-file-open")),a.a.createElement(xe.LineBreak,null),a.a.createElement(Ee,{button:!0,onClick:function(e){vt.flush(),Ve(t("alert-save-done"))}},t("toolbar-file-save")),a.a.createElement(Ee,{button:!0,onClick:this._saveYaml},t("toolbar-file-saveas")),a.a.createElement(xe.LineBreak,null),a.a.createElement(Ee,{button:!0,onClick:this._exportSvg},t("toolbar-file-export-diagram")),a.a.createElement("section",{hidden:!0},a.a.createElement("input",{type:"file",accept:".yaml,.yml",ref:function(t){return e.fileOpen=t},onChange:this._openYaml}),a.a.createElement("a",{ref:function(t){return e.saveAs=t},href:"data:application/x-yaml;charset=utf-8,".concat(encodeURIComponent(this.props.yaml)),download:"download.yml"},"-"),a.a.createElement("a",{ref:function(t){return e.export=t},href:"about:blank",download:"yaml.svg"},"-")))}}]),n}(a.a.Component);Ye.defaultProps={};var Ge=Object(p.d)()(Object(d.b)((function(e,t){return{yaml:e.context.yaml}}),(function(e,t){return{resetContext:function(){return e((function(e){return new Promise((function(t){e({type:"RESET_CONTEXT"}),e(Q(j)),t()}))}))},updateContext:function(t){return e(function(e){return function(t){return new Promise(function(){var n=Object(H.a)(V.a.mark((function n(r){return V.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t(q(e)),t($(D.cursor)),n.next=4,t(ee({yaml:e,row:0}));case 4:r();case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}}(t))}}}))(Ye)),Xe=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.t;return a.a.createElement(xe,null,a.a.createElement(Ee,{button:!0},e("toolbar-edit-undo")),a.a.createElement(Ee,{button:!0},e("toolbar-edit-redo")),a.a.createElement(xe.LineBreak,null),a.a.createElement(Ee,{button:!0},e("toolbar-edit-cut")),a.a.createElement(Ee,{button:!0},e("toolbar-edit-copy")),a.a.createElement(Ee,{button:!0},e("toolbar-edit-paste")),a.a.createElement(xe.LineBreak,null),a.a.createElement(Ee,{button:!0},e("toolbar-edit-find")),a.a.createElement(Ee,{button:!0},e("toolbar-edit-replace")))}}]),n}(a.a.Component);Xe.defaultProps={};var Je=Object(p.d)()(Xe),Ke=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.t;return a.a.createElement(xe,null,a.a.createElement(Ee,{button:!0,onClick:function(){window.open(e("url-issues"))}},e("toolbar-help-report")),a.a.createElement(Ee,{button:!0,onClick:function(){window.open(e("url-github"))}},e("toolbar-help-github")),a.a.createElement(Ee,{button:!0,onClick:function(){window.open(e("url-rc-github"))}},e("toolbar-help-rc-github")),a.a.createElement(xe.LineBreak,null),a.a.createElement(Ee,{disabled:!0},"Version: ".concat("0.6.5")),a.a.createElement(Ee,{disabled:!0},"Author: ".concat("Cedric Poon <cedric@poons.me>")))}}]),n}(a.a.Component);Ke.defaultProps={};var Qe=Object(p.d)()(Ke),qe=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.t;return a.a.createElement(xe,null,a.a.createElement(Ee,{button:!0,onClick:this.props.resetWorkbench},e("toolbar-view-reset")),a.a.createElement(xe.LineBreak,null),a.a.createElement(Ee,{button:!0,onClick:this.props.hideEditor},e("toolbar-view-hide-yaml")),a.a.createElement(Ee,{button:!0,onClick:this.props.hideD3Tree},e("toolbar-view-hide-d3")))}}]),n}(a.a.Component);qe.defaultProps={};var $e=Object(p.d)()(Object(d.b)(null,(function(e,t){return{hideEditor:function(){return e((function(e){e(Z({d3Tree:1,textEditor:0}))}))},hideD3Tree:function(){return e((function(e){e(Z({d3Tree:0,textEditor:1}))}))},resetWorkbench:function(){return e({type:"RESET_WORKBENCH"})}}}))(qe)),Ze=n(48),et=n.n(Ze),tt=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).state={workBenchSnapshot:null},r}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.t;return a.a.createElement("nav",{className:et.a.toolbar},a.a.createElement("section",{className:et.a.left},a.a.createElement(Ee,{strong:!0},"reyaml-web"),a.a.createElement(Ee,{dropdown:a.a.createElement(Ge,null)},e("toolbar-file")),a.a.createElement(Ee,{dropdown:a.a.createElement(Je,null)},e("toolbar-edit")),a.a.createElement(Ee,{dropdown:a.a.createElement($e,null)},e("toolbar-view")),a.a.createElement(Ee,{dropdown:a.a.createElement(Qe,null)},e("toolbar-help"))),a.a.createElement("section",{className:et.a.right},a.a.createElement(Ee,{tooltip:this.props.lint?e("toolbar-lint-success"):e("toolbar-lint-failure")},a.a.createElement(Se,{color:this.props.lint?"darkgreen":"crimson"},this.props.lint?a.a.createElement(We.a,null):a.a.createElement(We.b,null))),a.a.createElement(Ee,{radio:!0,tooltip:e("toolbar-settings"),active:this.props.activeSettings,onClick:this.props.activeSettings?this.props.hideSettings:this.props.showSettings},a.a.createElement(Se,null,a.a.createElement(We.c,null)))))}}]),n}(a.a.Component);tt.defaultProps={lint:!0};var nt=Object(p.d)(null,{withRef:!0})(Object(d.b)((function(e,t){return{lint:e.lint===j,activeSettings:e.workBench.settings>0}}),(function(e,t){return{showSettings:function(){return e((function(e){e(Z({settings:1}))}))},hideSettings:function(){return e((function(e){e(Z({settings:0}))}))}}}))(tt)),rt=n(105),at=n.n(rt),ot=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.shouldShowBanner&&(Ve(this.props.t("alert-banner"),{persisted:!0,noPrefix:!0}),this.props.didShownBanner()),this.props.savedVersion<"0.6.5"&&(Ve("".concat(this.props.t("alert-updated")," v").concat(this.props.savedVersion," \u2192 v").concat("0.6.5","!"),{persisted:!0,noPrefix:!0}),this.props.updateVersion("0.6.5"))}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:at.a.appFrame},a.a.createElement(nt,null),a.a.createElement(Me,null),a.a.createElement(se,{enabled:this.props.appStatus===O||this.props.appStatus===w,updated:function(){e.props.appStatus===O&&e.props.spinnerDidUpdate()}}))}}]),n}(a.a.Component),it=Object(p.d)()(Object(d.b)((function(e){return{appStatus:e.appStatus,shouldShowBanner:e.banner,savedVersion:e.version}}),(function(e){return{spinnerDidUpdate:function(){return e(K(w))},didShownBanner:function(){return e({type:"COMPLETE_BANNER"})},updateVersion:function(t){return e(function(e){return{type:"SET_VERSION",version:e}}(t))}}}))(ot)),ct=n(106),st=n.n(ct),lt=function(){var e=Object(p.c)().t;return a.a.createElement(Ie,{text:e("settings-rc"),href:e("url-rc-github")})},ut=function(){var e=Object(p.c)().t;return a.a.createElement(Ie,{text:e("settings-ace"),href:e("url-ace-github")})},pt=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:st.a.root},a.a.createElement("h1",null,this.props.t("settings-diagram-settings")),a.a.createElement("section",null,a.a.createElement("h2",null,"renderHeight"),a.a.createElement("article",null,"Determine vertical rendering distance from selected line in ",a.a.createElement(lt,null),". It will be presented as parameter ",a.a.createElement("code",null,"level")," in ",a.a.createElement("code",null,"Rjson.truncate()"),". Set 0 to disable."),a.a.createElement("input",{type:"number",value:this.props.renderHeight,onChange:function(t){e.props.updateDiagramSettings({renderHeight:parseInt(t.target.value)})}})),a.a.createElement("section",null,a.a.createElement("h2",null,"renderWidth"),a.a.createElement("article",null,"Determine horizontal rendering size from selected line in ",a.a.createElement(lt,null),". It will be presented as parameter ",a.a.createElement("code",null,"siblingSize")," in ",a.a.createElement("code",null,"Rjson.truncate()"),". Set 0 to disable."),a.a.createElement("input",{type:"number",value:this.props.renderWidth,onChange:function(t){e.props.updateDiagramSettings({renderWidth:parseInt(t.target.value)})}})),a.a.createElement("section",null,a.a.createElement("h2",null,"maxStringSize"),a.a.createElement("article",null,"Maximum length of key and content in YAML keypair. Referred as ",a.a.createElement("code",null,"config.size.maxStringSize")," in ",a.a.createElement(lt,null),". Numerically exclusive."),a.a.createElement("input",{type:"number",value:this.props.maxStringSize,onChange:function(t){e.props.updateDiagramSettings({maxStringSize:parseInt(t.target.value)})}})),a.a.createElement("h1",null,this.props.t("settings-editor-settings")),a.a.createElement("section",null,a.a.createElement("h2",null,"tabSize"),a.a.createElement("article",null,"Size for each tab inserted as spaces. Applied to both ",a.a.createElement(lt,null)," and ",a.a.createElement(ut,null),"."),a.a.createElement("input",{type:"number",value:this.props.tabSize,onChange:function(t){e.props.updateEditorSettings({tabSize:parseInt(t.target.value)})}})),a.a.createElement("h1",null,this.props.t("settings-global-settings")),a.a.createElement("section",null,a.a.createElement("h2",null,this.props.t("settings-erase-ls")),a.a.createElement("article",null,this.props.t("settings-erase-ls-article")),a.a.createElement(Ne,{important:!0,confirm:this.props.t("settings-erase-ls-confirm"),text:this.props.t("settings-erase-ls-btn"),onClick:Object(H.a)(V.a.mark((function e(){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,vt.purge();case 2:window.open("/".concat("reyaml-web"),"_self");case 3:case"end":return e.stop()}}),e)})))})))}}]),n}(a.a.Component),dt=Object(p.d)()(Object(d.b)((function(e){return{renderHeight:e.settings.diagram.renderHeight,renderWidth:e.settings.diagram.renderWidth,maxStringSize:e.settings.diagram.maxStringSize,tabSize:e.settings.editor.tabSize}}),(function(e){return{updateDiagramSettings:function(t){return e(function(e){return{type:"SET_DIAGRAM_SETTINGS",diagram:e}}(t))},updateEditorSettings:function(t){return e(function(e){return{type:"SET_EDITOR_SETTINGS",editor:e}}(t))}}}))(pt)),ht=h.d,ft=Object(h.e)(P,ht(Object(h.a)(f.a))),mt=Object(m.b)(ft);v.a.configure();var bt=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).state={},r}return Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement(a.a.Suspense,{fallback:a.a.createElement(se,null)},a.a.createElement(d.a,{store:ft},a.a.createElement(b.a,{persistor:mt},a.a.createElement(p.a,{i18n:U},a.a.createElement(it,null)))))}}]),n}(a.a.Component),vt=mt,gt=bt,Et=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ot(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(233);i.a.render(a.a.createElement(gt,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/reyaml-web",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/reyaml-web","/service-worker.js");Et?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Ot(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Ot(t,e)}))}}()},24:function(e,t,n){e.exports={menuItem:"MenuItem_menuItem__2lNL3",button:"MenuItem_button__2Mm5B",strong:"MenuItem_strong__zWajT",disabled:"MenuItem_disabled__1YauT",active:"MenuItem_active__1FB6q",relative:"MenuItem_relative__22Fyb",dropdown:"MenuItem_dropdown__25Ux8",left:"MenuItem_left__2sOVe",right:"MenuItem_right__1SCUQ"}},47:function(e,t,n){e.exports={colorTrans:"Icon_colorTrans__1w3A-",icon:"Icon_icon__2mc5K",medium:"Icon_medium__2NfBW"}},48:function(e,t,n){e.exports={toolbar:"Toolbar_toolbar__1fAPx",left:"Toolbar_left__syRz3",right:"Toolbar_right__2jy0L"}},62:function(e,t,n){e.exports={spinner:"Spinner_spinner__2FBIW",hidden:"Spinner_hidden__kjMBL"}},63:function(e,t,n){e.exports={dropdownMenu:"DropdownMenu_dropdownMenu__136GQ",lineBreak:"DropdownMenu_lineBreak__MYacq"}},64:function(e,t,n){e.exports={root:"Button_root__VQdml font_base__2USid",important:"Button_important__52As-"}},65:function(e,t,n){e.exports={container:"Workbench_container__3Q8as",seperator:"Workbench_seperator__2l0eQ"}},66:function(e,t,n){e.exports={card:"toast_card__1VR9f font_base__2USid",darkCard:"toast_darkCard__4v85f toast_card__1VR9f font_base__2USid"}}},[[107,1,2]]]);