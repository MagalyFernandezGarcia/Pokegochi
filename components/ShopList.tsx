import { Item } from "@/lib/generated/prisma";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Dispatch, SetStateAction } from "react";

export default function ShopList({
  items,
  onSetPickedItems,
}: {
  items: Item[];
  onSetPickedItems: Dispatch<SetStateAction<Item[]>>;
}) {
  const countItems = items.reduce((acc: Record<string, number>, item) => {
    if (item.name in acc) acc[item.name]++;
    else acc[item.name] = 1;
    return acc;
  }, {});

  const displayList = Object.entries(countItems).map(([name, count]) => ({
    name,
    count,
  }));

  return (
    <Card className="w-1/3">
      <CardHeader className="w-full text-center">
        <CardTitle>Your shop cart</CardTitle>
      </CardHeader>
      <CardContent>
        {displayList.map((item) => (
          <div key={item.name}>
            {item.name} x {item.count}
          </div>
        ))}
      </CardContent>
      {items.length !== 0 && (
        <CardFooter className="flex flex-col gap-4">
          <div>
            Total: {items.reduce((acc, item) => acc + item.price, 0)} po
          </div>
          <div>
            <Button>Buy</Button>{" "}
            <Button variant="secondary" onClick={() => onSetPickedItems([])}>
              Clear All
            </Button>
          </div>
        </CardFooter>
      )}
    </Card>
  );
}
