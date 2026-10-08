type Currency = {
  [key: string]: { label: string; long: string };
};

export const DEFAULT_CURRENCY = "20";

export const CURRENCIES: Currency = {
  "1": { label: "USD", long: "United States Dollar" },
  "2": { label: "GBP", long: "United Kingdom Pound" },
  "3": { label: "EUR", long: "European Union Euro" },
  "4": { label: "CHF", long: "Swiss Francs" },
  "5": { label: "RUB", long: "Russian Rouble" },
  "6": { label: "PLN", long: "Polish Złoty" },
  "7": { label: "BRL", long: "Brazilian Reals" },
  "8": { label: "JPY", long: "Japanese Yen" },
  "9": { label: "NOK", long: "Norwegian Krone" },
  "10": { label: "IDR", long: "Indonesian Rupiah" },
  "11": { label: "MYR", long: "Malaysian Ringgit" },
  "12": { label: "PHP", long: "Philippine Peso" },
  "13": { label: "SGD", long: "Singapore Dollar" },
  "14": { label: "THB", long: "Thai Baht" },
  "15": { label: "VND", long: "Vietnamese Dong" },
  "16": { label: "KRW", long: "South Korean Won" },
  "18": { label: "UAH", long: "Ukrainian Hryvnia" },
  "19": { label: "MXN", long: "Mexican Peso" },
  "20": { label: "CAD", long: "Canadian Dollars" },
  "21": { label: "AUD", long: "Australian Dollars" },
  "22": { label: "NZD", long: "New Zealand Dollar" },
  "23": { label: "CNY", long: "Chinese Renminbi (yuan)" },
  "24": { label: "INR", long: "Indian Rupee" },
  "25": { label: "CLP", long: "Chilean Peso" },
  "26": { label: "PEN", long: "Peruvian Sol" },
  "27": { label: "COP", long: "Colombian Peso" },
  "28": { label: "ZAR", long: "South African Rand" },
  "29": { label: "HKD", long: "Hong Kong Dollar" },
  "30": { label: "TWD", long: "New Taiwan Dollar" },
  "31": { label: "SAR", long: "Saudi Riyal" },
  "32": { label: "AED", long: "United Arab Emirates Dirham" },
  "35": { label: "ILS", long: "Israeli New Shekel" },
  "37": { label: "KZT", long: "Kazakhstani Tenge" },
  "38": { label: "KWD", long: "Kuwaiti Dinar" },
  "39": { label: "QAR", long: "Qatari Riyal" },
  "40": { label: "CRC", long: "Costa Rican Colón" },
  "41": { label: "UYU", long: "Uruguayan Peso" }
};

type Inventory = {
  [key: string]: { label: string; context: number };
};

export const DEFAULT_INVENTORY = "753";

export const INVENTORIES: Inventory = {
  "753": { label: "Steam", context: 6 },
  "730": { label: "Counter Strike", context: 2 }
};

export const GEMS_MARKET_HASH_NAME = "753-Gems";
export const SACK_OF_GEMS_MARKET_HASH_NAME = "753-Sack of Gems";
