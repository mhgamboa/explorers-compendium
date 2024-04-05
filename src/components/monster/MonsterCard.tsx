"use client";
import React, { useState } from "react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { Monster } from "@/types/combatTypes";
import MonsterStats from "@/components/monster/MonsterStats";
import YellowBorder from "../ui/YellowBorder";

type Props = {
  monster: Monster;
};

export default function MonsterCard({ monster }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-parchment-background shadow-xl">
      <YellowBorder />
      {/* Expand Button */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="group group flex h-20 w-full cursor-pointer items-center justify-between px-4 py-2 text-left text-sm font-medium text-indigo-900 duration-500 hover:bg-slate-200 hover:bg-opacity-40 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500/75"
      >
        <div className="w-full text-lg font-extrabold text-red-900 sm:text-3xl">
          {monster.name}
        </div>

        <ChevronUpIcon
          className={`h-5 w-5 text-red-900 duration-200 ${
            isOpen ? "rotate-180 transform" : ""
          }`}
        />
      </div>
      {/* Start content */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen
            ? "px-4 pb-2 pt-4 opacity-100"
            : "max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <MonsterStats monster={monster} />
      </div>
      <YellowBorder />
    </div>
  );
}
