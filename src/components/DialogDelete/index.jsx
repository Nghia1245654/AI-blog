import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import Lottie from "lottie-react";
import Trash from "@/assets/trash.json";

export default function DialogDelete({ openDelete, onOpenChange, handleDelete }) {
// tạo state seletcedId để lưu id của bài viết cần xóa
  // tạo chức năng handleDelete để xóa bài viết
  
  
  return (
    <Dialog open={openDelete} onOpenChange={onOpenChange}>
      <DialogContent className="bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] rounded-lg border p-6 shadow-lg duration-200 sm:max-w-[425px] gap-0">
        <DialogHeader>
          <div className="flex justify-center items-center ">
      <Lottie className="w-35 h-35" animationData={Trash} loop={true} />
    </div>
          <DialogTitle className="text-lg leading-none font-semibold text-center">
            Confirm Delete
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-sm text-center">
            Are you sure you want to delete this item? This action cannot be
            undone.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="flex-col-reverse sm:flex-row sm:justify-end mt-8 grid grid-cols-2 gap-2">
          <DialogClose asChild>
            <Button
              onClick={closed}
              variant="outline"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[>svg]:px-3"
            >
              Cancel
            </Button>
          </DialogClose>
          <Button
            onClick={() => handleDelete()}
            type="submit"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 h-9 px-4 py-2 has-[>svg]:px-3"
        >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
};
