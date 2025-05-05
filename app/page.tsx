import { auth } from "@/auth";
import SignUpForm from "./SignUpForm";


export default async function Home() {
  const session = await auth()
 
  return (
    <section className="flex flex-col items-center justify-center h-full gap-8">
      <div>
        New save
      </div>
      <div>
        Save 1
      </div>
    </section>
  );
}