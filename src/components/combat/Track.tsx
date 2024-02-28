import React, { useRef, useEffect, useCallback } from "react";
import { useAtom, useAtomValue } from "jotai";
import { indexAtom, combatantsAtom } from "@/atoms/combat";

export default function Track() {
  const combatants = useAtomValue(combatantsAtom);
  const [index, setIndex] = useAtom(indexAtom);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleWheelScroll = useCallback((e: WheelEvent): void => {
    e.preventDefault();
    const delta = e.deltaY || e.deltaX; // Use either deltaX or deltaY depending on the browser
    if (containerRef.current) {
      const container = containerRef.current;
      container.scrollLeft += delta; // Adjust the scrollLeft based on the scrolling delta
      container.scrollTop = -e.deltaY;
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheelScroll, { passive: false });
    }
    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheelScroll);
      }
    };
  }, [handleWheelScroll]);

  return (
    <div
      className="flex w-full overflow-scroll no-scrollbar space-x-2"
      // onWheel={handleWheelScroll}
      ref={containerRef}
    >
      {combatants.monsterData.map((c: any, i: number) => {
        return (
          <div
            key={c._id}
            className={`px-2 w-full min-w-48 h-20 flex flex-col items-center justify-center border-2 border-black rounded text-center cursor-pointer ${
              i === index && "bg-red-500"
            }`}
            onClick={() => setIndex(i)}
          >
            {c.Name}
          </div>
        );
      })}
    </div>
  );
}
