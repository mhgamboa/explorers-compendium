import React from "react";
import Search from "./Search";
import clientPromise from "@/lib/mongodb";
import Item from "./Item";
import Image from "next/image";

export default async function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | undefined };
}) {
  if (!searchParams) return;

  // Add query data to search obeject
  // const { name, tags } = searchParams;
  // let searchObject: { name?: RegExp; tags?: { $all: string[] } } = {};

  // typeof name === "string" && (searchObject.name = new RegExp(name, "i"));
  // typeof tags === "string" && (searchObject.tags = { $all: tags.split(",") });

  // const client = await clientPromise;
  // const db = client.db("content");
  // const collection = db.collection("magic-items");
  // const res = await collection.find(searchObject).limit(50).toArray();
  // const data = JSON.parse(JSON.stringify(res));
  return (
    <main className="bg-parchment-background bg-tan-main">
      <Search />
      home page!
      <section className="lg:col-span-3">
        <div className="px-4">
          <div className="mx-auto rounded-2xl p-2 space-y-5">
            {/* {res.length > 0 ? (
              res.map(item => {
                return (
                  <Item
                    key={item.name}
                    name={item.name}
                    tags={item.tags}
                    content={item.content}
                  />
                );
              })
            ) : (
              <h1 className="w-full text-center text-4xl pt-5">
                We couldn&apos;t find any items 🙁
              </h1>
            )} */}
          </div>
        </div>
      </section>
    </main>
  );
}
