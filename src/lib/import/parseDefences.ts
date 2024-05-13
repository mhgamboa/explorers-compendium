export default function parseDefences(input: string, text: string) {
  const regExp: RegExp = new RegExp(`(?<=\\n)${text}.+(?=\\n)`);
  const match = input.match(regExp);

  if (!match) return [];
  const words = match[0].match(/\w+/g);
  if (!words) return [];
  // Get all the words. The first two words will not be in the array (Ex: "Damage Vulnerabilities")
  return words.map((w, i) => i > 1 && w.toLowerCase()).filter((w) => w);
}