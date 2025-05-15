import { auth } from "@/auth";
import SignIn from "./signIn/page";
import NewSaveBtn from "@/components/NewSaveBtn";
import { getSave } from "@/features/getSave";
import LoadSaveBtn from "@/components/LoadSaveBtn";



export default async function Home() {
  const session = await auth()
  if(!session) return <SignIn/>

  const saveList= await getSave()
  
  const displaySavesNames = saveList?.[0]?.userNames.map((name) => {return (<LoadSaveBtn key={name.name} name={name.name}/>)});

  
  

 
  return (
    <section className="flex flex-col items-center justify-center h-full gap-8">
      <NewSaveBtn />
      <div>
       {displaySavesNames}
      </div>
    </section>
  );
}