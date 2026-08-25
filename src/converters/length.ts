const unitsInMeters: Record<string, number> = {
    millimeter: 0.001,
    centimeter: 0.01,
    meter: 1,
    kilometer: 1000,
    inch: 0.0254,
    foot: 0.3048,
    yard: 0.9144,
    mile: 1609.344,
}

export function convertLength(value: number,
    from: string,
    to: string
): number {
    const fromUnit = unitsInMeters[from]
    const toUnit = unitsInMeters[to]

    if (fromUnit === undefined || toUnit === undefined) {
        throw new Error("Invalid length unit");
    }
  const valueInMeters = value * fromUnit;

  return valueInMeters/toUnit

}