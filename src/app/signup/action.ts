"use server";

// import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import { z } from "zod";

const schema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(8),
});

export default async function signup(email: string, password: string) {
  const supabase = createClient();

  try {
    schema.parse({ email, password });
  } catch (error) {
    return { error: "Invalid email or password" };
  }

  try {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      return { error: error.message || "Unknown error" };
    }
    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: "Unknown error" };
  } finally {
    // revalidatePath("/", "layout");
    redirect("/");
  }
}
