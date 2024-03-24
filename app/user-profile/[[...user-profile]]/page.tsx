import GoBack from "@/components/ui/GoBack";
import { UserProfile } from "@clerk/nextjs";

const UserProfilePage = () => (
  <div className="px-20 pt-8">
    <GoBack />
    <div className="flex justify-center items-center p-8">
      <UserProfile path="/user-profile" routing="path" />
    </div>
  </div>
);

export default UserProfilePage;
