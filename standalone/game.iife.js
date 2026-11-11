"use strict";(()=>{var _u=Object.defineProperty;var Su=(n,e,t)=>e in n?_u(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var D=(n,e,t)=>Su(n,typeof e!="symbol"?e+"":e,t);var Cd=0,Vl=1,Rd=2;var mr=1,Ya=2,_s=3,_n=0,Vt=1,Dt=2,Fn=0,Ss=1,Wl=2,Xl=3,ql=4,Pd=5;var kn=100,Id=101,Ld=102,Dd=103,Nd=104,Fd=200,kd=201,Bd=202,Ud=203,Yl=204,Zl=205,Od=206,zd=207,Hd=208,Gd=209,Vd=210,Wd=211,Xd=212,qd=213,Yd=214,da=0,ha=1,ua=2,ls=3,pa=4,fa=5,ma=6,ga=7,$l=0,Zd=1,$d=2,Oi=0,Jl=1,Kl=2,Ql=3,gr=4,jl=5,ec=6,tc=7;var ic=300,Bn=301,Ms=302,Za=303,$a=304,$i=1e3,Pi=1001,xa=1002,zt=1003,Jd=1004;var xr=1005;var jt=1006,Ja=1007;var en=1008;var ii=1009,nc=1010,sc=1011,ws=1012,Ka=1013,Mi=1014,wi=1015,Ti=1016,Qa=1017,ja=1018,Un=1020,rc=35902,ac=35899,oc=1021,lc=1022,Ei=1023,Ji=1026,tn=1027,cc=1028,eo=1029,Sn=1030,to=1031;var io=1033,vr=33776,yr=33777,br=33778,_r=33779,no=35840,so=35841,ro=35842,ao=35843,oo=36196,lo=37492,co=37496,ho=37488,uo=37489,Sr=37490,po=37491,fo=37808,mo=37809,go=37810,xo=37811,vo=37812,yo=37813,bo=37814,_o=37815,So=37816,Mo=37817,wo=37818,To=37819,Eo=37820,Ao=37821,Co=36492,Ro=36494,Po=36495,Io=36283,Lo=36284,Mr=36285,Do=36286;var Vs=2300,va=2301,la=2302,Il=2303,Ll=2400,Dl=2401,Nl=2402;var Kd=3200;var No=0,Qd=1,nn="",Pt="srgb",Ws="srgb-linear",Xs="linear",mt="srgb";var ca=7680;var jd=519,eh=512,th=513,ih=514,dc=515,nh=516,sh=517,hc=518,uc=519,rh=35044;var pc="300 es",ui=2e3,cs=2001;function Mu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function wu(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function qs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ah(){let n=qs("canvas");return n.style.display="block",n}var jc={},ds=null;function fc(...n){let e="THREE."+n.shift();ds?ds("log",e,...n):console.log(e,...n)}function oh(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function He(...n){n=oh(n);let e="THREE."+n.shift();if(ds)ds("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ge(...n){n=oh(n);let e="THREE."+n.shift();if(ds)ds("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function zs(...n){let e=n.join(" ");e in jc||(jc[e]=!0,He(...n))}function lh(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var ch={[da]:da,[ua]:ma,[pa]:pa,[ls]:fa,[ha]:ha,[ma]:ua,[ga]:ga,[fa]:ls},Li=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var al=Math.PI/180,ya=180/Math.PI;function Ts(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yt[n&255]+Yt[n>>8&255]+Yt[n>>16&255]+Yt[n>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[t&63|128]+Yt[t>>8&255]+"-"+Yt[t>>16&255]+Yt[t>>24&255]+Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]).toLowerCase()}function at(n,e,t){return Math.max(e,Math.min(t,n))}function Tu(n,e){return(n%e+e)%e}function ol(n,e,t){return(1-t)*n+t*e}function dh(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function mc(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Eu(n,e){if(e.constructor===Float32Array)return n;let t=mc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function Au(n,e){if(e.constructor===Float32Array)return n;let t=mc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var _c=class _c{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(at(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};_c.prototype.isVector2=!0;var fe=_c,Di=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],d=i[s+2],h=i[s+3],u=r[a+0],p=r[a+1],f=r[a+2],_=r[a+3];if(h!==_||l!==u||c!==p||d!==f){let g=l*u+c*p+d*f+h*_;g<0&&(u=-u,p=-p,f=-f,_=-_,g=-g);let m=1-o;if(g<.9995){let v=Math.acos(g),w=Math.sin(v);m=Math.sin(m*v)/w,o=Math.sin(o*v)/w,l=l*m+u*o,c=c*m+p*o,d=d*m+f*o,h=h*m+_*o}else{l=l*m+u*o,c=c*m+p*o,d=d*m+f*o,h=h*m+_*o;let v=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=v,c*=v,d*=v,h*=v}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],d=i[s+3],h=r[a],u=r[a+1],p=r[a+2],f=r[a+3];return e[t]=o*f+d*h+l*p-c*u,e[t+1]=l*f+d*u+c*h-o*p,e[t+2]=c*f+d*p+o*u-l*h,e[t+3]=d*f-o*h-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(s/2),h=o(r/2),u=l(i/2),p=l(s/2),f=l(r/2);switch(a){case"XYZ":this._x=u*d*h+c*p*f,this._y=c*p*h-u*d*f,this._z=c*d*f+u*p*h,this._w=c*d*h-u*p*f;break;case"YXZ":this._x=u*d*h+c*p*f,this._y=c*p*h-u*d*f,this._z=c*d*f-u*p*h,this._w=c*d*h+u*p*f;break;case"ZXY":this._x=u*d*h-c*p*f,this._y=c*p*h+u*d*f,this._z=c*d*f+u*p*h,this._w=c*d*h-u*p*f;break;case"ZYX":this._x=u*d*h-c*p*f,this._y=c*p*h+u*d*f,this._z=c*d*f-u*p*h,this._w=c*d*h+u*p*f;break;case"YZX":this._x=u*d*h+c*p*f,this._y=c*p*h+u*d*f,this._z=c*d*f-u*p*h,this._w=c*d*h-u*p*f;break;case"XZY":this._x=u*d*h-c*p*f,this._y=c*p*h-u*d*f,this._z=c*d*f+u*p*h,this._w=c*d*h+u*p*f;break;default:He("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],h=t[10],u=i+o+h;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(d-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>h){let p=2*Math.sqrt(1+i-o-h);this._w=(d-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>h){let p=2*Math.sqrt(1+o-i-h);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+d)/p}else{let p=2*Math.sqrt(1+h-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=i*d+a*o+s*c-r*l,this._y=s*d+a*l+r*o-i*c,this._z=r*d+a*c+i*l-s*o,this._w=a*d-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Sc=class Sc{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ed.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ed.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),d=2*(o*t-r*s),h=2*(r*i-a*t);return this.x=t+l*c+a*h-o*d,this.y=i+l*d+o*c-r*h,this.z=s+l*h+r*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ll.copy(this).projectOnVector(e),this.sub(ll)}reflect(e){return this.sub(ll.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(at(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Sc.prototype.isVector3=!0;var O=Sc,ll=new O,ed=new Di,Mc=class Mc{constructor(e,t,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=r,d[5]=l,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],d=i[4],h=i[7],u=i[2],p=i[5],f=i[8],_=s[0],g=s[3],m=s[6],v=s[1],w=s[4],b=s[7],C=s[2],E=s[5],x=s[8];return r[0]=a*_+o*v+l*C,r[3]=a*g+o*w+l*E,r[6]=a*m+o*b+l*x,r[1]=c*_+d*v+h*C,r[4]=c*g+d*w+h*E,r[7]=c*m+d*b+h*x,r[2]=u*_+p*v+f*C,r[5]=u*g+p*w+f*E,r[8]=u*m+p*b+f*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-i*r*d+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=d*a-o*c,u=o*l-d*r,p=c*r-a*l,f=t*h+i*u+s*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/f;return e[0]=h*_,e[1]=(s*c-d*i)*_,e[2]=(o*i-s*a)*_,e[3]=u*_,e[4]=(d*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=p*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return zs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(cl.makeScale(e,t)),this}rotate(e){return zs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(cl.makeRotation(-e)),this}translate(e,t){return zs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(cl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Mc.prototype.isMatrix3=!0;var We=Mc,cl=new We,td=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),id=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Cu(){let n={enabled:!0,workingColorSpace:Ws,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===mt&&(s.r=Zi(s.r),s.g=Zi(s.g),s.b=Zi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===mt&&(s.r=os(s.r),s.g=os(s.g),s.b=os(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===nn?Xs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ws]:{primaries:e,whitePoint:i,transfer:Xs,toXYZ:td,fromXYZ:id,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Pt},outputColorSpaceConfig:{drawingBufferColorSpace:Pt}},[Pt]:{primaries:e,whitePoint:i,transfer:mt,toXYZ:td,fromXYZ:id,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Pt}}}),n}var dt=Cu();function Zi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function os(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Zn,ba=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Zn===void 0&&(Zn=qs("canvas")),Zn.width=e.width,Zn.height=e.height;let s=Zn.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Zn}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=qs("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Zi(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Zi(t[i]/255)*255):t[i]=Zi(t[i]);return{data:t,width:e.width,height:e.height}}else return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Ru=0,hs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ru++}),this.uuid=Ts(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(dl(s[a].image)):r.push(dl(s[a]))}else r=dl(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function dl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ba.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(He("Texture: Unable to serialize Texture."),{})}var Pu=0,hl=new O,ei=class n extends Li{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Pi,s=Pi,r=jt,a=en,o=Ei,l=ii,c=n.DEFAULT_ANISOTROPY,d=nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pu++}),this.uuid=Ts(),this.name="",this.source=new hs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(hl).x}get height(){return this.source.getSize(hl).y}get depth(){return this.source.getSize(hl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){He(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){He(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ic)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $i:e.x=e.x-Math.floor(e.x);break;case Pi:e.x=e.x<0?0:1;break;case xa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $i:e.y=e.y-Math.floor(e.y);break;case Pi:e.y=e.y<0?0:1;break;case xa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};ei.DEFAULT_IMAGE=null;ei.DEFAULT_MAPPING=ic;ei.DEFAULT_ANISOTROPY=1;var wc=class wc{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],d=l[4],h=l[8],u=l[1],p=l[5],f=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(d-u)<.01&&Math.abs(h-_)<.01&&Math.abs(f-g)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+_)<.1&&Math.abs(f+g)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,b=(p+1)/2,C=(m+1)/2,E=(d+u)/4,x=(h+_)/4,S=(f+g)/4;return w>b&&w>C?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=E/i,r=x/i):b>C?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=E/s,r=S/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=x/r,s=S/r),this.set(i,s,r,t),this}let v=Math.sqrt((g-f)*(g-f)+(h-_)*(h-_)+(u-d)*(u-d));return Math.abs(v)<.001&&(v=1),this.x=(g-f)/v,this.y=(h-_)/v,this.z=(u-d)/v,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};wc.prototype.isVector4=!0;var Tt=wc,_a=class extends Li{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new ei({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new hs(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ai=class extends _a{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Ys=class extends ei{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Sa=class extends ei{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var qa=class qa{constructor(e,t,i,s,r,a,o,l,c,d,h,u,p,f,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,d,h,u,p,f,_,g)}set(e,t,i,s,r,a,o,l,c,d,h,u,p,f,_,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=d,m[10]=h,m[14]=u,m[3]=p,m[7]=f,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qa().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/$n.setFromMatrixColumn(e,0).length(),r=1/$n.setFromMatrixColumn(e,1).length(),a=1/$n.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let u=a*d,p=a*h,f=o*d,_=o*h;t[0]=l*d,t[4]=-l*h,t[8]=c,t[1]=p+f*c,t[5]=u-_*c,t[9]=-o*l,t[2]=_-u*c,t[6]=f+p*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*d,p=l*h,f=c*d,_=c*h;t[0]=u+_*o,t[4]=f*o-p,t[8]=a*c,t[1]=a*h,t[5]=a*d,t[9]=-o,t[2]=p*o-f,t[6]=_+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*d,p=l*h,f=c*d,_=c*h;t[0]=u-_*o,t[4]=-a*h,t[8]=f+p*o,t[1]=p+f*o,t[5]=a*d,t[9]=_-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*d,p=a*h,f=o*d,_=o*h;t[0]=l*d,t[4]=f*c-p,t[8]=u*c+_,t[1]=l*h,t[5]=_*c+u,t[9]=p*c-f,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,p=a*c,f=o*l,_=o*c;t[0]=l*d,t[4]=_-u*h,t[8]=f*h+p,t[1]=h,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=p*h+f,t[10]=u-_*h}else if(e.order==="XZY"){let u=a*l,p=a*c,f=o*l,_=o*c;t[0]=l*d,t[4]=-h,t[8]=c*d,t[1]=u*h+_,t[5]=a*d,t[9]=p*h-f,t[2]=f*h-p,t[6]=o*d,t[10]=_*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Iu,e,Lu)}lookAt(e,t,i){let s=this.elements;return si.subVectors(e,t),si.lengthSq()===0&&(si.z=1),si.normalize(),cn.crossVectors(i,si),cn.lengthSq()===0&&(Math.abs(i.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),cn.crossVectors(i,si)),cn.normalize(),zr.crossVectors(si,cn),s[0]=cn.x,s[4]=zr.x,s[8]=si.x,s[1]=cn.y,s[5]=zr.y,s[9]=si.y,s[2]=cn.z,s[6]=zr.z,s[10]=si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],d=i[1],h=i[5],u=i[9],p=i[13],f=i[2],_=i[6],g=i[10],m=i[14],v=i[3],w=i[7],b=i[11],C=i[15],E=s[0],x=s[4],S=s[8],P=s[12],A=s[1],R=s[5],I=s[9],z=s[13],L=s[2],U=s[6],V=s[10],H=s[14],re=s[3],Z=s[7],te=s[11],se=s[15];return r[0]=a*E+o*A+l*L+c*re,r[4]=a*x+o*R+l*U+c*Z,r[8]=a*S+o*I+l*V+c*te,r[12]=a*P+o*z+l*H+c*se,r[1]=d*E+h*A+u*L+p*re,r[5]=d*x+h*R+u*U+p*Z,r[9]=d*S+h*I+u*V+p*te,r[13]=d*P+h*z+u*H+p*se,r[2]=f*E+_*A+g*L+m*re,r[6]=f*x+_*R+g*U+m*Z,r[10]=f*S+_*I+g*V+m*te,r[14]=f*P+_*z+g*H+m*se,r[3]=v*E+w*A+b*L+C*re,r[7]=v*x+w*R+b*U+C*Z,r[11]=v*S+w*I+b*V+C*te,r[15]=v*P+w*z+b*H+C*se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],h=e[6],u=e[10],p=e[14],f=e[3],_=e[7],g=e[11],m=e[15],v=l*p-c*u,w=o*p-c*h,b=o*u-l*h,C=a*p-c*d,E=a*u-l*d,x=a*h-o*d;return t*(_*v-g*w+m*b)-i*(f*v-g*C+m*E)+s*(f*w-_*C+m*x)-r*(f*b-_*E+g*x)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],d=e[10];return t*(a*d-o*c)-i*(r*d-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=e[9],u=e[10],p=e[11],f=e[12],_=e[13],g=e[14],m=e[15],v=t*o-i*a,w=t*l-s*a,b=t*c-r*a,C=i*l-s*o,E=i*c-r*o,x=s*c-r*l,S=d*_-h*f,P=d*g-u*f,A=d*m-p*f,R=h*g-u*_,I=h*m-p*_,z=u*m-p*g,L=v*z-w*I+b*R+C*A-E*P+x*S;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/L;return e[0]=(o*z-l*I+c*R)*U,e[1]=(s*I-i*z-r*R)*U,e[2]=(_*x-g*E+m*C)*U,e[3]=(u*E-h*x-p*C)*U,e[4]=(l*A-a*z-c*P)*U,e[5]=(t*z-s*A+r*P)*U,e[6]=(g*b-f*x-m*w)*U,e[7]=(d*x-u*b+p*w)*U,e[8]=(a*I-o*A+c*S)*U,e[9]=(i*A-t*I-r*S)*U,e[10]=(f*E-_*b+m*v)*U,e[11]=(h*b-d*E-p*v)*U,e[12]=(o*P-a*R-l*S)*U,e[13]=(t*R-i*P+s*S)*U,e[14]=(_*w-f*C-g*v)*U,e[15]=(d*C-h*w+u*v)*U,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,d=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,d*o+i,d*l-s*a,0,c*l-s*o,d*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,d=a+a,h=o+o,u=r*c,p=r*d,f=r*h,_=a*d,g=a*h,m=o*h,v=l*c,w=l*d,b=l*h,C=i.x,E=i.y,x=i.z;return s[0]=(1-(_+m))*C,s[1]=(p+b)*C,s[2]=(f-w)*C,s[3]=0,s[4]=(p-b)*E,s[5]=(1-(u+m))*E,s[6]=(g+v)*E,s[7]=0,s[8]=(f+w)*x,s[9]=(g-v)*x,s[10]=(1-(u+_))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=$n.set(s[0],s[1],s[2]).length(),o=$n.set(s[4],s[5],s[6]).length(),l=$n.set(s[8],s[9],s[10]).length();r<0&&(a=-a),vi.copy(this);let c=1/a,d=1/o,h=1/l;return vi.elements[0]*=c,vi.elements[1]*=c,vi.elements[2]*=c,vi.elements[4]*=d,vi.elements[5]*=d,vi.elements[6]*=d,vi.elements[8]*=h,vi.elements[9]*=h,vi.elements[10]*=h,t.setFromRotationMatrix(vi),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=ui,l=!1){let c=this.elements,d=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),p=(i+s)/(i-s),f,_;if(l)f=r/(a-r),_=a*r/(a-r);else if(o===ui)f=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===cs)f=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=ui,l=!1){let c=this.elements,d=2/(t-e),h=2/(i-s),u=-(t+e)/(t-e),p=-(i+s)/(i-s),f,_;if(l)f=1/(a-r),_=a/(a-r);else if(o===ui)f=-2/(a-r),_=-(a+r)/(a-r);else if(o===cs)f=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=f,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};qa.prototype.isMatrix4=!0;var bt=qa,$n=new O,vi=new bt,Iu=new O(0,0,0),Lu=new O(1,1,1),cn=new O,zr=new O,si=new O,nd=new bt,sd=new Di,Ki=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],d=s[9],h=s[2],u=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-at(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(at(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-at(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(at(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,p),this._y=0);break;default:He("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return nd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sd.setFromEuler(this),this.setFromQuaternion(sd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ki.DEFAULT_ORDER="XYZ";var Zs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Du=0,rd=new O,Jn=new Di,Vi=new bt,Hr=new O,Fs=new O,Nu=new O,Fu=new Di,ad=new O(1,0,0),od=new O(0,1,0),ld=new O(0,0,1),cd={type:"added"},ku={type:"removed"},Kn={type:"childadded",child:null},ul={type:"childremoved",child:null},Jt=class n extends Li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=Ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new O,t=new Ki,i=new Di,s=new O(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new bt},normalMatrix:{value:new We}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Jn.setFromAxisAngle(e,t),this.quaternion.multiply(Jn),this}rotateOnWorldAxis(e,t){return Jn.setFromAxisAngle(e,t),this.quaternion.premultiply(Jn),this}rotateX(e){return this.rotateOnAxis(ad,e)}rotateY(e){return this.rotateOnAxis(od,e)}rotateZ(e){return this.rotateOnAxis(ld,e)}translateOnAxis(e,t){return rd.copy(e).applyQuaternion(this.quaternion),this.position.add(rd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ad,e)}translateY(e){return this.translateOnAxis(od,e)}translateZ(e){return this.translateOnAxis(ld,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Hr.copy(e):Hr.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vi.lookAt(Fs,Hr,this.up):Vi.lookAt(Hr,Fs,this.up),this.quaternion.setFromRotationMatrix(Vi),s&&(Vi.extractRotation(s.matrixWorld),Jn.setFromRotationMatrix(Vi),this.quaternion.premultiply(Jn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ge("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(cd),Kn.child=e,this.dispatchEvent(Kn),Kn.child=null):Ge("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ku),ul.child=e,this.dispatchEvent(ul),ul.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(cd),Kn.child=e,this.dispatchEvent(Kn),Kn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,e,Nu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,Fu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),h=a(e.shapes),u=a(e.skeletons),p=a(e.animations),f=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),f.length>0&&(i.nodes=f)}return i.object=s,i;function a(o){let l=[];for(let c in o){let d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Jt.DEFAULT_UP=new O(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var et=class extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Bu={type:"move"},us=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new et,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new et,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new et,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let g=t.getJointPose(_,i),m=this._getHandJoint(c,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=d.position.distanceTo(h.position),p=.02,f=.005;c.inputState.pinching&&u>p+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Bu)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new et;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},hh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dn={h:0,s:0,l:0},Gr={h:0,s:0,l:0};function pl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var $e=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=dt.workingColorSpace){return this.r=e,this.g=t,this.b=i,dt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=dt.workingColorSpace){if(e=Tu(e,1),t=at(t,0,1),i=at(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=pl(a,r,e+1/3),this.g=pl(a,r,e),this.b=pl(a,r,e-1/3)}return dt.colorSpaceToWorking(this,s),this}setStyle(e,t=Pt){function i(r){r!==void 0&&parseFloat(r)<1&&He("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:He("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);He("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pt){let i=hh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):He("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}copyLinearToSRGB(e){return this.r=os(e.r),this.g=os(e.g),this.b=os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pt){return dt.workingToColorSpace(Zt.copy(this),e),Math.round(at(Zt.r*255,0,255))*65536+Math.round(at(Zt.g*255,0,255))*256+Math.round(at(Zt.b*255,0,255))}getHexString(e=Pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(Zt.copy(this),t);let i=Zt.r,s=Zt.g,r=Zt.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,d=(o+a)/2;if(o===a)l=0,c=0;else{let h=a-o;switch(c=d<=.5?h/(a+o):h/(2-a-o),a){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=Pt){dt.workingToColorSpace(Zt.copy(this),e);let t=Zt.r,i=Zt.g,s=Zt.b;return e!==Pt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(dn),this.setHSL(dn.h+e,dn.s+t,dn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(dn),e.getHSL(Gr);let i=ol(dn.h,Gr.h,t),s=ol(dn.s,Gr.s,t),r=ol(dn.l,Gr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Zt=new $e;$e.NAMES=hh;var Si=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new $e(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},$s=class extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ki,this.environmentIntensity=1,this.environmentRotation=new Ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},yi=new O,Wi=new O,fl=new O,Xi=new O,Qn=new O,jn=new O,dd=new O,ml=new O,gl=new O,xl=new O,vl=new Tt,yl=new Tt,bl=new Tt,fn=class n{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),yi.subVectors(e,t),s.cross(yi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){yi.subVectors(s,t),Wi.subVectors(i,t),fl.subVectors(e,t);let a=yi.dot(yi),o=yi.dot(Wi),l=yi.dot(fl),c=Wi.dot(Wi),d=Wi.dot(fl),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;let u=1/h,p=(c*l-o*d)*u,f=(a*d-o*l)*u;return r.set(1-p-f,f,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Xi)===null?!1:Xi.x>=0&&Xi.y>=0&&Xi.x+Xi.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Xi.x),l.addScaledVector(a,Xi.y),l.addScaledVector(o,Xi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return vl.setScalar(0),yl.setScalar(0),bl.setScalar(0),vl.fromBufferAttribute(e,t),yl.fromBufferAttribute(e,i),bl.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(vl,r.x),a.addScaledVector(yl,r.y),a.addScaledVector(bl,r.z),a}static isFrontFacing(e,t,i,s){return yi.subVectors(i,t),Wi.subVectors(e,t),yi.cross(Wi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),yi.cross(Wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;Qn.subVectors(s,i),jn.subVectors(r,i),ml.subVectors(e,i);let l=Qn.dot(ml),c=jn.dot(ml);if(l<=0&&c<=0)return t.copy(i);gl.subVectors(e,s);let d=Qn.dot(gl),h=jn.dot(gl);if(d>=0&&h<=d)return t.copy(s);let u=l*h-d*c;if(u<=0&&l>=0&&d<=0&&l-d>0)return a=l/(l-d),t.copy(i).addScaledVector(Qn,a);xl.subVectors(e,r);let p=Qn.dot(xl),f=jn.dot(xl);if(f>=0&&p<=f)return t.copy(r);let _=p*c-l*f;if(_<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(i).addScaledVector(jn,o);let g=d*f-p*h;if(g<=0&&h-d>=0&&p-f>=0)return dd.subVectors(r,s),o=(h-d)/(h-d+(p-f)),t.copy(s).addScaledVector(dd,o);let m=1/(g+_+u);return a=_*m,o=u*m,t.copy(i).addScaledVector(Qn,a).addScaledVector(jn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},mn=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(bi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(bi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,bi):bi.fromBufferAttribute(r,a),bi.applyMatrix4(e.matrixWorld),this.expandByPoint(bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Vr.copy(i.boundingBox)),Vr.applyMatrix4(e.matrixWorld),this.union(Vr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bi),bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ks),Wr.subVectors(this.max,ks),es.subVectors(e.a,ks),ts.subVectors(e.b,ks),is.subVectors(e.c,ks),hn.subVectors(ts,es),un.subVectors(is,ts),Cn.subVectors(es,is);let t=[0,-hn.z,hn.y,0,-un.z,un.y,0,-Cn.z,Cn.y,hn.z,0,-hn.x,un.z,0,-un.x,Cn.z,0,-Cn.x,-hn.y,hn.x,0,-un.y,un.x,0,-Cn.y,Cn.x,0];return!_l(t,es,ts,is,Wr)||(t=[1,0,0,0,1,0,0,0,1],!_l(t,es,ts,is,Wr))?!1:(Xr.crossVectors(hn,un),t=[Xr.x,Xr.y,Xr.z],_l(t,es,ts,is,Wr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},qi=[new O,new O,new O,new O,new O,new O,new O,new O],bi=new O,Vr=new mn,es=new O,ts=new O,is=new O,hn=new O,un=new O,Cn=new O,ks=new O,Wr=new O,Xr=new O,Rn=new O;function _l(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Rn.fromArray(n,r);let o=s.x*Math.abs(Rn.x)+s.y*Math.abs(Rn.y)+s.z*Math.abs(Rn.z),l=e.dot(Rn),c=t.dot(Rn),d=i.dot(Rn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}var Rt=new O,qr=new fe,Uu=0,pi=class extends Li{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Uu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=rh,this.updateRanges=[],this.gpuType=wi,this.version=0,this._normalizationScale=e!==void 0?mc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)qr.fromBufferAttribute(this,t),qr.applyMatrix3(e),this.setXY(t,qr.x,qr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Eu(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Au(e,this.array)}};var Js=class extends pi{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Ks=class extends pi{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var st=class extends pi{constructor(e,t,i){super(new Float32Array(e),t,i)}},Ou=new mn,Bs=new O,Sl=new O,ps=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Ou.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bs.subVectors(e,this.center);let t=Bs.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Bs,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bs.copy(e.center).add(Sl)),this.expandByPoint(Bs.copy(e.center).sub(Sl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},zu=0,hi=new bt,Ml=new Jt,ns=new O,ri=new mn,Us=new mn,Ot=new O,It=class n extends Li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zu++}),this.uuid=Ts(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mu(e)?Ks:Js)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new We().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return hi.makeRotationFromQuaternion(e),this.applyMatrix4(hi),this}rotateX(e){return hi.makeRotationX(e),this.applyMatrix4(hi),this}rotateY(e){return hi.makeRotationY(e),this.applyMatrix4(hi),this}rotateZ(e){return hi.makeRotationZ(e),this.applyMatrix4(hi),this}translate(e,t,i){return hi.makeTranslation(e,t,i),this.applyMatrix4(hi),this}scale(e,t,i){return hi.makeScale(e,t,i),this.applyMatrix4(hi),this}lookAt(e){return Ml.lookAt(e),Ml.updateMatrix(),this.applyMatrix4(Ml.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new st(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];ri.setFromBufferAttribute(r),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ge('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ps);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){let i=this.boundingSphere.center;if(ri.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Us.setFromBufferAttribute(o),this.morphTargetsRelative?(Ot.addVectors(ri.min,Us.min),ri.expandByPoint(Ot),Ot.addVectors(ri.max,Us.max),ri.expandByPoint(Ot)):(ri.expandByPoint(Us.min),ri.expandByPoint(Us.max))}ri.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Ot.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ot));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Ot.fromBufferAttribute(o,c),l&&(ns.fromBufferAttribute(e,c),Ot.add(ns)),s=Math.max(s,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ge('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ge("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new pi(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(i.count);for(let P=0;P<i.count;P++)o[P]=new O,l[P]=new O;let d=new O,h=new O,u=new O,p=new fe,f=new fe,_=new fe,g=new O,m=new O;function v(P,A,R){c[P]=c[A]=c[R]=1,d.fromBufferAttribute(i,P),h.fromBufferAttribute(i,A),u.fromBufferAttribute(i,R),p.fromBufferAttribute(r,P),f.fromBufferAttribute(r,A),_.fromBufferAttribute(r,R),h.sub(d),u.sub(d),f.sub(p),_.sub(p);let I=1/(f.x*_.y-_.x*f.y);isFinite(I)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(u,-f.y).multiplyScalar(I),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-_.x).multiplyScalar(I),o[P].add(g),o[A].add(g),o[R].add(g),l[P].add(m),l[A].add(m),l[R].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let P=0,A=w.length;P<A;++P){let R=w[P],I=R.start,z=R.count;for(let L=I,U=I+z;L<U;L+=3)v(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let b=new O,C=new O,E=new O,x=new O;function S(P){E.fromBufferAttribute(s,P),x.copy(E);let A=o[P];b.copy(A),b.sub(E.multiplyScalar(E.dot(A))).normalize(),C.crossVectors(x,A);let I=C.dot(l[P])<0?-1:1;a.setXYZW(P,b.x,b.y,b.z,I)}for(let P=0,A=i.count;P<A;++P)c[P]&&S(P);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new pi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);let s=new O,r=new O,a=new O,o=new O,l=new O,c=new O,d=new O,h=new O;if(e)for(let u=0,p=e.count;u<p;u+=3){let f=e.getX(u+0),_=e.getX(u+1),g=e.getX(u+2);s.fromBufferAttribute(t,f),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),d.subVectors(a,r),h.subVectors(s,r),d.cross(h),o.fromBufferAttribute(i,f),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),o.add(d),l.add(d),c.add(d),i.setXYZ(f,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),d.subVectors(a,r),h.subVectors(s,r),d.cross(h),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(o,l){let c=o.array,d=o.itemSize,h=o.normalized,u=new c.constructor(l.length*d),p=0,f=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*d;for(let m=0;m<d;m++)u[f++]=c[p++]}return new pi(u,d,h)}if(this.index===null)return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let d=0,h=c.length;d<h;d++){let u=c[d],p=e(u,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],d=[];for(let h=0,u=c.length;h<u;h++){let p=c[h];d.push(p.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let d=s[c];this.setAttribute(c,d.clone(t))}let r=e.morphAttributes;for(let c in r){let d=[],h=r[c];for(let u=0,p=h.length;u<p;u++)d.push(h[u].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,d=a.length;c<d;c++){let h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var wl=new O,Hu=new O,Gu=new We,_i=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=wl.subVectors(i,t).cross(Hu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(wl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Gu.getNormalMatrix(e),s=this.coplanarPoint(wl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Vu=0,gn=class extends Li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vu++}),this.uuid=Ts(),this.name="",this.type="Material",this.blending=Ss,this.side=_n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yl,this.blendDst=Zl,this.blendEquation=kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ca,this.stencilZFail=ca,this.stencilZPass=ca,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){He(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){He(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new $e().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new _i().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new fe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new fe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Yi=new O,Tl=new O,Yr=new O,Zr=new O,Ma=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yi.copy(this.origin).addScaledVector(this.direction,t),Yi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Tl.copy(e).add(t).multiplyScalar(.5),Yr.copy(t).sub(e).normalize(),Zr.copy(this.origin).sub(Tl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Yr),o=Zr.dot(this.direction),l=-Zr.dot(Yr),c=Zr.lengthSq(),d=Math.abs(1-a*a),h,u,p,f;if(d>0)if(h=a*l-o,u=a*o-l,f=r*d,h>=0)if(u>=-f)if(u<=f){let _=1/d;h*=_,u*=_,p=h*(h+a*u+2*o)+u*(a*h+u+2*l)+c}else u=r,h=Math.max(0,-(a*u+o)),p=-h*h+u*(u+2*l)+c;else u=-r,h=Math.max(0,-(a*u+o)),p=-h*h+u*(u+2*l)+c;else u<=-f?(h=Math.max(0,-(-a*r+o)),u=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+u*(u+2*l)+c):u<=f?(h=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(h=Math.max(0,-(a*r+o)),u=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+u*(u+2*l)+c);else u=a>0?-r:r,h=Math.max(0,-(a*u+o)),p=-h*h+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Tl).addScaledVector(Yr,u),p}intersectSphere(e,t){if(e.radius<0)return null;Yi.subVectors(e.center,this.origin);let i=Yi.dot(this.direction),s=Yi.dot(Yi)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),d>=0?(r=(e.min.y-u.y)*d,a=(e.max.y-u.y)*d):(r=(e.max.y-u.y)*d,a=(e.min.y-u.y)*d),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(o=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Yi)!==null}intersectTriangle(e,t,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,d=o.z,h=e.x-a.x,u=e.y-a.y,p=e.z-a.z,f=t.x-a.x,_=t.y-a.y,g=t.z-a.z,m=i.x-a.x,v=i.y-a.y,w=i.z-a.z,b=Math.abs(l),C=Math.abs(c),E=Math.abs(d),x,S,P,A,R,I,z,L,U,V,H,re;if(b>=C&&b>=E?(P=l,I=h,U=f,re=m,l>=0?(x=c,S=d,A=u,R=p,z=_,L=g,V=v,H=w):(x=d,S=c,A=p,R=u,z=g,L=_,V=w,H=v)):C>=E?(P=c,I=u,U=_,re=v,c>=0?(x=d,S=l,A=p,R=h,z=g,L=f,V=w,H=m):(x=l,S=d,A=h,R=p,z=f,L=g,V=m,H=w)):(P=d,I=p,U=g,re=w,d>=0?(x=l,S=c,A=h,R=u,z=f,L=_,V=m,H=v):(x=c,S=l,A=u,R=h,z=_,L=f,V=v,H=m)),P===0)return null;let Z=x/P,te=S/P,se=1/P,Me=A-Z*I,Ie=R-te*I,Q=z-Z*U,me=L-te*U,Ce=V-Z*re,Be=H-te*re,ye=Ce*me-Be*Q,Ue=Me*Be-Ie*Ce,vt=Q*Ie-me*Me;if(s){if(ye<0||Ue<0||vt<0)return null}else if((ye<0||Ue<0||vt<0)&&(ye>0||Ue>0||vt>0))return null;let Oe=ye+Ue+vt;if(Oe===0)return null;let qe=se*(ye*I+Ue*U+vt*re);return(Oe>0?qe<0:qe>0)?null:this.at(qe/Oe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Lt=class extends gn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ki,this.combine=$l,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},hd=new bt,Pn=new Ma,$r=new ps,ud=new O,Jr=new O,Kr=new O,Qr=new O,El=new O,jr=new O,pd=new O,ea=new O,Ve=class extends Jt{constructor(e=new It,t=new Lt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){jr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let d=o[l],h=r[l];d!==0&&(El.fromBufferAttribute(h,e),a?jr.addScaledVector(El,d):jr.addScaledVector(El.sub(t),d))}t.add(jr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),$r.copy(i.boundingSphere),$r.applyMatrix4(r),Pn.copy(e.ray).recast(e.near),!($r.containsPoint(Pn.origin)===!1&&(Pn.intersectSphere($r,ud)===null||Pn.origin.distanceToSquared(ud)>(e.far-e.near)**2))&&(hd.copy(r).invert(),Pn.copy(e.ray).applyMatrix4(hd),!(i.boundingBox!==null&&Pn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Pn)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,h=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,_=u.length;f<_;f++){let g=u[f],m=a[g.materialIndex],v=Math.max(g.start,p.start),w=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let b=v,C=w;b<C;b+=3){let E=o.getX(b),x=o.getX(b+1),S=o.getX(b+2);s=ta(this,m,e,i,c,d,h,E,x,S),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let f=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let g=f,m=_;g<m;g+=3){let v=o.getX(g),w=o.getX(g+1),b=o.getX(g+2);s=ta(this,a,e,i,c,d,h,v,w,b),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let f=0,_=u.length;f<_;f++){let g=u[f],m=a[g.materialIndex],v=Math.max(g.start,p.start),w=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let b=v,C=w;b<C;b+=3){let E=b,x=b+1,S=b+2;s=ta(this,m,e,i,c,d,h,E,x,S),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let f=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let g=f,m=_;g<m;g+=3){let v=g,w=g+1,b=g+2;s=ta(this,a,e,i,c,d,h,v,w,b),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Wu(n,e,t,i,s,r,a,o){let l;if(e.side===Vt?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===_n,o),l===null)return null;ea.copy(o),ea.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(ea);return c<t.near||c>t.far?null:{distance:c,point:ea.clone(),object:n}}function ta(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Jr),n.getVertexPosition(l,Kr),n.getVertexPosition(c,Qr);let d=Wu(n,e,t,i,Jr,Kr,Qr,pd);if(d){let h=new O;fn.getBarycoord(pd,Jr,Kr,Qr,h),s&&(d.uv=fn.getInterpolatedAttribute(s,o,l,c,h,new fe)),r&&(d.uv1=fn.getInterpolatedAttribute(r,o,l,c,h,new fe)),a&&(d.normal=fn.getInterpolatedAttribute(a,o,l,c,h,new O),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new O,materialIndex:0};fn.getNormal(Jr,Kr,Qr,u.normal),d.face=u,d.barycoord=h}return d}var wa=class extends ei{constructor(e=null,t=1,i=1,s,r,a,o,l,c=zt,d=zt,h,u){super(null,a,o,l,c,d,s,r,h,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var In=new ps,Xu=new fe(.5,.5),ia=new O,xn=class{constructor(e=new _i,t=new _i,i=new _i,s=new _i,r=new _i,a=new _i){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ui,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],d=r[4],h=r[5],u=r[6],p=r[7],f=r[8],_=r[9],g=r[10],m=r[11],v=r[12],w=r[13],b=r[14],C=r[15];if(s[0].setComponents(c-a,p-d,m-f,C-v).normalize(),s[1].setComponents(c+a,p+d,m+f,C+v).normalize(),s[2].setComponents(c+o,p+h,m+_,C+w).normalize(),s[3].setComponents(c-o,p-h,m-_,C-w).normalize(),i)s[4].setComponents(l,u,g,b).normalize(),s[5].setComponents(c-l,p-u,m-g,C-b).normalize();else if(s[4].setComponents(c-l,p-u,m-g,C-b).normalize(),t===ui)s[5].setComponents(c+l,p+u,m+g,C+b).normalize();else if(t===cs)s[5].setComponents(l,u,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),In.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),In.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(In)}intersectsSprite(e){In.center.set(0,0,0);let t=Xu.distanceTo(e.center);return In.radius=.7071067811865476+t,In.applyMatrix4(e.matrixWorld),this.intersectsSphere(In)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(ia.x=s.normal.x>0?e.max.x:e.min.x,ia.y=s.normal.y>0?e.max.y:e.min.y,ia.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ia)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},fd=new bt,Ta=class n{constructor(){this.coordinateSystem=ui,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];fd.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new xn),i[s].setFromProjectionMatrix(fd,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new xn),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}};var Qs=class extends ei{constructor(e=[],t=Bn,i,s,r,a,o,l,c,d){super(e,t,i,s,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ni=class extends ei{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Qi=class extends ei{constructor(e,t,i=Mi,s,r,a,o=zt,l=zt,c,d=Ji,h=1){if(d!==Ji&&d!==tn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:h};super(u,s,r,a,o,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new hs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},js=class extends Qi{constructor(e,t=Mi,i=Bn,s,r,a=zt,o=zt,l,c=Ji){let d={width:e,height:e,depth:1},h=[d,d,d,d,d,d];super(e,e,t,i,s,r,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},er=class extends ei{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ht=class n extends It{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],d=[],h=[],u=0,p=0;f("z","y","x",-1,-1,i,t,e,a,r,0),f("z","y","x",1,-1,i,t,-e,a,r,1),f("x","z","y",1,1,e,i,t,s,a,2),f("x","z","y",1,-1,e,i,-t,s,a,3),f("x","y","z",1,-1,e,t,i,s,r,4),f("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(d,3)),this.setAttribute("uv",new st(h,2));function f(_,g,m,v,w,b,C,E,x,S,P){let A=b/x,R=C/S,I=b/2,z=C/2,L=E/2,U=x+1,V=S+1,H=0,re=0,Z=new O;for(let te=0;te<V;te++){let se=te*R-z;for(let Me=0;Me<U;Me++){let Ie=Me*A-I;Z[_]=Ie*v,Z[g]=se*w,Z[m]=L,c.push(Z.x,Z.y,Z.z),Z[_]=0,Z[g]=0,Z[m]=E>0?1:-1,d.push(Z.x,Z.y,Z.z),h.push(Me/x),h.push(1-te/S),H+=1}}for(let te=0;te<S;te++)for(let se=0;se<x;se++){let Me=u+se+U*te,Ie=u+se+U*(te+1),Q=u+(se+1)+U*(te+1),me=u+(se+1)+U*te;l.push(Me,Ie,me),l.push(Ie,Q,me),re+=6}o.addGroup(p,re,P),p+=re,u+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var fs=class n extends It{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new O,d=new fe;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,u=3;h<=t;h++,u+=3){let p=i+h/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),d.x=(a[u]/e+1)/2,d.y=(a[u+1]/e+1)/2,l.push(d.x,d.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new st(a,3)),this.setAttribute("normal",new st(o,3)),this.setAttribute("uv",new st(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},_t=class n extends It{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let d=[],h=[],u=[],p=[],f=0,_=[],g=i/2,m=0;v(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(d),this.setAttribute("position",new st(h,3)),this.setAttribute("normal",new st(u,3)),this.setAttribute("uv",new st(p,2));function v(){let b=new O,C=new O,E=0,x=(t-e)/i;for(let S=0;S<=r;S++){let P=[],A=S/r,R=A*(t-e)+e;for(let I=0;I<=s;I++){let z=I/s,L=z*l+o,U=Math.sin(L),V=Math.cos(L);C.x=R*U,C.y=-A*i+g,C.z=R*V,h.push(C.x,C.y,C.z),b.set(U,x,V).normalize(),u.push(b.x,b.y,b.z),p.push(z,1-A),P.push(f++)}_.push(P)}for(let S=0;S<s;S++)for(let P=0;P<r;P++){let A=_[P][S],R=_[P+1][S],I=_[P+1][S+1],z=_[P][S+1];(e>0||P!==0)&&(d.push(A,R,z),E+=3),(t>0||P!==r-1)&&(d.push(R,I,z),E+=3)}c.addGroup(m,E,0),m+=E}function w(b){let C=f,E=new fe,x=new O,S=0,P=b===!0?e:t,A=b===!0?1:-1;for(let I=1;I<=s;I++)h.push(0,g*A,0),u.push(0,A,0),p.push(.5,.5),f++;let R=f;for(let I=0;I<=s;I++){let L=I/s*l+o,U=Math.cos(L),V=Math.sin(L);x.x=P*V,x.y=g*A,x.z=P*U,h.push(x.x,x.y,x.z),u.push(0,A,0),E.x=U*.5+.5,E.y=V*.5*A+.5,p.push(E.x,E.y),f++}for(let I=0;I<s;I++){let z=C+I,L=R+I;b===!0?d.push(L,L+1,z):d.push(L+1,L,z),S+=3}c.addGroup(m,S,b===!0?1:2),m+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ms=class n extends _t{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},tr=class n extends It{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],a=[];o(s),c(i),d(),this.setAttribute("position",new st(r,3)),this.setAttribute("normal",new st(r.slice(),3)),this.setAttribute("uv",new st(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let w=new O,b=new O,C=new O;for(let E=0;E<t.length;E+=3)p(t[E+0],w),p(t[E+1],b),p(t[E+2],C),l(w,b,C,v)}function l(v,w,b,C){let E=C+1,x=[];for(let S=0;S<=E;S++){x[S]=[];let P=v.clone().lerp(b,S/E),A=w.clone().lerp(b,S/E),R=E-S;for(let I=0;I<=R;I++)I===0&&S===E?x[S][I]=P:x[S][I]=P.clone().lerp(A,I/R)}for(let S=0;S<E;S++)for(let P=0;P<2*(E-S)-1;P++){let A=Math.floor(P/2);P%2===0?(u(x[S][A+1]),u(x[S+1][A]),u(x[S][A])):(u(x[S][A+1]),u(x[S+1][A+1]),u(x[S+1][A]))}}function c(v){let w=new O;for(let b=0;b<r.length;b+=3)w.x=r[b+0],w.y=r[b+1],w.z=r[b+2],w.normalize().multiplyScalar(v),r[b+0]=w.x,r[b+1]=w.y,r[b+2]=w.z}function d(){let v=new O;for(let w=0;w<r.length;w+=3){v.x=r[w+0],v.y=r[w+1],v.z=r[w+2];let b=g(v)/2/Math.PI+.5,C=m(v)/Math.PI+.5;a.push(b,1-C)}f(),h()}function h(){for(let v=0;v<a.length;v+=6){let w=a[v+0],b=a[v+2],C=a[v+4],E=Math.max(w,b,C),x=Math.min(w,b,C);E>.9&&x<.1&&(w<.2&&(a[v+0]+=1),b<.2&&(a[v+2]+=1),C<.2&&(a[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function p(v,w){let b=v*3;w.x=e[b+0],w.y=e[b+1],w.z=e[b+2]}function f(){let v=new O,w=new O,b=new O,C=new O,E=new fe,x=new fe,S=new fe;for(let P=0,A=0;P<r.length;P+=9,A+=6){v.set(r[P+0],r[P+1],r[P+2]),w.set(r[P+3],r[P+4],r[P+5]),b.set(r[P+6],r[P+7],r[P+8]),E.set(a[A+0],a[A+1]),x.set(a[A+2],a[A+3]),S.set(a[A+4],a[A+5]),C.copy(v).add(w).add(b).divideScalar(3);let R=g(C);_(E,A+0,v,R),_(x,A+2,w,R),_(S,A+4,b,R)}}function _(v,w,b,C){C<0&&v.x===1&&(a[w]=v.x-1),b.x===0&&b.z===0&&(a[w]=C/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}};var oi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){He("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let d=i[s],u=i[s+1]-d,p=(a-d)/u;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new fe:new O);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new O,s=[],r=[],a=[],o=new O,l=new bt;for(let p=0;p<=e;p++){let f=p/e;s[p]=this.getTangentAt(f,new O)}r[0]=new O,a[0]=new O;let c=Number.MAX_VALUE,d=Math.abs(s[0].x),h=Math.abs(s[0].y),u=Math.abs(s[0].z);d<=c&&(c=d,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(at(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,f))}a[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(at(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let f=1;f<=e;f++)r[f].applyMatrix4(l.makeRotationAxis(s[f],p*f)),a[f].crossVectors(s[f],r[f])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},gs=class extends oi{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new fe){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let d=Math.cos(this.aRotation),h=Math.sin(this.aRotation),u=l-this.aX,p=c-this.aY;l=u*d-p*h+this.aX,c=u*h+p*d+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ea=class extends gs{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function gc(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,d,h){let u=(a-r)/c-(o-r)/(c+d)+(o-a)/d,p=(o-a)/d-(l-a)/(d+h)+(l-o)/h;u*=d,p*=d,s(a,o,u,p)},calc:function(r){let a=r*r,o=a*r;return n+e*r+t*a+i*o}}}var md=new O,gd=new O,Al=new gc,Cl=new gc,Rl=new gc,Aa=class extends oi{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new O){let i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,d;this.closed||o>0?c=s[(o-1)%r]:(gd.subVectors(s[0],s[1]).add(s[0]),c=gd);let h=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?d=s[(o+2)%r]:(md.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=md),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(c.distanceToSquared(h),p),_=Math.pow(h.distanceToSquared(u),p),g=Math.pow(u.distanceToSquared(d),p);_<1e-4&&(_=1),f<1e-4&&(f=_),g<1e-4&&(g=_),Al.initNonuniformCatmullRom(c.x,h.x,u.x,d.x,f,_,g),Cl.initNonuniformCatmullRom(c.y,h.y,u.y,d.y,f,_,g),Rl.initNonuniformCatmullRom(c.z,h.z,u.z,d.z,f,_,g)}else this.curveType==="catmullrom"&&(Al.initCatmullRom(c.x,h.x,u.x,d.x,this.tension),Cl.initCatmullRom(c.y,h.y,u.y,d.y,this.tension),Rl.initCatmullRom(c.z,h.z,u.z,d.z,this.tension));return i.set(Al.calc(l),Cl.calc(l),Rl.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new O().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function xd(n,e,t,i,s){let r=(i-e)*.5,a=(s-t)*.5,o=n*n,l=n*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*n+t}function qu(n,e){let t=1-n;return t*t*e}function Yu(n,e){return 2*(1-n)*n*e}function Zu(n,e){return n*n*e}function Hs(n,e,t,i){return qu(n,e)+Yu(n,t)+Zu(n,i)}function $u(n,e){let t=1-n;return t*t*t*e}function Ju(n,e){let t=1-n;return 3*t*t*n*e}function Ku(n,e){return 3*(1-n)*n*n*e}function Qu(n,e){return n*n*n*e}function Gs(n,e,t,i,s){return $u(n,e)+Ju(n,t)+Ku(n,i)+Qu(n,s)}var ir=class extends oi{constructor(e=new fe,t=new fe,i=new fe,s=new fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new fe){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Gs(e,s.x,r.x,a.x,o.x),Gs(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ca=class extends oi{constructor(e=new O,t=new O,i=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new O){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Gs(e,s.x,r.x,a.x,o.x),Gs(e,s.y,r.y,a.y,o.y),Gs(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},nr=class extends oi{constructor(e=new fe,t=new fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new fe){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new fe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ra=class extends oi{constructor(e=new O,t=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new O){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new O){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},sr=class extends oi{constructor(e=new fe,t=new fe,i=new fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new fe){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Hs(e,s.x,r.x,a.x),Hs(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Pa=class extends oi{constructor(e=new O,t=new O,i=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new O){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Hs(e,s.x,r.x,a.x),Hs(e,s.y,r.y,a.y),Hs(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},rr=class extends oi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new fe){let i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],d=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return i.set(xd(o,l.x,c.x,d.x,h.x),xd(o,l.y,c.y,d.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new fe().fromArray(s))}return this}},Fl=Object.freeze({__proto__:null,ArcCurve:Ea,CatmullRomCurve3:Aa,CubicBezierCurve:ir,CubicBezierCurve3:Ca,EllipseCurve:gs,LineCurve:nr,LineCurve3:Ra,QuadraticBezierCurve:sr,QuadraticBezierCurve3:Pa,SplineCurve:rr}),Ia=class extends oi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Fl[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let d=l[c];i&&i.equals(d)||(t.push(d),i=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Fl[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},ar=class extends Ia{constructor(e){super(),this.type="Path",this.currentPoint=new fe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new nr(this.currentPoint.clone(),new fe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new sr(this.currentPoint.clone(),new fe(e,t),new fe(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){let o=new ir(this.currentPoint.clone(),new fe(e,t),new fe(i,s),new fe(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new rr(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,l){let c=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+c,t+d,i,s,r,a,o,l),this}absellipse(e,t,i,s,r,a,o,l){let c=new gs(e,t,i,s,r,a,o,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let d=c.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},fi=class extends ar{constructor(e){super(e),this.uuid=Ts(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new ar().fromJSON(s))}return this}};function ju(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=uh(n,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=sp(n,e,r,t)),n.length>80*t){o=n[0],l=n[1];let d=o,h=l;for(let u=t;u<s;u+=t){let p=n[u],f=n[u+1];p<o&&(o=p),f<l&&(l=f),p>d&&(d=p),f>h&&(h=f)}c=Math.max(d-o,h-l),c=c!==0?32767/c:0}return or(r,a,t,o,l,c,0),a}function uh(n,e,t,i,s){let r;if(s===mp(n,e,t,i)>0)for(let a=e;a<t;a+=i)r=vd(a/i|0,n[a],n[a+1],r);else for(let a=t-i;a>=e;a-=i)r=vd(a/i|0,n[a],n[a+1],r);return r&&xs(r,r.next)&&(cr(r),r=r.next),r}function Ln(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(xs(t,t.next)||At(t.prev,t,t.next)===0)){if(cr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function or(n,e,t,i,s,r,a){if(!n)return;!a&&r&&cp(n,i,s,r);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?tp(n,i,s,r):ep(n)){e.push(l.i,n.i,c.i),cr(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=ip(Ln(n),e),or(n,e,t,i,s,r,2)):a===2&&np(n,e,t,i,s,r):or(Ln(n),e,t,i,s,r,1);break}}}function ep(n){let e=n.prev,t=n,i=n.next;if(At(e,t,i)>=0)return!1;let s=e.x,r=t.x,a=i.x,o=e.y,l=t.y,c=i.y,d=Math.min(s,r,a),h=Math.min(o,l,c),u=Math.max(s,r,a),p=Math.max(o,l,c),f=i.next;for(;f!==e;){if(f.x>=d&&f.x<=u&&f.y>=h&&f.y<=p&&Os(s,o,r,l,a,c,f.x,f.y)&&At(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function tp(n,e,t,i){let s=n.prev,r=n,a=n.next;if(At(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,d=s.y,h=r.y,u=a.y,p=Math.min(o,l,c),f=Math.min(d,h,u),_=Math.max(o,l,c),g=Math.max(d,h,u),m=kl(p,f,e,t,i),v=kl(_,g,e,t,i),w=n.prevZ,b=n.nextZ;for(;w&&w.z>=m&&b&&b.z<=v;){if(w.x>=p&&w.x<=_&&w.y>=f&&w.y<=g&&w!==s&&w!==a&&Os(o,d,l,h,c,u,w.x,w.y)&&At(w.prev,w,w.next)>=0||(w=w.prevZ,b.x>=p&&b.x<=_&&b.y>=f&&b.y<=g&&b!==s&&b!==a&&Os(o,d,l,h,c,u,b.x,b.y)&&At(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;w&&w.z>=m;){if(w.x>=p&&w.x<=_&&w.y>=f&&w.y<=g&&w!==s&&w!==a&&Os(o,d,l,h,c,u,w.x,w.y)&&At(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=_&&b.y>=f&&b.y<=g&&b!==s&&b!==a&&Os(o,d,l,h,c,u,b.x,b.y)&&At(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function ip(n,e){let t=n;do{let i=t.prev,s=t.next.next;!xs(i,s)&&fh(i,t,t.next,s)&&lr(i,s)&&lr(s,i)&&(e.push(i.i,t.i,s.i),cr(t),cr(t.next),t=n=s),t=t.next}while(t!==n);return Ln(t)}function np(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&up(a,o)){let l=mh(a,o);a=Ln(a,a.next),l=Ln(l,l.next),or(a,e,t,i,s,r,0),or(l,e,t,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function sp(n,e,t,i){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*i,l=r<a-1?e[r+1]*i:n.length,c=uh(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(hp(c))}s.sort(rp);for(let r=0;r<s.length;r++)t=ap(s[r],t);return t}function rp(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function ap(n,e){let t=op(n,e);if(!t)return e;let i=mh(t,n);return Ln(i,i.next),Ln(t,t.next)}function op(n,e){let t=e,i=n.x,s=n.y,r=-1/0,a;if(xs(n,t))return t;do{if(xs(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let h=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=i&&h>r&&(r=h,a=t.x<t.next.x?t:t.next,h===i))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,d=1/0;t=a;do{if(i>=t.x&&t.x>=l&&i!==t.x&&ph(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let h=Math.abs(s-t.y)/(i-t.x);lr(t,n)&&(h<d||h===d&&(t.x>a.x||t.x===a.x&&lp(a,t)))&&(a=t,d=h)}t=t.next}while(t!==o);return a}function lp(n,e){return At(n.prev,n,e.prev)<0&&At(e.next,n,n.next)<0}function cp(n,e,t,i){let s=n;do s.z===0&&(s.z=kl(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,dp(s)}function dp(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let a=i,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,t*=2}while(e>1);return n}function kl(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function hp(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function ph(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function Os(n,e,t,i,s,r,a,o){return!(n===a&&e===o)&&ph(n,e,t,i,s,r,a,o)}function up(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!pp(n,e)&&(lr(n,e)&&lr(e,n)&&fp(n,e)&&(At(n.prev,n,e.prev)||At(n,e.prev,e))||xs(n,e)&&At(n.prev,n,n.next)>0&&At(e.prev,e,e.next)>0)}function At(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function xs(n,e){return n.x===e.x&&n.y===e.y}function fh(n,e,t,i){let s=sa(At(n,e,t)),r=sa(At(n,e,i)),a=sa(At(t,i,n)),o=sa(At(t,i,e));return!!(s!==r&&a!==o||s===0&&na(n,t,e)||r===0&&na(n,i,e)||a===0&&na(t,n,i)||o===0&&na(t,e,i))}function na(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function sa(n){return n>0?1:n<0?-1:0}function pp(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&fh(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function lr(n,e){return At(n.prev,n,n.next)<0?At(n,e,n.next)>=0&&At(n,n.prev,e)>=0:At(n,e,n.prev)<0||At(n,n.next,e)<0}function fp(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function mh(n,e){let t=Bl(n.i,n.x,n.y),i=Bl(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function vd(n,e,t,i){let s=Bl(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function cr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Bl(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function mp(n,e,t,i){let s=0;for(let r=e,a=t-i;r<t;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var Ul=class{static triangulate(e,t,i=2){return ju(e,t,i)}},Ii=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];yd(e),bd(i,e);let a=e.length;t.forEach(yd);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,bd(i,t[l]);let o=Ul.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function yd(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function bd(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Fi=class n extends It{constructor(e=new fi([new fe(.5,.5),new fe(-.5,.5),new fe(-.5,-.5),new fe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new st(s,3)),this.setAttribute("uv",new st(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,d=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:gp,w,b=!1,C,E,x,S;if(m){w=m.getSpacedPoints(d),b=!0,u=!1;let ne=m.isCatmullRomCurve3?m.closed:!1;C=m.computeFrenetFrames(d,ne),E=new O,x=new O,S=new O}u||(g=0,p=0,f=0,_=0);let P=o.extractPoints(c),A=P.shape,R=P.holes;if(!Ii.isClockWise(A)){A=A.reverse();for(let ne=0,pe=R.length;ne<pe;ne++){let ue=R[ne];Ii.isClockWise(ue)&&(R[ne]=ue.reverse())}}function z(ne){let ue=10000000000000001e-36,Ae=ne[0];for(let _e=1;_e<=ne.length;_e++){let Xe=_e%ne.length,Ne=ne[Xe],nt=Ne.x-Ae.x,rt=Ne.y-Ae.y,ot=nt*nt+rt*rt,k=Math.max(Math.abs(Ne.x),Math.abs(Ne.y),Math.abs(Ae.x),Math.abs(Ae.y)),St=ue*k*k;if(ot<=St){ne.splice(Xe,1),_e--;continue}Ae=Ne}}z(A),R.forEach(z);let L=R.length,U=A;for(let ne=0;ne<L;ne++){let pe=R[ne];A=A.concat(pe)}function V(ne,pe,ue){return pe||Ge("ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(pe,ue)}let H=A.length;function re(ne,pe,ue){let Ae,_e,Xe,Ne=ne.x-pe.x,nt=ne.y-pe.y,rt=ue.x-ne.x,ot=ue.y-ne.y,k=Ne*Ne+nt*nt,St=Ne*ot-nt*rt;if(Math.abs(St)>Number.EPSILON){let Ye=Math.sqrt(k),gt=Math.sqrt(rt*rt+ot*ot),ge=pe.x-nt/Ye,q=pe.y+Ne/Ye,ie=ue.x-ot/gt,le=ue.y+rt/gt,T=((ie-ge)*ot-(le-q)*rt)/(Ne*ot-nt*rt);Ae=ge+Ne*T-ne.x,_e=q+nt*T-ne.y;let y=Ae*Ae+_e*_e;if(y<=2)return new fe(Ae,_e);Xe=Math.sqrt(y/2)}else{let Ye=!1;Ne>Number.EPSILON?rt>Number.EPSILON&&(Ye=!0):Ne<-Number.EPSILON?rt<-Number.EPSILON&&(Ye=!0):Math.sign(nt)===Math.sign(ot)&&(Ye=!0),Ye?(Ae=-nt,_e=Ne,Xe=Math.sqrt(k)):(Ae=Ne,_e=nt,Xe=Math.sqrt(k/2))}return new fe(Ae/Xe,_e/Xe)}let Z=[];for(let ne=0,pe=U.length,ue=pe-1,Ae=ne+1;ne<pe;ne++,ue++,Ae++)ue===pe&&(ue=0),Ae===pe&&(Ae=0),Z[ne]=re(U[ne],U[ue],U[Ae]);let te=[],se,Me=Z.concat();for(let ne=0,pe=L;ne<pe;ne++){let ue=R[ne];se=[];for(let Ae=0,_e=ue.length,Xe=_e-1,Ne=Ae+1;Ae<_e;Ae++,Xe++,Ne++)Xe===_e&&(Xe=0),Ne===_e&&(Ne=0),se[Ae]=re(ue[Ae],ue[Xe],ue[Ne]);te.push(se),Me=Me.concat(se)}let Ie;if(g===0)Ie=Ii.triangulateShape(U,R);else{let ne=[],pe=[];for(let ue=0;ue<g;ue++){let Ae=ue/g,_e=p*Math.cos(Ae*Math.PI/2),Xe=f*Math.sin(Ae*Math.PI/2)+_;for(let Ne=0,nt=U.length;Ne<nt;Ne++){let rt=V(U[Ne],Z[Ne],Xe);Ue(rt.x,rt.y,-_e),Ae===0&&ne.push(rt)}for(let Ne=0,nt=L;Ne<nt;Ne++){let rt=R[Ne];se=te[Ne];let ot=[];for(let k=0,St=rt.length;k<St;k++){let Ye=V(rt[k],se[k],Xe);Ue(Ye.x,Ye.y,-_e),Ae===0&&ot.push(Ye)}Ae===0&&pe.push(ot)}}Ie=Ii.triangulateShape(ne,pe)}let Q=Ie.length,me=f+_;for(let ne=0;ne<H;ne++){let pe=u?V(A[ne],Me[ne],me):A[ne];b?(x.copy(C.normals[0]).multiplyScalar(pe.x),E.copy(C.binormals[0]).multiplyScalar(pe.y),S.copy(w[0]).add(x).add(E),Ue(S.x,S.y,S.z)):Ue(pe.x,pe.y,0)}for(let ne=1;ne<=d;ne++)for(let pe=0;pe<H;pe++){let ue=u?V(A[pe],Me[pe],me):A[pe];b?(x.copy(C.normals[ne]).multiplyScalar(ue.x),E.copy(C.binormals[ne]).multiplyScalar(ue.y),S.copy(w[ne]).add(x).add(E),Ue(S.x,S.y,S.z)):Ue(ue.x,ue.y,h/d*ne)}for(let ne=g-1;ne>=0;ne--){let pe=ne/g,ue=p*Math.cos(pe*Math.PI/2),Ae=f*Math.sin(pe*Math.PI/2)+_;for(let _e=0,Xe=U.length;_e<Xe;_e++){let Ne=V(U[_e],Z[_e],Ae);Ue(Ne.x,Ne.y,h+ue)}for(let _e=0,Xe=R.length;_e<Xe;_e++){let Ne=R[_e];se=te[_e];for(let nt=0,rt=Ne.length;nt<rt;nt++){let ot=V(Ne[nt],se[nt],Ae);b?Ue(ot.x,ot.y+w[d-1].y,w[d-1].x+ue):Ue(ot.x,ot.y,h+ue)}}}Ce(),Be();function Ce(){let ne=s.length/3;if(u){let pe=0,ue=H*pe;for(let Ae=0;Ae<Q;Ae++){let _e=Ie[Ae];vt(_e[2]+ue,_e[1]+ue,_e[0]+ue)}pe=d+g*2,ue=H*pe;for(let Ae=0;Ae<Q;Ae++){let _e=Ie[Ae];vt(_e[0]+ue,_e[1]+ue,_e[2]+ue)}}else{for(let pe=0;pe<Q;pe++){let ue=Ie[pe];vt(ue[2],ue[1],ue[0])}for(let pe=0;pe<Q;pe++){let ue=Ie[pe];vt(ue[0]+H*d,ue[1]+H*d,ue[2]+H*d)}}i.addGroup(ne,s.length/3-ne,0)}function Be(){let ne=s.length/3,pe=0;ye(U,pe),pe+=U.length;for(let ue=0,Ae=R.length;ue<Ae;ue++){let _e=R[ue];ye(_e,pe),pe+=_e.length}i.addGroup(ne,s.length/3-ne,1)}function ye(ne,pe){let ue=ne.length;for(;--ue>=0;){let Ae=ue,_e=ue-1;_e<0&&(_e=ne.length-1);for(let Xe=0,Ne=d+g*2;Xe<Ne;Xe++){let nt=H*Xe,rt=H*(Xe+1),ot=pe+Ae+nt,k=pe+_e+nt,St=pe+_e+rt,Ye=pe+Ae+rt;Oe(ot,k,St,Ye)}}}function Ue(ne,pe,ue){l.push(ne),l.push(pe),l.push(ue)}function vt(ne,pe,ue){qe(ne),qe(pe),qe(ue);let Ae=s.length/3,_e=v.generateTopUV(i,s,Ae-3,Ae-2,Ae-1);Je(_e[0]),Je(_e[1]),Je(_e[2])}function Oe(ne,pe,ue,Ae){qe(ne),qe(pe),qe(Ae),qe(pe),qe(ue),qe(Ae);let _e=s.length/3,Xe=v.generateSideWallUV(i,s,_e-6,_e-3,_e-2,_e-1);Je(Xe[0]),Je(Xe[1]),Je(Xe[3]),Je(Xe[1]),Je(Xe[2]),Je(Xe[3])}function qe(ne){s.push(l[ne*3+0]),s.push(l[ne*3+1]),s.push(l[ne*3+2])}function Je(ne){r.push(ne.x),r.push(ne.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return xp(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];i.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Fl[s.type]().fromJSON(s)),new n(i,e.options)}},gp={generateTopUV:function(n,e,t,i,s){let r=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[s*3],d=e[s*3+1];return[new fe(r,a),new fe(o,l),new fe(c,d)]},generateSideWallUV:function(n,e,t,i,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],d=e[i*3+1],h=e[i*3+2],u=e[s*3],p=e[s*3+1],f=e[s*3+2],_=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(o-d)<Math.abs(a-c)?[new fe(a,1-l),new fe(c,1-h),new fe(u,1-f),new fe(_,1-m)]:[new fe(o,1-l),new fe(d,1-h),new fe(p,1-f),new fe(g,1-m)]}};function xp(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var ki=class n extends tr{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var ji=class n extends tr{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},mi=class n extends It{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,d=l+1,h=e/o,u=t/l,p=[],f=[],_=[],g=[];for(let m=0;m<d;m++){let v=m*u-a;for(let w=0;w<c;w++){let b=w*h-r;f.push(b,-v,0),_.push(0,0,1),g.push(w/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<o;v++){let w=v+c*m,b=v+c*(m+1),C=v+1+c*(m+1),E=v+1+c*m;p.push(w,b,E),p.push(b,C,E)}this.setIndex(p),this.setAttribute("position",new st(f,3)),this.setAttribute("normal",new st(_,3)),this.setAttribute("uv",new st(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Dn=class n extends It{constructor(e=.5,t=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],c=[],d=[],h=e,u=(t-e)/s,p=new O,f=new fe;for(let _=0;_<=s;_++){for(let g=0;g<=i;g++){let m=r+g/i*a;p.x=h*Math.cos(m),p.y=h*Math.sin(m),l.push(p.x,p.y,p.z),c.push(0,0,1),f.x=(p.x/t+1)/2,f.y=(p.y/t+1)/2,d.push(f.x,f.y)}h+=u}for(let _=0;_<s;_++){let g=_*(i+1);for(let m=0;m<i;m++){let v=m+g,w=v,b=v+i+1,C=v+i+2,E=v+1;o.push(w,b,E),o.push(b,C,E)}}this.setIndex(o),this.setAttribute("position",new st(l,3)),this.setAttribute("normal",new st(c,3)),this.setAttribute("uv",new st(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},dr=class n extends It{constructor(e=new fi([new fe(0,.5),new fe(-.5,-.5),new fe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let d=0;d<e.length;d++)c(e[d]),this.addGroup(o,l,d),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new st(s,3)),this.setAttribute("normal",new st(r,3)),this.setAttribute("uv",new st(a,2));function c(d){let h=s.length/3,u=d.extractPoints(t),p=u.shape,f=u.holes;Ii.isClockWise(p)===!1&&(p=p.reverse());for(let g=0,m=f.length;g<m;g++){let v=f[g];Ii.isClockWise(v)===!0&&(f[g]=v.reverse())}let _=Ii.triangulateShape(p,f);for(let g=0,m=f.length;g<m;g++){let v=f[g];p=p.concat(v)}for(let g=0,m=p.length;g<m;g++){let v=p[g];s.push(v.x,v.y,0),r.push(0,0,1),a.push(v.x,v.y)}for(let g=0,m=_.length;g<m;g++){let v=_[g],w=v[0]+h,b=v[1]+h,C=v[2]+h;i.push(w,b,C),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return vp(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];i.push(a)}return new n(i,e.curveSegments)}};function vp(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}var ti=class n extends It{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,d=[],h=new O,u=new O,p=[],f=[],_=[],g=[];for(let m=0;m<=i;m++){let v=[],w=m/i,b=a+w*o,C=e*Math.cos(b),E=Math.sqrt(e*e-C*C),x=0;m===0&&a===0?x=.5/t:m===i&&l===Math.PI&&(x=-.5/t);for(let S=0;S<=t;S++){let P=S/t,A=s+P*r;h.x=-E*Math.cos(A),h.y=C,h.z=E*Math.sin(A),f.push(h.x,h.y,h.z),u.copy(h).normalize(),_.push(u.x,u.y,u.z),g.push(P+x,1-w),v.push(c++)}d.push(v)}for(let m=0;m<i;m++)for(let v=0;v<t;v++){let w=d[m][v+1],b=d[m][v],C=d[m+1][v],E=d[m+1][v+1];(m!==0||a>0)&&p.push(w,b,E),(m!==i-1||l<Math.PI)&&p.push(b,C,E)}this.setIndex(p),this.setAttribute("position",new st(f,3)),this.setAttribute("normal",new st(_,3)),this.setAttribute("uv",new st(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ht=class n extends It{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],d=[],h=[],u=new O,p=new O,f=new O;for(let _=0;_<=i;_++){let g=a+_/i*o;for(let m=0;m<=s;m++){let v=m/s*r;p.x=(e+t*Math.cos(g))*Math.cos(v),p.y=(e+t*Math.cos(g))*Math.sin(v),p.z=t*Math.sin(g),c.push(p.x,p.y,p.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),f.subVectors(p,u).normalize(),d.push(f.x,f.y,f.z),h.push(m/s),h.push(_/i)}}for(let _=1;_<=i;_++)for(let g=1;g<=s;g++){let m=(s+1)*_+g-1,v=(s+1)*(_-1)+g-1,w=(s+1)*(_-1)+g,b=(s+1)*_+g;l.push(m,v,b),l.push(v,w,b)}this.setIndex(l),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(d,3)),this.setAttribute("uv",new st(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function On(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(_d(s))s.isRenderTargetTexture?(He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(_d(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Kt(n){let e={};for(let t=0;t<n.length;t++){let i=On(n[t]);for(let s in i)e[s]=i[s]}return e}function _d(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function yp(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function xc(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}var gh={clone:On,merge:Kt},bp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_p=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Bi=class extends gn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bp,this.fragmentShader=_p,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=On(e.uniforms),this.uniformsGroups=yp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new $e().setHex(s.value);break;case"v2":this.uniforms[i].value=new fe().fromArray(s.value);break;case"v3":this.uniforms[i].value=new O().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Tt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new We().fromArray(s.value);break;case"m4":this.uniforms[i].value=new bt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},La=class extends Bi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Qe=class extends gn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=No,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ki,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Da=class extends gn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Na=class extends gn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ss(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function ra(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var vn=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];i:{e:{let a;t:{n:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break i}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Fa=class extends vn{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ll,endingEnd:Ll}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Dl:r=e,o=2*t-i;break;case Nl:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Dl:a=e,l=2*i-t;break;case Nl:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,d=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,p=this._weightNext,f=(i-t)/(s-t),_=f*f,g=_*f,m=-u*g+2*u*_-u*f,v=(1+u)*g+(-1.5-2*u)*_+(-.5+u)*f+1,w=(-1-p)*g+(1.5+p)*_+.5*f,b=p*g-p*_;for(let C=0;C!==o;++C)r[C]=m*a[d+C]+v*a[c+C]+w*a[l+C]+b*a[h+C];return r}},ka=class extends vn{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=(i-t)/(s-t),h=1-d;for(let u=0;u!==o;++u)r[u]=a[c+u]*h+a[l+u]*d;return r}},Ba=class extends vn{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ua=class extends vn{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=this.inTangents,h=this.outTangents;if(!d||!h){let f=(i-t)/(s-t),_=1-f;for(let g=0;g!==o;++g)r[g]=a[c+g]*_+a[l+g]*f;return r}let u=o*2,p=e-1;for(let f=0;f!==o;++f){let _=a[c+f],g=a[l+f],m=p*u+f*2,v=h[m],w=h[m+1],b=e*u+f*2,C=d[b],E=d[b+1],x=Mp(i,t,v,C,s);r[f]=xh(x,_,w,E,g)}return r}};function xh(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function Sp(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function Mp(n,e,t,i,s){let r=(n-e)/(s-e);for(let a=0;a<8;a++){let o=xh(r,e,t,i,s)-n;if(Math.abs(o)<1e-10)break;let l=Sp(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var li=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ss(t,this.TimeBufferType),this.values=ss(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ss(e.times,Array),values:ss(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),ra(e.settings)&&(i.settings={inTangents:ss(e.settings.inTangents,Array),outTangents:ss(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ba(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ka(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Fa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ua(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Vs:t=this.InterpolantFactoryMethodDiscrete;break;case va:t=this.InterpolantFactoryMethodLinear;break;case la:t=this.InterpolantFactoryMethodSmooth;break;case Il:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return He("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vs;case this.InterpolantFactoryMethodLinear:return va;case this.InterpolantFactoryMethodSmooth:return la;case this.InterpolantFactoryMethodBezier:return Il}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;ra(this.settings)&&(Sd(this.settings.inTangents,e),Sd(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;ra(this.settings)&&(Md(this.settings.inTangents,e),Md(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ge("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Ge("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Ge("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ge("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&wu(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ge("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===la,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],d=e[o+1];if(c!==d&&(o!==1||c!==e[0]))if(s)l=!0;else{let h=o*i,u=h-i,p=h+i;for(let f=0;f!==i;++f){let _=t[h+f];if(_!==t[u+f]||_!==t[p+f]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*i,u=a*i;for(let p=0;p!==i;++p)t[u+p]=t[h+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,ra(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Sd(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function Md(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}li.prototype.ValueTypeName="";li.prototype.TimeBufferType=Float32Array;li.prototype.ValueBufferType=Float32Array;li.prototype.DefaultInterpolation=va;var yn=class extends li{constructor(e,t,i){super(e,t,i)}};yn.prototype.ValueTypeName="bool";yn.prototype.ValueBufferType=Array;yn.prototype.DefaultInterpolation=Vs;yn.prototype.InterpolantFactoryMethodLinear=void 0;yn.prototype.InterpolantFactoryMethodSmooth=void 0;var Oa=class extends li{constructor(e,t,i,s){super(e,t,i,s)}};Oa.prototype.ValueTypeName="color";var za=class extends li{constructor(e,t,i,s){super(e,t,i,s)}};za.prototype.ValueTypeName="number";var Ha=class extends vn{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let d=c+o;c!==d;c+=4)Di.slerpFlat(r,0,a,c-o,a,c,l);return r}},hr=class extends li{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Ha(this.times,this.values,this.getValueSize(),e)}};hr.prototype.ValueTypeName="quaternion";hr.prototype.InterpolantFactoryMethodSmooth=void 0;var bn=class extends li{constructor(e,t,i){super(e,t,i)}};bn.prototype.ValueTypeName="string";bn.prototype.ValueBufferType=Array;bn.prototype.DefaultInterpolation=Vs;bn.prototype.InterpolantFactoryMethodLinear=void 0;bn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ga=class extends li{constructor(e,t,i,s){super(e,t,i,s)}};Ga.prototype.ValueTypeName="vector";var Va=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(d){o++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,h){return c.push(d,h),this},this.removeHandler=function(d){let h=c.indexOf(d);return h!==-1&&c.splice(h,2),this},this.getHandler=function(d){for(let h=0,u=c.length;h<u;h+=2){let p=c[h],f=c[h+1];if(p.global&&(p.lastIndex=0),p.test(d))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},vh=new Va,Wa=class{constructor(e){this.manager=e!==void 0?e:vh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Wa.DEFAULT_MATERIAL_NAME="__DEFAULT";var vs=class extends Jt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ys=class extends vs{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Pl=new bt,wd=new O,Td=new O,ur=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.mapType=ii,this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xn,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;wd.setFromMatrixPosition(e.matrixWorld),t.position.copy(wd),Td.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Td),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Pl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Pl,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===cs||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Pl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},aa=new O,oa=new Di,Ri=new O,pr=class extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(aa,oa,Ri),Ri.x===1&&Ri.y===1&&Ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(aa,oa,Ri.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(aa,oa,Ri),Ri.x===1&&Ri.y===1&&Ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(aa,oa,Ri.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},pn=new O,Ed=new fe,Ad=new fe,$t=class extends pr{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ya*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(al*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ya*2*Math.atan(Math.tan(al*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){pn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(pn.x,pn.y).multiplyScalar(-e/pn.z),pn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(pn.x,pn.y).multiplyScalar(-e/pn.z)}getViewSize(e,t){return this.getViewBounds(e,Ed,Ad),t.subVectors(Ad,Ed)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(al*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Ol=class extends ur{constructor(){super(new $t(90,1,.5,500)),this.isPointLightShadow=!0}},Nn=class extends vs{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Ol}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},fr=class extends pr{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},zl=class extends ur{constructor(){super(new fr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ui=class extends vs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.target=new Jt,this.shadow=new zl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var rs=-90,as=1,bs=class extends Jt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new $t(rs,as,e,t);s.layers=this.layers,this.add(s);let r=new $t(rs,as,e,t);r.layers=this.layers,this.add(r);let a=new $t(rs,as,e,t);a.layers=this.layers,this.add(a);let o=new $t(rs,as,e,t);o.layers=this.layers,this.add(o);let l=new $t(rs,as,e,t);l.layers=this.layers,this.add(l);let c=new $t(rs,as,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===ui)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===cs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,d]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=_,e.setRenderTarget(i,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(h,u,p),e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}},Xa=class extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var vc="\\[\\]\\.:\\/",wp=new RegExp("["+vc+"]","g"),yc="[^"+vc+"]",Tp="[^"+vc.replace("\\.","")+"]",Ep=/((?:WC+[\/:])*)/.source.replace("WC",yc),Ap=/(WCOD+)?/.source.replace("WCOD",Tp),Cp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yc),Rp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yc),Pp=new RegExp("^"+Ep+Ap+Cp+Rp+"$"),Ip=["material","materials","bones","map"],Hl=class{constructor(e,t,i){let s=i||wt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},wt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(wp,"")}static parseTrackName(e){let t=Pp.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Ip.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){He("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ge("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ge("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ge("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ge("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Ge("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Ge("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};wt.Composite=Hl;wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};wt.prototype.GetterByBindingType=[wt.prototype._getValue_direct,wt.prototype._getValue_array,wt.prototype._getValue_arrayElement,wt.prototype._getValue_toArray];wt.prototype.SetterByBindingTypeAndVersioning=[[wt.prototype._setValue_direct,wt.prototype._setValue_direct_setNeedsUpdate,wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_array,wt.prototype._setValue_array_setNeedsUpdate,wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_arrayElement,wt.prototype._setValue_arrayElement_setNeedsUpdate,wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_fromArray,wt.prototype._setValue_fromArray_setNeedsUpdate,wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Hx=new Float32Array(1);var Tc=class Tc{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};Tc.prototype.isMatrix2=!0;var Gl=Tc;function bc(n,e,t,i){let s=Lp(i);switch(t){case oc:return n*e;case cc:return n*e/s.components*s.byteLength;case eo:return n*e/s.components*s.byteLength;case Sn:return n*e*2/s.components*s.byteLength;case to:return n*e*2/s.components*s.byteLength;case lc:return n*e*3/s.components*s.byteLength;case Ei:return n*e*4/s.components*s.byteLength;case io:return n*e*4/s.components*s.byteLength;case vr:case yr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case br:case _r:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case so:case ao:return Math.max(n,16)*Math.max(e,8)/4;case no:case ro:return Math.max(n,8)*Math.max(e,8)/2;case oo:case lo:case ho:case uo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case co:case Sr:case po:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case fo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case mo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case go:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case xo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case vo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case yo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case bo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case _o:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case So:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Mo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case wo:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case To:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Eo:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ao:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Co:case Ro:case Po:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Io:case Lo:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Mr:case Do:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Lp(n){switch(n){case ii:case nc:return{byteLength:1,components:1};case ws:case sc:case Ti:return{byteLength:2,components:1};case Qa:case ja:return{byteLength:2,components:4};case Mi:case Ka:case wi:return{byteLength:4,components:1};case rc:case ac:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?He("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function zh(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Hp(n){let e=new WeakMap;function t(o,l){let c=o.array,d=o.usage,h=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,d),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){let d=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,d);else{h.sort((p,f)=>p.start-f.start);let u=0;for(let p=1;p<h.length;p++){let f=h[u],_=h[p];_.start<=f.start+f.count+1?f.count=Math.max(f.count,_.start+_.count-f.start):(++u,h[u]=_)}h.length=u+1;for(let p=0,f=h.length;p<f;p++){let _=h[p];n.bufferSubData(c,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Gp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Wp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$p=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Kp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ef=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,tf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,nf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,rf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,af=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,of=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,cf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,df=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,hf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,uf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,pf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,ff=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vf="gl_FragColor = linearToOutputTexel( gl_FragColor );",yf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,_f=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Sf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Mf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Tf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ef=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Af=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Pf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,If=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Df=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
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
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Nf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Ff=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Uf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Of=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Hf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Gf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Vf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wf=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Xf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$f=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Qf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,em=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,im=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,rm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,am=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,om=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,hm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,um=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,vm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ym=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_m=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Tm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Em=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Am=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Cm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Pm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Im=`#ifdef USE_SKINNING
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
#endif`,Lm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,km=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Bm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Hm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Gm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xm=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ym=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,$m=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Jm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Km=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ig=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ng=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
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
}`,rg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ag=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,og=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
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
}`,hg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ug=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
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
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,pg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
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
}`,mg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
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
}`,xg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,_g=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tt={alphahash_fragment:Gp,alphahash_pars_fragment:Vp,alphamap_fragment:Wp,alphamap_pars_fragment:Xp,alphatest_fragment:qp,alphatest_pars_fragment:Yp,aomap_fragment:Zp,aomap_pars_fragment:$p,batching_pars_vertex:Jp,batching_vertex:Kp,begin_vertex:Qp,beginnormal_vertex:jp,bsdfs:ef,iridescence_fragment:tf,bumpmap_pars_fragment:nf,clipping_planes_fragment:sf,clipping_planes_pars_fragment:rf,clipping_planes_pars_vertex:af,clipping_planes_vertex:of,color_fragment:lf,color_pars_fragment:cf,color_pars_vertex:df,color_vertex:hf,common:uf,defaultnormal_vertex:pf,displacementmap_pars_vertex:ff,displacementmap_vertex:mf,emissivemap_fragment:gf,emissivemap_pars_fragment:xf,colorspace_fragment:vf,colorspace_pars_fragment:yf,envmap_fragment:bf,envmap_common_pars_fragment:_f,envmap_pars_fragment:Sf,envmap_pars_vertex:Mf,envmap_physical_pars_fragment:Nf,envmap_vertex:wf,fog_vertex:Tf,fog_pars_vertex:Ef,fog_fragment:Af,fog_pars_fragment:Cf,gradientmap_pars_fragment:Rf,lightmap_pars_fragment:Pf,lights_lambert_fragment:If,lights_lambert_pars_fragment:Lf,lights_pars_begin:Df,lights_toon_fragment:Ff,lights_toon_pars_fragment:kf,lights_phong_fragment:Bf,lights_phong_pars_fragment:Uf,lights_physical_fragment:Of,lights_physical_pars_fragment:zf,lights_fragment_begin:Hf,lights_fragment_maps:Gf,lights_fragment_end:Vf,lightprobes_pars_fragment:Wf,logdepthbuf_fragment:Xf,logdepthbuf_pars_fragment:qf,logdepthbuf_pars_vertex:Yf,logdepthbuf_vertex:Zf,map_fragment:$f,map_pars_fragment:Jf,map_particle_fragment:Kf,map_particle_pars_fragment:Qf,metalnessmap_fragment:jf,metalnessmap_pars_fragment:em,morphinstance_vertex:tm,morphcolor_vertex:im,morphnormal_vertex:nm,morphtarget_pars_vertex:sm,morphtarget_vertex:rm,normal_fragment_begin:am,normal_fragment_maps:om,normal_pars_fragment:lm,normal_pars_vertex:cm,normal_vertex:dm,normalmap_pars_fragment:hm,clearcoat_normal_fragment_begin:um,clearcoat_normal_fragment_maps:pm,clearcoat_pars_fragment:fm,iridescence_pars_fragment:mm,opaque_fragment:gm,packing:xm,premultiplied_alpha_fragment:vm,project_vertex:ym,dithering_fragment:bm,dithering_pars_fragment:_m,roughnessmap_fragment:Sm,roughnessmap_pars_fragment:Mm,shadowmap_pars_fragment:wm,shadowmap_pars_vertex:Tm,shadowmap_vertex:Em,shadowmask_pars_fragment:Am,skinbase_vertex:Cm,skinning_pars_vertex:Rm,skinning_vertex:Pm,skinnormal_vertex:Im,specularmap_fragment:Lm,specularmap_pars_fragment:Dm,tonemapping_fragment:Nm,tonemapping_pars_fragment:Fm,transmission_fragment:km,transmission_pars_fragment:Bm,uv_pars_fragment:Um,uv_pars_vertex:Om,uv_vertex:zm,worldpos_vertex:Hm,background_vert:Gm,background_frag:Vm,backgroundCube_vert:Wm,backgroundCube_frag:Xm,cube_vert:qm,cube_frag:Ym,depth_vert:Zm,depth_frag:$m,distance_vert:Jm,distance_frag:Km,equirect_vert:Qm,equirect_frag:jm,linedashed_vert:eg,linedashed_frag:tg,meshbasic_vert:ig,meshbasic_frag:ng,meshlambert_vert:sg,meshlambert_frag:rg,meshmatcap_vert:ag,meshmatcap_frag:og,meshnormal_vert:lg,meshnormal_frag:cg,meshphong_vert:dg,meshphong_frag:hg,meshphysical_vert:ug,meshphysical_frag:pg,meshtoon_vert:fg,meshtoon_frag:mg,points_vert:gg,points_frag:xg,shadow_vert:vg,shadow_frag:yg,sprite_vert:bg,sprite_frag:_g},Te={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Hi={basic:{uniforms:Kt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:Kt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new $e(0)},envMapIntensity:{value:1}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:Kt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:Kt([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:Kt([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new $e(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:Kt([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:Kt([Te.points,Te.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:Kt([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:Kt([Te.common,Te.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:Kt([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:Kt([Te.sprite,Te.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distance:{uniforms:Kt([Te.common,Te.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distance_vert,fragmentShader:tt.distance_frag},shadow:{uniforms:Kt([Te.lights,Te.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};Hi.physical={uniforms:Kt([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new We},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};var Fo={r:0,b:0,g:0},Sg=new bt,Hh=new We;Hh.set(-1,0,0,0,1,0,0,0,1);function Mg(n,e,t,i,s,r){let a=new $e(0),o=s===!0?0:1,l,c,d=null,h=0,u=null;function p(v){let w=v.isScene===!0?v.background:null;if(w&&w.isTexture){let b=v.backgroundBlurriness>0;w=e.get(w,b)}return w}function f(v){let w=!1,b=p(v);b===null?g(a,o):b&&b.isColor&&(g(b,1),w=!0);let C=n.xr.getEnvironmentBlendMode();C==="additive"?t.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(v,w){let b=p(w);b&&b.isCubeTexture?(c===void 0&&(c=new Ve(new ht(1,1,1),new Bi({name:"BackgroundCubeMaterial",uniforms:On(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,E,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Sg.makeRotationFromEuler(w.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Hh),c.material.toneMapped=dt.getTransfer(b.colorSpace)!==mt,(d!==b||h!==b.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,d=b,h=b.version,u=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Ve(new mi(2,2),new Bi({name:"BackgroundMaterial",uniforms:On(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=dt.getTransfer(b.colorSpace)!==mt,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||h!==b.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,d=b,h=b.version,u=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,w){v.getRGB(Fo,xc(n)),t.buffers.color.setClear(Fo.r,Fo.g,Fo.b,w,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,w=1){a.set(v),o=w,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,g(a,o)},render:f,addToRenderList:_,dispose:m}}function wg(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(R,I,z,L,U){let V=!1,H=h(R,L,z,I);r!==H&&(r=H,c(r.object)),V=p(R,L,z,U),V&&f(R,L,z,U),U!==null&&e.update(U,n.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,b(R,I,z,L),U!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return n.createVertexArray()}function c(R){return n.bindVertexArray(R)}function d(R){return n.deleteVertexArray(R)}function h(R,I,z,L){let U=L.wireframe===!0,V=i[I.id];V===void 0&&(V={},i[I.id]=V);let H=R.isInstancedMesh===!0?R.id:0,re=V[H];re===void 0&&(re={},V[H]=re);let Z=re[z.id];Z===void 0&&(Z={},re[z.id]=Z);let te=Z[U];return te===void 0&&(te=u(l()),Z[U]=te),te}function u(R){let I=[],z=[],L=[];for(let U=0;U<t;U++)I[U]=0,z[U]=0,L[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:z,attributeDivisors:L,object:R,attributes:{},index:null}}function p(R,I,z,L){let U=r.attributes,V=I.attributes,H=0,re=z.getAttributes();for(let Z in re)if(re[Z].location>=0){let se=U[Z],Me=V[Z];if(Me===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(Me=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(Me=R.instanceColor)),se===void 0||se.attribute!==Me||Me&&se.data!==Me.data)return!0;H++}return r.attributesNum!==H||r.index!==L}function f(R,I,z,L){let U={},V=I.attributes,H=0,re=z.getAttributes();for(let Z in re)if(re[Z].location>=0){let se=V[Z];se===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(se=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(se=R.instanceColor));let Me={};Me.attribute=se,se&&se.data&&(Me.data=se.data),U[Z]=Me,H++}r.attributes=U,r.attributesNum=H,r.index=L}function _(){let R=r.newAttributes;for(let I=0,z=R.length;I<z;I++)R[I]=0}function g(R){m(R,0)}function m(R,I){let z=r.newAttributes,L=r.enabledAttributes,U=r.attributeDivisors;z[R]=1,L[R]===0&&(n.enableVertexAttribArray(R),L[R]=1),U[R]!==I&&(n.vertexAttribDivisor(R,I),U[R]=I)}function v(){let R=r.newAttributes,I=r.enabledAttributes;for(let z=0,L=I.length;z<L;z++)I[z]!==R[z]&&(n.disableVertexAttribArray(z),I[z]=0)}function w(R,I,z,L,U,V,H){H===!0?n.vertexAttribIPointer(R,I,z,U,V):n.vertexAttribPointer(R,I,z,L,U,V)}function b(R,I,z,L){_();let U=L.attributes,V=z.getAttributes(),H=I.defaultAttributeValues;for(let re in V){let Z=V[re];if(Z.location>=0){let te=U[re];if(te===void 0&&(re==="instanceMatrix"&&R.instanceMatrix&&(te=R.instanceMatrix),re==="instanceColor"&&R.instanceColor&&(te=R.instanceColor)),te!==void 0){let se=te.normalized,Me=te.itemSize,Ie=e.get(te);if(Ie===void 0)continue;let Q=Ie.buffer,me=Ie.type,Ce=Ie.bytesPerElement,Be=me===n.INT||me===n.UNSIGNED_INT||te.gpuType===Ka;if(te.isInterleavedBufferAttribute){let ye=te.data,Ue=ye.isInterleavedBuffer===!0?ye.stride:ye.itemSize,vt=te.offset;if(ye.isInstancedInterleavedBuffer||ye.isInstancedBufferAttribute){for(let Oe=0;Oe<Z.locationSize;Oe++)m(Z.location+Oe,ye.meshPerAttribute);R.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Oe=0;Oe<Z.locationSize;Oe++)g(Z.location+Oe);n.bindBuffer(n.ARRAY_BUFFER,Q);for(let Oe=0;Oe<Z.locationSize;Oe++)w(Z.location+Oe,Me/Z.locationSize,me,se,Ue*Ce,(vt+Me/Z.locationSize*Oe)*Ce,Be)}else{if(te.isInstancedBufferAttribute){for(let ye=0;ye<Z.locationSize;ye++)m(Z.location+ye,te.meshPerAttribute);R.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ye=0;ye<Z.locationSize;ye++)g(Z.location+ye);n.bindBuffer(n.ARRAY_BUFFER,Q);for(let ye=0;ye<Z.locationSize;ye++)w(Z.location+ye,Me/Z.locationSize,me,se,Me*Ce,Me/Z.locationSize*ye*Ce,Be)}}else if(H!==void 0){let se=H[re];if(se!==void 0)switch(se.length){case 2:n.vertexAttrib2fv(Z.location,se);break;case 3:n.vertexAttrib3fv(Z.location,se);break;case 4:n.vertexAttrib4fv(Z.location,se);break;default:n.vertexAttrib1fv(Z.location,se)}}}}v()}function C(){P();for(let R in i){let I=i[R];for(let z in I){let L=I[z];for(let U in L){let V=L[U];for(let H in V)d(V[H].object),delete V[H];delete L[U]}}delete i[R]}}function E(R){if(i[R.id]===void 0)return;let I=i[R.id];for(let z in I){let L=I[z];for(let U in L){let V=L[U];for(let H in V)d(V[H].object),delete V[H];delete L[U]}}delete i[R.id]}function x(R){for(let I in i){let z=i[I];for(let L in z){let U=z[L];if(U[R.id]===void 0)continue;let V=U[R.id];for(let H in V)d(V[H].object),delete V[H];delete U[R.id]}}}function S(R){for(let I in i){let z=i[I],L=R.isInstancedMesh===!0?R.id:0,U=z[L];if(U!==void 0){for(let V in U){let H=U[V];for(let re in H)d(H[re].object),delete H[re];delete U[V]}delete z[L],Object.keys(z).length===0&&delete i[I]}}}function P(){A(),a=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:A,dispose:C,releaseStatesOfGeometry:E,releaseStatesOfObject:S,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function Tg(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,d){d!==0&&(n.drawArraysInstanced(i,l,c,d),t.update(c,i,d))}function o(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,d);let u=0;for(let p=0;p<d;p++)u+=c[p];t.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Eg(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(x){return!(x!==Ei&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let S=x===Ti&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==ii&&x!==wi&&!S&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",d=l(c);d!==c&&(He("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);let h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&h===!1;t.reversedDepthBuffer===!0&&h===!1&&He("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&h===!0&&He("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:f,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:v,maxVaryings:w,maxFragmentUniforms:b,maxSamples:C,samples:E}}function Ag(n){let e=this,t=null,i=0,s=!1,r=!1,a=new _i,o=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let p=h.length!==0||u||i!==0||s;return s=u,i=h.length,p},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){t=d(h,u,0)},this.setState=function(h,u,p){let f=h.clippingPlanes,_=h.clipIntersection,g=h.clipShadows,m=n.get(h);if(!s||f===null||f.length===0||r&&!g)r?d(null):c();else{let v=r?0:i,w=v*4,b=m.clippingState||null;l.value=b,b=d(f,u,w,p);for(let C=0;C!==w;++C)b[C]=t[C];m.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,u,p,f){let _=h!==null?h.length:0,g=null;if(_!==0){if(g=l.value,f!==!0||g===null){let m=p+_*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<m)&&(g=new Float32Array(m));for(let w=0,b=p;w!==_;++w,b+=4)a.copy(h[w]).applyMatrix4(v,o),a.normal.toArray(g,b),g[b+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}var Er=class extends ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Qs(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ht(5,5,5),r=new Bi({name:"CubemapFromEquirect",uniforms:On(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Vt,blending:Fn});r.uniforms.tEquirect.value=t;let a=new Ve(s,r),o=t.minFilter;return t.minFilter===en&&(t.minFilter=jt),new bs(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},yh=256,Cg=3,Rg=20,Gh=256,Vh=16,Pg=3,Ig=new O,Lg=new $e,Bo=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new bs(1,10,null),this._boxMesh=new Ve(new ht(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=Ig}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),d=this._getSourceTarget(!0);t>0&&(d.texture.mipmapsAutoUpdate=!1);let h=l.autoClear,u=l.autoClearColor,p=l.autoClearDepth,f=l.autoClearStencil,_=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(e.background=l.getClearColor(Lg));let g=new bs(i,s,d);return g.position.copy(o),g.update(l,e),l.autoClear=h,l.autoClearColor=u,l.autoClearDepth=p,l.autoClearStencil=f,e.background=_,t>0&&(d.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_h(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(yh,dh(e))}_fromTexture(e,t){e.mapping===Bn||e.mapping===Ms?this._setSize(e.image.length===0?yh:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=bh(e,!1,!1),i=Math.log2(e)-Cg;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=bh(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Bn||e.mapping===Ms?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sh()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=_h()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Dg(),this._integrationMaterial=Ng());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Vh);for(let a=0;a<=i;a++){let o=n.lodToRoughness(a,i);if(a>i-Pg)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(Gh*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Fg());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function bh(n,e,t){return new Er(n,{minFilter:en,generateMipmaps:e,type:Ti,colorSpace:Ws,depthBuffer:t})}function Ar(n,e,t){return new Bi({name:n,uniforms:e,vertexShader:tt.cube_vert,fragmentShader:t,side:Vt,blending:Fn,depthTest:!1,depthWrite:!1})}function Dg(){return Ar("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Gh}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Ng(){return Ar("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Vh}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Fg(){return Ar("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Rg}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function _h(){return Ar("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Sh(){return Ar("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function kg(n){let e=new WeakMap,t=new WeakMap,i=null;function s(u,p=!1){return u==null?null:p?a(u):r(u)}function r(u){if(u&&u.isTexture){let p=u.mapping;if(p===Za||p===$a)if(e.has(u)){let f=e.get(u).texture;return o(f,u.mapping)}else{let f=u.image;if(f&&f.height>0){let _=new Er(f.height);return _.fromEquirectangularTexture(n,u),e.set(u,_),u.addEventListener("dispose",c),o(_.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let p=u.mapping,f=p===Za||p===$a,_=p===Bn||p===Ms;if(f||_){let g=t.get(u),m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return i===null&&(i=new Bo(n)),g=f?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),g.texture;if(g!==void 0)return g.texture;{let v=u.image;return f&&v&&v.height>0||_&&v&&l(v)?(i===null&&(i=new Bo(n)),g=f?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),u.addEventListener("dispose",d),g.texture):null}}}return u}function o(u,p){return p===Za?u.mapping=Bn:p===$a&&(u.mapping=Ms),u}function l(u){let p=0,f=6;for(let _=0;_<f;_++)u[_]!==void 0&&p++;return p===f}function c(u){let p=u.target;p.removeEventListener("dispose",c);let f=e.get(p);f!==void 0&&(e.delete(p),f.dispose())}function d(u){let p=u.target;p.removeEventListener("dispose",d);let f=t.get(p);f!==void 0&&(t.delete(p),f.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function Bg(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&zs("WebGLRenderer: "+i+" extension not supported."),s}}}function Ug(n,e,t,i){let s={},r=new WeakMap,a=new FinalizationRegistry(f=>delete s[f]);function o(f){l(f.target)}function l(f){f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id],a.unregister(f);let _=r.get(f);_&&(e.remove(_),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function c(f,_){return s[_.id]!==void 0||(_.addEventListener("dispose",o),s[_.id]=new WeakRef(_),a.register(_,_.id,_),t.memory.geometries++),_}function d(f){let _=f.attributes;for(let g in _)e.update(_[g],n.ARRAY_BUFFER)}function h(f){let _=f.index,g=f.attributes.position,m=0;if(g===void 0)return;let v=_!==null?_.array.length:g.array.length/3-1,w=g.count>=65535?Ks:Js,b=new w(Math.ceil(v/3)*6,1),C=b.array;if(_!==null){let x=_.array;m=_.version;for(let S=0,P=0;S<v;S+=3){let A=x[S+0],R=x[S+1],I=x[S+2];C[P++]=A,C[P++]=R,C[P++]=R,C[P++]=I,C[P++]=I,C[P++]=A}}else{m=g.version;for(let x=0,S=0;x<v;x+=3){let P=x+0,A=x+1,R=x+2;C[S++]=P,C[S++]=A,C[S++]=A,C[S++]=R,C[S++]=R,C[S++]=P}}b.version=m;let E=r.get(f);E&&e.remove(E),r.set(f,b)}function u(f){let _=r.get(f);if(_){let g=f.index;g!==null&&_.version<g.version&&h(f)}else h(f);return r.get(f)}function p(){for(let f in s){let _=s[f].deref();_!==void 0&&l(_)}}return{get:c,update:d,getWireframeAttribute:u,dispose:p}}function Og(n,e,t){let i;function s(h){i=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,u){n.drawElements(i,u,r,h*a),t.update(u,i,1)}function c(h,u,p){p!==0&&(n.drawElementsInstanced(i,u,r,h*a,p),t.update(u,i,p))}function d(h,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,h,0,p);let _=0;for(let g=0;g<p;g++)_+=u[g];t.update(_,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function zg(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:Ge("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Hg(n,e,t){let i=new WeakMap,s=new Tt;function r(a,o,l){let c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0,u=i.get(o);if(u===void 0||u.count!==h){let P=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",P)};u!==void 0&&u.texture.dispose();let p=o.morphAttributes.position!==void 0,f=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],w=0;p===!0&&(w=1),f===!0&&(w=2),_===!0&&(w=3);let b=o.attributes.position.count*w,C=1;b>e.maxTextureSize&&(C=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let E=new Float32Array(b*C*4*h),x=new Ys(E,b,C,h);x.type=wi,x.needsUpdate=!0;let S=w*4;for(let A=0;A<h;A++){let R=g[A],I=m[A],z=v[A],L=b*C*4*A;for(let U=0;U<R.count;U++){let V=U*S;p===!0&&(s.fromBufferAttribute(R,U),E[L+V+0]=s.x,E[L+V+1]=s.y,E[L+V+2]=s.z,E[L+V+3]=0),f===!0&&(s.fromBufferAttribute(I,U),E[L+V+4]=s.x,E[L+V+5]=s.y,E[L+V+6]=s.z,E[L+V+7]=0),_===!0&&(s.fromBufferAttribute(z,U),E[L+V+8]=s.x,E[L+V+9]=s.y,E[L+V+10]=s.z,E[L+V+11]=z.itemSize===4?s.w:1)}}u={count:h,texture:x,size:new fe(b,C)},i.set(o,u),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];let f=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",f),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function Gg(n,e,t,i,s){let r=new WeakMap;function a(c){let d=s.render.frame,h=c.geometry,u=e.get(c,h);if(r.get(u)!==d&&(e.update(u),r.set(u,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==d&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==d&&(p.update(),r.set(p,d))}return u}function o(){r=new WeakMap}function l(c){let d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:o}}var Vg={[Jl]:"LINEAR_TONE_MAPPING",[Kl]:"REINHARD_TONE_MAPPING",[Ql]:"CINEON_TONE_MAPPING",[gr]:"ACES_FILMIC_TONE_MAPPING",[ec]:"AGX_TONE_MAPPING",[tc]:"NEUTRAL_TONE_MAPPING",[jl]:"CUSTOM_TONE_MAPPING"};function Wg(n,e,t,i,s,r){let a=new ai(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,d=new It;d.setAttribute("position",new st([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new st([0,2,0,0,2,0],2));let h=new La({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Ve(d,h),p=new fr(-1,1,1,-1,0,1),f=null,_=null,g=!1,m,v=null,w=[],b=!1;this.setSize=function(C,E){a.setSize(C,E),o!==null&&o.setSize(C,E),l!==null&&l.setSize(C,E);for(let x=0;x<w.length;x++){let S=w[x];S.setSize&&S.setSize(C,E)}},this.setEffects=function(C){w=C,b=w.length>0&&w[0].isRenderPass===!0;let E=a.width,x=a.height;w.length>0&&o===null&&(o=new ai(E,x,{type:Ti,depthBuffer:!1,stencilBuffer:!1}),l=new ai(E,x,{type:Ti,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&w.some(P=>P.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&c===null&&(c=new Qi(E,x),r===!0&&(c.format=tn,c.type=Un)),a.dispose(),a.depthTexture=S?c:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let P=0;P<w.length;P++){let A=w[P];A.setSize&&A.setSize(E,x),S&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(C,E){if(g||C.toneMapping===Oi&&w.length===0)return!1;if(v=E,E!==null){let x=E.width,S=E.height;(a.width!==x||a.height!==S)&&this.setSize(x,S)}return b===!1&&C.setRenderTarget(a),m=C.toneMapping,C.toneMapping=Oi,!0},this.hasRenderPass=function(){return b},this.end=function(C,E){C.toneMapping=m,g=!0;let x=a,S=o;for(let P=0;P<w.length;P++){let A=w[P];A.enabled!==!1&&(A.render(C,S,x,E),A.needsSwap!==!1&&(x=S,S=S===o?l:o))}if(f!==C.outputColorSpace||_!==C.toneMapping){f=C.outputColorSpace,_=C.toneMapping,h.defines={},dt.getTransfer(f)===mt&&(h.defines.SRGB_TRANSFER="");let P=Vg[_];P&&(h.defines[P]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=x.texture,C.setRenderTarget(v),C.render(u,p),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),d.dispose(),h.dispose()}}var Wh=new ei,Xh=new Qi(1,1),qh=new js(1),Yh=new Ys,Zh=new Sa,$h=new Qs,Mh=[],wh=[],Th=new Float32Array(16),Eh=new Float32Array(9),Ah=new Float32Array(4);function As(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Mh[s];if(r===void 0&&(r=new Float32Array(s),Mh[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Nt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ft(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Oo(n,e){let t=wh[e];t===void 0&&(t=new Int32Array(e),wh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Xg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function qg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2fv(this.addr,e),Ft(t,e)}}function Yg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;n.uniform3fv(this.addr,e),Ft(t,e)}}function Zg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4fv(this.addr,e),Ft(t,e)}}function $g(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ft(t,e)}else{if(Nt(t,i))return;Ah.set(i),n.uniformMatrix2fv(this.addr,!1,Ah),Ft(t,i)}}function Jg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ft(t,e)}else{if(Nt(t,i))return;Eh.set(i),n.uniformMatrix3fv(this.addr,!1,Eh),Ft(t,i)}}function Kg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ft(t,e)}else{if(Nt(t,i))return;Th.set(i),n.uniformMatrix4fv(this.addr,!1,Th),Ft(t,i)}}function Qg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function jg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2iv(this.addr,e),Ft(t,e)}}function e0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;n.uniform3iv(this.addr,e),Ft(t,e)}}function t0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4iv(this.addr,e),Ft(t,e)}}function i0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function n0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2uiv(this.addr,e),Ft(t,e)}}function s0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;n.uniform3uiv(this.addr,e),Ft(t,e)}}function r0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4uiv(this.addr,e),Ft(t,e)}}function zo(n){return n.version===0&&(n.compareFunction=uc,n.needsUpdate=!0),n}function a0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=zo(Xh):r=Wh,t.setTexture2D(e||r,s)}function o0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Zh,s)}function l0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=zo(qh):r=$h,t.setTextureCube(e||r,s)}function c0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Yh,s)}function d0(n){switch(n){case 5126:return Xg;case 35664:return qg;case 35665:return Yg;case 35666:return Zg;case 35674:return $g;case 35675:return Jg;case 35676:return Kg;case 5124:case 35670:return Qg;case 35667:case 35671:return jg;case 35668:case 35672:return e0;case 35669:case 35673:return t0;case 5125:return i0;case 36294:return n0;case 36295:return s0;case 36296:return r0;case 35678:case 36198:case 36298:case 36306:case 35682:return a0;case 35679:case 36299:case 36307:return o0;case 35680:case 36300:case 36308:case 36293:return l0;case 36289:case 36303:case 36311:case 36292:return c0}}function h0(n,e){n.uniform1fv(this.addr,e)}function u0(n,e){let t=As(e,this.size,2);n.uniform2fv(this.addr,t)}function p0(n,e){let t=As(e,this.size,3);n.uniform3fv(this.addr,t)}function f0(n,e){let t=As(e,this.size,4);n.uniform4fv(this.addr,t)}function m0(n,e){let t=As(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function g0(n,e){let t=As(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function x0(n,e){let t=As(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function v0(n,e){n.uniform1iv(this.addr,e)}function y0(n,e){n.uniform2iv(this.addr,e)}function b0(n,e){n.uniform3iv(this.addr,e)}function _0(n,e){n.uniform4iv(this.addr,e)}function S0(n,e){n.uniform1uiv(this.addr,e)}function M0(n,e){n.uniform2uiv(this.addr,e)}function w0(n,e){n.uniform3uiv(this.addr,e)}function T0(n,e){n.uniform4uiv(this.addr,e)}function E0(n,e,t){let i=this.cache,s=e.length,r=Oo(t,s);Nt(i,r)||(n.uniform1iv(this.addr,r),Ft(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=zo(Xh):a=Wh;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function A0(n,e,t){let i=this.cache,s=e.length,r=Oo(t,s);Nt(i,r)||(n.uniform1iv(this.addr,r),Ft(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Zh,r[a])}function C0(n,e,t){let i=this.cache,s=e.length,r=Oo(t,s);Nt(i,r)||(n.uniform1iv(this.addr,r),Ft(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=zo(qh):a=$h;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function R0(n,e,t){let i=this.cache,s=e.length,r=Oo(t,s);Nt(i,r)||(n.uniform1iv(this.addr,r),Ft(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Yh,r[a])}function P0(n){switch(n){case 5126:return h0;case 35664:return u0;case 35665:return p0;case 35666:return f0;case 35674:return m0;case 35675:return g0;case 35676:return x0;case 5124:case 35670:return v0;case 35667:case 35671:return y0;case 35668:case 35672:return b0;case 35669:case 35673:return _0;case 5125:return S0;case 36294:return M0;case 36295:return w0;case 36296:return T0;case 35678:case 36198:case 36298:case 36306:case 35682:return E0;case 35679:case 36299:case 36307:return A0;case 35680:case 36300:case 36308:case 36293:return C0;case 36289:case 36303:case 36311:case 36292:return R0}}var Cc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=d0(t.type)}},Rc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=P0(t.type)}},Pc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},Ec=/(\w+)(\])?(\[|\.)?/g;function Ch(n,e){n.seq.push(e),n.map[e.id]=e}function I0(n,e,t){let i=n.name,s=i.length;for(Ec.lastIndex=0;;){let r=Ec.exec(i),a=Ec.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Ch(t,c===void 0?new Cc(o,n,e):new Rc(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new Pc(o),Ch(t,h)),t=h}}}var Es=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);I0(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function Rh(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var L0=37297,D0=0;function N0(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var Ph=new We;function F0(n){dt._getMatrix(Ph,dt.workingColorSpace,n);let e=`mat3( ${Ph.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(n)){case Xs:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Ih(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+N0(n.getShaderSource(e),o)}else return r}function k0(n,e){let t=F0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var B0={[Jl]:"Linear",[Kl]:"Reinhard",[Ql]:"Cineon",[gr]:"ACESFilmic",[ec]:"AgX",[tc]:"Neutral",[jl]:"Custom"};function U0(n,e){let t=B0[e];return t===void 0?(He("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ko=new O;function O0(){dt.getLuminanceCoefficients(ko);let n=ko.x.toFixed(4),e=ko.y.toFixed(4),t=ko.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function z0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Tr).join(`
`)}function H0(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function G0(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Tr(n){return n!==""}function Lh(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Dh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var V0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ic(n){return n.replace(V0,W0)}function W0(n,e){let t=tt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Ic(t)}var X0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nh(n){return n.replace(X0,q0)}function q0(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Fh(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Y0={[mr]:"SHADOWMAP_TYPE_PCF",[_s]:"SHADOWMAP_TYPE_VSM"};function Z0(n){return Y0[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var $0={[Ms]:"ENVMAP_MODE_REFRACTION"};function J0(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":$0[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var K0={[$l]:"ENVMAP_BLENDING_MULTIPLY",[Zd]:"ENVMAP_BLENDING_MIX",[$d]:"ENVMAP_BLENDING_ADD"};function Q0(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":K0[n.combine]||"ENVMAP_BLENDING_NONE"}function j0(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Z0(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",d=J0(t),h=Q0(t),u=z0(t),p=H0(r),f=s.createProgram(),_,g,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Tr).join(`
`),_.length>0&&(_+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Tr).join(`
`),g.length>0&&(g+=`
`)):(_=[Fh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Tr).join(`
`),g=[Fh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Oi?"#define TONE_MAPPING":"",t.toneMapping!==Oi?tt.tonemapping_pars_fragment:"",t.toneMapping!==Oi?U0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,k0("linearToOutputTexel",t.outputColorSpace),O0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Tr).join(`
`)),a=Ic(a),a=Lh(a,t),a=Dh(a,t),o=Ic(o),o=Lh(o,t),o=Dh(o,t),a=Nh(a),o=Nh(o),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,_=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,g=["#define varying in",t.glslVersion===pc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let v=m+_+a,w=m+g+o,b=Rh(s,s.VERTEX_SHADER,v),C=Rh(s,s.FRAGMENT_SHADER,w);s.attachShader(f,b),s.attachShader(f,C),t.index0AttributeName!==void 0?s.bindAttribLocation(f,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(f,0,"position"),s.linkProgram(f);function E(A){if(n.debug.checkShaderErrors){let R=s.getProgramInfoLog(f)||"",I=s.getShaderInfoLog(b)||"",z=s.getShaderInfoLog(C)||"",L=R.trim(),U=I.trim(),V=z.trim(),H=!0,re=!0;if(s.getProgramParameter(f,s.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,f,b,C);else{let Z=Ih(s,b,"vertex"),te=Ih(s,C,"fragment");Ge("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(f,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+L+`
`+Z+`
`+te)}else L!==""?He("WebGLProgram: Program Info Log:",L):(U===""||V==="")&&(re=!1);re&&(A.diagnostics={runnable:H,programLog:L,vertexShader:{log:U,prefix:_},fragmentShader:{log:V,prefix:g}})}s.deleteShader(b),s.deleteShader(C),x=new Es(s,f),S=G0(s,f)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(f,L0)),P},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=D0++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=b,this.fragmentShader=C,this}var ex=0,Lc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Dc(e),t.set(e,i)),i}},Dc=class{constructor(e){this.id=ex++,this.code=e,this.usedTimes=0}};function tx(n){return n===Sn||n===Sr||n===Mr}function ix(n,e,t,i,s,r){let a=new Zs,o=new Lc,l=new Set,c=[],d=new Map,h=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return l.add(x),x===0?"uv":`uv${x}`}function f(x,S,P,A,R,I){let z=A.fog,L=R.geometry,U=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?A.environment:null,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,H=e.get(x.envMap||U,V),re=u[x.type],Z=i.precision;x.precision!==null&&(Z=i.getMaxPrecision(x.precision),Z!==x.precision&&He("WebGLProgram.getParameters:",x.precision,"not supported, using",Z,"instead."));let te=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,se=te!==void 0?te.length:0,Me=0;L.morphAttributes.position!==void 0&&(Me=1),L.morphAttributes.normal!==void 0&&(Me=2),L.morphAttributes.color!==void 0&&(Me=3);let Ie,Q,me,Ce;if(re){let we=Hi[re];Ie=we.vertexShader,Q=we.fragmentShader}else{Ie=x.vertexShader,Q=x.fragmentShader;let we=o.getVertexShaderStage(x),xt=o.getFragmentShaderStage(x);o.update(x,we,xt),me=we.id,Ce=xt.id}let Be=n.getRenderTarget(),ye=n.state.buffers.depth.getReversed(),Ue=R.isInstancedMesh===!0,vt=R.isBatchedMesh===!0,Oe=!!x.map,qe=!!x.matcap,Je=!!H,ne=Je&&H.isPMREMTexture===!0,pe=!!x.aoMap,ue=!!x.lightMap,Ae=!!x.bumpMap&&x.wireframe===!1,_e=!!x.normalMap,Xe=!!x.displacementMap,Ne=!!x.emissiveMap,nt=!!x.metalnessMap,rt=!!x.roughnessMap,ot=x.anisotropy>0,k=x.clearcoat>0,St=x.diffuseRoughness>0,Ye=x.dispersion>0,gt=x.retroreflectivity>0,ge=x.iridescence>0,q=x.sheen>0,ie=x.transmission>0,le=ot&&!!x.anisotropyMap,T=k&&!!x.clearcoatMap,y=k&&!!x.clearcoatNormalMap,B=k&&!!x.clearcoatRoughnessMap,ee=St&&!!x.diffuseRoughnessMap,W=ge&&!!x.iridescenceMap,oe=ge&&!!x.iridescenceThicknessMap,ce=q&&!!x.sheenColorMap,J=q&&!!x.sheenRoughnessMap,Y=!!x.specularMap,ae=!!x.specularColorMap,N=!!x.specularIntensityMap,j=ie&&!!x.transmissionMap,K=ie&&!!x.thicknessMap,ve=!!x.gradientMap,he=!!x.alphaMap,xe=x.alphaTest>0,ke=!!x.alphaHash,je=!!x.extensions,de=Oi;x.toneMapped&&(Be===null||Be.isXRRenderTarget===!0)&&(de=n.toneMapping);let ze=ne?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,Ke={shaderID:re,shaderType:x.type,shaderName:x.name,vertexShader:Ie,fragmentShader:Q,defines:x.defines,customVertexShaderID:me,customFragmentShaderID:Ce,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:Z,batching:vt,batchingColor:vt&&R._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&R.instanceColor!==null,instancingMorph:Ue&&R.morphTexture!==null,outputColorSpace:Be===null?n.outputColorSpace:Be.isXRRenderTarget===!0?Be.texture.colorSpace:dt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Oe,matcap:qe,envMap:Je,envMapMode:Je&&H.mapping,envMapPMREM:ne,envMapMaxLod:ne?ze.length-1:null,envMapSize:ne?ze[0].width:null,aoMap:pe,lightMap:ue,bumpMap:Ae,normalMap:_e,displacementMap:Xe,emissiveMap:Ne,normalMapObjectSpace:_e&&x.normalMapType===Qd,normalMapTangentSpace:_e&&x.normalMapType===No,packedNormalMap:_e&&x.normalMapType===No&&tx(x.normalMap.format),metalnessMap:nt,roughnessMap:rt,anisotropy:ot,anisotropyMap:le,clearcoat:k,clearcoatMap:T,clearcoatNormalMap:y,clearcoatRoughnessMap:B,diffuseRoughness:St,diffuseRoughnessMap:ee,dispersion:Ye,retroreflection:gt,iridescence:ge,iridescenceMap:W,iridescenceThicknessMap:oe,sheen:q,sheenColorMap:ce,sheenRoughnessMap:J,specularMap:Y,specularColorMap:ae,specularIntensityMap:N,transmission:ie,transmissionMap:j,thicknessMap:K,gradientMap:ve,opaque:x.transparent===!1&&x.blending===Ss&&x.alphaToCoverage===!1,alphaMap:he,alphaTest:xe,alphaHash:ke,combine:x.combine,mapUv:Oe&&p(x.map.channel),aoMapUv:pe&&p(x.aoMap.channel),lightMapUv:ue&&p(x.lightMap.channel),bumpMapUv:Ae&&p(x.bumpMap.channel),normalMapUv:_e&&p(x.normalMap.channel),displacementMapUv:Xe&&p(x.displacementMap.channel),emissiveMapUv:Ne&&p(x.emissiveMap.channel),metalnessMapUv:nt&&p(x.metalnessMap.channel),roughnessMapUv:rt&&p(x.roughnessMap.channel),anisotropyMapUv:le&&p(x.anisotropyMap.channel),clearcoatMapUv:T&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:y&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&p(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ee&&p(x.diffuseRoughnessMap.channel),iridescenceMapUv:W&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:J&&p(x.sheenRoughnessMap.channel),specularMapUv:Y&&p(x.specularMap.channel),specularColorMapUv:ae&&p(x.specularColorMap.channel),specularIntensityMapUv:N&&p(x.specularIntensityMap.channel),transmissionMapUv:j&&p(x.transmissionMap.channel),thicknessMapUv:K&&p(x.thicknessMap.channel),alphaMapUv:he&&p(x.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(_e||ot),vertexNormals:!!L.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!L.attributes.uv&&(Oe||he),fog:!!z,useFog:x.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||L.attributes.normal===void 0&&_e===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ye,skinning:R.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:Me,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:I.filter(we=>we.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:de,decodeVideoTexture:Oe&&x.map.isVideoTexture===!0&&dt.getTransfer(x.map.colorSpace)===mt,decodeVideoTextureEmissive:Ne&&x.emissiveMap.isVideoTexture===!0&&dt.getTransfer(x.emissiveMap.colorSpace)===mt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Dt,flipSided:x.side===Vt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:je&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&x.extensions.multiDraw===!0||vt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ke.vertexUv1s=l.has(1),Ke.vertexUv2s=l.has(2),Ke.vertexUv3s=l.has(3),l.clear(),Ke}function _(x){let S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)S.push(P),S.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(g(S,x),m(S,x),S.push(n.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function g(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapPMREM),x.push(S.envMapMaxLod),x.push(S.envMapSize),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.diffuseRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.numSunLights),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numSunLightShadows),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.numLightProbeGrids),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function m(x,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function v(x){let S=u[x.type],P;if(S){let A=Hi[S];P=gh.clone(A.uniforms)}else P=x.uniforms;return P}function w(x,S){let P=d.get(S);return P!==void 0?++P.usedTimes:(P=new j0(n,S,x,s),c.push(P),d.set(S,P)),P}function b(x){if(--x.usedTimes===0){let S=c.indexOf(x);c[S]=c[c.length-1],c.pop(),d.delete(x.cacheKey),x.destroy()}}function C(x){o.remove(x)}function E(){o.dispose()}return{getParameters:f,getProgramCacheKey:_,getUniforms:v,acquireProgram:w,releaseProgram:b,releaseShaderCache:C,programs:c,dispose:E}}function nx(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function sx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function kh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Bh(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,f,_,g,m){let v=n[e];return v===void 0?(v={id:u.id,object:u,geometry:p,material:f,materialVariant:a(u),groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},n[e]=v):(v.id=u.id,v.object=u,v.geometry=p,v.material=f,v.materialVariant=a(u),v.groupOrder=_,v.renderOrder=u.renderOrder,v.z=g,v.group=m),e++,v}function l(u,p,f,_,g,m,v){v.reversedDepth===!0&&(g=-g);let w=o(u,p,f,_,g,m);f.transmission>0?i.push(w):f.transparent===!0?s.push(w):t.push(w)}function c(u,p,f,_,g,m){let v=o(u,p,f,_,g,m);f.transmission>0?i.unshift(v):f.transparent===!0?s.unshift(v):t.unshift(v)}function d(u,p){t.length>1&&t.sort(u||sx),i.length>1&&i.sort(p||kh),s.length>1&&s.sort(p||kh)}function h(){for(let u=e,p=n.length;u<p;u++){let f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:h,sort:d}}function rx(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new Bh,n.set(i,[a])):s>=r.length?(a=new Bh,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function ax(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new O,color:new $e};break;case"SpotLight":t={position:new O,direction:new O,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function ox(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var lx=0;function cx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function dx(n){let e=new ax,t=ox(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);let s=new O,r=new bt,a=new bt;function o(c){let d=0,h=0,u=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let p=0,f=0,_=0,g=0,m=0,v=0,w=0,b=0,C=0,E=0,x=0,S=0,P=0,A=0;c.sort(cx);for(let I=0,z=c.length;I<z;I++){let L=c[I],U=L.color,V=L.intensity,H=L.distance,re=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Sn?re=L.shadow.map.texture:re=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)d+=U.r*V,h+=U.g*V,u+=U.b*V;else if(L.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(L.sh.coefficients[Z],V);A++}else if(L.isSunLight){let Z=e.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let te=L.shadow,se=t.get(L);se.shadowIntensity=te.intensity,se.shadowBias=te.bias,se.shadowNormalBias=te.normalBias,se.shadowRadius=te.radius,se.shadowMapSize.copy(te.mapSize).multiply(te.getFrameExtents()),i.sunShadow[f]=se,i.sunShadowMap[f]=re;let Me=te.getViewportCount();for(let Ie=0;Ie<Me;Ie++)i.sunShadowMatrix[_+Ie]=te.getMatrix(Ie),i.sunShadowCascade[_+Ie]=te._cascadeData[Ie];_+=Me,f++}i.sun[p]=Z,p++}else if(L.isDirectionalLight){let Z=e.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let te=L.shadow,se=t.get(L);se.shadowIntensity=te.intensity,se.shadowBias=te.bias,se.shadowNormalBias=te.normalBias,se.shadowRadius=te.radius,se.shadowMapSize=te.mapSize,i.directionalShadow[g]=se,i.directionalShadowMap[g]=re,i.directionalShadowMatrix[g]=L.shadow.matrix,C++}i.directional[g]=Z,g++}else if(L.isSpotLight){let Z=e.get(L);Z.position.setFromMatrixPosition(L.matrixWorld),Z.color.copy(U).multiplyScalar(V),Z.distance=H,Z.coneCos=Math.cos(L.angle),Z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Z.decay=L.decay,i.spot[v]=Z;let te=L.shadow;if(L.map&&(i.spotLightMap[S]=L.map,S++,te.updateMatrices(L),L.castShadow&&P++),i.spotLightMatrix[v]=te.matrix,L.castShadow){let se=t.get(L);se.shadowIntensity=te.intensity,se.shadowBias=te.bias,se.shadowNormalBias=te.normalBias,se.shadowRadius=te.radius,se.shadowMapSize=te.mapSize,i.spotShadow[v]=se,i.spotShadowMap[v]=re,x++}v++}else if(L.isRectAreaLight){let Z=e.get(L);Z.color.copy(U).multiplyScalar(V),Z.halfWidth.set(L.width*.5,0,0),Z.halfHeight.set(0,L.height*.5,0),i.rectArea[w]=Z,w++}else if(L.isPointLight){let Z=e.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),Z.distance=L.distance,Z.decay=L.decay,L.castShadow){let te=L.shadow,se=t.get(L);se.shadowIntensity=te.intensity,se.shadowBias=te.bias,se.shadowNormalBias=te.normalBias,se.shadowRadius=te.radius,se.shadowMapSize=te.mapSize,se.shadowCameraNear=te.camera.near,se.shadowCameraFar=te.camera.far,i.pointShadow[m]=se,i.pointShadowMap[m]=re,i.pointShadowMatrix[m]=L.shadow.matrix,E++}i.point[m]=Z,m++}else if(L.isHemisphereLight){let Z=e.get(L);Z.skyColor.copy(L.color).multiplyScalar(V),Z.groundColor.copy(L.groundColor).multiplyScalar(V),i.hemi[b]=Z,b++}}w>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Te.LTC_FLOAT_1,i.rectAreaLTC2=Te.LTC_FLOAT_2):(i.rectAreaLTC1=Te.LTC_HALF_1,i.rectAreaLTC2=Te.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=u;let R=i.hash;(R.sunLength!==p||R.directionalLength!==g||R.pointLength!==m||R.spotLength!==v||R.rectAreaLength!==w||R.hemiLength!==b||R.numSunShadows!==f||R.numDirectionalShadows!==C||R.numPointShadows!==E||R.numSpotShadows!==x||R.numSpotMaps!==S||R.numLightProbes!==A)&&(i.sun.length=p,i.directional.length=g,i.spot.length=v,i.rectArea.length=w,i.point.length=m,i.hemi.length=b,i.sunShadow.length=f,i.sunShadowMap.length=f,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=C,i.directionalShadowMap.length=C,i.directionalShadowMatrix.length=C,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+S-P,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=A,R.sunLength=p,R.directionalLength=g,R.pointLength=m,R.spotLength=v,R.rectAreaLength=w,R.hemiLength=b,R.numSunShadows=f,R.numDirectionalShadows=C,R.numPointShadows=E,R.numSpotShadows=x,R.numSpotMaps=S,R.numLightProbes=A,i.version=lx++)}function l(c,d){let h=0,u=0,p=0,f=0,_=0,g=0,m=d.matrixWorldInverse;for(let v=0,w=c.length;v<w;v++){let b=c[v];if(b.isSunLight){let C=i.sun[h];C.direction.setFromMatrixPosition(b.matrixWorld),C.direction.transformDirection(m),h++}else if(b.isDirectionalLight){let C=i.directional[u];C.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(m),u++}else if(b.isSpotLight){let C=i.spot[f];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(m),C.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(m),f++}else if(b.isRectAreaLight){let C=i.rectArea[_];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),C.halfWidth.set(b.width*.5,0,0),C.halfHeight.set(0,b.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),_++}else if(b.isPointLight){let C=i.point[p];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(m),p++}else if(b.isHemisphereLight){let C=i.hemi[g];C.direction.setFromMatrixPosition(b.matrixWorld),C.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:i}}function Uh(n){let e=new dx(n),t=[],i=[],s=[];function r(h){d.camera=h,t.length=0,i.length=0,s.length=0}function a(h){h.isLightProbeGrid?s.push(h):t.push(h)}function o(h){i.push(h)}function l(){e.setup(t),s.sort((h,u)=>h.priority-u.priority||h.id-u.id)}function c(h){e.setupView(t,h)}let d={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function hx(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Uh(n),e.set(s,[o])):r>=a.length?(o=new Uh(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var ux=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,px=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,fx=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],mx=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],Oh=new bt,wr=new O,Ac=new O;function gx(n,e,t){let i=new xn,s=new fe,r=new fe,a=new Tt,o=new Da,l=new Na,c={},d=t.maxTextureSize,h={[_n]:Vt,[Vt]:_n,[Dt]:Dt},u=new Bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:ux,fragmentShader:px}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let f=new It;f.setAttribute("position",new pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ve(f,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mr;let m=this.type;this.render=function(E,x,S){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===Ya&&(He("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=mr);let P=n.getRenderTarget(),A=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),I=n.state;I.setBlending(Fn),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let z=m!==this.type;z&&x.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(U=>U.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,U=E.length;L<U;L++){let V=E[L],H=V.shadow;if(H===void 0){He("WebGLShadowMap:",V,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let re=H.getFrameExtents();s.multiply(re),r.copy(H.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/re.x),s.x=r.x*re.x,H.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/re.y),s.y=r.y*re.y,H.mapSize.y=r.y));let Z=n.state.buffers.depth.getReversed();if(H.camera._reversedDepth=Z,H.map===null||z===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===_s){if(V.isPointLight){He("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new ai(s.x,s.y,{format:Sn,type:Ti,minFilter:jt,magFilter:jt,generateMipmaps:!1}),H.map.texture.name=V.name+".shadowMap",H.map.depthTexture=new Qi(s.x,s.y,wi),H.map.depthTexture.name=V.name+".shadowMapDepth",H.map.depthTexture.format=Ji,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=zt,H.map.depthTexture.magFilter=zt}else V.isPointLight?(H.map=new Er(s.x),H.map.depthTexture=new js(s.x,Mi)):(H.map=new ai(s.x,s.y),H.map.depthTexture=new Qi(s.x,s.y,Mi)),H.map.depthTexture.name=V.name+".shadowMap",H.map.depthTexture.format=Ji,this.type===mr?(H.map.depthTexture.compareFunction=Z?hc:dc,H.map.depthTexture.minFilter=jt,H.map.depthTexture.magFilter=jt):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=zt,H.map.depthTexture.magFilter=zt);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);let te=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();V.isPointLight!==!0&&H.updateMatrices(V,S);let se=(H.camera.layers.mask&4294967294)!==0?H.camera.layers:S.layers;for(let Me=0;Me<te;Me++){let Ie=H.getCamera(Me);if(V.isPointLight){let Q=H.camera,me=H.matrix,Ce=V.distance||Q.far;Ce!==Q.far&&(Q.far=Ce,Q.updateProjectionMatrix()),wr.setFromMatrixPosition(V.matrixWorld),Q.position.copy(wr),Ac.copy(Q.position),Ac.add(fx[Me]),Q.up.copy(mx[Me]),Q.lookAt(Ac),Q.updateMatrixWorld(),me.makeTranslation(-wr.x,-wr.y,-wr.z),Oh.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Oh,Q.coordinateSystem,Q.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)n.setRenderTarget(H.map,Me),n.clear();else{Me===0&&(n.setRenderTarget(H.map),n.clear());let Q=H.getViewport(Me);a.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),I.viewport(a)}i=H.getFrustum(Me),b(x,S,Ie,V,se,this.type)}H.isPointLightShadow!==!0&&this.type===_s&&v(H,S),H.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(P,A,R)};function v(E,x){let S=e.update(_);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null?E.mapPass=new ai(s.x,s.y,{format:Sn,type:Ti}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(x,null,S,u,_,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value.set(E.map.width,E.map.height),p.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(x,null,S,p,_,null)}function w(E,x,S,P){let A=null,R=S.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)A=R;else if(A=S.isPointLight===!0?l:o,n.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let I=A.uuid,z=x.uuid,L=c[I];L===void 0&&(L={},c[I]=L);let U=L[z];U===void 0&&(U=A.clone(),L[z]=U,x.addEventListener("dispose",C)),A=U}if(A.visible=x.visible,A.wireframe=x.wireframe,P===_s?A.side=x.shadowSide!==null?x.shadowSide:x.side:A.side=x.shadowSide!==null?x.shadowSide:h[x.side],A.alphaMap=x.alphaMap,A.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,A.map=x.map,A.clipShadows=x.clipShadows,A.clippingPlanes=x.clippingPlanes,A.clipIntersection=x.clipIntersection,A.displacementMap=x.displacementMap,A.displacementScale=x.displacementScale,A.displacementBias=x.displacementBias,A.wireframeLinewidth=x.wireframeLinewidth,A.linewidth=x.linewidth,S.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let I=n.properties.get(A);I.light=S}return A}function b(E,x,S,P,A,R){if(E.visible===!1)return;if(E.layers.test(A)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&R===_s)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,E.matrixWorld);let L=e.update(E),U=E.material;if(Array.isArray(U)){let V=L.groups;for(let H=0,re=V.length;H<re;H++){let Z=V[H],te=U[Z.materialIndex];if(te&&te.visible){let se=w(E,te,P,R);E.onBeforeShadow(n,E,x,S,L,se,Z),n.renderBufferDirect(S,null,L,se,E,Z),E.onAfterShadow(n,E,x,S,L,se,Z)}}}else if(U.visible){let V=w(E,U,P,R);E.onBeforeShadow(n,E,x,S,L,V,null),n.renderBufferDirect(S,null,L,V,E,null),E.onAfterShadow(n,E,x,S,L,V,null)}}let z=E.children;for(let L=0,U=z.length;L<U;L++)b(z[L],x,S,P,A,R)}function C(E){E.target.removeEventListener("dispose",C);for(let S in c){let P=c[S],A=E.target.uuid;A in P&&(P[A].dispose(),delete P[A])}}}function xx(n,e){function t(){let N=!1,j=new Tt,K=null,ve=new Tt(0,0,0,0);return{setMask:function(he){K!==he&&!N&&(n.colorMask(he,he,he,he),K=he)},setLocked:function(he){N=he},setClear:function(he,xe,ke,je,de){de===!0&&(he*=je,xe*=je,ke*=je),j.set(he,xe,ke,je),ve.equals(j)===!1&&(n.clearColor(he,xe,ke,je),ve.copy(j))},reset:function(){N=!1,K=null,ve.set(-1,0,0,0)}}}function i(){let N=!1,j=!1,K=null,ve=null,he=null;return{setReversed:function(xe){if(j!==xe){let ke=e.get("EXT_clip_control");xe?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),j=xe;let je=he;he=null,this.setClear(je)}},getReversed:function(){return j},setTest:function(xe){xe?ye(n.DEPTH_TEST):Ue(n.DEPTH_TEST)},setMask:function(xe){K!==xe&&!N&&(n.depthMask(xe),K=xe)},setFunc:function(xe){if(j&&(xe=ch[xe]),ve!==xe){switch(xe){case da:n.depthFunc(n.NEVER);break;case ha:n.depthFunc(n.ALWAYS);break;case ua:n.depthFunc(n.LESS);break;case ls:n.depthFunc(n.LEQUAL);break;case pa:n.depthFunc(n.EQUAL);break;case fa:n.depthFunc(n.GEQUAL);break;case ma:n.depthFunc(n.GREATER);break;case ga:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ve=xe}},setLocked:function(xe){N=xe},setClear:function(xe){he!==xe&&(he=xe,j&&(xe=1-xe),n.clearDepth(xe))},reset:function(){N=!1,K=null,ve=null,he=null,j=!1}}}function s(){let N=!1,j=null,K=null,ve=null,he=null,xe=null,ke=null,je=null,de=null;return{setTest:function(ze){N||(ze?ye(n.STENCIL_TEST):Ue(n.STENCIL_TEST))},setMask:function(ze){j!==ze&&!N&&(n.stencilMask(ze),j=ze)},setFunc:function(ze,Ke,we){(K!==ze||ve!==Ke||he!==we)&&(n.stencilFunc(ze,Ke,we),K=ze,ve=Ke,he=we)},setOp:function(ze,Ke,we){(xe!==ze||ke!==Ke||je!==we)&&(n.stencilOp(ze,Ke,we),xe=ze,ke=Ke,je=we)},setLocked:function(ze){N=ze},setClear:function(ze){de!==ze&&(n.clearStencil(ze),de=ze)},reset:function(){N=!1,j=null,K=null,ve=null,he=null,xe=null,ke=null,je=null,de=null}}}let r=new t,a=new i,o=new s,l={},c=new WeakMap,d={},h={},u={},p=new WeakMap,f=[],_=null,g=!1,m=null,v=null,w=null,b=null,C=null,E=null,x=null,S=new $e(0,0,0),P=0,A=!1,R=null,I=null,z=null,L=null,U=null,V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,re=0,Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(Z)[1]),H=re>=1):Z.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),H=re>=2);let te=null,se={},Me=n.getParameter(n.SCISSOR_BOX),Ie=n.getParameter(n.VIEWPORT),Q=new Tt().fromArray(Me),me=new Tt().fromArray(Ie);function Ce(N,j,K,ve){let he=new Uint8Array(4),xe=n.createTexture();n.bindTexture(N,xe),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ke=0;ke<K;ke++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(j,0,n.RGBA,1,1,ve,0,n.RGBA,n.UNSIGNED_BYTE,he):n.texImage2D(j+ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,he);return xe}let Be={};Be[n.TEXTURE_2D]=Ce(n.TEXTURE_2D,n.TEXTURE_2D,1),Be[n.TEXTURE_CUBE_MAP]=Ce(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Be[n.TEXTURE_2D_ARRAY]=Ce(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Be[n.TEXTURE_3D]=Ce(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ye(n.DEPTH_TEST),a.setFunc(ls),Ae(!1),_e(Vl),ye(n.CULL_FACE),pe(Fn);function ye(N){d[N]!==!0&&(n.enable(N),d[N]=!0)}function Ue(N){d[N]!==!1&&(n.disable(N),d[N]=!1)}function vt(N,j){return u[N]!==j?(n.bindFramebuffer(N,j),u[N]=j,N===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=j),N===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=j),!0):!1}function Oe(N,j){let K=f,ve=!1;if(N){K=p.get(j),K===void 0&&(K=[],p.set(j,K));let he=N.textures;if(K.length!==he.length||K[0]!==n.COLOR_ATTACHMENT0){for(let xe=0,ke=he.length;xe<ke;xe++)K[xe]=n.COLOR_ATTACHMENT0+xe;K.length=he.length,ve=!0}}else K[0]!==n.BACK&&(K[0]=n.BACK,ve=!0);ve&&n.drawBuffers(K)}function qe(N){return _!==N?(n.useProgram(N),_=N,!0):!1}let Je={[kn]:n.FUNC_ADD,[Id]:n.FUNC_SUBTRACT,[Ld]:n.FUNC_REVERSE_SUBTRACT};Je[Dd]=n.MIN,Je[Nd]=n.MAX;let ne={[Fd]:n.ZERO,[kd]:n.ONE,[Bd]:n.SRC_COLOR,[Yl]:n.SRC_ALPHA,[Vd]:n.SRC_ALPHA_SATURATE,[Hd]:n.DST_COLOR,[Od]:n.DST_ALPHA,[Ud]:n.ONE_MINUS_SRC_COLOR,[Zl]:n.ONE_MINUS_SRC_ALPHA,[Gd]:n.ONE_MINUS_DST_COLOR,[zd]:n.ONE_MINUS_DST_ALPHA,[Wd]:n.CONSTANT_COLOR,[Xd]:n.ONE_MINUS_CONSTANT_COLOR,[qd]:n.CONSTANT_ALPHA,[Yd]:n.ONE_MINUS_CONSTANT_ALPHA};function pe(N,j,K,ve,he,xe,ke,je,de,ze){if(N===Fn){g===!0&&(Ue(n.BLEND),g=!1);return}if(g===!1&&(ye(n.BLEND),g=!0),N!==Pd){if(N!==m||ze!==A){if((v!==kn||C!==kn)&&(n.blendEquation(n.FUNC_ADD),v=kn,C=kn),ze)switch(N){case Ss:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wl:n.blendFunc(n.ONE,n.ONE);break;case Xl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ql:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ge("WebGLState: Invalid blending: ",N);break}else switch(N){case Ss:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Xl:Ge("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ql:Ge("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ge("WebGLState: Invalid blending: ",N);break}w=null,b=null,E=null,x=null,S.set(0,0,0),P=0,m=N,A=ze}return}he=he||j,xe=xe||K,ke=ke||ve,(j!==v||he!==C)&&(n.blendEquationSeparate(Je[j],Je[he]),v=j,C=he),(K!==w||ve!==b||xe!==E||ke!==x)&&(n.blendFuncSeparate(ne[K],ne[ve],ne[xe],ne[ke]),w=K,b=ve,E=xe,x=ke),(je.equals(S)===!1||de!==P)&&(n.blendColor(je.r,je.g,je.b,de),S.copy(je),P=de),m=N,A=!1}function ue(N,j){N.side===Dt?Ue(n.CULL_FACE):ye(n.CULL_FACE);let K=N.side===Vt;j&&(K=!K),Ae(K),N.blending===Ss&&N.transparent===!1?pe(Fn):pe(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let ve=N.stencilWrite;o.setTest(ve),ve&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ne(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ye(n.SAMPLE_ALPHA_TO_COVERAGE):Ue(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(N){R!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),R=N)}function _e(N){N!==Cd?(ye(n.CULL_FACE),N!==I&&(N===Vl?n.cullFace(n.BACK):N===Rd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ue(n.CULL_FACE),I=N}function Xe(N){N!==z&&(H&&n.lineWidth(N),z=N)}function Ne(N,j,K){N?(ye(n.POLYGON_OFFSET_FILL),(L!==j||U!==K)&&(L=j,U=K,a.getReversed()&&(j=-j,K=-K),n.polygonOffset(j,K))):Ue(n.POLYGON_OFFSET_FILL)}function nt(N){N?ye(n.SCISSOR_TEST):Ue(n.SCISSOR_TEST)}function rt(N){N===void 0&&(N=n.TEXTURE0+V-1),te!==N&&(n.activeTexture(N),te=N)}function ot(N,j,K){K===void 0&&(te===null?K=n.TEXTURE0+V-1:K=te);let ve=se[K];ve===void 0&&(ve={type:void 0,texture:void 0},se[K]=ve),(ve.type!==N||ve.texture!==j)&&(te!==K&&(n.activeTexture(K),te=K),n.bindTexture(N,j||Be[N]),ve.type=N,ve.texture=j)}function k(){let N=se[te];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function St(){try{n.compressedTexImage2D(...arguments)}catch(N){Ge("WebGLState:",N)}}function Ye(){try{n.compressedTexImage3D(...arguments)}catch(N){Ge("WebGLState:",N)}}function gt(){try{n.texSubImage2D(...arguments)}catch(N){Ge("WebGLState:",N)}}function ge(){try{n.texSubImage3D(...arguments)}catch(N){Ge("WebGLState:",N)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(N){Ge("WebGLState:",N)}}function ie(){try{n.compressedTexSubImage3D(...arguments)}catch(N){Ge("WebGLState:",N)}}function le(){try{n.texStorage2D(...arguments)}catch(N){Ge("WebGLState:",N)}}function T(){try{n.texStorage3D(...arguments)}catch(N){Ge("WebGLState:",N)}}function y(){try{n.texImage2D(...arguments)}catch(N){Ge("WebGLState:",N)}}function B(){try{n.texImage3D(...arguments)}catch(N){Ge("WebGLState:",N)}}function ee(N){return h[N]!==void 0?h[N]:n.getParameter(N)}function W(N,j){h[N]!==j&&(n.pixelStorei(N,j),h[N]=j)}function oe(N){Q.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),Q.copy(N))}function ce(N){me.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),me.copy(N))}function J(N,j){let K=c.get(j);K===void 0&&(K=new WeakMap,c.set(j,K));let ve=K.get(N);ve===void 0&&(ve=n.getUniformBlockIndex(j,N.name),n.uniformBlockBinding(j,ve,ve),K.set(N,ve))}function Y(N,j,K){let he=c.get(j).get(N);l[he]!==K&&(n.bindBufferBase(n.UNIFORM_BUFFER,he,K),l[he]=K)}function ae(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),d={},h={},te=null,se={},u={},l={},p=new WeakMap,f=[],_=null,g=!1,m=null,v=null,w=null,b=null,C=null,E=null,x=null,S=new $e(0,0,0),P=0,A=!1,R=null,I=null,z=null,L=null,U=null,Q.set(0,0,n.canvas.width,n.canvas.height),me.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ye,disable:Ue,bindFramebuffer:vt,drawBuffers:Oe,useProgram:qe,setBlending:pe,setMaterial:ue,setFlipSided:Ae,setCullFace:_e,setLineWidth:Xe,setPolygonOffset:Ne,setScissorTest:nt,activeTexture:rt,bindTexture:ot,unbindTexture:k,compressedTexImage2D:St,compressedTexImage3D:Ye,texImage2D:y,texImage3D:B,pixelStorei:W,getParameter:ee,updateUBOMapping:J,uniformBlockBinding:Y,texStorage2D:le,texStorage3D:T,texSubImage2D:gt,texSubImage3D:ge,compressedTexSubImage2D:q,compressedTexSubImage3D:ie,scissor:oe,viewport:ce,reset:ae}}function vx(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new fe,d=new WeakMap,h=new Set,u,p=new WeakMap,f=new Set,_=new FinalizationRegistry(T=>f.delete(T)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(T,y){return g?new OffscreenCanvas(T,y):qs("canvas")}function v(T,y,B){let ee=1,W=le(T);if((W.width>B||W.height>B)&&(ee=B/Math.max(W.width,W.height)),ee<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let oe=Math.floor(ee*W.width),ce=Math.floor(ee*W.height);u===void 0&&(u=m(oe,ce));let J=y?m(oe,ce):u;return J.width=oe,J.height=ce,J.getContext("2d").drawImage(T,0,0,oe,ce),He("WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+oe+"x"+ce+")."),J}else return"data"in T&&He("WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),T;return T}function w(T){return T.generateMipmaps}function b(T){n.generateMipmap(T)}function C(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(T,y,B,ee,W,oe=!1){if(T!==null){if(n[T]!==void 0)return n[T];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ce;ee&&(ce=e.get("EXT_texture_norm16"),ce||He("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=y;if(y===n.RED&&(B===n.FLOAT&&(J=n.R32F),B===n.HALF_FLOAT&&(J=n.R16F),B===n.UNSIGNED_BYTE&&(J=n.R8),B===n.UNSIGNED_SHORT&&ce&&(J=ce.R16_EXT),B===n.SHORT&&ce&&(J=ce.R16_SNORM_EXT)),y===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(J=n.R8UI),B===n.UNSIGNED_SHORT&&(J=n.R16UI),B===n.UNSIGNED_INT&&(J=n.R32UI),B===n.BYTE&&(J=n.R8I),B===n.SHORT&&(J=n.R16I),B===n.INT&&(J=n.R32I)),y===n.RG&&(B===n.FLOAT&&(J=n.RG32F),B===n.HALF_FLOAT&&(J=n.RG16F),B===n.UNSIGNED_BYTE&&(J=n.RG8),B===n.UNSIGNED_SHORT&&ce&&(J=ce.RG16_EXT),B===n.SHORT&&ce&&(J=ce.RG16_SNORM_EXT)),y===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(J=n.RG8UI),B===n.UNSIGNED_SHORT&&(J=n.RG16UI),B===n.UNSIGNED_INT&&(J=n.RG32UI),B===n.BYTE&&(J=n.RG8I),B===n.SHORT&&(J=n.RG16I),B===n.INT&&(J=n.RG32I)),y===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(J=n.RGB8UI),B===n.UNSIGNED_SHORT&&(J=n.RGB16UI),B===n.UNSIGNED_INT&&(J=n.RGB32UI),B===n.BYTE&&(J=n.RGB8I),B===n.SHORT&&(J=n.RGB16I),B===n.INT&&(J=n.RGB32I)),y===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),B===n.UNSIGNED_INT&&(J=n.RGBA32UI),B===n.BYTE&&(J=n.RGBA8I),B===n.SHORT&&(J=n.RGBA16I),B===n.INT&&(J=n.RGBA32I)),y===n.RGB&&(B===n.UNSIGNED_SHORT&&ce&&(J=ce.RGB16_EXT),B===n.SHORT&&ce&&(J=ce.RGB16_SNORM_EXT),B===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&(J=n.R11F_G11F_B10F)),y===n.RGBA){let Y=oe?Xs:dt.getTransfer(W);B===n.FLOAT&&(J=n.RGBA32F),B===n.HALF_FLOAT&&(J=n.RGBA16F),B===n.UNSIGNED_BYTE&&(J=Y===mt?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT&&ce&&(J=ce.RGBA16_EXT),B===n.SHORT&&ce&&(J=ce.RGBA16_SNORM_EXT),B===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function x(T,y){let B;return T?y===null||y===Mi||y===Un?B=n.DEPTH24_STENCIL8:y===wi?B=n.DEPTH32F_STENCIL8:y===ws&&(B=n.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Mi||y===Un?B=n.DEPTH_COMPONENT24:y===wi?B=n.DEPTH_COMPONENT32F:y===ws&&(B=n.DEPTH_COMPONENT16),B}function S(T,y){return w(T)===!0||T.isFramebufferTexture&&T.minFilter!==zt&&T.minFilter!==jt?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function P(T){let y=new WeakRef(T);i.get(T).__ref=y,f.add(y),_.register(T,y,y)}function A(T){let y=i.get(T).__ref;y!==void 0&&(f.delete(y),_.unregister(y))}function R(T){z(T.target)}function I(T){L(T.target)}function z(T){T.removeEventListener("dispose",R),A(T),V(T),T.isVideoTexture&&d.delete(T),T.isHTMLTexture&&h.delete(T)}function L(T){T.removeEventListener("dispose",I),A(T),re(T)}function U(){for(let T of f){let y=T.deref();y!==void 0&&(y.isRenderTarget===!0?L(y):z(y))}f.clear(),h.clear()}function V(T){let y=i.get(T);if(y.__webglInit===void 0)return;let B=T.source,ee=p.get(B);if(ee){let W=ee[y.__cacheKey];W.usedTimes--,W.usedTimes===0&&H(T),Object.keys(ee).length===0&&p.delete(B)}i.remove(T)}function H(T){let y=i.get(T);n.deleteTexture(y.__webglTexture);let B=T.source,ee=p.get(B);delete ee[y.__cacheKey],a.memory.textures--}function re(T){let y=i.get(T);y.__depthDisposeCallback&&y.__depthDisposeCallback();let B=T.depthTexture;if(B&&B.renderTarget===T&&z(B),T.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(y.__webglFramebuffer[W]))for(let oe=0;oe<y.__webglFramebuffer[W].length;oe++)n.deleteFramebuffer(y.__webglFramebuffer[W][oe]);else n.deleteFramebuffer(y.__webglFramebuffer[W]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[W])}else{if(Array.isArray(y.__webglFramebuffer))for(let W=0;W<y.__webglFramebuffer.length;W++)n.deleteFramebuffer(y.__webglFramebuffer[W]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let W=0;W<y.__webglColorRenderbuffer.length;W++)y.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[W]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let ee=T.textures;for(let W=0,oe=ee.length;W<oe;W++){let ce=i.get(ee[W]);ce.__webglTexture&&(n.deleteTexture(ce.__webglTexture),a.memory.textures--),i.remove(ee[W])}i.remove(T)}let Z=0;function te(){Z=0}function se(){return Z}function Me(T){Z=T}function Ie(){let T=Z;return T>=s.maxTextures&&He("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures),Z+=1,T}function Q(T){let y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.mipmapsAutoUpdate),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function me(T,y){let B=i.get(T);if(T.isVideoTexture&&q(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&B.__version!==T.version){let ee=T.image;if(ee===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{ue(B,T,y);return}}else T.isExternalTexture&&(B.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+y)}function Ce(T,y){let B=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){ue(B,T,y);return}else T.isExternalTexture&&(B.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+y)}function Be(T,y){let B=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){ue(B,T,y);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+y)}function ye(T,y){let B=i.get(T);if(T.version>0&&B.__version!==T.version){Ae(B,T,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+y)}let Ue={[$i]:n.REPEAT,[Pi]:n.CLAMP_TO_EDGE,[xa]:n.MIRRORED_REPEAT},vt={[zt]:n.NEAREST,[Jd]:n.NEAREST_MIPMAP_NEAREST,[xr]:n.NEAREST_MIPMAP_LINEAR,[jt]:n.LINEAR,[Ja]:n.LINEAR_MIPMAP_NEAREST,[en]:n.LINEAR_MIPMAP_LINEAR},Oe={[eh]:n.NEVER,[uc]:n.ALWAYS,[th]:n.LESS,[dc]:n.LEQUAL,[ih]:n.EQUAL,[hc]:n.GEQUAL,[nh]:n.GREATER,[sh]:n.NOTEQUAL};function qe(T,y){if(y.type===wi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===jt||y.magFilter===Ja||y.magFilter===xr||y.magFilter===en||y.minFilter===jt||y.minFilter===Ja||y.minFilter===xr||y.minFilter===en)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,Ue[y.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,Ue[y.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,Ue[y.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,vt[y.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,vt[y.minFilter]),y.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,Oe[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===zt||y.minFilter!==xr&&y.minFilter!==en||y.type===wi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Je(T,y){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",R),P(y));let ee=y.source,W=p.get(ee);W===void 0&&(W={},p.set(ee,W));let oe=Q(y);if(oe!==T.__cacheKey){W[oe]===void 0&&(W[oe]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,B=!0),W[oe].usedTimes++;let ce=W[T.__cacheKey];ce!==void 0&&(W[T.__cacheKey].usedTimes--,ce.usedTimes===0&&H(y)),T.__cacheKey=oe,T.__webglTexture=W[oe].texture}return B}function ne(T,y,B){return Math.floor(Math.floor(T/B)/y)}function pe(T,y,B,ee){let oe=T.updateRanges;if(oe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,B,ee,y.data);else{oe.sort((N,j)=>N.start-j.start);let ce=0;for(let N=1;N<oe.length;N++){let j=oe[ce],K=oe[N],ve=j.start+j.count,he=ne(K.start,y.width,4),xe=ne(j.start,y.width,4);K.start<=ve+1&&he===xe&&ne(K.start+K.count-1,y.width,4)===he?j.count=Math.max(j.count,K.start+K.count-j.start):(++ce,oe[ce]=K)}oe.length=ce+1;let J=t.getParameter(n.UNPACK_ROW_LENGTH),Y=t.getParameter(n.UNPACK_SKIP_PIXELS),ae=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let N=0,j=oe.length;N<j;N++){let K=oe[N],ve=Math.floor(K.start/4),he=Math.ceil(K.count/4),xe=ve%y.width,ke=Math.floor(ve/y.width),je=he,de=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,xe),t.pixelStorei(n.UNPACK_SKIP_ROWS,ke),t.texSubImage2D(n.TEXTURE_2D,0,xe,ke,je,de,B,ee,y.data)}T.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,J),t.pixelStorei(n.UNPACK_SKIP_PIXELS,Y),t.pixelStorei(n.UNPACK_SKIP_ROWS,ae)}}function ue(T,y,B){let ee=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ee=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ee=n.TEXTURE_3D);let W=Je(T,y),oe=y.source;t.bindTexture(ee,T.__webglTexture,n.TEXTURE0+B);let ce=i.get(oe);if(oe.version!==ce.__version||W===!0){if(t.activeTexture(n.TEXTURE0+B),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let de=dt.getPrimaries(dt.workingColorSpace),ze=y.colorSpace===nn?null:dt.getPrimaries(y.colorSpace),Ke=y.colorSpace===nn||de===ze?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke)}t.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment);let Y=v(y.image,!1,s.maxTextureSize);Y=ie(y,Y);let ae=r.convert(y.format,y.colorSpace),N=r.convert(y.type),j=E(y.internalFormat,ae,N,y.normalized,y.colorSpace,y.isVideoTexture);qe(ee,y);let K,ve=y.mipmaps,he=y.isVideoTexture!==!0,xe=ce.__version===void 0||W===!0,ke=oe.dataReady,je=S(y,Y);if(y.isDepthTexture)j=x(y.format===tn,y.type),xe&&(he?t.texStorage2D(n.TEXTURE_2D,1,j,Y.width,Y.height):t.texImage2D(n.TEXTURE_2D,0,j,Y.width,Y.height,0,ae,N,null));else if(y.isDataTexture)if(ve.length>0){he&&xe&&t.texStorage2D(n.TEXTURE_2D,je,j,ve[0].width,ve[0].height);for(let de=0,ze=ve.length;de<ze;de++)K=ve[de],he?ke&&t.texSubImage2D(n.TEXTURE_2D,de,0,0,K.width,K.height,ae,N,K.data):t.texImage2D(n.TEXTURE_2D,de,j,K.width,K.height,0,ae,N,K.data);y.generateMipmaps=!1}else he?(xe&&t.texStorage2D(n.TEXTURE_2D,je,j,Y.width,Y.height),ke&&pe(y,Y,ae,N)):t.texImage2D(n.TEXTURE_2D,0,j,Y.width,Y.height,0,ae,N,Y.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){he&&xe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,je,j,ve[0].width,ve[0].height,Y.depth);for(let de=0,ze=ve.length;de<ze;de++)if(K=ve[de],y.format!==Ei)if(ae!==null)if(he){if(ke)if(y.layerUpdates.size>0){let Ke=bc(K.width,K.height,y.format,y.type);for(let we of y.layerUpdates){let xt=K.data.subarray(we*Ke/K.data.BYTES_PER_ELEMENT,(we+1)*Ke/K.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,we,K.width,K.height,1,ae,xt)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,0,K.width,K.height,Y.depth,ae,K.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,de,j,K.width,K.height,Y.depth,0,K.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else he?ke&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,0,K.width,K.height,Y.depth,ae,N,K.data):t.texImage3D(n.TEXTURE_2D_ARRAY,de,j,K.width,K.height,Y.depth,0,ae,N,K.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{he&&xe&&t.texStorage2D(n.TEXTURE_2D,je,j,ve[0].width,ve[0].height);for(let de=0,ze=ve.length;de<ze;de++)K=ve[de],y.format!==Ei?ae!==null?he?ke&&t.compressedTexSubImage2D(n.TEXTURE_2D,de,0,0,K.width,K.height,ae,K.data):t.compressedTexImage2D(n.TEXTURE_2D,de,j,K.width,K.height,0,K.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):he?ke&&t.texSubImage2D(n.TEXTURE_2D,de,0,0,K.width,K.height,ae,N,K.data):t.texImage2D(n.TEXTURE_2D,de,j,K.width,K.height,0,ae,N,K.data)}else if(y.isDataArrayTexture)if(he){if(xe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,je,j,Y.width,Y.height,Y.depth),ke)if(y.layerUpdates.size>0){let de=bc(Y.width,Y.height,y.format,y.type);for(let ze of y.layerUpdates){let Ke=Y.data.subarray(ze*de/Y.data.BYTES_PER_ELEMENT,(ze+1)*de/Y.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ze,Y.width,Y.height,1,ae,N,Ke)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,ae,N,Y.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,j,Y.width,Y.height,Y.depth,0,ae,N,Y.data);else if(y.isData3DTexture)he?(xe&&t.texStorage3D(n.TEXTURE_3D,je,j,Y.width,Y.height,Y.depth),ke&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,ae,N,Y.data)):t.texImage3D(n.TEXTURE_3D,0,j,Y.width,Y.height,Y.depth,0,ae,N,Y.data);else if(y.isFramebufferTexture){if(xe)if(he)t.texStorage2D(n.TEXTURE_2D,je,j,Y.width,Y.height);else{let de=Y.width,ze=Y.height;for(let Ke=0;Ke<je;Ke++)t.texImage2D(n.TEXTURE_2D,Ke,j,de,ze,0,ae,N,null),de>>=1,ze>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in n){let de=n.canvas;if(de.hasAttribute("layoutsubtree")||de.setAttribute("layoutsubtree","true"),Y.parentNode!==de){de.appendChild(Y),h.add(y),de.onpaint=ze=>{let Ke=ze.changedElements;for(let we of h)Ke.includes(we.image)&&(we.needsUpdate=!0)},de.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Y);else{let Ke=n.RGBA,we=n.RGBA,xt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ke,we,xt,Y)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ve.length>0){if(he&&xe){let de=le(ve[0]);t.texStorage2D(n.TEXTURE_2D,je,j,de.width,de.height)}for(let de=0,ze=ve.length;de<ze;de++)K=ve[de],he?ke&&t.texSubImage2D(n.TEXTURE_2D,de,0,0,ae,N,K):t.texImage2D(n.TEXTURE_2D,de,j,ae,N,K);y.generateMipmaps=!1}else if(he){if(xe){let de=le(Y);t.texStorage2D(n.TEXTURE_2D,je,j,de.width,de.height)}ke&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ae,N,Y)}else t.texImage2D(n.TEXTURE_2D,0,j,ae,N,Y);w(y)&&y.mipmapsAutoUpdate===!0&&b(ee),ce.__version=oe.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function Ae(T,y,B){if(y.image.length!==6)return;let ee=Je(T,y),W=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+B);let oe=i.get(W);if(W.version!==oe.__version||ee===!0){t.activeTexture(n.TEXTURE0+B);let ce=dt.getPrimaries(dt.workingColorSpace),J=y.colorSpace===nn?null:dt.getPrimaries(y.colorSpace),Y=y.colorSpace===nn||ce===J?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y);let ae=y.isCompressedTexture||y.image[0].isCompressedTexture,N=y.image[0]&&y.image[0].isDataTexture,j=[];for(let we=0;we<6;we++)!ae&&!N?j[we]=v(y.image[we],!0,s.maxCubemapSize):j[we]=N?y.image[we].image:y.image[we],j[we]=ie(y,j[we]);let K=j[0],ve=r.convert(y.format,y.colorSpace),he=r.convert(y.type),xe=E(y.internalFormat,ve,he,y.normalized,y.colorSpace),ke=y.isVideoTexture!==!0,je=oe.__version===void 0||ee===!0,de=W.dataReady,ze=S(y,K);qe(n.TEXTURE_CUBE_MAP,y);let Ke;if(y.isDepthTexture){if(xe=x(y.format===tn,y.type),je)if(ke)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,xe,K.width,K.height);else for(let we=0;we<6;we++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,xe,K.width,K.height,0,ve,he,null)}else if(ae){ke&&je&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ze,xe,K.width,K.height);for(let we=0;we<6;we++){Ke=j[we].mipmaps;for(let xt=0;xt<Ke.length;xt++){let Bt=Ke[xt];y.format!==Ei?ve!==null?ke?de&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+we,xt,0,0,Bt.width,Bt.height,ve,Bt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+we,xt,xe,Bt.width,Bt.height,0,Bt.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+we,xt,0,0,Bt.width,Bt.height,ve,he,Bt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+we,xt,xe,Bt.width,Bt.height,0,ve,he,Bt.data)}}}else{if(Ke=y.mipmaps,ke&&je){Ke.length>0&&ze++;let we=le(j[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ze,xe,we.width,we.height)}for(let we=0;we<6;we++)if(N){ke?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,j[we].width,j[we].height,ve,he,j[we].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,xe,j[we].width,j[we].height,0,ve,he,j[we].data);for(let xt=0;xt<Ke.length;xt++){let on=Ke[xt].image[we].image;ke?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+we,xt+1,0,0,on.width,on.height,ve,he,on.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+we,xt+1,xe,on.width,on.height,0,ve,he,on.data)}}else{ke?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,ve,he,j[we]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,xe,ve,he,j[we]);for(let xt=0;xt<Ke.length;xt++){let Bt=Ke[xt];ke?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+we,xt+1,0,0,ve,he,Bt.image[we]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+we,xt+1,xe,ve,he,Bt.image[we])}}}w(y)&&y.mipmapsAutoUpdate===!0&&b(n.TEXTURE_CUBE_MAP),oe.__version=W.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function _e(T,y,B,ee,W,oe){let ce=r.convert(B.format,B.colorSpace),J=r.convert(B.type),Y=E(B.internalFormat,ce,J,B.normalized,B.colorSpace),ae=i.get(y),N=i.get(B);if(N.__renderTarget=y,!ae.__hasExternalTextures){let j=Math.max(1,y.width>>oe),K=Math.max(1,y.height>>oe);W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?t.texImage3D(W,oe,Y,j,K,y.depth,0,ce,J,null):t.texImage2D(W,oe,Y,j,K,0,ce,J,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),ge(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,W,N.__webglTexture,0,gt(y)):(W===n.TEXTURE_2D||W>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ee,W,N.__webglTexture,oe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Xe(T,y,B){if(n.bindRenderbuffer(n.RENDERBUFFER,T),y.depthBuffer){let ee=y.depthTexture,W=ee&&ee.isDepthTexture?ee.type:null,oe=x(y.stencilBuffer,W),ce=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ge(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,gt(y),oe,y.width,y.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,gt(y),oe,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,oe,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,T)}else{let ee=y.textures;for(let W=0;W<ee.length;W++){let oe=ee[W],ce=r.convert(oe.format,oe.colorSpace),J=r.convert(oe.type),Y=E(oe.internalFormat,ce,J,oe.normalized,oe.colorSpace);ge(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,gt(y),Y,y.width,y.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,gt(y),Y,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,Y,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ne(T,y,B){let ee=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let W=i.get(y.depthTexture);W.__renderTarget=y;let oe=ee?y.depthTexture.image[0]:y.depthTexture.image;(!W.__webglTexture||oe.width!==y.width||oe.height!==y.height)&&(oe.width=y.width,oe.height=y.height,y.depthTexture.needsUpdate=!0),ee?ye(y.depthTexture,0):me(y.depthTexture,0);let ce=W.__webglTexture,J=gt(y),Y=ee?n.TEXTURE_CUBE_MAP_POSITIVE_X+B:n.TEXTURE_2D,ae=y.depthTexture.format===tn?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(y.depthTexture.format===Ji)ge(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ae,Y,ce,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,ae,Y,ce,0);else if(y.depthTexture.format===tn)ge(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ae,Y,ce,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,ae,Y,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function nt(T){let y=i.get(T),B=T.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==T.depthTexture){let ee=T.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),ee){let W=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,ee.removeEventListener("dispose",W)};ee.addEventListener("dispose",W),y.__depthDisposeCallback=W}y.__boundDepthTexture=ee}if(T.depthTexture&&!y.__autoAllocateDepthBuffer)if(B)for(let ee=0;ee<6;ee++)Ne(y.__webglFramebuffer[ee],T,ee);else T.texture.mipmaps.length>0?Ne(y.__webglFramebuffer[0],T,0):Ne(y.__webglFramebuffer,T,0);else if(B){y.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[ee]),y.__webglDepthbuffer[ee]===void 0)y.__webglDepthbuffer[ee]=n.createRenderbuffer(),Xe(y.__webglDepthbuffer[ee],T,!1);else{let W=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=y.__webglDepthbuffer[ee];n.bindRenderbuffer(n.RENDERBUFFER,oe),n.framebufferRenderbuffer(n.FRAMEBUFFER,W,n.RENDERBUFFER,oe)}}else if(T.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),Xe(y.__webglDepthbuffer,T,!1);else{let W=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,oe),n.framebufferRenderbuffer(n.FRAMEBUFFER,W,n.RENDERBUFFER,oe)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function rt(T,y,B){let ee=i.get(T);y!==void 0&&_e(ee.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&nt(T)}function ot(T){let y=T.texture,B=i.get(T),ee=i.get(y);T.addEventListener("dispose",I),P(T);let W=T.textures,oe=T.isWebGLCubeRenderTarget===!0,ce=W.length>1;if(ce||(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=y.version,a.memory.textures++),oe){B.__webglFramebuffer=[];for(let J=0;J<6;J++)if(y.mipmaps.length>0){B.__webglFramebuffer[J]=[];for(let Y=0;Y<y.mipmaps.length;Y++)B.__webglFramebuffer[J][Y]=n.createFramebuffer()}else B.__webglFramebuffer[J]=n.createFramebuffer()}else{if(y.mipmaps.length>0){B.__webglFramebuffer=[];for(let J=0;J<y.mipmaps.length;J++)B.__webglFramebuffer[J]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(ce)for(let J=0,Y=W.length;J<Y;J++){let ae=i.get(W[J]);ae.__webglTexture===void 0&&(ae.__webglTexture=n.createTexture(),a.memory.textures++)}if(T.samples>0&&ge(T)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let J=0;J<W.length;J++){let Y=W[J];B.__webglColorRenderbuffer[J]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[J]);let ae=r.convert(Y.format,Y.colorSpace),N=r.convert(Y.type),j=E(Y.internalFormat,ae,N,Y.normalized,Y.colorSpace,T.isXRRenderTarget===!0),K=gt(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,K,j,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+J,n.RENDERBUFFER,B.__webglColorRenderbuffer[J])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),Xe(B.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(oe){t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),qe(n.TEXTURE_CUBE_MAP,y);for(let J=0;J<6;J++)if(y.mipmaps.length>0)for(let Y=0;Y<y.mipmaps.length;Y++)_e(B.__webglFramebuffer[J][Y],T,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Y);else _e(B.__webglFramebuffer[J],T,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);w(y)?b(n.TEXTURE_CUBE_MAP):y.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),t.unbindTexture()}else if(ce){for(let J=0,Y=W.length;J<Y;J++){let ae=W[J],N=i.get(ae),j=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(j=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(j,N.__webglTexture),qe(j,ae),_e(B.__webglFramebuffer,T,ae,n.COLOR_ATTACHMENT0+J,j,0),w(ae)&&b(j)}t.unbindTexture()}else{let J=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(J=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(J,ee.__webglTexture),qe(J,y),y.mipmaps.length>0)for(let Y=0;Y<y.mipmaps.length;Y++)_e(B.__webglFramebuffer[Y],T,y,n.COLOR_ATTACHMENT0,J,Y);else _e(B.__webglFramebuffer,T,y,n.COLOR_ATTACHMENT0,J,0);w(y)?b(J):y.mipmaps.length>0&&n.texParameteri(J,n.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),t.unbindTexture()}T.depthBuffer&&nt(T)}function k(T){let y=T.textures;for(let B=0,ee=y.length;B<ee;B++){let W=y[B];if(w(W)&&W.mipmapsAutoUpdate===!0){let oe=C(T),ce=i.get(W).__webglTexture;t.bindTexture(oe,ce),b(oe),t.unbindTexture()}}}let St=[];function Ye(T){if(T.samples>0){if(ge(T)===!1){let y=T.textures,B=T.width,ee=T.height,W=n.COLOR_BUFFER_BIT,oe=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=i.get(T),J=y.length>1;if(J)for(let ae=0;ae<y.length;ae++)t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),T.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let ae=0;ae<y.length;ae++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(W|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(W|=n.STENCIL_BUFFER_BIT)),J){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ce.__webglColorRenderbuffer[ae]);let N=i.get(y[ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,N,0)}n.blitFramebuffer(0,0,B,ee,0,0,B,ee,W,n.NEAREST),l===!0&&(St.length=0,St.push(n.COLOR_ATTACHMENT0+ae),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&St.push(oe),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,St))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),J)for(let ae=0;ae<y.length;ae++){t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,ce.__webglColorRenderbuffer[ae]);let N=i.get(y[ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,N,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&l){let y=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function gt(T){return Math.min(s.maxSamples,T.samples)}function ge(T){let y=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function q(T){let y=a.render.frame;d.get(T)!==y&&(d.set(T,y),T.update())}function ie(T,y){let B=T.colorSpace,ee=T.format,W=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==Ws&&B!==nn&&(dt.getTransfer(B)===mt?(ee!==Ei||W!==ii)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ge("WebGLTextures: Unsupported texture color space:",B)),y}function le(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=Ie,this.resetTextureUnits=te,this.getTextureUnits=se,this.setTextureUnits=Me,this.setTexture2D=me,this.setTexture2DArray=Ce,this.setTexture3D=Be,this.setTextureCube=ye,this.rebindTextures=rt,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=ge,this.dispose=U}function yx(n,e){function t(i,s=nn){let r,a=dt.getTransfer(s);if(i===ii)return n.UNSIGNED_BYTE;if(i===Qa)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ja)return n.UNSIGNED_SHORT_5_5_5_1;if(i===rc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ac)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===nc)return n.BYTE;if(i===sc)return n.SHORT;if(i===ws)return n.UNSIGNED_SHORT;if(i===Ka)return n.INT;if(i===Mi)return n.UNSIGNED_INT;if(i===wi)return n.FLOAT;if(i===Ti)return n.HALF_FLOAT;if(i===oc)return n.ALPHA;if(i===lc)return n.RGB;if(i===Ei)return n.RGBA;if(i===Ji)return n.DEPTH_COMPONENT;if(i===tn)return n.DEPTH_STENCIL;if(i===cc)return n.RED;if(i===eo)return n.RED_INTEGER;if(i===Sn)return n.RG;if(i===to)return n.RG_INTEGER;if(i===io)return n.RGBA_INTEGER;if(i===vr||i===yr||i===br||i===_r)if(a===mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===vr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===_r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===vr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===yr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===br)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===_r)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===no||i===so||i===ro||i===ao)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===no)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===so)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ro)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ao)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===oo||i===lo||i===co||i===ho||i===uo||i===Sr||i===po)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===oo||i===lo)return a===mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===co)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===ho)return r.COMPRESSED_R11_EAC;if(i===uo)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Sr)return r.COMPRESSED_RG11_EAC;if(i===po)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===fo||i===mo||i===go||i===xo||i===vo||i===yo||i===bo||i===_o||i===So||i===Mo||i===wo||i===To||i===Eo||i===Ao)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===fo)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===mo)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===go)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===xo)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===vo)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===yo)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===bo)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===_o)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===So)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Mo)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===wo)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===To)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Eo)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ao)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Co||i===Ro||i===Po)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Co)return a===mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ro)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Po)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Io||i===Lo||i===Mr||i===Do)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Io)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Lo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Mr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Do)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Un?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var bx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_x=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Nc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new er(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Bi({vertexShader:bx,fragmentShader:_x,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ve(new mi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Fc=class extends Li{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,h=null,u=null,p=null,f=null,_=typeof XRWebGLBinding<"u",g=new Nc,m={},v=t.getContextAttributes(),w=null,b=null,C=[],E=[],x=new fe,S=null,P=null,A=new $t;A.viewport=new Tt;let R=new $t;R.viewport=new Tt;let I=[A,R],z=new Xa,L=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let me=C[Q];return me===void 0&&(me=new us,C[Q]=me),me.getTargetRaySpace()},this.getControllerGrip=function(Q){let me=C[Q];return me===void 0&&(me=new us,C[Q]=me),me.getGripSpace()},this.getHand=function(Q){let me=C[Q];return me===void 0&&(me=new us,C[Q]=me),me.getHandSpace()};function V(Q){let me=E.indexOf(Q.inputSource);if(me===-1)return;let Ce=C[me];Ce!==void 0&&(Ce.update(Q.inputSource,Q.frame,c||a),Ce.dispatchEvent({type:Q.type,data:Q.inputSource}))}function H(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",re);for(let Q=0;Q<C.length;Q++){let me=E[Q];me!==null&&(E[Q]=null,C[Q].disconnect(me))}L=null,U=null,g.reset();for(let Q in m)delete m[Q];if(e.setRenderTarget(w),p=null,u=null,h=null,s=null,b=null,Ie.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(x.width,x.height,!1),P!==null){let Q=P.camera;Q.fov=P.fov,Q.zoom=P.zoom,Q.updateProjectionMatrix(),P=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,i.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return f},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",H),s.addEventListener("inputsourceschange",re),v.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ce=null,Be=null,ye=null;v.depth&&(ye=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ce=v.stencil?tn:Ji,Be=v.stencil?Un:Mi);let Ue={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};h=this.getBinding(),u=h.createProjectionLayer(Ue),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),b=new ai(u.textureWidth,u.textureHeight,{format:Ei,type:ii,depthTexture:new Qi(u.textureWidth,u.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,Ce),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Ce={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Ce),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new ai(p.framebufferWidth,p.framebufferHeight,{format:Ei,type:ii,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ie.setContext(s),Ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function re(Q){for(let me=0;me<Q.removed.length;me++){let Ce=Q.removed[me],Be=E.indexOf(Ce);Be>=0&&(E[Be]=null,C[Be].disconnect(Ce))}for(let me=0;me<Q.added.length;me++){let Ce=Q.added[me],Be=E.indexOf(Ce);if(Be===-1){for(let Ue=0;Ue<C.length;Ue++)if(Ue>=E.length){E.push(Ce),Be=Ue;break}else if(E[Ue]===null){E[Ue]=Ce,Be=Ue;break}if(Be===-1)break}let ye=C[Be];ye&&ye.connect(Ce)}}function Z(Q,me){me===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(me.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let me=Q.near,Ce=Q.far;g.texture!==null&&(g.depthNear>0&&(me=g.depthNear),g.depthFar>0&&(Ce=g.depthFar)),z.near=R.near=A.near=me,z.far=R.far=A.far=Ce,(L!==z.near||U!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),L=z.near,U=z.far),z.layers.mask=Q.layers.mask|6,A.layers.mask=z.layers.mask&-5,R.layers.mask=z.layers.mask&-3;let Be=Q.parent,ye=z.cameras;Z(z,Be);for(let Ue=0;Ue<ye.length;Ue++)Z(ye[Ue],Be);z.projectionMatrix.copy(A.projectionMatrix),z.projectionMatrixInverse.copy(A.projectionMatrixInverse),P===null&&Q.isPerspectiveCamera&&(P={camera:Q,fov:Q.fov,zoom:Q.zoom}),te(Q,z,Be)};function te(Q,me,Ce){Ce===null?Q.matrix.copy(me.matrixWorld):(Q.matrix.copy(Ce.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(me.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(me.projectionMatrix),Q.projectionMatrixInverse.copy(me.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=ya*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(Q){l=Q,u!==null&&(u.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(z)},this.getCameraTexture=function(Q){return m[Q]};let se=null;function Me(Q,me){if(d=me.getViewerPose(c||a),f=me,d!==null){let Ce=d.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let Be=!1;Ce.length!==z.cameras.length&&(z.cameras.length=0,Be=!0);for(let Oe=0;Oe<Ce.length;Oe++){let qe=Ce[Oe],Je=null;if(p!==null)Je=p.getViewport(qe);else{let pe=h.getViewSubImage(u,qe);Je=pe.viewport,Oe===0&&(e.setRenderTargetTextures(b,pe.colorTexture,pe.depthStencilTexture),e.setRenderTarget(b))}let ne=I[Oe];ne===void 0&&(ne=new $t,ne.layers.enable(Oe),ne.viewport=new Tt,I[Oe]=ne),ne.matrix.fromArray(qe.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(qe.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(Je.x,Je.y,Je.width,Je.height),Oe===0&&(z.matrix.copy(ne.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Be===!0&&z.cameras.push(ne)}let ye=s.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){h=i.getBinding();let Oe=h.getDepthInformation(Ce[0]);Oe&&Oe.isValid&&Oe.texture&&g.init(Oe,s.renderState)}if(ye&&ye.includes("camera-access")&&_){e.state.unbindTexture(),h=i.getBinding();for(let Oe=0;Oe<Ce.length;Oe++){let qe=Ce[Oe].camera;if(qe){let Je=m[qe];Je||(Je=new er,m[qe]=Je);let ne=h.getCameraImage(qe);Je.sourceTexture=ne}}}}for(let Ce=0;Ce<C.length;Ce++){let Be=E[Ce],ye=C[Ce];Be!==null&&ye!==void 0&&ye.update(Be,me,c||a)}se&&se(Q,me),me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:me}),f=null}let Ie=new zh;Ie.setAnimationLoop(Me),this.setAnimationLoop=function(Q){se=Q},this.dispose=function(){}}},Sx=new bt,Jh=new We;Jh.set(-1,0,0,0,1,0,0,0,1);function Mx(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,xc(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,v,w,b){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),h(g,m)):m.isMeshPhongMaterial?(r(g,m),d(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),u(g,m),m.isMeshPhysicalMaterial&&p(g,m,b)):m.isMeshMatcapMaterial?(r(g,m),f(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),_(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,v,w):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Vt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Vt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let v=e.get(m),w=v.envMap,b=v.envMapRotation;w&&(g.envMap.value=w,g.envMapRotation.value.setFromMatrix4(Sx.makeRotationFromEuler(b)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Jh),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,v,w){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*v,g.scale.value=w*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function d(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function p(g,m,v){g.ior.value=m.ior,m.diffuseRoughness>0&&(g.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Vt&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function f(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){let v=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function wx(n,e,t,i){let s={},r={};function a(v,w){let b=w.program;i.uniformBlockBinding(v,b,s[v.id])}function o(v,w){let b=s[v.id];b===void 0&&(f(v),b=l(v),s[v.id]=b,v.addEventListener("dispose",g));let C=w.program;i.updateUBOMapping(v,C);let E=e.render.frame;r[v.id]!==E&&(c(v),r[v.id]=E)}function l(v){let w=n.createBuffer(),b=v.__size,C=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,b,C),n.bindBuffer(n.UNIFORM_BUFFER,null),w}function c(v){let w=s[v.id],b=v.uniforms,C=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let E=0,x=b.length;E<x;E++){let S=b[E];if(Array.isArray(S))for(let P=0,A=S.length;P<A;P++)d(S[P],E,P,C);else d(S,E,0,C)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(v,w,b,C){if(u(v,w,b,C)===!0){let E=v.__offset,x=v.value;if(Array.isArray(x)){let S=0;for(let P=0;P<x.length;P++){let A=x[P],R=_(A,!0);h(A,v.__data,S),S+=R.storage/Float32Array.BYTES_PER_ELEMENT}}else h(x,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,E,v.__data)}}function h(v,w,b){typeof v=="number"||typeof v=="boolean"?w[b]=v:v.isMatrix3?(w[b]=v.elements[0],w[b+1]=v.elements[1],w[b+2]=v.elements[2],w[b+3]=0,w[b+4]=v.elements[3],w[b+5]=v.elements[4],w[b+6]=v.elements[5],w[b+7]=0,w[b+8]=v.elements[6],w[b+9]=v.elements[7],w[b+10]=v.elements[8],w[b+11]=0):ArrayBuffer.isView(v)?w.set(v.subarray(0,w.length-b),b):v.toArray(w,b)}function u(v,w,b,C){let E=v.value,x=w+"_"+b;if(Array.isArray(E)){C[x]===void 0&&(C[x]=[]);let S=C[x],P=!1;for(let A=0;A<E.length;A++)p(E[A],S,A)===!0&&(P=!0);return P}return p(E,C,x)}function p(v,w,b){if(w[b]===void 0)return typeof v=="number"||typeof v=="boolean"?w[b]=v:ArrayBuffer.isView(v)?w[b]=v.slice():w[b]=v.clone(),!0;{let C=w[b];if(typeof v=="number"||typeof v=="boolean"){if(C!==v)return w[b]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(C.equals(v)===!1)return C.copy(v),!0}}return!1}function f(v){let w=v.uniforms,b=0,C=16;for(let x=0,S=w.length;x<S;x++){let P=Array.isArray(w[x])?w[x]:[w[x]];for(let A=0,R=P.length;A<R;A++){let I=P[A],z=Array.isArray(I.value)?I.value:[I.value],L=Array.isArray(w[x])||Array.isArray(I.value),U=b;for(let H=0,re=z.length;H<re;H++){let Z=z[H],te=_(Z,L),se=b%C,Me=se%te.boundary,Ie=se+Me;b+=Me,Ie!==0&&C-Ie<te.storage&&(b+=C-Ie),H===0&&(U=b),b+=te.storage}let V=I.type==="int"?Int32Array:I.type==="uint"?Uint32Array:Float32Array;I.__data=new V((b-U)/Float32Array.BYTES_PER_ELEMENT),I.__offset=U}}let E=b%C;return E>0&&(b+=C-E),v.__size=b,v.__cache={},this}function _(v,w){let b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=16,b.storage=48):v.isMatrix4?(b.boundary=16,b.storage=64):v.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(b.boundary=16,b.storage=v.byteLength):He("WebGLRenderer: Unsupported uniform value type.",v),w===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function g(v){let w=v.target;w.removeEventListener("dispose",g),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function m(){for(let v in s)n.deleteBuffer(s[v]);s={},r={}}return{bind:a,update:o,dispose:m}}var Tx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),zi=null;function Ex(){return zi===null&&(zi=new wa(Tx,16,16,Sn,Ti),zi.name="DFG_LUT",zi.minFilter=jt,zi.magFilter=jt,zi.wrapS=Pi,zi.wrapT=Pi,zi.generateMipmaps=!1,zi.needsUpdate=!0),zi}var Uo=class{constructor(e={}){let{canvas:t=ah(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:p=ii}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;let _=p,g=new Set([io,to,eo]),m=new Set([ii,Mi,ws,Un,Qa,ja]),v=new Uint32Array(4),w=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]},C=null,E=null,x=[],S=[],P=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,R=!1,I=null,z=null,L=null,U=null;this._outputColorSpace=Pt;let V=0,H=0,re=null,Z=-1,te=null,se=new Tt,Me=new Tt,Ie=null,Q=new $e(0),me=0,Ce=t.width,Be=t.height,ye=1,Ue=null,vt=null,Oe=new Tt(0,0,Ce,Be),qe=new Tt(0,0,Ce,Be),Je=!1,ne=new xn,pe=new Ta,ue=!1,Ae=!1,_e=new bt,Xe=new O,Ne=new Tt,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},rt=!1;function ot(){return re===null?ye:1}let k=i;function St(M,F){return t.getContext(M,F)}let Ye,gt,ge,q,ie,le,T,y,B,ee,W,oe,ce,J,Y,ae,N,j,K,ve,he,xe,ke;try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",ze,!1),t.addEventListener("webglcontextrestored",Ke,!1),t.addEventListener("webglcontextcreationerror",we,!1),k===null){let F="webgl2";if(k=St(F,M),k===null)throw St(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}je()}catch(M){throw t.removeEventListener("webglcontextlost",ze,!1),t.removeEventListener("webglcontextrestored",Ke,!1),t.removeEventListener("webglcontextcreationerror",we,!1),Ge("WebGLRenderer: "+M.message),M}function je(){Ye=new Bg(k),Ye.init(),he=new yx(k,Ye),gt=new Eg(k,Ye,e,he),ge=new xx(k,Ye),gt.reversedDepthBuffer&&u&&ge.buffers.depth.setReversed(!0),z=k.createFramebuffer(),L=k.createFramebuffer(),U=k.createFramebuffer(),q=new zg(k),ie=new nx,le=new vx(k,Ye,ge,ie,gt,he,q),T=new kg(A),y=new Hp(k),xe=new wg(k,y),B=new Ug(k,y,q,xe),ee=new Gg(k,B,y,xe,q),j=new Hg(k,gt,le),Y=new Ag(ie),W=new ix(A,T,Ye,gt,xe,Y),oe=new Mx(A,ie),ce=new rx,J=new hx(Ye),N=new Mg(A,T,ge,ee,f,l),ae=new gx(A,ee,gt),ke=new wx(k,q,gt,ge),K=new Tg(k,Ye,q),ve=new Og(k,Ye,q),q.programs=W.programs,A.capabilities=gt,A.extensions=Ye,A.properties=ie,A.renderLists=ce,A.shadowMap=ae,A.state=ge,A.info=q}_!==ii&&(P=new Wg(_,t.width,t.height,o,s,r));let de=new Fc(A,k);this.xr=de,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let M=Ye.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Ye.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function(M){M!==void 0&&(ye=M,this.setSize(Ce,Be,!1))},this.getSize=function(M){return M.set(Ce,Be)},this.setSize=function(M,F,$=!0){if(de.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}Ce=M,Be=F,t.width=Math.floor(M*ye),t.height=Math.floor(F*ye),$===!0&&(t.style.width=M+"px",t.style.height=F+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,M,F)},this.getDrawingBufferSize=function(M){return M.set(Ce*ye,Be*ye).floor()},this.setDrawingBufferSize=function(M,F,$){Ce=M,Be=F,ye=$,t.width=Math.floor(M*$),t.height=Math.floor(F*$),this.setViewport(0,0,M,F)},this.setEffects=function(M){if(_===ii){Ge("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let F=0;F<M.length;F++)if(M[F].isOutputPass===!0){He("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(se)},this.getViewport=function(M){return M.copy(Oe)},this.setViewport=function(M,F,$,G){M.isVector4?Oe.set(M.x,M.y,M.z,M.w):Oe.set(M,F,$,G),ge.viewport(se.copy(Oe).multiplyScalar(ot()).round())},this.getScissor=function(M){return M.copy(qe)},this.setScissor=function(M,F,$,G){M.isVector4?qe.set(M.x,M.y,M.z,M.w):qe.set(M,F,$,G),ge.scissor(Me.copy(qe).multiplyScalar(ot()).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(M){ge.setScissorTest(Je=M)},this.setOpaqueSort=function(M){Ue=M},this.setTransparentSort=function(M){vt=M},this.getClearColor=function(M){return M.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(M=!0,F=!0,$=!0){let G=0;if(M){let X=!1;if(re!==null){let Se=re.texture.format;X=g.has(Se)}if(X){let Se=re.texture.type,Pe=m.has(Se),be=N.getClearColor(),Ee=N.getClearAlpha(),Fe=be.r,Ze=be.g,lt=be.b;Pe?(v[0]=Fe,v[1]=Ze,v[2]=lt,v[3]=Ee,k.clearBufferuiv(k.COLOR,0,v)):(w[0]=Fe,w[1]=Ze,w[2]=lt,w[3]=Ee,k.clearBufferiv(k.COLOR,0,w))}else G|=k.COLOR_BUFFER_BIT}F&&(G|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(G|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&k.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),I=M},this.dispose=function(){t.removeEventListener("webglcontextlost",ze,!1),t.removeEventListener("webglcontextrestored",Ke,!1),t.removeEventListener("webglcontextcreationerror",we,!1),N.dispose(),ce.dispose(),J.dispose(),le.dispose(),ie.dispose(),T.dispose(),ee.dispose(),B.dispose(),xe.dispose(),ke.dispose(),W.dispose(),de.dispose(),de.removeEventListener("sessionstart",Vc),de.removeEventListener("sessionend",Wc),Tn.stop()};function ze(M){M.preventDefault(),fc("WebGLRenderer: Context Lost."),R=!0}function Ke(){fc("WebGLRenderer: Context Restored."),R=!1;let M=q.autoReset,F=ae.enabled,$=ae.autoUpdate,G=ae.needsUpdate,X=ae.type;je(),q.autoReset=M,ae.enabled=F,ae.autoUpdate=$,ae.needsUpdate=G,ae.type=X}function we(M){Ge("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function xt(M){let F=M.target;F.removeEventListener("dispose",xt),Bt(F)}function Bt(M){on(M),ie.remove(M)}function on(M){let F=ie.get(M).programs;F!==void 0&&(F.forEach(function($){W.releaseProgram($)}),M.isShaderMaterial&&W.releaseShaderCache(M))}this.renderBufferDirect=function(M,F,$,G,X,Se){F===null&&(F=nt);let Pe=X.isMesh&&X.matrixWorld.determinantAffine()<0,be=vu(M,F,$,G,X);ge.setMaterial(G,Pe);let Ee=$.index,Fe=1;if(G.wireframe===!0){if(Ee=B.getWireframeAttribute($),Ee===void 0)return;Fe=2}let Ze=$.drawRange,lt=$.attributes.position,Le=Ze.start*Fe,ct=(Ze.start+Ze.count)*Fe;Se!==null&&(Le=Math.max(Le,Se.start*Fe),ct=Math.min(ct,(Se.start+Se.count)*Fe)),Ee!==null?(Le=Math.max(Le,0),ct=Math.min(ct,Ee.count)):lt!=null&&(Le=Math.max(Le,0),ct=Math.min(ct,lt.count));let Ct=ct-Le;if(Ct<0||Ct===1/0)return;xe.setup(X,G,be,$,Ee);let Mt,yt=K;if(Ee!==null&&(Mt=y.get(Ee),yt=ve,yt.setIndex(Mt)),X.isMesh)G.wireframe===!0?(ge.setLineWidth(G.wireframeLinewidth*ot()),yt.setMode(k.LINES)):yt.setMode(k.TRIANGLES);else if(X.isLine){let Xt=G.linewidth;Xt===void 0&&(Xt=1),ge.setLineWidth(Xt*ot()),X.isLineSegments?yt.setMode(k.LINES):X.isLineLoop?yt.setMode(k.LINE_LOOP):yt.setMode(k.LINE_STRIP)}else X.isPoints?yt.setMode(k.POINTS):X.isSprite&&yt.setMode(k.TRIANGLES);if(X.isBatchedMesh)if(Ye.get("WEBGL_multi_draw"))yt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let Xt=X._multiDrawStarts,De=X._multiDrawCounts,Qt=X._multiDrawCount,pt=Ee?y.get(Ee).bytesPerElement:1,En=ie.get(G).currentProgram.getUniforms();for(let qt=0;qt<Qt;qt++)En.setValue(k,"_gl_DrawID",qt),yt.render(Xt[qt]/pt,De[qt])}else if(X.isInstancedMesh)yt.renderInstances(Le,Ct,X.count);else if($.isInstancedBufferGeometry){let Xt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,De=Math.min($.instanceCount,Xt);yt.renderInstances(Le,Ct,De)}else yt.render(Le,Ct)};function Gc(M,F,$,G){I!==null&&M.isNodeMaterial&&I.setObject(G,M),ue===!0&&Y.setState(M,$,!1),M.transparent===!0&&M.side===Dt&&M.forceSinglePass===!1?(M.side=Vt,M.needsUpdate=!0,Ns(M,F,G),M.side=_n,M.needsUpdate=!0,Ns(M,F,G),M.side=Dt):Ns(M,F,G)}this.compile=function(M,F,$=null){$===null&&($=M),I!==null&&I.renderStart(M,F,$),E=J.get($),E.init(F),S.push(E),$.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(E.pushLight(X),X.castShadow&&E.pushShadow(X))}),M!==$&&M.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(E.pushLight(X),X.castShadow&&E.pushShadow(X))}),E.setupLights(),I!==null&&I.updateLights(E.state.lightsArray),Ae=this.localClippingEnabled,ue=Y.init(this.clippingPlanes,Ae),ue===!0&&Y.setGlobalState(this.clippingPlanes,F),I!==null&&ae.render(E.state.shadowsArray,$,F);let G=new Set;return M.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let Se=X.material;if(Se)if(Array.isArray(Se))for(let Pe=0;Pe<Se.length;Pe++){let be=Se[Pe];Gc(be,$,F,X),G.add(be)}else Gc(Se,$,F,X),G.add(Se)}),E=S.pop(),I!==null&&I.renderEnd(),G},this.compileAsync=function(M,F,$=null){let G=this.compile(M,F,$);return new Promise(X=>{function Se(){if(G.forEach(function(Pe){let Ee=ie.get(Pe).currentProgram;(Ee===void 0||Ee.isReady())&&G.delete(Pe)}),G.size===0){X(M);return}setTimeout(Se,10)}Ye.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let sl=null;function gu(M){sl&&sl(M)}function Vc(){Tn.stop()}function Wc(){Tn.start()}let Tn=new zh;Tn.setAnimationLoop(gu),typeof self<"u"&&Tn.setContext(self),this.setAnimationLoop=function(M){sl=M,de.setAnimationLoop(M),M===null?Tn.stop():Tn.start()},de.addEventListener("sessionstart",Vc),de.addEventListener("sessionend",Wc),this.render=function(M,F){if(F!==void 0&&F.isCamera!==!0){Ge("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;I!==null&&I.renderStart(M,F);let $=de.enabled===!0&&de.isPresenting===!0,G=P!==null&&(re===null||$)&&P.begin(A,re);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(de.cameraAutoUpdate===!0&&de.updateCamera(F),F=de.getCamera()),M.isScene===!0&&M.onBeforeRender(A,M,F,re),E=J.get(M,S.length),E.init(F),E.state.textureUnits=le.getTextureUnits(),S.push(E),_e.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?pe.setFromArrayCamera(F):ne.setFromProjectionMatrix(_e,ui,F.reversedDepth),Ae=this.localClippingEnabled,ue=Y.init(this.clippingPlanes,Ae),C=ce.get(M,x.length),C.init(),x.push(C),this.info.render.frame++,de.enabled===!0&&de.isPresenting===!0){let Pe=A.xr.getDepthSensingMesh();Pe!==null&&rl(Pe,F,-1/0,A.sortObjects)}rl(M,F,0,A.sortObjects),C.finish(),I!==null&&I.updateLights(E.state.lightsArray),A.sortObjects===!0&&C.sort(Ue,vt),rt=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,rt&&N.addToRenderList(C,M),this.info.autoReset===!0&&this.info.reset(),ue===!0&&Y.beginShadows();let X=E.state.shadowsArray;if(ae.render(X,M,F),ue===!0&&Y.endShadows(),(G&&P.hasRenderPass())===!1){let Pe=C.opaque,be=C.transmissive;if(E.setupLights(),F.isArrayCamera){let Ee=F.cameras;if(be.length>0)for(let Fe=0,Ze=Ee.length;Fe<Ze;Fe++){let lt=Ee[Fe];qc(Pe,be,M,lt)}rt&&N.render(M);for(let Fe=0,Ze=Ee.length;Fe<Ze;Fe++){let lt=Ee[Fe];Xc(C,M,lt,lt.viewport)}}else be.length>0&&qc(Pe,be,M,F),rt&&N.render(M),Xc(C,M,F)}re!==null&&H===0&&(le.updateMultisampleRenderTarget(re),le.updateRenderTargetMipmap(re)),G&&P.end(A),M.isScene===!0&&M.onAfterRender(A,M,F),xe.resetDefaultState(),Z=-1,te=null,S.pop(),S.length>0?(E=S[S.length-1],le.setTextureUnits(E.state.textureUnits),ue===!0&&Y.setGlobalState(A.clippingPlanes,E.state.camera)):E=null,x.pop(),x.length>0?C=x[x.length-1]:C=null,I!==null&&I.renderEnd()};function rl(M,F,$,G){if(M.visible===!1)return;if(M.layers.test(F.layers)){if(M.isGroup)$=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(F);else if(M.isLight)E.pushLight(M),M.castShadow&&E.pushShadow(M);else if(M.isSprite){let Pe=F.isArrayCamera?pe:ne;if(!M.frustumCulled||M.intersectsFrustum(Pe)){G&&Ne.setFromMatrixPosition(M.matrixWorld).applyMatrix4(_e);let be=ee.update(M),Ee=M.material;Ee.visible&&C.push(M,be,Ee,$,Ne.z,null,F)}}else if(M.isMesh||M.isLine||M.isPoints){let Pe=F.isArrayCamera?pe:ne;if(!M.frustumCulled||M.intersectsFrustum(Pe)){let be=ee.update(M),Ee=M.material;if(G&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ne.copy(M.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Ne.copy(be.boundingSphere.center)),Ne.applyMatrix4(M.matrixWorld).applyMatrix4(_e)),Array.isArray(Ee)){let Fe=be.groups;for(let Ze=0,lt=Fe.length;Ze<lt;Ze++){let Le=Fe[Ze],ct=Ee[Le.materialIndex];ct&&ct.visible&&C.push(M,be,ct,$,Ne.z,Le,F)}}else Ee.visible&&C.push(M,be,Ee,$,Ne.z,null,F)}}}let Se=M.children;for(let Pe=0,be=Se.length;Pe<be;Pe++)rl(Se[Pe],F,$,G)}function Xc(M,F,$,G){let{opaque:X,transmissive:Se,transparent:Pe}=M;E.setupLightsView($),ue===!0&&Y.setGlobalState(A.clippingPlanes,$),G&&ge.viewport(se.copy(G)),X.length>0&&Ur(X,F,$),Se.length>0&&Ur(Se,F,$),Pe.length>0&&Ur(Pe,F,$),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function qc(M,F,$,G){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[G.id]===void 0){let Le=Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[G.id]=new ai(1,1,{generateMipmaps:!0,type:Le?Ti:ii,minFilter:en,samples:Math.max(4,gt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:dt.workingColorSpace})}let Se=E.state.transmissionRenderTarget[G.id],Pe=G.viewport||se;Se.setSize(Pe.z*A.transmissionResolutionScale,Pe.w*A.transmissionResolutionScale);let be=A.getRenderTarget(),Ee=A.getActiveCubeFace(),Fe=A.getActiveMipmapLevel();A.setRenderTarget(Se),A.getClearColor(Q),me=A.getClearAlpha(),me<1&&A.setClearColor(16777215,.5),A.clear(),rt&&N.render($);let Ze=A.toneMapping;A.toneMapping=Oi;let lt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),E.setupLightsView(G),ue===!0&&Y.setGlobalState(A.clippingPlanes,G),Ur(M,$,G),le.updateMultisampleRenderTarget(Se),le.updateRenderTargetMipmap(Se),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let ct=0,Ct=F.length;ct<Ct;ct++){let Mt=F[ct],{object:yt,geometry:Xt,material:De,group:Qt}=Mt;if(De.side===Dt&&yt.layers.test(G.layers)){let pt=De.side;De.side=Vt,De.needsUpdate=!0,Yc(yt,$,G,Xt,De,Qt),De.side=pt,De.needsUpdate=!0,Le=!0}}Le===!0&&(le.updateMultisampleRenderTarget(Se),le.updateRenderTargetMipmap(Se))}A.setRenderTarget(be,Ee,Fe),A.setClearColor(Q,me),lt!==void 0&&(G.viewport=lt),A.toneMapping=Ze}function Ur(M,F,$){let G=F.isScene===!0?F.overrideMaterial:null;for(let X=0,Se=M.length;X<Se;X++){let Pe=M[X],{object:be,geometry:Ee,group:Fe}=Pe,Ze=Pe.material;Ze.allowOverride===!0&&G!==null&&(Ze=G),be.layers.test($.layers)&&Yc(be,F,$,Ee,Ze,Fe)}}function Yc(M,F,$,G,X,Se){I!==null&&X.isNodeMaterial&&I.setObject(M,X),M.onBeforeRender(A,F,$,G,X,Se),M.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),X.onBeforeRender(A,F,$,G,M,Se),X.transparent===!0&&X.side===Dt&&X.forceSinglePass===!1?(X.side=Vt,X.needsUpdate=!0,A.renderBufferDirect($,F,G,X,M,Se),X.side=_n,X.needsUpdate=!0,A.renderBufferDirect($,F,G,X,M,Se),X.side=Dt):A.renderBufferDirect($,F,G,X,M,Se),M.onAfterRender(A,F,$,G,X,Se)}function Zc(M){let F=0;for(let $ of M)$.texture!==null&&F++;return F}function Ns(M,F,$){F.isScene!==!0&&(F=nt);let G=ie.get(M),X=E.state.lights,Se=E.state.shadowsArray,Pe=X.state.version,be=W.getParameters(M,X.state,Se,F,$,E.state.lightProbeGridArray),Ee=W.getProgramCacheKey(be),Fe=G.programs;G.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?F.environment:null,G.fog=F.fog;let Ze=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;G.envMap=T.get(M.envMap||G.environment,Ze),G.envMapRotation=G.environment!==null&&M.envMap===null?F.environmentRotation:M.envMapRotation,Fe===void 0&&(M.addEventListener("dispose",xt),Fe=new Map,G.programs=Fe,G.programVariants=new Map);let lt=Fe.get(Ee);if(lt!==void 0){if(G.currentProgram===lt&&G.lightsStateVersion===Pe)return Jc(M,be),lt}else be.uniforms=W.getUniforms(M),I!==null&&M.isNodeMaterial&&I.build(M,$,be),M.onBeforeCompile(be,A),lt=W.acquireProgram(be,Ee),Fe.set(Ee,lt),G.uniforms=be.uniforms;let Le=G.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Le.clippingPlanes=Y.uniform),Jc(M,be),G.needsLights=bu(M),G.lightsStateVersion=Pe,G.needsLights&&(Le.ambientLightColor.value=X.state.ambient,Le.lightProbe.value=X.state.probe,Le.sunLights.value=X.state.sun,Le.sunLightShadows.value=X.state.sunShadow,Le.directionalLights.value=X.state.directional,Le.directionalLightShadows.value=X.state.directionalShadow,Le.spotLights.value=X.state.spot,Le.spotLightShadows.value=X.state.spotShadow,Le.rectAreaLights.value=X.state.rectArea,Le.ltc_1.value=X.state.rectAreaLTC1,Le.ltc_2.value=X.state.rectAreaLTC2,Le.pointLights.value=X.state.point,Le.pointLightShadows.value=X.state.pointShadow,Le.hemisphereLights.value=X.state.hemi,Le.sunShadowMatrix.value=X.state.sunShadowMatrix,Le.sunShadowCascade.value=X.state.sunShadowCascade,Le.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Le.spotLightMatrix.value=X.state.spotLightMatrix,Le.spotLightMap.value=X.state.spotLightMap,Le.pointShadowMatrix.value=X.state.pointShadowMatrix),G.numLightProbeGrids=Zc(E.state.lightProbeGridArray),G.currentProgram=lt,G.uniformsList=null,lt}function xu(M,F,$,G,X){let Se=ie.get(M),Pe=Se.currentProgram.id+","+G+","+X,be=Se.programVariants.get(Pe);return be===void 0?(be=Ns(M,F,$),Se.programVariants.set(Pe,be)):(Se.currentProgram=be,Se.uniformsList=null,Se.outputColorSpace=G,Se.toneMapping=X),be}function $c(M){if(M.uniformsList===null){let F=M.currentProgram.getUniforms();M.uniformsList=Es.seqWithValue(F.seq,M.uniforms)}return M.uniformsList}function Jc(M,F){let $=ie.get(M);$.outputColorSpace=F.outputColorSpace,$.batching=F.batching,$.batchingColor=F.batchingColor,$.instancing=F.instancing,$.instancingColor=F.instancingColor,$.instancingMorph=F.instancingMorph,$.skinning=F.skinning,$.morphTargets=F.morphTargets,$.morphNormals=F.morphNormals,$.morphColors=F.morphColors,$.morphTargetsCount=F.morphTargetsCount,$.numClippingPlanes=F.numClippingPlanes,$.numIntersection=F.numClipIntersection,$.vertexAlphas=F.vertexAlphas,$.vertexTangents=F.vertexTangents,$.toneMapping=F.toneMapping}function vu(M,F,$,G,X){F.isScene!==!0&&(F=nt),le.resetTextureUnits();let Se=F.fog,Pe=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?F.environment:null,be=re===null?A.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:dt.workingColorSpace,Ee=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Fe=T.get(G.envMap||Pe,Ee),Ze=G.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,lt=!!$.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Le=!!$.morphAttributes.position,ct=!!$.morphAttributes.normal,Ct=!!$.morphAttributes.color,Mt=Oi;G.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Mt=A.toneMapping);let yt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Xt=yt!==void 0?yt.length:0,De=ie.get(G),Qt=E.state.lights;if(ue===!0&&(Ae===!0||M!==te)){let Et=M===te&&G.id===Z;Y.setState(G,M,Et)}let pt=!1,En=!1;G.version===De.__version?De.needsLights&&De.lightsStateVersion!==Qt.state.version||X.isBatchedMesh&&De.batching===!1||!X.isBatchedMesh&&De.batching===!0||X.isBatchedMesh&&De.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&De.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&De.instancing===!1||!X.isInstancedMesh&&De.instancing===!0||X.isSkinnedMesh&&De.skinning===!1||!X.isSkinnedMesh&&De.skinning===!0||X.isInstancedMesh&&De.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&De.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&De.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&De.instancingMorph===!1&&X.morphTexture!==null||De.envMap!==Fe||G.fog===!0&&De.fog!==Se||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==Y.numPlanes||De.numIntersection!==Y.numIntersection)||De.vertexAlphas!==Ze||De.vertexTangents!==lt||De.morphTargets!==Le||De.morphNormals!==ct||De.morphColors!==Ct||De.morphTargetsCount!==Xt||De.numLightProbeGrids!==Zc(E.state.lightProbeGridArray)?pt=!0:(De.outputColorSpace!==be||De.toneMapping!==Mt)&&(En=!0):(pt=!0,De.__version=G.version);let qt=De.currentProgram;(pt===!0||En===!0)&&(qt=En===!0?xu(G,F,X,be,Mt):Ns(G,F,X),I&&G.isNodeMaterial&&I.onUpdateProgram(G,qt,De));let Or=!1,ln=!1,An=!1,ut=qt.getUniforms(),Gt=De.uniforms;if(ge.useProgram(qt.program)&&(Or=!0,ln=!0,An=!0),G.id!==Z&&(Z=G.id,ln=!0),Or||te!==M){ge.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ut.setValue(k,"projectionMatrix",M.projectionMatrix),ut.setValue(k,"viewMatrix",M.matrixWorldInverse);let Ut=ut.map.cameraPosition;Ut!==void 0&&Ut.setValue(k,Xe.setFromMatrixPosition(M.matrixWorld)),gt.logarithmicDepthBuffer&&ut.setValue(k,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ut.setValue(k,"isOrthographic",M.isOrthographicCamera===!0),te!==M&&(te=M,ln=!0,An=!0)}if(De.needsLights&&(Qt.state.sunShadowMap.length>0&&ut.setValue(k,"sunShadowMap",Qt.state.sunShadowMap,le),Qt.state.directionalShadowMap.length>0&&ut.setValue(k,"directionalShadowMap",Qt.state.directionalShadowMap,le),Qt.state.spotShadowMap.length>0&&ut.setValue(k,"spotShadowMap",Qt.state.spotShadowMap,le),Qt.state.pointShadowMap.length>0&&ut.setValue(k,"pointShadowMap",Qt.state.pointShadowMap,le)),X.isSkinnedMesh){ut.setOptional(k,X,"bindMatrix"),ut.setOptional(k,X,"bindMatrixInverse");let Et=X.skeleton;Et&&(Et.boneTexture===null&&Et.computeBoneTexture(),ut.setValue(k,"boneTexture",Et.boneTexture,le))}X.isBatchedMesh&&(ut.setOptional(k,X,"batchingTexture"),ut.setValue(k,"batchingTexture",X._matricesTexture,le),ut.setOptional(k,X,"batchingIdTexture"),ut.setValue(k,"batchingIdTexture",X._indirectTexture,le),ut.setOptional(k,X,"batchingColorTexture"),X._colorsTexture!==null&&ut.setValue(k,"batchingColorTexture",X._colorsTexture,le));let xi=$.morphAttributes;if((xi.position!==void 0||xi.normal!==void 0||xi.color!==void 0)&&j.update(X,$,qt),(ln||De.receiveShadow!==X.receiveShadow)&&(De.receiveShadow=X.receiveShadow,ut.setValue(k,"receiveShadow",X.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&F.environment!==null&&(Gt.envMapIntensity.value=F.environmentIntensity),Gt.dfgLUT!==void 0&&(Gt.dfgLUT.value=Ex()),ln){if(ut.setValue(k,"toneMappingExposure",A.toneMappingExposure),De.needsLights&&yu(Gt,An),Se&&G.fog===!0&&oe.refreshFogUniforms(Gt,Se),oe.refreshMaterialUniforms(Gt,G,ye,Be,E.state.transmissionRenderTarget[M.id]),De.needsLights&&De.numLightProbeGrids>0){let Et=b,Ut=0;for(let Gi of E.state.lightProbeGridArray)Gi.texture!==null&&(Et.textures[Ut]=Gi.texture,Et.min[Ut]=Gi.boundingBox.min,Et.max[Ut]=Gi.boundingBox.max,Et.resolution[Ut]=Gi.resolution,Ut++);for(let Gi in Et)Et[Gi].length=Ut;Gt.probesSH.value=Et.textures,Gt.probesMin.value=Et.min,Gt.probesMax.value=Et.max,Gt.probesResolution.value=Et.resolution}Es.upload(k,$c(De),Gt,le)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Es.upload(k,$c(De),Gt,le),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ut.setValue(k,"center",X.center),ut.setValue(k,"modelViewMatrix",X.modelViewMatrix),ut.setValue(k,"normalMatrix",X.normalMatrix),ut.setValue(k,"modelMatrix",X.matrixWorld),G.uniformsGroups!==void 0){let Et=G.uniformsGroups;for(let Ut=0,Gi=Et.length;Ut<Gi;Ut++){let Qc=Et[Ut];ke.update(Qc,qt),ke.bind(Qc,qt)}}return qt}function yu(M,F){M.ambientLightColor.needsUpdate=F,M.lightProbe.needsUpdate=F,M.sunLights.needsUpdate=F,M.sunLightShadows.needsUpdate=F,M.directionalLights.needsUpdate=F,M.directionalLightShadows.needsUpdate=F,M.pointLights.needsUpdate=F,M.pointLightShadows.needsUpdate=F,M.spotLights.needsUpdate=F,M.spotLightShadows.needsUpdate=F,M.rectAreaLights.needsUpdate=F,M.hemisphereLights.needsUpdate=F}function bu(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return re},this.setRenderTargetTextures=function(M,F,$){let G=ie.get(M);G.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),ie.get(M.texture).__webglTexture=F,ie.get(M.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:$,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,F){let $=ie.get(M);$.__webglFramebuffer=F,$.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(M,F=0,$=0){re=M,V=F,H=$;let G=null,X=!1,Se=!1;if(M){let be=ie.get(M);if(be.__useDefaultFramebuffer!==void 0){ge.bindFramebuffer(k.FRAMEBUFFER,be.__webglFramebuffer),se.copy(M.viewport),Me.copy(M.scissor),Ie=M.scissorTest,ge.viewport(se),ge.scissor(Me),ge.setScissorTest(Ie),Z=-1;return}else if(be.__webglFramebuffer===void 0)le.setupRenderTarget(M);else if(be.__hasExternalTextures)le.rebindTextures(M,ie.get(M.texture).__webglTexture,ie.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Ze=M.depthTexture;if(be.__boundDepthTexture!==Ze){if(Ze!==null&&ie.has(Ze)&&(M.width!==Ze.image.width||M.height!==Ze.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");le.setupDepthRenderbuffer(M)}}let Ee=M.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(Se=!0);let Fe=ie.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Fe[F])?G=Fe[F][$]:G=Fe[F],X=!0):M.samples>0&&le.useMultisampledRTT(M)===!1?G=ie.get(M).__webglMultisampledFramebuffer:Array.isArray(Fe)?G=Fe[$]:G=Fe,se.copy(M.viewport),Me.copy(M.scissor),Ie=M.scissorTest}else se.copy(Oe).multiplyScalar(ye).floor(),Me.copy(qe).multiplyScalar(ye).floor(),Ie=Je;if($!==0&&(G=z),ge.bindFramebuffer(k.FRAMEBUFFER,G)&&ge.drawBuffers(M,G),ge.viewport(se),ge.scissor(Me),ge.setScissorTest(Ie),X){let be=ie.get(M.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+F,be.__webglTexture,$)}else if(Se){let be=F;for(let Ee=0;Ee<M.textures.length;Ee++){let Fe=ie.get(M.textures[Ee]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Ee,Fe.__webglTexture,$,be)}}else if(M!==null&&$!==0){let be=ie.get(M.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,be.__webglTexture,$)}Z=-1};function Kc(M){let F=ie.get(M);return(F.__readFormat!==M.format||F.__readType!==M.type)&&(F.__readFormat=M.format,F.__readType=M.type,F.__formatReadable=gt.textureFormatReadable(M.format),F.__typeReadable=gt.textureTypeReadable(M.type)),F}this.readRenderTargetPixels=function(M,F,$,G,X,Se,Pe,be=0){if(!(M&&M.isWebGLRenderTarget)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=ie.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ee=Ee[Pe],Array.isArray(Ee)&&(Ee=Ee[0])),Ee){ge.bindFramebuffer(k.FRAMEBUFFER,Ee);try{let Fe=M.textures[be],Ze=Fe.format,lt=Fe.type;M.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+be);let Le=Kc(Fe);if(Le.__formatReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Le.__typeReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=M.width-G&&$>=0&&$<=M.height-X&&k.readPixels(F,$,G,X,he.convert(Ze),he.convert(lt),Se)}finally{let Fe=re!==null?ie.get(re).__webglFramebuffer:null;ge.bindFramebuffer(k.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(M,F,$,G,X,Se,Pe,be=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=ie.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ee=Ee[Pe],Array.isArray(Ee)&&(Ee=Ee[0])),Ee)if(F>=0&&F<=M.width-G&&$>=0&&$<=M.height-X){ge.bindFramebuffer(k.FRAMEBUFFER,Ee);let Fe=M.textures[be],Ze=Fe.format,lt=Fe.type;M.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+be);let Le=Kc(Fe);if(Le.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Le.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ct=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,ct),k.bufferData(k.PIXEL_PACK_BUFFER,Se.byteLength,k.STREAM_READ),k.readPixels(F,$,G,X,he.convert(Ze),he.convert(lt),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let Ct=re!==null?ie.get(re).__webglFramebuffer:null;ge.bindFramebuffer(k.FRAMEBUFFER,Ct);let Mt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await lh(k,Mt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,ct),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Se),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(ct),k.deleteSync(Mt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,F=null,$=0){let G=Math.pow(2,-$),X=Math.floor(M.image.width*G),Se=Math.floor(M.image.height*G),Pe=F!==null?F.x:0,be=F!==null?F.y:0;le.setTexture2D(M,0),k.copyTexSubImage2D(k.TEXTURE_2D,$,0,0,Pe,be,X,Se),ge.unbindTexture()},this.copyTextureToTexture=function(M,F,$=null,G=null,X=0,Se=0){let Pe,be,Ee,Fe,Ze,lt,Le,ct,Ct,Mt=M.isCompressedTexture?M.mipmaps[Se]:M.image;if($!==null)Pe=$.max.x-$.min.x,be=$.max.y-$.min.y,Ee=$.isBox3?$.max.z-$.min.z:1,Fe=$.min.x,Ze=$.min.y,lt=$.isBox3?$.min.z:0;else{let ut=Math.pow(2,-X);Pe=Math.floor(Mt.width*ut),be=Math.floor(Mt.height*ut),M.isDataArrayTexture?Ee=Mt.depth:M.isData3DTexture?Ee=Math.floor(Mt.depth*ut):Ee=1,Fe=0,Ze=0,lt=0}G!==null?(Le=G.x,ct=G.y,Ct=G.z):(Le=0,ct=0,Ct=0);let yt=he.convert(F.format),Xt=he.convert(F.type),De;F.isData3DTexture?(le.setTexture3D(F,0),De=k.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(le.setTexture2DArray(F,0),De=k.TEXTURE_2D_ARRAY):(le.setTexture2D(F,0),De=k.TEXTURE_2D),ge.activeTexture(k.TEXTURE0),ge.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,F.flipY),ge.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),ge.pixelStorei(k.UNPACK_ALIGNMENT,F.unpackAlignment);let Qt=ge.getParameter(k.UNPACK_ROW_LENGTH),pt=ge.getParameter(k.UNPACK_IMAGE_HEIGHT),En=ge.getParameter(k.UNPACK_SKIP_PIXELS),qt=ge.getParameter(k.UNPACK_SKIP_ROWS),Or=ge.getParameter(k.UNPACK_SKIP_IMAGES);ge.pixelStorei(k.UNPACK_ROW_LENGTH,Mt.width),ge.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Mt.height),ge.pixelStorei(k.UNPACK_SKIP_PIXELS,Fe),ge.pixelStorei(k.UNPACK_SKIP_ROWS,Ze),ge.pixelStorei(k.UNPACK_SKIP_IMAGES,lt);let ln=M.isDataArrayTexture||M.isData3DTexture,An=F.isDataArrayTexture||F.isData3DTexture;if(M.isDepthTexture){let ut=ie.get(M),Gt=ie.get(F),xi=ie.get(ut.__renderTarget),Et=ie.get(Gt.__renderTarget);ge.bindFramebuffer(k.READ_FRAMEBUFFER,xi.__webglFramebuffer),ge.bindFramebuffer(k.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let Ut=0;Ut<Ee;Ut++)ln&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ie.get(M).__webglTexture,X,lt+Ut),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ie.get(F).__webglTexture,Se,Ct+Ut)),k.blitFramebuffer(Fe,Ze,Fe+Pe,Ze+be,Le,ct,Le+Pe,ct+be,k.DEPTH_BUFFER_BIT,k.NEAREST);ge.bindFramebuffer(k.READ_FRAMEBUFFER,null),ge.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(X!==0||M.isRenderTargetTexture||ie.has(M)){let ut=ie.get(M),Gt=ie.get(F);ge.bindFramebuffer(k.READ_FRAMEBUFFER,L),ge.bindFramebuffer(k.DRAW_FRAMEBUFFER,U);for(let xi=0;xi<Ee;xi++)ln?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ut.__webglTexture,X,lt+xi):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ut.__webglTexture,X),An?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Gt.__webglTexture,Se,Ct+xi):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Gt.__webglTexture,Se),X!==0?k.blitFramebuffer(Fe,Ze,Fe+Pe,Ze+be,Le,ct,Le+Pe,ct+be,k.COLOR_BUFFER_BIT,k.NEAREST):An?k.copyTexSubImage3D(De,Se,Le,ct,Ct+xi,Fe,Ze,Pe,be):k.copyTexSubImage2D(De,Se,Le,ct,Fe,Ze,Pe,be);ge.bindFramebuffer(k.READ_FRAMEBUFFER,null),ge.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else An?M.isDataTexture||M.isData3DTexture?k.texSubImage3D(De,Se,Le,ct,Ct,Pe,be,Ee,yt,Xt,Mt.data):F.isCompressedArrayTexture?k.compressedTexSubImage3D(De,Se,Le,ct,Ct,Pe,be,Ee,yt,Mt.data):k.texSubImage3D(De,Se,Le,ct,Ct,Pe,be,Ee,yt,Xt,Mt):M.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Se,Le,ct,Pe,be,yt,Xt,Mt.data):M.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Se,Le,ct,Mt.width,Mt.height,yt,Mt.data):k.texSubImage2D(k.TEXTURE_2D,Se,Le,ct,Pe,be,yt,Xt,Mt);ge.pixelStorei(k.UNPACK_ROW_LENGTH,Qt),ge.pixelStorei(k.UNPACK_IMAGE_HEIGHT,pt),ge.pixelStorei(k.UNPACK_SKIP_PIXELS,En),ge.pixelStorei(k.UNPACK_SKIP_ROWS,qt),ge.pixelStorei(k.UNPACK_SKIP_IMAGES,Or),Se===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&k.generateMipmap(De),ge.unbindTexture()},this.initRenderTarget=function(M){ie.get(M).__webglFramebuffer===void 0&&le.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?le.setTextureCube(M,0):M.isData3DTexture?le.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?le.setTexture2DArray(M,0):le.setTexture2D(M,0),ge.unbindTexture()},this.resetState=function(){V=0,H=0,re=null,ge.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}};function Ho(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,l=new It;l.morphTargetsRelative=o;let c=0;for(let d=0;d<n.length;++d){let h=n[d],u=0,p=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in h.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in h.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+".  .morphAttributes must be consistent throughout all geometries."),null;if(h.morphAttributes[f].length!==n[0].morphAttributes[f].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+'. All geometries must have the same number of morph targets for the "'+f+'" morph attribute.'),null;a[f]===void 0&&(a[f]=[]),a[f].push(h.morphAttributes[f]),p++}if(p!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". Make sure all geometries have the same number of morph attributes."),null;if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,d),c+=f}}if(t){let d=0,h=[];for(let u=0;u<n.length;++u){let p=n[u].index;for(let f=0;f<p.count;++f)h.push(p.getX(f)+d);d+=n[u].attributes.position.count}l.setIndex(h)}for(let d in r){let h=Kh(r[d]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" attribute."),null;l.setAttribute(d,h)}for(let d in a){let h=a[d][0].length;if(h!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[d]=[];for(let u=0;u<h;++u){let p=[];for(let _=0;_<a[d].length;++_)p.push(a[d][_][u]);let f=Kh(p);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" morphAttribute."),null;l.morphAttributes[d].push(f)}}}return l}function Kh(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let d=n[c];if(e===void 0&&(e=d.array.constructor),e!==d.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=d.itemSize),t!==d.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=d.normalized),i!==d.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=d.gpuType),s!==d.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=d.count*t}let a=new e(r),o=new pi(a,t,i),l=0;for(let c=0;c<n.length;++c){let d=n[c];if(d.isInterleavedBufferAttribute){let h=l/t;for(let u=0,p=d.count;u<p;u++)for(let f=0;f<t;f++){let _=d.getComponent(u,f);o.setComponent(u+h,f,_)}}else a.set(d.array,l);l+=d.count*t}return s!==void 0&&(o.gpuType=s),o}function Ai(n,e=!1,t=18){let i=[];if(e)n.traverse(a=>{a!==n&&a instanceof Ve&&i.push(a)});else for(let a of n.children)a instanceof Ve&&i.push(a);n.updateWorldMatrix(!0,!0);let s=n.matrixWorld.clone().invert(),r=new Map;for(let a of i){if(Array.isArray(a.material))continue;let o=new bt().multiplyMatrices(s,a.matrixWorld),l=a.material.uuid+"_"+a.castShadow+"_"+Math.floor(o.elements[14]/t),c=r.get(l)??{material:a.material,geometries:[],shadow:a.castShadow},d=a.geometry.index?a.geometry.toNonIndexed():a.geometry.clone();c.geometries.push(d.applyMatrix4(o)),r.set(l,c),a.removeFromParent(),a.geometry.dispose()}for(let a of r.values()){let o=Ho(a.geometries);if(a.geometries.forEach(c=>c.dispose()),!o)continue;let l=new Ve(o,a.material);l.castShadow=a.shadow,l.receiveShadow=!0,n.add(l)}}var Qh=new Qe({color:9281186,metalness:.72,roughness:.34,flatShading:!0}),kt=new Qe({color:11173702,metalness:.74,roughness:.42}),zn=new Qe({color:2501166,roughness:.94}),Go=new Qe({color:725528,roughness:.92}),jh=new Qe({color:11988964,emissive:6080953,emissiveIntensity:1.55}),Ax=new Qe({color:16557477,emissive:14427686,emissiveIntensity:1.75}),kc=new Qe({color:11973279,roughness:.86,metalness:.08,flatShading:!0});function Re(n,e,t,i=0,s=0,r=0){let a=new Ve(e,t);return a.position.set(i,s,r),a.castShadow=!0,a.receiveShadow=!0,n.add(a),a}var ft=(n,e,t,i,s,r=0,a=0,o=0)=>Re(n,new ht(e,t,i),s,r,a,o),Wt=(n,e,t,i,s,r=0,a=0,o=0,l=6)=>Re(n,new _t(e,t,i,l),s,r,a,o);function Rs(n="hero"){let e=/Archivist/i.test(n),t=/Scholar/i.test(n),i=/Wraith/i.test(n),s=/skeleton/i.test(n),r=/SentinelBoss/i.test(n),a=/Construct|Equations/i.test(n),o=e||t||i,l=n==="hero",c=n==="student",d=e?Ax:jh,h=new et,u=new et;h.add(u);let p=new Qe({color:c?4549476:e?3874094:t?2962002:i?2374466:l?1916761:3225652,roughness:.96,side:Dt,flatShading:!0}),f=Qh.clone();f.color.setHex(r?7304555:a?5404272:s?7041129:l?10399925:6187378),f.roughness=r?.94:s?.72:.44,f.metalness=r?.08:s?.36:.68;let _=new fi;_.moveTo(-.26,-.24),_.lineTo(.26,-.24),_.lineTo(.36,.18),_.lineTo(.19,.32),_.lineTo(-.19,.32),_.lineTo(-.36,.18),_.closePath();let g=Re(u,new Fi(_,{depth:.28,bevelEnabled:!0,bevelSize:.035,bevelThickness:.035,bevelSegments:1,steps:1}),o||c?p:f,0,1.12,-.16);if(ft(u,.075,.48,.045,kt,0,1.14,-.2),Wt(u,.2,.24,.1,o||c?kt:f,0,1.43,-.01,8),ft(u,.56,.11,.39,zn,0,.85,0),ft(u,.13,.14,.055,kt,0,.85,-.22),(a||r)&&(Re(u,new ji(.11,0),d,0,1.16,-.22),Wt(u,.15,.17,.05,kt,0,1.16,-.19,6).rotation.x=Math.PI/2),s)for(let I=0;I<3;I++)ft(u,.38-I*.04,.038,.05,kc,0,1.24-I*.11,-.205);if(!c){let I=Wt(u,.1,.02,.22,kt,0,1.22,-.23,4);I.rotation.x=Math.PI/2;for(let z=-1;z<=1;z+=2){let L=ft(u,.23,.32,.3,p,z*.18,.7,0);L.rotation.z=z*.1}}let m=new et;if(m.position.y=1.58,u.add(m),c){Wt(m,.17,.16,.3,new Qe({color:13016185,roughness:.94}),0,0,0,8),Re(m,new ti(.185,10,7,0,Math.PI*2,0,Math.PI*.62),zn,0,.08,.01);let I=ft(m,.3,.08,.22,zn,0,.15,-.06);I.rotation.x=.22}else if(o){ft(m,.34,.28,.3,Go,0,-.01,-.02);let I=Wt(m,.2,.27,.34,p,0,.02,.03,8);I.rotation.x=-.14,Re(m,new ti(.24,9,7,0,Math.PI*2,0,Math.PI*.65),p,0,.09,.01).scale.set(.95,1,1.15);let L=Wt(m,.03,.19,.24,p,0,.18,-.11,6);L.rotation.x=-.95,ft(m,.3,.045,.06,kt,0,.14,-.2);for(let U of[-1,1])ft(m,.072,.028,.045,d,U*.08,.02,-.185);if(e){let U=Re(m,new Ht(.42,.028,6,24),kt,0,.22,.14);U.rotation.x=-.28;for(let V=0;V<4;V++){let H=V*Math.PI/2+Math.PI/4,re=ft(U,.04,.12,.04,d,Math.cos(H)*.44,Math.sin(H)*.44,0);re.rotation.z=H+Math.PI/2}}}else if(s){Re(m,new ti(.18,9,7),kc,0,.04,0),ft(m,.2,.13,.22,kc,0,-.07,-.04),Wt(m,.195,.195,.07,f,0,.08,0,8),ft(m,.26,.055,.05,Go,0,.01,-.17);for(let I of[-1,1])ft(m,.065,.028,.04,jh,I*.075,.025,-.19)}else{Wt(m,.18,.22,.26,f,0,-.04,0,8),Re(m,new ti(.205,10,7,0,Math.PI*2,0,Math.PI*.64),f,0,.075,.005).scale.set(.96,.92,1.08);let z=ft(m,.34,.058,.16,f,0,.075,-.155);z.rotation.x=.24;let L=ft(m,.31,.11,.16,f,0,-.06,.145);L.rotation.x=-.35,ft(m,.29,.06,.04,Go,0,.015,-.2),ft(m,.042,.2,.045,kt,0,-.03,-.225);for(let U of[-1,1])ft(m,.07,.022,.04,l?Go:d,U*.085,.022,-.22);if(l){ft(m,.042,.075,.32,kt,0,.265,.02);let U=ft(m,.036,.05,.12,p,0,.24,.19);U.rotation.x=-.42}}if(r||a||e)for(let I of[-1,1]){let z=Wt(m,.018,.085,.56,kt,I*.22,.34,0,5);if(z.rotation.z=-I*.45,e)for(let L=0;L<3;L++){let U=Wt(m,.01,.032,.26,kt,I*(.22+L*.08),.46+L*.12,0,4);U.rotation.z=I*.78}}let v=[],w=[];for(let I of[-1,1]){let z=new et;z.position.set(I*.37,1.32,0),u.add(z),v.push(z);let L=Wt(z,.18,.24,.2,o?kt:f,I*.03,-.035,0,6);L.scale.z=1.15,(l||a||e)&&ft(z,.26,.045,.26,kt,I*.04,.055,0),Wt(z,.1,.085,.28,p,0,-.23,0),Wt(z,.12,.09,.23,f,0,-.47,-.015),ft(z,.16,.17,.17,zn,0,-.65,-.02);let U=new et;U.position.set(I*.17,.76,0),u.add(U),w.push(U),Wt(U,.14,.11,.31,zn,0,-.17,0),ft(U,.19,.17,.2,f,0,-.33,-.045),Wt(U,.115,.09,.27,o?p:f,0,-.48,.01),ft(U,.21,.17,.37,zn,0,-.67,-.07),ft(U,.19,.065,.27,f,0,-.6,-.12)}o&&Wt(u,.3,.54,.78,p,0,.58,0,9);let b=new mi(.68,1.08,6,7),C=b.attributes.position;for(let I=0;I<C.count;I++){let z=(.54-C.getY(I))/1.08;C.setX(I,C.getX(I)*(1+z*.58)),C.setZ(I,.04*Math.cos(C.getX(I)*28)+z*.12)}b.computeVertexNormals();let E=Re(u,b,p,0,.91,.24);E.rotation.x=.12;let x=new et;if(x.position.set(.4,.72,-.08),u.add(x),!c){ft(x,.065,.065,.28,zn,0,0,-.09),ft(x,.42,.055,.075,kt,0,0,-.26);let I=new fi;I.moveTo(-.07,0),I.lineTo(.07,0),I.lineTo(.05,-1.16),I.lineTo(0,-1.36),I.lineTo(-.05,-1.16),I.closePath();let z=Re(x,new Fi(I,{depth:.035,bevelEnabled:!1}),Qh,0,-.02,-.29);if(z.rotation.x=Math.PI/2,o&&(x.clear(),Wt(x,.04,.045,1.95,kt,0,.18,0),Re(x,new Ht(.19,.032,6,18),kt,0,1.15,0),Re(x,new ki(.105,0),d,0,1.15,0)),r&&(ft(x,.52,.16,1.08,f,0,0,-.92),ft(x,.22,.18,.08,kt,0,0,-.74)),a&&ft(x,.045,.045,.85,d,0,.02,-.78),l||s){let L=new fi;L.moveTo(-.23,.25),L.lineTo(.23,.25),L.lineTo(.2,-.15),L.lineTo(0,-.35),L.lineTo(-.2,-.15),L.closePath();let U=Re(v[0],new Fi(L,{depth:.065,bevelEnabled:!0,bevelSize:.03,bevelThickness:.03,bevelSegments:1,steps:1}),kt,-.08,-.42,-.16);Re(U,new Fi(L,{depth:.02,bevelEnabled:!1}),p,0,0,-.04).scale.set(.78,.78,1),ft(U,.035,.4,.03,kt,0,0,-.07)}}Ai(m,!0,100),Ai(x,!0,100),v.forEach(I=>Ai(I,!0,100)),w.forEach(I=>Ai(I,!0,100));let S=document.createElement("canvas");S.width=64,S.height=64;let P=S.getContext("2d"),A=P.createRadialGradient(32,32,4,32,32,32);A.addColorStop(0,"rgba(0,0,0,0.55)"),A.addColorStop(1,"rgba(0,0,0,0)"),P.fillStyle=A,P.fillRect(0,0,64,64);let R=Re(h,new mi(1.65,1.65),new Lt({map:new Ni(S),transparent:!0,depthWrite:!1}),0,.018,0);return R.rotation.x=-Math.PI/2,R.castShadow=!1,h.userData.rig={root:h,body:u,chest:g,sword:x,cape:E,arms:v,legs:w,head:m},h.userData.rig}function Hn(n,e,t,i,s=0,r=!1){let a=Math.min(1,t/4.5),o=Math.sin(e*9);n.body.position.y=Math.abs(o)*.035*a+(r?0:Math.sin(e*2)*.012),n.legs.forEach((l,c)=>{l.rotation.x=o*(c?-1:1)*.65*a}),n.arms.forEach((l,c)=>{l.rotation.x=o*(c?1:-1)*.45*a}),n.body.rotation.x=i==="dodge"?-.7:i==="stagger"?.23:0,n.body.rotation.z=i==="stagger"?.1:0,n.sword.rotation.y=s,n.sword.rotation.x=i==="windup"?-.9:i==="attack"?.35:0,i==="windup"&&(n.arms[1].rotation.x=-1.5),i==="attack"&&(n.arms[1].rotation.x=-.6),i==="dead"&&(n.body.rotation.x=-1.45,n.body.position.y=.26),n.cape.rotation.x=.12+a*.3+(r?0:Math.sin(e*4)*.05)}var Vo={low:{preset:"low",shadowQuality:"off",effectsQuality:"low",renderScale:.75,viewDistance:"near",textureQuality:"standard"},medium:{preset:"medium",shadowQuality:"low",effectsQuality:"medium",renderScale:1,viewDistance:"medium",textureQuality:"standard"},high:{preset:"high",shadowQuality:"high",effectsQuality:"high",renderScale:1,viewDistance:"far",textureQuality:"detailed"}},Cr={near:{far:36,fogNear:12,fogFar:32},medium:{far:58,fogNear:18,fogFar:52},far:{far:92,fogNear:26,fogFar:84}},eu={low:512,medium:1024,high:2048},it={maxHp:100,radius:.45,height:1.75,walkSpeed:5.2,sprintMultiplier:1.52,dodgeSpeed:12.5,dodgeDuration:.34,dodgeInvulnerableWindow:.28,dodgeCooldown:.72,potionHealAmount:35,interactRadius:2.8,cameraDefaultDistance:4.3,cameraShoulderOffset:.85,cameraShoulderHeight:1.65,cameraWallPadding:.25,cameraMinPitch:-.58,cameraMaxPitch:.72},ci={swordWindupSec:.14,swordActiveSec:.18,swordRecoverySec:.22,swordCooldownSec:.12,swordReach:2.55,swordHalfAngleRad:Math.PI*.42,swordDamage:25,playerHitInvulnSec:.65},Gn={fixedDt:1/60,maxFrameDt:.05,trapStepSubdivisions:4},tu={ruinSkeleton:{id:"ruinSkeleton",name:"Ruin Sentinel",isBoss:!1,maxHp:50,damage:12,radius:.5,height:1.8,patrolSpeed:1.8,chaseSpeed:3.9,tau:.28,maxAccel:18,detectRange:10.5,attackRange:2,windupSec:.55,activeSec:.18,recoverSec:.45,attackCooldownSec:1.1,lungeSpeed:6.5,hitStunSec:.22},whisperWraith:{id:"whisperWraith",name:"Whisper Phantom",isBoss:!1,maxHp:65,damage:15,radius:.52,height:1.9,patrolSpeed:2.3,chaseSpeed:4.5,tau:.24,maxAccel:22,detectRange:12,attackRange:2.3,windupSec:.5,activeSec:.2,recoverSec:.45,attackCooldownSec:1,lungeSpeed:8,hitStunSec:.2},abyssConstruct:{id:"abyssConstruct",name:"Bronze Revenant",isBoss:!1,maxHp:80,damage:18,radius:.58,height:2,patrolSpeed:2.4,chaseSpeed:4.9,tau:.22,maxAccel:26,detectRange:13,attackRange:2.4,windupSec:.48,activeSec:.2,recoverSec:.45,attackCooldownSec:.95,lungeSpeed:9.2,hitStunSec:.18},stoneSentinelBoss:{id:"stoneSentinelBoss",name:"The Stone Sentinel",isBoss:!0,maxHp:125,damage:20,radius:.95,height:2.75,patrolSpeed:1.6,chaseSpeed:3.6,tau:.34,maxAccel:16,detectRange:18,attackRange:3,windupSec:.72,activeSec:.24,recoverSec:.65,attackCooldownSec:1.35,lungeSpeed:7.5,hitStunSec:.12,vulnerabilityDurationSec:12},arcaneScholarBoss:{id:"arcaneScholarBoss",name:"The Arcane Scholar",isBoss:!0,maxHp:150,damage:22,radius:.8,height:2.4,patrolSpeed:2.1,chaseSpeed:4.4,tau:.25,maxAccel:22,detectRange:18,attackRange:3.1,windupSec:.62,activeSec:.22,recoverSec:.55,attackCooldownSec:1.15,lungeSpeed:9.5,hitStunSec:.12,vulnerabilityDurationSec:11},keeperEquationsBoss:{id:"keeperEquationsBoss",name:"Abyssal Warden",isBoss:!0,maxHp:175,damage:24,radius:.9,height:2.65,patrolSpeed:2.2,chaseSpeed:4.8,tau:.22,maxAccel:26,detectRange:20,attackRange:3.2,windupSec:.58,activeSec:.22,recoverSec:.55,attackCooldownSec:1.05,lungeSpeed:10.5,hitStunSec:.12,vulnerabilityDurationSec:11},eternalArchivistBoss:{id:"eternalArchivistBoss",name:"The Eternal Archivist",isBoss:!0,maxHp:225,damage:26,radius:1.05,height:3,patrolSpeed:2.5,chaseSpeed:5.3,tau:.19,maxAccel:30,detectRange:24,attackRange:3.5,windupSec:.54,activeSec:.24,recoverSec:.5,attackCooldownSec:.95,lungeSpeed:12.2,hitStunSec:.1,vulnerabilityDurationSec:10.5}};var di=class n{constructor(e){D(this,"id");D(this,"label");D(this,"k");D(this,"a");D(this,"eMin");D(this,"tolerance");D(this,"dwellTime");D(this,"x");D(this,"dwellElapsed",0);D(this,"stabilized",!1);if(!e.allowInvalidForTest){if(!(e.k>0))throw new Error(`EnergyStabilizerModel(${e.id}): k must be > 0, got ${e.k}`);if(e.a<0||e.a>1)throw new Error(`EnergyStabilizerModel(${e.id}): target a must be inside [0, 1], got ${e.a}`)}this.id=e.id,this.label=e.label,this.k=e.k,this.a=e.a,this.eMin=e.eMin,this.tolerance=e.tolerance,this.dwellTime=Math.max(.05,e.dwellTime),this.x=n.clamp01(e.initialX??.15)}static clamp01(e){return Math.max(0,Math.min(1,e))}setDial(e){this.x=n.clamp01(e)}adjustDial(e){this.setDial(this.x+e)}resetForRetry(e){e!==void 0&&(this.x=n.clamp01(e)),this.dwellElapsed=0,this.stabilized=!1}evaluateStatic(e=this.x){let t=n.clamp01(e),i=t-this.a,s=this.k*i*i+this.eMin,r=2*this.k*i,a=2*this.k,o=Math.abs(r)<=this.tolerance,l=a>0,c=o&&l,d=Math.max(.001,Math.abs(2*this.k)),h=Math.max(0,Math.min(1,1-Math.abs(r)/(d*.65)));return{x:t,energy:s,firstDerivative:r,secondDerivative:a,isStationary:o,isMinimumCurvature:l,isMinimumConditionMet:c,closeness:h}}step(e){let t=this.evaluateStatic(this.x);return this.stabilized||(t.isMinimumConditionMet?(this.dwellElapsed=Math.min(this.dwellTime,this.dwellElapsed+Math.max(0,e)),this.dwellElapsed>=this.dwellTime&&(this.stabilized=!0)):this.dwellElapsed=0),{...t,dwellElapsed:this.dwellElapsed,dwellProgress:this.stabilized?1:this.dwellElapsed/this.dwellTime,stabilized:this.stabilized}}},Wo=class{constructor(e){D(this,"id");D(this,"p0");D(this,"amplitude");D(this,"omega");D(this,"phase");this.id=e.id,this.p0=e.p0,this.amplitude=e.amplitude,this.omega=e.omega,this.phase=e.phase}evaluate(e){let t=this.omega*e+this.phase,i=Math.sin(t),s=Math.cos(t),r=this.p0+this.amplitude*i,a=this.amplitude*this.omega*s,o=-this.amplitude*this.omega*this.omega*i,l=Math.max(1e-5,Math.abs(this.amplitude*this.omega)),c=Math.min(1,Math.abs(a)/l);return{t:e,position:r,velocity:a,acceleration:o,normalizedSpeed:c}}},Rr=class{constructor(e){D(this,"id");D(this,"label");D(this,"kx");D(this,"ky");D(this,"a");D(this,"b");D(this,"eMin");D(this,"tolerance");D(this,"dwellTime");D(this,"x");D(this,"y");D(this,"dwellElapsed",0);D(this,"unlocked",!1);if(!e.allowInvalidForTest){if(!(e.kx>0)||!(e.ky>0))throw new Error(`OptimizationChestModel(${e.id}): kx and ky must be > 0`);if(e.a<0||e.a>1||e.b<0||e.b>1)throw new Error(`OptimizationChestModel(${e.id}): targets (a, b) must lie in [0, 1]`)}this.id=e.id,this.label=e.label,this.kx=e.kx,this.ky=e.ky,this.a=e.a,this.b=e.b,this.eMin=e.eMin,this.tolerance=e.tolerance,this.dwellTime=Math.max(.05,e.dwellTime),this.x=di.clamp01(e.initialX??.2),this.y=di.clamp01(e.initialY??.2)}setCrystals(e,t){this.x=di.clamp01(e),this.y=di.clamp01(t)}adjustCrystals(e,t){this.setCrystals(this.x+e,this.y+t)}resetForRetry(e,t){e!==void 0&&(this.x=di.clamp01(e)),t!==void 0&&(this.y=di.clamp01(t)),this.dwellElapsed=0,this.unlocked=!1}evaluateStatic(e=this.x,t=this.y){let i=di.clamp01(e),s=di.clamp01(t),r=i-this.a,a=s-this.b,o=this.kx*r*r+this.ky*a*a+this.eMin,l=2*this.kx*r,c=2*this.ky*a,d=Math.hypot(l,c),h=2*this.kx,u=2*this.ky,p=d<=this.tolerance,f=h>0&&u>0,_=p&&f,g=this.tolerance*.65,m=Math.max(0,Math.min(1,1-Math.abs(l)/Math.max(.001,Math.abs(2*this.kx)*.65))),v=Math.max(0,Math.min(1,1-Math.abs(c)/Math.max(.001,Math.abs(2*this.ky)*.65))),w=Math.abs(l)<=g?0:l>0?-1:1,b=Math.abs(c)<=g?0:c>0?-1:1,C=Math.max(.001,Math.hypot(2*this.kx,2*this.ky)*.65),E=Math.max(0,Math.min(1,1-d/C));return{x:i,y:s,energy:o,gradX:l,gradY:c,gradientMagnitude:d,hessianXX:h,hessianYY:u,isStationary:p,isPositiveDefiniteMinimum:f,isMinimumConditionMet:_,closeness:E,xFeedback:{value:i,partialDerivative:l,secondDerivative:h,closeness:m,directionHint:w},yFeedback:{value:s,partialDerivative:c,secondDerivative:u,closeness:v,directionHint:b}}}step(e){let t=this.evaluateStatic(this.x,this.y);return this.unlocked||(t.isMinimumConditionMet?(this.dwellElapsed=Math.min(this.dwellTime,this.dwellElapsed+Math.max(0,e)),this.dwellElapsed>=this.dwellTime&&(this.unlocked=!0)):this.dwellElapsed=0),{...t,dwellElapsed:this.dwellElapsed,dwellProgress:this.unlocked?1:this.dwellElapsed/this.dwellTime,unlocked:this.unlocked}}};function iu(n,e,t,i,s){let r=Math.max(.02,t),a=(e.x-n.x)/r,o=(e.z-n.z)/r,l=Math.hypot(a,o);if(l>i&&l>1e-6){let d=i/l;a*=d,o*=d}let c=Math.max(0,s);return{velocity:{x:n.x+a*c,z:n.z+o*c},acceleration:{x:a,z:o}}}function Xo(n,e,t,i,s=0,r=1.75){let a=n,o=e,l=!1;for(let c=0;c<2;c++)for(let d of i){if(r<=d.minY||s>=d.maxY)continue;let h=Math.max(d.minX,Math.min(a,d.maxX)),u=Math.max(d.minZ,Math.min(o,d.maxZ)),p=a-h,f=o-u,_=p*p+f*f;if(_<t*t){l=!0;let g=Math.sqrt(_);if(g>1e-6){let m=t-g;a+=p/g*m,o+=f/g*m}else{let m=Math.abs(a-d.minX),v=Math.abs(d.maxX-a),w=Math.abs(o-d.minZ),b=Math.abs(d.maxZ-o),C=Math.min(m,v,w,b);C===m?a=d.minX-t:C===v?a=d.maxX+t:C===w?o=d.minZ-t:o=d.maxZ+t}}}return{x:a,z:o,collided:l}}function Pr(n,e,t,i,s,r,a,o){let l=null;for(let c of o){if(c.blocksSight===!1)continue;let d=0,h=a,u=[[n,i,c.minX,c.maxX],[e,s,c.minY,c.maxY],[t,r,c.minZ,c.maxZ]],p=!0;for(let[f,_,g,m]of u)if(Math.abs(_)<1e-8){if(f<g||f>m){p=!1;break}}else{let v=1/_,w=(g-f)*v,b=(m-f)*v;if(w>b){let C=w;w=b,b=C}if(d=Math.max(d,w),h=Math.min(h,b),d>h){p=!1;break}}p&&d>=0&&d<=a&&(l===null||d<l)&&(l=d)}return l}function Vn(n,e,t,i,s,r,a){let o=i-n,l=s-e,c=r-t,d=Math.hypot(o,l,c);if(d<1e-5)return!0;let h=Pr(n,e,t,o/d,l/d,c/d,d,a);return h===null||h>=d-.05}function nu(n,e,t,i,s,r,a,o,l){let c=Math.max(1,Math.ceil(Math.hypot(t-n,i-e)/.25));for(let d=0;d<=c;d++){let h=d/c,u=n+(t-n)*h,p=e+(i-e)*h,f=Math.max(u-s,Math.min(a,u+s)),_=Math.max(p-r,Math.min(o,p+r)),g=a-f,m=o-_;if(g*g+m*m<=l*l)return!0}return!1}var ni=[{action:"moveForward",label:"Move Forward",description:"Move forward / adjust Y+ in mechanisms",required:!0,isSinglePress:!1},{action:"moveBackward",label:"Move Backward",description:"Move backward / adjust Y- in mechanisms",required:!0,isSinglePress:!1},{action:"moveLeft",label:"Move Left",description:"Strafe left / adjust X- in mechanisms",required:!0,isSinglePress:!1},{action:"moveRight",label:"Move Right",description:"Strafe right / adjust X+ in mechanisms",required:!0,isSinglePress:!1},{action:"attack",label:"Primary Attack",description:"Swing your sword",required:!0,isSinglePress:!1},{action:"sprint",label:"Sprint",description:"Run faster while exploring or dodging traps",required:!0,isSinglePress:!1},{action:"dodge",label:"Dodge / Roll",description:"Evade with brief invulnerability",required:!0,isSinglePress:!0},{action:"interact",label:"Interact",description:"Inspect tablets, open chests, align ancient mechanisms",required:!0,isSinglePress:!0},{action:"usePotion",label:"Use Health Potion",description:"Drink a potion to restore HP",required:!0,isSinglePress:!0},{action:"inventory",label:"Inventory",description:"Open satchel, seals, and field notes",required:!0,isSinglePress:!0},{action:"map",label:"Map",description:"Toggle minimap / dungeon overview",required:!0,isSinglePress:!0},{action:"pause",label:"Pause / Back",description:"Pause game or close screens (Escape stays active)",required:!0,isSinglePress:!0,primaryLockedEscape:!0}],Ps={moveForward:{primary:"KeyW",secondary:null},moveBackward:{primary:"KeyS",secondary:null},moveLeft:{primary:"KeyA",secondary:null},moveRight:{primary:"KeyD",secondary:null},attack:{primary:"Mouse0",secondary:null},sprint:{primary:"ShiftLeft",secondary:null},dodge:{primary:"Space",secondary:null},interact:{primary:"KeyE",secondary:null},usePotion:{primary:"KeyR",secondary:null},inventory:{primary:"KeyI",secondary:null},map:{primary:"KeyM",secondary:null},pause:{primary:"Escape",secondary:null}};function sn(n){let e={};for(let t of ni){let i=n[t.action]??Ps[t.action];e[t.action]={primary:t.primaryLockedEscape?"Escape":i.primary,secondary:i.secondary}}return e}var Cx=new Set(["Escape","MetaLeft","MetaRight","ContextMenu","PrintScreen","ScrollLock","Pause","CapsLock","NumLock","F5","F11","F12"]);function Is(n){return!n||typeof n!="string"?!1:n==="Mouse0"||n==="Mouse1"||n==="Mouse2"?!0:Cx.has(n)?!1:/^(Key[A-Z]|Digit[0-9]|Numpad([0-9]|Add|Subtract|Multiply|Divide|Decimal|Enter)|Arrow(Up|Down|Left|Right)|Space|Shift(Left|Right)|Control(Left|Right)|Alt(Left|Right)|Tab|Enter|Backspace|Minus|Equal|BracketLeft|BracketRight|Backslash|Semicolon|Quote|Backquote|Comma|Period|Slash|F[1-9]|F10)$/.test(n)}function Lr(n){return n===0?"Mouse0":n===1?"Mouse1":n===2?"Mouse2":null}var su={Mouse0:"Left Mouse Button",Mouse1:"Middle Mouse Button",Mouse2:"Right Mouse Button",Space:"Space",ShiftLeft:"Left Shift",ShiftRight:"Right Shift",ControlLeft:"Left Ctrl",ControlRight:"Right Ctrl",AltLeft:"Left Alt",AltRight:"Right Alt",ArrowUp:"Arrow Up",ArrowDown:"Arrow Down",ArrowLeft:"Arrow Left",ArrowRight:"Arrow Right",Escape:"Escape",Tab:"Tab",Enter:"Enter",Backspace:"Backspace",Minus:"-",Equal:"=",BracketLeft:"[",BracketRight:"]",Backslash:"\\",Semicolon:";",Quote:"'",Backquote:"`",Comma:",",Period:".",Slash:"/",NumpadEnter:"Numpad Enter",NumpadAdd:"Numpad +",NumpadSubtract:"Numpad -",NumpadMultiply:"Numpad *",NumpadDivide:"Numpad /",NumpadDecimal:"Numpad ."},Ir=null;async function ru(){try{let n=navigator.keyboard;n&&typeof n.getLayoutMap=="function"&&(Ir=await n.getLayoutMap())}catch{Ir=null}}function Mn(n){if(!n)return"Unbound";if(su[n])return su[n];if(Ir&&Ir.has(n)){let e=Ir.get(n);if(e&&e.trim().length>0)return e.toUpperCase()}return n.startsWith("Key")?n.slice(3):n.startsWith("Digit")?n.slice(5):n.startsWith("Numpad")?`Numpad ${n.slice(6)}`:n}function qo(n,e,t,i){for(let s of ni){let r=n[s.action];if(r.primary===e&&!(s.action===t&&i==="primary"))return{action:s.action,label:s.label,slot:"primary"};if(r.secondary===e&&!(s.action===t&&i==="secondary"))return{action:s.action,label:s.label,slot:"secondary"}}return null}function Dr(n){let e=[];for(let t of ni){if(!t.required)continue;let i=n[t.action],s=!!i?.primary,r=!!i?.secondary;!s&&!r&&e.push(t)}return{valid:e.length===0,missingActions:e}}var Yo=class{constructor(e,t={}){D(this,"bindings");D(this,"codeToActions",new Map);D(this,"context","menu");D(this,"activeSources",new Map);D(this,"pendingPressed",new Set);D(this,"pendingReleased",new Set);D(this,"tickPressed",new Set);D(this,"tickReleased",new Set);D(this,"sprintToggled",!1);D(this,"sprintMode","hold");D(this,"holdToRepeatAttack",!1);D(this,"lookDeltaX",0);D(this,"lookDeltaY",0);D(this,"dragLookActive",!1);D(this,"dragLookButton",null);D(this,"lastDragX",0);D(this,"lastDragY",0);D(this,"virtualMoveX",0);D(this,"virtualMoveY",0);D(this,"gameplayCanvas",null);D(this,"wasPointerLocked",!1);D(this,"lastPointerLockExitTime",-1e3);D(this,"pointerLockSupported",!1);D(this,"pointerLockDenied",!1);D(this,"captureArmed",!1);D(this,"captureCallbacks",null);D(this,"captureSuppressElement",null);D(this,"ignoreEscapeUntil",0);D(this,"listeners",{});D(this,"activeInterfaceMode","desktop");D(this,"interfaceModeSetting","auto");D(this,"boundOnKeyDown");D(this,"boundOnKeyUp");D(this,"boundOnMouseDown");D(this,"boundOnMouseUp");D(this,"boundOnMouseMove");D(this,"boundOnContextMenu");D(this,"boundOnBlur");D(this,"boundOnVisibilityChange");D(this,"boundOnPointerLockChange");D(this,"boundOnPointerLockError");D(this,"boundOnPointerCancel");this.bindings=sn(e),this.listeners=t;for(let i of ni)this.activeSources.set(i.action,new Set);this.rebuildLookup(),this.boundOnKeyDown=this.handleKeyDown.bind(this),this.boundOnKeyUp=this.handleKeyUp.bind(this),this.boundOnMouseDown=this.handleMouseDown.bind(this),this.boundOnMouseUp=this.handleMouseUp.bind(this),this.boundOnMouseMove=this.handleMouseMove.bind(this),this.boundOnContextMenu=this.handleContextMenu.bind(this),this.boundOnBlur=this.handleWindowBlur.bind(this),this.boundOnVisibilityChange=this.handleVisibilityChange.bind(this),this.boundOnPointerLockChange=this.handlePointerLockChange.bind(this),this.boundOnPointerLockError=this.handlePointerLockError.bind(this),this.boundOnPointerCancel=this.handlePointerCancel.bind(this)}attach(e){this.gameplayCanvas=e,this.pointerLockSupported=typeof e.requestPointerLock=="function"&&"pointerLockElement"in document,window.addEventListener("keydown",this.boundOnKeyDown,{capture:!0}),window.addEventListener("keyup",this.boundOnKeyUp,{capture:!0}),window.addEventListener("mousedown",this.boundOnMouseDown,{capture:!0}),window.addEventListener("mouseup",this.boundOnMouseUp,{capture:!0}),window.addEventListener("mousemove",this.boundOnMouseMove),window.addEventListener("contextmenu",this.boundOnContextMenu,{capture:!0}),window.addEventListener("blur",this.boundOnBlur),window.addEventListener("pointercancel",this.boundOnPointerCancel),document.addEventListener("visibilitychange",this.boundOnVisibilityChange),document.addEventListener("pointerlockchange",this.boundOnPointerLockChange),document.addEventListener("pointerlockerror",this.boundOnPointerLockError),ru()}detach(){window.removeEventListener("keydown",this.boundOnKeyDown,{capture:!0}),window.removeEventListener("keyup",this.boundOnKeyUp,{capture:!0}),window.removeEventListener("mousedown",this.boundOnMouseDown,{capture:!0}),window.removeEventListener("mouseup",this.boundOnMouseUp,{capture:!0}),window.removeEventListener("mousemove",this.boundOnMouseMove),window.removeEventListener("contextmenu",this.boundOnContextMenu,{capture:!0}),window.removeEventListener("blur",this.boundOnBlur),window.removeEventListener("pointercancel",this.boundOnPointerCancel),document.removeEventListener("visibilitychange",this.boundOnVisibilityChange),document.removeEventListener("pointerlockchange",this.boundOnPointerLockChange),document.removeEventListener("pointerlockerror",this.boundOnPointerLockError),this.gameplayCanvas=null}applyBindings(e){this.bindings=sn(e),this.rebuildLookup(),this.clearAllInputs()}getBindings(){return sn(this.bindings)}configureGameplayOptions(e){this.sprintMode=e.sprintMode,this.holdToRepeatAttack=e.holdToRepeatAttack,this.interfaceModeSetting=e.interfaceMode,e.interfaceMode==="desktop"&&(this.activeInterfaceMode="desktop"),e.interfaceMode==="touch"&&(this.activeInterfaceMode="touch"),this.sprintMode==="hold"&&(this.sprintToggled=!1)}getActiveInterfaceMode(){return this.interfaceModeSetting==="desktop"?"desktop":this.interfaceModeSetting==="touch"?"touch":this.activeInterfaceMode}reportTouchActivity(){this.interfaceModeSetting==="auto"&&this.activeInterfaceMode!=="touch"&&(this.activeInterfaceMode="touch",this.listeners.onInputActivity?.("touch"))}reportDesktopActivity(){this.interfaceModeSetting==="auto"&&this.activeInterfaceMode!=="desktop"&&(this.activeInterfaceMode="desktop",this.listeners.onInputActivity?.("desktop"))}getActionPrimaryLabel(e){let t=this.bindings[e],i=t?.primary??t?.secondary??null;return Mn(i)}getActionAllLabels(e){let t=this.bindings[e],i=[];return t?.primary&&i.push(Mn(t.primary)),t?.secondary&&i.push(Mn(t.secondary)),i.length>0?i.join(" / "):"Unbound"}setContext(e){this.context!==e&&(this.context=e,this.clearAllInputs(),e!=="gameplay"&&this.isPointerLocked()&&this.exitPointerLockSafely())}getContext(){return this.context}isPointerLocked(){return!!(this.gameplayCanvas&&document.pointerLockElement===this.gameplayCanvas)}isPointerLockAvailable(){return this.pointerLockSupported&&!this.pointerLockDenied}requestPointerLock(){if(!(!this.gameplayCanvas||!this.pointerLockSupported)&&!(this.context!=="gameplay"||this.getActiveInterfaceMode()==="touch"))try{let e=this.gameplayCanvas.requestPointerLock();e&&typeof e.catch=="function"&&e.catch(()=>{this.pointerLockDenied=!0})}catch{this.pointerLockDenied=!0}}exitPointerLockSafely(){try{document.pointerLockElement&&(this.wasPointerLocked=!1,document.exitPointerLock())}catch{}}startRebindCapture(e,t){this.setContext("rebinding"),this.captureCallbacks=e,this.captureSuppressElement=t??null,this.captureArmed=!1,queueMicrotask(()=>{this.context==="rebinding"&&this.captureCallbacks&&(this.captureArmed=!0)})}stopRebindCapture(){this.captureArmed=!1,this.captureCallbacks=null,this.captureSuppressElement=null}clearAllInputs(){for(let e of this.activeSources.values())e.clear();this.pendingPressed.clear(),this.pendingReleased.clear(),this.tickPressed.clear(),this.tickReleased.clear(),this.sprintToggled=!1,this.virtualMoveX=0,this.virtualMoveY=0,this.lookDeltaX=0,this.lookDeltaY=0,this.dragLookActive=!1,this.dragLookButton=null}beginSimulationFrame(){this.tickPressed.clear(),this.tickReleased.clear();for(let e of this.pendingPressed)this.tickPressed.add(e);for(let e of this.pendingReleased)this.tickReleased.add(e);this.pendingPressed.clear(),this.pendingReleased.clear()}isPressed(e){return this.tickPressed.has(e)}isHeld(e){return(this.activeSources.get(e)?.size??0)>0}isReleased(e){return this.tickReleased.has(e)}isSprintingActive(e){return this.sprintMode==="hold"?this.isHeld("sprint")&&e:e?this.sprintToggled:(this.sprintToggled=!1,!1)}setVirtualAnalog(e,t){this.virtualMoveX=Math.max(-1,Math.min(1,e)),this.virtualMoveY=Math.max(-1,Math.min(1,t))}setVirtualAction(e,t,i="touch"){t?this.activateSource(e,i,!1):this.deactivateSource(e,i)}addTouchLookDelta(e,t){this.lookDeltaX+=e,this.lookDeltaY+=t}consumeLookDelta(){let e={dx:this.lookDeltaX,dy:this.lookDeltaY};return this.lookDeltaX=0,this.lookDeltaY=0,e}getMovementAxes(){let e=this.virtualMoveX,t=this.virtualMoveY;this.isHeld("moveRight")&&(e+=1),this.isHeld("moveLeft")&&(e-=1),this.isHeld("moveForward")&&(t+=1),this.isHeld("moveBackward")&&(t-=1);let i=Math.hypot(e,t);return i>1&&(e/=i,t/=i),{x:e,z:t}}rebuildLookup(){this.codeToActions.clear();for(let e of ni){let t=this.bindings[e.action],i=new Set;e.primaryLockedEscape?i.add("Escape"):t.primary&&i.add(t.primary),t.secondary&&i.add(t.secondary);for(let s of i){let r=this.codeToActions.get(s)??[];r.push(e.action),this.codeToActions.set(s,r)}}}activateSource(e,t,i){let s=ni.find(o=>o.action===e);if(!s)return;let r=this.activeSources.get(e),a=r.size>0;i&&(s.isSinglePress||e==="attack"&&!this.holdToRepeatAttack)||(r.add(t),a||(this.pendingPressed.add(e),e==="sprint"&&this.sprintMode==="toggle"&&(this.sprintToggled=!this.sprintToggled)))}deactivateSource(e,t){let i=this.activeSources.get(e);if(!i)return;i.delete(t)&&i.size===0&&this.pendingReleased.add(e)}handleKeyDown(e){if(e.repeat)return;if(this.reportDesktopActivity(),this.context==="rebinding"){if(e.code==="Escape"){e.preventDefault(),e.stopPropagation(),this.ignoreEscapeUntil=performance.now()+200;let i=this.captureCallbacks;this.stopRebindCapture(),i?.onCancel();return}if(!this.captureArmed&&(e.code==="Enter"||e.code==="Space"))return;if(Is(e.code)){e.preventDefault(),e.stopPropagation();let i=this.captureCallbacks;this.stopRebindCapture(),i?.onCaptured(e.code)}return}let t=this.codeToActions.get(e.code);if(!(!t||t.length===0)){if(e.code==="Escape"){let i=performance.now();if(i<this.ignoreEscapeUntil||i-this.lastPointerLockExitTime<180){e.preventDefault();return}}if(this.context==="menu"){t.includes("pause")&&!e.repeat&&(e.preventDefault(),this.activateSource("pause",`key:${e.code}`,!1)),t.includes("interact")&&!e.repeat&&(e.preventDefault(),this.activateSource("interact",`key:${e.code}`,!1));return}if(this.context==="mechanism"){let i=["moveForward","moveBackward","moveLeft","moveRight","interact","pause"],s=t.filter(r=>i.includes(r));if(s.length>0){e.preventDefault();for(let r of s)this.activateSource(r,`key:${e.code}`,e.repeat)}return}(e.code==="Space"||e.code.startsWith("Arrow")||e.code==="Tab")&&e.preventDefault();for(let i of t)this.activateSource(i,`key:${e.code}`,e.repeat)}}handleKeyUp(e){let t=this.codeToActions.get(e.code);if(t)for(let i of t)this.deactivateSource(i,`key:${e.code}`)}isInsideGameplaySurface(e){return!!(this.gameplayCanvas&&e instanceof Node&&(e===this.gameplayCanvas||this.gameplayCanvas.contains(e)))}isNonAttackDragButton(e){let t=Lr(e);if(!t)return!1;let i=this.codeToActions.get(t);return!i||!i.includes("attack")}handleMouseDown(e){if(this.reportDesktopActivity(),this.context==="rebinding"){if(!this.captureArmed||this.captureSuppressElement&&e.target instanceof Node&&this.captureSuppressElement.contains(e.target))return;let s=Lr(e.button);if(s&&Is(s)){e.preventDefault(),e.stopPropagation();let r=this.captureCallbacks;this.stopRebindCapture(),r?.onCaptured(s)}return}if(this.context!=="gameplay"||!this.isInsideGameplaySurface(e.target))return;let t=Lr(e.button);if(!t)return;e.button===2&&e.preventDefault(),!this.isPointerLocked()&&e.button===0&&this.isPointerLockAvailable()&&this.requestPointerLock();let i=this.codeToActions.get(t);if(i)for(let s of i)this.activateSource(s,`mouse:${t}`,!1);!this.isPointerLocked()&&this.isNonAttackDragButton(e.button)&&(this.dragLookActive=!0,this.dragLookButton=e.button,this.lastDragX=e.clientX,this.lastDragY=e.clientY)}handleMouseUp(e){let t=Lr(e.button);if(t){let i=this.codeToActions.get(t);if(i)for(let s of i)this.deactivateSource(s,`mouse:${t}`)}this.dragLookActive&&e.button===this.dragLookButton&&(this.dragLookActive=!1,this.dragLookButton=null)}handleMouseMove(e){if(this.context==="gameplay"){if(this.isPointerLocked())this.lookDeltaX+=e.movementX,this.lookDeltaY+=e.movementY;else if(this.dragLookActive){let t=e.clientX-this.lastDragX,i=e.clientY-this.lastDragY;this.lastDragX=e.clientX,this.lastDragY=e.clientY,this.lookDeltaX+=t,this.lookDeltaY+=i}}}handleContextMenu(e){if(this.context==="rebinding"){e.preventDefault();return}(this.context==="gameplay"||this.context==="mechanism")&&this.isInsideGameplaySurface(e.target)&&e.preventDefault()}handleWindowBlur(){this.clearAllInputs(),(this.context==="gameplay"||this.context==="mechanism")&&this.listeners.onContextLostPause?.()}handleVisibilityChange(){document.hidden&&(this.clearAllInputs(),(this.context==="gameplay"||this.context==="mechanism")&&this.listeners.onContextLostPause?.())}handlePointerCancel(){this.clearAllInputs()}handlePointerLockChange(){if(this.isPointerLocked()){this.wasPointerLocked=!0,this.pointerLockDenied=!1;return}this.wasPointerLocked&&(this.wasPointerLocked=!1,this.lastPointerLockExitTime=performance.now(),this.clearAllInputs(),(this.context==="gameplay"||this.context==="mechanism")&&this.listeners.onContextLostPause?.())}handlePointerLockError(){this.pointerLockDenied=!0}};var Zo=class{constructor(e,t,i,s){D(this,"root");D(this,"joystickZone");D(this,"joystickBase");D(this,"joystickKnob");D(this,"lookZone");D(this,"portraitBanner");D(this,"btnAttack");D(this,"btnDodge");D(this,"btnSprint");D(this,"btnInteract");D(this,"btnPotion");D(this,"inputManager");D(this,"hooks");D(this,"mobileSettings");D(this,"joystickPointerId",null);D(this,"joystickCenter",{x:0,y:0});D(this,"lookPointerId",null);D(this,"lastLookPos",{x:0,y:0});D(this,"buttonPointers",new Map);D(this,"touchSprintLatched",!1);D(this,"visible",!1);this.inputManager=t,this.mobileSettings={...i},this.hooks=s,this.root=document.createElement("div"),this.root.id="mobileControlsLayer",this.root.className="mobile-controls hidden",this.root.innerHTML=`
      <div id="portraitWarningBanner" class="portrait-banner hidden" role="status">
        Rotate your device to landscape mode for the best experience.
      </div>
      <div class="mobile-top-utils">
        <button type="button" class="touch-util-btn" data-util="inventory" aria-label="Inventory">Bag</button>
        <button type="button" class="touch-util-btn" data-util="map" aria-label="Map">Map</button>
        <button type="button" class="touch-util-btn" data-util="settings" aria-label="Settings">Settings</button>
        <button type="button" class="touch-util-btn" data-util="pause" aria-label="Pause">Pause</button>
      </div>
      <div id="touchLookZone" class="touch-look-zone" aria-label="Camera Look Area"></div>
      <div id="touchJoystickZone" class="touch-joystick-zone" aria-label="Movement Joystick">
        <div id="touchJoystickBase" class="joystick-base">
          <div id="touchJoystickKnob" class="joystick-knob"></div>
        </div>
      </div>
      <div class="touch-action-cluster">
        <button type="button" id="touchBtnInteract" class="touch-action-btn touch-interact hidden" aria-label="Interact">
          <span>Interact</span>
        </button>
        <button type="button" id="touchBtnPotion" class="touch-action-btn touch-potion" aria-label="Use Potion">
          <span>Potion</span>
          <small id="touchPotionBadge">1</small>
        </button>
        <button type="button" id="touchBtnSprint" class="touch-action-btn touch-sprint" aria-label="Sprint">
          <span>Sprint</span>
        </button>
        <button type="button" id="touchBtnDodge" class="touch-action-btn touch-dodge" aria-label="Dodge">
          <span>Dodge</span>
        </button>
        <button type="button" id="touchBtnAttack" class="touch-action-btn touch-attack" aria-label="Attack">
          <span>Attack</span>
        </button>
      </div>
    `,e.appendChild(this.root),this.joystickZone=this.root.querySelector("#touchJoystickZone"),this.joystickBase=this.root.querySelector("#touchJoystickBase"),this.joystickKnob=this.root.querySelector("#touchJoystickKnob"),this.lookZone=this.root.querySelector("#touchLookZone"),this.portraitBanner=this.root.querySelector("#portraitWarningBanner"),this.btnAttack=this.root.querySelector("#touchBtnAttack"),this.btnDodge=this.root.querySelector("#touchBtnDodge"),this.btnSprint=this.root.querySelector("#touchBtnSprint"),this.btnInteract=this.root.querySelector("#touchBtnInteract"),this.btnPotion=this.root.querySelector("#touchBtnPotion"),this.bindEvents(),this.applySettings(this.mobileSettings),this.updateOrientationBanner()}setVisible(e){this.visible=e,this.root.classList.toggle("hidden",!e),e||this.resetAllTouches()}isVisible(){return this.visible}applySettings(e){this.mobileSettings={...e},this.root.style.setProperty("--hud-scale",String(e.hudScale)),this.root.style.setProperty("--touch-opacity",String(e.buttonOpacity)),this.root.style.setProperty("--joystick-size",`${e.joystickSize}px`),this.root.style.setProperty("--attack-size",`${e.attackButtonSize}px`)}updateContextualState(e){this.btnInteract.classList.toggle("hidden",!e.canInteract),e.interactLabel&&(this.btnInteract.querySelector("span").textContent=e.interactLabel);let t=this.btnPotion.querySelector("#touchPotionBadge");t.textContent=String(e.potions),this.btnPotion.disabled=e.potions<=0||e.hp>=e.maxHp}resetAllTouches(){this.joystickPointerId=null,this.lookPointerId=null,this.joystickKnob.style.transform="translate(-50%, -50%)",this.inputManager.setVirtualAnalog(0,0);for(let[e,t]of this.buttonPointers)this.inputManager.setVirtualAction(t,!1,`touch:${t}:${e}`);this.root.querySelectorAll(".pressed").forEach(e=>e.classList.remove("pressed")),this.buttonPointers.clear(),this.touchSprintLatched=!1,this.btnSprint.classList.remove("active"),this.inputManager.setVirtualAction("sprint",!1,"touch:sprint")}updateOrientationBanner(){let e=window.innerHeight>window.innerWidth;this.portraitBanner.classList.toggle("hidden",!e)}bindEvents(){window.addEventListener("resize",()=>this.updateOrientationBanner()),window.addEventListener("orientationchange",()=>this.updateOrientationBanner()),window.addEventListener("blur",()=>this.resetAllTouches()),document.addEventListener("visibilitychange",()=>{document.hidden&&this.resetAllTouches()}),window.addEventListener("pointerdown",i=>{i.pointerType==="touch"&&this.inputManager.reportTouchActivity()},{passive:!0}),this.joystickZone.addEventListener("pointerdown",i=>{if(this.joystickPointerId!==null)return;i.preventDefault(),i.stopPropagation(),this.inputManager.reportTouchActivity(),this.joystickPointerId=i.pointerId;try{this.joystickZone.setPointerCapture(i.pointerId)}catch{}let s=this.joystickBase.getBoundingClientRect();this.joystickCenter={x:s.left+s.width/2,y:s.top+s.height/2},this.updateJoystickFromPointer(i.clientX,i.clientY)}),this.joystickZone.addEventListener("pointermove",i=>{i.pointerId===this.joystickPointerId&&(i.preventDefault(),this.updateJoystickFromPointer(i.clientX,i.clientY))});let e=i=>{i.pointerId===this.joystickPointerId&&(this.joystickPointerId=null,this.joystickKnob.style.transform="translate(-50%, -50%)",this.inputManager.setVirtualAnalog(0,0))};this.joystickZone.addEventListener("pointerup",e),this.joystickZone.addEventListener("pointercancel",e),this.lookZone.addEventListener("pointerdown",i=>{if(this.lookPointerId===null){i.preventDefault(),this.inputManager.reportTouchActivity(),this.lookPointerId=i.pointerId;try{this.lookZone.setPointerCapture(i.pointerId)}catch{}this.lastLookPos={x:i.clientX,y:i.clientY}}}),this.lookZone.addEventListener("pointermove",i=>{if(i.pointerId!==this.lookPointerId)return;i.preventDefault();let s=i.clientX-this.lastLookPos.x,r=i.clientY-this.lastLookPos.y;this.lastLookPos={x:i.clientX,y:i.clientY};let a=this.mobileSettings.cameraSensitivity*1.45,o=this.mobileSettings.invertY?-1:1;this.inputManager.addTouchLookDelta(s*a,r*a*o)});let t=i=>{i.pointerId===this.lookPointerId&&(this.lookPointerId=null)};this.lookZone.addEventListener("pointerup",t),this.lookZone.addEventListener("pointercancel",t),this.bindActionButton(this.btnAttack,"attack"),this.bindActionButton(this.btnDodge,"dodge"),this.bindActionButton(this.btnInteract,"interact"),this.bindActionButton(this.btnPotion,"usePotion"),this.btnSprint.addEventListener("pointerdown",i=>{i.preventDefault(),i.stopPropagation(),this.inputManager.reportTouchActivity(),this.touchSprintLatched=!this.touchSprintLatched,this.btnSprint.classList.toggle("active",this.touchSprintLatched),this.inputManager.setVirtualAction("sprint",this.touchSprintLatched,"touch:sprint")}),this.root.querySelectorAll(".touch-util-btn").forEach(i=>{i.addEventListener("pointerdown",s=>{s.preventDefault(),s.stopPropagation();let r=i.dataset.util;r==="inventory"?this.hooks.onOpenInventory():r==="map"?this.hooks.onToggleMap():r==="settings"?this.hooks.onOpenSettings():r==="pause"&&this.hooks.onPause()})})}bindActionButton(e,t){e.addEventListener("pointerdown",s=>{if(!e.disabled){s.preventDefault(),s.stopPropagation(),this.inputManager.reportTouchActivity(),this.buttonPointers.set(s.pointerId,t);try{e.setPointerCapture(s.pointerId)}catch{}e.classList.add("pressed"),this.inputManager.setVirtualAction(t,!0,`touch:${t}:${s.pointerId}`)}});let i=s=>{let r=this.buttonPointers.get(s.pointerId);r&&(this.buttonPointers.delete(s.pointerId),e.classList.remove("pressed"),this.inputManager.setVirtualAction(r,!1,`touch:${r}:${s.pointerId}`))};e.addEventListener("pointerup",i),e.addEventListener("pointercancel",i)}updateJoystickFromPointer(e,t){let i=this.mobileSettings.joystickSize*.42,s=e-this.joystickCenter.x,r=t-this.joystickCenter.y,a=Math.hypot(s,r),o=Math.min(i,a),l=Math.atan2(r,s),c=Math.cos(l)*o,d=Math.sin(l)*o;this.joystickKnob.style.transform=`translate(calc(-50% + ${c}px), calc(-50% + ${d}px))`;let h=o/i;if(h<.12){this.inputManager.setVirtualAnalog(0,0);return}let u=Math.min(1,h*this.mobileSettings.joystickSensitivity),p=Math.cos(l)*u,f=-Math.sin(l)*u;this.inputManager.setVirtualAnalog(p,f)}};var Nr=-26,Rx=18,Fr=-180,Px=8,Ix=6.8,Ci=[{id:"ruins_awakening",region:"ruins",minX:-6,maxX:6,minZ:-6,maxZ:6,floorType:"stone"},{id:"ruins_side_corr",region:"ruins",minX:6,maxX:8,minZ:-2,maxZ:2,floorType:"stone"},{id:"ruins_side_alcove",region:"ruins",minX:8,maxX:16,minZ:-4,maxZ:4,floorType:"stone"},{id:"ruins_north_corr",region:"ruins",minX:-3,maxX:3,minZ:-14,maxZ:-6,floorType:"stone"},{id:"ruins_arena",region:"ruins",minX:-10,maxX:10,minZ:-34,maxZ:-14,floorType:"stone"},{id:"ruins_exit_corr",region:"ruins",minX:-3,maxX:3,minZ:-38,maxZ:-34,floorType:"stone"},{id:"whispers_entry",region:"whispers",minX:-4,maxX:4,minZ:-42,maxZ:-38,floorType:"library"},{id:"whispers_library",region:"whispers",minX:-10,maxX:10,minZ:-62,maxZ:-42,floorType:"library"},{id:"whispers_west_corr",region:"whispers",minX:-14,maxX:-10,minZ:-54,maxZ:-48,floorType:"library"},{id:"whispers_axiom_wing",region:"whispers",minX:-22,maxX:-14,minZ:-56,maxZ:-46,floorType:"library"},{id:"whispers_sanctum_corr",region:"whispers",minX:-3,maxX:3,minZ:-66,maxZ:-62,floorType:"library"},{id:"whispers_arena",region:"whispers",minX:-10,maxX:10,minZ:-84,maxZ:-66,floorType:"library"},{id:"whispers_exit_corr",region:"whispers",minX:-3,maxX:3,minZ:-88,maxZ:-84,floorType:"library"},{id:"abyss_entry",region:"abyss",minX:-5,maxX:5,minZ:-94,maxZ:-88,floorType:"abyss"},{id:"abyss_east_corr",region:"abyss",minX:5,maxX:7,minZ:-92,maxZ:-88,floorType:"abyss"},{id:"abyss_east_shrine",region:"abyss",minX:7,maxX:15,minZ:-94,maxZ:-86,floorType:"abyss"},{id:"abyss_bridge",region:"abyss",minX:-4,maxX:4,minZ:-108,maxZ:-94,floorType:"abyss",isBridge:!0},{id:"abyss_arena",region:"abyss",minX:-11,maxX:11,minZ:-128,maxZ:-108,floorType:"abyss"},{id:"abyss_exit_corr",region:"abyss",minX:-3,maxX:3,minZ:-132,maxZ:-128,floorType:"abyss"},{id:"sanctum_antechamber",region:"sanctum",minX:-5,maxX:5,minZ:-138,maxZ:-132,floorType:"sanctum"},{id:"sanctum_arena",region:"sanctum",minX:-12,maxX:12,minZ:-162,maxZ:-138,floorType:"sanctum"},{id:"sanctum_hidden_corr",region:"sanctum",minX:-15,maxX:-12,minZ:-152,maxZ:-146,floorType:"sanctum"},{id:"sanctum_hidden_room",region:"sanctum",minX:-24,maxX:-15,minZ:-155,maxZ:-143,floorType:"sanctum"},{id:"sanctum_exit_hall",region:"sanctum",minX:-4,maxX:4,minZ:-178,maxZ:-162,floorType:"sanctum"}],gi=[{id:"door_ruins_side",x:7,z:0,width:.9,depth:4,orientation:"z-axis",kind:"energy",region:"ruins",label:"The Stillwater Seal",energyConfig:{id:"door_ruins_side",label:"Energy Door: Ruins Vault",k:16,a:.68,eMin:10,tolerance:1.4,dwellTime:1.1,initialX:.15}},{id:"gate_ruins_to_whispers",x:0,z:-35.5,width:6,depth:.9,orientation:"x-axis",kind:"progression",region:"ruins",label:"Gate to Chamber of Whispers",requiredFlag:"stoneSentinelDefeated"},{id:"gate_whispers_sanctum",x:0,z:-64,width:6,depth:.9,orientation:"x-axis",kind:"progression",region:"whispers",label:"Sanctum Gate (Rescue Axiom First)",requiredFlag:"axiomRescued"},{id:"gate_whispers_to_abyss",x:0,z:-86,width:6,depth:.9,orientation:"x-axis",kind:"progression",region:"whispers",label:"Gate to Abyssal Sanctum",requiredFlag:"arcaneScholarDefeated"},{id:"door_abyss_barrier",x:0,z:-102,width:8,depth:.8,orientation:"x-axis",kind:"barrier",region:"abyss",label:"Abyssal Energy Barrier"},{id:"gate_abyss_to_sanctum",x:0,z:-130,width:6,depth:.9,orientation:"x-axis",kind:"progression",region:"abyss",label:"Gate to Final Sanctum",requiredFlag:"keeperDefeated"},{id:"gate_sanctum_seal",x:0,z:-138,width:10,depth:1,orientation:"x-axis",kind:"sealGate",region:"sanctum",label:"Three-Seal Gateway",requiredFlag:"sealsInserted"},{id:"gate_student_alcove",x:-12.5,z:-149,width:.9,depth:6,orientation:"z-axis",kind:"progression",region:"sanctum",label:"Hidden Chamber Passage",requiredFlag:"archivistDefeated"},{id:"gate_exit_hall",x:0,z:-162,width:8,depth:.9,orientation:"x-axis",kind:"progression",region:"sanctum",label:"Exit Corridor Gate",requiredFlag:"archivistDefeated"},{id:"gate_final_exit",x:0,z:-175,width:8,depth:1,orientation:"x-axis",kind:"finalExit",region:"sanctum",label:"Grand Exit Gateway",requiredFlag:"axiomSacrificed"}],rn=[{id:"chest_ruins_alcove",x:12,z:0,region:"ruins",label:"Forgotten Strongbox",kind:"standard",rewards:{potions:1,keys:1}},{id:"chest_whispers_library",x:-18,z:-47.5,region:"whispers",label:"Dual-Crystal Library Chest",kind:"optimization",optConfig:{id:"chest_whispers_library",label:"Library Optimization Chest",kx:14,ky:14,a:.3,b:.7,eMin:10,tolerance:1.8,dwellTime:1,initialX:.75,initialY:.2},rewards:{potions:2,keys:1}},{id:"chest_abyss_opt",x:11,z:-90,region:"abyss",label:"Abyssal Relic Chest",kind:"optimization",optConfig:{id:"chest_abyss_opt",label:"Abyssal Optimization Chest",kx:18,ky:22,a:.65,b:.35,eMin:8,tolerance:2,dwellTime:1.1,initialX:.2,initialY:.85},rewards:{potions:2,keys:1}},{id:"chest_greedy_gold",x:-20,z:-145,region:"sanctum",label:"Hoard of Golden Relics",kind:"greedyGold",rewards:{potions:0,keys:0,goldRelic:!0}}],wn=[{id:"pylon_sentinel_shield",x:-7,z:-24,region:"ruins",label:"Sentinel Shield Stabilizer",kind:"bossShield1D",targetId:"boss_stone_sentinel",energyConfig:{id:"pylon_sentinel_shield",label:"Stone Sentinel Aegis Shield",k:20,a:.32,eMin:8,tolerance:1.6,dwellTime:1,initialX:.82}},{id:"mech_rescue_axiom",x:-18,z:-51,region:"whispers",label:"Axiom's Containment Stabilizer",kind:"axiomCage",targetId:"axiom",energyConfig:{id:"mech_rescue_axiom",label:"Axiom Stasis Containment",k:22,a:.78,eMin:12,tolerance:1.7,dwellTime:1.1,initialX:.18}},{id:"pylon_scholar_shield",x:7,z:-74,region:"whispers",label:"Temporal Ward Stabilizer",kind:"bossShield1D",targetId:"boss_arcane_scholar",energyConfig:{id:"pylon_scholar_shield",label:"Arcane Scholar Temporal Ward",k:24,a:.24,eMin:9,tolerance:1.8,dwellTime:1,initialX:.8}},{id:"mech_abyss_barrier",x:-2.8,z:-99.5,region:"abyss",label:"Bridge Barrier Stabilizer",kind:"barrierControl",targetId:"door_abyss_barrier",energyConfig:{id:"mech_abyss_barrier",label:"Abyssal Bridge Barrier",k:25,a:.55,eMin:6,tolerance:1.8,dwellTime:1.05,initialX:.1}},{id:"pylon_keeper_shield",x:-7.5,z:-118,region:"abyss",label:"Celestial Core",kind:"bossShield2D",targetId:"boss_keeper_equations",optConfig:{id:"pylon_keeper_shield",label:"Keeper Dual-Crystal Shield",kx:18,ky:18,a:.75,b:.25,eMin:10,tolerance:2,dwellTime:1.05,initialX:.2,initialY:.8}},{id:"pylon_archivist_1",x:-8.5,z:-148,region:"sanctum",label:"Archivist West Energy Pylon",kind:"bossShield1D",targetId:"boss_eternal_archivist",energyConfig:{id:"pylon_archivist_1",label:"Archivist Phase I Shield Pylon",k:24,a:.82,eMin:10,tolerance:1.8,dwellTime:1,initialX:.18}},{id:"pylon_archivist_2",x:8.5,z:-148,region:"sanctum",label:"Archivist East Crystal Pylon",kind:"bossShield2D",targetId:"boss_eternal_archivist",optConfig:{id:"pylon_archivist_2",label:"Archivist Phase II Overdrive Pylon",kx:20,ky:20,a:.3,b:.72,eMin:8,tolerance:2.1,dwellTime:1.05,initialX:.82,initialY:.2}},{id:"mech_student_rescue",x:-18,z:-149,region:"sanctum",label:"Student Containment Seal",kind:"studentCage",targetId:"student",optConfig:{id:"mech_student_rescue",label:"Trapped Student Containment Lock",kx:16,ky:16,a:.72,b:.28,eMin:10,tolerance:1.9,dwellTime:1.15,initialX:.2,initialY:.8}}],Ls=[{id:"trap_archivist_clock",label:"Archivist pendulum",axis:"x",p0:0,amplitude:7.5,omega:1.55,phase:Math.PI/2,halfExtents:{x:.65,y:1.2,z:.4},damage:16},{id:"trap_whispers_1",label:"Library Harmonic Blade I",axis:"x",p0:0,amplitude:6.2,omega:1.85,phase:0,halfExtents:{x:1.25,y:1.6,z:.55},damage:18},{id:"trap_whispers_2",label:"Library Harmonic Blade II",axis:"x",p0:0,amplitude:6.2,omega:2.05,phase:Math.PI,halfExtents:{x:1.25,y:1.6,z:.55},damage:18},{id:"trap_abyss_bridge",label:"Abyss Pendulum Crusher",axis:"x",p0:0,amplitude:2.5,omega:2.25,phase:.8,halfExtents:{x:1,y:1.8,z:.65},damage:22}],kr={trap_archivist_clock:{x:0,z:-149,region:"sanctum"},trap_whispers_1:{x:0,z:-48,region:"whispers"},trap_whispers_2:{x:0,z:-55,region:"whispers"},trap_abyss_bridge:{x:0,z:-105,region:"abyss"}},Wn=[{id:"enemy_ruins_1",archetypeId:"ruinSkeleton",x:0,z:-10,region:"ruins",patrolOffset:{x:1.8,z:0}},{id:"enemy_ruins_2",archetypeId:"ruinSkeleton",x:-6,z:-20,region:"ruins",patrolOffset:{x:3.5,z:0}},{id:"boss_stone_sentinel",archetypeId:"stoneSentinelBoss",x:0,z:-26,region:"ruins",patrolOffset:{x:2.5,z:0},shieldPylonId:"pylon_sentinel_shield",dropsSeal:{id:"seal_rates",name:"First Ancient Seal"}},{id:"enemy_whisper_1",archetypeId:"whisperWraith",x:6,z:-71,region:"whispers",patrolOffset:{x:0,z:3.5}},{id:"boss_arcane_scholar",archetypeId:"arcaneScholarBoss",x:0,z:-76,region:"whispers",patrolOffset:{x:3,z:0},shieldPylonId:"pylon_scholar_shield",dropsSeal:{id:"seal_motion",name:"Second Ancient Seal"}},{id:"enemy_abyss_1",archetypeId:"abyssConstruct",x:-6,z:-114,region:"abyss",patrolOffset:{x:3,z:0}},{id:"enemy_abyss_2",archetypeId:"abyssConstruct",x:6,z:-114,region:"abyss",patrolOffset:{x:3,z:0}},{id:"boss_keeper_equations",archetypeId:"keeperEquationsBoss",x:0,z:-120,region:"abyss",patrolOffset:{x:3,z:0},shieldPylonId:"pylon_keeper_shield",dropsSeal:{id:"seal_extremum",name:"Third Ancient Seal"}},{id:"boss_eternal_archivist",archetypeId:"eternalArchivistBoss",x:0,z:-151,region:"sanctum",patrolOffset:{x:4,z:0},shieldPylonId:"pylon_archivist_1",secondPhasePylonId:"pylon_archivist_2"}],Br=[{id:"tablet_ruins_intro",x:-3.5,z:-2.5,region:"ruins",title:"Stone Inscription of the Forgotten",lines:["\u201CThree ancient seals guard the path to freedom. Only those who feel the changing forces of this world shall escape.\u201D","Turn the bronze seals until their trembling fades. When the current runs steady, hold it there. The old locks will remember."]}],Xn=[{id:"ruins_awakening",region:"ruins",x:0,z:2.5,yaw:0,minZ:-14,maxZ:6},{id:"ruins_sanctum",region:"ruins",x:0,z:-15,yaw:0,minZ:-38,maxZ:-14},{id:"whispers_entrance",region:"whispers",x:0,z:-40,yaw:0,minZ:-64,maxZ:-38},{id:"whispers_sanctum",region:"whispers",x:0,z:-65,yaw:0,minZ:-88,maxZ:-64},{id:"abyss_entrance",region:"abyss",x:0,z:-91,yaw:0,minZ:-108,maxZ:-88},{id:"abyss_sanctum",region:"abyss",x:0,z:-109,yaw:0,minZ:-132,maxZ:-108},{id:"archivist_antechamber",region:"sanctum",x:0,z:-135,yaw:0,minZ:-180,maxZ:-132}],$o={ruins:"The Forgotten Ruins",whispers:"The Chamber of Whispers",abyss:"The Abyssal Sanctum",sanctum:"Sanctum of the Eternal Archivist"};function au(){let n=Rx-Nr,e=Px-Fr,t=Array.from({length:e},()=>Array(n).fill(!1));for(let a of Ci)for(let o=a.minZ;o<a.maxZ;o++)for(let l=a.minX;l<a.maxX;l++){let c=l-Nr,d=o-Fr;d>=0&&d<e&&c>=0&&c<n&&(t[d][c]=!0)}let i=Array.from({length:e},()=>Array(n).fill(!1));for(let a=0;a<e;a++)for(let o=0;o<n;o++){if(t[a][o])continue;let l=!1;for(let c=-1;c<=1&&!l;c++)for(let d=-1;d<=1;d++){let h=a+c,u=o+d;if(h>=0&&h<e&&u>=0&&u<n&&t[h][u]){l=!0;break}}l&&(i[a][o]=!0)}let s=[],r=0;for(let a=0;a<e;a++){let o=0;for(;o<n;){if(!i[a][o]){o++;continue}let l=o;for(;o<n&&i[a][o];)o++;let c=o,d=Fr+a+.5,h=Nr+(l+c)*.5,u=d<-94&&d>-108&&Math.abs(h)<=5.5;s.push({id:`wall_${r++}`,minX:Nr+l,maxX:Nr+c,minY:0,maxY:u?1.15:Ix,minZ:Fr+a,maxZ:Fr+a+1,blocksSight:!u})}}return s.push({id:"shelf_lib_e1",minX:7.5,maxX:9.6,minY:0,maxY:3.4,minZ:-59,maxZ:-45,blocksSight:!0},{id:"shelf_lib_w1",minX:-9.6,maxX:-7.5,minY:0,maxY:3.4,minZ:-60,maxZ:-55,blocksSight:!0},{id:"shelf_lib_w2",minX:-9.6,maxX:-7.5,minY:0,maxY:3.4,minZ:-47,maxZ:-43,blocksSight:!0}),s}var ou="tas_settings_v1",Bc="tas_save_v1";function Ds(){return{version:1,controls:sn(Ps),desktop:{horizontalSensitivity:1,verticalSensitivity:1,invertY:!1,fov:75,sprintMode:"hold",holdToRepeatAttack:!1},mobile:{cameraSensitivity:1.1,invertY:!1,joystickSensitivity:1,joystickSize:116,hudScale:1,buttonOpacity:.85,attackButtonSize:76},graphics:{...Vo.medium},interfaceMode:"auto",soundMuted:!1,showFpsCounter:!1,companionHints:!0,reducedMotion:typeof matchMedia<"u"&&matchMedia("(prefers-reduced-motion: reduce)").matches}}function Uc(){return{version:1,savedAt:new Date().toISOString(),checkpointId:"ruins_awakening",currentRegionId:"ruins",player:{x:0,y:0,z:2.5,yaw:0,hp:it.maxHp},inventory:{potions:1,keys:0,seals:[],goldRelicLooted:!1},worldFlags:{openedDoors:[],openedChests:[],brokenBarriers:[],defeatedEnemies:[],defeatedBosses:[],axiomRescued:!1,axiomSacrificed:!1,sealsInserted:!1,studentChoice:null,endingReached:null,seenTutorials:[]}}}function an(n,e,t,i){return typeof n!="number"||!Number.isFinite(n)?i:Math.max(e,Math.min(t,n))}function qn(n,e){return typeof n=="boolean"?n:e}function Lx(n){let e=Ds().controls;if(!n||typeof n!="object")return e;let t=sn(e),i=n;for(let a of ni){let o=i[a.action];if(!o||typeof o!="object")continue;let l=o,c=a.primaryLockedEscape?"Escape":l.primary===null?null:typeof l.primary=="string"&&Is(l.primary)?l.primary:e[a.action].primary,d=l.secondary===null?null:typeof l.secondary=="string"&&Is(l.secondary)?l.secondary:null;t[a.action]={primary:c,secondary:d}}let s=new Set;for(let a of ni){let o=t[a.action];o.primary&&(s.has(o.primary)&&!a.primaryLockedEscape?o.primary=null:s.add(o.primary)),o.secondary&&(s.has(o.secondary)?o.secondary=null:s.add(o.secondary))}let r=Dr(t);if(!r.valid)for(let a of r.missingActions){let o=e[a.action].primary;if(o&&!s.has(o))t[a.action].primary=o,s.add(o);else return e}return t}function Oc(n){if(!n||typeof n!="object")return null;let e=n;if(e.version!==1)return null;let t=Ds(),i=e.desktop&&typeof e.desktop=="object"?e.desktop:{},s=e.mobile&&typeof e.mobile=="object"?e.mobile:{},r=e.graphics&&typeof e.graphics=="object"?e.graphics:{},a=r.preset==="low"||r.preset==="medium"||r.preset==="high"||r.preset==="custom"?r.preset:t.graphics.preset,o=r.shadowQuality==="off"||r.shadowQuality==="low"||r.shadowQuality==="medium"||r.shadowQuality==="high"?r.shadowQuality:t.graphics.shadowQuality,l=r.effectsQuality==="low"||r.effectsQuality==="medium"||r.effectsQuality==="high"?r.effectsQuality:t.graphics.effectsQuality,c=r.renderScale===.5||r.renderScale===.75||r.renderScale===1?r.renderScale:t.graphics.renderScale,d=r.viewDistance==="near"||r.viewDistance==="medium"||r.viewDistance==="far"?r.viewDistance:t.graphics.viewDistance,h=r.textureQuality==="standard"||r.textureQuality==="detailed"?r.textureQuality:t.graphics.textureQuality,u=e.interfaceMode==="auto"||e.interfaceMode==="desktop"||e.interfaceMode==="touch"?e.interfaceMode:"auto";return{version:1,controls:Lx(e.controls),desktop:{horizontalSensitivity:an(i.horizontalSensitivity,.1,3,t.desktop.horizontalSensitivity),verticalSensitivity:an(i.verticalSensitivity,.1,3,t.desktop.verticalSensitivity),invertY:qn(i.invertY,t.desktop.invertY),fov:an(i.fov,60,90,t.desktop.fov),sprintMode:i.sprintMode==="toggle"?"toggle":"hold",holdToRepeatAttack:qn(i.holdToRepeatAttack,t.desktop.holdToRepeatAttack)},mobile:{cameraSensitivity:an(s.cameraSensitivity,.1,3,t.mobile.cameraSensitivity),invertY:qn(s.invertY,t.mobile.invertY),joystickSensitivity:an(s.joystickSensitivity,.5,2,t.mobile.joystickSensitivity),joystickSize:an(s.joystickSize,80,160,t.mobile.joystickSize),hudScale:an(s.hudScale,.75,1.35,t.mobile.hudScale),buttonOpacity:an(s.buttonOpacity,.4,1,t.mobile.buttonOpacity),attackButtonSize:an(s.attackButtonSize,56,100,t.mobile.attackButtonSize)},graphics:{preset:a,shadowQuality:o,effectsQuality:l,renderScale:c,viewDistance:d,textureQuality:h},interfaceMode:u,soundMuted:qn(e.soundMuted,t.soundMuted),companionHints:qn(e.companionHints,t.companionHints),reducedMotion:qn(e.reducedMotion,t.reducedMotion),showFpsCounter:qn(e.showFpsCounter,t.showFpsCounter)}}function Yn(n){return Array.isArray(n)&&n.every(e=>typeof e=="string")}function Dx(n){if(!n||typeof n!="object")return null;let e=n;if(e.version!==1)return null;let t=e.currentRegionId;if(t!=="ruins"&&t!=="whispers"&&t!=="abyss"&&t!=="sanctum"||!e.player||typeof e.player!="object")return null;let i=e.player;if(typeof i.x!="number"||!Number.isFinite(i.x)||typeof i.y!="number"||!Number.isFinite(i.y)||typeof i.z!="number"||!Number.isFinite(i.z)||typeof i.yaw!="number"||!Number.isFinite(i.yaw)||typeof i.hp!="number"||!Number.isFinite(i.hp)||!e.inventory||typeof e.inventory!="object")return null;let s=e.inventory;if(typeof s.potions!="number"||!Number.isFinite(s.potions)||typeof s.keys!="number"||!Number.isFinite(s.keys)||!Yn(s.seals)||!e.worldFlags||typeof e.worldFlags!="object")return null;let r=e.worldFlags;if(!Yn(r.openedDoors)||!Yn(r.openedChests)||!Yn(r.brokenBarriers)||!Yn(r.defeatedEnemies)||!Yn(r.defeatedBosses))return null;let a=r.studentChoice==="helped"||r.studentChoice==="left"?r.studentChoice:null,o=r.endingReached==="good"||r.endingReached==="bad"?r.endingReached:null,l=["seal_rates","seal_motion","seal_extremum"],c=["boss_stone_sentinel","boss_arcane_scholar","boss_keeper_equations"],d=new Set(s.seals.filter(C=>l.includes(C))),h=new Set(r.defeatedBosses.filter(C=>Wn.some(E=>E.id===C&&E.archetypeId.includes("Boss"))));h.has("boss_eternal_archivist")&&c.forEach(C=>h.add(C)),c.forEach((C,E)=>{h.has(C)&&d.add(l[E]),d.has(l[E])&&h.add(C)});let u=r.axiomRescued===!0||h.has("boss_arcane_scholar")||h.has("boss_keeper_equations"),p=d.size===3&&(r.sealsInserted===!0||h.has("boss_eternal_archivist")),f=h.has("boss_eternal_archivist")?a:null,_=u&&f!==null&&r.axiomSacrificed===!0,g=_&&o?f==="helped"?"good":"bad":null,m=h.has("boss_keeper_equations")?p?-178:-137:h.has("boss_arcane_scholar")?-129:h.has("boss_stone_sentinel")?u?-85:-63:-35,w=Xn.find(C=>C.id===e.checkpointId&&C.z>=m)??Xn[0],b=i.z>=m&&Ci.some(C=>i.x>=C.minX&&i.x<=C.maxX&&i.z>=C.minZ&&i.z<=C.maxZ);return{version:1,savedAt:typeof e.savedAt=="string"?e.savedAt:new Date().toISOString(),checkpointId:w.id,currentRegionId:b?Ci.find(C=>i.x>=C.minX&&i.x<=C.maxX&&i.z>=C.minZ&&i.z<=C.maxZ)?.region??t:w.region,player:{x:b?i.x:w.x,y:0,z:b?i.z:w.z,yaw:i.yaw,hp:Math.max(1,Math.min(it.maxHp,i.hp))},inventory:{potions:Math.max(0,Math.floor(s.potions)),keys:Math.max(0,Math.floor(s.keys)),seals:[...d],goldRelicLooted:f==="left"},worldFlags:{openedDoors:Array.from(new Set(r.openedDoors.filter(C=>gi.some(E=>E.id===C&&E.kind==="energy")))),openedChests:Array.from(new Set(r.openedChests.filter(C=>rn.some(E=>E.id===C)))),brokenBarriers:Array.from(new Set(r.brokenBarriers.filter(C=>gi.some(E=>E.id===C&&E.kind==="barrier")))),defeatedEnemies:Array.from(new Set(r.defeatedEnemies.filter(C=>Wn.some(E=>E.id===C&&!E.archetypeId.includes("Boss"))))),defeatedBosses:[...h],axiomRescued:u,axiomSacrificed:_,sealsInserted:p,studentChoice:f,endingReached:g,seenTutorials:Yn(r.seenTutorials)?Array.from(new Set(r.seenTutorials)):[]}}}function Nx(){try{if(typeof window<"u"&&window.localStorage){let n="__tas_probe__";return window.localStorage.setItem(n,"1"),window.localStorage.removeItem(n),window.localStorage}}catch{return null}return null}var Jo=class{constructor(e){D(this,"storage");D(this,"sessionSave",null);D(this,"sessionSettings",null);this.storage=e!==void 0?e:Nx()}isStorageAvailable(){return this.storage!==null}loadSettings(){if(!this.storage)return{settings:this.sessionSettings??Ds(),recoveredFromError:!1};try{let e=this.storage.getItem(ou);if(!e)return{settings:this.sessionSettings??Ds(),recoveredFromError:!1};let t=JSON.parse(e),i=Oc(t);return i?{settings:i,recoveredFromError:!1}:{settings:Ds(),recoveredFromError:!0}}catch{return{settings:Ds(),recoveredFromError:!0}}}saveSettings(e){if(this.sessionSettings=structuredClone(e),!this.storage)return!1;try{return this.storage.setItem(ou,JSON.stringify(e)),!0}catch{return!1}}loadGameSave(){if(!this.storage)return{save:this.sessionSave?structuredClone(this.sessionSave):null,corrupted:!1};try{let e=this.storage.getItem(Bc);if(!e)return{save:this.sessionSave,corrupted:!1};let t=JSON.parse(e),i=Dx(t);return i?{save:i,corrupted:!1}:{save:null,corrupted:!0}}catch{return{save:this.sessionSave,corrupted:!0}}}hasValidSave(){return this.loadGameSave().save!==null}saveGame(e){if(this.sessionSave=structuredClone(e),!this.storage)return!1;try{let t={...e,savedAt:new Date().toISOString()};return this.storage.setItem(Bc,JSON.stringify(t)),!0}catch{return!1}}clearGameSave(){if(this.sessionSave=null,!this.storage)return!1;try{return this.storage.removeItem(Bc),!0}catch{return!1}}};var Ko=class{constructor(){D(this,"ctx",null);D(this,"muted",!1);D(this,"resonanceOsc",null);D(this,"resonanceGain",null)}setMuted(e){this.muted=e,e&&this.stopMechanismResonance()}isMuted(){return this.muted}ensureInitialized(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{});return}try{let e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}catch{this.ctx=null}}playTone(e){if(!this.muted&&(this.ensureInitialized(),!!this.ctx))try{let t=this.ctx.currentTime+(e.delay??0),i=this.ctx.createOscillator(),s=this.ctx.createGain();if(i.type=e.type,i.frequency.setValueAtTime(e.startFreq,t),i.frequency.exponentialRampToValueAtTime(Math.max(20,e.endFreq),t+e.duration),s.gain.setValueAtTime(1e-4,t),s.gain.linearRampToValueAtTime(e.gainPeak,t+Math.min(.02,e.duration*.25)),s.gain.exponentialRampToValueAtTime(1e-4,t+e.duration),i.connect(s),e.pan!==void 0){let r=this.ctx.createStereoPanner();r.pan.value=Math.max(-1,Math.min(1,e.pan)),s.connect(r),r.connect(this.ctx.destination),i.onended=()=>{i.disconnect(),s.disconnect(),r.disconnect()}}else s.connect(this.ctx.destination),i.onended=()=>{i.disconnect(),s.disconnect()};i.start(t),i.stop(t+e.duration+.02)}catch{}}playSwordSwing(){this.playTone({type:"sawtooth",startFreq:380,endFreq:110,duration:.14,gainPeak:.14})}playSwordHit(e=0){this.playTone({type:"square",startFreq:190,endFreq:52,duration:.15,gainPeak:.15,pan:e})}playShieldDeflect(){this.playTone({type:"triangle",startFreq:640,endFreq:240,duration:.18,gainPeak:.16})}playDodge(){this.playTone({type:"sine",startFreq:280,endFreq:140,duration:.16,gainPeak:.12})}playPlayerHurt(){this.playTone({type:"sawtooth",startFreq:200,endFreq:75,duration:.26,gainPeak:.22})}playEnemyTelegraph(e=0,t=0){this.playTone({type:"triangle",startFreq:320,endFreq:540,duration:.22,gainPeak:.12/(1+t*.12),pan:e})}playTrapTurn(e,t){this.playTone({type:"triangle",startFreq:90,endFreq:160,duration:.22,gainPeak:.055/(1+t*.15),pan:e})}playPotion(){[420,540,680,860].forEach((e,t)=>{this.playTone({type:"sine",startFreq:e,endFreq:e*1.04,duration:.16,gainPeak:.14,delay:t*.06})})}playMechanismSolved(){[440,554.37,659.25,880].forEach((e,t)=>{this.playTone({type:"triangle",startFreq:e,endFreq:e,duration:.32,gainPeak:.16,delay:t*.08})})}playSealCollected(){[523.25,659.25,783.99,1046.5].forEach((e,t)=>{this.playTone({type:"triangle",startFreq:e,endFreq:e,duration:.45,gainPeak:.18,delay:t*.1})})}playUiClick(){this.playTone({type:"sine",startFreq:520,endFreq:620,duration:.05,gainPeak:.08})}updateMechanismResonance(e,t){if(!this.muted&&(this.ensureInitialized(),!!this.ctx))try{(!this.resonanceOsc||!this.resonanceGain)&&(this.resonanceOsc=this.ctx.createOscillator(),this.resonanceGain=this.ctx.createGain(),this.resonanceOsc.type="sine",this.resonanceGain.gain.setValueAtTime(1e-4,this.ctx.currentTime),this.resonanceOsc.connect(this.resonanceGain),this.resonanceGain.connect(this.ctx.destination),this.resonanceOsc.start());let i=this.ctx.currentTime,s=t?440:180+e*250,r=t?.09:.025+e*.04;this.resonanceOsc.frequency.setTargetAtTime(s,i,.05),this.resonanceGain.gain.setTargetAtTime(r,i,.05)}catch{}}stopMechanismResonance(){if(this.resonanceGain&&this.ctx)try{this.resonanceGain.gain.setTargetAtTime(1e-4,this.ctx.currentTime,.03)}catch{}if(this.resonanceOsc){let e=this.resonanceOsc;this.resonanceOsc=null,this.resonanceGain=null,setTimeout(()=>{try{e.stop(),e.disconnect()}catch{}},90)}}};function lu(n,e,t){let i=new Qe({color:7764853,roughness:.96,flatShading:!0}),s=new Qe({color:4016456,roughness:1}),r=new Qe({color:2112849,roughness:1,side:Dt}),a=new Qe({color:10325101,roughness:1}),o=new Lt({color:16765066}),l=new Lt({color:13855024}),c=[4871511,7558215,4084818,6380358].map(f=>new Qe({color:f,roughness:1})),d=941,h=()=>(d=d*16807%2147483647,(d-1)/2147483646),u=[],p=[];for(let f of Ci){let _=new et;n.add(_),p.push(_);let g=f.maxX-f.minX,m=f.maxZ-f.minZ,v=(f.maxX+f.minX)/2,w=(f.maxZ+f.minZ)/2,b=(S,P,A,R,I,z,L)=>Re(_,new ht(S,P,A),R,I,z,L),C=g>=8&&m>=8;if(f.isBridge){b(24,.8,m+3,s,v,10,w);for(let S of[-1,1]){b(2.5,18,m+4,s,v+S*10,1,w);let P=v+S*(g/2-.15);b(.34,.18,m+.4,s,P,.09,w);for(let A=0;A<6;A++){let R=f.minZ+A*2.4,I=Re(_,new ms(1+h(),4+h()*3,5),i,v+S*(6+h()*2),7.8,R);I.rotation.z=Math.PI,b(.28,.2,.28,s,P,.1,R);let z=Re(_,new _t(.11,.15,1.38,6),e.goldTrim,P,.86,R);z.castShadow=!1}b(.08,.08,m,e.goldTrim,P,1.54,w),b(.05,.05,m,s,P,.86,w)}}if(!f.isBridge){let S=[],P=[],A=[];for(let U=0;U<2;U++)for(let V=0;V<=16;V++){let H=V/16*Math.PI;S.push(v+Math.cos(H)*(g/2+.15),4.8+Math.sin(H)*2.4,U?f.maxZ:f.minZ),P.push(V/16,U)}for(let U=0;U<16;U++){let V=U,H=U+17;A.push(V,H,V+1,V+1,H,H+1)}let R=new It;R.setAttribute("position",new st(S,3)),R.setAttribute("uv",new st(P,2)),R.setIndex(A),R.computeVertexNormals();let I=e.stoneWall.clone();I.side=Dt,I.color.setHex(10134429),I.emissive.setHex(1449249),I.emissiveIntensity=1;let z=Re(_,R,I);z.castShadow=!1,z.receiveShadow=!1;let L=Math.max(2,Math.round(m/5.5));for(let U=1;U<L;U++){let V=f.minZ+m*U/L,H=Re(_,new Ht(g/2+.02,.13,5,14,Math.PI),s,v,4.8,V);H.scale.y=2.4/(g/2+.02),H.castShadow=!1,H.receiveShadow=!1}}let E=C?[f.minZ+1,w,f.maxZ-1]:[w];for(let S of E)if(!f.isBridge){for(let P of[-1,1]){let A=v+P*(g/2-.12),R=A+P*.5;if(Ci.some(z=>z.id!==f.id&&R>z.minX&&R<z.maxX&&S>z.minZ&&S<z.maxZ))continue;b(.6,.28,.8,i,A,.14,S);let I=Re(_,new _t(.21,.25,4.2,8),i,A,2.35,S);I.receiveShadow=!0,b(.65,.27,.8,i,A,4.48,S),b(.38,.18,.55,e.goldTrim,A,4.18,S),t.push({id:`art_col_${f.id}_${S}_${P}`,minX:A-.3,maxX:A+.3,minZ:S-.4,maxZ:S+.4,minY:0,maxY:4.7,blocksSight:!0})}for(let P=0;P<18;P++){let A=(P+.5)/18*Math.PI,R=Math.hypot((g/2-.12)*Math.sin(A),2.4*Math.cos(A))*Math.PI/18*1.015,I=b(R,.4,.48,P===8||P===9?e.goldTrim:i,v+Math.cos(A)*(g/2-.12),4.6+Math.sin(A)*2.4,S);I.rotation.z=Math.atan2(2.4*Math.cos(A),-(g/2-.12)*Math.sin(A))}}if(!C)continue;for(let S of[-1,1])b(.045,.015,m-.9,e.goldTrim,v+S*Math.min(2,g*.2),.014,w);let x=Math.min(g,m)*.25;for(let S of[x,x+.2]){let P=Re(_,new Dn(S,S+.045,64),e.goldTrim,v,.022,w);P.rotation.x=-Math.PI/2}for(let S=0;S<12;S++){let P=S/12*Math.PI*2,A=b(.08,.024,.34,e.goldTrim,v+Math.sin(P)*(x+.45),.025,w+Math.cos(P)*(x+.45));A.rotation.y=P}for(let S of[-1,1]){let P=v+S*(g/2-.8),A=f.maxZ-2.2;for(let R=0;R<3;R++)b(.9-R*.14,.16,1.4-R*.2,i,P,.08+R*.16,A);t.push({id:`shrine_${f.id}_${S}`,minX:P-.45,maxX:P+.45,minZ:A-.7,maxZ:A+.7,minY:0,maxY:.48,blocksSight:!1}),Re(_,new _t(.13,.25,1.1,6),e.arcaneMetal,P,1.05,A),Re(_,new _t(.36,.14,.25,8,1,!0),e.goldTrim,P,1.7,A),Re(_,new ki(.15,0),l,P,1.76,A);for(let R=0;R<3;R++){let I=Re(_,new ms(.07,.32-R*.05,5),o,P+(R-1)*.1,1.98,A);I.rotation.z=(R-1)*.2}if(u.push(new O(P,2.2,A)),f.floorType!=="abyss"){let R=b(.05,1.8,1,r,P+S*.35,3.35,w-1.5);b(.07,.045,1.02,e.goldTrim,R.position.x,2.5,w-1.5),b(.08,1,.05,e.goldTrim,R.position.x-S*.04,3.45,w-1.5),b(.09,.05,.5,e.goldTrim,R.position.x-S*.05,3.55,w-1.5),b(.12,.12,1.3,e.arcaneMetal,R.position.x,4.3,w-1.5)}}for(let S=0;S<18;S++){let P=S%2?1:-1,A=v+P*(g/2-.23-h()*.4),R=f.minZ+h()*m,I=b(.14+h()*.2,.08+h()*.12,.18+h()*.25,i,A,.08,R);I.rotation.y=h()*3}if(f.region==="ruins")for(let S of[-1,1])for(let P=0;P<5;P++){let A=Re(_,new _t(.02,.06,1.4,5),s,v+S*(g/2-.1),3.8-P*.65,f.minZ+2+P*.15);A.rotation.z=S*.15}if(f.region==="whispers"){for(let P of[-1,1])for(let A=0;A<Math.floor(m/2.5);A++){let R=v+P*(g/2-.15),I=f.minZ+1.1+A*2.5;for(let z=0;z<4;z++){b(.42,.1,2.1,e.woodShelf,R,.5+z*.85,I);for(let L=0;L<10;L++)b(.25,.4+h()*.25,.11,c[L%4],R-P*.2,.82+z*.85,I-.9+L*.18)}}for(let P of[0,Math.PI/2]){let A=Re(_,new Ht(1.7,.065,6,48),e.goldTrim,v,5.1,w);A.rotation.y=P}Re(_,new ki(.45,1),e.sealBlueGlow,v,5.1,w),b(.8,.9,.7,e.woodShelf,f.maxX-1.1,.45,f.minZ+3);let S=b(.8,.08,.55,a,f.maxX-1.1,.96,f.minZ+3);S.rotation.x=.25}if(f.region==="abyss"||f.region==="sanctum"){for(let S of[-1,1]){let P=v+S*(g/2-.8),A=f.minZ+2;for(let R=0;R<3;R++){let I=Re(_,new Ht(.65+R*.15,.07,6,24),e.goldTrim,P,1.5+R*.85,A);I.rotation.x=Math.PI/2}Re(_,new _t(.26,.4,3.6,7),s,P,1.8,A),Re(_,new _t(.06,.06,2.8,6),e.sealBlueGlow,P,2,A),t.push({id:`machine_${f.id}_${S}`,minX:P-.5,maxX:P+.5,minZ:A-.5,maxZ:A+.5,minY:0,maxY:3.6,blocksSight:!0})}if(f.id.includes("arena"))for(let S=0;S<3;S++){let P=Re(_,new Ht(2+S*.55,.1,6,48,Math.PI*1.75),S%2?e.goldTrim:i,v,4.6,f.minZ+.6);P.rotation.z=S*.7}}}for(let f of p){let _=new Map;f.updateMatrixWorld(!0);for(let g of[...f.children])if(g instanceof Ve){let m=g.material,v=m.uuid+g.castShadow,w=_.get(v)??{mat:m,geos:[],shadow:g.castShadow},b=g.geometry.clone().applyMatrix4(g.matrix);w.geos.push(b),_.set(v,w),f.remove(g),g.geometry.dispose()}for(let g of _.values()){let m=Ho(g.geos,!1);if(g.geos.forEach(v=>v.dispose()),m){let v=Re(f,m,g.mat);v.castShadow=g.shadow}}}return u}function Qo(n,e,t,i){let s=document.createElement("canvas");s.width=n,s.height=n;let r=s.getContext("2d");r.fillStyle=t,r.fillRect(0,0,n,n);let a=4,o=4,l=n/a,c=n/o,d=1337,h=()=>(d=d*16807%2147483647,(d-1)/2147483646);for(let p=0;p<a;p++){let f=p%2*(c*.5);for(let _=-1;_<=o;_++){let g=_*c+f,m=p*l,v=Math.floor(h()*18)-9;if(r.fillStyle=`rgba(${120+v}, ${125+v}, ${138+v}, 0.16)`,r.fillRect(g+2,m+2,c-4,l-4),r.strokeStyle=i,r.lineWidth=e?3:2,r.strokeRect(g,m,c,l),e){for(let w=0;w<14;w++){let b=g+4+h()*(c-8),C=m+4+h()*(l-8);r.fillStyle=h()>.5?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.16)",r.fillRect(b,C,2+h()*3,2)}h()>.55&&(r.beginPath(),r.moveTo(g+h()*c*.4,m+4),r.lineTo(g+c*.5,m+l*(.4+h()*.4)),r.strokeStyle="rgba(10, 14, 22, 0.4)",r.lineWidth=1.2,r.stroke())}}}let u=new Ni(s);return u.wrapS=$i,u.wrapT=$i,u.colorSpace=Pt,u}function Fx(n,e){let t=document.createElement("canvas");t.width=n,t.height=n;let i=t.getContext("2d");i.fillStyle="#182438",i.fillRect(0,0,n,n),i.strokeStyle="#6e9e99",i.lineWidth=e?3:2,i.strokeRect(n*.08,n*.08,n*.84,n*.84),i.beginPath(),i.arc(n*.5,n*.5,n*.28,0,Math.PI*2),i.stroke(),e&&(i.strokeStyle="rgba(212, 175, 55, 0.65)",i.lineWidth=2,i.beginPath(),i.moveTo(n*.2,n*.5),i.lineTo(n*.8,n*.5),i.moveTo(n*.5,n*.2),i.lineTo(n*.5,n*.8),i.stroke());let s=new Ni(t);return s.wrapS=$i,s.wrapT=$i,s.colorSpace=Pt,s}function zc(n){let e=n==="detailed"?512:256,t=n==="detailed",i=Qo(e,t,"#626961","#454b45");i.repeat.set(2,1.5);let s=Qo(e,t,"#525b57","#39413c");s.repeat.set(6,6);let r=Qo(e,t,"#484d51","#30373c");r.repeat.set(6,6);let a=Qo(e,t,"#3d5257","#293c40");a.repeat.set(6,6);let o=Fx(e,t),l=new Qe({map:i,bumpMap:i,bumpScale:.035,roughness:.88,metalness:.08}),c=new Qe({map:s,bumpMap:s,bumpScale:.025,roughness:.92,metalness:.05}),d=new Qe({map:r,roughness:.85,metalness:.1}),h=new Qe({map:a,roughness:.75,metalness:.2}),u=new Qe({color:11836004,roughness:.52,metalness:.82}),p=new Qe({map:o,roughness:.35,metalness:.7,emissive:new $e(667213),emissiveIntensity:.55}),f=new Qe({color:3875862,roughness:.85,metalness:.05}),_=new Qe({color:3718648,emissive:165063,emissiveIntensity:1.35,roughness:.2,metalness:.4});return{stoneWall:l,stoneFloor:c,libraryFloor:d,abyssFloor:h,goldTrim:u,arcaneMetal:p,woodShelf:f,sealBlueGlow:_,dispose:()=>{[i,s,r,a,o].forEach(g=>g.dispose()),[l,c,d,h,u,p,f,_].forEach(g=>g.dispose())}}}function cu(n,e,t){let i=new et,s=new et;s.visible=!1,n.add(i),n.add(s);let r=zc(e),a=au(),o=[],l=[],c=new ys(10399670,3423800,1.5);i.add(c),l.push(c);let d=new Ui(16767397,2.2);d.position.set(18,36,12),d.castShadow=!0,d.shadow.mapSize.set(1024,1024),d.shadow.normalBias=.04,d.shadow.bias=-2e-4,d.shadow.camera.near=2,d.shadow.camera.far=120,d.shadow.camera.left=-18,d.shadow.camera.right=18,d.shadow.camera.top=18,d.shadow.camera.bottom=-18,i.add(d),i.add(d.target),l.push(d);let h=new Ui(8763592,.7);h.position.set(-10,8,-20),i.add(h);let u=new et;i.add(u);for(let q of Ci){let ie=q.maxX-q.minX,le=q.maxZ-q.minZ,T=new ht(ie,.4,le),y=q.floorType==="library"?r.libraryFloor:q.floorType==="abyss"?r.abyssFloor:r.stoneFloor,B=T.attributes.uv;for(let W=0;W<B.count;W++)B.setXY(W,B.getX(W)*ie/12,B.getY(W)*le/12);let ee=new Ve(T,y);ee.position.set((q.minX+q.maxX)*.5,-.2,(q.minZ+q.maxZ)*.5),ee.receiveShadow=!0,u.add(ee)}Ai(u,!1,36);let p=new Ve(new mi(40,32),new Lt({color:333870}));p.rotation.x=-Math.PI/2,p.position.set(0,-8,-101),i.add(p);let f=new et;i.add(f);let _=new et;i.add(_);let g=new Qe({color:7627598,roughness:1}),m=new Qe({color:4412759,roughness:1});for(let q of a){let ie=q.maxX-q.minX,le=q.maxY-q.minY,T=q.maxZ-q.minZ,y=q.id.startsWith("shelf_"),B=new Ve(new ht(ie,le,T),y?r.woodShelf:r.stoneWall);if(B.position.set((q.minX+q.maxX)*.5,(q.minY+q.maxY)*.5,(q.minZ+q.maxZ)*.5),B.castShadow=!0,B.receiveShadow=!0,f.add(B),y)for(let ee=.55;ee<3.4;ee+=.72)for(let W=q.minZ+.2;W<q.maxZ-.1;W+=.27){let oe=Re(_,new ht(ie+.05,.48,.16),W%1>.5?g:m,(q.minX+q.maxX)*.5,ee,W);oe.castShadow=!1}else{let ee=B.geometry.attributes.uv;for(let W=0;W<ee.count;W++){let ce=Math.floor(W/4)<2?T:ie;ee.setXY(W,ee.getX(W)*ce/3,ee.getY(W)*le/3)}}}Ai(f,!1,24),Ai(_,!1,24);let v=lu(i,r,a);for(let q=0;q<3;q++){let ie=new Nn(16759148,28,13,2);i.add(ie),o.push(ie)}let w=t,b=(q,ie,le)=>{let T=[...v].sort((y,B)=>Math.hypot(y.x-q,y.z-ie)-Math.hypot(B.x-q,B.z-ie));o.forEach((y,B)=>{let ee=T[B];ee&&y.position.copy(ee),y.intensity=(w==="low"?16:30)*(1+.055*Math.sin(le*6+B*2))}),d.position.set(q+8,18,ie+5),d.target.position.set(q,0,ie-4),d.target.updateMatrixWorld()},C=new Map;for(let q of gi){let ie=new et;ie.position.set(q.x,0,q.z);let le=q.kind==="barrier"?new Qe({color:3718648,emissive:165063,emissiveIntensity:1.4,transparent:!0,opacity:.62}):q.kind==="energy"||q.kind==="sealGate"||q.kind==="finalExit"?r.arcaneMetal:r.stoneWall,T=3.8,y=new Ve(new ht(q.width,T,q.depth),le);y.position.y=T*.5,y.castShadow=q.kind!=="barrier",y.receiveShadow=!0,ie.add(y);let B=new Ve(new ht(q.width+.4,.35,q.depth+.4),r.goldTrim);B.position.y=T+.15,ie.add(B);let ee=q.orientation==="z-axis",W=ee?q.depth:q.width,oe=new et;ee&&(oe.rotation.y=Math.PI/2),ie.add(oe);for(let Y of[-1,1]){let ae=Re(oe,new ht(.42,4.2,1.1),r.stoneWall,Y*(W/2+.05),2.1,0);Re(ae,new ht(.48,.22,1.17),r.goldTrim,0,1.6,0)}for(let Y=0;Y<9;Y++){let ae=(Y+.5)/9*Math.PI,N=Re(oe,new ht(W/9,.32,.85),r.stoneWall,Math.cos(ae)*W/2,3.85+Math.sin(ae)*.6,0);N.rotation.z=ae-Math.PI/2}let ce=new et;if(ee&&(ce.rotation.y=Math.PI/2),y.add(ce),q.kind==="barrier"){for(let Y of[-1,1])Re(oe,new ht(.24,3.7,.45),r.goldTrim,Y*(W/2-.22),1.85,0),Re(oe,new ji(.16,0),r.sealBlueGlow,Y*(W/2-.22),3.75,0);for(let Y of[-1.25,0,1.25]){let ae=Re(ce,new ht(W-.45,.065,.12),r.sealBlueGlow,0,Y,0);ae.castShadow=!1}}else{for(let Y of[-1,1]){for(let j of[-1,1])Re(ce,new ht(W-.2,.12,.05),r.goldTrim,0,j*1.35,Y*.48);for(let j of[-1,1]){Re(ce,new ht(W*.38,2.35,.1),r.woodShelf,j*W*.24,0,Y*.48);for(let K of[-1,1])Re(ce,new _t(.06,.06,.08,6),r.goldTrim,j*(W/2-.25),K*1.34,Y*.54).rotation.x=Math.PI/2}let ae=new et;ee&&(ae.rotation.y=Math.PI/2),y.add(ae);let N=Re(ae,new Ht(.43,.065,6,32),r.goldTrim,0,0,Y*.62);N.name="dialRotor",Re(N,new _t(.29,.29,.06,8),r.arcaneMetal).rotation.x=Math.PI/2;for(let j=0;j<3;j++)Re(N,new ht(.035,.2,.04),r.sealBlueGlow,(j-1)*.13,0,Y*.05)}Ai(ce,!0,100)}Ai(oe,!0,100),i.add(ie);let J={id:`door_${q.id}`,minX:q.x-q.width*.5,maxX:q.x+q.width*.5,minY:0,maxY:T,minZ:q.z-q.depth*.5,maxZ:q.z+q.depth*.5,blocksSight:q.kind!=="barrier"};C.set(q.id,{id:q.id,mesh:y,frameGroup:ie,closedY:T*.5,openY:-T*.65,collider:J})}let E=new Map;for(let q of rn){let ie=new et;ie.position.set(q.x,0,q.z);let le=new Ve(new ht(1.1,.55,.78),q.kind==="greedyGold"?r.goldTrim:r.woodShelf);le.position.y=.275,le.castShadow=!0,ie.add(le);let T=new et;T.position.set(0,.55,-.39);let y=new Ve(new ht(1.14,.26,.8),q.kind==="optimization"?r.arcaneMetal:r.goldTrim);y.position.set(0,.13,.39),T.add(y),ie.add(T);let B=new Ve(new ti(.22,10,10),new Lt({color:q.kind==="greedyGold"?16498468:3718648}));B.position.set(0,.65,0),ie.add(B),i.add(ie),E.set(q.id,{id:q.id,root:ie,lidPivot:T,glowMesh:B})}let x=new Map;for(let q of wn){let ie=new et;ie.position.set(q.x,0,q.z);let le=new Ve(new _t(.45,.6,1.15,8),r.arcaneMetal);le.position.y=.575,le.castShadow=!0,ie.add(le);let T=new Ve(new _t(.19,.23,.55,6),new Qe({color:3718648,emissive:165063,emissiveIntensity:1.4,roughness:.2}));T.position.y=1.75,ie.add(T);let y=new Ve(new Ht(.55,.04,8,24),r.goldTrim);y.position.y=1.75,ie.add(y);let B=new Ve(new Ht(.7,.03,8,24),r.sealBlueGlow);B.position.y=1.75,B.rotation.x=Math.PI/2,ie.add(B);for(let W=0;W<3;W++){let oe=W/3*Math.PI*2,ce=Re(ie,new _t(.055,.08,.85,6),r.goldTrim,Math.cos(oe)*.38,1.4,Math.sin(oe)*.38);ce.rotation.z=Math.cos(oe)*.2}let ee=Re(ie,new Ht(.68,.045,6,48),r.sealBlueGlow,0,.08,0);ee.rotation.x=-Math.PI/2,ee.name="holdRing",i.add(ie),x.set(q.id,{id:q.id,root:ie,crystal:T,ringA:y,ringB:B})}for(let q of Br){let ie=new et;ie.position.set(q.x,0,q.z);let le=new Ve(new ht(1.3,1.85,.3),r.stoneWall);le.position.y=.925,le.castShadow=!0,ie.add(le);let T=new Ve(new ht(.95,1.25,.34),r.arcaneMetal);T.position.y=1.05,ie.add(T),i.add(ie)}let S=new et;S.position.set(0,0,-136.2);let P=new Ve(new _t(.75,.95,1.2,8),r.goldTrim);P.position.y=.6,S.add(P);for(let q=0;q<3;q++){let ie=new Ve(new ji(.18,0),new Qe({color:3718648,emissive:165063,emissiveIntensity:.4}));ie.position.set((q-1)*.42,1.5,0),ie.name=`sealSlot_${q}`,S.add(ie)}i.add(S);let A=new et;A.position.set(-2,0,-171);let R=new Ve(new ht(.9,.9,.9),r.arcaneMetal);R.position.y=.45,A.add(R);let I=new et;I.position.set(0,.9,0);let z=new Ve(new _t(.06,.06,1.1,8),r.goldTrim);z.position.y=.55,I.add(z);let L=new Ve(new ti(.16,10,10),r.sealBlueGlow);L.position.y=1.1,I.add(L),I.rotation.x=-.45,A.add(I),i.add(A);let U=new Map;for(let q of Ls){let ie=kr[q.id],le=new et;le.position.set(ie.x,0,ie.z);let T=q.amplitude*2+q.halfExtents.x*2,y=Re(le,new ht(T,.05,.56),r.stoneWall,0,.025,0);y.castShadow=!1;for(let Y of[-.16,.16]){let ae=Re(le,new ht(T,.06,.07),r.arcaneMetal,0,.065,Y);ae.castShadow=!1}let B=new et,ee=new Qe({color:10134694,metalness:.84,roughness:.28,flatShading:!0});Re(B,new ht(q.halfExtents.x*1.35,.2,Math.max(.44,q.halfExtents.z*1.2)),r.goldTrim,0,.14,0),Re(B,new ht(.22,q.halfExtents.y*1.85,.22),r.arcaneMetal,0,q.halfExtents.y*.96,0),Re(B,new ji(.16,0),r.sealBlueGlow,0,q.halfExtents.y*1.92,0),Re(B,new _t(.18,.22,.1,8),r.goldTrim,0,.26,0);let W=q.halfExtents.x,oe=q.halfExtents.y*1.72;for(let Y of[-1,1]){let ae=new fi;ae.moveTo(0,.28),ae.lineTo(Y*W*1.02,.55),ae.lineTo(Y*W*.82,oe*.56),ae.lineTo(Y*W*1.05,oe*.94),ae.lineTo(0,oe*.78),ae.closePath();let N=Re(B,new Fi(ae,{depth:.08,bevelEnabled:!0,bevelSize:.025,bevelThickness:.025,bevelSegments:1}),ee,0,0,-.04);N.receiveShadow=!0}let ce=new Qe({color:14261074,emissive:8144152,emissiveIntensity:.9});for(let Y of[-1,1]){let ae=Y*(q.amplitude+q.halfExtents.x);Re(le,new _t(.2,.27,.34,8),r.goldTrim,ae,.17,0),Re(le,new _t(.15,.15,.08,8),ce,ae,.36,0)}let J=Re(le,new ht(T,.024,.065),new Lt({color:11433804}),0,.06,q.halfExtents.z+.24);J.name="motionCue",J.castShadow=!1,le.add(B),i.add(le),U.set(q.id,{id:q.id,root:le,bladeGroup:B})}let V=new Map;for(let q of Wn){let ie=q.archetypeId.includes("Boss"),le=new et;le.position.set(q.x,0,q.z);let T=ie?1.55:1,y=Rs(q.archetypeId);y.root.scale.setScalar(T),le.add(y.root),le.userData.rig=y;let B=y.chest,ee=new Ve(new ti(1.15*T,18,14),new Qe({color:3718648,emissive:165063,emissiveIntensity:1,transparent:!0,opacity:.12,wireframe:!1,depthWrite:!1}));ee.position.y=1*T,ee.visible=ie,le.add(ee);let W=new Ve(new Dn(.8*T,1.35*T,24),new Lt({color:16007006,side:Dt,transparent:!0,opacity:.75}));W.rotation.x=-Math.PI/2,W.position.y=.06,W.visible=!1,le.add(W);let oe=1.2*T,ce=new Ve(new mi(oe,.14),new Lt({color:988970,side:Dt}));ce.position.set(0,2.25*T,0),le.add(ce);let J=new Ve(new mi(oe-.06,.09),new Lt({color:15680580,side:Dt}));J.position.set(0,2.25*T,.01),le.add(J),i.add(le),V.set(q.id,{id:q.id,root:le,bodyMesh:B,shieldSphere:ee,telegraphRing:W,hpBarBg:ce,hpBarFill:J})}let H=Rs("hero"),re=H.root,Z=H.body,te=H.sword,se=H.cape,Me=new Nn(10864851,8,10,2);Me.position.set(.4,2.4,1.5),re.add(Me),i.add(re);let Ie=new et;Ie.position.set(-18,1.5,-51);let Q=new Ve(new ki(.13,1),new Qe({color:16777215,emissive:3718648,emissiveIntensity:1.8}));Ie.add(Q);let me=new Ve(new Ht(.45,.03,8,24),r.goldTrim);Ie.add(me);let Ce=new Ve(new Ht(.58,.025,8,24),r.sealBlueGlow);Ce.rotation.x=Math.PI/2,Ie.add(Ce);let Be=new Nn(8637371,0,6,2);Ie.add(Be),i.add(Ie);let ye=new et;ye.position.set(-20,0,-150);let Ue=Rs("student"),vt=Ue.body;ye.add(Ue.root);let Oe=new Ve(new ti(1.15,16,14),new Qe({color:11032055,emissive:8266446,emissiveIntensity:.9,transparent:!0,opacity:.13,wireframe:!1,depthWrite:!1}));Oe.position.y=1,ye.add(Oe),i.add(ye);let qe=document.createElement("canvas");qe.width=4,qe.height=256;let Je=qe.getContext("2d"),ne=Je.createLinearGradient(0,0,0,256);ne.addColorStop(0,"#1a2742"),ne.addColorStop(.34,"#75677e"),ne.addColorStop(.52,"#ffdfb0"),ne.addColorStop(.66,"#d89772"),ne.addColorStop(1,"#273142"),Je.fillStyle=ne,Je.fillRect(0,0,4,256);let pe=new Ni(qe);pe.colorSpace=Pt;let ue=new Lt({map:pe,color:16777215,side:Vt,fog:!1,depthWrite:!1}),Ae=new Ve(new ti(135,36,20),ue);s.add(Ae);let _e=new Lt({color:16764808,transparent:!0,opacity:.28,fog:!1,depthWrite:!1});Re(s,new fs(10.5,48),_e,6,8.5,-93).castShadow=!1;let Xe=Re(s,new fs(4.6,48),new Lt({color:16773577,fog:!1}),6,8.5,-92);Xe.castShadow=!1;let Ne=[2899016,4807528,7238530,10062733];for(let q=0;q<4;q++){let ie=new fi;ie.moveTo(-150,-28);for(let T=0;T<=44;T++){let y=-150+T*6.818181818181818,B=-1+Math.sin(T*.9+q*1.4)*4.4+Math.cos(T*.37+q*2.1)*4.2+(q===0?-1.5:q*1.1);ie.lineTo(y,B)}ie.lineTo(150,-28),ie.closePath();let le=Re(s,new dr(ie),new Qe({color:Ne[q],roughness:1,metalness:0}),0,1.5,-28-q*16);le.castShadow=!1,le.receiveShadow=!1}let nt=Re(s,new _t(10.2,13.5,6.5,10),new Qe({color:2831424,roughness:.95,flatShading:!0}),0,-3.4,0);nt.receiveShadow=!0;let rt=Re(s,new _t(9.1,9.5,.36,12),r.stoneFloor,0,-.18,0);rt.receiveShadow=!0;for(let[q,ie,le]of[[-5.6,.95,-3.3],[-3.6,.72,-3.8],[-1.9,.45,-4],[1.9,.45,-4],[3.6,.72,-3.8],[5.6,.95,-3.3]])Re(s,new ht(1.5,ie,.95),r.stoneWall,q,ie*.5-.02,le),Re(s,new ht(1.66,.11,1.08),r.goldTrim,q,ie+.03,le);let ot=new Ui(16765578,2.6);ot.position.set(6,13,-36),s.add(ot);let k=new Ui(11717094,1.05);k.position.set(4,7,12),s.add(k),s.add(new ys(16769466,2502978,.95));let St=new et;St.add(Rs("hero").root),St.position.set(-.95,0,-2.35),St.rotation.y=-.32,s.add(St);let Ye=new et;Ye.add(Rs("student").root),Ye.position.set(.95,0,-2.25),Ye.rotation.y=.32,s.add(Ye);let gt=q=>{let ie=zc(q),le=["stoneWall","stoneFloor","libraryFloor","abyssFloor","arcaneMetal"];for(let T of le){let y=r[T];y.map?.dispose(),y.map=ie[T].map,y.bumpMap&&(y.bumpMap=y.map),y.needsUpdate=!0}for(let T of le)ie[T].dispose()},ge=q=>{w=q,o.forEach((ie,le)=>{ie.visible=le<(q==="low"?1:q==="medium"?2:3)}),Me.intensity=q==="low"?10:8};return ge(t),{dungeonRoot:i,endingRoot:s,palette:r,wallColliders:a,doors:C,chests:E,pylons:x,traps:U,enemies:V,player:{root:re,bodyGroup:Z,swordPivot:te,capeMesh:se,torchLight:Me},axiom:{root:Ie,core:Q,ring1:me,ring2:Ce,light:Be},student:{root:ye,bodyGroup:vt,stasisDome:Oe},sealPedestalMesh:S,exitLeverHandle:I,ambientLights:l,effectLights:o,endingSunLight:ot,endingSkyMat:ue,endingStudentGroup:Ye,endingProtagonistGroup:St,updateAtmosphere:b,applyTextureQuality:gt,applyEffectsQuality:ge,dispose:()=>{r.dispose()}}}var jo=class{constructor(){D(this,"swordPhase","idle");D(this,"phaseTimer",0);D(this,"cooldownTimer",0);D(this,"hitTargetsThisSwing",new Set);D(this,"dodgeTimer",0);D(this,"dodgeInvulnTimer",0);D(this,"dodgeCooldownTimer",0);D(this,"dodgeDirX",0);D(this,"dodgeDirZ",-1);D(this,"playerHitInvulnTimer",0)}reset(){this.swordPhase="idle",this.phaseTimer=0,this.cooldownTimer=0,this.hitTargetsThisSwing.clear(),this.dodgeTimer=0,this.dodgeInvulnTimer=0,this.dodgeCooldownTimer=0,this.playerHitInvulnTimer=0}isDodging(){return this.dodgeTimer>0}isPlayerInvulnerable(){return this.dodgeInvulnTimer>0||this.playerHitInvulnTimer>0}canStartAttack(){return this.swordPhase==="idle"&&this.cooldownTimer<=0&&this.dodgeTimer<=0}tryStartAttack(){return this.canStartAttack()?(this.swordPhase="windup",this.phaseTimer=ci.swordWindupSec,this.hitTargetsThisSwing.clear(),!0):!1}tryStartDodge(e,t){if(this.dodgeTimer>0||this.dodgeCooldownTimer>0)return!1;let i=Math.hypot(e,t);return i>1e-4&&(this.dodgeDirX=e/i,this.dodgeDirZ=t/i),this.dodgeTimer=it.dodgeDuration,this.dodgeInvulnTimer=it.dodgeInvulnerableWindow,this.dodgeCooldownTimer=it.dodgeCooldown,this.swordPhase="idle",this.phaseTimer=0,this.hitTargetsThisSwing.clear(),!0}step(e,t,i,s){let r=[];if(this.dodgeTimer>0&&(this.dodgeTimer=Math.max(0,this.dodgeTimer-e)),this.dodgeInvulnTimer>0&&(this.dodgeInvulnTimer=Math.max(0,this.dodgeInvulnTimer-e)),this.dodgeCooldownTimer>0&&(this.dodgeCooldownTimer=Math.max(0,this.dodgeCooldownTimer-e)),this.playerHitInvulnTimer>0&&(this.playerHitInvulnTimer=Math.max(0,this.playerHitInvulnTimer-e)),this.cooldownTimer>0&&this.swordPhase==="idle"&&(this.cooldownTimer=Math.max(0,this.cooldownTimer-e)),this.swordPhase!=="idle"){this.phaseTimer-=e;let a=this.swordPhase==="active";for(;this.swordPhase!=="idle"&&this.phaseTimer<=0;)this.swordPhase==="windup"?(this.swordPhase="active",this.phaseTimer+=ci.swordActiveSec,a=!0):this.swordPhase==="active"?(this.swordPhase="recovery",this.phaseTimer+=ci.swordRecoverySec):this.swordPhase==="recovery"&&(this.swordPhase="idle",this.phaseTimer=0,this.cooldownTimer=ci.swordCooldownSec,this.hitTargetsThisSwing.clear());if(a&&this.swordPhase!=="idle"){let o=-Math.sin(t.yaw),l=-Math.cos(t.yaw);for(let c of i){if(!c.alive||this.hitTargetsThisSwing.has(c.id))continue;let d=c.x-t.x,h=c.z-t.z,u=Math.hypot(d,h);if(u>ci.swordReach+c.radius)continue;if(u>.05){let f=d/u*o+h/u*l;if(Math.acos(Math.max(-1,Math.min(1,f)))>ci.swordHalfAngleRad)continue}Vn(t.x,1.1,t.z,c.x,1.1,c.z,s)&&(this.hitTargetsThisSwing.add(c.id),r.push({targetId:c.id,blockedByShield:c.shielded}))}}}return r}getSwordSwingAngle(){return this.swordPhase==="windup"?-.75*(1-this.phaseTimer/ci.swordWindupSec):this.swordPhase==="active"?-.75+2.35*(1-this.phaseTimer/ci.swordActiveSec):this.swordPhase==="recovery"?1.6*(1-(1-this.phaseTimer/ci.swordRecoverySec)):0}};function du(n,e){let t=tu[n.archetypeId];return{id:n.id,spec:n,config:t,x:n.x,z:n.z,vx:0,vz:0,yaw:0,hp:e?0:t.maxHp,maxHp:t.maxHp,state:e?"dead":"patrol",stateTimer:0,attackCooldownTimer:0,patrolForward:!0,shielded:!e&&!!n.shieldPylonId,vulnerabilityTimer:0,activeShieldPylonId:n.shieldPylonId,phase2Activated:!1,hitPlayerThisAttack:!1,hitFlashTimer:0}}function hu(n,e){if(n.state==="dead"||n.shielded)return{hit:!1,defeated:!1,phase2Triggered:!1};if(n.hp=Math.max(0,n.hp-e),n.hitFlashTimer=.14,n.hp<=0)return n.state="dead",n.vx=0,n.vz=0,{hit:!0,defeated:!0,phase2Triggered:!1};n.config.isBoss||(n.state="stagger",n.stateTimer=n.config.hitStunSec,n.vx*=.35,n.vz*=.35);let t=!1;return n.spec.secondPhasePylonId&&!n.phase2Activated&&n.hp<=n.maxHp*.55&&(n.phase2Activated=!0,n.shielded=!0,n.vulnerabilityTimer=0,n.activeShieldPylonId=n.spec.secondPhasePylonId,t=!0),{hit:!0,defeated:!1,phase2Triggered:t}}function uu(n){n.state!=="dead"&&(n.shielded=!1,n.vulnerabilityTimer=n.config.vulnerabilityDurationSec??10)}function pu(n,e,t,i){let s={telegraphedIds:[],playerDamageEvents:[],shieldReactivatedPylonIds:[]};for(let r of n){if(r.state==="dead")continue;r.hitFlashTimer>0&&(r.hitFlashTimer=Math.max(0,r.hitFlashTimer-i)),r.attackCooldownTimer>0&&(r.attackCooldownTimer=Math.max(0,r.attackCooldownTimer-i)),r.config.isBoss&&!r.shielded&&r.activeShieldPylonId&&(r.vulnerabilityTimer-=i,r.vulnerabilityTimer<=0&&(r.vulnerabilityTimer=0,r.shielded=!0,s.shieldReactivatedPylonIds.push(r.activeShieldPylonId)));let a=e.x-r.x,o=e.z-r.z,l=Math.hypot(a,o),c=l<=r.config.detectRange&&Vn(r.x,1.1,r.z,e.x,1.1,e.z,t),d={x:0,z:0};if(r.state==="stagger")r.stateTimer-=i,r.stateTimer<=0&&(r.state=c?"chase":"patrol");else if(r.state==="windup"){if(r.stateTimer-=i,l>.05&&(r.yaw=Math.atan2(-a,-o)),r.stateTimer<=0){r.state="attack",r.stateTimer=r.config.activeSec,r.hitPlayerThisAttack=!1;let g=r.phase2Activated?1.25:1,m=-Math.sin(r.yaw),v=-Math.cos(r.yaw);d={x:m*r.config.lungeSpeed*g,z:v*r.config.lungeSpeed*g}}}else if(r.state==="attack"){r.stateTimer-=i;let g=-Math.sin(r.yaw),m=-Math.cos(r.yaw),v=r.phase2Activated?1.25:1;d={x:g*r.config.lungeSpeed*v,z:m*r.config.lungeSpeed*v};let w=l<.01||(a*g+o*m)/l>-.1;!r.hitPlayerThisAttack&&w&&l<=r.config.radius+e.radius+.95&&Vn(r.x,1.1,r.z,e.x,1.1,e.z,t)&&(r.hitPlayerThisAttack=!0,s.playerDamageEvents.push({enemyId:r.id,damage:r.config.damage})),r.stateTimer<=0&&(r.state="recover",r.stateTimer=r.config.recoverSec,r.attackCooldownTimer=r.config.attackCooldownSec)}else if(r.state==="recover")r.stateTimer-=i,r.stateTimer<=0&&(r.state=c?"chase":"patrol");else if(r.state==="chase"){if(!c&&l>r.config.detectRange*1.35)r.state="patrol";else if(l<=r.config.attackRange&&r.attackCooldownTimer<=0)r.state="windup",r.stateTimer=r.config.windupSec,s.telegraphedIds.push(r.id);else if(l>.1){let g=r.phase2Activated?1.22:1,m=a/l,v=o/l;d={x:m*r.config.chaseSpeed*g,z:v*r.config.chaseSpeed*g},r.yaw=Math.atan2(-m,-v)}}else if(c)r.state="chase";else{let g=r.spec.x+(r.patrolForward?r.spec.patrolOffset.x:-r.spec.patrolOffset.x),m=r.spec.z+(r.patrolForward?r.spec.patrolOffset.z:-r.spec.patrolOffset.z),v=g-r.x,w=m-r.z,b=Math.hypot(v,w);b<.35?r.patrolForward=!r.patrolForward:(d={x:v/b*r.config.patrolSpeed,z:w/b*r.config.patrolSpeed},r.yaw=Math.atan2(-v/b,-w/b))}let h=r.phase2Activated?r.config.tau*.8:r.config.tau,u=iu({x:r.vx,z:r.vz},d,h,r.config.maxAccel,i);r.vx=u.velocity.x,r.vz=u.velocity.z;let p=r.x+r.vx*i,f=r.z+r.vz*i,_=Xo(p,f,r.config.radius,t,0,r.config.height);_.collided&&(r.vx*=.4,r.vz*=.4),r.x=_.x,r.z=_.z}return s}function Hc(){return{axiomX:-18,axiomY:1.5,axiomZ:-51,studentX:-20,studentZ:-150,studentYaw:0,hoverTime:0,warnedTrapZones:new Set}}function fu(n,e){n.hoverTime+=e.dt;let t=null;if(e.axiomSacrificed){let s=1.65+Math.sin(n.hoverTime*2.5)*.1,r=-171;n.axiomX+=(-2-n.axiomX)*Math.min(1,e.dt*4),n.axiomY+=(s-n.axiomY)*Math.min(1,e.dt*4),n.axiomZ+=(r-n.axiomZ)*Math.min(1,e.dt*4)}else if(e.axiomRescued){let i=-Math.cos(e.playerYaw),s=Math.sin(e.playerYaw),r=Math.sin(e.playerYaw),a=Math.cos(e.playerYaw),o=e.playerX+i*1.1+r*.65,l=e.playerZ+s*1.1+a*.65,c=1.85+Math.sin(n.hoverTime*2.8)*.16,d=Math.min(1,e.dt*5.2);n.axiomX+=(o-n.axiomX)*d,n.axiomY+=(c-n.axiomY)*d,n.axiomZ+=(l-n.axiomZ)*d,e.playerZ<-42&&e.playerZ>-58&&!n.warnedTrapZones.has("whispers_traps")?(n.warnedTrapZones.add("whispers_traps"),t='Axiom: "The blades race through the center and slow at the walls. Watch a full sweep, then choose your moment!"'):e.playerZ<-94&&e.playerZ>-106&&!n.warnedTrapZones.has("abyss_bridge")?(n.warnedTrapZones.add("abyss_bridge"),t='Axiom: "That blue barrier surges until its current settles. Stabilize the pylon beside it!"'):e.playerZ<-112&&e.playerZ>-126&&!n.warnedTrapZones.has("keeper_shield")&&(n.warnedTrapZones.add("keeper_shield"),t=`Axiom: "The Warden's shield runs on two crystals. Align both until their light is steady so we can break its guard!"`)}else n.axiomX=-18,n.axiomZ=-51,n.axiomY=1.65+Math.sin(n.hoverTime*2.2)*.14;if(e.studentRescued){let i=Math.cos(e.playerYaw),s=-Math.sin(e.playerYaw),r=Math.sin(e.playerYaw),a=Math.cos(e.playerYaw),o=e.playerX+i*1.1+r*1.5,l=e.playerZ+s*1.1+a*1.5,c=o-n.studentX,d=l-n.studentZ,h=Math.hypot(c,d);if(h>.25){let u=Math.min(h,e.dt*4.8);n.studentX+=c/h*u,n.studentZ+=d/h*u,n.studentYaw=Math.atan2(-c,-d)}}return{dangerHint:t}}var el=class{constructor(e,t,i){D(this,"root");D(this,"titleEl");D(this,"subtitleEl");D(this,"body1D");D(this,"body2D");D(this,"controlHintEl");D(this,"slider1D");D(this,"needle1D");D(this,"energyBar1D");D(this,"dwellBar1D");D(this,"status1DEl");D(this,"curvature1DEl");D(this,"pad2D");D(this,"puck2D");D(this,"crystalXBar");D(this,"crystalYBar");D(this,"crystalXHint");D(this,"crystalYHint");D(this,"gradMagBar");D(this,"dwellBar2D");D(this,"status2DEl");D(this,"mathPanel");D(this,"mathBody");D(this,"mathOpen",!1);D(this,"active",null);D(this,"dragging2D",!1);D(this,"inputManager");D(this,"sound");D(this,"onCloseCallback",null);this.inputManager=t,this.sound=i,this.root=document.createElement("div"),this.root.id="mechanismOverlay",this.root.className="modal-overlay hidden",this.root.innerHTML=`
      <div class="modal-card mechanism-card" role="dialog" aria-modal="true" aria-labelledby="mechTitle">
        <div class="modal-header">
          <div>
            <h2 id="mechTitle">Arcane Stabilizer</h2>
            <div id="mechSubtitle" class="modal-subtitle">Steady the current. Let the old lock settle.</div>
          </div>
          <div class="mech-header-actions">
            <button type="button" id="btnMechMathInfo" class="btn-secondary btn-sm">A quiet hint</button>
            <button type="button" id="btnMechClose" class="btn-secondary btn-sm">Exit</button>
          </div>
        </div>

        <div id="mechMathDrawer" class="mech-math-drawer hidden">
          <div id="mechMathText" class="mech-math-text"></div>
        </div>

        <div class="resonance-art" aria-hidden="true"><div class="resonance-orbit"></div><div class="resonance-orbit second"></div><div class="resonance-core">\u2727</div><svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="55" /></svg></div>
        <!-- 1D Energy Dial UI -->
        <div id="mechBody1D" class="mech-body hidden">
          <div class="mech-meter-group">
            <div class="mech-meter-label">
              <span>Restless current</span>
              <span id="mechStatus1D" class="mech-status-badge">Unstable</span>
            </div>
            <div class="mech-bar-track"><div id="mechEnergyBar1D" class="mech-bar-fill energy"></div></div>
          </div>

          <div class="mech-meter-group">
            <div class="mech-meter-label">
              <span>Follow the pull</span>
              <span id="mechCurvature1D" class="mech-curvature-badge">Listen closely</span>
            </div>
            <div class="slope-gauge">
              <span class="slope-end">\u25C4 Turn left</span>
              <div class="slope-track">
                <div class="slope-target-zone"></div>
                <div id="mechNeedle1D" class="slope-needle"></div>
              </div>
              <span class="slope-end">Turn right \u25BA</span>
            </div>
          </div>

          <div class="mech-dial-row">
            <label for="mechSlider1D">Turn the seal</label>
            <input id="mechSlider1D" type="range" min="0" max="1" step="0.005" value="0.2" class="mech-slider" />
          </div>

          <div class="mech-meter-group">
            <div class="mech-meter-label"><span>Hold the harmony</span></div>
            <div class="mech-bar-track"><div id="mechDwellBar1D" class="mech-bar-fill dwell"></div></div>
          </div>
        </div>

        <!-- 2D Optimization Crystal Pad UI -->
        <div id="mechBody2D" class="mech-body hidden">
          <div class="mech-2d-layout">
            <div class="mech-pad-wrap">
              <div id="mechPad2D" class="mech-pad-2d" aria-label="2D Crystal Alignment Pad">
                <div class="pad-grid-lines"></div>
                <div id="mechPuck2D" class="pad-puck"></div>
              </div>
            </div>

            <div class="mech-2d-meters">
              <div class="mech-meter-group">
                <div class="mech-meter-label">
                  <span>First crystal</span>
                  <span id="mechCrystalXHint" class="crystal-hint">\u25C4</span>
                </div>
                <div class="mech-bar-track"><div id="mechCrystalXBar" class="mech-bar-fill crystal"></div></div>
              </div>

              <div class="mech-meter-group">
                <div class="mech-meter-label">
                  <span>Second crystal</span>
                  <span id="mechCrystalYHint" class="crystal-hint">\u25B2</span>
                </div>
                <div class="mech-bar-track"><div id="mechCrystalYBar" class="mech-bar-fill crystal"></div></div>
              </div>

              <div class="mech-meter-group">
                <div class="mech-meter-label">
                  <span>Turbulence</span>
                  <span id="mechStatus2D" class="mech-status-badge">Seeking harmony</span>
                </div>
                <div class="mech-bar-track"><div id="mechGradMagBar" class="mech-bar-fill energy"></div></div>
              </div>

              <div class="mech-meter-group">
                <div class="mech-meter-label"><span>Hold the harmony</span></div>
                <div class="mech-bar-track"><div id="mechDwellBar2D" class="mech-bar-fill dwell"></div></div>
              </div>
            </div>
          </div>
        </div>

        <div id="mechControlHint" class="mech-control-hint"></div>
      </div>
    `,e.appendChild(this.root),this.titleEl=this.root.querySelector("#mechTitle"),this.subtitleEl=this.root.querySelector("#mechSubtitle"),this.body1D=this.root.querySelector("#mechBody1D"),this.body2D=this.root.querySelector("#mechBody2D"),this.controlHintEl=this.root.querySelector("#mechControlHint"),this.slider1D=this.root.querySelector("#mechSlider1D"),this.needle1D=this.root.querySelector("#mechNeedle1D"),this.energyBar1D=this.root.querySelector("#mechEnergyBar1D"),this.dwellBar1D=this.root.querySelector("#mechDwellBar1D"),this.status1DEl=this.root.querySelector("#mechStatus1D"),this.curvature1DEl=this.root.querySelector("#mechCurvature1D"),this.pad2D=this.root.querySelector("#mechPad2D"),this.puck2D=this.root.querySelector("#mechPuck2D"),this.crystalXBar=this.root.querySelector("#mechCrystalXBar"),this.crystalYBar=this.root.querySelector("#mechCrystalYBar"),this.crystalXHint=this.root.querySelector("#mechCrystalXHint"),this.crystalYHint=this.root.querySelector("#mechCrystalYHint"),this.gradMagBar=this.root.querySelector("#mechGradMagBar"),this.dwellBar2D=this.root.querySelector("#mechDwellBar2D"),this.status2DEl=this.root.querySelector("#mechStatus2D"),this.mathPanel=this.root.querySelector("#mechMathDrawer"),this.mathBody=this.root.querySelector("#mechMathText"),this.bindEvents()}isOpen(){return this.active!==null}open(e,t){this.active=e,this.onCloseCallback=t,this.mathOpen=!1,this.mathPanel.classList.add("hidden"),this.titleEl.textContent=e.title,this.subtitleEl.textContent=e.subtitle,e.kind==="1d"?(this.body1D.classList.remove("hidden"),this.body2D.classList.add("hidden"),this.slider1D.value=String(e.model.x),this.mathBody.innerHTML="The ring closes only while the current stays calm. Follow the pull, make smaller adjustments as the trembling fades, then hold still."):(this.body1D.classList.add("hidden"),this.body2D.classList.remove("hidden"),this.mathBody.innerHTML="Each crystal has its own current. Follow both arrows. When both crystals settle together, hold them steady until the ring closes."),this.refreshControlHint(),this.root.classList.remove("hidden"),this.stepSimulation(0)}close(){if(!this.active)return;this.active=null,this.dragging2D=!1,this.sound.stopMechanismResonance(),this.root.classList.add("hidden");let e=this.onCloseCallback;this.onCloseCallback=null,e?.()}refreshControlHint(){let e=this.inputManager.getActionPrimaryLabel("moveLeft"),t=this.inputManager.getActionPrimaryLabel("moveRight"),i=this.inputManager.getActionPrimaryLabel("moveForward"),s=this.inputManager.getActionPrimaryLabel("moveBackward"),r=this.inputManager.getActionPrimaryLabel("interact"),a=this.inputManager.getActionPrimaryLabel("pause");this.active?.kind==="2d"?this.controlHintEl.textContent=`Drag the crystal puck or use [${e}]/[${t}] (X) and [${i}]/[${s}] (Y). Press [${r}] or [${a}] to exit.`:this.controlHintEl.textContent=`Drag the dial or use [${e}]/[${t}] to tune energy. Press [${r}] or [${a}] to exit.`}stepSimulation(e){if(!this.active)return;if(this.inputManager.isPressed("pause")||this.inputManager.isPressed("interact")){this.close();return}let t=this.inputManager.getMovementAxes(),i=.36;if(this.active.kind==="1d"){Math.abs(t.x)>.05&&(this.active.model.adjustDial(t.x*i*e),this.slider1D.value=String(this.active.model.x));let s=this.active.model.step(e);this.sound.updateMechanismResonance(s.closeness,s.isMinimumConditionMet);let a=50+Math.max(-1,Math.min(1,s.firstDerivative/Math.max(1,this.active.model.k*1.4)))*45;if(this.needle1D.style.left=`${a}%`,this.needle1D.classList.toggle("aligned",s.isMinimumConditionMet),this.energyBar1D.style.width=`${Math.max(6,(1-s.closeness*.88)*100)}%`,this.energyBar1D.classList.toggle("aligned",s.isMinimumConditionMet),this.dwellBar1D.style.width=`${s.dwellProgress*100}%`,this.curvature1DEl.textContent=s.isMinimumConditionMet?"\u25C6 Steady":"\u25C7 Unsettled",this.setResonance(s.closeness,s.dwellProgress,s.isMinimumConditionMet),this.status1DEl.textContent=s.stabilized?"Stabilized!":s.isMinimumConditionMet?"Hold Steady...":Math.abs(s.firstDerivative)>.1?s.firstDerivative<0?"Turn right \u2192":"\u2190 Turn left":"Adjusting",this.status1DEl.className=`mech-status-badge ${s.isMinimumConditionMet?"ready":""}`,s.stabilized){let o=this.active.onSolved;this.sound.stopMechanismResonance(),this.sound.playMechanismSolved(),this.active=null,this.root.classList.add("hidden"),this.onCloseCallback?.(),this.onCloseCallback=null,o()}}else{(Math.abs(t.x)>.05||Math.abs(t.z)>.05)&&this.active.model.adjustCrystals(t.x*i*e,t.z*i*e);let s=this.active.model.step(e);if(this.sound.updateMechanismResonance(s.closeness,s.isMinimumConditionMet),this.puck2D.style.left=`${s.x*100}%`,this.puck2D.style.top=`${(1-s.y)*100}%`,this.puck2D.classList.toggle("aligned",s.isMinimumConditionMet),this.crystalXBar.style.width=`${s.xFeedback.closeness*100}%`,this.crystalYBar.style.width=`${s.yFeedback.closeness*100}%`,this.crystalXHint.textContent=s.xFeedback.directionHint===0?"\u2713 Aligned":s.xFeedback.directionHint>0?"Move Right \u25BA":"\u25C4 Move Left",this.crystalYHint.textContent=s.yFeedback.directionHint===0?"\u2713 Aligned":s.yFeedback.directionHint>0?"Move Up \u25B2":"\u25BC Move Down",this.gradMagBar.style.width=`${Math.max(6,(1-s.closeness*.88)*100)}%`,this.dwellBar2D.style.width=`${s.dwellProgress*100}%`,this.status2DEl.textContent=s.unlocked?"Stabilized!":s.isMinimumConditionMet?"Hold Steady...":"Follow each current",this.setResonance(s.closeness,s.dwellProgress,s.isMinimumConditionMet),this.status2DEl.className=`mech-status-badge ${s.isMinimumConditionMet?"ready":""}`,s.unlocked){let r=this.active.onSolved;this.sound.stopMechanismResonance(),this.sound.playMechanismSolved(),this.active=null,this.root.classList.add("hidden"),this.onCloseCallback?.(),this.onCloseCallback=null,r()}}}setResonance(e,t,i){this.root.style.setProperty("--unrest",String(1-e)),this.root.style.setProperty("--hold",String(t)),this.root.style.setProperty("--orbit-time",`${.6+e*5}s`),this.root.classList.toggle("steady",i)}bindEvents(){this.root.querySelector("#btnMechClose").addEventListener("click",()=>{this.sound.playUiClick(),this.close()}),this.root.querySelector("#btnMechMathInfo").addEventListener("click",()=>{this.sound.playUiClick(),this.mathOpen=!this.mathOpen,this.mathPanel.classList.toggle("hidden",!this.mathOpen)}),this.slider1D.addEventListener("input",()=>{this.active?.kind==="1d"&&this.active.model.setDial(parseFloat(this.slider1D.value))});let e=(i,s)=>{if(this.active?.kind!=="2d")return;let r=this.pad2D.getBoundingClientRect(),a=Math.max(0,Math.min(1,(i-r.left)/r.width)),o=Math.max(0,Math.min(1,1-(s-r.top)/r.height));this.active.model.setCrystals(a,o)};this.pad2D.addEventListener("pointerdown",i=>{i.preventDefault(),this.dragging2D=!0;try{this.pad2D.setPointerCapture(i.pointerId)}catch{}e(i.clientX,i.clientY)}),this.pad2D.addEventListener("pointermove",i=>{this.dragging2D&&(i.preventDefault(),e(i.clientX,i.clientY))});let t=()=>{this.dragging2D=!1};this.pad2D.addEventListener("pointerup",t),this.pad2D.addEventListener("pointercancel",t)}};var tl=class{constructor(e,t,i,s){D(this,"root");D(this,"inputManager");D(this,"activeSettings");D(this,"draftSettings");D(this,"callbacks");D(this,"currentTab","controls");D(this,"capturingTarget",null);D(this,"pendingConflict",null);D(this,"confirmingResetAll",!1);D(this,"validationErrorMsg",null);D(this,"infoNoticeMsg",null);this.inputManager=t,this.activeSettings=Oc(i)??i,this.draftSettings=structuredClone(this.activeSettings),this.callbacks=s,this.root=document.createElement("div"),this.root.id="settingsModal",this.root.className="modal-overlay hidden",this.root.innerHTML=`
      <div class="modal-card settings-card" role="dialog" aria-modal="true" aria-labelledby="settingsHeading">
        <div class="modal-header">
          <div>
            <h2 id="settingsHeading">Settings</h2>
            <div class="modal-subtitle">Configure Controls, Desktop, Mobile, and Graphics</div>
          </div>
          <button type="button" id="btnSettingsTopClose" class="btn-secondary btn-sm">\u2715</button>
        </div>

        <div class="settings-tabs" role="tablist">
          <button type="button" class="settings-tab active" data-tab="controls" role="tab">Controls \u2192 Keyboard &amp; Mouse</button>
          <button type="button" class="settings-tab" data-tab="desktop" role="tab">Desktop</button>
          <button type="button" class="settings-tab" data-tab="mobile" role="tab">Mobile</button>
          <button type="button" class="settings-tab" data-tab="graphics" role="tab">Graphics &amp; Audio</button>
        </div>

        <div id="settingsBannerArea"></div>
        <div id="settingsTabBody" class="settings-body"></div>

        <div class="settings-footer">
          <button type="button" id="btnResetAllControls" class="btn-danger">Reset All Controls</button>
          <div class="settings-footer-right">
            <button type="button" id="btnSettingsCancel" class="btn-secondary">Cancel</button>
            <button type="button" id="btnSettingsApply" class="btn-primary">Apply</button>
          </div>
        </div>
      </div>
    `,e.appendChild(this.root),this.bindStaticEvents()}isOpen(){return!this.root.classList.contains("hidden")}open(e,t="controls"){this.activeSettings=structuredClone(e),this.draftSettings=structuredClone(e),this.currentTab=t,this.capturingTarget=null,this.pendingConflict=null,this.confirmingResetAll=!1,this.validationErrorMsg=null,this.infoNoticeMsg=null,this.root.classList.remove("hidden"),this.render()}close(){this.capturingTarget&&(this.inputManager.stopRebindCapture(),this.capturingTarget=null),this.root.classList.add("hidden"),this.callbacks.onClose()}bindStaticEvents(){this.root.querySelector("#btnSettingsTopClose").addEventListener("click",()=>{this.close()}),this.root.querySelector("#btnSettingsCancel").addEventListener("click",()=>{this.draftSettings=structuredClone(this.activeSettings),this.close()}),this.root.querySelector("#btnSettingsApply").addEventListener("click",()=>{this.handleApply()}),this.root.querySelector("#btnResetAllControls").addEventListener("click",()=>{this.confirmingResetAll=!0,this.pendingConflict=null,this.validationErrorMsg=null,this.renderBanners()}),this.root.querySelectorAll(".settings-tab").forEach(e=>{e.addEventListener("click",()=>{this.capturingTarget&&(this.inputManager.stopRebindCapture(),this.capturingTarget=null,this.inputManager.setContext("menu"));let t=e.dataset.tab;this.currentTab=t,this.render()})})}handleApply(){this.capturingTarget&&(this.inputManager.stopRebindCapture(),this.capturingTarget=null,this.inputManager.setContext("menu"));let e=Dr(this.draftSettings.controls);if(!e.valid){let t=e.missingActions.map(i=>i.label).join(", ");this.validationErrorMsg=`Cannot apply: required action(s) have no binding assigned (${t}).`,this.currentTab="controls",this.render();return}this.validationErrorMsg=null,this.activeSettings=structuredClone(this.draftSettings),this.callbacks.onApplySettings(structuredClone(this.activeSettings)),this.root.classList.add("hidden"),this.callbacks.onClose()}render(){this.root.querySelectorAll(".settings-tab").forEach(t=>{t.classList.toggle("active",t.dataset.tab===this.currentTab)}),this.root.querySelector("#btnResetAllControls").classList.toggle("hidden",this.currentTab!=="controls"),this.renderBanners();let e=this.root.querySelector("#settingsTabBody");this.currentTab==="controls"?this.renderControlsTab(e):this.currentTab==="desktop"?this.renderDesktopTab(e):this.currentTab==="mobile"?this.renderMobileTab(e):this.renderGraphicsTab(e)}renderBanners(){let e=this.root.querySelector("#settingsBannerArea");if(e.innerHTML="",this.validationErrorMsg){let t=document.createElement("div");t.className="settings-banner error",t.textContent=this.validationErrorMsg,e.appendChild(t)}if(this.infoNoticeMsg){let t=document.createElement("div");t.className="settings-banner info",t.textContent=this.infoNoticeMsg,e.appendChild(t)}if(this.capturingTarget){let t=ni.find(s=>s.action===this.capturingTarget.action),i=document.createElement("div");i.className="capture-banner",i.innerHTML=`
        <div class="capture-text">
          <strong>${t.label} (${this.capturingTarget.slot==="primary"?"Primary":"Secondary"})</strong>:
          Press a key or mouse button. (Escape cancels)
        </div>
        <div id="captureControlBtns" class="capture-actions">
          <button type="button" id="btnCaptureClear" class="btn-secondary btn-sm">Clear</button>
          <button type="button" id="btnCaptureCancel" class="btn-secondary btn-sm">Cancel</button>
        </div>
      `,e.appendChild(i),i.querySelector("#btnCaptureCancel").addEventListener("click",()=>{this.inputManager.stopRebindCapture(),this.inputManager.setContext("menu"),this.capturingTarget=null,this.render()}),i.querySelector("#btnCaptureClear").addEventListener("click",()=>{let s=this.capturingTarget;this.inputManager.stopRebindCapture(),this.inputManager.setContext("menu"),this.capturingTarget=null,s&&(this.draftSettings.controls[s.action][s.slot]=null,this.validationErrorMsg=null),this.render()})}if(this.pendingConflict){let t=this.pendingConflict,i=ni.find(r=>r.action===t.targetAction),s=document.createElement("div");s.className="conflict-banner",s.innerHTML=`
        <div class="conflict-text">
          <strong>Key Conflict:</strong> "${Mn(t.code)}" is already bound to
          <strong>${t.conflictLabel}</strong> (${t.conflictSlot}). Replace it for <strong>${i.label}</strong>?
        </div>
        <div class="conflict-actions">
          <button type="button" id="btnConflictReplace" class="btn-primary btn-sm">Replace</button>
          <button type="button" id="btnConflictCancel" class="btn-secondary btn-sm">Cancel</button>
        </div>
      `,e.appendChild(s),s.querySelector("#btnConflictReplace").addEventListener("click",()=>{this.draftSettings.controls[t.conflictAction][t.conflictSlot]=null,this.draftSettings.controls[t.targetAction][t.targetSlot]=t.code,this.pendingConflict=null,this.validationErrorMsg=null,this.render()}),s.querySelector("#btnConflictCancel").addEventListener("click",()=>{this.pendingConflict=null,this.render()})}if(this.confirmingResetAll){let t=document.createElement("div");t.className="conflict-banner",t.innerHTML=`
        <div class="conflict-text">
          <strong>Confirm Reset:</strong> Reset all Keyboard &amp; Mouse bindings back to default values?
        </div>
        <div class="conflict-actions">
          <button type="button" id="btnConfirmResetYes" class="btn-danger btn-sm">Confirm Reset</button>
          <button type="button" id="btnConfirmResetNo" class="btn-secondary btn-sm">Cancel</button>
        </div>
      `,e.appendChild(t),t.querySelector("#btnConfirmResetYes").addEventListener("click",()=>{this.draftSettings.controls=sn(Ps),this.confirmingResetAll=!1,this.validationErrorMsg=null,this.infoNoticeMsg="All draft bindings reset to defaults. Click Apply to save.",this.render()}),t.querySelector("#btnConfirmResetNo").addEventListener("click",()=>{this.confirmingResetAll=!1,this.render()})}}renderControlsTab(e){let t=Dr(this.draftSettings.controls),i=new Set(t.missingActions.map(r=>r.action));e.innerHTML=`
      <div class="controls-header-row">
        <span>Action</span>
        <span>Primary</span>
        <span>Secondary</span>
        <span>Reset</span>
      </div>
      <div id="controlsListRows" class="controls-rows"></div>
    `;let s=e.querySelector("#controlsListRows");for(let r of ni){let a=this.draftSettings.controls[r.action],o=i.has(r.action),l=this.capturingTarget?.action===r.action&&this.capturingTarget.slot==="primary",c=this.capturingTarget?.action===r.action&&this.capturingTarget.slot==="secondary",d=document.createElement("div");d.className=`control-row ${o?"row-missing":""}`,d.dataset.action=r.action;let h=r.primaryLockedEscape?"Escape (Locked)":l?"Press a key or mouse button.":Mn(a.primary),u=c?"Press a key or mouse button.":Mn(a.secondary);d.innerHTML=`
        <div class="control-action-info">
          <div class="control-action-name">${r.label}${o?' <span class="missing-tag">(Required)</span>':""}</div>
          <div class="control-action-desc">${r.description}</div>
        </div>
        <div>
          <button type="button" class="bind-btn ${l?"capturing":""}" data-slot="primary" ${r.primaryLockedEscape?'disabled title="Escape always pauses/backs out"':""}>
            ${h}
          </button>
        </div>
        <div>
          <button type="button" class="bind-btn ${c?"capturing":""} ${a.secondary?"":"unbound"}" data-slot="secondary">
            ${u}
          </button>
        </div>
        <div>
          <button type="button" class="btn-secondary btn-sm reset-action-btn">Reset Action</button>
        </div>
      `;let p=d.querySelector('[data-slot="primary"]'),f=d.querySelector('[data-slot="secondary"]'),_=d.querySelector(".reset-action-btn");r.primaryLockedEscape||p.addEventListener("click",()=>this.beginCapture(r.action,"primary")),f.addEventListener("click",()=>this.beginCapture(r.action,"secondary")),_.addEventListener("click",()=>this.resetSingleAction(r.action)),s.appendChild(d)}}beginCapture(e,t){this.pendingConflict=null,this.confirmingResetAll=!1,this.infoNoticeMsg=null,this.capturingTarget={action:e,slot:t},this.render();let i=this.root.querySelector("#captureControlBtns");this.inputManager.startRebindCapture({onCaptured:s=>{this.capturingTarget=null,this.inputManager.setContext("menu"),this.handleCapturedInput(e,t,s)},onCancel:()=>{this.capturingTarget=null,this.inputManager.setContext("menu"),this.render()}},i)}handleCapturedInput(e,t,i){let s=t==="primary"?"secondary":"primary";this.draftSettings.controls[e][s]===i&&(this.draftSettings.controls[e][s]=null);let r=qo(this.draftSettings.controls,i,e,t);if(r){this.pendingConflict={targetAction:e,targetSlot:t,code:i,conflictAction:r.action,conflictLabel:r.label,conflictSlot:r.slot},this.render();return}this.draftSettings.controls[e][t]=i,this.validationErrorMsg=null,this.render()}resetSingleAction(e){this.pendingConflict=null,this.validationErrorMsg=null;let t=Ps[e];if(t.primary){let i=qo(this.draftSettings.controls,t.primary,e,"primary");i&&(this.draftSettings.controls[i.action][i.slot]=null)}if(t.secondary){let i=qo(this.draftSettings.controls,t.secondary,e,"secondary");i&&(this.draftSettings.controls[i.action][i.slot]=null)}this.draftSettings.controls[e]={...t},this.render()}renderDesktopTab(e){let t=this.draftSettings.desktop;e.innerHTML=`
      <div class="settings-grid">
        <label class="setting-row">
          <span>Horizontal Mouse Sensitivity <strong id="valHorizSens">${t.horizontalSensitivity.toFixed(1)}</strong></span>
          <input id="inpHorizSens" type="range" min="0.1" max="3.0" step="0.1" value="${t.horizontalSensitivity}">
        </label>
        <label class="setting-row">
          <span>Vertical Mouse Sensitivity <strong id="valVertSens">${t.verticalSensitivity.toFixed(1)}</strong></span>
          <input id="inpVertSens" type="range" min="0.1" max="3.0" step="0.1" value="${t.verticalSensitivity}">
        </label>
        <label class="setting-row">
          <span>Field of View <strong id="valFov">${t.fov}\xB0</strong></span>
          <input id="inpFov" type="range" min="60" max="90" step="1" value="${t.fov}">
        </label>
        <label class="setting-row checkbox-row">
          <span>Invert Y-Axis</span>
          <input id="inpDeskInvertY" type="checkbox" ${t.invertY?"checked":""}>
        </label>
        <label class="setting-row">
          <span>Sprint Behavior</span>
          <select id="selSprintMode">
            <option value="hold" ${t.sprintMode==="hold"?"selected":""}>Hold to Sprint</option>
            <option value="toggle" ${t.sprintMode==="toggle"?"selected":""}>Toggle Sprint</option>
          </select>
        </label>
        <label class="setting-row checkbox-row">
          <span>Hold-to-Repeat Primary Attack</span>
          <input id="inpHoldAttack" type="checkbox" ${t.holdToRepeatAttack?"checked":""}>
        </label>
        <label class="setting-row">
          <span>Interface Mode</span>
          <select id="selInterfaceMode">
            <option value="auto" ${this.draftSettings.interfaceMode==="auto"?"selected":""}>Auto (Hybrid Detect)</option>
            <option value="desktop" ${this.draftSettings.interfaceMode==="desktop"?"selected":""}>Keyboard &amp; Mouse</option>
            <option value="touch" ${this.draftSettings.interfaceMode==="touch"?"selected":""}>Touch Controls</option>
          </select>
        </label>
      </div>
    `;let i=e.querySelector("#inpHorizSens");i.addEventListener("input",()=>{t.horizontalSensitivity=parseFloat(i.value),e.querySelector("#valHorizSens").textContent=t.horizontalSensitivity.toFixed(1)});let s=e.querySelector("#inpVertSens");s.addEventListener("input",()=>{t.verticalSensitivity=parseFloat(s.value),e.querySelector("#valVertSens").textContent=t.verticalSensitivity.toFixed(1)});let r=e.querySelector("#inpFov");r.addEventListener("input",()=>{t.fov=parseInt(r.value,10),e.querySelector("#valFov").textContent=`${t.fov}\xB0`});let a=e.querySelector("#inpDeskInvertY");a.addEventListener("change",()=>{t.invertY=a.checked});let o=e.querySelector("#selSprintMode");o.addEventListener("change",()=>{t.sprintMode=o.value==="toggle"?"toggle":"hold"});let l=e.querySelector("#inpHoldAttack");l.addEventListener("change",()=>{t.holdToRepeatAttack=l.checked});let c=e.querySelector("#selInterfaceMode");c.addEventListener("change",()=>{this.draftSettings.interfaceMode=c.value})}renderMobileTab(e){let t=this.draftSettings.mobile;e.innerHTML=`
      <div class="settings-grid">
        <label class="setting-row">
          <span>Camera Sensitivity <strong id="valMobSens">${t.cameraSensitivity.toFixed(1)}</strong></span>
          <input id="inpMobSens" type="range" min="0.1" max="3.0" step="0.1" value="${t.cameraSensitivity}">
        </label>
        <label class="setting-row checkbox-row">
          <span>Invert Touch Camera Y</span>
          <input id="inpMobInvertY" type="checkbox" ${t.invertY?"checked":""}>
        </label>
        <label class="setting-row">
          <span>Joystick Sensitivity <strong id="valJoySens">${t.joystickSensitivity.toFixed(1)}</strong></span>
          <input id="inpJoySens" type="range" min="0.5" max="2.0" step="0.1" value="${t.joystickSensitivity}">
        </label>
        <label class="setting-row">
          <span>Joystick Size <strong id="valJoySize">${t.joystickSize}px</strong></span>
          <input id="inpJoySize" type="range" min="80" max="160" step="4" value="${t.joystickSize}">
        </label>
        <label class="setting-row">
          <span>HUD Scale <strong id="valHudScale">${t.hudScale.toFixed(2)}x</strong></span>
          <input id="inpHudScale" type="range" min="0.75" max="1.35" step="0.05" value="${t.hudScale}">
        </label>
        <label class="setting-row">
          <span>Button Opacity <strong id="valBtnOpacity">${Math.round(t.buttonOpacity*100)}%</strong></span>
          <input id="inpBtnOpacity" type="range" min="0.4" max="1.0" step="0.05" value="${t.buttonOpacity}">
        </label>
        <label class="setting-row">
          <span>Attack Button Size <strong id="valAtkSize">${t.attackButtonSize}px</strong></span>
          <input id="inpAtkSize" type="range" min="56" max="100" step="4" value="${t.attackButtonSize}">
        </label>
      </div>
    `;let i=(r,a,o,l)=>{let c=e.querySelector(r);c.addEventListener("input",()=>{let d=parseFloat(c.value);l(d),e.querySelector(a).textContent=o(d)})};i("#inpMobSens","#valMobSens",r=>r.toFixed(1),r=>t.cameraSensitivity=r),i("#inpJoySens","#valJoySens",r=>r.toFixed(1),r=>t.joystickSensitivity=r),i("#inpJoySize","#valJoySize",r=>`${r}px`,r=>t.joystickSize=r),i("#inpHudScale","#valHudScale",r=>`${r.toFixed(2)}x`,r=>t.hudScale=r),i("#inpBtnOpacity","#valBtnOpacity",r=>`${Math.round(r*100)}%`,r=>t.buttonOpacity=r),i("#inpAtkSize","#valAtkSize",r=>`${r}px`,r=>t.attackButtonSize=r);let s=e.querySelector("#inpMobInvertY");s.addEventListener("change",()=>{t.invertY=s.checked})}renderGraphicsTab(e){let t=this.draftSettings.graphics,i=typeof document<"u"&&document.fullscreenEnabled;e.innerHTML=`
      <div class="settings-grid">
        <label class="setting-row">
          <span>Quality Preset</span>
          <select id="selGfxPreset">
            <option value="low" ${t.preset==="low"?"selected":""}>Low</option>
            <option value="medium" ${t.preset==="medium"?"selected":""}>Medium</option>
            <option value="high" ${t.preset==="high"?"selected":""}>High</option>
            <option value="custom" ${t.preset==="custom"?"selected":""}>Custom</option>
          </select>
        </label>
        <label class="setting-row">
          <span>Shadow Quality</span>
          <select id="selShadowQ">
            <option value="off" ${t.shadowQuality==="off"?"selected":""}>Off</option>
            <option value="low" ${t.shadowQuality==="low"?"selected":""}>Low (512)</option>
            <option value="medium" ${t.shadowQuality==="medium"?"selected":""}>Medium (1024)</option>
            <option value="high" ${t.shadowQuality==="high"?"selected":""}>High (2048)</option>
          </select>
        </label>
        <label class="setting-row">
          <span>Effects Quality</span>
          <select id="selEffectsQ">
            <option value="low" ${t.effectsQuality==="low"?"selected":""}>Low</option>
            <option value="medium" ${t.effectsQuality==="medium"?"selected":""}>Medium</option>
            <option value="high" ${t.effectsQuality==="high"?"selected":""}>High</option>
          </select>
        </label>
        <label class="setting-row">
          <span>Render Scale</span>
          <select id="selRenderScale">
            <option value="0.5" ${t.renderScale===.5?"selected":""}>50%</option>
            <option value="0.75" ${t.renderScale===.75?"selected":""}>75%</option>
            <option value="1" ${t.renderScale===1?"selected":""}>100%</option>
          </select>
        </label>
        <label class="setting-row">
          <span>View Distance</span>
          <select id="selViewDist">
            <option value="near" ${t.viewDistance==="near"?"selected":""}>Near</option>
            <option value="medium" ${t.viewDistance==="medium"?"selected":""}>Medium</option>
            <option value="far" ${t.viewDistance==="far"?"selected":""}>Far</option>
          </select>
        </label>
        <label class="setting-row">
          <span>Procedural Texture Detail</span>
          <select id="selTextureQ">
            <option value="standard" ${t.textureQuality==="standard"?"selected":""}>Standard (256px)</option>
            <option value="detailed" ${t.textureQuality==="detailed"?"selected":""}>Detailed (512px)</option>
          </select>
        </label>
        <label class="setting-row checkbox-row">
          <span>Axiom\u2019s situational hints</span><input id="inpCompanionHints" type="checkbox" ${this.draftSettings.companionHints?"checked":""}>
        </label><label class="setting-row checkbox-row">
          <span>Reduced motion</span><input id="inpReducedMotion" type="checkbox" ${this.draftSettings.reducedMotion?"checked":""}>
        </label><label class="setting-row checkbox-row">
          <span>Mute Sound Effects</span>
          <input id="inpSoundMute" type="checkbox" ${this.draftSettings.soundMuted?"checked":""}>
        </label>
        <label class="setting-row checkbox-row">
          <span>Show FPS Performance Counter</span>
          <input id="inpShowFps" type="checkbox" ${this.draftSettings.showFpsCounter?"checked":""}>
        </label>
        ${i?'<div class="setting-row"><span>Display Mode</span><button type="button" id="btnToggleFullscreen" class="btn-secondary btn-sm">Toggle Fullscreen</button></div>':""}
      </div>
    `;let s=e.querySelector("#selGfxPreset");s.addEventListener("change",()=>{let g=s.value;g!=="custom"?(this.draftSettings.graphics={...Vo[g]},this.renderGraphicsTab(e)):this.draftSettings.graphics.preset="custom"});let r=()=>{this.draftSettings.graphics.preset="custom",s.value="custom"},a=e.querySelector("#selShadowQ");a.addEventListener("change",()=>{t.shadowQuality=a.value,r()});let o=e.querySelector("#selEffectsQ");o.addEventListener("change",()=>{t.effectsQuality=o.value,r()});let l=e.querySelector("#selRenderScale");l.addEventListener("change",()=>{t.renderScale=parseFloat(l.value),r()});let c=e.querySelector("#selViewDist");c.addEventListener("change",()=>{t.viewDistance=c.value,r()});let d=e.querySelector("#selTextureQ");d.addEventListener("change",()=>{t.textureQuality=d.value,r()});let h=e.querySelector("#inpCompanionHints");h.addEventListener("change",()=>{this.draftSettings.companionHints=h.checked});let u=e.querySelector("#inpReducedMotion");u.addEventListener("change",()=>{this.draftSettings.reducedMotion=u.checked});let p=e.querySelector("#inpSoundMute");p.addEventListener("change",()=>{this.draftSettings.soundMuted=p.checked});let f=e.querySelector("#inpShowFps");f.addEventListener("change",()=>{this.draftSettings.showFpsCounter=f.checked});let _=e.querySelector("#btnToggleFullscreen");_&&_.addEventListener("click",()=>{document.fullscreenElement?document.exitFullscreen().catch(()=>{}):document.documentElement.requestFullscreen().catch(()=>{})})}};var il=class{constructor(e,t,i){D(this,"inputManager");D(this,"hooks");D(this,"hudRoot");D(this,"hpFill");D(this,"hpText");D(this,"regionLabel");D(this,"objectiveLabel");D(this,"sealsHud");D(this,"keysCountEl");D(this,"potionsCountEl");D(this,"interactPromptEl");D(this,"desktopHintsBar");D(this,"lookStatusPill");D(this,"fpsPill");D(this,"toastEl");D(this,"minimapWrap");D(this,"minimapCanvas");D(this,"bossBarWrap");D(this,"bossBarName");D(this,"bossBarFill");D(this,"bossShieldStatus");D(this,"mainMenuModal");D(this,"pauseModal");D(this,"inventoryModal");D(this,"howToPlayModal");D(this,"creditsModal");D(this,"calculusGuideModal");D(this,"dialogueBox");D(this,"decisionModal");D(this,"gameOverModal");D(this,"endingModal");D(this,"overwriteConfirmBox");D(this,"toastTimer",null);D(this,"minimapVisible",!0);D(this,"showDesktopHints",!1);D(this,"lookGuidanceUntil",0);D(this,"lastSealKey","");this.inputManager=t,this.hooks=i,this.hudRoot=document.createElement("div"),this.hudRoot.id="gameHudLayer",this.hudRoot.className="hud-layer hidden",this.hudRoot.innerHTML=`
      <div class="hud-top-row">
        <div class="hud-left-panel">
          <div class="hp-panel">
            <div class="hp-meta">
              <span>VITALITY</span>
              <span id="hudHpText">100 / 100</span>
            </div>
            <div class="hp-track"><div id="hudHpFill" class="hp-fill"></div></div>
          </div>
          <div class="hud-badges-row">
            <span class="hud-pill" title="Health Potions"><span class="item-icon">\u2667</span> Potions <strong id="hudPotionsCount">0</strong></span>
            <span class="hud-pill" title="Dungeon Keys"><span class="item-icon">\u26BF</span> Keys <strong id="hudKeysCount">0</strong></span>
            <span id="hudFpsPill" class="hud-pill hidden">FPS: --</span>
          </div>
        </div>

        <div class="hud-center-panel">
          <div id="hudRegionName" class="region-title">The Forgotten Ruins</div>
          <div id="hudObjective" class="objective-text">Explore the ruins and seek the First Ancient Seal</div>
          <div id="hudSealsRow" class="seals-hud-row"></div>
        </div>

        <div id="hudMinimapWrap" class="minimap-panel">
          <span class="map-north">N</span><canvas id="minimapCanvas" width="144" height="144"></canvas>
          <div id="hudLookPill" class="look-status-pill">Click view to lock cursor (or drag)</div>
        </div>
      </div>

      <div id="hudBossBar" class="boss-bar-wrap hidden">
        <div class="boss-bar-top">
          <span id="hudBossName">Stone Sentinel</span>
          <span id="hudBossShieldStatus" class="boss-shield-tag">\u{1F6E1}\uFE0F Shielded</span>
        </div>
        <div class="boss-track"><div id="hudBossFill" class="boss-fill"></div></div>
      </div>

      <div id="hudInteractPrompt" class="interact-prompt hidden" role="status"></div>
      <div id="hudToast" class="hud-toast hidden" role="status"></div>

      <div class="hud-utilities"><button id="hudControlsToggle" aria-label="Toggle controls reference" aria-pressed="false">Controls</button><button id="hudInventoryButton" aria-label="Open inventory">Satchel</button><button id="hudPauseButton" aria-label="Pause expedition">\u2161</button></div>
      <div id="hudDesktopHints" class="desktop-hints-bar"></div>
    `,e.appendChild(this.hudRoot);let s=this.hudRoot.querySelector("#hudControlsToggle");s.addEventListener("click",()=>{this.showDesktopHints=!this.showDesktopHints,s.setAttribute("aria-pressed",String(this.showDesktopHints)),this.desktopHintsBar.classList.toggle("hidden",!this.showDesktopHints)}),this.hudRoot.querySelector("#hudPauseButton").addEventListener("click",()=>this.hooks.onPause()),this.hudRoot.querySelector("#hudInventoryButton").addEventListener("click",()=>this.hooks.onInventory()),this.hpFill=this.hudRoot.querySelector("#hudHpFill"),this.hpText=this.hudRoot.querySelector("#hudHpText"),this.regionLabel=this.hudRoot.querySelector("#hudRegionName"),this.objectiveLabel=this.hudRoot.querySelector("#hudObjective"),this.sealsHud=this.hudRoot.querySelector("#hudSealsRow"),this.keysCountEl=this.hudRoot.querySelector("#hudKeysCount"),this.potionsCountEl=this.hudRoot.querySelector("#hudPotionsCount"),this.interactPromptEl=this.hudRoot.querySelector("#hudInteractPrompt"),this.desktopHintsBar=this.hudRoot.querySelector("#hudDesktopHints"),this.lookStatusPill=this.hudRoot.querySelector("#hudLookPill"),this.fpsPill=this.hudRoot.querySelector("#hudFpsPill"),this.toastEl=this.hudRoot.querySelector("#hudToast"),this.minimapWrap=this.hudRoot.querySelector("#hudMinimapWrap"),this.minimapCanvas=this.hudRoot.querySelector("#minimapCanvas"),this.bossBarWrap=this.hudRoot.querySelector("#hudBossBar"),this.bossBarName=this.hudRoot.querySelector("#hudBossName"),this.bossBarFill=this.hudRoot.querySelector("#hudBossFill"),this.bossShieldStatus=this.hudRoot.querySelector("#hudBossShieldStatus"),this.mainMenuModal=document.createElement("div"),this.mainMenuModal.id="mainMenuModal",this.mainMenuModal.className="modal-overlay",this.mainMenuModal.innerHTML=`
      <div class="modal-card main-menu-card" role="dialog" aria-modal="true" aria-labelledby="gameMainTitle">
        <div class="edition-label"><span class="edition-mark">\u2727</span> A FORGOTTEN WORLD AWAITS</div>
        <h1 id="gameMainTitle" class="game-title"><small>THE THREE</small>ANCIENT<br>SEALS<span class="title-period">.</span></h1>
        <p class="game-subtitle">ECHOES OF THE FORGOTTEN DUNGEON</p>
        <div class="title-rule"><span>\u25C6</span></div>
        <p class="game-tagline">Some doors open to strength.<br>Others ask you to listen.</p>
        <div id="overwriteConfirmBox" class="conflict-banner hidden">
          <div class="conflict-text">Begin again? Your saved expedition will be replaced.</div>
          <div class="conflict-actions"><button type="button" id="btnConfirmOverwrite" class="btn-danger btn-sm">Start New Game</button><button type="button" id="btnCancelOverwrite" class="btn-secondary btn-sm">Cancel</button></div>
        </div>
        <div class="title-primary-actions">
          <button type="button" id="btnMainContinue" class="btn-primary">Continue <span>\u2192</span></button>
          <button type="button" id="btnMainNewGame" class="btn-secondary">New Game <span>\u2192</span></button>
        </div>
        <nav class="title-secondary-actions" aria-label="Main menu">
          <button type="button" id="btnMainSettings">Settings</button><i></i>
          <button type="button" id="btnMainHowToPlay">How to Play</button><i></i>
          <button type="button" id="btnMainCredits">Credits</button>
        </nav>
        <div id="mainMenuSaveNote" class="save-local-note">Progress is saved in this browser. It does not sync across devices.</div>
        <div class="title-scene-caption"><span>CHAPTER I</span><strong>The Forgotten Ruins</strong><small>Beyond the stone, something remembers.</small></div>
        <div class="title-footer"><span>THREE SEALS. ONE WAY HOME.</span><span>AN ORIGINAL FANTASY ADVENTURE</span></div>
      </div>
    `,e.appendChild(this.mainMenuModal),this.overwriteConfirmBox=this.mainMenuModal.querySelector("#overwriteConfirmBox"),this.pauseModal=document.createElement("div"),this.pauseModal.id="pauseModal",this.pauseModal.className="modal-overlay hidden",this.pauseModal.innerHTML=`
      <div class="modal-card pause-card" role="dialog" aria-modal="true" aria-labelledby="pauseTitle">
        <div class="modal-header">
          <div>
            <h2 id="pauseTitle">A moment of stillness</h2>
            <div class="modal-subtitle">Take a breath. The dungeon can wait.</div>
          </div>
        </div>
        <div class="pause-layout">
          <div class="menu-btn-stack">
            <button type="button" id="btnPauseResume" class="btn-primary">Resume</button>
            <button type="button" id="btnPauseSettings" class="btn-secondary">Settings</button>
            <button type="button" id="btnPauseInventory" class="btn-secondary">Inventory</button>
            <button type="button" id="btnPauseCalculusGuide" class="btn-secondary">Behind the Magic</button>
            <button type="button" id="btnPauseCheckpoint" class="btn-secondary">Restart from Checkpoint</button>
            <button type="button" id="btnPauseMainMenu" class="btn-danger">Return to Main Menu</button>
          </div>
          <details class="pause-controls-summary">
            <summary>Keyboard &amp; mouse controls</summary>
            <div id="pauseControlsList" class="controls-summary-list"></div>
          </details>
        </div>
      </div>
    `,e.appendChild(this.pauseModal),this.inventoryModal=document.createElement("div"),this.inventoryModal.id="inventoryModal",this.inventoryModal.className="modal-overlay hidden",this.inventoryModal.innerHTML=`
      <div class="modal-card inventory-card" role="dialog" aria-modal="true" aria-labelledby="invHeading">
        <div class="modal-header">
          <h2 id="invHeading">Adventurer's Satchel</h2>
          <button type="button" id="btnCloseInventory" class="btn-secondary btn-sm">Close</button>
        </div>
        <div class="inv-stats-row">
          <div class="inv-stat"><span>Health</span><strong id="invHpVal">100 / 100</strong></div>
          <div class="inv-stat"><span>Health Potions</span><strong id="invPotVal">0</strong></div>
          <div class="inv-stat"><span>Dungeon Keys</span><strong id="invKeyVal">0</strong></div>
          <div class="inv-stat"><span>Golden Relics</span><strong id="invGoldVal">None</strong></div>
        </div>
        <div class="inv-actions-row">
          <button type="button" id="btnInvUsePotion" class="btn-primary btn-sm">Drink Health Potion (+${it.potionHealAmount} HP)</button>
        </div>
        <h3 class="inv-section-heading">The Three Ancient Seals</h3>
        <div id="invSealsList" class="inv-seals-list"></div>
      </div>
    `,e.appendChild(this.inventoryModal),this.howToPlayModal=document.createElement("div"),this.howToPlayModal.id="howToPlayModal",this.howToPlayModal.className="modal-overlay hidden",this.howToPlayModal.innerHTML=`
      <div class="modal-card howto-card" role="dialog" aria-modal="true" aria-labelledby="howtoHeading">
        <div class="modal-header">
          <h2 id="howtoHeading">How to Play</h2>
          <button type="button" id="btnCloseHowTo" class="btn-secondary btn-sm">Close</button>
        </div>
        <div id="howToPlayDynamicBody" class="howto-body"></div>
      </div>
    `,e.appendChild(this.howToPlayModal),this.creditsModal=document.createElement("div"),this.creditsModal.id="creditsModal",this.creditsModal.className="modal-overlay hidden",this.creditsModal.innerHTML=`
      <div class="modal-card credits-card" role="dialog" aria-modal="true" aria-labelledby="creditsHeading">
        <div class="modal-header">
          <h2 id="creditsHeading">Credits &amp; Assets</h2>
          <button type="button" id="btnCloseCredits" class="btn-secondary btn-sm">Close</button>
        </div>
        <div class="credits-body">
          <p><strong>The Three Ancient Seals: Echoes of the Forgotten Dungeon</strong></p>
          <p>An atmospheric fantasy adventure built with Three.js, TypeScript, and Vite.</p>
          <hr class="modal-divider">
          <p><strong>Asset &amp; Technology Credits:</strong></p>
          <ul>
            <li><strong>3D Engine:</strong> Three.js (MIT License).</li>
            <li><strong>Meshes, Shaders &amp; Textures:</strong> Original procedural Three.js geometry and HTML5 Canvas stone/rune textures generated at runtime.</li>
            <li><strong>Audio:</strong> Original Web Audio API procedural sound effects and harmonic resonance synthesizer.</li>
            <li><strong>Typography:</strong> Cinzel by Natanael Gama (SIL Open Font License, bundled locally); system sans-serif body text.</li>
          </ul>
          <p class="save-local-note" style="margin-top: 12px;">
            Note: Game settings and checkpoints are stored in browser localStorage and do not synchronize across devices.
          </p>
          <button type="button" id="btnOpenGuideFromCredits" class="btn-primary btn-sm" style="margin-top: 10px;">
            Behind the Magic
          </button>
        </div>
      </div>
    `,e.appendChild(this.creditsModal),this.calculusGuideModal=document.createElement("div"),this.calculusGuideModal.id="calculusGuideModal",this.calculusGuideModal.className="modal-overlay hidden",this.calculusGuideModal.innerHTML=`
      <div class="modal-card guide-card" role="dialog" aria-modal="true" aria-labelledby="calcGuideHeading">
        <div class="modal-header">
          <h2 id="calcGuideHeading">Behind the Magic</h2>
          <button type="button" id="btnCloseCalcGuide" class="btn-secondary btn-sm">Close</button>
        </div>
        <div class="guide-body">
          <div class="guide-block"><h4>Listen to the current</h4><p>The seal trembles when its current is unsettled. Turn it in the direction of the pull. A quiet tone and a closing ring tell you when to hold still.</p></div>
          <div class="guide-block"><h4>Watch the crossing</h4><p>The ancient blades slow at each end of their tracks, then gather speed through the middle. Watch a full sweep from safety before choosing your moment.</p></div>
          <div class="guide-block"><h4>Find harmony</h4><p>Some wards bind two crystals together. Follow each crystal\u2019s pull until both currents become steady at the same time.</p></div>
          <div class="guide-block"><h4>Read the guardian</h4><p>Raised weapons and a marked floor warn of a coming lunge. Dodge as the strike begins, then use its recovery to get close. A shielded guardian must first be weakened at its nearby mechanism.</p></div>
        </div>
      </div>
    `,e.appendChild(this.calculusGuideModal),this.dialogueBox=document.createElement("div"),this.dialogueBox.id="dialogueBanner",this.dialogueBox.className="dialogue-banner hidden",this.dialogueBox.innerHTML=`
      <div class="dialogue-inner">
        <div class="dialogue-top">
          <span id="dlgSpeaker" class="dialogue-speaker">Axiom</span>
          <button type="button" id="btnSkipCinematic" class="btn-secondary btn-sm hidden">Skip Cinematic</button>
        </div>
        <div id="dlgText" class="dialogue-text"></div>
        <div id="dlgAdvanceHint" class="dialogue-advance-hint"></div>
      </div>
    `,e.appendChild(this.dialogueBox),this.decisionModal=document.createElement("div"),this.decisionModal.id="studentDecisionModal",this.decisionModal.className="modal-overlay hidden",this.decisionModal.innerHTML=`
      <div class="modal-card decision-card" role="dialog" aria-modal="true" aria-labelledby="decisionHeading">
        <h2 id="decisionHeading">The Trapped Student</h2>
        <p class="decision-intro">
          Behind the Archivist's chamber, you discover a student sealed inside an unstable crystal containment field,
          beside a gleaming hoard of ancient golden relics.
        </p>
        <div class="decision-choices">
          <button type="button" id="btnChoiceHelpStudent" class="choice-btn help">
            <h3>Help the Student</h3>
            <p>Engage the two-crystal stabilization mechanism to collapse the stasis lock and escape together.</p>
          </button>
          <button type="button" id="btnChoiceLeaveStudent" class="choice-btn leave">
            <h3>Leave the Student</h3>
            <p>Claim the golden relic hoard and depart immediately toward the exit alone.</p>
          </button>
        </div>
      </div>
    `,e.appendChild(this.decisionModal),this.gameOverModal=document.createElement("div"),this.gameOverModal.id="gameOverModal",this.gameOverModal.className="modal-overlay hidden",this.gameOverModal.innerHTML=`
      <div class="modal-card gameover-card" role="dialog" aria-modal="true" aria-labelledby="gameOverHeading">
        <h2 id="gameOverHeading">Fallen in the Ruins</h2>
        <p>Your vitality reached zero. Return to your last checkpoint or restart from the main menu.</p>
        <div class="menu-btn-stack">
          <button type="button" id="btnGameOverCheckpoint" class="btn-primary">Restart from Checkpoint</button>
          <button type="button" id="btnGameOverMenu" class="btn-secondary">Return to Main Menu</button>
        </div>
      </div>
    `,e.appendChild(this.gameOverModal),this.endingModal=document.createElement("div"),this.endingModal.id="endingOverlay",this.endingModal.className="ending-overlay hidden",this.endingModal.innerHTML=`
      <div class="ending-card">
        <h1 id="endingTitle" class="ending-title">FREEDOM SHARED</h1>
        <p id="endingQuote" class="ending-quote"></p>
        <p id="endingDesc" class="ending-desc"></p>
        <div class="ending-actions">
          <button type="button" id="btnEndingMenu" class="btn-primary">Return to Main Menu</button>
        </div>
      </div>
    `,e.appendChild(this.endingModal),this.bindEvents()}bindEvents(){let e=this.mainMenuModal.querySelector("#btnMainContinue"),t=this.mainMenuModal.querySelector("#btnMainNewGame");e.addEventListener("click",()=>this.hooks.onContinueGame()),t.addEventListener("click",()=>{e.hasAttribute("disabled")?this.hooks.onNewGame():this.overwriteConfirmBox.classList.remove("hidden")}),this.mainMenuModal.querySelector("#btnConfirmOverwrite").addEventListener("click",()=>{this.overwriteConfirmBox.classList.add("hidden"),this.hooks.onNewGame()}),this.mainMenuModal.querySelector("#btnCancelOverwrite").addEventListener("click",()=>{this.overwriteConfirmBox.classList.add("hidden")}),this.mainMenuModal.querySelector("#btnMainSettings").addEventListener("click",()=>{this.hooks.onOpenSettings("controls")}),this.mainMenuModal.querySelector("#btnMainHowToPlay").addEventListener("click",()=>{this.refreshDynamicInstructions(),this.howToPlayModal.classList.remove("hidden")}),this.mainMenuModal.querySelector("#btnMainCredits").addEventListener("click",()=>{this.creditsModal.classList.remove("hidden")}),this.pauseModal.querySelector("#btnPauseResume").addEventListener("click",()=>this.hooks.onResumeGame()),this.pauseModal.querySelector("#btnPauseSettings").addEventListener("click",()=>{this.hooks.onOpenSettings("controls")}),this.pauseModal.querySelector("#btnPauseInventory").addEventListener("click",()=>{this.openInventoryModal(null)}),this.pauseModal.querySelector("#btnPauseCalculusGuide").addEventListener("click",()=>{this.calculusGuideModal.classList.remove("hidden")}),this.pauseModal.querySelector("#btnPauseCheckpoint").addEventListener("click",()=>{this.hooks.onRestartCheckpoint()}),this.pauseModal.querySelector("#btnPauseMainMenu").addEventListener("click",()=>{this.hooks.onReturnMainMenu()}),this.inventoryModal.querySelector("#btnCloseInventory").addEventListener("click",()=>{this.inventoryModal.classList.add("hidden")}),this.inventoryModal.querySelector("#btnInvUsePotion").addEventListener("click",()=>{this.hooks.onUsePotionFromInventory()}),this.howToPlayModal.querySelector("#btnCloseHowTo").addEventListener("click",()=>{this.howToPlayModal.classList.add("hidden")}),this.creditsModal.querySelector("#btnCloseCredits").addEventListener("click",()=>{this.creditsModal.classList.add("hidden")}),this.creditsModal.querySelector("#btnOpenGuideFromCredits").addEventListener("click",()=>{this.creditsModal.classList.add("hidden"),this.calculusGuideModal.classList.remove("hidden")}),this.calculusGuideModal.querySelector("#btnCloseCalcGuide").addEventListener("click",()=>{this.calculusGuideModal.classList.add("hidden")}),this.decisionModal.querySelector("#btnChoiceHelpStudent").addEventListener("click",()=>{this.decisionModal.classList.add("hidden"),this.hooks.onStudentDecision("helped")}),this.decisionModal.querySelector("#btnChoiceLeaveStudent").addEventListener("click",()=>{this.decisionModal.classList.add("hidden"),this.hooks.onStudentDecision("left")}),this.dialogueBox.querySelector("#btnSkipCinematic").addEventListener("click",i=>{i.stopPropagation(),this.hooks.onSkipCinematic()}),this.dialogueBox.addEventListener("click",()=>{this.hooks.onAdvanceDialogue()}),this.gameOverModal.querySelector("#btnGameOverCheckpoint").addEventListener("click",()=>{this.gameOverModal.classList.add("hidden"),this.hooks.onRestartCheckpoint()}),this.gameOverModal.querySelector("#btnGameOverMenu").addEventListener("click",()=>{this.gameOverModal.classList.add("hidden"),this.hooks.onReturnMainMenu()}),this.endingModal.querySelector("#btnEndingMenu").addEventListener("click",()=>{this.endingModal.classList.add("hidden"),this.hooks.onReturnMainMenu()})}setMainMenuVisible(e,t){this.mainMenuModal.classList.toggle("hidden",!e),this.hudRoot.classList.toggle("hidden",e),this.overwriteConfirmBox.classList.add("hidden");let i=this.mainMenuModal.querySelector("#btnMainContinue");i.disabled=!t,this.mainMenuModal.classList.toggle("has-save",t),this.lookGuidanceUntil=performance.now()+6500,i.title=t?"Resume your saved expedition":"No valid saved game found"}setPauseVisible(e){this.pauseModal.classList.toggle("hidden",!e),e&&this.refreshDynamicInstructions()}isPauseSubmodalOpen(){return!this.inventoryModal.classList.contains("hidden")||!this.howToPlayModal.classList.contains("hidden")||!this.creditsModal.classList.contains("hidden")||!this.calculusGuideModal.classList.contains("hidden")}closeSubmodals(){this.inventoryModal.classList.add("hidden"),this.howToPlayModal.classList.add("hidden"),this.creditsModal.classList.add("hidden"),this.calculusGuideModal.classList.add("hidden")}openInventoryModal(e){if(e){this.inventoryModal.querySelector("#invHpVal").textContent=`${Math.ceil(e.player.hp)} / ${it.maxHp}`,this.inventoryModal.querySelector("#invPotVal").textContent=String(e.inventory.potions),this.inventoryModal.querySelector("#invKeyVal").textContent=String(e.inventory.keys),this.inventoryModal.querySelector("#invGoldVal").textContent=e.inventory.goldRelicLooted?"Ancient Hoard":"None";let t=this.inventoryModal.querySelector("#btnInvUsePotion");t.disabled=e.inventory.potions<=0||e.player.hp>=it.maxHp;let i=this.inventoryModal.querySelector("#invSealsList"),s=[{id:"seal_rates",glyph:"\u25C6",name:"First Ancient Seal",desc:"Recovered from the Stone Sentinel."},{id:"seal_motion",glyph:"\u25B2",name:"Second Ancient Seal",desc:"Recovered from the Arcane Scholar."},{id:"seal_extremum",glyph:"\u25CF",name:"Third Ancient Seal",desc:"Recovered from the Abyssal Warden."}];i.innerHTML=s.map(r=>{let a=e.inventory.seals.includes(r.id);return`
            <div class="inv-seal-item ${a?"owned":"missing"}">
              <span class="seal-glyph">${r.glyph}</span>
              <div>
                <div class="seal-title">${r.name} \u2014 ${a?"Collected":"Missing"}</div>
                <div class="seal-desc">${r.desc}</div>
              </div>
            </div>
          `}).join("")}this.inventoryModal.classList.remove("hidden")}isInventoryOpen(){return!this.inventoryModal.classList.contains("hidden")}toggleInventory(e){return this.isInventoryOpen()?(this.inventoryModal.classList.add("hidden"),!1):(this.openInventoryModal(e),!0)}toggleMinimap(){this.minimapVisible=!this.minimapVisible,this.minimapWrap.classList.toggle("hidden",!this.minimapVisible)}showDialogue(e,t,i=!1){this.dialogueBox.querySelector("#dlgSpeaker").textContent=e,this.dialogueBox.querySelector("#dlgText").textContent=t,this.dialogueBox.querySelector("#btnSkipCinematic").classList.toggle("hidden",!i);let s=this.inputManager.getActionPrimaryLabel("interact");this.dialogueBox.querySelector("#dlgAdvanceHint").textContent=`Press [${s}] to continue`,this.dialogueBox.classList.remove("hidden")}hideDialogue(){this.dialogueBox.classList.add("hidden")}showDecisionModal(){this.decisionModal.classList.remove("hidden")}showGameOver(){this.gameOverModal.classList.remove("hidden")}showEnding(e){this.hudRoot.classList.add("hidden"),this.dialogueBox.classList.add("hidden");let t=this.endingModal.querySelector("#endingTitle"),i=this.endingModal.querySelector("#endingQuote"),s=this.endingModal.querySelector("#endingDesc");e==="good"?(t.textContent="FREEDOM SHARED",t.className="ending-title good",i.textContent="\u201CKnowledge becomes meaningful when it is used to help others.\u201D",s.textContent="Beside the rescued student, you gaze across sunlit mountain peaks while the ruins seal behind you. Axiom remains at the binding lever forever, remembered in gratitude."):(t.textContent="THE PRICE OF GREED",t.className="ending-title bad",i.textContent="\u201CNot every correct answer leads to the right decision.\u201D",s.textContent="Alone beneath a dark crimson sky, you clutch the stolen gold relics. Behind you in the sealed depths, both Axiom and the trapped student remain imprisoned."),this.endingModal.classList.remove("hidden")}showToast(e){this.toastEl.textContent=e,this.toastEl.classList.remove("hidden"),this.toastTimer!==null&&window.clearTimeout(this.toastTimer),this.toastTimer=window.setTimeout(()=>{this.toastEl.classList.add("hidden")},3400)}refreshDynamicInstructions(){let e=`${this.inputManager.getActionPrimaryLabel("moveForward")}/${this.inputManager.getActionPrimaryLabel("moveLeft")}/${this.inputManager.getActionPrimaryLabel("moveBackward")}/${this.inputManager.getActionPrimaryLabel("moveRight")}`,t=this.inputManager.getActionPrimaryLabel("attack"),i=this.inputManager.getActionPrimaryLabel("dodge"),s=this.inputManager.getActionPrimaryLabel("sprint"),r=this.inputManager.getActionPrimaryLabel("interact"),a=this.inputManager.getActionPrimaryLabel("usePotion"),o=this.inputManager.getActionPrimaryLabel("inventory"),l=this.inputManager.getActionPrimaryLabel("map"),c=this.inputManager.getActionAllLabels("pause");this.desktopHintsBar.innerHTML=`
      <span><strong>[${t}]</strong> Attack</span>
      <span><strong>[${i}]</strong> Dodge</span>
      <span><strong>[${s}]</strong> Sprint</span>
      <span><strong>[${r}]</strong> Interact</span>
      <span><strong>[${a}]</strong> Potion</span>
      <span><strong>[${o}]</strong> Inventory</span>
      <span><strong>[${l}]</strong> Map</span>
      <span><strong>[${c}]</strong> Pause</span>
    `;let d=this.pauseModal.querySelector("#pauseControlsList");d.innerHTML=`
      <div><span>Move:</span> <strong>${e}</strong></div>
      <div><span>Primary Attack:</span> <strong>${this.inputManager.getActionAllLabels("attack")}</strong></div>
      <div><span>Dodge / Roll:</span> <strong>${this.inputManager.getActionAllLabels("dodge")}</strong></div>
      <div><span>Sprint:</span> <strong>${this.inputManager.getActionAllLabels("sprint")}</strong></div>
      <div><span>Interact:</span> <strong>${this.inputManager.getActionAllLabels("interact")}</strong></div>
      <div><span>Health Potion:</span> <strong>${this.inputManager.getActionAllLabels("usePotion")}</strong></div>
      <div><span>Inventory / Map:</span> <strong>${o} / ${l}</strong></div>
      <div><span>Pause / Back:</span> <strong>${c}</strong></div>
    `,this.howToPlayModal.querySelector("#howToPlayDynamicBody").innerHTML=`
      <p>Explore four ancient dungeon stages, defeat guardians by stabilizing their ancient wards, collect the Three Ancient Seals, and escape the Forgotten Dungeon.</p>
      <div class="howto-grid">
        <div><strong>Movement:</strong> ${e}</div>
        <div><strong>Primary Attack:</strong> ${this.inputManager.getActionAllLabels("attack")}</div>
        <div><strong>Dodge / Roll:</strong> ${this.inputManager.getActionAllLabels("dodge")}</div>
        <div><strong>Sprint:</strong> ${this.inputManager.getActionAllLabels("sprint")}</div>
        <div><strong>Interact / Stabilize:</strong> ${this.inputManager.getActionAllLabels("interact")}</div>
        <div><strong>Use Health Potion:</strong> ${this.inputManager.getActionAllLabels("usePotion")}</div>
        <div><strong>Inventory / Minimap:</strong> ${o} / ${l}</div>
        <div><strong>Pause / Back:</strong> ${c}</div>
      </div>
      <p class="howto-tip">
        <strong>Ancient mechanisms:</strong> Follow the pull of the current. A steady light and a closing ring mean the crystals are aligned. Hold them still until the lock opens.
      </p>
    `}updateHUD(e){let t=Math.max(0,Math.min(100,e.hp/e.maxHp*100));this.hpFill.style.width=`${t}%`,this.hpFill.classList.toggle("low",e.hp<=30),this.hpText.textContent=`${Math.ceil(e.hp)} / ${e.maxHp}${e.hp<=30?" (!)":""}`,this.potionsCountEl.textContent=String(e.potions),this.keysCountEl.textContent=String(e.keys),this.regionLabel.textContent=e.regionName,this.objectiveLabel.textContent=e.objective;let i=[{id:"seal_rates",glyph:"\u25C6",label:"I"},{id:"seal_motion",glyph:"\u25B2",label:"II"},{id:"seal_extremum",glyph:"\u25CF",label:"III"}],s=e.seals.join(",");if((this.lastSealKey!==s||!this.sealsHud.children.length)&&(this.lastSealKey=s,this.sealsHud.innerHTML=i.map(r=>`<span class="seal-pip ${e.seals.includes(r.id)?"active":""}">${r.glyph} ${r.label}</span>`).join("")),e.interactPrompt&&!e.isTouchMode){let r=this.inputManager.getActionPrimaryLabel("interact");this.interactPromptEl.textContent=`Press ${r} to ${e.interactPrompt}`,this.interactPromptEl.classList.remove("hidden")}else this.interactPromptEl.classList.add("hidden");this.desktopHintsBar.classList.toggle("hidden",e.isTouchMode||!this.showDesktopHints),this.lookStatusPill.classList.toggle("hidden",e.isTouchMode||e.pointerLocked||performance.now()>this.lookGuidanceUntil),e.isTouchMode||(this.lookStatusPill.textContent=e.pointerLocked?"Mouse Locked (Esc to Pause)":e.pointerLockAvailable?"Click view to lock cursor (or drag to look)":"Drag viewport to rotate camera"),this.fpsPill.classList.toggle("hidden",!e.showFps),e.showFps&&(this.fpsPill.textContent=`FPS: ${Math.round(e.fps)}`),e.activeBoss?(this.bossBarWrap.classList.remove("hidden"),this.bossBarName.textContent=e.activeBoss.name,this.bossBarFill.style.width=`${Math.max(0,e.activeBoss.hp/e.activeBoss.maxHp*100)}%`,this.bossShieldStatus.textContent=e.activeBoss.shielded?"\u{1F6E1}\uFE0F Shielded \u2014 Stabilize Pylon":`\u26A1 Vulnerable (${e.activeBoss.vulnRemaining.toFixed(1)}s)`,this.bossShieldStatus.className=`boss-shield-tag ${e.activeBoss.shielded?"shielded":"vulnerable"}`):this.bossBarWrap.classList.add("hidden"),this.minimapVisible&&this.renderMinimap(e.minimap)}renderMinimap(e){let t=this.minimapCanvas.getContext("2d");if(!t)return;let i=this.minimapCanvas.width,s=this.minimapCanvas.height,r=3.2;t.clearRect(0,0,i,s),t.fillStyle="#111d21",t.fillRect(0,0,i,s);let a=(o,l)=>({sx:i*.5+(o-e.playerX)*r,sy:s*.5+(l-e.playerZ)*r});t.fillStyle="#334044",t.strokeStyle="#6b7772",t.lineWidth=1;for(let o of Ci){let l=a(o.minX,o.minZ),c=(o.maxX-o.minX)*r,d=(o.maxZ-o.minZ)*r;t.fillRect(l.sx,l.sy,c,d),t.strokeRect(l.sx,l.sy,c,d)}for(let o of e.doors){if(o.open)continue;let l=a(o.x,o.z);t.fillStyle="#d4af37",t.fillRect(l.sx-3,l.sy-3,6,6)}for(let o of e.enemies){if(!o.alive)continue;let l=a(o.x,o.z);t.fillStyle=o.isBoss?"#f43f5e":"#fb923c",t.beginPath();let c=o.isBoss?4.5:3;t.moveTo(l.sx,l.sy-c),t.lineTo(l.sx+c,l.sy),t.lineTo(l.sx,l.sy+c),t.lineTo(l.sx-c,l.sy),t.closePath(),t.fill()}if(e.axiomVisible){let o=a(e.axiomX,e.axiomZ);t.fillStyle="#38bdf8",t.beginPath(),t.arc(o.sx,o.sy,3.2,0,Math.PI*2),t.fill()}t.save(),t.translate(i*.5,s*.5),t.rotate(-e.playerYaw),t.fillStyle="#fef08a",t.beginPath(),t.moveTo(0,-6),t.lineTo(4.5,5),t.lineTo(-4.5,5),t.closePath(),t.fill(),t.restore()}};var nl=class{constructor(e){D(this,"container");D(this,"persistence");D(this,"settings");D(this,"saveData");D(this,"sound");D(this,"inputManager");D(this,"touchUI");D(this,"ui");D(this,"settingsUI");D(this,"mechanismUI");D(this,"renderer");D(this,"scene");D(this,"camera");D(this,"world");D(this,"appState","main_menu");D(this,"returnStateAfterSettings","main_menu");D(this,"activeMechanismTarget",null);D(this,"simTime",0);D(this,"accumulator",0);D(this,"lastFrameMs",0);D(this,"fpsSamples",[]);D(this,"currentFps",60);D(this,"currentCamDist",it.cameraDefaultDistance);D(this,"playerPitch",.22);D(this,"walkBobTime",0);D(this,"playerSpeed",0);D(this,"mechanismTime",0);D(this,"impactTime",0);D(this,"archivistMotionStart",null);D(this,"combat",new jo);D(this,"companionState",Hc());D(this,"enemies",[]);D(this,"energyModels",new Map);D(this,"optModels",new Map);D(this,"trapModels",new Map);D(this,"trapPrevPos",new Map);D(this,"trapDirections",new Map);D(this,"activeCinematic",null);D(this,"currentTextureQuality");D(this,"currentShadowQuality");D(this,"nearbyInteractable",null);D(this,"animationFrameId",0);this.container=e,this.persistence=new Jo;let t=this.persistence.loadSettings();this.settings=t.settings,this.currentTextureQuality=this.settings.graphics.textureQuality,this.currentShadowQuality=this.settings.graphics.shadowQuality;let i=this.persistence.loadGameSave();this.saveData=i.save??Uc(),this.sound=new Ko,this.sound.setMuted(this.settings.soundMuted),document.body.classList.toggle("reduced-motion",this.settings.reducedMotion),this.inputManager=new Yo(this.settings.controls,{onContextLostPause:()=>{this.appState==="mechanism"&&this.mechanismUI.close(),this.appState==="playing"&&this.pauseGame()},onInputActivity:()=>{this.syncInterfaceModeVisibility()}}),this.inputManager.configureGameplayOptions({sprintMode:this.settings.desktop.sprintMode,holdToRepeatAttack:this.settings.desktop.holdToRepeatAttack,interfaceMode:this.settings.interfaceMode}),this.initThreeScene(),this.touchUI=new Zo(e,this.inputManager,this.settings.mobile,{onOpenInventory:()=>{this.appState==="playing"&&this.toggleInventory()},onToggleMap:()=>{this.appState==="playing"&&this.ui.toggleMinimap()},onPause:()=>{this.appState==="playing"&&this.pauseGame()},onOpenSettings:()=>{this.appState==="playing"&&(this.pauseGame(),this.openSettingsModal("mobile"))}}),this.ui=new il(e,this.inputManager,{onPause:()=>this.pauseGame(),onInventory:()=>{this.pauseGame(),this.ui.openInventoryModal(this.saveData)},onNewGame:()=>this.startNewGame(),onContinueGame:()=>this.continueSavedGame(),onResumeGame:()=>this.resumeGame(),onRestartCheckpoint:()=>this.restartFromCheckpoint(),onReturnMainMenu:()=>this.returnToMainMenu(),onOpenSettings:s=>this.openSettingsModal(s??"controls"),onStudentDecision:s=>this.handleStudentDecision(s),onAdvanceDialogue:()=>this.advanceDialogue(),onSkipCinematic:()=>this.skipActiveCinematic(),onUsePotionFromInventory:()=>{this.tryUsePotion(),this.ui.openInventoryModal(this.saveData)}}),this.settingsUI=new tl(e,this.inputManager,this.settings,{onApplySettings:s=>this.applyNewSettings(s),onClose:()=>{this.inputManager.setContext("menu"),this.returnStateAfterSettings==="paused"&&this.ui.setPauseVisible(!0)}}),this.mechanismUI=new el(e,this.inputManager,this.sound),this.inputManager.attach(this.renderer.domElement),this.initModelsAndEntitiesFromSave(),this.applyGraphicsSettings(this.settings.graphics),this.ui.refreshDynamicInstructions(),this.ui.setMainMenuVisible(!0,this.persistence.hasValidSave()),this.syncInterfaceModeVisibility(),t.recoveredFromError?this.ui.showToast("Settings storage was corrupted and safely restored to defaults."):this.persistence.isStorageAvailable()||this.ui.showToast("Browser storage unavailable \u2014 settings and progress stay active for this session."),i.corrupted&&this.ui.showToast("Saved progress data was invalid and could not be loaded."),window.addEventListener("resize",()=>this.handleResize()),this.lastFrameMs=performance.now(),this.loop(this.lastFrameMs)}getDebugSnapshot(){return{appState:this.appState,simTime:this.simTime,fps:this.currentFps,swordPhase:this.combat.swordPhase,rendererStats:{drawCalls:this.renderer.info.render.calls,triangles:this.renderer.info.render.triangles,pixelRatio:this.renderer.getPixelRatio(),shadowEnabled:this.renderer.shadowMap.enabled,cameraFov:this.camera.fov,cameraFar:this.camera.far},player:{...this.saveData.player},inventory:{...this.saveData.inventory,seals:[...this.saveData.inventory.seals]},worldFlags:{...this.saveData.worldFlags},inputContext:this.inputManager.getContext(),activeBindings:this.inputManager.getBindings(),settings:structuredClone(this.settings),nearbyInteractable:this.nearbyInteractable,enemies:this.enemies.map(e=>({id:e.id,hp:e.hp,state:e.state,shielded:e.shielded,x:e.x,z:e.z}))}}initThreeScene(){try{this.renderer=new Uo({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(this.container.clientWidth||window.innerWidth,this.container.clientHeight||window.innerHeight),this.renderer.shadowMap.type=Ya,this.renderer.toneMapping=gr,this.renderer.toneMappingExposure=1.18,this.renderer.outputColorSpace=Pt,this.renderer.domElement.id="gameplayCanvas",this.renderer.domElement.className="gameplay-canvas",this.container.prepend(this.renderer.domElement),this.scene=new $s,this.scene.background=new $e(1385516),this.scene.fog=new Si(1385516,16,52);let e=(this.container.clientWidth||window.innerWidth)/Math.max(1,this.container.clientHeight||window.innerHeight);this.camera=new $t(this.settings.desktop.fov,e,.1,60),this.world=cu(this.scene,this.settings.graphics.textureQuality,this.settings.graphics.effectsQuality)}catch(e){let t=document.createElement("div");throw t.className="fatal-error-screen",t.innerHTML=`
        <h2>3D Graphics Initialization Failed</h2>
        <p>WebGL could not be initialized in this browser environment.</p>
        <pre>${e instanceof Error?e.message:String(e)}</pre>
      `,this.container.appendChild(t),e}}handleResize(){let e=this.container.clientWidth||window.innerWidth,t=this.container.clientHeight||window.innerHeight;this.camera.aspect=e/Math.max(1,t),this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.touchUI.updateOrientationBanner()}applyNewSettings(e){this.settings=structuredClone(e),this.sound.setMuted(this.settings.soundMuted),document.body.classList.toggle("reduced-motion",this.settings.reducedMotion),this.inputManager.applyBindings(this.settings.controls),this.inputManager.configureGameplayOptions({sprintMode:this.settings.desktop.sprintMode,holdToRepeatAttack:this.settings.desktop.holdToRepeatAttack,interfaceMode:this.settings.interfaceMode}),this.camera.fov=this.settings.desktop.fov,this.camera.updateProjectionMatrix(),this.touchUI.applySettings(this.settings.mobile),this.container.style.setProperty("--hud-scale",String(this.settings.mobile.hudScale)),this.applyGraphicsSettings(this.settings.graphics),this.syncInterfaceModeVisibility(),this.ui.refreshDynamicInstructions(),this.persistence.saveSettings(this.settings)?this.ui.showToast("Settings saved."):this.ui.showToast("Settings applied for session (storage unavailable).")}applyGraphicsSettings(e){let t=Math.min(window.devicePixelRatio||1,2);this.renderer.setPixelRatio(t*e.renderScale);let i=Cr[e.viewDistance];if(this.camera.far=i.far,this.camera.updateProjectionMatrix(),this.scene.fog instanceof Si&&(this.scene.fog.near=i.fogNear,this.scene.fog.far=i.fogFar),e.shadowQuality!==this.currentShadowQuality||!this.renderer.shadowMap.enabled){if(this.currentShadowQuality=e.shadowQuality,e.shadowQuality!=="off"){this.renderer.shadowMap.enabled=!0;let s=eu[e.shadowQuality];for(let r of this.world.ambientLights)r instanceof Ui&&r.castShadow&&(r.shadow.mapSize.set(s,s),r.shadow.map?.dispose(),r.shadow.map=null)}else this.renderer.shadowMap.enabled=!1;this.renderer.shadowMap.needsUpdate=!0}else this.renderer.shadowMap.enabled=e.shadowQuality!=="off";this.world.applyEffectsQuality(e.effectsQuality),e.textureQuality!==this.currentTextureQuality&&(this.currentTextureQuality=e.textureQuality,this.world.applyTextureQuality(e.textureQuality))}syncInterfaceModeVisibility(){let t=this.inputManager.getActiveInterfaceMode()==="touch"&&this.appState==="playing";this.touchUI.setVisible(t)}initModelsAndEntitiesFromSave(){this.archivistMotionStart=null;let e=Cr[this.settings.graphics.viewDistance];this.scene.fog=new Si(1385516,e.fogNear,e.fogFar),this.simTime=0,this.combat.reset(),this.companionState=Hc(),this.energyModels.clear(),this.optModels.clear(),this.trapModels.clear(),this.trapPrevPos.clear();for(let i of gi)if(i.energyConfig){let s=new di(i.energyConfig);this.saveData.worldFlags.openedDoors.includes(i.id)&&(s.stabilized=!0),this.energyModels.set(i.id,s)}for(let i of wn){if(i.energyConfig){let s=new di(i.energyConfig);i.kind==="axiomCage"&&this.saveData.worldFlags.axiomRescued&&(s.stabilized=!0),i.kind==="barrierControl"&&this.saveData.worldFlags.brokenBarriers.includes(i.targetId)&&(s.stabilized=!0),this.energyModels.set(i.id,s)}if(i.optConfig){let s=new Rr(i.optConfig);i.kind==="studentCage"&&this.saveData.worldFlags.studentChoice==="helped"&&(s.unlocked=!0),this.optModels.set(i.id,s)}}for(let i of rn)if(i.optConfig){let s=new Rr(i.optConfig);this.saveData.worldFlags.openedChests.includes(i.id)&&(s.unlocked=!0),this.optModels.set(i.id,s)}for(let i of Ls){let s=new Wo({id:i.id,p0:i.p0,amplitude:i.amplitude,omega:i.omega,phase:i.phase});this.trapModels.set(i.id,s);let r=kr[i.id],a=s.evaluate(0);this.trapPrevPos.set(i.id,{x:r.x+(i.axis==="x"?a.position:0),z:r.z+(i.axis==="z"?a.position:0)})}this.enemies=Wn.map(i=>{let s=this.saveData.worldFlags.defeatedEnemies.includes(i.id)||this.saveData.worldFlags.defeatedBosses.includes(i.id);return du(i,s)}),this.saveData.worldFlags.axiomSacrificed?(this.companionState.axiomX=-2,this.companionState.axiomZ=-171):this.saveData.worldFlags.axiomRescued&&(this.companionState.axiomX=this.saveData.player.x-1.2,this.companionState.axiomZ=this.saveData.player.z+.8),this.saveData.worldFlags.studentChoice==="helped"&&(this.companionState.studentX=this.saveData.player.x+1.2,this.companionState.studentZ=this.saveData.player.z+1.5),this.world.dungeonRoot.visible=!0,this.world.endingRoot.visible=!1,this.activeMechanismTarget=null;let t=Cr[this.settings.graphics.viewDistance];this.scene.fog=new Si(1385516,t.fogNear,t.fogFar),this.camera.far=t.far,this.camera.updateProjectionMatrix();for(let[i,s]of this.world.doors)s.mesh.position.y=this.isDoorOpen(i)?s.openY:s.closedY;this.syncVisualsFromState()}startNewGame(){this.sound.ensureInitialized(),this.saveData=Uc(),this.persistence.saveGame(this.saveData),this.initModelsAndEntitiesFromSave(),this.ui.setMainMenuVisible(!1,!0),this.ui.setPauseVisible(!1),this.appState="playing",this.inputManager.setContext("gameplay"),this.syncInterfaceModeVisibility(),this.updateThirdPersonCamera(1/60),this.updateHUDDisplay(),this.saveData.worldFlags.seenTutorials.includes("intro")||(this.saveData.worldFlags.seenTutorials.push("intro"),this.startDialogue([{speaker:"Narrator",text:"You awaken amid cold, moss-lined stone ruins. Blue arcane conduits pulse softly along the walls."},{speaker:"Narrator",text:"Inspect the stone tablet ahead to learn how the Three Ancient Seals govern this dungeon."}],!0,()=>{this.persistence.saveGame(this.saveData)}))}continueSavedGame(){let{save:e}=this.persistence.loadGameSave();if(e){if(this.sound.ensureInitialized(),this.saveData=e,this.initModelsAndEntitiesFromSave(),this.ui.setMainMenuVisible(!1,!0),this.ui.setPauseVisible(!1),this.saveData.worldFlags.endingReached){this.enterEndingScene(this.saveData.worldFlags.endingReached);return}this.appState="playing",this.inputManager.setContext("gameplay"),this.syncInterfaceModeVisibility(),this.ui.showToast(`Resumed at ${$o[this.saveData.currentRegionId]}`)}}pauseGame(){this.appState==="playing"&&(this.persistence.saveGame(this.saveData),this.appState="paused",this.inputManager.setContext("menu"),this.touchUI.setVisible(!1),this.ui.setPauseVisible(!0))}resumeGame(){this.appState==="paused"&&(this.ui.closeSubmodals(),this.ui.setPauseVisible(!1),this.appState="playing",this.inputManager.setContext("gameplay"),this.syncInterfaceModeVisibility())}restartFromCheckpoint(){let e=Xn.find(t=>t.id===this.saveData.checkpointId)??Xn[0];this.saveData.player.x=e.x,this.saveData.player.y=0,this.saveData.player.z=e.z,this.saveData.player.yaw=e.yaw,this.saveData.player.hp=it.maxHp,this.saveData.currentRegionId=e.region,this.persistence.saveGame(this.saveData),this.initModelsAndEntitiesFromSave(),this.ui.setPauseVisible(!1),this.appState="playing",this.inputManager.setContext("gameplay"),this.syncInterfaceModeVisibility(),this.ui.showToast(`Restored at checkpoint: ${$o[e.region]}`)}returnToMainMenu(){this.appState!=="main_menu"&&this.persistence.saveGame(this.saveData),this.mechanismUI.close(),this.ui.closeSubmodals(),this.ui.hideDialogue(),this.ui.setPauseVisible(!1),this.touchUI.setVisible(!1),this.world.dungeonRoot.visible=!0,this.world.endingRoot.visible=!1,this.activeMechanismTarget=null;let e=Cr[this.settings.graphics.viewDistance];this.scene.fog=new Si(1385516,e.fogNear,e.fogFar),this.camera.far=e.far,this.camera.updateProjectionMatrix(),this.appState="main_menu",this.inputManager.setContext("menu"),this.ui.setMainMenuVisible(!0,this.persistence.hasValidSave())}openSettingsModal(e){this.returnStateAfterSettings=this.appState==="paused"?"paused":"main_menu",this.ui.setPauseVisible(!1),this.inputManager.setContext("menu"),this.settingsUI.open(this.settings,e)}isDoorOpen(e){let t=gi.find(s=>s.id===e);if(!t)return!0;let i=this.saveData.worldFlags;return i.openedDoors.includes(e)||i.brokenBarriers.includes(e)?!0:t.requiredFlag==="stoneSentinelDefeated"?i.defeatedBosses.includes("boss_stone_sentinel"):t.requiredFlag==="axiomRescued"?i.axiomRescued:t.requiredFlag==="arcaneScholarDefeated"?i.defeatedBosses.includes("boss_arcane_scholar"):t.requiredFlag==="keeperDefeated"?i.defeatedBosses.includes("boss_keeper_equations"):t.requiredFlag==="sealsInserted"?i.sealsInserted:t.requiredFlag==="archivistDefeated"?i.defeatedBosses.includes("boss_eternal_archivist"):t.requiredFlag==="axiomSacrificed"?i.axiomSacrificed:!1}getSolidCollisionBoxes(){let e=[...this.world.wallColliders];for(let[t,i]of this.world.doors){let s=i.mesh.position.y+i.closedY;(!this.isDoorOpen(t)||s>.15)&&e.push({...i.collider,maxY:Math.max(.15,s)})}return e}loop(e){this.animationFrameId=requestAnimationFrame(s=>this.loop(s));let t=Math.max(0,(e-this.lastFrameMs)/1e3);this.lastFrameMs=e,t>1e-4&&t<.5&&(this.fpsSamples.push(1/t),this.fpsSamples.length>30&&this.fpsSamples.shift(),this.currentFps=this.fpsSamples.reduce((s,r)=>s+r,0)/this.fpsSamples.length);let i=Math.min(t,Gn.maxFrameDt);if(this.appState==="playing"||this.appState==="mechanism"){for(this.accumulator+=i;this.accumulator>=Gn.fixedDt&&(this.appState==="playing"||this.appState==="mechanism");)this.fixedUpdate(Gn.fixedDt),this.accumulator-=Gn.fixedDt;this.appState!=="playing"&&this.appState!=="mechanism"&&(this.accumulator=0),this.updateThirdPersonCamera(i)}else if(this.appState==="paused")this.handlePausedInput();else if(this.appState==="dialogue")this.handleDialogueInput();else if(this.appState==="main_menu"){let s=this.settings.reducedMotion?0:e*.001;this.world.player.root.position.set(1.55,0,1.05),this.world.player.root.rotation.y=Math.PI+.42,this.world.player.root.scale.setScalar(1.22),Hn(this.world.player.root.userData.rig,s,0,"idle",0,this.settings.reducedMotion),this.camera.position.set(3.85+Math.sin(s*.13)*.12,2.15,4.75),this.camera.lookAt(.05,1.65,-2.4),this.world.updateAtmosphere(0,0,s),this.inputManager.beginSimulationFrame(),this.inputManager.isPressed("pause")&&this.ui.closeSubmodals()}else if(this.appState==="ending"){let s=this.settings.reducedMotion?0:e*.001,r=this.world.endingProtagonistGroup.children[0]?.userData.rig,a=this.world.endingStudentGroup.children[0]?.userData.rig;r&&Hn(r,s,0,"idle",0,this.settings.reducedMotion),a&&Hn(a,s+1.1,0,"idle",0,this.settings.reducedMotion)}this.renderer.render(this.scene,this.camera)}handlePausedInput(){this.inputManager.beginSimulationFrame(),!this.settingsUI.isOpen()&&this.inputManager.isPressed("pause")&&(this.ui.isPauseSubmodalOpen()?this.ui.closeSubmodals():this.resumeGame())}handleDialogueInput(){this.inputManager.beginSimulationFrame(),(this.inputManager.isPressed("interact")||this.inputManager.isPressed("pause"))&&this.advanceDialogue()}fixedUpdate(e){if(this.inputManager.beginSimulationFrame(),this.appState==="mechanism"){this.mechanismTime+=e,this.mechanismUI.stepSimulation(e),this.syncVisualsFromState();return}if(this.inputManager.isPressed("pause"))if(this.ui.isInventoryOpen())this.ui.toggleInventory(this.saveData);else{this.pauseGame();return}if(this.inputManager.isPressed("inventory")){this.pauseGame(),this.ui.openInventoryModal(this.saveData);return}if(this.inputManager.isPressed("map")&&this.ui.toggleMinimap(),this.inputManager.isPressed("usePotion")&&this.tryUsePotion(),this.ui.isInventoryOpen())return;this.simTime+=e;let t=this.inputManager.consumeLookDelta(),i=this.inputManager.getActiveInterfaceMode()==="touch",s=.0024*(i?1:this.settings.desktop.horizontalSensitivity),r=.002*(i?1:this.settings.desktop.verticalSensitivity*(this.settings.desktop.invertY?-1:1));this.saveData.player.yaw-=t.dx*s,this.playerPitch=Math.max(it.cameraMinPitch,Math.min(it.cameraMaxPitch,this.playerPitch+t.dy*r));let a=this.getSolidCollisionBoxes(),o=this.inputManager.getMovementAxes(),l=Math.hypot(o.x,o.z)>.05,c=-Math.sin(this.saveData.player.yaw),d=-Math.cos(this.saveData.player.yaw),h=Math.cos(this.saveData.player.yaw),u=-Math.sin(this.saveData.player.yaw),p=c*o.z+h*o.x,f=d*o.z+u*o.x;if(this.inputManager.isPressed("dodge")){let A=l?p:c,R=l?f:d;this.combat.tryStartDodge(A,R)&&this.sound.playDodge()}(this.settings.desktop.holdToRepeatAttack?this.inputManager.isHeld("attack"):this.inputManager.isPressed("attack"))&&this.combat.tryStartAttack()&&this.sound.playSwordSwing();let g=0,m=0;if(this.combat.isDodging())g=this.combat.dodgeDirX*it.dodgeSpeed,m=this.combat.dodgeDirZ*it.dodgeSpeed;else if(l){let A=this.inputManager.isSprintingActive(l)?it.sprintMultiplier:1,R=it.walkSpeed*A;g=p*R,m=f*R,this.walkBobTime+=e*(A>1?13:9)}this.playerSpeed=Math.hypot(g,m);let v=this.saveData.player.x+g*e,w=this.saveData.player.z+m*e,b=Xo(v,w,it.radius,a,0,it.height);this.saveData.player.x=b.x,this.saveData.player.z=b.z;let C=this.enemies.map(A=>({id:A.id,x:A.x,z:A.z,radius:A.config.radius,alive:A.state!=="dead",shielded:A.shielded})),E=this.combat.step(e,{x:this.saveData.player.x,z:this.saveData.player.z,yaw:this.saveData.player.yaw},C,a);for(let A of E){let R=this.enemies.find(I=>I.id===A.targetId);if(R)if(A.blockedByShield)this.sound.playShieldDeflect(),this.ui.showToast("Shielded! Stabilize the nearby arcane pylon to break the shield.");else{let I=hu(R,ci.swordDamage);I.hit&&(this.sound.playSwordHit(this.soundPan(R.x,R.z)),this.impactTime=this.simTime),I.phase2Triggered&&(this.archivistMotionStart=this.simTime,this.ui.showToast("The ancient clock awakens. Watch its first sweep, then align the eastern crystals.")),I.defeated&&this.handleEnemyDefeated(R)}}let x=e/Gn.trapStepSubdivisions;for(let A=0;A<Gn.trapStepSubdivisions;A++){let R=this.simTime-e+(A+1)*x;for(let I of Ls){let z=this.trapModels.get(I.id),L=kr[I.id],U=I.id==="trap_archivist_clock";if(U&&(this.archivistMotionStart===null||this.saveData.worldFlags.defeatedBosses.includes("boss_eternal_archivist")))continue;let V=U?R-this.archivistMotionStart:R,H=z.evaluate(V),re=Math.sign(H.velocity),Z=Math.hypot(L.x-this.saveData.player.x,L.z-this.saveData.player.z);re!==this.trapDirections.get(I.id)&&this.trapDirections.has(I.id)&&Z<14&&this.sound.playTrapTurn(this.soundPan(L.x+H.position,L.z),Z),this.trapDirections.set(I.id,re);let te=L.x+(I.axis==="x"?H.position:0),se=L.z+(I.axis==="z"?H.position:0),Me=this.trapPrevPos.get(I.id);(!U||V>4.2)&&!this.combat.isPlayerInvulnerable()&&nu(Me.x,Me.z,te,se,I.halfExtents.x,I.halfExtents.z,this.saveData.player.x,this.saveData.player.z,it.radius)&&this.applyPlayerDamage(I.damage),Me.x=te,Me.z=se}}let S=pu(this.enemies,{x:this.saveData.player.x,z:this.saveData.player.z,radius:it.radius},a,e);for(let A of S.telegraphedIds){let R=this.enemies.find(z=>z.id===A),I=Math.hypot(R.x-this.saveData.player.x,R.z-this.saveData.player.z);I<22&&this.sound.playEnemyTelegraph(this.soundPan(R.x,R.z),I)}for(let A of S.playerDamageEvents)this.combat.isPlayerInvulnerable()||this.applyPlayerDamage(A.damage);for(let A of S.shieldReactivatedPylonIds)this.energyModels.get(A)?.resetForRetry(),this.optModels.get(A)?.resetForRetry(),this.ui.showToast("Boss shield regenerated! Stabilize the pylon again.");let P=fu(this.companionState,{dt:e,playerX:this.saveData.player.x,playerZ:this.saveData.player.z,playerYaw:this.saveData.player.yaw,axiomRescued:this.saveData.worldFlags.axiomRescued,axiomSacrificed:this.saveData.worldFlags.axiomSacrificed,studentRescued:this.saveData.worldFlags.studentChoice==="helped"});P.dangerHint&&this.settings.companionHints&&this.ui.showToast(P.dangerHint),this.updateCheckpointsAndTriggers(),this.nearbyInteractable=this.findNearestInteractable(),this.inputManager.isPressed("interact")&&this.nearbyInteractable&&this.triggerInteraction(this.nearbyInteractable),this.syncVisualsFromState(),this.updateHUDDisplay()}applyPlayerDamage(e){this.combat.playerHitInvulnTimer=ci.playerHitInvulnSec,this.saveData.player.hp=Math.max(0,this.saveData.player.hp-e),this.sound.playPlayerHurt(),this.saveData.player.hp<=0&&(this.appState="game_over",this.inputManager.setContext("menu"),this.touchUI.setVisible(!1),this.ui.showGameOver())}soundPan(e,t){let i=e-this.saveData.player.x,s=t-this.saveData.player.z;return Math.max(-1,Math.min(1,(i*Math.cos(this.saveData.player.yaw)-s*Math.sin(this.saveData.player.yaw))/Math.max(2,Math.hypot(i,s))))}tryUsePotion(){this.saveData.inventory.potions<=0||this.saveData.player.hp>=it.maxHp||(this.saveData.inventory.potions-=1,this.saveData.player.hp=Math.min(it.maxHp,this.saveData.player.hp+it.potionHealAmount),this.sound.playPotion(),this.ui.showToast(`Used Health Potion (+${it.potionHealAmount} HP).`))}handleEnemyDefeated(e){e.config.isBoss?(this.saveData.worldFlags.defeatedBosses.includes(e.id)||this.saveData.worldFlags.defeatedBosses.push(e.id),e.spec.dropsSeal&&!this.saveData.inventory.seals.includes(e.spec.dropsSeal.id)&&(this.saveData.inventory.seals.push(e.spec.dropsSeal.id),this.sound.playSealCollected(),this.ui.showToast(`Obtained ${e.spec.dropsSeal.name}!`)),e.id==="boss_eternal_archivist"?(this.saveData.checkpointId="archivist_antechamber",this.persistence.saveGame(this.saveData),this.startDialogue([{speaker:"The Eternal Archivist",text:"The wards fall silent... My watch is ended."},{speaker:"Axiom",text:"Listen! Someone is calling for help from the newly opened West Chamber!"}],!1)):this.persistence.saveGame(this.saveData)):this.saveData.worldFlags.defeatedEnemies.includes(e.id)||this.saveData.worldFlags.defeatedEnemies.push(e.id)}updateCheckpointsAndTriggers(){let e=this.saveData.player.z;for(let t of Xn)e>=t.minZ&&e<=t.maxZ&&(this.saveData.currentRegionId=t.region,this.saveData.checkpointId!==t.id&&(this.saveData.checkpointId=t.id,this.persistence.saveGame(this.saveData)));if(this.saveData.worldFlags.axiomSacrificed&&e<=-175.5){let t=this.saveData.worldFlags.studentChoice==="helped"?"good":"bad";this.enterEndingScene(t)}}findNearestInteractable(){let e=this.saveData.player.x,t=this.saveData.player.z,i=null,s=it.interactRadius,r=a=>{let o=Math.hypot(a.x-e,a.z-t),l=this.world.wallColliders;o<=s&&Vn(e,1.2,t,a.x,1.2,a.z,l)&&(s=o,i=a)};for(let a of Br)r({kind:"tablet",id:a.id,label:"read Ancient Tablet",x:a.x,z:a.z});for(let a of rn)this.saveData.worldFlags.openedChests.includes(a.id)||a.kind==="greedyGold"&&this.saveData.worldFlags.studentChoice!==null||r({kind:"chest",id:a.id,label:`open ${a.label}`,x:a.x,z:a.z});for(let a of gi)this.isDoorOpen(a.id)||(a.kind==="energy"||a.kind==="progression"||a.kind==="sealGate"||a.kind==="finalExit")&&r({kind:"door",id:a.id,label:`inspect ${a.label}`,x:a.x,z:a.z});for(let a of wn)if(!(a.kind==="axiomCage"&&this.saveData.worldFlags.axiomRescued)&&!(a.kind==="barrierControl"&&this.saveData.worldFlags.brokenBarriers.includes(a.targetId))&&!(a.kind==="studentCage"&&this.saveData.worldFlags.studentChoice!==null)){if(a.kind==="bossShield1D"||a.kind==="bossShield2D"){let o=this.enemies.find(l=>l.id===a.targetId);if(!o||o.state==="dead"||!o.shielded||o.activeShieldPylonId!==a.id)continue}r({kind:"pylon",id:a.id,label:`stabilize ${a.label}`,x:a.x,z:a.z})}return this.saveData.worldFlags.sealsInserted||r({kind:"pedestal",id:"pedestal_three_seals",label:"insert Ancient Seals",x:0,z:-136.2}),this.saveData.worldFlags.studentChoice===null&&this.saveData.worldFlags.defeatedBosses.includes("boss_eternal_archivist")&&r({kind:"student",id:"npc_trapped_student",label:"speak with Trapped Student",x:-20,z:-150}),!this.saveData.worldFlags.axiomSacrificed&&this.saveData.worldFlags.defeatedBosses.includes("boss_eternal_archivist")&&r({kind:"lever",id:"mech_exit_lever",label:"activate Exit Binding Lever",x:-2,z:-171}),i}triggerInteraction(e){if(e.kind==="tablet"){let t=Br.find(i=>i.id===e.id);this.startDialogue(t.lines.map(i=>({speaker:t.title,text:i})),!1)}else if(e.kind==="door"){let t=gi.find(i=>i.id===e.id);if(t.kind==="energy"){let i=this.energyModels.get(t.id);this.openMechanism("1d",t.id,t.label,"Turn the seal until the current settles. Hold it steady to open the gate.",i,()=>{this.saveData.worldFlags.openedDoors.includes(t.id)||this.saveData.worldFlags.openedDoors.push(t.id),this.persistence.saveGame(this.saveData),this.ui.showToast(`${t.label} stabilized and unlocked!`)})}else t.requiredFlag==="axiomRescued"?this.ui.showToast("The Sanctum Gate stays sealed until Axiom is rescued in the West Library Wing!"):t.requiredFlag==="sealsInserted"?this.ui.showToast("Use the Three-Seal Pedestal right in front of the gate!"):t.requiredFlag==="axiomSacrificed"?this.ui.showToast("Pull the Exit Binding Lever beside the gate to open the exit!"):this.ui.showToast("Defeat the regional guardian to unseal this gate.")}else if(e.kind==="chest"){let t=rn.find(i=>i.id===e.id);if(t.kind==="standard")this.awardChestOnce(t.id,t.rewards.potions,t.rewards.keys,!1);else if(t.kind==="optimization"){let i=this.optModels.get(t.id);this.openMechanism("2d",t.id,t.label,"Bring both crystals into harmony. Follow the currents until they settle.",i,()=>{this.awardChestOnce(t.id,t.rewards.potions,t.rewards.keys,!1)})}else t.kind==="greedyGold"&&this.handleStudentDecision("left")}else if(e.kind==="pylon"){let t=wn.find(i=>i.id===e.id);if(t.kind==="studentCage"){this.openStudentDecision();return}if(t.energyConfig){let i=this.energyModels.get(t.id);this.openMechanism("1d",t.id,t.label,"Steady the current until the bronze ring closes.",i,()=>{this.handlePylonSolved(t.id)})}else if(t.optConfig){let i=this.optModels.get(t.id);this.openMechanism("2d",t.id,t.label,"Align both crystals to weaken the barrier.",i,()=>{this.handlePylonSolved(t.id)})}}else if(e.kind==="pedestal")this.saveData.inventory.seals.length>=3?(this.saveData.worldFlags.sealsInserted=!0,this.sound.playSealCollected(),this.persistence.saveGame(this.saveData),this.startDialogue([{speaker:"Axiom",text:"All Three Ancient Seals resonate in harmony! The Grand Sanctum opens\u2014prepare to face the Eternal Archivist!"}],!1)):this.ui.showToast(`Requires all 3 Ancient Seals (${this.saveData.inventory.seals.length}/3 collected).`);else if(e.kind==="student")this.openStudentDecision();else if(e.kind==="lever"){if(this.saveData.worldFlags.studentChoice===null){this.ui.showToast('Axiom: "Wait! Check the West Hidden Chamber first\u2014someone is trapped inside!"');return}this.triggerAxiomSacrificeCinematic()}}awardChestOnce(e,t,i,s){this.saveData.worldFlags.openedChests.includes(e)||(this.saveData.worldFlags.openedChests.push(e),this.saveData.inventory.potions+=t,this.saveData.inventory.keys+=i,s&&(this.saveData.inventory.goldRelicLooted=!0),this.sound.playPotion(),this.persistence.saveGame(this.saveData),this.ui.showToast(`Chest opened! +${t} Potion(s), +${i} Key(s).`))}handlePylonSolved(e){let t=wn.find(i=>i.id===e);if(t.kind==="axiomCage")this.saveData.worldFlags.axiomRescued=!0,this.persistence.saveGame(this.saveData),this.startDialogue([{speaker:"Axiom",text:"Free at last! Thank you, traveler. I am Axiom, guide of these chambers."},{speaker:"Axiom",text:"The Sanctum Gate ahead is open now. Beware the Arcane Scholar\u2014watch for its telegraphed strikes!"}],!1);else if(t.kind==="barrierControl")this.saveData.worldFlags.brokenBarriers.includes(t.targetId)||this.saveData.worldFlags.brokenBarriers.push(t.targetId),this.persistence.saveGame(this.saveData),this.ui.showToast("Abyssal Barrier collapsed! Path across the bridge is clear.");else if(t.kind==="bossShield1D"||t.kind==="bossShield2D"){let i=this.enemies.find(s=>s.id===t.targetId);i&&(uu(i),this.ui.showToast(`${i.config.name}'s shield shattered! Strike now!`))}}openMechanism(e,t,i,s,r,a){this.appState="mechanism",this.inputManager.setContext("mechanism"),this.touchUI.setVisible(!1);let o=gi.find(h=>h.id===t),l=rn.find(h=>h.id===t),c=t==="mech_student_rescue"?"pylon_student_cage":t,d=wn.find(h=>h.id===c);this.activeMechanismTarget=o?{x:o.x,y:1.85,z:o.z,orientation:o.orientation}:l?{x:l.x,y:.72,z:l.z}:d?{x:d.x,y:1.45,z:d.z}:null,e==="1d"?this.mechanismUI.open({kind:"1d",id:t,title:i,subtitle:s,model:r,onSolved:a},()=>this.onMechanismClosed()):this.mechanismUI.open({kind:"2d",id:t,title:i,subtitle:s,model:r,onSolved:a},()=>this.onMechanismClosed())}onMechanismClosed(){this.activeMechanismTarget=null,this.appState==="mechanism"&&(this.appState="playing",this.inputManager.setContext("gameplay"),this.syncInterfaceModeVisibility())}openStudentDecision(){if(this.saveData.worldFlags.studentChoice!==null){this.ui.showToast("The exit awaits to the north.");return}this.appState="decision",this.inputManager.setContext("menu"),this.touchUI.setVisible(!1),this.ui.showDecisionModal()}handleStudentDecision(e){if(this.saveData.worldFlags.studentChoice!==null){this.ui.showToast("Your choice has been made. The way out is north.");return}if(this.saveData.worldFlags.defeatedBosses.includes("boss_eternal_archivist"))if(e==="helped"){let t=this.optModels.get("mech_student_rescue");this.openMechanism("2d","mech_student_rescue","Student Containment Lock","Balance both crystals to collapse the prison field and save the student.",t,()=>{this.saveData.worldFlags.studentChoice="helped",this.persistence.saveGame(this.saveData),this.startDialogue([{speaker:"Trapped Student",text:"The barrier is gone! I thought I would never escape\u2014thank you! Let us head to the exit together!"},{speaker:"Axiom",text:"You chose compassion over treasure. Let us walk to the surface gateway north of the arena."}],!1)})}else this.saveData.worldFlags.studentChoice="left",this.saveData.inventory.goldRelicLooted=!0,this.saveData.worldFlags.openedChests.includes("chest_greedy_gold")||this.saveData.worldFlags.openedChests.push("chest_greedy_gold"),this.sound.playPotion(),this.persistence.saveGame(this.saveData),this.startDialogue([{speaker:"Trapped Student",text:"Wait\u2014please do not leave me trapped here! I only needed a little help..."},{speaker:"Axiom",text:"We came so far through knowledge... yet you abandoned someone in need for gold."}],!1)}triggerAxiomSacrificeCinematic(){let e=[{speaker:"Axiom",text:"Look closely at the binding lever. It must stay pressed down continuously or the exit seals shut."},{speaker:"Protagonist",text:"Then how can we all pass through?"},{speaker:"Axiom",text:"Someone must remain behind to hold it. You solved every trial\u2014now allow me to solve the last one."},{speaker:"Axiom",text:"Remember: knowledge opens doors, but our choices decide who walks through them. Go!"}];this.startDialogue(e,!0,()=>{this.saveData.worldFlags.axiomSacrificed=!0,this.sound.playMechanismSolved(),this.persistence.saveGame(this.saveData),this.ui.showToast("Axiom holds the lever! Walk north through the Grand Exit Gateway.")})}startDialogue(e,t,i){this.activeCinematic={lines:[...e],skippable:t,onComplete:i??(()=>{})},this.appState="dialogue",this.inputManager.setContext("menu"),this.touchUI.setVisible(!1),this.advanceDialogue()}advanceDialogue(){if(!this.activeCinematic)return;let e=this.activeCinematic.lines.shift();e?(this.ui.showDialogue(e.speaker,e.text,this.activeCinematic.skippable),this.sound.playUiClick()):this.finishDialogue()}skipActiveCinematic(){this.activeCinematic&&this.finishDialogue()}finishDialogue(){let e=this.activeCinematic;this.activeCinematic=null,this.ui.hideDialogue(),this.appState="playing",this.inputManager.setContext("gameplay"),this.syncInterfaceModeVisibility(),e?.onComplete()}enterEndingScene(e){this.saveData.worldFlags.endingReached=e,this.persistence.saveGame(this.saveData),this.appState="ending",this.activeMechanismTarget=null,this.inputManager.setContext("menu"),this.touchUI.setVisible(!1),this.world.dungeonRoot.visible=!1,this.world.endingRoot.visible=!0,this.camera.far=260,this.camera.updateProjectionMatrix(),e==="good"?(this.world.endingSkyMat.color.setHex(16777215),this.world.endingSunLight.color.setHex(16768921),this.world.endingStudentGroup.visible=!0,this.scene.fog=new Si(10722444,32,130)):(this.world.endingSkyMat.color.setHex(10961740),this.world.endingSunLight.color.setHex(15680580),this.world.endingStudentGroup.visible=!1,this.scene.fog=new Si(4524554,24,110)),this.camera.position.set(0,2.35,6.4),this.camera.lookAt(0,2.55,-28),this.ui.showEnding(e)}toggleInventory(){this.pauseGame(),this.ui.openInventoryModal(this.saveData)}updateThirdPersonCamera(e){let t=this.saveData.player.x,i=this.saveData.player.z,s=this.saveData.player.yaw;if(this.appState==="mechanism"&&this.activeMechanismTarget){let E=this.activeMechanismTarget,x=this.getSolidCollisionBoxes(),S=t-E.x,P=i-E.z;if(E.orientation==="z-axis")S=t<=E.x?-1:1,P=0;else if(E.orientation==="x-axis")S=0,P=i>=E.z?1:-1;else{let me=Math.hypot(S,P);me<.05?(S=Math.sin(s),P=Math.cos(s)):(S/=me,P/=me)}let A=P,R=-S,I=E.orientation?3.55:3.25,z=E.orientation?.65:-1.05,L=S*I+A*z,U=P*I+R*z,V=Math.hypot(L,U),H=L/V,re=U/V,Z=E.x+S*(E.orientation?.75:.3),te=E.z+P*(E.orientation?.75:.3),se=E.y+(E.orientation?.15:.85),Me=E.orientation?.08:.24,Ie=Pr(Z,se,te,H,Me,re,V+.3,x),Q=Ie!==null?Math.max(1.4,Ie-.35):V;this.camera.position.set(Z+H*Q,Math.max(1.35,se+Q*Me),te+re*Q),this.camera.lookAt(E.x+A*.92,E.y-.05,E.z+R*.92);return}let r=this.getSolidCollisionBoxes(),a=Math.cos(s),o=-Math.sin(s),l=t,c=it.cameraShoulderHeight,d=i,h=Pr(l,c,d,a,0,o,it.cameraShoulderOffset+it.cameraWallPadding,r),u=h!==null?Math.max(.1,h-it.cameraWallPadding):it.cameraShoulderOffset,p=l+a*u,f=c,_=d+o*u,g=Math.cos(this.playerPitch),m=Math.sin(s)*g,v=Math.sin(this.playerPitch),w=Math.cos(s)*g,b=Pr(p,f,_,m,v,w,it.cameraDefaultDistance+it.cameraWallPadding,r),C=b!==null?Math.max(.55,b-it.cameraWallPadding):it.cameraDefaultDistance;C<this.currentCamDist?this.currentCamDist=C:this.currentCamDist+=(C-this.currentCamDist)*(1-Math.exp(-12*e)),this.camera.position.set(p+m*this.currentCamDist,Math.max(.45,f+v*this.currentCamDist),_+w*this.currentCamDist),this.camera.lookAt(p-Math.sin(s)*4,f-Math.sin(this.playerPitch)*2.2,_-Math.cos(s)*4)}syncVisualsFromState(){var e;this.world.player.root.scale.setScalar(1),this.world.updateAtmosphere(this.saveData.player.x,this.saveData.player.z,this.simTime),this.world.player.root.position.set(this.saveData.player.x,0,this.saveData.player.z),this.world.player.root.rotation.y=this.saveData.player.yaw,Hn(this.world.player.root.userData.rig,this.simTime,this.playerSpeed,this.saveData.player.hp<=0?"dead":this.combat.isDodging()?"dodge":this.combat.playerHitInvulnTimer>.45?"stagger":this.combat.swordPhase==="active"?"attack":this.combat.swordPhase,this.combat.getSwordSwingAngle(),this.settings.reducedMotion),this.world.player.swordPivot.scale.setScalar(this.simTime-this.impactTime<.08?1.035:1);for(let[t,i]of this.world.doors){let r=this.isDoorOpen(t)?i.openY:i.closedY;i.mesh.position.y+=(r-i.mesh.position.y)*.15;let a=this.energyModels.get(t);if(a){let o=a.evaluateStatic();i.mesh.traverse(l=>{l.name==="dialRotor"&&(l.rotation.z=a.x*Math.PI*2,l.rotation.x=Math.sin((this.simTime+this.mechanismTime)*8)*(1-o.closeness)*.12)})}}for(let[t,i]of this.world.chests){let s=this.saveData.worldFlags.openedChests.includes(t);i.lidPivot.rotation.x=s?-1.45:0,i.glowMesh.visible=!s}for(let[t,i]of this.world.pylons){let s=this.energyModels.get(t),r=this.optModels.get(t),a=s?.stabilized||r?.unlocked,l=1-((s?.evaluateStatic()??r?.evaluateStatic())?.closeness??0),c=this.simTime+this.mechanismTime;i.ringA.rotation.y=a?0:Math.sin(c*(1+l*4))*.8*l,i.ringB.rotation.z=a?0:Math.cos(c*(1+l*3))*.7*l,i.crystal.position.y=1.75+(this.settings.reducedMotion?0:Math.sin(c*8)*l*.12);let d=i.crystal.material;d.emissive.setHex(a?11242826:5020825),d.emissiveIntensity=a?.7:.65+l*(.5+Math.sin(c*13)*.3);let h=i.root.getObjectByName("holdRing");if(h){let u=s??r,p=u?u.dwellElapsed/u.dwellTime:0;h.scale.setScalar(.75+p*.25),h.visible=!!a||p>0}}for(let t of Ls){let i=this.world.traps.get(t.id),s=t.id==="trap_archivist_clock",r=!s||this.archivistMotionStart!==null&&!this.saveData.worldFlags.defeatedBosses.includes("boss_eternal_archivist");i&&(i.root.visible=r);let a=this.trapModels.get(t.id)?.evaluate(s?this.simTime-(this.archivistMotionStart??this.simTime):this.simTime);i&&a&&(i.bladeGroup.position.x=t.axis==="x"?a.position:0,i.bladeGroup.position.z=t.axis==="z"?a.position:0)}for(let t of this.enemies){let i=this.world.enemies.get(t.id);if(!i)continue;if(t.state==="dead"){(e=i.root.userData).deathAt??(e.deathAt=this.simTime),i.root.visible=this.simTime>0&&this.simTime-i.root.userData.deathAt<1.1,i.shieldSphere.visible=!1,i.telegraphRing.visible=!1,i.hpBarBg.visible=!1,i.hpBarFill.visible=!1,Hn(i.root.userData.rig,this.simTime,0,"dead");continue}i.root.visible=!0,delete i.root.userData.deathAt,i.root.position.set(t.x,0,t.z),i.root.rotation.y=t.yaw,i.shieldSphere.visible=t.shielded,i.shieldSphere.rotation.y=this.simTime*.3,Hn(i.root.userData.rig,this.simTime,Math.hypot(t.vx,t.vz),t.state,t.state==="attack"?1-t.stateTimer*6:0,this.settings.reducedMotion),i.telegraphRing.visible=t.state==="windup",i.telegraphRing.scale.setScalar(.6+.4*(1-t.stateTimer/t.config.windupSec)),i.hpBarBg.visible=i.hpBarFill.visible=t.hp<t.maxHp&&Math.hypot(t.x-this.saveData.player.x,t.z-this.saveData.player.z)<12;let s=i.bodyMesh.material;s.emissive.setHex(t.hitFlashTimer>0?16777215:0),s.emissiveIntensity=t.hitFlashTimer>0?.9:0,i.hpBarBg.lookAt(this.camera.position),i.hpBarFill.lookAt(this.camera.position),i.hpBarFill.scale.x=Math.max(.01,t.hp/t.maxHp)}this.world.axiom.root.position.set(this.companionState.axiomX,this.companionState.axiomY,this.companionState.axiomZ),this.world.axiom.ring1.rotation.y=this.simTime*.7,this.world.axiom.ring2.rotation.x=this.simTime*.6,this.world.student.root.position.set(this.companionState.studentX,0,this.companionState.studentZ),this.world.student.root.rotation.y=this.companionState.studentYaw,this.world.student.stasisDome.visible=this.saveData.worldFlags.studentChoice!=="helped",this.world.exitLeverHandle.rotation.x=this.saveData.worldFlags.axiomSacrificed?.45:-.45}getCurrentObjectiveText(){let e=this.saveData.worldFlags;return e.axiomSacrificed?"Step through the Grand Exit Gateway to escape!":e.defeatedBosses.includes("boss_eternal_archivist")?e.studentChoice===null?"Investigate the West Hidden Chamber before escaping":"Head North to the Exit Binding Lever":e.sealsInserted?"Defeat The Eternal Archivist by stabilizing its energy pylons":this.saveData.inventory.seals.length>=3?"Insert the Three Ancient Seals at the Sanctum Pedestal":e.defeatedBosses.includes("boss_stone_sentinel")?e.axiomRescued?e.defeatedBosses.includes("boss_arcane_scholar")?"Cross the Abyss and defeat Abyssal Warden for the Third Seal":"Defeat The Arcane Scholar for the Second Ancient Seal":"Rescue Axiom in the West Library Wing":"Collect the First Ancient Seal from The Stone Sentinel"}updateHUDDisplay(){let e=this.enemies.find(i=>i.config.isBoss&&i.state!=="dead"&&Math.hypot(i.x-this.saveData.player.x,i.z-this.saveData.player.z)<=22),t=this.inputManager.getActiveInterfaceMode()==="touch";this.ui.updateHUD({hp:this.saveData.player.hp,maxHp:it.maxHp,potions:this.saveData.inventory.potions,keys:this.saveData.inventory.keys,seals:this.saveData.inventory.seals,regionName:$o[this.saveData.currentRegionId],objective:this.getCurrentObjectiveText(),interactPrompt:this.nearbyInteractable?.label??null,isTouchMode:t,pointerLocked:this.inputManager.isPointerLocked(),pointerLockAvailable:this.inputManager.isPointerLockAvailable(),showFps:this.settings.showFpsCounter,fps:this.currentFps,activeBoss:e?{name:e.config.name,hp:e.hp,maxHp:e.maxHp,shielded:e.shielded,vulnRemaining:e.vulnerabilityTimer}:null,minimap:{playerX:this.saveData.player.x,playerZ:this.saveData.player.z,playerYaw:this.saveData.player.yaw,axiomX:this.companionState.axiomX,axiomZ:this.companionState.axiomZ,axiomVisible:this.saveData.worldFlags.axiomRescued,enemies:this.enemies.map(i=>({x:i.x,z:i.z,alive:i.state!=="dead",isBoss:i.config.isBoss})),doors:gi.map(i=>({x:i.x,z:i.z,open:this.isDoorOpen(i.id)}))}}),t&&this.touchUI.updateContextualState({canInteract:this.nearbyInteractable!==null,interactLabel:this.nearbyInteractable?"Use":"Interact",potions:this.saveData.inventory.potions,hp:this.saveData.player.hp,maxHp:it.maxHp})}dispose(){cancelAnimationFrame(this.animationFrameId),this.inputManager.detach(),this.sound.stopMechanismResonance(),this.world.dispose(),this.renderer.dispose()}};function mu(){if(window.__GAME_APP__)return;let n=document.getElementById("appRoot"),e=document.getElementById("loadingOverlay");if(n)try{let t=new nl(n);window.__GAME_APP__=t,e?.classList.add("hidden")}catch(t){e&&(e.innerHTML=`
        <h2>Failed to Start Game</h2>
        <p>${t instanceof Error?t.message:String(t)}</p>
      `)}}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",mu):mu();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
