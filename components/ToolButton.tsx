"use client";

import { ReactNode } from "react";
import { Button } from "./ui/button";
import { withdrawAUnit } from "@/features/items/withdrawAUnit";
import { Item, SavePokemonLink } from "@/lib/generated/prisma";
import { updatePokemonStat } from "@/features/updatePokemonStat";
import { MergedItem } from "@/types/mergedItem";

type Stat = "hpCurrent" | "hunger" | "happiness" | "cleanliness";
type StatMap = Record<Stat, number>;
type FullPkmn = {
  pokemon: {
    name: string;
    id: number;
  };
} & {
  id: number;
  saveId: number;
  pokemonId: number;
  hpCurrent: number;
  hpBase: number;
  happiness: number;
  hunger: number;
  cleanliness: number;
  level: number;
  difficulty: number;
};

export default function ToolButton({
  children,
  quantity,
  saveName,
  currentItem,
  currentPokemon,
}: {
  children: ReactNode;
  quantity: number;
  saveName: string;
  currentItem: MergedItem;
  currentPokemon: FullPkmn;
}) {
  const statToModify = currentItem.stats;

  // modifier la db pour retirer les stats des items + modifier items pour garder que ce qui varie puis mettre les stats dans des fonctions dans le frontend
  // const test= (item: any) => {
  //   if (item.id===1) {
  // return {name: "fregfer", url: "fregfer", stockTotal: 10}

  // }

  // const stat = Object.keys(statToModify ?? {})[0];
  // const pkmnStat = currentPokemon["zizi"];
  // console.log(stat);

  // // const statsArray = Object.entries(statToModify ?? {});

  // // console.log(statsArray);

  // // console.log("statsarray", statsArray[0][0]);
  // // const test = currentPokemon[statsArray[0][0]];

  // // const statFieldMap = {
  // //   hp: "hpCurrent",
  // //   hunger: "hunger",
  // //   happiness: "happiness",
  // //   cleanliness: "cleanliness",
  // // };
  // // const statKey = statsArray[0][0];
  // // const fieldKey = statFieldMap[statKey];
  // // const pkmnCurrentStat = currentPokemon[fieldKey];
  // // console.log(pkmnCurrentStat);

  const removeQuantity = async () => {
    await withdrawAUnit(saveName, [currentItem.name]);
    for (const [key, value] of Object.entries(statToModify)) {
      await updatePokemonStat(
        currentPokemon.pokemon.name,
        key,
        value,
        saveName
      );
    }
  };
  return (
    <div>
      <Button variant="invisible" onClick={removeQuantity} disabled={!quantity}>
        {children}
      </Button>
      <div>{quantity}</div>
    </div>
  );
}
