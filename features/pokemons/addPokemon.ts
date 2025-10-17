"use server";

import prisma from "@/lib/prisma";

export async function addPokemonToSave(
  saveName: string,
  pokemonName: string,
  pv: number,
  pokedexId?: number,
  currentLevel?: number,
  currentHappiness?: number,
  currentHunger?: number,
  currentCleanliness?: number
) {
  console.log("stats", {
    currentCleanliness,
    currentHappiness,
    currentHunger,
    currentLevel,
  });

  const pokemon = await prisma.pokemon.upsert({
    where: {
      name: pokemonName,
    },
    update: {},
    create: {
      name: pokemonName,
      pokedexNbr: pokedexId || 0,
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
      level: currentLevel || 100,
      happinessBase: currentHappiness || 100,
      hungerBase: currentHunger || 100,
      cleanlinessBase: currentCleanliness || 100,
    },
  });
  return pokemon;
}
