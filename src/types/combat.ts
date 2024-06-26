import useEncounter_Stats from "@/hooks/combat/useEncounter_Stats";

export type View =
  | "main"
  | "initiative"
  | "damage"
  | "savingThrow"
  | "roll"
  | "condition";

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

export type Encounter_Stats = ReturnType<typeof useEncounter_Stats>;

export type Damage = { damage: number; id: number; name: string }[];

export type Saves = {
  name: string;
  modifier: number;
}[];
export type Skills = {
  name: string;
  modifier: number;
}[];

export type Traits = {
  name: string;
  description: string;
}[];

export type Actions = {
  title: string;
  content: { name: string; description: string }[];
}[];

export type SavingThrowRollType = "Adv" | "Dis" | "Norm";
export type SavingThrowDamage = "Full" | "Half" | "Quarter" | "None";

export type SavingThrows = {
  roll1: number;
  roll2: number;
  rolling: boolean;
  rollType: SavingThrowRollType;
  damageAmount: SavingThrowDamage;
}[];

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
    description: string;
  }[];
  actions: {
    title: string;
    content: { name: string; description: string }[];
  }[];
  // I am here
  description: string;
  tags: string[];
  // Goal
  user_Id?: { $oid: string };
};

export type Encounter = {
  combatant: Monster | Player;
  type: "player" | "monster";
  rolledInitiative: number;
  currentHp: number;
  status: Condition[];
}[];

export function isMonster(combatant: Monster | Player): combatant is Monster {
  return (combatant as Monster).hasOwnProperty("name"); // Replace 'monsterProperty' with an actual property of Monster
}

export function isPlayer(combatant: Monster | Player): combatant is Player {
  return (combatant as Player).hasOwnProperty("characterName"); // Replace 'playerProperty' with an actual property of Player
}
