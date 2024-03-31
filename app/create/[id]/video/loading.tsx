import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import VideoAnimation from "./_components/VideoAnimation";

const VideoPageLoading = () => {
  return (
    <div className="w-[100%] px-16 py-8 mb-20 space-y-16 flex gap-20 h-screen">
      <Card className="h-screen w-full flex items-center justify-center">
        <VideoAnimation />
      </Card>

      <div className=" rounded-xl text-center p-8 max-w-sm mx-auto flex flex-col justify-center">
        <div className="text-2xl font-bold mb-2">
          Your video is being generated.
        </div>
        <p className=" my-8 text-xl">Be patient 🙂</p>
      </div>
    </div>
  );
};

export default VideoPageLoading;
