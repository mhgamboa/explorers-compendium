import React from "react";
import { useCombatStore } from "@/store/combatStore";
import { Player } from "@/types/combatTypes";
import TriangleDivider from "@/components/ui/TriangleDivider";

export default function PlayerDisplay() {
  const combatants = useCombatStore((state) => state.combatants);
  const index = useCombatStore((state) => state.index);
  const player = combatants[index].combatant as Player;

  const { characterName, ac, level, passivePerception, playerName, totalHp } =
    player;
  return (
    <div className="flex flex-col gap-2 p-2 text-red-900">
      <div>
        <span className="mr-3 pb-2 text-2xl font-bold text-red-900">
          {characterName}
        </span>
        <span className="text-xs text-gray-400">({playerName})</span>
      </div>
      <TriangleDivider />
      {level && (
        <div id="hp">
          <span className="font-bold">Level</span> {level}
        </div>
      )}
      {ac && (
        <div id="ac">
          <span className="font-bold">Armor Class</span> {ac}
        </div>
      )}
      {totalHp && (
        <div id="hp">
          <span className="font-bold">Total Health Points</span> {totalHp}
        </div>
      )}
      {player.class && (
        <div id="class">
          <span className="font-bold">Character Class</span> {player.class}
        </div>
      )}
      {passivePerception && (
        <div id="class">
          <span className="font-bold">Passive Perception</span>{" "}
          {passivePerception}
        </div>
      )}
    </div>
  );
}
