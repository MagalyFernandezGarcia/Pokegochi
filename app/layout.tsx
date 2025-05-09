import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";


export const metadata: Metadata = {
  title: "PokeGochi",
  description: "Your go-to Pokémon companion!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
       className=" h-screen w-screen "
      >
        <header className="w-full bg-pink-300 h-20 flex items-center">
          <Link href="/">
          <Image src="/pokeGochiLogo.png" alt="PokeGochi Logo" width={50} height={50} /></Link>
        </header>
        <main className="bg-yellow-50 h-[93.8vh]">{children}</main>
        
      </body>
    </html>
  );
}
