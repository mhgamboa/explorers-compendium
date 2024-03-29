"use client";
import React, { ReactNode } from "react";
import { useCombatStore } from "@/store/combatStore";

export default function ModalWrapper({ children }: { children: ReactNode }) {
  const { setView } = useCombatStore();

  return (
    <>
      <div
        className="fixed z-10 h-full w-full bg-slate-950 bg-opacity-60 backdrop-blur-[2px]"
        onClick={() => setView("main")}
      />
      <div className="fixed left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 transform rounded bg-white p-5">
        {children}
      </div>
    </>
  );
}
