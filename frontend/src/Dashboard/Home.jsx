import React from "react";
import NavBar from "../../../app/dashboard/components/NavBar";
import HeroRight from "../../../app/dashboard/components/HeroRight";
import HeroTopBar from "../../../app/dashboard/components/HeroTopBar";

function Home() {
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

export default Home;
