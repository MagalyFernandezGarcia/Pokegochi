"use client";

import { getPokemon} from "@/features/getPokemons";
import { startersList } from "@/features/startersList";
import { Pokemon } from "@/types/pokemon";
import Image from "next/image";
import { useState } from "react";


export default  function StartScreen() {
  const [starter, setStarter] = useState<Pokemon>();

  console.log(startersList.length);
  

   const randomNumber = () => Math.floor(Math.random() * startersList.length);
   
   const clickEgg = async  () => {
    const starter = await getPokemon(startersList[randomNumber()])
    setStarter(starter)
     
    
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
    </section>
  );
}
