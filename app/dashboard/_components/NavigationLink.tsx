import { Button } from "@/components/ui/button";
import Link from "next/link";

const NavigationLink = ({
  title,
  icon,
  path,
}: {
  title: string;
  icon: React.ReactNode;
  path: string;
}) => {
  return (
    <Link href={path}>
      <Button variant="ghost" className="w-full justify-start">
        <span className="mr-2">{icon}</span>
        {title}
      </Button>
    </Link>
  );
};

export default NavigationLink;
