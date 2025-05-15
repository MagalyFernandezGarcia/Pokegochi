"use server";

import { auth } from "@/auth";
import prisma from "@/lib/prisma";

export async function getSave() {
  const session = await auth();
  const mail = session?.user?.email;
  if (mail) {
    const saves = await prisma.save.findMany({
      where: {
        userMail: mail,
      },
      include: {
        userNames: true,
      },
    });
    console.log(saves);
    

    return saves;
  }
  // return [];
}
