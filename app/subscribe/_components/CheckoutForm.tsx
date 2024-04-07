"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { User } from "@prisma/client";
import {
  Elements,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Loader2 } from "lucide-react";
import { FormEvent, useState } from "react";

type CheckoutFormProps = {
  user: User;
  clientSecret: string;
};

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

const CheckoutForm = ({ user, clientSecret }: CheckoutFormProps) => {
  return (
    <div className="max-w-3xl w-full mx-auto space-y-8">
      <Elements
        options={{ clientSecret, appearance: { theme: "night" } }}
        stripe={stripePromise}
      >
        <Form />
      </Elements>
    </div>
  );
};

export default CheckoutForm;

function Form() {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (stripe == null || elements == null) return;

    setLoading(true);

    stripe
      .confirmPayment({
        elements,
        confirmParams: {
          return_url: window.location.origin + "/subscribe/success",
        },
      })
      .then(({ error }) => {
        if (
          error.type == "card_error" ||
          error.type == "authentication_error"
        ) {
          setErrorMessage(error.message);
        } else {
          setErrorMessage("An unknown error occurred");
        }
      })
      .finally(() => setLoading(false));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>
          <CardTitle>Subscribe to the Premium Plan</CardTitle>
          {errorMessage && (
            <CardDescription className="text-destructive">
              {errorMessage}
            </CardDescription>
          )}
        </CardHeader>
        <CardContent>
          <PaymentElement />
        </CardContent>
        <CardFooter>
          <Button
            className="w-full"
            size="lg"
            disabled={stripe == null || elements == null || isLoading}
          >
            Subscribe - $20
            {isLoading && <Loader2 className="animate-spin ml-2 w-4 h-4" />}
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
