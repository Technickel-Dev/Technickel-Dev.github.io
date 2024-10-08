import { writable, derived } from "svelte/store";
import type { Asset, Description, SteamCard, Tag } from "./[user]/steam";
import { db } from "./db";
import { DEFAULT_INVENTORY } from "../market/market";

interface TrackedCard {
  card: SteamCard;
  numberSelected: number;
}

const cards = writable<TrackedCard[]>([]);
const searchQuery = writable<string>("");

const setAssets = (assets: Asset[], descriptions: Description[], appid: string) => {
  const getClassidCounts = (assets: Asset[]) => {
    return assets.reduce<Record<string, number>>((acc, asset) => {
      const { classid } = asset;
      acc[classid] = (acc[classid] || 0) + 1;
      return acc;
    }, {});
  };

  const getNameAndTypeByClassid = (classid: string, descriptions: Description[]) => {
    const description = descriptions.find((description) => description.classid === classid);
    return description ? description : null;
  };

  const classidCounts = getClassidCounts(assets);

  let sortedByType = Object.entries(classidCounts).map(([classid, count]) => {
    const description = getNameAndTypeByClassid(classid, descriptions);
    return {
      card: { count, description },
      numberSelected: 0
    };
  });

  if (appid == DEFAULT_INVENTORY) {
    sortedByType = sortedByType.filter((trackedCard: TrackedCard) => {
      if (!trackedCard.card.description) return true;
      return trackedCard.card.description.tags.some(
        (tag: Tag) => tag.localized_tag_name === "Trading Card"
      );
    });
  }

  cards.set(sortedByType);
};

const filteredCards = derived([cards, searchQuery], ([$cards, $searchQuery]) =>
  $cards
    .filter((trackedCard: TrackedCard) => {
      if ($searchQuery === "") return true;
      if (!trackedCard.card.description) return false;

      return (
        trackedCard.card.description.name.toLowerCase().includes($searchQuery.toLowerCase()) ||
        trackedCard.card.description.type.toLowerCase().includes($searchQuery.toLowerCase())
      );
    })
    .sort((a, b) => {
      if (!a.card.description || !b.card.description) return 0;

      return a.card.description.type.localeCompare(b.card.description.type);
    })
);

const selectedCards = derived(cards, ($cards) =>
  $cards
    .filter((trackedCard: TrackedCard) => trackedCard.numberSelected > 0)
    .sort((a, b) => {
      if (!a.card.description || !b.card.description) return 0;

      return a.card.description.type.localeCompare(b.card.description.type);
    })
);

export const totalPrice = derived(selectedCards, ($cardsWithSelection) => {
  return async (currency: number) => {
    let total = 0;
    for (const trackedCard of $cardsWithSelection) {
      let price = await db.prices
        .where({ classid: +trackedCard.card.description!!.classid, currency })
        .first();
      if (price == undefined || (!price.lowest_price && !price.median_price)) {
        return "???";
      }

      let priceString = price.lowest_price ? price.lowest_price : price.median_price;

      let matches = priceString.match(/[\d.,]+/);
      if (!matches) return "???";

      let priceNumber = parseFloat(matches[0].replace(",", "."));

      total += priceNumber * trackedCard.numberSelected;
    }

    return Math.floor(total * 100) / 100;
  };
});

const addCard = (card: SteamCard) => {
  cards.update((trackedCards) => {
    if (card.description == null) return trackedCards;

    let currentCardIndex = trackedCards.findIndex(
      (trackedCard) => trackedCard.card.description?.classid === card.description?.classid
    );

    if (currentCardIndex === -1) {
      return trackedCards;
    }

    if (trackedCards[currentCardIndex].numberSelected + 1 > card.count) return trackedCards;

    trackedCards[currentCardIndex].numberSelected += 1;

    return trackedCards;
  });
};

const removeCard = (card: SteamCard) => {
  cards.update((trackedCards) => {
    if (card.description == null) return trackedCards;

    let currentCardIndex = trackedCards.findIndex(
      (trackedCard) => trackedCard.card.description?.classid === card.description?.classid
    );

    if (currentCardIndex === -1) return trackedCards;

    if (trackedCards[currentCardIndex].numberSelected - 1 > 0) {
      trackedCards[currentCardIndex].numberSelected -= 1;
    } else {
      trackedCards[currentCardIndex].numberSelected = 0;
    }

    return trackedCards;
  });
};

export { cards, selectedCards, searchQuery, filteredCards, setAssets, addCard, removeCard };
