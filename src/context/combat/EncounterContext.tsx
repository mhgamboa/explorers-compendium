"use client";
// import { Encounter2 } from "@/types/combat";
import { createContext, useContext, useState, ReactNode } from "react";
import { getCombatEncounter } from "@/server/queries";

type Encounter = Awaited<ReturnType<typeof getCombatEncounter>>;

type EncounterContextValue = {
  encounter: Encounter;
  setEncounter: React.Dispatch<React.SetStateAction<Encounter>>;
};
export const EncounterContext = createContext<EncounterContextValue | null>(
  null,
);

export const EncounterContextProvider = ({
  children,
  initialEncounter,
}: {
  children: ReactNode;
  initialEncounter: Encounter;
}) => {
  const [encounter, setEncounter] = useState<Encounter>(initialEncounter);
  return (
    <EncounterContext.Provider value={{ encounter, setEncounter }}>
      {children}
    </EncounterContext.Provider>
  );
};

export function useEncounterContext() {
  const encounter = useContext(EncounterContext);
  if (encounter === null) throw new Error("no Encounter context");
  return encounter;
}
