import { Card } from "@/components/ui/card";
import { PropsWithChildren } from "react";
import NavBar from "./_components/NavBar";

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="grid grid-cols-5">
      <Card className="col-span-1 h-screen px-4 py-6  bg-primary-foreground">
        <NavBar />
      </Card>
      <div className="col-span-4 space-y-8 p-8">{children}</div>
    </div>
  );
};

export default DashboardLayout;
