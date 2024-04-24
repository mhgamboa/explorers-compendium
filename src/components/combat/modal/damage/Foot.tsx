import React from "react";
import { useCombatStore } from "@/store/combatStore";

export default function Foot() {
  const combatants = useCombatStore((state) => state.combatants);
  const setCombatants = useCombatStore((state) => state.setCombatants);
  const damage = useCombatStore((s) => s.damage);
  const setDamage = useCombatStore((s) => s.setDamage);
  const setView = useCombatStore((s) => s.setView);

  // prettier-ignore
  const saveDamage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const updatedCombatants = combatants.map((c, i) => ({...c, currentHp: c.currentHp - damage[i]}));
    setCombatants(updatedCombatants);
    setDamage(updatedCombatants.map(() => 0));
    setView("main");
  };
  // prettier-ignore
  const closeDamage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setView("main");
  };

  return (
    <div id="foot" className="flex justify-end gap-x-4 border-t-2 pt-3">
      <button className="rounded border p-2" onClick={closeDamage}>
        Cancel
      </button>
      <button className="rounded border bg-green-200 p-2" onClick={saveDamage}>
        Save
      </button>
    </div>
  );
}
