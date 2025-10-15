"use server";
import { getSave } from "@/features/getSave";
import Image from "next/image";

export default async function Battle({
  params: paramsPromise,
}: {
  params: Promise<{ saveName: string }>;
}) {
  const save = await getSave();
  const pkmnArray = save[0].pokemons;

  const currentPkmn = pkmnArray[pkmnArray.length - 1];
  console.log(currentPkmn);

  return <div>Battle</div>;
}
