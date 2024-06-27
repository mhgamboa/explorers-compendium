"use client";
import React from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

import dynamic from "next/dynamic";
const Select = dynamic(() => import("react-select"), { ssr: false });
import makeAnimated from "react-select/animated";
const animatedComponents = makeAnimated();

import { tagOptions } from "./data";

export default function SearchMagicItems() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Set initial selected tags
  const tags = searchParams.get("tags")?.split(",");
  const initialTags = tags ? tagOptions.filter(option => tags.includes(option.value)) : null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Get form Data
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const tags = formData.getAll("tags");

    // Push Form Data
    const newParams = new URLSearchParams(searchParams.toString());
    name ? newParams.set("name", name) : newParams.delete("name");
    tags[0] ? newParams.set("tags", tags.join(",")) : newParams.delete("tags");
    router.replace(`/?${newParams.toString()}`);
  };

  return (
    <div className="container mx-auto px-4 py-6 bg-gray-300">
      <form
        className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8"
        onSubmit={handleSubmit}
      >
        <div className="w-full md:w-1/2">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Monster Name"
            defaultValue={searchParams?.get("name") || ""}
            className="w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="w-full md:w-1/2">
          {/* <Select
            className="w-full"
            name="tags"
            closeMenuOnSelect={false}
            components={animatedComponents}
            defaultValue={initialTags}
            isMulti
            options={tagOptions}
            placeholder="Select Tags"
          /> */}
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
