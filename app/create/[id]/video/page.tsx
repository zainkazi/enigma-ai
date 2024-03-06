import VideoHandleTab from "./_components/VIdeoHandleTab";
import VideoPreviewTab from "./_components/VideoPreviewTab";

function VideoPage() {
  return (
    <div>
      <div className="w-[100%] px-16 py-8  space-y-16 h-screen">
        <div className="flex gap-20 h-full">
          <VideoPreviewTab />
          <VideoHandleTab />
        </div>
      </div>
    </div>
  );
}

export default VideoPage;
