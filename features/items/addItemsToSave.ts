"use server";

import { getSaveAndItems } from "@/features/getSaveAndItems";
import prisma from "@/lib/prisma";

export async function addItemsToSave({
  saveName,
  items,
}: {
  saveName: string;
  items: string[];
}) {
  const { save, items: itemsToAdd } = await getSaveAndItems(saveName, items);

  const data = itemsToAdd.map((item) => ({
    saveId: save.id,
    itemId: item.id,
    quantity: 10,
  }));
  await prisma.saveItemLink.createMany({
    data,
  });
}
