import { describe, it, expect } from 'vitest';
import { countAnimals } from '../../src/counting-sheep/countAnimals.js';

describe('countAnimals', () => {

  // Caso 1 - solo ovejas
  it('should return total sheep when all animals are sheep', () => {
    const animals = [true, true];
    const expected = 'There are 2 sheep in total';
    const result = countAnimals(animals);
    expect(result).toBe(expected);
  });

  // Caso 2 - solo lobos
  it('should return wolves message when all animals are wolves', () => {
    const animals = [false, false, false];
    const expected = 'UPS!!! A pack of hungry wolves';
    const result = countAnimals(animals);
    expect(result).toBe(expected);
  });

// Caso 3 - mas ovejas que lobos
  it('should return escaped sheep count when sheep outnumber wolves', () => {
    const animals = [true, true, false];
    const expected = '2 sheep escaped!!!';
    const result = countAnimals(animals);
    expect(result).toBe(expected);
  });

});