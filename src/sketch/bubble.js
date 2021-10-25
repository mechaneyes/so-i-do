// Shiffman __ 6.2: Classes in JavaScript with ES6 - p5.js Tutorial
// https://www.youtube.com/watch?v=T-HGdc8L-7w&t=0s
//
// 4.4: Particle System Class - The Nature of Code
// https://www.youtube.com/watch?v=krRpZFU6rSI
// https://github.com/nature-of-code/noc-examples-p5.js/blob/master/chp04_systems/NOC_4_03_ParticleSystemClass/particle_system.js
//

export default class Bubble {
  constructor(s) {
    this.bubbles = [];
    this.diameter = 25;
    this.r = s.random(255)
    this.g = s.random(255)
    this.b = s.random(255)
  }

  run = (s) => {
    this.display(s);
    this.update(s);
  };

  update = (s) => {
    if (s.mouseIsPressed == true) {
      s.fill(s.color(this.r, this.g, this.b));
      s.ellipse(s.mouseX, s.mouseY, this.diameter);
      this.diameter += 3;
    } else {
      this.diameter = 25;
      this.r = s.random(255)
      this.g = s.random(255)
      this.b = s.random(255)
    }
  };

  display = (s) => {
    s.mouseClicked = () => {
      // s.ellipse(s.mouseX, s.mouseY, this.diameter, this.diameter);
    };
  };
}
