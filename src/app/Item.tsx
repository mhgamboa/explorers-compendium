"use client";
import React, { useState } from "react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

type Props = {
  name: string;
  tags: any;
  content: any;
};
export default function SearchItems({ name, tags, content }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <div className="h-[5px] bg-yellow-600 border-2 border-black" />
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-tan-sub flex w-full justify-between items-center shadow-2xl h-20 px-4 py-2 text-left text-sm font-medium text-indigo-900 hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500/75`}
      >
        <div className="w-full">{name}</div>
        <div className="space-x-1 flex w-full justify-end">
          <div className="pr-8 flex items-center justify-center text-center">
            {tags.map((tag: string, i: number) => {
              if (i > 3) return;
              return (
                <div
                  key={tag}
                  className="hidden md:flex flex-wrap text-red-500 mr-6 p-2 border-2 rounded"
                >
                  {i < 3 ? tag : i === 3 && tags.length === 4 ? tag : `+${tags.length - 3} more`}
                </div>
              );
            })}
          </div>
          <ChevronUpIcon
            className={`${
              isOpen ? "rotate-180 transform duration-200" : ""
            } h-5 w-5 text-purple-500 duration-200`}
          />
        </div>
      </button>
      <div className="h-[5px] bg-yellow-600 border-2 border-black" />

      {/* <button
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-tan-sub border-t-4 ${
          isOpen ? "border-b-0" : "border-b-4"
        } border-amber-600 flex w-full justify-between items-center shadow-2xl h-20 px-4 py-2 text-left text-sm font-medium text-indigo-900 hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500/75`}
      >
        <div className="w-full">{name}</div>
        <div className="space-x-1 flex w-full justify-end">
          <div className="pr-8 flex items-center justify-center text-center">
            {tags.map((tag: string, i: number) => {
              if (i > 3) return;
              return (
                <div
                  key={tag}
                  className="hidden md:flex flex-wrap text-red-500 mr-6 p-2 border-2 rounded"
                >
                  {i < 3 ? tag : i === 3 && tags.length === 4 ? tag : `+${tags.length - 3} more`}
                </div>
              );
            })}
          </div>
          <ChevronUpIcon
            className={`${
              isOpen ? "rotate-180 transform duration-200" : ""
            } h-5 w-5 text-purple-500 duration-200`}
          />
        </div>
      </button> */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 bg-tan-sub shadow-2xl" : "max-h-0 opacity-0"
        } px-4 pb-2 pt-4 -mt-2 text-sm`}
      >
        {/* <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-96 opacity-100 border-amber-600 bg-tan-sub shadow-2xl"
            : "max-h-0 opacity-0"
        } px-4 pb-2 pt-4 -mt-2 text-sm border-b-4`}
      > */}
        {content &&
          content.map((c: any, i: number) => {
            return (
              typeof c === "string" && (
                <div key={i} className=" space-y-10">
                  <p>{c}</p>
                </div>
              )
            );
          })}
      </div>
      {isOpen && <div className="h-[5px] bg-yellow-600 border-2 border-black" />}
    </div>
  );
}
