import { useCombatStore } from "@/store/combatStore";

const handleCondition = (key: string) => {
  const combatants = useCombatStore.getState().combatants;
  const damage = useCombatStore.getState().damage;

  if (key === "Escape") useCombatStore.setState({ view: "main" });
};

export default handleCondition;
