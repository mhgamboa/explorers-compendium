"use client";
import React from "react";

const hotkeyData = [
  { view: "Initiative", hotkey: "i" },
  { view: "Saving Throw", hotkey: "s" },
  { view: "Damage", hotkey: "d" },
  { view: "Exit Any View", hotkey: "esc" },
  { view: "Roll Dice", hotkey: "Any Number" },
];

export default function HotKeysTable() {
  return (
    <div className="relative mt-4 flex justify-center overflow-x-auto p-2">
      <table className="w-full max-w-xl text-left text-sm text-gray-500">
        <thead className="bg-gray-50 text-xs uppercase text-gray-700">
          <tr>
            <th scope="col" className="px-6 py-3">
              View
            </th>
            <th scope="col" className="px-6 py-3">
              Hotkey
            </th>
          </tr>
        </thead>
        <tbody>
          {hotkeyData.map((obj, i) => {
            return (
              <tr className="border-b bg-white" key={i}>
                <th
                  scope="row"
                  className="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
                >
                  {obj.view}
                </th>
                <td className="px-6 py-4"> {obj.hotkey}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
