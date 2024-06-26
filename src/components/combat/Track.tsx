"use client";
import React, { useRef, useEffect, useCallback } from "react";
import { useEncounterContext } from "@/context/combat/EncounterContext";
import { useIndexContext } from "@/context/combat/IndexContext";

export default function Track() {
  const { index, setIndex } = useIndexContext();
  const {
    encounter: { encounter_stats },
  } = useEncounterContext();

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

  return (
    <div
      className="no-scrollbar flex w-full space-x-2 overflow-scroll py-2"
      ref={containerRef}
    >
      {encounter_stats.map((c, i) => {
        return (
          <div
            key={c.id}
            className={`flex h-20 w-full min-w-48 cursor-pointer flex-col items-center justify-center rounded border-2 border-black px-2 text-center ${
              i === index && "border-red-700 shadow shadow-indigo-950"
            }`}
            onClick={() => setIndex(i)}
          >
            {c.monsters
              ? c.monsters.name
              : c.players!.character_name
                ? c.players!.character_name
                : `Player ${c.players!.id}`}
          </div>
        );
      })}
    </div>
  );
}
