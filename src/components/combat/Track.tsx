"use client";
import React, { useRef, useEffect, useCallback } from "react";
import { useCombatStore } from "@/store/combatStore";
import { isMonster, isPlayer } from "@/types/combatTypes";

export default function Track() {
  const combatants = useCombatStore((state) => state.combatants);
  const setIndex = useCombatStore((state) => state.setIndex);
  const index = useCombatStore((state) => state.index);

  const containerRef = useRef<HTMLDivElement>(null);

  const handleWheelScroll = useCallback(function (
    this: HTMLDivElement,
    e: WheelEvent,
  ): void {
    e.preventDefault();
    const delta = e.deltaY || e.deltaX;
    if (containerRef.current) {
      const container = containerRef.current;
      // If Scrolling up/down scroll right/left instead
      container.scrollLeft += delta;
      container.scrollTop = -e.deltaY;
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheelScroll, {
        passive: false,
      });
    }
    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheelScroll);
      }
    };
  }, [handleWheelScroll]);

  if (!combatants) return;
  return (
    <div
      className="no-scrollbar flex w-full space-x-2 overflow-scroll py-2"
      ref={containerRef}
    >
      {combatants.map((c, i) => {
        return (
          <div
            key={i}
            className={`flex h-20 w-full min-w-48 cursor-pointer flex-col items-center justify-center rounded border-2 border-black px-2 text-center ${
              i === index && "border-red-700 shadow shadow-indigo-950"
            }`}
            onClick={() => setIndex(i)}
          >
            {isMonster(c.combatant) && c.combatant.name}
            {isPlayer(c.combatant) && c.combatant.characterName}
          </div>
        );
      })}
    </div>
  );
}
