import { sumArrs } from "./sumArrs.js";

describe("TC03 - sumArrs", () => {
    it("sums two number arrays of the same length", () => {
        expect(sumArrs([1, 2, 3], [4, 5, 6])).toEqual([5, 7, 9]);
    });

    it("sums two number arrays of different lengths", () => {
        expect(sumArrs([1, 2], [3, 4, 5])).toEqual([4, 6, 5]);
        expect(sumArrs([1, 2, 3], [4])).toEqual([5, 2, 3]);
    });

    it("sums with an empty first array", () => {
        expect(sumArrs([], [1, 2, 3])).toEqual([1, 2, 3]);
    });

    it("sums with an empty second array", () => {
        expect(sumArrs([1, 2, 3], [])).toEqual([1, 2, 3]);
    });

    it("sums two empty arrays", () => {
        expect(sumArrs([], [])).toEqual([]);
    });
});
