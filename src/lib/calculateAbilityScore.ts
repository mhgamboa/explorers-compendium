const calculateModifier = (n: number): number | string => {
  const modifier: number = Math.floor((n - 10) / 2);
  return modifier > 0 ? `+${modifier}` : modifier;
};

export default calculateModifier;
