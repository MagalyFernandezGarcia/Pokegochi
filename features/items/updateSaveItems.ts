"use server";

import { getSave } from "@/features/getSave";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function updateSaveItems(
  saveName: string,
  countitems: Record<string, { id: number; count: number }>
) {
  const save = await getSave();
  const saveId = save[0].id;

  for (const [name, count] of Object.entries(countitems)) {
    await prisma.saveItemLink.updateMany({
      where: { saveId: saveId, itemId: count.id },
      data: {
        dbStock: {
          increment: count.count,
        },
      },
    });
  }

  revalidatePath(`/${saveName}/main-screen`);
}
