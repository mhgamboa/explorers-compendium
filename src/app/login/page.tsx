import Link from "next/link";
import Image from "next/image";
import Form from "./Form";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Page() {
  // const supabase = createClient();

  // const { data, error } = await supabase.auth.getUser();
  // if (data.user) redirect("/");
  // if (error) console.error("error message:", error.message);
  // if (error) console.error("error code:", error.code);
  // if (
  //   error &&
  //   error.message !== "Auth session missing!" &&
  //   error.message !== "Session from session_id claim in JWT does not exist"
  // )
  //   if (data) console.log("data", data);
  // redirect("/error");
  return (
    <main className="p- flex min-h-screen w-full flex-col items-center justify-center px-4">
      <div className="w-full max-w-sm space-y-5 text-gray-600">
        <div className="pb-8 text-center">
          <Link href="/">
            <Image
              src="https://floatui.com/logo.svg"
              width={150}
              height={150}
              className="mx-auto"
              alt="Logo"
            />
          </Link>
          <div className="mt-5">
            <h3 className="text-2xl font-bold text-gray-800 sm:text-3xl">
              Log in to your account
            </h3>
          </div>
        </div>
        <Form />
        {/* <button className="flex w-full items-center justify-center gap-x-3 rounded-lg border py-2.5 text-sm font-medium duration-150 hover:bg-gray-50 active:bg-gray-100">
          <svg
            className="h-5 w-5"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_17_40)">
              <path
                d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z"
                fill="#4285F4"
              />
              <path
                d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z"
                fill="#34A853"
              />
              <path
                d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z"
                fill="#FBBC04"
              />
              <path
                d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z"
                fill="#EA4335"
              />
            </g>
            <defs>
              <clipPath id="clip0_17_40">
                <rect width="48" height="48" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Continue with Google
        </button> */}
        <p className="text-center">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Sign up
          </Link>
        </p>
      </div>
    </main>
  );
}
