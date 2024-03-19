import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Coins } from "lucide-react";

const UserTokens = ({ tokens }: { tokens: number }) => {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger>
          <Card className="flex items-center border-2 justify-center py-2 px-4 space-x-2 rounded-full">
            <Coins className="text-yellow-400" />
            <h1>{tokens}</h1>
          </Card>
        </TooltipTrigger>
        <TooltipContent className="m-2">
          <p>You have {tokens} tokens left</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default UserTokens;
