import { getPokemonFromSave } from "@/features/getPokemonFromSave";
import { getPokemon } from "@/features/getPokemons";
import { getSave } from "@/features/getSave";
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
  if (pkmnArray.length === 0) return redirect(`/${params.saveName}/start-screen`)
  const lastPkmn = await getPokemon({
    pkmName: pkmnArray[pkmnArray.length - 1].name,
  });
  

  return (
    <main className="flex flex-col  items-center ">
      <section className="flex gap-4">
        <div>Player : {params.saveName}</div> <div> Level : {save?.[0].playerLevel}</div>
      </section>

      <section className="flex flex-col justify-center items-center h-full  ">
        <Image
          src={lastPkmn.sprites.front_default}
          alt={lastPkmn.name}
          width={200}
          height={200}
        />
        <div>{pkmnArray[pkmnArray.length - 1].name}</div>
      </section>
    </main>
  );
}
