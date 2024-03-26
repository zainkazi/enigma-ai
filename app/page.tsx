import { UserButton } from "@clerk/nextjs";
import AvatarAnimation from "./create/[id]/avatar/_components/AvatarAnimation";

export default async function Home() {
  return (
    <div>
      Landing Page
      <UserButton afterSignOutUrl="/" />
      <AvatarAnimation />
    </div>
  );
}
