(()=>{var Ko="127";var Jl=0,ea=1,Ql=2;var ta=1,$l=2,di=3,nr=0,Ke=1,Zt=2,na=1;var fi=0,pi=1,ir=2,ia=3,ra=4,Kl=5,An=100,eh=101,th=102,sa=103,oa=104,nh=200,ih=201,rh=202,sh=203,aa=204,ca=205,oh=206,ah=207,ch=208,lh=209,hh=210,uh=0,dh=1,fh=2,hs=3,ph=4,mh=5,gh=6,vh=7,rr=0,xh=1,yh=2,mi=0,_h=1,us=2,wh=3,bh=4,Mh=5,la=300,ds=301,fs=302,ha=303,ua=304,ps=306,ms=307,gs=1e3,yt=1001,vs=1002,ut=1003,da=1004;var fa=1005;var We=1006,Sh=1007;var sr=1008;var xs=1009,Eh=1010,Th=1011,or=1012,Ah=1013,ar=1014,Jt=1015,cr=1016,Lh=1017,Rh=1018,Ch=1019,gi=1020,Ph=1021,vn=1022,dt=1023,Dh=1024,Ih=1025;var Ln=1026,vi=1027,Fh=1028,Bh=1029,Nh=1030,zh=1031,Oh=1032,Hh=1033,pa=33776,ma=33777,ga=33778,va=33779,xa=35840,ya=35841,_a=35842,wa=35843,Uh=36196,ba=37492,Ma=37496,Gh=37808,kh=37809,Vh=37810,Wh=37811,qh=37812,Xh=37813,jh=37814,Yh=37815,Zh=37816,Jh=37817,Qh=37818,$h=37819,Kh=37820,eu=37821,tu=36492,nu=37840,iu=37841,ru=37842,su=37843,ou=37844,au=37845,cu=37846,lu=37847,hu=37848,uu=37849,du=37850,fu=37851,pu=37852,mu=37853,gu=2200,vu=2201,xu=2202,lr=2300,hr=2301,ys=2302,Rn=2400,Cn=2401,ur=2402,_s=2500,Sa=2501,yu=0;var Pn=3e3,xi=3001,Ea=3007,Ta=3002,_u=3003,Aa=3004,La=3005,Ra=3006,wu=3200,bu=3201,Dn=0,Mu=1;var ws=7680;var Su=519,yi=35044,_i=35048;var Ca="300 es";function Qt(){}Object.assign(Qt.prototype,{addEventListener:function(n,e){this._listeners===void 0&&(this._listeners={});let t=this._listeners;t[n]===void 0&&(t[n]=[]),t[n].indexOf(e)===-1&&t[n].push(e)},hasEventListener:function(n,e){if(this._listeners===void 0)return!1;let t=this._listeners;return t[n]!==void 0&&t[n].indexOf(e)!==-1},removeEventListener:function(n,e){if(this._listeners===void 0)return;let i=this._listeners[n];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}},dispatchEvent:function(n){if(this._listeners===void 0)return;let t=this._listeners[n.type];if(t!==void 0){n.target=this;let i=t.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,n);n.target=null}}});var rt=[];for(let n=0;n<256;n++)rt[n]=(n<16?"0":"")+n.toString(16);var dr=1234567,pe={DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,generateUUID:function(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(rt[n&255]+rt[n>>8&255]+rt[n>>16&255]+rt[n>>24&255]+"-"+rt[e&255]+rt[e>>8&255]+"-"+rt[e>>16&15|64]+rt[e>>24&255]+"-"+rt[t&63|128]+rt[t>>8&255]+"-"+rt[t>>16&255]+rt[t>>24&255]+rt[i&255]+rt[i>>8&255]+rt[i>>16&255]+rt[i>>24&255]).toUpperCase()},clamp:function(n,e,t){return Math.max(e,Math.min(t,n))},euclideanModulo:function(n,e){return(n%e+e)%e},mapLinear:function(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)},inverseLerp:function(n,e,t){return n!==e?(t-n)/(e-n):0},lerp:function(n,e,t){return(1-t)*n+t*e},damp:function(n,e,t,i){return pe.lerp(n,e,1-Math.exp(-t*i))},pingpong:function(n,e=1){return e-Math.abs(pe.euclideanModulo(n,e*2)-e)},smoothstep:function(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))},smootherstep:function(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))},randInt:function(n,e){return n+Math.floor(Math.random()*(e-n+1))},randFloat:function(n,e){return n+Math.random()*(e-n)},randFloatSpread:function(n){return n*(.5-Math.random())},seededRandom:function(n){return n!==void 0&&(dr=n%2147483647),dr=dr*16807%2147483647,(dr-1)/2147483646},degToRad:function(n){return n*pe.DEG2RAD},radToDeg:function(n){return n*pe.RAD2DEG},isPowerOfTwo:function(n){return(n&n-1)==0&&n!==0},ceilPowerOfTwo:function(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))},floorPowerOfTwo:function(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))},setQuaternionFromProperEuler:function(n,e,t,i,r){let s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+i)/2),u=o((e+i)/2),h=s((e-i)/2),d=o((e-i)/2),f=s((i-e)/2),p=o((i-e)/2);switch(r){case"XYX":n.set(a*u,c*h,c*d,a*l);break;case"YZY":n.set(c*d,a*u,c*h,a*l);break;case"ZXZ":n.set(c*h,c*d,a*u,a*l);break;case"XZX":n.set(a*u,c*p,c*f,a*l);break;case"YXY":n.set(c*f,a*u,c*p,a*l);break;case"ZYZ":n.set(c*p,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}},V=class{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}};V.prototype.isVector2=!0;var et=class{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,r,s,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],d=i[2],f=i[5],p=i[8],v=r[0],x=r[3],g=r[6],m=r[1],S=r[4],b=r[7],T=r[2],y=r[5],L=r[8];return s[0]=o*v+a*m+c*T,s[3]=o*x+a*S+c*y,s[6]=o*g+a*b+c*L,s[1]=l*v+u*m+h*T,s[4]=l*x+u*S+h*y,s[7]=l*g+u*b+h*L,s[2]=d*v+f*m+p*T,s[5]=d*x+f*S+p*y,s[8]=d*g+f*b+p*L,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*s,f=l*s-o*c,p=t*h+i*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/p;return e[0]=h*v,e[1]=(r*l-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=d*v,e[4]=(u*t-r*c)*v,e[5]=(r*s-a*t)*v,e[6]=f*v,e[7]=(i*c-l*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){let i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){let t=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],c=r[1],l=r[4],u=r[7];return r[0]=t*s+i*c,r[3]=t*o+i*l,r[6]=t*a+i*u,r[1]=-i*s+t*c,r[4]=-i*o+t*l,r[7]=-i*a+t*u,this}translate(e,t){let i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};et.prototype.isMatrix3=!0;var In,Fn={getDataURL:function(n){if(/^data:/i.test(n.src)||typeof HTMLCanvasElement=="undefined")return n.src;let e;if(n instanceof HTMLCanvasElement)e=n;else{In===void 0&&(In=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")),In.width=n.width,In.height=n.height;let t=In.getContext("2d");n instanceof ImageData?t.putImageData(n,0,0):t.drawImage(n,0,0,n.width,n.height),e=In}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",n),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}},Eu=0,tt=class extends Qt{constructor(e=tt.DEFAULT_IMAGE,t=tt.DEFAULT_MAPPING,i=yt,r=yt,s=We,o=sr,a=dt,c=xs,l=1,u=Pn){super();Object.defineProperty(this,"id",{value:Eu++}),this.uuid=pe.generateUUID(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new V(0,0),this.repeat=new V(1,1),this.center=new V(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.version=0,this.onUpdate=null}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){let r=this.image;if(r.uuid===void 0&&(r.uuid=pe.generateUUID()),!t&&e.images[r.uuid]===void 0){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(bs(r[o].image)):s.push(bs(r[o]))}else s=bs(r);e.images[r.uuid]={uuid:r.uuid,url:s}}i.image=r.uuid}return t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==la)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gs:e.x=e.x-Math.floor(e.x);break;case yt:e.x=e.x<0?0:1;break;case vs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gs:e.y=e.y-Math.floor(e.y);break;case yt:e.y=e.y<0?0:1;break;case vs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}};tt.DEFAULT_IMAGE=void 0;tt.DEFAULT_MAPPING=la;tt.prototype.isTexture=!0;function bs(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?Fn.getDataURL(n):n.data?{data:Array.prototype.slice.call(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Oe=class{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,o=.01,a=.1,c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],p=c[9],v=c[2],x=c[6],g=c[10];if(Math.abs(u-d)<o&&Math.abs(h-v)<o&&Math.abs(p-x)<o){if(Math.abs(u+d)<a&&Math.abs(h+v)<a&&Math.abs(p+x)<a&&Math.abs(l+f+g-3)<a)return this.set(1,0,0,0),this;t=Math.PI;let S=(l+1)/2,b=(f+1)/2,T=(g+1)/2,y=(u+d)/4,L=(h+v)/4,I=(p+x)/4;return S>b&&S>T?S<o?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=y/i,s=L/i):b>T?b<o?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=y/r,s=I/r):T<o?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=L/s,r=I/s),this.set(i,r,s,t),this}let m=Math.sqrt((x-p)*(x-p)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(m)<.001&&(m=1),this.x=(x-p)/m,this.y=(h-v)/m,this.z=(d-u)/m,this.w=Math.acos((l+f+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}};Oe.prototype.isVector4=!0;var vt=class extends Qt{constructor(e,t,i){super();this.width=e,this.height=t,this.depth=1,this.scissor=new Oe(0,0,e,t),this.scissorTest=!1,this.viewport=new Oe(0,0,e,t),i=i||{},this.texture=new tt(void 0,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.image={},this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:We,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}};vt.prototype.isWebGLRenderTarget=!0;var Pa=class extends vt{constructor(e,t,i){super(e,t,i);this.samples=4}copy(e){return super.copy.call(this,e),this.samples=e.samples,this}};Pa.prototype.isWebGLMultisampleRenderTarget=!0;var st=class{constructor(e=0,t=0,i=0,r=1){this._x=e,this._y=t,this._z=i,this._w=r}static slerp(e,t,i,r){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),i.slerpQuaternions(e,t,r)}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],h=i[r+3],d=s[o+0],f=s[o+1],p=s[o+2],v=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=v;return}if(h!==v||c!==d||l!==f||u!==p){let x=1-a,g=c*d+l*f+u*p+h*v,m=g>=0?1:-1,S=1-g*g;if(S>Number.EPSILON){let T=Math.sqrt(S),y=Math.atan2(T,g*m);x=Math.sin(x*y)/T,a=Math.sin(a*y)/T}let b=a*m;if(c=c*x+d*b,l=l*x+f*b,u=u*x+p*b,h=h*x+v*b,x===1-a){let T=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=T,l*=T,u*=T,h*=T}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],h=s[o],d=s[o+1],f=s[o+2],p=s[o+3];return e[t]=a*p+u*h+c*f-l*d,e[t+1]=c*p+u*d+l*h-a*f,e[t+2]=l*p+u*f+a*d-c*h,e[t+3]=u*p-a*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),h=a(s/2),d=c(i/2),f=c(r/2),p=c(s/2);switch(o){case"XYZ":this._x=d*u*h+l*f*p,this._y=l*f*h-d*u*p,this._z=l*u*p+d*f*h,this._w=l*u*h-d*f*p;break;case"YXZ":this._x=d*u*h+l*f*p,this._y=l*f*h-d*u*p,this._z=l*u*p-d*f*h,this._w=l*u*h+d*f*p;break;case"ZXY":this._x=d*u*h-l*f*p,this._y=l*f*h+d*u*p,this._z=l*u*p+d*f*h,this._w=l*u*h-d*f*p;break;case"ZYX":this._x=d*u*h-l*f*p,this._y=l*f*h+d*u*p,this._z=l*u*p-d*f*h,this._w=l*u*h+d*f*p;break;case"YZX":this._x=d*u*h+l*f*p,this._y=l*f*h+d*u*p,this._z=l*u*p-d*f*h,this._w=l*u*h-d*f*p;break;case"XZY":this._x=d*u*h-l*f*p,this._y=l*f*h-d*u*p,this._z=l*u*p+d*f*h,this._w=l*u*h+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=i+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(o-r)*f}else if(i>a&&i>h){let f=2*Math.sqrt(1+i-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+l)/f}else if(a>h){let f=2*Math.sqrt(1+a-i-h);this._w=(s-l)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(c+u)/f}else{let f=2*Math.sqrt(1+h-i-a);this._w=(o-r)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pe.clamp(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this._onChangeCallback(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){this.copy(e).slerp(t,i)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}};st.prototype.isQuaternion=!0;var w=class{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Da.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Da.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=c*t+o*r-a*i,u=c*i+a*t-s*r,h=c*r+s*i-o*t,d=-s*t-o*i-a*r;return this.x=l*c+d*-s+u*-a-h*-o,this.y=u*c+d*-o+h*-s-l*-a,this.z=h*c+d*-a+l*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ms.copy(this).projectOnVector(e),this.sub(Ms)}reflect(e){return this.sub(Ms.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(pe.clamp(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}};w.prototype.isVector3=!0;var Ms=new w,Da=new st,_t=class{constructor(e=new w(Infinity,Infinity,Infinity),t=new w(-Infinity,-Infinity,-Infinity)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=Infinity,i=Infinity,r=Infinity,s=-Infinity,o=-Infinity,a=-Infinity;for(let c=0,l=e.length;c<l;c+=3){let u=e[c],h=e[c+1],d=e[c+2];u<t&&(t=u),h<i&&(i=h),d<r&&(r=d),u>s&&(s=u),h>o&&(o=h),d>a&&(a=d)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=Infinity,i=Infinity,r=Infinity,s=-Infinity,o=-Infinity,a=-Infinity;for(let c=0,l=e.count;c<l;c++){let u=e.getX(c),h=e.getY(c),d=e.getZ(c);u<t&&(t=u),h<i&&(i=h),d<r&&(r=d),u>s&&(s=u),h>o&&(o=h),d>a&&(a=d)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=wi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=Infinity,this.max.x=this.max.y=this.max.z=-Infinity,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return e===void 0&&(console.warn("THREE.Box3: .getCenter() target is now required"),e=new w),this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e===void 0&&(console.warn("THREE.Box3: .getSize() target is now required"),e=new w),this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);let t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),Ss.copy(t.boundingBox),Ss.applyMatrix4(e.matrixWorld),this.union(Ss));let i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t===void 0&&(console.warn("THREE.Box3: .getParameter() target is now required"),t=new w),t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,wi),wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bi),fr.subVectors(this.max,bi),Bn.subVectors(e.a,bi),Nn.subVectors(e.b,bi),zn.subVectors(e.c,bi),$t.subVectors(Nn,Bn),Kt.subVectors(zn,Nn),xn.subVectors(Bn,zn);let t=[0,-$t.z,$t.y,0,-Kt.z,Kt.y,0,-xn.z,xn.y,$t.z,0,-$t.x,Kt.z,0,-Kt.x,xn.z,0,-xn.x,-$t.y,$t.x,0,-Kt.y,Kt.x,0,-xn.y,xn.x,0];return!Es(t,Bn,Nn,zn,fr)||(t=[1,0,0,0,1,0,0,0,1],!Es(t,Bn,Nn,zn,fr))?!1:(pr.crossVectors($t,Kt),t=[pr.x,pr.y,pr.z],Es(t,Bn,Nn,zn,fr))}clampPoint(e,t){return t===void 0&&(console.warn("THREE.Box3: .clampPoint() target is now required"),t=new w),t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return wi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return e===void 0&&console.error("THREE.Box3: .getBoundingSphere() target is now required"),this.getCenter(e.center),e.radius=this.getSize(wi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};_t.prototype.isBox3=!0;var Gt=[new w,new w,new w,new w,new w,new w,new w,new w],wi=new w,Ss=new _t,Bn=new w,Nn=new w,zn=new w,$t=new w,Kt=new w,xn=new w,bi=new w,fr=new w,pr=new w,yn=new w;function Es(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){yn.fromArray(n,s);let a=r.x*Math.abs(yn.x)+r.y*Math.abs(yn.y)+r.z*Math.abs(yn.z),c=e.dot(yn),l=t.dot(yn),u=i.dot(yn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var Tu=new _t,Ia=new w,Ts=new w,As=new w,_n=class{constructor(e=new w,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Tu.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t===void 0&&(console.warn("THREE.Sphere: .clampPoint() target is now required"),t=new w),t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return e===void 0&&(console.warn("THREE.Sphere: .getBoundingBox() target is now required"),e=new _t),this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){As.subVectors(e,this.center);let t=As.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.add(As.multiplyScalar(r/i)),this.radius+=r}return this}union(e){return Ts.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Ia.copy(e.center).add(Ts)),this.expandByPoint(Ia.copy(e.center).sub(Ts)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},kt=new w,Ls=new w,mr=new w,en=new w,Rs=new w,gr=new w,Cs=new w,tn=class{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t===void 0&&(console.warn("THREE.Ray: .at() target is now required"),t=new w),t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kt)),this}closestPointToPoint(e,t){t===void 0&&(console.warn("THREE.Ray: .closestPointToPoint() target is now required"),t=new w),t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=kt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kt.copy(this.direction).multiplyScalar(t).add(this.origin),kt.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ls.copy(e).add(t).multiplyScalar(.5),mr.copy(t).sub(e).normalize(),en.copy(this.origin).sub(Ls);let s=e.distanceTo(t)*.5,o=-this.direction.dot(mr),a=en.dot(this.direction),c=-en.dot(mr),l=en.lengthSq(),u=Math.abs(1-o*o),h,d,f,p;if(u>0)if(h=o*c-a,d=o*a-c,p=s*u,h>=0)if(d>=-p)if(d<=p){let v=1/u;h*=v,d*=v,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-p?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l):d<=p?(h=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return i&&i.copy(this.direction).multiplyScalar(h).add(this.origin),r&&r.copy(mr).multiplyScalar(d).add(Ls),f}intersectSphere(e,t){kt.subVectors(e.center,this.origin);let i=kt.dot(this.direction),r=kt.dot(kt)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,c=i+o;return a<0&&c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,kt)!==null}intersectTriangle(e,t,i,r,s){Rs.subVectors(t,e),gr.subVectors(i,e),Cs.crossVectors(Rs,gr);let o=this.direction.dot(Cs),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;en.subVectors(this.origin,e);let c=a*this.direction.dot(gr.crossVectors(en,gr));if(c<0)return null;let l=a*this.direction.dot(Rs.cross(en));if(l<0||c+l>o)return null;let u=-a*en.dot(Cs);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},de=class{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,r,s,o,a,c,l,u,h,d,f,p,v,x){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=u,g[10]=h,g[14]=d,g[3]=f,g[7]=p,g[11]=v,g[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new de().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/On.setFromMatrixColumn(e,0).length(),s=1/On.setFromMatrixColumn(e,1).length(),o=1/On.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let d=o*u,f=o*h,p=a*u,v=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+p*l,t[5]=d-v*l,t[9]=-a*c,t[2]=v-d*l,t[6]=p+f*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*u,f=c*h,p=l*u,v=l*h;t[0]=d+v*a,t[4]=p*a-f,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-p,t[6]=v+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*u,f=c*h,p=l*u,v=l*h;t[0]=d-v*a,t[4]=-o*h,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*u,t[9]=v-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*u,f=o*h,p=a*u,v=a*h;t[0]=c*u,t[4]=p*l-f,t[8]=d*l+v,t[1]=c*h,t[5]=v*l+d,t[9]=f*l-p,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,f=o*l,p=a*c,v=a*l;t[0]=c*u,t[4]=v-d*h,t[8]=p*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*h+p,t[10]=d-v*h}else if(e.order==="XZY"){let d=o*c,f=o*l,p=a*c,v=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+v,t[5]=o*u,t[9]=f*h-p,t[2]=p*h-f,t[6]=a*u,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Au,e,Lu)}lookAt(e,t,i){let r=this.elements;return wt.subVectors(e,t),wt.lengthSq()===0&&(wt.z=1),wt.normalize(),nn.crossVectors(i,wt),nn.lengthSq()===0&&(Math.abs(i.z)===1?wt.x+=1e-4:wt.z+=1e-4,wt.normalize(),nn.crossVectors(i,wt)),nn.normalize(),vr.crossVectors(wt,nn),r[0]=nn.x,r[4]=vr.x,r[8]=wt.x,r[1]=nn.y,r[5]=vr.y,r[9]=wt.y,r[2]=nn.z,r[6]=vr.z,r[10]=wt.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],d=i[9],f=i[13],p=i[2],v=i[6],x=i[10],g=i[14],m=i[3],S=i[7],b=i[11],T=i[15],y=r[0],L=r[4],I=r[8],D=r[12],O=r[1],C=r[5],U=r[9],P=r[13],R=r[2],B=r[6],F=r[10],X=r[14],ee=r[3],Z=r[7],se=r[11],j=r[15];return s[0]=o*y+a*O+c*R+l*ee,s[4]=o*L+a*C+c*B+l*Z,s[8]=o*I+a*U+c*F+l*se,s[12]=o*D+a*P+c*X+l*j,s[1]=u*y+h*O+d*R+f*ee,s[5]=u*L+h*C+d*B+f*Z,s[9]=u*I+h*U+d*F+f*se,s[13]=u*D+h*P+d*X+f*j,s[2]=p*y+v*O+x*R+g*ee,s[6]=p*L+v*C+x*B+g*Z,s[10]=p*I+v*U+x*F+g*se,s[14]=p*D+v*P+x*X+g*j,s[3]=m*y+S*O+b*R+T*ee,s[7]=m*L+S*C+b*B+T*Z,s[11]=m*I+S*U+b*F+T*se,s[15]=m*D+S*P+b*X+T*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],p=e[3],v=e[7],x=e[11],g=e[15];return p*(+s*c*h-r*l*h-s*a*d+i*l*d+r*a*f-i*c*f)+v*(+t*c*f-t*l*d+s*o*d-r*o*f+r*l*u-s*c*u)+x*(+t*l*h-t*a*f-s*o*h+i*o*f+s*a*u-i*l*u)+g*(-r*a*u-t*c*h+t*a*d+r*o*h-i*o*d+i*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],p=e[12],v=e[13],x=e[14],g=e[15],m=h*x*l-v*d*l+v*c*f-a*x*f-h*c*g+a*d*g,S=p*d*l-u*x*l-p*c*f+o*x*f+u*c*g-o*d*g,b=u*v*l-p*h*l+p*a*f-o*v*f-u*a*g+o*h*g,T=p*h*c-u*v*c-p*a*d+o*v*d+u*a*x-o*h*x,y=t*m+i*S+r*b+s*T;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/y;return e[0]=m*L,e[1]=(v*d*s-h*x*s-v*r*f+i*x*f+h*r*g-i*d*g)*L,e[2]=(a*x*s-v*c*s+v*r*l-i*x*l-a*r*g+i*c*g)*L,e[3]=(h*c*s-a*d*s-h*r*l+i*d*l+a*r*f-i*c*f)*L,e[4]=S*L,e[5]=(u*x*s-p*d*s+p*r*f-t*x*f-u*r*g+t*d*g)*L,e[6]=(p*c*s-o*x*s-p*r*l+t*x*l+o*r*g-t*c*g)*L,e[7]=(o*d*s-u*c*s+u*r*l-t*d*l-o*r*f+t*c*f)*L,e[8]=b*L,e[9]=(p*h*s-u*v*s-p*i*f+t*v*f+u*i*g-t*h*g)*L,e[10]=(o*v*s-p*a*s+p*i*l-t*v*l-o*i*g+t*a*g)*L,e[11]=(u*a*s-o*h*s-u*i*l+t*h*l+o*i*f-t*a*f)*L,e[12]=T*L,e[13]=(u*v*r-p*h*r+p*i*d-t*v*d-u*i*x+t*h*x)*L,e[14]=(p*a*r-o*v*r-p*i*c+t*v*c+o*i*x-t*a*x)*L,e[15]=(o*h*r-u*a*r+u*i*c-t*h*c-o*i*d+t*a*d)*L,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i){return this.set(1,t,i,0,e,1,i,0,e,t,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,h=a+a,d=s*l,f=s*u,p=s*h,v=o*u,x=o*h,g=a*h,m=c*l,S=c*u,b=c*h,T=i.x,y=i.y,L=i.z;return r[0]=(1-(v+g))*T,r[1]=(f+b)*T,r[2]=(p-S)*T,r[3]=0,r[4]=(f-b)*y,r[5]=(1-(d+g))*y,r[6]=(x+m)*y,r[7]=0,r[8]=(p+S)*L,r[9]=(x-m)*L,r[10]=(1-(d+v))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=On.set(r[0],r[1],r[2]).length(),o=On.set(r[4],r[5],r[6]).length(),a=On.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],At.copy(this);let l=1/s,u=1/o,h=1/a;return At.elements[0]*=l,At.elements[1]*=l,At.elements[2]*=l,At.elements[4]*=u,At.elements[5]*=u,At.elements[6]*=u,At.elements[8]*=h,At.elements[9]*=h,At.elements[10]*=h,t.setFromRotationMatrix(At),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");let a=this.elements,c=2*s/(t-e),l=2*s/(i-r),u=(t+e)/(t-e),h=(i+r)/(i-r),d=-(o+s)/(o-s),f=-2*o*s/(o-s);return a[0]=c,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=l,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=f,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,s,o){let a=this.elements,c=1/(t-e),l=1/(i-r),u=1/(o-s),h=(t+e)*c,d=(i+r)*l,f=(o+s)*u;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-f,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};de.prototype.isMatrix4=!0;var On=new w,At=new de,Au=new w(0,0,0),Lu=new w(1,1,1),nn=new w,vr=new w,wt=new w,Fa=new de,Ba=new st,wn=class{constructor(e=0,t=0,i=0,r=wn.DefaultOrder){this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._order=r||this._order,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t,i){let r=pe.clamp,s=e.elements,o=s[0],a=s[4],c=s[8],l=s[1],u=s[5],h=s[9],d=s[2],f=s[6],p=s[10];switch(t=t||this._order,t){case"XYZ":this._y=Math.asin(r(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-r(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(c,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(r(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-r(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(r(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(c,p));break;case"XZY":this._z=Math.asin(-r(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i!==!1&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Fa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fa,t,i)}setFromVector3(e,t){return this.set(e.x,e.y,e.z,t||this._order)}reorder(e){return Ba.setFromEuler(this),this.setFromQuaternion(Ba,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new w(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}};wn.prototype.isEuler=!0;wn.DefaultOrder="XYZ";wn.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];var Ps=class{constructor(){this.mask=1|0}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=4294967295|0}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}},Ru=0,Na=new w,Hn=new st,Vt=new de,xr=new w,Mi=new w,Cu=new w,Pu=new st,za=new w(1,0,0),Oa=new w(0,1,0),Ha=new w(0,0,1),Du={type:"added"},Ua={type:"removed"};function _e(){Object.defineProperty(this,"id",{value:Ru++}),this.uuid=pe.generateUUID(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_e.DefaultUp.clone();let n=new w,e=new wn,t=new st,i=new w(1,1,1);function r(){t.setFromEuler(e,!1)}function s(){e.setFromQuaternion(t,void 0,!1)}e._onChange(r),t._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:n},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:t},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new de},normalMatrix:{value:new et}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=_e.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Ps,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}_e.DefaultUp=new w(0,1,0);_e.DefaultMatrixAutoUpdate=!0;_e.prototype=Object.assign(Object.create(Qt.prototype),{constructor:_e,isObject3D:!0,onBeforeRender:function(){},onAfterRender:function(){},applyMatrix4:function(n){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(n),this.matrix.decompose(this.position,this.quaternion,this.scale)},applyQuaternion:function(n){return this.quaternion.premultiply(n),this},setRotationFromAxisAngle:function(n,e){this.quaternion.setFromAxisAngle(n,e)},setRotationFromEuler:function(n){this.quaternion.setFromEuler(n,!0)},setRotationFromMatrix:function(n){this.quaternion.setFromRotationMatrix(n)},setRotationFromQuaternion:function(n){this.quaternion.copy(n)},rotateOnAxis:function(n,e){return Hn.setFromAxisAngle(n,e),this.quaternion.multiply(Hn),this},rotateOnWorldAxis:function(n,e){return Hn.setFromAxisAngle(n,e),this.quaternion.premultiply(Hn),this},rotateX:function(n){return this.rotateOnAxis(za,n)},rotateY:function(n){return this.rotateOnAxis(Oa,n)},rotateZ:function(n){return this.rotateOnAxis(Ha,n)},translateOnAxis:function(n,e){return Na.copy(n).applyQuaternion(this.quaternion),this.position.add(Na.multiplyScalar(e)),this},translateX:function(n){return this.translateOnAxis(za,n)},translateY:function(n){return this.translateOnAxis(Oa,n)},translateZ:function(n){return this.translateOnAxis(Ha,n)},localToWorld:function(n){return n.applyMatrix4(this.matrixWorld)},worldToLocal:function(n){return n.applyMatrix4(Vt.copy(this.matrixWorld).invert())},lookAt:function(n,e,t){n.isVector3?xr.copy(n):xr.set(n,e,t);let i=this.parent;this.updateWorldMatrix(!0,!1),Mi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vt.lookAt(Mi,xr,this.up):Vt.lookAt(xr,Mi,this.up),this.quaternion.setFromRotationMatrix(Vt),i&&(Vt.extractRotation(i.matrixWorld),Hn.setFromRotationMatrix(Vt),this.quaternion.premultiply(Hn.invert()))},add:function(n){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return n===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",n),this):(n&&n.isObject3D?(n.parent!==null&&n.parent.remove(n),n.parent=this,this.children.push(n),n.dispatchEvent(Du)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",n),this)},remove:function(n){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.remove(arguments[t]);return this}let e=this.children.indexOf(n);return e!==-1&&(n.parent=null,this.children.splice(e,1),n.dispatchEvent(Ua)),this},clear:function(){for(let n=0;n<this.children.length;n++){let e=this.children[n];e.parent=null,e.dispatchEvent(Ua)}return this.children.length=0,this},attach:function(n){return this.updateWorldMatrix(!0,!1),Vt.copy(this.matrixWorld).invert(),n.parent!==null&&(n.parent.updateWorldMatrix(!0,!1),Vt.multiply(n.parent.matrixWorld)),n.applyMatrix4(Vt),this.add(n),n.updateWorldMatrix(!1,!0),this},getObjectById:function(n){return this.getObjectByProperty("id",n)},getObjectByName:function(n){return this.getObjectByProperty("name",n)},getObjectByProperty:function(n,e){if(this[n]===e)return this;for(let t=0,i=this.children.length;t<i;t++){let s=this.children[t].getObjectByProperty(n,e);if(s!==void 0)return s}},getWorldPosition:function(n){return n===void 0&&(console.warn("THREE.Object3D: .getWorldPosition() target is now required"),n=new w),this.updateWorldMatrix(!0,!1),n.setFromMatrixPosition(this.matrixWorld)},getWorldQuaternion:function(n){return n===void 0&&(console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),n=new st),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mi,n,Cu),n},getWorldScale:function(n){return n===void 0&&(console.warn("THREE.Object3D: .getWorldScale() target is now required"),n=new w),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mi,Pu,n),n},getWorldDirection:function(n){n===void 0&&(console.warn("THREE.Object3D: .getWorldDirection() target is now required"),n=new w),this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return n.set(e[8],e[9],e[10]).normalize()},raycast:function(){},traverse:function(n){n(this);let e=this.children;for(let t=0,i=e.length;t<i;t++)e[t].traverse(n)},traverseVisible:function(n){if(this.visible===!1)return;n(this);let e=this.children;for(let t=0,i=e.length;t<i;t++)e[t].traverseVisible(n)},traverseAncestors:function(n){let e=this.parent;e!==null&&(n(e),e.traverseAncestors(n))},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(n){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,n=!0);let e=this.children;for(let t=0,i=e.length;t<i;t++)e[t].updateMatrixWorld(n)},updateWorldMatrix:function(n,e){let t=this.parent;if(n===!0&&t!==null&&t.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateWorldMatrix(!1,!0)}},toJSON:function(n){let e=n===void 0||typeof n=="string",t={};e&&(n={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},t.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(o,a){return o[a.uuid]===void 0&&(o[a.uuid]=a.toJSON(n)),a.uuid}if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(n.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let a=o.shapes;if(Array.isArray(a))for(let c=0,l=a.length;c<l;c++){let u=a[c];r(n.shapes,u)}else r(n.shapes,a)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(n.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let a=0,c=this.material.length;a<c;a++)o.push(r(n.materials,this.material[a]));i.material=o}else i.material=r(n.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(n).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let a=this.animations[o];i.animations.push(r(n.animations,a))}}if(e){let o=s(n.geometries),a=s(n.materials),c=s(n.textures),l=s(n.images),u=s(n.shapes),h=s(n.skeletons),d=s(n.animations);o.length>0&&(t.geometries=o),a.length>0&&(t.materials=a),c.length>0&&(t.textures=c),l.length>0&&(t.images=l),u.length>0&&(t.shapes=u),h.length>0&&(t.skeletons=h),d.length>0&&(t.animations=d)}return t.object=i,t;function s(o){let a=[];for(let c in o){let l=o[c];delete l.metadata,a.push(l)}return a}},clone:function(n){return new this.constructor().copy(this,n)},copy:function(n,e=!0){if(this.name=n.name,this.up.copy(n.up),this.position.copy(n.position),this.rotation.order=n.rotation.order,this.quaternion.copy(n.quaternion),this.scale.copy(n.scale),this.matrix.copy(n.matrix),this.matrixWorld.copy(n.matrixWorld),this.matrixAutoUpdate=n.matrixAutoUpdate,this.matrixWorldNeedsUpdate=n.matrixWorldNeedsUpdate,this.layers.mask=n.layers.mask,this.visible=n.visible,this.castShadow=n.castShadow,this.receiveShadow=n.receiveShadow,this.frustumCulled=n.frustumCulled,this.renderOrder=n.renderOrder,this.userData=JSON.parse(JSON.stringify(n.userData)),e===!0)for(let t=0;t<n.children.length;t++){let i=n.children[t];this.add(i.clone())}return this}});var Ds=new w,Iu=new w,Fu=new et,Lt=class{constructor(e=new w(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Ds.subVectors(i,t).cross(Iu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t===void 0&&(console.warn("THREE.Plane: .projectPoint() target is now required"),t=new w),t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){t===void 0&&(console.warn("THREE.Plane: .intersectLine() target is now required"),t=new w);let i=e.delta(Ds),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e===void 0&&(console.warn("THREE.Plane: .coplanarPoint() target is now required"),e=new w),e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Fu.getNormalMatrix(e),r=this.coplanarPoint(Ds).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};Lt.prototype.isPlane=!0;var Rt=new w,Wt=new w,Is=new w,qt=new w,Un=new w,Gn=new w,Ga=new w,Fs=new w,Bs=new w,Ns=new w,Ye=class{constructor(e=new w,t=new w,i=new w){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r===void 0&&(console.warn("THREE.Triangle: .getNormal() target is now required"),r=new w),r.subVectors(i,t),Rt.subVectors(e,t),r.cross(Rt);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Rt.subVectors(r,t),Wt.subVectors(i,t),Is.subVectors(e,t);let o=Rt.dot(Rt),a=Rt.dot(Wt),c=Rt.dot(Is),l=Wt.dot(Wt),u=Wt.dot(Is),h=o*l-a*a;if(s===void 0&&(console.warn("THREE.Triangle: .getBarycoord() target is now required"),s=new w),h===0)return s.set(-2,-1,-1);let d=1/h,f=(l*c-a*u)*d,p=(o*u-a*c)*d;return s.set(1-f-p,p,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,qt),qt.x>=0&&qt.y>=0&&qt.x+qt.y<=1}static getUV(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,qt),c.set(0,0),c.addScaledVector(s,qt.x),c.addScaledVector(o,qt.y),c.addScaledVector(a,qt.z),c}static isFrontFacing(e,t,i,r){return Rt.subVectors(i,t),Wt.subVectors(e,t),Rt.cross(Wt).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rt.subVectors(this.c,this.b),Wt.subVectors(this.a,this.b),Rt.cross(Wt).length()*.5}getMidpoint(e){return e===void 0&&(console.warn("THREE.Triangle: .getMidpoint() target is now required"),e=new w),e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ye.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e===void 0&&(console.warn("THREE.Triangle: .getPlane() target is now required"),e=new Lt),e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ye.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Ye.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Ye.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ye.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){t===void 0&&(console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),t=new w);let i=this.a,r=this.b,s=this.c,o,a;Un.subVectors(r,i),Gn.subVectors(s,i),Fs.subVectors(e,i);let c=Un.dot(Fs),l=Gn.dot(Fs);if(c<=0&&l<=0)return t.copy(i);Bs.subVectors(e,r);let u=Un.dot(Bs),h=Gn.dot(Bs);if(u>=0&&h<=u)return t.copy(r);let d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(Un,o);Ns.subVectors(e,s);let f=Un.dot(Ns),p=Gn.dot(Ns);if(p>=0&&f<=p)return t.copy(s);let v=f*l-c*p;if(v<=0&&l>=0&&p<=0)return a=l/(l-p),t.copy(i).addScaledVector(Gn,a);let x=u*p-f*h;if(x<=0&&h-u>=0&&f-p>=0)return Ga.subVectors(s,r),a=(h-u)/(h-u+(f-p)),t.copy(r).addScaledVector(Ga,a);let g=1/(x+v+d);return o=v*g,a=d*g,t.copy(i).addScaledVector(Un,o).addScaledVector(Gn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Bu=0;function qe(){Object.defineProperty(this,"id",{value:Bu++}),this.uuid=pe.generateUUID(),this.name="",this.type="Material",this.fog=!0,this.blending=pi,this.side=nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=aa,this.blendDst=ca,this.blendEquation=An,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Su,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ws,this.stencilZFail=ws,this.stencilZPass=ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0}qe.prototype=Object.assign(Object.create(Qt.prototype),{constructor:qe,isMaterial:!0,onBeforeCompile:function(){},customProgramCacheKey:function(){return this.onBeforeCompile.toString()},setValues:function(n){if(n!==void 0)for(let e in n){let t=n[e];if(t===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}if(e==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=t===na;continue}let i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(t):i&&i.isVector3&&t&&t.isVector3?i.copy(t):this[e]=t}},toJSON:function(n){let e=n===void 0||typeof n=="string";e&&(n={textures:{},images:{}});let t={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.color&&this.color.isColor&&(t.color=this.color.getHex()),this.roughness!==void 0&&(t.roughness=this.roughness),this.metalness!==void 0&&(t.metalness=this.metalness),this.sheen&&this.sheen.isColor&&(t.sheen=this.sheen.getHex()),this.emissive&&this.emissive.isColor&&(t.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(t.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(t.specular=this.specular.getHex()),this.shininess!==void 0&&(t.shininess=this.shininess),this.clearcoat!==void 0&&(t.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(t.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(t.clearcoatMap=this.clearcoatMap.toJSON(n).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(t.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(n).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(t.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(n).uuid,t.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(t.map=this.map.toJSON(n).uuid),this.matcap&&this.matcap.isTexture&&(t.matcap=this.matcap.toJSON(n).uuid),this.alphaMap&&this.alphaMap.isTexture&&(t.alphaMap=this.alphaMap.toJSON(n).uuid),this.lightMap&&this.lightMap.isTexture&&(t.lightMap=this.lightMap.toJSON(n).uuid,t.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(t.aoMap=this.aoMap.toJSON(n).uuid,t.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(t.bumpMap=this.bumpMap.toJSON(n).uuid,t.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(t.normalMap=this.normalMap.toJSON(n).uuid,t.normalMapType=this.normalMapType,t.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(t.displacementMap=this.displacementMap.toJSON(n).uuid,t.displacementScale=this.displacementScale,t.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(t.roughnessMap=this.roughnessMap.toJSON(n).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(t.metalnessMap=this.metalnessMap.toJSON(n).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(t.emissiveMap=this.emissiveMap.toJSON(n).uuid),this.specularMap&&this.specularMap.isTexture&&(t.specularMap=this.specularMap.toJSON(n).uuid),this.envMap&&this.envMap.isTexture&&(t.envMap=this.envMap.toJSON(n).uuid,t.reflectivity=this.reflectivity,t.refractionRatio=this.refractionRatio,this.combine!==void 0&&(t.combine=this.combine),this.envMapIntensity!==void 0&&(t.envMapIntensity=this.envMapIntensity)),this.gradientMap&&this.gradientMap.isTexture&&(t.gradientMap=this.gradientMap.toJSON(n).uuid),this.size!==void 0&&(t.size=this.size),this.shadowSide!==null&&(t.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(t.sizeAttenuation=this.sizeAttenuation),this.blending!==pi&&(t.blending=this.blending),this.side!==nr&&(t.side=this.side),this.vertexColors&&(t.vertexColors=!0),this.opacity<1&&(t.opacity=this.opacity),this.transparent===!0&&(t.transparent=this.transparent),t.depthFunc=this.depthFunc,t.depthTest=this.depthTest,t.depthWrite=this.depthWrite,t.colorWrite=this.colorWrite,t.stencilWrite=this.stencilWrite,t.stencilWriteMask=this.stencilWriteMask,t.stencilFunc=this.stencilFunc,t.stencilRef=this.stencilRef,t.stencilFuncMask=this.stencilFuncMask,t.stencilFail=this.stencilFail,t.stencilZFail=this.stencilZFail,t.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(t.rotation=this.rotation),this.polygonOffset===!0&&(t.polygonOffset=!0),this.polygonOffsetFactor!==0&&(t.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(t.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(t.linewidth=this.linewidth),this.dashSize!==void 0&&(t.dashSize=this.dashSize),this.gapSize!==void 0&&(t.gapSize=this.gapSize),this.scale!==void 0&&(t.scale=this.scale),this.dithering===!0&&(t.dithering=!0),this.alphaTest>0&&(t.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(t.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(t.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(t.wireframe=this.wireframe),this.wireframeLinewidth>1&&(t.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(t.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(t.wireframeLinejoin=this.wireframeLinejoin),this.morphTargets===!0&&(t.morphTargets=!0),this.morphNormals===!0&&(t.morphNormals=!0),this.skinning===!0&&(t.skinning=!0),this.flatShading===!0&&(t.flatShading=this.flatShading),this.visible===!1&&(t.visible=!1),this.toneMapped===!1&&(t.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(t.userData=this.userData);function i(r){let s=[];for(let o in r){let a=r[o];delete a.metadata,s.push(a)}return s}if(e){let r=i(n.textures),s=i(n.images);r.length>0&&(t.textures=r),s.length>0&&(t.images=s)}return t},clone:function(){return new this.constructor().copy(this)},copy:function(n){this.name=n.name,this.fog=n.fog,this.blending=n.blending,this.side=n.side,this.vertexColors=n.vertexColors,this.opacity=n.opacity,this.transparent=n.transparent,this.blendSrc=n.blendSrc,this.blendDst=n.blendDst,this.blendEquation=n.blendEquation,this.blendSrcAlpha=n.blendSrcAlpha,this.blendDstAlpha=n.blendDstAlpha,this.blendEquationAlpha=n.blendEquationAlpha,this.depthFunc=n.depthFunc,this.depthTest=n.depthTest,this.depthWrite=n.depthWrite,this.stencilWriteMask=n.stencilWriteMask,this.stencilFunc=n.stencilFunc,this.stencilRef=n.stencilRef,this.stencilFuncMask=n.stencilFuncMask,this.stencilFail=n.stencilFail,this.stencilZFail=n.stencilZFail,this.stencilZPass=n.stencilZPass,this.stencilWrite=n.stencilWrite;let e=n.clippingPlanes,t=null;if(e!==null){let i=e.length;t=new Array(i);for(let r=0;r!==i;++r)t[r]=e[r].clone()}return this.clippingPlanes=t,this.clipIntersection=n.clipIntersection,this.clipShadows=n.clipShadows,this.shadowSide=n.shadowSide,this.colorWrite=n.colorWrite,this.precision=n.precision,this.polygonOffset=n.polygonOffset,this.polygonOffsetFactor=n.polygonOffsetFactor,this.polygonOffsetUnits=n.polygonOffsetUnits,this.dithering=n.dithering,this.alphaTest=n.alphaTest,this.alphaToCoverage=n.alphaToCoverage,this.premultipliedAlpha=n.premultipliedAlpha,this.visible=n.visible,this.toneMapped=n.toneMapped,this.userData=JSON.parse(JSON.stringify(n.userData)),this},dispose:function(){this.dispatchEvent({type:"dispose"})}});Object.defineProperty(qe.prototype,"needsUpdate",{set:function(n){n===!0&&this.version++}});var ka={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ct={h:0,s:0,l:0},yr={h:0,s:0,l:0};function zs(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function Os(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Hs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ae=class{constructor(e,t,i){return t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,i){return this.r=e,this.g=t,this.b=i,this}setHSL(e,t,i){if(e=pe.euclideanModulo(e,1),t=pe.clamp(t,0,1),i=pe.clamp(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,s=2*i-r;this.r=zs(s,r,e+1/3),this.g=zs(s,r,e),this.b=zs(s,r,e-1/3)}return this}setStyle(e){function t(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r,s=i[1],o=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,t(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,t(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){let a=parseFloat(r[1])/360,c=parseInt(r[2],10)/100,l=parseInt(r[3],10)/100;return t(r[4]),this.setHSL(a,c,l)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],s=r.length;if(s===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,this;if(s===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){let t=ka[e];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,t=2){return this.r=Math.pow(e.r,t),this.g=Math.pow(e.g,t),this.b=Math.pow(e.b,t),this}copyLinearToGamma(e,t=2){let i=t>0?1/t:1;return this.r=Math.pow(e.r,i),this.g=Math.pow(e.g,i),this.b=Math.pow(e.b,i),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=Os(e.r),this.g=Os(e.g),this.b=Os(e.b),this}copyLinearToSRGB(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){e===void 0&&(console.warn("THREE.Color: .getHSL() target is now required"),e={h:0,s:0,l:0});let t=this.r,i=this.g,r=this.b,s=Math.max(t,i,r),o=Math.min(t,i,r),a,c,l=(o+s)/2;if(o===s)a=0,c=0;else{let u=s-o;switch(c=l<=.5?u/(s+o):u/(2-s-o),s){case t:a=(i-r)/u+(i<r?6:0);break;case i:a=(r-t)/u+2;break;case r:a=(t-i)/u+4;break}a/=6}return e.h=a,e.s=c,e.l=l,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,i){return this.getHSL(Ct),Ct.h+=e,Ct.s+=t,Ct.l+=i,this.setHSL(Ct.h,Ct.s,Ct.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ct),e.getHSL(yr);let i=pe.lerp(Ct.h,yr.h,t),r=pe.lerp(Ct.s,yr.s,t),s=pe.lerp(Ct.l,yr.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}};ae.NAMES=ka;ae.prototype.isColor=!0;ae.prototype.r=1;ae.prototype.g=1;ae.prototype.b=1;var Xt=class extends qe{constructor(e){super();this.type="MeshBasicMaterial",this.color=new ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=rr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this}};Xt.prototype.isMeshBasicMaterial=!0;var ke=new w,_r=new V;function Ae(n,e,t){if(Array.isArray(n))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=n,this.itemSize=e,this.count=n!==void 0?n.length/e:0,this.normalized=t===!0,this.usage=yi,this.updateRange={offset:0,count:-1},this.version=0}Object.defineProperty(Ae.prototype,"needsUpdate",{set:function(n){n===!0&&this.version++}});Object.assign(Ae.prototype,{isBufferAttribute:!0,onUploadCallback:function(){},setUsage:function(n){return this.usage=n,this},copy:function(n){return this.name=n.name,this.array=new n.array.constructor(n.array),this.itemSize=n.itemSize,this.count=n.count,this.normalized=n.normalized,this.usage=n.usage,this},copyAt:function(n,e,t){n*=this.itemSize,t*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[n+i]=e.array[t+i];return this},copyArray:function(n){return this.array.set(n),this},copyColorsArray:function(n){let e=this.array,t=0;for(let i=0,r=n.length;i<r;i++){let s=n[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),s=new ae),e[t++]=s.r,e[t++]=s.g,e[t++]=s.b}return this},copyVector2sArray:function(n){let e=this.array,t=0;for(let i=0,r=n.length;i<r;i++){let s=n[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),s=new V),e[t++]=s.x,e[t++]=s.y}return this},copyVector3sArray:function(n){let e=this.array,t=0;for(let i=0,r=n.length;i<r;i++){let s=n[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),s=new w),e[t++]=s.x,e[t++]=s.y,e[t++]=s.z}return this},copyVector4sArray:function(n){let e=this.array,t=0;for(let i=0,r=n.length;i<r;i++){let s=n[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),s=new Oe),e[t++]=s.x,e[t++]=s.y,e[t++]=s.z,e[t++]=s.w}return this},applyMatrix3:function(n){if(this.itemSize===2)for(let e=0,t=this.count;e<t;e++)_r.fromBufferAttribute(this,e),_r.applyMatrix3(n),this.setXY(e,_r.x,_r.y);else if(this.itemSize===3)for(let e=0,t=this.count;e<t;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix3(n),this.setXYZ(e,ke.x,ke.y,ke.z);return this},applyMatrix4:function(n){for(let e=0,t=this.count;e<t;e++)ke.x=this.getX(e),ke.y=this.getY(e),ke.z=this.getZ(e),ke.applyMatrix4(n),this.setXYZ(e,ke.x,ke.y,ke.z);return this},applyNormalMatrix:function(n){for(let e=0,t=this.count;e<t;e++)ke.x=this.getX(e),ke.y=this.getY(e),ke.z=this.getZ(e),ke.applyNormalMatrix(n),this.setXYZ(e,ke.x,ke.y,ke.z);return this},transformDirection:function(n){for(let e=0,t=this.count;e<t;e++)ke.x=this.getX(e),ke.y=this.getY(e),ke.z=this.getZ(e),ke.transformDirection(n),this.setXYZ(e,ke.x,ke.y,ke.z);return this},set:function(n,e=0){return this.array.set(n,e),this},getX:function(n){return this.array[n*this.itemSize]},setX:function(n,e){return this.array[n*this.itemSize]=e,this},getY:function(n){return this.array[n*this.itemSize+1]},setY:function(n,e){return this.array[n*this.itemSize+1]=e,this},getZ:function(n){return this.array[n*this.itemSize+2]},setZ:function(n,e){return this.array[n*this.itemSize+2]=e,this},getW:function(n){return this.array[n*this.itemSize+3]},setW:function(n,e){return this.array[n*this.itemSize+3]=e,this},setXY:function(n,e,t){return n*=this.itemSize,this.array[n+0]=e,this.array[n+1]=t,this},setXYZ:function(n,e,t,i){return n*=this.itemSize,this.array[n+0]=e,this.array[n+1]=t,this.array[n+2]=i,this},setXYZW:function(n,e,t,i,r){return n*=this.itemSize,this.array[n+0]=e,this.array[n+1]=t,this.array[n+2]=i,this.array[n+3]=r,this},onUpload:function(n){return this.onUploadCallback=n,this},clone:function(){return new this.constructor(this.array,this.itemSize).copy(this)},toJSON:function(){let n={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(n.name=this.name),this.usage!==yi&&(n.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(n.updateRange=this.updateRange),n}});function Us(n,e,t){Ae.call(this,new Int8Array(n),e,t)}Us.prototype=Object.create(Ae.prototype);Us.prototype.constructor=Us;function Gs(n,e,t){Ae.call(this,new Uint8Array(n),e,t)}Gs.prototype=Object.create(Ae.prototype);Gs.prototype.constructor=Gs;function ks(n,e,t){Ae.call(this,new Uint8ClampedArray(n),e,t)}ks.prototype=Object.create(Ae.prototype);ks.prototype.constructor=ks;function Vs(n,e,t){Ae.call(this,new Int16Array(n),e,t)}Vs.prototype=Object.create(Ae.prototype);Vs.prototype.constructor=Vs;function Si(n,e,t){Ae.call(this,new Uint16Array(n),e,t)}Si.prototype=Object.create(Ae.prototype);Si.prototype.constructor=Si;function Ws(n,e,t){Ae.call(this,new Int32Array(n),e,t)}Ws.prototype=Object.create(Ae.prototype);Ws.prototype.constructor=Ws;function Ei(n,e,t){Ae.call(this,new Uint32Array(n),e,t)}Ei.prototype=Object.create(Ae.prototype);Ei.prototype.constructor=Ei;function wr(n,e,t){Ae.call(this,new Uint16Array(n),e,t)}wr.prototype=Object.create(Ae.prototype);wr.prototype.constructor=wr;wr.prototype.isFloat16BufferAttribute=!0;function Ee(n,e,t){Ae.call(this,new Float32Array(n),e,t)}Ee.prototype=Object.create(Ae.prototype);Ee.prototype.constructor=Ee;function qs(n,e,t){Ae.call(this,new Float64Array(n),e,t)}qs.prototype=Object.create(Ae.prototype);qs.prototype.constructor=qs;function Va(n){if(n.length===0)return-Infinity;let e=n[0];for(let t=1,i=n.length;t<i;++t)n[t]>e&&(e=n[t]);return e}var Nu=0,Nt=new de,Xs=new _e,kn=new w,bt=new _t,Ti=new _t,nt=new w;function Le(){Object.defineProperty(this,"id",{value:Nu++}),this.uuid=pe.generateUUID(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:Infinity},this.userData={}}Le.prototype=Object.assign(Object.create(Qt.prototype),{constructor:Le,isBufferGeometry:!0,getIndex:function(){return this.index},setIndex:function(n){return Array.isArray(n)?this.index=new(Va(n)>65535?Ei:Si)(n,1):this.index=n,this},getAttribute:function(n){return this.attributes[n]},setAttribute:function(n,e){return this.attributes[n]=e,this},deleteAttribute:function(n){return delete this.attributes[n],this},hasAttribute:function(n){return this.attributes[n]!==void 0},addGroup:function(n,e,t=0){this.groups.push({start:n,count:e,materialIndex:t})},clearGroups:function(){this.groups=[]},setDrawRange:function(n,e){this.drawRange.start=n,this.drawRange.count=e},applyMatrix4:function(n){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(n),e.needsUpdate=!0);let t=this.attributes.normal;if(t!==void 0){let r=new et().getNormalMatrix(n);t.applyNormalMatrix(r),t.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(n),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this},rotateX:function(n){return Nt.makeRotationX(n),this.applyMatrix4(Nt),this},rotateY:function(n){return Nt.makeRotationY(n),this.applyMatrix4(Nt),this},rotateZ:function(n){return Nt.makeRotationZ(n),this.applyMatrix4(Nt),this},translate:function(n,e,t){return Nt.makeTranslation(n,e,t),this.applyMatrix4(Nt),this},scale:function(n,e,t){return Nt.makeScale(n,e,t),this.applyMatrix4(Nt),this},lookAt:function(n){return Xs.lookAt(n),Xs.updateMatrix(),this.applyMatrix4(Xs.matrix),this},center:function(){return this.computeBoundingBox(),this.boundingBox.getCenter(kn).negate(),this.translate(kn.x,kn.y,kn.z),this},setFromPoints:function(n){let e=[];for(let t=0,i=n.length;t<i;t++){let r=n[t];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ee(e,3)),this},computeBoundingBox:function(){this.boundingBox===null&&(this.boundingBox=new _t);let n=this.attributes.position,e=this.morphAttributes.position;if(n&&n.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new w(-Infinity,-Infinity,-Infinity),new w(Infinity,Infinity,Infinity));return}if(n!==void 0){if(this.boundingBox.setFromBufferAttribute(n),e)for(let t=0,i=e.length;t<i;t++){let r=e[t];bt.setFromBufferAttribute(r),this.morphTargetsRelative?(nt.addVectors(this.boundingBox.min,bt.min),this.boundingBox.expandByPoint(nt),nt.addVectors(this.boundingBox.max,bt.max),this.boundingBox.expandByPoint(nt)):(this.boundingBox.expandByPoint(bt.min),this.boundingBox.expandByPoint(bt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)},computeBoundingSphere:function(){this.boundingSphere===null&&(this.boundingSphere=new _n);let n=this.attributes.position,e=this.morphAttributes.position;if(n&&n.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new w,Infinity);return}if(n){let t=this.boundingSphere.center;if(bt.setFromBufferAttribute(n),e)for(let r=0,s=e.length;r<s;r++){let o=e[r];Ti.setFromBufferAttribute(o),this.morphTargetsRelative?(nt.addVectors(bt.min,Ti.min),bt.expandByPoint(nt),nt.addVectors(bt.max,Ti.max),bt.expandByPoint(nt)):(bt.expandByPoint(Ti.min),bt.expandByPoint(Ti.max))}bt.getCenter(t);let i=0;for(let r=0,s=n.count;r<s;r++)nt.fromBufferAttribute(n,r),i=Math.max(i,t.distanceToSquared(nt));if(e)for(let r=0,s=e.length;r<s;r++){let o=e[r],a=this.morphTargetsRelative;for(let c=0,l=o.count;c<l;c++)nt.fromBufferAttribute(o,c),a&&(kn.fromBufferAttribute(n,c),nt.add(kn)),i=Math.max(i,t.distanceToSquared(nt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}},computeFaceNormals:function(){},computeTangents:function(){let n=this.index,e=this.attributes;if(n===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let t=n.array,i=e.position.array,r=e.normal.array,s=e.uv.array,o=i.length/3;e.tangent===void 0&&this.setAttribute("tangent",new Ae(new Float32Array(4*o),4));let a=e.tangent.array,c=[],l=[];for(let D=0;D<o;D++)c[D]=new w,l[D]=new w;let u=new w,h=new w,d=new w,f=new V,p=new V,v=new V,x=new w,g=new w;function m(D,O,C){u.fromArray(i,D*3),h.fromArray(i,O*3),d.fromArray(i,C*3),f.fromArray(s,D*2),p.fromArray(s,O*2),v.fromArray(s,C*2),h.sub(u),d.sub(u),p.sub(f),v.sub(f);let U=1/(p.x*v.y-v.x*p.y);!isFinite(U)||(x.copy(h).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(U),g.copy(d).multiplyScalar(p.x).addScaledVector(h,-v.x).multiplyScalar(U),c[D].add(x),c[O].add(x),c[C].add(x),l[D].add(g),l[O].add(g),l[C].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.length}]);for(let D=0,O=S.length;D<O;++D){let C=S[D],U=C.start,P=C.count;for(let R=U,B=U+P;R<B;R+=3)m(t[R+0],t[R+1],t[R+2])}let b=new w,T=new w,y=new w,L=new w;function I(D){y.fromArray(r,D*3),L.copy(y);let O=c[D];b.copy(O),b.sub(y.multiplyScalar(y.dot(O))).normalize(),T.crossVectors(L,O);let U=T.dot(l[D])<0?-1:1;a[D*4]=b.x,a[D*4+1]=b.y,a[D*4+2]=b.z,a[D*4+3]=U}for(let D=0,O=S.length;D<O;++D){let C=S[D],U=C.start,P=C.count;for(let R=U,B=U+P;R<B;R+=3)I(t[R+0]),I(t[R+1]),I(t[R+2])}},computeVertexNormals:function(){let n=this.index,e=this.getAttribute("position");if(e!==void 0){let t=this.getAttribute("normal");if(t===void 0)t=new Ae(new Float32Array(e.count*3),3),this.setAttribute("normal",t);else for(let h=0,d=t.count;h<d;h++)t.setXYZ(h,0,0,0);let i=new w,r=new w,s=new w,o=new w,a=new w,c=new w,l=new w,u=new w;if(n)for(let h=0,d=n.count;h<d;h+=3){let f=n.getX(h+0),p=n.getX(h+1),v=n.getX(h+2);i.fromBufferAttribute(e,f),r.fromBufferAttribute(e,p),s.fromBufferAttribute(e,v),l.subVectors(s,r),u.subVectors(i,r),l.cross(u),o.fromBufferAttribute(t,f),a.fromBufferAttribute(t,p),c.fromBufferAttribute(t,v),o.add(l),a.add(l),c.add(l),t.setXYZ(f,o.x,o.y,o.z),t.setXYZ(p,a.x,a.y,a.z),t.setXYZ(v,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)i.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),s.fromBufferAttribute(e,h+2),l.subVectors(s,r),u.subVectors(i,r),l.cross(u),t.setXYZ(h+0,l.x,l.y,l.z),t.setXYZ(h+1,l.x,l.y,l.z),t.setXYZ(h+2,l.x,l.y,l.z);this.normalizeNormals(),t.needsUpdate=!0}},merge:function(n,e){if(!(n&&n.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",n);return}e===void 0&&(e=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));let t=this.attributes;for(let i in t){if(n.attributes[i]===void 0)continue;let s=t[i].array,o=n.attributes[i],a=o.array,c=o.itemSize*e,l=Math.min(a.length,s.length-c);for(let u=0,h=c;u<l;u++,h++)s[h]=a[u]}return this},normalizeNormals:function(){let n=this.attributes.normal;for(let e=0,t=n.count;e<t;e++)nt.fromBufferAttribute(n,e),nt.normalize(),n.setXYZ(e,nt.x,nt.y,nt.z)},toNonIndexed:function(){function n(o,a){let c=o.array,l=o.itemSize,u=o.normalized,h=new c.constructor(a.length*l),d=0,f=0;for(let p=0,v=a.length;p<v;p++){d=a[p]*l;for(let x=0;x<l;x++)h[f++]=c[d++]}return new Ae(h,l,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new Le,t=this.index.array,i=this.attributes;for(let o in i){let a=i[o],c=n(a,t);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let a=[],c=r[o];for(let l=0,u=c.length;l<u;l++){let h=c[l],d=n(h,t);a.push(d)}e.morphAttributes[o]=a}e.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,a=s.length;o<a;o++){let c=s[o];e.addGroup(c.start,c.count,c.materialIndex)}return e},toJSON:function(){let n={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),Object.keys(this.userData).length>0&&(n.userData=this.userData),this.parameters!==void 0){let a=this.parameters;for(let c in a)a[c]!==void 0&&(n[c]=a[c]);return n}n.data={attributes:{}};let e=this.index;e!==null&&(n.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let t=this.attributes;for(let a in t){let c=t[a];n.data.attributes[a]=c.toJSON(n.data)}let i={},r=!1;for(let a in this.morphAttributes){let c=this.morphAttributes[a],l=[];for(let u=0,h=c.length;u<h;u++){let d=c[u];l.push(d.toJSON(n.data))}l.length>0&&(i[a]=l,r=!0)}r&&(n.data.morphAttributes=i,n.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(n.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(n.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),n},clone:function(){return new Le().copy(this)},copy:function(n){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=n.name;let t=n.index;t!==null&&this.setIndex(t.clone(e));let i=n.attributes;for(let c in i){let l=i[c];this.setAttribute(c,l.clone(e))}let r=n.morphAttributes;for(let c in r){let l=[],u=r[c];for(let h=0,d=u.length;h<d;h++)l.push(u[h].clone(e));this.morphAttributes[c]=l}this.morphTargetsRelative=n.morphTargetsRelative;let s=n.groups;for(let c=0,l=s.length;c<l;c++){let u=s[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=n.boundingBox;o!==null&&(this.boundingBox=o.clone());let a=n.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=n.drawRange.start,this.drawRange.count=n.drawRange.count,this.userData=n.userData,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});var Wa=new de,Vn=new tn,js=new _n,rn=new w,sn=new w,on=new w,Ys=new w,Zs=new w,Js=new w,br=new w,Mr=new w,Sr=new w,Er=new V,Tr=new V,Ar=new V,Qs=new w,Lr=new w;function De(n=new Le,e=new Xt){_e.call(this),this.type="Mesh",this.geometry=n,this.material=e,this.updateMorphTargets()}De.prototype=Object.assign(Object.create(_e.prototype),{constructor:De,isMesh:!0,copy:function(n){return _e.prototype.copy.call(this,n),n.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=n.morphTargetInfluences.slice()),n.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},n.morphTargetDictionary)),this.material=n.material,this.geometry=n.geometry,this},updateMorphTargets:function(){let n=this.geometry;if(n.isBufferGeometry){let e=n.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{let e=n.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}},raycast:function(n,e){let t=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(t.boundingSphere===null&&t.computeBoundingSphere(),js.copy(t.boundingSphere),js.applyMatrix4(r),n.ray.intersectsSphere(js)===!1)||(Wa.copy(r).invert(),Vn.copy(n.ray).applyMatrix4(Wa),t.boundingBox!==null&&Vn.intersectsBox(t.boundingBox)===!1))return;let s;if(t.isBufferGeometry){let o=t.index,a=t.attributes.position,c=t.morphAttributes.position,l=t.morphTargetsRelative,u=t.attributes.uv,h=t.attributes.uv2,d=t.groups,f=t.drawRange;if(o!==null)if(Array.isArray(i))for(let p=0,v=d.length;p<v;p++){let x=d[p],g=i[x.materialIndex],m=Math.max(x.start,f.start),S=Math.min(x.start+x.count,f.start+f.count);for(let b=m,T=S;b<T;b+=3){let y=o.getX(b),L=o.getX(b+1),I=o.getX(b+2);s=Rr(this,g,n,Vn,a,c,l,u,h,y,L,I),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let x=p,g=v;x<g;x+=3){let m=o.getX(x),S=o.getX(x+1),b=o.getX(x+2);s=Rr(this,i,n,Vn,a,c,l,u,h,m,S,b),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}else if(a!==void 0)if(Array.isArray(i))for(let p=0,v=d.length;p<v;p++){let x=d[p],g=i[x.materialIndex],m=Math.max(x.start,f.start),S=Math.min(x.start+x.count,f.start+f.count);for(let b=m,T=S;b<T;b+=3){let y=b,L=b+1,I=b+2;s=Rr(this,g,n,Vn,a,c,l,u,h,y,L,I),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let x=p,g=v;x<g;x+=3){let m=x,S=x+1,b=x+2;s=Rr(this,i,n,Vn,a,c,l,u,h,m,S,b),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}}else t.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}});function zu(n,e,t,i,r,s,o,a){let c;if(e.side===Ke?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side!==Zt,a),c===null)return null;Lr.copy(a),Lr.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Lr);return l<t.near||l>t.far?null:{distance:l,point:Lr.clone(),object:n}}function Rr(n,e,t,i,r,s,o,a,c,l,u,h){rn.fromBufferAttribute(r,l),sn.fromBufferAttribute(r,u),on.fromBufferAttribute(r,h);let d=n.morphTargetInfluences;if(e.morphTargets&&s&&d){br.set(0,0,0),Mr.set(0,0,0),Sr.set(0,0,0);for(let p=0,v=s.length;p<v;p++){let x=d[p],g=s[p];x!==0&&(Ys.fromBufferAttribute(g,l),Zs.fromBufferAttribute(g,u),Js.fromBufferAttribute(g,h),o?(br.addScaledVector(Ys,x),Mr.addScaledVector(Zs,x),Sr.addScaledVector(Js,x)):(br.addScaledVector(Ys.sub(rn),x),Mr.addScaledVector(Zs.sub(sn),x),Sr.addScaledVector(Js.sub(on),x)))}rn.add(br),sn.add(Mr),on.add(Sr)}n.isSkinnedMesh&&e.skinning&&(n.boneTransform(l,rn),n.boneTransform(u,sn),n.boneTransform(h,on));let f=zu(n,e,t,i,rn,sn,on,Qs);if(f){a&&(Er.fromBufferAttribute(a,l),Tr.fromBufferAttribute(a,u),Ar.fromBufferAttribute(a,h),f.uv=Ye.getUV(Qs,rn,sn,on,Er,Tr,Ar,new V)),c&&(Er.fromBufferAttribute(c,l),Tr.fromBufferAttribute(c,u),Ar.fromBufferAttribute(c,h),f.uv2=Ye.getUV(Qs,rn,sn,on,Er,Tr,Ar,new V));let p={a:l,b:u,c:h,normal:new w,materialIndex:0};Ye.getNormal(rn,sn,on,p.normal),f.face=p}return f}var an=class extends Le{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super();this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],u=[],h=[],d=0,f=0;p("z","y","x",-1,-1,i,t,e,o,s,0),p("z","y","x",1,-1,i,t,-e,o,s,1),p("x","z","y",1,1,e,i,t,r,o,2),p("x","z","y",1,-1,e,i,-t,r,o,3),p("x","y","z",1,-1,e,t,i,r,s,4),p("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Ee(l,3)),this.setAttribute("normal",new Ee(u,3)),this.setAttribute("uv",new Ee(h,2));function p(v,x,g,m,S,b,T,y,L,I,D){let O=b/L,C=T/I,U=b/2,P=T/2,R=y/2,B=L+1,F=I+1,X=0,ee=0,Z=new w;for(let se=0;se<F;se++){let j=se*C-P;for(let oe=0;oe<B;oe++){let ue=oe*O-U;Z[v]=ue*m,Z[x]=j*S,Z[g]=R,l.push(Z.x,Z.y,Z.z),Z[v]=0,Z[x]=0,Z[g]=y>0?1:-1,u.push(Z.x,Z.y,Z.z),h.push(oe/L),h.push(1-se/I),X+=1}}for(let se=0;se<I;se++)for(let j=0;j<L;j++){let oe=d+j+B*se,ue=d+j+B*(se+1),H=d+(j+1)+B*(se+1),we=d+(j+1)+B*se;c.push(oe,ue,we),c.push(ue,H,we),ee+=6}a.addGroup(f,ee,D),f+=ee,d+=X}}};function Wn(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function ot(n){let e={};for(let t=0;t<n.length;t++){let i=Wn(n[t]);for(let r in i)e[r]=i[r]}return e}var qn={clone:Wn,merge:ot},Ou=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;function Ge(n){qe.call(this),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Ou,this.fragmentShader=Hu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,n!==void 0&&(n.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(n))}Ge.prototype=Object.create(qe.prototype);Ge.prototype.constructor=Ge;Ge.prototype.isShaderMaterial=!0;Ge.prototype.copy=function(n){return qe.prototype.copy.call(this,n),this.fragmentShader=n.fragmentShader,this.vertexShader=n.vertexShader,this.uniforms=Wn(n.uniforms),this.defines=Object.assign({},n.defines),this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this.lights=n.lights,this.clipping=n.clipping,this.skinning=n.skinning,this.morphTargets=n.morphTargets,this.morphNormals=n.morphNormals,this.extensions=Object.assign({},n.extensions),this.glslVersion=n.glslVersion,this};Ge.prototype.toJSON=function(n){let e=qe.prototype.toJSON.call(this,n);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let s=this.uniforms[i].value;s&&s.isTexture?e.uniforms[i]={type:"t",value:s.toJSON(n).uuid}:s&&s.isColor?e.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?e.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?e.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?e.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?e.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?e.uniforms[i]={type:"m4",value:s.toArray()}:e.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;let t={};for(let i in this.extensions)this.extensions[i]===!0&&(t[i]=!0);return Object.keys(t).length>0&&(e.extensions=t),e};function Xn(){_e.call(this),this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de}Xn.prototype=Object.assign(Object.create(_e.prototype),{constructor:Xn,isCamera:!0,copy:function(n,e){return _e.prototype.copy.call(this,n,e),this.matrixWorldInverse.copy(n.matrixWorldInverse),this.projectionMatrix.copy(n.projectionMatrix),this.projectionMatrixInverse.copy(n.projectionMatrixInverse),this},getWorldDirection:function(n){n===void 0&&(console.warn("THREE.Camera: .getWorldDirection() target is now required"),n=new w),this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return n.set(-e[8],-e[9],-e[10]).normalize()},updateMatrixWorld:function(n){_e.prototype.updateMatrixWorld.call(this,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()},updateWorldMatrix:function(n,e){_e.prototype.updateWorldMatrix.call(this,n,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()},clone:function(){return new this.constructor().copy(this)}});function at(n=50,e=1,t=.1,i=2e3){Xn.call(this),this.type="PerspectiveCamera",this.fov=n,this.zoom=1,this.near=t,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}at.prototype=Object.assign(Object.create(Xn.prototype),{constructor:at,isPerspectiveCamera:!0,copy:function(n,e){return Xn.prototype.copy.call(this,n,e),this.fov=n.fov,this.zoom=n.zoom,this.near=n.near,this.far=n.far,this.focus=n.focus,this.aspect=n.aspect,this.view=n.view===null?null:Object.assign({},n.view),this.filmGauge=n.filmGauge,this.filmOffset=n.filmOffset,this},setFocalLength:function(n){let e=.5*this.getFilmHeight()/n;this.fov=pe.RAD2DEG*2*Math.atan(e),this.updateProjectionMatrix()},getFocalLength:function(){let n=Math.tan(pe.DEG2RAD*.5*this.fov);return .5*this.getFilmHeight()/n},getEffectiveFOV:function(){return pe.RAD2DEG*2*Math.atan(Math.tan(pe.DEG2RAD*.5*this.fov)/this.zoom)},getFilmWidth:function(){return this.filmGauge*Math.min(this.aspect,1)},getFilmHeight:function(){return this.filmGauge/Math.max(this.aspect,1)},setViewOffset:function(n,e,t,i,r,s){this.aspect=n/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=n,this.view.fullHeight=e,this.view.offsetX=t,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()},clearViewOffset:function(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){let n=this.near,e=n*Math.tan(pe.DEG2RAD*.5*this.fov)/this.zoom,t=2*e,i=this.aspect*t,r=-.5*i,s=this.view;if(this.view!==null&&this.view.enabled){let a=s.fullWidth,c=s.fullHeight;r+=s.offsetX*i/a,e-=s.offsetY*t/c,i*=s.width/a,t*=s.height/c}let o=this.filmOffset;o!==0&&(r+=n*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-t,n,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()},toJSON:function(n){let e=_e.prototype.toJSON.call(this,n);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}});var jn=90,Yn=1,Cr=class extends _e{constructor(e,t,i){super();if(this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;let r=new at(jn,Yn,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new w(1,0,0)),this.add(r);let s=new at(jn,Yn,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new w(-1,0,0)),this.add(s);let o=new at(jn,Yn,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new w(0,1,0)),this.add(o);let a=new at(jn,Yn,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new w(0,-1,0)),this.add(a);let c=new at(jn,Yn,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new w(0,0,1)),this.add(c);let l=new at(jn,Yn,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new w(0,0,-1)),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();let i=this.renderTarget,[r,s,o,a,c,l]=this.children,u=e.xr.enabled,h=e.getRenderTarget();e.xr.enabled=!1;let d=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,c),i.texture.generateMipmaps=d,e.setRenderTarget(i,5),e.render(t,l),e.setRenderTarget(h),e.xr.enabled=u}},Ai=class extends tt{constructor(e,t,i,r,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:ds,a=a!==void 0?a:vn,super(e,t,i,r,s,o,a,c,l,u),this._needsFlipEnvMap=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};Ai.prototype.isCubeTexture=!0;var $s=class extends vt{constructor(e,t,i){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=i),super(e,e,t),t=t||{},this.texture=new Ai(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:We,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=dt,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new an(5,5,5),s=new Ge({name:"CubemapFromEquirect",uniforms:Wn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ke,blending:fi});s.uniforms.tEquirect.value=t;let o=new De(r,s),a=t.minFilter;return t.minFilter===sr&&(t.minFilter=We),new Cr(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}};$s.prototype.isWebGLCubeRenderTarget=!0;var Pr=class extends tt{constructor(e,t,i,r,s,o,a,c,l,u,h,d){super(null,o,a,c,l,u,r,s,h,d);this.image={data:e||null,width:t||1,height:i||1},this.magFilter=l!==void 0?l:ut,this.minFilter=u!==void 0?u:ut,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}};Pr.prototype.isDataTexture=!0;var Zn=new _n,Dr=new w,Li=class{constructor(e=new Lt,t=new Lt,i=new Lt,r=new Lt,s=new Lt,o=new Lt){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){let t=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],c=i[4],l=i[5],u=i[6],h=i[7],d=i[8],f=i[9],p=i[10],v=i[11],x=i[12],g=i[13],m=i[14],S=i[15];return t[0].setComponents(a-r,h-c,v-d,S-x).normalize(),t[1].setComponents(a+r,h+c,v+d,S+x).normalize(),t[2].setComponents(a+s,h+l,v+f,S+g).normalize(),t[3].setComponents(a-s,h-l,v-f,S-g).normalize(),t[4].setComponents(a-o,h-u,v-p,S-m).normalize(),t[5].setComponents(a+o,h+u,v+p,S+m).normalize(),this}intersectsObject(e){let t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Zn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Zn)}intersectsSprite(e){return Zn.center.set(0,0,0),Zn.radius=.7071067811865476,Zn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zn)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Dr.x=r.normal.x>0?e.max.x:e.min.x,Dr.y=r.normal.y>0?e.max.y:e.min.y,Dr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Dr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function qa(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Uu(n,e){let t=e.isWebGL2,i=new WeakMap;function r(l,u){let h=l.array,d=l.usage,f=n.createBuffer();n.bindBuffer(u,f),n.bufferData(u,h,d),l.onUploadCallback();let p=5126;return h instanceof Float32Array?p=5126:h instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):h instanceof Uint16Array?l.isFloat16BufferAttribute?t?p=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):p=5123:h instanceof Int16Array?p=5122:h instanceof Uint32Array?p=5125:h instanceof Int32Array?p=5124:h instanceof Int8Array?p=5120:h instanceof Uint8Array&&(p=5121),{buffer:f,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function s(l,u,h){let d=u.array,f=u.updateRange;n.bindBuffer(h,l),f.count===-1?n.bufferSubData(h,0,d):(t?n.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):n.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1)}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let u=i.get(l);u&&(n.deleteBuffer(u.buffer),i.delete(l))}function c(l,u){if(l.isGLBufferAttribute){let d=i.get(l);(!d||d.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let h=i.get(l);h===void 0?i.set(l,r(l,u)):h.version<l.version&&(s(h.buffer,l,u),h.version=l.version)}return{get:o,remove:a,update:c}}var Jn=class extends Le{constructor(e=1,t=1,i=1,r=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,h=e/a,d=t/c,f=[],p=[],v=[],x=[];for(let g=0;g<u;g++){let m=g*d-o;for(let S=0;S<l;S++){let b=S*h-s;p.push(b,-m,0),v.push(0,0,1),x.push(S/a),x.push(1-g/c)}}for(let g=0;g<c;g++)for(let m=0;m<a;m++){let S=m+l*g,b=m+l*(g+1),T=m+1+l*(g+1),y=m+1+l*g;f.push(S,b,y),f.push(b,T,y)}this.setIndex(f),this.setAttribute("position",new Ee(p,3)),this.setAttribute("normal",new Ee(v,3)),this.setAttribute("uv",new Ee(x,2))}},Gu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,ku=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vu=`#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif`,Wu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif`,qu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xu="vec3 transformed = vec3( position );",ju=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yu=`vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	return vec2( -1.04, 1.04 ) * a004 + r.zw;
}
float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
#if defined ( PHYSICALLY_CORRECT_LIGHTS )
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
#else
	if( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
		return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );
	}
	return 1.0;
#endif
}
vec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {
	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );
	return ( 1.0 - specularColor ) * fresnel + specularColor;
}
vec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {
	float fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );
	vec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;
	return Fr * fresnel + F0;
}
float G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	return 1.0 / ( gl * gv );
}
float G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( incidentLight.direction + viewDir );
	float dotNL = saturate( dot( normal, incidentLight.direction ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( G * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
vec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	return specularColor * brdf.x + brdf.y;
}
void BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	vec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	vec3 FssEss = F * brdf.x + brdf.y;
	float Ess = brdf.x + brdf.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {
	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );
}
float BlinnExponentToGGXRoughness( const in float blinnExponent ) {
	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );
}
#if defined( USE_SHEEN )
float D_Charlie(float roughness, float NoH) {
	float invAlpha = 1.0 / roughness;
	float cos2h = NoH * NoH;
	float sin2h = max(1.0 - cos2h, 0.0078125);	return (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);
}
float V_Neubelt(float NoV, float NoL) {
	return saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));
}
vec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {
	vec3 N = geometry.normal;
	vec3 V = geometry.viewDir;
	vec3 H = normalize( V + L );
	float dotNH = saturate( dot( N, H ) );
	return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );
}
#endif`,Zu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ju=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Qu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$u=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ku=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ed=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,td=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,id=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,rd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement(a) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract(sin(sn) * c);
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	float distance = dot( planeNormal, point - pointOnPlane );
	return - distance * planeNormal + point;
}
float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return sign( dot( point - pointOnPlane, planeNormal ) );
}
vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,sd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,od=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ad=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,ld=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ud="gl_FragColor = linearToOutputTexel( gl_FragColor );",dd=`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,fd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifndef ENVMAP_TYPE_CUBE_UV
		envColor = envMapTexelToLinear( envColor );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,pd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,md=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,gd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xd=`#ifdef USE_FOG
	fogDepth = - mvPosition.z;
#endif`,yd=`#ifdef USE_FOG
	varying float fogDepth;
#endif`,_d=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float fogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,Md=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
#endif`,Sd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ed=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );
		#endif
	}
	#pragma unroll_loop_end
#endif`,Td=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {
	vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	return irradiance;
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		directLight.color = directionalLight.color;
		directLight.direction = directionalLight.direction;
		directLight.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = pointLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		directLight.color = pointLight.color;
		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );
		directLight.visible = ( directLight.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = spotLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		float angleCos = dot( directLight.direction, spotLight.direction );
		if ( angleCos > spotLight.coneCos ) {
			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );
			directLight.color = spotLight.color;
			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );
			directLight.visible = true;
		} else {
			directLight.color = vec3( 0.0 );
			directLight.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {
		float dotNL = dot( geometry.normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			irradiance *= PI;
		#endif
		return irradiance;
	}
#endif`,Ad=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {
		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );
			#else
				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
		#else
			vec4 envMapColor = vec4( 0.0 );
		#endif
		return PI * envMapColor.rgb * envMapIntensity;
	}
	float getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {
		float maxMIPLevelScalar = float( maxMIPLevel );
		float sigma = PI * roughness * roughness / ( 1.0 + roughness );
		float desiredMIPLevel = maxMIPLevelScalar + log2( sigma );
		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );
	}
	vec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( -viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
		#else
			vec3 reflectVec = refract( -viewDir, normal, refractionRatio );
		#endif
		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
		float specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );
			#else
				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
		#endif
		return envMapColor.rgb * envMapIntensity;
	}
#endif`,Ld=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rd=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Cd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pd=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Dd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;
material.specularRoughness = min( material.specularRoughness, 1.0 );
#ifdef REFLECTIVITY
	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );
#endif
#ifdef CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheen;
#endif`,Id=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float specularRoughness;
	vec3 specularColor;
#ifdef CLEARCOAT
	float clearcoat;
	float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	vec3 sheenColor;
#endif
};
#define MAXIMUM_SPECULAR_COEFFICIENT 0.16
#define DEFAULT_SPECULAR_COEFFICIENT 0.04
float clearcoatDHRApprox( const in float roughness, const in float dotNL ) {
	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.specularRoughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	#ifdef CLEARCOAT
		float ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = ccDotNL * directLight.color;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			ccIrradiance *= PI;
		#endif
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
		reflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
	#else
		float clearcoatDHR = 0.0;
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(
			material.specularRoughness,
			directLight.direction,
			geometry,
			material.sheenColor
		);
	#else
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);
	#endif
	reflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef CLEARCOAT
		float ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		reflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
		float ccDotNL = ccDotNV;
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
	#else
		float clearcoatDHR = 0.0;
	#endif
	float clearcoatInv = 1.0 - clearcoatDHR;
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	BRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Fd=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointDirectLightIrradiance( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotDirectLightIrradiance( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Bd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );
	#ifdef CLEARCOAT
		clearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );
	#endif
#endif`,Nd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,zd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Od=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ud=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Gd=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,kd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Wd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`,Yd=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifndef USE_MORPHNORMALS
		uniform float morphTargetInfluences[ 8 ];
	#else
		uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`,Zd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	transformed += morphTarget0 * morphTargetInfluences[ 0 ];
	transformed += morphTarget1 * morphTargetInfluences[ 1 ];
	transformed += morphTarget2 * morphTargetInfluences[ 2 ];
	transformed += morphTarget3 * morphTargetInfluences[ 3 ];
	#ifndef USE_MORPHNORMALS
		transformed += morphTarget4 * morphTargetInfluences[ 4 ];
		transformed += morphTarget5 * morphTargetInfluences[ 5 ];
		transformed += morphTarget6 * morphTargetInfluences[ 6 ];
		transformed += morphTarget7 * morphTargetInfluences[ 7 ];
	#endif
#endif`,Jd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Qd=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( -vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$d=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Kd=`#ifdef CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,ef=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,tf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,nf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,rf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,of=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,af=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hf=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,uf=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,df=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,ff=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,pf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,gf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,xf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_f=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wf=`#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,bf=`#ifdef USE_TRANSMISSIONMAP
	totalTransmission *= texture2D( transmissionMap, vUv ).r;
#endif`,Mf=`#ifdef USE_TRANSMISSIONMAP
	uniform sampler2D transmissionMap;
#endif`,Sf=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Ef=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Tf=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Af=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Lf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Rf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Cf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Pf=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Df=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,If=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ff=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Nf=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Of=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Hf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Uf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
	
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wf=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <skinbase_vertex>
	#ifdef USE_ENVMAP
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,qf=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xf=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yf=`#define MATCAP
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#ifndef FLAT_SHADED
		vNormal = normalize( transformedNormal );
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Zf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jf=`#define TOON
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$f=`#define PHONG
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kf=`#define STANDARD
#ifdef PHYSICAL
	#define REFLECTIVITY
	#define CLEARCOAT
	#define TRANSMISSION
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef TRANSMISSION
	uniform float transmission;
#endif
#ifdef REFLECTIVITY
	uniform float reflectivity;
#endif
#ifdef CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#ifdef TRANSMISSION
		float totalTransmission = transmission;
	#endif
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <transmissionmap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#ifdef TRANSMISSION
		diffuseColor.a *= mix( saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) ), 1.0, metalness );
	#endif
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ep=`#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <packing>
#include <uv_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,np=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ip=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,sp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,op=`#include <common>
#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ap=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,cp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Re={alphamap_fragment:Gu,alphamap_pars_fragment:ku,alphatest_fragment:Vu,aomap_fragment:Wu,aomap_pars_fragment:qu,begin_vertex:Xu,beginnormal_vertex:ju,bsdfs:Yu,bumpmap_pars_fragment:Zu,clipping_planes_fragment:Ju,clipping_planes_pars_fragment:Qu,clipping_planes_pars_vertex:$u,clipping_planes_vertex:Ku,color_fragment:ed,color_pars_fragment:td,color_pars_vertex:nd,color_vertex:id,common:rd,cube_uv_reflection_fragment:sd,defaultnormal_vertex:od,displacementmap_pars_vertex:ad,displacementmap_vertex:cd,emissivemap_fragment:ld,emissivemap_pars_fragment:hd,encodings_fragment:ud,encodings_pars_fragment:dd,envmap_fragment:fd,envmap_common_pars_fragment:pd,envmap_pars_fragment:md,envmap_pars_vertex:gd,envmap_physical_pars_fragment:Ad,envmap_vertex:vd,fog_vertex:xd,fog_pars_vertex:yd,fog_fragment:_d,fog_pars_fragment:wd,gradientmap_pars_fragment:bd,lightmap_fragment:Md,lightmap_pars_fragment:Sd,lights_lambert_vertex:Ed,lights_pars_begin:Td,lights_toon_fragment:Ld,lights_toon_pars_fragment:Rd,lights_phong_fragment:Cd,lights_phong_pars_fragment:Pd,lights_physical_fragment:Dd,lights_physical_pars_fragment:Id,lights_fragment_begin:Fd,lights_fragment_maps:Bd,lights_fragment_end:Nd,logdepthbuf_fragment:zd,logdepthbuf_pars_fragment:Od,logdepthbuf_pars_vertex:Hd,logdepthbuf_vertex:Ud,map_fragment:Gd,map_pars_fragment:kd,map_particle_fragment:Vd,map_particle_pars_fragment:Wd,metalnessmap_fragment:qd,metalnessmap_pars_fragment:Xd,morphnormal_vertex:jd,morphtarget_pars_vertex:Yd,morphtarget_vertex:Zd,normal_fragment_begin:Jd,normal_fragment_maps:Qd,normalmap_pars_fragment:$d,clearcoat_normal_fragment_begin:Kd,clearcoat_normal_fragment_maps:ef,clearcoat_pars_fragment:tf,packing:nf,premultiplied_alpha_fragment:rf,project_vertex:sf,dithering_fragment:of,dithering_pars_fragment:af,roughnessmap_fragment:cf,roughnessmap_pars_fragment:lf,shadowmap_pars_fragment:hf,shadowmap_pars_vertex:uf,shadowmap_vertex:df,shadowmask_pars_fragment:ff,skinbase_vertex:pf,skinning_pars_vertex:mf,skinning_vertex:gf,skinnormal_vertex:vf,specularmap_fragment:xf,specularmap_pars_fragment:yf,tonemapping_fragment:_f,tonemapping_pars_fragment:wf,transmissionmap_fragment:bf,transmissionmap_pars_fragment:Mf,uv_pars_fragment:Sf,uv_pars_vertex:Ef,uv_vertex:Tf,uv2_pars_fragment:Af,uv2_pars_vertex:Lf,uv2_vertex:Rf,worldpos_vertex:Cf,background_frag:Pf,background_vert:Df,cube_frag:If,cube_vert:Ff,depth_frag:Bf,depth_vert:Nf,distanceRGBA_frag:zf,distanceRGBA_vert:Of,equirect_frag:Hf,equirect_vert:Uf,linedashed_frag:Gf,linedashed_vert:kf,meshbasic_frag:Vf,meshbasic_vert:Wf,meshlambert_frag:qf,meshlambert_vert:Xf,meshmatcap_frag:jf,meshmatcap_vert:Yf,meshtoon_frag:Zf,meshtoon_vert:Jf,meshphong_frag:Qf,meshphong_vert:$f,meshphysical_frag:Kf,meshphysical_vert:ep,normal_frag:tp,normal_vert:np,points_frag:ip,points_vert:rp,shadow_frag:sp,shadow_vert:op,sprite_frag:ap,sprite_vert:cp},K={common:{diffuse:{value:new ae(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new et},uv2Transform:{value:new et},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new V(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ae(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvTransform:{value:new et}},sprite:{diffuse:{value:new ae(15658734)},opacity:{value:1},center:{value:new V(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},uvTransform:{value:new et}}},zt={basic:{uniforms:ot([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.fog]),vertexShader:Re.meshbasic_vert,fragmentShader:Re.meshbasic_frag},lambert:{uniforms:ot([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.fog,K.lights,{emissive:{value:new ae(0)}}]),vertexShader:Re.meshlambert_vert,fragmentShader:Re.meshlambert_frag},phong:{uniforms:ot([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.fog,K.lights,{emissive:{value:new ae(0)},specular:{value:new ae(1118481)},shininess:{value:30}}]),vertexShader:Re.meshphong_vert,fragmentShader:Re.meshphong_frag},standard:{uniforms:ot([K.common,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.roughnessmap,K.metalnessmap,K.fog,K.lights,{emissive:{value:new ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag},toon:{uniforms:ot([K.common,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.gradientmap,K.fog,K.lights,{emissive:{value:new ae(0)}}]),vertexShader:Re.meshtoon_vert,fragmentShader:Re.meshtoon_frag},matcap:{uniforms:ot([K.common,K.bumpmap,K.normalmap,K.displacementmap,K.fog,{matcap:{value:null}}]),vertexShader:Re.meshmatcap_vert,fragmentShader:Re.meshmatcap_frag},points:{uniforms:ot([K.points,K.fog]),vertexShader:Re.points_vert,fragmentShader:Re.points_frag},dashed:{uniforms:ot([K.common,K.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Re.linedashed_vert,fragmentShader:Re.linedashed_frag},depth:{uniforms:ot([K.common,K.displacementmap]),vertexShader:Re.depth_vert,fragmentShader:Re.depth_frag},normal:{uniforms:ot([K.common,K.bumpmap,K.normalmap,K.displacementmap,{opacity:{value:1}}]),vertexShader:Re.normal_vert,fragmentShader:Re.normal_frag},sprite:{uniforms:ot([K.sprite,K.fog]),vertexShader:Re.sprite_vert,fragmentShader:Re.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null}},vertexShader:Re.background_vert,fragmentShader:Re.background_frag},cube:{uniforms:ot([K.envmap,{opacity:{value:1}}]),vertexShader:Re.cube_vert,fragmentShader:Re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Re.equirect_vert,fragmentShader:Re.equirect_frag},distanceRGBA:{uniforms:ot([K.common,K.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Re.distanceRGBA_vert,fragmentShader:Re.distanceRGBA_frag},shadow:{uniforms:ot([K.lights,K.fog,{color:{value:new ae(0)},opacity:{value:1}}]),vertexShader:Re.shadow_vert,fragmentShader:Re.shadow_frag}};zt.physical={uniforms:ot([zt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new V(1,1)},clearcoatNormalMap:{value:null},sheen:{value:new ae(0)},transmission:{value:0},transmissionMap:{value:null}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag};function lp(n,e,t,i,r){let s=new ae(0),o=0,a,c,l=null,u=0,h=null;function d(p,v,x,g){let m=v.isScene===!0?v.background:null;m&&m.isTexture&&(m=e.get(m));let S=n.xr,b=S.getSession&&S.getSession();b&&b.environmentBlendMode==="additive"&&(m=null),m===null?f(s,o):m&&m.isColor&&(f(m,1),g=!0),(n.autoClear||g)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),m&&(m.isCubeTexture||m.mapping===ps)?(c===void 0&&(c=new De(new an(1,1,1),new Ge({name:"BackgroundCubeMaterial",uniforms:Wn(zt.cube.uniforms),vertexShader:zt.cube.vertexShader,fragmentShader:zt.cube.fragmentShader,side:Ke,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,y,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=m,c.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m._needsFlipEnvMap?-1:1,(l!==m||u!==m.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,l=m,u=m.version,h=n.toneMapping),p.unshift(c,c.geometry,c.material,0,0,null)):m&&m.isTexture&&(a===void 0&&(a=new De(new Jn(2,2),new Ge({name:"BackgroundMaterial",uniforms:Wn(zt.background.uniforms),vertexShader:zt.background.vertexShader,fragmentShader:zt.background.fragmentShader,side:nr,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(a)),a.material.uniforms.t2D.value=m,m.matrixAutoUpdate===!0&&m.updateMatrix(),a.material.uniforms.uvTransform.value.copy(m.matrix),(l!==m||u!==m.version||h!==n.toneMapping)&&(a.material.needsUpdate=!0,l=m,u=m.version,h=n.toneMapping),p.unshift(a,a.geometry,a.material,0,0,null))}function f(p,v){t.buffers.color.setClear(p.r,p.g,p.b,v,r)}return{getClearColor:function(){return s},setClearColor:function(p,v=1){s.set(p),o=v,f(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(p){o=p,f(s,o)},render:d}}function hp(n,e,t,i){let r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},c=v(null),l=c;function u(P,R,B,F,X){let ee=!1;if(o){let Z=p(F,B,R);l!==Z&&(l=Z,d(l.object)),ee=x(F,X),ee&&g(F,X)}else{let Z=R.wireframe===!0;(l.geometry!==F.id||l.program!==B.id||l.wireframe!==Z)&&(l.geometry=F.id,l.program=B.id,l.wireframe=Z,ee=!0)}P.isInstancedMesh===!0&&(ee=!0),X!==null&&t.update(X,34963),ee&&(L(P,R,B,F),X!==null&&n.bindBuffer(34963,t.get(X).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function d(P){return i.isWebGL2?n.bindVertexArray(P):s.bindVertexArrayOES(P)}function f(P){return i.isWebGL2?n.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function p(P,R,B){let F=B.wireframe===!0,X=a[P.id];X===void 0&&(X={},a[P.id]=X);let ee=X[R.id];ee===void 0&&(ee={},X[R.id]=ee);let Z=ee[F];return Z===void 0&&(Z=v(h()),ee[F]=Z),Z}function v(P){let R=[],B=[],F=[];for(let X=0;X<r;X++)R[X]=0,B[X]=0,F[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:B,attributeDivisors:F,object:P,attributes:{},index:null}}function x(P,R){let B=l.attributes,F=P.attributes,X=0;for(let ee in F){let Z=B[ee],se=F[ee];if(Z===void 0||Z.attribute!==se||Z.data!==se.data)return!0;X++}return l.attributesNum!==X||l.index!==R}function g(P,R){let B={},F=P.attributes,X=0;for(let ee in F){let Z=F[ee],se={};se.attribute=Z,Z.data&&(se.data=Z.data),B[ee]=se,X++}l.attributes=B,l.attributesNum=X,l.index=R}function m(){let P=l.newAttributes;for(let R=0,B=P.length;R<B;R++)P[R]=0}function S(P){b(P,0)}function b(P,R){let B=l.newAttributes,F=l.enabledAttributes,X=l.attributeDivisors;B[P]=1,F[P]===0&&(n.enableVertexAttribArray(P),F[P]=1),X[P]!==R&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,R),X[P]=R)}function T(){let P=l.newAttributes,R=l.enabledAttributes;for(let B=0,F=R.length;B<F;B++)R[B]!==P[B]&&(n.disableVertexAttribArray(B),R[B]=0)}function y(P,R,B,F,X,ee){i.isWebGL2===!0&&(B===5124||B===5125)?n.vertexAttribIPointer(P,R,B,X,ee):n.vertexAttribPointer(P,R,B,F,X,ee)}function L(P,R,B,F){if(i.isWebGL2===!1&&(P.isInstancedMesh||F.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;m();let X=F.attributes,ee=B.getAttributes(),Z=R.defaultAttributeValues;for(let se in ee){let j=ee[se];if(j>=0){let oe=X[se];if(oe!==void 0){let ue=oe.normalized,H=oe.itemSize,we=t.get(oe);if(we===void 0)continue;let Me=we.buffer,le=we.type,fe=we.bytesPerElement;if(oe.isInterleavedBufferAttribute){let Ie=oe.data,Te=Ie.stride,Ce=oe.offset;Ie&&Ie.isInstancedInterleavedBuffer?(b(j,Ie.meshPerAttribute),F._maxInstanceCount===void 0&&(F._maxInstanceCount=Ie.meshPerAttribute*Ie.count)):S(j),n.bindBuffer(34962,Me),y(j,H,le,ue,Te*fe,Ce*fe)}else oe.isInstancedBufferAttribute?(b(j,oe.meshPerAttribute),F._maxInstanceCount===void 0&&(F._maxInstanceCount=oe.meshPerAttribute*oe.count)):S(j),n.bindBuffer(34962,Me),y(j,H,le,ue,0,0)}else if(se==="instanceMatrix"){let ue=t.get(P.instanceMatrix);if(ue===void 0)continue;let H=ue.buffer,we=ue.type;b(j+0,1),b(j+1,1),b(j+2,1),b(j+3,1),n.bindBuffer(34962,H),n.vertexAttribPointer(j+0,4,we,!1,64,0),n.vertexAttribPointer(j+1,4,we,!1,64,16),n.vertexAttribPointer(j+2,4,we,!1,64,32),n.vertexAttribPointer(j+3,4,we,!1,64,48)}else if(se==="instanceColor"){let ue=t.get(P.instanceColor);if(ue===void 0)continue;let H=ue.buffer,we=ue.type;b(j,1),n.bindBuffer(34962,H),n.vertexAttribPointer(j,3,we,!1,12,0)}else if(Z!==void 0){let ue=Z[se];if(ue!==void 0)switch(ue.length){case 2:n.vertexAttrib2fv(j,ue);break;case 3:n.vertexAttrib3fv(j,ue);break;case 4:n.vertexAttrib4fv(j,ue);break;default:n.vertexAttrib1fv(j,ue)}}}}T()}function I(){C();for(let P in a){let R=a[P];for(let B in R){let F=R[B];for(let X in F)f(F[X].object),delete F[X];delete R[B]}delete a[P]}}function D(P){if(a[P.id]===void 0)return;let R=a[P.id];for(let B in R){let F=R[B];for(let X in F)f(F[X].object),delete F[X];delete R[B]}delete a[P.id]}function O(P){for(let R in a){let B=a[R];if(B[P.id]===void 0)continue;let F=B[P.id];for(let X in F)f(F[X].object),delete F[X];delete B[P.id]}}function C(){U(),l!==c&&(l=c,d(l.object))}function U(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:C,resetDefaultState:U,dispose:I,releaseStatesOfGeometry:D,releaseStatesOfProgram:O,initAttributes:m,enableAttribute:S,disableUnusedAttributes:T}}function up(n,e,t,i){let r=i.isWebGL2,s;function o(l){s=l}function a(l,u){n.drawArrays(s,l,u),t.update(u,s,1)}function c(l,u,h){if(h===0)return;let d,f;if(r)d=n,f="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](s,l,u,h),t.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=c}function dp(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let y=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(y){if(y==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";y="mediump"}return y==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext!="undefined"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&n instanceof WebGL2ComputeRenderingContext,a=t.precision!==void 0?t.precision:"highp",c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=t.logarithmicDepthBuffer===!0,u=n.getParameter(34930),h=n.getParameter(35660),d=n.getParameter(3379),f=n.getParameter(34076),p=n.getParameter(34921),v=n.getParameter(36347),x=n.getParameter(36348),g=n.getParameter(36349),m=h>0,S=o||e.has("OES_texture_float"),b=m&&S,T=o?n.getParameter(36183):0;return{isWebGL2:o,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:l,maxTextures:u,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:g,vertexTextures:m,floatFragmentTextures:S,floatVertexTextures:b,maxSamples:T}}function fp(n){let e=this,t=null,i=0,r=!1,s=!1,o=new Lt,a=new et,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d,f){let p=h.length!==0||d||i!==0||r;return r=d,t=u(h,f,0),i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,l()},this.setState=function(h,d,f){let p=h.clippingPlanes,v=h.clipIntersection,x=h.clipShadows,g=n.get(h);if(!r||p===null||p.length===0||s&&!x)s?u(null):l();else{let m=s?0:i,S=m*4,b=g.clippingState||null;c.value=b,b=u(p,d,S,f);for(let T=0;T!==S;++T)b[T]=t[T];g.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=m}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,p){let v=h!==null?h.length:0,x=null;if(v!==0){if(x=c.value,p!==!0||x===null){let g=f+v*4,m=d.matrixWorldInverse;a.getNormalMatrix(m),(x===null||x.length<g)&&(x=new Float32Array(g));for(let S=0,b=f;S!==v;++S,b+=4)o.copy(h[S]).applyMatrix4(m,a),o.normal.toArray(x,b),x[b+3]=o.constant}c.value=x,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,x}}function pp(n){let e=new WeakMap;function t(o,a){return a===ha?o.mapping=ds:a===ua&&(o.mapping=fs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===ha||a===ua)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=n.getRenderTarget(),u=new $s(c.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),n.setRenderTarget(l),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}function mp(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float")},get:function(i){let r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function gp(n,e,t,i){let r={},s=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete r[d.id];let f=s.get(d);f&&(e.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function c(h){let d=h.attributes;for(let p in d)e.update(d[p],34962);let f=h.morphAttributes;for(let p in f){let v=f[p];for(let x=0,g=v.length;x<g;x++)e.update(v[x],34962)}}function l(h){let d=[],f=h.index,p=h.attributes.position,v=0;if(f!==null){let m=f.array;v=f.version;for(let S=0,b=m.length;S<b;S+=3){let T=m[S+0],y=m[S+1],L=m[S+2];d.push(T,y,y,L,L,T)}}else{let m=p.array;v=p.version;for(let S=0,b=m.length/3-1;S<b;S+=3){let T=S+0,y=S+1,L=S+2;d.push(T,y,y,L,L,T)}}let x=new(Va(d)>65535?Ei:Si)(d,1);x.version=v;let g=s.get(h);g&&e.remove(g),s.set(h,x)}function u(h){let d=s.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function vp(n,e,t,i){let r=i.isWebGL2,s;function o(d){s=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function u(d,f){n.drawElements(s,f,a,d*c),t.update(f,s,1)}function h(d,f,p){if(p===0)return;let v,x;if(r)v=n,x="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),x="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[x](s,f,a,d*c,p),t.update(f,s,p)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=h}function xp(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function yp(n,e){return n[0]-e[0]}function _p(n,e){return Math.abs(e[1])-Math.abs(n[1])}function wp(n){let e={},t=new Float32Array(8),i=[];for(let s=0;s<8;s++)i[s]=[s,0];function r(s,o,a,c){let l=s.morphTargetInfluences,u=l===void 0?0:l.length,h=e[o.id];if(h===void 0){h=[];for(let x=0;x<u;x++)h[x]=[x,0];e[o.id]=h}for(let x=0;x<u;x++){let g=h[x];g[0]=x,g[1]=l[x]}h.sort(_p);for(let x=0;x<8;x++)x<u&&h[x][1]?(i[x][0]=h[x][0],i[x][1]=h[x][1]):(i[x][0]=Number.MAX_SAFE_INTEGER,i[x][1]=0);i.sort(yp);let d=a.morphTargets&&o.morphAttributes.position,f=a.morphNormals&&o.morphAttributes.normal,p=0;for(let x=0;x<8;x++){let g=i[x],m=g[0],S=g[1];m!==Number.MAX_SAFE_INTEGER&&S?(d&&o.getAttribute("morphTarget"+x)!==d[m]&&o.setAttribute("morphTarget"+x,d[m]),f&&o.getAttribute("morphNormal"+x)!==f[m]&&o.setAttribute("morphNormal"+x,f[m]),t[x]=S,p+=S):(d&&o.hasAttribute("morphTarget"+x)===!0&&o.deleteAttribute("morphTarget"+x),f&&o.hasAttribute("morphNormal"+x)===!0&&o.deleteAttribute("morphNormal"+x),t[x]=0)}let v=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(n,"morphTargetBaseInfluence",v),c.getUniforms().setValue(n,"morphTargetInfluences",t)}return{update:r}}function bp(n,e,t,i){let r=new WeakMap;function s(c){let l=i.render.frame,u=c.geometry,h=e.get(c,u);return r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),h}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}var Ks=class extends tt{constructor(e=null,t=1,i=1,r=1){super(null);this.image={data:e,width:t,height:i,depth:r},this.magFilter=ut,this.minFilter=ut,this.wrapR=yt,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}};Ks.prototype.isDataTexture2DArray=!0;var eo=class extends tt{constructor(e=null,t=1,i=1,r=1){super(null);this.image={data:e,width:t,height:i,depth:r},this.magFilter=ut,this.minFilter=ut,this.wrapR=yt,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}};eo.prototype.isDataTexture3D=!0;var Xa=new tt,Mp=new Ks,Sp=new eo,ja=new Ai,Ya=[],Za=[],Ja=new Float32Array(16),Qa=new Float32Array(9),$a=new Float32Array(4);function Qn(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=Ya[r];if(s===void 0&&(s=new Float32Array(r),Ya[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function ft(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function ct(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ka(n,e){let t=Za[e];t===void 0&&(t=new Int32Array(e),Za[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Ep(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Tp(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;n.uniform2fv(this.addr,e),ct(t,e)}}function Ap(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ft(t,e))return;n.uniform3fv(this.addr,e),ct(t,e)}}function Lp(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;n.uniform4fv(this.addr,e),ct(t,e)}}function Rp(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(ft(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ct(t,e)}else{if(ft(t,i))return;$a.set(i),n.uniformMatrix2fv(this.addr,!1,$a),ct(t,i)}}function Cp(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(ft(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ct(t,e)}else{if(ft(t,i))return;Qa.set(i),n.uniformMatrix3fv(this.addr,!1,Qa),ct(t,i)}}function Pp(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(ft(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ct(t,e)}else{if(ft(t,i))return;Ja.set(i),n.uniformMatrix4fv(this.addr,!1,Ja),ct(t,i)}}function Dp(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Ip(n,e){let t=this.cache;ft(t,e)||(n.uniform2iv(this.addr,e),ct(t,e))}function Fp(n,e){let t=this.cache;ft(t,e)||(n.uniform3iv(this.addr,e),ct(t,e))}function Bp(n,e){let t=this.cache;ft(t,e)||(n.uniform4iv(this.addr,e),ct(t,e))}function Np(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function zp(n,e){let t=this.cache;ft(t,e)||(n.uniform2uiv(this.addr,e),ct(t,e))}function Op(n,e){let t=this.cache;ft(t,e)||(n.uniform3uiv(this.addr,e),ct(t,e))}function Hp(n,e){let t=this.cache;ft(t,e)||(n.uniform4uiv(this.addr,e),ct(t,e))}function Up(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.safeSetTexture2D(e||Xa,r)}function Gp(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Sp,r)}function kp(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.safeSetTextureCube(e||ja,r)}function Vp(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Mp,r)}function Wp(n){switch(n){case 5126:return Ep;case 35664:return Tp;case 35665:return Ap;case 35666:return Lp;case 35674:return Rp;case 35675:return Cp;case 35676:return Pp;case 5124:case 35670:return Dp;case 35667:case 35671:return Ip;case 35668:case 35672:return Fp;case 35669:case 35673:return Bp;case 5125:return Np;case 36294:return zp;case 36295:return Op;case 36296:return Hp;case 35678:case 36198:case 36298:case 36306:case 35682:return Up;case 35679:case 36299:case 36307:return Gp;case 35680:case 36300:case 36308:case 36293:return kp;case 36289:case 36303:case 36311:case 36292:return Vp}}function qp(n,e){n.uniform1fv(this.addr,e)}function Xp(n,e){let t=Qn(e,this.size,2);n.uniform2fv(this.addr,t)}function jp(n,e){let t=Qn(e,this.size,3);n.uniform3fv(this.addr,t)}function Yp(n,e){let t=Qn(e,this.size,4);n.uniform4fv(this.addr,t)}function Zp(n,e){let t=Qn(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Jp(n,e){let t=Qn(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Qp(n,e){let t=Qn(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function $p(n,e){n.uniform1iv(this.addr,e)}function Kp(n,e){n.uniform2iv(this.addr,e)}function em(n,e){n.uniform3iv(this.addr,e)}function tm(n,e){n.uniform4iv(this.addr,e)}function nm(n,e){n.uniform1uiv(this.addr,e)}function im(n,e){n.uniform2uiv(this.addr,e)}function rm(n,e){n.uniform3uiv(this.addr,e)}function sm(n,e){n.uniform4uiv(this.addr,e)}function om(n,e,t){let i=e.length,r=Ka(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.safeSetTexture2D(e[s]||Xa,r[s])}function am(n,e,t){let i=e.length,r=Ka(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.safeSetTextureCube(e[s]||ja,r[s])}function cm(n){switch(n){case 5126:return qp;case 35664:return Xp;case 35665:return jp;case 35666:return Yp;case 35674:return Zp;case 35675:return Jp;case 35676:return Qp;case 5124:case 35670:return $p;case 35667:case 35671:return Kp;case 35668:case 35672:return em;case 35669:case 35673:return tm;case 5125:return nm;case 36294:return im;case 36295:return rm;case 36296:return sm;case 35678:case 36198:case 36298:case 36306:case 35682:return om;case 35680:case 36300:case 36308:case 36293:return am}}function lm(n,e,t){this.id=n,this.addr=t,this.cache=[],this.setValue=Wp(e.type)}function ec(n,e,t){this.id=n,this.addr=t,this.cache=[],this.size=e.size,this.setValue=cm(e.type)}ec.prototype.updateCache=function(n){let e=this.cache;n instanceof Float32Array&&e.length!==n.length&&(this.cache=new Float32Array(n.length)),ct(e,n)};function tc(n){this.id=n,this.seq=[],this.map={}}tc.prototype.setValue=function(n,e,t){let i=this.seq;for(let r=0,s=i.length;r!==s;++r){let o=i[r];o.setValue(n,e[o.id],t)}};var to=/(\w+)(\])?(\[|\.)?/g;function nc(n,e){n.seq.push(e),n.map[e.id]=e}function hm(n,e,t){let i=n.name,r=i.length;for(to.lastIndex=0;;){let s=to.exec(i),o=to.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){nc(t,l===void 0?new lm(a,n,e):new ec(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new tc(a),nc(t,h)),t=h}}}function cn(n,e){this.seq=[],this.map={};let t=n.getProgramParameter(e,35718);for(let i=0;i<t;++i){let r=n.getActiveUniform(e,i),s=n.getUniformLocation(e,r.name);hm(r,s,this)}}cn.prototype.setValue=function(n,e,t,i){let r=this.map[e];r!==void 0&&r.setValue(n,t,i)};cn.prototype.setOptional=function(n,e,t){let i=e[t];i!==void 0&&this.setValue(n,t,i)};cn.upload=function(n,e,t,i){for(let r=0,s=e.length;r!==s;++r){let o=e[r],a=t[o.id];a.needsUpdate!==!1&&o.setValue(n,a.value,i)}};cn.seqWithValue=function(n,e){let t=[];for(let i=0,r=n.length;i!==r;++i){let s=n[i];s.id in e&&t.push(s)}return t};function ic(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var um=0;function dm(n){let e=n.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function rc(n){switch(n){case Pn:return["Linear","( value )"];case xi:return["sRGB","( value )"];case Ta:return["RGBE","( value )"];case Aa:return["RGBM","( value, 7.0 )"];case La:return["RGBM","( value, 16.0 )"];case Ra:return["RGBD","( value, 256.0 )"];case Ea:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case _u:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function sc(n,e,t){let i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=n.getShaderSource(e);return"THREE.WebGLShader: gl.getShaderInfoLog() "+t+`
`+r+dm(s)}function Ri(n,e){let t=rc(e);return"vec4 "+n+"( vec4 value ) { return "+t[0]+"ToLinear"+t[1]+"; }"}function fm(n,e){let t=rc(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function pm(n,e){let t;switch(e){case _h:t="Linear";break;case us:t="Reinhard";break;case wh:t="OptimizedCineon";break;case bh:t="ACESFilmic";break;case Mh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function mm(n){return[n.extensionDerivatives||n.envMapCubeUV||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ci).join(`
`)}function gm(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function vm(n,e){let t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){let o=n.getActiveAttrib(e,r).name;t[o]=n.getAttribLocation(e,o)}return t}function Ci(n){return n!==""}function oc(n,e){return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ac(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var xm=/^[ \t]*#include +<([\w\d./]+)>/gm;function no(n){return n.replace(xm,ym)}function ym(n,e){let t=Re[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return no(t)}var _m=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,wm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cc(n){return n.replace(wm,lc).replace(_m,bm)}function bm(n,e,t,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),lc(n,e,t,i)}function lc(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function hc(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Mm(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ta?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===$l?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===di&&(e="SHADOWMAP_TYPE_VSM"),e}function Sm(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ds:case fs:e="ENVMAP_TYPE_CUBE";break;case ps:case ms:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Em(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case fs:case ms:e="ENVMAP_MODE_REFRACTION";break}return e}function Tm(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case rr:e="ENVMAP_BLENDING_MULTIPLY";break;case xh:e="ENVMAP_BLENDING_MIX";break;case yh:e="ENVMAP_BLENDING_ADD";break}return e}function Am(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=Mm(t),l=Sm(t),u=Em(t),h=Tm(t),d=n.gammaFactor>0?n.gammaFactor:1,f=t.isWebGL2?"":mm(t),p=gm(s),v=r.createProgram(),x,g,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=[p].filter(Ci).join(`
`),x.length>0&&(x+=`
`),g=[f,p].filter(Ci).join(`
`),g.length>0&&(g+=`
`)):(x=[hc(t),"#define SHADER_NAME "+t.shaderName,p,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+d,"#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ci).join(`
`),g=[f,hc(t),"#define SHADER_NAME "+t.shaderName,p,t.alphaTest?"#define ALPHATEST "+t.alphaTest+(t.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.sheen?"#define USE_SHEEN":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mi?"#define TONE_MAPPING":"",t.toneMapping!==mi?Re.tonemapping_pars_fragment:"",t.toneMapping!==mi?pm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",Re.encodings_pars_fragment,t.map?Ri("mapTexelToLinear",t.mapEncoding):"",t.matcap?Ri("matcapTexelToLinear",t.matcapEncoding):"",t.envMap?Ri("envMapTexelToLinear",t.envMapEncoding):"",t.emissiveMap?Ri("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",t.lightMap?Ri("lightMapTexelToLinear",t.lightMapEncoding):"",fm("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ci).join(`
`)),o=no(o),o=oc(o,t),o=ac(o,t),a=no(a),a=oc(a,t),a=ac(a,t),o=cc(o),a=cc(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,x=["#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",t.glslVersion===Ca?"":"out highp vec4 pc_fragColor;",t.glslVersion===Ca?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let S=m+x+o,b=m+g+a,T=ic(r,35633,S),y=ic(r,35632,b);if(r.attachShader(v,T),r.attachShader(v,y),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v),n.debug.checkShaderErrors){let D=r.getProgramInfoLog(v).trim(),O=r.getShaderInfoLog(T).trim(),C=r.getShaderInfoLog(y).trim(),U=!0,P=!0;if(r.getProgramParameter(v,35714)===!1){U=!1;let R=sc(r,T,"vertex"),B=sc(r,y,"fragment");console.error("THREE.WebGLProgram: shader error: ",r.getError(),"35715",r.getProgramParameter(v,35715),"gl.getProgramInfoLog",D,R,B)}else D!==""?console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",D):(O===""||C==="")&&(P=!1);P&&(this.diagnostics={runnable:U,programLog:D,vertexShader:{log:O,prefix:x},fragmentShader:{log:C,prefix:g}})}r.deleteShader(T),r.deleteShader(y);let L;this.getUniforms=function(){return L===void 0&&(L=new cn(r,v)),L};let I;return this.getAttributes=function(){return I===void 0&&(I=vm(r,v)),I},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.name=t.shaderName,this.id=um++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=y,this}function Lm(n,e,t,i,r,s){let o=[],a=i.isWebGL2,c=i.logarithmicDepthBuffer,l=i.floatVertexTextures,u=i.maxVertexUniforms,h=i.vertexTextures,d=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},p=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","vertexAlphas","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","sheen","transmissionMap"];function v(y){let I=y.skeleton.bones;if(l)return 1024;{let O=Math.floor((u-20)/4),C=Math.min(O,I.length);return C<I.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+I.length+" bones. This GPU supports "+C+"."),0):C}}function x(y){let L;return y&&y.isTexture?L=y.encoding:y&&y.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),L=y.texture.encoding):L=Pn,L}function g(y,L,I,D,O){let C=D.fog,U=y.isMeshStandardMaterial?D.environment:null,P=e.get(y.envMap||U),R=f[y.type],B=O.isSkinnedMesh?v(O):0;y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));let F,X;if(R){let se=zt[R];F=se.vertexShader,X=se.fragmentShader}else F=y.vertexShader,X=y.fragmentShader;let ee=n.getRenderTarget();return{isWebGL2:a,shaderID:R,shaderName:y.type,vertexShader:F,fragmentShader:X,defines:y.defines,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,instancing:O.isInstancedMesh===!0,instancingColor:O.isInstancedMesh===!0&&O.instanceColor!==null,supportsVertexTextures:h,outputEncoding:ee!==null?x(ee.texture):n.outputEncoding,map:!!y.map,mapEncoding:x(y.map),matcap:!!y.matcap,matcapEncoding:x(y.matcap),envMap:!!P,envMapMode:P&&P.mapping,envMapEncoding:x(P),envMapCubeUV:!!P&&(P.mapping===ps||P.mapping===ms),lightMap:!!y.lightMap,lightMapEncoding:x(y.lightMap),aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,emissiveMapEncoding:x(y.emissiveMap),bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===Mu,tangentSpaceNormalMap:y.normalMapType===Dn,clearcoatMap:!!y.clearcoatMap,clearcoatRoughnessMap:!!y.clearcoatRoughnessMap,clearcoatNormalMap:!!y.clearcoatNormalMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,alphaMap:!!y.alphaMap,gradientMap:!!y.gradientMap,sheen:!!y.sheen,transmissionMap:!!y.transmissionMap,combine:y.combine,vertexTangents:y.normalMap&&y.vertexTangents,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&O.geometry.attributes.color&&O.geometry.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.displacementMap||!!y.transmissionMap,uvsVertexOnly:!(!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatNormalMap||!!y.transmissionMap)&&!!y.displacementMap,fog:!!C,useFog:y.fog,fogExp2:C&&C.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:c,skinning:y.skinning&&B>0,maxBones:B,useVertexTexture:l,morphTargets:y.morphTargets,morphNormals:y.morphNormals,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:y.toneMapped?n.toneMapping:mi,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,alphaTest:y.alphaTest,doubleSided:y.side===Zt,flipSided:y.side===Ke,depthPacking:y.depthPacking!==void 0?y.depthPacking:!1,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:a||t.has("EXT_frag_depth"),rendererExtensionDrawBuffers:a||t.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:a||t.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function m(y){let L=[];if(y.shaderID?L.push(y.shaderID):(L.push(y.fragmentShader),L.push(y.vertexShader)),y.defines!==void 0)for(let I in y.defines)L.push(I),L.push(y.defines[I]);if(y.isRawShaderMaterial===!1){for(let I=0;I<p.length;I++)L.push(y[p[I]]);L.push(n.outputEncoding),L.push(n.gammaFactor)}return L.push(y.customProgramCacheKey),L.join()}function S(y){let L=f[y.type],I;if(L){let D=zt[L];I=qn.clone(D.uniforms)}else I=y.uniforms;return I}function b(y,L){let I;for(let D=0,O=o.length;D<O;D++){let C=o[D];if(C.cacheKey===L){I=C,++I.usedTimes;break}}return I===void 0&&(I=new Am(n,L,y,r),o.push(I)),I}function T(y){if(--y.usedTimes==0){let L=o.indexOf(y);o[L]=o[o.length-1],o.pop(),y.destroy()}}return{getParameters:g,getProgramCacheKey:m,getUniforms:S,acquireProgram:b,releaseProgram:T,programs:o}}function Rm(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Cm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.program!==e.program?n.program.id-e.program.id:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Pm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function uc(n){let e=[],t=0,i=[],r=[],s={id:-1};function o(){t=0,i.length=0,r.length=0}function a(d,f,p,v,x,g){let m=e[t],S=n.get(p);return m===void 0?(m={id:d.id,object:d,geometry:f,material:p,program:S.program||s,groupOrder:v,renderOrder:d.renderOrder,z:x,group:g},e[t]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=p,m.program=S.program||s,m.groupOrder=v,m.renderOrder=d.renderOrder,m.z=x,m.group=g),t++,m}function c(d,f,p,v,x,g){let m=a(d,f,p,v,x,g);(p.transparent===!0?r:i).push(m)}function l(d,f,p,v,x,g){let m=a(d,f,p,v,x,g);(p.transparent===!0?r:i).unshift(m)}function u(d,f){i.length>1&&i.sort(d||Cm),r.length>1&&r.sort(f||Pm)}function h(){for(let d=t,f=e.length;d<f;d++){let p=e[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.program=null,p.group=null}}return{opaque:i,transparent:r,init:o,push:c,unshift:l,finish:h,sort:u}}function Dm(n){let e=new WeakMap;function t(r,s){let o;return e.has(r)===!1?(o=new uc(n),e.set(r,[o])):s>=e.get(r).length?(o=new uc(n),e.get(r).push(o)):o=e.get(r)[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}function Im(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new w,color:new ae};break;case"SpotLight":t={position:new w,direction:new w,color:new ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new ae,groundColor:new ae};break;case"RectAreaLight":t={color:new ae,position:new w,halfWidth:new w,halfHeight:new w};break}return n[e.id]=t,t}}}function Fm(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Bm=0;function Nm(n,e){return(e.castShadow?1:0)-(n.castShadow?1:0)}function zm(n,e){let t=new Im,i=Fm(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)r.probe.push(new w);let s=new w,o=new de,a=new de;function c(u){let h=0,d=0,f=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let p=0,v=0,x=0,g=0,m=0,S=0,b=0,T=0;u.sort(Nm);for(let L=0,I=u.length;L<I;L++){let D=u[L],O=D.color,C=D.intensity,U=D.distance,P=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=O.r*C,d+=O.g*C,f+=O.b*C;else if(D.isLightProbe)for(let R=0;R<9;R++)r.probe[R].addScaledVector(D.sh.coefficients[R],C);else if(D.isDirectionalLight){let R=t.get(D);if(R.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let B=D.shadow,F=i.get(D);F.shadowBias=B.bias,F.shadowNormalBias=B.normalBias,F.shadowRadius=B.radius,F.shadowMapSize=B.mapSize,r.directionalShadow[p]=F,r.directionalShadowMap[p]=P,r.directionalShadowMatrix[p]=D.shadow.matrix,S++}r.directional[p]=R,p++}else if(D.isSpotLight){let R=t.get(D);if(R.position.setFromMatrixPosition(D.matrixWorld),R.color.copy(O).multiplyScalar(C),R.distance=U,R.coneCos=Math.cos(D.angle),R.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),R.decay=D.decay,D.castShadow){let B=D.shadow,F=i.get(D);F.shadowBias=B.bias,F.shadowNormalBias=B.normalBias,F.shadowRadius=B.radius,F.shadowMapSize=B.mapSize,r.spotShadow[x]=F,r.spotShadowMap[x]=P,r.spotShadowMatrix[x]=D.shadow.matrix,T++}r.spot[x]=R,x++}else if(D.isRectAreaLight){let R=t.get(D);R.color.copy(O).multiplyScalar(C),R.halfWidth.set(D.width*.5,0,0),R.halfHeight.set(0,D.height*.5,0),r.rectArea[g]=R,g++}else if(D.isPointLight){let R=t.get(D);if(R.color.copy(D.color).multiplyScalar(D.intensity),R.distance=D.distance,R.decay=D.decay,D.castShadow){let B=D.shadow,F=i.get(D);F.shadowBias=B.bias,F.shadowNormalBias=B.normalBias,F.shadowRadius=B.radius,F.shadowMapSize=B.mapSize,F.shadowCameraNear=B.camera.near,F.shadowCameraFar=B.camera.far,r.pointShadow[v]=F,r.pointShadowMap[v]=P,r.pointShadowMatrix[v]=D.shadow.matrix,b++}r.point[v]=R,v++}else if(D.isHemisphereLight){let R=t.get(D);R.skyColor.copy(D.color).multiplyScalar(C),R.groundColor.copy(D.groundColor).multiplyScalar(C),r.hemi[m]=R,m++}}g>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=K.LTC_FLOAT_1,r.rectAreaLTC2=K.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=K.LTC_HALF_1,r.rectAreaLTC2=K.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=d,r.ambient[2]=f;let y=r.hash;(y.directionalLength!==p||y.pointLength!==v||y.spotLength!==x||y.rectAreaLength!==g||y.hemiLength!==m||y.numDirectionalShadows!==S||y.numPointShadows!==b||y.numSpotShadows!==T)&&(r.directional.length=p,r.spot.length=x,r.rectArea.length=g,r.point.length=v,r.hemi.length=m,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=b,r.spotShadowMatrix.length=T,y.directionalLength=p,y.pointLength=v,y.spotLength=x,y.rectAreaLength=g,y.hemiLength=m,y.numDirectionalShadows=S,y.numPointShadows=b,y.numSpotShadows=T,r.version=Bm++)}function l(u,h){let d=0,f=0,p=0,v=0,x=0,g=h.matrixWorldInverse;for(let m=0,S=u.length;m<S;m++){let b=u[m];if(b.isDirectionalLight){let T=r.directional[d];T.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(g),d++}else if(b.isSpotLight){let T=r.spot[p];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(g),T.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(g),p++}else if(b.isRectAreaLight){let T=r.rectArea[v];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(g),a.identity(),o.copy(b.matrixWorld),o.premultiply(g),a.extractRotation(o),T.halfWidth.set(b.width*.5,0,0),T.halfHeight.set(0,b.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),v++}else if(b.isPointLight){let T=r.point[f];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(g),f++}else if(b.isHemisphereLight){let T=r.hemi[x];T.direction.setFromMatrixPosition(b.matrixWorld),T.direction.transformDirection(g),T.direction.normalize(),x++}}}return{setup:c,setupView:l,state:r}}function dc(n,e){let t=new zm(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function c(){t.setup(i)}function l(h){t.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Om(n,e){let t=new WeakMap;function i(s,o=0){let a;return t.has(s)===!1?(a=new dc(n,e),t.set(s,[a])):o>=t.get(s).length?(a=new dc(n,e),t.get(s).push(a)):a=t.get(s)[o],a}function r(){t=new WeakMap}return{get:i,dispose:r}}var io=class extends qe{constructor(e){super();this.type="MeshDepthMaterial",this.depthPacking=wu,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};io.prototype.isMeshDepthMaterial=!0;var ro=class extends qe{constructor(e){super();this.type="MeshDistanceMaterial",this.referencePosition=new w,this.nearDistance=1,this.farDistance=1e3,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};ro.prototype.isMeshDistanceMaterial=!0;var Hm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	float mean = 0.0;
	float squared_mean = 0.0;
	float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );
	for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean * HALF_SAMPLE_RATE;
	squared_mean = squared_mean * HALF_SAMPLE_RATE;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`,Um=`void main() {
	gl_Position = vec4( position, 1.0 );
}`;function fc(n,e,t){let i=new Li,r=new V,s=new V,o=new Oe,a=[],c=[],l={},u=t.maxTextureSize,h={0:Ke,1:nr,2:Zt},d=new Ge({defines:{SAMPLE_RATE:2/8,HALF_SAMPLE_RATE:1/8},uniforms:{shadow_pass:{value:null},resolution:{value:new V},radius:{value:4}},vertexShader:Um,fragmentShader:Hm}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new Le;p.setAttribute("position",new Ae(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new De(p,d),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ta,this.render=function(y,L,I){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||y.length===0)return;let D=n.getRenderTarget(),O=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),U=n.state;U.setBlending(fi),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);for(let P=0,R=y.length;P<R;P++){let B=y[P],F=B.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);let X=F.getFrameExtents();if(r.multiply(X),s.copy(F.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/X.x),r.x=s.x*X.x,F.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/X.y),r.y=s.y*X.y,F.mapSize.y=s.y)),F.map===null&&!F.isPointLightShadow&&this.type===di){let Z={minFilter:We,magFilter:We,format:dt};F.map=new vt(r.x,r.y,Z),F.map.texture.name=B.name+".shadowMap",F.mapPass=new vt(r.x,r.y,Z),F.camera.updateProjectionMatrix()}if(F.map===null){let Z={minFilter:ut,magFilter:ut,format:dt};F.map=new vt(r.x,r.y,Z),F.map.texture.name=B.name+".shadowMap",F.camera.updateProjectionMatrix()}n.setRenderTarget(F.map),n.clear();let ee=F.getViewportCount();for(let Z=0;Z<ee;Z++){let se=F.getViewport(Z);o.set(s.x*se.x,s.y*se.y,s.x*se.z,s.y*se.w),U.viewport(o),F.updateMatrices(B,Z),i=F.getFrustum(),T(L,I,F.camera,B,this.type)}!F.isPointLightShadow&&this.type===di&&g(F,I),F.needsUpdate=!1}x.needsUpdate=!1,n.setRenderTarget(D,O,C)};function g(y,L){let I=e.update(v);d.uniforms.shadow_pass.value=y.map.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,n.setRenderTarget(y.mapPass),n.clear(),n.renderBufferDirect(L,null,I,d,v,null),f.uniforms.shadow_pass.value=y.mapPass.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,n.setRenderTarget(y.map),n.clear(),n.renderBufferDirect(L,null,I,f,v,null)}function m(y,L,I){let D=y<<0|L<<1|I<<2,O=a[D];return O===void 0&&(O=new io({depthPacking:bu,morphTargets:y,skinning:L}),a[D]=O),O}function S(y,L,I){let D=y<<0|L<<1|I<<2,O=c[D];return O===void 0&&(O=new ro({morphTargets:y,skinning:L}),c[D]=O),O}function b(y,L,I,D,O,C,U){let P=null,R=m,B=y.customDepthMaterial;if(D.isPointLight===!0&&(R=S,B=y.customDistanceMaterial),B===void 0){let F=!1;I.morphTargets===!0&&(F=L.morphAttributes&&L.morphAttributes.position&&L.morphAttributes.position.length>0);let X=!1;y.isSkinnedMesh===!0&&(I.skinning===!0?X=!0:console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",y));let ee=y.isInstancedMesh===!0;P=R(F,X,ee)}else P=B;if(n.localClippingEnabled&&I.clipShadows===!0&&I.clippingPlanes.length!==0){let F=P.uuid,X=I.uuid,ee=l[F];ee===void 0&&(ee={},l[F]=ee);let Z=ee[X];Z===void 0&&(Z=P.clone(),ee[X]=Z),P=Z}return P.visible=I.visible,P.wireframe=I.wireframe,U===di?P.side=I.shadowSide!==null?I.shadowSide:I.side:P.side=I.shadowSide!==null?I.shadowSide:h[I.side],P.clipShadows=I.clipShadows,P.clippingPlanes=I.clippingPlanes,P.clipIntersection=I.clipIntersection,P.wireframeLinewidth=I.wireframeLinewidth,P.linewidth=I.linewidth,D.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(D.matrixWorld),P.nearDistance=O,P.farDistance=C),P}function T(y,L,I,D,O){if(y.visible===!1)return;if(y.layers.test(L.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&O===di)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,y.matrixWorld);let P=e.update(y),R=y.material;if(Array.isArray(R)){let B=P.groups;for(let F=0,X=B.length;F<X;F++){let ee=B[F],Z=R[ee.materialIndex];if(Z&&Z.visible){let se=b(y,P,Z,D,I.near,I.far,O);n.renderBufferDirect(I,null,P,se,y,ee)}}}else if(R.visible){let B=b(y,P,R,D,I.near,I.far,O);n.renderBufferDirect(I,null,P,B,y,null)}}let U=y.children;for(let P=0,R=U.length;P<R;P++)T(U[P],L,I,D,O)}}function Gm(n,e,t){let i=t.isWebGL2;function r(){let A=!1,J=new Oe,$=null,me=new Oe(0,0,0,0);return{setMask:function(q){$!==q&&!A&&(n.colorMask(q,q,q,q),$=q)},setLocked:function(q){A=q},setClear:function(q,ge,Ne,Je,fn){fn===!0&&(q*=Je,ge*=Je,Ne*=Je),J.set(q,ge,Ne,Je),me.equals(J)===!1&&(n.clearColor(q,ge,Ne,Je),me.copy(J))},reset:function(){A=!1,$=null,me.set(-1,0,0,0)}}}function s(){let A=!1,J=null,$=null,me=null;return{setTest:function(q){q?oe(2929):ue(2929)},setMask:function(q){J!==q&&!A&&(n.depthMask(q),J=q)},setFunc:function(q){if($!==q){if(q)switch(q){case uh:n.depthFunc(512);break;case dh:n.depthFunc(519);break;case fh:n.depthFunc(513);break;case hs:n.depthFunc(515);break;case ph:n.depthFunc(514);break;case mh:n.depthFunc(518);break;case gh:n.depthFunc(516);break;case vh:n.depthFunc(517);break;default:n.depthFunc(515)}else n.depthFunc(515);$=q}},setLocked:function(q){A=q},setClear:function(q){me!==q&&(n.clearDepth(q),me=q)},reset:function(){A=!1,J=null,$=null,me=null}}}function o(){let A=!1,J=null,$=null,me=null,q=null,ge=null,Ne=null,Je=null,fn=null;return{setTest:function(je){A||(je?oe(2960):ue(2960))},setMask:function(je){J!==je&&!A&&(n.stencilMask(je),J=je)},setFunc:function(je,Ht,Tt){($!==je||me!==Ht||q!==Tt)&&(n.stencilFunc(je,Ht,Tt),$=je,me=Ht,q=Tt)},setOp:function(je,Ht,Tt){(ge!==je||Ne!==Ht||Je!==Tt)&&(n.stencilOp(je,Ht,Tt),ge=je,Ne=Ht,Je=Tt)},setLocked:function(je){A=je},setClear:function(je){fn!==je&&(n.clearStencil(je),fn=je)},reset:function(){A=!1,J=null,$=null,me=null,q=null,ge=null,Ne=null,Je=null,fn=null}}}let a=new r,c=new s,l=new o,u={},h=null,d={},f=null,p=!1,v=null,x=null,g=null,m=null,S=null,b=null,T=null,y=!1,L=null,I=null,D=null,O=null,C=null,U=n.getParameter(35661),P=!1,R=0,B=n.getParameter(7938);B.indexOf("WebGL")!==-1?(R=parseFloat(/^WebGL (\d)/.exec(B)[1]),P=R>=1):B.indexOf("OpenGL ES")!==-1&&(R=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),P=R>=2);let F=null,X={},ee=new Oe(0,0,n.canvas.width,n.canvas.height),Z=new Oe(0,0,n.canvas.width,n.canvas.height);function se(A,J,$){let me=new Uint8Array(4),q=n.createTexture();n.bindTexture(A,q),n.texParameteri(A,10241,9728),n.texParameteri(A,10240,9728);for(let ge=0;ge<$;ge++)n.texImage2D(J+ge,0,6408,1,1,0,6408,5121,me);return q}let j={};j[3553]=se(3553,3553,1),j[34067]=se(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),oe(2929),c.setFunc(hs),Ce(!1),Y(ea),oe(2884),Ie(fi);function oe(A){u[A]!==!0&&(n.enable(A),u[A]=!0)}function ue(A){u[A]!==!1&&(n.disable(A),u[A]=!1)}function H(A){A!==h&&(n.bindFramebuffer(36160,A),h=A)}function we(A,J){J===null&&h!==null&&(J=h),d[A]!==J&&(n.bindFramebuffer(A,J),d[A]=J)}function Me(A){return f!==A?(n.useProgram(A),f=A,!0):!1}let le={[An]:32774,[eh]:32778,[th]:32779};if(i)le[sa]=32775,le[oa]=32776;else{let A=e.get("EXT_blend_minmax");A!==null&&(le[sa]=A.MIN_EXT,le[oa]=A.MAX_EXT)}let fe={[nh]:0,[ih]:1,[rh]:768,[aa]:770,[hh]:776,[ch]:774,[oh]:772,[sh]:769,[ca]:771,[lh]:775,[ah]:773};function Ie(A,J,$,me,q,ge,Ne,Je){if(A===fi){p===!0&&(ue(3042),p=!1);return}if(p===!1&&(oe(3042),p=!0),A!==Kl){if(A!==v||Je!==y){if((x!==An||S!==An)&&(n.blendEquation(32774),x=An,S=An),Je)switch(A){case pi:n.blendFuncSeparate(1,771,1,771);break;case ir:n.blendFunc(1,1);break;case ia:n.blendFuncSeparate(0,0,769,771);break;case ra:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case pi:n.blendFuncSeparate(770,771,1,771);break;case ir:n.blendFunc(770,1);break;case ia:n.blendFunc(0,769);break;case ra:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}g=null,m=null,b=null,T=null,v=A,y=Je}return}q=q||J,ge=ge||$,Ne=Ne||me,(J!==x||q!==S)&&(n.blendEquationSeparate(le[J],le[q]),x=J,S=q),($!==g||me!==m||ge!==b||Ne!==T)&&(n.blendFuncSeparate(fe[$],fe[me],fe[ge],fe[Ne]),g=$,m=me,b=ge,T=Ne),v=A,y=null}function Te(A,J){A.side===Zt?ue(2884):oe(2884);let $=A.side===Ke;J&&($=!$),Ce($),A.blending===pi&&A.transparent===!1?Ie(fi):Ie(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.premultipliedAlpha),c.setFunc(A.depthFunc),c.setTest(A.depthTest),c.setMask(A.depthWrite),a.setMask(A.colorWrite);let me=A.stencilWrite;l.setTest(me),me&&(l.setMask(A.stencilWriteMask),l.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),l.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),te(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?oe(32926):ue(32926)}function Ce(A){L!==A&&(A?n.frontFace(2304):n.frontFace(2305),L=A)}function Y(A){A!==Jl?(oe(2884),A!==I&&(A===ea?n.cullFace(1029):A===Ql?n.cullFace(1028):n.cullFace(1032))):ue(2884),I=A}function Q(A){A!==D&&(P&&n.lineWidth(A),D=A)}function te(A,J,$){A?(oe(32823),(O!==J||C!==$)&&(n.polygonOffset(J,$),O=J,C=$)):ue(32823)}function he(A){A?oe(3089):ue(3089)}function ie(A){A===void 0&&(A=33984+U-1),F!==A&&(n.activeTexture(A),F=A)}function E(A,J){F===null&&ie();let $=X[F];$===void 0&&($={type:void 0,texture:void 0},X[F]=$),($.type!==A||$.texture!==J)&&(n.bindTexture(A,J||j[A]),$.type=A,$.texture=J)}function M(){let A=X[F];A!==void 0&&A.type!==void 0&&(n.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function k(){try{n.compressedTexImage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function W(){try{n.texImage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function re(){try{n.texImage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ce(A){ee.equals(A)===!1&&(n.scissor(A.x,A.y,A.z,A.w),ee.copy(A))}function Fe(A){Z.equals(A)===!1&&(n.viewport(A.x,A.y,A.z,A.w),Z.copy(A))}function ve(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},F=null,X={},h=null,d={},f=null,p=!1,v=null,x=null,g=null,m=null,S=null,b=null,T=null,y=!1,L=null,I=null,D=null,O=null,C=null,ee.set(0,0,n.canvas.width,n.canvas.height),Z.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:oe,disable:ue,bindFramebuffer:we,bindXRFramebuffer:H,useProgram:Me,setBlending:Ie,setMaterial:Te,setFlipSided:Ce,setCullFace:Y,setLineWidth:Q,setPolygonOffset:te,setScissorTest:he,activeTexture:ie,bindTexture:E,unbindTexture:M,compressedTexImage2D:k,texImage2D:W,texImage3D:re,scissor:ce,viewport:Fe,reset:ve}}function km(n,e,t,i,r,s,o){let a=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,d=new WeakMap,f,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(E){}function v(E,M){return p?new OffscreenCanvas(E,M):document.createElementNS("http://www.w3.org/1999/xhtml","canvas")}function x(E,M,k,W){let re=1;if((E.width>W||E.height>W)&&(re=W/Math.max(E.width,E.height)),re<1||M===!0)if(typeof HTMLImageElement!="undefined"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&E instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&E instanceof ImageBitmap){let ce=M?pe.floorPowerOfTwo:Math.floor,Fe=ce(re*E.width),ve=ce(re*E.height);f===void 0&&(f=v(Fe,ve));let A=k?v(Fe,ve):f;return A.width=Fe,A.height=ve,A.getContext("2d").drawImage(E,0,0,Fe,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+Fe+"x"+ve+")."),A}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function g(E){return pe.isPowerOfTwo(E.width)&&pe.isPowerOfTwo(E.height)}function m(E){return a?!1:E.wrapS!==yt||E.wrapT!==yt||E.minFilter!==ut&&E.minFilter!==We}function S(E,M){return E.generateMipmaps&&M&&E.minFilter!==ut&&E.minFilter!==We}function b(E,M,k,W){n.generateMipmap(E);let re=i.get(M);re.__maxMipLevel=Math.log2(Math.max(k,W))}function T(E,M,k){if(a===!1)return M;if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let W=M;return M===6403&&(k===5126&&(W=33326),k===5131&&(W=33325),k===5121&&(W=33321)),M===6407&&(k===5126&&(W=34837),k===5131&&(W=34843),k===5121&&(W=32849)),M===6408&&(k===5126&&(W=34836),k===5131&&(W=34842),k===5121&&(W=32856)),(W===33325||W===33326||W===34842||W===34836)&&e.get("EXT_color_buffer_float"),W}function y(E){return E===ut||E===da||E===fa?9728:9729}function L(E){let M=E.target;M.removeEventListener("dispose",L),D(M),M.isVideoTexture&&d.delete(M),o.memory.textures--}function I(E){let M=E.target;M.removeEventListener("dispose",I),O(M),o.memory.textures--}function D(E){let M=i.get(E);M.__webglInit!==void 0&&(n.deleteTexture(M.__webglTexture),i.remove(E))}function O(E){let M=E.texture,k=i.get(E),W=i.get(M);if(!!E){if(W.__webglTexture!==void 0&&n.deleteTexture(W.__webglTexture),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let re=0;re<6;re++)n.deleteFramebuffer(k.__webglFramebuffer[re]),k.__webglDepthbuffer&&n.deleteRenderbuffer(k.__webglDepthbuffer[re]);else n.deleteFramebuffer(k.__webglFramebuffer),k.__webglDepthbuffer&&n.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&n.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer&&n.deleteRenderbuffer(k.__webglColorRenderbuffer),k.__webglDepthRenderbuffer&&n.deleteRenderbuffer(k.__webglDepthRenderbuffer);i.remove(M),i.remove(E)}}let C=0;function U(){C=0}function P(){let E=C;return E>=c&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+c),C+=1,E}function R(E,M){let k=i.get(E);if(E.isVideoTexture&&Y(E),E.version>0&&k.__version!==E.version){let W=E.image;if(W===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(k,E,M);return}}t.activeTexture(33984+M),t.bindTexture(3553,k.__webglTexture)}function B(E,M){let k=i.get(E);if(E.version>0&&k.__version!==E.version){oe(k,E,M);return}t.activeTexture(33984+M),t.bindTexture(35866,k.__webglTexture)}function F(E,M){let k=i.get(E);if(E.version>0&&k.__version!==E.version){oe(k,E,M);return}t.activeTexture(33984+M),t.bindTexture(32879,k.__webglTexture)}function X(E,M){let k=i.get(E);if(E.version>0&&k.__version!==E.version){ue(k,E,M);return}t.activeTexture(33984+M),t.bindTexture(34067,k.__webglTexture)}let ee={[gs]:10497,[yt]:33071,[vs]:33648},Z={[ut]:9728,[da]:9984,[fa]:9986,[We]:9729,[Sh]:9985,[sr]:9987};function se(E,M,k){if(k?(n.texParameteri(E,10242,ee[M.wrapS]),n.texParameteri(E,10243,ee[M.wrapT]),(E===32879||E===35866)&&n.texParameteri(E,32882,ee[M.wrapR]),n.texParameteri(E,10240,Z[M.magFilter]),n.texParameteri(E,10241,Z[M.minFilter])):(n.texParameteri(E,10242,33071),n.texParameteri(E,10243,33071),(E===32879||E===35866)&&n.texParameteri(E,32882,33071),(M.wrapS!==yt||M.wrapT!==yt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(E,10240,y(M.magFilter)),n.texParameteri(E,10241,y(M.minFilter)),M.minFilter!==ut&&M.minFilter!==We&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){let W=e.get("EXT_texture_filter_anisotropic");if(M.type===Jt&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===cr&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(n.texParameterf(E,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function j(E,M){E.__webglInit===void 0&&(E.__webglInit=!0,M.addEventListener("dispose",L),E.__webglTexture=n.createTexture(),o.memory.textures++)}function oe(E,M,k){let W=3553;M.isDataTexture2DArray&&(W=35866),M.isDataTexture3D&&(W=32879),j(E,M),t.activeTexture(33984+k),t.bindTexture(W,E.__webglTexture),n.pixelStorei(37440,M.flipY),n.pixelStorei(37441,M.premultiplyAlpha),n.pixelStorei(3317,M.unpackAlignment),n.pixelStorei(37443,0);let re=m(M)&&g(M.image)===!1,ce=x(M.image,re,!1,u),Fe=g(ce)||a,ve=s.convert(M.format),A=s.convert(M.type),J=T(M.internalFormat,ve,A);se(W,M,Fe);let $,me=M.mipmaps;if(M.isDepthTexture)J=6402,a?M.type===Jt?J=36012:M.type===ar?J=33190:M.type===gi?J=35056:J=33189:M.type===Jt&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Ln&&J===6402&&M.type!==or&&M.type!==ar&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=or,A=s.convert(M.type)),M.format===vi&&J===6402&&(J=34041,M.type!==gi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=gi,A=s.convert(M.type))),t.texImage2D(3553,0,J,ce.width,ce.height,0,ve,A,null);else if(M.isDataTexture)if(me.length>0&&Fe){for(let q=0,ge=me.length;q<ge;q++)$=me[q],t.texImage2D(3553,q,J,$.width,$.height,0,ve,A,$.data);M.generateMipmaps=!1,E.__maxMipLevel=me.length-1}else t.texImage2D(3553,0,J,ce.width,ce.height,0,ve,A,ce.data),E.__maxMipLevel=0;else if(M.isCompressedTexture){for(let q=0,ge=me.length;q<ge;q++)$=me[q],M.format!==dt&&M.format!==vn?ve!==null?t.compressedTexImage2D(3553,q,J,$.width,$.height,0,$.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):t.texImage2D(3553,q,J,$.width,$.height,0,ve,A,$.data);E.__maxMipLevel=me.length-1}else if(M.isDataTexture2DArray)t.texImage3D(35866,0,J,ce.width,ce.height,ce.depth,0,ve,A,ce.data),E.__maxMipLevel=0;else if(M.isDataTexture3D)t.texImage3D(32879,0,J,ce.width,ce.height,ce.depth,0,ve,A,ce.data),E.__maxMipLevel=0;else if(me.length>0&&Fe){for(let q=0,ge=me.length;q<ge;q++)$=me[q],t.texImage2D(3553,q,J,ve,A,$);M.generateMipmaps=!1,E.__maxMipLevel=me.length-1}else t.texImage2D(3553,0,J,ve,A,ce),E.__maxMipLevel=0;S(M,Fe)&&b(W,M,ce.width,ce.height),E.__version=M.version,M.onUpdate&&M.onUpdate(M)}function ue(E,M,k){if(M.image.length!==6)return;j(E,M),t.activeTexture(33984+k),t.bindTexture(34067,E.__webglTexture),n.pixelStorei(37440,M.flipY),n.pixelStorei(37441,M.premultiplyAlpha),n.pixelStorei(3317,M.unpackAlignment),n.pixelStorei(37443,0);let W=M&&(M.isCompressedTexture||M.image[0].isCompressedTexture),re=M.image[0]&&M.image[0].isDataTexture,ce=[];for(let q=0;q<6;q++)!W&&!re?ce[q]=x(M.image[q],!1,!0,l):ce[q]=re?M.image[q].image:M.image[q];let Fe=ce[0],ve=g(Fe)||a,A=s.convert(M.format),J=s.convert(M.type),$=T(M.internalFormat,A,J);se(34067,M,ve);let me;if(W){for(let q=0;q<6;q++){me=ce[q].mipmaps;for(let ge=0;ge<me.length;ge++){let Ne=me[ge];M.format!==dt&&M.format!==vn?A!==null?t.compressedTexImage2D(34069+q,ge,$,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):t.texImage2D(34069+q,ge,$,Ne.width,Ne.height,0,A,J,Ne.data)}}E.__maxMipLevel=me.length-1}else{me=M.mipmaps;for(let q=0;q<6;q++)if(re){t.texImage2D(34069+q,0,$,ce[q].width,ce[q].height,0,A,J,ce[q].data);for(let ge=0;ge<me.length;ge++){let Je=me[ge].image[q].image;t.texImage2D(34069+q,ge+1,$,Je.width,Je.height,0,A,J,Je.data)}}else{t.texImage2D(34069+q,0,$,A,J,ce[q]);for(let ge=0;ge<me.length;ge++){let Ne=me[ge];t.texImage2D(34069+q,ge+1,$,A,J,Ne.image[q])}}E.__maxMipLevel=me.length}S(M,ve)&&b(34067,M,Fe.width,Fe.height),E.__version=M.version,M.onUpdate&&M.onUpdate(M)}function H(E,M,k,W){let re=M.texture,ce=s.convert(re.format),Fe=s.convert(re.type),ve=T(re.internalFormat,ce,Fe);W===32879||W===35866?t.texImage3D(W,0,ve,M.width,M.height,M.depth,0,ce,Fe,null):t.texImage2D(W,0,ve,M.width,M.height,0,ce,Fe,null),t.bindFramebuffer(36160,E),n.framebufferTexture2D(36160,k,W,i.get(re).__webglTexture,0),t.bindFramebuffer(36160,null)}function we(E,M,k){if(n.bindRenderbuffer(36161,E),M.depthBuffer&&!M.stencilBuffer){let W=33189;if(k){let re=M.depthTexture;re&&re.isDepthTexture&&(re.type===Jt?W=36012:re.type===ar&&(W=33190));let ce=Ce(M);n.renderbufferStorageMultisample(36161,ce,W,M.width,M.height)}else n.renderbufferStorage(36161,W,M.width,M.height);n.framebufferRenderbuffer(36160,36096,36161,E)}else if(M.depthBuffer&&M.stencilBuffer){if(k){let W=Ce(M);n.renderbufferStorageMultisample(36161,W,35056,M.width,M.height)}else n.renderbufferStorage(36161,34041,M.width,M.height);n.framebufferRenderbuffer(36160,33306,36161,E)}else{let W=M.texture,re=s.convert(W.format),ce=s.convert(W.type),Fe=T(W.internalFormat,re,ce);if(k){let ve=Ce(M);n.renderbufferStorageMultisample(36161,ve,Fe,M.width,M.height)}else n.renderbufferStorage(36161,Fe,M.width,M.height)}n.bindRenderbuffer(36161,null)}function Me(E,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,E),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),R(M.depthTexture,0);let W=i.get(M.depthTexture).__webglTexture;if(M.depthTexture.format===Ln)n.framebufferTexture2D(36160,36096,3553,W,0);else if(M.depthTexture.format===vi)n.framebufferTexture2D(36160,33306,3553,W,0);else throw new Error("Unknown depthTexture format")}function le(E){let M=i.get(E),k=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Me(M.__webglFramebuffer,E)}else if(k){M.__webglDepthbuffer=[];for(let W=0;W<6;W++)t.bindFramebuffer(36160,M.__webglFramebuffer[W]),M.__webglDepthbuffer[W]=n.createRenderbuffer(),we(M.__webglDepthbuffer[W],E,!1)}else t.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=n.createRenderbuffer(),we(M.__webglDepthbuffer,E,!1);t.bindFramebuffer(36160,null)}function fe(E){let M=E.texture,k=i.get(E),W=i.get(M);E.addEventListener("dispose",I),W.__webglTexture=n.createTexture(),W.__version=M.version,o.memory.textures++;let re=E.isWebGLCubeRenderTarget===!0,ce=E.isWebGLMultisampleRenderTarget===!0,Fe=M.isDataTexture3D||M.isDataTexture2DArray,ve=g(E)||a;if(a&&M.format===vn&&(M.type===Jt||M.type===cr)&&(M.format=dt,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),re){k.__webglFramebuffer=[];for(let A=0;A<6;A++)k.__webglFramebuffer[A]=n.createFramebuffer()}else if(k.__webglFramebuffer=n.createFramebuffer(),ce)if(a){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=n.createRenderbuffer(),n.bindRenderbuffer(36161,k.__webglColorRenderbuffer);let A=s.convert(M.format),J=s.convert(M.type),$=T(M.internalFormat,A,J),me=Ce(E);n.renderbufferStorageMultisample(36161,me,$,E.width,E.height),t.bindFramebuffer(36160,k.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064,36161,k.__webglColorRenderbuffer),n.bindRenderbuffer(36161,null),E.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),we(k.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(re){t.bindTexture(34067,W.__webglTexture),se(34067,M,ve);for(let A=0;A<6;A++)H(k.__webglFramebuffer[A],E,36064,34069+A);S(M,ve)&&b(34067,M,E.width,E.height),t.bindTexture(34067,null)}else{let A=3553;Fe&&(a?A=M.isDataTexture3D?32879:35866:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),t.bindTexture(A,W.__webglTexture),se(A,M,ve),H(k.__webglFramebuffer,E,36064,A),S(M,ve)&&b(3553,M,E.width,E.height),t.bindTexture(3553,null)}E.depthBuffer&&le(E)}function Ie(E){let M=E.texture,k=g(E)||a;if(S(M,k)){let W=E.isWebGLCubeRenderTarget?34067:3553,re=i.get(M).__webglTexture;t.bindTexture(W,re),b(W,M,E.width,E.height),t.bindTexture(W,null)}}function Te(E){if(E.isWebGLMultisampleRenderTarget)if(a){let M=i.get(E);t.bindFramebuffer(36008,M.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,M.__webglFramebuffer);let k=E.width,W=E.height,re=16384;E.depthBuffer&&(re|=256),E.stencilBuffer&&(re|=1024),n.blitFramebuffer(0,0,k,W,0,0,k,W,re,9728),t.bindFramebuffer(36160,M.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function Ce(E){return a&&E.isWebGLMultisampleRenderTarget?Math.min(h,E.samples):0}function Y(E){let M=o.render.frame;d.get(E)!==M&&(d.set(E,M),E.update())}let Q=!1,te=!1;function he(E,M){E&&E.isWebGLRenderTarget&&(Q===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),Q=!0),E=E.texture),R(E,M)}function ie(E,M){E&&E.isWebGLCubeRenderTarget&&(te===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),te=!0),E=E.texture),X(E,M)}this.allocateTextureUnit=P,this.resetTextureUnits=U,this.setTexture2D=R,this.setTexture2DArray=B,this.setTexture3D=F,this.setTextureCube=X,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=Ie,this.updateMultisampleRenderTarget=Te,this.safeSetTexture2D=he,this.safeSetTextureCube=ie}function Vm(n,e,t){let i=t.isWebGL2;function r(s){let o;if(s===xs)return 5121;if(s===Lh)return 32819;if(s===Rh)return 32820;if(s===Ch)return 33635;if(s===Eh)return 5120;if(s===Th)return 5122;if(s===or)return 5123;if(s===Ah)return 5124;if(s===ar)return 5125;if(s===Jt)return 5126;if(s===cr)return i?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Ph)return 6406;if(s===vn)return 6407;if(s===dt)return 6408;if(s===Dh)return 6409;if(s===Ih)return 6410;if(s===Ln)return 6402;if(s===vi)return 34041;if(s===Fh)return 6403;if(s===Bh)return 36244;if(s===Nh)return 33319;if(s===zh)return 33320;if(s===Oh)return 36248;if(s===Hh)return 36249;if(s===pa||s===ma||s===ga||s===va)if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===pa)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ma)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ga)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===va)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===xa||s===ya||s===_a||s===wa)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===xa)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ya)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===_a)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===wa)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Uh)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if((s===ba||s===Ma)&&(o=e.get("WEBGL_compressed_texture_etc"),o!==null)){if(s===ba)return o.COMPRESSED_RGB8_ETC2;if(s===Ma)return o.COMPRESSED_RGBA8_ETC2_EAC}if(s===Gh||s===kh||s===Vh||s===Wh||s===qh||s===Xh||s===jh||s===Yh||s===Zh||s===Jh||s===Qh||s===$h||s===Kh||s===eu||s===nu||s===iu||s===ru||s===su||s===ou||s===au||s===cu||s===lu||s===hu||s===uu||s===du||s===fu||s===pu||s===mu)return o=e.get("WEBGL_compressed_texture_astc"),o!==null?s:null;if(s===tu)return o=e.get("EXT_texture_compression_bptc"),o!==null?s:null;if(s===gi)return i?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:r}}var so=class extends at{constructor(e=[]){super();this.cameras=e}};so.prototype.isArrayCamera=!0;var Pt=class extends _e{constructor(){super();this.type="Group"}};Pt.prototype.isGroup=!0;function Pi(){this._targetRay=null,this._grip=null,this._hand=null}Object.assign(Pi.prototype,{constructor:Pi,getHandSpace:function(){return this._hand===null&&(this._hand=new Pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand},getTargetRaySpace:function(){return this._targetRay===null&&(this._targetRay=new Pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1),this._targetRay},getGripSpace:function(){return this._grip===null&&(this._grip=new Pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1),this._grip},dispatchEvent:function(n){return this._targetRay!==null&&this._targetRay.dispatchEvent(n),this._grip!==null&&this._grip.dispatchEvent(n),this._hand!==null&&this._hand.dispatchEvent(n),this},disconnect:function(n){return this.dispatchEvent({type:"disconnected",data:n}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this},update:function(n,e,t){let i=null,r=null,s=null,o=this._targetRay,a=this._grip,c=this._hand;if(n&&e.session.visibilityState!=="visible-blurred")if(o!==null&&(i=e.getPose(n.targetRaySpace,t),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale))),c&&n.hand){s=!0;for(let p of n.hand.values()){let v=e.getJointPose(p,t);if(c.joints[p.jointName]===void 0){let g=new Pt;g.matrixAutoUpdate=!1,g.visible=!1,c.joints[p.jointName]=g,c.add(g)}let x=c.joints[p.jointName];v!==null&&(x.matrix.fromArray(v.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=v.radius),x.visible=v!==null}let l=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=l.position.distanceTo(u.position),d=.02,f=.005;c.inputState.pinching&&h>d+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:n.handedness,target:this})):!c.inputState.pinching&&h<=d-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:n.handedness,target:this}))}else a!==null&&n.gripSpace&&(r=e.getPose(n.gripSpace,t),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale)));return o!==null&&(o.visible=i!==null),a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),this}});function pc(n,e){let t=this,i=n.state,r=null,s=1,o=null,a="local-floor",c=null,l=[],u=new Map,h=new at;h.layers.enable(1),h.viewport=new Oe;let d=new at;d.layers.enable(2),d.viewport=new Oe;let f=[h,d],p=new so;p.layers.enable(1),p.layers.enable(2);let v=null,x=null;this.enabled=!1,this.isPresenting=!1,this.getController=function(C){let U=l[C];return U===void 0&&(U=new Pi,l[C]=U),U.getTargetRaySpace()},this.getControllerGrip=function(C){let U=l[C];return U===void 0&&(U=new Pi,l[C]=U),U.getGripSpace()},this.getHand=function(C){let U=l[C];return U===void 0&&(U=new Pi,l[C]=U),U.getHandSpace()};function g(C){let U=u.get(C.inputSource);U&&U.dispatchEvent({type:C.type,data:C.inputSource})}function m(){u.forEach(function(C,U){C.disconnect(U)}),u.clear(),v=null,x=null,i.bindXRFramebuffer(null),n.setRenderTarget(n.getRenderTarget()),O.stop(),t.isPresenting=!1,t.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(C){s=C,t.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(C){a=C,t.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o},this.getSession=function(){return r},this.setSession=async function(C){if(r=C,r!==null){r.addEventListener("select",g),r.addEventListener("selectstart",g),r.addEventListener("selectend",g),r.addEventListener("squeeze",g),r.addEventListener("squeezestart",g),r.addEventListener("squeezeend",g),r.addEventListener("end",m),r.addEventListener("inputsourceschange",S);let U=e.getContextAttributes();U.xrCompatible!==!0&&await e.makeXRCompatible();let P={antialias:U.antialias,alpha:U.alpha,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:s},R=new XRWebGLLayer(r,e,P);r.updateRenderState({baseLayer:R}),o=await r.requestReferenceSpace(a),O.setContext(r),O.start(),t.isPresenting=!0,t.dispatchEvent({type:"sessionstart"})}};function S(C){let U=r.inputSources;for(let P=0;P<l.length;P++)u.set(U[P],l[P]);for(let P=0;P<C.removed.length;P++){let R=C.removed[P],B=u.get(R);B&&(B.dispatchEvent({type:"disconnected",data:R}),u.delete(R))}for(let P=0;P<C.added.length;P++){let R=C.added[P],B=u.get(R);B&&B.dispatchEvent({type:"connected",data:R})}}let b=new w,T=new w;function y(C,U,P){b.setFromMatrixPosition(U.matrixWorld),T.setFromMatrixPosition(P.matrixWorld);let R=b.distanceTo(T),B=U.projectionMatrix.elements,F=P.projectionMatrix.elements,X=B[14]/(B[10]-1),ee=B[14]/(B[10]+1),Z=(B[9]+1)/B[5],se=(B[9]-1)/B[5],j=(B[8]-1)/B[0],oe=(F[8]+1)/F[0],ue=X*j,H=X*oe,we=R/(-j+oe),Me=we*-j;U.matrixWorld.decompose(C.position,C.quaternion,C.scale),C.translateX(Me),C.translateZ(we),C.matrixWorld.compose(C.position,C.quaternion,C.scale),C.matrixWorldInverse.copy(C.matrixWorld).invert();let le=X+we,fe=ee+we,Ie=ue-Me,Te=H+(R-Me),Ce=Z*ee/fe*le,Y=se*ee/fe*le;C.projectionMatrix.makePerspective(Ie,Te,Ce,Y,le,fe)}function L(C,U){U===null?C.matrixWorld.copy(C.matrix):C.matrixWorld.multiplyMatrices(U.matrixWorld,C.matrix),C.matrixWorldInverse.copy(C.matrixWorld).invert()}this.getCamera=function(C){p.near=d.near=h.near=C.near,p.far=d.far=h.far=C.far,(v!==p.near||x!==p.far)&&(r.updateRenderState({depthNear:p.near,depthFar:p.far}),v=p.near,x=p.far);let U=C.parent,P=p.cameras;L(p,U);for(let B=0;B<P.length;B++)L(P[B],U);C.matrixWorld.copy(p.matrixWorld),C.matrix.copy(p.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale);let R=C.children;for(let B=0,F=R.length;B<F;B++)R[B].updateMatrixWorld(!0);return P.length===2?y(p,h,d):p.projectionMatrix.copy(h.projectionMatrix),p};let I=null;function D(C,U){if(c=U.getViewerPose(o),c!==null){let R=c.views,B=r.renderState.baseLayer;i.bindXRFramebuffer(B.framebuffer);let F=!1;R.length!==p.cameras.length&&(p.cameras.length=0,F=!0);for(let X=0;X<R.length;X++){let ee=R[X],Z=B.getViewport(ee),se=f[X];se.matrix.fromArray(ee.transform.matrix),se.projectionMatrix.fromArray(ee.projectionMatrix),se.viewport.set(Z.x,Z.y,Z.width,Z.height),X===0&&p.matrix.copy(se.matrix),F===!0&&p.cameras.push(se)}}let P=r.inputSources;for(let R=0;R<l.length;R++){let B=l[R],F=P[R];B.update(F,U,o)}I&&I(C,U)}let O=new qa;O.setAnimationLoop(D),this.setAnimationLoop=function(C){I=C},this.dispose=function(){}}Object.assign(pc.prototype,Qt.prototype);function Wm(n){function e(g,m){g.fogColor.value.copy(m.color),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function t(g,m,S,b){m.isMeshBasicMaterial?i(g,m):m.isMeshLambertMaterial?(i(g,m),c(g,m)):m.isMeshToonMaterial?(i(g,m),u(g,m)):m.isMeshPhongMaterial?(i(g,m),l(g,m)):m.isMeshStandardMaterial?(i(g,m),m.isMeshPhysicalMaterial?d(g,m):h(g,m)):m.isMeshMatcapMaterial?(i(g,m),f(g,m)):m.isMeshDepthMaterial?(i(g,m),p(g,m)):m.isMeshDistanceMaterial?(i(g,m),v(g,m)):m.isMeshNormalMaterial?(i(g,m),x(g,m)):m.isLineBasicMaterial?(r(g,m),m.isLineDashedMaterial&&s(g,m)):m.isPointsMaterial?o(g,m,S,b):m.isSpriteMaterial?a(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function i(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map),m.alphaMap&&(g.alphaMap.value=m.alphaMap),m.specularMap&&(g.specularMap.value=m.specularMap);let S=n.get(m).envMap;if(S){g.envMap.value=S,g.flipEnvMap.value=S.isCubeTexture&&S._needsFlipEnvMap?-1:1,g.reflectivity.value=m.reflectivity,g.refractionRatio.value=m.refractionRatio;let y=n.get(S).__maxMipLevel;y!==void 0&&(g.maxMipLevel.value=y)}m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity);let b;m.map?b=m.map:m.specularMap?b=m.specularMap:m.displacementMap?b=m.displacementMap:m.normalMap?b=m.normalMap:m.bumpMap?b=m.bumpMap:m.roughnessMap?b=m.roughnessMap:m.metalnessMap?b=m.metalnessMap:m.alphaMap?b=m.alphaMap:m.emissiveMap?b=m.emissiveMap:m.clearcoatMap?b=m.clearcoatMap:m.clearcoatNormalMap?b=m.clearcoatNormalMap:m.clearcoatRoughnessMap&&(b=m.clearcoatRoughnessMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),g.uvTransform.value.copy(b.matrix));let T;m.aoMap?T=m.aoMap:m.lightMap&&(T=m.lightMap),T!==void 0&&(T.isWebGLRenderTarget&&(T=T.texture),T.matrixAutoUpdate===!0&&T.updateMatrix(),g.uv2Transform.value.copy(T.matrix))}function r(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity}function s(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function o(g,m,S,b){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*S,g.scale.value=b*.5,m.map&&(g.map.value=m.map),m.alphaMap&&(g.alphaMap.value=m.alphaMap);let T;m.map?T=m.map:m.alphaMap&&(T=m.alphaMap),T!==void 0&&(T.matrixAutoUpdate===!0&&T.updateMatrix(),g.uvTransform.value.copy(T.matrix))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map),m.alphaMap&&(g.alphaMap.value=m.alphaMap);let S;m.map?S=m.map:m.alphaMap&&(S=m.alphaMap),S!==void 0&&(S.matrixAutoUpdate===!0&&S.updateMatrix(),g.uvTransform.value.copy(S.matrix))}function c(g,m){m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap)}function l(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap),m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===Ke&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===Ke&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap),m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===Ke&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===Ke&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}function h(g,m){g.roughness.value=m.roughness,g.metalness.value=m.metalness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap),m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===Ke&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===Ke&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),n.get(m).envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m){h(g,m),g.reflectivity.value=m.reflectivity,g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.sheen&&g.sheen.value.copy(m.sheen),m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),g.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===Ke&&g.clearcoatNormalScale.value.negate()),g.transmission.value=m.transmission,m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap)}function f(g,m){m.matcap&&(g.matcap.value=m.matcap),m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===Ke&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===Ke&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}function p(g,m){m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}function v(g,m){m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),g.referencePosition.value.copy(m.referencePosition),g.nearDistance.value=m.nearDistance,g.farDistance.value=m.farDistance}function x(g,m){m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===Ke&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===Ke&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function qm(){let n=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");return n.style.display="block",n}function He(n){n=n||{};let e=n.canvas!==void 0?n.canvas:qm(),t=n.context!==void 0?n.context:null,i=n.alpha!==void 0?n.alpha:!1,r=n.depth!==void 0?n.depth:!0,s=n.stencil!==void 0?n.stencil:!0,o=n.antialias!==void 0?n.antialias:!1,a=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,c=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",u=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1,h=null,d=null,f=[],p=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=Pn,this.physicallyCorrectLights=!1,this.toneMapping=mi,this.toneMappingExposure=1;let v=this,x=!1,g=0,m=0,S=null,b=-1,T=null,y=new Oe,L=new Oe,I=null,D=e.width,O=e.height,C=1,U=null,P=null,R=new Oe(0,0,D,O),B=new Oe(0,0,D,O),F=!1,X=new Li,ee=!1,Z=!1,se=new de,j=new w,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ue(){return S===null?C:1}let H=t;function we(_,z){for(let N=0;N<_.length;N++){let G=_[N],ne=e.getContext(G,z);if(ne!==null)return ne}return null}try{let _={alpha:i,depth:r,stencil:s,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(e.addEventListener("webglcontextlost",ge,!1),e.addEventListener("webglcontextrestored",Ne,!1),H===null){let z=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&z.shift(),H=we(z,_),H===null)throw we(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let Me,le,fe,Ie,Te,Ce,Y,Q,te,he,ie,E,M,k,W,re,ce,Fe,ve,A,J,$;function me(){Me=new mp(H),le=new dp(H,Me,n),Me.init(le),J=new Vm(H,Me,le),fe=new Gm(H,Me,le),Ie=new xp(H),Te=new Rm,Ce=new km(H,Me,fe,Te,le,J,Ie),Y=new pp(v),Q=new Uu(H,le),$=new hp(H,Me,Q,le),te=new gp(H,Q,Ie,$),he=new bp(H,te,Q,Ie),Fe=new wp(H),W=new fp(Te),ie=new Lm(v,Y,Me,le,$,W),E=new Wm(Te),M=new Dm(Te),k=new Om(Me,le),ce=new lp(v,Y,fe,he,a),re=new fc(v,he,le),ve=new up(H,Me,Ie,le),A=new vp(H,Me,Ie,le),Ie.programs=ie.programs,v.capabilities=le,v.extensions=Me,v.properties=Te,v.renderLists=M,v.shadowMap=re,v.state=fe,v.info=Ie}me();let q=new pc(v,H);this.xr=q,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let _=Me.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=Me.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return C},this.setPixelRatio=function(_){_!==void 0&&(C=_,this.setSize(D,O,!1))},this.getSize=function(_){return _===void 0&&(console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),_=new V),_.set(D,O)},this.setSize=function(_,z,N){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=_,O=z,e.width=Math.floor(_*C),e.height=Math.floor(z*C),N!==!1&&(e.style.width=_+"px",e.style.height=z+"px"),this.setViewport(0,0,_,z)},this.getDrawingBufferSize=function(_){return _===void 0&&(console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),_=new V),_.set(D*C,O*C).floor()},this.setDrawingBufferSize=function(_,z,N){D=_,O=z,C=N,e.width=Math.floor(_*N),e.height=Math.floor(z*N),this.setViewport(0,0,_,z)},this.getCurrentViewport=function(_){return _===void 0&&(console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),_=new Oe),_.copy(y)},this.getViewport=function(_){return _.copy(R)},this.setViewport=function(_,z,N,G){_.isVector4?R.set(_.x,_.y,_.z,_.w):R.set(_,z,N,G),fe.viewport(y.copy(R).multiplyScalar(C).floor())},this.getScissor=function(_){return _.copy(B)},this.setScissor=function(_,z,N,G){_.isVector4?B.set(_.x,_.y,_.z,_.w):B.set(_,z,N,G),fe.scissor(L.copy(B).multiplyScalar(C).floor())},this.getScissorTest=function(){return F},this.setScissorTest=function(_){fe.setScissorTest(F=_)},this.setOpaqueSort=function(_){U=_},this.setTransparentSort=function(_){P=_},this.getClearColor=function(_){return _===void 0&&(console.warn("WebGLRenderer: .getClearColor() now requires a Color as an argument"),_=new ae),_.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor.apply(ce,arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha.apply(ce,arguments)},this.clear=function(_,z,N){let G=0;(_===void 0||_)&&(G|=16384),(z===void 0||z)&&(G|=256),(N===void 0||N)&&(G|=1024),H.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ge,!1),e.removeEventListener("webglcontextrestored",Ne,!1),M.dispose(),k.dispose(),Te.dispose(),Y.dispose(),he.dispose(),$.dispose(),q.dispose(),q.removeEventListener("sessionstart",Xo),q.removeEventListener("sessionend",jo),pn.stop()};function ge(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;let _=Ie.autoReset,z=re.enabled,N=re.autoUpdate,G=re.needsUpdate,ne=re.type;me(),Ie.autoReset=_,re.enabled=z,re.autoUpdate=N,re.needsUpdate=G,re.type=ne}function Je(_){let z=_.target;z.removeEventListener("dispose",Je),fn(z)}function fn(_){je(_),Te.remove(_)}function je(_){let z=Te.get(_).programs;z!==void 0&&z.forEach(function(N){ie.releaseProgram(N)})}function Ht(_,z){_.render(function(N){v.renderBufferImmediate(N,z)})}this.renderBufferImmediate=function(_,z){$.initAttributes();let N=Te.get(_);_.hasPositions&&!N.position&&(N.position=H.createBuffer()),_.hasNormals&&!N.normal&&(N.normal=H.createBuffer()),_.hasUvs&&!N.uv&&(N.uv=H.createBuffer()),_.hasColors&&!N.color&&(N.color=H.createBuffer());let G=z.getAttributes();_.hasPositions&&(H.bindBuffer(34962,N.position),H.bufferData(34962,_.positionArray,35048),$.enableAttribute(G.position),H.vertexAttribPointer(G.position,3,5126,!1,0,0)),_.hasNormals&&(H.bindBuffer(34962,N.normal),H.bufferData(34962,_.normalArray,35048),$.enableAttribute(G.normal),H.vertexAttribPointer(G.normal,3,5126,!1,0,0)),_.hasUvs&&(H.bindBuffer(34962,N.uv),H.bufferData(34962,_.uvArray,35048),$.enableAttribute(G.uv),H.vertexAttribPointer(G.uv,2,5126,!1,0,0)),_.hasColors&&(H.bindBuffer(34962,N.color),H.bufferData(34962,_.colorArray,35048),$.enableAttribute(G.color),H.vertexAttribPointer(G.color,3,5126,!1,0,0)),$.disableUnusedAttributes(),H.drawArrays(4,0,_.count),_.count=0},this.renderBufferDirect=function(_,z,N,G,ne,Pe){z===null&&(z=oe);let xe=ne.isMesh&&ne.matrixWorld.determinant()<0,Se=$o(_,z,G,ne);fe.setMaterial(G,xe);let Ue=N.index,be=N.attributes.position;if(Ue===null){if(be===void 0||be.count===0)return}else if(Ue.count===0)return;let Be=1;G.wireframe===!0&&(Ue=te.getWireframeAttribute(N),Be=2),(G.morphTargets||G.morphNormals)&&Fe.update(ne,N,G,Se),$.setup(ne,G,Se,N,Ue);let ye,ze=ve;Ue!==null&&(ye=Q.get(Ue),ze=A,ze.setIndex(ye));let Bt=Ue!==null?Ue.count:be.count,ht=N.drawRange.start*Be,mn=N.drawRange.count*Be,$e=Pe!==null?Pe.start*Be:0,gn=Pe!==null?Pe.count*Be:Infinity,Qe=Math.max(ht,$e),ls=Math.min(Bt,ht+mn,$e+gn)-1,gt=Math.max(0,ls-Qe+1);if(gt!==0){if(ne.isMesh)G.wireframe===!0?(fe.setLineWidth(G.wireframeLinewidth*ue()),ze.setMode(1)):ze.setMode(4);else if(ne.isLine){let Ut=G.linewidth;Ut===void 0&&(Ut=1),fe.setLineWidth(Ut*ue()),ne.isLineSegments?ze.setMode(1):ne.isLineLoop?ze.setMode(2):ze.setMode(3)}else ne.isPoints?ze.setMode(0):ne.isSprite&&ze.setMode(4);if(ne.isInstancedMesh)ze.renderInstances(Qe,gt,ne.count);else if(N.isInstancedBufferGeometry){let Ut=Math.min(N.instanceCount,N._maxInstanceCount);ze.renderInstances(Qe,gt,Ut)}else ze.render(Qe,gt)}},this.compile=function(_,z){d=k.get(_),d.init(),_.traverseVisible(function(N){N.isLight&&N.layers.test(z.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),d.setupLights(),_.traverse(function(N){let G=N.material;if(G)if(Array.isArray(G))for(let ne=0;ne<G.length;ne++){let Pe=G[ne];cs(Pe,_,N)}else cs(G,_,N)})};let Tt=null;function Xl(_){Tt&&Tt(_)}function Xo(){pn.stop()}function jo(){pn.start()}let pn=new qa;pn.setAnimationLoop(Xl),typeof window!="undefined"&&pn.setContext(window),this.setAnimationLoop=function(_){Tt=_,q.setAnimationLoop(_),_===null?pn.stop():pn.start()},q.addEventListener("sessionstart",Xo),q.addEventListener("sessionend",jo),this.render=function(_,z){let N,G;if(arguments[2]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."),N=arguments[2]),arguments[3]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."),G=arguments[3]),z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;_.autoUpdate===!0&&_.updateMatrixWorld(),z.parent===null&&z.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(z=q.getCamera(z)),_.isScene===!0&&_.onBeforeRender(v,_,z,N||S),d=k.get(_,p.length),d.init(),p.push(d),se.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),X.setFromProjectionMatrix(se),Z=this.localClippingEnabled,ee=W.init(this.clippingPlanes,Z,z),h=M.get(_,f.length),h.init(),f.push(h),Yo(_,z,0,v.sortObjects),h.finish(),v.sortObjects===!0&&h.sort(U,P),ee===!0&&W.beginShadows();let ne=d.state.shadowsArray;re.render(ne,_,z),d.setupLights(),d.setupLightsView(z),ee===!0&&W.endShadows(),this.info.autoReset===!0&&this.info.reset(),N!==void 0&&this.setRenderTarget(N),ce.render(h,_,z,G);let Pe=h.opaque,xe=h.transparent;Pe.length>0&&Zo(Pe,_,z),xe.length>0&&Zo(xe,_,z),S!==null&&(Ce.updateRenderTargetMipmap(S),Ce.updateMultisampleRenderTarget(S)),_.isScene===!0&&_.onAfterRender(v,_,z),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1),$.resetDefaultState(),b=-1,T=null,p.pop(),p.length>0?d=p[p.length-1]:d=null,f.pop(),f.length>0?h=f[f.length-1]:h=null};function Yo(_,z,N,G){if(_.visible===!1)return;if(_.layers.test(z.layers)){if(_.isGroup)N=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(z);else if(_.isLight)d.pushLight(_),_.castShadow&&d.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||X.intersectsSprite(_)){G&&j.setFromMatrixPosition(_.matrixWorld).applyMatrix4(se);let xe=he.update(_),Se=_.material;Se.visible&&h.push(_,xe,Se,N,j.z,null)}}else if(_.isImmediateRenderObject)G&&j.setFromMatrixPosition(_.matrixWorld).applyMatrix4(se),h.push(_,null,_.material,N,j.z,null);else if((_.isMesh||_.isLine||_.isPoints)&&(_.isSkinnedMesh&&_.skeleton.frame!==Ie.render.frame&&(_.skeleton.update(),_.skeleton.frame=Ie.render.frame),!_.frustumCulled||X.intersectsObject(_))){G&&j.setFromMatrixPosition(_.matrixWorld).applyMatrix4(se);let xe=he.update(_),Se=_.material;if(Array.isArray(Se)){let Ue=xe.groups;for(let be=0,Be=Ue.length;be<Be;be++){let ye=Ue[be],ze=Se[ye.materialIndex];ze&&ze.visible&&h.push(_,xe,ze,N,j.z,ye)}}else Se.visible&&h.push(_,xe,Se,N,j.z,null)}}let Pe=_.children;for(let xe=0,Se=Pe.length;xe<Se;xe++)Yo(Pe[xe],z,N,G)}function Zo(_,z,N){let G=z.isScene===!0?z.overrideMaterial:null;for(let ne=0,Pe=_.length;ne<Pe;ne++){let xe=_[ne],Se=xe.object,Ue=xe.geometry,be=G===null?xe.material:G,Be=xe.group;if(N.isArrayCamera){let ye=N.cameras;for(let ze=0,Bt=ye.length;ze<Bt;ze++){let ht=ye[ze];Se.layers.test(ht.layers)&&(fe.viewport(y.copy(ht.viewport)),d.setupLightsView(ht),Jo(Se,z,ht,Ue,be,Be))}}else Jo(Se,z,N,Ue,be,Be)}}function Jo(_,z,N,G,ne,Pe){if(_.onBeforeRender(v,z,N,G,ne,Pe),_.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),_.isImmediateRenderObject){let xe=$o(N,z,ne,_);fe.setMaterial(ne),$.reset(),Ht(_,xe)}else v.renderBufferDirect(N,z,G,ne,_,Pe);_.onAfterRender(v,z,N,G,ne,Pe)}function cs(_,z,N){z.isScene!==!0&&(z=oe);let G=Te.get(_),ne=d.state.lights,Pe=d.state.shadowsArray,xe=ne.state.version,Se=ie.getParameters(_,ne.state,Pe,z,N),Ue=ie.getProgramCacheKey(Se),be=G.programs;G.environment=_.isMeshStandardMaterial?z.environment:null,G.fog=z.fog,G.envMap=Y.get(_.envMap||G.environment),be===void 0&&(_.addEventListener("dispose",Je),be=new Map,G.programs=be);let Be=be.get(Ue);if(Be!==void 0){if(G.currentProgram===Be&&G.lightsStateVersion===xe)return Qo(_,Se),Be}else Se.uniforms=ie.getUniforms(_),_.onBeforeCompile(Se,v),Be=ie.acquireProgram(Se,Ue),be.set(Ue,Be),G.uniforms=Se.uniforms;let ye=G.uniforms;(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(ye.clippingPlanes=W.uniform),Qo(_,Se),G.needsLights=Yl(_),G.lightsStateVersion=xe,G.needsLights&&(ye.ambientLightColor.value=ne.state.ambient,ye.lightProbe.value=ne.state.probe,ye.directionalLights.value=ne.state.directional,ye.directionalLightShadows.value=ne.state.directionalShadow,ye.spotLights.value=ne.state.spot,ye.spotLightShadows.value=ne.state.spotShadow,ye.rectAreaLights.value=ne.state.rectArea,ye.ltc_1.value=ne.state.rectAreaLTC1,ye.ltc_2.value=ne.state.rectAreaLTC2,ye.pointLights.value=ne.state.point,ye.pointLightShadows.value=ne.state.pointShadow,ye.hemisphereLights.value=ne.state.hemi,ye.directionalShadowMap.value=ne.state.directionalShadowMap,ye.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,ye.spotShadowMap.value=ne.state.spotShadowMap,ye.spotShadowMatrix.value=ne.state.spotShadowMatrix,ye.pointShadowMap.value=ne.state.pointShadowMap,ye.pointShadowMatrix.value=ne.state.pointShadowMatrix);let ze=Be.getUniforms(),Bt=cn.seqWithValue(ze.seq,ye);return G.currentProgram=Be,G.uniformsList=Bt,Be}function Qo(_,z){let N=Te.get(_);N.outputEncoding=z.outputEncoding,N.instancing=z.instancing,N.numClippingPlanes=z.numClippingPlanes,N.numIntersection=z.numClipIntersection,N.vertexAlphas=z.vertexAlphas}function $o(_,z,N,G){z.isScene!==!0&&(z=oe),Ce.resetTextureUnits();let ne=z.fog,Pe=N.isMeshStandardMaterial?z.environment:null,xe=S===null?v.outputEncoding:S.texture.encoding,Se=Y.get(N.envMap||Pe),Ue=N.vertexColors===!0&&G.geometry.attributes.color&&G.geometry.attributes.color.itemSize===4,be=Te.get(N),Be=d.state.lights;if(ee===!0&&(Z===!0||_!==T)){let Qe=_===T&&N.id===b;W.setState(N,_,Qe)}let ye=!1;N.version===be.__version?(be.needsLights&&be.lightsStateVersion!==Be.state.version||be.outputEncoding!==xe||G.isInstancedMesh&&be.instancing===!1||!G.isInstancedMesh&&be.instancing===!0||be.envMap!==Se||N.fog&&be.fog!==ne||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==W.numPlanes||be.numIntersection!==W.numIntersection)||be.vertexAlphas!==Ue)&&(ye=!0):(ye=!0,be.__version=N.version);let ze=be.currentProgram;ye===!0&&(ze=cs(N,z,G));let Bt=!1,ht=!1,mn=!1,$e=ze.getUniforms(),gn=be.uniforms;if(fe.useProgram(ze.program)&&(Bt=!0,ht=!0,mn=!0),N.id!==b&&(b=N.id,ht=!0),Bt||T!==_){if($e.setValue(H,"projectionMatrix",_.projectionMatrix),le.logarithmicDepthBuffer&&$e.setValue(H,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),T!==_&&(T=_,ht=!0,mn=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){let Qe=$e.map.cameraPosition;Qe!==void 0&&Qe.setValue(H,j.setFromMatrixPosition(_.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&$e.setValue(H,"isOrthographic",_.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||N.skinning)&&$e.setValue(H,"viewMatrix",_.matrixWorldInverse)}if(N.skinning){$e.setOptional(H,G,"bindMatrix"),$e.setOptional(H,G,"bindMatrixInverse");let Qe=G.skeleton;if(Qe){let ls=Qe.bones;if(le.floatVertexTextures){if(Qe.boneTexture===null){let gt=Math.sqrt(ls.length*4);gt=pe.ceilPowerOfTwo(gt),gt=Math.max(gt,4);let Ut=new Float32Array(gt*gt*4);Ut.set(Qe.boneMatrices);let Zl=new Pr(Ut,gt,gt,dt,Jt);Qe.boneMatrices=Ut,Qe.boneTexture=Zl,Qe.boneTextureSize=gt}$e.setValue(H,"boneTexture",Qe.boneTexture,Ce),$e.setValue(H,"boneTextureSize",Qe.boneTextureSize)}else $e.setOptional(H,Qe,"boneMatrices")}}return(ht||be.receiveShadow!==G.receiveShadow)&&(be.receiveShadow=G.receiveShadow,$e.setValue(H,"receiveShadow",G.receiveShadow)),ht&&($e.setValue(H,"toneMappingExposure",v.toneMappingExposure),be.needsLights&&jl(gn,mn),ne&&N.fog&&E.refreshFogUniforms(gn,ne),E.refreshMaterialUniforms(gn,N,C,O),cn.upload(H,be.uniformsList,gn,Ce)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(cn.upload(H,be.uniformsList,gn,Ce),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&$e.setValue(H,"center",G.center),$e.setValue(H,"modelViewMatrix",G.modelViewMatrix),$e.setValue(H,"normalMatrix",G.normalMatrix),$e.setValue(H,"modelMatrix",G.matrixWorld),ze}function jl(_,z){_.ambientLightColor.needsUpdate=z,_.lightProbe.needsUpdate=z,_.directionalLights.needsUpdate=z,_.directionalLightShadows.needsUpdate=z,_.pointLights.needsUpdate=z,_.pointLightShadows.needsUpdate=z,_.spotLights.needsUpdate=z,_.spotLightShadows.needsUpdate=z,_.rectAreaLights.needsUpdate=z,_.hemisphereLights.needsUpdate=z}function Yl(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return m},this.getRenderTarget=function(){return S},this.setRenderTarget=function(_,z=0,N=0){S=_,g=z,m=N,_&&Te.get(_).__webglFramebuffer===void 0&&Ce.setupRenderTarget(_);let G=null,ne=!1,Pe=!1;if(_){let xe=_.texture;(xe.isDataTexture3D||xe.isDataTexture2DArray)&&(Pe=!0);let Se=Te.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(G=Se[z],ne=!0):_.isWebGLMultisampleRenderTarget?G=Te.get(_).__webglMultisampledFramebuffer:G=Se,y.copy(_.viewport),L.copy(_.scissor),I=_.scissorTest}else y.copy(R).multiplyScalar(C).floor(),L.copy(B).multiplyScalar(C).floor(),I=F;if(fe.bindFramebuffer(36160,G),fe.viewport(y),fe.scissor(L),fe.setScissorTest(I),ne){let xe=Te.get(_.texture);H.framebufferTexture2D(36160,36064,34069+z,xe.__webglTexture,N)}else if(Pe){let xe=Te.get(_.texture),Se=z||0;H.framebufferTextureLayer(36160,36064,xe.__webglTexture,N||0,Se)}},this.readRenderTargetPixels=function(_,z,N,G,ne,Pe,xe){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Te.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&xe!==void 0&&(Se=Se[xe]),Se){fe.bindFramebuffer(36160,Se);try{let Ue=_.texture,be=Ue.format,Be=Ue.type;if(be!==dt&&J.convert(be)!==H.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let ye=Be===cr&&(Me.has("EXT_color_buffer_half_float")||le.isWebGL2&&Me.has("EXT_color_buffer_float"));if(Be!==xs&&J.convert(Be)!==H.getParameter(35738)&&!(Be===Jt&&(le.isWebGL2||Me.has("OES_texture_float")||Me.has("WEBGL_color_buffer_float")))&&!ye){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H.checkFramebufferStatus(36160)===36053?z>=0&&z<=_.width-G&&N>=0&&N<=_.height-ne&&H.readPixels(z,N,G,ne,J.convert(be),J.convert(Be),Pe):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{let Ue=S!==null?Te.get(S).__webglFramebuffer:null;fe.bindFramebuffer(36160,Ue)}}},this.copyFramebufferToTexture=function(_,z,N=0){let G=Math.pow(2,-N),ne=Math.floor(z.image.width*G),Pe=Math.floor(z.image.height*G),xe=J.convert(z.format);Ce.setTexture2D(z,0),H.copyTexImage2D(3553,N,xe,_.x,_.y,ne,Pe,0),fe.unbindTexture()},this.copyTextureToTexture=function(_,z,N,G=0){let ne=z.image.width,Pe=z.image.height,xe=J.convert(N.format),Se=J.convert(N.type);Ce.setTexture2D(N,0),H.pixelStorei(37440,N.flipY),H.pixelStorei(37441,N.premultiplyAlpha),H.pixelStorei(3317,N.unpackAlignment),z.isDataTexture?H.texSubImage2D(3553,G,_.x,_.y,ne,Pe,xe,Se,z.image.data):z.isCompressedTexture?H.compressedTexSubImage2D(3553,G,_.x,_.y,z.mipmaps[0].width,z.mipmaps[0].height,xe,z.mipmaps[0].data):H.texSubImage2D(3553,G,_.x,_.y,xe,Se,z.image),G===0&&N.generateMipmaps&&H.generateMipmap(3553),fe.unbindTexture()},this.copyTextureToTexture3D=function(_,z,N,G,ne=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let{width:Pe,height:xe,data:Se}=N.image,Ue=J.convert(G.format),be=J.convert(G.type),Be;if(G.isDataTexture3D)Ce.setTexture3D(G,0),Be=32879;else if(G.isDataTexture2DArray)Ce.setTexture2DArray(G,0),Be=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(37440,G.flipY),H.pixelStorei(37441,G.premultiplyAlpha),H.pixelStorei(3317,G.unpackAlignment);let ye=H.getParameter(3314),ze=H.getParameter(32878),Bt=H.getParameter(3316),ht=H.getParameter(3315),mn=H.getParameter(32877);H.pixelStorei(3314,Pe),H.pixelStorei(32878,xe),H.pixelStorei(3316,_.min.x),H.pixelStorei(3315,_.min.y),H.pixelStorei(32877,_.min.z),H.texSubImage3D(Be,ne,z.x,z.y,z.z,_.max.x-_.min.x+1,_.max.y-_.min.y+1,_.max.z-_.min.z+1,Ue,be,Se),H.pixelStorei(3314,ye),H.pixelStorei(32878,ze),H.pixelStorei(3316,Bt),H.pixelStorei(3315,ht),H.pixelStorei(32877,mn),ne===0&&G.generateMipmaps&&H.generateMipmap(Be),fe.unbindTexture()},this.initTexture=function(_){Ce.setTexture2D(_,0),fe.unbindTexture()},this.resetState=function(){g=0,m=0,S=null,fe.reset(),$.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}var mc=class extends He{};mc.prototype.isWebGL1Renderer=!0;var $n=class{constructor(e,t=25e-5){this.name="",this.color=new ae(e),this.density=t}clone(){return new $n(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}};$n.prototype.isFogExp2=!0;var Ir=class{constructor(e,t=1,i=1e3){this.name="",this.color=new ae(e),this.near=t,this.far=i}clone(){return new Ir(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}};Ir.prototype.isFog=!0;var Di=class extends _e{constructor(){super();this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.background!==null&&(t.object.background=this.background.toJSON(e)),this.environment!==null&&(t.object.environment=this.environment.toJSON(e)),this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}};Di.prototype.isScene=!0;function St(n,e){this.array=n,this.stride=e,this.count=n!==void 0?n.length/e:0,this.usage=yi,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=pe.generateUUID()}Object.defineProperty(St.prototype,"needsUpdate",{set:function(n){n===!0&&this.version++}});Object.assign(St.prototype,{isInterleavedBuffer:!0,onUploadCallback:function(){},setUsage:function(n){return this.usage=n,this},copy:function(n){return this.array=new n.array.constructor(n.array),this.count=n.count,this.stride=n.stride,this.usage=n.usage,this},copyAt:function(n,e,t){n*=this.stride,t*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[n+i]=e.array[t+i];return this},set:function(n,e=0){return this.array.set(n,e),this},clone:function(n){n.arrayBuffers===void 0&&(n.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pe.generateUUID()),n.arrayBuffers[this.array.buffer._uuid]===void 0&&(n.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(n.arrayBuffers[this.array.buffer._uuid]),t=new St(e,this.stride);return t.setUsage(this.usage),t},onUpload:function(n){return this.onUploadCallback=n,this},toJSON:function(n){return n.arrayBuffers===void 0&&(n.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pe.generateUUID()),n.arrayBuffers[this.array.buffer._uuid]===void 0&&(n.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}});var Ze=new w;function Ii(n,e,t,i){this.name="",this.data=n,this.itemSize=e,this.offset=t,this.normalized=i===!0}Object.defineProperties(Ii.prototype,{count:{get:function(){return this.data.count}},array:{get:function(){return this.data.array}},needsUpdate:{set:function(n){this.data.needsUpdate=n}}});Object.assign(Ii.prototype,{isInterleavedBufferAttribute:!0,applyMatrix4:function(n){for(let e=0,t=this.data.count;e<t;e++)Ze.x=this.getX(e),Ze.y=this.getY(e),Ze.z=this.getZ(e),Ze.applyMatrix4(n),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this},applyNormalMatrix:function(n){for(let e=0,t=this.count;e<t;e++)Ze.x=this.getX(e),Ze.y=this.getY(e),Ze.z=this.getZ(e),Ze.applyNormalMatrix(n),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this},transformDirection:function(n){for(let e=0,t=this.count;e<t;e++)Ze.x=this.getX(e),Ze.y=this.getY(e),Ze.z=this.getZ(e),Ze.transformDirection(n),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this},setX:function(n,e){return this.data.array[n*this.data.stride+this.offset]=e,this},setY:function(n,e){return this.data.array[n*this.data.stride+this.offset+1]=e,this},setZ:function(n,e){return this.data.array[n*this.data.stride+this.offset+2]=e,this},setW:function(n,e){return this.data.array[n*this.data.stride+this.offset+3]=e,this},getX:function(n){return this.data.array[n*this.data.stride+this.offset]},getY:function(n){return this.data.array[n*this.data.stride+this.offset+1]},getZ:function(n){return this.data.array[n*this.data.stride+this.offset+2]},getW:function(n){return this.data.array[n*this.data.stride+this.offset+3]},setXY:function(n,e,t){return n=n*this.data.stride+this.offset,this.data.array[n+0]=e,this.data.array[n+1]=t,this},setXYZ:function(n,e,t,i){return n=n*this.data.stride+this.offset,this.data.array[n+0]=e,this.data.array[n+1]=t,this.data.array[n+2]=i,this},setXYZW:function(n,e,t,i,r){return n=n*this.data.stride+this.offset,this.data.array[n+0]=e,this.data.array[n+1]=t,this.data.array[n+2]=i,this.data.array[n+3]=r,this},clone:function(n){if(n===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");let e=[];for(let t=0;t<this.count;t++){let i=t*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Ae(new this.array.constructor(e),this.itemSize,this.normalized)}else return n.interleavedBuffers===void 0&&(n.interleavedBuffers={}),n.interleavedBuffers[this.data.uuid]===void 0&&(n.interleavedBuffers[this.data.uuid]=this.data.clone(n)),new Ii(n.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)},toJSON:function(n){if(n===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");let e=[];for(let t=0;t<this.count;t++){let i=t*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return n.interleavedBuffers===void 0&&(n.interleavedBuffers={}),n.interleavedBuffers[this.data.uuid]===void 0&&(n.interleavedBuffers[this.data.uuid]=this.data.toJSON(n)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}});var oo=class extends qe{constructor(e){super();this.type="SpriteMaterial",this.color=new ae(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}};oo.prototype.isSpriteMaterial=!0;var Kn,Fi=new w,ei=new w,ti=new w,ni=new V,Bi=new V,gc=new de,Fr=new w,Ni=new w,Br=new w,vc=new V,ao=new V,xc=new V,yc=class extends _e{constructor(e){super();if(this.type="Sprite",Kn===void 0){Kn=new Le;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new St(t,5);Kn.setIndex([0,1,2,0,2,3]),Kn.setAttribute("position",new Ii(i,3,0,!1)),Kn.setAttribute("uv",new Ii(i,2,3,!1))}this.geometry=Kn,this.material=e!==void 0?e:new oo,this.center=new V(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ei.setFromMatrixScale(this.matrixWorld),gc.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ti.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ei.multiplyScalar(-ti.z);let i=this.material.rotation,r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));let o=this.center;Nr(Fr.set(-.5,-.5,0),ti,o,ei,r,s),Nr(Ni.set(.5,-.5,0),ti,o,ei,r,s),Nr(Br.set(.5,.5,0),ti,o,ei,r,s),vc.set(0,0),ao.set(1,0),xc.set(1,1);let a=e.ray.intersectTriangle(Fr,Ni,Br,!1,Fi);if(a===null&&(Nr(Ni.set(-.5,.5,0),ti,o,ei,r,s),ao.set(0,1),a=e.ray.intersectTriangle(Fr,Br,Ni,!1,Fi),a===null))return;let c=e.ray.origin.distanceTo(Fi);c<e.near||c>e.far||t.push({distance:c,point:Fi.clone(),uv:Ye.getUV(Fi,Fr,Ni,Br,vc,ao,xc,new V),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};yc.prototype.isSprite=!0;function Nr(n,e,t,i,r,s){ni.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(Bi.x=s*ni.x-r*ni.y,Bi.y=r*ni.x+s*ni.y):Bi.copy(ni),n.copy(e),n.x+=Bi.x,n.y+=Bi.y,n.applyMatrix4(gc)}var _c=new w,wc=new Oe,bc=new Oe,Xm=new w,Mc=new de;function co(n,e){De.call(this,n,e),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new de,this.bindMatrixInverse=new de}co.prototype=Object.assign(Object.create(De.prototype),{constructor:co,isSkinnedMesh:!0,copy:function(n){return De.prototype.copy.call(this,n),this.bindMode=n.bindMode,this.bindMatrix.copy(n.bindMatrix),this.bindMatrixInverse.copy(n.bindMatrixInverse),this.skeleton=n.skeleton,this},bind:function(n,e){this.skeleton=n,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()},pose:function(){this.skeleton.pose()},normalizeSkinWeights:function(){let n=new Oe,e=this.geometry.attributes.skinWeight;for(let t=0,i=e.count;t<i;t++){n.x=e.getX(t),n.y=e.getY(t),n.z=e.getZ(t),n.w=e.getW(t);let r=1/n.manhattanLength();r!==Infinity?n.multiplyScalar(r):n.set(1,0,0,0),e.setXYZW(t,n.x,n.y,n.z,n.w)}},updateMatrixWorld:function(n){De.prototype.updateMatrixWorld.call(this,n),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)},boneTransform:function(n,e){let t=this.skeleton,i=this.geometry;wc.fromBufferAttribute(i.attributes.skinIndex,n),bc.fromBufferAttribute(i.attributes.skinWeight,n),_c.fromBufferAttribute(i.attributes.position,n).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){let s=bc.getComponent(r);if(s!==0){let o=wc.getComponent(r);Mc.multiplyMatrices(t.bones[o].matrixWorld,t.boneInverses[o]),e.addScaledVector(Xm.copy(_c).applyMatrix4(Mc),s)}}return e.applyMatrix4(this.bindMatrixInverse)}});function Sc(){_e.call(this),this.type="Bone"}Sc.prototype=Object.assign(Object.create(_e.prototype),{constructor:Sc,isBone:!0});var Ec=new de,Tc=new de,zr=[],zi=new De;function Ac(n,e,t){De.call(this,n,e),this.instanceMatrix=new Ae(new Float32Array(t*16),16),this.instanceColor=null,this.count=t,this.frustumCulled=!1}Ac.prototype=Object.assign(Object.create(De.prototype),{constructor:Ac,isInstancedMesh:!0,copy:function(n){return De.prototype.copy.call(this,n),this.instanceMatrix.copy(n.instanceMatrix),n.instanceColor!==null&&(this.instanceColor=n.instanceColor.clone()),this.count=n.count,this},getColorAt:function(n,e){e.fromArray(this.instanceColor.array,n*3)},getMatrixAt:function(n,e){e.fromArray(this.instanceMatrix.array,n*16)},raycast:function(n,e){let t=this.matrixWorld,i=this.count;if(zi.geometry=this.geometry,zi.material=this.material,zi.material!==void 0)for(let r=0;r<i;r++){this.getMatrixAt(r,Ec),Tc.multiplyMatrices(t,Ec),zi.matrixWorld=Tc,zi.raycast(n,zr);for(let s=0,o=zr.length;s<o;s++){let a=zr[s];a.instanceId=r,a.object=this,e.push(a)}zr.length=0}},setColorAt:function(n,e){this.instanceColor===null&&(this.instanceColor=new Ae(new Float32Array(this.count*3),3)),e.toArray(this.instanceColor.array,n*3)},setMatrixAt:function(n,e){e.toArray(this.instanceMatrix.array,n*16)},updateMorphTargets:function(){},dispose:function(){this.dispatchEvent({type:"dispose"})}});var ii=class extends qe{constructor(e){super();this.type="LineBasicMaterial",this.color=new ae(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.morphTargets=e.morphTargets,this}};ii.prototype.isLineBasicMaterial=!0;var Lc=new w,Rc=new w,Cc=new de,lo=new tn,Or=new _n;function Oi(n=new Le,e=new ii){_e.call(this),this.type="Line",this.geometry=n,this.material=e,this.updateMorphTargets()}Oi.prototype=Object.assign(Object.create(_e.prototype),{constructor:Oi,isLine:!0,copy:function(n){return _e.prototype.copy.call(this,n),this.material=n.material,this.geometry=n.geometry,this},computeLineDistances:function(){let n=this.geometry;if(n.isBufferGeometry)if(n.index===null){let e=n.attributes.position,t=[0];for(let i=1,r=e.count;i<r;i++)Lc.fromBufferAttribute(e,i-1),Rc.fromBufferAttribute(e,i),t[i]=t[i-1],t[i]+=Lc.distanceTo(Rc);n.setAttribute("lineDistance",new Ee(t,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else n.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this},raycast:function(n,e){let t=this.geometry,i=this.matrixWorld,r=n.params.Line.threshold,s=t.drawRange;if(t.boundingSphere===null&&t.computeBoundingSphere(),Or.copy(t.boundingSphere),Or.applyMatrix4(i),Or.radius+=r,n.ray.intersectsSphere(Or)===!1)return;Cc.copy(i).invert(),lo.copy(n.ray).applyMatrix4(Cc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),a=o*o,c=new w,l=new w,u=new w,h=new w,d=this.isLineSegments?2:1;if(t.isBufferGeometry){let f=t.index,v=t.attributes.position;if(f!==null){let x=Math.max(0,s.start),g=Math.min(f.count,s.start+s.count);for(let m=x,S=g-1;m<S;m+=d){let b=f.getX(m),T=f.getX(m+1);if(c.fromBufferAttribute(v,b),l.fromBufferAttribute(v,T),lo.distanceSqToSegment(c,l,h,u)>a)continue;h.applyMatrix4(this.matrixWorld);let L=n.ray.origin.distanceTo(h);L<n.near||L>n.far||e.push({distance:L,point:u.clone().applyMatrix4(this.matrixWorld),index:m,face:null,faceIndex:null,object:this})}}else{let x=Math.max(0,s.start),g=Math.min(v.count,s.start+s.count);for(let m=x,S=g-1;m<S;m+=d){if(c.fromBufferAttribute(v,m),l.fromBufferAttribute(v,m+1),lo.distanceSqToSegment(c,l,h,u)>a)continue;h.applyMatrix4(this.matrixWorld);let T=n.ray.origin.distanceTo(h);T<n.near||T>n.far||e.push({distance:T,point:u.clone().applyMatrix4(this.matrixWorld),index:m,face:null,faceIndex:null,object:this})}}}else t.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")},updateMorphTargets:function(){let n=this.geometry;if(n.isBufferGeometry){let e=n.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{let e=n.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}});var Pc=new w,Dc=new w;function Hr(n,e){Oi.call(this,n,e),this.type="LineSegments"}Hr.prototype=Object.assign(Object.create(Oi.prototype),{constructor:Hr,isLineSegments:!0,computeLineDistances:function(){let n=this.geometry;if(n.isBufferGeometry)if(n.index===null){let e=n.attributes.position,t=[];for(let i=0,r=e.count;i<r;i+=2)Pc.fromBufferAttribute(e,i),Dc.fromBufferAttribute(e,i+1),t[i]=i===0?0:t[i-1],t[i+1]=t[i]+Pc.distanceTo(Dc);n.setAttribute("lineDistance",new Ee(t,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else n.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}});var Ic=class extends Oi{constructor(e,t){super(e,t);this.type="LineLoop"}};Ic.prototype.isLineLoop=!0;var ho=class extends qe{constructor(e){super();this.type="PointsMaterial",this.color=new ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.morphTargets=e.morphTargets,this}};ho.prototype.isPointsMaterial=!0;var Fc=new de,uo=new tn,Ur=new _n,Gr=new w;function Bc(n=new Le,e=new ho){_e.call(this),this.type="Points",this.geometry=n,this.material=e,this.updateMorphTargets()}Bc.prototype=Object.assign(Object.create(_e.prototype),{constructor:Bc,isPoints:!0,copy:function(n){return _e.prototype.copy.call(this,n),this.material=n.material,this.geometry=n.geometry,this},raycast:function(n,e){let t=this.geometry,i=this.matrixWorld,r=n.params.Points.threshold,s=t.drawRange;if(t.boundingSphere===null&&t.computeBoundingSphere(),Ur.copy(t.boundingSphere),Ur.applyMatrix4(i),Ur.radius+=r,n.ray.intersectsSphere(Ur)===!1)return;Fc.copy(i).invert(),uo.copy(n.ray).applyMatrix4(Fc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),a=o*o;if(t.isBufferGeometry){let c=t.index,u=t.attributes.position;if(c!==null){let h=Math.max(0,s.start),d=Math.min(c.count,s.start+s.count);for(let f=h,p=d;f<p;f++){let v=c.getX(f);Gr.fromBufferAttribute(u,v),Nc(Gr,v,a,i,n,e,this)}}else{let h=Math.max(0,s.start),d=Math.min(u.count,s.start+s.count);for(let f=h,p=d;f<p;f++)Gr.fromBufferAttribute(u,f),Nc(Gr,f,a,i,n,e,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")},updateMorphTargets:function(){let n=this.geometry;if(n.isBufferGeometry){let e=n.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{let e=n.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}});function Nc(n,e,t,i,r,s,o){let a=uo.distanceSqToPoint(n);if(a<t){let c=new w;uo.closestPointToPoint(n,c),c.applyMatrix4(i);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}var zc=class extends tt{constructor(e,t,i,r,s,o,a,c,l){super(e,t,i,r,s,o,a,c,l);this.format=a!==void 0?a:vn,this.minFilter=o!==void 0?o:We,this.magFilter=s!==void 0?s:We,this.generateMipmaps=!1;let u=this;function h(){u.needsUpdate=!0,e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){let e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}};zc.prototype.isVideoTexture=!0;var fo=class extends tt{constructor(e,t,i,r,s,o,a,c,l,u,h,d){super(null,o,a,c,l,u,r,s,h,d);this.image={width:t,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}};fo.prototype.isCompressedTexture=!0;var Oc=class extends tt{constructor(e,t,i,r,s,o,a,c,l){super(e,t,i,r,s,o,a,c,l);this.needsUpdate=!0}};Oc.prototype.isCanvasTexture=!0;var Hc=class extends tt{constructor(e,t,i,r,s,o,a,c,l,u){if(u=u!==void 0?u:Ln,u!==Ln&&u!==vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ln&&(i=or),i===void 0&&u===vi&&(i=gi),super(null,r,s,o,a,c,u,i,l),this.image={width:e,height:t},this.magFilter=a!==void 0?a:ut,this.minFilter=c!==void 0?c:ut,this.flipY=!1,this.generateMipmaps=!1}};Hc.prototype.isDepthTexture=!0;var Uc=class extends Le{constructor(e=1,t=1,i=1,r=8,s=1,o=!1,a=0,c=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};let l=this;r=Math.floor(r),s=Math.floor(s);let u=[],h=[],d=[],f=[],p=0,v=[],x=i/2,g=0;m(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new Ee(h,3)),this.setAttribute("normal",new Ee(d,3)),this.setAttribute("uv",new Ee(f,2));function m(){let b=new w,T=new w,y=0,L=(t-e)/i;for(let I=0;I<=s;I++){let D=[],O=I/s,C=O*(t-e)+e;for(let U=0;U<=r;U++){let P=U/r,R=P*c+a,B=Math.sin(R),F=Math.cos(R);T.x=C*B,T.y=-O*i+x,T.z=C*F,h.push(T.x,T.y,T.z),b.set(B,L,F).normalize(),d.push(b.x,b.y,b.z),f.push(P,1-O),D.push(p++)}v.push(D)}for(let I=0;I<r;I++)for(let D=0;D<s;D++){let O=v[D][I],C=v[D+1][I],U=v[D+1][I+1],P=v[D][I+1];u.push(O,C,P),u.push(C,U,P),y+=6}l.addGroup(g,y,0),g+=y}function S(b){let T=p,y=new V,L=new w,I=0,D=b===!0?e:t,O=b===!0?1:-1;for(let U=1;U<=r;U++)h.push(0,x*O,0),d.push(0,O,0),f.push(.5,.5),p++;let C=p;for(let U=0;U<=r;U++){let R=U/r*c+a,B=Math.cos(R),F=Math.sin(R);L.x=D*F,L.y=x*O,L.z=D*B,h.push(L.x,L.y,L.z),d.push(0,O,0),y.x=B*.5+.5,y.y=F*.5*O+.5,f.push(y.x,y.y),p++}for(let U=0;U<r;U++){let P=T+U,R=C+U;b===!0?u.push(R,R+1,P):u.push(R+1,R,P),I+=3}l.addGroup(g,I,b===!0?1:2),g+=I}}},po=class extends Uc{constructor(e=1,t=1,i=8,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a);this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}};var Wg=new w,qg=new w,Xg=new w,jg=new Ye;var jm={triangulate:function(n,e,t){t=t||2;let i=e&&e.length,r=i?e[0]*t:n.length,s=Gc(n,0,r,t,!0),o=[];if(!s||s.next===s.prev)return o;let a,c,l,u,h,d,f;if(i&&(s=$m(n,e,s,t)),n.length>80*t){a=l=n[0],c=u=n[1];for(let p=t;p<r;p+=t)h=n[p],d=n[p+1],h<a&&(a=h),d<c&&(c=d),h>l&&(l=h),d>u&&(u=d);f=Math.max(l-a,u-c),f=f!==0?1/f:0}return Hi(s,o,t,a,c,f),o}};function Gc(n,e,t,i,r){let s,o;if(r===lg(n,e,t,i)>0)for(s=e;s<t;s+=i)o=Wc(s,n[s],n[s+1],o);else for(s=t-i;s>=e;s-=i)o=Wc(s,n[s],n[s+1],o);return o&&kr(o,o.next)&&(Gi(o),o=o.next),o}function ln(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(kr(t,t.next)||Xe(t.prev,t,t.next)===0)){if(Gi(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Hi(n,e,t,i,r,s,o){if(!n)return;!o&&s&&ig(n,i,r,s);let a=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,s?Zm(n,i,r,s):Ym(n)){e.push(c.i/t),e.push(n.i/t),e.push(l.i/t),Gi(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=Jm(ln(n),e,t),Hi(n,e,t,i,r,s,2)):o===2&&Qm(n,e,t,i,r,s):Hi(ln(n),e,t,i,r,s,1);break}}}function Ym(n){let e=n.prev,t=n,i=n.next;if(Xe(e,t,i)>=0)return!1;let r=n.next.next;for(;r!==n.prev;){if(ri(e.x,e.y,t.x,t.y,i.x,i.y,r.x,r.y)&&Xe(r.prev,r,r.next)>=0)return!1;r=r.next}return!0}function Zm(n,e,t,i){let r=n.prev,s=n,o=n.next;if(Xe(r,s,o)>=0)return!1;let a=r.x<s.x?r.x<o.x?r.x:o.x:s.x<o.x?s.x:o.x,c=r.y<s.y?r.y<o.y?r.y:o.y:s.y<o.y?s.y:o.y,l=r.x>s.x?r.x>o.x?r.x:o.x:s.x>o.x?s.x:o.x,u=r.y>s.y?r.y>o.y?r.y:o.y:s.y>o.y?s.y:o.y,h=mo(a,c,e,t,i),d=mo(l,u,e,t,i),f=n.prevZ,p=n.nextZ;for(;f&&f.z>=h&&p&&p.z<=d;){if(f!==n.prev&&f!==n.next&&ri(r.x,r.y,s.x,s.y,o.x,o.y,f.x,f.y)&&Xe(f.prev,f,f.next)>=0||(f=f.prevZ,p!==n.prev&&p!==n.next&&ri(r.x,r.y,s.x,s.y,o.x,o.y,p.x,p.y)&&Xe(p.prev,p,p.next)>=0))return!1;p=p.nextZ}for(;f&&f.z>=h;){if(f!==n.prev&&f!==n.next&&ri(r.x,r.y,s.x,s.y,o.x,o.y,f.x,f.y)&&Xe(f.prev,f,f.next)>=0)return!1;f=f.prevZ}for(;p&&p.z<=d;){if(p!==n.prev&&p!==n.next&&ri(r.x,r.y,s.x,s.y,o.x,o.y,p.x,p.y)&&Xe(p.prev,p,p.next)>=0)return!1;p=p.nextZ}return!0}function Jm(n,e,t){let i=n;do{let r=i.prev,s=i.next.next;!kr(r,s)&&kc(r,i,i.next,s)&&Ui(r,s)&&Ui(s,r)&&(e.push(r.i/t),e.push(i.i/t),e.push(s.i/t),Gi(i),Gi(i.next),i=n=s),i=i.next}while(i!==n);return ln(i)}function Qm(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&og(o,a)){let c=Vc(o,a);o=ln(o,o.next),c=ln(c,c.next),Hi(o,e,t,i,r,s),Hi(c,e,t,i,r,s);return}a=a.next}o=o.next}while(o!==n)}function $m(n,e,t,i){let r=[],s,o,a,c,l;for(s=0,o=e.length;s<o;s++)a=e[s]*i,c=s<o-1?e[s+1]*i:n.length,l=Gc(n,a,c,i,!1),l===l.next&&(l.steiner=!0),r.push(sg(l));for(r.sort(Km),s=0;s<r.length;s++)eg(r[s],t),t=ln(t,t.next);return t}function Km(n,e){return n.x-e.x}function eg(n,e){if(e=tg(n,e),e){let t=Vc(e,n);ln(e,e.next),ln(t,t.next)}}function tg(n,e){let t=e,i=n.x,r=n.y,s=-Infinity,o;do{if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){let d=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>s){if(s=d,d===i){if(r===t.y)return t;if(r===t.next.y)return t.next}o=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!o)return null;if(i===s)return o;let a=o,c=o.x,l=o.y,u=Infinity,h;t=o;do i>=t.x&&t.x>=c&&i!==t.x&&ri(r<l?i:s,r,c,l,r<l?s:i,r,t.x,t.y)&&(h=Math.abs(r-t.y)/(i-t.x),Ui(t,n)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&ng(o,t)))&&(o=t,u=h)),t=t.next;while(t!==a);return o}function ng(n,e){return Xe(n.prev,n,e.prev)<0&&Xe(e.next,n,n.next)<0}function ig(n,e,t,i){let r=n;do r.z===null&&(r.z=mo(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,rg(r)}function rg(n){let e,t,i,r,s,o,a,c,l=1;do{for(t=n,n=null,s=null,o=0;t;){for(o++,i=t,a=0,e=0;e<l&&(a++,i=i.nextZ,!!i);e++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,a--):(r=i,i=i.nextZ,c--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;t=i}s.nextZ=null,l*=2}while(o>1);return n}function mo(n,e,t,i,r){return n=32767*(n-t)*r,e=32767*(e-i)*r,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function sg(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function ri(n,e,t,i,r,s,o,a){return(r-o)*(e-a)-(n-o)*(s-a)>=0&&(n-o)*(i-a)-(t-o)*(e-a)>=0&&(t-o)*(s-a)-(r-o)*(i-a)>=0}function og(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!ag(n,e)&&(Ui(n,e)&&Ui(e,n)&&cg(n,e)&&(Xe(n.prev,n,e.prev)||Xe(n,e.prev,e))||kr(n,e)&&Xe(n.prev,n,n.next)>0&&Xe(e.prev,e,e.next)>0)}function Xe(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function kr(n,e){return n.x===e.x&&n.y===e.y}function kc(n,e,t,i){let r=Wr(Xe(n,e,t)),s=Wr(Xe(n,e,i)),o=Wr(Xe(t,i,n)),a=Wr(Xe(t,i,e));return!!(r!==s&&o!==a||r===0&&Vr(n,t,e)||s===0&&Vr(n,i,e)||o===0&&Vr(t,n,i)||a===0&&Vr(t,e,i))}function Vr(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Wr(n){return n>0?1:n<0?-1:0}function ag(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&kc(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Ui(n,e){return Xe(n.prev,n,n.next)<0?Xe(n,e,n.next)>=0&&Xe(n,n.prev,e)>=0:Xe(n,e,n.prev)<0||Xe(n,n.next,e)<0}function cg(n,e){let t=n,i=!1,r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Vc(n,e){let t=new go(n.i,n.x,n.y),i=new go(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Wc(n,e,t,i){let r=new go(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Gi(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function go(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function lg(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}var hn={area:function(n){let e=n.length,t=0;for(let i=e-1,r=0;r<e;i=r++)t+=n[i].x*n[r].y-n[r].x*n[i].y;return t*.5},isClockWise:function(n){return hn.area(n)<0},triangulateShape:function(n,e){let t=[],i=[],r=[];qc(n),Xc(t,n);let s=n.length;e.forEach(qc);for(let a=0;a<e.length;a++)i.push(s),s+=e[a].length,Xc(t,e[a]);let o=jm.triangulate(t,i);for(let a=0;a<o.length;a+=3)r.push(o.slice(a,a+3));return r}};function qc(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Xc(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var ki=class extends Le{constructor(e,t){super();this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,r=[],s=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new Ee(r,3)),this.setAttribute("uv",new Ee(s,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:100,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:6,p=t.bevelSize!==void 0?t.bevelSize:f-2,v=t.bevelOffset!==void 0?t.bevelOffset:0,x=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,m=t.UVGenerator!==void 0?t.UVGenerator:hg;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),h=t.amount);let S,b=!1,T,y,L,I;g&&(S=g.getSpacedPoints(u),b=!0,d=!1,T=g.computeFrenetFrames(u,!1),y=new w,L=new w,I=new w),d||(x=0,f=0,p=0,v=0);let D=a.extractPoints(l),O=D.shape,C=D.holes;if(!hn.isClockWise(O)){O=O.reverse();for(let Y=0,Q=C.length;Y<Q;Y++){let te=C[Y];hn.isClockWise(te)&&(C[Y]=te.reverse())}}let P=hn.triangulateShape(O,C),R=O;for(let Y=0,Q=C.length;Y<Q;Y++){let te=C[Y];O=O.concat(te)}function B(Y,Q,te){return Q||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().multiplyScalar(te).add(Y)}let F=O.length,X=P.length;function ee(Y,Q,te){let he,ie,E,M=Y.x-Q.x,k=Y.y-Q.y,W=te.x-Y.x,re=te.y-Y.y,ce=M*M+k*k,Fe=M*re-k*W;if(Math.abs(Fe)>Number.EPSILON){let ve=Math.sqrt(ce),A=Math.sqrt(W*W+re*re),J=Q.x-k/ve,$=Q.y+M/ve,me=te.x-re/A,q=te.y+W/A,ge=((me-J)*re-(q-$)*W)/(M*re-k*W);he=J+M*ge-Y.x,ie=$+k*ge-Y.y;let Ne=he*he+ie*ie;if(Ne<=2)return new V(he,ie);E=Math.sqrt(Ne/2)}else{let ve=!1;M>Number.EPSILON?W>Number.EPSILON&&(ve=!0):M<-Number.EPSILON?W<-Number.EPSILON&&(ve=!0):Math.sign(k)===Math.sign(re)&&(ve=!0),ve?(he=-k,ie=M,E=Math.sqrt(ce)):(he=M,ie=k,E=Math.sqrt(ce/2))}return new V(he/E,ie/E)}let Z=[];for(let Y=0,Q=R.length,te=Q-1,he=Y+1;Y<Q;Y++,te++,he++)te===Q&&(te=0),he===Q&&(he=0),Z[Y]=ee(R[Y],R[te],R[he]);let se=[],j,oe=Z.concat();for(let Y=0,Q=C.length;Y<Q;Y++){let te=C[Y];j=[];for(let he=0,ie=te.length,E=ie-1,M=he+1;he<ie;he++,E++,M++)E===ie&&(E=0),M===ie&&(M=0),j[he]=ee(te[he],te[E],te[M]);se.push(j),oe=oe.concat(j)}for(let Y=0;Y<x;Y++){let Q=Y/x,te=f*Math.cos(Q*Math.PI/2),he=p*Math.sin(Q*Math.PI/2)+v;for(let ie=0,E=R.length;ie<E;ie++){let M=B(R[ie],Z[ie],he);le(M.x,M.y,-te)}for(let ie=0,E=C.length;ie<E;ie++){let M=C[ie];j=se[ie];for(let k=0,W=M.length;k<W;k++){let re=B(M[k],j[k],he);le(re.x,re.y,-te)}}}let ue=p+v;for(let Y=0;Y<F;Y++){let Q=d?B(O[Y],oe[Y],ue):O[Y];b?(L.copy(T.normals[0]).multiplyScalar(Q.x),y.copy(T.binormals[0]).multiplyScalar(Q.y),I.copy(S[0]).add(L).add(y),le(I.x,I.y,I.z)):le(Q.x,Q.y,0)}for(let Y=1;Y<=u;Y++)for(let Q=0;Q<F;Q++){let te=d?B(O[Q],oe[Q],ue):O[Q];b?(L.copy(T.normals[Y]).multiplyScalar(te.x),y.copy(T.binormals[Y]).multiplyScalar(te.y),I.copy(S[Y]).add(L).add(y),le(I.x,I.y,I.z)):le(te.x,te.y,h/u*Y)}for(let Y=x-1;Y>=0;Y--){let Q=Y/x,te=f*Math.cos(Q*Math.PI/2),he=p*Math.sin(Q*Math.PI/2)+v;for(let ie=0,E=R.length;ie<E;ie++){let M=B(R[ie],Z[ie],he);le(M.x,M.y,h+te)}for(let ie=0,E=C.length;ie<E;ie++){let M=C[ie];j=se[ie];for(let k=0,W=M.length;k<W;k++){let re=B(M[k],j[k],he);b?le(re.x,re.y+S[u-1].y,S[u-1].x+te):le(re.x,re.y,h+te)}}}H(),we();function H(){let Y=r.length/3;if(d){let Q=0,te=F*Q;for(let he=0;he<X;he++){let ie=P[he];fe(ie[2]+te,ie[1]+te,ie[0]+te)}Q=u+x*2,te=F*Q;for(let he=0;he<X;he++){let ie=P[he];fe(ie[0]+te,ie[1]+te,ie[2]+te)}}else{for(let Q=0;Q<X;Q++){let te=P[Q];fe(te[2],te[1],te[0])}for(let Q=0;Q<X;Q++){let te=P[Q];fe(te[0]+F*u,te[1]+F*u,te[2]+F*u)}}i.addGroup(Y,r.length/3-Y,0)}function we(){let Y=r.length/3,Q=0;Me(R,Q),Q+=R.length;for(let te=0,he=C.length;te<he;te++){let ie=C[te];Me(ie,Q),Q+=ie.length}i.addGroup(Y,r.length/3-Y,1)}function Me(Y,Q){let te=Y.length;for(;--te>=0;){let he=te,ie=te-1;ie<0&&(ie=Y.length-1);for(let E=0,M=u+x*2;E<M;E++){let k=F*E,W=F*(E+1),re=Q+he+k,ce=Q+ie+k,Fe=Q+ie+W,ve=Q+he+W;Ie(re,ce,Fe,ve)}}}function le(Y,Q,te){c.push(Y),c.push(Q),c.push(te)}function fe(Y,Q,te){Te(Y),Te(Q),Te(te);let he=r.length/3,ie=m.generateTopUV(i,r,he-3,he-2,he-1);Ce(ie[0]),Ce(ie[1]),Ce(ie[2])}function Ie(Y,Q,te,he){Te(Y),Te(Q),Te(he),Te(Q),Te(te),Te(he);let ie=r.length/3,E=m.generateSideWallUV(i,r,ie-6,ie-3,ie-2,ie-1);Ce(E[0]),Ce(E[1]),Ce(E[3]),Ce(E[1]),Ce(E[2]),Ce(E[3])}function Te(Y){r.push(c[Y*3+0]),r.push(c[Y*3+1]),r.push(c[Y*3+2])}function Ce(Y){s.push(Y.x),s.push(Y.y)}}}toJSON(){let e=Le.prototype.toJSON.call(this),t=this.parameters.shapes,i=this.parameters.options;return ug(t,i,e)}},hg={generateTopUV:function(n,e,t,i,r){let s=e[t*3],o=e[t*3+1],a=e[i*3],c=e[i*3+1],l=e[r*3],u=e[r*3+1];return[new V(s,o),new V(a,c),new V(l,u)]},generateSideWallUV:function(n,e,t,i,r,s){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[i*3],u=e[i*3+1],h=e[i*3+2],d=e[r*3],f=e[r*3+1],p=e[r*3+2],v=e[s*3],x=e[s*3+1],g=e[s*3+2];return Math.abs(a-u)<.01?[new V(o,1-c),new V(l,1-h),new V(d,1-p),new V(v,1-g)]:[new V(a,1-c),new V(u,1-h),new V(f,1-p),new V(x,1-g)]}};function ug(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){let s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}function vo(n,e,t){Le.call(this),this.type="ParametricGeometry",this.parameters={func:n,slices:e,stacks:t};let i=[],r=[],s=[],o=[],a=1e-5,c=new w,l=new w,u=new w,h=new w,d=new w;n.length<3&&console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");let f=e+1;for(let p=0;p<=t;p++){let v=p/t;for(let x=0;x<=e;x++){let g=x/e;n(g,v,l),r.push(l.x,l.y,l.z),g-a>=0?(n(g-a,v,u),h.subVectors(l,u)):(n(g+a,v,u),h.subVectors(u,l)),v-a>=0?(n(g,v-a,u),d.subVectors(l,u)):(n(g,v+a,u),d.subVectors(u,l)),c.crossVectors(h,d).normalize(),s.push(c.x,c.y,c.z),o.push(g,v)}}for(let p=0;p<t;p++)for(let v=0;v<e;v++){let x=p*f+v,g=p*f+v+1,m=(p+1)*f+v+1,S=(p+1)*f+v;i.push(x,g,S),i.push(g,m,S)}this.setIndex(i),this.setAttribute("position",new Ee(r,3)),this.setAttribute("normal",new Ee(s,3)),this.setAttribute("uv",new Ee(o,2))}vo.prototype=Object.create(Le.prototype);vo.prototype.constructor=vo;var xo=class extends Le{constructor(e=.5,t=1,i=8,r=1,s=0,o=Math.PI*2){super();this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);let a=[],c=[],l=[],u=[],h=e,d=(t-e)/r,f=new w,p=new V;for(let v=0;v<=r;v++){for(let x=0;x<=i;x++){let g=s+x/i*o;f.x=h*Math.cos(g),f.y=h*Math.sin(g),c.push(f.x,f.y,f.z),l.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,u.push(p.x,p.y)}h+=d}for(let v=0;v<r;v++){let x=v*(i+1);for(let g=0;g<i;g++){let m=g+x,S=m,b=m+i+1,T=m+i+2,y=m+1;a.push(S,b,y),a.push(b,T,y)}}this.setIndex(a),this.setAttribute("position",new Ee(c,3)),this.setAttribute("normal",new Ee(l,3)),this.setAttribute("uv",new Ee(u,2))}},jc=class extends Le{constructor(e,t=12){super();this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],r=[],s=[],o=[],a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new Ee(r,3)),this.setAttribute("normal",new Ee(s,3)),this.setAttribute("uv",new Ee(o,2));function l(u){let h=r.length/3,d=u.extractPoints(t),f=d.shape,p=d.holes;hn.isClockWise(f)===!1&&(f=f.reverse());for(let x=0,g=p.length;x<g;x++){let m=p[x];hn.isClockWise(m)===!0&&(p[x]=m.reverse())}let v=hn.triangulateShape(f,p);for(let x=0,g=p.length;x<g;x++){let m=p[x];f=f.concat(m)}for(let x=0,g=f.length;x<g;x++){let m=f[x];r.push(m.x,m.y,0),s.push(0,0,1),o.push(m.x,m.y)}for(let x=0,g=v.length;x<g;x++){let m=v[x],S=m[0]+h,b=m[1]+h,T=m[2]+h;i.push(S,b,T),c+=3}}}toJSON(){let e=Le.prototype.toJSON.call(this),t=this.parameters.shapes;return dg(t,e)}};function dg(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}var jt=class extends Le{constructor(e=1,t=8,i=6,r=0,s=Math.PI*2,o=0,a=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,u=[],h=new w,d=new w,f=[],p=[],v=[],x=[];for(let g=0;g<=i;g++){let m=[],S=g/i,b=0;g==0&&o==0?b=.5/t:g==i&&c==Math.PI&&(b=-.5/t);for(let T=0;T<=t;T++){let y=T/t;h.x=-e*Math.cos(r+y*s)*Math.sin(o+S*a),h.y=e*Math.cos(o+S*a),h.z=e*Math.sin(r+y*s)*Math.sin(o+S*a),p.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),x.push(y+b,1-S),m.push(l++)}u.push(m)}for(let g=0;g<i;g++)for(let m=0;m<t;m++){let S=u[g][m+1],b=u[g][m],T=u[g+1][m],y=u[g+1][m+1];(g!==0||o>0)&&f.push(S,b,y),(g!==i-1||c<Math.PI)&&f.push(b,T,y)}this.setIndex(f),this.setAttribute("position",new Ee(p,3)),this.setAttribute("normal",new Ee(v,3)),this.setAttribute("uv",new Ee(x,2))}};var Yc=class extends qe{constructor(e){super();this.type="ShadowMaterial",this.color=new ae(0),this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this}};Yc.prototype.isShadowMaterial=!0;var Zc=class extends Ge{constructor(e){super(e);this.type="RawShaderMaterial"}};Zc.prototype.isRawShaderMaterial=!0;function Yt(n){qe.call(this),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dn,this.normalScale=new V(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.vertexTangents=!1,this.setValues(n)}Yt.prototype=Object.create(qe.prototype);Yt.prototype.constructor=Yt;Yt.prototype.isMeshStandardMaterial=!0;Yt.prototype.copy=function(n){return qe.prototype.copy.call(this,n),this.defines={STANDARD:""},this.color.copy(n.color),this.roughness=n.roughness,this.metalness=n.metalness,this.map=n.map,this.lightMap=n.lightMap,this.lightMapIntensity=n.lightMapIntensity,this.aoMap=n.aoMap,this.aoMapIntensity=n.aoMapIntensity,this.emissive.copy(n.emissive),this.emissiveMap=n.emissiveMap,this.emissiveIntensity=n.emissiveIntensity,this.bumpMap=n.bumpMap,this.bumpScale=n.bumpScale,this.normalMap=n.normalMap,this.normalMapType=n.normalMapType,this.normalScale.copy(n.normalScale),this.displacementMap=n.displacementMap,this.displacementScale=n.displacementScale,this.displacementBias=n.displacementBias,this.roughnessMap=n.roughnessMap,this.metalnessMap=n.metalnessMap,this.alphaMap=n.alphaMap,this.envMap=n.envMap,this.envMapIntensity=n.envMapIntensity,this.refractionRatio=n.refractionRatio,this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this.wireframeLinecap=n.wireframeLinecap,this.wireframeLinejoin=n.wireframeLinejoin,this.skinning=n.skinning,this.morphTargets=n.morphTargets,this.morphNormals=n.morphNormals,this.flatShading=n.flatShading,this.vertexTangents=n.vertexTangents,this};function si(n){Yt.call(this),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoat=0,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new V(1,1),this.clearcoatNormalMap=null,this.reflectivity=.5,Object.defineProperty(this,"ior",{get:function(){return(1+.4*this.reflectivity)/(1-.4*this.reflectivity)},set:function(e){this.reflectivity=pe.clamp(2.5*(e-1)/(e+1),0,1)}}),this.sheen=null,this.transmission=0,this.transmissionMap=null,this.setValues(n)}si.prototype=Object.create(Yt.prototype);si.prototype.constructor=si;si.prototype.isMeshPhysicalMaterial=!0;si.prototype.copy=function(n){return Yt.prototype.copy.call(this,n),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=n.clearcoat,this.clearcoatMap=n.clearcoatMap,this.clearcoatRoughness=n.clearcoatRoughness,this.clearcoatRoughnessMap=n.clearcoatRoughnessMap,this.clearcoatNormalMap=n.clearcoatNormalMap,this.clearcoatNormalScale.copy(n.clearcoatNormalScale),this.reflectivity=n.reflectivity,n.sheen?this.sheen=(this.sheen||new ae).copy(n.sheen):this.sheen=null,this.transmission=n.transmission,this.transmissionMap=n.transmissionMap,this};var pt=class extends qe{constructor(e){super();this.type="MeshPhongMaterial",this.color=new ae(16777215),this.specular=new ae(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dn,this.normalScale=new V(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=rr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}};pt.prototype.isMeshPhongMaterial=!0;var Jc=class extends qe{constructor(e){super();this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ae(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dn,this.normalScale=new V(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this}};Jc.prototype.isMeshToonMaterial=!0;var Qc=class extends qe{constructor(e){super();this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dn,this.normalScale=new V(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}};Qc.prototype.isMeshNormalMaterial=!0;var $c=class extends qe{constructor(e){super();this.type="MeshLambertMaterial",this.color=new ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=rr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this}};$c.prototype.isMeshLambertMaterial=!0;var Kc=class extends qe{constructor(e){super();this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ae(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dn,this.normalScale=new V(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}};Kc.prototype.isMeshMatcapMaterial=!0;var el=class extends ii{constructor(e){super();this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};el.prototype.isLineDashedMaterial=!0;var Ve={arraySlice:function(n,e,t){return Ve.isTypedArray(n)?new n.constructor(n.subarray(e,t!==void 0?t:n.length)):n.slice(e,t)},convertArray:function(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)},isTypedArray:function(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)},getKeyframeOrder:function(n){function e(r,s){return n[r]-n[s]}let t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i},sortedArray:function(n,e,t){let i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){let a=t[s]*e;for(let c=0;c!==e;++c)r[o++]=n[a+c]}return r},flattenJSON:function(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)},subclip:function(n,e,t,i,r=30){let s=n.clone();s.name=e;let o=[];for(let c=0;c<s.tracks.length;++c){let l=s.tracks[c],u=l.getValueSize(),h=[],d=[];for(let f=0;f<l.times.length;++f){let p=l.times[f]*r;if(!(p<t||p>=i)){h.push(l.times[f]);for(let v=0;v<u;++v)d.push(l.values[f*u+v])}}h.length!==0&&(l.times=Ve.convertArray(h,l.times.constructor),l.values=Ve.convertArray(d,l.values.constructor),o.push(l))}s.tracks=o;let a=Infinity;for(let c=0;c<s.tracks.length;++c)a>s.tracks[c].times[0]&&(a=s.tracks[c].times[0]);for(let c=0;c<s.tracks.length;++c)s.tracks[c].shift(-1*a);return s.resetDuration(),s},makeClipAdditive:function(n,e=0,t=n,i=30){i<=0&&(i=30);let r=t.tracks.length,s=e/i;for(let o=0;o<r;++o){let a=t.tracks[o],c=a.ValueTypeName;if(c==="bool"||c==="string")continue;let l=n.tracks.find(function(g){return g.name===a.name&&g.ValueTypeName===c});if(l===void 0)continue;let u=0,h=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let d=0,f=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);let p=a.times.length-1,v;if(s<=a.times[0]){let g=u,m=h-u;v=Ve.arraySlice(a.values,g,m)}else if(s>=a.times[p]){let g=p*h+u,m=g+h-u;v=Ve.arraySlice(a.values,g,m)}else{let g=a.createInterpolant(),m=u,S=h-u;g.evaluate(s),v=Ve.arraySlice(g.resultBuffer,m,S)}c==="quaternion"&&new st().fromArray(v).normalize().conjugate().toArray(v);let x=l.times.length;for(let g=0;g<x;++g){let m=g*f+d;if(c==="quaternion")st.multiplyQuaternionsFlat(l.values,m,v,0,l.values,m);else{let S=f-d*2;for(let b=0;b<S;++b)l.values[m+b]-=v[b]}}}return n.blendMode=Sa,n}};function Et(n,e,t,i){this.parameterPositions=n,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(t),this.sampleValues=e,this.valueSize=t}Object.assign(Et.prototype,{evaluate:function(n){let e=this.parameterPositions,t=this._cachedIndex,i=e[t],r=e[t-1];e:{t:{let s;n:{i:if(!(n<i)){for(let o=t+2;;){if(i===void 0){if(n<r)break i;return t=e.length,this._cachedIndex=t,this.afterEnd_(t-1,n,r)}if(t===o)break;if(r=i,i=e[++t],n<i)break t}s=e.length;break n}if(!(n>=r)){let o=e[1];n<o&&(t=2,r=o);for(let a=t-2;;){if(r===void 0)return this._cachedIndex=0,this.beforeStart_(0,n,i);if(t===a)break;if(i=r,r=e[--t-1],n>=r)break t}s=t,t=0;break n}break e}for(;t<s;){let o=t+s>>>1;n<e[o]?s=o:t=o+1}if(i=e[t],r=e[t-1],r===void 0)return this._cachedIndex=0,this.beforeStart_(0,n,i);if(i===void 0)return t=e.length,this._cachedIndex=t,this.afterEnd_(t-1,r,n)}this._cachedIndex=t,this.intervalChanged_(t,r,i)}return this.interpolate_(t,r,n,i)},settings:null,DefaultSettings_:{},getSettings_:function(){return this.settings||this.DefaultSettings_},copySampleValue_:function(n){let e=this.resultBuffer,t=this.sampleValues,i=this.valueSize,r=n*i;for(let s=0;s!==i;++s)e[s]=t[r+s];return e},interpolate_:function(){throw new Error("call to abstract method")},intervalChanged_:function(){}});Object.assign(Et.prototype,{beforeStart_:Et.prototype.copySampleValue_,afterEnd_:Et.prototype.copySampleValue_});function yo(n,e,t,i){Et.call(this,n,e,t,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0}yo.prototype=Object.assign(Object.create(Et.prototype),{constructor:yo,DefaultSettings_:{endingStart:Rn,endingEnd:Rn},intervalChanged_:function(n,e,t){let i=this.parameterPositions,r=n-2,s=n+1,o=i[r],a=i[s];if(o===void 0)switch(this.getSettings_().endingStart){case Cn:r=n,o=2*e-t;break;case ur:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=n,o=t}if(a===void 0)switch(this.getSettings_().endingEnd){case Cn:s=n,a=2*t-e;break;case ur:s=1,a=t+i[1]-i[0];break;default:s=n-1,a=e}let c=(t-e)*.5,l=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(a-t),this._offsetPrev=r*l,this._offsetNext=s*l},interpolate_:function(n,e,t,i){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=n*o,c=a-o,l=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,d=this._weightNext,f=(t-e)/(i-e),p=f*f,v=p*f,x=-h*v+2*h*p-h*f,g=(1+h)*v+(-1.5-2*h)*p+(-.5+h)*f+1,m=(-1-d)*v+(1.5+d)*p+.5*f,S=d*v-d*p;for(let b=0;b!==o;++b)r[b]=x*s[l+b]+g*s[c+b]+m*s[a+b]+S*s[u+b];return r}});function qr(n,e,t,i){Et.call(this,n,e,t,i)}qr.prototype=Object.assign(Object.create(Et.prototype),{constructor:qr,interpolate_:function(n,e,t,i){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=n*o,c=a-o,l=(t-e)/(i-e),u=1-l;for(let h=0;h!==o;++h)r[h]=s[c+h]*u+s[a+h]*l;return r}});function _o(n,e,t,i){Et.call(this,n,e,t,i)}_o.prototype=Object.assign(Object.create(Et.prototype),{constructor:_o,interpolate_:function(n){return this.copySampleValue_(n-1)}});var Dt=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ve.convertArray(t,this.TimeBufferType),this.values=Ve.convertArray(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ve.convertArray(e.times,Array),values:Ve.convertArray(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new _o(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new qr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new yo(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case lr:t=this.InterpolantFactoryMethodDiscrete;break;case hr:t=this.InterpolantFactoryMethodLinear;break;case ys:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return lr;case this.InterpolantFactoryMethodLinear:return hr;case this.InterpolantFactoryMethodSmooth:return ys}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=Ve.arraySlice(i,s,o),this.values=Ve.arraySlice(this.values,s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&Ve.isTypedArray(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=Ve.arraySlice(this.times),t=Ve.arraySlice(this.values),i=this.getValueSize(),r=this.getInterpolation()===ys,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{let h=a*i,d=h-i,f=h+i;for(let p=0;p!==i;++p){let v=t[h+p];if(v!==t[d+p]||v!==t[f+p]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let h=a*i,d=o*i;for(let f=0;f!==i;++f)t[d+f]=t[h+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=Ve.arraySlice(e,0,o),this.values=Ve.arraySlice(t,0,o*i)):(this.times=e,this.values=t),this}clone(){let e=Ve.arraySlice(this.times,0),t=Ve.arraySlice(this.values,0),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Dt.prototype.TimeBufferType=Float32Array;Dt.prototype.ValueBufferType=Float32Array;Dt.prototype.DefaultInterpolation=hr;var bn=class extends Dt{};bn.prototype.ValueTypeName="bool";bn.prototype.ValueBufferType=Array;bn.prototype.DefaultInterpolation=lr;bn.prototype.InterpolantFactoryMethodLinear=void 0;bn.prototype.InterpolantFactoryMethodSmooth=void 0;var wo=class extends Dt{};wo.prototype.ValueTypeName="color";var Vi=class extends Dt{};Vi.prototype.ValueTypeName="number";function bo(n,e,t,i){Et.call(this,n,e,t,i)}bo.prototype=Object.assign(Object.create(Et.prototype),{constructor:bo,interpolate_:function(n,e,t,i){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=(t-e)/(i-e),c=n*o;for(let l=c+o;c!==l;c+=4)st.slerpFlat(r,0,s,c-o,s,c,a);return r}});var oi=class extends Dt{InterpolantFactoryMethodLinear(e){return new bo(this.times,this.values,this.getValueSize(),e)}};oi.prototype.ValueTypeName="quaternion";oi.prototype.DefaultInterpolation=hr;oi.prototype.InterpolantFactoryMethodSmooth=void 0;var Mn=class extends Dt{};Mn.prototype.ValueTypeName="string";Mn.prototype.ValueBufferType=Array;Mn.prototype.DefaultInterpolation=lr;Mn.prototype.InterpolantFactoryMethodLinear=void 0;Mn.prototype.InterpolantFactoryMethodSmooth=void 0;var Wi=class extends Dt{};Wi.prototype.ValueTypeName="vector";var Mo=class{constructor(e,t=-1,i,r=_s){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=pe.generateUUID(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(pg(i[o]).scale(r));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){let t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)t.push(Dt.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){let s=t.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);let u=Ve.getKeyframeOrder(c);c=Ve.sortedArray(c,1,u),l=Ve.sortedArray(l,1,u),!r&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new Vi(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],u=l.name.match(s);if(u&&u.length>1){let h=u[1],d=r[h];d||(r[h]=d=[]),d.push(l)}}let o=[];for(let a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let i=function(h,d,f,p,v){if(f.length!==0){let x=[],g=[];Ve.flattenJSON(f,x,g,p),x.length!==0&&v.push(new h(d,x,g))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let h=0;h<l.length;h++){let d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let v=0;v<d[p].morphTargets.length;v++)f[d[p].morphTargets[v]]=-1;for(let v in f){let x=[],g=[];for(let m=0;m!==d[p].morphTargets.length;++m){let S=d[p];x.push(S.time),g.push(S.morphTarget===v?1:0)}r.push(new Vi(".morphTargetInfluence["+v+"]",x,g))}c=f.length*(o||1)}else{let f=".bones["+t[h].name+"]";i(Wi,f+".position",d,"pos",r),i(oi,f+".quaternion",d,"rot",r),i(Wi,f+".scale",d,"scl",r)}}return r.length===0?null:new this(s,c,r,a)}resetDuration(){let e=this.tracks,t=0;for(let i=0,r=e.length;i!==r;++i){let s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function fg(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Vi;case"vector":case"vector2":case"vector3":case"vector4":return Wi;case"color":return wo;case"quaternion":return oi;case"bool":case"boolean":return bn;case"string":return Mn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function pg(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=fg(n.type);if(n.times===void 0){let t=[],i=[];Ve.flattenJSON(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}var ai={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function mg(n,e,t){let i=this,r=!1,s=0,o=0,a,c=[];this.onStart=void 0,this.onLoad=n,this.onProgress=e,this.onError=t,this.itemStart=function(l){o++,r===!1&&i.onStart!==void 0&&i.onStart(l,s,o),r=!0},this.itemEnd=function(l){s++,i.onProgress!==void 0&&i.onProgress(l,s,o),s===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(l){i.onError!==void 0&&i.onError(l)},this.resolveURL=function(l){return a?a(l):l},this.setURLModifier=function(l){return a=l,this},this.addHandler=function(l,u){return c.push(l,u),this},this.removeHandler=function(l){let u=c.indexOf(l);return u!==-1&&c.splice(u,2),this},this.getHandler=function(l){for(let u=0,h=c.length;u<h;u+=2){let d=c[u],f=c[u+1];if(d.global&&(d.lastIndex=0),d.test(l))return f}return null}}var gg=new mg;function lt(n){this.manager=n!==void 0?n:gg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}Object.assign(lt.prototype,{load:function(){},loadAsync:function(n,e){let t=this;return new Promise(function(i,r){t.load(n,i,e,r)})},parse:function(){},setCrossOrigin:function(n){return this.crossOrigin=n,this},setWithCredentials:function(n){return this.withCredentials=n,this},setPath:function(n){return this.path=n,this},setResourcePath:function(n){return this.resourcePath=n,this},setRequestHeader:function(n){return this.requestHeader=n,this}});var It={};function qi(n){lt.call(this,n)}qi.prototype=Object.assign(Object.create(lt.prototype),{constructor:qi,load:function(n,e,t,i){n===void 0&&(n=""),this.path!==void 0&&(n=this.path+n),n=this.manager.resolveURL(n);let r=this,s=ai.get(n);if(s!==void 0)return r.manager.itemStart(n),setTimeout(function(){e&&e(s),r.manager.itemEnd(n)},0),s;if(It[n]!==void 0){It[n].push({onLoad:e,onProgress:t,onError:i});return}let o=/^data:(.*?)(;base64)?,(.*)$/,a=n.match(o),c;if(a){let l=a[1],u=!!a[2],h=a[3];h=decodeURIComponent(h),u&&(h=atob(h));try{let d,f=(this.responseType||"").toLowerCase();switch(f){case"arraybuffer":case"blob":let p=new Uint8Array(h.length);for(let x=0;x<h.length;x++)p[x]=h.charCodeAt(x);f==="blob"?d=new Blob([p.buffer],{type:l}):d=p.buffer;break;case"document":d=new DOMParser().parseFromString(h,l);break;case"json":d=JSON.parse(h);break;default:d=h;break}setTimeout(function(){e&&e(d),r.manager.itemEnd(n)},0)}catch(d){setTimeout(function(){i&&i(d),r.manager.itemError(n),r.manager.itemEnd(n)},0)}}else{It[n]=[],It[n].push({onLoad:e,onProgress:t,onError:i}),c=new XMLHttpRequest,c.open("GET",n,!0),c.addEventListener("load",function(l){let u=this.response,h=It[n];if(delete It[n],this.status===200||this.status===0){this.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),ai.add(n,u);for(let d=0,f=h.length;d<f;d++){let p=h[d];p.onLoad&&p.onLoad(u)}r.manager.itemEnd(n)}else{for(let d=0,f=h.length;d<f;d++){let p=h[d];p.onError&&p.onError(l)}r.manager.itemError(n),r.manager.itemEnd(n)}},!1),c.addEventListener("progress",function(l){let u=It[n];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onProgress&&f.onProgress(l)}},!1),c.addEventListener("error",function(l){let u=It[n];delete It[n];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(l)}r.manager.itemError(n),r.manager.itemEnd(n)},!1),c.addEventListener("abort",function(l){let u=It[n];delete It[n];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(l)}r.manager.itemError(n),r.manager.itemEnd(n)},!1),this.responseType!==void 0&&(c.responseType=this.responseType),this.withCredentials!==void 0&&(c.withCredentials=this.withCredentials),c.overrideMimeType&&c.overrideMimeType(this.mimeType!==void 0?this.mimeType:"text/plain");for(let l in this.requestHeader)c.setRequestHeader(l,this.requestHeader[l]);c.send(null)}return r.manager.itemStart(n),c},setResponseType:function(n){return this.responseType=n,this},setMimeType:function(n){return this.mimeType=n,this}});function tl(n){lt.call(this,n)}tl.prototype=Object.assign(Object.create(lt.prototype),{constructor:tl,load:function(n,e,t,i){let r=this,s=[],o=new fo,a=new qi(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(r.withCredentials);let c=0;function l(u){a.load(n[u],function(h){let d=r.parse(h,!0);s[u]={width:d.width,height:d.height,format:d.format,mipmaps:d.mipmaps},c+=1,c===6&&(d.mipmapCount===1&&(o.minFilter=We),o.image=s,o.format=d.format,o.needsUpdate=!0,e&&e(o))},t,i)}if(Array.isArray(n))for(let u=0,h=n.length;u<h;++u)l(u);else a.load(n,function(u){let h=r.parse(u,!0);if(h.isCubemap){let d=h.mipmaps.length/h.mipmapCount;for(let f=0;f<d;f++){s[f]={mipmaps:[]};for(let p=0;p<h.mipmapCount;p++)s[f].mipmaps.push(h.mipmaps[f*h.mipmapCount+p]),s[f].format=h.format,s[f].width=h.width,s[f].height=h.height}o.image=s}else o.image.width=h.width,o.image.height=h.height,o.mipmaps=h.mipmaps;h.mipmapCount===1&&(o.minFilter=We),o.format=h.format,o.needsUpdate=!0,e&&e(o)},t,i);return o}});var So=class extends lt{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=ai.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;let a=document.createElementNS("http://www.w3.org/1999/xhtml","img");function c(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1),ai.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(u){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1),r&&r(u),s.manager.itemError(e),s.manager.itemEnd(e)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}},nl=class extends lt{constructor(e){super(e)}load(e,t,i,r){let s=new Ai,o=new So(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function c(l){o.load(e[l],function(u){s.images[l]=u,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,r)}for(let l=0;l<e.length;++l)c(l);return s}};function il(n){lt.call(this,n)}il.prototype=Object.assign(Object.create(lt.prototype),{constructor:il,load:function(n,e,t,i){let r=this,s=new Pr,o=new qi(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(n,function(a){let c=r.parse(a);!c||(c.image!==void 0?s.image=c.image:c.data!==void 0&&(s.image.width=c.width,s.image.height=c.height,s.image.data=c.data),s.wrapS=c.wrapS!==void 0?c.wrapS:yt,s.wrapT=c.wrapT!==void 0?c.wrapT:yt,s.magFilter=c.magFilter!==void 0?c.magFilter:We,s.minFilter=c.minFilter!==void 0?c.minFilter:We,s.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.encoding!==void 0&&(s.encoding=c.encoding),c.flipY!==void 0&&(s.flipY=c.flipY),c.format!==void 0&&(s.format=c.format),c.type!==void 0&&(s.type=c.type),c.mipmaps!==void 0&&(s.mipmaps=c.mipmaps,s.minFilter=sr),c.mipmapCount===1&&(s.minFilter=We),c.generateMipmaps!==void 0&&(s.generateMipmaps=c.generateMipmaps),s.needsUpdate=!0,e&&e(s,c))},t,i),s}});function Ot(n){lt.call(this,n)}Ot.prototype=Object.assign(Object.create(lt.prototype),{constructor:Ot,load:function(n,e,t,i){let r=new tt,s=new So(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(n,function(o){r.image=o;let a=n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0;r.format=a?vn:dt,r.needsUpdate=!0,e!==void 0&&e(r)},t,i),r}});function xt(){this.type="Curve",this.arcLengthDivisions=200}Object.assign(xt.prototype,{getPoint:function(){return console.warn("THREE.Curve: .getPoint() not implemented."),null},getPointAt:function(n,e){let t=this.getUtoTmapping(n);return this.getPoint(t,e)},getPoints:function(n=5){let e=[];for(let t=0;t<=n;t++)e.push(this.getPoint(t/n));return e},getSpacedPoints:function(n=5){let e=[];for(let t=0;t<=n;t++)e.push(this.getPointAt(t/n));return e},getLength:function(){let n=this.getLengths();return n[n.length-1]},getLengths:function(n){if(n===void 0&&(n=this.arcLengthDivisions),this.cacheArcLengths&&this.cacheArcLengths.length===n+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],t,i=this.getPoint(0),r=0;e.push(0);for(let s=1;s<=n;s++)t=this.getPoint(s/n),r+=t.distanceTo(i),e.push(r),i=t;return this.cacheArcLengths=e,e},updateArcLengths:function(){this.needsUpdate=!0,this.getLengths()},getUtoTmapping:function(n,e){let t=this.getLengths(),i=0,r=t.length,s;e?s=e:s=n*t[r-1];let o=0,a=r-1,c;for(;o<=a;)if(i=Math.floor(o+(a-o)/2),c=t[i]-s,c<0)o=i+1;else if(c>0)a=i-1;else{a=i;break}if(i=a,t[i]===s)return i/(r-1);let l=t[i],h=t[i+1]-l,d=(s-l)/h;return(i+d)/(r-1)},getTangent:function(n,e){let t=1e-4,i=n-t,r=n+t;i<0&&(i=0),r>1&&(r=1);let s=this.getPoint(i),o=this.getPoint(r),a=e||(s.isVector2?new V:new w);return a.copy(o).sub(s).normalize(),a},getTangentAt:function(n,e){let t=this.getUtoTmapping(n);return this.getTangent(t,e)},computeFrenetFrames:function(n,e){let t=new w,i=[],r=[],s=[],o=new w,a=new de;for(let d=0;d<=n;d++){let f=d/n;i[d]=this.getTangentAt(f,new w),i[d].normalize()}r[0]=new w,s[0]=new w;let c=Number.MAX_VALUE,l=Math.abs(i[0].x),u=Math.abs(i[0].y),h=Math.abs(i[0].z);l<=c&&(c=l,t.set(1,0,0)),u<=c&&(c=u,t.set(0,1,0)),h<=c&&t.set(0,0,1),o.crossVectors(i[0],t).normalize(),r[0].crossVectors(i[0],o),s[0].crossVectors(i[0],r[0]);for(let d=1;d<=n;d++){if(r[d]=r[d-1].clone(),s[d]=s[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(pe.clamp(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(a.makeRotationAxis(o,f))}s[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(pe.clamp(r[0].dot(r[n]),-1,1));d/=n,i[0].dot(o.crossVectors(r[0],r[n]))>0&&(d=-d);for(let f=1;f<=n;f++)r[f].applyMatrix4(a.makeRotationAxis(i[f],d*f)),s[f].crossVectors(i[f],r[f])}return{tangents:i,normals:r,binormals:s}},clone:function(){return new this.constructor().copy(this)},copy:function(n){return this.arcLengthDivisions=n.arcLengthDivisions,this},toJSON:function(){let n={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return n.arcLengthDivisions=this.arcLengthDivisions,n.type=this.type,n},fromJSON:function(n){return this.arcLengthDivisions=n.arcLengthDivisions,this}});var Xi=class extends xt{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super();this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t){let i=t||new V,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+e*s,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}};Xi.prototype.isEllipseCurve=!0;var Eo=class extends Xi{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o);this.type="ArcCurve"}};Eo.prototype.isArcCurve=!0;function To(){let n=0,e=0,t=0,i=0;function r(s,o,a,c){n=s,e=a,t=-3*s+3*o-2*a-c,i=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,u,h){let d=(o-s)/l-(a-s)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+h)+(c-a)/h;d*=u,f*=u,r(o,a,d,f)},calc:function(s){let o=s*s,a=o*s;return n+e*s+t*o+i*a}}}var Xr=new w,Ao=new To,Lo=new To,Ro=new To,Co=class extends xt{constructor(e=[],t=!1,i="centripetal",r=.5){super();this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new w){let i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,u;this.closed||a>0?l=r[(a-1)%s]:(Xr.subVectors(r[0],r[1]).add(r[0]),l=Xr);let h=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Xr.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Xr),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(h),f),v=Math.pow(h.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f);v<1e-4&&(v=1),p<1e-4&&(p=v),x<1e-4&&(x=v),Ao.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,p,v,x),Lo.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,p,v,x),Ro.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,p,v,x)}else this.curveType==="catmullrom"&&(Ao.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),Lo.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),Ro.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return i.set(Ao.calc(c),Lo.calc(c),Ro.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new w().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};Co.prototype.isCatmullRomCurve3=!0;function rl(n,e,t,i,r){let s=(i-e)*.5,o=(r-t)*.5,a=n*n,c=n*a;return(2*t-2*i+s+o)*c+(-3*t+3*i-2*s-o)*a+s*n+t}function vg(n,e){let t=1-n;return t*t*e}function xg(n,e){return 2*(1-n)*n*e}function yg(n,e){return n*n*e}function ji(n,e,t,i){return vg(n,e)+xg(n,t)+yg(n,i)}function _g(n,e){let t=1-n;return t*t*t*e}function wg(n,e){let t=1-n;return 3*t*t*n*e}function bg(n,e){return 3*(1-n)*n*n*e}function Mg(n,e){return n*n*n*e}function Yi(n,e,t,i,r){return _g(n,e)+wg(n,t)+bg(n,i)+Mg(n,r)}var jr=class extends xt{constructor(e=new V,t=new V,i=new V,r=new V){super();this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new V){let i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Yi(e,r.x,s.x,o.x,a.x),Yi(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}};jr.prototype.isCubicBezierCurve=!0;var Po=class extends xt{constructor(e=new w,t=new w,i=new w,r=new w){super();this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new w){let i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Yi(e,r.x,s.x,o.x,a.x),Yi(e,r.y,s.y,o.y,a.y),Yi(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}};Po.prototype.isCubicBezierCurve3=!0;var Zi=class extends xt{constructor(e=new V,t=new V){super();this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new V){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){let i=t||new V;return i.copy(this.v2).sub(this.v1).normalize(),i}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};Zi.prototype.isLineCurve=!0;var sl=class extends xt{constructor(e=new w,t=new w){super();this.type="LineCurve3",this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new w){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Yr=class extends xt{constructor(e=new V,t=new V,i=new V){super();this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new V){let i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(ji(e,r.x,s.x,o.x),ji(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};Yr.prototype.isQuadraticBezierCurve=!0;var Do=class extends xt{constructor(e=new w,t=new w,i=new w){super();this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new w){let i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(ji(e,r.x,s.x,o.x),ji(e,r.y,s.y,o.y),ji(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};Do.prototype.isQuadraticBezierCurve3=!0;var Zr=class extends xt{constructor(e=[]){super();this.type="SplineCurve",this.points=e}getPoint(e,t=new V){let i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(rl(a,c.x,l.x,u.x,h.x),rl(a,c.y,l.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new V().fromArray(r))}return this}};Zr.prototype.isSplineCurve=!0;var Sg=Object.freeze({__proto__:null,ArcCurve:Eo,CatmullRomCurve3:Co,CubicBezierCurve:jr,CubicBezierCurve3:Po,EllipseCurve:Xi,LineCurve:Zi,LineCurve3:sl,QuadraticBezierCurve:Yr,QuadraticBezierCurve3:Do,SplineCurve:Zr}),ol=class extends xt{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Zi(t,e))}getPoint(e){let t=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=t){let s=i[r]-t,o=this.curves[r],a=o.getLength(),c=a===0?0:1-s/a;return o.getPointAt(c)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o&&o.isEllipseCurve?e*2:o&&(o.isLineCurve||o.isLineCurve3)?1:o&&o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let u=c[l];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new Sg[r.type]().fromJSON(r))}return this}},Ji=class extends ol{constructor(e){super();this.type="Path",this.currentPoint=new V,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Zi(this.currentPoint.clone(),new V(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let s=new Yr(this.currentPoint.clone(),new V(e,t),new V(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){let a=new jr(this.currentPoint.clone(),new V(e,t),new V(i,r),new V(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Zr(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,i,r,s,o,a,c),this}absellipse(e,t,i,r,s,o,a,c){let l=new Xi(e,t,i,r,s,o,a,c);if(this.curves.length>0){let h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Sn=class extends Ji{constructor(e){super(e);this.uuid=pe.generateUUID(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new Ji().fromJSON(r))}return this}},Ft=class extends _e{constructor(e,t=1){super();this.type="Light",this.color=new ae(e),this.intensity=t}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};Ft.prototype.isLight=!0;var al=class extends Ft{constructor(e,t,i){super(e,i);this.type="HemisphereLight",this.position.copy(_e.DefaultUp),this.updateMatrix(),this.groundColor=new ae(t)}copy(e){return Ft.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}};al.prototype.isHemisphereLight=!0;var cl=new de,ll=new w,hl=new w,Jr=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.mapSize=new V(512,512),this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Li,this._frameExtents=new V(1,1),this._viewportCount=1,this._viewports=[new Oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;ll.setFromMatrixPosition(e.matrixWorld),t.position.copy(ll),hl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hl),t.updateMatrixWorld(),cl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(t.projectionMatrix),i.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Io=class extends Jr{constructor(){super(new at(50,1,.5,500));this.focus=1}updateMatrices(e){let t=this.camera,i=pe.RAD2DEG*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}};Io.prototype.isSpotLightShadow=!0;var ul=class extends Ft{constructor(e,t,i=0,r=Math.PI/3,s=0,o=1){super(e,t);this.type="SpotLight",this.position.copy(_e.DefaultUp),this.updateMatrix(),this.target=new _e,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.shadow=new Io}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};ul.prototype.isSpotLight=!0;var dl=new de,Qi=new w,Fo=new w,Bo=class extends Jr{constructor(){super(new at(90,1,.5,500));this._frameExtents=new V(4,2),this._viewportCount=6,this._viewports=[new Oe(2,1,1,1),new Oe(0,1,1,1),new Oe(3,1,1,1),new Oe(1,1,1,1),new Oe(3,0,1,1),new Oe(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Qi.setFromMatrixPosition(e.matrixWorld),i.position.copy(Qi),Fo.copy(i.position),Fo.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Fo),i.updateMatrixWorld(),r.makeTranslation(-Qi.x,-Qi.y,-Qi.z),dl.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dl)}};Bo.prototype.isPointLightShadow=!0;var Qr=class extends Ft{constructor(e,t,i=0,r=1){super(e,t);this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Bo}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}};Qr.prototype.isPointLight=!0;var En=class extends Xn{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super();this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=_e.prototype.toJSON.call(this,e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};En.prototype.isOrthographicCamera=!0;var No=class extends Jr{constructor(){super(new En(-5,5,5,-5,.5,500))}};No.prototype.isDirectionalLightShadow=!0;var $r=class extends Ft{constructor(e,t){super(e,t);this.type="DirectionalLight",this.position.copy(_e.DefaultUp),this.updateMatrix(),this.target=new _e,this.shadow=new No}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};$r.prototype.isDirectionalLight=!0;var Kr=class extends Ft{constructor(e,t){super(e,t);this.type="AmbientLight"}};Kr.prototype.isAmbientLight=!0;var fl=class extends Ft{constructor(e,t,i=10,r=10){super(e,t);this.type="RectAreaLight",this.width=i,this.height=r}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){let t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}};fl.prototype.isRectAreaLight=!0;var zo=class{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new w)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){let i=e.x,r=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*r),t.addScaledVector(o[2],.488603*s),t.addScaledVector(o[3],.488603*i),t.addScaledVector(o[4],1.092548*(i*r)),t.addScaledVector(o[5],1.092548*(r*s)),t.addScaledVector(o[6],.315392*(3*s*s-1)),t.addScaledVector(o[7],1.092548*(i*s)),t.addScaledVector(o[8],.546274*(i*i-r*r)),t}getIrradianceAt(e,t){let i=e.x,r=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*r),t.addScaledVector(o[2],2*.511664*s),t.addScaledVector(o[3],2*.511664*i),t.addScaledVector(o[4],2*.429043*i*r),t.addScaledVector(o[5],2*.429043*r*s),t.addScaledVector(o[6],.743125*s*s-.247708),t.addScaledVector(o[7],2*.429043*i*s),t.addScaledVector(o[8],.429043*(i*i-r*r)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(e.coefficients[i],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let i=0;i<9;i++)this.coefficients[i].lerp(e.coefficients[i],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){let i=this.coefficients;for(let r=0;r<9;r++)i[r].fromArray(e,t+r*3);return this}toArray(e=[],t=0){let i=this.coefficients;for(let r=0;r<9;r++)i[r].toArray(e,t+r*3);return e}static getBasisAt(e,t){let i=e.x,r=e.y,s=e.z;t[0]=.282095,t[1]=.488603*r,t[2]=.488603*s,t[3]=.488603*i,t[4]=1.092548*i*r,t[5]=1.092548*r*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*i*s,t[8]=.546274*(i*i-r*r)}};zo.prototype.isSphericalHarmonics3=!0;var es=class extends Ft{constructor(e=new zo,t=1){super(void 0,t);this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){let t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}};es.prototype.isLightProbe=!0;var Eg={decodeText:function(n){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(n);let e="";for(let t=0,i=n.length;t<i;t++)e+=String.fromCharCode(n[t]);try{return decodeURIComponent(escape(e))}catch(t){return e}},extractUrlBase:function(n){let e=n.lastIndexOf("/");return e===-1?"./":n.substr(0,e+1)}};function Oo(){Le.call(this),this.type="InstancedBufferGeometry",this.instanceCount=Infinity}Oo.prototype=Object.assign(Object.create(Le.prototype),{constructor:Oo,isInstancedBufferGeometry:!0,copy:function(n){return Le.prototype.copy.call(this,n),this.instanceCount=n.instanceCount,this},clone:function(){return new this.constructor().copy(this)},toJSON:function(){let n=Le.prototype.toJSON.call(this);return n.instanceCount=this.instanceCount,n.isInstancedBufferGeometry=!0,n}});function pl(n,e,t,i){typeof t=="number"&&(i=t,t=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),Ae.call(this,n,e,t),this.meshPerAttribute=i||1}pl.prototype=Object.assign(Object.create(Ae.prototype),{constructor:pl,isInstancedBufferAttribute:!0,copy:function(n){return Ae.prototype.copy.call(this,n),this.meshPerAttribute=n.meshPerAttribute,this},toJSON:function(){let n=Ae.prototype.toJSON.call(this);return n.meshPerAttribute=this.meshPerAttribute,n.isInstancedBufferAttribute=!0,n}});function ml(n){typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),lt.call(this,n),this.options={premultiplyAlpha:"none"}}ml.prototype=Object.assign(Object.create(lt.prototype),{constructor:ml,isImageBitmapLoader:!0,setOptions:function(e){return this.options=e,this},load:function(n,e,t,i){n===void 0&&(n=""),this.path!==void 0&&(n=this.path+n),n=this.manager.resolveURL(n);let r=this,s=ai.get(n);if(s!==void 0)return r.manager.itemStart(n),setTimeout(function(){e&&e(s),r.manager.itemEnd(n)},0),s;let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(n,o).then(function(a){return a.blob()}).then(function(a){return createImageBitmap(a,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(a){ai.add(n,a),e&&e(a),r.manager.itemEnd(n)}).catch(function(a){i&&i(a),r.manager.itemError(n),r.manager.itemEnd(n)}),r.manager.itemStart(n)}});var gl=class{constructor(){this.type="ShapePath",this.color=new ae,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Ji,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,r){return this.currentPath.quadraticCurveTo(e,t,i,r),this}bezierCurveTo(e,t,i,r,s,o){return this.currentPath.bezierCurveTo(e,t,i,r,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e,t){function i(m){let S=[];for(let b=0,T=m.length;b<T;b++){let y=m[b],L=new Sn;L.curves=y.curves,S.push(L)}return S}function r(m,S){let b=S.length,T=!1;for(let y=b-1,L=0;L<b;y=L++){let I=S[y],D=S[L],O=D.x-I.x,C=D.y-I.y;if(Math.abs(C)>Number.EPSILON){if(C<0&&(I=S[L],O=-O,D=S[y],C=-C),m.y<I.y||m.y>D.y)continue;if(m.y===I.y){if(m.x===I.x)return!0}else{let U=C*(m.x-I.x)-O*(m.y-I.y);if(U===0)return!0;if(U<0)continue;T=!T}}else{if(m.y!==I.y)continue;if(D.x<=m.x&&m.x<=I.x||I.x<=m.x&&m.x<=D.x)return!0}}return T}let s=hn.isClockWise,o=this.subPaths;if(o.length===0)return[];if(t===!0)return i(o);let a,c,l,u=[];if(o.length===1)return c=o[0],l=new Sn,l.curves=c.curves,u.push(l),u;let h=!s(o[0].getPoints());h=e?!h:h;let d=[],f=[],p=[],v=0,x;f[v]=void 0,p[v]=[];for(let m=0,S=o.length;m<S;m++)c=o[m],x=c.getPoints(),a=s(x),a=e?!a:a,a?(!h&&f[v]&&v++,f[v]={s:new Sn,p:x},f[v].s.curves=c.curves,h&&v++,p[v]=[]):p[v].push({h:c,p:x[0]});if(!f[0])return i(o);if(f.length>1){let m=!1,S=[];for(let b=0,T=f.length;b<T;b++)d[b]=[];for(let b=0,T=f.length;b<T;b++){let y=p[b];for(let L=0;L<y.length;L++){let I=y[L],D=!0;for(let O=0;O<f.length;O++)r(I.p,f[O].p)&&(b!==O&&S.push({froms:b,tos:O,hole:L}),D?(D=!1,d[O].push(I)):m=!0);D&&d[b].push(I)}}S.length>0&&(m||(p=d))}let g;for(let m=0,S=f.length;m<S;m++){l=f[m].s,u.push(l),g=p[m];for(let b=0,T=g.length;b<T;b++)l.holes.push(g[b].h)}return u}},vl=class{constructor(e){this.type="Font",this.data=e}generateShapes(e,t=100){let i=[],r=Tg(e,t,this.data);for(let s=0,o=r.length;s<o;s++)Array.prototype.push.apply(i,r[s].toShapes());return i}};function Tg(n,e,t){let i=Array.from(n),r=e/t.resolution,s=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*r,o=[],a=0,c=0;for(let l=0;l<i.length;l++){let u=i[l];if(u===`
`)a=0,c-=s;else{let h=Ag(u,r,a,c,t);a+=h.offsetX,o.push(h.path)}}return o}function Ag(n,e,t,i,r){let s=r.glyphs[n]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+n+'" does not exists in font family '+r.familyName+".");return}let o=new gl,a,c,l,u,h,d,f,p;if(s.o){let v=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let x=0,g=v.length;x<g;)switch(v[x++]){case"m":a=v[x++]*e+t,c=v[x++]*e+i,o.moveTo(a,c);break;case"l":a=v[x++]*e+t,c=v[x++]*e+i,o.lineTo(a,c);break;case"q":l=v[x++]*e+t,u=v[x++]*e+i,h=v[x++]*e+t,d=v[x++]*e+i,o.quadraticCurveTo(h,d,l,u);break;case"b":l=v[x++]*e+t,u=v[x++]*e+i,h=v[x++]*e+t,d=v[x++]*e+i,f=v[x++]*e+t,p=v[x++]*e+i,o.bezierCurveTo(h,d,f,p,l,u);break}}return{offsetX:s.ha*e,path:o}}vl.prototype.isFont=!0;var ts,Lg={getContext:function(){return ts===void 0&&(ts=new(window.AudioContext||window.webkitAudioContext)),ts},setContext:function(n){ts=n}},xl=class extends lt{constructor(e){super(e)}load(e,t,i,r){let s=this,o=new qi(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{let c=a.slice(0);Lg.getContext().decodeAudioData(c,function(u){t(u)})}catch(c){r?r(c):console.error(c),s.manager.itemError(e)}},i,r)}},yl=class extends es{constructor(e,t,i=1){super(void 0,i);let r=new ae().set(e),s=new ae().set(t),o=new w(r.r,r.g,r.b),a=new w(s.r,s.g,s.b),c=Math.sqrt(Math.PI),l=c*Math.sqrt(.75);this.sh.coefficients[0].copy(o).add(a).multiplyScalar(c),this.sh.coefficients[1].copy(o).sub(a).multiplyScalar(l)}};yl.prototype.isHemisphereLightProbe=!0;var _l=class extends es{constructor(e,t=1){super(void 0,t);let i=new ae().set(e);this.sh.coefficients[0].set(i.r,i.g,i.b).multiplyScalar(2*Math.sqrt(Math.PI))}};_l.prototype.isAmbientLightProbe=!0;var Yg=new de,Zg=new de;var $i=class{constructor(e){this.autoStart=e!==void 0?e:!0,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=wl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=wl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function wl(){return(typeof performance=="undefined"?Date:performance).now()}var bl=class extends _e{constructor(e){super();this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;let t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}};var Ml=class{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0,t=this.getFrequencyData();for(let i=0;i<t.length;i++)e+=t[i];return e/t.length}},Sl=class{constructor(e,t,i){this.binding=e,this.valueSize=i;let r,s,o;switch(t){case"quaternion":r=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":r=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:r=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let i=this.buffer,r=this.valueSize,s=e*r+r,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==r;++a)i[s+a]=i[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(i,s,0,a,r)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,i=this.valueSize,r=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,i=this.buffer,r=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let c=t*this._origIndex;this._mixBufferRegion(i,r,c,1-s,t)}o>0&&this._mixBufferRegionAdditive(i,r,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(i[c]!==i[c+t]){a.setValue(i,r);break}}saveOriginalState(){let e=this.binding,t=this.buffer,i=this.valueSize,r=i*this._origIndex;e.getValue(t,r);for(let s=i,o=r;s!==o;++s)t[s]=t[r+s%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,r,s){if(r>=.5)for(let o=0;o!==s;++o)e[t+o]=e[i+o]}_slerp(e,t,i,r){st.slerpFlat(e,t,e,t,e,i,r)}_slerpAdditive(e,t,i,r,s){let o=this._workIndex*s;st.multiplyQuaternionsFlat(e,o,e,t,e,i),st.slerpFlat(e,t,e,t,e,o,r)}_lerp(e,t,i,r,s){let o=1-r;for(let a=0;a!==s;++a){let c=t+a;e[c]=e[c]*o+e[i+a]*r}}_lerpAdditive(e,t,i,r,s){for(let o=0;o!==s;++o){let a=t+o;e[a]=e[a]+e[i+o]*r}}},Ho="\\[\\]\\.:\\/",Rg=new RegExp("["+Ho+"]","g"),Uo="[^"+Ho+"]",Cg="[^"+Ho.replace("\\.","")+"]",Pg=/((?:WC+[\/:])*)/.source.replace("WC",Uo),Dg=/(WCOD+)?/.source.replace("WCOD",Cg),Ig=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Uo),Fg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Uo),Bg=new RegExp("^"+Pg+Dg+Ig+Fg+"$"),Ng=["material","materials","bones"];function El(n,e,t){let i=t||mt.parseTrackName(e);this._targetGroup=n,this._bindings=n.subscribe_(e,i)}Object.assign(El.prototype,{getValue:function(n,e){this.bind();let t=this._targetGroup.nCachedObjects_,i=this._bindings[t];i!==void 0&&i.getValue(n,e)},setValue:function(n,e){let t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=t.length;i!==r;++i)t[i].setValue(n,e)},bind:function(){let n=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=n.length;e!==t;++e)n[e].bind()},unbind:function(){let n=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=n.length;e!==t;++e)n[e].unbind()}});function mt(n,e,t){this.path=e,this.parsedPath=t||mt.parseTrackName(e),this.node=mt.findNode(n,this.parsedPath.nodeName)||n,this.rootNode=n}Object.assign(mt,{Composite:El,create:function(n,e,t){return n&&n.isAnimationObjectGroup?new mt.Composite(n,e,t):new mt(n,e,t)},sanitizeNodeName:function(n){return n.replace(/\s/g,"_").replace(Rg,"")},parseTrackName:function(n){let e=Bg.exec(n);if(!e)throw new Error("PropertyBinding: Cannot parse trackName: "+n);let t={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=t.nodeName&&t.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=t.nodeName.substring(i+1);Ng.indexOf(r)!==-1&&(t.nodeName=t.nodeName.substring(0,i),t.objectName=r)}if(t.propertyName===null||t.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+n);return t},findNode:function(n,e){if(!e||e===""||e==="."||e===-1||e===n.name||e===n.uuid)return n;if(n.skeleton){let t=n.skeleton.getBoneByName(e);if(t!==void 0)return t}if(n.children){let t=function(r){for(let s=0;s<r.length;s++){let o=r[s];if(o.name===e||o.uuid===e)return o;let a=t(o.children);if(a)return a}return null},i=t(n.children);if(i)return i}return null}});Object.assign(mt.prototype,{_getValue_unavailable:function(){},_setValue_unavailable:function(){},BindingType:{Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Versioning:{None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},GetterByBindingType:[function(e,t){e[t]=this.node[this.propertyName]},function(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]},function(e,t){e[t]=this.resolvedProperty[this.propertyIndex]},function(e,t){this.resolvedProperty.toArray(e,t)}],SetterByBindingTypeAndVersioning:[[function(e,t){this.targetObject[this.propertyName]=e[t]},function(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0},function(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]},function(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0},function(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}],[function(e,t){this.resolvedProperty[this.propertyIndex]=e[t]},function(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0},function(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(e,t){this.resolvedProperty.fromArray(e,t)},function(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0},function(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}]],getValue:function(e,t){this.bind(),this.getValue(e,t)},setValue:function(e,t){this.bind(),this.setValue(e,t)},bind:function(){let n=this.node,e=this.parsedPath,t=e.objectName,i=e.propertyName,r=e.propertyIndex;if(n||(n=mt.findNode(this.rootNode,e.nodeName)||this.rootNode,this.node=n),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!n){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(t){let c=e.objectIndex;switch(t){case"materials":if(!n.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!n.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}n=n.material.materials;break;case"bones":if(!n.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}n=n.skeleton.bones;for(let l=0;l<n.length;l++)if(n[l].name===c){c=l;break}break;default:if(n[t]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}n=n[t]}if(c!==void 0){if(n[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,n);return}n=n[c]}}let s=n[i];if(s===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",n);return}let o=this.Versioning.None;this.targetObject=n,n.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:n.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let a=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!n.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(n.geometry.isBufferGeometry){if(!n.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}n.morphTargetDictionary[r]!==void 0&&(r=n.morphTargetDictionary[r])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}a=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(a=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(a=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][o]},unbind:function(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}});Object.assign(mt.prototype,{_getValue_unbound:mt.prototype.getValue,_setValue_unbound:mt.prototype.setValue});var Tl=class{constructor(){this.uuid=pe.generateUUID(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let e={};this._indicesByUUID=e;for(let i=0,r=arguments.length;i!==r;++i)e[arguments[i].uuid]=i;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){let e=this._objects,t=this._indicesByUUID,i=this._paths,r=this._parsedPaths,s=this._bindings,o=s.length,a,c=e.length,l=this.nCachedObjects_;for(let u=0,h=arguments.length;u!==h;++u){let d=arguments[u],f=d.uuid,p=t[f];if(p===void 0){p=c++,t[f]=p,e.push(d);for(let v=0,x=o;v!==x;++v)s[v].push(new mt(d,i[v],r[v]))}else if(p<l){a=e[p];let v=--l,x=e[v];t[x.uuid]=p,e[p]=x,t[f]=v,e[v]=d;for(let g=0,m=o;g!==m;++g){let S=s[g],b=S[v],T=S[p];S[p]=b,T===void 0&&(T=new mt(d,i[g],r[g])),S[v]=T}}else e[p]!==a&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=l}remove(){let e=this._objects,t=this._indicesByUUID,i=this._bindings,r=i.length,s=this.nCachedObjects_;for(let o=0,a=arguments.length;o!==a;++o){let c=arguments[o],l=c.uuid,u=t[l];if(u!==void 0&&u>=s){let h=s++,d=e[h];t[d.uuid]=u,e[u]=d,t[l]=h,e[h]=c;for(let f=0,p=r;f!==p;++f){let v=i[f],x=v[h],g=v[u];v[u]=x,v[h]=g}}}this.nCachedObjects_=s}uncache(){let e=this._objects,t=this._indicesByUUID,i=this._bindings,r=i.length,s=this.nCachedObjects_,o=e.length;for(let a=0,c=arguments.length;a!==c;++a){let l=arguments[a],u=l.uuid,h=t[u];if(h!==void 0)if(delete t[u],h<s){let d=--s,f=e[d],p=--o,v=e[p];t[f.uuid]=h,e[h]=f,t[v.uuid]=d,e[d]=v,e.pop();for(let x=0,g=r;x!==g;++x){let m=i[x],S=m[d],b=m[p];m[h]=S,m[d]=b,m.pop()}}else{let d=--o,f=e[d];d>0&&(t[f.uuid]=h),e[h]=f,e.pop();for(let p=0,v=r;p!==v;++p){let x=i[p];x[h]=x[d],x.pop()}}}this.nCachedObjects_=s}subscribe_(e,t){let i=this._bindingsIndicesByPath,r=i[e],s=this._bindings;if(r!==void 0)return s[r];let o=this._paths,a=this._parsedPaths,c=this._objects,l=c.length,u=this.nCachedObjects_,h=new Array(l);r=s.length,i[e]=r,o.push(e),a.push(t),s.push(h);for(let d=u,f=c.length;d!==f;++d){let p=c[d];h[d]=new mt(p,e,t)}return h}unsubscribe_(e){let t=this._bindingsIndicesByPath,i=t[e];if(i!==void 0){let r=this._paths,s=this._parsedPaths,o=this._bindings,a=o.length-1,c=o[a],l=e[a];t[l]=i,o[i]=c,o.pop(),s[i]=s[a],s.pop(),r[i]=r[a],r.pop()}}};Tl.prototype.isAnimationObjectGroup=!0;var Al=class{constructor(e,t,i=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=r;let s=t.tracks,o=s.length,a=new Array(o),c={endingStart:Rn,endingEnd:Rn};for(let l=0;l!==o;++l){let u=s[l].createInterpolant(null);a[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=vu,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=Infinity,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){let r=this._clip.duration,s=e._clip.duration,o=s/r,a=r/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){let r=this._mixer,s=r.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=r._lendControlInterpolant(),this._timeScaleInterpolant=a);let c=a.parameterPositions,l=a.sampleValues;return c[0]=s,c[1]=s+i,l[0]=e/o,l[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,r){if(!this.enabled){this._updateWeight(e);return}let s=this._startTime;if(s!==null){let c=(e-s)*i;if(c<0||i===0)return;this._startTime=null,t=i*c}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Sa:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulateAdditive(a);break;case _s:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulate(r,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let i=this._weightInterpolant;if(i!==null){let r=i.evaluate(e)[0];t*=r,e>i.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let i=this._timeScaleInterpolant;i!==null&&(t*=i.evaluate(e)[0],e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t))}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,i=this.loop,r=this.time+e,s=this._loopCount,o=i===xu;if(e===0)return s===-1?r:o&&(s&1)==1?t-r:r;if(i===gu){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),r>=t||r<0){let a=Math.floor(r/t);r-=t*a,s+=Math.abs(a);let c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=r;if(o&&(s&1)==1)return t-r}return r}_setEndings(e,t,i){let r=this._interpolantSettings;i?(r.endingStart=Cn,r.endingEnd=Cn):(e?r.endingStart=this.zeroSlopeAtStart?Cn:Rn:r.endingStart=ur,t?r.endingEnd=this.zeroSlopeAtEnd?Cn:Rn:r.endingEnd=ur)}_scheduleFading(e,t,i){let r=this._mixer,s=r.time,o=this._weightInterpolant;o===null&&(o=r._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,c=o.sampleValues;return a[0]=s,c[0]=t,a[1]=s+e,c[1]=i,this}},Ll=class extends Qt{constructor(e){super();this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let i=e._localRoot||this._root,r=e._clip.tracks,s=r.length,o=e._propertyBindings,a=e._interpolants,c=i.uuid,l=this._bindingsByRootAndName,u=l[c];u===void 0&&(u={},l[c]=u);for(let h=0;h!==s;++h){let d=r[h],f=d.name,p=u[f];if(p!==void 0)o[h]=p;else{if(p=o[h],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,c,f));continue}let v=t&&t._propertyBindings[h].binding.parsedPath;p=new Sl(mt.create(i,f,v),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,c,f),o[h]=p}a[h].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let i=(e._localRoot||this._root).uuid,r=e._clip.uuid,s=this._actionsByClip[r];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,r,i)}let t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){let s=t[i];s.useCount++==0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){let s=t[i];--s.useCount==0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){let r=this._actions,s=this._actionsByClip,o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=r.length,r.push(e),o.actionByRoot[i]=e}_removeInactiveAction(e){let t=this._actions,i=t[t.length-1],r=e._cacheIndex;i._cacheIndex=r,t[r]=i,t.pop(),e._cacheIndex=null;let s=e._clip.uuid,o=this._actionsByClip,a=o[s],c=a.knownActions,l=c[c.length-1],u=e._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),e._byClipCacheIndex=null;let h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],c.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){let s=t[i];--s.referenceCount==0&&this._removeInactiveBinding(s)}}_lendAction(e){let t=this._actions,i=e._cacheIndex,r=this._nActiveActions++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_takeBackAction(e){let t=this._actions,i=e._cacheIndex,r=--this._nActiveActions,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_addInactiveBinding(e,t,i){let r=this._bindingsByRootAndName,s=this._bindings,o=r[t];o===void 0&&(o={},r[t]=o),o[i]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){let t=this._bindings,i=e.binding,r=i.rootNode.uuid,s=i.path,o=this._bindingsByRootAndName,a=o[r],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[r]}_lendBinding(e){let t=this._bindings,i=e._cacheIndex,r=this._nActiveBindings++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_takeBackBinding(e){let t=this._bindings,i=e._cacheIndex,r=--this._nActiveBindings,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,i=e[t];return i===void 0&&(i=new qr(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){let t=this._controlInterpolants,i=e.__cacheIndex,r=--this._nActiveControlInterpolants,s=t[r];e.__cacheIndex=r,t[r]=e,s.__cacheIndex=i,t[i]=s}clipAction(e,t,i){let r=t||this._root,s=r.uuid,o=typeof e=="string"?Mo.findByName(r,e):e,a=o!==null?o.uuid:e,c=this._actionsByClip[a],l=null;if(i===void 0&&(o!==null?i=o.blendMode:i=_s),c!==void 0){let h=c.actionByRoot[s];if(h!==void 0&&h.blendMode===i)return h;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;let u=new Al(this,o,t,i);return this._bindAction(u,l),this._addInactiveAction(u,a,s),u}existingAction(e,t){let i=t||this._root,r=i.uuid,s=typeof e=="string"?Mo.findByName(i,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[r]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;let t=this._actions,i=this._nActiveActions,r=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==i;++l)t[l]._update(r,e,s,o);let a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,i=e.uuid,r=this._actionsByClip,s=r[i];if(s!==void 0){let o=s.knownActions;for(let a=0,c=o.length;a!==c;++a){let l=o[a];this._deactivateAction(l);let u=l._cacheIndex,h=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(l)}delete r[i]}}uncacheRoot(e){let t=e.uuid,i=this._actionsByClip;for(let o in i){let a=i[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let r=this._bindingsByRootAndName,s=r[t];if(s!==void 0)for(let o in s){let a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}};Ll.prototype._controlInterpolantsResultBuffer=new Float32Array(1);var ns=class{constructor(e){typeof e=="string"&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),e=arguments[1]),this.value=e}clone(){return new ns(this.value.clone===void 0?this.value:this.value.clone())}};function Rl(n,e,t){St.call(this,n,e),this.meshPerAttribute=t||1}Rl.prototype=Object.assign(Object.create(St.prototype),{constructor:Rl,isInstancedInterleavedBuffer:!0,copy:function(n){return St.prototype.copy.call(this,n),this.meshPerAttribute=n.meshPerAttribute,this},clone:function(n){let e=St.prototype.clone.call(this,n);return e.meshPerAttribute=this.meshPerAttribute,e},toJSON:function(n){let e=St.prototype.toJSON.call(this,n);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}});function Cl(n,e,t,i,r){this.buffer=n,this.type=e,this.itemSize=t,this.elementSize=i,this.count=r,this.version=0}Object.defineProperty(Cl.prototype,"needsUpdate",{set:function(n){n===!0&&this.version++}});Object.assign(Cl.prototype,{isGLBufferAttribute:!0,setBuffer:function(n){return this.buffer=n,this},setType:function(n,e){return this.type=n,this.elementSize=e,this},setItemSize:function(n){return this.itemSize=n,this},setCount:function(n){return this.count=n,this}});function ci(n,e,t=0,i=Infinity){this.ray=new tn(n,e),this.near=t,this.far=i,this.camera=null,this.layers=new Ps,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}},Object.defineProperties(this.params,{PointCloud:{get:function(){return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."),this.Points}}})}function Pl(n,e){return n.distance-e.distance}function Go(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){let r=n.children;for(let s=0,o=r.length;s<o;s++)Go(r[s],e,t,!0)}}Object.assign(ci.prototype,{set:function(n,e){this.ray.set(n,e)},setFromCamera:function(n,e){e&&e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(n.x,n.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e&&e.isOrthographicCamera?(this.ray.origin.set(n.x,n.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)},intersectObject:function(n,e=!1,t=[]){return Go(n,this,t,e),t.sort(Pl),t},intersectObjects:function(n,e=!1,t=[]){for(let i=0,r=n.length;i<r;i++)Go(n[i],this,t,e);return t.sort(Pl),t}});var ko=class{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){let e=1e-6;return this.phi=Math.max(e,Math.min(Math.PI-e,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(pe.clamp(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Dl=new V,li=class{constructor(e=new V(Infinity,Infinity),t=new V(-Infinity,-Infinity)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Dl.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=Infinity,this.max.x=this.max.y=-Infinity,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return e===void 0&&(console.warn("THREE.Box2: .getCenter() target is now required"),e=new V),this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e===void 0&&(console.warn("THREE.Box2: .getSize() target is now required"),e=new V),this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t===void 0&&(console.warn("THREE.Box2: .getParameter() target is now required"),t=new V),t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t===void 0&&(console.warn("THREE.Box2: .clampPoint() target is now required"),t=new V),t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Dl.copy(e).clamp(this.min,this.max).sub(e).length()}intersect(e){return this.min.max(e.min),this.max.min(e.max),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};li.prototype.isBox2=!0;var Il=new w,is=new w,Fl=class{constructor(e=new w,t=new w){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e===void 0&&(console.warn("THREE.Line3: .getCenter() target is now required"),e=new w),e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e===void 0&&(console.warn("THREE.Line3: .delta() target is now required"),e=new w),e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return t===void 0&&(console.warn("THREE.Line3: .at() target is now required"),t=new w),this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Il.subVectors(e,this.start),is.subVectors(this.end,this.start);let i=is.dot(is),s=is.dot(Il)/i;return t&&(s=pe.clamp(s,0,1)),s}closestPointToPoint(e,t,i){let r=this.closestPointToPointParameter(e,t);return i===void 0&&(console.warn("THREE.Line3: .closestPointToPoint() target is now required"),i=new w),this.delta(i).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function rs(n){_e.call(this),this.material=n,this.render=function(){},this.hasPositions=!1,this.hasNormals=!1,this.hasColors=!1,this.hasUvs=!1,this.positionArray=null,this.normalArray=null,this.colorArray=null,this.uvArray=null,this.count=0}rs.prototype=Object.create(_e.prototype);rs.prototype.constructor=rs;rs.prototype.isImmediateRenderObject=!0;var un=new w,ss=new de,Vo=new de,Bl=class extends Hr{constructor(e){let t=Nl(e),i=new Le,r=[],s=[],o=new ae(0,0,1),a=new ae(0,1,0);for(let l=0;l<t.length;l++){let u=t[l];u.parent&&u.parent.isBone&&(r.push(0,0,0),r.push(0,0,0),s.push(o.r,o.g,o.b),s.push(a.r,a.g,a.b))}i.setAttribute("position",new Ee(r,3)),i.setAttribute("color",new Ee(s,3));let c=new ii({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(i,c);this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){let t=this.bones,i=this.geometry,r=i.getAttribute("position");Vo.copy(this.root.matrixWorld).invert();for(let s=0,o=0;s<t.length;s++){let a=t[s];a.parent&&a.parent.isBone&&(ss.multiplyMatrices(Vo,a.matrixWorld),un.setFromMatrixPosition(ss),r.setXYZ(o,un.x,un.y,un.z),ss.multiplyMatrices(Vo,a.parent.matrixWorld),un.setFromMatrixPosition(ss),r.setXYZ(o+1,un.x,un.y,un.z),o+=2)}i.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}};function Nl(n){let e=[];n&&n.isBone&&e.push(n);for(let t=0;t<n.children.length;t++)e.push.apply(e,Nl(n.children[t]));return e}var zl=class extends Hr{constructor(e=10,t=10,i=4473924,r=8947848){i=new ae(i),r=new ae(r);let s=t/2,o=e/t,a=e/2,c=[],l=[];for(let d=0,f=0,p=-a;d<=t;d++,p+=o){c.push(-a,0,p,a,0,p),c.push(p,0,-a,p,0,a);let v=d===s?i:r;v.toArray(l,f),f+=3,v.toArray(l,f),f+=3,v.toArray(l,f),f+=3,v.toArray(l,f),f+=3}let u=new Le;u.setAttribute("position",new Ee(c,3)),u.setAttribute("color",new Ee(l,3));let h=new ii({vertexColors:!0,toneMapped:!1});super(u,h);this.type="GridHelper"}};var zg=new Float32Array(1),Jg=new Int32Array(zg.buffer);var Og=4,Ol=8,Qg=Math.pow(2,Ol),Hg=[.125,.215,.35,.446,.526,.582],$g=Ol-Og+1+Hg.length;var Kg={[Pn]:0,[xi]:1,[Ta]:2,[Aa]:3,[La]:4,[Ra]:5,[Ea]:6},Ug=new Xt({side:Ke,depthWrite:!1,depthTest:!1}),ev=new De(new an,Ug);var Tn=(1+Math.sqrt(5))/2,hi=1/Tn,tv=[new w(1,1,1),new w(-1,1,1),new w(1,1,-1),new w(-1,1,-1),new w(0,Tn,hi),new w(0,Tn,-hi),new w(hi,0,Tn),new w(-hi,0,Tn),new w(Tn,hi,0),new w(-Tn,hi,0)];xt.create=function(n,e){return console.log("THREE.Curve.create() has been deprecated"),n.prototype=Object.create(xt.prototype),n.prototype.constructor=n,n.prototype.getPoint=e,n};Ji.prototype.fromPoints=function(n){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(n)};zl.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};Bl.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};lt.prototype.extractUrlBase=function(n){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),Eg.extractUrlBase(n)};lt.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};li.prototype.center=function(n){return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),this.getCenter(n)};li.prototype.empty=function(){return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),this.isEmpty()};li.prototype.isIntersectionBox=function(n){return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(n)};li.prototype.size=function(n){return console.warn("THREE.Box2: .size() has been renamed to .getSize()."),this.getSize(n)};_t.prototype.center=function(n){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(n)};_t.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};_t.prototype.isIntersectionBox=function(n){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(n)};_t.prototype.isIntersectionSphere=function(n){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(n)};_t.prototype.size=function(n){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(n)};_n.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Li.prototype.setFromMatrix=function(n){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(n)};Fl.prototype.center=function(n){return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."),this.getCenter(n)};pe.random16=function(){return console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead."),Math.random()};pe.nearestPowerOfTwo=function(n){return console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."),pe.floorPowerOfTwo(n)};pe.nextPowerOfTwo=function(n){return console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."),pe.ceilPowerOfTwo(n)};et.prototype.flattenToArrayOffset=function(n,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(n,e)};et.prototype.multiplyVector3=function(n){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),n.applyMatrix3(this)};et.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};et.prototype.applyToBufferAttribute=function(n){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),n.applyMatrix3(this)};et.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};et.prototype.getInverse=function(n){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(n).invert()};de.prototype.extractPosition=function(n){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(n)};de.prototype.flattenToArrayOffset=function(n,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(n,e)};de.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new w().setFromMatrixColumn(this,3)};de.prototype.setRotationFromQuaternion=function(n){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(n)};de.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};de.prototype.multiplyVector3=function(n){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),n.applyMatrix4(this)};de.prototype.multiplyVector4=function(n){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),n.applyMatrix4(this)};de.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};de.prototype.rotateAxis=function(n){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),n.transformDirection(this)};de.prototype.crossVector=function(n){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),n.applyMatrix4(this)};de.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};de.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};de.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};de.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};de.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};de.prototype.applyToBufferAttribute=function(n){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),n.applyMatrix4(this)};de.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};de.prototype.makeFrustum=function(n,e,t,i,r,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(n,e,i,t,r,s)};de.prototype.getInverse=function(n){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(n).invert()};Lt.prototype.isIntersectionLine=function(n){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(n)};st.prototype.multiplyVector3=function(n){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),n.applyQuaternion(this)};st.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};tn.prototype.isIntersectionBox=function(n){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(n)};tn.prototype.isIntersectionPlane=function(n){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(n)};tn.prototype.isIntersectionSphere=function(n){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(n)};Ye.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};Ye.prototype.barycoordFromPoint=function(n,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(n,e)};Ye.prototype.midpoint=function(n){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(n)};Ye.prototypenormal=function(n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(n)};Ye.prototype.plane=function(n){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(n)};Ye.barycoordFromPoint=function(n,e,t,i,r){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),Ye.getBarycoord(n,e,t,i,r)};Ye.normal=function(n,e,t,i){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),Ye.getNormal(n,e,t,i)};Sn.prototype.extractAllPoints=function(n){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(n)};Sn.prototype.extrude=function(n){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new ki(this,n)};Sn.prototype.makeGeometry=function(n){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new jc(this,n)};V.prototype.fromAttribute=function(n,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(n,e,t)};V.prototype.distanceToManhattan=function(n){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(n)};V.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};w.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};w.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};w.prototype.getPositionFromMatrix=function(n){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(n)};w.prototype.getScaleFromMatrix=function(n){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(n)};w.prototype.getColumnFromMatrix=function(n,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,n)};w.prototype.applyProjection=function(n){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(n)};w.prototype.fromAttribute=function(n,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(n,e,t)};w.prototype.distanceToManhattan=function(n){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(n)};w.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Oe.prototype.fromAttribute=function(n,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(n,e,t)};Oe.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};_e.prototype.getChildByName=function(n){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(n)};_e.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};_e.prototype.translate=function(n,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,n)};_e.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};_e.prototype.applyMatrix=function(n){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(n)};Object.defineProperties(_e.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(n){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=n}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});De.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(De.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),yu},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});co.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};Object.defineProperty(xt.prototype,"__arcLengthDivisions",{get:function(){return console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),this.arcLengthDivisions},set:function(n){console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),this.arcLengthDivisions=n}});at.prototype.setLens=function(n,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(n)};Object.defineProperties(Ft.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(n){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=n}},shadowCameraLeft:{set:function(n){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=n}},shadowCameraRight:{set:function(n){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=n}},shadowCameraTop:{set:function(n){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=n}},shadowCameraBottom:{set:function(n){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=n}},shadowCameraNear:{set:function(n){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=n}},shadowCameraFar:{set:function(n){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=n}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(n){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=n}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(n){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=n}},shadowMapHeight:{set:function(n){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=n}}});Object.defineProperties(Ae.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===_i},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(_i)}}});Ae.prototype.setDynamic=function(n){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(n===!0?_i:yi),this};Ae.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},Ae.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Le.prototype.addIndex=function(n){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(n)};Le.prototype.addAttribute=function(n,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(n,new Ae(arguments[1],arguments[2]))):n==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(n,e)};Le.prototype.addDrawCall=function(n,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(n,e)};Le.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};Le.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};Le.prototype.removeAttribute=function(n){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(n)};Le.prototype.applyMatrix=function(n){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(n)};Object.defineProperties(Le.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});Object.defineProperties(Oo.prototype,{maxInstancedCount:{get:function(){return console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."),this.instanceCount},set:function(n){console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."),this.instanceCount=n}}});Object.defineProperties(ci.prototype,{linePrecision:{get:function(){return console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."),this.params.Line.threshold},set:function(n){console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."),this.params.Line.threshold=n}}});Object.defineProperties(St.prototype,{dynamic:{get:function(){return console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."),this.usage===_i},set:function(n){console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."),this.setUsage(n)}}});St.prototype.setDynamic=function(n){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(n===!0?_i:yi),this};St.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};ki.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};ki.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};ki.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};Di.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};ns.prototype.onUpdate=function(){return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."),this};Object.defineProperties(qe.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new ae}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(n){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===na}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(n){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=n}}});Object.defineProperties(si.prototype,{transparency:{get:function(){return console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."),this.transmission},set:function(n){console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."),this.transmission=n}}});Object.defineProperties(Ge.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(n){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=n}}});He.prototype.clearTarget=function(n,e,t,i){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(n),this.clear(e,t,i)};He.prototype.animate=function(n){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(n)};He.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};He.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};He.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};He.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};He.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};He.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};He.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};He.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};He.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};He.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};He.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};He.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};He.prototype.enableScissorTest=function(n){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(n)};He.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};He.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};He.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};He.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};He.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};He.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};He.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};He.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};He.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};He.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(He.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(n){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=n}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(n){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=n}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(n){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=n===!0?xi:Pn}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}});Object.defineProperties(fc.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(vt.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(n){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=n}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(n){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=n}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(n){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=n}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(n){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=n}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(n){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=n}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(n){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=n}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(n){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=n}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(n){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=n}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(n){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=n}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(n){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=n}}});bl.prototype.load=function(n){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");let e=this;return new xl().load(n,function(i){e.setBuffer(i)}),this};Ml.prototype.getData=function(){return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."),this.getFrequencyData()};Cr.prototype.updateCubeMap=function(n,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(n,e)};Cr.prototype.clear=function(n,e,t,i){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(n,e,t,i)};Fn.crossOrigin=void 0;Fn.loadTexture=function(n,e,t,i){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");let r=new Ot;r.setCrossOrigin(this.crossOrigin);let s=r.load(n,t,void 0,i);return e&&(s.mapping=e),s};Fn.loadTextureCube=function(n,e,t,i){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");let r=new nl;r.setCrossOrigin(this.crossOrigin);let s=r.load(n,t,void 0,i);return e&&(s.mapping=e),s};Fn.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};Fn.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ko}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ko);function Hl(n){let e=200,t=200;n&&n.w&&(e=n.w),n&&n.h&&(t=n.h);let i=parseInt(e/10),r=new Pt,s=new Jn(e,t,i,i),o=[],a=s.attributes.position.array,c=i+1,l=i+1,u=[];for(let S=0;S<l;S++){u[S]=[];for(let b=0;b<c;b++)u[S][b]=Math.random()*5}let h=[];for(let S=0;S<l;S++){h[S]=[];for(let b=0;b<c;b++){let T=u[S][b],y=1;S>0&&(T+=u[S-1][b],y++),S<l-1&&(T+=u[S+1][b],y++),b>0&&(T+=u[S][b-1],y++),b<c-1&&(T+=u[S][b+1],y++),h[S][b]=T/y}}let d=20,f=.2*Math.min(e,t),p=.5*Math.min(e,t),v=Math.random()*(e-2*p)-e/2+p,x=Math.random()*(t-2*p)-t/2+p;for(let S=0;S<l;S++)for(let b=0;b<c;b++){let T=(S*c+b)*3,y=a[T],L=a[T+1];if(y===-e/2||y===e/2||L===-t/2||L===t/2)a[T+2]=-1;else{let D=h[S][b]*2,O=y-v,C=L-x,U=Math.sqrt(O*O+C*C);if(U<f){let P=1-U/f;P=Math.pow(P,3),a[T+2]=D+P*d}else a[T+2]=D}o.push({i:T,x:y,y:L,z:a[T+2]})}s.attributes.position.needsUpdate=!0,s.computeVertexNormals();let g=new pt({color:12320648,wireframe:!1,side:Zt,flatShading:!1}),m=new De(s,g);return m.position.set(0,-6,0),m.rotation.x=-Math.PI/2,r.add(m),m.receiveShadow=!0,window.terrainCreated&&window.terrainCreated(m,o),m}function Ki(){let n=[{src:"img/rune/1.png"},{src:"img/rune/10.png"},{src:"img/rune/11.png"},{src:"img/rune/111.png"},{src:"img/rune/16.png"},{src:"img/rune/17.png"},{src:"img/rune/18.png"},{src:"img/rune/2.png"},{src:"img/rune/20.png"},{src:"img/rune/21.png"},{src:"img/rune/22.png"},{src:"img/rune/24.png"},{src:"img/rune/25.png"},{src:"img/rune/26.png"},{src:"img/rune/27.png"},{src:"img/rune/28.png"},{src:"img/rune/3.png"},{src:"img/rune/30.png"},{src:"img/rune/31.png"},{src:"img/rune/32.png"},{src:"img/rune/33.png"},{src:"img/rune/3434f.png"},{src:"img/rune/4.png"},{src:"img/rune/5.png"},{src:"img/rune/6.png"},{src:"img/rune/8.png"},{src:"img/rune/9.png"},{src:"img/rune/jhg.png"},{src:"img/rune/n1.png"},{src:"img/rune/n2.png"},{src:"img/rune/n3.png"},{src:"img/rune/n4.png"},{src:"img/rune/n5.png"},{src:"img/rune/n6.png"},{src:"img/rune/n7.png"},{src:"img/rune/n8.png"},{src:"img/rune/n9.png"},{src:"img/rune/n91.png"},{src:"img/rune/n92.jpeg"},{src:"img/rune/n93.png"},{src:"img/rune/n94.jpeg"},{src:"img/rune/n95.png"},{src:"img/rune/n96.png"},{src:"img/rune/n97.png"},{src:"img/rune/n98.png"},{src:"img/rune/n99.png"},{src:"img/rune/n991.png"},{src:"img/rune/nn0.jpeg"},{src:"img/rune/nn1.jpeg"},{src:"img/rune/nn3.png"},{src:"img/rune/nn4.png"},{src:"img/rune/nn5.png"},{src:"img/rune/nn6.png"},{src:"img/rune/nn7.png"},{src:"img/rune/nn8.png"},{src:"img/rune/nn9.png"},{src:"img/rune/nn91.png"},{src:"img/rune/nn92.png"},{src:"img/rune/nn93.png"}],e=n.map(i=>i.src);return e[parseInt(Math.random()*e.length)]}function er(n,e){n||(n=Ki()),console.log(n);let i=new Ot().load(n);return new pt({color:16777215,map:i,opacity:1,transparent:!1,side:Zt})}function Ul(n,e=200,t=200,i){let r=Math.random()<.9,s=new xo(.3,.8,10),o=new po(.6,2,12),a=new jt(.8,50),c=new an(1,1,1),l=Math.random()<.4?er():Gl(),u=new De(o,l);n.add(u);let h=Math.random()*15+2,d=Math.random()*1-.5,f=Math.random()*1-.5;Math.abs(d)<=.01&&(d=.01),d<0&&(h=-h),u.position.set(Math.random()*e-e/2,Math.random()*3+100,r?h:Math.random()*t-t/2);let p=u,v=.2,x=.01,g=.02,m=new ci;m.set(p.position,new w(0,-1,0));let S=new De(new jt(.43,40),Math.random()<.6?er():Math.random()<.5?Gl():new pt({color:1118481,opacity:1,transparent:!1}));n.add(S),S.castShadow=!0,u.castShadow=!0;let b={x:0,y:0,z:0};T();function T(){p.position.x+=d,r||(p.position.z+=f),p.position.z>t&&(p.position.z-=t*2),p.position.x>e&&(p.position.x-=e*2),p.position.z<-t&&(p.position.z+=t*2),p.position.x<-e&&(p.position.x+=e*2),Math.random()<g&&(d+=Math.random()*x),Math.random()<g&&(f+=Math.random()*x),Math.random()<g&&(d-=Math.random()*x),Math.random()<g&&(f-=Math.random()*x),d>v&&(d=v),d<-v&&(d=-v),f>v&&(f=v),f<-v&&(f=-v),m.set(p.position,new w(0,-1,0));let y=m.intersectObject(i);if(y.length>0){let L=y[0].point;p.position.y=L.y+.5;let I={x:Math.atan2(y[0].face.normal.z,y[0].face.normal.y),y:Math.atan2(y[0].face.normal.x,y[0].face.normal.z),z:Math.atan2(y[0].face.normal.y,y[0].face.normal.x)};b.x+=(I.x-b.x)*.05,b.y+=(I.y-b.y)*.05,b.z+=(I.z-b.z)*.05,p.rotation.x=b.x,p.rotation.y=b.y,p.rotation.z=b.z}S.position.copy(p.position),S.position.y=p.position.y+.6,S.rotation.copy(p.rotation),S.rotation.x=-p.rotation.x,S.rotation.y=-p.rotation.y,requestAnimationFrame(T)}return p}function Gl(){return new pt({color:16777215,opacity:1,transparent:!1})}function it(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}Object.assign(it.prototype,{setSize:function(){},render:function(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}});it.FullScreenQuad=function(){var n=new En(-1,1,1,-1,0,1),e=new Le;e.setAttribute("position",new Ee([-1,3,0,-1,-1,0,3,-1,0],3)),e.setAttribute("uv",new Ee([0,2,0,0,2,0],2));var t=function(i){this._mesh=new De(e,i)};return Object.defineProperty(t.prototype,"material",{get:function(){return this._mesh.material},set:function(i){this._mesh.material=i}}),Object.assign(t.prototype,{dispose:function(){this._mesh.geometry.dispose()},render:function(i){i.render(this._mesh,n)}}),t}();var os=function(n,e,t,i,r){it.call(this),this.scene=n,this.camera=e,this.overrideMaterial=t,this.clearColor=i,this.clearAlpha=r!==void 0?r:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ae};os.prototype=Object.assign(Object.create(it.prototype),{constructor:os,render:function(n,e,t){var i=n.autoClear;n.autoClear=!1;var r,s;this.overrideMaterial!==void 0&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(n.getClearColor(this._oldClearColor),r=n.getClearAlpha(),n.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&n.clearDepth(),n.setRenderTarget(this.renderToScreen?null:t),this.clear&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),n.render(this.scene,this.camera),this.clearColor&&n.setClearColor(this._oldClearColor,r),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=s),n.autoClear=i}});var ui={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:["varying vec2 vUv;","void main() {","	vUv = uv;","	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join(`
`),fragmentShader:["uniform float opacity;","uniform sampler2D tDiffuse;","varying vec2 vUv;","void main() {","	vec4 texel = texture2D( tDiffuse, vUv );","	gl_FragColor = opacity * texel;","}"].join(`
`)};var Wo={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ae(0)},defaultOpacity:{value:0}},vertexShader:["varying vec2 vUv;","void main() {","	vUv = uv;","	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join(`
`),fragmentShader:["uniform sampler2D tDiffuse;","uniform vec3 defaultColor;","uniform float defaultOpacity;","uniform float luminosityThreshold;","uniform float smoothWidth;","varying vec2 vUv;","void main() {","	vec4 texel = texture2D( tDiffuse, vUv );","	vec3 luma = vec3( 0.299, 0.587, 0.114 );","	float v = dot( texel.xyz, luma );","	vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );","	float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );","	gl_FragColor = mix( outputColor, texel, alpha );","}"].join(`
`)};var dn=function(n,e,t,i){it.call(this),this.strength=e!==void 0?e:1,this.radius=t,this.threshold=i,this.resolution=n!==void 0?new V(n.x,n.y):new V(256,256),this.clearColor=new ae(0,0,0);var r={minFilter:We,magFilter:We,format:dt};this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;var s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new vt(s,o,r),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(var a=0;a<this.nMips;a++){var c=new vt(s,o,r);c.texture.name="UnrealBloomPass.h"+a,c.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(c);var l=new vt(s,o,r);l.texture.name="UnrealBloomPass.v"+a,l.texture.generateMipmaps=!1,this.renderTargetsVertical.push(l),s=Math.round(s/2),o=Math.round(o/2)}Wo===void 0&&console.error("THREE.UnrealBloomPass relies on LuminosityHighPassShader");var u=Wo;this.highPassUniforms=qn.clone(u.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ge({uniforms:this.highPassUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,defines:{}}),this.separableBlurMaterials=[];for(var h=[3,5,7,9,11],s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2),a=0;a<this.nMips;a++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(h[a])),this.separableBlurMaterials[a].uniforms.texSize.value=new V(s,o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;var d=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=d,this.bloomTintColors=[new w(1,1,1),new w(1,1,1),new w(1,1,1),new w(1,1,1),new w(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,ui===void 0&&console.error("THREE.UnrealBloomPass relies on CopyShader");var f=ui;this.copyUniforms=qn.clone(f.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new Ge({uniforms:this.copyUniforms,vertexShader:f.vertexShader,fragmentShader:f.fragmentShader,blending:ir,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ae,this.oldClearAlpha=1,this.basic=new Xt,this.fsQuad=new it.FullScreenQuad(null)};dn.prototype=Object.assign(Object.create(it.prototype),{constructor:dn,dispose:function(){for(var n=0;n<this.renderTargetsHorizontal.length;n++)this.renderTargetsHorizontal[n].dispose();for(var n=0;n<this.renderTargetsVertical.length;n++)this.renderTargetsVertical[n].dispose();this.renderTargetBright.dispose()},setSize:function(n,e){var t=Math.round(n/2),i=Math.round(e/2);this.renderTargetBright.setSize(t,i);for(var r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(t,i),this.renderTargetsVertical[r].setSize(t,i),this.separableBlurMaterials[r].uniforms.texSize.value=new V(t,i),t=Math.round(t/2),i=Math.round(i/2)},render:function(n,e,t,i,r){n.getClearColor(this._oldClearColor),this.oldClearAlpha=n.getClearAlpha();var s=n.autoClear;n.autoClear=!1,n.setClearColor(this.clearColor,0),r&&n.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=t.texture,n.setRenderTarget(null),n.clear(),this.fsQuad.render(n)),this.highPassUniforms.tDiffuse.value=t.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,n.setRenderTarget(this.renderTargetBright),n.clear(),this.fsQuad.render(n);for(var o=this.renderTargetBright,a=0;a<this.nMips;a++)this.fsQuad.material=this.separableBlurMaterials[a],this.separableBlurMaterials[a].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[a].uniforms.direction.value=dn.BlurDirectionX,n.setRenderTarget(this.renderTargetsHorizontal[a]),n.clear(),this.fsQuad.render(n),this.separableBlurMaterials[a].uniforms.colorTexture.value=this.renderTargetsHorizontal[a].texture,this.separableBlurMaterials[a].uniforms.direction.value=dn.BlurDirectionY,n.setRenderTarget(this.renderTargetsVertical[a]),n.clear(),this.fsQuad.render(n),o=this.renderTargetsVertical[a];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,n.setRenderTarget(this.renderTargetsHorizontal[0]),n.clear(),this.fsQuad.render(n),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&n.state.buffers.stencil.setTest(!0),this.renderToScreen?(n.setRenderTarget(null),this.fsQuad.render(n)):(n.setRenderTarget(t),this.fsQuad.render(n)),n.setClearColor(this._oldClearColor,this.oldClearAlpha),n.autoClear=s},getSeperableBlurMaterial:function(n){return new Ge({defines:{KERNEL_RADIUS:n,SIGMA:n},uniforms:{colorTexture:{value:null},texSize:{value:new V(.5,.5)},direction:{value:new V(.5,.5)}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;				uniform vec2 direction;								float gaussianPdf(in float x, in float sigma) {					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;				}				void main() {
					vec2 invSize = 1.0 / texSize;					float fSigma = float(SIGMA);					float weightSum = gaussianPdf(0.0, fSigma);					vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {						float x = float(i);						float w = gaussianPdf(x, fSigma);						vec2 uvOffset = direction * invSize * x;						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;						diffuseSum += (sample1 + sample2) * w;						weightSum += 2.0 * w;					}					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})},getCompositeMaterial:function(n){return new Ge({defines:{NUM_MIPS:n},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},dirtTexture:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:"varying vec2 vUv;				uniform sampler2D blurTexture1;				uniform sampler2D blurTexture2;				uniform sampler2D blurTexture3;				uniform sampler2D blurTexture4;				uniform sampler2D blurTexture5;				uniform sampler2D dirtTexture;				uniform float bloomStrength;				uniform float bloomRadius;				uniform float bloomFactors[NUM_MIPS];				uniform vec3 bloomTintColors[NUM_MIPS];								float lerpBloomFactor(const in float factor) { 					float mirrorFactor = 1.2 - factor;					return mix(factor, mirrorFactor, bloomRadius);				}								void main() {					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) + 													 lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) + 													 lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) + 													 lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) + 													 lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );				}"})}});dn.BlurDirectionX=new V(1,0);dn.BlurDirectionY=new V(0,1);var Mt=function(n,e){it.call(this),this.textureID=e!==void 0?e:"tDiffuse",n instanceof Ge?(this.uniforms=n.uniforms,this.material=n):n&&(this.uniforms=qn.clone(n.uniforms),this.material=new Ge({defines:Object.assign({},n.defines),uniforms:this.uniforms,vertexShader:n.vertexShader,fragmentShader:n.fragmentShader})),this.fsQuad=new it.FullScreenQuad(this.material)};Mt.prototype=Object.assign(Object.create(it.prototype),{constructor:Mt,render:function(n,e,t){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=t.texture),this.fsQuad.material=this.material,this.renderToScreen?(n.setRenderTarget(null),this.fsQuad.render(n)):(n.setRenderTarget(e),this.clear&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),this.fsQuad.render(n))}});var tr=function(n,e){it.call(this),this.scene=n,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1};tr.prototype=Object.assign(Object.create(it.prototype),{constructor:tr,render:function(n,e,t){var i=n.getContext(),r=n.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);var s,o;this.inverse?(s=0,o=1):(s=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,s,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),n.setRenderTarget(t),this.clear&&n.clear(),n.render(this.scene,this.camera),n.setRenderTarget(e),this.clear&&n.clear(),n.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}});var as=function(){it.call(this),this.needsSwap=!1};as.prototype=Object.create(it.prototype);Object.assign(as.prototype,{render:function(n){n.state.buffers.stencil.setLocked(!1),n.state.buffers.stencil.setTest(!1)}});var qo=function(n,e){if(this.renderer=n,e===void 0){var t={minFilter:We,magFilter:We,format:dt},i=n.getSize(new V);this._pixelRatio=n.getPixelRatio(),this._width=i.width,this._height=i.height,e=new vt(this._width*this._pixelRatio,this._height*this._pixelRatio,t),e.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],ui===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),Mt===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new Mt(ui),this.clock=new $i};Object.assign(qo.prototype,{swapBuffers:function(){var n=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=n},addPass:function(n){this.passes.push(n),n.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)},insertPass:function(n,e){this.passes.splice(e,0,n),n.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)},removePass:function(n){let e=this.passes.indexOf(n);e!==-1&&this.passes.splice(e,1)},isLastEnabledPass:function(n){for(var e=n+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0},render:function(n){n===void 0&&(n=this.clock.getDelta());var e=this.renderer.getRenderTarget(),t=!1,i,r,s=this.passes.length;for(r=0;r<s;r++)if(i=this.passes[r],i.enabled!==!1){if(i.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),i.render(this.renderer,this.writeBuffer,this.readBuffer,n,t),i.needsSwap){if(t){var o=this.renderer.getContext(),a=this.renderer.state.buffers.stencil;a.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,n),a.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}tr!==void 0&&(i instanceof tr?t=!0:i instanceof as&&(t=!1))}this.renderer.setRenderTarget(e)},reset:function(n){if(n===void 0){var e=this.renderer.getSize(new V);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,n=this.renderTarget1.clone(),n.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=n,this.renderTarget2=n.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2},setSize:function(n,e){this._width=n,this._height=e;var t=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(t,i),this.renderTarget2.setSize(t,i);for(var r=0;r<this.passes.length;r++)this.passes[r].setSize(t,i)},setPixelRatio:function(n){this._pixelRatio=n,this.setSize(this._width,this._height)}});var kl=function(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1};Object.assign(kl.prototype,{setSize:function(){},render:function(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}});kl.FullScreenQuad=function(){var n=new En(-1,1,1,-1,0,1),e=new Le;e.setAttribute("position",new Ee([-1,3,0,-1,-1,0,3,-1,0],3)),e.setAttribute("uv",new Ee([0,2,0,0,2,0],2));var t=function(i){this._mesh=new De(e,i)};return Object.defineProperty(t.prototype,"material",{get:function(){return this._mesh.material},set:function(i){this._mesh.material=i}}),Object.assign(t.prototype,{dispose:function(){this._mesh.geometry.dispose()},render:function(i){i.render(this._mesh,n)}}),t}();function Vl(n=1,e){let t=new an(n,n,.1);return new De(t,e)}var Wl=function(n,e){e===void 0&&(console.warn('THREE.FirstPersonControls: The second parameter "domElement" is now mandatory.'),e=document),this.object=n,this.domElement=e,this.enabled=!0,this.movementSpeed=1,this.lookSpeed=.005,this.lookVertical=!0,this.autoForward=!1,this.activeLook=!0,this.heightSpeed=!1,this.heightCoef=1,this.heightMin=0,this.heightMax=1,this.constrainVertical=!1,this.verticalMin=0,this.verticalMax=Math.PI,this.mouseDragOn=!1,this.autoSpeedFactor=0,this.mouseX=0,this.mouseY=0,this.moveForward=!1,this.moveBackward=!1,this.moveLeft=!1,this.moveRight=!1,this.viewHalfX=0,this.viewHalfY=0;var t=0,i=0,r=new w,s=new ko,o=new w;this.domElement!==document&&this.domElement.setAttribute("tabindex",-1),this.handleResize=function(){this.domElement===document?(this.viewHalfX=window.innerWidth/2,this.viewHalfY=window.innerHeight/2):(this.viewHalfX=this.domElement.offsetWidth/2,this.viewHalfY=this.domElement.offsetHeight/2)},this.onMouseDown=function(v){if(this.domElement!==document&&this.domElement.focus(),v.preventDefault(),this.activeLook)switch(v.button){case 0:this.moveForward=!0;break;case 2:this.moveBackward=!0;break}this.mouseDragOn=!0},this.onMouseUp=function(v){if(v.preventDefault(),this.activeLook)switch(v.button){case 0:this.moveForward=!1;break;case 2:this.moveBackward=!1;break}this.mouseDragOn=!1},this.onMouseMove=function(v){this.domElement===document?(this.mouseX=v.pageX-this.viewHalfX,this.mouseY=v.pageY-this.viewHalfY):(this.mouseX=v.pageX-this.domElement.offsetLeft-this.viewHalfX,this.mouseY=v.pageY-this.domElement.offsetTop-this.viewHalfY)},this.onKeyDown=function(v){switch(v.code){case"ArrowUp":case"KeyW":this.moveForward=!0;break;case"ArrowLeft":case"KeyA":this.moveLeft=!0;break;case"ArrowDown":case"KeyS":this.moveBackward=!0;break;case"ArrowRight":case"KeyD":this.moveRight=!0;break;case"KeyR":this.moveUp=!0;break;case"KeyF":this.moveDown=!0;break}},this.onKeyUp=function(v){switch(v.code){case"ArrowUp":case"KeyW":this.moveForward=!1;break;case"ArrowLeft":case"KeyA":this.moveLeft=!1;break;case"ArrowDown":case"KeyS":this.moveBackward=!1;break;case"ArrowRight":case"KeyD":this.moveRight=!1;break;case"KeyR":this.moveUp=!1;break;case"KeyF":this.moveDown=!1;break}},this.lookAt=function(v,x,g){return v.isVector3?o.copy(v):o.set(v,x,g),this.object.lookAt(o),p(this),this},this.update=function(){var v=new w;return function(g){if(this.enabled!==!1){if(this.heightSpeed){var m=pe.clamp(this.object.position.y,this.heightMin,this.heightMax),S=m-this.heightMin;this.autoSpeedFactor=g*(S*this.heightCoef)}else this.autoSpeedFactor=0;var b=g*this.movementSpeed;(this.moveForward||this.autoForward&&!this.moveBackward)&&this.object.translateZ(-(b+this.autoSpeedFactor)),this.moveBackward&&this.object.translateZ(b),this.moveLeft&&this.object.translateX(-b),this.moveRight&&this.object.translateX(b),this.moveUp&&this.object.translateY(b),this.moveDown&&this.object.translateY(-b);var T=g*this.lookSpeed;this.activeLook||(T=0);var y=1;this.constrainVertical&&(y=Math.PI/(this.verticalMax-this.verticalMin)),i-=this.mouseX*T,this.lookVertical&&(t-=this.mouseY*T*y),t=Math.max(-85,Math.min(85,t));var L=pe.degToRad(90-t),I=pe.degToRad(i);this.constrainVertical&&(L=pe.mapLinear(L,0,Math.PI,this.verticalMin,this.verticalMax));var D=this.object.position;v.setFromSphericalCoords(1,L,I).add(D),this.object.lookAt(v)}}}();function a(v){v.preventDefault()}this.dispose=function(){this.domElement.removeEventListener("contextmenu",a),this.domElement.removeEventListener("mousedown",l),this.domElement.removeEventListener("mousemove",c),this.domElement.removeEventListener("mouseup",u),window.removeEventListener("keydown",h),window.removeEventListener("keyup",d)};var c=f(this,this.onMouseMove),l=f(this,this.onMouseDown),u=f(this,this.onMouseUp),h=f(this,this.onKeyDown),d=f(this,this.onKeyUp);this.domElement.addEventListener("contextmenu",a),this.domElement.addEventListener("mousemove",c),this.domElement.addEventListener("mousedown",l),this.domElement.addEventListener("mouseup",u),window.addEventListener("keydown",h),window.addEventListener("keyup",d);function f(v,x){return function(){x.apply(v,arguments)}}function p(v){var x=v.object.quaternion;r.set(0,0,-1).applyQuaternion(x),s.setFromVector3(r),t=90-pe.radToDeg(s.phi),i=pe.radToDeg(s.theta)}this.handleResize(),p(this)};var ql={uniforms:{tDiffuse:{value:null},time:{value:0},distortionScale:{value:.05},waveSpeed:{value:.5},waveFrequency:{value:15}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform sampler2D tDiffuse;
      uniform float time;
      uniform float distortionScale;
      uniform float waveSpeed;
      uniform float waveFrequency;
      
      varying vec2 vUv;
      
      // 2D Rotation function
      mat2 rotate2d(float angle) {
        return mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
      }
      
      // Noise function for organic distortion
      float noise(vec2 p) {
        return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
      }
      
      void main() {
        // Base displacement
        vec2 uv = vUv;
        
        // Create multi-directional waves
        vec2 wave1 = vec2(
          sin(uv.y * waveFrequency + time * waveSpeed),
          cos(uv.x * waveFrequency * 0.8 + time * waveSpeed * 1.2)
        );
        
        vec2 wave2 = vec2(
          cos(uv.y * waveFrequency * 0.7 + time * waveSpeed * 0.7),
          sin(uv.x * waveFrequency * 1.3 + time * waveSpeed * 1.5)
        );
        
        // Combine waves with noise
        float noiseFactor = noise(uv + time * 0.1) * 0.3;
        vec2 distortion = (wave1 + wave2 * 0.5) * distortionScale * noiseFactor;
        
        // Apply chromatic aberration (RGB shift)
        vec2 offset = distortion * 1.5;
        float r = texture2D(tDiffuse, uv + offset * 0.5).r;
        float g = texture2D(tDiffuse, uv + offset * 0.3).g;
        float b = texture2D(tDiffuse, uv + offset * 0.1).b;
        
        // Final color with blue tint
        vec3 color = vec3(r, g, b);
        color = mix(color, vec3(0.3, 0.5, 0.8), 0.1); // Blue tint
        
        gl_FragColor = vec4(color, 1.0);
      }
    `};document.addEventListener("DOMContentLoaded",Gg);function Gg(){let n=new ci,e=!0,t=new $i(!0),i={w:560,h:560},r=new Di,s=new at(75,window.innerWidth/window.innerHeight,.1,1e4),o=new He({antialias:!0,preserveDrawingBuffer:!0});o.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(o.domElement),o.setClearColor(0,1),o.shadowMap.enabled=!0,o.toneMapping=us,o.toneMappingExposure=.6,o.outputEncoding=xi,o.physicallyCorrectLights=!0,r.background=new ae(16768324),r.fog=new $n(16768324,.02);let a=new $r(16777215,1),c=new Kr(16777215,2);a.position.set(5,2,10),r.add(a),r.add(c);let l=new Wl(s,o.domElement);l.enableDamping=!0,l.lookSpeed=.003,l.movementSpeed=.3,l.noFly=!0,l.lookVertical=!0,l.constrainVertical=!0,l.verticalMin=1,l.verticalMax=2,l.verticalMin=1,l.verticalMax=1.8;let u=new Ge({vertexShader,fragmentShader:`
        uniform sampler2D tDiffuse;
        varying vec2 vUv;
        uniform float contrast;
      
        void main() {
          vec4 color = texture2D(tDiffuse, vUv);
          color.rgb = contrast * (color.rgb - 0.5) + 0.5; // Apply contrast
          gl_FragColor = color;
        }
      `,uniforms:{tDiffuse:{value:null},contrast:{value:4}}}),h=new Ge({vertexShader,fragmentShader:`
        uniform sampler2D tDiffuse;
        varying vec2 vUv;
        uniform float saturationAmount; // Amount of saturation to apply
      
        void main() {
          vec4 color = texture2D(tDiffuse, vUv);
          
          // Calculate grayscale value of the color
          float gray = dot(color.rgb, vec3(0.2126, 0.7152, 0.0722));
          
          // Interpolate between grayscale and original color based on saturationAmount
          color.rgb = mix(vec3(gray), color.rgb, saturationAmount);
          
          gl_FragColor = color;
        }
      `,uniforms:{tDiffuse:{value:null},saturationAmount:{value:2}}}),d=new Ge({vertexShader,fragmentShader:waveFragmentShader,uniforms:{tDiffuse:{value:null},time:{value:1},amplitude:{value:.03},frequency:{value:3}}}),f=new Ge({vertexShader,fragmentShader:waveFragmentShader,uniforms:{tDiffuse:{value:null},time:{value:1},amplitude:{value:.1},frequency:{value:.5}}}),p=new Ge({vertexShader,fragmentShader:grainFragmentShader,uniforms:{tDiffuse:{value:null},grainAmount:{value:.1}}}),v=new Ge({vertexShader,fragmentShader:futuristicFragmentShader,uniforms:{tDiffuse:{value:null},time:{value:0},distortion:{value:0},scanlineIntensity:{value:.9},glowIntensity:{value:.7}}}),x=new Mt(p,"tDiffuse"),g=new Mt(v,"tDiffuse"),m=new Mt(d,"tDiffuse"),S=new Mt(f,"tDiffuse"),b=new Mt(h,"tDiffuse"),T=new Mt(u,"tDiffuse"),y=new os(r,s),L=new dn(new V(window.innerWidth,window.innerHeight),1.5,.4,.85);L.threshold=.5,L.strength=.75,L.radius=.4;let I=new Mt(ql);I.renderToScreen=!0,I.uniforms.distortionScale.value=.3,I.uniforms.waveFrequency.value=20,I.uniforms.waveSpeed.value=.8;let D=new qo(o);D.addPass(y),D.addPass(x),D.addPass(b);let O=Hl(i);O.receiveShadow=!0,r.add(O);let C=window.innerWidth<768?18:60;for(var U=0;U<C;U++)Ul(r,i.w/2,i.h/2,O);B(r,i),s.position.set(0,3e3,0),Vg(r);function P(j){requestAnimationFrame(P);let oe=t.getDelta();e&&(I.uniforms.time.value=j*1e-5,R(),l.update(1),D.render())}P(0);function R(){n.set(s.position,new w(0,-1,0));let j=n.intersectObject(O);if(j.length>0){let oe=j[0].point;s.position.y=oe.y+1.6}}window.addEventListener("resize",()=>{s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight)}),window.addEventListener("blur",()=>{console.log("  lost focus"),e=!1}),window.addEventListener("focus",()=>{console.log(" gained focus"),e=!0});function B(j,oe){let ue=50,H=new Pt,we=new Jn(oe.w*10,oe.h*10,ue,ue),Me=new pt({color:6724095,opacity:1,transparent:!1}),le=new De(we,Me);le.position.x=0*1,le.position.y=-6.2*1,le.position.z=0*1,le.rotation.x=-Math.PI/2,j.add(le)}function F(j,oe){let ue=new jt(.3,30,30),H=new pt({color:11206587,opacity:1,transparent:!1}),we=er();for(var Me=0;Me<oe.w*.3;Me++){let le=new De(ue,we);le.position.set(Math.random()*oe.w-oe.w*.5,Math.random()*4,Math.random()*oe.h-oe.h*.5),j.add(le),kg(le)}}function X(j){let oe=new Pt,ue=new w,H=720;for(let we=0;we<H;we++){let Me=Math.acos(-1+2*we/H),le=Math.sqrt(H*Math.PI)*Me,fe=Vl(2,se()),Ie=15;fe.position.setFromSphericalCoords(Ie,Me,le),ue.copy(fe.position).multiplyScalar(2.5),fe.lookAt(ue),oe.add(fe)}return j.add(oe),oe.position.y+=22,oe}function ee(j){new Ot().load("img/rune/111.png",ue=>{let H=new jt(400,60,40);H.scale(-1,1,1);let we=new Xt({map:ue}),Me=new De(H,we);j.add(Me)})}function Z(j,oe){j||(j=Ki());let H=new Ot().load(j,we=>{oe(we)})}function se(j,oe){j||(j=Ki());let H=new Ot().load(j);return new pt({color:16777215,map:H,opacity:1,transparent:!1})}}function kg(n){}function Vg(n){let e=16737792,t=new jt(.1,30,30),i=new pt({color:e,opacity:1,transparent:!1}),r=new De(t,i);r.position.set(0,30,0);let s=new Qr(e,7,100);s.position.set(0,23,0),s.castShadow=!0,s.shadow.mapSize.width=1024,s.shadow.mapSize.height=1024,n.add(r),n.add(s)}})();
/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
