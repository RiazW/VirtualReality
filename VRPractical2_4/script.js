let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, rocket;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector

 
  rocket = new Rocket(-5,1,0);
  loop();
})

function loop(){
  // rocket.launch();
  
  window.requestAnimationFrame( loop );
}