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
