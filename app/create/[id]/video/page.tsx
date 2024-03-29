import VideoBreadcrumb from "./VideoBreadcrumb";
import VideoHandleTab from "./_components/VIdeoHandleTab";
import VideoPreviewTab from "./_components/VideoPreviewTab";

function VideoPage({ params }: { params: { id: string } }) {
  const { id } = params;
  return (
    <div className="w-[100%] px-16 py-8 mb-20 space-y-16 flex gap-20 h-screen">
      <VideoPreviewTab />
      <VideoHandleTab />
    </div>
  );
}

export default VideoPage;
