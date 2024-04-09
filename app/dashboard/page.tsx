import Projects from "./_components/Projects";
import TopBar from "./_components/TopBar";
import { currentUser } from "@clerk/nextjs";
import prisma from "@/utils/db";
import { cache } from "react";

async function DashboardPage() {
  await saveUser();

  return (
    <>
      <TopBar />
      <Projects />
    </>
  );
}

export default DashboardPage;

const saveUser = cache(async () => {
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
});
