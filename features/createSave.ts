"use server"

import prisma from "@/lib/prisma";

export async function createSave( mail : string) {
    console.log(mail);
    
    
    return await prisma.save.create({data: {
        userMail: mail,
        userName: "Test",
        playerLevel: 1,
        money: 0
    }})
}