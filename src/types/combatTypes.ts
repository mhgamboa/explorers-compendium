export const conditions = [
  "",
  "Blinded",
  "Charmed",
  "Deafened",
  "Frightened",
  "Grappled",
  "Incapacitated",
  "Invisible",
  "Paralyzed",
  "Petrified",
  "Poisoned",
  "Prone",
  "Restrained",
  "Stunned",
  "Unconscious",
  "Exhaustion",
] as const;
export type Condition = (typeof conditions)[number];

export type Player = {
  characterName: string;
  playerName: string;
  class?: string;
  level?: number;
  totalHp?: number;
  ac?: number;
  passivePerception?: number;
  user_Id?: { $oid: string };
};

export type Monster = {
  _id: string;
  name: string;
  source: string;
  type: string;
  hp: {
    value: number;
    notes: string;
  };
  ac: {
    value: number;
    notes: string;
  };
  // initiativeModifier: number;
  speed: string[];
  abilities: {
    str: number;
    dex: number;
    con: number;
    int: number;
    wis: number;
    cha: number;
  };
  damageVulnerabilities: string[];
  damageResistances: string[];
  damageImmunities: string[];
  conditionImmunities: string[];
  saves: {
    name: string;
    modifier: number;
  }[];
  skills: {
    name: string;
    modifier: number;
  }[];
  senses: string[];
  languages: string[];
  challenge: string;
  traits: {
    name: string;
    content: string;
  }[];
  actions: {
    name: string;
    content: string;
  }[];
  reactions: {
    name: string;
    content: string;
  }[];
  legendaryActions: {
    name: string;
    content: string;
  }[];
  description: string;
  user_Id?: { $oid: string };
  tags: string[];
};

// export type Encounter = {
//   monsters: {
//     combatant: Monster;
//     rolledInitiative: number;
//     currentHp: number;
//     status: string[];
//   }[];
//   players: {
//     combatant: Player;
//     rolledInitiative: number;
//     currentHp: number;
//     status: string[];
//   }[];
// };

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
