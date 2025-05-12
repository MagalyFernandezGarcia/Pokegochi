import Modal from "@/components/Modal";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


export default function NewSaveModal() {
    return <Modal>
        <DialogHeader>
            <DialogTitle>Welcome to Pokegochi !</DialogTitle></DialogHeader>
            <div><Label>What's your name ?</Label><Input/></div>
            

    </Modal>
    
}