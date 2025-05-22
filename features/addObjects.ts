"use server";

import prisma from "@/lib/prisma";

export async function addObjects() {
  await prisma.object.createMany({
    data: [
      {
        name: "Basic Sponge",
        imgUrl: "/sponge.png",
        description: "Basic sponge",
        price: 10,
        stock: 10,
        level: 0,
        stats: "+10 cleanliness",
      },
      {
        name: "Old Toy",
        imgUrl: "/catpole.png",
        description: "An old toy but still funny",
        price: 20,
        stock: 10,
        level: 0,
        stats: "+10 happiness",
      },
      {
        name: "little bag of food",
        imgUrl: "/food.png",
        description: "A little bag of food. The taste isn't too bad",
        price: 5,
        stock: 30,
        level: 0,
        stats: "+10 hunger",
      },
    ],
  });
}
