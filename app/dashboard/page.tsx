import React from "react";
import NavBar from "./_components/NavBar";
import HeroRight from "./_components/HeroRight";
import HeroTopBar from "./_components/HeroTopBar";

function DashboardPage() {
  return (
    <div className="flex">
      <NavBar />
      <div className="w-[100%] px-16 py-8 space-y-8">
        <HeroTopBar />
        <HeroRight />
      </div>
    </div>
  );
}

export default DashboardPage;
