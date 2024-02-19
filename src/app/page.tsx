import React from "react";
import Search from "./Search";
import clientPromise from "@/lib/mongodb";
import MonsterCard from "@/components/monster/MonsterCard";
import { dbQueryType } from "./data";
import Header from "@/components/Header";

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
  let dbQuery: dbQueryType = {};

  typeof name === "string" && (dbQuery.Name = new RegExp(name, "i"));
  typeof tags === "string" && (dbQuery.Tags = { $all: tags.split(",") });

  const client = await clientPromise;
  const db = client.db("5e");
  const monsterCollection = db.collection("monsters");
  const monsterRes = await monsterCollection.find(dbQuery).limit(50).toArray();
  const monsterData = JSON.parse(JSON.stringify(monsterRes));

  console.log(monsterData[0]?.Creator);
  // const tagsRes = JSON.parse(JSON.stringify(collection.distinct("Tags")));
  // console.log(tagsRes);

  return (
    <>
      <Header />
      <main>
        <Search />
        <section className="lg:col-span-3 px-4">
          <div className="mx-auto rounded-2xl p-2 space-y-5 max-w-5xl">
            {monsterData.length > 0 ? (
              monsterData.map((m: any) => <MonsterCard key={m._id} monster={m} />)
            ) : (
              <h1 className="w-full text-center text-4xl pt-5">
                We couldn&apos;t find any items 🙁
              </h1>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
