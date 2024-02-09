import React from "react";
import TriangleDivider from "./TriangleDivider";
import calculateModifier from "@/lib/calculateAbilityScore";
import calculateXP from "@/lib/calculateXP";

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
    Traits,
  } = monster;
  console.log(monster.Name, Traits);
  return (
    <div>
      <TriangleDivider />
      {/* AC, HP, Speed */}
      <div>
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
      <TriangleDivider />

      {/* Vulnerabilities/Resistances/Immunities, Saves, Skills, Senses, Languages, CR */}
      <div className="w-full flex flex-col">
        <div id="vulnerabilities">
          {DamageVulnerabilities.length >= 1 && (
            <>
              <span className="text-red-900">Damage Vulnerabilities</span>{" "}
              {DamageVulnerabilities.join(", ")}
            </>
          )}
        </div>
        <div className="resistances">
          {DamageResistances.length >= 1 && (
            <>
              <span className="text-red-900">Damage Resistances</span>{" "}
              {DamageResistances.join(", ")}
            </>
          )}
        </div>
        <div className="damageImmunities">
          {DamageImmunities.length >= 1 && (
            <>
              <span className="text-red-900">Damage Immunities</span>{" "}
              {DamageImmunities.join(", ")}
            </>
          )}
        </div>
        <div className="conditionImmunities">
          {ConditionImmunities.length >= 1 && (
            <>
              <span className="text-red-900">Condition Immunities</span>{" "}
              {ConditionImmunities.join(", ")}
            </>
          )}
        </div>
        <div className="saves">
          {Saves.length >= 1 && (
            <>
              <span className="text-red-900">Saves</span>{" "}
              {Saves.map((s: any) => `${s.Name} +${s.Modifier}`).join(", ")}
            </>
          )}
        </div>
        <div className="skills">
          {Skills.length >= 1 && (
            <>
              <span className="text-red-900">Skills</span>{" "}
              {Skills.map((s: any) => `${s.Name} +${s.Modifier}`).join(", ")}
            </>
          )}
        </div>
        <div className="senses">
          {Senses.length >= 1 && (
            <>
              <span className="text-red-900">Senses</span> {Senses.join(", ")}
            </>
          )}
        </div>
        <div className="languages">
          {Languages.length >= 1 && (
            <>
              <span className="text-red-900">Languages</span> {Languages.join(", ")}
            </>
          )}
        </div>
        <div className="challenge">
          {
            <>
              <span className="text-red-900">Challenge</span> {Challenge} (
              {calculateXP(Challenge)} XP)
            </>
          }
        </div>
      </div>
      <TriangleDivider />
      {/* Traits */}
      <div>
        {Traits.map((t: any) => {
          return (
            <div key={t.Name}>
              <span className="font-semibold italic">{t.Name}</span> {t.Content}
            </div>
          );
        })}
      </div>
      {/* Actions */}
    </div>
  );
}
