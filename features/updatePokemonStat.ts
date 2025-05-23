"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { getSave } from "./getSave";

export async function updatePokemonStat(
  pokemonName: string,
  stat: string,
  value: number,
  saveName: string
) {
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

  const pokemon = await prisma.pokemon.findFirst({
    where: {
      name: pokemonName,
    },
    select: {
      id: true,
    },
  });

  if (!pokemon) {
    throw new Error(`Pokemon not found: ${pokemonName}`);
  }

  await prisma.savePokemonLink.updateMany({
    where: {
      saveId: save.id,
      pokemonId: pokemon.id,
    },
    data: {
      [stat]: {
        increment: value,
      },
    },
  });
  revalidatePath(`/${saveName}/main-screen`);
}
