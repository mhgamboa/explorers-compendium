import React from "react";
import TriangleDivider from "@/components/ui/TriangleDivider";
import calculateModifier from "@/lib/monster/calculateAbilityScore";
import calculateXP from "@/lib/monster/calculateXP";
// import { useAtomValue } from "jotai";
// import { LoggedInAtom } from "@/atoms/atoms";

export default function MonsterStats({ monster }: any) {
  // const loggedIn = useAtomValue(LoggedInAtom);

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
    Creator,
  } = monster;

  return (
    <div className="py-4">
      <h3 className="text-lg font-medium">
        You must be logged in and be a subscriber of{" "}
        <span className="text-red-900">{Creator.name}&apos;s</span> Patreon to
        view these stats!
      </h3>
      <p className="pt-10">
        You can subscribe to their Patreon{" "}
        <a className="text-red-900" href={Creator.Patreon} target="_blank">
          here
        </a>
      </p>
    </div>
  );

  return (
    <div>
      <TriangleDivider />
      {/* AC, HP, Speed */}
      <div className="py-2 text-red-900">
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
      <div className="flex w-full py-2 text-red-900">
        {Object.keys(Abilities).map((a: string) => {
          const abilityScore = Abilities[a];
          return (
            <div key={a} className="flex w-1/6 flex-col items-center">
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
      <div className="flex w-full flex-col py-2 leading-8 text-red-900">
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
              <span className="font-bold">Damage Immunities</span>{" "}
              {DamageImmunities.join(", ")}
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
              <span className="font-bold">Languages</span>{" "}
              {Languages.join(", ")}
            </>
          )}
        </div>
        <div className="challenge">
          {
            <>
              <span className="font-bold">Challenge</span> {Challenge} (
              {calculateXP(Challenge)} XP)
            </>
          }
        </div>
      </div>
      <TriangleDivider />
      {/* Traits */}
      <div className="space-y-1 whitespace-pre-wrap py-2">
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
              <span className="font-semibold italic">{a.Name}. </span>{" "}
              {a.Content}
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
                <span className="font-semibold italic">{a.Name}. </span>{" "}
                {a.Content}
              </div>
            );
          })}
        </div>
      )}
      {/* Reactions */}
      {LegendaryActions.length > 0 && (
        <div id="actions" className="py-2">
          <h3 className="text-2xl font-light text-red-900">
            Legendary Actions
          </h3>
          <hr className="border-black" />
          {LegendaryActions.map((a: any) => {
            return (
              <div className="pt-4" key={a.Name}>
                <span className="font-semibold italic">{a.Name}. </span>{" "}
                {a.Content}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
