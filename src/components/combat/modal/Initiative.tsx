"use client";
import React from "react";
import ModalWrapper from "@/components/ui/ModalWrapper";
import { useCombatStore } from "@/store/combatStore";

export default function Initiative() {
  const view = useCombatStore((state) => state.view);

  if (view !== "initiative") return;
  return <ModalWrapper>Initiative</ModalWrapper>;
}
