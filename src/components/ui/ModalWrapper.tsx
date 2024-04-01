"use client";
import React, { ReactNode } from "react";
import { useCombatStore } from "@/store/combatStore";

export default function ModalWrapper({ children }: { children: ReactNode }) {
  const setView = useCombatStore((state) => state.setView);

  return (
    <>
      <div
        id="overlay"
        className="fixed z-10 h-full w-full bg-slate-950 bg-opacity-60 backdrop-blur-[2px] duration-500"
        onClick={() => setView("main")}
      />
      <div className="fixed inset-0 z-20 m-auto h-fit w-fit transform rounded bg-white p-5 duration-500">
        {children}
      </div>
    </>
  );
}
