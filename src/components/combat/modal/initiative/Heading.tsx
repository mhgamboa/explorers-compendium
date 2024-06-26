import React from "react";
import { rollDice } from "@/utils/combat/rollDice";
import { isMonster } from "@/types/combat";
import { useEncounterContext } from "@/context/combat/EncounterContext";
import { useSyncInitiativeContext } from "@/context/combat/initiative/SyncInitiativeContext";
import useEncounter_Stats from "@/hooks/combat/useEncounter_Stats";
import { useInitiativeContext } from "@/context/combat/initiative/InitiativeContext";

function Heading() {
  const encounter_stats = useEncounter_Stats();
  const { syncInitiative, setSyncInitiative } = useSyncInitiativeContext();
  const { setInitiativeArray } = useInitiativeContext();

  const rollInitiative = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    const rolledInitiative = rollDice(20);

    const newInitiative = encounter_stats.map((c, i) => {
      if (c.players) return c;
      return {
        ...c,
        rolled_initiative: syncInitiative ? rolledInitiative : rollDice(20),
      };
    });
    setInitiativeArray(newInitiative);
  };

  return (
    <div className="flex justify-between border-b-2 py-2">
      <div className="flex items-center">
        <input
          type="checkbox"
          name="syncMonsters"
          id="syncMonsters"
          checked={syncInitiative}
          onChange={() => setSyncInitiative(!syncInitiative)}
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
