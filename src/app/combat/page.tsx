import React from "react";
import clientPromise from "@/lib/mongodb";
import Main from "@/components/combat/Main";
import { Monster } from "@/types/monster";
import AppInitializer from "@/components/combat/AppInitializer";

export default async function page() {
  const client = await clientPromise;
  const db = client.db("5e");
  const monsterCollection = db.collection("monsters");
  const monsterRes = await monsterCollection.find({}).limit(50).toArray();
  const monsterData: Monster[] = JSON.parse(JSON.stringify(monsterRes));
  console.log(monsterData);
  return (
    <div className="w-full">
      {/* <AppInitializer monsters={monsterData}> */}
      <Main monsterData={monsterData} />
      {/* </AppInitializer> */}
    </div>
  );
}
