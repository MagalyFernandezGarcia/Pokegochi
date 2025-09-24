"use server";

import prisma from "@/lib/prisma";

export async function addItems() {
  await prisma.item.createMany({
    data: [
      {
        dbName: "basicSponge",
      },
      {
        dbName: "basicToy",
      },
      {
        dbName: "basicFood",
      },
    ],
  });
}
