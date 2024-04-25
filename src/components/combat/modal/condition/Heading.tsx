import React from "react";
import { rollDice } from "@/utils/combat/rollDice";
import { isMonster } from "@/types/combatTypes";
import { useCombatStore } from "@/store/combatStore";

function Heading() {
  const combatants = useCombatStore((state) => state.combatants);
  const setCombatants = useCombatStore((state) => state.setCombatants);
  const setInitiativeArray = useCombatStore((s) => s.setInitiativeArray);

  const syncInitiative = useCombatStore((state) => state.syncInitiative);
  const toggleSyncInitiative = useCombatStore((s) => s.toggleSyncInitiative);

  const rollInitiative = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    const rolledInitiative = rollDice(20);
    const arr = combatants.map((c) => {
      if (!isMonster(c.combatant)) return c.rolledInitiative;

      return syncInitiative ? rolledInitiative : rollDice(20);
    });

    setInitiativeArray(arr);
  };
  return (
    <div className="flex justify-between border-b-2 py-2">
      <div className="flex items-center text-xl font-bold text-red-900">
        Assign Damage
      </div>
    </div>
  );
}

export default Heading;
