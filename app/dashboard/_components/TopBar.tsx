import { UserButton } from "@clerk/nextjs";
import ThemeToggle from "@/app/ThemeToggle";
import UserTokens from "./UserTokens";
function TopBar() {
  return (
    <section className="flex justify-end">
      <div className="flex space-x-4 items-center">
        <ThemeToggle />
        <UserTokens />
        <UserButton />
      </div>
    </section>
  );
}

export default TopBar;
