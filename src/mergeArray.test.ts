import { MergeArrays } from "./mergeArray.js";

describe('TC02 - MergeArrays', () => {
  it('merges two number arrays', () => {
    expect(MergeArrays([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
  });

  it('merges two string arrays', () => {
    expect(MergeArrays(['a', 'b'], ['c', 'd'])).toEqual(['a', 'b', 'c', 'd']);
  });

  it('merges with an empty first array', () => {
    expect(MergeArrays([], [1, 2, 3])).toEqual([1, 2, 3]);
  });

  it('merges with an empty second array', () => {
    expect(MergeArrays([1, 2, 3], [])).toEqual([1, 2, 3]);
  });

  it('merges two empty arrays', () => {
    expect(MergeArrays([], [])).toEqual([]);
  });

  it('preserves order: array1 elements come before array2 elements', () => {
    expect(MergeArrays([10, 20], [30, 40])).toEqual([10, 20, 30, 40]);
  });
});

