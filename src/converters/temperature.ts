export function convertTemperature(
    value: number,
    from: string,
    to: string
): number {

    if (from === to) {
        return value;
    }


    if (from === "celsius" && to === "fahrenheit") {
        return (value * 9) / 5 + 32;
    }

    if (from === "celsius" && to === "kelvin") {
        return value + 273.15;
    } if (from === "fahrenheit" && to === "celsius") {
        return ((value - 32) * 5) / 9;
    }

    if (from === "fahrenheit" && to === "kelvin") {
        return ((value - 32) * 5) / 9 + 273.15;
    }

    if (from === "kelvin" && to === "celsius") {
        return value - 273.15;
    }

    if (from === "kelvin" && to === "fahrenheit") {
        return ((value - 273.15) * 9) / 5 + 32;
    }

    throw new Error("Invalid temperature unit");
}
