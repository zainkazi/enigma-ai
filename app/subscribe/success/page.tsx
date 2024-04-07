import { notFound } from "next/navigation";
import Stripe from "stripe";
import prisma from "@/utils/db";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BadgeCheck } from "lucide-react";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

const SubscriptionSuccessPage = async ({
  searchParams,
}: {
  searchParams: { payment_intent: string };
}) => {
  const paymentIntent = await stripe.paymentIntents.retrieve(
    searchParams.payment_intent
  );

  if (paymentIntent.metadata.userId == null) return notFound();

  const user = await prisma.user.findUnique({
    where: {
      id: paymentIntent.metadata.userId,
    },
  });

  if (user == null) return notFound();

  // Add tokens to user's account

  if (paymentIntent.status != "succeeded")
    return (
      <div>
        <h1>Could not process payment</h1>
        <Link href="/subscribe">
          <Button>Try Again</Button>
        </Link>
      </div>
    );

  const updatedUser = await prisma.user.update({
    where: {
      id: paymentIntent.metadata.userId,
    },
    data: {
      plan: "PREMIUM",
      tokens: {
        increment: 200,
      },
    },
  });

  if (paymentIntent.status == "succeeded")
    return (
      <div className="h-screen flex items-center justify-center">
        <Card>
          <CardHeader>
            <CardTitle>
              <BadgeCheck className="text-green-500 w-12 h-12" />
            </CardTitle>
            <CardDescription className="text-2xl mt-2">
              Payment Succeeded!
            </CardDescription>
          </CardHeader>
          <CardContent>
            Thank you for subscribing to the Premium plan.
          </CardContent>
          <CardFooter className="text-center w-full">
            <Link href="/dashboard" className="w-full">
              <Button className="w-full">Go to Dashboard</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    );
};

export default SubscriptionSuccessPage;
