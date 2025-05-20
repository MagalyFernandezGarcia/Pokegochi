"use server";

import StarterEgg from "@/components/StarterEgg";




export default async  function StartScreen({params: paramsPromise}: {params : Promise<{saveName: string}>}) {
  const params= await paramsPromise
  
 
  return (
    <StarterEgg saveName={params.saveName} />
  );
}
