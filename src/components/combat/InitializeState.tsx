"use client";
import React, { ReactNode, useEffect } from "react";
import useHandleKeyUp from "@/hooks/combat/useHandleKeyUp";
import { useCombatStore } from "@/store/combatStore";
import { Monster, Player, Encounter } from "@/types/combatTypes";

type Props = {
  children: ReactNode;
  encounter?: Encounter; //Will eventually replace playerData & MonsterData
  playerData: Player[];
  monsterData: Monster[];
};

export default function InitializeState({
  monsterData,
  playerData,
  children,
}: Props) {
  const setCombatants = useCombatStore((state) => state.setCombatants);
  const setInitiativeArray = useCombatStore(
    (state) => state.setInitiativeArray,
  );

  useEffect(() => {
    window.addEventListener("keyup", useHandleKeyUp);
    const arr: Encounter = [];
    monsterData.forEach((m) => {
      arr.push({
        combatant: m,
        type: "monster",
        rolledInitiative: 0,
        currentHp: m.hp.value,
        status: [],
      });
    });
    playerData.forEach((p) => {
      arr.push({
        combatant: p,
        type: "player",
        rolledInitiative: 0,
        currentHp: p.totalHp || 0,
        status: [],
      });
    });
    setInitiativeArray(arr.map((c) => c.rolledInitiative));
    setCombatants(arr);
    return () => {
      window.removeEventListener("keyup", useHandleKeyUp);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <>{children}</>;
}
