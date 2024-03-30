import NavBar from "./_components/NavBar";
import Projects from "./_components/Projects";
import TopBar from "./_components/TopBar";
import { currentUser } from "@clerk/nextjs";
import prisma from "@/utils/db";
import { unstable_noStore as noStore } from "next/cache";

export const dynamic = "force-dynamic";

async function DashboardPage() {
  noStore();
  const user = await currentUser();
  const match = await prisma.user.findUnique({
    where: {
      clerkId: user?.id,
    },
  });

  if (!match) {
    await prisma.user.create({
      data: {
        clerkId: user?.id!,
        email: user?.emailAddresses[0].emailAddress!,
      },
    });
  }

  return (
    <>
      <TopBar />
      <Projects />
    </>
  );
}

export default DashboardPage;
