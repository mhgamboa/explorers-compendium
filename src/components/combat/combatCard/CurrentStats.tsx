import React from "react";
import { useCombatStore } from "@/store/combatStore";

export default function CurrentStats() {
  const combatants = useCombatStore((state) => state.combatants);
  const index = useCombatStore((state) => state.index);
  const currentcombatant = combatants[index];
  const { rolledInitiative, currentHp, status } = currentcombatant;
  return (
    <div className="flex w-full flex-col gap-2">
      <div className="mx-auto">
        <span className="text-lg text-red-900">Current Hp: </span>
        {currentHp}
      </div>
      <div className="flex justify-around">
        <div>
          <span className="text-lg text-red-900">Current Statuses:</span>{" "}
          {status.length ? status.map((s) => s) : "none"}
        </div>
        <div>
          <span className="text-lg text-red-900">Initiative: </span>
          {currentcombatant.rolledInitiative}
        </div>
      </div>
    </div>
  );
}
