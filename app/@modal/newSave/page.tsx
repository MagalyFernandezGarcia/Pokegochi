import { auth } from "@/auth";
import Modal from "@/components/Modal";
import NewSaveForm from "@/components/NewSaveForm";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";



export default async function NewSaveModal() {
     const session = await auth()
     if(!session) return null
    return <Modal>
        <DialogHeader>
            <DialogTitle>Welcome to Pokegochi !</DialogTitle></DialogHeader>
            <NewSaveForm mail={session.user?.email??""}/>
            
            

    </Modal>
    
}