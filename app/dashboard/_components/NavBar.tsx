import { Button } from "@/components/ui/button";
import CreateProjectDialog from "./CreateProjectDialog";
import { Settings } from "lucide-react";
import Link from "next/link";

function NavBar() {
  return (
    <section className="flex flex-col justify-between h-full w-full">
      <div className="space-y-4 w-full">
        <h1 className="text-center text-4xl">ENIGMA AI</h1>
        <CreateProjectDialog />
      </div>
      <div>
        <Link href="/settings">
          <Button variant="ghost">
            <Settings className="mr-2 w-5" />
            Settings
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default NavBar;
