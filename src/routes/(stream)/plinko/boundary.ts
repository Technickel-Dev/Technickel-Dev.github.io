import Matter from "matter-js";

export const createBoundary = (world: Matter.World, color: string) => {
  let options = {
    restitution: 1,
    friction: 0,
    isStatic: true,
    render: {
      fillStyle: color
    }
  };

  let leftBorder = Matter.Bodies.rectangle(0, 300, 5, 600, options);
  Matter.Composite.add(world, leftBorder);

  let rightBorder = Matter.Bodies.rectangle(800, 300, 5, 600, options);
  Matter.Composite.add(world, rightBorder);

  for (let i = 0; i < 800; i += 100) {
    let cupBorder = Matter.Bodies.rectangle(i, 550, 5, 100, options);
    Matter.Composite.add(world, cupBorder);

    let cupBottom = Matter.Bodies.rectangle(i, 600, 200, 5, options);
    cupBottom.label = "cupBottom";
    Matter.Composite.add(world, cupBottom);
  }
};
