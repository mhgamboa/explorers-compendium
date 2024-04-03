import { useCombatStore } from "@/store/combatStore";

const useHandleKeyUp = (e: KeyboardEvent) => {
  e.preventDefault();
  const view = useCombatStore.getState().view;
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
  const keyIsNumber = !isNaN(+key);

  const combatantIndex = useCombatStore.getState().initiativeHighlight;
  const combatants = [...useCombatStore.getState().combatants];
  const combatant = combatants[combatantIndex];

  if (keyIsNumber) {
    combatant.rolledInitiative = +(combatant.rolledInitiative + key);
    useCombatStore.setState({ combatants });
  }

  if (key === "Backspace") {
    if (!combatant.rolledInitiative) return;
    combatant.rolledInitiative = Math.floor(combatant.rolledInitiative / 10);
    useCombatStore.setState({ combatants });
  }
};

export default useHandleKeyUp;

const object = {
  subObject1: {
    "1.1": "a",
    "1.2": "b",
    "1.3": "c",
    "1.4": "d",
    "1.5": "e",
    "1.6": "f",
  },
  subObject2: {
    "2.1": "g",
    "2.2": "h",
    "2.3": "i",
    "2.4": "j",
    "2.5": "k",
    "2.6": "l",
  },
};
