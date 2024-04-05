"use client";
import React from "react";
import { useCombatStore } from "@/store/combatStore";
import MonsterDisplay from "./MonsterDisplay";
import CurrentStats from "./CurrentStats";
import PlayerDisplay from "./PlayerDisplay";

export default function CombatCard() {
  const combatants = useCombatStore((state) => state.combatants);
  const index = useCombatStore((state) => state.index);
  if (combatants.length === 0) return;
  const combatantType = combatants[index].type;

  return (
    <div className="mx-auto flex max-w-xl flex-col items-center justify-center p-4">
      <CurrentStats />
      <div className="min-w-72 rounded border-2 border-gray-400 bg-parchment-background p-2 shadow-xl">
        {combatantType === "monster" ? <MonsterDisplay /> : <PlayerDisplay />}
      </div>
    </div>
  );
}
