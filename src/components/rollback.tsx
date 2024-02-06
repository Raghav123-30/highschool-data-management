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
import { ReloadIcon } from "@radix-ui/react-icons";

const Rollback = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <div className="bg-primary hover:bg-primary/85 rounded-md px-4 py-2 text-white flex gap-2 items-center">
          <ReloadIcon className="w-5 h-5" />
          <p>Rollback</p>
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            {
              "This action cannot be undone. This will permanently delete today's attendance data followed by meal data and then investment data.You need to provide attendance again to get the latest updated data"
            }
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Rollback;
