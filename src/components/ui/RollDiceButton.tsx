import React, { MouseEvent } from "react";
import { useCombatStore } from "@/store/combatStore";
import handleRoll from "@/hooks/combat/keyUp/handleRoll";
import { useViewContext } from "@/context/combat/ViewContext";
import { useRollContext } from "@/context/combat/RollContext";

export default function RollDiceButton({ input }: { input: string }) {
  const { setView } = useViewContext();
  const { setRollInput } = useRollContext();

  const handleClick = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) => {
    e.preventDefault();
    setRollInput(input);
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
