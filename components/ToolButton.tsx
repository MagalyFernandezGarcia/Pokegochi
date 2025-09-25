"use client";

import { ReactNode } from "react";
import { Button } from "./ui/button";
import { withdrawAUnit } from "@/features/items/withdrawAUnit";
import { updatePokemonStat } from "@/features/updatePokemonStat";
import { MergedItem } from "@/types/mergedItem";

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

  console.log(quantity);

  const removeQuantity = async () => {
    await withdrawAUnit(saveName, [currentItem.dbName]);
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
