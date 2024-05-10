import { Monster } from "@/types/combatTypes";
import parseAC from "./parseAC";

const parse = (input: string) => {
  const arr = input.split(/\n/gm);

  const ac = parseAC(input);

  return;
  /* return {
    name: arr[0],
    ac,
  } as Monster; */
};

export default parse;
