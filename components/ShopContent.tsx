"use client";

import { Item } from "@/lib/generated/prisma";
import ItemCard from "./ItemCard";
import { useState } from "react";
import ShopList from "./ShopList";

export default function ShopContent({
  itemsList,
  saveName,
}: {
  itemsList: Item[];
  saveName: string;
}) {
  const [pickedItems, setPickedItems] = useState<Item[]>([]);

  const shopButtonDisplay = itemsList.map((item) => {
    return (
      <ItemCard key={item.name} item={item} onSetPickedItems={setPickedItems} />
    );
  });
  return (
    <main className="flex justify-center">
      <section className="flex flex-wrap justify-center gap-4 w-800">
        {shopButtonDisplay}
      </section>
      <section>
        <ShopList
          items={pickedItems}
          onSetPickedItems={setPickedItems}
          saveName={saveName}
        />
      </section>
    </main>
  );
}
