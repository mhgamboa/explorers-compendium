"use client";
import React, { useState } from "react";
import ModalWrapper from "@/components/ui/ModalWrapper";
import { useCombatStore } from "@/store/combatStore";

export default function Initiative() {
  const view = useCombatStore((state) => state.view);
  const combatants = useCombatStore((state) => state.combatants);
  const [syncAllMonsters, setSyncAllMonsters] = useState<boolean>(true);

  const rollInitiative = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    console.log("Initiative Rolled");
  };
  const buttonClass = "rounded border p-1";

  if (view !== "initiative") return;
  return (
    <ModalWrapper>
      <div className="flex flex-col">
        <div id="heading" className="flex justify-between border-b-2 py-2">
          {/* Checkbox to sync All Monsters */}
          <div className="flex items-center">
            <input
              type="checkbox"
              name="syncMonsters"
              id="syncMonsters"
              checked={syncAllMonsters}
              onClick={() => setSyncAllMonsters(!syncAllMonsters)}
            />
            <label htmlFor="syncMonsters" className="pl-1">
              Sync All Monsters
            </label>
          </div>
          {/* Button to roll initiative */}
          <button className={buttonClass} onClick={rollInitiative}>
            Roll Initiative
          </button>
        </div>
        <div
          id="combatants"
          className="flex flex-wrap justify-center gap-2 py-6"
        >
          {combatants.map((c, i) => {
            console.log(c._id + i);
            return (
              <div
                key={c._id + i}
                className="w-32 rounded border-2 p-2 text-center"
              >
                {c.name}
              </div>
            );
          })}
        </div>
        <div id="foot" className="flex justify-end gap-x-4 border-t-2 pt-3">
          <button className={buttonClass}>Cancel &amp; close</button>
          <button className={buttonClass}>Save &amp; close</button>
        </div>
      </div>
    </ModalWrapper>
  );
}
