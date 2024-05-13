export default function parseChallenge(input: string) {
  const regExp: RegExp = /(?<=\n)Challenge.+(?=\n)/;

  const match = input.match(regExp);
  if (!match) return "???";

  const arr = match[0].match(/((\d\/\d)|\d+)/);
  if (!arr) return "???";
  return arr[0];
}
