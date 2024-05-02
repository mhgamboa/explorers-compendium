import React, { ChangeEvent } from "react";
import { useCombatStore } from "@/store/combatStore";

export default function RollInputs({ i }: { i: number }) {
  const savingThrows = useCombatStore((s) => s.savingThrows);
  const setSavingThrows = useCombatStore((s) => s.setSavingThrows);
  const { roll1, roll2, rollType } = savingThrows[i];

  const handleInput = (e: ChangeEvent<HTMLInputElement>, roll: string) => {
    const newST = [...savingThrows];
    roll === "roll1"
      ? (newST[i].roll1 = +e.target.value)
      : (newST[i].roll2 = +e.target.value);
    newST[i].rolling === false && (newST[i].rolling = true);

    setSavingThrows(newST);
  };
  return (
    <div className="flex w-full justify-around py-2">
      <input
        type="number"
        className="w-16 rounded border px-2 py-0.5"
        value={roll1}
        onClick={(e) => e.stopPropagation()}
        onScroll={(e) => e.preventDefault()}
        onChange={(e) => handleInput(e, "roll1")}
      />
      <input
        type="number"
        className="w-16 rounded border px-2 py-0.5"
        value={rollType === "Norm" ? 0 : roll2}
        onClick={(e) => e.stopPropagation()}
        onScroll={(e) => e.preventDefault()}
        onChange={(e) => handleInput(e, "roll2")}
        disabled={rollType === "Norm"}
      />
    </div>
  );
}
