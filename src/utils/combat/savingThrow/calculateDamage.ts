import { SavingThrowDamage } from "@/types/combatTypes";

const calculateFinalDamage = (
  result: "Pass" | "Fail",
  damage: SavingThrowDamage,
  damageAmount: number,
) => {
  return result === "Pass"
    ? 0
    : damage === "Half"
      ? Math.floor(damageAmount / 2)
      : damage === "Quarter"
        ? Math.floor(damageAmount / 4)
        : damageAmount;
};

export default calculateFinalDamage;
