"use server";

import { getPokemon } from "@/features/pokemons/getPokemons";
import axios from "axios";

export async function hasEvolution(pokemonName: string) {
  const pokemon = await getPokemon({ pkmName: pokemonName });

  const species = await axios.get(pokemon.species.url);

  const evolutionChain = await axios.get(species.data.evolution_chain.url);

  if (evolutionChain.data.chain.evolves_to.length > 0) {
    return {
      name: evolutionChain.data.chain.evolves_to[0].species.name,
      url: evolutionChain.data.chain.evolves_to[0].species.url,
      level:
        evolutionChain.data.chain.evolves_to[0].evolution_details[0].min_level,
    };
  } else {
    return false;
  }
}
