"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { View } from "@/types/combat";

type ViewContextValue = {
  view: View;
  setView: React.Dispatch<React.SetStateAction<View>>;
};
export const ViewContext = createContext<ViewContextValue | null>(null);

export const ViewContextProvider = ({ children }: { children: ReactNode }) => {
  const [view, setView] = useState<View>("main");
  return (
    <ViewContext.Provider value={{ view, setView }}>
      {children}
    </ViewContext.Provider>
  );
};

export function useViewContext() {
  const view = useContext(ViewContext);
  if (view === null) throw new Error("no view context");
  return view;
}
