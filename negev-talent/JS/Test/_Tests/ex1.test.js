import { isEven } from "../ex1";

describe("isEven", () => {
    test("should return true if n is even", () => {
        expect(isEven(2)).toBe(true);
    });
    test("should return false if n is odd", () => {
        expect(isEven(3)).toBe(false);
    });
});