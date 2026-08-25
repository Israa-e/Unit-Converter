const unitsInGrams: Record<string, number> = {
    milligram: 0.001,
    gram: 1,
    kilogram: 1000,
    ounce: 28.349523125,
    pound: 453.59237,
};


export function convertWeight(
    value: number,
    from: string,
    to: string
): number {

    const fromUnit = unitsInGrams[from];
    const toUnit = unitsInGrams[to];

    if (fromUnit === undefined || toUnit === undefined) {
        throw new Error("Invalid weight unit");
    }

    const valueInGrams = value * fromUnit;

    return valueInGrams / toUnit;

}