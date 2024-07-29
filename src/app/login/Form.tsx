"use client";
import React, { useActionState, useEffect } from "react";
import login from "@/app/login/actions";
import { useFormState, useFormStatus } from "react-dom";

const initialState = {
  message: "",
};

export default function Form() {
  const [error, action] = useFormState(login, initialState);
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <form action={action} className="space-y-5">
      {error.message && (
        <div className="text-center text-red-500">{error.message}</div>
      )}
      <div>
        <label className="font-medium">Email</label>
        <input
          name="email"
          type="email"
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-indigo-600"
        />
      </div>

      <div>
        <label className="font-medium">Password</label>
        <input
          name="password"
          type="password"
          // value={password}
          minLength={8}
          // onChange={(e) => setPassword(e.target.value)}
          required
          className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-indigo-600"
        />
      </div>

      <div className="flex items-center justify-between text-sm">
        {/* <div className="flex items-center gap-x-3">
              <input
                type="checkbox"
                id="remember-me-checkbox"
                className="checkbox-item peer hidden"
              />
              <label
                htmlFor="remember-me-checkbox"
                className="relative flex h-5 w-5 cursor-pointer rounded-md border bg-white ring-indigo-600 ring-offset-2 duration-150 after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:h-2.5 after:w-1.5 after:rotate-45 after:border-b-2 after:border-r-2 after:border-white peer-checked:bg-indigo-600 peer-active:ring"
              ></label>
              <span>Remember me</span>
            </div> */}
        <a
          href="#"
          className="text-center text-indigo-600 hover:text-indigo-500"
        >
          Forgot password?
        </a>
      </div>
      <SubmitButton />
    </form>
  );
}

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="w-full rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white duration-150 hover:bg-indigo-500 active:bg-indigo-600 disabled:cursor-not-allowed disabled:bg-gray-500"
    >
      Sign in
    </button>
  );
};
