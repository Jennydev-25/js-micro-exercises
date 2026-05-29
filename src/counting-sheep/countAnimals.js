export function countAnimals(animals) {
  const sheep = animals.filter(animal => animal === true).length;
  return `There are ${sheep} sheep in total`;
}