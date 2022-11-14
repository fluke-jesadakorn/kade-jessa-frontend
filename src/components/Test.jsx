import { useStore } from "@nanostores/react";
import { num } from "../store.ts";

export default function Test() {
  const number = useStore(num);
  return (
    <button onClick={() => num.set(num.get() +1)}>number is : {number}</button>
  );
}
