"use client";
import React from "react";
import ModalWrapper from "@/components/ui/ModalWrapper";
import { useCombatStore } from "@/store/combatStore";
import Body from "./Body";
import Heading from "./Heading";
import Foot from "./Foot";

export default function InitiativeModal() {
  const view = useCombatStore((state) => state.view);
  const combatants = useCombatStore((s) => s.combatants);
  const setInitiativeArray = useCombatStore((s) => s.setInitiativeArray);
  setInitiativeArray(combatants.map((c) => c.rolledInitiative));

  if (view !== "initiative") return;
  return (
    <ModalWrapper>
      <div className="flex flex-col">
        <Heading />
        <Body />
        <Foot />
      </div>
    </ModalWrapper>
  );
}
