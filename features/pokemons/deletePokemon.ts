"use server";

import prisma from "@/lib/prisma";

export async function deletePokemon(saveID: number, pokemonID: number) {
  await prisma.savePokemonLink.delete({
    where: {
      saveId_pokemonId: {
        pokemonId: pokemonID,
        saveId: saveID,
      },
    },
  });
}
