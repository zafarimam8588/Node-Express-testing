import { describe, it, expect } from "@jest/globals";

import { multiply, sum } from "../index";

describe("Sum of two number", () => {
  it("should be 5 when 2 and 3 added", () => {
    expect(sum(2, 3)).toBe(5);
  });

  it("should return 0 when added 0 and 0", () => {
    expect(sum(0, 0)).toBe(0);
  });
});

describe("multiplication of two number", () => {
  it("should return 10 when input is 5 and 2", () => {
    expect(multiply(5, 2)).toBe(10);
  });
});
