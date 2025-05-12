import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { createSave } from "../features/createSave";
import SignIn from "./signIn/page";
import NewSaveBtn from "@/components/NewSaveBtn";



export default async function Home() {
  const session = await auth()

 if(!session) return <SignIn/>
  return (
    <section className="flex flex-col items-center justify-center h-full gap-8">
      <NewSaveBtn mail={session.user?.email??""}/>
      <div>
        Save 1
      </div>
    </section>
  );
}