
class Cloud{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");

    let cloud1 = document.createElement("a-sphere");
    cloud1.setAttribute("color", "white");
    cloud1.setAttribute("position", "0 1.5 0");
    cloud1.setAttribute("radius", "1.1");
    this.obj.append(cloud1);

    let cloud2 = document.createElement("a-sphere");
    cloud2.setAttribute("color", "white");
    cloud2.setAttribute("position", "-1 1.7 0.1");
    cloud2.setAttribute("radius", "1");
    this.obj.append(cloud2);

    let cloud3 = document.createElement("a-sphere");
    cloud3.setAttribute("color", "white");
    cloud3.setAttribute("position", "1 1.8 -0.1");
    cloud3.setAttribute("radius", "1");
    this.obj.append(cloud3);

    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )


  }
}