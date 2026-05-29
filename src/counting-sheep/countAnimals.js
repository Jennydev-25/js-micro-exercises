export function countAnimals(animals) {
  if (!Array.isArray(animals)) throw new Error('Invalid input: list must contain only boolean values');

  const sheep = animals.filter(Boolean).length;
  const wolves = animals.filter(animal => animal === false).length;
  const noSheep = sheep === 0;
  const noWolves = wolves === 0;
  const sheepWin = sheep > wolves;
  const wolvesWin = wolves > sheep;

  if (noSheep) return 'UPS!!! A pack of hungry wolves';
  if (noWolves) return `There are ${sheep} sheep in total`;
  if (sheepWin) return `${sheep} sheep escaped!!!`;
  if (wolvesWin) return 'UPS!!! Wolves ate all the sheep';
}