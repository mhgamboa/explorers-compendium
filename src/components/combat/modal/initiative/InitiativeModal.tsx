"use client";
import React, { useCallback, useEffect } from "react";
import ModalWrapper from "@/components/ui/ModalWrapper";
import Body from "./Body";
import Heading from "./Heading";
import Foot from "./Foot";
import { useViewContext } from "@/context/combat/ViewContext";
import { useInitiativeContext } from "@/context/combat/initiative/InitiativeContext";
import { useEncounterContext } from "@/context/combat/EncounterContext";
import { useMainFocusedContext } from "@/context/combat/MainFocusedContext";
import { sortByInitiative } from "@/utils/combat";

export default function InitiativeModal() {
  const { view, setView } = useViewContext();
  const { initiativeArray, setInitiativeArray } = useInitiativeContext();
  const { encounter, setEncounter } = useEncounterContext();
  const { mainFocused } = useMainFocusedContext();

  const handleClose = useCallback(
    // Sue me
    (e: any, save: boolean) => {
      e.preventDefault();
      const newEncounter = { ...encounter, encounter_stats: initiativeArray };

      save
        ? setEncounter(sortByInitiative(newEncounter))
        : setInitiativeArray(encounter.encounter_stats);

      setView("main");
    },
    [encounter, initiativeArray, setEncounter, setInitiativeArray, setView],
  );

  useEffect(() => {
    const handleKeyUp = (e: KeyboardEvent) => {
      e.preventDefault();
      if (view !== "initiative") return;
      if (e.key === "Escape") handleClose(e, false);
      if (e.key === "Enter") handleClose(e, true);
    };

    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [view, setView, mainFocused, handleClose]);

  if (view !== "initiative") return;
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
