import { useCombatStore } from "@/store/combatStore";
import { rollDice } from "@/utils/combat/rollDice";

const handleRoll = (key: string) => {
  const currentRoll = useCombatStore.getState().currentRoll;
  const isNumber = !isNaN(+key);

  if (key === "Escape" || key === "r")
    useCombatStore.setState({
      view: "main",
      rollDiceError: false,
      rolls: [],
    });

  if (key === "d" || key === "D" || isNumber || key === "+" || key === "-")
    useCombatStore.setState({ currentRoll: currentRoll + key });

  if (key === "Backspace")
    useCombatStore.setState({
      currentRoll: currentRoll.slice(0, -1),
      view: currentRoll.slice(0, -1) === "" ? "main" : "roll",
    });

  if (key === "Enter") {
    const regexp = /^\d?\d?d\d{1,}(?:(\+|\-)\d{1,2})?$/; // Format: 11d20(+4) No spaces

    if (!currentRoll.match(regexp))
      return useCombatStore.setState({ rollDiceError: true });

    const arr = currentRoll.split(/(?:d|\+|\-)/gi);

    if (+arr[0] > 25) return useCombatStore.setState({ rollDiceError: true }); // No more than 25 dice
    if (+arr[1] > 100) return useCombatStore.setState({ rollDiceError: true }); // Largest die size is a d100
    if (+arr[2] > 50) return useCombatStore.setState({ rollDiceError: true }); // Largest Modifier is +/- 50
    const rolls = [];

    for (let i = 0; i < +arr[0]; i++) {
      rolls.push(rollDice(+arr[1]));
    }

    typeof +arr[2] === "number" && currentRoll.includes("-")
      ? rolls.push(-+arr[2])
      : rolls.push(+arr[2]);
    useCombatStore.setState({ rollDiceError: false, rolls });
  }
};

export default handleRoll;
