import ItemCard from "@/components/ItemCard";
import ShopContent from "@/components/ShopContent";
import { getItems } from "@/features/items/getItems";
import { House } from "lucide-react";
import Link from "next/link";

export default async function Shop({
  params: paramsPromise,
}: {
  params: Promise<{ saveName: string }>;
}) {
  const params = await paramsPromise;
  const items = await getItems();

  return (
    <>
      <Link href={`/${params.saveName}/main-screen`}>
        <div className=" pl-4 pt-4">
          <House />
        </div>
      </Link>
      <section>
        <ShopContent itemsList={items} saveName={params.saveName} />
      </section>
    </>
  );
}
