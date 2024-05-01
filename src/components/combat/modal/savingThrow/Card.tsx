import React, { ChangeEvent, MouseEvent } from "react";
import calculateModifier from "@/utils/monster/calculateAbilityScore";
import { useCombatStore } from "@/store/combatStore";
import {
  SavingThrowRollType,
  Monster,
  SavingThrowDamage,
} from "@/types/combatTypes";

const damageArr: SavingThrowDamage[] = ["Half", "Full", "Quarter"];

export default function Cards({ i, monster }: { i: number; monster: Monster }) {
  const STType = useCombatStore((s) => s.savingThrowType);
  const DC = useCombatStore((s) => s.DC);
  const STDamage = useCombatStore((s) => s.savingThrowDamage);
  const SetSTDamage = useCombatStore((s) => s.setSavingThrowDamage);
  const condition = useCombatStore((s) => s.savingThrowCondition);
  const conditionImmunities = monster.conditionImmunities;
  const savingThrows = useCombatStore((s) => s.savingThrows);
  const setSavingThrows = useCombatStore((s) => s.setSavingThrows);
  const { rolling, roll1, roll2, rollType, damage } = savingThrows[i];

  const handleClick = (
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
  ) => {
    e.preventDefault();
    const updatedST = savingThrows.map((s, ind) =>
      i === ind ? { ...s, rolling: !s.rolling } : s,
    );
    setSavingThrows(updatedST);
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>, roll: string) => {
    const newST = [...savingThrows];
    roll === "roll1"
      ? (newST[i].roll1 = +e.target.value)
      : (newST[i].roll2 = +e.target.value);
    newST[i].rolling === false && (newST[i].rolling = true);

    setSavingThrows(newST);
  };

  const handleButton = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    s: SavingThrowRollType,
  ) => {
    e.stopPropagation();
    const newST = [...savingThrows];
    newST[i].rollType = s;
    newST[i].rolling === false && (newST[i].rolling = true);
    setSavingThrows(newST);
  };

  const abilityScore =
    STType !== "" ? calculateModifier(monster.abilities[STType]) : 0;

  const roll =
    rollType === "Norm"
      ? roll1
      : rollType === "Dis"
        ? Math.min(roll1, roll2)
        : Math.max(roll1, roll2);

  const finalRoll = roll + abilityScore;
  const result = finalRoll >= DC ? "Pass" : "Fail";

  let finalDamage =
    result === "Pass"
      ? 0
      : damage === "Half"
        ? Math.floor(STDamage / 2)
        : damage === "Quarter"
          ? Math.floor(STDamage / 4)
          : STDamage;

  return (
    <div
      className={`flex max-h-96 w-48 cursor-pointer flex-col items-center justify-between gap-1 rounded border-2 p-2 text-center ${rolling && "bg-slate-200"}`}
      onClick={handleClick}
    >
      <div className="">{monster.name}</div>
      <div className="h-4 text-xs text-gray-400">
        {STType &&
          `(${+abilityScore > 0 ? `+${abilityScore}` : abilityScore} ${STType})`}
      </div>
      {/* Number Inputs */}
      <div className="flex w-full justify-around py-2">
        <input
          type="number"
          className="w-16 rounded border px-2 py-0.5"
          value={roll1}
          onClick={(e) => e.stopPropagation()}
          onScroll={(e) => e.preventDefault()}
          onChange={(e) => handleInput(e, "roll1")}
        />
        <input
          type="number"
          className="w-16 rounded border px-2 py-0.5"
          value={rollType === "Norm" ? 0 : roll2}
          onClick={(e) => e.stopPropagation()}
          onScroll={(e) => e.preventDefault()}
          onChange={(e) => handleInput(e, "roll2")}
          disabled={rollType === "Norm"}
        />
      </div>
      {/* Buttons */}
      <div className="flex w-full justify-between gap-x-2">
        {["Dis", "Norm", "Adv"].map((s) => {
          return (
            <button
              key={s}
              className={`rounded-sm border border-gray-300 px-2 py-1 ${rollType === s && "bg-red-800 text-white"} `}
              onClick={(e) => handleButton(e, s as SavingThrowRollType)}
            >
              {s}
            </button>
          );
        })}
      </div>
      <div className="h-6">
        {rolling && (
          <>
            <span
              className={`${roll === 20 && "font-bold text-green-900"} ${roll === 1 && "font-bold text-red-900"}`}
            >
              {roll}
            </span>
            {STType &&
              `${+abilityScore >= 0 ? `+${abilityScore}` : abilityScore}`}
            {STType && `=${finalRoll}`}
          </>
        )}
      </div>
      <div className="h-6">{rolling && `${finalDamage} damage`}</div>
      <div className="h-6">
        {rolling &&
          (conditionImmunities.indexOf(condition.toLowerCase()) >= 0
            ? `${condition} (immune)`
            : condition)}
      </div>
      <div className="flex gap-x-2">
        {damageArr.map((d, ind) => {
          return (
            <div
              className={`flex cursor-pointer items-center rounded px-2 py-1 ${damage === d && "bg-red-800 text-white"}`}
              onClick={(e) => {
                e.stopPropagation();
                const newST = [...savingThrows];
                newST[i].damage = d;
                setSavingThrows(newST);
              }}
              key={d}
            >
              {d}
            </div>
          );
        })}
      </div>
    </div>
  );
}
