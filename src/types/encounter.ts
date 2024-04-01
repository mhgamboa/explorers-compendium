import { Monster } from "./monster";
import { Player } from "./player";

// export type Encounter = Monster[];

export type Encounter = {
  combatant: Monster | Player;
  type: "player" | "monster";
  initiative: number;
  currentHp: number;
  status: string[];
}[];
