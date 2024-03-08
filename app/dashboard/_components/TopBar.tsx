import { Card } from "@/components/ui/card";
import { UserButton } from "@clerk/nextjs";
import { Coins } from "lucide-react";
import ThemeToggle from "@/app/ThemeToggle";
function TopBar() {
  const userTokens = 3000;

  return (
    <section className="flex justify-end">
      <div className="flex space-x-4 items-center">
        <ThemeToggle />
        <Card className="flex items-center border-2 justify-center py-2 px-4 space-x-2 rounded-full">
          <Coins className="text-yellow-300" />
          <h1>{userTokens}</h1>
        </Card>
        <UserButton />
      </div>
    </section>
  );
}

export default TopBar;
