(()=>{"use strict";var t,e,a={4314:(t,e,a)=>{var r=a(9477);let o=1e4,i=3355443;function n(t,e,a,r,o,i,n,l){if(0!=t){let s=t,u=t,g=t,h=t;const A=t/100*5;Array.isArray(e)?(r>0&&(s=e[a][r-1]),r<o-1&&(u=e[a][r+1]),a>0&&(g=e[a-1][r]),a<i-1&&(h=e[a+1][r])):(r>0&&(s=e.data[4*n-4]),r<o-1&&(u=e.data[4*n+4]),n-o>0&&(g=e.data[4*(n-o)]),n+o<i*o-1&&(h=e.data[4*(n+o)])),Math.abs(s-t)>A||Math.abs(u-t)>A||Math.abs(g-t)>A||Math.abs(h-t)>A?l[3*n+2]=0:Array.isArray(e)?l[3*n+2]=3*(1-t):l[3*n+2]=10+-1*t/20}}function l(t){let e=0;for(let a of t)e=(e<<8)+a;return e}class s{imageData;jsonData;parsedData=[];constructor(t=[],e=[]){if(this.imageData=t,this.jsonData=e,e.length>0)for(let t=0;t<e.length;t++)this.parsedData.push(JSON.parse(e[t]))}getHeightOfFrame(t){return 0!=this.imageData.length?this.imageData[t].height:this.parsedData[t].length}getWidthOfFrame(t){return 0!=this.imageData.length?this.imageData[t].width:this.parsedData[t][0].length}getCenterValueAt(t){return 0!=this.imageData.length?this.imageData[t].data[this.imageData[t].width*this.imageData[t].height*2]:this.parsedData[t][Math.floor(this.parsedData[t].length/2)][Math.floor(this.parsedData[t][0].length/2)]}getValueAt(t,e,a,r,o=!1,i=0,n=!1){if(0!=this.imageData.length)return this.imageData[t].data[r];if(o)return this.parsedData[t][e][a][i];{let r=330;return n&&(r=1),this.parsedData[t][e][a]/r}}getFramesCount(){return 0!=this.imageData.length?this.imageData.length:this.parsedData.length}getFrameRawDataAt(t){return 0!=this.imageData.length?this.imageData[t]:this.parsedData[t]}}onmessage=t=>{let e,a=100,u=-100;const g=new s(t.data.imageData);switch(t.data.targetGeometry){case"Waifus":e=function(t,e){const a=new r.u9r,o=t.getHeightOfFrame(0),i=t.getWidthOfFrame(0),l=i*o,s=new Float32Array(3*l),u=new Float32Array(3*l),g=new Float32Array(3*l),h=new Float32Array(3*l),A=[],p=[];let c=0;for(let t=0;t<e;t++)A[t]=new Float32Array(3*l),p[t]=new Float32Array(3*l);for(let a=0;a<o;a++)for(let r=0;r<i;r++){const l=a/i,m=r/i;s[3*c+1]=o/i/2-l,s[3*c]=m-.5,n(t.getValueAt(1,a,r,4*c,!1,0,!0),t.getFrameRawDataAt(1),a,r,i,o,c,s),u[3*c]=t.getValueAt(0,a,r,4*c,!0,0)/255,u[3*c+1]=t.getValueAt(0,a,r,4*c+1,!0,1)/255,u[3*c+2]=t.getValueAt(0,a,r,4*c+2,!0,2)/255;for(let s=0;s<e;s++)A[s][3*c+1]=o/i/2-l,A[s][3*c]=m-.5,n(t.getValueAt(4+e+s,a,r,4*c,!1,0,!0),t.getFrameRawDataAt(4+e+s),a,r,i,o,c,A[s]),p[s][3*c]=t.getValueAt(s+4,a,r,4*c,!0,0)/255,p[s][3*c+1]=t.getValueAt(s+4,a,r,4*c+1,!0,1)/255,p[s][3*c+2]=t.getValueAt(s+4,a,r,4*c+2,!0,2)/255;g[3*c+1]=o/i/2-l,g[3*c]=m-.5,n(t.getValueAt(3,a,r,4*c,!1,0,!0),t.getFrameRawDataAt(3),a,r,i,o,c,g),h[3*c]=t.getValueAt(2,a,r,4*c,!0,0)/255,h[3*c+1]=t.getValueAt(2,a,r,4*c+1,!0,1)/255,h[3*c+2]=t.getValueAt(2,a,r,4*c+2,!0,2)/255,c++}a.setAttribute("position",new r.TlE(s,3)),a.setAttribute("color",new r.TlE(u,3)),a.morphAttributes.position=[],a.morphAttributes.color=[];for(let t=0;t<e;t++)a.morphAttributes.position[t]=new r.TlE(A[t],3),a.morphAttributes.color[t]=new r.TlE(p[t],3);return a.morphAttributes.position[e]=new r.TlE(g,3),a.morphAttributes.color[e]=new r.TlE(h,3),a}(g,t.data.stepsNumber);break;case"Farm":{const n=function(t,e,a){const n=new r.u9r,s=t.getHeightOfFrame(0),u=t.getWidthOfFrame(0),g=u*s,h=(new Float32Array(2*g),new Float32Array(3*g)),A=new Float32Array(3*g),p=new Float32Array(3*g),c=new Float32Array(3*g);let m=0,f=100,w=-100,b=t.getCenterValueAt(1);e[a]=[new r.Pa4(0,0,b/o),new r.Pa4(0,0,b/o),new r.Pa4(0,0,b/o)];for(let e=0;e<s;e++)for(let a=0;a<u;a++){const r=e/u,o=a/u;h[3*m+1]=s/u/2-r,h[3*m]=o-.5,h[3*m+2]=t.getValueAt(1,e,a,4*m)/30,h[3*m+2]<f&&(f=h[3*m+2]),h[3*m+2]>w&&(w=h[3*m+2]),A[3*m+1]=s/u/2-r,A[3*m]=o-.5,A[3*m+2]=l([t.getValueAt(0,e,a,4*m,!0,0),t.getValueAt(0,e,a,4*m+1,!0,1),t.getValueAt(0,e,a,4*m+2,!0,2)])/i,p[3*m+1]=s/u/2-r,p[3*m]=o-.5,p[3*m+2]=0,c[3*m]=t.getValueAt(0,e,a,4*m,!0,0)/255,c[3*m+1]=t.getValueAt(0,e,a,4*m+1,!0,1)/255,c[3*m+2]=t.getValueAt(0,e,a,4*m+2,!0,2)/255,m++}return n.setAttribute("color",new r.TlE(c,3)),n.setAttribute("position",new r.TlE(h,3)),n.morphAttributes.position=[],n.morphAttributes.color=[],n.morphAttributes.position[0]=new r.TlE(p,3),n.morphAttributes.color[0]=new r.TlE(c,3),n.morphAttributes.position[1]=new r.TlE(A,3),n.morphAttributes.color[1]=new r.TlE(c,3),{geometry:n,imgMinZ:f,imgMaxZ:w}}(g,t.data.centerPointToUpdate,t.data.targetGeometry);e=n.geometry,a=n.imgMinZ,u=n.imgMaxZ;break}case"Koala":e=function(t,e){const a=new r.u9r,o=t.getHeightOfFrame(0),n=t.getWidthOfFrame(0),s=n*o,u=new Float32Array(3*s),g=new Float32Array(3*s),h=new Float32Array(3*s),A=new Float32Array(3*s),p=[],c=[];let m=0;for(let t=0;t<e;t++)p[t]=new Float32Array(3*s),c[t]=new Float32Array(3*s);for(let a=0;a<o;a++)for(let r=0;r<n;r++){const s=a/n,f=r/n,w=t.getValueAt(0,a,r,4*m+0,!0,0),b=t.getValueAt(0,a,r,4*m+1,!0,1),d=t.getValueAt(0,a,r,4*m+2,!0,2);u[3*m+1]=o/n/2-s,u[3*m]=f-.5,u[3*m+2]=l([w,b,d])/i,g[3*m]=w/255,g[3*m+1]=b/255,g[3*m+2]=d/255;for(let u=0;u<e;u++){const e=t.getValueAt(u+2,a,r,4*m+0,!0,0),g=t.getValueAt(u+2,a,r,4*m+1,!0,1),h=t.getValueAt(u+2,a,r,4*m+2,!0,2);p[u][3*m+1]=o/n/2-s,p[u][3*m]=f-.5,p[u][3*m+2]=l([e,g,h])/i,c[u][3*m]=e/255,c[u][3*m+1]=g/255,c[u][3*m+2]=h/255}const y=t.getValueAt(1,a,r,4*m+0,!0,0),F=t.getValueAt(1,a,r,4*m+1,!0,1),V=t.getValueAt(1,a,r,4*m+2,!0,2);h[3*m+1]=o/n/2-s,h[3*m]=f-.5,h[3*m+2]=l([y,F,V])/i,A[3*m]=y/255,A[3*m+1]=F/255,A[3*m+2]=V/255,m++}a.setAttribute("position",new r.TlE(u,3)),a.setAttribute("color",new r.TlE(g,3)),a.morphAttributes.position=[],a.morphAttributes.color=[];for(let t=0;t<e;t++)a.morphAttributes.position[t]=new r.TlE(p[t],3),a.morphAttributes.color[t]=new r.TlE(c[t],3);return a.morphAttributes.position[e]=new r.TlE(h,3),a.morphAttributes.color[e]=new r.TlE(A,3),a}(g,t.data.stepsNumber);break;case"ai_images":case"alien":e=function(t,e,a){null==e[a]&&(e[a]=[]);const o=new r.u9r,i=[],n=[];let l=0,s=0,u=0;const g=t.getFramesCount()/2;for(let e=0;e<g;e++)s=Math.max(s,t.getHeightOfFrame(2*e)),u=Math.max(s,t.getWidthOfFrame(2*e));for(let o=0;o<g;o++){const g=t.getHeightOfFrame(2*o),h=t.getWidthOfFrame(2*o),A=u*s;e[a][o]=new r.Pa4(0,0,t.getCenterValueAt(2*o+1)/3e4);const p=s-g,c=u-h,m=Math.floor(p/2),f=Math.floor(c/2);i[o]=new Float32Array(3*A),n[o]=new Float32Array(3*A);for(let e=0;e<s;e++)for(let a=0;a<u;a++){const r=e/u,A=a/u;if(a<f||a>=u-f-1||e<m||e>=s-m-1)i[o][3*l+1]=g/h/2-r,i[o][3*l]=A-.5,i[o][3*l+2]=0,n[o][3*l]=0,n[o][3*l+1]=0,n[o][3*l+2]=0;else{const s=e-m,u=a-f;i[o][3*l+1]=g/h/2-r,i[o][3*l]=A-.5,i[o][3*l+2]=t.getValueAt(2*o+1,s,u,4*(s*h+u))/40,n[o][3*l]=t.getValueAt(2*o,s,u,4*(s*h+u),!0,0)/255,n[o][3*l+1]=t.getValueAt(2*o,s,u,4*(s*h+u)+1,!0,1)/255,n[o][3*l+2]=t.getValueAt(2*o,s,u,4*(s*h+u)+2,!0,2)/255}l++}l=0}if(o.setAttribute("position",new r.TlE(i[0],3)),o.setAttribute("color",new r.TlE(n[0],3)),i.length>1){o.morphAttributes.position=[],o.morphAttributes.color=[];for(let t=1;t<g;t++)o.morphAttributes.position[t-1]=new r.TlE(i[t],3),o.morphAttributes.color[t-1]=new r.TlE(n[t],3)}return o}(g,t.data.centerPointToUpdate,t.data.targetGeometry)}postMessage({geometry:e,centerPointToUpdate:t.data.centerPointToUpdate,imgMinZ:a,imgMaxZ:u})}}},r={};function o(t){var e=r[t];if(void 0!==e)return e.exports;var i=r[t]={exports:{}};return a[t](i,i.exports,o),i.exports}o.m=a,o.x=()=>{var t=o.O(void 0,[477],(()=>o(4314)));return o.O(t)},t=[],o.O=(e,a,r,i)=>{if(!a){var n=1/0;for(g=0;g<t.length;g++){for(var[a,r,i]=t[g],l=!0,s=0;s<a.length;s++)(!1&i||n>=i)&&Object.keys(o.O).every((t=>o.O[t](a[s])))?a.splice(s--,1):(l=!1,i<n&&(n=i));if(l){t.splice(g--,1);var u=r();void 0!==u&&(e=u)}}return e}i=i||0;for(var g=t.length;g>0&&t[g-1][2]>i;g--)t[g]=t[g-1];t[g]=[a,r,i]},o.d=(t,e)=>{for(var a in e)o.o(e,a)&&!o.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})},o.f={},o.e=t=>Promise.all(Object.keys(o.f).reduce(((e,a)=>(o.f[a](t,e),e)),[])),o.u=t=>t+".bundle.js",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;o.g.importScripts&&(t=o.g.location+"");var e=o.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var a=e.getElementsByTagName("script");a.length&&(t=a[a.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=t})(),(()=>{var t={314:1};o.f.i=(e,a)=>{t[e]||importScripts(o.p+o.u(e))};var e=self.webpackChunkpoint_cloud_based_visualizer=self.webpackChunkpoint_cloud_based_visualizer||[],a=e.push.bind(e);e.push=e=>{var[r,i,n]=e;for(var l in i)o.o(i,l)&&(o.m[l]=i[l]);for(n&&n(o);r.length;)t[r.pop()]=1;a(e)}})(),e=o.x,o.x=()=>o.e(477).then(e),o.x()})();