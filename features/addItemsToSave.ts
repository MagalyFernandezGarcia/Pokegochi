"use server";

import prisma from "@/lib/prisma";
import { getSaveAndItems } from "./getSaveAndItems";

export async function addItemsToSave({
  saveName,
  items,
}: {
  saveName: string;
  items: string[];
}) {
  const { save, items: itemsToAdd } = await getSaveAndItems(saveName, items);

  const data = itemsToAdd.map((obj) => ({
    saveId: save.id,
    itemId: obj.id,
    quantity: 10,
  }));
  await prisma.saveItemLink.createMany({
    data,
  });
}
