import React from "react";
import { isMonster, isPlayer } from "@/types/encounter";
import { useCombatStore } from "@/store/combatStore";
import calculateModifier from "@/lib/monster/calculateAbilityScore";
import { Player } from "@/types/player";
import { Monster } from "@/types/monster";

export default function Body() {
  const combatants = useCombatStore((state) => state.combatants);
  const initiativeHighlight = useCombatStore((s) => s.initiativeHighlight);
  const setInitiativeHighlight = useCombatStore(
    (s) => s.setInitiativeHighlight,
  );
  return (
    <div id="combatants" className="flex flex-wrap justify-center gap-2 py-6">
      {combatants.map((c, i) => {
        return (
          <div
            key={i}
            onClick={() => setInitiativeHighlight(i)}
            className={`flex w-32 cursor-pointer flex-col justify-between rounded border-2 p-2 text-center ${i === initiativeHighlight && "bg-red-500"}`}
          >
            {isMonster(c.combatant) && (
              <MonsterCard
                monster={c.combatant}
                rolledInitiative={c.rolledInitiative}
              />
            )}
            {isPlayer(c.combatant) && (
              <PlayerCard
                player={c.combatant}
                rolledInitiative={c.rolledInitiative}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

type MonsterProps = {
  monster: Monster;
  rolledInitiative: number;
};
const MonsterCard = ({ monster, rolledInitiative }: MonsterProps) => {
  const syncInitiative = useCombatStore((state) => state.syncInitiative);
  const initiative = syncInitiative
    ? rolledInitiative
    : rolledInitiative + calculateModifier(monster.abilities.dex);
  return (
    <>
      <div>{monster.name}</div>
      <div>{initiative}</div>
      {rolledInitiative > 0 && !syncInitiative && (
        <div className="text-xs text-gray-500">
          ({rolledInitiative} + {calculateModifier(monster.abilities.dex)})
        </div>
      )}
    </>
  );
};

type PlayerProps = {
  player: Player;
  rolledInitiative: number;
};
const PlayerCard = ({ player, rolledInitiative }: PlayerProps) => {
  return (
    <>
      <div>{player.characterName}</div>
      <div>{rolledInitiative}</div>
    </>
  );
};
