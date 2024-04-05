import React from "react";
import { useCombatStore, SavingThrow } from "@/store/combatStore";

const savingThrows: SavingThrow[] = ["str", "dex", "con", "int", "wis", "cha"];

export default function Heading() {
  const selectedSavingThrow = useCombatStore((s) => s.selectedSavingThrow);
  const setSelectedSavingThrow = useCombatStore(
    (s) => s.setSelectedSavingThrow,
  );
  const rollSavingThrows = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
  };

  const handleClick = (s: SavingThrow) =>
    s !== selectedSavingThrow
      ? setSelectedSavingThrow(s)
      : setSelectedSavingThrow("");

  return (
    <div className="flex justify-between gap-10 border-b-2 py-2">
      <div className="flex w-full max-w-96 items-center justify-around">
        {savingThrows.map((t, i) => {
          return (
            <div
              key={i}
              className={`rounded border px-2 py-1 ${selectedSavingThrow === t && "bg-red-800 text-white"}`}
              onClick={() => handleClick(t)}
            >
              {t}
            </div>
          );
        })}
      </div>
      <button className="rounded border p-1" onClick={rollSavingThrows}>
        Roll Saving Throws
      </button>
    </div>
  );
}
