import { Monster } from "@/types/combatTypes";
import parseAC from "./parseAC";
import parseHP from "./parseHP";

const parse = (input: string) => {
  const arr = input.split(/\n/gm);

  const ac = parseAC(input);
  const hp = parseHP;

  return;
  return {
    name: arr[0],
    source: "",
    type: arr[1],
    // hp,
    ac,
  } as Monster;
};

export default parse;
