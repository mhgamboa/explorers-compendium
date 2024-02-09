import React from "react";
import Search from "./Search";
import clientPromise from "@/lib/mongodb";
import MonsterCard from "./MonsterCard";

export default async function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | undefined };
}) {
  // Add query data to search object
  if (!searchParams) return;
  const { name, tags } = searchParams;
  let searchObject: { name?: RegExp; tags?: { $all: string[] } } = {};

  typeof name === "string" && (searchObject.name = new RegExp(name, "i"));
  // typeof tags === "string" && (searchObject.tags = { $all: tags.split(",") });

  const client = await clientPromise;
  const db = client.db("content");
  const collection = db.collection("monsters");
  const res = await collection.find(searchObject).limit(50).toArray();
  const data = JSON.parse(JSON.stringify(res));

  return (
    <main>
      <Search />
      <section className="lg:col-span-3 px-4">
        <div className="mx-auto rounded-2xl p-2 space-y-5 max-w-5xl">
          {data.length > 0 ? (
            data.map((m: any) => <MonsterCard key={m._id} monster={m} />)
          ) : (
            <h1 className="w-full text-center text-4xl pt-5">
              We couldn&apos;t find any items 🙁
            </h1>
          )}
        </div>
      </section>
    </main>
  );
}
