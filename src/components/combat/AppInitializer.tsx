"use client";
import React, { ReactNode, useEffect } from "react";
import useHandleKeyUp from "@/lib/combat/handleKeyUp";
import { useCombatStore } from "@/store/combatStore";
import { Monster } from "@/types/monster";

type Props = {
  children: ReactNode;
  monsters: Monster[];
};

export default function AppInitializer({ monsters, children }: Props) {
  const combatants = useCombatStore((state) => state.combatants);
  const setCombatants = useCombatStore((state) => state.setCombatants);

  useEffect(() => {
    window.addEventListener("keyup", useHandleKeyUp);
    setCombatants(monsters);
    return () => {
      window.removeEventListener("keyup", useHandleKeyUp);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return children;
}
