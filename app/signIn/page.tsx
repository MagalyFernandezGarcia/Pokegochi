import { auth } from "@/auth";
import SignUpForm from "../../components/SignUpForm";
import { redirect } from "next/navigation";

export default async function SignIn() {
  const session = await auth();

  if (session) {
    redirect("/");
  }

  return (
    <section className="flex items-center justify-center h-1/2">
      <SignUpForm />
    </section>
  );
}
