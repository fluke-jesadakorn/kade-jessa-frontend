import { persistentAtom } from "@nanostores/persistent";

type Store = {
  _id: string;
};
export const num = persistentAtom<Store[]>("value", [], {
  encode: JSON.stringify,
  decode: JSON.parse,
});
