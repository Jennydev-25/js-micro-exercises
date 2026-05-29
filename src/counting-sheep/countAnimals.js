export function countAnimals(animals) {
  const sheep = animals.filter(Boolean).length;
  return `There are ${sheep} sheep in total`;
}