"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { deleteProject } from "@/utils/actions";
import { Loader2, Trash2 } from "lucide-react";
import { useState } from "react";

const DeleteAlert = ({ id }: { id: string }) => {
  const [deleting, setDeleting] = useState(false);

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        e.nativeEvent.preventDefault();
      }}
    >
      <AlertDialog>
        <AlertDialogTrigger>
          <Trash2 className="text-red-600 hover:text-red-700 transition-colors" />
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              project
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <Button
              variant="destructive"
              onClick={async () => {
                setDeleting(true);
                await deleteProject(id);
                setDeleting(false);
              }}
              disabled={deleting}
            >
              {deleting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {deleting ? "Deleting" : "Delete"}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default DeleteAlert;
