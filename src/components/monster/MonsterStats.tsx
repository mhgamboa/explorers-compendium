import React from "react";
import TriangleDivider from "@/components/ui/TriangleDivider";
import calculateModifier from "@/utils/monster/calculateAbilityScore";
import calculateXP from "@/utils/monster/calculateXP";
import { Monster } from "@/types/combat";

type Props = {
  monster: Monster;
};

export default function MonsterStats({ monster }: Props) {
  const {
    name,
    ac,
    hp,
    speed,
    abilities,
    damageVulnerabilities,
    damageResistances,
    damageImmunities,
    conditionImmunities,
    saves,
    skills,
    senses,
    languages,
    challenge,
    traits,
    actions,
  } = monster;

  return (
    <div>
      <div className="pb-2 text-2xl font-bold text-red-900">{name}</div>
      <TriangleDivider />
      {/* ac, hp, speed */}
      <div className="py-2 text-red-900">
        <div id="ac">
          Armor Class {ac.value} {ac.notes} <br />
        </div>
        <div id="hp">
          Hit Points {hp.value} {hp.notes}
        </div>
        <div id="speed">Speed {speed.join(", ")}</div>
      </div>
      <TriangleDivider />
      {/* Ability Scores */}
      <div className="flex w-full py-2 text-red-900">
        {Object.entries(abilities).map((keyVal) => {
          const ability = keyVal[0];
          const abilityScore = keyVal[1];
          const modifier = calculateModifier(abilityScore);
          return (
            <div key={ability} className="flex w-1/6 flex-col items-center">
              <div className="font-bold">{ability}</div>
              <div>
                <span>{abilityScore}</span> (
                {modifier > 0 ? `+${modifier}` : modifier})
              </div>
            </div>
          );
        })}
      </div>
      <TriangleDivider />

      {/* Vulnerabilities/Resistances/Immunities, saves, skills, senses, languages, CR */}
      <div className="flex w-full flex-col py-2 leading-8 text-red-900">
        <div id="vulnerabilities">
          {damageVulnerabilities.length >= 1 && (
            <>
              <span className="font-bold">Damage Vulnerabilities</span>{" "}
              {damageVulnerabilities.join(", ")}
            </>
          )}
        </div>
        <div className="resistances text-red-900">
          {damageResistances.length >= 1 && (
            <>
              <span className="font-bold">Damage Resistances</span>{" "}
              {damageResistances.join(", ")}
            </>
          )}
        </div>
        <div className="damageImmunities text-red-900">
          {damageImmunities.length >= 1 && (
            <>
              <span className="font-bold">Damage Immunities</span>{" "}
              {damageImmunities.join(", ")}
            </>
          )}
        </div>
        <div className="conditionImmunities">
          {conditionImmunities.length >= 1 && (
            <>
              <span className="font-bold">Condition Immunities</span>{" "}
              {conditionImmunities.join(", ")}
            </>
          )}
        </div>
        <div className="saves">
          {saves.length >= 1 && (
            <>
              <span className="font-bold">Saves</span>{" "}
              {saves.map((s) => `${s.name} +${s.modifier}`).join(", ")}
            </>
          )}
        </div>
        <div className="skills">
          {skills.length >= 1 && (
            <>
              <span className="font-bold">Skills</span>{" "}
              {skills.map((s) => `${s.name} +${s.modifier}`).join(", ")}
            </>
          )}
        </div>
        <div className="senses">
          {senses.length >= 1 && (
            <>
              <span className="font-bold">Senses</span> {senses.join(", ")}
            </>
          )}
        </div>
        <div className="languages">
          {languages.length >= 1 && (
            <>
              <span className="font-bold">Languages</span>{" "}
              {languages.join(", ")}
            </>
          )}
        </div>
        <div className="challenge">
          {
            <>
              <span className="font-bold">Challenge</span> {challenge} (
              {calculateXP(challenge)} XP)
            </>
          }
        </div>
      </div>
      <TriangleDivider />
      {/* traits */}
      <div className="space-y-1 whitespace-pre-wrap py-2">
        {traits.map((t) => {
          return (
            <div key={t.name}>
              <span className="font-semibold italic">{t.name}.</span>{" "}
              {t.description}
            </div>
          );
        })}
      </div>
      {/* actions */}
      {actions.map((a, i) => {
        return (
          <div id="actions" className="py-2" key={a.title}>
            <h3 className="text-2xl font-light text-red-900">{a.title}</h3>
            <hr className="border-black" />
            <div className="pt-4">
              {a.content.map((d, i) => {
                return (
                  <React.Fragment key={i}>
                    <div>
                      {d.name && (
                        <span className="font-semibold italic">{d.name}. </span>
                      )}
                      {d.description}
                    </div>
                    <br />
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
