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

});