import { create } from "zustand";
import { Monster } from "@/types/monster";
import { Encounter } from "@/types/encounter";

type View = "main" | "initiative" | "damage" | "roll";

type CombatState = {
  view: View;
  combatants: Encounter;
  index: number;
  syncInitiative: boolean;
  initiativeHighlight: number;
};

type CombatActions = {
  setView: (view: View) => void;
  setCombatants: (monsters: Encounter) => void;
  setIndex: (n: number) => void;
  toggleSyncInitiative: () => void;
  setInitiativeHighlight: (n: number) => void;
};

export const useCombatStore = create<CombatState & CombatActions>((set) => ({
  view: "main",
  setView: (view) => {
    set({ view });
  },
  combatants: [],
  setCombatants: (combatants) => {
    set({ combatants });
  },
  index: 0,
  setIndex(n) {
    set({ index: n });
  },
  syncInitiative: true,
  toggleSyncInitiative: () => {
    set((state) => ({
      syncInitiative: !state.syncInitiative,
    }));
  },
  initiativeHighlight: 0,
  setInitiativeHighlight: (n) => {
    set({ initiativeHighlight: n });
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
