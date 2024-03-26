import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const GoBack = () => {
  return (
    <Link href="/dashboard">
      <ArrowLeft className="mr-2 w-12 h-12" />
    </Link>
  );
};

export default GoBack;
