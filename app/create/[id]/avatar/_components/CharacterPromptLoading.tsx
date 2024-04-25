import { Skeleton } from "@/components/ui/skeleton";

const CharacterPromptLoading = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-lg font-medium py-2">Model</h1>
        <Skeleton className="h-10 w-full" />
      </div>
      <div>
        <h1 className="text-lg font-medium py-2">Ethnicty</h1>
        <Skeleton className="h-10 w-full" />
      </div>
      <div>
        <h1 className="text-lg font-medium py-2">Age Group</h1>
        <Skeleton className="h-10 w-full" />
      </div>
      <div>
        <h1 className="text-lg font-medium py-2">Hair Color</h1>
        <Skeleton className="h-10 w-full" />
      </div>
      <div>
        <h1 className="text-lg font-medium py-2">Gender</h1>
        <Skeleton className="h-10 w-full" />
      </div>
      <div>
        <h1 className="text-lg font-medium py-2">Number of Characters</h1>
        <Skeleton className="h-10 w-full" />
      </div>
      <Skeleton className="h-10 w-full" />
    </div>
  );
};

export default CharacterPromptLoading;
