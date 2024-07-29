import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/utils/supabase/server";

import { redirect } from "next/navigation";
import Form from "./Form";

export default async function Page() {
  // const supabase = createClient();

  // const { data, error } = await supabase.auth.getUser();
  // console.log(data.user);
  // if (data.user) redirect("/");
  // if (error && error.message !== "Auth session missing!") redirect("/error");
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center px-4">
      <div className="w-full max-w-sm text-gray-600">
        <div className="text-center">
          <Link href="/">
            <Image
              src="https://floatui.com/logo.svg"
              width={150}
              height={150}
              className="mx-auto"
              alt="Float UI"
            />
          </Link>
          <div className="mt-5 space-y-2">
            <h3 className="text-2xl font-bold text-gray-800 sm:text-3xl">
              Sign up
            </h3>
            <p className="">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
        <Form />
      </div>
    </main>
  );
}
