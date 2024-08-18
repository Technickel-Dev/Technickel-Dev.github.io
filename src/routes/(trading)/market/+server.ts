import type { RequestHandler } from "@sveltejs/kit";
import { CANADIAN_CURRENCY } from "../inventory/[user]/steam";

export const GET: RequestHandler = async ({ url }) => {
  const market_hash_name: string | null = url.searchParams.get("market_hash_name");

  if (!market_hash_name) {
    return new Response(
      JSON.stringify({
        error: "Missing input",
        message: "You must include market_hash_name as input."
      }),
      {
        status: 400
      }
    );
  }

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

  return new Response(JSON.stringify(priceObject), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": `public, max-age=${24 * 60 * 60}` // Cache for 24 hours
    }
  });
};
