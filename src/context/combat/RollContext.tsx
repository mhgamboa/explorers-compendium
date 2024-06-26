"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type RollContextValue = {
  rollInput: string;
  setRollInput: React.Dispatch<React.SetStateAction<string>>;
};
export const RollContext = createContext<RollContextValue | null>(null);

export const RollContextProvider = ({ children }: { children: ReactNode }) => {
  const [rollInput, setRollInput] = useState<string>("");
  return (
    <RollContext.Provider value={{ rollInput, setRollInput }}>
      {children}
    </RollContext.Provider>
  );
};

export function useRollContext() {
  const rollInput = useContext(RollContext);
  if (rollInput === null) throw new Error("no rollInput context");
  return rollInput;
}
