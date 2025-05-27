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

export default function ItemCard({
  item,
  onSetPickedItems,
}: {
  item: Item;
  onSetPickedItems: Dispatch<SetStateAction<Item[]>>;
}) {
  return (
    <Card key={item.name} className="w-1/6 ">
      <CardHeader className="flex justify-center w-full text-center">
        <CardTitle>{item.name}</CardTitle>
      </CardHeader>
      <CardContent className="h-full flex flex-col  gap-8">
        <section className="flex justify-center">
          <Image src={item.imgUrl} alt={item.name} width={50} height={50} />
        </section>

        <section className="flex flex-col gap-2 ">
          <CardDescription className="h-12">{item.description}</CardDescription>
          <div>{item.price} po</div>
          <div>{item.stock} in stock</div>
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
