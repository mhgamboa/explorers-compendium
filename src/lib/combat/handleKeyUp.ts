import { useCombatStore } from "@/store/combatStore";

const useHandleKeyUp = (e: KeyboardEvent) => {
  const view = useCombatStore.getState().view;
  const combatants = useCombatStore.getState().combatants;
  if (view === "main") handleMain(e.key);
  if (view === "initiative") handleInitiative(e.key);
};

const handleMain = (key: string) => {
  if (key === "i" || key === "I")
    useCombatStore.setState({ view: "initiative" });
  // if (key === "d" || key === "D") useCombatStore.setState({ view: "damage" });
};

const handleInitiative = (key: string) => {
  if (key === "Escape") useCombatStore.setState({ view: "main" });
};

export default useHandleKeyUp;
