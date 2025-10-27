class Rocket{
  constructor(x,z){
    this.a = 0;
    this.da = 1;
    
    this.obj = document.createElement("a-entity")
    for(let i = 0; i < 3; i++){
      let body = document.createElement("a-cylinder");
      body.setAttribute("height","3");
      body.setAttribute("position",{x:0,y:0.5 + 1.5 * i,z:0});
      body.setAttribute("radius",1.25 - 0.20 * i);
      this.obj.append(body)
    }
    
    this.obj.setAttribute("position",{x:x,y:0,z:z});
    scene.append(this.obj);
  }
  spin(){ 
    this.a += this.da;
    this.obj.setAttribute("rotation",{x:0, y:this.a, z:0});
  }
}