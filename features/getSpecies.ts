"use server"

import axios from "axios"

export async function getSpecies(pkmNr: number) {
    
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pkmNr}`)
    const data = await response.data

    return data
}