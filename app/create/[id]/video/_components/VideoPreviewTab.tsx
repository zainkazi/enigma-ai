import { Card } from "@/components/ui/card";
import React from "react";

function VideoPreviewTab({ videoUrl }: { videoUrl: string }) {
  return (
    <Card className="h-screen w-full bg-secondary flex items-center justify-center">
      <div>
        <video className="w-full h-screen" controls>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </Card>
  );
}

export default VideoPreviewTab;
