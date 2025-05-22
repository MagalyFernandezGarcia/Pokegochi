"use server";

import prisma from "@/lib/prisma";

export async function addObjectsToSave({
  saveName,
  objects,
}: {
  saveName: string;
  objects: string[];
}) {
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

  const objectsToAdd = await prisma.object.findMany({
    where: {
      name: {
        in: objects,
      },
    },
  });
  if (!objectsToAdd.length) {
    throw new Error("No matching objects found.");
  }

  const data = objectsToAdd.map((obj) => ({
    saveId: save.id,
    objectId: obj.id,
  }));
  await prisma.saveObjectLink.createMany({
    data,
  });
}
