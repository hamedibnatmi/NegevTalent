import { removeAtLeastOne } from "../ex2";

describe("removeAtLeastOne", () => {
    test("should remove at least one element from the array", () => {
        expect(removeAtLeastOne([1, 2, 3, 4, 5]).length).toBeLessThan(5);
    });
});
