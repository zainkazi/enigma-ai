"use client";

import { Button } from "@/components/ui/button";
import { createProject } from "@/utils/actions";
import { Loader2 } from "lucide-react";
import { useState } from "react";

const CreateProject = () => {
  const [isCreating, setCreating] = useState(false);

  return (
    <Button
      onClick={async () => {
        setCreating(true);
        await createProject();
        setCreating(false);
      }}
      className="w-full"
      disabled={isCreating}
    >
      {isCreating ? "Creating" : "Create"}
      {isCreating && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
    </Button>
  );
};

export default CreateProject;
