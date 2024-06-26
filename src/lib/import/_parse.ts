import { Monster } from "@/types/combat";
import parseAC from "./parseAC";
import parseHP from "./parseHP";
import parseSpeed from "./parseSpeed";
import parseAbilities from "./parseAbilities";
import parseDefences from "./parseDefences";
import parseSavingThrows from "./parseSavingThrows";
import parseSkills from "./parseSkills";
import parseCommas from "./parseSenses";
import parseChallenge from "./parseChallenge";
import parseTraitActions from "./parseTraitsActions";

const parse = (input: string) => {
  const arr = input.split(/\n/gm);

  const ac = parseAC(input);
  const hp = parseHP(input);
  const speed = parseSpeed(input);
  const abilities = parseAbilities(input);
  const damageVulnerabilities = parseDefences(input, "Damage Vulnerabilities");
  const damageResistances = parseDefences(input, "Damage Resistances");
  const damageImmunities = parseDefences(input, "Damage Immunities");
  const conditionImmunities = parseDefences(input, "Condition Immunities");
  const saves = parseSavingThrows(input);
  const skills = parseSkills(input);
  const senses = parseCommas(input, "Senses");
  const languages = parseCommas(input, "Languages");
  const challenge = parseChallenge(input);
  const { traits, actions } = parseTraitActions(arr);

  return {
    name: arr[0],
    source: "",
    type: arr[1],
    hp,
    ac,
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
    description: "",
    tags: ["angel", "beast", "Boss"],
  } as Monster;
};

export default parse;
