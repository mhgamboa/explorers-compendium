import { useEffect } from "react";
import { useViewContext } from "@/context/combat/ViewContext";
import { useMainFocusedContext } from "@/context/combat/MainFocusedContext";
import { useRollContext } from "@/context/combat/RollContext";

const useHandleKeyUp = () => {
  const { view, setView } = useViewContext();
  const { mainFocused } = useMainFocusedContext();
  const { roll, setRoll } = useRollContext();

  useEffect(() => {
    console.log("view");
    const handleKeyUp = (e: KeyboardEvent) => {
      e.preventDefault();
      if (view === "main") {
        const isNumber = !isNaN(+e.key);
        if (e.key === "i" || e.key === "I") setView("initiative");
        if (e.key === "s" || e.key === "S") setView("savingThrow");
        if (e.key === "d" || e.key === "D") setView("damage");
        if (isNumber && +e.key > 0 && !mainFocused) {
          setView("roll");
          setRoll(e.key);
        }
      }
      if (view === "initiative" && e.key === "Escape") setView("main");

      if (view === "damage") {
        if (e.key === "Escape") setView("main");

        if (e.key === "Enter") {
        }
      }
      if (view === "condition") {
      }
      if (view === "roll") {
      }
      if (view === "savingThrow") {
      }
    };

    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [view, setView, mainFocused, setRoll, roll]);
};

export default useHandleKeyUp;
