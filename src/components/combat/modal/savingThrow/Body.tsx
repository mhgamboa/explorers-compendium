import React, { MouseEvent } from "react";
import { useCombatStore } from "@/store/combatStore";
import { Monster, Player, isMonster, isPlayer } from "@/types/combatTypes";

export default function Body() {
  const combatants = useCombatStore((s) => s.combatants);
  const whoRollsSavingThrows = [
    ...useCombatStore((s) => s.whoRollsSavingThrows),
  ];
  const setWhoRollsSavingThrows = useCombatStore(
    (s) => s.setWhoRollsSavingThrows,
  );

  const handleClick = (
    e: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
    i: number,
  ) => {
    e.preventDefault();
    const index = whoRollsSavingThrows.indexOf(i);
    index === -1
      ? whoRollsSavingThrows.push(i)
      : whoRollsSavingThrows.splice(index, 1);
    console.log(whoRollsSavingThrows);
    setWhoRollsSavingThrows(whoRollsSavingThrows);
  };

  return (
    <div className="flex flex-col pb-2 ">
      <div className="flex flex-wrap justify-center gap-2 py-6">
        {combatants.map((c, i) => {
          if (isPlayer(c.combatant)) return;
          const monster = c.combatant;
          return (
            <div
              key={i}
              className={`flex w-32 cursor-pointer flex-col justify-between rounded border-2 p-2 text-center ${whoRollsSavingThrows.includes(i) && "bg-red-100"}`}
              onClick={(e) => handleClick(e, i)}
            >
              <div>{monster.name}</div>
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
        {/* <select
          id="countries"
          className="block rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
        >
          <option selected>Select Status</option>
          <option value="Blinded">Blinded</option>
          <option value="Charmed">Charmed</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select> */}
      </div>
    </div>
  );
}
