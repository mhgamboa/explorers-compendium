"use client";
import React, { useEffect } from "react";
import Track from "./Track";
import CombatCard from "./combatCard/CombatCard";
import useHandleKeyUp from "@/lib/combat/handleKeyUp";
import InitiativeModal from "@/components/combat/modal/initiative/InitiativeModal";
import { Monster } from "@/types/monster";
import { Player } from "@/types/player";
import { Encounter } from "@/types/encounter";
import { useCombatStore } from "@/store/combatStore";

type Props = {
  monsterData: Monster[];
  playerData: Player[];
};

export default function Main({ monsterData, playerData }: Props) {
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

  return (
    <div className="flex w-full flex-col outline-none">
      <InitiativeModal />
      <Track />
      <CombatCard />
    </div>
  );
}
