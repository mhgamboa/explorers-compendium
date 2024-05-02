import React from "react";
import { useCombatStore } from "@/store/combatStore";
import { SavingThrowDamage } from "@/types/combatTypes";

const damageArr: SavingThrowDamage[] = ["None", "Quarter", "Half", "Full"];

export default function DamageButtons({ i }: { i: number }) {
  const savingThrows = useCombatStore((s) => s.savingThrows);
  const setSavingThrows = useCombatStore((s) => s.setSavingThrows);
  const { damageAmount, rolling } = savingThrows[i];
  return (
    <div className="flex flex-wrap items-center justify-around gap-x-2 gap-y-1">
      {damageArr.map((d, ind) => {
        return (
          <div
            className={`w-20 cursor-pointer items-center rounded border border-gray-300 px-2 py-1 text-center ${damageAmount === d && "bg-red-800 text-white"}`}
            onClick={(e) => {
              e.stopPropagation();
              const newST = [...savingThrows];
              newST[i].damageAmount = d;
              if (!rolling) newST[i].rolling = true;
              setSavingThrows(newST);
            }}
            key={d}
          >
            {d}
          </div>
        );
      })}
    </div>
  );
}
