import { CANADIAN_CURRENCY } from "../inventory/[user]/steam";

/** @type {import('./$types').RequestHandler} */
export const GET = async ({ url }) => {
  const market_hash_name: string = url.searchParams.get("market_hash_name");

  const res = await fetch(
    `https://steamcommunity.com/market/priceoverview/?currency=${CANADIAN_CURRENCY}&appid=753&market_hash_name=${encodeURIComponent(
      market_hash_name
    )}`
  );

  if (res.status === 429) {
    return new Response(
      JSON.stringify({
        error: "Too Many Requests",
        message: "You have sent too many requests. Please try again later."
      }),
      {
        status: 429,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }

  const priceObject = await res.json();

  return new Response(JSON.stringify(priceObject));
};
