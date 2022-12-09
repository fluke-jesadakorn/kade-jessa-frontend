import { Cart, reduceItems, increseItems } from "../utils/store";
import { useStore } from "@nanostores/react";
import { useCallback, useEffect, useState } from "react";
import type { FlexComponent } from "@line/bot-sdk/dist/types";

export default function CartModule() {
  const store = useStore(Cart);
  const [SumPrice, setSumprice] = useState(0);
  const CartList = Cart.get();

  const sumPrice = CartList.reduce((prev, curr) => {
    const sumCurr = curr.Price * curr.items;
    return prev + sumCurr;
  }, 0);
  const [, update] = useState({});
  const forceUpdate = useCallback(() => {
    update({});
  }, []);

  const CartText: FlexComponent[] = store.map((data) => {
    const Title = data.Title;
    const items = data.items;

    return {
      type: "box",
      layout: "baseline",
      contents: [
        {
          type: "text",
          text: Title,
          weight: "bold",
          flex: 0,
          margin: "sm",
          contents: [],
        },
        {
          type: "text",
          text: items.toString(),
          size: "sm",
          color: "#AAAAAA",
          align: "end",
          contents: [],
        },
      ],
    };
  });

  const Checkout = async () => {
    await liff.sendMessages([
      {
        type: "flex",
        contents: {
          type: "bubble",
          direction: "ltr",
          // hero: {
          //   type: "image",
          //   url: "/kade-jessa-logo.png",
          //   size: "full",
          //   aspectRatio: "20:13",
          //   aspectMode: "cover",
          //   action: {
          //     type: "uri",
          //     label: "Action",
          //     uri: "https://linecorp.com",
          //   },
          // },
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
                text: "รายการสินค้าของคุณ",
                weight: "bold",
                size: "xl",
                contents: [],
              },
              {
                type: "box",
                layout: "vertical",
                spacing: "sm",
                contents: CartText,
              },
              {
                type: "separator",
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
                  label: "เพิ่มสินค้า",
                  uri: "https://linecorp.com",
                },
                color: "#B3F1E8FF",
                style: "secondary",
              },
              {
                type: "button",
                action: {
                  type: "uri",
                  label: "ชำระเงิน",
                  uri: "https://linecorp.com",
                },
                color: "#F7FB93FF",
                style: "secondary",
              },
            ],
          },
        },
        altText: "Your Cart",
      },
    ]);

    liff.closeWindow();
  };

  useEffect(() => {
    Cart.subscribe(() => {
      forceUpdate();
    });
    Cart.off();
  }, []);

  useEffect(() => {
    setSumprice(sumPrice);
  }, [sumPrice]);

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
      <button onClick={Checkout}>Checkout</button>
    </>
  );
}
