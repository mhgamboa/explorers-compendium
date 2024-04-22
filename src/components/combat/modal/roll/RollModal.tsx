"use client";
import React, { ReactNode } from "react";
import { useCombatStore } from "@/store/combatStore";

export default function RollModal() {
  const view = useCombatStore((state) => state.view);
  const currentRoll = useCombatStore((state) => state.currentRoll);
  const rolls = useCombatStore((state) => state.rolls);
  const error = useCombatStore((state) => state.rollDiceError);

  if (view !== "roll") return;

  return (
    <div className="fixed inset-0 z-10 m-auto flex h-fit w-fit flex-col justify-between gap-7 rounded bg-slate-950 bg-opacity-80 p-5 backdrop-blur-sm">
      <div className="w-full text-center">
        <div className="text-4xl text-white sm:text-5xl lg:text-6xl">
          {currentRoll}
        </div>
        <div className="font-bold text-red-500">
          {error && "Please ensure your format is correct"}
        </div>
      </div>
      <div className="flex w-full flex-col gap-0.5 text-center text-gray-300">
        <div>Example: 11d20+4</div>
        <div>
          (No spaces. Max dice of 25d100. Modifier is Optional, and must be ≤
          50)
          {/* (No spaces. Max dice 25d100. Modifier is Optional, and
          can be no larger than 50) */}
        </div>
      </div>
      <div className="w-full text-center text-4xl text-white sm:text-5xl lg:text-6xl">
        {rolls.length > 0 && rolls.length > 1
          ? `${rolls.join(" + ")} = ${rolls.reduce((a, v) => a + v)}`
          : `${rolls.join("+")}`}
      </div>
    </div>
  );
}
