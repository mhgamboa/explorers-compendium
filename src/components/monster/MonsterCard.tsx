"use client";
import React, { useState } from "react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import MonsterStats from "@/components/monster/MonsterStats";

type Props = {
  monster: any;
};
export default function MonsterCard({ monster }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-parchment-background shadow-xl">
      <div className="h-[5px] bg-yellow-600 border-2 border-black" />
      {/* Expand Button */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full justify-between items-center cursor-pointer h-20 px-4 py-2 text-left text-sm font-medium text-indigo-900 hover:bg-slate-200 hover:bg-opacity-40 duration-500 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500/75"
      >
        <div className="w-full text-red-900 font-extrabold text-3xl">{monster.Name}</div>
        <div className="flex w-full justify-end">
          <ChevronUpIcon
            className={`${
              isOpen ? "rotate-180 transform duration-200" : ""
            } h-5 w-5 text-red-900 duration-200`}
          />
        </div>
      </div>
      {/* Start content */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 px-4 pb-2 pt-4" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <MonsterStats monster={monster} />
      </div>
      <div className="h-[5px] bg-yellow-600 border-2 border-black" />
    </div>
  );
}
