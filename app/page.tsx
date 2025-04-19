import { auth } from "@/auth";
import SignUpForm from "./SignUpForm";


export default async function Home() {
  const session = await auth()
  console.log(session);
  return (
    <div>
      home
    </div>
  );
}