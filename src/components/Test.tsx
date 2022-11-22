import { useStore } from "@nanostores/react";
import Stripe from "stripe";
const stripe = new Stripe(
  "pk_test_51LxZBODRieJApjECJGYOX0QZxod2Rre3rXIjsRNsAaPxKA4d4cQBTvjvrXRnihTGo2EInBgKqjjn1eNMnRVFQDHn00JlHfhBwJ",
  { apiVersion: "2022-11-15" }
);

const session = await stripe.checkout.sessions.create({
  line_items: [
    {
      price_data: {
        currency: "usd",
        product_data: {
          name: "T-shirt",
        },
        unit_amount: 2000,
      },
      quantity: 1,
    },
  ],
  mode: "payment",
  success_url: "http://localhost:4242/success",
  cancel_url: "http://localhost:4242/cancel",
});

export default function Test() {
  return <button>number is : </button>;
}
