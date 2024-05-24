export const titleRegex = /^Actions$|^Reactions$|^\w+ Actions$/i;

export default function findIndexes(arr: string[]) {
  const indexes: { [key: string]: number } = {};

  arr.forEach((item, index) => {
    const match = item.match(titleRegex);
    if (match) indexes[match[0]] = index;
  });
  return indexes;
}
