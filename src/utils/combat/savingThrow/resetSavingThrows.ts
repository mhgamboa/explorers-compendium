import { useCombatStore } from "@/store/combatStore";

const resetSavingThrows = () => {
  const combatants = useCombatStore.getState().combatants;

  useCombatStore.setState({
    savingThrows: combatants.map(() => ({
      roll1: 0,
      roll2: 0,
      rolling: false,
      rollType: "Norm",
      damageAmount: "Full",
    })),
    DC: 0,
    savingThrowType: "",
    savingThrowCondition: "",
    savingThrowDamage: 0,
  });
};

export default resetSavingThrows;
