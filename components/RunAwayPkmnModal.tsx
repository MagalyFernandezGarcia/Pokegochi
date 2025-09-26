"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";

export default function RunAwayPkmnModal({ saveName }: { saveName: string }) {
  const [open, setOpen] = useState(true);
  const router = useRouter();
  const handleClose = () => {
    setOpen(false);
    redirect(`/${saveName}/start-screen`);
  };
  return (
    <Dialog defaultOpen={true} open={open} onOpenChange={() => router.back()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Your Pokemon was too unhappy and ran away !</DialogTitle>
        </DialogHeader>
        <Button onClick={handleClose}>Close</Button>
      </DialogContent>
    </Dialog>
  );
}
