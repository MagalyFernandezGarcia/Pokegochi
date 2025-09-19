"use client";

import { Button } from "./ui/button";
import Image from "next/image";
import { Item } from "@/lib/generated/prisma";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Dispatch, SetStateAction } from "react";
import { Itemslist } from "@/lib/itemsList";
import { MergedItem } from "@/types/mergedItem";

export default function ItemCard({
  item,
  onSetPickedItems,
}: {
  item: Item;
  onSetPickedItems: Dispatch<SetStateAction<Item[]>>;
}) {
  const mergeItem: MergedItem = {
    ...Itemslist(item.dbName),
    ...item,
  };
  if (!mergeItem) return null;
  return (
    <Card key={item.id} className="w-1/6 ">
      <CardHeader className="flex justify-center w-full text-center">
        <CardTitle>{mergeItem.name}</CardTitle>
      </CardHeader>
      <CardContent className="h-full flex flex-col  gap-8">
        <section className="flex justify-center">
          <Image
            src={mergeItem.url}
            alt={mergeItem.name}
            width={50}
            height={50}
          />
        </section>

        <section className="flex flex-col gap-2 ">
          <CardDescription className="h-12">
            {mergeItem.description}
          </CardDescription>
          <div>{mergeItem.price} po</div>
          <div>{mergeItem.dbStock} in stock</div>
        </section>
      </CardContent>
      <CardFooter className="flex flex-col items-center">
        <Button onClick={() => onSetPickedItems((prev) => [...prev, item])}>
          Buy
        </Button>
      </CardFooter>
    </Card>
  );
}
