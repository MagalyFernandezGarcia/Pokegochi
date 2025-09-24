"use server";

import { getSave } from "@/features/getSave";
import { getSaveAndItems } from "@/features/getSaveAndItems";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function updateSaveItems(
  saveName: string,
  itemsName: any[],
  quantities: number[]
) {
  const save = await getSave();
  const saveId = save[0].id;
  const items = await prisma.item.findMany({
    where: {
      dbName: {
        in: itemsName,
      },
    },
  });

  const updates = items.map((item, index) => {
    return prisma.saveItemLink.update({
      where: {
        saveId_itemId: {
          saveId: saveId,
          itemId: item.id,
        },
      },
      data: {
        dbStock: {
          increment: quantities[index],
        },
      },
    });
  });
  await Promise.all(updates);
  revalidatePath(`/${saveName}/main-screen`);
}
