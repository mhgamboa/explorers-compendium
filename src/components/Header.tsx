"use client";
import React from "react";

export default function Header() {
  return (
    <header>
      <nav className="flex justify-center w-full sm:justify-start border-gray-200 px-4 lg:px-6 py-4">
        <a
          href="#"
          className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Log in
        </a>
      </nav>
    </header>
  );
}
