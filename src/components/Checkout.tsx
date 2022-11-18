import { useStore } from "@nanostores/react";
import { IDs } from "../utils/store";
const ENDPOINT = import.meta.env.PUBLIC_ENDPOINT;

export default function Checkout() {
  const ids = useStore(IDs);

  const getProducts = fetch(ENDPOINT + "/", {}).then((res) => res);
  const placeOrder = () => liff.sendMessages([{ type: "text", text: "" }]);
  const placeOrder2 = () =>
    liff.sendMessages([
      {
        type: "flex",
        altText: "asd",
        contents: {
          type: "bubble",
          body: {
            type: "box",
            contents: [{ text: "asd", type: "text" }],
            layout: "horizontal",
          },
        },
      },
    ]);
  return <div onClick={placeOrder2}>Check out</div>;
}
