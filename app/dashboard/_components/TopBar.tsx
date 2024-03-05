"use client";

import { Card } from "@/components/ui/card";
import { UserButton } from "@clerk/nextjs";
import { Coins } from "lucide-react";
import React, { Suspense, useState } from "react";

function TopBar() {
  const [userTokens, setUserTokens] = useState(3000);

  return (
    <section className="flex justify-end">
      <div className="flex space-x-4">
        <Card className="flex items-center border-2 justify-center py-2 px-4 space-x-2 rounded-full">
          <Coins color="yellow" />
          <h1>{userTokens}</h1>
        </Card>
        <div className="flex items-center justify-center space-x-2">
          <Suspense fallback={<div>Loading...</div>}>
            <UserButton />
          </Suspense>
        </div>
      </div>
    </section>
  );
}

export default TopBar;
