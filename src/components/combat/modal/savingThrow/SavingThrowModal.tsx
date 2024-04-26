"use client";
import { useState, Dispatch, SetStateAction } from "react";
import { useCombatStore, SavingThrow } from "@/store/combatStore";
import { Condition } from "@/types/combatTypes";
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
