import{_ as e,c,o,V as t}from"./chunks/framework.gkMttBBc.js";const p=JSON.parse('{"title":"Vec3","description":"","frontmatter":{},"headers":[],"relativePath":"apidocs/globals/Vec3.md","filePath":"apidocs/globals/Vec3.md"}'),d={name:"apidocs/globals/Vec3.md"},i=t('<h1 id="vec3" tabindex="-1">Vec3 <a class="header-anchor" href="#vec3" aria-label="Permalink to &quot;Vec3&quot;">​</a></h1><p>Used to represent a point in 3d space.</p><p>Has the following properties:</p><ul><li><code>x</code>: Number: equal to the vector&#39;s <code>xCoord</code></li><li><code>y</code>: Number: equal to the vector&#39;s <code>yCoord</code></li><li><code>z</code>: Number: equal to the vector&#39;s <code>zCoord</code></li></ul><p>It has the following methods:</p><ul><li><code>subtractReverse(Vec3 vec) : void</code></li><li><code>normalize() : Vec3</code></li><li><code>dotProduct(Vec3 vec) : number</code></li><li><code>crossProduct(Vec3 vec) : Vec3</code></li><li><code>subtract({x: number, y: number, z: number}) : Vec3</code></li><li><code>addVector({x: number, y: number, z: number}) : Vec3</code></li><li><code>addVector(Vec3 vec) : Vec3</code></li><li><code>distanceTo(Vec3 vec) : number</code></li><li><code>squareDistanceTo(Vec3 vec) : number</code></li><li><code>lengthVector() : number</code></li><li><code>getIntermediateWithXValue({vec: Vec3, x: number}) : Vec3</code></li><li><code>getIntermediateWithYValue({vec: Vec3, y: number}) : Vec3</code></li><li><code>getIntermediateWithZValue({vec: Vec3, z: number}) : Vec3</code></li><li><code>toString() : string</code></li><li><code>rotatePitch({pitch: number}) : Vec3</code></li><li><code>rotateYaw({yaw: number}) : Vec3</code></li></ul>',6),l=[i];function r(a,n,s,u,V,m){return o(),c("div",null,l)}const b=e(d,[["render",r]]);export{p as __pageData,b as default};