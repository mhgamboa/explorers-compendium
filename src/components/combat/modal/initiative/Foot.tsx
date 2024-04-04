import React from "react";
import { useCombatStore } from "@/store/combatStore";

export default function Foot() {
  const combatants = useCombatStore((state) => state.combatants);
  const setCombatants = useCombatStore((state) => state.setCombatants);
  const initiativeArray = useCombatStore((s) => s.initiativeArray);
  const setInitiativeArray = useCombatStore((s) => s.setInitiativeArray);
  const setView = useCombatStore((s) => s.setView);

  // prettier-ignore
  const saveInitiative = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const updatedCombatants = combatants.map((c, i) => ({...c, rolledInitiative: initiativeArray[i]}));
    setCombatants(updatedCombatants);
    setInitiativeArray(updatedCombatants.map((c) => c.rolledInitiative));
    setView("main");
  };
  // prettier-ignore
  const closeInitiative = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setInitiativeArray(combatants.map((c) => c.rolledInitiative));
    setView("main");
  };

  return (
    <div id="foot" className="flex justify-end gap-x-4 border-t-2 pt-3">
      <button className="rounded border p-2" onClick={closeInitiative}>
        Cancel
      </button>
      <button
        className="rounded border bg-green-200 p-2"
        onClick={saveInitiative}
      >
        Save
      </button>
    </div>
  );
}
