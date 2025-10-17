import { Difficulty } from "@/components/SetBattle";
import { pokemonList } from "@/lib/pokemonList";

export function fightRange(playersPokemonName: string, difficulty: Difficulty) {
  const upperCaseName =
    playersPokemonName.charAt(0).toUpperCase() + playersPokemonName.slice(1);
  const playerPokemonStats = pokemonList.find(
    (pokemon) => pokemon.name === upperCaseName
  );

  if (!playerPokemonStats) {
    throw new Error("Pokemon not found");
  }

  const statsRange = {
    easy: {
      min: playerPokemonStats.total_base_stats - 50,
      max: playerPokemonStats.total_base_stats + 10,
    },
    medium: {
      min: playerPokemonStats.total_base_stats - 10,
      max: playerPokemonStats.total_base_stats + 50,
    },
    hard: {
      min: playerPokemonStats.total_base_stats - 10,
      max: playerPokemonStats.total_base_stats + 100,
    },
  };

  const ennemiesArray = pokemonList.filter((pokemon) => {
    return (
      pokemon.total_base_stats >= statsRange[difficulty].min &&
      pokemon.total_base_stats <= statsRange[difficulty].max
    );
  });

  return ennemiesArray;
}
