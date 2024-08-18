import * as cheerio from "cheerio";

/** @type {import('./$types').PageLoad} */
export const load = async ({ fetch, params }) => {
  let steamId: string;

  if (isNaN(params.user)) {
    const response = await fetch(`https://steamcommunity.com/id/${params.user}`);

    const html = await response.text();

    // Load the HTML into cheerio for parsing
    const $ = cheerio.load(html);

    const scriptContent = $("#responsive_page_template_content script").html();

    if (!scriptContent) {
      return new Response(
        JSON.stringify({
          error: "Passed id input not valid",
          message: "Invalid id provided"
        }),
        {
          status: 400
        }
      );
    }

    // Use a regex to extract the steamid value
    const steamIdMatch = scriptContent.match(/"steamid":"(\d+)"/);
    const id = steamIdMatch ? steamIdMatch[1] : null;

    if (!id) {
      return new Response(
        JSON.stringify({
          error: "Unable to find id",
          message: "Unable to find Steam Id"
        }),
        {
          status: 500
        }
      );
    }

    steamId = id;
  } else {
    steamId = params.user;
  }

  const res = await fetch(
    `https://steamcommunity.com/inventory/${steamId}/753/6?l=english&count=2000`
  );

  const inventory = await res.json();

  console.log(inventory);

  return inventory;
};
