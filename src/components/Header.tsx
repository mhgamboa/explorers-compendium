"use client";
import React from "react";
import { useAtom } from "jotai";
import { LoggedInAtom } from "@/atoms/atoms";

export default function Header() {
  const [loggedIn, setLoggedIn] = useAtom(LoggedInAtom);
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setLoggedIn(!loggedIn);
  };
  return (
    <header className="bg-gray-300">
      <nav className="flex justify-center w-full sm:justify-start border-gray-200 px-4 lg:px-6 py-4">
        <a
          onClick={handleClick}
          className={`text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 focus:outline-none cursor-pointer ${
            loggedIn
              ? "bg-green-700 hover:bg-green-800 focus:ring-green-300"
              : "bg-red-700 hover:bg-red-800 focus:ring-red-300"
          }`}
        >
          Fake Patreon Log In Button
        </a>
      </nav>
    </header>
  );
}
