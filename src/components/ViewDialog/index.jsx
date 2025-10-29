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

import PreviewContent from "@/components/PreviewContent";

export default function ViewDialog({ openView, onOpenChange ,contentBlog}) {
//tạo state contentBlog
  return (
    <Dialog open={openView} onOpenChange={onOpenChange}>
      <DialogContent className="bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-full lg:max-w-3xl max-h-[80vh] overflow-auto">
        <DialogDescription className=" w-full text-card-foreground gap-6 justify-between rounded-xl border-none">
          <PreviewContent contentBlog={contentBlog} />
        </DialogDescription>
      </DialogContent>
    </Dialog>
  )
};
