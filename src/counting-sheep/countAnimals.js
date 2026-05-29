export function countAnimals(animals) {
  const sheep = animals.filter(Boolean).length;
  const wolves = animals.filter(animal => animal === false).length;
  const noSheep = sheep === 0;
  const noWolves = wolves === 0;
  const sheepWin = sheep > wolves;

  if (noSheep) return 'UPS!!! A pack of hungry wolves';
  if (noWolves) return `There are ${sheep} sheep in total`;
  if (sheepWin) return `${sheep} sheep escaped!!!`;

  return `There are ${sheep} sheep in total`;
}