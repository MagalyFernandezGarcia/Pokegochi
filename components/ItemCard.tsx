"use client";

import { Button } from "./ui/button";
import Image from "next/image";
import { SaveItemLink } from "@/lib/generated/prisma";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Dispatch, SetStateAction } from "react";
import { MergedItem } from "@/types/mergedItem";

export default function ItemCard({
  item,
  onSetPickedItems,
  shopSave,
  playerMoney,
}: {
  item: MergedItem;
  onSetPickedItems: Dispatch<SetStateAction<MergedItem[]>>;
  shopSave: SaveItemLink[];
  playerMoney: number;
}) {
  const itemInShop = shopSave.find((link) => link.itemId === item.id);

  return (
    <Card key={item.id} className="w-1/6 ">
      <CardHeader className="flex justify-center w-full text-center">
        <CardTitle>{item.name}</CardTitle>
      </CardHeader>
      <CardContent className="h-full flex flex-col  gap-8">
        <section className="flex justify-center">
          <Image src={item.url} alt={item.name} width={50} height={50} />
        </section>

        <section className="flex flex-col gap-2 ">
          <CardDescription className="h-12">{item.description}</CardDescription>
          <div>{item.price} po</div>
          <div>{itemInShop?.shopStock} in stock</div>
        </section>
      </CardContent>
      <CardFooter className="flex flex-col items-center">
        <Button
          onClick={() => onSetPickedItems((prev) => [...prev, item])}
          disabled={itemInShop?.shopStock === 0 || playerMoney < item.price}
        >
          Buy
        </Button>
      </CardFooter>
    </Card>
  );
}
