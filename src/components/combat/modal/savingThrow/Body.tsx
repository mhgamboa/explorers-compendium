import React from "react";
import { useCombatStore } from "@/store/combatStore";
import { isPlayer, conditions, Condition } from "@/types/combatTypes";
import calculateModifier from "@/utils/monster/calculateAbilityScore";
import { ChildProps } from "./SavingThrowModal";

export default function Body({
  rolls,
  setRolls,
  type,
  rollers,
  setRollers,
  DC,
  curCondition,
  setCondition,
}: ChildProps) {
  const combatants = useCombatStore((s) => s.combatants);

  const handleClick = (
    e: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
    i: number,
  ) => {
    e.preventDefault();
    const updatedRollers = rollers!.includes(i)
      ? rollers!.filter((roller) => roller !== i) // Remove if already present
      : [...rollers!, i]; // Add if not present
    setRollers!(updatedRollers);
  };

  const handleCondition = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setCondition!(e.target.value as Condition);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
    const newRolls = rolls!.length > 0 ? [...rolls!] : combatants.map(() => 0);
    newRolls[i] = +e.target.value;
    setRolls!(newRolls);
  };

  return (
    <div className="flex flex-col pb-2 ">
      <div className="flex flex-wrap justify-center gap-2 py-6">
        {combatants.map((c, i) => {
          if (isPlayer(c.combatant)) return;
          const monster = c.combatant;
          const conditionImmunities = c.combatant.conditionImmunities;

          const abilityScore =
            type !== "" && type
              ? calculateModifier(monster.abilities[type])
              : "";
          return (
            <div
              key={i}
              className={`w-42 flex cursor-pointer flex-col items-center justify-between gap-1 rounded border-2 p-2 text-center ${rollers!.includes(i) && "bg-slate-200"}`}
              onClick={(e) => handleClick(e, i)}
            >
              <div className="h-16">{monster.name}</div>
              {type && (
                <div className="text-xs text-gray-400">
                  ({+abilityScore > 0 ? `+${abilityScore}` : abilityScore}{" "}
                  {type})
                </div>
              )}
              <div className="h-6 ">
                {DC && DC > 0 && rollers!.includes(i)
                  ? DC && rolls![i] >= DC
                    ? "Pass"
                    : "Fail"
                  : null}
              </div>
              <input
                type="number"
                className="mb-3 w-1/2 rounded border px-2 py-0.5"
                value={rolls![i] ? rolls![i] : 0}
                placeholder="Roll"
                onClick={(e) => e.stopPropagation()}
                onScroll={(e) => e.preventDefault()}
                onChange={(e) => handleChange(e, i)}
              />
              <div className="h-6 ">
                {DC && DC > 0 && rollers!.includes(i)
                  ? DC && rolls![i] >= DC
                    ? ""
                    : conditionImmunities.includes(curCondition!.toLowerCase())
                      ? `${curCondition} (Immune)`
                      : curCondition
                  : null}
              </div>
            </div>
          );
        })}
      </div>
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
