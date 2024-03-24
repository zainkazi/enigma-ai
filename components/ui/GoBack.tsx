import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const GoBack = () => {
  return (
    <Link
      href="/dashboard"
      className="flex text-xl items-center hover:font-semibold transition-all"
    >
      <ArrowLeft className="mr-2" />
      Go back
    </Link>
  );
};

export default GoBack;
