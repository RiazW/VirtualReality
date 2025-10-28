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
        body.setAttribute("height", 3);
        body.setAttribute("radius", 0.5);
        body.setAttribute("position", {x: 0, y: 1, z: 0});
        this.obj.append(body);

        let body1 = document.createElement("a-cylinder");
        body1.setAttribute("color", "#3b3b3b");
        body1.setAttribute("height", 1.5);
        body1.setAttribute("radius", 0.3);
        body1.setAttribute("position", {x: 0.8, y: 1, z: 0});
        this.obj.append(body1);

        let body2 = document.createElement("a-cylinder");
        body2.setAttribute("color", "#3b3b3b");
        body2.setAttribute("height", 1.5);
        body2.setAttribute("radius", 0.3);
        body2.setAttribute("position", {x: -0.8, y: 1, z: 0});
        this.obj.append(body2);

        let cone= document.createElement("a-cone");
        cone.setAttribute("color", "#FFA500");
        cone.setAttribute("height", 3);
        cone.setAttribute("radius-bottom", 0.5);
        cone.setAttribute("radius-top", 0);
        cone.setAttribute("position", {x: 0, y: 4, z: 0});
        this.obj.append(cone);

        for(let i=0; i<4; i++) {
          let fin=document.createElement("a-box");
          fin.setAttribute("color", "#FFD700");
          fin.setAttribute("height", 0.5);
          fin.setAttribute("width", 1.3);
          fin.setAttribute("depth", 0.08);
          fin.setAttribute("position", {x:0, y:-0.24, z:0})
          fin.setAttribute("rotation", {x:0, y:i*90, z:0})
          this.obj.append(fin);
        }
        this.flame = document.createElement("a-cone");
        this.flame.setAttribute("color", "#FF6600");
        this.flame.setAttribute("height", 1.5);
        this.flame.setAttribute("radius-bottom", 0.5);
        this.flame.setAttribute("radius-top", 0.1);
        this.flame.setAttribute("position", { x: 0, y: -1.2, z: 0 });
        this.flame.setAttribute("rotation", { x: 0, y: 0, z: 0 });
        this.flame.setAttribute("visible", false); // Start hidden
        this.obj.append(this.flame);

        this.flame1 = document.createElement("a-cone");
        this.flame1.setAttribute("color", "#FF6600");
        this.flame1.setAttribute("height", 1.5);
        this.flame1.setAttribute("radius-bottom", 0.25);
        this.flame1.setAttribute("radius-top", 0.05);
        this.flame1.setAttribute("position", { x: -0.8, y: 0, z: 0 });
        this.flame1.setAttribute("rotation", { x: 180, y: 0, z: 0 });
        this.flame1.setAttribute("visible", false); // Start hidden
        this.obj.append(this.flame1);

        this.flame2 = document.createElement("a-cone");
        this.flame2.setAttribute("color", "#FF6600");
        this.flame2.setAttribute("height", 1.5);
        this.flame2.setAttribute("radius-bottom", 0.25);
        this.flame2.setAttribute("radius-top", 0.05);
        this.flame2.setAttribute("position", { x: 0.8, y: 0, z: 0 });
        this.flame2.setAttribute("rotation", { x: 180, y: 0, z: 0 });
        this.flame2.setAttribute("visible", false); // Start hidden
        this.obj.append(this.flame2);



        this.obj.setAttribute("position", {x: x, y: y, z: z});
        scene.append(this.obj);
      }

      launch() {
        this.y+=this.dy;
        this.obj.setAttribute("position", {x: this.obj.getAttribute("position").x, y: this.y, z: this.obj.getAttribute("position").z});
        this.flame.setAttribute("visible", true);
        this.flame1.setAttribute("visible", true);
        this.flame2.setAttribute("visible", true);
      }
     
    }
