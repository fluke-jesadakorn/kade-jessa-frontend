import { persistentAtom } from "@nanostores/persistent";

export const IDs = persistentAtom<string[]>("IDs", [], {
  encode: JSON.stringify,
  decode: JSON.parse,
});