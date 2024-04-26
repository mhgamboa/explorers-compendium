import { MouseEvent } from "react";
import { useCombatStore, SavingThrow } from "@/store/combatStore";
import { rollDice } from "@/utils/combat/rollDice";

const savingThrowsArr: SavingThrow[] = [
  "str",
  "dex",
  "con",
  "int",
  "wis",
  "cha",
];

export default function Heading() {
  const savingThrowType = useCombatStore((s) => s.savingThrowType);
  const setSavingThrowType = useCombatStore((s) => s.setSavingThrowType);
  const setSavingThrows = useCombatStore((s) => s.setSavingThrows);
  const savingThrows = useCombatStore((s) => s.savingThrows);

  const DC = useCombatStore((s) => s.DC);
  const setDC = useCombatStore((s) => s.setDC);

  const rollSavingThrows = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) => {
    e.preventDefault();
    const newST = savingThrows.map((s) => {
      if (!s.rolling) return s;
      if (s.rollType === "Norm") return { ...s, roll1: rollDice(20) };
      return { ...s, roll1: rollDice(20), roll2: rollDice(20) };
    });
    setSavingThrows(newST);
  };

  const handleClick = (s: SavingThrow) =>
    savingThrowType === s ? setSavingThrowType!("") : setSavingThrowType!(s);

  return (
    <div className="flex flex-col gap-y-3 border-b-2 py-2">
      <div className="flex justify-between gap-10">
        <label htmlFor="DC" className="sr-only">
          Difficulty Class
        </label>
        <input
          type="number"
          name="DC"
          id="DC"
          className="w-36 rounded border px-2 py-1"
          placeholder="Difficulty Class"
          value={DC === 0 ? "" : DC!.toString()} // Convert DC to string to remove leading zero
          onChange={(e) => {
            const value = parseInt(e.target.value.trim(), 10) || 0;
            setDC!(value);
          }}
        />
        <button
          className=" w-40 rounded border bg-red-800 p-1 text-white"
          onClick={rollSavingThrows}
        >
          Roll Saving Throws
        </button>
      </div>
      <div className="mx-auto flex w-full max-w-96 items-center justify-around">
        {savingThrowsArr.map((t, i) => {
          return (
            <div
              key={i}
              className={`cursor-pointer rounded border px-2 py-1 ${savingThrowType === t && "bg-slate-200"}`}
              onClick={() => handleClick(t)}
            >
              {t}
            </div>
          );
        })}
      </div>
    </div>
  );
}
