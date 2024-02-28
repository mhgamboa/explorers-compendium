import React from "react";
import { combatantsAtom } from "@/atoms/combat";
import { useAtom } from "jotai";
import { indexAtom } from "@/atoms/combat";

export default function Slider() {
  const [combatants, setCombatants] = useAtom(combatantsAtom);
  const [index, setIndex] = useAtom(indexAtom);

  // console.log("slider: ", combatants);
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setIndex(2);
    console.log(index);
  };

  return (
    <div className="">
      <div className="h-96 w-full flex justify-center bg-orange-500" onClick={handleClick}></div>
      <div className="bg-red-500 w-full flex overflow-hidden">
        {combatants.monsterData.map((c: any) => {
          return (
            <div
              key={c._id}
              className="odd:bg-blue-500 px-2 w-full min-w-48 duration-500 text-center"
              style={{ transform: `translateX(${0}%)` }}
            >
              {c.Name}
            </div>
          );
        })}
      </div>
    </div>
  );
}
