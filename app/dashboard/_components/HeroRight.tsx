import { getUserByClerkId } from "@/utils/getUserByClerkId";
import prisma from "@/utils/db";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const getProjects = async () => {
  const user = await getUserByClerkId();

  const projects = await prisma.project.findMany({
    where: {
      userId: user.id,
    },
  });
  return projects;
};

async function HeroRight() {
  const projects = await getProjects();

  if (projects.length === 0) return <h1>No projects yet</h1>;

  return (
    <section>
      <div className="space-y-2">
        <div className="w-full h-[1px] bg-zinc-600" />
        <h1 className="text-lg py-6 font-semibold">Recent</h1>
      </div>
      <div>
        <div className="grid grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link href={`/create/${project.id}/avatar`} key={project.id}>
              <Card>
                <CardHeader>
                  <CardTitle>{project.id}</CardTitle>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroRight;
