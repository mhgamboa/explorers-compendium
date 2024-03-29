import React, { useRef, useEffect, useCallback } from "react";
import { useCombatStore } from "@/store/combatStore";

export default function Track() {
  const combatants = useCombatStore((state) => state.combatants);
  const setIndex = useCombatStore((state) => state.setIndex);
  const index = useCombatStore((state) => state.index);

  const containerRef = useRef<HTMLDivElement>(null);

  const handleWheelScroll = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    const delta = e.deltaY || e.deltaX; // Use either deltaX or deltaY depending on the browser
    if (containerRef.current) {
      const container = containerRef.current;
      container.scrollLeft += delta; // Adjust the scrollLeft based on the scrolling delta
      container.scrollTop = -e.deltaY;
    }
  };

  // const handleWheelScroll = useCallback((e: React.WheelEventHandler<HTMLDivElement>): void => {
  //   e.preventDefault();
  //   const delta = e.deltaY || e.deltaX; // Use either deltaX or deltaY depending on the browser
  //   if (containerRef.current) {
  //     const container = containerRef.current;
  //     container.scrollLeft += delta; // Adjust the scrollLeft based on the scrolling delta
  //     container.scrollTop = -e.deltaY;
  //   }
  // }, []);

  // useEffect(() => {
  //   const container = containerRef.current;
  //   if (container) {
  //     container.addEventListener("wheel", handleWheelScroll, {
  //       passive: false,
  //     });
  //   }
  //   return () => {
  //     if (container) {
  //       container.removeEventListener("wheel", handleWheelScroll);
  //     }
  //   };
  // }, [handleWheelScroll]);

  if (!combatants) return;
  return (
    <div
      className="no-scrollbar flex w-full space-x-2 overflow-scroll"
      onWheel={handleWheelScroll}
      ref={containerRef}
    >
      {combatants.map((c: any, i: number) => {
        return (
          <div
            key={c._id}
            className={`flex h-20 w-full min-w-48 cursor-pointer flex-col items-center justify-center rounded border-2 border-black px-2 text-center ${
              i === index && "bg-red-500"
            }`}
            onClick={() => setIndex(i)}
          >
            {c.name}
          </div>
        );
      })}
    </div>
  );
}
