import React, { MouseEvent } from "react";
import reactStringReplace from "react-string-replace";

import { Actions, Saves, Skills, Traits } from "@/types/combat";
import TriangleDivider from "@/components/ui/TriangleDivider";
import calculateModifier from "@/utils/monster/calculateAbilityScore";
import calculateXP from "@/utils/monster/calculateXP";
import RollDiceButton from "@/components/ui/RollDiceButton";
import useCurrentCombatant from "@/hooks/combat/useCurrentCombatant";
import { useViewContext } from "@/context/combat/ViewContext";
import { useRollContext } from "@/context/combat/RollContext";

export default function MonsterDisplay() {
  const c = useCurrentCombatant();

  const {
    name,
    ac_notes,
    ac_value,
    hp_value,
    hp_notes,
    speed,
    str,
    dex,
    con,
    int,
    wis,
    cha,
    damage_vulnerabilities: damageVulnerabilities,
    damage_resistances: damageResistances,
    damage_immunities: damageImmunities,
    condition_immunities: conditionImmunities,
    saves,
    skills,
    senses,
    languages,
    challenge,
    traits,
    actions,
  } = c.monsters!;

  // Unless we can implement types supabase JSONB, this is necessary
  const typedSaves = saves as Saves;
  const typedSkills = skills as Skills;
  const typedTraits = traits as Traits;
  const typedActions = actions as Actions;

  return (
    <>
      <div className="pb-2 text-2xl font-bold text-red-900">{name}</div>
      <TriangleDivider />
      <div className="py-2 text-red-900">
        <div>
          Armor Class {ac_value} {ac_notes}
        </div>
        <div>
          Hit Points {hp_value} {hp_notes}
        </div>
        <div id="speed">Speed {speed.join(", ")}</div>
      </div>
      <TriangleDivider />
      {/* Ability Scores */}
      <div className="flex w-full py-2 text-red-900">
        <Ability name="str" modifier={str} />
        <Ability name="dex" modifier={dex} />
        <Ability name="con" modifier={con} />
        <Ability name="int" modifier={int} />
        <Ability name="wis" modifier={wis} />
        <Ability name="cha" modifier={cha} />
      </div>
      <TriangleDivider />
      {/* Vulnerabilities/Resistances/Immunities, saves, skills, senses, languages, CR */}
      <div className="flex w-full flex-col py-2 leading-8 text-red-900">
        <List list={damageVulnerabilities} title="Damage Vulnerabilities" />
        <List list={damageResistances} title="Damage Resistances" />
        <List list={damageImmunities} title="Damage Immunities" />
        <List list={conditionImmunities} title="Condition Immunities" />
        <SavesComponent saves={typedSaves} />
        {typedSkills.length >= 1 && (
          <div>
            <span className="font-bold">Skills</span>{" "}
            {typedSkills.map((s) => `${s.name} +${s.modifier}`).join(", ")}
          </div>
        )}
        <List list={senses} title="Senses" />
        <List list={languages} title="Languages" />
        {challenge && (
          <div>
            <span className="font-bold">Challenge</span> {challenge} (
            {calculateXP(challenge)} XP)
          </div>
        )}
      </div>
      <TriangleDivider />
      {/* traits */}
      <div className="space-y-1 whitespace-pre-wrap py-2">
        {typedTraits &&
          typedTraits.map((t) => {
            return (
              <div key={t.name}>
                <span className="font-semibold italic">{t.name}.</span>{" "}
                {t.description}
              </div>
            );
          })}
      </div>
      <ActionsComponent actions={typedActions} />
    </>
  );
}

const Ability = ({ name, modifier }: { name: string; modifier: number }) => {
  const { setView } = useViewContext();
  const { setRollInput } = useRollContext();
  const abilityModifier = calculateModifier(modifier);

  const handleClick = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) => {
    e.preventDefault();
    setRollInput(`1d20+${abilityModifier}`);
    setView("roll");
  };

  return (
    <div className="flex w-1/6 flex-col items-center">
      <div className="font-bold">{name}</div>
      <div>
        {name}{" "}
        {
          <button
            onClick={handleClick}
            className="rounded border border-red-700 bg-white bg-opacity-75 px-0.5"
          >
            +{abilityModifier}
          </button>
        }
      </div>
    </div>
  );
};

const List = ({ list, title }: { list: string[]; title: string }) => {
  return (
    <div id={title}>
      {list.length >= 1 && (
        <>
          <span className="font-bold">{title}</span> {list.join(", ")}
        </>
      )}
    </div>
  );
};

const SavesComponent = ({ saves }: { saves: Saves }) => {
  return (
    <>
      {saves && saves.length > 1 && (
        <div>
          <span className="font-bold">Saves</span>{" "}
          {saves
            .map((s) => {
              if (!s) return;
              return `${s.name} +${s!.modifier}`;
            })
            .join(", ")}
        </div>
      )}
    </>
  );
};

const ActionsComponent = ({ actions }: { actions: Actions }) => {
  return (
    <>
      {actions.map((a) => {
        return (
          <div id="actions" className="py-2" key={a.title}>
            <h3 className="text-2xl font-light text-red-900">{a.title}</h3>
            <hr className="border-black" />
            <div className="pt-4">
              {a.content.map((d) => {
                if (!d) return;
                const newDescription = reactStringReplace(
                  d.description,
                  /(\(\d{1,2}d\d{1,2}(?:\)| ?[+-] ?\d{1,2}\)))/gm,
                  (match) => (
                    <RollDiceButton
                      input={match.replace(/\s/g, "").slice(1, -1)} // No spaces. no parentheses.
                    />
                  ),
                );
                return (
                  <React.Fragment key={d.name}>
                    <div>
                      <span className="font-semibold italic">{d.name}. </span>
                      {newDescription}
                    </div>
                    <br />
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};
