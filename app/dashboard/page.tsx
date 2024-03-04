import NavBar from "./_components/NavBar";
import HeroRight from "./_components/HeroRight";
import HeroTopBar from "./_components/HeroTopBar";
import { currentUser } from "@clerk/nextjs";
import prisma from "@/utils/db";

async function DashboardPage() {
  // const user = await currentUser();
  // const match = await prisma.user.findUnique({
  //   where: {
  //     clerkId: user?.id,
  //   },
  // });

  // if (!match) {
  //   await prisma.user.create({
  //     data: {
  //       clerkId: user?.id!,
  //       email: user?.emailAddresses[0].emailAddress!,
  //     },
  //   });
  // }

  return (
    <div className="flex">
      <NavBar />
      <div className="w-[100%] px-16 py-8 space-y-8">
        <HeroTopBar />
        <HeroRight />
      </div>
    </div>
  );
}

export default DashboardPage;
