import React, { MouseEvent } from "react";
import calculateModifier from "@/utils/monster/calculateAbilityScore";
import { useCombatStore } from "@/store/combatStore";
import { Monster } from "@/types/combat";
import RollInputs from "./RollInputs";
import AdvantageButtons from "./AdvantageButtons";
import DamageButtons from "./DamageButtons";
import determineRoll from "@/utils/combat/savingThrow/determineRoll";
import calculateFinalDamage from "@/utils/combat/savingThrow/calculateDamage";

export default function Cards({ i, monster }: { i: number; monster: Monster }) {
  const STType = useCombatStore((s) => s.savingThrowType);
  const DC = useCombatStore((s) => s.DC);
  const STFullDamage = useCombatStore((s) => s.savingThrowDamage);
  const condition = useCombatStore((s) => s.savingThrowCondition);
  const conditionImmunities = monster.conditionImmunities;
  const savingThrows = useCombatStore((s) => s.savingThrows);
  const setSavingThrows = useCombatStore((s) => s.setSavingThrows);
  const { rolling, roll1, roll2, rollType, damageAmount } = savingThrows[i];

  const handleClick = (
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
  ) => {
    e.preventDefault();
    const updatedST = savingThrows.map((s, ind) =>
      i === ind ? { ...s, rolling: !s.rolling } : s,
    );
    setSavingThrows(updatedST);
  };

  const abilityScore =
    STType !== "" ? calculateModifier(monster.abilities[STType]) : 0;

  const roll = determineRoll(roll1, roll2, rollType);
  const modifiedRoll = roll + abilityScore;
  const result = modifiedRoll >= DC ? "Pass" : "Fail";
  const finalDamage = calculateFinalDamage(result, damageAmount, STFullDamage);

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
      <RollInputs i={i} />
      <AdvantageButtons i={i} />
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
            {STType && (
              <>
                =
                <span
                  className={`font-bold ${result === "Pass" ? "text-green-900" : "text-red-900"}`}
                >
                  {modifiedRoll}
                </span>
              </>
            )}
          </>
        )}
      </div>
      <div className="h-6">
        {rolling && finalDamage > 0 && `${finalDamage} damage`}
      </div>
      <div className="h-6">
        {rolling &&
          (conditionImmunities.indexOf(condition.toLowerCase()) >= 0
            ? `${condition} (immune)`
            : condition)}
      </div>
      <DamageButtons i={i} />
    </div>
  );
}
