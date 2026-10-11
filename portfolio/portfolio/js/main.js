(function(){
var root=document.documentElement,reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
function dark(){var t=root.getAttribute('data-theme');return t?t==='dark':matchMedia('(prefers-color-scheme:dark)').matches}
document.getElementById('theme').onclick=function(){root.setAttribute('data-theme',dark()?'light':'dark');recolor()};
// typing
var words=['Web Developer','AI and Cybersecurity builder','MCA student','Open to internships'],wi=0,ci=0,del=false,el=document.getElementById('type');
function tick(){var w=words[wi];el.textContent=w.slice(0,ci);
 if(reduce){el.textContent=words[0];return}
 if(!del&&ci===w.length){del=true;return setTimeout(tick,1400)}
 if(del&&ci===0){del=false;wi=(wi+1)%words.length}
 ci+=del?-1:1;setTimeout(tick,del?35:70)}
tick();
// tilt
document.querySelectorAll('.tilt').forEach(function(e){
 e.addEventListener('mousemove',function(ev){var r=e.getBoundingClientRect(),x=(ev.clientX-r.left)/r.width-.5,y=(ev.clientY-r.top)/r.height-.5;e.style.setProperty('--ry',(x*14)+'deg');e.style.setProperty('--rx',(-y*14)+'deg')});
 e.addEventListener('mouseleave',function(){e.style.setProperty('--rx','0deg');e.style.setProperty('--ry','0deg')})});
// 3D network
if(!window.THREE)return;
var cv=document.getElementById('bg'),ren,scene=new THREE.Scene(),cam=new THREE.PerspectiveCamera(60,1,.1,100);
try{ren=new THREE.WebGLRenderer({canvas:cv,alpha:true,antialias:true})}catch(e){return}
ren.setPixelRatio(Math.min(devicePixelRatio,2));cam.position.z=9;
var N=innerWidth<700?70:130,pos=[],g=new THREE.Group();scene.add(g);
for(var i=0;i<N;i++)pos.push(new THREE.Vector3((Math.random()-.5)*20,(Math.random()-.5)*12,(Math.random()-.5)*10));
var pg=new THREE.BufferGeometry().setFromPoints(pos),pm=window.pm=new THREE.PointsMaterial({size:.09,transparent:true,opacity:.9}),pts=new THREE.Points(pg,pm);g.add(pts);
var lp=[];for(i=0;i<N;i++)for(var j=i+1;j<N;j++)if(pos[i].distanceTo(pos[j])<3.2){lp.push(pos[i],pos[j])}
var lm=new THREE.LineBasicMaterial({transparent:true,opacity:.28}),lines=new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(lp),lm);g.add(lines);
var ico=new THREE.Mesh(new THREE.IcosahedronGeometry(2.2,1),new THREE.MeshBasicMaterial({wireframe:true,transparent:true,opacity:.35}));ico.position.set(5.2,0,-1);g.add(ico);
function recolor(){if(!window.pm)return;var d=dark(),a=d?0x38bdf8:0x0284c7,b=d?0xa78bfa:0x7c3aed;pm.color.setHex(a);lm.color.setHex(a);ico.material.color.setHex(b);lm.opacity=d?.28:.35}
recolor();
function size(){ren.setSize(innerWidth,innerHeight,false);cam.aspect=innerWidth/innerHeight;cam.updateProjectionMatrix()}
size();addEventListener('resize',size);
var mx=0,my=0;addEventListener('mousemove',function(e){mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5});
var sy=0;addEventListener('scroll',function(){sy=scrollY/Math.max(1,document.body.scrollHeight-innerHeight)});
(function loop(){g.rotation.y+=(mx*.6+sy*1.4-g.rotation.y)*.03;g.rotation.x+=(my*.4-g.rotation.x)*.03;ico.rotation.x+=.003;ico.rotation.y+=.004;
 ren.render(scene,cam);if(!reduce)requestAnimationFrame(loop)})();
})();
