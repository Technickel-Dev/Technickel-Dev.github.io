import Dexie, { type EntityTable } from "dexie";

interface Price {
  classid: number;
  lowest_price: string;
  median_price: string;
  success: boolean;
  currency: number;
}

const db = new Dexie("TradingDatabase") as Dexie & {
  prices: EntityTable<
    Price,
    "classid" // primary key "classid" (for the typings only)
  >;
};

// Schema declaration:
db.version(1).stores({
  prices: "id++, [classid+currency], lowest_price, median_price, success" // primary key "id" (for the runtime!)
});

export type { Price };
export { db };
