import React from "react";
import clientPromise from "@/lib/mongodb";
import Main from "@/components/combat/Main";

export default async function page() {
  const client = await clientPromise;
  const db = client.db("5e");
  const monsterCollection = db.collection("monsters");
  const monsterRes = await monsterCollection.find({}).limit(50).toArray();
  const monsterData = JSON.parse(JSON.stringify(monsterRes));

  return (
    <div className="w-full">
      <Main monsterData={monsterData} />
    </div>
  );
}
