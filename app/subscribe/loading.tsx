import { Skeleton } from "@/components/ui/skeleton";

const SubscribeLoadingPage = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <Skeleton className="w-[70vw] h-[50vh]" />
    </div>
  );
};

export default SubscribeLoadingPage;
