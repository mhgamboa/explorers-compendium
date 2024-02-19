export const tagOptions = [
  { value: "armor", label: "armor", checked: false },
  { value: "uncommon", label: "uncommon", checked: false },
  { value: "medium", label: "medium", checked: false },
  { value: "heavy", label: "heavy", checked: false },
  { value: "rare", label: "rare", checked: false },
  { value: "very rare", label: "very rare", checked: false },
  { value: "weapon", label: "weapon", checked: false },
  { value: "wondrous item", label: "wondrous item", checked: false },
  { value: "attunement", label: "attunement", checked: false },
  { value: "legendary", label: "legendary", checked: false },
  { value: "light", label: "light", checked: false },
  { value: "curse", label: "curse", checked: false },
  { value: "plate", label: "plate", checked: false },
  { value: "shield", label: "shield", checked: false },
  { value: "arrow", label: "arrow", checked: false },
];

export type Filter = {
  id: string;
  name: string;
  options: {
    value: string;
    label: string;
    checked: boolean;
  }[];
};

export const filters = [
  {
    id: "tags",
    name: "Tags",
    options: [
      { value: "armor", label: "Armor", checked: false },
      { value: "uncommon", label: "Uncommon", checked: false },
      { value: "medium", label: "Medium", checked: false },
      { value: "heavy", label: "Heavy", checked: false },
      { value: "rare", label: "Rare", checked: false },
      { value: "very rare", label: "Very rare", checked: false },
      { value: "weapon", label: "Weapon", checked: false },
      { value: "wondrous item", label: "Wondrous item", checked: false },
      { value: "attunement", label: "Attunement", checked: false },
      { value: "legendary", label: "Legendary", checked: false },
      { value: "light", label: "Light", checked: false },
      { value: "curse", label: "Curse", checked: false },
      { value: "plate", label: "Plate", checked: false },
      { value: "shield", label: "Shield", checked: false },
      { value: "arrow", label: "Arrow", checked: false },
    ],
  },
  {
    id: "publishers",
    name: "Publishers",
    options: [{ value: "wotc", label: "Wizard's of the Coast", checked: false }],
  },
];
