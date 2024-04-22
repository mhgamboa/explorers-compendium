import { useCombatStore } from "@/store/combatStore";
import handleRoll from "./keyUp/handleRoll";

const useHandleKeyUp = (e: KeyboardEvent) => {
  e.preventDefault();
  const view = useCombatStore.getState().view;
  if (view === "main") handleMain(e.key);
  if (view === "initiative") handleInitiative(e.key);
  if (view === "damage") handleDamage(e.key);
  if (view === "roll") handleRoll(e.key);
};

const handleMain = (key: string) => {
  if (key === "i" || key === "I")
    useCombatStore.setState({ view: "initiative" });

  if (key === "d" || key === "D") useCombatStore.setState({ view: "damage" });

  const isNumber = !isNaN(+key);
  if (isNumber) useCombatStore.setState({ view: "roll", currentRoll: key });
  // if (key === "s" || key === "S")
  //   useCombatStore.setState({ view: "savingThrow" });
};

const handleInitiative = (key: string) => {
  if (key === "Escape") {
    useCombatStore.setState({ view: "main" });
  }
};

const handleDamage = (key: string) => {
  if (key === "Escape") {
    useCombatStore.setState({ view: "main" });
  }
};

export default useHandleKeyUp;
