import { useCombatStore } from "@/store/combatStore";
import { rollDice } from "@/utils/combat/rollDice";

const handleRoll = (key: string) => {
  const currentRoll = useCombatStore.getState().currentRoll;
  const isNumber = !isNaN(+key);

  if (key === "Escape")
    useCombatStore.setState({
      view: "main",
      rollDiceError: false,
      rolls: [],
    });

  if (key === "d" || key === "D" || isNumber || key === "+")
    useCombatStore.setState({ currentRoll: currentRoll + key });

  if (key === "Backspace")
    useCombatStore.setState({
      currentRoll: currentRoll.slice(0, -1),
      view: currentRoll.slice(0, -1) === "" ? "main" : "roll",
    });

  if (key === "Enter") {
    const regexp = /^\d?\d?d\d{1,}(?:\+\d{1,2})?$/;
    const arr = currentRoll.split(/(?:d|\+)/gi);

    if (!currentRoll.match(regexp))
      return useCombatStore.setState({ rollDiceError: true });

    if (+arr[0] > 25) return useCombatStore.setState({ rollDiceError: true });
    if (+arr[1] > 100) return useCombatStore.setState({ rollDiceError: true });
    if (+arr[2] > 50) return useCombatStore.setState({ rollDiceError: true });
    const rolls = [];

    for (let i = 0; i < +arr[0]; i++) {
      rolls.push(rollDice(+arr[1]));
    }
    arr[2] && rolls.push(+arr[2]);
    useCombatStore.setState({ rollDiceError: false, rolls });
  }
};

export default handleRoll;
