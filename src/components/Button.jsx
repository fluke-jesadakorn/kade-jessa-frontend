import { useStore } from '@nanostores/react'
import { IDs } from '../utils/store'
export default function ({ name, ID }) {
const IDList = useStore(IDs)
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
    IDs.set([...IDs.get(), ID])
  }

  return <button onClick={addCart}>Add to Card</button>;
}
