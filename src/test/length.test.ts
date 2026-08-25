import { describe, expect, it } from "vitest";
import { convertLength } from "../converters/length.js";


describe("convertLength", () => {
  it("converts meters to centimeters", () => {
    expect(convertLength(1, "meter", "centimeter")).toBe(100);
  });

  it("converts kilometers to meters", () => {
    expect(convertLength(2, "kilometer", "meter")).toBe(2000);
  });

it("converts inches to feet", () => {
  expect(
    convertLength(12, "inch", "foot")
  ).toBeCloseTo(1);
});
  it("returns the same value for the same unit", () => {
    expect(convertLength(10, "meter", "meter")).toBe(10);
  });

  it("handles decimal values", () => {
    expect(convertLength(1.5, "meter", "centimeter")).toBe(150);
  });
});