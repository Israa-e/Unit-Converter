import { describe, expect, it } from "vitest";
import { convertWeight } from "../converters/weight.js";

describe("convertWeight", () => {
  it("converts kilograms to grams", () => {
    expect(convertWeight(1, "kilogram", "gram")).toBe(1000);
  });

  it("converts grams to kilograms", () => {
    expect(convertWeight(1000, "gram", "kilogram")).toBe(1);
  });

  it("converts kilograms to pounds", () => {
    expect(convertWeight(1, "kilogram", "pound")).toBeCloseTo(2.204623);
  });

  it("converts pounds to kilograms", () => {
    expect(convertWeight(1, "pound", "kilogram")).toBeCloseTo(0.453592);
  });

  it("returns the same value for the same unit", () => {
    expect(convertWeight(10, "gram", "gram")).toBe(10);
  });

  it("handles decimal values", () => {
    expect(convertWeight(2.5, "kilogram", "gram")).toBe(2500);
  });
});