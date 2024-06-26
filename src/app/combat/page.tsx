"use client";

import InitiativeModal from "@/components/combat/modal/initiative/InitiativeModal";
import Track from "@/components/combat/Track";
import CurrentMonster from "@/components/combat/currentMonster/CurrentMonster";
import SavingThrowModal from "@/components/combat/modal/savingThrow/SavingThrowModal";
import DamageModal from "@/components/combat/modal/damage/DamageModal";
import HotKeysTable from "@/components/combat/HotKeysTable";
import RollModal from "@/components/combat/modal/roll/RollModal";
// import useHandleKeyUp from "@/hooks/combat/useHandleKeyup2";
import { InitiativeContextContextProvider } from "@/context/combat/initiative/InitiativeContext";
import { SyncInitiativeContextProvider } from "@/context/combat/initiative/SyncInitiativeContext";
import { useViewContext } from "@/context/combat/ViewContext";
import { useMainFocusedContext } from "@/context/combat/MainFocusedContext";
import { useRollContext } from "@/context/combat/RollContext";
import { useEffect } from "react";
import { DamageContextProvider } from "@/context/combat/DamageContext";

export default function Page() {
  const { view, setView } = useViewContext();
  const { mainFocused } = useMainFocusedContext();
  const { setRollInput } = useRollContext();

  useEffect(() => {
    const handleKeyUp = (e: KeyboardEvent) => {
      e.preventDefault();
      if (view === "main") {
        const isNumber = !isNaN(+e.key);
        if (e.key === "i" || e.key === "I") setView("initiative");
        if (e.key === "s" || e.key === "S") setView("savingThrow");
        if (e.key === "d" || e.key === "D") setView("damage");
        if (isNumber && +e.key > 0 && !mainFocused) {
          setView("roll");
          setRollInput(e.key);
        }
      }
      if (view === "roll") {
      }

      //   if (e.key === "Enter") {
      //   }
      // }
      // if (view === "condition") {
      // }
      // if (view === "roll") {
      // }
      // if (view === "savingThrow") {
      // }
    };

    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [view, setView, mainFocused, setRollInput]);
  return (
    <div className="w-full">
      <>
        <>
          <InitiativeContextContextProvider>
            <SyncInitiativeContextProvider>
              <InitiativeModal />
            </SyncInitiativeContextProvider>
          </InitiativeContextContextProvider>
        </>
        {/* <SavingThrowModal /> */}
        <RollModal />
        <>
          <DamageContextProvider>
            <DamageModal />
          </DamageContextProvider>
        </>
      </>
      <Track />
      <CurrentMonster />
      <HotKeysTable />
    </div>
  );
}
