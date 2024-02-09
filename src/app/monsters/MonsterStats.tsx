import React from "react";
import TriangleDivider from "./TriangleDivider";
import calculateModifier from "@/lib/calculateAbilityScore";

export default function MonsterStats({ monster }: any) {
  const {
    AC,
    HP,
    Speed,
    Abilities,
    DamageVulnerabilities,
    DamageResistances,
    DamageImmunities,
    ConditionImmunities,
    Saves,
    Skills,
    Senses,
    Languages,
    Challenge,
  } = monster;

  return (
    <div>
      <TriangleDivider />
      <div className="leading-8">
        <div>
          Armor Class {AC.Value} {AC.Notes} <br />
        </div>
        <div>
          Hit Points {HP.Value} {HP.Notes}
        </div>
        <div>Speed {Speed.join(", ")}</div>
      </div>
      <TriangleDivider />
      {/* Ability Scores */}
      <div className="w-full flex">
        {Object.keys(Abilities).map((a: string) => {
          const abilityScore = Abilities[a];
          return (
            <div key={a} className="flex flex-col w-1/6 items-center">
              <div>{a}</div>
              <div>
                {abilityScore} ({calculateModifier(abilityScore)})
              </div>
            </div>
          );
        })}
      </div>
      {/* Vulnerabilities/Resistances/Immunities, Saves, Skills, Senses, Languages, CR */}
      <div className="w-full flex flex-col bg-red-500">
        <div id="vulnerabilities">
          {DamageVulnerabilities.length >= 1 &&
            `Damage Vulnerabilities ${DamageVulnerabilities.join(", ")}`}
        </div>
        <div className="resistances">
          {DamageResistances.length >= 1 && `Damage Resistances ${DamageResistances.join(", ")}`}
        </div>
        <div className="damageImmunities">
          {DamageImmunities.length >= 1 && `Damage Immunities ${DamageImmunities.join(", ")}`}
        </div>
        <div className="conditionImmunities">
          {ConditionImmunities.length >= 1 &&
            `Condition Immunities ${ConditionImmunities.join(", ")}`}
        </div>
        <div className="saves">
          {Saves.length >= 1 &&
            `Saves ${Saves.map((s: any) => `${s.Name} +${s.Modifier}`).join(", ")}`}
        </div>
        <div className="skills">
          {Skills.length >= 1 &&
            `Skills ${Saves.map((s: any) => `${s.Name} +${s.Modifier}`).join(", ")}`}
        </div>
        <div className="senses">{Senses.length >= 1 && `Senses ${Senses.join(", ")}`}</div>
        <div className="languages">
          {Languages.length >= 1 && `Languages ${Languages.join(", ")}`}
        </div>
        <div className="challenge">{`Challenge ${Challenge}`}</div>
      </div>
      <TriangleDivider />
    </div>
  );
}
