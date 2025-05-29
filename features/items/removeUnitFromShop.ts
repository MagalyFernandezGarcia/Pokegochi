"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function removeUnitFromShop(
  saveName: string,
  itemNames: string[],
  quantity: number[]
) {
  const updates = itemNames.map((name, index) => {
    return prisma.item.update({
      where: { name },
      data: {
        stock: {
          decrement: quantity[index],
        },
      },
    });
  });

  await Promise.all(updates);
  revalidatePath(`/${saveName}/shop`);
}
