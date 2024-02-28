"use client";
import React from "react";
import { useHydrateAtoms } from "jotai/utils";
import { useAtomValue } from "jotai";
import { combatantsAtom, indexAtom } from "@/atoms/combat";
import MonsterStats from "@/components/monster/MonsterStats";
import Track from "./Track";
import CombatCard from "./CombatCard";

export default function Main(monsterData: any) {
  useHydrateAtoms([[combatantsAtom, monsterData]]);
  const combatants = useAtomValue(combatantsAtom);
  const index = useAtomValue(indexAtom);

  return (
    <div className="w-full flex flex-col space-y-4 pt-2">
      <Track />
      <div className="flex p-2 justify-around">
        <div className="bg-parchment-background shadow-xl border-2 border-gray-400 rounded p-2 max-w-xl">
          {/* <MonsterStats monster={combatants.monsterData[index]} /> */}
          <CombatCard />
        </div>
      </div>
    </div>
  );
}
