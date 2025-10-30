let mech, scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");

    
  mech1 = document.getElementById("mech-1");
  mech1 = new mech(5,0,0);

  mech1.push(new mech(xPos, yPos, zPos));


 
  loop();
})
function loop(){


  window.requestAnimationFrame( loop );
}
