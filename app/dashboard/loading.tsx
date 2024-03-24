import { Skeleton } from "@/components/ui/skeleton";

const DashboardLoading = () => {
  const projects = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {/* Topbar */}
      <section className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Your Projects</h1>
        <div className="flex space-x-4 items-center">
          <Skeleton className="h-10 w-10 rounded-xl" />
          <Skeleton className="h-10 w-16 rounded-full" />
          <Skeleton className="h-10 w-10 rounded-full" />
        </div>
      </section>
      <div className="w-full h-[2px] bg-secondary mb-8" />

      {/* Projects */}
      <div className="grid grid-cols-3 gap-4">
        {projects.map((project) => (
          <Skeleton key={project} className="h-48 w-72" />
        ))}
      </div>
    </>
  );
};

export default DashboardLoading;
