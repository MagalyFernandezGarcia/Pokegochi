import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { auth, signOut } from "@/auth";

export const metadata: Metadata = {
  title: "PokeGochi",
  description: "Your go-to Pokémon companion!",
};

export default async function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="en">
      <body className=" h-screen w-screen ">
        <header className="w-full bg-pink-300 h-20 flex items-center justify-between pr-4">
          <Link href="/">
            <Image
              src="/pokeGochiLogo.png"
              alt="PokeGochi Logo"
              width={50}
              height={50}
            />
          </Link>
          {session && (
            <form
              action={async () => {
                "use server";
                await signOut({ redirectTo: "/" });
              }}
            >
              <Button variant="main">
                <LogOut />
              </Button>
            </form>
          )}
        </header>
        <main className="bg-yellow-50 h-[93.8vh]">
          {modal} {children}{" "}
        </main>
      </body>
    </html>
  );
}
