import type { RequestHandler } from "@sveltejs/kit";
import { DEFAULT_CURRENCY, DEFAULT_INVENTORY } from "./market";

export const GET: RequestHandler = async ({ url }) => {
  const market_hash_name: string | null = url.searchParams.get("market_hash_name");
  const currency: string = url.searchParams.get("currency") || DEFAULT_CURRENCY;
  const market_fee_app: string = url.searchParams.get("appid") || DEFAULT_INVENTORY;

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

  let marketUrl = `https://steamcommunity.com/market/priceoverview/?currency=${currency}&appid=${market_fee_app}&market_hash_name=${encodeURIComponent(
    market_hash_name
  )}`;

  const res = await fetch(marketUrl);

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
