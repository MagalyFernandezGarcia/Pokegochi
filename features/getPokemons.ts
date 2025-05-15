"use server"
import axios from "axios"

// export async function getPokemons() {
//     const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151")
//     const data = await response.data
//     const results = await data.results
//     const resultsToJson = JSON.stringify(results)
    
    
//     return resultsToJson
// }

export async function getPokemon(pkmNr: number) {
  
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pkmNr}`)
    const data = await response.data

    return data
}