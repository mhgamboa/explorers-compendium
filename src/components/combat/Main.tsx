"use client";
import React, { useEffect } from "react";
// import MonsterStats from "@/components/monster/MonsterStats";
import Track from "./Track";
import CombatCard from "./CombatCard";
import useHandleKeyUp from "@/lib/combat/handleKeyUp";
import InitiativeModal from "@/components/combat/modal/Initiative";
import { Monster } from "@/types/monster";
import { useCombatStore } from "@/store/combatStore";
// import { viewAtom } from "@/atoms/combat";
// import { combatantsAtom, indexAtom } from "@/atoms/combat";
// import { useAtom } from "jotai";

export default function Main({ monsterData }: { monsterData: Monster[] }) {
  const setCombatants = useCombatStore((state) => state.setCombatants);
  console.log("main");

  useEffect(() => {
    window.addEventListener("keyup", useHandleKeyUp);
    setCombatants(monsterData);
    return () => {
      window.removeEventListener("keyup", useHandleKeyUp);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="flex w-full flex-col space-y-4 outline-none ">
      <InitiativeModal />
      <Track />
      {/* <div className="flex justify-around space-x-4 p-4"> */}
      <CombatCard />
      {/* </div> */}
    </div>
  );
}
