import { useEncounterContext } from "@/context/combat/EncounterContext";
import { useIndexContext } from "@/context/combat/IndexContext";

export default function useCurrentCombatant() {
  const {
    encounter: { encounter_stats },
  } = useEncounterContext();
  const { index } = useIndexContext();
  return encounter_stats[index];
}
