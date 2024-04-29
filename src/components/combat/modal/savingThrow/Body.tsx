import React from "react";
import { useCombatStore } from "@/store/combatStore";
import { isPlayer, conditions, Condition } from "@/types/combatTypes";
import Card from "./Card";

export default function Body() {
  const combatants = useCombatStore((s) => s.combatants);
  const setCondition = useCombatStore((s) => s.setSavingThrowCondition);

  const handleCondition = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setCondition(e.target.value as Condition);
  };

  return (
    <div className="flex flex-col pb-2">
      <div className="no-scrollbar flex max-h-[55svh] flex-wrap justify-center gap-2 overflow-scroll py-6">
        {combatants.map((c, i) => {
          if (isPlayer(c.combatant)) return;
          return <Card i={i} key={i} monster={c.combatant} />;
        })}
      </div>
      {/* <Cards /> */}
      <div className="flex justify-around gap-y-4">
        <input
          type="text"
          placeholder="Full Damage Amount"
          className="rounded border p-2"
        />
        <select
          id="conditions"
          className="rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
          onChange={handleCondition}
        >
          {conditions.map((c, i) => (
            <option key={i} value={c}>
              {c === "" ? "Condition" : c}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
