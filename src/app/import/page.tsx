"use client";
import React, { useState } from "react";
import MonsterCard from "@/components/monster/MonsterCard";
import { Monster } from "@/types/combatTypes";
import parse from "@/lib/import/_parse";

export default function Page() {
  const [monster, setMonster] = useState<Monster | null>(null);
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    // setMonster(parse(e.target.value));
    parse(e.target.value);
  };
  return (
    <main className="grid grid-cols-1 gap-y-5 p-3 lg:grid-cols-2">
      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Your message
        </label>
        <textarea
          id="message"
          className="container block h-96 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Paste your monster here"
          onChange={handleChange}
        />
      </div>
      {monster && <MonsterCard monster={monster} />}
      <div className="monstercard">Monster Card</div>
    </main>
  );
}
