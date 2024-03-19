import { UserProfile } from "@clerk/nextjs";
import { ArrowLeft, MoveLeft } from "lucide-react";
import Link from "next/link";

const UserProfilePage = () => (
  <div className="pl-20 pt-8">
    <Link href="/dashboard" className="flex text-xl items-center">
      <ArrowLeft className="mr-2" />
      Go back
    </Link>
    <div className="flex justify-center items-center p-8">
      <UserProfile path="/user-profile" routing="path" />
    </div>
  </div>
);

export default UserProfilePage;
