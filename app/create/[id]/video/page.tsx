import axios from "axios";
import VideoHandleTab from "./_components/VIdeoHandleTab";
import VideoPreviewTab from "./_components/VideoPreviewTab";
import prisma from "@/utils/db";
import { unstable_noStore as noStore } from "next/cache";

export const dynamic = "force-dynamic";

async function VideoPage({ params }: { params: { id: string } }) {
  noStore();

  const { id } = params;
  let videoUrl;

  const project = await prisma.project.findUnique({
    where: {
      id: id,
    },
  });

  if (project?.updateVideo) {
    const updatedProject = await axios.post(
      process.env.VIDEO_SERVER_URL!,
      {
        projectId: project?.id,
        image: project?.avatarUrl,
        audio: project?.speechUrl,
      },
      {
        timeout: 600000,
      }
    );

    const changeUpdateVideo = await prisma.project.update({
      where: {
        id: id,
      },
      data: {
        updateVideo: false,
      },
    });

    videoUrl = updatedProject.data.data[0].videoUrl;

    console.log("New Video", videoUrl);
  } else {
    videoUrl = project?.videoUrl;
    console.log("Old Video", videoUrl);
  }

  return (
    <div className="w-[100%] px-16 py-8 mb-20 space-y-16 flex gap-20 h-screen">
      <VideoPreviewTab videoUrl={videoUrl} />
      <VideoHandleTab videoUrl={videoUrl} />
    </div>
  );
}

export default VideoPage;
