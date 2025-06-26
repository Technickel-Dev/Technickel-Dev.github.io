import { browser } from "$app/environment";
import { writable, derived } from "svelte/store";
import type { Asset, Description, SteamCard } from "./[user]/steam";
import { db, type Badge } from "./db";
import { liveQuery } from "dexie";

interface TrackedCard {
  card: SteamCard;
  numberSelected: number;
}

const cards = writable<TrackedCard[]>([]);
const searchQuery = writable<string>("");
const sortByBadgeSize = writable<boolean>(false);
const sortDirection = writable<number>(1); // 1 for ascending, -1 for descending

const badges = writable<Record<number, number>>({});

if (browser && db) {
  liveQuery(() => db!.badges.toArray())
    .subscribe((badgeData) => {
      const badgeMap: Record<number, number> = {};
      badgeData.forEach((badge: Badge) => {
        badgeMap[badge.appid] = badge.numberOfCards;
      });
      badges.set(badgeMap);
    });
}

const setAssets = async (assets: Asset[], descriptions: Description[]) => {
  if (!browser || !db) return;

  try {

    const getClassidCounts = (assets: Asset[]) => {
      return assets.reduce<Record<string, number>>((acc, asset) => {
        const { classid, amount } = asset;
        acc[classid] = (acc[classid] || 0) + +amount;
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

    cards.set(sortedByType);
  } catch (e) {
    console.error(e);
  }
};

const filteredCards = derived(
  [cards, searchQuery, sortByBadgeSize, badges, sortDirection],
  ([$cards, $searchQuery, $sortByBadgeSize, $badges, $sortDirection]) =>
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

        if ($sortByBadgeSize) {
          const aBadgeSize = $badges[a.card.description.market_fee_app] || -1;
          const bBadgeSize = $badges[b.card.description.market_fee_app] || -1;

          if (aBadgeSize === -1 && bBadgeSize !== -1) {
            return 1; // a (-1) goes to the bottom
          }
          if (bBadgeSize === -1 && aBadgeSize !== -1) {
            return -1; // b (-1) goes to the bottom
          }
          if (aBadgeSize === -1 && bBadgeSize === -1) {
            return 0; // both -1, maintain relative order
          }

          return (bBadgeSize - aBadgeSize) * $sortDirection;
        } else {
          return a.card.description.type.localeCompare(b.card.description.type);
        }
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
    if (!browser || !db) return 0;

    let total = 0;
    for (const trackedCard of $cardsWithSelection) {
      try {
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
      } catch (e) {
        console.error(e);
        return "???";
      }
    }

    // Least number of digits after decimal capped at 5

    return parseFloat(total.toFixed(5));
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

export { cards, selectedCards, searchQuery, filteredCards, setAssets, addCard, removeCard, sortByBadgeSize, sortDirection };
