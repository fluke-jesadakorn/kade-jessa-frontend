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

//batch
const getDates = async (ID) => {
  const data = await fetch(PUBLIC_ENDPOINT + "/products/id/" + ID).then((res) =>
    res.json()
  );
  return data;
};

const ManyData: CartType[] = await Promise.all(
  Cart.get().map(async (item) => getDates(item.ID))
);

const SumPrice = Cart.get().reduce((prev, curr) => {
  const sumCurr = curr.Price * curr.items;
  return prev + sumCurr;
}, 0);

export default function CartModule() {
  return (
    <div>
      {ManyData.map((item, key) => {
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
              </div>
            </div>
            <div>รวม : {SumPrice} บาท</div>
          </div>
        );
      })}

      <a href="/checkout">Checkout</a>
    </div>
  );
}
