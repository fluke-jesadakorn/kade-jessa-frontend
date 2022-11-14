export default function ({ name, ID }) {
  const sendMessage = async (ID) => {
    if (liff.isInClient()) {
      liff
        .sendMessages([
          {
            type: "text",
            text: "Buy " + ID,
          },
        ])
        .then(() => {
          console.log("message sent");
        })
        .catch((err) => {
          console.log("error", err);
        });
    }
  };
  return <button onClick={() => sendMessage(ID)}>{name}</button>;
}
