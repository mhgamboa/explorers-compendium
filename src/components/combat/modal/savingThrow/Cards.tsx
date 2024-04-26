import React, { ChangeEvent, MouseEvent } from "react";
import calculateModifier from "@/utils/monster/calculateAbilityScore";
import { useCombatStore } from "@/store/combatStore";
import {
  isPlayer,
  conditions,
  Condition,
  SavingThrows,
  SavingThrowRollType,
} from "@/types/combatTypes";

export default function Cards() {
  const combatants = useCombatStore((s) => s.combatants);
  const savingThrows = useCombatStore((s) => s.savingThrows);
  const setSavingThrows = useCombatStore((s) => s.setSavingThrows);
  const DC = useCombatStore((s) => s.DC);
  const savingThrowType = useCombatStore((s) => s.savingThrowType);
  const condition = useCombatStore((s) => s.savingThrowCondition);

  const handleClick = (
    e: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
    i: number,
  ) => {
    e.preventDefault();
    const updatedST = savingThrows.map((s, ind) =>
      i === ind ? { ...s, rolling: !s.rolling } : s,
    );
    setSavingThrows(updatedST);
  };

  const handleInput = (
    e: ChangeEvent<HTMLInputElement>,
    i: number,
    r: string,
  ) => {
    const newST = [...savingThrows];
    r === "roll1"
      ? (newST[i].roll1 = +e.target.value)
      : (newST[i].roll2 = +e.target.value);
    setSavingThrows(newST);
  };

  const handleButton = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    i: number,
    s: SavingThrowRollType,
  ) => {
    e.stopPropagation();
    const newST = [...savingThrows];
    newST[i].rollType = s;
    newST[i].rolling === false && (newST[i].rolling = true);
    setSavingThrows(newST);
  };

  return (
    <div className="flex flex-wrap justify-center gap-2 py-6">
      {combatants.map((c, i) => {
        if (isPlayer(c.combatant)) return;
        const monster = c.combatant;
        const conditionImmunities = c.combatant.conditionImmunities;

        const abilityScore =
          savingThrowType !== "" && savingThrowType
            ? calculateModifier(monster.abilities[savingThrowType])
            : "";
        return (
          <div
            key={i}
            className={`w-42 flex cursor-pointer flex-col items-center justify-between gap-1 rounded border-2 p-2 text-center ${savingThrows[i].rolling && "bg-slate-200"}`}
            onClick={(e) => handleClick(e, i)}
          >
            <div className="h-16">{monster.name}</div>
            {savingThrowType && (
              <div className="text-xs text-gray-400">
                ({+abilityScore > 0 ? `+${abilityScore}` : abilityScore}{" "}
                {savingThrowType})
              </div>
            )}
            <div className="flex w-full justify-around">
              <input
                type="number"
                className="mb-3 w-16 rounded border px-2 py-0.5"
                value={savingThrows[i].roll1}
                placeholder="Roll"
                onClick={(e) => e.stopPropagation()}
                onScroll={(e) => e.preventDefault()}
                onChange={(e) => handleInput(e, i, "roll1")}
              />
              <input
                type="number"
                className="mb-3 w-16 rounded border px-2 py-0.5"
                value={
                  savingThrows[i].rollType === "Norm"
                    ? 0
                    : savingThrows[i].roll2
                }
                placeholder="Roll"
                onClick={(e) => e.stopPropagation()}
                onScroll={(e) => e.preventDefault()}
                onChange={(e) => handleInput(e, i, "roll2")}
                disabled={savingThrows[i].rollType === "Norm"}
              />
            </div>
            <div className="flex w-full justify-between gap-x-2">
              {["Dis", "Norm", "Adv"].map((s) => {
                return (
                  <button
                    key={s}
                    className={`rounded-sm border border-gray-300 px-2 py-1 ${savingThrows[i].rollType === s && "bg-red-800 text-white"} `}
                    onClick={(e) =>
                      handleButton(e, i, s as SavingThrowRollType)
                    }
                  >
                    {s}
                  </button>
                );
              })}
            </div>
            <div className="h-6"></div>
            <div className="h-6"></div>
          </div>
        );
      })}
    </div>
  );
}
