import { describe, expect, it } from "vitest";
import { convertTemperature } from "../converters/temperature.js";

describe("convertTemperature", () => {
  it("converts Celsius to Fahrenheit", () => {
    expect(
      convertTemperature(0, "celsius", "fahrenheit")
    ).toBe(32);

    expect(
      convertTemperature(100, "celsius", "fahrenheit")
    ).toBe(212);
  });

  it("converts Fahrenheit to Celsius", () => {
    expect(
      convertTemperature(32, "fahrenheit", "celsius")
    ).toBe(0);

    expect(
      convertTemperature(212, "fahrenheit", "celsius")
    ).toBe(100);
  });

  it("converts Celsius to Kelvin", () => {
    expect(
      convertTemperature(0, "celsius", "kelvin")
    ).toBeCloseTo(273.15);

    expect(
      convertTemperature(100, "celsius", "kelvin")
    ).toBeCloseTo(373.15);
  });

  it("converts Kelvin to Celsius", () => {
    expect(
      convertTemperature(273.15, "kelvin", "celsius")
    ).toBeCloseTo(0);
  });

  it("converts Fahrenheit to Kelvin", () => {
    expect(
      convertTemperature(32, "fahrenheit", "kelvin")
    ).toBeCloseTo(273.15);
  });

  it("returns the same value for the same unit", () => {
    expect(
      convertTemperature(25, "celsius", "celsius")
    ).toBe(25);
  });
});