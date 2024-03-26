import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const GoBack = () => {
  return (
    <Link
      href="/dashboard"
      className="flex text-xl items-center hover:font-semibold transition-all"
    >
      <ArrowLeft className="mr-2 w-12 h-12" />
    </Link>
  );
};

export default GoBack;
