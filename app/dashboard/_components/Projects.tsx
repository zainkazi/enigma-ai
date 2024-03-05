import { getUserByClerkId } from "@/utils/getUserByClerkId";
import prisma from "@/utils/db";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Project } from "@prisma/client";
import { Trash2 } from "lucide-react";

const getProjects = async () => {
  const user = await getUserByClerkId();

  const projects = await prisma.project.findMany({
    where: {
      userId: user.id,
    },
  });
  return projects;
};

async function Projects() {
  const projects = await getProjects();

  if (projects.length === 0) return <h1>No projects yet</h1>;

  return (
    <section>
      <div className="space-y-2">
        <div className="w-full h-[1px] bg-zinc-600" />
        <h1 className="text-lg py-6 font-semibold">Your Projects</h1>
      </div>
      <div>
        <div className="grid grid-cols-3 gap-8">
          {projects.map((project: Project) => (
            <Link href={`/create/${project.id}/avatar`} key={project.id}>
              <Card className="hover:bg-slate-900 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{project.name}</CardTitle>
                    <Trash2 color="red  " className="transition-colors" />
                  </div>
                  <CardDescription>
                    {project.createdAt.toDateString()}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    {project.ethnicity} {project.gender} with{" "}
                    {project.hairColor} hair
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
