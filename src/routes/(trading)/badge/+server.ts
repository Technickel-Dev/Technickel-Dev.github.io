import type { RequestHandler } from "@sveltejs/kit";
import * as cheerio from "cheerio";

export const GET: RequestHandler = async ({ url }) => {
  const appid = url.searchParams.get("appid");

  if (!appid) {
    return new Response(
      JSON.stringify({
        error: "Missing input",
        message: "No appid provided"
      }),
      {
        status: 400
      }
    );
  }

  // Fetch the webpage content
  let fetchUrl = `https://www.steamcardexchange.net/index.php?gamepage-appid-${appid}`;
  const response = await fetch(fetchUrl);
  const html = await response.text();

  // Load the HTML into cheerio for parsing
  const $ = cheerio.load(html);

  // Find the div containing the text 'Cards:' and get the corresponding number
  const numberOfCards = $("div")
    .filter((i, el) => $(el).text().includes("Cards:"))
    .find("span")
    .html();

  return new Response(JSON.stringify(numberOfCards), {
    headers: {
      "Cache-Control": `public, max-age=${30 * 24 * 60 * 60}` // Cache for 30 days
    }
  });
};
