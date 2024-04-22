"use client";
import React from "react";
import ModalWrapper from "@/components/ui/ModalWrapper";
import { useCombatStore } from "@/store/combatStore";
import Body from "./Body";
import Heading from "./Heading";
import Foot from "./Foot";

export default function DamageModal() {
  const view = useCombatStore((state) => state.view);

  if (view !== "damage") return;
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
