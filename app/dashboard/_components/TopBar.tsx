import { UserButton } from "@clerk/nextjs";
import ThemeToggle from "@/app/ThemeToggle";
import UserTokens from "./UserTokens";
function TopBar() {
  return (
    <>
      <section className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Your Projects</h1>
        <div className="flex space-x-4 items-center">
          <ThemeToggle />
          <UserTokens />
          <UserButton afterSignOutUrl="/" />
        </div>
      </section>
      <div className="w-full h-[2px] bg-secondary mb-8" />
    </>
  );
}

export default TopBar;
