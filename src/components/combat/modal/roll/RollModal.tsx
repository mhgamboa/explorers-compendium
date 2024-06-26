"use client";
import React, { ReactNode, useCallback, useEffect, useState } from "react";
import { useRollContext } from "@/context/combat/RollContext";
import { useViewContext } from "@/context/combat/ViewContext";
import { rollDice } from "@/utils/combat/rollDice";

export default function RollModal() {
  const { view, setView } = useViewContext();
  const { rollInput, setRollInput } = useRollContext();
  const [rolls, setRolls] = useState<number[]>([]);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (view !== "roll") return;

    const regexp = /^\d?\d?d\d{1,}(?:(\+|\-)\d{1,2})?$/; // Format: 11d20+4 No spaces (+4 is optional)

    // Everyting here is copied from the if (key === "Enter") block in the useEffect below
    if (!rollInput.match(regexp)) return setError(true);

    const arr = rollInput.split(/(?:d|\+|\-)/gi);
    if (+arr[0] > 25) return setError(true); // No more than 25 dice
    if (+arr[1] > 100) return setError(true); // Largest die size is a d100
    if (+arr[2] > 50) return setError(true); // Largest Modifier is +/- 50
    const rolls = [];

    for (let i = 0; i < +arr[0]; i++) {
      rolls.push(rollDice(+arr[1]));
    }

    if (arr.length === 2) {
      setRolls(rolls);
      return setError(false);
    }

    rollInput.includes("-") ? rolls.push(-+arr[2]) : rolls.push(+arr[2]);
    setRolls(rolls);
    setError(false);
  }, [rollInput, view]);

  useEffect(() => {
    const handleRollKeyUp = (e: KeyboardEvent) => {
      e.preventDefault();
      console.log("roll");
      if (view !== "roll") return;
      const key = e.key;

      const isNumber = !isNaN(+key);
      if (key === "Escape" || key === "r") {
        setView("main");
        setRollInput("");
        setRolls([]);
      }
      if (key === "d" || key === "D" || isNumber || key === "+" || key === "-")
        setRollInput(rollInput + key);

      if (key === "Backspace") {
        setRollInput(rollInput.slice(0, -1));
        rollInput.slice(0, -1) === "" && setView("main");
        setError(false);
      }

      if (key === "Enter") {
        const regexp = /^\d?\d?d\d{1,}(?:(\+|\-)\d{1,2})?$/; // Format: 11d20+4 No spaces (+4 is optional)

        if (!rollInput.match(regexp)) return setError(true);

        const arr = rollInput.split(/(?:d|\+|\-)/gi);
        if (+arr[0] > 25) return setError(true); // No more than 25 dice
        if (+arr[1] > 100) return setError(true); // Largest die size is a d100
        if (+arr[2] > 50) return setError(true); // Largest Modifier is +/- 50
        const rolls = [];

        for (let i = 0; i < +arr[0]; i++) {
          rolls.push(rollDice(+arr[1]));
        }

        if (arr.length === 2) {
          setRolls(rolls);
          return setError(false);
        }

        rollInput.includes("-") ? rolls.push(-+arr[2]) : rolls.push(+arr[2]);
        setRolls(rolls);
        setError(false);
      }
    };
    if (view === "roll") window.addEventListener("keyup", handleRollKeyUp);
    return () => {
      console.log("removed");
      window.removeEventListener("keyup", handleRollKeyUp);
    };
  }, [view, setView, setRollInput, rollInput]);

  if (view !== "roll") return;
  return (
    <div className="fixed inset-0 z-10 m-auto flex h-fit w-fit flex-col justify-between gap-7 rounded bg-slate-950 bg-opacity-80 p-5 backdrop-blur-sm">
      <div className="w-full text-center">
        <div className="text-4xl text-white sm:text-5xl lg:text-6xl">
          {rollInput}
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
