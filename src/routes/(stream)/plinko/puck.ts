import { Bodies, Composite, World } from "matter-js";

export const createPuck = (world: World, width: number, name: string, radius: number) => {
  let options = {
    restitution: 0.8,
    friction: 0,
    render: {
      fillStyle: getRandomColor()
    }
  };

  let y = 10;
  let x = Math.random() * width;

  let puck = Bodies.circle(x, y, radius, options);
  puck.label = "puck";
  Composite.add(world, puck);
};

const getRandomColor = () => {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
