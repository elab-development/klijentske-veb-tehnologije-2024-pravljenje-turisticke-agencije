import { describe, it, expect } from 'vitest';
import { calculate } from '../src/utils/calculate';

describe('calculate function', () => {
  it('should return the correct sum', () => {
    const result = calculate(1, 2);
    expect(result).toBe(3);
  });

  it('should return the correct sum', () => { // Promenite opis testa ako treba
    const result = calculate(5, 3);
    expect(result).toBe(8); // Promenite očekivanje u skladu sa funkcijom
  });
});
