import { Monster } from "./monster";
import { Player } from "./player";

// export type Encounter = Monster[];

export type Encounter = {
  combatant: Monster | Player;
  type: "player" | "monster";
  rolledInitiative: number;
  currentHp: number;
  status: string[];
}[];

export function isMonster(combatant: Monster | Player): combatant is Monster {
  return (combatant as Monster).hasOwnProperty("name"); // Replace 'monsterProperty' with an actual property of Monster
}

export function isPlayer(combatant: Monster | Player): combatant is Player {
  return (combatant as Player).hasOwnProperty("characterName"); // Replace 'playerProperty' with an actual property of Player
}
