import Image from "next/image";

export default function MainScreen() {
  return (
    <section className="flex flex-col justify-center items-center h-full gap-8 ">
      <Image
        src="/pkmEgg.png"
        alt="PokeGochi Logo"
        width={200}
        height={200}
        className="animate-wiggle"
      />
      <div>Tap on the egg to discover your first pokemon !</div>
    </section>
  );
}
