import React, { ChangeEvent } from "react";
import { create } from "mutative";

import dynamic from "next/dynamic";
const Select = dynamic(() => import("react-select"), { ssr: false });
import makeAnimated from "react-select/animated";
const animatedComponents = makeAnimated();

import { conditions, Condition } from "@/types/combat";
import { useEncounterContext } from "@/context/combat/EncounterContext";
import { useIndexContext } from "@/context/combat/IndexContext";
import useCurrentCombatant from "@/hooks/combat/useCurrentCombatant";
import { useMainFocusedContext } from "@/context/combat/MainFocusedContext";

export default function CurrentStats() {
  const currentCombatant = useCurrentCombatant();
  const { rolled_initiative: rolledInitiative } = currentCombatant;

  return (
    <div className="flex w-full flex-col gap-2 pb-2">
      <div className="flex justify-between">
        <div>
          <span className="text-lg text-red-900">Current Hp: </span>
          <HPInput />
        </div>
        <div>
          <span className="text-lg text-red-900">Initiative: </span>
          {rolledInitiative}
        </div>
      </div>
      <SelectCondition />
    </div>
  );
}

const HPInput = () => {
  const { setMainFocused } = useMainFocusedContext();

  const { index } = useIndexContext();
  const { encounter, setEncounter } = useEncounterContext();
  const { current_hp } = useCurrentCombatant();

  const handleCurrentHp = (e: ChangeEvent<HTMLInputElement>) => {
    const updatedEncounter = create(encounter, (draft) => {
      draft.encounter_stats[index].current_hp = +e.target.value;
    });
    setEncounter(updatedEncounter);
  };

  return (
    <input
      className="w-content w-12 rounded border pl-1"
      type="number"
      name="currentHp"
      id="currentHp"
      value={current_hp}
      onChange={handleCurrentHp}
      onFocus={() => setMainFocused(true)}
      onBlur={() => setMainFocused(false)}
    />
  );
};

const SelectCondition = () => {
  const { index } = useIndexContext();
  const { encounter, setEncounter } = useEncounterContext();
  const { conditions: currentConditions } = useCurrentCombatant();

  // react-select passes unknown
  const handleCondition = (e: unknown) => {
    const updatedEncounter = create(encounter, (draft) => {
      const arr = e as { value: Condition; label: Condition }[]; // Setting up the Types (From Unknown)
      const conditions = arr.map((c) => c.value); // Types are now set up to be used in Encounter
      draft.encounter_stats[index].conditions = conditions;
    });
    setEncounter(updatedEncounter);
  };
  return (
    <Select
      className="w-full"
      name="Conditions"
      placeholder="Conditions"
      closeMenuOnSelect={false}
      components={animatedComponents}
      options={conditions.map((c) => ({ value: c, label: c }))}
      value={currentConditions.map((c) => ({ value: c, label: c }))}
      onChange={handleCondition}
      isMulti
    />
  );
};
