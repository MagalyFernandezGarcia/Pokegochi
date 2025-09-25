"use server";

import { findUser } from "@/features/findUser";
import prisma from "@/lib/prisma";

export async function getSaveItems() {
  const user = await findUser();
  return prisma.saveItemLink.findMany({
    where: {
      saveId: user?.id,
    },
  });
}
