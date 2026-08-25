const lengthUnits = [
  "millimeter",
  "centimeter",
  "meter",
  "kilometer",
  "inch",
  "foot",
  "yard",
  "mile",
] as const;


const weightUnits = [
  "milligram",
  "gram",
  "kilogram",
  "ounce",
  "pound",
] as const;

const temperatureUnits = [
  "celsius",
  "fahrenheit",
  "kelvin",
] as const;


export function isValidUnit(
  unit: string,
  validUnits: readonly string[]
): boolean {
  return validUnits.includes(unit);
}

export function isValidNumber(value: number): boolean {
  return Number.isFinite(value);
}

export function isValidTemperature(
  value: number,
  unit: string
): boolean {
  if (unit === "kelvin" && value < 0) {
    return false;
  }

  if (unit === "celsius" && value < -273.15) {
    return false;
  }

  if (unit === "fahrenheit" && value < -459.67) {
    return false;
  }

  return true;
}

export {
  lengthUnits,
  weightUnits,
  temperatureUnits,
};