"use server";

import { getSave } from "@/features/getSave";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function updateMoney(saveName: string, amount: number) {
  const save = await getSave();
  await prisma.save.update({
    where: {
      id: save[0].id,
    },
    data: {
      money: {
        increment: amount,
      },
    },
  });
  revalidatePath(`/${saveName}/main-screen`);
}
