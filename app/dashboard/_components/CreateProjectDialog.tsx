"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createProject } from "@/utils/actions";
import { Loader2, PlusCircle } from "lucide-react";
import { useState } from "react";

const CreateProjectDialog = () => {
  const [projectName, setProjectName] = useState("");
  const [isCreating, setCreating] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full">
          <PlusCircle className="mr-2 w-4" /> New Project
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create a new project</DialogTitle>
          <DialogDescription>
            Give a cool name to your project
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-4 items-center gap-4 py-4">
          <Label htmlFor="name" className="text-right">
            Name
          </Label>
          <Input
            id="name"
            onChange={(e) => setProjectName(e.target.value)}
            placeholder="My Cool Project"
            className="col-span-3"
            value={projectName}
          />
        </div>
        <DialogFooter>
          <Button
            onClick={async () => {
              setCreating(true);
              await createProject(projectName);
              setCreating(false);
            }}
            className="w-full"
            disabled={isCreating}
          >
            {isCreating ? "Creating" : "Create"}
            {isCreating && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateProjectDialog;
