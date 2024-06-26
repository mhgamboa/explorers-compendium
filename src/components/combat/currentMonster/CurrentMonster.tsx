"use client";
import React from "react";
import MonsterCard from "./MonsterCard";
import CurrentStats from "./CurrentStats";
import PlayerCard from "./PlayerCard";
import useCurrentCombatant from "@/hooks/combat/useCurrentCombatant";

export default function CurrentMonster() {
  const currentCombatant = useCurrentCombatant();
  const isMonster = currentCombatant.monsters;

  return (
    <div className="mx-auto flex max-w-xl flex-col items-center justify-center p-4">
      <CurrentStats />
      <div className="min-w-72 rounded border-2 border-gray-400 bg-parchment-background p-2 shadow-xl">
        {isMonster ? <MonsterCard /> : <PlayerCard />}
      </div>
    </div>
  );
}
