import React from "react";
import { useCombatStore } from "@/store/combatStore";

export default function CurrentStats() {
  const combatants = useCombatStore((state) => state.combatants);
  const index = useCombatStore((state) => state.index);
  const currentcombatant = combatants[index];
  const { rolledInitiative, currentHp, status } = currentcombatant;
  return (
    <div className="flex w-full flex-col gap-2">
      <div className="flex justify-around">
        <span>Current Hp: {currentHp}</span>
      </div>
      <div>
        <span>
          Current Statuses: {status.length ? status.map((s) => s) : "none"}
        </span>
      </div>
    </div>
  );
}
