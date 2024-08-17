export interface Asset {
  appid: number;
  contextid: string;
  assetid: string;
  classid: string;
  instanceid: string;
  amount: string;
}

export interface Tag {
  category: string;
  internal_name: string;
  localized_category_name: string;
  localized_tag_name: string;
}

export interface Description {
  appid: number;
  classid: string;
  instanceid: string;
  currency: number;
  background_color: string;
  icon_url: string;
  icon_url_large: string;
  descriptions: Array<{ value: string }>;
  tradable: number;
  name: string;
  type: string;
  market_name: string;
  market_hash_name: string;
  market_fee_app: number;
  commodity: number;
  market_tradable_restriction: number;
  market_marketable_restriction: number;
  marketable: number;
  tags: Tag[];
}

export interface PriceInfo {
  success: boolean;
  lowest_price: string;
  volume: string;
  median_price: string;
}

export const CANADIAN_CURRENCY = 20;
