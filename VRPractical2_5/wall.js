class Wall{
  constructor(x,y,z,direction){
    this.x = x;
    this.y = y;
    this.z = z;

    this.obj = document.createElement("a-box");
    this.obj.setAttribute("color","brown");
    this.obj.setAttribute("depth",0.2);
    this.obj.setAttribute("width",2);
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    if(direction == "horizontal"){
      this.obj.setAttribute("rotation",{x:0, y:90, z:0});
    }
    scene.append(this.obj);



    

  }
}
