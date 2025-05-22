import { ProgressBar } from "@/components/ProgressBar";
import { getPokemon } from "@/features/getPokemons";
import { getSave } from "@/features/getSave";
import { Pokemon } from "@/types/pokemon";
import { Angry, Annoyed, Frown, Smile } from "lucide-react";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function MainScreen({
  params: paramsPromise,
}: {
  params: Promise<{ saveName: string }>;
}) {
  const params = await paramsPromise;
  const save = await getSave();
  const pkmnArray = save[0].pokemons;
  const currentPkmn = pkmnArray[pkmnArray.length - 1].pokemon;
  if (pkmnArray.length === 0)
    return redirect(`/${params.saveName}/start-screen`);
  const lastPkmn: Pokemon = await getPokemon({
    pkmName: currentPkmn.name,
  });
  const saveObjects = save[0].objects;

  const happyMeter = () => {
    const size = 40;
    const totalStats =
      currentPkmn.happiness +
      currentPkmn.hunger +
      currentPkmn.pv +
      currentPkmn.cleanliness;
    const average = totalStats / 4;
    if (average < 10) return <Angry size={size} color="red" />;
    if (average < 30) return <Frown size={size} color="orange" />;
    if (average < 70) return <Annoyed size={size} color="yellow" />;
    return <Smile size={size} color="green" />;
  };

  return (
    <main className="flex flex-col  items-center h-full ">
      <section className="flex gap-4 self-start pt-4 pl-4">
        <div>Player : {params.saveName}</div>{" "}
        <div> Level : {save?.[0].playerLevel}</div>
      </section>

      <section className="flex flex-col justify-center items-center h-1/3 ">
        <div className="flex gap-4">
          <div>{lastPkmn.name}</div>
          <div>Level : {currentPkmn.level}</div>
        </div>
        <div className="flex gap-4 items-center">
          <Image
            src={lastPkmn.sprites.front_default}
            alt={lastPkmn.name}
            width={200}
            height={200}
          />
          {happyMeter()}
        </div>
      </section>
      <section className="flex gap-4">
        <ProgressBar current={currentPkmn.pv} max={lastPkmn.stats[0].base_stat}>
          HP
        </ProgressBar>
        <ProgressBar current={currentPkmn.happiness} max={100}>
          Happiness
        </ProgressBar>
        <ProgressBar current={currentPkmn.hunger} max={100}>
          Hunger
        </ProgressBar>
        <ProgressBar current={currentPkmn.cleanliness} max={100}>
          Cleanliness
        </ProgressBar>
      </section>
      <section className="flex gap-4">
        {saveObjects.map((object) => {
          return (
            <div key={object.object.id}>
              <Image
                src={object.object.imgUrl}
                alt={object.object.name}
                width={100}
                height={100}
              />
            </div>
          );
        })}
      </section>
    </main>
  );
}
