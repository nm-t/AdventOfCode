import { process } from "./a";

describe("01", () => {
  describe("a", () => {
    test("sum up calories per elf", () => {
      expect(process).toEqual([6000, 4000, 11000, 24000, 10000]);
    });
    test("return max", () => {
      expect(process).toEqual(24000);
    });
  });
});
