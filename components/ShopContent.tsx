"use client";

import { Item, SaveItemLink } from "@/lib/generated/prisma";
import ItemCard from "./ItemCard";
import { useState } from "react";
import ShopList from "./ShopList";
import { Itemslist } from "@/lib/itemsList";
import { MergedItem } from "@/types/mergedItem";

export default function ShopContent({
  itemsList,
  saveName,
  shopSave,
}: {
  itemsList: Item[];
  saveName: string;
  shopSave: SaveItemLink[];
}) {
  const [pickedItems, setPickedItems] = useState<MergedItem[]>([]);

  const shopButtonDisplay = itemsList.map((item) => {
    const mergeItem: MergedItem = {
      ...Itemslist(item.dbName),
      ...item,
    };

    return (
      <ItemCard
        key={item.dbName}
        item={mergeItem}
        onSetPickedItems={setPickedItems}
        shopSave={shopSave}
      />
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
