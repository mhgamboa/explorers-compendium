import { MouseEvent } from "react";
import { useCombatStore, SavingThrow } from "@/store/combatStore";
import { ChildProps } from "./SavingThrowModal";
import { rollDice } from "@/utils/combat/rollDice";

const savingThrows: SavingThrow[] = ["str", "dex", "con", "int", "wis", "cha"];

export default function Heading({
  type,
  setType,
  setRolls,
  DC,
  setDC,
}: ChildProps) {
  const combatants = useCombatStore((s) => s.combatants);

  const rollSavingThrows = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) => {
    e.preventDefault();
    const rolls = combatants.map((c) => rollDice(20));
    setRolls!(rolls);
  };

  const handleClick = (s: SavingThrow) =>
    type === s ? setType!("") : setType!(s);

  return (
    <div className="flex flex-col gap-1 border-b-2 py-2">
      <div className="flex justify-between gap-10">
        <div className="flex w-full max-w-96 items-center justify-around">
          {savingThrows.map((t, i) => {
            return (
              <div
                key={i}
                className={`cursor-pointer rounded border px-2 py-1 ${type === t && "bg-red-800 text-white"}`}
                onClick={() => handleClick(t)}
              >
                {t}
              </div>
            );
          })}
        </div>
        <button className="rounded border p-1" onClick={rollSavingThrows}>
          Roll Saving Throws
        </button>
      </div>
      {/* <label htmlFor="DC">Difficulty Class</label> */}
      <input
        type="number"
        name="DC"
        id="DC"
        className="w-36 rounded border px-2 py-1"
        placeholder="Difficulty Class"
        value={DC === 0 ? "" : DC!.toString()} // Convert DC to string to remove leading zero
        onChange={(e) => {
          const value = parseInt(e.target.value.trim(), 10) || 0;
          setDC!(value);
        }}
      />
    </div>
  );
}
