"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import useEncounter_Stats from "@/hooks/combat/useEncounter_Stats";
import { Encounter_Stats } from "@/types/combat";

type InitiativeContextValue = {
  initiativeArray: Encounter_Stats;
  setInitiativeArray: React.Dispatch<React.SetStateAction<Encounter_Stats>>;
};

export const InitiativeContextContext =
  createContext<InitiativeContextValue | null>(null);

export const InitiativeContextContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const encounter_stats = useEncounter_Stats();

  const [initiativeArray, setInitiativeArray] =
    useState<Encounter_Stats>(encounter_stats);

  return (
    <InitiativeContextContext.Provider
      value={{ initiativeArray, setInitiativeArray }}
    >
      {children}
    </InitiativeContextContext.Provider>
  );
};

export function useInitiativeContext() {
  const initiativeArray = useContext(InitiativeContextContext);
  if (initiativeArray === null) throw new Error("no initiativeArray context");
  return initiativeArray;
}
