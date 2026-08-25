import path from "node:path";
import fs from "node:fs/promises";

export function formatResult(value: number): string {
  return Number(value.toFixed(6)).toString();
}



export async function renderPage(
    fileName: string,
    result = ""
): Promise<string> {
    const filePath = path.join(
        process.cwd(),
        "src/views",
        fileName
    );

    const html = await fs.readFile(filePath, "utf-8");

    return html.replace("{{RESULT}}", result);
}

export function createResult(
    value: number,
    from: string,
    result: number,
    to: string
): string {
    return `
    <p>${value} ${from} =</p>
    <strong>${formatResult(result)} ${to}</strong>
  `;
}