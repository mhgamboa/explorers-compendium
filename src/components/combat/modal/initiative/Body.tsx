import React from "react";
import { useInitiativeContext } from "@/context/combat/initiative/InitiativeContext";
import { useSyncInitiativeContext } from "@/context/combat/initiative/SyncInitiativeContext";
import calculateModifier from "@/utils/monster/calculateAbilityScore";
import { create } from "mutative";

export default function Body() {
  const { syncInitiative } = useSyncInitiativeContext();
  const { initiativeArray, setInitiativeArray } = useInitiativeContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
    e.preventDefault();
    let newNumber = e.target.value;
    if (newNumber[0] === "0") newNumber.slice(1);
    if (newNumber === "") newNumber = "0";
    if (isNaN(+newNumber)) return;
    const updatedInitiative = create(initiativeArray, (draft) => {
      draft[i].rolled_initiative = +newNumber;
    });
    setInitiativeArray(updatedInitiative);
  };

  return (
    <div className="flex flex-wrap justify-center gap-2 py-6">
      {initiativeArray.map((c, i) => {
        const isMonster = c.monsters ? true : false;
        const initiative = c.monsters
          ? syncInitiative
            ? c.rolled_initiative
            : c.rolled_initiative + calculateModifier(c.monsters.dex)
          : c.rolled_initiative;
        return (
          <div
            key={c.id}
            className="flex w-36 flex-col justify-between rounded border-2 p-2 text-center"
          >
            <div className="h-16">
              {isMonster
                ? c.monsters!.name
                : c.players!.character_name
                  ? c.players!.character_name
                  : `Player ${c.player_id}`}
            </div>
            <input
              type="text"
              value={c.rolled_initiative}
              className="rounded border p-1 text-center"
              onChange={(e) => handleChange(e, i)}
            />
            <div className="h-6">{initiative}</div>
            <div className="h-5 text-xs text-gray-500">
              {c.monsters?.dex && !syncInitiative && (
                <>
                  ({c.rolled_initiative} + {calculateModifier(c.monsters.dex)})
                </>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
