"use client"
import { addPokemonToSave } from "@/features/addPokemon";
import { getPokemon} from "@/features/getPokemons";
import { startersList } from "@/features/startersList";
import { Pokemon } from "@/types/pokemon";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default   function StarterEgg({saveName}: {saveName: string}) {
  
  const [starter, setStarter] = useState<Pokemon>();
  const router = useRouter();

 
   const randomNumber = () => Math.floor(Math.random() * startersList.length);
   
   const clickEgg = async  () => {
    const starter = await getPokemon({pkmNr: startersList[randomNumber()]})
    setStarter(starter)
     
    
   }

   const addPkmn = async () => {
    if(!starter) return
    await addPokemonToSave(saveName, starter.name, starter.stats[0].base_stat);
    router.replace(`/${saveName}/main-screen`);
    
   }
   
 
  return (
    <section className="flex flex-col justify-center items-center h-full gap-8 ">
    
      <Image
        src={starter ? starter.sprites.front_default : "/pkmEgg.png"}
        alt="PokeGochi Logo"
        width={200}
        height={200}
        className={starter ? "" : "animate-wiggle cursor-pointer"}
        onClick={clickEgg}
      
      />
      <div>{starter ? `Congrats ! You have ${starter.name} !` : "Tap on the egg to discover your first pokemon !"}</div>
      {starter && <button onClick={addPkmn}>Add to save</button>}
    </section>
  );
}