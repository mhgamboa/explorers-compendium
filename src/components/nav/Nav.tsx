import React from "react";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Body from "./Body";

export default async function Nav() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error) redirect("/error");
  return <Body user={data.user} />;
}
