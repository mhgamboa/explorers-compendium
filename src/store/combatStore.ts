import { create } from "zustand";
import { Monster } from "@/types/monster";

type View = "main" | "initiative" | "damage" | "roll";

type CombatState = {
  view: View;
  combatants: Monster[];
  index: number;
};

type CombatActions = {
  setView: (view: View) => void;
  setCombatants: (monsters: Monster[]) => void;
  setIndex: (n: number) => void;
};

export const useCombatStore = create<CombatState & CombatActions>((set) => ({
  view: "main",
  setView: (view) => {
    set({ view });
  },
  combatants: [],
  setCombatants: (monsters) => {
    set({ combatants: monsters });
  },
  index: 0,
  setIndex(n) {
    set({ index: n });
  },
  // count: 0,
  // increment: () => {
  //   set((state) => ({
  //     count: state.count + 1,
  //   }));
  // },
  // decrement: () => {
  //   set((state) => ({
  //     count: state.count - 1,
  //   }));
  // },
}));
