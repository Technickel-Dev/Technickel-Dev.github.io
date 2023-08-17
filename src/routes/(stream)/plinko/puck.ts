import Matter from "matter-js";

export const createPuck = (world: Matter.World, width: number, name: string, radius: number) => {
  let options = {
    restitution: 0.8,
    friction: 0,
    render: {
      fillStyle: getRandomColor()
    }
  };

  let y = 10;
  let x = Math.random() * width;

  let puck = Matter.Bodies.circle(x, y, radius, options);
  puck.label = "puck";
  Matter.Composite.add(world, puck);
};

const getRandomColor = () => {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
