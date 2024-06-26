import React from "react";
import TriangleDivider from "@/components/ui/TriangleDivider";
import useCurrentCombatant from "@/hooks/combat/useCurrentCombatant";

export default function PlayerDisplay() {
  const currentCombatant = useCurrentCombatant();

  const {
    ac,
    character_name,
    level,
    player_name,
    total_hp,
    class: playerClass,
    passive_perception,
    id,
  } = currentCombatant.players!;

  return (
    <div className="flex flex-col gap-2 p-2 text-red-900">
      <div>
        <span className="mr-3 pb-2 text-2xl font-bold text-red-900">
          {character_name || `Player ${id}`}
        </span>
        <span className="text-xs text-gray-400">
          {player_name && `${player_name}`}
        </span>
      </div>
      <TriangleDivider />
      <div id="hp">
        <span className="font-bold">Level</span> {level || "N/A"}
      </div>
      <div id="ac">
        <span className="font-bold">Armor Class</span> {ac || "N/A"}
      </div>
      <div id="hp">
        <span className="font-bold">Total Health Points</span>{" "}
        {total_hp || "N/A"}
      </div>
      <div id="class">
        <span className="font-bold">Character Class</span>{" "}
        {playerClass || "N/A"}
      </div>
      <div id="class">
        <span className="font-bold">Passive Perception</span>{" "}
        {passive_perception || "N/A"}
      </div>
    </div>
  );
}
