import { UserButton } from "@clerk/nextjs";
import SpeechAnimation from "./create/[id]/speech/_components/SpeechAnimation";
import AvatarAnimation from "./create/[id]/avatar/_components/AvatarAnimation";
import VideoAnimation from "./create/[id]/video/_components/VideoAnimation";

export default async function Home() {
  return (
    <div>
      Landing Page
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
