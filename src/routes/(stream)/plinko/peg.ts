import Matter from "matter-js";

export const createPegs = (
  world: Matter.World,
  width: number,
  cols: number,
  rows: number,
  radius: number,
  color: string
) => {
  let spacing = width / cols + 2 * radius;
  let pegs = [];

  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols + 1; i++) {
      let x = i * spacing - spacing / 3;
      if (j % 2 == 0) {
        x += spacing / 2;
      }

      let y = spacing + j * spacing;

      let peg = createPeg(world, x, y, radius, color);
      pegs.push(peg);
    }
  }

  return pegs;
};

const createPeg = (world: Matter.World, x: number, y: number, radius: number, color: string) => {
  let options = {
    restitution: 1,
    friction: 0,
    isStatic: true,
    render: {
      fillStyle: color
    }
  };

  let peg = Matter.Bodies.circle(x, y, radius, options);
  Matter.Composite.add(world, peg);

  return peg;
};
