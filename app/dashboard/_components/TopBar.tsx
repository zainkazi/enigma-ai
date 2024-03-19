import { Card } from "@/components/ui/card";
import { UserButton } from "@clerk/nextjs";
import { Coins } from "lucide-react";
import ThemeToggle from "@/app/ThemeToggle";
import UserTokens from "./UserTokens";
function TopBar() {
  const tokens = 3000;

  return (
    <section className="flex justify-end">
      <div className="flex space-x-4 items-center">
        <ThemeToggle />
        <UserTokens tokens={tokens} />
        <UserButton />
      </div>
    </section>
  );
}

export default TopBar;
