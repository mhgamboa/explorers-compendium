import { useCombatStore } from "@/store/combatStore";
import handleRoll from "./keyUp/handleRoll";
import handleDamage from "./keyUp/handleDamage";
import handleCondition from "./keyUp/handleCondition";

const useHandleKeyUp = (e: KeyboardEvent) => {
  e.preventDefault();
  const view = useCombatStore.getState().view;
  if (view === "main") handleMain(e.key);
  if (view === "initiative") handleInitiative(e.key);
  if (view === "damage") handleDamage(e.key);
  if (view === "condition") handleCondition(e.key);
  if (view === "roll") handleRoll(e.key);
};

const handleMain = (key: string) => {
  const hasFocus = useCombatStore.getState().mainHasFocus;
  const isNumber = !isNaN(+key);

  if (key === "i" || key === "I")
    useCombatStore.setState({ view: "initiative" });

  if (key === "d" || key === "D") useCombatStore.setState({ view: "damage" });

  if (isNumber && +key > 0 && !hasFocus)
    useCombatStore.setState({ view: "roll", currentRoll: key });

  if (key === "s" || key === "S")
    useCombatStore.setState({ view: "savingThrow" });
};

const handleInitiative = (key: string) => {
  if (key === "Escape") {
    useCombatStore.setState({ view: "main" });
  }
};

export default useHandleKeyUp;
