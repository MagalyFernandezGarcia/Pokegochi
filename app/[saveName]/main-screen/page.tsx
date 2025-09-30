import { ProgressBar } from "@/components/ProgressBar";
import RunAwayPkmnModal from "@/components/RunAwayPkmnModal";
import ToolButton from "@/components/ToolButton";
import { getPokemon } from "@/features/pokemons/getPokemons";
import { getSave } from "@/features/getSave";
import { Itemslist } from "@/lib/itemsList";
import { MergedItem } from "@/types/mergedItem";
import { Pokemon } from "@/types/pokemon";
import { Angry, Annoyed, Frown, Smile } from "lucide-react";
import Image from "next/image";
import { deletePokemon } from "@/features/pokemons/deletePokemon";
import { lvlUpPokemon } from "@/features/pokemons/lvlUpPokemon";
import LvlUpModal from "@/components/LvlUpModal";
import { hasEvolution } from "@/features/pokemons/hasEvolution";

export default async function MainScreen({
  params: paramsPromise,
}: {
  params: Promise<{ saveName: string }>;
}) {
  const params = await paramsPromise;
  const save = await getSave();
  const pkmnArray = save[0].pokemons;

  const currentPkmn = pkmnArray[pkmnArray.length - 1];

  if (pkmnArray.length === 0)
    return <RunAwayPkmnModal saveName={params.saveName} />;
  const lastPkmn: Pokemon = await getPokemon({
    pkmName: currentPkmn.pokemon.name,
  });
  const saveitems = save[0].items;
  const totalStats =
    currentPkmn.happiness +
    currentPkmn.hunger +
    currentPkmn.hpCurrent +
    currentPkmn.cleanliness;

  const happyMeter = () => {
    const size = 40;
    const average = totalStats / 4;
    if (average < 10) return <Angry size={size} color="red" />;
    if (average < 30) return <Frown size={size} color="orange" />;
    if (average < 70) return <Annoyed size={size} color="yellow" />;
    return <Smile size={size} color="green" />;
  };
  if (totalStats === 0) {
    await deletePokemon(save[0].id, currentPkmn.pokemon.id);
    return <RunAwayPkmnModal saveName={params.saveName} />;
  }

  if (
    currentPkmn.happiness === 100 &&
    currentPkmn.hunger === 100 &&
    currentPkmn.cleanliness === 100 &&
    currentPkmn.hpCurrent === currentPkmn.hpBase
  ) {
    await lvlUpPokemon(save[0].id, currentPkmn.pokemon.id);
    return <LvlUpModal saveName={params.saveName} />;
  }
  const Evolution = await hasEvolution(currentPkmn.pokemon.name);
  // console.log(currentPkmn);

  return (
    <main className="flex flex-col  items-center h-full ">
      <section className="flex flex-col self-start pt-4 pl-4">
        <div className="flex gap-4  ">
          <div>Player : {params.saveName}</div>{" "}
          <div> Level : {save?.[0].playerLevel}</div>
        </div>
        <div>
          <div> PO : {save?.[0].money}</div>
        </div>
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
        <ProgressBar current={currentPkmn.hpCurrent} max={currentPkmn.hpBase}>
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
      <section className="flex gap-  pt-20">
        {saveitems.map((item) => {
          const mergeItem: MergedItem = {
            ...Itemslist(item.item.dbName),
            ...item.item,
          };

          const saveLinkitems = item.dbStock;

          return (
            <div
              key={item.item.id}
              className="flex flex-col items-center gap-4"
            >
              <ToolButton
                quantity={saveLinkitems}
                saveName={params.saveName}
                currentItem={mergeItem}
                currentPokemon={currentPkmn}
              >
                <Image
                  src={mergeItem.url}
                  alt={mergeItem.name}
                  width={60}
                  height={60}
                />
              </ToolButton>
            </div>
          );
        })}
      </section>
    </main>
  );
}
