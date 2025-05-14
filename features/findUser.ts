"use server"
import { auth } from "@/auth";
import prisma from "@/lib/prisma";



export async function findUser (){
    const session = await auth()
    console.log(session);
    
     const userMail = session?.user?.email;

  if (!userMail) {
    throw new Error("Missing userId");
  }
  const user = await prisma.save.findUnique({
    where: {
      userMail: userMail,
    },
  })
  
  return user
}