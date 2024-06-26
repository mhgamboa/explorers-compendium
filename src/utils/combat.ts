import { useEncounterContext } from "@/context/combat/EncounterContext";
import { useViewContext } from "@/context/combat/ViewContext";
import { useInitiativeContext } from "@/context/combat/initiative/InitiativeContext";
import { getCombatEncounter } from "@/server/queries";
import { create } from "mutative";
type Encounter = Awaited<ReturnType<typeof getCombatEncounter>>;

export function sortByInitiative(encounter: Encounter) {
  const nextState = create(encounter, (draft) => {
    draft.encounter_stats.sort((m1, m2) => {
      return m2.rolled_initiative - m1.rolled_initiative;
    });
  });

  return nextState;
}

// export const playerName = (name: string | null) => {
//   return name ? name : ``;
// };
