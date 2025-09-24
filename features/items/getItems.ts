"use server";

import prisma from "@/lib/prisma";

export async function getItems() {
  return prisma.item.findMany({ orderBy: { dbName: "asc" } });
}
