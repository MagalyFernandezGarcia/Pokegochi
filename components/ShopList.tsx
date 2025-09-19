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
import { removeUnitFromShop } from "@/features/items/removeUnitFromShop";
import { getSave } from "@/features/getSave";
import { updateSaveItems } from "@/features/items/updateSaveItems";
import { updateMoney } from "@/features/updateMoney";
import { Itemslist } from "@/lib/itemsList";
import { MergedItem } from "@/types/mergedItem";

export default function ShopList({
  items,
  onSetPickedItems,
  saveName,
}: {
  items: Item[];
  onSetPickedItems: Dispatch<SetStateAction<Item[]>>;
  saveName: string;
}) {
  const mergedItems: MergedItem[] = items.map((item) => {
    const mergeItems = Itemslist(item.dbName);
    return { ...mergeItems, ...item };
  });

  const countItems = mergedItems.reduce((acc: Record<string, number>, item) => {
    if (item.name in acc) acc[item.name]++;
    else acc[item.name] = 1;
    return acc;
  }, {});

  const displayList = Object.entries(countItems).map(([name, count]) => ({
    name,
    count,
  }));
  const total = mergedItems.reduce((acc, item) => acc + item.price, 0);

  const buyAll = async () => {
    const save = await getSave();

    await removeUnitFromShop(
      saveName,
      Object.keys(countItems),
      Object.values(countItems)
    );
    await updateSaveItems(
      saveName,
      Object.keys(countItems),
      Object.values(countItems)
    );
    await updateMoney(saveName, -total);

    onSetPickedItems([]);
  };

  return (
    <Card className="w-80 mr-8">
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
          <div>Total: {total} po</div>
          <div>
            <Button onClick={buyAll}>Buy</Button>{" "}
            <Button variant="secondary" onClick={() => onSetPickedItems([])}>
              Clear All
            </Button>
          </div>
        </CardFooter>
      )}
    </Card>
  );
}
