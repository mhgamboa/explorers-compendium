import { useCombatStore } from "@/store/combatStore";

const handleDamage = (key: string) => {
  const combatants = useCombatStore.getState().combatants;
  const damage = useCombatStore.getState().damage;

  if (key === "Enter") {
    const updatedCombatants = combatants.map((c, i) => ({
      ...c,
      currentHp: c.currentHp - damage[i],
    }));
    useCombatStore.setState({
      view: "main",
      damage: combatants.map(() => 0),
      combatants: updatedCombatants,
    });
  }

  if (key === "Escape")
    useCombatStore.setState({ view: "main", damage: combatants.map(() => 0) });
};

export default handleDamage;
