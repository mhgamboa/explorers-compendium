import React from "react";
import { useCombatStore } from "@/store/combatStore";
import { ChildProps } from "./SavingThrowModal";

export default function Foot() {
  const setView = useCombatStore((s) => s.setView);

  const saveEffects = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
  };

  const closeInitiative = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    setView("main");
  };
  return (
    <div className="flex justify-end gap-x-4 border-t-2 pt-2">
      <button className="rounded border p-2" onClick={closeInitiative}>
        Cancel
      </button>
      <button className="rounded border bg-green-200 p-2" onClick={saveEffects}>
        Save
      </button>
    </div>
  );
}
