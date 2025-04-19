import { Button } from "./button";
import Image from "next/image";


export default function SignInGoogleBtn() {
    return (
        <Button><Image src="/googleLogo.png" alt="Google Logo" width={32} height={32}/> Sign in with Google</Button>
    )
}