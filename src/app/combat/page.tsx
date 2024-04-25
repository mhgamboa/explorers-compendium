import React from "react";
import clientPromise from "@/lib/mongodb";

import { Monster, Player } from "@/types/combatTypes";

import InitiaizeState from "@/components/combat/InitializeState";
import InitiativeModal from "@/components/combat/modal/initiative/InitiativeModal";
import Track from "@/components/combat/Track";
import CurrentMonster from "@/components/combat/currentMonster/CurrentMonster";
import SavingThrowModal from "@/components/combat/modal/savingThrow/SavingThrowModal";
import DamageModal from "@/components/combat/modal/damage/DamageModal";
import HotKeysTable from "@/components/combat/HotKeysTable";
import RollModal from "@/components/combat/modal/roll/RollModal";
import ConditionModal from "@/components/combat/modal/condition/ConditionModal";

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
          {/* <SavingThrowModal /> */}
          <RollModal />
          <DamageModal />
          <ConditionModal />
        </>
        <Track />
        <CurrentMonster />
        <HotKeysTable />
      </div>
    </InitiaizeState>
  );
}
