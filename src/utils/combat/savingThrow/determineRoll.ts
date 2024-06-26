import { SavingThrowRollType } from "@/types/combat";

const determinRoll = (
  roll1: number,
  roll2: number,
  rollType: SavingThrowRollType,
) => {
  return rollType === "Norm"
    ? roll1
    : rollType === "Dis"
      ? Math.min(roll1, roll2)
      : Math.max(roll1, roll2);
};

export default determinRoll;
