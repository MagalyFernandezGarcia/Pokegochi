"use server";

import { findUser } from "@/features/findUser";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function removeUnitFromShop(
  saveName: string,
  itemsBuy: Record<string, { id: number; count: number }>
) {
  const user = await findUser();

  for (const [name, count] of Object.entries(itemsBuy)) {
    await prisma.saveItemLink.updateMany({
      where: { saveId: user?.id, itemId: count.id },
      data: {
        shopStock: {
          decrement: count.count,
        },
      },
    });
  }

  revalidatePath(`/${saveName}/shop`);
}
