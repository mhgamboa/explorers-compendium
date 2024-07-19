"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import { z } from "zod";

type stateType = {
  email: string;
  password: string;
  confirmPassword: string;
};

const schema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(8),
});

export interface FormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

export default async function login(formData: FormData) {
  const supabase = createClient();
  console.log("formData", formData);
  // // type-casting here for convenience
  // // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  // const { error } = await supabase.auth.signInWithPassword(data);

  // if (error) {
  //   redirect("/error");
  // }

  // revalidatePath("/", "layout");
  // redirect("/");
}

export async function signup(
  password: string,
  email: string,
  confirmPassword: string,
) {
  console.log("password", password);
  console.log("email", email);
  console.log("confirmPassword", confirmPassword);
  // const supabase = createClient();

  // // type-casting here for convenience
  // // in practice, you should validate your inputs
  // const data = {
  //   email: formData.get("email") as string,
  //   password: formData.get("password") as string,
  // };

  // const { error } = await supabase.auth.signUp(data);

  // if (error) {
  //   redirect("/error");
  // }

  // revalidatePath("/", "layout");
  // redirect("/");
}
