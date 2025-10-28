class Rocket {
      constructor(x, y, z) {
        // Store y position and movement speed
        this.y = y;
        this.dy = Math.random() * 0.05 + 0.02; // Random upward speed
        
        // Create container entity
        this.obj = document.createElement("a-entity");
        
        // Rocket body (main cylinder)
        let body = document.createElement("a-cylinder");
        body.setAttribute("color", "#FF0000");
        body.setAttribute("height", 2);
        body.setAttribute("radius", 0.3);
        body.setAttribute("position", {x: 0, y: 1, z: 0});
        this.obj.append(body);

        let cone= document.createElement("a-cone");
        cone.setAttribute("color", "#FFA500");
        cone.setAttribute("height", 1);
        cone.setAttribute("radius-bottom", 0.3);
        cone.setAttribute("radius-top", 0);
        cone.setAttribute("position", {x: 0, y: 2.5, z: 0});
        this.obj.append(cone);

        for(let i=0; i<4; i++) {
          let fin=document.createElement("a-box");
          fin.setAttribute("color", "#FFD700");
          fin.setAttribute("height", 0.5);
          fin.setAttribute("width", 0.8);
          fin.setAttribute("depth", 0.05);
          fin.setAttribute("position", {x:0, y:0.25, z:0})
          fin.setAttribute("rotation", {x:0, y:i*90, z:0})
          this.obj.append(fin);
        }
        this.flame = document.createElement("a-cone");
        this.flame.setAttribute("color", "#FF6600");
        this.flame.setAttribute("height", 1.5);
        this.flame.setAttribute("radius-bottom", 0.25);
        this.flame.setAttribute("radius-top", 0.05);
        this.flame.setAttribute("position", { x: 0, y: -0.5, z: 0 });
        this.flame.setAttribute("visible", false); // Start hidden
        this.obj.append(this.flame);


        this.obj.setAttribute("position", {x: x, y: y, z: z});
        scene.append(this.obj);
      }

      launch() {
        this.y+=this.dy;
        this.obj.setAttribute("position", {x: this.obj.getAttribute("position").x, y: this.y, z: this.obj.getAttribute("position").z});
        this.flame.setAttribute("visible", true);
      }
     
    }
