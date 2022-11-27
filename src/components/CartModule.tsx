import { Cart, reduceItems, increseItems } from "../utils/store";
import { useStore } from "@nanostores/react";
import { useCallback, useEffect, useState } from "react";

export default function CartModule() {
  const store = useStore(Cart);
  const [, update] = useState({});
  const forceUpdate = useCallback(() => update({}), []);
  const CartList = Cart.get();
  const SumPrice = CartList.reduce((prev, curr) => {
    const sumCurr = curr.Price * curr.items;
    return prev + sumCurr;
  }, 0);

  const placeOrder2 = () => {
    liff.sendMessages([
      {
        type: "flex",
        altText: "asd",
        contents: {
          type: "bubble",
          direction: "ltr",
          hero: {
            type: "image",
            url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_2_restaurant.png",
            size: "full",
            aspectRatio: "20:13",
            aspectMode: "cover",
            action: {
              type: "uri",
              label: "Action",
              uri: "https://linecorp.com",
            },
          },
          body: {
            type: "box",
            layout: "vertical",
            spacing: "md",
            action: {
              type: "uri",
              label: "Action",
              uri: "https://linecorp.com",
            },
            contents: [
              {
                type: "text",
                text: "Brown's Burger",
                weight: "bold",
                size: "xl",
                contents: [],
              },
              {
                type: "box",
                layout: "vertical",
                spacing: "sm",
                contents: [
                  {
                    type: "box",
                    layout: "baseline",
                    contents: [
                      {
                        type: "icon",
                        url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/restaurant_regular_32.png",
                      },
                      {
                        type: "text",
                        text: "$10.5",
                        weight: "bold",
                        margin: "sm",
                        contents: [],
                      },
                      {
                        type: "text",
                        text: "400kcl",
                        size: "sm",
                        color: "#AAAAAA",
                        align: "end",
                        contents: [],
                      },
                    ],
                  },
                  {
                    type: "box",
                    layout: "baseline",
                    contents: [
                      {
                        type: "icon",
                        url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/restaurant_large_32.png",
                      },
                      {
                        type: "text",
                        text: "$15.5",
                        weight: "bold",
                        flex: 0,
                        margin: "sm",
                        contents: [],
                      },
                      {
                        type: "text",
                        text: "550kcl",
                        size: "sm",
                        color: "#AAAAAA",
                        align: "end",
                        contents: [],
                      },
                    ],
                  },
                ],
              },
              {
                type: "text",
                text: "Sauce, Onions, Pickles, Lettuce & Cheese",
                size: "xxs",
                color: "#AAAAAA",
                wrap: true,
                contents: [],
              },
            ],
          },
          footer: {
            type: "box",
            layout: "vertical",
            contents: [
              {
                type: "spacer",
                size: "xxl",
              },
              {
                type: "button",
                action: {
                  type: "uri",
                  label: "Add to Cart",
                  uri: "https://linecorp.com",
                },
                color: "#905C44",
                style: "primary",
              },
            ],
          },
        },
      },
    ]);
  };

  useEffect(() => {
    Cart.subscribe(() => forceUpdate());
    Cart.off();
  }, []);

  return (
    <>
      {store.map((item, key) => {
        return (
          <div key={key}>
            <div className="grid grid-cols-2 gap-8 place-content-center px-4 py-4">
              <div className="justify-self-start">
                <img
                  src={"https://storage.googleapis.com" + item.Images[0]}
                  width={200}
                  height={250}
                  alt={item.Title}
                />
              </div>
              <div className="justify-self-end">
                <p>{item.Title}</p>
                <p>{item.Description}</p>
                <p>{item.Price}</p>
                <p>{item.items}</p>
                <button onClick={() => reduceItems(item.ID)}>-</button>
                <button onClick={() => increseItems(item.ID)}>+</button>
              </div>
            </div>
          </div>
        );
      })}
      <div>รวม : {SumPrice} บาท</div>
      <button onClick={placeOrder2}>Checkout</button>
    </>
  );
}
