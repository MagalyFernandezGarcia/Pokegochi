"use client"

import { useRouter } from "next/navigation"
import { Button } from "./ui/button"

export default function LoadSaveBtn({name}: {name: string}) {
    const router = useRouter()
    return <Button onClick={ ()=>router.push(`/${name}/main-screen`)} variant={"secondary"}>{name}</Button>
}