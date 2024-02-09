import React from "react";
import TriangleDivider from "../TriangleDivider";
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
    Actions,
    Reactions,
    LegendaryActions,
  } = monster;

  return (
    <div>
      <TriangleDivider />
      {/* AC, HP, Speed */}
      <div className="text-red-900 py-2">
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
      <div className="w-full flex text-red-900 py-2">
        {Object.keys(Abilities).map((a: string) => {
          const abilityScore = Abilities[a];
          return (
            <div key={a} className="flex flex-col w-1/6 items-center">
              <div className="font-bold">{a}</div>
              <div>
                <span>{abilityScore}</span> ({calculateModifier(abilityScore)})
              </div>
            </div>
          );
        })}
      </div>
      <TriangleDivider />

      {/* Vulnerabilities/Resistances/Immunities, Saves, Skills, Senses, Languages, CR */}
      <div className="w-full flex flex-col text-red-900 leading-8 py-2">
        <div id="vulnerabilities">
          {DamageVulnerabilities.length >= 1 && (
            <>
              <span className="font-bold">Damage Vulnerabilities</span>{" "}
              {DamageVulnerabilities.join(", ")}
            </>
          )}
        </div>
        <div className="resistances text-red-900">
          {DamageResistances.length >= 1 && (
            <>
              <span className="font-bold">Damage Resistances</span>{" "}
              {DamageResistances.join(", ")}
            </>
          )}
        </div>
        <div className="damageImmunities text-red-900">
          {DamageImmunities.length >= 1 && (
            <>
              <span className="font-bold">Damage Immunities</span> {DamageImmunities.join(", ")}
            </>
          )}
        </div>
        <div className="conditionImmunities">
          {ConditionImmunities.length >= 1 && (
            <>
              <span className="font-bold">Condition Immunities</span>{" "}
              {ConditionImmunities.join(", ")}
            </>
          )}
        </div>
        <div className="saves">
          {Saves.length >= 1 && (
            <>
              <span className="font-bold">Saves</span>{" "}
              {Saves.map((s: any) => `${s.Name} +${s.Modifier}`).join(", ")}
            </>
          )}
        </div>
        <div className="skills">
          {Skills.length >= 1 && (
            <>
              <span className="font-bold">Skills</span>{" "}
              {Skills.map((s: any) => `${s.Name} +${s.Modifier}`).join(", ")}
            </>
          )}
        </div>
        <div className="senses">
          {Senses.length >= 1 && (
            <>
              <span className="font-bold">Senses</span> {Senses.join(", ")}
            </>
          )}
        </div>
        <div className="languages">
          {Languages.length >= 1 && (
            <>
              <span className="font-bold">Languages</span> {Languages.join(", ")}
            </>
          )}
        </div>
        <div className="challenge">
          {
            <>
              <span className="font-bold">Challenge</span> {Challenge} ({calculateXP(Challenge)}{" "}
              XP)
            </>
          }
        </div>
      </div>
      <TriangleDivider />
      {/* Traits */}
      <div className="whitespace-pre-wrap space-y-1 py-2">
        {Traits.map((t: any) => {
          return (
            <div key={t.Name}>
              <span className="font-semibold italic">{t.Name}</span> {t.Content}
            </div>
          );
        })}
      </div>
      {/* Actions */}
      <div id="actions" className="py-2">
        <h3 className="text-2xl font-light text-red-900">Actions</h3>
        <hr className="border-black" />
        {Actions.map((a: any) => {
          return (
            <div className="pt-4" key={a.Name}>
              <span className="font-semibold italic">{a.Name}. </span> {a.Content}
            </div>
          );
        })}
      </div>
      {/* Reactions */}
      {Reactions.length > 0 && (
        <div id="actions" className="py-2">
          <h3 className="text-2xl font-light text-red-900">Reactions</h3>
          <hr className="border-black" />
          {Reactions.map((a: any) => {
            return (
              <div className="pt-4" key={a.Name}>
                <span className="font-semibold italic">{a.Name}. </span> {a.Content}
              </div>
            );
          })}
        </div>
      )}
      {/* Reactions */}
      {LegendaryActions.length > 0 && (
        <div id="actions" className="py-2">
          <h3 className="text-2xl font-light text-red-900">Legendary Actions</h3>
          <hr className="border-black" />
          {LegendaryActions.map((a: any) => {
            return (
              <div className="pt-4" key={a.Name}>
                <span className="font-semibold italic">{a.Name}. </span> {a.Content}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
