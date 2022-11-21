import { Cart } from "../utils/store";

type Product = {
  ID: string;
  Title: string;
  Colors: string[];
  Description: string;
  Hashtags: string[];
  Images: string[];
  Price: number;
  items?: number;
};

export default function ({ item }) {
  const { ID }: Product = item;
  // const sendMessage = async (ID) => {
  //   if (liff.isInClient()) {
  //     liff
  //       .sendMessages([
  //         {
  //           type: "text",
  //           text: "Buy " + ID,
  //         },
  //       ])
  //       .then(() => {
  //         console.log("message sent");
  //       })
  //       .catch((err) => {
  //         console.log("error", err);
  //       });
  //   }
  // };
  const addCart = () => {
    const checkDuplicateIndex = Cart.get().findIndex((product) => {
      return product.ID == ID;
    });
    if (checkDuplicateIndex != -1) {
      let duplicateField = Cart.get()[checkDuplicateIndex];
      const changedField = {
        ...duplicateField,
        items: duplicateField.items + 1,
      };
      let copyPrev = Cart.get();
      copyPrev[checkDuplicateIndex] = changedField;
      Cart.set(copyPrev);
    } else {
      Cart.set([...Cart.get(), item]);
    }
  };

  return <button onClick={addCart}>Add to Card</button>;
}
