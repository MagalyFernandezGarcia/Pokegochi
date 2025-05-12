"use client";

import { createSave } from "@/features/createSave";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";


export default function NewSaveBtn({mail }: {mail: string}) {
    const router = useRouter()
   
    return <Button onClick={()=>router.push(`/newSave`)}>New save</Button>
}