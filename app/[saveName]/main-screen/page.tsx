import { ProgressBar } from "@/components/ProgressBar";
import { getPokemonFromSave } from "@/features/getPokemonFromSave";
import { getPokemon } from "@/features/getPokemons";
import { getSave } from "@/features/getSave";
import { Pokemon } from "@/types/pokemon";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function MainScreen({
  params: paramsPromise,
}: {
  params: Promise<{ saveName: string }>;
}) {
  const params = await paramsPromise;
  const save = await getSave();
  const pkmnArray = await getPokemonFromSave(params.saveName);
  const currentPkmn = pkmnArray[pkmnArray.length - 1];
  if (pkmnArray.length === 0)
    return redirect(`/${params.saveName}/start-screen`);
  const lastPkmn: Pokemon = await getPokemon({
    pkmName: currentPkmn.name,
  });

  return (
    <main className="flex flex-col  items-center ">
      <section className="flex gap-4">
        <div>Player : {params.saveName}</div>{" "}
        <div> Level : {save?.[0].playerLevel}</div>
      </section>

      <section className="flex flex-col justify-center items-center h-full  ">
        <Image
          src={lastPkmn.sprites.front_default}
          alt={lastPkmn.name}
          width={200}
          height={200}
        />
        <div className="flex gap-4">
          <div>{lastPkmn.name}</div>
          <div>Level : {currentPkmn.level}</div>
        </div>
      </section>
      <section className="flex gap-4">
        <ProgressBar current={50} max={lastPkmn.stats[0].base_stat}>
          HP
        </ProgressBar>
        <ProgressBar current={currentPkmn.happiness} max={100}>
          Happiness
        </ProgressBar>
        <ProgressBar current={currentPkmn.hunger} max={100}>
          Hunger
        </ProgressBar>
        <ProgressBar current={currentPkmn.cleanliness} max={100}>
          Care
        </ProgressBar>
      </section>
    </main>
  );
}
