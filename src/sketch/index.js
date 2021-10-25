import Bubble from "./bubble";

export default function sketch(s) {
  let x, y, backgroundColor;

  const multip = 60;
  const width = 9 * multip;
  const height = 16 * multip;

  let bubbles = []


  s.setup = () => {
    s.createCanvas(width, height);
    backgroundColor = s.color(s.random(255), s.random(255), s.random(255));
    s.background(backgroundColor);
    s.noStroke()
  };

  s.draw = () => {

    s.mouseClicked = () => {
      bubbles.push(new Bubble(s));
    }

    for (let bubble of bubbles) {
      bubble.run(s);
    }
  };
}
