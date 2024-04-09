import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const SpeechLoading = () => {
  return (
    <Card className="p-4">
      <Skeleton className="h-20 w-full" />
    </Card>
  );
};

export default SpeechLoading;
