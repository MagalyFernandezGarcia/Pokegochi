import { Item } from "@/lib/generated/prisma";

type ToMergeItem = {
  id: number;
  name: string;
  price: number;
  level: number;
  url: string;
  description: string;
  stats: {
    cleanliness?: number;
    happiness?: number;
    hunger?: number;
  };
  totalStock: number;
};

export type MergedItem = Item & ToMergeItem;
