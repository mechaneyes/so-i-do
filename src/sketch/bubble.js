// 6.2: Classes in JavaScript with ES6 - p5.js Tutorial
// https://www.youtube.com/watch?v=T-HGdc8L-7w&t=0s
//

import p5 from 'p5';
new p5();

export default class Bubble {

  constructor() {
    this.diameter = 100;
    this.x = random(width);
    this.y = height / 2;
  }

  bubbin(s) {
    s.fill(s.color(255, 0, 0));
    s.ellipse(this.x, this.y, this.diameter, this.diameter);
    this.x = (this.x + 1) % s.width;
  }
}
