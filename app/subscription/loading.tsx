import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import GoBack from "@/components/ui/GoBack";
import { Skeleton } from "@/components/ui/skeleton";

const SubscriptionLoading = () => {
  return (
    <div className="px-20 pt-8">
      <GoBack />
      <h1 className="my-6 text-4xl text-center">Your Subscription</h1>
      <div className="md:grid grid-cols-3 gap-8">
        <Card>
          <CardHeader className="space-y-6">
            <CardTitle className="flex items-center justify-between gap-2">
              <Skeleton className="h-6 w-full" />
            </CardTitle>
            <CardDescription className="text-3xl">
              <Skeleton className="h-8 w-full" />
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-base">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
          </CardContent>
          <CardFooter>
            <Skeleton className="h-10 w-full" />
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="space-y-6">
            <CardTitle className="flex items-center justify-between gap-2">
              <Skeleton className="h-6 w-full" />
            </CardTitle>
            <CardDescription className="text-3xl">
              <Skeleton className="h-8 w-full" />
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-base">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
          </CardContent>
          <CardFooter>
            <Skeleton className="h-10 w-full" />
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="space-y-6">
            <CardTitle>
              <Skeleton className="h-6 w-full" />
            </CardTitle>
            <CardDescription className="text-3xl">
              <Skeleton className="h-8 w-full" />
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-base">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
          </CardContent>
          <CardFooter>
            <Skeleton className="h-10 w-full" />
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default SubscriptionLoading;
