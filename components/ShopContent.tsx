"use client";

import { Item } from "@/lib/generated/prisma";
import ItemCard from "./ItemCard";
import { useState } from "react";
import ShopList from "./ShopList";

export default function ShopContent({ itemsList }: { itemsList: Item[] }) {
  const [pickedItems, setPickedItems] = useState<Item[]>([]);

  const shopButtonDisplay = itemsList.map((item) => {
    return (
      <ItemCard key={item.name} item={item} onSetPickedItems={setPickedItems} />
    );
  });
  return (
    <>
      <section className="flex flex-wrap justify-center gap-4">
        {shopButtonDisplay}
      </section>
      <ShopList items={pickedItems} onSetPickedItems={setPickedItems} />
    </>
  );
}
