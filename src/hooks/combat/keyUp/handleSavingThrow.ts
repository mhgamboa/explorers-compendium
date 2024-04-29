import { useCombatStore } from "@/store/combatStore";

const handleSavingThrow = (key: string) => {
  const savingThrows = useCombatStore.getState().savingThrows;
  if (key === "Escape") {
    useCombatStore.setState({
      view: "main",
      savingThrows: savingThrows.map(() => ({
        roll1: 0,
        roll2: 0,
        rolling: false,
        rollType: "Norm",
      })),
    });
  }
};

export default handleSavingThrow;
