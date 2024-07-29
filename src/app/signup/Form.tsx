"use client";
import signup from "@/app/signup/action";
import clsx from "clsx";
import React, { useEffect, useState } from "react";

export default function Form() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(false);

  const [passwordHas8Chars, setPasswordHas8Chars] = useState(false);
  const [passwordHasUpper, setPasswordHasUpper] = useState(false);
  const [passwordHasLower, setPasswordHasLower] = useState(false);
  const [passwordHasNumber, setPasswordHasNumber] = useState(false);
  const [passwordHasSpecial, setPasswordHasSpecial] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // UI to enable password requirements
  useEffect(() => {
    setPasswordHas8Chars(password.length >= 8);
    setPasswordHasUpper(password.match(/[A-Z]/) !== null);
    setPasswordHasLower(password.match(/[a-z]/) !== null);
    setPasswordHasNumber(password.match(/[0-9]/) !== null);
    setPasswordHasSpecial(
      password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/) !== null,
    );
    setPasswordsMatch(password === confirmPassword && password.length >= 8);
  }, [password, confirmPassword]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    if (
      !passwordHas8Chars ||
      !passwordHasUpper ||
      !passwordHasLower ||
      !passwordHasNumber ||
      !passwordHasSpecial ||
      !passwordsMatch
    ) {
      setError("Password requirements not met");
      setLoading(false);
      return;
    }
    let res;
    try {
      res = await signup(email, password);
      if (res.error) setError(res.error);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        {error && <p className="text-red-500">{error}</p>}
        <div>
          <label className="font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-indigo-600"
          />
        </div>
        <div>
          <label className="font-medium">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-indigo-600"
          />
        </div>
        <div>
          <label className="font-medium">Confirm Password</label>
          <input
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-indigo-600"
          />
        </div>
        <div>
          Password Requirements:
          <ul className="ml-4 list-disc">
            <li className={clsx(passwordHas8Chars && "text-green-500")}>
              At least 8 characters
            </li>
            <li className={clsx(passwordHasUpper && "text-green-500")}>
              At least 1 uppercase letter
            </li>
            <li className={clsx(passwordHasLower && "text-green-500")}>
              At least 1 lowercase letter
            </li>
            <li className={clsx(passwordHasNumber && "text-green-500")}>
              At least 1 number
            </li>
            <li className={clsx(passwordHasSpecial && "text-green-500")}>
              At least 1 special character
            </li>
            <li className={clsx(passwordsMatch && "text-green-500")}>
              Passwords match
            </li>
          </ul>
        </div>
        <button
          disabled={loading}
          type="submit"
          className="w-full rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white duration-150 hover:bg-indigo-500 active:bg-indigo-600 disabled:bg-gray-400"
        >
          Create account
        </button>
      </form>
      {/* <button className="mt-5 flex w-full items-center justify-center gap-x-3 rounded-lg border py-2.5 text-sm font-medium duration-150 hover:bg-gray-50 active:bg-gray-100">
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
    </>
  );
}
