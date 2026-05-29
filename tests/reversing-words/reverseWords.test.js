import { describe, it, expect } from 'vitest';
import { reverseWords } from '../../src/reversing-words/reverseWords.js';

describe('reverseWords', () => {

  // Caso 1 - inversión básica
  it('should reverse the order of words in a string', () => {
    const str = 'Hello World';
    const expected = 'World Hello';
    const result = reverseWords(str);
    expect(result).toBe(expected);
  });

});