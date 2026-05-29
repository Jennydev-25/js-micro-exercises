export function countAnimals(animals) {
  const sheep = animals.filter(Boolean).length;
  const noSheep = sheep === 0;
  return noSheep
    ? 'UPS!!! A pack of hungry wolves'
    : `There are ${sheep} sheep in total`;
}