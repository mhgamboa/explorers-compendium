"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type MainFocusedContextValue = {
  mainFocused: boolean;
  setMainFocused: React.Dispatch<React.SetStateAction<boolean>>;
};
export const MainFocusedContext = createContext<MainFocusedContextValue | null>(
  null,
);

export const MainFocusedContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [mainFocused, setMainFocused] = useState<boolean>(false);
  return (
    <MainFocusedContext.Provider value={{ mainFocused, setMainFocused }}>
      {children}
    </MainFocusedContext.Provider>
  );
};

export function useMainFocusedContext() {
  const mainFocused = useContext(MainFocusedContext);
  if (mainFocused === null) throw new Error("no mainFocused context");
  return mainFocused;
}
