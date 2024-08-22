import Dexie, { type EntityTable } from "dexie";

export interface Price {
  classid: number;
  lowest_price: string;
  median_price: string;
  success: boolean;
  currency: number;
  createdAt: number;
}

export interface Badge {
  appid: number;
  numberOfCards: number;
  createdAt: number;
}

const db = new Dexie("TradingDatabase") as Dexie & {
  prices: EntityTable<
    Price,
    "classid" // primary key "classid" (for the typings only)
  >;
  badges: EntityTable<Badge, "appid">;
};

// Schema declaration:
db.version(2)
  .stores({
    prices: "id++, [classid+currency], lowest_price, median_price, success, createdAt", // primary key "id" (for the runtime!)
    badges: "id++, appid, numberOfCards, createdAt"
  })
  .upgrade((transaction) => {
    return transaction
      .table("prices")
      .toCollection()
      .delete()
  });

// Schema declaration:
db.version(1).stores({
  prices: "id++, [classid+currency], lowest_price, median_price, success" // primary key "id" (for the runtime!)
});

export { db };
