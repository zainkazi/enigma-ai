import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import GoBack from "@/components/ui/GoBack";
import { Check } from "lucide-react";
import { getUserByClerkId } from "@/utils/getUserByClerkId";
import ChooseFreeButton from "./_components/ChooseFreeButton";
import ChoosePremiumButton from "./_components/ChoosePremiumButton";
import { Badge } from "@/components/ui/badge";

const SubscriptionPage = async () => {
  const user = await getUserByClerkId();

  return (
    <div className="px-20 pt-8">
      <GoBack />
      <h1 className="my-6 text-4xl text-center">Your Subscription</h1>
      <div className="md:grid grid-cols-3 gap-8">
        <Card>
          <CardHeader className="space-y-6">
            <CardTitle className="flex items-center justify-between gap-2">
              Free {user.plan == "FREE" && <Badge>Current</Badge>}
            </CardTitle>
            <CardDescription className="text-3xl">$0/month</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-base">
            <div className="flex gap-2 opacity-60">
              <Check />
              <p>100 tokens</p>
            </div>
            <div className="flex gap-1 opacity-60">
              <Check />
              <p>1 project</p>
            </div>
            <div className="flex gap-1 opacity-60">
              <Check />
              <p>480p video exports</p>
            </div>
            <div className="flex gap-1 opacity-60">
              <Check />
              <p>Watermark</p>
            </div>
          </CardContent>
          <CardFooter>
            <ChooseFreeButton planName={user.plan} />
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="space-y-6">
            <CardTitle className="flex items-center justify-between gap-2">
              Premium {user.plan == "PREMIUM" && <Badge>Current</Badge>}
            </CardTitle>
            <CardDescription className="text-3xl">$20/month</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-base">
            <div className="flex gap-2 opacity-60">
              <Check />
              <p>200 tokens/month</p>
            </div>
            <div className="flex gap-1 opacity-60">
              <Check />
              <p>5 projects</p>
            </div>
            <div className="flex gap-1 opacity-60">
              <Check />
              <p>1080p Super-resolution</p>
            </div>
            <div className="flex gap-1 opacity-60">
              <Check />
              <p>No Watermark</p>
            </div>
          </CardContent>
          <CardFooter>
            <ChoosePremiumButton planName={user.plan} />
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="space-y-6">
            <CardTitle>Enterprice</CardTitle>
            <CardDescription className="text-3xl">$100/month</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-base">
            <div className="flex gap-2 opacity-60">
              <Check />
              <p>Unlimited tokens</p>
            </div>
            <div className="flex gap-1 opacity-60">
              <Check />
              <p>Unlimimted project</p>
            </div>
            <div className="flex gap-1 opacity-60">
              <Check />
              <p>4K Super-resolution</p>
            </div>
            <div className="flex gap-1 opacity-60">
              <Check />
              <p>No Watermark</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" disabled>
              Choose
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default SubscriptionPage;
