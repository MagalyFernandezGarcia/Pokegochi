"use client";

import { ReactNode } from "react";
import { Progress } from "./ui/progress";
import { cn } from "@/lib/utils";

export function ProgressBar({
  current,
  max,
  children,
}: {
  current: number;
  max: number;
  children: ReactNode;
}) {
  const percentage = (current / max) * 100;

  const getColor = (percent: number) => {
    if (percent < 30) return "[&>div]:bg-red-500";
    if (percent < 70) return "[&>div]:bg-yellow-500";
    return "[&>div]:bg-green-500";
  };

  return (
    <div className="flex flex-col items-center gap-2">
      {children}
      <Progress
        value={percentage}
        className={cn("w-[200px]", getColor(percentage))}
      />
    </div>
  );
}
