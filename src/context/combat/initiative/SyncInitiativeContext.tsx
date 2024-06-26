"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type SyncInitiativeContextValue = {
  syncInitiative: boolean;
  setSyncInitiative: React.Dispatch<React.SetStateAction<boolean>>;
};
export const SyncInitiativeContext =
  createContext<SyncInitiativeContextValue | null>(null);

export const SyncInitiativeContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [syncInitiative, setSyncInitiative] = useState<boolean>(true);
  return (
    <SyncInitiativeContext.Provider
      value={{ syncInitiative, setSyncInitiative }}
    >
      {children}
    </SyncInitiativeContext.Provider>
  );
};

export function useSyncInitiativeContext() {
  const syncInitiative = useContext(SyncInitiativeContext);
  if (syncInitiative === null) throw new Error("no syncInitiative context");
  return syncInitiative;
}
