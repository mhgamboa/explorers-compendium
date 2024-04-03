import React from "react";
import { rollDice } from "@/lib/combat/rollDice";
import { isMonster } from "@/types/encounter";
import { useCombatStore } from "@/store/combatStore";

function Heading() {
  const combatants = useCombatStore((state) => state.combatants);
  const setCombatants = useCombatStore((state) => state.setCombatants);

  const syncInitiative = useCombatStore((state) => state.syncInitiative);
  const toggleSyncInitiative = useCombatStore((s) => s.toggleSyncInitiative);

  const rollInitiative = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    const rolledInitiative = rollDice(20);
    const arr = combatants.map((c) => {
      if (!isMonster(c.combatant)) return c;

      return syncInitiative
        ? { ...c, rolledInitiative }
        : { ...c, rolledInitiative: rollDice(20) };
    });
    setCombatants(arr);
  };
  return (
    <div className="flex justify-between border-b-2 py-2">
      <div className="flex items-center">
        <input
          type="checkbox"
          name="syncMonsters"
          id="syncMonsters"
          checked={syncInitiative}
          onChange={toggleSyncInitiative}
        />
        <label htmlFor="syncMonsters" className="pl-1">
          Sync All Monsters
        </label>
      </div>
      <button className="rounded border p-1" onClick={rollInitiative}>
        Roll Initiative
      </button>
    </div>
  );
}

export default Heading;
