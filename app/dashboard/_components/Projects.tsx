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
import DeleteAlert from "./DeleteAlert";
import CreateProjectDialog from "./CreateProjectDialog";

const getProjects = async () => {
  const user = await getUserByClerkId();

  const projects = await prisma.project.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return projects;
};

async function Projects() {
  const projects = await getProjects();

  if (projects.length === 0)
    return (
      <Card className="border-2 h-[68vh] flex flex-col justify-center items-center">
        <div className=" opacity-40 text-center">
          <h1 className="text-2xl mb-2">No projects yet</h1>
          <p>Click 'New Project' to create one</p>
        </div>
      </Card>
    );

  return (
    <div className="grid grid-cols-3 gap-8">
      {projects.map((project: Project) => (
        <Link href={`/create/${project.id}/avatar`} key={project.id}>
          <Card className="h-48 hover:ring-2 ring-primary transition-all bg-primary-foreground">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{project.name}</CardTitle>
                <DeleteAlert id={project.id} />
              </div>
              <CardDescription>
                {project.createdAt.toDateString()}
              </CardDescription>
            </CardHeader>
            {project.ethnicity && (
              <CardContent>
                <p>
                  {project.ethnicity} {project.gender} with {project.hairColor}{" "}
                  hair
                </p>
              </CardContent>
            )}
          </Card>
        </Link>
      ))}
    </div>
  );
}

export default Projects;
