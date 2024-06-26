import React from "react";
import { useCombatStore } from "@/store/combatStore";
import calculateDamage from "@/utils/combat/savingThrow/calculateDamage";
import calculateModifier from "@/utils/monster/calculateAbilityScore";
import resetSavingThrows from "@/utils/combat/savingThrow/resetSavingThrows";
import { Condition, isPlayer } from "@/types/combat";
import determineRoll from "@/utils/combat/savingThrow/determineRoll";

export default function Foot() {
  const setView = useCombatStore((s) => s.setView);
  const combatants = useCombatStore((s) => s.combatants);
  const setCombatants = useCombatStore((s) => s.setCombatants);
  const DC = useCombatStore((s) => s.DC);
  const condition = useCombatStore((s) => s.savingThrowCondition);
  const savingThrows = useCombatStore((s) => s.savingThrows);
  const STType = useCombatStore((s) => s.savingThrowType);
  const STFullDamage = useCombatStore((s) => s.savingThrowDamage);

  const saveEffects = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const newCombatants = combatants.map((c, i) => {
      const { rolling, roll1, roll2, rollType, damageAmount } = savingThrows[i];
      if (!rolling) return c;
      if (isPlayer(c.combatant)) return c;
      const abilityScore =
        STType !== "" ? calculateModifier(c.combatant.abilities[STType]) : 0;

      const roll = determineRoll(roll1, roll2, rollType);
      const modifiedRoll = roll + abilityScore;
      const result = modifiedRoll >= DC ? "Pass" : "Fail";
      const finalDamage = calculateDamage(result, damageAmount, STFullDamage);
      let status: Condition[] = [];
      const immune = c.combatant.conditionImmunities.includes(
        condition.toLowerCase(),
      );

      status = c.status.includes(condition)
        ? [...c.status]
        : [...c.status, condition];

      return { ...c, currentHp: c.currentHp - finalDamage, status };
    });
    setCombatants(newCombatants);
    resetSavingThrows();
    setView("main");
  };

  const closeInitiative = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    setView("main");
    resetSavingThrows();
  };
  return (
    <div className="flex justify-end gap-x-4 border-t-2 pt-2">
      <button className="rounded border p-2" onClick={closeInitiative}>
        Cancel
      </button>
      <button className="rounded border bg-green-200 p-2" onClick={saveEffects}>
        Save
      </button>
    </div>
  );
}
