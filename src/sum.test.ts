import { sum } from "./sum.js";

describe("TC01 - Summation", () => {
  it("adds two positive numbers", () => {
    expect(sum(2, 3)).toBe(5);
  });

  it("adds a positive and a negative number", () => {
    expect(sum(5, -2)).toBe(3);
  });

  it("adds two negative numbers", () => {
    expect(sum(-4, -6)).toBe(-10);
  });

  it("adds zero to a number", () => {
    expect(sum(7, 0)).toBe(7);
    expect(sum(0, 7)).toBe(7);
  });

  it("adds two zeros", () => {
    expect(sum(0, 0)).toBe(0);
  });
});
