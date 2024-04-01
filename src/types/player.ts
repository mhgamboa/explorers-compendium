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
