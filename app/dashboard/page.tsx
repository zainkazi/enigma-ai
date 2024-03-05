import NavBar from "./_components/NavBar";
import Projects from "./_components/Projects";
import TopBar from "./_components/TopBar";
import { currentUser } from "@clerk/nextjs";
import prisma from "@/utils/db";
import { Card } from "@/components/ui/card";

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
    <div className="grid grid-cols-5">
      <Card className="col-span-1 h-screen px-4 py-10">
        <NavBar />
      </Card>
      <div className="col-span-4 px-16 py-8 space-y-8">
        <TopBar />
        <Projects />
      </div>
    </div>
  );
}

export default DashboardPage;
