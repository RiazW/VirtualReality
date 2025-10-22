

class House{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
  
    let house1 = document.createElement("a-box");
    house1.setAttribute("color", "blue");
    house1.setAttribute("width", "3");
    house1.setAttribute("height", "2.5");
    house1.setAttribute("depth", "3");
    house1.setAttribute("position", "0 1 0");
    this.obj.append(house1);
  
    let roof = document.createElement("a-cylinder");
    roof.setAttribute("color", "black");
    roof.setAttribute("radius", "1.5");
    roof.setAttribute("height", "3");
    roof.setAttribute("rotation", "-90 0 0");
    roof.setAttribute("position", "0 3 0");
    roof.setAttribute("segments-radial", "3");
    this.obj.append(roof);
  
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }
}