import { Monster } from "./monster";
import { Player } from "./player";

// export type Encounter = Monster[];

export type Encounter = [
  {
    combatant: Monster | Player;
    initiative: number;
    currentHp: number;
    status: string[];
  },
];
