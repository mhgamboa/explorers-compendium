import React, { ChangeEvent } from "react";
import { useDamageContext } from "@/context/combat/DamageContext";
import { create } from "mutative";

export default function Body() {
  const { damage, setDamage } = useDamageContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>, i: number) => {
    e.preventDefault();

    const updatedDamage = create(damage, (draft) => {
      draft[i].damage = +e.target.value;
    });
    setDamage(updatedDamage);
  };

  return (
    <div id="combatants" className="flex flex-wrap justify-center gap-2 py-6">
      {damage.map((c, i) => {
        return (
          <div
            key={c.id}
            className="flex w-32 cursor-pointer flex-col justify-between rounded border-2 p-2 text-center"
          >
            <div>{c.name}</div>
            <input
              type="number"
              value={c.damage}
              className="rounded border p-1 text-center [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              onChange={(e) => handleChange(e, i)}
            />
          </div>
        );
      })}
    </div>
  );
}
