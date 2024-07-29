"use server";

// import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
// import { z } from "zod";

// const schema = z.object({
//   email: z.string().email("Invalid email"),
//   password: z.string().min(8),
// });

export default async function login(previousState: any, formData: FormData) {
  const supabase = createClient();
  // // type-casting here for convenience
  // // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    console.log(error.message);
    return { message: error.message };
  }

  // revalidatePath("/", "layout");

  redirect("/");
}
