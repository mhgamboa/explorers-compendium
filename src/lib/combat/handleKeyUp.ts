import { useCombatStore } from "@/store/combatStore";

const useHandleKeyUp = (e: KeyboardEvent) => {
  e.preventDefault();
  const view = useCombatStore.getState().view;
  if (view !== "main" && e.key === "Escape")
    useCombatStore.setState({ view: "main" });
  if (view === "main") handleMain(e.key);
  if (view === "initiative") handleInitiative(e.key);
};

const handleMain = (key: string) => {
  if (key === "i" || key === "I")
    useCombatStore.setState({ view: "initiative" });
  if (key === "s" || key === "S")
    useCombatStore.setState({ view: "savingThrow" });
  // if (key === "d" || key === "D") useCombatStore.setState({ view: "damage" });
};

const handleInitiative = (key: string) => {
  if (key === "Escape") {
    useCombatStore.setState({ view: "main" });
  }
};

export default useHandleKeyUp;
