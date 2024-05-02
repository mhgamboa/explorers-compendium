import React, { MouseEvent } from "react";
import { useCombatStore } from "@/store/combatStore";
import { SavingThrowRollType } from "@/types/combatTypes";

const advArr: SavingThrowRollType[] = ["Dis", "Norm", "Adv"];

export default function AdvantageButtons({ i }: { i: number }) {
  const savingThrows = useCombatStore((s) => s.savingThrows);
  const setSavingThrows = useCombatStore((s) => s.setSavingThrows);
  const { rollType } = savingThrows[i];

  const handleButton = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    s: SavingThrowRollType,
  ) => {
    e.stopPropagation();
    const newST = [...savingThrows];
    newST[i].rollType = s;
    newST[i].rolling === false && (newST[i].rolling = true);
    setSavingThrows(newST);
  };
  return (
    <div className="flex w-full justify-between gap-x-2">
      {advArr.map((s) => {
        return (
          <button
            key={s}
            className={`rounded-sm border border-gray-300 px-2 py-1 ${rollType === s && "bg-red-800 text-white"} `}
            onClick={(e) => handleButton(e, s)}
          >
            {s}
          </button>
        );
      })}
    </div>
  );
}
