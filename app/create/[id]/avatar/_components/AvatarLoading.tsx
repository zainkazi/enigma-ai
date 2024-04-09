import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const AvatarLoading = () => {
  return (
    <Card className=" p-4 min-h-screen">
      <div className="grid grid-cols-3 grid-rows-2 gap-4">
        <Skeleton className="h-[265px] w-[265px]" />
      </div>
    </Card>
  );
};

export default AvatarLoading;
