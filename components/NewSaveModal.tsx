"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import NewSaveForm from "./NewSaveForm";

export default function NewSaveModal({ mail }: { mail: string }) {
  const [open, setOpen] = useState(true);
  const router = useRouter();
  const handleClose = () => setOpen(false);
  return (
    <Dialog defaultOpen={true} open={open} onOpenChange={() => router.back()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Welcome to Pokegochi !</DialogTitle>
        </DialogHeader>
        <NewSaveForm mail={mail} close={handleClose} />
      </DialogContent>
    </Dialog>
  );
}
