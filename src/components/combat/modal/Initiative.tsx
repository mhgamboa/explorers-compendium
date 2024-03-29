import React from "react";
import ModalWrapper from "@/components/ui/ModalWrapper";
import { useCombatStore } from "@/store/combatStore";

export default function Initiative() {
  const { view } = useCombatStore();

  if (view !== "initiative") return;
  return <ModalWrapper>Initiative</ModalWrapper>;
}
