

import { signIn } from "@/auth";

import Image from "next/image";
import { Button } from "./ui/button";


export default function SignInGoogleBtn() {
    return (
        <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <Button type="submit" ><Image src="/googleLogo.png" alt="Google Logo" width={32} height={32} /> Sign in with Google</Button>
    </form>

        
    )
}

 