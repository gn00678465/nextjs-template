import { describe, expect, it } from 'vitest';

function add(a: number, b: number) {
  return a + b;
}

describe('first test', () => {
  it('add test', () => {
    expect(add(1, 1)).toBe(2);
  });
});
