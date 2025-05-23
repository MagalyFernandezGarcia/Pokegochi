"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { getSaveAndItems } from "./getSaveAndItems";

export async function withdrawAUnit(saveName: string, itemNames: string[]) {
  const { save, items } = await getSaveAndItems(saveName, itemNames);
  for (const obj of items) {
    await prisma.saveItemLink.updateMany({
      where: {
        saveId: save.id,
        itemId: obj.id,
      },
      data: {
        quantity: {
          decrement: 1,
        },
      },
    });
  }
  revalidatePath(`/${saveName}/main-screen`);
}
