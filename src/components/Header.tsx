"use client";
import React from "react";

export default function Header() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
  };
  return;
  return (
    <header className="bg-gray-300">
      <nav className="flex w-full justify-center border-gray-200 px-4 py-4 sm:justify-start lg:px-6">
        {/* <a
          onClick={handleClick}
          className="me-2 cursor-pointer rounded-lg bg-red-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4"
        >
          Button
        </a> */}
      </nav>
    </header>
  );
}
