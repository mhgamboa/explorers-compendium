"use client";
import React from "react";
import { useCombatStore } from "@/store/combatStore";
import MonsterDisplay from "./MonsterDisplay";

export default function CombatCard() {
  const combatants = useCombatStore((state) => state.combatants);
  const index = useCombatStore((state) => state.index);
  if (combatants.length === 0) return;
  const combatantType = combatants[index].type;

  return (
    <div className="flex justify-around space-x-4 p-4">
      <div className="max-w-xl rounded border-2 border-gray-400 bg-parchment-background p-2 shadow-xl">
        {combatantType === "monster" ? <MonsterDisplay /> : <div>Player</div>}
      </div>
    </div>
  );
}
