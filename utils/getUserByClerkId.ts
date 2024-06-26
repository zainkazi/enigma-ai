import { auth } from "@clerk/nextjs";
import prisma from "@/utils/db";

export const getUserByClerkId = async () => {
  const { userId } = auth();

  return await prisma.user.findUniqueOrThrow({
    where: {
      clerkId: userId!,
    },
  });
};
