import React from "react";
import { isMonster, isPlayer } from "@/types/encounter";
import { useCombatStore } from "@/store/combatStore";
import calculateModifier from "@/lib/monster/calculateAbilityScore";
import { Player } from "@/types/player";
import { Monster } from "@/types/monster";

export default function Body() {
  const combatants = useCombatStore((s) => s.combatants);

  return (
    <div id="combatants" className="flex flex-wrap justify-center gap-2 py-6">
      {combatants.map((c, i) => {
        return (
          <div
            key={i}
            className="flex w-32 cursor-pointer flex-col justify-between rounded border-2 p-2 text-center"
          >
            {isMonster(c.combatant) && (
              <MonsterCard
                monster={c.combatant}
                rolledInitiative={c.rolledInitiative}
                i={i}
              />
            )}
            {isPlayer(c.combatant) && (
              <PlayerCard
                player={c.combatant}
                rolledInitiative={c.rolledInitiative}
                i={i}
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
  i: number;
};
const MonsterCard = ({ monster, rolledInitiative, i }: MonsterProps) => {
  // const syncInitiative = useCombatStore((state) => state.syncInitiative);
  const initiativeArray = useCombatStore((s) => s.initiativeArray);
  const setInitiativeArray = useCombatStore((s) => s.setInitiativeArray);

  // const initiative = syncInitiative
  //   ? rolledInitiative
  //   : rolledInitiative + calculateModifier(monster.abilities.dex);
  return (
    <>
      <div>{monster.name}</div>
      {/* <div>{initiative}</div> */}
      <input
        type="text"
        value={initiativeArray[i]}
        className={inputClass}
        onChange={(e) => handleChange(e, i)}
      />
      {/* {rolledInitiative > 0 && !syncInitiative && (
        <div className="text-xs text-gray-500">
          ({rolledInitiative} + {calculateModifier(monster.abilities.dex)})
        </div>
      )} */}
    </>
  );
};

type PlayerProps = {
  player: Player;
  rolledInitiative: number;
  i: number;
};
const PlayerCard = ({ player, rolledInitiative, i }: PlayerProps) => {
  const initiativeArray = useCombatStore((s) => s.initiativeArray);
  return (
    <>
      <div>{player.characterName}</div>
      <input
        type="text"
        value={initiativeArray[i]}
        className={inputClass}
        onChange={(e) => handleChange(e, i)}
      />
    </>
  );
};

const inputClass = "border p-1 text-center rounded";

const handleChange = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
  e.preventDefault();
  let newNumber = e.target.value;
  if (isNaN(+newNumber)) return;

  if (newNumber[0] === "0") newNumber.slice(1);
  if (newNumber === "") newNumber = "0";

  let initiativeArray = [...useCombatStore.getState().initiativeArray];
  initiativeArray[i] = +newNumber;
  useCombatStore.setState({ initiativeArray });
};
