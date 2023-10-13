export const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const waitForAnimations = (
  target: HTMLElement | Document = document
): Promise<Animation[]> => {
  const animations = target.getAnimations().map((animation) => animation.finished);
  return Promise.all(animations);
};
