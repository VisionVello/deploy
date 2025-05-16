"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[664],{41004:(e,t,r)=>{r.d(t,{AH:()=>er,Mj:()=>B,SP:()=>eU,To:()=>eR,Vu:()=>ek,Xe:()=>eG,bv:()=>Z,d4:()=>em,hH:()=>ep,h_:()=>M,i:()=>ec,oF:()=>a,s0:()=>p});var i=r(43264),s=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(e){"undefined"!=typeof document&&void 0!==document.hidden&&(e?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=e)}get delta(){return .001*this._delta}get fixedDelta(){return .001*this._fixedDelta}set fixedDelta(e){this._fixedDelta=1e3*e}get elapsed(){return .001*this._elapsed}update(e){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(void 0!==e?e:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(e){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},n=(()=>{let e=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),t=new Float32Array([0,0,2,0,0,2]),r=new i.LoY;return r.setAttribute("position",new i.THS(e,3)),r.setAttribute("uv",new i.THS(t,2)),r})(),a=class e{static get fullscreenGeometry(){return n}constructor(e="Pass",t=new i.Z58,r=new i.i7d){this.name=e,this.renderer=null,this.scene=t,this.camera=r,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){let t=this.fullscreenMaterial;null!==t&&(t.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return null!==this.screen?this.screen.material:null}set fullscreenMaterial(t){let r=this.screen;null!==r?r.material=t:((r=new i.eaF(e.fullscreenGeometry,t)).frustumCulled=!1,null===this.scene&&(this.scene=new i.Z58),this.scene.add(r),this.screen=r)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,t=i.Rkk){}render(e,t,r,i,s){throw Error("Render method not implemented!")}setSize(e,t){}initialize(e,t,r){}dispose(){for(let t of Object.keys(this)){let r=this[t];(r instanceof i.nWS||r instanceof i.imn||r instanceof i.gPd||r instanceof e)&&this[t].dispose()}null!==this.fullscreenMaterial&&this.fullscreenMaterial.dispose()}},o=class extends a{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(e,t,r,i,s){let n=e.state.buffers.stencil;n.setLocked(!1),n.setTest(!1)}},l=`#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform float opacity;varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);gl_FragColor=opacity*texel;
#include <colorspace_fragment>
#include <dithering_fragment>
}`,u="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",c=class extends i.BKk{constructor(){super({name:"CopyMaterial",uniforms:{inputBuffer:new i.nc$(null),opacity:new i.nc$(1)},blending:i.XIg,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:l,vertexShader:u})}set inputBuffer(e){this.uniforms.inputBuffer.value=e}setInputBuffer(e){this.uniforms.inputBuffer.value=e}getOpacity(e){return this.uniforms.opacity.value}setOpacity(e){this.uniforms.opacity.value=e}},v=class extends a{constructor(e,t=!0){super("CopyPass"),this.fullscreenMaterial=new c,this.needsSwap=!1,this.renderTarget=e,void 0===e&&(this.renderTarget=new i.nWS(1,1,{minFilter:i.k6q,magFilter:i.k6q,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=t}get resize(){return this.autoResize}set resize(e){this.autoResize=e}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(e){this.autoResize=e}render(e,t,r,i,s){this.fullscreenMaterial.inputBuffer=t.texture,e.setRenderTarget(this.renderToScreen?null:this.renderTarget),e.render(this.scene,this.camera)}setSize(e,t){this.autoResize&&this.renderTarget.setSize(e,t)}initialize(e,t,r){void 0!==r&&(this.renderTarget.texture.type=r,r!==i.OUM?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":null!==e&&e.outputColorSpace===i.er$&&(this.renderTarget.texture.colorSpace=i.er$))}},f=new i.Q1f,h=class extends a{constructor(e=!0,t=!0,r=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=e,this.depth=t,this.stencil=r,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(e,t,r){this.color=e,this.depth=t,this.stencil=r}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(e){this.overrideClearColor=e}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(e){this.overrideClearAlpha=e}render(e,t,r,i,s){let n=this.overrideClearColor,a=this.overrideClearAlpha,o=e.getClearAlpha(),l=null!==n,u=a>=0;l?(e.getClearColor(f),e.setClearColor(n,u?a:o)):u&&e.setClearAlpha(a),e.setRenderTarget(this.renderToScreen?null:t),e.clear(this.color,this.depth,this.stencil),l?e.setClearColor(f,o):u&&e.setClearAlpha(o)}},d=class extends a{constructor(e,t){super("MaskPass",e,t),this.needsSwap=!1,this.clearPass=new h(!1,!1,!0),this.inverse=!1}set mainScene(e){this.scene=e}set mainCamera(e){this.camera=e}get inverted(){return this.inverse}set inverted(e){this.inverse=e}get clear(){return this.clearPass.enabled}set clear(e){this.clearPass.enabled=e}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(e){this.inverted=e}render(e,t,r,i,s){let n=e.getContext(),a=e.state.buffers,o=this.scene,l=this.camera,u=this.clearPass,c=+!this.inverted;a.color.setMask(!1),a.depth.setMask(!1),a.color.setLocked(!0),a.depth.setLocked(!0),a.stencil.setTest(!0),a.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),a.stencil.setFunc(n.ALWAYS,c,0xffffffff),a.stencil.setClear(1-c),a.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?u.render(e,null):(u.render(e,t),u.render(e,r))),this.renderToScreen?e.setRenderTarget(null):(e.setRenderTarget(t),e.render(o,l),e.setRenderTarget(r)),e.render(o,l),a.color.setLocked(!1),a.depth.setLocked(!1),a.stencil.setLocked(!1),a.stencil.setFunc(n.EQUAL,1,0xffffffff),a.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),a.stencil.setLocked(!0)}},p=class{constructor(e=null,{depthBuffer:t=!0,stencilBuffer:r=!1,multisampling:i=0,frameBufferType:n}={}){this.renderer=null,this.inputBuffer=this.createBuffer(t,r,n,i),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new v,this.depthTexture=null,this.passes=[],this.timer=new s,this.autoRenderToScreen=!0,this.setRenderer(e)}get multisampling(){return this.inputBuffer.samples||0}set multisampling(e){let t=this.inputBuffer,r=this.multisampling;r>0&&e>0?(this.inputBuffer.samples=e,this.outputBuffer.samples=e,this.inputBuffer.dispose(),this.outputBuffer.dispose()):r!==e&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(t.depthBuffer,t.stencilBuffer,t.texture.type,e),this.inputBuffer.depthTexture=this.depthTexture,this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(e){if(this.renderer=e,null!==e){let t=e.getSize(new i.I9Y),r=e.getContext().getContextAttributes().alpha,s=this.inputBuffer.texture.type;for(let n of(s===i.OUM&&e.outputColorSpace===i.er$&&(this.inputBuffer.texture.colorSpace=i.er$,this.outputBuffer.texture.colorSpace=i.er$,this.inputBuffer.dispose(),this.outputBuffer.dispose()),e.autoClear=!1,this.setSize(t.width,t.height),this.passes))n.initialize(e,r,s)}}replaceRenderer(e,t=!0){let r=this.renderer,i=r.domElement.parentNode;return this.setRenderer(e),t&&null!==i&&(i.removeChild(r.domElement),i.appendChild(e.domElement)),r}createDepthTexture(){let e=this.depthTexture=new i.VCu;return this.inputBuffer.depthTexture=e,this.inputBuffer.dispose(),this.inputBuffer.stencilBuffer?(e.format=i.dcC,e.type=i.V3x):e.type=i.bkx,e}deleteDepthTexture(){if(null!==this.depthTexture)for(let e of(this.depthTexture.dispose(),this.depthTexture=null,this.inputBuffer.depthTexture=null,this.inputBuffer.dispose(),this.passes))e.setDepthTexture(null)}createBuffer(e,t,r,s){let n=this.renderer,a=null===n?new i.I9Y:n.getDrawingBufferSize(new i.I9Y),o={minFilter:i.k6q,magFilter:i.k6q,stencilBuffer:t,depthBuffer:e,type:r},l=new i.nWS(a.width,a.height,o);return s>0&&(l.ignoreDepthForMultisampleCopy=!1,l.samples=s),r===i.OUM&&null!==n&&n.outputColorSpace===i.er$&&(l.texture.colorSpace=i.er$),l.texture.name="EffectComposer.Buffer",l.texture.generateMipmaps=!1,l}setMainScene(e){for(let t of this.passes)t.mainScene=e}setMainCamera(e){for(let t of this.passes)t.mainCamera=e}addPass(e,t){let r=this.passes,s=this.renderer,n=s.getDrawingBufferSize(new i.I9Y),a=s.getContext().getContextAttributes().alpha,o=this.inputBuffer.texture.type;if(e.setRenderer(s),e.setSize(n.width,n.height),e.initialize(s,a,o),this.autoRenderToScreen&&(r.length>0&&(r[r.length-1].renderToScreen=!1),e.renderToScreen&&(this.autoRenderToScreen=!1)),void 0!==t?r.splice(t,0,e):r.push(e),this.autoRenderToScreen&&(r[r.length-1].renderToScreen=!0),e.needsDepthTexture||null!==this.depthTexture)if(null===this.depthTexture){let t=this.createDepthTexture();for(e of r)e.setDepthTexture(t)}else e.setDepthTexture(this.depthTexture)}removePass(e){let t=this.passes,r=t.indexOf(e);-1!==r&&t.splice(r,1).length>0&&(null!==this.depthTexture&&(t.reduce((e,t)=>e||t.needsDepthTexture,!1)||(e.getDepthTexture()===this.depthTexture&&e.setDepthTexture(null),this.deleteDepthTexture())),this.autoRenderToScreen&&r===t.length&&(e.renderToScreen=!1,t.length>0&&(t[t.length-1].renderToScreen=!0)))}removeAllPasses(){let e=this.passes;this.deleteDepthTexture(),e.length>0&&(this.autoRenderToScreen&&(e[e.length-1].renderToScreen=!1),this.passes=[])}render(e){let t,r,i,s=this.renderer,n=this.copyPass,a=this.inputBuffer,l=this.outputBuffer,u=!1;for(let c of(void 0===e&&(this.timer.update(),e=this.timer.getDelta()),this.passes))c.enabled&&(c.render(s,a,l,e,u),c.needsSwap&&(u&&(n.renderToScreen=c.renderToScreen,t=s.getContext(),(r=s.state.buffers.stencil).setFunc(t.NOTEQUAL,1,0xffffffff),n.render(s,a,l,e,u),r.setFunc(t.EQUAL,1,0xffffffff)),i=a,a=l,l=i),c instanceof d?u=!0:c instanceof o&&(u=!1))}setSize(e,t,r){let s=this.renderer,n=s.getSize(new i.I9Y);(void 0===e||void 0===t)&&(e=n.width,t=n.height),(n.width!==e||n.height!==t)&&s.setSize(e,t,r);let a=s.getDrawingBufferSize(new i.I9Y);for(let e of(this.inputBuffer.setSize(a.width,a.height),this.outputBuffer.setSize(a.width,a.height),this.passes))e.setSize(a.width,a.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(let e of this.passes)e.dispose();this.passes=[],null!==this.inputBuffer&&this.inputBuffer.dispose(),null!==this.outputBuffer&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose(),a.fullscreenGeometry.dispose()}},m={NONE:0,DEPTH:1,CONVOLUTION:2},g={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},x=class{constructor(){this.shaderParts=new Map([[g.FRAGMENT_HEAD,null],[g.FRAGMENT_MAIN_UV,null],[g.FRAGMENT_MAIN_IMAGE,null],[g.VERTEX_HEAD,null],[g.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=m.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=i.Zr2}};function E(e){let t;if(0===e)t=new Float64Array(0);else if(1===e)t=new Float64Array([1]);else if(e>1){let r=new Float64Array(e),i=new Float64Array(e);for(let s=1;s<=e;++s){for(let e=0;e<s;++e)i[e]=0===e||e===s-1?1:r[e-1]+r[e];t=i,i=r,r=t}}return t}var S=class{constructor(e,t=2){this.weights=null,this.offsets=null,this.linearWeights=null,this.linearOffsets=null,this.generate(e,t)}get steps(){return null===this.offsets?0:this.offsets.length}get linearSteps(){return null===this.linearOffsets?0:this.linearOffsets.length}generate(e,t){if(e<3||e>1020)throw Error("The kernel size must be in the range [3, 1020]");let r=e+2*t,i=t>0?E(r).slice(t,-t):E(r),s=Math.floor((i.length-1)/2),n=i.reduce((e,t)=>e+t,0),a=i.slice(s),o=[...Array(s+1).keys()],l=new Float64Array(Math.floor(o.length/2)),u=new Float64Array(l.length);l[0]=a[0]/n;for(let e=1,t=1,r=o.length-1;e<r;e+=2,++t){let r=o[e],i=o[e+1],s=a[e],c=a[e+1],v=s+c,f=(r*s+i*c)/v;l[t]=v/n,u[t]=f}for(let e=0,t=a.length,r=1/n;e<t;++e)a[e]*=r;let c=(l.reduce((e,t)=>e+t,0)-.5*l[0])*2;if(0!==c)for(let e=0,t=l.length,r=1/c;e<t;++e)l[e]*=r;this.offsets=o,this.weights=a,this.linearOffsets=u,this.linearWeights=l}},T=!1,y=class{constructor(e=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(e),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let t;if(e.material.flatShading)switch(e.material.side){case i.$EB:t=this.materialsFlatShadedDoubleSide;break;case i.hsX:t=this.materialsFlatShadedBackSide;break;default:t=this.materialsFlatShaded}else switch(e.material.side){case i.$EB:t=this.materialsDoubleSide;break;case i.hsX:t=this.materialsBackSide;break;default:t=this.materials}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=t[2]:e.isInstancedMesh?e.material=t[1]:e.material=t[0],++this.meshCount}}}cloneMaterial(e){if(!(e instanceof i.BKk))return e.clone();let t=e.uniforms,r=new Map;for(let e in t){let i=t[e].value;i.isRenderTargetTexture&&(t[e].value=null,r.set(e,i))}let s=e.clone();for(let e of r)t[e[0]].value=e[1],s.uniforms[e[0]].value=e[1];return s}setMaterial(e){if(this.disposeMaterials(),this.material=e,null!==e){let t=this.materials=[this.cloneMaterial(e),this.cloneMaterial(e),this.cloneMaterial(e)];for(let r of t)r.uniforms=Object.assign({},e.uniforms),r.side=i.hB5;t[2].skinning=!0,this.materialsBackSide=t.map(t=>{let r=this.cloneMaterial(t);return r.uniforms=Object.assign({},e.uniforms),r.side=i.hsX,r}),this.materialsDoubleSide=t.map(t=>{let r=this.cloneMaterial(t);return r.uniforms=Object.assign({},e.uniforms),r.side=i.$EB,r}),this.materialsFlatShaded=t.map(t=>{let r=this.cloneMaterial(t);return r.uniforms=Object.assign({},e.uniforms),r.flatShading=!0,r}),this.materialsFlatShadedBackSide=t.map(t=>{let r=this.cloneMaterial(t);return r.uniforms=Object.assign({},e.uniforms),r.flatShading=!0,r.side=i.hsX,r}),this.materialsFlatShadedDoubleSide=t.map(t=>{let r=this.cloneMaterial(t);return r.uniforms=Object.assign({},e.uniforms),r.flatShading=!0,r.side=i.$EB,r})}}render(e,t,r){let i=e.shadowMap.enabled;if(e.shadowMap.enabled=!1,T){let i=this.originalMaterials;for(let s of(this.meshCount=0,t.traverse(this.replaceMaterial),e.render(t,r),i))s[0].material=s[1];this.meshCount!==i.size&&i.clear()}else{let i=t.overrideMaterial;t.overrideMaterial=this.material,e.render(t,r),t.overrideMaterial=i}e.shadowMap.enabled=i}disposeMaterials(){if(null!==this.material)for(let e of this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide))e.dispose()}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return T}static set workaroundEnabled(e){T=e}},U=class extends i.Qev{constructor(e,t=-1,r=-1,s=1){super(),this.resizable=e,this.baseSize=new i.I9Y(1,1),this.preferredSize=new i.I9Y(t,r),this.target=this.preferredSize,this.s=s,this.effectiveSize=new i.I9Y,this.addEventListener("change",()=>this.updateEffectiveSize()),this.updateEffectiveSize()}updateEffectiveSize(){let e=this.baseSize,t=this.preferredSize,r=this.effectiveSize,i=this.scale;-1!==t.width?r.width=t.width:-1!==t.height?r.width=Math.round(t.height*(e.width/Math.max(e.height,1))):r.width=Math.round(e.width*i),-1!==t.height?r.height=t.height:-1!==t.width?r.height=Math.round(t.width/Math.max(e.width/Math.max(e.height,1),1)):r.height=Math.round(e.height*i)}get width(){return this.effectiveSize.width}set width(e){this.preferredWidth=e}get height(){return this.effectiveSize.height}set height(e){this.preferredHeight=e}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(e){this.s!==e&&(this.s=e,this.preferredSize.setScalar(-1),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getScale(){return this.scale}setScale(e){this.scale=e}get baseWidth(){return this.baseSize.width}set baseWidth(e){this.baseSize.width!==e&&(this.baseSize.width=e,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseWidth(){return this.baseWidth}setBaseWidth(e){this.baseWidth=e}get baseHeight(){return this.baseSize.height}set baseHeight(e){this.baseSize.height!==e&&(this.baseSize.height=e,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseHeight(){return this.baseHeight}setBaseHeight(e){this.baseHeight=e}setBaseSize(e,t){(this.baseSize.width!==e||this.baseSize.height!==t)&&(this.baseSize.set(e,t),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}get preferredWidth(){return this.preferredSize.width}set preferredWidth(e){this.preferredSize.width!==e&&(this.preferredSize.width=e,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(e){this.preferredWidth=e}get preferredHeight(){return this.preferredSize.height}set preferredHeight(e){this.preferredSize.height!==e&&(this.preferredSize.height=e,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(e){this.preferredHeight=e}setPreferredSize(e,t){(this.preferredSize.width!==e||this.preferredSize.height!==t)&&(this.preferredSize.set(e,t),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}copy(e){this.s=e.scale,this.baseSize.set(e.baseWidth,e.baseHeight),this.preferredSize.set(e.preferredWidth,e.preferredHeight),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height)}static get AUTO_SIZE(){return -1}},D=new class{constructor(e=0){this.nextId=e}getNextId(){return this.nextId++}reset(e=0){return this.nextId=e,this}}(2),_=class extends Set{constructor(e,t=D.getNextId()){super(),this.exclusive=!1,this._layer=t,(this._layer<1||this._layer>31)&&(console.warn("Layer out of range, resetting to 2"),D.reset(2),this._layer=D.getNextId()),void 0!==e&&this.set(e)}get layer(){return this._layer}set layer(e){let t=this._layer;for(let r of this)r.layers.disable(t),r.layers.enable(e);this._layer=e}getLayer(){return this.layer}setLayer(e){this.layer=e}isExclusive(){return this.exclusive}setExclusive(e){this.exclusive=e}clear(){let e=this.layer;for(let t of this)t.layers.disable(e);return super.clear()}set(e){for(let t of(this.clear(),e))this.add(t);return this}indexOf(e){return this.has(e)?0:-1}add(e){return this.exclusive?e.layers.set(this.layer):e.layers.enable(this.layer),super.add(e)}delete(e){return this.has(e)&&e.layers.disable(this.layer),super.delete(e)}toggle(e){let t;return this.has(e)?(this.delete(e),t=!1):(this.add(e),t=!0),t}setVisible(e){for(let t of this)e?t.layers.enable(0):t.layers.disable(0);return this}},A={ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},w=new Map([[A.ADD,"vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x+y,opacity);}"],[A.ALPHA,"vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,min(y.a,opacity));}"],[A.AVERAGE,"vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,(x+y)*0.5,opacity);}"],[A.COLOR,"vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.rg,xHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}"],[A.COLOR_BURN,"vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(step(0.0,y)*(1.0-min(vec4(1.0),(1.0-x)/y)),vec4(1.0),step(1.0,x));return mix(x,z,opacity);}"],[A.COLOR_DODGE,"vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=step(0.0,x)*mix(min(vec4(1.0),x/max(1.0-y,1e-9)),vec4(1.0),step(1.0,y));return mix(x,z,opacity);}"],[A.DARKEN,"vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,min(x,y),opacity);}"],[A.DIFFERENCE,"vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,abs(x-y),opacity);}"],[A.DIVIDE,"vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x/max(y,1e-12),opacity);}"],[A.DST,null],[A.EXCLUSION,"vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,(x+y-2.0*x*y),opacity);}"],[A.HARD_LIGHT,"vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 a=min(x,1.0),b=min(y,1.0);vec4 z=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,y));return mix(x,z,opacity);}"],[A.HARD_MIX,"vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,step(1.0,x+y),opacity);}"],[A.HUE,"vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.r,xHSL.gb));return vec4(mix(x.rgb,z,opacity),y.a);}"],[A.INVERT,"vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,1.0-y,opacity);}"],[A.INVERT_RGB,"vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y*(1.0-x),opacity);}"],[A.LIGHTEN,"vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,max(x,y),opacity);}"],[A.LINEAR_BURN,"vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,clamp(y+x-1.0,0.0,1.0),opacity);}"],[A.LINEAR_DODGE,"vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,min(x+y,1.0),opacity);}"],[A.LINEAR_LIGHT,"vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,clamp(2.0*y+x-1.0,0.0,1.0),opacity);}"],[A.LUMINOSITY,"vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.rg,yHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}"],[A.MULTIPLY,"vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x*y,opacity);}"],[A.NEGATION,"vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,1.0-abs(1.0-x-y),opacity);}"],[A.NORMAL,"vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,opacity);}"],[A.OVERLAY,"vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(2.0*y*x,1.0-2.0*(1.0-y)*(1.0-x),step(0.5,x));return mix(x,z,opacity);}"],[A.PIN_LIGHT,"vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 y2=2.0*y;vec4 z=mix(mix(y2,x,step(0.5*x,y)),max(vec4(0.0),y2-1.0),step(x,(y2-1.0)));return mix(x,z,opacity);}"],[A.REFLECT,"vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(min(x*x/max(1.0-y,1e-12),1.0),y,step(1.0,y));return mix(x,z,opacity);}"],[A.SATURATION,"vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.r,yHSL.g,xHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}"],[A.SCREEN,"vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x+y-min(x*y,1.0),opacity);}"],[A.SOFT_LIGHT,"vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 y2=2.0*y;vec4 w=step(0.5,y);vec4 z=mix(x-(1.0-y2)*x*(1.0-x),mix(x+(y2-1.0)*(sqrt(x)-x),x+(y2-1.0)*x*((16.0*x-12.0)*x+3.0),w*(1.0-step(0.25,x))),w);return mix(x,z,opacity);}"],[A.SRC,"vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return y;}"],[A.SUBTRACT,"vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,max(x+y-1.0,0.0),opacity);}"],[A.VIVID_LIGHT,"vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(max(1.0-min((1.0-x)/(2.0*y),1.0),0.0),min(x/(2.0*(1.0-y)),1.0),step(0.5,y));return mix(x,z,opacity);}"]]),R=class extends i.Qev{constructor(e,t=1){super(),this._blendFunction=e,this.opacity=new i.nc$(t)}getOpacity(){return this.opacity.value}setOpacity(e){this.opacity.value=e}get blendFunction(){return this._blendFunction}set blendFunction(e){this._blendFunction=e,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(e){this.blendFunction=e}getShaderCode(){return w.get(this.blendFunction)}},B=(i.GOR,class extends i.Qev{constructor(e,t,{attributes:r=m.NONE,blendFunction:s=A.NORMAL,defines:n=new Map,uniforms:a=new Map,extensions:o=null,vertexShader:l=null}={}){super(),this.name=e,this.renderer=null,this.attributes=r,this.fragmentShader=t,this.vertexShader=l,this.defines=n,this.uniforms=a,this.extensions=o,this.blendMode=new R(s),this.blendMode.addEventListener("change",e=>this.setChanged()),this._inputColorSpace=i.Zr2,this._outputColorSpace=i.jf0}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(e){this._inputColorSpace=e,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e,this.setChanged()}set mainScene(e){}set mainCamera(e){}getName(){return this.name}setRenderer(e){this.renderer=e}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(e){this.attributes=e,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(e){this.fragmentShader=e,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(e){this.vertexShader=e,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(e,t=i.Rkk){}update(e,t,r){}setSize(e,t){}initialize(e,t,r){}dispose(){for(let e of Object.keys(this)){let t=this[e];(t instanceof i.nWS||t instanceof i.imn||t instanceof i.gPd||t instanceof a)&&this[e].dispose()}}}),M={VERY_SMALL:0,SMALL:1,MEDIUM:2,LARGE:3,VERY_LARGE:4,HUGE:5},P=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`,I=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])],C=class extends i.BKk{constructor(e=new i.IUQ){super({name:"KawaseBlurMaterial",uniforms:{inputBuffer:new i.nc$(null),texelSize:new i.nc$(new i.IUQ),scale:new i.nc$(1),kernel:new i.nc$(0)},blending:i.XIg,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:P,vertexShader:"uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}"}),this.setTexelSize(e.x,e.y),this.kernelSize=M.MEDIUM}set inputBuffer(e){this.uniforms.inputBuffer.value=e}setInputBuffer(e){this.inputBuffer=e}get kernelSequence(){return I[this.kernelSize]}get scale(){return this.uniforms.scale.value}set scale(e){this.uniforms.scale.value=e}getScale(){return this.uniforms.scale.value}setScale(e){this.uniforms.scale.value=e}getKernel(){return null}get kernel(){return this.uniforms.kernel.value}set kernel(e){this.uniforms.kernel.value=e}setKernel(e){this.kernel=e}setTexelSize(e,t){this.uniforms.texelSize.value.set(e,t,.5*e,.5*t)}setSize(e,t){let r=1/e,i=1/t;this.uniforms.texelSize.value.set(r,i,.5*r,.5*i)}},b=class extends a{constructor({kernelSize:e=M.MEDIUM,resolutionScale:t=.5,width:r=U.AUTO_SIZE,height:s=U.AUTO_SIZE,resolutionX:n=r,resolutionY:a=s}={}){super("KawaseBlurPass"),this.renderTargetA=new i.nWS(1,1,{depthBuffer:!1}),this.renderTargetA.texture.name="Blur.Target.A",this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name="Blur.Target.B";let o=this.resolution=new U(this,n,a,t);o.addEventListener("change",e=>this.setSize(o.baseWidth,o.baseHeight)),this._blurMaterial=new C,this._blurMaterial.kernelSize=e,this.copyMaterial=new c}getResolution(){return this.resolution}get blurMaterial(){return this._blurMaterial}set blurMaterial(e){this._blurMaterial=e}get dithering(){return this.copyMaterial.dithering}set dithering(e){this.copyMaterial.dithering=e}get kernelSize(){return this.blurMaterial.kernelSize}set kernelSize(e){this.blurMaterial.kernelSize=e}get width(){return this.resolution.width}set width(e){this.resolution.preferredWidth=e}get height(){return this.resolution.height}set height(e){this.resolution.preferredHeight=e}get scale(){return this.blurMaterial.scale}set scale(e){this.blurMaterial.scale=e}getScale(){return this.blurMaterial.scale}setScale(e){this.blurMaterial.scale=e}getKernelSize(){return this.kernelSize}setKernelSize(e){this.kernelSize=e}getResolutionScale(){return this.resolution.scale}setResolutionScale(e){this.resolution.scale=e}render(e,t,r,i,s){let n=this.scene,a=this.camera,o=this.renderTargetA,l=this.renderTargetB,u=this.blurMaterial,c=u.kernelSequence,v=t;this.fullscreenMaterial=u;for(let t=0,r=c.length;t<r;++t){let r=(1&t)==0?o:l;u.kernel=c[t],u.inputBuffer=v.texture,e.setRenderTarget(r),e.render(n,a),v=r}this.fullscreenMaterial=this.copyMaterial,this.copyMaterial.inputBuffer=v.texture,e.setRenderTarget(this.renderToScreen?null:r),e.render(n,a)}setSize(e,t){let r=this.resolution;r.setBaseSize(e,t);let i=r.width,s=r.height;this.renderTargetA.setSize(i,s),this.renderTargetB.setSize(i,s),this.blurMaterial.setSize(e,t)}initialize(e,t,r){void 0!==r&&(this.renderTargetA.texture.type=r,this.renderTargetB.texture.type=r,r!==i.OUM?(this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1"):null!==e&&e.outputColorSpace===i.er$&&(this.renderTargetA.texture.colorSpace=i.er$,this.renderTargetB.texture.colorSpace=i.er$))}static get AUTO_SIZE(){return U.AUTO_SIZE}},N=`#include <common>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef RANGE
uniform vec2 range;
#elif defined(THRESHOLD)
uniform float threshold;uniform float smoothing;
#endif
varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);float l=luminance(texel.rgb);
#ifdef RANGE
float low=step(range.x,l);float high=step(l,range.y);l*=low*high;
#elif defined(THRESHOLD)
l=smoothstep(threshold,threshold+smoothing,l)*l;
#endif
#ifdef COLOR
gl_FragColor=vec4(texel.rgb*clamp(l,0.0,1.0),l);
#else
gl_FragColor=vec4(l);
#endif
}`,F=class extends i.BKk{constructor(e=!1,t=null){super({name:"LuminanceMaterial",defines:{THREE_REVISION:i.sPf.replace(/\D+/g,"")},uniforms:{inputBuffer:new i.nc$(null),threshold:new i.nc$(0),smoothing:new i.nc$(1),range:new i.nc$(null)},blending:i.XIg,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:N,vertexShader:u}),this.colorOutput=e,this.luminanceRange=t}set inputBuffer(e){this.uniforms.inputBuffer.value=e}setInputBuffer(e){this.uniforms.inputBuffer.value=e}get threshold(){return this.uniforms.threshold.value}set threshold(e){this.smoothing>0||e>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.threshold.value=e}getThreshold(){return this.threshold}setThreshold(e){this.threshold=e}get smoothing(){return this.uniforms.smoothing.value}set smoothing(e){this.threshold>0||e>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.smoothing.value=e}getSmoothingFactor(){return this.smoothing}setSmoothingFactor(e){this.smoothing=e}get useThreshold(){return this.threshold>0||this.smoothing>0}set useThreshold(e){}get colorOutput(){return void 0!==this.defines.COLOR}set colorOutput(e){e?this.defines.COLOR="1":delete this.defines.COLOR,this.needsUpdate=!0}isColorOutputEnabled(e){return this.colorOutput}setColorOutputEnabled(e){this.colorOutput=e}get useRange(){return null!==this.luminanceRange}set useRange(e){this.luminanceRange=null}get luminanceRange(){return this.uniforms.range.value}set luminanceRange(e){null!==e?this.defines.RANGE="1":delete this.defines.RANGE,this.uniforms.range.value=e,this.needsUpdate=!0}getLuminanceRange(){return this.luminanceRange}setLuminanceRange(e){this.luminanceRange=e}},z=class extends a{constructor({renderTarget:e,luminanceRange:t,colorOutput:r,resolutionScale:s=1,width:n=U.AUTO_SIZE,height:a=U.AUTO_SIZE,resolutionX:o=n,resolutionY:l=a}={}){super("LuminancePass"),this.fullscreenMaterial=new F(r,t),this.needsSwap=!1,this.renderTarget=e,void 0===this.renderTarget&&(this.renderTarget=new i.nWS(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="LuminancePass.Target");let u=this.resolution=new U(this,o,l,s);u.addEventListener("change",e=>this.setSize(u.baseWidth,u.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}render(e,t,r,i,s){this.fullscreenMaterial.inputBuffer=t.texture,e.setRenderTarget(this.renderToScreen?null:this.renderTarget),e.render(this.scene,this.camera)}setSize(e,t){let r=this.resolution;r.setBaseSize(e,t),this.renderTarget.setSize(r.width,r.height)}initialize(e,t,r){void 0!==r&&r!==i.OUM&&(this.renderTarget.texture.type=r,this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},O=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.0555555
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`,L=class extends i.BKk{constructor(){super({name:"DownsamplingMaterial",uniforms:{inputBuffer:new i.nc$(null),texelSize:new i.nc$(new i.I9Y)},blending:i.XIg,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:O,vertexShader:"uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}"})}set inputBuffer(e){this.uniforms.inputBuffer.value=e}setSize(e,t){this.uniforms.texelSize.value.set(1/e,1/t)}},H=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`,k=class extends i.BKk{constructor(){super({name:"UpsamplingMaterial",uniforms:{inputBuffer:new i.nc$(null),supportBuffer:new i.nc$(null),texelSize:new i.nc$(new i.I9Y),radius:new i.nc$(.85)},blending:i.XIg,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:H,vertexShader:"uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}"})}set inputBuffer(e){this.uniforms.inputBuffer.value=e}set supportBuffer(e){this.uniforms.supportBuffer.value=e}get radius(){return this.uniforms.radius.value}set radius(e){this.uniforms.radius.value=e}setSize(e,t){this.uniforms.texelSize.value.set(1/e,1/t)}},G=class extends a{constructor(){super("MipmapBlurPass"),this.needsSwap=!1,this.renderTarget=new i.nWS(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Upsampling.Mipmap0",this.downsamplingMipmaps=[],this.upsamplingMipmaps=[],this.downsamplingMaterial=new L,this.upsamplingMaterial=new k,this.resolution=new i.I9Y}get texture(){return this.renderTarget.texture}get levels(){return this.downsamplingMipmaps.length}set levels(e){if(this.levels!==e){let t=this.renderTarget;this.dispose(),this.downsamplingMipmaps=[],this.upsamplingMipmaps=[];for(let r=0;r<e;++r){let e=t.clone();e.texture.name="Downsampling.Mipmap"+r,this.downsamplingMipmaps.push(e)}this.upsamplingMipmaps.push(t);for(let r=1,i=e-1;r<i;++r){let e=t.clone();e.texture.name="Upsampling.Mipmap"+r,this.upsamplingMipmaps.push(e)}this.setSize(this.resolution.x,this.resolution.y)}}get radius(){return this.upsamplingMaterial.radius}set radius(e){this.upsamplingMaterial.radius=e}render(e,t,r,i,s){let{scene:n,camera:a}=this,{downsamplingMaterial:o,upsamplingMaterial:l}=this,{downsamplingMipmaps:u,upsamplingMipmaps:c}=this,v=t;this.fullscreenMaterial=o;for(let t=0,r=u.length;t<r;++t){let r=u[t];o.setSize(v.width,v.height),o.inputBuffer=v.texture,e.setRenderTarget(r),e.render(n,a),v=r}this.fullscreenMaterial=l;for(let t=c.length-1;t>=0;--t){let r=c[t];l.setSize(v.width,v.height),l.inputBuffer=v.texture,l.supportBuffer=u[t].texture,e.setRenderTarget(r),e.render(n,a),v=r}}setSize(e,t){let r=this.resolution;r.set(e,t);let i=r.width,s=r.height;for(let e=0,t=this.downsamplingMipmaps.length;e<t;++e)i=Math.round(.5*i),s=Math.round(.5*s),this.downsamplingMipmaps[e].setSize(i,s),e<this.upsamplingMipmaps.length&&this.upsamplingMipmaps[e].setSize(i,s)}initialize(e,t,r){if(void 0!==r){let t=this.downsamplingMipmaps.concat(this.upsamplingMipmaps);for(let e of t)e.texture.type=r;if(r!==i.OUM)this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1";else if(null!==e&&e.outputColorSpace===i.er$)for(let e of t)e.texture.colorSpace=i.er$}}dispose(){for(let e of(super.dispose(),this.downsamplingMipmaps.concat(this.upsamplingMipmaps)))e.dispose()}},V=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec4 texel=texture2D(map,uv);outputColor=vec4(texel.rgb*intensity,texel.a);}`,Z=class extends B{constructor({blendFunction:e=A.SCREEN,luminanceThreshold:t=.9,luminanceSmoothing:r=.025,mipmapBlur:s=!1,intensity:n=1,radius:a=.85,levels:o=8,kernelSize:l=M.LARGE,resolutionScale:u=.5,width:c=U.AUTO_SIZE,height:v=U.AUTO_SIZE,resolutionX:f=c,resolutionY:h=v}={}){super("BloomEffect",V,{blendFunction:e,uniforms:new Map([["map",new i.nc$(null)],["intensity",new i.nc$(n)]])}),this.renderTarget=new i.nWS(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Bloom.Target",this.blurPass=new b({kernelSize:l}),this.luminancePass=new z({colorOutput:!0}),this.luminanceMaterial.threshold=t,this.luminanceMaterial.smoothing=r,this.mipmapBlurPass=new G,this.mipmapBlurPass.enabled=s,this.mipmapBlurPass.radius=a,this.mipmapBlurPass.levels=o,this.uniforms.get("map").value=s?this.mipmapBlurPass.texture:this.renderTarget.texture;let d=this.resolution=new U(this,f,h,u);d.addEventListener("change",e=>this.setSize(d.baseWidth,d.baseHeight))}get texture(){return this.mipmapBlurPass.enabled?this.mipmapBlurPass.texture:this.renderTarget.texture}getTexture(){return this.texture}getResolution(){return this.resolution}getBlurPass(){return this.blurPass}getLuminancePass(){return this.luminancePass}get luminanceMaterial(){return this.luminancePass.fullscreenMaterial}getLuminanceMaterial(){return this.luminancePass.fullscreenMaterial}get width(){return this.resolution.width}set width(e){this.resolution.preferredWidth=e}get height(){return this.resolution.height}set height(e){this.resolution.preferredHeight=e}get dithering(){return this.blurPass.dithering}set dithering(e){this.blurPass.dithering=e}get kernelSize(){return this.blurPass.kernelSize}set kernelSize(e){this.blurPass.kernelSize=e}get distinction(){return console.warn(this.name,"distinction was removed"),1}set distinction(e){console.warn(this.name,"distinction was removed")}get intensity(){return this.uniforms.get("intensity").value}set intensity(e){this.uniforms.get("intensity").value=e}getIntensity(){return this.intensity}setIntensity(e){this.intensity=e}getResolutionScale(){return this.resolution.scale}setResolutionScale(e){this.resolution.scale=e}update(e,t,r){let i=this.renderTarget,s=this.luminancePass;s.enabled?(s.render(e,t),this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(e,s.renderTarget):this.blurPass.render(e,s.renderTarget,i)):this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(e,t):this.blurPass.render(e,t,i)}setSize(e,t){let r=this.resolution;r.setBaseSize(e,t),this.renderTarget.setSize(r.width,r.height),this.blurPass.resolution.copy(r),this.luminancePass.setSize(e,t),this.mipmapBlurPass.setSize(e,t)}initialize(e,t,r){this.blurPass.initialize(e,t,r),this.luminancePass.initialize(e,t,r),this.mipmapBlurPass.initialize(e,t,r),void 0!==r&&(this.renderTarget.texture.type=r,null!==e&&e.outputColorSpace===i.er$&&(this.renderTarget.texture.colorSpace=i.er$))}},K={RED:0},X={DISCARD:0},$=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if PASS == 1
uniform vec4 kernel64[32];
#else
uniform vec4 kernel16[8];
#endif
uniform lowp sampler2D cocBuffer;uniform vec2 texelSize;uniform float scale;varying vec2 vUv;void main(){
#ifdef FOREGROUND
vec2 cocNearFar=texture2D(cocBuffer,vUv).rg*scale;float coc=cocNearFar.x;
#else
float coc=texture2D(cocBuffer,vUv).g*scale;
#endif
if(coc==0.0){gl_FragColor=texture2D(inputBuffer,vUv);}else{
#ifdef FOREGROUND
vec2 step=texelSize*max(cocNearFar.x,cocNearFar.y);
#else
vec2 step=texelSize*coc;
#endif
#if PASS == 1
vec4 acc=vec4(0.0);for(int i=0;i<32;++i){vec4 kernel=kernel64[i];vec2 uv=step*kernel.xy+vUv;acc+=texture2D(inputBuffer,uv);uv=step*kernel.zw+vUv;acc+=texture2D(inputBuffer,uv);}gl_FragColor=acc/64.0;
#else
vec4 maxValue=texture2D(inputBuffer,vUv);for(int i=0;i<8;++i){vec4 kernel=kernel16[i];vec2 uv=step*kernel.xy+vUv;maxValue=max(texture2D(inputBuffer,uv),maxValue);uv=step*kernel.zw+vUv;maxValue=max(texture2D(inputBuffer,uv),maxValue);}gl_FragColor=maxValue;
#endif
}}`;i.BKk;function W(e,t,r){return Math.min(Math.max((e+t)/(t-r),0),1)}var Y=`#include <common>
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform float focusDistance;uniform float focusRange;uniform float cameraNear;uniform float cameraFar;varying vec2 vUv;float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
float depth=unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
float depth=texture2D(depthBuffer,uv).r;
#endif
#ifdef LOG_DEPTH
float d=pow(2.0,depth*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);depth=a+b/d;
#endif
return depth;}void main(){float depth=readDepth(vUv);
#ifdef PERSPECTIVE_CAMERA
float viewZ=perspectiveDepthToViewZ(depth,cameraNear,cameraFar);float linearDepth=viewZToOrthographicDepth(viewZ,cameraNear,cameraFar);
#else
float linearDepth=depth;
#endif
float signedDistance=linearDepth-focusDistance;float magnitude=smoothstep(0.0,focusRange,abs(signedDistance));gl_FragColor.rg=magnitude*vec2(step(signedDistance,0.0),step(0.0,signedDistance));}`,j=(i.BKk,`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef MASK_PRECISION_HIGH
uniform mediump sampler2D maskTexture;
#else
uniform lowp sampler2D maskTexture;
#endif
#if MASK_FUNCTION != 0
uniform float strength;
#endif
varying vec2 vUv;void main(){
#if COLOR_CHANNEL == 0
float mask=texture2D(maskTexture,vUv).r;
#elif COLOR_CHANNEL == 1
float mask=texture2D(maskTexture,vUv).g;
#elif COLOR_CHANNEL == 2
float mask=texture2D(maskTexture,vUv).b;
#else
float mask=texture2D(maskTexture,vUv).a;
#endif
#if MASK_FUNCTION == 0
#ifdef INVERTED
mask=step(mask,0.0);
#else
mask=1.0-step(mask,0.0);
#endif
#else
mask=clamp(mask*strength,0.0,1.0);
#ifdef INVERTED
mask=1.0-mask;
#endif
#endif
#if MASK_FUNCTION == 3
vec4 texel=texture2D(inputBuffer,vUv);gl_FragColor=vec4(mask*texel.rgb,texel.a);
#elif MASK_FUNCTION == 2
gl_FragColor=vec4(mask*texture2D(inputBuffer,vUv).rgb,mask);
#else
gl_FragColor=mask*texture2D(inputBuffer,vUv);
#endif
}`),Q=(i.BKk,class extends a{constructor(e,t="inputBuffer"){super("ShaderPass"),this.fullscreenMaterial=e,this.input=t}setInput(e){this.input=e}render(e,t,r,i,s){let n=this.fullscreenMaterial.uniforms;null!==t&&void 0!==n&&void 0!==n[this.input]&&(n[this.input].value=t.texture),e.setRenderTarget(this.renderToScreen?null:r),e.render(this.scene,this.camera)}initialize(e,t,r){void 0!==r&&r!==i.OUM&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}});i.GYF;var q={KEEP_MAX_DEPTH:1,DISCARD_MAX_DEPTH:2},J=`#include <common>
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer0;uniform highp sampler2D depthBuffer1;
#else
uniform mediump sampler2D depthBuffer0;uniform mediump sampler2D depthBuffer1;
#endif
uniform sampler2D inputBuffer;uniform vec2 cameraNearFar;float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNearFar.x,cameraNearFar.y);
#else
return orthographicDepthToViewZ(depth,cameraNearFar.x,cameraNearFar.y);
#endif
}varying vec2 vUv;void main(){vec2 depth;
#if DEPTH_PACKING_0 == 3201
depth.x=unpackRGBAToDepth(texture2D(depthBuffer0,vUv));
#else
depth.x=texture2D(depthBuffer0,vUv).r;
#ifdef LOG_DEPTH
float d=pow(2.0,depth.x*log2(cameraNearFar.y+1.0))-1.0;float a=cameraNearFar.y/(cameraNearFar.y-cameraNearFar.x);float b=cameraNearFar.y*cameraNearFar.x/(cameraNearFar.x-cameraNearFar.y);depth.x=a+b/d;
#endif
#endif
#if DEPTH_PACKING_1 == 3201
depth.y=unpackRGBAToDepth(texture2D(depthBuffer1,vUv));
#else
depth.y=texture2D(depthBuffer1,vUv).r;
#ifdef LOG_DEPTH
float d=pow(2.0,depth.y*log2(cameraNearFar.y+1.0))-1.0;float a=cameraNearFar.y/(cameraNearFar.y-cameraNearFar.x);float b=cameraNearFar.y*cameraNearFar.x/(cameraNearFar.x-cameraNearFar.y);depth.y=a+b/d;
#endif
#endif
bool isMaxDepth=(depth.x==1.0);
#ifdef PERSPECTIVE_CAMERA
depth.x=viewZToOrthographicDepth(getViewZ(depth.x),cameraNearFar.x,cameraNearFar.y);depth.y=viewZToOrthographicDepth(getViewZ(depth.y),cameraNearFar.x,cameraNearFar.y);
#endif
#if DEPTH_TEST_STRATEGY == 0
bool keep=depthTest(depth.x,depth.y);
#elif DEPTH_TEST_STRATEGY == 1
bool keep=isMaxDepth||depthTest(depth.x,depth.y);
#else
bool keep=!isMaxDepth&&depthTest(depth.x,depth.y);
#endif
if(keep){gl_FragColor=texture2D(inputBuffer,vUv);}else{discard;}}`,ee=class extends i.BKk{constructor(){super({name:"DepthMaskMaterial",defines:{DEPTH_EPSILON:"0.0001",DEPTH_PACKING_0:"0",DEPTH_PACKING_1:"0",DEPTH_TEST_STRATEGY:q.KEEP_MAX_DEPTH},uniforms:{inputBuffer:new i.nc$(null),depthBuffer0:new i.nc$(null),depthBuffer1:new i.nc$(null),cameraNearFar:new i.nc$(new i.I9Y(1,1))},blending:i.XIg,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:J,vertexShader:u}),this.depthMode=i.brA}set depthBuffer0(e){this.uniforms.depthBuffer0.value=e}set depthPacking0(e){this.defines.DEPTH_PACKING_0=e.toFixed(0),this.needsUpdate=!0}setDepthBuffer0(e,t=i.Rkk){this.depthBuffer0=e,this.depthPacking0=t}set depthBuffer1(e){this.uniforms.depthBuffer1.value=e}set depthPacking1(e){this.defines.DEPTH_PACKING_1=e.toFixed(0),this.needsUpdate=!0}setDepthBuffer1(e,t=i.Rkk){this.depthBuffer1=e,this.depthPacking1=t}get maxDepthStrategy(){return Number(this.defines.DEPTH_TEST_STRATEGY)}set maxDepthStrategy(e){this.defines.DEPTH_TEST_STRATEGY=e.toFixed(0),this.needsUpdate=!0}get keepFar(){return this.maxDepthStrategy}set keepFar(e){this.maxDepthStrategy=e?q.KEEP_MAX_DEPTH:q.DISCARD_MAX_DEPTH}getMaxDepthStrategy(){return this.maxDepthStrategy}setMaxDepthStrategy(e){this.maxDepthStrategy=e}get epsilon(){return Number(this.defines.DEPTH_EPSILON)}set epsilon(e){this.defines.DEPTH_EPSILON=e.toFixed(16),this.needsUpdate=!0}getEpsilon(){return this.epsilon}setEpsilon(e){this.epsilon=e}get depthMode(){return Number(this.defines.DEPTH_MODE)}set depthMode(e){let t;switch(e){case i.eHc:t="false";break;case i.lGu:t="true";break;case i.U3G:t="abs(d1 - d0) <= DEPTH_EPSILON";break;case i.bw0:t="abs(d1 - d0) > DEPTH_EPSILON";break;case i.brA:t="d0 > d1";break;case i.xSv:t="d0 >= d1";break;case i.Gwm:t="d0 <= d1";break;case i.K52:default:t="d0 < d1"}this.defines.DEPTH_MODE=e.toFixed(0),this.defines["depthTest(d0, d1)"]=t,this.needsUpdate=!0}getDepthMode(){return this.depthMode}setDepthMode(e){this.depthMode=e}adoptCameraSettings(e){this.copyCameraSettings(e)}copyCameraSettings(e){e&&(this.uniforms.cameraNearFar.value.set(e.near,e.far),e instanceof i.ubm?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}},et=`#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform vec2 lightPosition;uniform float exposure;uniform float decay;uniform float density;uniform float weight;uniform float clampMax;varying vec2 vUv;void main(){vec2 coord=vUv;vec2 delta=lightPosition-coord;delta*=1.0/SAMPLES_FLOAT*density;float illuminationDecay=1.0;vec4 color=vec4(0.0);for(int i=0;i<SAMPLES_INT;++i){coord+=delta;vec4 texel=texture2D(inputBuffer,coord);texel*=illuminationDecay*weight;color+=texel;illuminationDecay*=decay;}gl_FragColor=clamp(color*exposure,0.0,clampMax);
#include <dithering_fragment>
}`,er=(i.BKk,class extends a{constructor(e,t,r=null){super("RenderPass",e,t),this.needsSwap=!1,this.clearPass=new h,this.overrideMaterialManager=null===r?null:new y(r),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(e){this.scene=e}set mainCamera(e){this.camera=e}get renderToScreen(){return super.renderToScreen}set renderToScreen(e){super.renderToScreen=e,this.clearPass.renderToScreen=e}get overrideMaterial(){let e=this.overrideMaterialManager;return null!==e?e.material:null}set overrideMaterial(e){let t=this.overrideMaterialManager;null!==e?null!==t?t.setMaterial(e):this.overrideMaterialManager=new y(e):null!==t&&(t.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(e){this.overrideMaterial=e}get clear(){return this.clearPass.enabled}set clear(e){this.clearPass.enabled=e}getSelection(){return this.selection}setSelection(e){this.selection=e}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(e){this.ignoreBackground=e}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(e){this.skipShadowMapUpdate=e}getClearPass(){return this.clearPass}render(e,t,r,i,s){let n=this.scene,a=this.camera,o=this.selection,l=a.layers.mask,u=n.background,c=e.shadowMap.autoUpdate,v=this.renderToScreen?null:t;null!==o&&a.layers.set(o.getLayer()),this.skipShadowMapUpdate&&(e.shadowMap.autoUpdate=!1),(this.ignoreBackground||null!==this.clearPass.overrideClearColor)&&(n.background=null),this.clearPass.enabled&&this.clearPass.render(e,t),e.setRenderTarget(v),null!==this.overrideMaterialManager?this.overrideMaterialManager.render(e,n,a):e.render(n,a),a.layers.mask=l,n.background=u,e.shadowMap.autoUpdate=c}}),ei={SCALE_UP:"lut.scaleup"};function es(e,t,r){let i=document.createElement("canvas"),s=i.getContext("2d");if(i.width=e,i.height=t,r instanceof Image)s.drawImage(r,0,0);else{let i=s.createImageData(e,t);i.data.set(r),s.putImageData(i,0,0)}return i}var en=class e{constructor(e=0,t=0,r=null){this.width=e,this.height=t,this.data=r}toCanvas(){return"undefined"==typeof document?null:es(this.width,this.height,this.data)}static from(t){let r,{width:i,height:s}=t;if(t instanceof Image){let e=es(i,s,t);null!==e&&(r=e.getContext("2d").getImageData(0,0,i,s).data)}else r=t.data;return new e(i,s,r)}},ea=new i.Q1f,eo=(i.dYF,{FULL:0}),el={COLOR:2},eu=`void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec3 noise=vec3(rand(uv*(1.0+time)));
#ifdef PREMULTIPLY
outputColor=vec4(min(inputColor.rgb*noise,vec3(1.0)),inputColor.a);
#else
outputColor=vec4(noise,inputColor.a);
#endif
}`,ec=class extends B{constructor({blendFunction:e=A.SCREEN,premultiply:t=!1}={}){super("NoiseEffect",eu,{blendFunction:e}),this.premultiply=t}get premultiply(){return this.defines.has("PREMULTIPLY")}set premultiply(e){this.premultiply!==e&&(e?this.defines.set("PREMULTIPLY","1"):this.defines.delete("PREMULTIPLY"),this.setChanged())}isPremultiplied(){return this.premultiply}setPremultiplied(e){this.premultiply=e}},ev=`#include <packing>
#include <clipping_planes_pars_fragment>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform float cameraNear;uniform float cameraFar;centroid varying float vViewZ;centroid varying vec4 vProjTexCoord;void main(){
#include <clipping_planes_fragment>
vec2 projTexCoord=(vProjTexCoord.xy/vProjTexCoord.w)*0.5+0.5;projTexCoord=clamp(projTexCoord,0.002,0.998);
#if DEPTH_PACKING == 3201
float fragCoordZ=unpackRGBAToDepth(texture2D(depthBuffer,projTexCoord));
#else
float fragCoordZ=texture2D(depthBuffer,projTexCoord).r;
#endif
#ifdef PERSPECTIVE_CAMERA
float viewZ=perspectiveDepthToViewZ(fragCoordZ,cameraNear,cameraFar);
#else
float viewZ=orthographicDepthToViewZ(fragCoordZ,cameraNear,cameraFar);
#endif
float depthTest=(-vViewZ>-viewZ)?1.0:0.0;gl_FragColor.rg=vec2(0.0,depthTest);}`,ef=`#include <common>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
varying float vViewZ;varying vec4 vProjTexCoord;void main(){
#include <skinbase_vertex>
#include <begin_vertex>
#include <morphtarget_vertex>
#include <skinning_vertex>
#include <project_vertex>
vViewZ=mvPosition.z;vProjTexCoord=gl_Position;
#include <clipping_planes_vertex>
}`,eh=(i.BKk,i.BKk,class extends a{constructor(e,t,{renderTarget:r,resolutionScale:s=1,width:n=U.AUTO_SIZE,height:a=U.AUTO_SIZE,resolutionX:o=n,resolutionY:l=a}={}){super("DepthPass"),this.needsSwap=!1,this.renderPass=new er(e,t,new i.CSG({depthPacking:i.N5j}));let u=this.renderPass;u.skipShadowMapUpdate=!0,u.ignoreBackground=!0;let c=u.clearPass;c.overrideClearColor=new i.Q1f(0xffffff),c.overrideClearAlpha=1,this.renderTarget=r,void 0===this.renderTarget&&(this.renderTarget=new i.nWS(1,1,{minFilter:i.hxR,magFilter:i.hxR}),this.renderTarget.texture.name="DepthPass.Target");let v=this.resolution=new U(this,o,l,s);v.addEventListener("change",e=>this.setSize(v.baseWidth,v.baseHeight))}set mainScene(e){this.renderPass.mainScene=e}set mainCamera(e){this.renderPass.mainCamera=e}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}getResolutionScale(){return this.resolution.scale}setResolutionScale(e){this.resolution.scale=e}render(e,t,r,i,s){let n=this.renderToScreen?null:this.renderTarget;this.renderPass.render(e,n)}setSize(e,t){let r=this.resolution;r.setBaseSize(e,t),this.renderTarget.setSize(r.width,r.height)}}),ed=`uniform float count;
#ifdef SCROLL
uniform float scrollSpeed;
#endif
void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){float y=uv.y;
#ifdef SCROLL
y+=time*scrollSpeed;
#endif
vec2 sl=vec2(sin(y*count),cos(y*count));outputColor=vec4(sl.xyx,inputColor.a);}`,ep=class extends B{constructor({blendFunction:e=A.OVERLAY,density:t=1.25,scrollSpeed:r=0}={}){super("ScanlineEffect",ed,{blendFunction:e,uniforms:new Map([["count",new i.nc$(0)],["scrollSpeed",new i.nc$(0)]])}),this.resolution=new i.I9Y,this.d=t,this.scrollSpeed=r}get density(){return this.d}set density(e){this.d=e,this.setSize(this.resolution.width,this.resolution.height)}getDensity(){return this.density}setDensity(e){this.density=e}get scrollSpeed(){return this.uniforms.get("scrollSpeed").value}set scrollSpeed(e){this.uniforms.get("scrollSpeed").value=e,0===e?this.defines.delete("SCROLL")&&this.setChanged():this.defines.has("SCROLL")||(this.defines.set("SCROLL","1"),this.setChanged())}setSize(e,t){this.resolution.set(e,t),this.uniforms.get("count").value=Math.round(t*this.density)}},em=class extends Z{constructor(e,t,r){super(r),this.setAttributes(this.getAttributes()|m.DEPTH),this.camera=t,this.depthPass=new eh(e,t),this.clearPass=new h(!0,!1,!1),this.clearPass.overrideClearColor=new i.Q1f(0),this.depthMaskPass=new Q(new ee);let s=this.depthMaskMaterial;s.copyCameraSettings(t),s.depthBuffer1=this.depthPass.texture,s.depthPacking1=i.N5j,s.depthMode=i.U3G,this.renderTargetMasked=new i.nWS(1,1,{depthBuffer:!1}),this.renderTargetMasked.texture.name="Bloom.Masked",this.selection=new _,this._inverted=!1,this._ignoreBackground=!1}set mainScene(e){this.depthPass.mainScene=e}set mainCamera(e){this.camera=e,this.depthPass.mainCamera=e,this.depthMaskMaterial.copyCameraSettings(e)}getSelection(){return this.selection}get depthMaskMaterial(){return this.depthMaskPass.fullscreenMaterial}get inverted(){return this._inverted}set inverted(e){this._inverted=e,this.depthMaskMaterial.depthMode=e?i.bw0:i.U3G}isInverted(){return this.inverted}setInverted(e){this.inverted=e}get ignoreBackground(){return this._ignoreBackground}set ignoreBackground(e){this._ignoreBackground=e,this.depthMaskMaterial.maxDepthStrategy=e?q.DISCARD_MAX_DEPTH:q.KEEP_MAX_DEPTH}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(e){this.ignoreBackground=e}setDepthTexture(e,t=i.Rkk){this.depthMaskMaterial.depthBuffer0=e,this.depthMaskMaterial.depthPacking0=t}update(e,t,r){let i=this.camera,s=this.selection,n=this.inverted,a=t;if(this.ignoreBackground||!n||s.size>0){let r=i.layers.mask;i.layers.set(s.layer),this.depthPass.render(e),i.layers.mask=r,a=this.renderTargetMasked,this.clearPass.render(e,a),this.depthMaskPass.render(e,t,a)}super.update(e,a,r)}setSize(e,t){super.setSize(e,t),this.renderTargetMasked.setSize(e,t),this.depthPass.setSize(e,t)}initialize(e,t,r){super.initialize(e,t,r),this.clearPass.initialize(e,t,r),this.depthPass.initialize(e,t,r),this.depthMaskPass.initialize(e,t,r),null!==e&&e.capabilities.logarithmicDepthBuffer&&(this.depthMaskPass.fullscreenMaterial.defines.LOG_DEPTH="1"),void 0!==r&&(this.renderTargetMasked.texture.type=r,null!==e&&e.outputColorSpace===i.er$&&(this.renderTargetMasked.texture.colorSpace=i.er$))}},eg=`varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;
#if EDGE_DETECTION_MODE != 0
varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;
#endif
#if EDGE_DETECTION_MODE == 1
#include <common>
#endif
#if EDGE_DETECTION_MODE == 0 || PREDICATION_MODE == 1
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}vec3 gatherNeighbors(){float p=readDepth(vUv);float pLeft=readDepth(vUv0);float pTop=readDepth(vUv1);return vec3(p,pLeft,pTop);}
#elif PREDICATION_MODE == 2
uniform sampler2D predicationBuffer;vec3 gatherNeighbors(){float p=texture2D(predicationBuffer,vUv).r;float pLeft=texture2D(predicationBuffer,vUv0).r;float pTop=texture2D(predicationBuffer,vUv1).r;return vec3(p,pLeft,pTop);}
#endif
#if PREDICATION_MODE != 0
vec2 calculatePredicatedThreshold(){vec3 neighbours=gatherNeighbors();vec2 delta=abs(neighbours.xx-neighbours.yz);vec2 edges=step(PREDICATION_THRESHOLD,delta);return PREDICATION_SCALE*EDGE_THRESHOLD*(1.0-PREDICATION_STRENGTH*edges);}
#endif
#if EDGE_DETECTION_MODE != 0
uniform sampler2D inputBuffer;
#endif
void main(){
#if EDGE_DETECTION_MODE == 0
const vec2 threshold=vec2(DEPTH_THRESHOLD);
#elif PREDICATION_MODE != 0
vec2 threshold=calculatePredicatedThreshold();
#else
const vec2 threshold=vec2(EDGE_THRESHOLD);
#endif
#if EDGE_DETECTION_MODE == 0
vec3 neighbors=gatherNeighbors();vec2 delta=abs(neighbors.xx-vec2(neighbors.y,neighbors.z));vec2 edges=step(threshold,delta);if(dot(edges,vec2(1.0))==0.0){discard;}gl_FragColor=vec4(edges,0.0,1.0);
#elif EDGE_DETECTION_MODE == 1
float l=luminance(texture2D(inputBuffer,vUv).rgb);float lLeft=luminance(texture2D(inputBuffer,vUv0).rgb);float lTop=luminance(texture2D(inputBuffer,vUv1).rgb);vec4 delta;delta.xy=abs(l-vec2(lLeft,lTop));vec2 edges=step(threshold,delta.xy);if(dot(edges,vec2(1.0))==0.0){discard;}float lRight=luminance(texture2D(inputBuffer,vUv2).rgb);float lBottom=luminance(texture2D(inputBuffer,vUv3).rgb);delta.zw=abs(l-vec2(lRight,lBottom));vec2 maxDelta=max(delta.xy,delta.zw);float lLeftLeft=luminance(texture2D(inputBuffer,vUv4).rgb);float lTopTop=luminance(texture2D(inputBuffer,vUv5).rgb);delta.zw=abs(vec2(lLeft,lTop)-vec2(lLeftLeft,lTopTop));maxDelta=max(maxDelta.xy,delta.zw);float finalDelta=max(maxDelta.x,maxDelta.y);edges.xy*=step(finalDelta,LOCAL_CONTRAST_ADAPTATION_FACTOR*delta.xy);gl_FragColor=vec4(edges,0.0,1.0);
#elif EDGE_DETECTION_MODE == 2
vec4 delta;vec3 c=texture2D(inputBuffer,vUv).rgb;vec3 cLeft=texture2D(inputBuffer,vUv0).rgb;vec3 t=abs(c-cLeft);delta.x=max(max(t.r,t.g),t.b);vec3 cTop=texture2D(inputBuffer,vUv1).rgb;t=abs(c-cTop);delta.y=max(max(t.r,t.g),t.b);vec2 edges=step(threshold,delta.xy);if(dot(edges,vec2(1.0))==0.0){discard;}vec3 cRight=texture2D(inputBuffer,vUv2).rgb;t=abs(c-cRight);delta.z=max(max(t.r,t.g),t.b);vec3 cBottom=texture2D(inputBuffer,vUv3).rgb;t=abs(c-cBottom);delta.w=max(max(t.r,t.g),t.b);vec2 maxDelta=max(delta.xy,delta.zw);vec3 cLeftLeft=texture2D(inputBuffer,vUv4).rgb;t=abs(c-cLeftLeft);delta.z=max(max(t.r,t.g),t.b);vec3 cTopTop=texture2D(inputBuffer,vUv5).rgb;t=abs(c-cTopTop);delta.w=max(max(t.r,t.g),t.b);maxDelta=max(maxDelta.xy,delta.zw);float finalDelta=max(maxDelta.x,maxDelta.y);edges*=step(finalDelta,LOCAL_CONTRAST_ADAPTATION_FACTOR*delta.xy);gl_FragColor=vec4(edges,0.0,1.0);
#endif
}`,ex=`uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;
#if EDGE_DETECTION_MODE != 0
varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;
#endif
void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,0.0);vUv1=vUv+texelSize*vec2(0.0,-1.0);
#if EDGE_DETECTION_MODE != 0
vUv2=vUv+texelSize*vec2(1.0,0.0);vUv3=vUv+texelSize*vec2(0.0,1.0);vUv4=vUv+texelSize*vec2(-2.0,0.0);vUv5=vUv+texelSize*vec2(0.0,-2.0);
#endif
gl_Position=vec4(position.xy,1.0,1.0);}`,eE=(i.BKk,`#define sampleLevelZeroOffset(t, coord, offset) texture2D(t, coord + offset * texelSize)
#if __VERSION__ < 300
#define round(v) floor(v + 0.5)
#endif
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform lowp sampler2D areaTexture;uniform lowp sampler2D searchTexture;uniform vec2 texelSize;uniform vec2 resolution;varying vec2 vUv;varying vec4 vOffset[3];varying vec2 vPixCoord;void movec(const in bvec2 c,inout vec2 variable,const in vec2 value){if(c.x){variable.x=value.x;}if(c.y){variable.y=value.y;}}void movec(const in bvec4 c,inout vec4 variable,const in vec4 value){movec(c.xy,variable.xy,value.xy);movec(c.zw,variable.zw,value.zw);}vec2 decodeDiagBilinearAccess(in vec2 e){e.r=e.r*abs(5.0*e.r-5.0*0.75);return round(e);}vec4 decodeDiagBilinearAccess(in vec4 e){e.rb=e.rb*abs(5.0*e.rb-5.0*0.75);return round(e);}vec2 searchDiag1(const in vec2 texCoord,const in vec2 dir,out vec2 e){vec4 coord=vec4(texCoord,-1.0,1.0);vec3 t=vec3(texelSize,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(coord.z<float(MAX_SEARCH_STEPS_DIAG_INT-1)&&coord.w>0.9)){break;}coord.xyz=t*vec3(dir,1.0)+coord.xyz;e=texture2D(inputBuffer,coord.xy).rg;coord.w=dot(e,vec2(0.5));}return coord.zw;}vec2 searchDiag2(const in vec2 texCoord,const in vec2 dir,out vec2 e){vec4 coord=vec4(texCoord,-1.0,1.0);coord.x+=0.25*texelSize.x;vec3 t=vec3(texelSize,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(coord.z<float(MAX_SEARCH_STEPS_DIAG_INT-1)&&coord.w>0.9)){break;}coord.xyz=t*vec3(dir,1.0)+coord.xyz;e=texture2D(inputBuffer,coord.xy).rg;e=decodeDiagBilinearAccess(e);coord.w=dot(e,vec2(0.5));}return coord.zw;}vec2 areaDiag(const in vec2 dist,const in vec2 e,const in float offset){vec2 texCoord=vec2(AREATEX_MAX_DISTANCE_DIAG,AREATEX_MAX_DISTANCE_DIAG)*e+dist;texCoord=AREATEX_PIXEL_SIZE*texCoord+0.5*AREATEX_PIXEL_SIZE;texCoord.x+=0.5;texCoord.y+=AREATEX_SUBTEX_SIZE*offset;return texture2D(areaTexture,texCoord).rg;}vec2 calculateDiagWeights(const in vec2 texCoord,const in vec2 e,const in vec4 subsampleIndices){vec2 weights=vec2(0.0);vec4 d;vec2 end;if(e.r>0.0){d.xz=searchDiag1(texCoord,vec2(-1.0,1.0),end);d.x+=float(end.y>0.9);}else{d.xz=vec2(0.0);}d.yw=searchDiag1(texCoord,vec2(1.0,-1.0),end);if(d.x+d.y>2.0){vec4 coords=vec4(-d.x+0.25,d.x,d.y,-d.y-0.25)*texelSize.xyxy+texCoord.xyxy;vec4 c;c.xy=sampleLevelZeroOffset(inputBuffer,coords.xy,vec2(-1,0)).rg;c.zw=sampleLevelZeroOffset(inputBuffer,coords.zw,vec2(1,0)).rg;c.yxwz=decodeDiagBilinearAccess(c.xyzw);vec2 cc=vec2(2.0)*c.xz+c.yw;movec(bvec2(step(0.9,d.zw)),cc,vec2(0.0));weights+=areaDiag(d.xy,cc,subsampleIndices.z);}d.xz=searchDiag2(texCoord,vec2(-1.0,-1.0),end);if(sampleLevelZeroOffset(inputBuffer,texCoord,vec2(1,0)).r>0.0){d.yw=searchDiag2(texCoord,vec2(1.0),end);d.y+=float(end.y>0.9);}else{d.yw=vec2(0.0);}if(d.x+d.y>2.0){vec4 coords=vec4(-d.x,-d.x,d.y,d.y)*texelSize.xyxy+texCoord.xyxy;vec4 c;c.x=sampleLevelZeroOffset(inputBuffer,coords.xy,vec2(-1,0)).g;c.y=sampleLevelZeroOffset(inputBuffer,coords.xy,vec2(0,-1)).r;c.zw=sampleLevelZeroOffset(inputBuffer,coords.zw,vec2(1,0)).gr;vec2 cc=vec2(2.0)*c.xz+c.yw;movec(bvec2(step(0.9,d.zw)),cc,vec2(0.0));weights+=areaDiag(d.xy,cc,subsampleIndices.w).gr;}return weights;}float searchLength(const in vec2 e,const in float offset){vec2 scale=SEARCHTEX_SIZE*vec2(0.5,-1.0);vec2 bias=SEARCHTEX_SIZE*vec2(offset,1.0);scale+=vec2(-1.0,1.0);bias+=vec2(0.5,-0.5);scale*=1.0/SEARCHTEX_PACKED_SIZE;bias*=1.0/SEARCHTEX_PACKED_SIZE;return texture2D(searchTexture,scale*e+bias).r;}float searchXLeft(in vec2 texCoord,const in float end){vec2 e=vec2(0.0,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(texCoord.x>end&&e.g>0.8281&&e.r==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=vec2(-2.0,0.0)*texelSize+texCoord;}float offset=-(255.0/127.0)*searchLength(e,0.0)+3.25;return texelSize.x*offset+texCoord.x;}float searchXRight(vec2 texCoord,const in float end){vec2 e=vec2(0.0,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(texCoord.x<end&&e.g>0.8281&&e.r==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=vec2(2.0,0.0)*texelSize.xy+texCoord;}float offset=-(255.0/127.0)*searchLength(e,0.5)+3.25;return-texelSize.x*offset+texCoord.x;}float searchYUp(vec2 texCoord,const in float end){vec2 e=vec2(1.0,0.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(texCoord.y>end&&e.r>0.8281&&e.g==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=-vec2(0.0,2.0)*texelSize.xy+texCoord;}float offset=-(255.0/127.0)*searchLength(e.gr,0.0)+3.25;return texelSize.y*offset+texCoord.y;}float searchYDown(vec2 texCoord,const in float end){vec2 e=vec2(1.0,0.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;i++){if(!(texCoord.y<end&&e.r>0.8281&&e.g==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=vec2(0.0,2.0)*texelSize.xy+texCoord;}float offset=-(255.0/127.0)*searchLength(e.gr,0.5)+3.25;return-texelSize.y*offset+texCoord.y;}vec2 area(const in vec2 dist,const in float e1,const in float e2,const in float offset){vec2 texCoord=vec2(AREATEX_MAX_DISTANCE)*round(4.0*vec2(e1,e2))+dist;texCoord=AREATEX_PIXEL_SIZE*texCoord+0.5*AREATEX_PIXEL_SIZE;texCoord.y=AREATEX_SUBTEX_SIZE*offset+texCoord.y;return texture2D(areaTexture,texCoord).rg;}void detectHorizontalCornerPattern(inout vec2 weights,const in vec4 texCoord,const in vec2 d){
#if !defined(DISABLE_CORNER_DETECTION)
vec2 leftRight=step(d.xy,d.yx);vec2 rounding=(1.0-CORNER_ROUNDING_NORM)*leftRight;rounding/=leftRight.x+leftRight.y;vec2 factor=vec2(1.0);factor.x-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(0,1)).r;factor.x-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(1,1)).r;factor.y-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(0,-2)).r;factor.y-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(1,-2)).r;weights*=clamp(factor,0.0,1.0);
#endif
}void detectVerticalCornerPattern(inout vec2 weights,const in vec4 texCoord,const in vec2 d){
#if !defined(DISABLE_CORNER_DETECTION)
vec2 leftRight=step(d.xy,d.yx);vec2 rounding=(1.0-CORNER_ROUNDING_NORM)*leftRight;rounding/=leftRight.x+leftRight.y;vec2 factor=vec2(1.0);factor.x-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(1,0)).g;factor.x-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(1,1)).g;factor.y-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(-2,0)).g;factor.y-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(-2,1)).g;weights*=clamp(factor,0.0,1.0);
#endif
}void main(){vec4 weights=vec4(0.0);vec4 subsampleIndices=vec4(0.0);vec2 e=texture2D(inputBuffer,vUv).rg;if(e.g>0.0){
#if !defined(DISABLE_DIAG_DETECTION)
weights.rg=calculateDiagWeights(vUv,e,subsampleIndices);if(weights.r==-weights.g){
#endif
vec2 d;vec3 coords;coords.x=searchXLeft(vOffset[0].xy,vOffset[2].x);coords.y=vOffset[1].y;d.x=coords.x;float e1=texture2D(inputBuffer,coords.xy).r;coords.z=searchXRight(vOffset[0].zw,vOffset[2].y);d.y=coords.z;d=round(resolution.xx*d+-vPixCoord.xx);vec2 sqrtD=sqrt(abs(d));float e2=sampleLevelZeroOffset(inputBuffer,coords.zy,vec2(1,0)).r;weights.rg=area(sqrtD,e1,e2,subsampleIndices.y);coords.y=vUv.y;detectHorizontalCornerPattern(weights.rg,coords.xyzy,d);
#if !defined(DISABLE_DIAG_DETECTION)
}else{e.r=0.0;}
#endif
}if(e.r>0.0){vec2 d;vec3 coords;coords.y=searchYUp(vOffset[1].xy,vOffset[2].z);coords.x=vOffset[0].x;d.x=coords.y;float e1=texture2D(inputBuffer,coords.xy).g;coords.z=searchYDown(vOffset[1].zw,vOffset[2].w);d.y=coords.z;d=round(resolution.yy*d-vPixCoord.yy);vec2 sqrtD=sqrt(abs(d));float e2=sampleLevelZeroOffset(inputBuffer,coords.xz,vec2(0,1)).g;weights.ba=area(sqrtD,e1,e2,subsampleIndices.x);coords.x=vUv.x;detectVerticalCornerPattern(weights.ba,coords.xyxz,d);}gl_FragColor=weights;}`),eS=(i.BKk,`#include <common>
#include <packing>
#ifdef NORMAL_DEPTH
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D normalDepthBuffer;
#else
uniform mediump sampler2D normalDepthBuffer;
#endif
float readDepth(const in vec2 uv){return texture2D(normalDepthBuffer,uv).a;}
#else
uniform lowp sampler2D normalBuffer;
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}
#endif
uniform lowp sampler2D noiseTexture;uniform mat4 inverseProjectionMatrix;uniform mat4 projectionMatrix;uniform vec2 texelSize;uniform vec2 cameraNearFar;uniform float intensity;uniform float minRadiusScale;uniform float fade;uniform float bias;uniform vec2 distanceCutoff;uniform vec2 proximityCutoff;varying vec2 vUv;varying vec2 vUv2;float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNearFar.x,cameraNearFar.y);
#else
return orthographicDepthToViewZ(depth,cameraNearFar.x,cameraNearFar.y);
#endif
}vec3 getViewPosition(const in vec2 screenPosition,const in float depth,const in float viewZ){vec4 clipPosition=vec4(vec3(screenPosition,depth)*2.0-1.0,1.0);float clipW=projectionMatrix[2][3]*viewZ+projectionMatrix[3][3];clipPosition*=clipW;return(inverseProjectionMatrix*clipPosition).xyz;}float getAmbientOcclusion(const in vec3 p,const in vec3 n,const in float depth,const in vec2 uv){float radiusScale=1.0-smoothstep(0.0,distanceCutoff.y,depth);radiusScale=radiusScale*(1.0-minRadiusScale)+minRadiusScale;float radius=RADIUS*radiusScale;float noise=texture2D(noiseTexture,vUv2).r;float baseAngle=noise*PI2;float rings=SPIRAL_TURNS*PI2;float occlusion=0.0;int taps=0;for(int i=0;i<SAMPLES_INT;++i){float alpha=(float(i)+0.5)*INV_SAMPLES_FLOAT;float angle=alpha*rings+baseAngle;vec2 rotation=vec2(cos(angle),sin(angle));vec2 coords=alpha*radius*rotation*texelSize+uv;if(coords.s<0.0||coords.s>1.0||coords.t<0.0||coords.t>1.0){continue;}float sampleDepth=readDepth(coords);float viewZ=getViewZ(sampleDepth);
#ifdef PERSPECTIVE_CAMERA
float linearSampleDepth=viewZToOrthographicDepth(viewZ,cameraNearFar.x,cameraNearFar.y);
#else
float linearSampleDepth=sampleDepth;
#endif
float proximity=abs(depth-linearSampleDepth);if(proximity<proximityCutoff.y){float falloff=1.0-smoothstep(proximityCutoff.x,proximityCutoff.y,proximity);vec3 Q=getViewPosition(coords,sampleDepth,viewZ);vec3 v=Q-p;float vv=dot(v,v);float vn=dot(v,n)-bias;float f=max(RADIUS_SQ-vv,0.0)/RADIUS_SQ;occlusion+=(f*f*f*max(vn/(fade+vv),0.0))*falloff;}++taps;}return occlusion/(4.0*max(float(taps),1.0));}void main(){
#ifdef NORMAL_DEPTH
vec4 normalDepth=texture2D(normalDepthBuffer,vUv);
#else
vec4 normalDepth=vec4(texture2D(normalBuffer,vUv).xyz,readDepth(vUv));
#endif
float ao=0.0;float depth=normalDepth.a;float viewZ=getViewZ(depth);
#ifdef PERSPECTIVE_CAMERA
float linearDepth=viewZToOrthographicDepth(viewZ,cameraNearFar.x,cameraNearFar.y);
#else
float linearDepth=depth;
#endif
if(linearDepth<distanceCutoff.y){vec3 viewPosition=getViewPosition(vUv,depth,viewZ);vec3 viewNormal=unpackRGBToNormal(normalDepth.rgb);ao+=getAmbientOcclusion(viewPosition,viewNormal,linearDepth,vUv);float d=smoothstep(distanceCutoff.x,distanceCutoff.y,linearDepth);ao=mix(ao,0.0,d);
#ifdef LEGACY_INTENSITY
ao=clamp(1.0-pow(1.0-ao,abs(intensity)),0.0,1.0);
#endif
}gl_FragColor.r=ao;}`),eT=(i.BKk,`#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
#ifdef DOWNSAMPLE_NORMALS
uniform lowp sampler2D normalBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}int findBestDepth(const in float samples[4]){float c=(samples[0]+samples[1]+samples[2]+samples[3])*0.25;float distances[4];distances[0]=abs(c-samples[0]);distances[1]=abs(c-samples[1]);distances[2]=abs(c-samples[2]);distances[3]=abs(c-samples[3]);float maxDistance=max(max(distances[0],distances[1]),max(distances[2],distances[3]));int remaining[3];int rejected[3];int i,j,k;for(i=0,j=0,k=0;i<4;++i){if(distances[i]<maxDistance){remaining[j++]=i;}else{rejected[k++]=i;}}for(;j<3;++j){remaining[j]=rejected[--k];}vec3 s=vec3(samples[remaining[0]],samples[remaining[1]],samples[remaining[2]]);c=(s.x+s.y+s.z)/3.0;distances[0]=abs(c-s.x);distances[1]=abs(c-s.y);distances[2]=abs(c-s.z);float minDistance=min(distances[0],min(distances[1],distances[2]));for(i=0;i<3;++i){if(distances[i]==minDistance){break;}}return remaining[i];}void main(){float d[4];d[0]=readDepth(vUv0);d[1]=readDepth(vUv1);d[2]=readDepth(vUv2);d[3]=readDepth(vUv3);int index=findBestDepth(d);
#ifdef DOWNSAMPLE_NORMALS
vec3 n[4];n[0]=texture2D(normalBuffer,vUv0).rgb;n[1]=texture2D(normalBuffer,vUv1).rgb;n[2]=texture2D(normalBuffer,vUv2).rgb;n[3]=texture2D(normalBuffer,vUv3).rgb;
#else
vec3 n[4];n[0]=vec3(0.0);n[1]=vec3(0.0);n[2]=vec3(0.0);n[3]=vec3(0.0);
#endif
gl_FragColor=vec4(n[index],d[index]);}`),ey=class extends i.BKk{constructor(){super({name:"DepthDownsamplingMaterial",defines:{DEPTH_PACKING:"0"},uniforms:{depthBuffer:new i.nc$(null),normalBuffer:new i.nc$(null),texelSize:new i.nc$(new i.I9Y)},blending:i.XIg,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:eT,vertexShader:"uniform vec2 texelSize;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vUv0=uv;vUv1=vec2(uv.x,uv.y+texelSize.y);vUv2=vec2(uv.x+texelSize.x,uv.y);vUv3=uv+texelSize;gl_Position=vec4(position.xy,1.0,1.0);}"})}set depthBuffer(e){this.uniforms.depthBuffer.value=e}set depthPacking(e){this.defines.DEPTH_PACKING=e.toFixed(0),this.needsUpdate=!0}setDepthBuffer(e,t=i.Rkk){this.depthBuffer=e,this.depthPacking=t}set normalBuffer(e){this.uniforms.normalBuffer.value=e,null!==e?this.defines.DOWNSAMPLE_NORMALS="1":delete this.defines.DOWNSAMPLE_NORMALS,this.needsUpdate=!0}setNormalBuffer(e){this.normalBuffer=e}setTexelSize(e,t){this.uniforms.texelSize.value.set(e,t)}setSize(e,t){this.uniforms.texelSize.value.set(1/e,1/t)}},eU=class extends a{constructor({normalBuffer:e=null,resolutionScale:t=.5,width:r=U.AUTO_SIZE,height:s=U.AUTO_SIZE,resolutionX:n=r,resolutionY:a=s}={}){super("DepthDownsamplingPass");let o=new ey;o.normalBuffer=e,this.fullscreenMaterial=o,this.needsDepthTexture=!0,this.needsSwap=!1,this.renderTarget=new i.nWS(1,1,{minFilter:i.hxR,magFilter:i.hxR,depthBuffer:!1,type:i.RQf}),this.renderTarget.texture.name="DepthDownsamplingPass.Target",this.renderTarget.texture.generateMipmaps=!1;let l=this.resolution=new U(this,n,a,t);l.addEventListener("change",e=>this.setSize(l.baseWidth,l.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}setDepthTexture(e,t=i.Rkk){this.fullscreenMaterial.depthBuffer=e,this.fullscreenMaterial.depthPacking=t}render(e,t,r,i,s){e.setRenderTarget(this.renderToScreen?null:this.renderTarget),e.render(this.scene,this.camera)}setSize(e,t){let r=this.resolution;r.setBaseSize(e,t),this.renderTarget.setSize(r.width,r.height),this.fullscreenMaterial.setSize(e,t)}initialize(e,t,r){let i=e.getContext();if(!(i.getExtension("EXT_color_buffer_float")||i.getExtension("EXT_color_buffer_half_float")))throw Error("Rendering to float texture is not supported.")}},eD=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform vec4 maskParams;varying vec2 vUv;varying vec2 vUv2;varying vec2 vOffset;float linearGradientMask(const in float x){return smoothstep(maskParams.x,maskParams.y,x)-smoothstep(maskParams.w,maskParams.z,x);}void main(){vec2 dUv=vOffset*(1.0-linearGradientMask(vUv2.y));vec4 sum=texture2D(inputBuffer,vec2(vUv.x-dUv.x,vUv.y+dUv.y));sum+=texture2D(inputBuffer,vec2(vUv.x+dUv.x,vUv.y+dUv.y));sum+=texture2D(inputBuffer,vec2(vUv.x+dUv.x,vUv.y-dUv.y));sum+=texture2D(inputBuffer,vec2(vUv.x-dUv.x,vUv.y-dUv.y));gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`,e_=class extends C{constructor({kernelSize:e=M.MEDIUM,offset:t=0,rotation:r=0,focusArea:s=.4,feather:n=.3}={}){super(),this.fragmentShader=eD,this.vertexShader="uniform vec4 texelSize;uniform float kernel;uniform float scale;uniform float aspect;uniform vec2 rotation;varying vec2 vUv;varying vec2 vUv2;varying vec2 vOffset;void main(){vec2 uv=position.xy*0.5+0.5;vUv=uv;vUv2=(uv-0.5)*2.0*vec2(aspect,1.0);vUv2=vec2(dot(rotation,vUv2),dot(rotation,vec2(vUv2.y,-vUv2.x)));vOffset=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;gl_Position=vec4(position.xy,1.0,1.0);}",this.kernelSize=e,this.uniforms.aspect=new i.nc$(1),this.uniforms.rotation=new i.nc$(new i.I9Y),this.uniforms.maskParams=new i.nc$(new i.IUQ),this._offset=t,this._focusArea=s,this._feather=n,this.rotation=r,this.updateParams()}updateParams(){let e=this.uniforms.maskParams.value,t=Math.max(this.focusArea,0),r=Math.max(t-this.feather,0);e.set(this.offset-t,this.offset-r,this.offset+t,this.offset+r)}get rotation(){return Math.acos(this.uniforms.rotation.value.x)}set rotation(e){this.uniforms.rotation.value.set(Math.cos(e),Math.sin(e))}get offset(){return this._offset}set offset(e){this._offset=e,this.updateParams()}get focusArea(){return this._focusArea}set focusArea(e){this._focusArea=e,this.updateParams()}get feather(){return this._feather}set feather(e){this._feather=e,this.updateParams()}setSize(e,t){super.setSize(e,t),this.uniforms.aspect.value=e/t}},eA=class extends b{constructor({offset:e=0,rotation:t=0,focusArea:r=.4,feather:i=.3,kernelSize:s=M.MEDIUM,resolutionScale:n=.5,resolutionX:a=U.AUTO_SIZE,resolutionY:o=U.AUTO_SIZE}={}){super({kernelSize:s,resolutionScale:n,resolutionX:a,resolutionY:o}),this.blurMaterial=new e_({kernelSize:s,offset:e,rotation:t,focusArea:r,feather:i})}},ew=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform vec2 maskParams;varying vec2 vUv2;float linearGradientMask(const in float x){return step(maskParams.x,x)-step(maskParams.y,x);}void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){float mask=linearGradientMask(vUv2.y);vec4 texel=texture2D(map,uv);outputColor=mix(texel,inputColor,mask);}`,eR=class extends B{constructor({blendFunction:e,offset:t=0,rotation:r=0,focusArea:s=.4,feather:n=.3,kernelSize:a=M.MEDIUM,resolutionScale:o=.5,resolutionX:l=U.AUTO_SIZE,resolutionY:u=U.AUTO_SIZE}={}){super("TiltShiftEffect",ew,{vertexShader:"uniform vec2 rotation;varying vec2 vUv2;void mainSupport(const in vec2 uv){vUv2=(uv-0.5)*2.0*vec2(aspect,1.0);vUv2=vec2(dot(rotation,vUv2),dot(rotation,vec2(vUv2.y,-vUv2.x)));}",blendFunction:e,uniforms:new Map([["rotation",new i.nc$(new i.I9Y)],["maskParams",new i.nc$(new i.I9Y)],["map",new i.nc$(null)]])}),this._offset=t,this._focusArea=s,this._feather=n,this.renderTarget=new i.nWS(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="TiltShift.Target",this.uniforms.get("map").value=this.renderTarget.texture,this.blurPass=new eA({kernelSize:a,resolutionScale:o,resolutionX:l,resolutionY:u,offset:t,rotation:r,focusArea:s,feather:n});let c=this.resolution=new U(this,l,u,o);c.addEventListener("change",e=>this.setSize(c.baseWidth,c.baseHeight)),this.rotation=r,this.updateParams()}updateParams(){let e=this.uniforms.get("maskParams").value,t=Math.max(this.focusArea-this.feather,0);e.set(this.offset-t,this.offset+t)}get rotation(){return Math.acos(this.uniforms.get("rotation").value.x)}set rotation(e){this.uniforms.get("rotation").value.set(Math.cos(e),Math.sin(e)),this.blurPass.blurMaterial.rotation=e}get offset(){return this._offset}set offset(e){this._offset=e,this.blurPass.blurMaterial.offset=e,this.updateParams()}get focusArea(){return this._focusArea}set focusArea(e){this._focusArea=e,this.blurPass.blurMaterial.focusArea=e,this.updateParams()}get feather(){return this._feather}set feather(e){this._feather=e,this.blurPass.blurMaterial.feather=e,this.updateParams()}get bias(){return 0}set bias(e){}update(e,t,r){this.blurPass.render(e,t,this.renderTarget)}setSize(e,t){let r=this.resolution;r.setBaseSize(e,t),this.renderTarget.setSize(r.width,r.height),this.blurPass.resolution.copy(r)}initialize(e,t,r){this.blurPass.initialize(e,t,r),void 0!==r&&(this.renderTarget.texture.type=r,null!==e&&e.outputColorSpace===i.er$&&(this.renderTarget.texture.colorSpace=i.er$))}},eB=`#include <packing>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
uniform lowp sampler2D luminanceBuffer0;uniform lowp sampler2D luminanceBuffer1;uniform float minLuminance;uniform float deltaTime;uniform float tau;varying vec2 vUv;void main(){float l0=unpackRGBAToFloat(texture2D(luminanceBuffer0,vUv));
#if __VERSION__ < 300
float l1=texture2DLodEXT(luminanceBuffer1,vUv,MIP_LEVEL_1X1).r;
#else
float l1=textureLod(luminanceBuffer1,vUv,MIP_LEVEL_1X1).r;
#endif
l0=max(minLuminance,l0);l1=max(minLuminance,l1);float adaptedLum=l0+(l1-l0)*(1.0-exp(-deltaTime*tau));gl_FragColor=(adaptedLum==1.0)?vec4(1.0):packFloatToRGBA(adaptedLum);}`,eM=class extends i.BKk{constructor(){super({name:"AdaptiveLuminanceMaterial",defines:{MIP_LEVEL_1X1:"0.0"},uniforms:{luminanceBuffer0:new i.nc$(null),luminanceBuffer1:new i.nc$(null),minLuminance:new i.nc$(.01),deltaTime:new i.nc$(0),tau:new i.nc$(1)},extensions:{shaderTextureLOD:!0},blending:i.XIg,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:eB,vertexShader:u})}set luminanceBuffer0(e){this.uniforms.luminanceBuffer0.value=e}setLuminanceBuffer0(e){this.uniforms.luminanceBuffer0.value=e}set luminanceBuffer1(e){this.uniforms.luminanceBuffer1.value=e}setLuminanceBuffer1(e){this.uniforms.luminanceBuffer1.value=e}set mipLevel1x1(e){this.defines.MIP_LEVEL_1X1=e.toFixed(1),this.needsUpdate=!0}setMipLevel1x1(e){this.mipLevel1x1=e}set deltaTime(e){this.uniforms.deltaTime.value=e}setDeltaTime(e){this.uniforms.deltaTime.value=e}get minLuminance(){return this.uniforms.minLuminance.value}set minLuminance(e){this.uniforms.minLuminance.value=e}getMinLuminance(){return this.uniforms.minLuminance.value}setMinLuminance(e){this.uniforms.minLuminance.value=e}get adaptationRate(){return this.uniforms.tau.value}set adaptationRate(e){this.uniforms.tau.value=e}getAdaptationRate(){return this.uniforms.tau.value}setAdaptationRate(e){this.uniforms.tau.value=e}},eP=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef BILATERAL
#include <packing>
uniform vec2 cameraNearFar;
#ifdef NORMAL_DEPTH
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D normalDepthBuffer;
#else
uniform mediump sampler2D normalDepthBuffer;
#endif
float readDepth(const in vec2 uv){return texture2D(normalDepthBuffer,uv).a;}
#else
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}
#endif
float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNearFar.x,cameraNearFar.y);
#else
return orthographicDepthToViewZ(depth,cameraNearFar.x,cameraNearFar.y);
#endif
}
#ifdef PERSPECTIVE_CAMERA
#define linearDepth(v) viewZToOrthographicDepth(getViewZ(readDepth(v)), cameraNearFar.x, cameraNearFar.y)
#else
#define linearDepth(v) readDepth(v)
#endif
#endif
#define getTexel(v) texture2D(inputBuffer, v)
#if KERNEL_SIZE == 3
varying vec2 vUv00,vUv01,vUv02;varying vec2 vUv03,vUv04,vUv05;varying vec2 vUv06,vUv07,vUv08;
#elif KERNEL_SIZE == 5 && MAX_VARYING_VECTORS >= 13
varying vec2 vUv00,vUv01,vUv02,vUv03,vUv04;varying vec2 vUv05,vUv06,vUv07,vUv08,vUv09;varying vec2 vUv10,vUv11,vUv12,vUv13,vUv14;varying vec2 vUv15,vUv16,vUv17,vUv18,vUv19;varying vec2 vUv20,vUv21,vUv22,vUv23,vUv24;
#else
uniform vec2 texelSize;uniform float scale;varying vec2 vUv;
#endif
void main(){
#if KERNEL_SIZE == 3
vec4 c[]=vec4[KERNEL_SIZE_SQ](getTexel(vUv00),getTexel(vUv01),getTexel(vUv02),getTexel(vUv03),getTexel(vUv04),getTexel(vUv05),getTexel(vUv06),getTexel(vUv07),getTexel(vUv08));
#ifdef BILATERAL
float z[]=float[KERNEL_SIZE_SQ](linearDepth(vUv00),linearDepth(vUv01),linearDepth(vUv02),linearDepth(vUv03),linearDepth(vUv04),linearDepth(vUv05),linearDepth(vUv06),linearDepth(vUv07),linearDepth(vUv08));
#endif
#elif KERNEL_SIZE == 5 && MAX_VARYING_VECTORS >= 13
vec4 c[]=vec4[KERNEL_SIZE_SQ](getTexel(vUv00),getTexel(vUv01),getTexel(vUv02),getTexel(vUv03),getTexel(vUv04),getTexel(vUv05),getTexel(vUv06),getTexel(vUv07),getTexel(vUv08),getTexel(vUv09),getTexel(vUv10),getTexel(vUv11),getTexel(vUv12),getTexel(vUv13),getTexel(vUv14),getTexel(vUv15),getTexel(vUv16),getTexel(vUv17),getTexel(vUv18),getTexel(vUv19),getTexel(vUv20),getTexel(vUv21),getTexel(vUv22),getTexel(vUv23),getTexel(vUv24));
#ifdef BILATERAL
float z[]=float[KERNEL_SIZE_SQ](linearDepth(vUv00),linearDepth(vUv01),linearDepth(vUv02),linearDepth(vUv03),linearDepth(vUv04),linearDepth(vUv05),linearDepth(vUv06),linearDepth(vUv07),linearDepth(vUv08),linearDepth(vUv09),linearDepth(vUv10),linearDepth(vUv11),linearDepth(vUv12),linearDepth(vUv13),linearDepth(vUv14),linearDepth(vUv15),linearDepth(vUv16),linearDepth(vUv17),linearDepth(vUv18),linearDepth(vUv19),linearDepth(vUv20),linearDepth(vUv21),linearDepth(vUv22),linearDepth(vUv23),linearDepth(vUv24));
#endif
#endif
vec4 result=vec4(0.0);
#ifdef BILATERAL
float w=0.0;
#if KERNEL_SIZE == 3 || (KERNEL_SIZE == 5 && MAX_VARYING_VECTORS >= 13)
float centerDepth=z[KERNEL_SIZE_SQ_HALF];for(int i=0;i<KERNEL_SIZE_SQ;++i){float d=step(abs(z[i]-centerDepth),DISTANCE_THRESHOLD);result+=c[i]*d;w+=d;}
#else
float centerDepth=linearDepth(vUv);vec2 s=texelSize*scale;for(int x=-KERNEL_SIZE_HALF;x<=KERNEL_SIZE_HALF;++x){for(int y=-KERNEL_SIZE_HALF;y<=KERNEL_SIZE_HALF;++y){vec2 coords=vUv+vec2(x,y)*s;vec4 c=getTexel(coords);float z=(x==0&&y==0)?centerDepth:linearDepth(coords);float d=step(abs(z-centerDepth),DISTANCE_THRESHOLD);result+=c*d;w+=d;}}
#endif
gl_FragColor=result/max(w,1.0);
#else
#if KERNEL_SIZE == 3 || (KERNEL_SIZE == 5 && MAX_VARYING_VECTORS >= 13)
for(int i=0;i<KERNEL_SIZE_SQ;++i){result+=c[i];}
#else
vec2 s=texelSize*scale;for(int x=-KERNEL_SIZE_HALF;x<=KERNEL_SIZE_HALF;++x){for(int y=-KERNEL_SIZE_HALF;y<=KERNEL_SIZE_HALF;++y){result+=getTexel(uv+vec2(x,y)*s);}}
#endif
gl_FragColor=result*INV_KERNEL_SIZE_SQ;
#endif
}`,eI=`uniform vec2 texelSize;uniform float scale;
#if KERNEL_SIZE == 3
varying vec2 vUv00,vUv01,vUv02;varying vec2 vUv03,vUv04,vUv05;varying vec2 vUv06,vUv07,vUv08;
#elif KERNEL_SIZE == 5 && MAX_VARYING_VECTORS >= 13
varying vec2 vUv00,vUv01,vUv02,vUv03,vUv04;varying vec2 vUv05,vUv06,vUv07,vUv08,vUv09;varying vec2 vUv10,vUv11,vUv12,vUv13,vUv14;varying vec2 vUv15,vUv16,vUv17,vUv18,vUv19;varying vec2 vUv20,vUv21,vUv22,vUv23,vUv24;
#else
varying vec2 vUv;
#endif
void main(){vec2 uv=position.xy*0.5+0.5;
#if KERNEL_SIZE == 3
vec2 s=texelSize*scale;vUv00=uv+s*vec2(-1.0,-1.0);vUv01=uv+s*vec2(0.0,-1.0);vUv02=uv+s*vec2(1.0,-1.0);vUv03=uv+s*vec2(-1.0,0.0);vUv04=uv;vUv05=uv+s*vec2(1.0,0.0);vUv06=uv+s*vec2(-1.0,1.0);vUv07=uv+s*vec2(0.0,1.0);vUv08=uv+s*vec2(1.0,1.0);
#elif KERNEL_SIZE == 5
vec2 s=texelSize*scale;vUv00=uv+s*vec2(-2.0,-2.0);vUv01=uv+s*vec2(-1.0,-2.0);vUv02=uv+s*vec2(0.0,-2.0);vUv03=uv+s*vec2(1.0,-2.0);vUv04=uv+s*vec2(2.0,-2.0);vUv05=uv+s*vec2(-2.0,-1.0);vUv06=uv+s*vec2(-1.0,-1.0);vUv07=uv+s*vec2(0.0,-1.0);vUv08=uv+s*vec2(1.0,-1.0);vUv09=uv+s*vec2(2.0,-1.0);vUv10=uv+s*vec2(-2.0,0.0);vUv11=uv+s*vec2(-1.0,0.0);vUv12=uv;vUv13=uv+s*vec2(1.0,0.0);vUv14=uv+s*vec2(2.0,0.0);vUv15=uv+s*vec2(-2.0,1.0);vUv16=uv+s*vec2(-1.0,1.0);vUv17=uv+s*vec2(0.0,1.0);vUv18=uv+s*vec2(1.0,1.0);vUv19=uv+s*vec2(2.0,1.0);vUv20=uv+s*vec2(-2.0,2.0);vUv21=uv+s*vec2(-1.0,2.0);vUv22=uv+s*vec2(0.0,2.0);vUv23=uv+s*vec2(1.0,2.0);vUv24=uv+s*vec2(2.0,2.0);
#else
vUv=uv;
#endif
gl_Position=vec4(position.xy,1.0,1.0);}`,eC=(i.BKk,`#include <packing>
varying vec2 vUv;
#ifdef NORMAL_DEPTH
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D normalDepthBuffer;
#else
uniform mediump sampler2D normalDepthBuffer;
#endif
float readDepth(const in vec2 uv){return texture2D(normalDepthBuffer,uv).a;}
#else
#if INPUT_DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if INPUT_DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}
#endif
void main(){
#if INPUT_DEPTH_PACKING == OUTPUT_DEPTH_PACKING
gl_FragColor=texture2D(depthBuffer,vUv);
#else
float depth=readDepth(vUv);
#if OUTPUT_DEPTH_PACKING == 3201
gl_FragColor=(depth==1.0)?vec4(1.0):packDepthToRGBA(depth);
#else
gl_FragColor=vec4(vec3(depth),1.0);
#endif
#endif
}`),eb=`varying vec2 vUv;
#if DEPTH_COPY_MODE == 1
uniform vec2 texelPosition;
#endif
void main(){
#if DEPTH_COPY_MODE == 1
vUv=texelPosition;
#else
vUv=position.xy*0.5+0.5;
#endif
gl_Position=vec4(position.xy,1.0,1.0);}`,eN=class extends i.BKk{constructor(){super({name:"DepthCopyMaterial",defines:{INPUT_DEPTH_PACKING:"0",OUTPUT_DEPTH_PACKING:"0",DEPTH_COPY_MODE:"0"},uniforms:{depthBuffer:new i.nc$(null),texelPosition:new i.nc$(new i.I9Y)},blending:i.XIg,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:eC,vertexShader:eb}),this.depthCopyMode=eo.FULL}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(e){this.uniforms.depthBuffer.value=e}set inputDepthPacking(e){this.defines.INPUT_DEPTH_PACKING=e.toFixed(0),this.needsUpdate=!0}get outputDepthPacking(){return Number(this.defines.OUTPUT_DEPTH_PACKING)}set outputDepthPacking(e){this.defines.OUTPUT_DEPTH_PACKING=e.toFixed(0),this.needsUpdate=!0}setDepthBuffer(e,t=i.Rkk){this.depthBuffer=e,this.inputDepthPacking=t}getInputDepthPacking(){return Number(this.defines.INPUT_DEPTH_PACKING)}setInputDepthPacking(e){this.defines.INPUT_DEPTH_PACKING=e.toFixed(0),this.needsUpdate=!0}getOutputDepthPacking(){return Number(this.defines.OUTPUT_DEPTH_PACKING)}setOutputDepthPacking(e){this.defines.OUTPUT_DEPTH_PACKING=e.toFixed(0),this.needsUpdate=!0}get texelPosition(){return this.uniforms.texelPosition.value}getTexelPosition(){return this.uniforms.texelPosition.value}setTexelPosition(e){this.uniforms.texelPosition.value=e}get mode(){return this.depthCopyMode}set mode(e){this.depthCopyMode=e,this.defines.DEPTH_COPY_MODE=e.toFixed(0),this.needsUpdate=!0}getMode(){return this.mode}setMode(e){this.mode=e}},eF=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,ez=class extends i.BKk{constructor(e,t,r,s,n=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:i.sPf.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new i.nc$(null),depthBuffer:new i.nc$(null),resolution:new i.nc$(new i.I9Y),texelSize:new i.nc$(new i.I9Y),cameraNear:new i.nc$(.3),cameraFar:new i.nc$(1e3),aspect:new i.nc$(1),time:new i.nc$(0)},blending:i.XIg,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:n}),e&&this.setShaderParts(e),t&&this.setDefines(t),r&&this.setUniforms(r),this.copyCameraSettings(s)}set inputBuffer(e){this.uniforms.inputBuffer.value=e}setInputBuffer(e){this.uniforms.inputBuffer.value=e}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(e){this.uniforms.depthBuffer.value=e}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(e){this.defines.DEPTH_PACKING=e.toFixed(0),this.needsUpdate=!0}setDepthBuffer(e,t=i.Rkk){this.depthBuffer=e,this.depthPacking=t}setShaderData(e){this.setShaderParts(e.shaderParts),this.setDefines(e.defines),this.setUniforms(e.uniforms),this.setExtensions(e.extensions)}setShaderParts(e){return this.fragmentShader=eF.replace(g.FRAGMENT_HEAD,e.get(g.FRAGMENT_HEAD)||"").replace(g.FRAGMENT_MAIN_UV,e.get(g.FRAGMENT_MAIN_UV)||"").replace(g.FRAGMENT_MAIN_IMAGE,e.get(g.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}".replace(g.VERTEX_HEAD,e.get(g.VERTEX_HEAD)||"").replace(g.VERTEX_MAIN_SUPPORT,e.get(g.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(e){for(let t of e.entries())this.defines[t[0]]=t[1];return this.needsUpdate=!0,this}setUniforms(e){for(let t of e.entries())this.uniforms[t[0]]=t[1];return this}setExtensions(e){for(let t of(this.extensions={},e))this.extensions[t]=!0;return this}get encodeOutput(){return void 0!==this.defines.ENCODE_OUTPUT}set encodeOutput(e){this.encodeOutput!==e&&(e?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(e){return this.encodeOutput}setOutputEncodingEnabled(e){this.encodeOutput=e}get time(){return this.uniforms.time.value}set time(e){this.uniforms.time.value=e}setDeltaTime(e){this.uniforms.time.value+=e}adoptCameraSettings(e){this.copyCameraSettings(e)}copyCameraSettings(e){e&&(this.uniforms.cameraNear.value=e.near,this.uniforms.cameraFar.value=e.far,e instanceof i.ubm?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(e,t){let r=this.uniforms;r.resolution.value.set(e,t),r.texelSize.value.set(1/e,1/t),r.aspect.value=e/t}static get Section(){return g}},eO=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform vec2 kernel[STEPS];varying vec2 vOffset;varying vec2 vUv;void main(){vec4 result=texture2D(inputBuffer,vUv)*kernel[0].y;for(int i=1;i<STEPS;++i){vec2 offset=kernel[i].x*vOffset;vec4 c0=texture2D(inputBuffer,vUv+offset);vec4 c1=texture2D(inputBuffer,vUv-offset);result+=(c0+c1)*kernel[i].y;}gl_FragColor=result;
#include <colorspace_fragment>
}`,eL=(i.BKk,i.sPf.replace(/\D+/g,""),255/256);function eH(e,t,r){for(let i of t){let t="$1"+e+i.charAt(0).toUpperCase()+i.slice(1),s=RegExp("([^\\.])(\\b"+i+"\\b)","g");for(let e of r.entries())null!==e[1]&&r.set(e[0],e[1].replace(s,t))}}new Float32Array([255/256/0x1000000,255/256/65536,255/256/256,255/256]),new Float32Array([eL,eL/256,eL/65536,1/0x1000000]);var ek=class extends a{constructor(e,...t){super("EffectPass"),this.fullscreenMaterial=new ez(null,null,null,e),this.listener=e=>this.handleEvent(e),this.effects=[],this.setEffects(t),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(e){for(let t of this.effects)t.mainScene=e}set mainCamera(e){for(let t of(this.fullscreenMaterial.copyCameraSettings(e),this.effects))t.mainCamera=e}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(e){this.fullscreenMaterial.encodeOutput=e}get dithering(){return this.fullscreenMaterial.dithering}set dithering(e){let t=this.fullscreenMaterial;t.dithering=e,t.needsUpdate=!0}setEffects(e){for(let e of this.effects)e.removeEventListener("change",this.listener);for(let t of(this.effects=e.sort((e,t)=>t.attributes-e.attributes),this.effects))t.addEventListener("change",this.listener)}updateMaterial(){let e=new x,t=0;for(let r of this.effects)if(r.blendMode.blendFunction===A.DST)e.attributes|=r.getAttributes()&m.DEPTH;else if((e.attributes&r.getAttributes()&m.CONVOLUTION)!=0)throw Error(`Convolution effects cannot be merged (${r.name})`);else!function(e,t,r){let s=t.getFragmentShader(),n=t.getVertexShader(),a=void 0!==s&&/mainImage/.test(s),o=void 0!==s&&/mainUv/.test(s);if(r.attributes|=t.getAttributes(),void 0===s)throw Error(`Missing fragment shader (${t.name})`);if(o&&(r.attributes&m.CONVOLUTION)!=0)throw Error(`Effects that transform UVs are incompatible with convolution effects (${t.name})`);if(a||o){let l=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,u=r.shaderParts,c=u.get(g.FRAGMENT_HEAD)||"",v=u.get(g.FRAGMENT_MAIN_UV)||"",f=u.get(g.FRAGMENT_MAIN_IMAGE)||"",h=u.get(g.VERTEX_HEAD)||"",d=u.get(g.VERTEX_MAIN_SUPPORT)||"",p=new Set,x=new Set;if(o&&(v+=`	${e}MainUv(UV);
`,r.uvTransformation=!0),null!==n&&/mainSupport/.test(n)){let t=/mainSupport *\([\w\s]*?uv\s*?\)/.test(n);for(let i of(d+=`	${e}MainSupport(`,d+=t?"vUv);\n":");\n",n.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g)))for(let e of i[1].split(/\s*,\s*/))r.varyings.add(e),p.add(e),x.add(e);for(let e of n.matchAll(l))x.add(e[1])}for(let e of s.matchAll(l))x.add(e[1]);for(let e of t.defines.keys())x.add(e.replace(/\([\w\s,]*\)/g,""));for(let e of t.uniforms.keys())x.add(e);x.delete("while"),x.delete("for"),x.delete("if"),t.uniforms.forEach((t,i)=>r.uniforms.set(e+i.charAt(0).toUpperCase()+i.slice(1),t)),t.defines.forEach((t,i)=>r.defines.set(e+i.charAt(0).toUpperCase()+i.slice(1),t));let E=new Map([["fragment",s],["vertex",n]]);eH(e,x,r.defines),eH(e,x,E),s=E.get("fragment"),n=E.get("vertex");let S=t.blendMode;if(r.blendModes.set(S.blendFunction,S),a){null!==t.inputColorSpace&&t.inputColorSpace!==r.colorSpace&&(f+=t.inputColorSpace===i.er$?"color0 = sRGBTransferOETF(color0);\n	":"color0 = sRGBToLinear(color0);\n	"),t.outputColorSpace!==i.jf0?r.colorSpace=t.outputColorSpace:null!==t.inputColorSpace&&(r.colorSpace=t.inputColorSpace),f+=`${e}MainImage(color0, UV, `,(r.attributes&m.DEPTH)!=0&&/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/.test(s)&&(f+="depth, ",r.readDepth=!0),f+="color1);\n	";let n=e+"BlendOpacity";r.uniforms.set(n,S.opacity),f+=`color0 = blend${S.blendFunction}(color0, color1, ${n});

	`,c+=`uniform float ${n};

`}if(c+=s+"\n",null!==n&&(h+=n+"\n"),u.set(g.FRAGMENT_HEAD,c),u.set(g.FRAGMENT_MAIN_UV,v),u.set(g.FRAGMENT_MAIN_IMAGE,f),u.set(g.VERTEX_HEAD,h),u.set(g.VERTEX_MAIN_SUPPORT,d),null!==t.extensions)for(let e of t.extensions)r.extensions.add(e)}else throw Error(`Could not find mainImage or mainUv function (${t.name})`)}("e"+t++,r,e);let r=e.shaderParts.get(g.FRAGMENT_HEAD),s=e.shaderParts.get(g.FRAGMENT_MAIN_IMAGE),n=e.shaderParts.get(g.FRAGMENT_MAIN_UV),a=/\bblend\b/g;for(let t of e.blendModes.values())r+=t.getShaderCode().replace(a,`blend${t.blendFunction}`)+"\n";for(let[t,a]of((e.attributes&m.DEPTH)!=0?(e.readDepth&&(s="float depth = readDepth(UV);\n\n	"+s),this.needsDepthTexture=null===this.getDepthTexture()):this.needsDepthTexture=!1,e.colorSpace===i.er$&&(s+="color0 = sRGBToLinear(color0);\n	"),e.uvTransformation?(n="vec2 transformedUv = vUv;\n"+n,e.defines.set("UV","transformedUv")):e.defines.set("UV","vUv"),e.shaderParts.set(g.FRAGMENT_HEAD,r),e.shaderParts.set(g.FRAGMENT_MAIN_IMAGE,s),e.shaderParts.set(g.FRAGMENT_MAIN_UV,n),e.shaderParts))null!==a&&e.shaderParts.set(t,a.trim().replace(/^#/,"\n#"));this.skipRendering=0===t,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(e)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(e,t=i.Rkk){for(let r of(this.fullscreenMaterial.depthBuffer=e,this.fullscreenMaterial.depthPacking=t,this.effects))r.setDepthTexture(e,t)}render(e,t,r,i,s){for(let r of this.effects)r.update(e,t,i);if(!this.skipRendering||this.renderToScreen){let s=this.fullscreenMaterial;s.inputBuffer=t.texture,s.time+=i*this.timeScale,e.setRenderTarget(this.renderToScreen?null:r),e.render(this.scene,this.camera)}}setSize(e,t){for(let r of(this.fullscreenMaterial.setSize(e,t),this.effects))r.setSize(e,t)}initialize(e,t,r){for(let i of(this.renderer=e,this.effects))i.initialize(e,t,r);this.updateMaterial(),void 0!==r&&r!==i.OUM&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){for(let e of(super.dispose(),this.effects))e.removeEventListener("change",this.listener),e.dispose()}handleEvent(e){"change"===e.type&&this.recompile()}},eG=class extends a{constructor(e,t,{renderTarget:r,resolutionScale:s=1,width:n=U.AUTO_SIZE,height:a=U.AUTO_SIZE,resolutionX:o=n,resolutionY:l=a}={}){super("NormalPass"),this.needsSwap=!1,this.renderPass=new er(e,t,new i.qBx);let u=this.renderPass;u.ignoreBackground=!0,u.skipShadowMapUpdate=!0;let c=u.getClearPass();c.overrideClearColor=new i.Q1f(7829503),c.overrideClearAlpha=1,this.renderTarget=r,void 0===this.renderTarget&&(this.renderTarget=new i.nWS(1,1,{minFilter:i.hxR,magFilter:i.hxR}),this.renderTarget.texture.name="NormalPass.Target");let v=this.resolution=new U(this,o,l,s);v.addEventListener("change",e=>this.setSize(v.baseWidth,v.baseHeight))}set mainScene(e){this.renderPass.mainScene=e}set mainCamera(e){this.renderPass.mainCamera=e}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}getResolutionScale(){return this.resolution.scale}setResolutionScale(e){this.resolution.scale=e}render(e,t,r,i,s){let n=this.renderToScreen?null:this.renderTarget;this.renderPass.render(e,n,n)}setSize(e,t){let r=this.resolution;r.setBaseSize(e,t),this.renderTarget.setSize(r.width,r.height)}};new Float32Array(3),new Float32Array(3),new Float32Array(3),new Float32Array(3),new Float32Array(3),new Float32Array(3),new Float32Array([0,0,0]),new Float32Array([1,0,0]),new Float32Array([1,1,0]),new Float32Array([1,1,1]),new Float32Array([0,0,0]),new Float32Array([1,0,0]),new Float32Array([1,0,1]),new Float32Array([1,1,1]),new Float32Array([0,0,0]),new Float32Array([0,0,1]),new Float32Array([1,0,1]),new Float32Array([1,1,1]),new Float32Array([0,0,0]),new Float32Array([0,1,0]),new Float32Array([1,1,0]),new Float32Array([1,1,1]),new Float32Array([0,0,0]),new Float32Array([0,1,0]),new Float32Array([0,1,1]),new Float32Array([1,1,1]),new Float32Array([0,0,0]),new Float32Array([0,0,1]),new Float32Array([0,1,1]),new Float32Array([1,1,1]);var eV=[new Float32Array(2),new Float32Array(2)],eZ=(new Float32Array([0,-.25,.25,-.125,.125,-.375,.375]),new Float32Array([0,0]),new Float32Array([.25,-.25]),new Float32Array([-.25,.25]),new Float32Array([.125,-.125]),new Float32Array([-.125,.125]),new Uint8Array([0,0]),new Uint8Array([3,0]),new Uint8Array([0,3]),new Uint8Array([3,3]),new Uint8Array([1,0]),new Uint8Array([4,0]),new Uint8Array([1,3]),new Uint8Array([4,3]),new Uint8Array([0,1]),new Uint8Array([3,1]),new Uint8Array([0,4]),new Uint8Array([3,4]),new Uint8Array([1,1]),new Uint8Array([4,1]),new Uint8Array([1,4]),new Uint8Array([4,4]),[new Uint8Array([0,0]),new Uint8Array([1,0]),new Uint8Array([0,2]),new Uint8Array([1,2]),new Uint8Array([2,0]),new Uint8Array([3,0]),new Uint8Array([2,2]),new Uint8Array([3,2]),new Uint8Array([0,1]),new Uint8Array([1,1]),new Uint8Array([0,3]),new Uint8Array([1,3]),new Uint8Array([2,1]),new Uint8Array([3,1]),new Uint8Array([2,3]),new Uint8Array([3,3])]);function eK(e){let t=eV[0],r=eV[1],i=.5*Math.sqrt(2*t[0]),s=.5*Math.sqrt(2*t[1]),n=.5*Math.sqrt(2*r[0]),a=.5*Math.sqrt(2*r[1]),o=Math.min(Math.max(e/32,0),1);t[0]=i+(t[0]-i)*o,t[1]=s+(t[1]-s)*o,r[0]=n+(r[0]-n)*o,r[1]=a+(r[1]-a)*o}function eX(e,t,r,i,s,n){let a=r-e,o=i-t,l=s+1,u=t+o*(s-e)/a,c=t+o*(l-e)/a;if(s>=e&&s<r||l>e&&l<=r)if(Math.sign(u)===Math.sign(c)||1e-4>Math.abs(u)||1e-4>Math.abs(c)){let e=(u+c)/2;e<0?(n[0]=Math.abs(e),n[1]=0):(n[0]=0,n[1]=Math.abs(e))}else{let i=-t*a/o+e,s=Math.trunc(i),l=i>e?u*(i-s)/2:0,v=i<r?c*(1-(i-s))/2:0;(Math.abs(l)>Math.abs(v)?l:-v)<0?(n[0]=Math.abs(l),n[1]=Math.abs(v)):(n[0]=Math.abs(v),n[1]=Math.abs(l))}else n[0]=0,n[1]=0;return n}function e$(e,t,r,i,s,n){let a=0;for(let o=0;o<30;++o)for(let l=0;l<30;++l)(function(e,t,r,i,s,n){let a=e===r&&t===i;return a||(a=(i-t)*(s-(e+r)/2)+(e-r)*(n-(t+i)/2)>0),a})(e,t,r,i,s+l/29,n+o/29)&&++a;return a/900}function eW(e,t,r,i,s,n,a,o){let l=eZ[e],u=l[0],c=l[1];return u>0&&(t+=a[0],r+=a[1]),c>0&&(i+=a[0],s+=a[1]),o[0]=1-e$(t,r,i,s,1+n,0+n),o[1]=e$(t,r,i,s,1+n,1+n),o}eY(0,0,0,0),new Float32Array([0,0,0,0]),eY(0,0,0,1),new Float32Array([0,0,0,1]),eY(0,0,1,0),new Float32Array([0,0,1,0]),eY(0,0,1,1),new Float32Array([0,0,1,1]),eY(0,1,0,0),new Float32Array([0,1,0,0]),eY(0,1,0,1),new Float32Array([0,1,0,1]),eY(0,1,1,0),new Float32Array([0,1,1,0]),eY(0,1,1,1),new Float32Array([0,1,1,1]),eY(1,0,0,0),new Float32Array([1,0,0,0]),eY(1,0,0,1),new Float32Array([1,0,0,1]),eY(1,0,1,0),new Float32Array([1,0,1,0]),eY(1,0,1,1),new Float32Array([1,0,1,1]),eY(1,1,0,0),new Float32Array([1,1,0,0]),eY(1,1,0,1),new Float32Array([1,1,0,1]),eY(1,1,1,0),new Float32Array([1,1,1,0]),eY(1,1,1,1),new Float32Array([1,1,1,1]);function eY(e,t,r,i){var s;return(s=e+(t-e)*.75)+(r+(i-r)*.75-s)*.875}}}]);