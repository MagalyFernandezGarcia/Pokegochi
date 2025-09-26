import ShopContent from "@/components/ShopContent";
import { getSave } from "@/features/getSave";
import { getItems } from "@/features/items/getItems";
import { getSaveItems } from "@/features/items/getSaveItems";
import { Itemslist } from "@/lib/itemsList";
import { House } from "lucide-react";
import Link from "next/link";

export default async function Shop({
  params: paramsPromise,
}: {
  params: Promise<{ saveName: string }>;
}) {
  const params = await paramsPromise;
  const items = await getItems();
  const mergedItems = items.map((item) => {
    const mergeItems = Itemslist(item.dbName);
    return { ...mergeItems, ...item };
  });

  const shopSave = await getSaveItems();
  const save = await getSave();
  const playerMoney = save[0].money;

  return (
    <>
      <Link href={`/${params.saveName}/main-screen`}>
        <div className=" pl-4 pt-4">
          <House />
        </div>
      </Link>
      <section>
        <ShopContent
          itemsList={mergedItems}
          saveName={params.saveName}
          shopSave={shopSave}
          playerMoney={playerMoney}
        />
      </section>
    </>
  );
}
