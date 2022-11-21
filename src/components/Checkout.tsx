import { Cart } from "../utils/store";
const PUBLIC_ENDPOINT = import.meta.env.PUBLIC_ENDPOINT;
type CartType = {
  ID: string;
  Title: string;
  Colors: string[];
  Description: string;
  Hashtags: string[];
  Images: string[];
  Price: number;
  items?: number;
};

const getDates = async (ID) => {
  const data = await fetch(PUBLIC_ENDPOINT + "/products/id/" + ID).then((res) =>
    res.json()
  );
  return data;
};

const ManyData: CartType[] = await Promise.all(
  Cart.get().map(async (item) => getDates(item.ID))
);

export default function Checkout() {
  const placeOrder = () => {
    liff.sendMessages([{ type: "text", text: JSON.stringify(ManyData) }]);
    liff.closeWindow();
  };
  const placeOrder2 = () => {
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
  };
  return <div onClick={placeOrder}>Check out</div>;
}
