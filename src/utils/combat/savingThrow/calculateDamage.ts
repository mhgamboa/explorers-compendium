import { SavingThrowDamage } from "@/types/combat";

const calculateDamage = (
  result: "Pass" | "Fail",
  damage: SavingThrowDamage,
  damageAmount: number,
) => {
  return damage === "None"
    ? 0
    : damage === "Half"
      ? Math.floor(damageAmount / 2)
      : damage === "Quarter"
        ? Math.floor(damageAmount / 4)
        : damageAmount;
};

export default calculateDamage;
