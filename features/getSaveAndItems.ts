"use server";

import prisma from "@/lib/prisma";

export async function getSaveAndItems(saveName: string, itemsNames: string[]) {
  const save = await prisma.save.findFirst({
    where: {
      userNames: {
        some: {
          name: saveName,
        },
      },
    },
  });

  if (!save) {
    throw new Error(`Save not found for user name: ${saveName}`);
  }

  const items = await prisma.item.findMany({
    where: {
      dbName: {
        in: itemsNames,
      },
    },
  });

  return { save, items };
}
