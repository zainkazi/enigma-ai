"use client";

import { Button } from "@/components/ui/button";
import { changePlan } from "@/utils/actions";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const ChooseFreeButton = ({ planName }: { planName: string }) => {
  const [isLoading, setLoading] = useState(false);
  const { toast } = useToast();

  const handlePlanChange = async () => {
    setLoading(true);
    await changePlan("FREE");
    setLoading(false);
    toast({
      title: "Subscription Changed",
      description: "You are on the Free plan now",
    });
  };

  return (
    <Button
      className="w-full"
      disabled={planName == "FREE" || isLoading}
      onClick={handlePlanChange}
    >
      {planName == "FREE" ? "Current" : "Choose"}
      {isLoading && <Loader2 className="animate-spin ml-2 w-4 h-4" />}
    </Button>
  );
};

export default ChooseFreeButton;
