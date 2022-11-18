import { IDs } from "../utils/store";
//batch
const PUBLIC_ENDPOINT = import.meta.env.PUBLIC_ENDPOINT;

const getDates = async (ID) => {
  const data = await fetch(PUBLIC_ENDPOINT + "/products/id/" + ID).then((res) =>
    res.json()
  );
  return data;
};

const ManyData: Cart[] = await Promise.all(
  IDs.get().map(async (item) => getDates(item))
);

type Cart = {
  ID: string;
  Title: string;
  Colors: string[];
  Description: string;
  Hashtags: string[];
  Images: string[];
};

export default function Cart() {
  return (
    <div>
      {ManyData.map((item, key) => {
        return (
          <div
            key={key}
            className="grid grid-cols-2 gap-8 place-content-center px-4 py-4"
          >
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
            </div>
          </div>
        );
      })}

      <a href="/checkout">Checkout</a>
    </div>
  );
}
