"use server";

import prisma from "@/lib/prisma";

export async function lvlUpPokemon(saveID: number, pokemonID: number) {
  await prisma.savePokemonLink.update({
    where: {
      saveId_pokemonId: {
        pokemonId: pokemonID,
        saveId: saveID,
      },
    },
    data: {
      level: {
        increment: 1,
      },
      hpCurrent: 50,
      happiness: 50,
      hunger: 50,
      cleanliness: 50,
    },
  });
}
