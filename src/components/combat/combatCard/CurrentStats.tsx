import React from "react";

import dynamic from "next/dynamic";
const Select = dynamic(() => import("react-select"), { ssr: false });
import makeAnimated from "react-select/animated";
const animatedComponents = makeAnimated();

import { useCombatStore } from "@/store/combatStore";
import { isMonster, conditions, Condition } from "@/types/combatTypes";

export default function CurrentStats() {
  const combatants = useCombatStore((state) => state.combatants);
  const setCombatants = useCombatStore((state) => state.setCombatants);
  const index = useCombatStore((state) => state.index);
  const currentcombatant = combatants[index];
  const { rolledInitiative, currentHp, status, combatant } = currentcombatant;

  // react-select passes unknown
  const handleCondition = (e: unknown) => {
    const arr = e as { value: Condition; label: Condition }[];
    const conditions = arr.map((c) => c.value);
    const newCombatants = [...combatants];
    newCombatants[index].status = conditions;
    setCombatants(newCombatants);
  };

  return (
    <div className="flex w-full flex-col gap-2 pb-2">
      <div className="flex justify-between">
        <div>
          <span className="text-lg text-red-900">Current Hp: </span>
          {currentHp}
          {isMonster(combatant) && `/${combatant.hp.value}`}
          {!isMonster(combatant) &&
            combatant.totalHp &&
            `/${combatant.totalHp}`}
        </div>
        <div>
          <span className="text-lg text-red-900">Initiative: </span>
          {rolledInitiative}
        </div>
      </div>
      <Select
        className="w-full"
        name="Conditions"
        placeholder="Conditions"
        closeMenuOnSelect={false}
        components={animatedComponents}
        options={conditions.map((s) => ({ value: s, label: s }))}
        value={status.map((c) => ({ value: c, label: c }))}
        onChange={handleCondition}
        isMulti
      />
    </div>
  );
}
