import { create } from "zustand";
import { Encounter } from "@/types/combatTypes";

export type View = "main" | "initiative" | "damage" | "roll" | "savingThrow";
export type SavingThrow = "" | "str" | "dex" | "con" | "int" | "wis" | "cha";

type CombatState = {
  view: View;
  combatants: Encounter;
  index: number;
  syncInitiative: boolean;
  initiativeArray: number[];
  selectedSavingThrow: SavingThrow;
  currentRoll: String;
  rollDiceError: boolean;
  rolls: number[];
  damage: number[];
};

type CombatActions = {
  setView: (view: View) => void;
  setCombatants: (monsters: Encounter) => void;
  setIndex: (n: number) => void;
  toggleSyncInitiative: () => void;
  setInitiativeArray: (n: number[]) => void;
  setSelectedSavingThrow: (s: SavingThrow) => void;
  setCurrentRoll: (s: String) => void;
  setRollDiceError: (e: boolean) => void;
  setRolls: (e: number[]) => void;
  setDamage: (d: number[]) => void;
};

export const useCombatStore = create<CombatState & CombatActions>()((set) => ({
  view: "main",
  setView: (view) => set({ view }),

  combatants: [],
  setCombatants: (combatants) =>
    set({
      combatants: combatants.sort(
        (a, b) => a.rolledInitiative - b.rolledInitiative,
      ),
    }),

  index: 0,
  setIndex: (n) => set({ index: n }),

  syncInitiative: true,
  toggleSyncInitiative: () =>
    set((state) => ({
      syncInitiative: !state.syncInitiative,
    })),

  initiativeArray: [],
  setInitiativeArray: (initiativeArray) => set({ initiativeArray }),
  selectedSavingThrow: "",
  setSelectedSavingThrow: (selectedSavingThrow) => set({ selectedSavingThrow }),

  currentRoll: "",
  setCurrentRoll: (currentRoll) => set({ currentRoll }),
  rollDiceError: false,
  setRollDiceError: (rollDiceError) => set({ rollDiceError }),
  rolls: [],
  setRolls: (rolls) => set({ rolls }),

  damage: [],
  setDamage: (damage) => set({ damage }),
}));
