import { persistentAtom } from "@nanostores/persistent";

type Cart = {
  ID: string;
  Title: string;
  Colors: string[];
  Description: string;
  Hashtags: string[];
  Images: string[];
  Price: number;
  items: number | 0;
};

export const Cart = persistentAtom<Cart[]>("Cart", [], {
  encode: JSON.stringify,
  decode: JSON.parse,
});
