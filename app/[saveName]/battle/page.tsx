"use server";

import { ProgressBar } from "@/components/ProgressBar";
import SetBattle, { Difficulty } from "@/components/SetBattle";
import { getSave } from "@/features/getSave";
import Image from "next/image";

export type PokemonListType = {
  id: number;
  name: string;
  type: string[];
  total_base_stats: number;
};

export default async function Battle({
  params,
  searchParams,
}: {
  params: { saveName: string };
  searchParams?: { difficulty?: Difficulty };
}) {
  const save = await getSave();
  const pkmnArray = save[0].pokemons;

  const currentPkmn = pkmnArray[pkmnArray.length - 1];

  const isDifficultySet = searchParams?.difficulty;

  if (isDifficultySet) {
    return <div>yay</div>;
  }

  return (
    <main className="flex flex-col  items-center h-full gap-10 ">
      <section className="flex flex-col items-center ">
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${currentPkmn.pokemon.pokedexNbr}.png`}
          alt={currentPkmn.pokemon.name}
          width={150}
          height={150}
        />
        <ProgressBar current={currentPkmn.hpCurrent} max={currentPkmn.hpBase}>
          PV
        </ProgressBar>
      </section>
      <SetBattle playersPokemonName={currentPkmn.pokemon.name} />
    </main>
  );
}
