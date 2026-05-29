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

  // Caso 2 - puntuacion unida a la palabra
  it('should keep punctuation attached to its word', () => {
    const str = 'Hi There.';
    const expected = 'There. Hi';
    const result = reverseWords(str);
    expect(result).toBe(expected);
  });

  // Caso 3 - espacios al principio y al final
  it('should remove leading and trailing spaces', () => {
    const str = '   espacios al rededor   ';
    const expected = 'rededor al espacios';
    const result = reverseWords(str);
    expect(result).toBe(expected);
  });

  // Caso 4 - multiples espacios entre palabras
  it('should reduce multiple spaces between words to one', () => {
    const str = 'Muchos      espacios       intermedios';
    const expected = 'intermedios espacios Muchos';
    const result = reverseWords(str);
    expect(result).toBe(expected);
  });
  
});