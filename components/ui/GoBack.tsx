import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const GoBack = () => {
  return (
    <div className="flex">
      <Link href="/dashboard">
        <ArrowLeft className="mr-2 w-12 h-12 hover:scale-125 transition-transform" />
      </Link>
    </div>
  );
};

export default GoBack;
