import { Bodies, Composite, type World } from "matter-js";

export const createBoundary = (world: World, color: string) => {
  let options = {
    restitution: 1,
    friction: 0,
    isStatic: true,
    render: {
      fillStyle: color
    }
  };

  let leftBorder = Bodies.rectangle(0, 300, 5, 600, options);
  Composite.add(world, leftBorder);

  let rightBorder = Bodies.rectangle(800, 300, 5, 600, options);
  Composite.add(world, rightBorder);

  for (let i = 0; i < 800; i += 100) {
    let cupBorder = Bodies.rectangle(i, 550, 5, 100, options);
    Composite.add(world, cupBorder);

    let cupBottom = Bodies.rectangle(i, 600, 200, 5, options);
    cupBottom.label = "cupBottom";
    Composite.add(world, cupBottom);
  }
};
