export function countAnimals(animals) {
  const sheep = animals.filter(Boolean).length;

  if (sheep === 0) {
    return 'UPS!!! A pack of hungry wolves';
  }

  return `There are ${sheep} sheep in total`;
}