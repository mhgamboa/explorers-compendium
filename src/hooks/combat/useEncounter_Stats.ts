import { useEncounterContext } from "@/context/combat/EncounterContext";
import { useIndexContext } from "@/context/combat/IndexContext";

export default function useEncounter_Stats() {
  const {
    encounter: { encounter_stats },
  } = useEncounterContext();
  return encounter_stats;
}
