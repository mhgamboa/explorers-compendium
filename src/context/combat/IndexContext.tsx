"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type IndexContextValue = {
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
};
export const IndexContext = createContext<IndexContextValue | null>(null);

export const IndexContextProvider = ({ children }: { children: ReactNode }) => {
  const [index, setIndex] = useState<number>(0);
  return (
    <IndexContext.Provider value={{ index, setIndex }}>
      {children}
    </IndexContext.Provider>
  );
};

export function useIndexContext() {
  const index = useContext(IndexContext);
  if (index === null) throw new Error("no index context");
  return index;
}
