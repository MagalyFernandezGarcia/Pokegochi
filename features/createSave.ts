"use server"

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";


export async function createSave( mail : string, name : string) {
    console.log("function");
    
     await prisma.save.create({data: {
        userMail: mail,
        userName: name,
        playerLevel: 1,
        money: 0
    }})
    revalidatePath("/")
}