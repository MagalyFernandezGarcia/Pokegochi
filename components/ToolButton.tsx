"use client";

import { ReactNode } from "react";
import { Button } from "./ui/button";
import { withdrawAUnit } from "@/features/withdrawAUnit";
import { Item } from "@/lib/generated/prisma";
import { updatePokemonStat } from "@/features/updatePokemonStat";
type Stat = "hp" | "hunger" | "happiness" | "cleanliness";
type StatMap = Record<Stat, number>;

export default function ToolButton({
  children,
  quantity,
  saveName,
  currentItem,
  pokemonName,
}: {
  children: ReactNode;
  quantity: number;
  saveName: string;
  currentItem: Item;
  pokemonName: string;
}) {
  const statToModify = currentItem.stats as StatMap;

  const removeQuantity = async () => {
    await withdrawAUnit(saveName, [currentItem.name]);
    for (const [key, value] of Object.entries(statToModify)) {
      await updatePokemonStat(pokemonName, key, value, saveName);
    }
  };
  return (
    <div>
      <Button variant="invisible" onClick={removeQuantity} disabled={!quantity}>
        {children}
      </Button>{" "}
      <div>{quantity}</div>
    </div>
  );
}
