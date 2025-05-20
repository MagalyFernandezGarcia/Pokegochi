"use server"

import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export async function getPokemonFromSave(saveName: string) {
      const pokemons = await prisma.savePokemonLink.findMany({
        where: {
            save: {
                userNames: {
                    some: {
                        name: saveName,
                    },
                },
            },
        },
        include: {
            pokemon: true,
        },
    });
    
    
    return pokemons.map(link => link.pokemon);

    

}