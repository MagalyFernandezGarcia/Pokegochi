"use client";

import { PokemonListType } from "@/app/[saveName]/battle/page";
import { Button } from "@/components/ui/button";
import { fightRange } from "@/features/fightRange";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export type Difficulty = "easy" | "medium" | "hard";

const difficultiesArray = [
  { label: "Easy", value: "easy" },
  { label: "Medium", value: "medium" },
  { label: "Hard", value: "hard" },
] satisfies { label: string; value: Difficulty }[];

export default function SetBattle({
  playersPokemonName,
}: {
  playersPokemonName: string;
}) {
  const [ennemiesArray, setEnnemiesArray] = useState<PokemonListType[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleClick = (value: Difficulty) => {
    setEnnemiesArray(fightRange(playersPokemonName, value));
    const params = new URLSearchParams(searchParams);
    params.set("difficulty", value);
    router.push(`?${params.toString()}`);
  };
  console.log("ennemiesArray", ennemiesArray);
  if (ennemiesArray.length > 0) {
    return (
      <section>
        {ennemiesArray.map((pokemon) => (
          <div key={pokemon.name}>{pokemon.name}</div>
        ))}
      </section>
    );
  }
  return (
    <section className="flex flex-col items-center gap-4">
      <div>Choose your difficulty level</div>
      <div className="flex gap-4">
        {difficultiesArray.map(({ label, value }) => (
          <Button key={value} onClick={() => handleClick(value)}>
            {label}
          </Button>
        ))}
      </div>
    </section>
  );
}
