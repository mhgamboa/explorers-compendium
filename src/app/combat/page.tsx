import React from "react";
import clientPromise from "@/lib/mongodb";

import { Monster } from "@/types/monster";
import { Player } from "@/types/player";

import InitiaizeState from "@/components/combat/InitializeState";
import InitiativeModal from "@/components/combat/modal/initiative/InitiativeModal";
import Track from "@/components/combat/Track";
import CombatCard from "@/components/combat/combatCard/CombatCard";

export default async function page() {
  const client = await clientPromise;
  const db = client.db("5e");

  const monsterCollection = db.collection("monsters");
  const playerCollection = db.collection("players");

  // monsterRes & playerRes to eventually be phased out by Encounter fetching
  const monsterRes = await monsterCollection.find({}).limit(50).toArray();
  const playerRes = await playerCollection.find({}).limit(50).toArray();

  const monsterData: Monster[] = JSON.parse(JSON.stringify(monsterRes));
  const playerData: Player[] = JSON.parse(JSON.stringify(playerRes));

  return (
    <InitiaizeState monsterData={monsterData} playerData={playerData}>
      <div className="w-full">
        <>
          <InitiativeModal />
        </>
        <Track />
        <CombatCard />
      </div>
    </InitiaizeState>
  );
}
