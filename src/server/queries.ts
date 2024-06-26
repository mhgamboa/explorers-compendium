import "server-only";
import { createClient } from "@/utils/supabase/server";

export async function getCombatEncounter() {
  const supabase = createClient();
  const { data: userData, error: userError } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from("encounters")
    .select(
      `
    id,
    name,
    encounter_stats (
      *,
      monsters (*),
      players (*)
    )
  `,
    )
    .order("rolled_initiative", {
      referencedTable: "encounter_stats",
      ascending: false,
    });

  if (error || !data[0]) {
    console.error(error);
    throw new Error("No encounter found");
  }

  return data[0];
}
