import { describe, it, expect } from 'vitest';
import { wordExists } from '../../src/word-exists/wordExists.js';

describe('wordExists', () => {
    
  // Caso positivo: la cadena contiene "English"
  it('should return true when string contains English', () => {
    const str = 'abcEnglishdef';
    const expected = true;
    const result = wordExists(str);
    expect(result).toBe(expected);
  });

});