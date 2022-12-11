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

  const Checkout = async () => {
    const CartText: FlexComponent[] = store.map((data) => {
      const { Title, items, Price } = data;

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
            align: "center",
            contents: [],
          },
          {
            type: "text",
            text: Price.toString(),
            size: "sm",
            color: "#AAAAAA",
            align: "end",
            contents: [],
          },
        ],
      } as FlexComponent;
    });
    await liff.sendMessages([
      {
        type: "flex",
        altText: "ชำระเงิน",
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
                contents: [
                  {
                    type: "box",
                    layout: "baseline",
                    contents: [
                      {
                        type: "text",
                        text: "ชื่อสินค้า",
                        weight: "bold",
                        flex: 0,
                        margin: "md",
                        contents: [],
                      },
                      {
                        type: "text",
                        text: "จำนวนสินค้า",
                        size: "md",
                        weight: "bold",
                        align: "center",
                        contents: [],
                      },
                      {
                        type: "text",
                        text: "ราคาสินค้า(บาท)",
                        size: "md",
                        weight: "bold",
                        align: "end",
                        contents: [],
                      },
                    ],
                  },
                  {
                    type: "separator",
                  },
                  ...CartText,
                ],
              },
              {
                type: "separator",
              },
              {
                type: "box",
                layout: "baseline",
                contents: [
                  {
                    type: "text",
                    text: "รวม",
                    weight: "bold",
                    size: "xl",
                    align: "start",
                    color: "#000000",
                    contents: [],
                  },
                  {
                    type: "text",
                    text: sumPrice.toString(),
                    size: "xl",
                    color: "#000000",
                    weight: "bold",
                    align: "end",
                    contents: [],
                  },
                ],
              },
              {
                type: "text",
                text: "ลูกค้าสามารถชำระค่าบริการได้ที่",
              },
              {
                type: "text",
                text: "ธนาคารไทยพาณิชย์",
              },
              {
                type: "text",
                text: "เลขที่บัญชี 817-283714-5",
              },
              {
                type: "text",
                text: "ชื่อบัญชี บริษัท เคเจ อิมพอร์ต จำกัด",
              },
              {
                type: "text",
                text: "ยอดชำระ " + sumPrice + " บาท",
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
                type: "button",
                action: {
                  type: "uri",
                  label: "เพิ่มหรือลดสินค้า",
                  uri: "https://liff.line.me/1657635161-nb8pvrVQ/cart",
                },
                color: "#B3F1E8FF",
                style: "secondary",
              },
            ],
          },
        },
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
    <div className="px-4">
      {store.map((item, key) => {
        return (
          <div key={key}>
            <div className="grid grid-cols-2 gap-8 place-content-center py-4">
              <div>
                <img
                  src={"https://storage.googleapis.com" + item.Images[0]}
                  width={200}
                  height={250}
                  alt={item.Title}
                />
              </div>

              <div>
                <p className="font-bold">{item.Title}</p>
                <p>{item.Description}</p>
                <p>฿ {item.Price}</p>
                <div className="flex">
                  <button className="btn" onClick={() => reduceItems(item.ID)}>
                    -
                  </button>
                  <button className="btn btn-ghost">{item.items}</button>
                  <button className="btn" onClick={() => increseItems(item.ID)}>
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="flex flex-col justify-self-end">
        <div className="font-bold flex justify-end py-4 text-xl">รวม {SumPrice} บาท</div>
        <button className="btn" onClick={Checkout}>
          Checkout
        </button>
      </div>
    </div>
  );
}
