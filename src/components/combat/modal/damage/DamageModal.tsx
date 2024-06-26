"use client";
import React, { useCallback, useEffect } from "react";
import ModalWrapper from "@/components/ui/ModalWrapper";
import Body from "./Body";
import Heading from "./Heading";
import Foot from "./Foot";
import { useViewContext } from "@/context/combat/ViewContext";
import { useEncounterContext } from "@/context/combat/EncounterContext";
import { create } from "mutative";
import { useDamageContext } from "@/context/combat/DamageContext";
import { sortByInitiative } from "@/utils/combat";

export default function DamageModal() {
  const { view, setView } = useViewContext();
  const { encounter, setEncounter } = useEncounterContext();
  const { damage, setDamage } = useDamageContext();

  const handleClose = useCallback(
    // Sue me
    (e: any, save: boolean) => {
      e.preventDefault();
      const newEncounter = create(encounter, (draft) => {
        draft.encounter_stats = draft.encounter_stats.map((c, i) => {
          const amount = damage.find((d) => d.id === c.id)!.damage;
          return { ...c, current_hp: c.current_hp - amount };
        });
      });

      save && setEncounter(sortByInitiative(newEncounter));
      const resetDamage = damage.map((d) => ({ ...d, damage: 0 }));

      setDamage(resetDamage);
      setView("main");
    },
    [encounter, setEncounter, damage, setDamage, setView],
  );
  useEffect(() => {
    const handleKeyUp = (e: KeyboardEvent) => {
      e.preventDefault();
      if (view !== "damage") return;
      if (e.key === "Escape") handleClose(e, false);
      if (e.key === "Enter") handleClose(e, true);
    };
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [view, setView, handleClose]);

  if (view !== "damage") return;
  return (
    <ModalWrapper onClose={handleClose}>
      <div className="flex flex-col">
        <Heading />
        <Body />
        <Foot onClose={handleClose} />
      </div>
    </ModalWrapper>
  );
}
