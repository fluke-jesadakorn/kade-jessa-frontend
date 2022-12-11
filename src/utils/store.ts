import { persistentAtom, persistentMap } from "@nanostores/persistent";

export type CartType = {
  ID: string;
  Title: string;
  Colors: string[];
  Description: string;
  Hashtags: string[];
  Images: string[];
  Price: number;
  items: number | 0;
};

export const reduceItems = (ID) => {
  const Index = Cart.get().findIndex((item) => {
    return item.ID == ID;
  });
  let oldValue = Cart.get();
  if (oldValue[Index].items < 2) {
    oldValue.splice(Index, 1);
  } else {
    oldValue[Index].items--;
  }
  Cart.set(oldValue);
};

export const increseItems = (ID) => {
  const Index = Cart.get().findIndex((item) => {
    return item.ID == ID;
  });
  let oldValue = Cart.get();
  oldValue[Index].items++;

  Cart.set(oldValue);
};

export const Cart = persistentAtom<CartType[]>("Cart", [], {
  encode: JSON.stringify,
  decode: JSON.parse,
});

