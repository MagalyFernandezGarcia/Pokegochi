"use client";

import { Button } from "./ui/button";
import { useRouter } from "next/navigation";


export default function NewSaveBtn() {
    const router = useRouter()
   
    return <Button onClick={()=>router.push(`/newSave`)}>New save</Button>
}