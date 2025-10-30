class Ufo {
  constructor(x, y, z) {
    // Store y position and movement speed
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = -(Math.random() * 0.05 + 0.02);

    // Create container entity
    this.obj = document.createElement("a-entity");

    let dome = document.createElement("a-sphere");
    dome.setAttribute("color", "#00FF00");
    dome.setAttribute("radius", 1.7);
    dome.setAttribute("scale", { x: 1, y: 0.5, z: 1 });
    dome.setAttribute("position", { x: 0, y: 0, z: 0 });
    this.obj.append(dome);

    // main body
    let saucer = document.createElement("a-cylinder");
    // saucer.setAttribute("color", "#808080");
    saucer.setAttribute("src", "#ufo-texture");
    saucer.setAttribute("height", 0.4);
    saucer.setAttribute("radius", 2.5);
    saucer.setAttribute("position", { x: 0, y: 0, z: 0 });
    this.obj.append(saucer);

    // bottom part
    let bottom = document.createElement("a-cylinder");
    // bottom.setAttribute("color", "#808080");
    bottom.setAttribute("src", "#ufo-texture");
    bottom.setAttribute("height", 0.3);
    bottom.setAttribute("radius", 2.5);
    bottom.setAttribute("position", { x: 0, y: -0.3, z: 0 });
    this.obj.append(bottom);

    // fix lights
    for (let i = 0; i < 6; i++) {
      let glowContainer = document.createElement("a-entity");
      glowContainer.setAttribute("rotation", { x: 0, y: i * 60, z: 0 });

      let glow = document.createElement("a-circle");
      glow.setAttribute("color", "#FFFF00");
      glow.setAttribute("radius", 0.3);
      glow.setAttribute("position", { x: 0, y: 0.21, z: 2.3 }); // Position on edge
      glow.setAttribute("rotation", { x: -90, y: 0, z: 0 });

      glowContainer.append(glow);
      this.obj.append(glowContainer);
    }
    // make the glow thicker

    // bars
    for (let i = 0; i < 2; i++) {
      let poleContainer = document.createElement("a-entity");
      poleContainer.setAttribute("rotation", { x: 0, y: i * 180, z: 0 });

      let pole = document.createElement("a-cylinder");
      pole.setAttribute("color", "#0000FF");
      pole.setAttribute("height", 1);
      pole.setAttribute("radius", 0.1);
      pole.setAttribute("position", { x: 0, y: 0.5, z: 2 });
      pole.setAttribute("rotation", { x: 0, y: 0, z: 0 });

      let ball = document.createElement("a-sphere");
      ball.setAttribute("radius", 0.15);
      ball.setAttribute("color", "#FF0000");
      ball.setAttribute("position", { x: 0, y: 1, z: 2 });

      poleContainer.append(ball);
      poleContainer.append(pole);
      this.obj.append(poleContainer);
    }

    for (let i = 0; i < 3; i++) {
      let pole1Container = document.createElement("a-entity");
      pole1Container.setAttribute("rotation", { x: 0, y: i * 120, z: 0 });

      let pole1 = document.createElement("a-cylinder");
      pole1.setAttribute("color", "#0000FF");
      pole1.setAttribute("height", 1);
      pole1.setAttribute("radius", 0.1);
      pole1.setAttribute("position", { x: 0, y: -0.5, z: 1.8 });
      pole1.setAttribute("rotation", { x: 0, y: 0, z: 0 });

      let ball1 = document.createElement("a-sphere");
      ball1.setAttribute("radius", 0.15);
      ball1.setAttribute("color", "#FF0000");
      ball1.setAttribute("position", { x: 0, y: -1, z: 1.8 });

      pole1Container.append(pole1);
      pole1Container.append(ball1);
      this.obj.append(pole1Container);
    }

    this.beam = document.createElement("a-cone");
    this.beam = document.createElement("a-cone");
    this.beam.setAttribute("color", "#FDFD96");
    this.beam.setAttribute("height", 2);
    this.beam.setAttribute("radius-bottom", 2);
    this.beam.setAttribute("radius-top", 0.8);
    this.beam.setAttribute("position", { x: 0, y: -1.2, z: 0 });
    this.beam.setAttribute("visible", false); // Start hidden
    this.obj.append(this.beam);



    this.obj.setAttribute("position", { x: x, y: y, z: z });
    scene.append(this.obj);
  }
  invade() {
    if (this.y > 0.8) {
      this.y += this.dy;
      this.obj.setAttribute("position", { x: this.x, y: this.y, z: this.z });
      this.beam.setAttribute("visible", true);
    }
    if (this.y <= 0.5) {
      this.y = 0.5;
      this.obj.setAttribute("position", { x: this.x, y: this.y, z: this.z });
    }


  }


}
