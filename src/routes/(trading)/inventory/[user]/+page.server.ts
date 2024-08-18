/** @type {import('./$types').PageLoad} */
export const load = async ({ fetch, params }) => {
  const res = await fetch(
    `https://steamcommunity.com/inventory/${params.user}/753/6?l=english&count=2000`
  );

  const inventory = await res.json();

  console.log(inventory);

  return inventory;
};
