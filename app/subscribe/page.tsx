import { getUserByClerkId } from "@/utils/getUserByClerkId";
import Stripe from "stripe";
import CheckoutForm from "./_components/CheckoutForm";

async function SubscribePage() {
  const user = await getUserByClerkId();

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: 2000,
    currency: "USD",
    metadata: { userId: user.id },
  });

  if (paymentIntent.client_secret == null)
    return <h1>Could not create a payment intent</h1>;

  return (
    <div className="h-screen flex items-center justify-center">
      <CheckoutForm user={user} clientSecret={paymentIntent.client_secret} />
    </div>
  );
}

export default SubscribePage;
