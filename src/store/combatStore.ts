import { create } from "zustand";
import { Encounter, SavingThrows, Condition } from "@/types/combat";

export type View =
  | "main"
  | "initiative"
  | "damage"
  | "roll"
  | "savingThrow"
  | "condition";

export type SavingThrow = "" | "str" | "dex" | "con" | "int" | "wis" | "cha";

type CombatState = {
  view: View;
  combatants: Encounter;
  index: number;
  syncInitiative: boolean;
  initiativeArray: number[];
  currentRoll: String;
  rollDiceError: boolean;
  rolls: number[];
  damage: number[];
  mainHasFocus: boolean;

  DC: number;
  savingThrowType: SavingThrow;
  savingThrows: SavingThrows;
  savingThrowCondition: Condition;
  savingThrowDamage: number;
};

type CombatActions = {
  setView: (view: View) => void;
  setCombatants: (monsters: Encounter) => void;
  setIndex: (n: number) => void;
  toggleSyncInitiative: () => void;
  setInitiativeArray: (n: number[]) => void;
  setCurrentRoll: (s: String) => void;
  setRollDiceError: (e: boolean) => void;
  setRolls: (e: number[]) => void;
  setDamage: (d: number[]) => void;
  setMainHasFocus: (b: boolean) => void;

  setDC: (b: number) => void;
  setSavingThrowType: (b: SavingThrow) => void;
  setSavingThrows: (b: SavingThrows) => void;
  setSavingThrowCondition: (b: Condition) => void;
  setSavingThrowDamage: (b: number) => void;
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

  currentRoll: "",
  setCurrentRoll: (currentRoll) => set({ currentRoll }),
  rollDiceError: false,
  setRollDiceError: (rollDiceError) => set({ rollDiceError }),
  rolls: [],
  setRolls: (rolls) => set({ rolls }),

  damage: [],
  setDamage: (damage) => set({ damage }),

  mainHasFocus: false,
  setMainHasFocus: (mainHasFocus) => set({ mainHasFocus }),

  DC: 0,
  setDC: (DC) => set({ DC }),
  savingThrowType: "",
  setSavingThrowType: (savingThrowType) => set({ savingThrowType }),
  savingThrows: [],
  setSavingThrows: (savingThrows) => set({ savingThrows }),
  savingThrowCondition: "",
  setSavingThrowCondition: (savingThrowCondition) =>
    set({ savingThrowCondition }),
  savingThrowDamage: 0,
  setSavingThrowDamage: (savingThrowDamage) => set({ savingThrowDamage }),
}));
