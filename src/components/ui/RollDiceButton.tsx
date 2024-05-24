import React, { MouseEvent } from "react";
import { useCombatStore } from "@/store/combatStore";
import handleRoll from "@/hooks/combat/keyUp/handleRoll";

export default function RollDiceButton({ input }: { input: string }) {
  const setView = useCombatStore((s) => s.setView);
  const setCurrentRoll = useCombatStore((s) => s.setCurrentRoll);
  // console.log("input:");
  // console.log(input);

  const handleClick = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) => {
    e.preventDefault();
    setCurrentRoll(input);
    handleRoll("Enter");
    setView("roll");
  };
  return (
    <button
      onClick={handleClick}
      className="rounded border border-red-700 bg-white bg-opacity-75 px-0.5"
    >
      {input}
    </button>
  );
}
