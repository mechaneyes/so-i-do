import Bubble from './bubble';

export default function sketch(s) {
  let x, y, backgroundColor;

  const multip = 60;
  const width = 9 * multip;
  const height = 16 * multip;

  let bub1, bub2

  s.setup = () => {
    s.createCanvas(width, height);
    backgroundColor = s.color(s.random(255), s.random(255), s.random(255));

    bub1 = new Bubble;
    bub2 = new Bubble;
  };

  s.draw = () => {
    s.background(backgroundColor);
    s.fill(s.color(255, 255, 0));
    bub1.bubbin(s)
    bub2.bubbin(s)
  };

  s.mousePressed = () => {
    backgroundColor = s.color(s.random(255), s.random(255), s.random(255));
  };
}
