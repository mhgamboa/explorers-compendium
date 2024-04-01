import React from "react";
import clientPromise from "@/lib/mongodb";
import Main from "@/components/combat/Main";
import { Monster } from "@/types/monster";
import { Player } from "@/types/player";
import AppInitializer from "@/components/combat/AppInitializer";

export default async function page() {
  const client = await clientPromise;
  const db = client.db("5e");
  const monsterCollection = db.collection("monsters");
  const monsterRes = await monsterCollection.find({}).limit(50).toArray();
  const monsterData: Monster[] = JSON.parse(JSON.stringify(monsterRes));

  const playerCollection = db.collection("players");
  const playerRes = await playerCollection.find({}).limit(50).toArray();
  const playerData: Player[] = JSON.parse(JSON.stringify(playerRes));

  return (
    <div className="w-full">
      {/* <AppInitializer monsters={monsterData}> */}
      <Main monsterData={monsterData} playerData={playerData} />
      {/* </AppInitializer> */}
    </div>
  );
}
