"use server";

import { addPokemonToSave } from "@/features/pokemons/addPokemon";
import { getPokemon } from "@/features/pokemons/getPokemons";
import { hasEvolution } from "@/features/pokemons/hasEvolution";

import prisma from "@/lib/prisma";
import { Pokemon } from "@/types/pokemon";

export async function lvlUpPokemon(
  saveID: number,
  pokemonID: number,
  pokemonName: string,
  saveName: string
) {
  const updateLvl = await prisma.savePokemonLink.update({
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

  const evolution = await hasEvolution(pokemonName);
  console.log(evolution);

  if (evolution && updateLvl.level === evolution.level) {
    const newPokemon: Pokemon = await getPokemon({ pkmName: evolution.name });
    const evolvedPokemon = await addPokemonToSave(
      saveName,
      newPokemon.name,
      newPokemon.stats[0].base_stat
    );

    return {
      type: "evolved",
      pokemon: evolvedPokemon,
      message: `Your ${pokemonName} evolved into ${evolution.name}!`,
    };
  }
  return {
    type: "lvlUp",
    pokemon: updateLvl,
    message: `Your ${pokemonName} leveled up!`,
  };
}
