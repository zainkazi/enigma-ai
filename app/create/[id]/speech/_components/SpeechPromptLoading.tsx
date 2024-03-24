import { Skeleton } from "@/components/ui/skeleton";

const SpeechPromptLoading = () => {
  return (
    <div className="space-y-6">
      <div className="flex gap-24">
        <div>
          <h1 className=" text-lg font-medium py-2">Gender</h1>
          <Skeleton className="h-12 w-52 rounded-full" />
        </div>
        <div>
          <h1 className=" text-lg font-medium py-2">Speed</h1>
          <Skeleton className="h-12 w-80 rounded-full" />
        </div>
      </div>
      <div>
        <h1 className=" text-lg font-medium py-2">Speech</h1>
        <Skeleton className="h-56 w-full" />
      </div>
      <div className="flex justify-end gap-4">
        <Skeleton className="h-10 w-28" />
        <Skeleton className="h-10 w-40" />
      </div>
    </div>
  );
};

export default SpeechPromptLoading;
