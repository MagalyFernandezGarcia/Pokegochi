"use server";

import prisma from "@/lib/prisma";

export async function addPokemonToSave(
  saveName: string,
  pokemonName: string,
  pv: number
) {
  const pokemon = await prisma.pokemon.upsert({
    where: {
      name: pokemonName,
    },
    update: {},
    create: {
      name: pokemonName,
    },
  });

  const saveId = await prisma.save.findFirst({
    where: {
      userNames: {
        some: {
          name: saveName,
        },
      },
    },
    select: {
      id: true,
    },
  });
  if (!saveId) {
    throw new Error("Save not found");
  }
  await prisma.savePokemonLink.create({
    data: {
      saveId: saveId.id,
      pokemonId: pokemon.id,
      hpBase: pv,
      hpCurrent: pv,
    },
  });
}
