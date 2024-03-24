import { Button } from "@/components/ui/button";
import CreateProjectDialog from "./CreateProjectDialog";
import {
  FileQuestion,
  Info,
  LineChart,
  PanelsTopLeft,
  Settings,
} from "lucide-react";
import NavigationLink from "./NavigationLink";

const links = [
  // { title: "Projects", icon: <PanelsTopLeft />, path: "/projects" },
  // { title: "Analytics", icon: <LineChart />, path: "/analytics" },
  { title: "FAQs", icon: <FileQuestion />, path: "/faqs" },
  { title: "About Us", icon: <Info />, path: "/about-us" },
  { title: "Settings", icon: <Settings />, path: "/user-profile" },
];

function NavBar() {
  return (
    <section className="flex flex-col justify-between h-full w-full">
      <div className="space-y-4 w-full">
        <h1 className="text-center text-4xl">ENIGMA AI</h1>
        <CreateProjectDialog />
      </div>
      <div>
        {links.map((link) => (
          <NavigationLink
            key={link.title}
            title={link.title}
            icon={link.icon}
            path={link.path}
          />
        ))}
      </div>
    </section>
  );
}

export default NavBar;
