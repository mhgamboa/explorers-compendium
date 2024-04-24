import React, { ChangeEvent } from "react";
import { isMonster } from "@/types/combatTypes";
import { useCombatStore } from "@/store/combatStore";

export default function Body() {
  const combatants = useCombatStore((s) => s.combatants);
  const damage = useCombatStore((s) => s.damage);
  console.log(damage);

  return (
    <div id="combatants" className="flex flex-wrap justify-center gap-2 py-6">
      {combatants.map((c, i) => {
        return (
          <div
            key={i}
            className="flex w-32 cursor-pointer flex-col justify-between rounded border-2 p-2 text-center"
          >
            <div>
              {isMonster(c.combatant)
                ? c.combatant.name
                : c.combatant.characterName}
            </div>
            <input
              type="text"
              value={damage[i]}
              className="rounded border p-1 text-center"
              onChange={(e) => handleChange(e, i)}
            />
          </div>
        );
      })}
    </div>
  );
}

const handleChange = (e: ChangeEvent<HTMLInputElement>, i: number) => {
  e.preventDefault();
  let newNumber = e.target.value;
  if (isNaN(+newNumber)) return;

  if (newNumber[0] === "0") newNumber.slice(1);
  if (newNumber === "") newNumber = "0";

  let damage = [...useCombatStore.getState().damage];
  damage[i] = +newNumber;
  useCombatStore.setState({ damage });
};
