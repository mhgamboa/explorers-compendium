"use client";
import React from "react";
import { useCombatStore } from "@/store/combatStore";
import ModalWrapper from "@/components/ui/ModalWrapper";
import Heading from "./Heading";
import Body from "./Body";
import Foot from "./Foot";
export default function SavingThrowModal() {
  const view = useCombatStore((state) => state.view);

  if (view !== "savingThrow") return;

  return (
    <ModalWrapper>
      <Heading />
      <Body />
      <Foot />
    </ModalWrapper>
  );
}
