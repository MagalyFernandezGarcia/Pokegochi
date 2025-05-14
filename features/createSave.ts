"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { findUser } from "./findUser";

export async function createSave( name: string) {
  const user = await findUser();
  const mail = user.userMail;

  const dubble = await prisma.userName.findFirst({
    where: {
      name: name,
      save: {
        userMail: mail,
      },
    },
  });

 if(!dubble){await prisma.save.upsert({
    where: {
      userMail: mail,
    },
    update: {
      userNames: {
        create: {
          name: name,
        },
      },
    },
    create: {
      userMail: mail,
      playerLevel: 0,
      playerXp: 0,
      money: 0,
      userNames: {
        create: {
          name: name,
        },
      },
    },
  });}
  

  

  revalidatePath("/");
}
