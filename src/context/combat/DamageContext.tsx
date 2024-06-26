"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { Damage } from "@/types/combat";
import useEncounter_Stats from "@/hooks/combat/useEncounter_Stats";

type DamageContextValue = {
  damage: Damage;
  setDamage: React.Dispatch<React.SetStateAction<Damage>>;
};
export const DamageContext = createContext<DamageContextValue | null>(null);

export const DamageContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const initialDamage = useEncounter_Stats().map((c) => {
    const name = c.monsters
      ? c.monsters.name
      : c.players!.character_name
        ? c.players!.character_name
        : `Player ${c.players!.id}`;
    return {
      id: c.id,
      damage: 0,
      name,
    };
  });

  const [damage, setDamage] = useState<Damage>(initialDamage);
  return (
    <DamageContext.Provider value={{ damage, setDamage }}>
      {children}
    </DamageContext.Provider>
  );
};

export function useDamageContext() {
  const damage = useContext(DamageContext);
  if (damage === null) throw new Error("no Damage context");
  return damage;
}
