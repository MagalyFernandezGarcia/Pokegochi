import { auth } from "@/auth";
import NewSaveModal from "@/components/NewSaveModal";


export default async function NewSaveModalPage() {
     const session = await auth()
     if(!session) return null
    return <NewSaveModal mail={session.user?.email??""}/>;
    
}