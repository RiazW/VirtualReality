let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;
let rockets = [];
let ufos = [];


window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector
  for(let x = 0; x < 10; x++) {     
    for(let z = 0; z < 10; z++) {    
      let xPos = x * 10 - 45;       
      let zPos = z * 10 - 45;
      let yPos = rnd(-5, -1);
      
      rockets.push(new Rocket(xPos, yPos, zPos));
    }
  }

  for (let x = 0; x < 20; x++) {
      let xPos = rnd(-35,35);
      let zPos = rnd(-20,35);
      let yPos = rnd(35, 35);

     ufos.push(new Ufo(xPos, yPos, zPos));

  };
    
      loop();
});
   

function loop(){
  for(let i = 0; i < rockets.length; i++) {
    rockets[i].launch();
  }

    for(let i=0; i< ufos.length; i++){
    ufos[i].invade();
  }

  
  window.requestAnimationFrame( loop );
}