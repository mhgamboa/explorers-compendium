"use client";
import React, { ReactNode, useEffect } from "react";
import useHandleKeyUp from "@/lib/combat/handleKeyUp";
import { useCombatStore } from "@/store/combatStore";
import { Monster } from "@/types/monster";
import { Encounter } from "@/types/encounter";

type Props = {
  children: ReactNode;
  encounter: Encounter;
};

export default function AppInitializer({ encounter, children }: Props) {
  const combatants = useCombatStore((state) => state.combatants);
  const setCombatants = useCombatStore((state) => state.setCombatants);

  useEffect(() => {
    window.addEventListener("keyup", useHandleKeyUp);
    setCombatants(encounter);
    return () => {
      window.removeEventListener("keyup", useHandleKeyUp);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return children;
}
