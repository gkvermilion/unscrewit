System.register("chunks:///_virtual/BarPrefab.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ScrewPrefab.ts","./CellPanel.ts","./ScrewsArray.ts","./GameManager.ts"],(function(e){var t,i,n,r,s,o,c,a,h,l,w,d,u,_,g,b,y,f,p;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,n=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){s=e.cclegacy,o=e._decorator,c=e.Prefab,a=e.RigidBody2D,h=e.SpringJoint2D,l=e.Sprite,w=e.instantiate,d=e.director,u=e.Color,_=e.Vec2,g=e.Component},function(e){b=e.ScrewRotation},function(e){y=e.CellPanel},function(e){f=e.ScrewsArray},function(e){p=e.default}],execute:function(){var S,C,B,m,J,P,R,A,v,x,I,z,D;s._RF.push({},"afb6f/eDAtNEbZCP9SHIVJh","BarPrefab",void 0);var L=o.ccclass,N=o.property;e("BarPrefab",(S=L("BarPrefab"),C=N(),B=N(c),m=N(a),J=N(h),P=N(h),S((v=t((A=function(e){function t(){for(var t,i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return t=e.call.apply(e,[this].concat(s))||this,n(t,"unscrewThreshold",v,r(t)),n(t,"screwPrefab",x,r(t)),n(t,"rigidBody",I,r(t)),n(t,"screw1Joint",z,r(t)),n(t,"screw2Joint",D,r(t)),t._screwsArray=null,t._currentScrews=null,t._cellPanel=null,t._barColor=null,t._screw1=null,t._screw2=null,t._screw1Rotation=null,t._screw2Rotation=null,t._screw1Angle=0,t._screw2Angle=0,t}i(t,e);var s=t.prototype;return s.start=function(){this._barColor=this.node.getComponent(l).color,this.rigidBody=this.node.getComponent(a),this.rigidBody&&(this.rigidBody.enabledContactListener=!1),this._instantiateFirstScrew(),this._instantiateSecondScrew();var e=this.node.getComponents(h);this.screw1Joint=e[0],this.screw2Joint=e[1],this._configureJoints()},s._instantiateFirstScrew=function(){this._screw1=w(this.screwPrefab),p.currentIndex=d.getScene().getSiblingIndex()+2,this._screw1.setSiblingIndex(p.currentIndex),this.node.addChild(this._screw1),this._screwsArray=d.getScene().getChildByName("Canvas").getChildByName("ScrewsArray").getComponent(f),this._cellPanel=d.getScene().getChildByName("Canvas").getChildByName("Panel").getComponent(y),this._screw1Rotation=this._screw1.getComponent(b),this._screw1.getComponent(l).color=new u(this._barColor),this._screw1Rotation&&this._screw1Rotation.setRotationUpdatedCallback(this.onScrew1Rotated.bind(this),this.beforeRotation.bind(this))},s._instantiateSecondScrew=function(){this._screw2=w(this.screwPrefab),p.currentIndex=d.getScene().getSiblingIndex()+2,this._screw2.setSiblingIndex(p.currentIndex),this.node.addChild(this._screw2),this._screw2Rotation=this._screw2.getComponent(b),this._screw2.getComponent(l).color=new u(this._barColor),this._screw2Rotation&&this._screw2Rotation.setRotationUpdatedCallback(this.onScrew2Rotated.bind(this),this.beforeRotation.bind(this))},s._configureJoints=function(){this.screw1Joint.connectedBody=this._screw1.getComponent(a),this._screw1.setPosition(this.screw1Joint.connectedAnchor.x,this.screw1Joint.connectedAnchor.y,0),this.screw1Joint.anchor=new _(this._screw1.position.x,this._screw1.position.y),this.screw1Joint.enabled=!1,this.screw1Joint.enabled=!0,this.screw2Joint.connectedBody=this._screw2.getComponent(a),this._screw2.setPosition(this.screw2Joint.connectedAnchor.x,this.screw2Joint.connectedAnchor.y,0),this.screw2Joint.anchor=new _(this._screw2.position.x,this._screw2.position.y),this.screw2Joint.enabled=!1,this.screw2Joint.enabled=!0},s.onScrew1Rotated=function(e){this._screw1Angle=e,Math.abs(this._screw1Angle)>=this.unscrewThreshold&&(this._moveScrew(this._screw1),this.screw1Joint.enabled=!1,this.screw1Joint.destroy(),this._screw1.destroy(),this._unscrewBar())},s.onScrew2Rotated=function(e){this._screw2Angle=e,Math.abs(this._screw2Angle)>=this.unscrewThreshold&&(this._moveScrew(this._screw2),this.screw2Joint.enabled=!1,this.screw2Joint.destroy(),this._screw2.destroy(),this._unscrewBar())},s._moveScrew=function(e){this._currentScrews=this._screwsArray.getActive(),u.equals(this._currentScrews.getColor(),this._barColor)?this._currentScrews.addScrew():this._cellPanel.pushCell(e)},s.beforeRotation=function(){this.rigidBody.enabledContactListener=!1,this.rigidBody.type=0,this.rigidBody.gravityScale=0},s._unscrewBar=function(){this.rigidBody&&(this.rigidBody.enabledContactListener=!0,this.rigidBody.gravityScale=1,this.rigidBody.type=2)},t}(g)).prototype,"unscrewThreshold",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 360}}),x=t(A.prototype,"screwPrefab",[B],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=t(A.prototype,"rigidBody",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),z=t(A.prototype,"screw1Joint",[J],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),D=t(A.prototype,"screw2Joint",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),R=A))||R));s._RF.pop()}}}));

System.register("chunks:///_virtual/CellPanel.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameManager.ts"],(function(e){var n,t,r,i,l,o,c,a,s,u,f,h,d,p,C,g,m;return{setters:[function(e){n=e.applyDecoratedDescriptor,t=e.inheritsLoose,r=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){l=e.cclegacy,o=e._decorator,c=e.Prefab,a=e.Sprite,s=e.instantiate,u=e.director,f=e.Color,h=e.UITransform,d=e.math,p=e.Vec3,C=e.Component},function(e){g=e.GameManager,m=e.default}],execute:function(){var y,v,P,_,w;l._RF.push({},"e15798iYsZKzpqcYvzGg56t","CellPanel",void 0);var S=o.ccclass,b=o.property;e("CellPanel",(y=S("CellPanel"),v=b(c),y((w=n((_=function(e){function n(){for(var n,t=arguments.length,l=new Array(t),o=0;o<t;o++)l[o]=arguments[o];return n=e.call.apply(e,[this].concat(l))||this,r(n,"screwPrefab",w,i(n)),n._cells=0,n.isFull=!1,n}t(n,e);var l=n.prototype;return l.update=function(e){5===this._cells&&g.loadRetryScene()},l.increaseCounter=function(){this._cells=this._cells+1},l.decreaseCounter=function(){this._cells=this._cells-1},l.pushCell=function(e){var n=this,t=e.getComponent(a).color,r=!1;this.node.children.forEach((function(e){if(null===e.getChildByName("ScrewPrefab")&&!r)return n._instantiateScrew(e,t),void(r=!0)}))},l._instantiateScrew=function(e,n){var t=s(this.screwPrefab);m.currentIndex=u.getScene().getSiblingIndex()+2,t.setSiblingIndex(m.currentIndex),e.addChild(t),t.getComponent(a).color=new f(n),t.getComponent(h).contentSize=new d.Size(16,16),t.setPosition(new p(0,0,0)),this.increaseCounter()},l.checkIfCellsCanBePulled=function(e){var n=this,t=e.getColor(),r=this._getAllChildrenByName();r.length>0&&r.forEach((function(r,i){f.equals(r.getComponent(a).color,t)&&i<2&&(n.decreaseCounter(),r.destroy(),e.addScrew())}))},l._getAllChildrenByName=function(){var e=[];return this.node.children.forEach((function(n){var t=n.getChildByName("ScrewPrefab");null===t||e.push(t)})),e},n}(C)).prototype,"screwPrefab",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),P=_))||P));l._RF.pop()}}}));

System.register("chunks:///_virtual/CurrentScrews.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ScrewsArray.ts"],(function(e){var t,r,i,n,o,s,c,a,l,u,h,d,w,f;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,i=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){o=e.cclegacy,s=e._decorator,c=e.Prefab,a=e.Sprite,l=e.instantiate,u=e.Color,h=e.UITransform,d=e.math,w=e.Component},function(e){f=e.ScrewsArray}],execute:function(){var _,p,y,g,v;o._RF.push({},"a092cFH0E5MUa2eXa5uTlny","CurrentScrews",void 0);var S=s.ccclass,C=s.property;e("CurrentScrews",(_=S("CurrentScrews"),p=C(c),_((v=t((g=function(e){function t(){for(var t,r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return t=e.call.apply(e,[this].concat(o))||this,i(t,"screwPrefab",v,n(t)),t._isActive=!1,t._color=null,t._screw=null,t._addedBefore=!1,t._screwsArray=null,t}r(t,e);var o=t.prototype;return o.start=function(){this._color=this.node.getComponent(a).color},o.update=function(e){this._isActive},o.getColor=function(){return this._color},o.getActive=function(){return this._isActive},o.setActive=function(e){this._isActive=e},o.destroyNode=function(){this.node.destroy()},o.addScrew=function(){if(this._screw=l(this.screwPrefab),this.node.addChild(this._screw),this._screw.getComponent(a).color=new u(this._color),this._addedBefore){var e=this.node.getChildByName("SecondScrew");this._screw.setPosition(e.getPosition()),this._screw.getComponent(h).contentSize=new d.Size(4,4),this._screwsArray=this.node.getParent().getComponent(f),this._screwsArray.activateNext()}else{var t=this.node.getChildByName("FirstScrew");this._screw.setPosition(t.getPosition()),this._addedBefore=!0,this._screw.getComponent(h).contentSize=new d.Size(4,4)}},t}(w)).prototype,"screwPrefab",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=g))||y));o._RF.pop()}}}));

System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Color,g=t.Canvas,h=t.UITransform,p=t.instantiate,c=t.Label,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[a.WHITE,a.BLACK,a.RED,a.GREEN,a.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(g)){var t=this.node.parent.getComponent(h),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=p(s);l.parent=this.node,l.name="Buttons";var r=p(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=p(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(c);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=a.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?p(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(c);this.labelComponentList[this.labelComponentList.length]=S;var x=p(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(c)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=p(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(c)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=p(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?p(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/GameManager.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ScrewsArray.ts"],(function(e){var n,r,t,o,a,i,c,s,l,u,p,w,f,y;return{setters:[function(e){n=e.applyDecoratedDescriptor,r=e.inheritsLoose,t=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){a=e.cclegacy,i=e._decorator,c=e.Color,s=e.Vec2,l=e.Prefab,u=e.director,p=e.instantiate,w=e.Sprite,f=e.Component},function(e){y=e.ScrewsArray}],execute:function(){var _,g,d,h,v;a._RF.push({},"675b63MXolKKLbe9VEt8yaU","GameManager",void 0);var b=i.ccclass,S=i.property,m=e("default",(function(){}));m.currentIndex=2;var A=[{color:new c(1,0,0),position:new s(200,700)},{color:new c(134,11,97),position:new s(-500,950)},{color:new c(17,20,100),position:new s(750,300)},{color:new c(17,20,100),position:new s(-375,-150)},{color:new c(134,11,97),position:new s(440,440)},{color:new c(1,0,0),position:new s(100,100)},{color:new c(134,11,97),position:new s(-1e3,450)},{color:new c(44,44,44),position:new s(-70,300)},{color:new c(134,11,97),position:new s(-900,50)},{color:new c(44,44,44),position:new s(-1500,-300)}];e("GameManager",(_=b("GameManager"),g=S(l),_((v=n((h=function(e){function n(){for(var n,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=e.call.apply(e,[this].concat(a))||this,t(n,"barPrefab",v,o(n)),n.__canvas=null,n.__screwsArray=null,n}r(n,e);var a=n.prototype;return a.start=function(){this.__canvas=u.getScene().getChildByName("Canvas"),this._generateBars();var e=this.__canvas.getChildByName("ScrewsArray");this.__screwsArray=e.getComponent(y),this.__screwsArray.createScrewsArray(A)},a._generateBars=function(){var e=this;A.forEach((function(n,r){return e._createInstances(n,r)}))},a._createInstances=function(e,n){var r=e.color,t=e.position,o=p(this.barPrefab);o.setParent(this.__canvas),m.currentIndex=u.getScene().getSiblingIndex()+2,o.setSiblingIndex(m.currentIndex),o.getComponent(w).color=new c(r),o.setPosition(t.x,t.y)},n.endGame=function(){u.loadScene("RetryScreen")},n.loadRetryScene=function(){u.loadScene("RetryScreen")},n}(f)).prototype,"barPrefab",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),d=h))||d));a._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./debug-view-runtime-control.ts","./BarPrefab.ts","./CellPanel.ts","./CurrentScrews.ts","./GameManager.ts","./Retry.ts","./ScrewPrefab.ts","./ScrewsArray.ts"],(function(){return{setters:[null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/Retry.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,r,n,o,c;return{setters:[function(e){t=e.inheritsLoose},function(e){r=e.cclegacy,n=e._decorator,o=e.director,c=e.Component}],execute:function(){var i;r._RF.push({},"a447015H6FLu5F79ykZVAHi","Retry",void 0);var u=n.ccclass;e("Retry",u("Retry")(i=function(e){function r(){return e.apply(this,arguments)||this}return t(r,e),r.prototype.retryGame=function(){o.loadScene("MainScene")},r}(c))||i);r._RF.pop()}}}));

System.register("chunks:///_virtual/ScrewPrefab.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var o,n,i,e,r,a,s,c;return{setters:[function(t){o=t.applyDecoratedDescriptor,n=t.inheritsLoose,i=t.initializerDefineProperty,e=t.assertThisInitialized},function(t){r=t.cclegacy,a=t._decorator,s=t.Node,c=t.Component}],execute:function(){var p,u,h,d,l;r._RF.push({},"6db39BCGu5E14EnqHoV4h8p","ScrewPrefab",void 0);var f=a.ccclass,R=a.property;t("ScrewRotation",(p=f("ScrewPrefab"),u=R(),p((l=o((d=function(t){function o(){for(var o,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return o=t.call.apply(t,[this].concat(r))||this,i(o,"rotationSpeed",l,e(o)),o.isRotating=!1,o.rotationDirection=1,o.onRotationUpdated=null,o.beforeRotation=null,o}n(o,t);var r=o.prototype;return r.onLoad=function(){this.node.on(s.EventType.MOUSE_DOWN,this.onMouseDown,this),this.node.on(s.EventType.MOUSE_UP,this.onMouseUp,this)},r.onMouseDown=function(t){this.isRotating=!0,this.beforeRotation&&this.beforeRotation(),this.rotationDirection=t.getLocation().x>this.node.getWorldPosition().x?1:-1},r.onMouseUp=function(){this.isRotating=!1,this.onRotationUpdated&&this.onRotationUpdated(this.node.angle)},r.update=function(t){if(this.isRotating){var o=this.rotationDirection*this.rotationSpeed*t;this.node.angle+=o}},r.setRotationUpdatedCallback=function(t,o){this.onRotationUpdated=t,this.beforeRotation=o},o}(c)).prototype,"rotationSpeed",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 270}}),h=d))||h));r._RF.pop()}}}));

System.register("chunks:///_virtual/ScrewsArray.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GameManager.ts","./CurrentScrews.ts","./CellPanel.ts"],(function(e){var t,n,r,i,o,c,a,s,l,u,f,d,g,p,h,v,C;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,r=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){o=e.cclegacy,c=e._decorator,a=e.Prefab,s=e.director,l=e.instantiate,u=e.Sprite,f=e.Color,d=e.Vec3,g=e.Component},function(e){p=e.default,h=e.GameManager},function(e){v=e.CurrentScrews},function(e){C=e.CellPanel}],execute:function(){var P,y,w,m,S;o._RF.push({},"64ff8GlP9BLDIIp0zYKTedr","ScrewsArray",void 0);var A=c.ccclass,I=c.property;e("ScrewsArray",(P=A("ScrewsArray"),y=I(a),P((S=t((m=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return t=e.call.apply(e,[this].concat(o))||this,r(t,"screwsQueuePrefab",S,i(t)),t._cellPanel=null,t}n(t,e);var o=t.prototype;return o.start=function(){this._cellPanel=s.getScene().getChildByName("Canvas").getChildByName("Panel").getComponent(C)},o.createScrewsArray=function(e){var t=this;e.forEach((function(e,n){var r=e.color,i=l(t.screwsQueuePrefab);p.currentIndex=s.getScene().getSiblingIndex()+2,i.setSiblingIndex(p.currentIndex),i.setParent(t.node),i.getComponent(u).color=new f(r),i.setPosition(0-1e3*n,2300);var o=i.getComponent(v);0===n&&o.setActive(!0)}))},o.getActive=function(){return this.node.getComponentsInChildren(v).find((function(e){return!0===e.getActive()}))},o.activateNext=function(){var e=this.node.getComponentsInChildren(v),t=e.findIndex((function(e){return!0===e.getActive()}));if(console.log(e.length,t),t!==e.length-1){e[t].setActive(!1),e[t+=1].setActive(!0);var n=this.node.getPosition();this.node.setPosition(new d(n.x+1e3,n.y,n.z)),this._cellPanel.checkIfCellsCanBePulled(e[t])}else h.endGame()},t}(g)).prototype,"screwsQueuePrefab",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=m))||w));o._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});