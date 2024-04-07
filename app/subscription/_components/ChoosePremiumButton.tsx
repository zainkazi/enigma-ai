"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const ChoosePremiumButton = ({ planName }: { planName: string }) => {
  const router = useRouter();
  const handlePlanChange = async () => {
    router.push("/subscribe");
  };

  return (
    <Button
      className="w-full"
      disabled={planName == "PREMIUM"}
      onClick={handlePlanChange}
    >
      {planName == "PREMIUM" ? "Current" : "Choose"}
    </Button>
  );
};

export default ChoosePremiumButton;
