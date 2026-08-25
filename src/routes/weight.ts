import { Router } from "express";

import { convertWeight } from "../converters/weight.js";

import {
    createError,
    createResult,
    renderPage,
} from "../utils/format.js";

import {
    isValidNumber,
    isValidUnit,
    weightUnits,
} from "../utils/validation.js";

const router = Router();

router.get("/", async (_req, res) => {
    const html = await renderPage("weight.html");

    res.send(html);
});

router.post("/", async (req, res) => {
    const rawValue = req.body.value;

    if (
        typeof rawValue !== "string" ||
        rawValue.trim() === ""
    ) {
        const html = await renderPage(
            "length.html",
            createError("Please enter a value.")
        );

        return res.status(400).send(html);
    }

    const value = Number(rawValue);
    const from = req.body.from;
    const to = req.body.to;

    if (!isValidNumber(value)) {
        const html = await renderPage(
            "weight.html",
            createError("Please enter a valid number.")
        );

        return res.status(400).send(html);
    }

    if (
        typeof from !== "string" ||
        !isValidUnit(from, weightUnits)
    ) {
        const html = await renderPage(
            "weight.html",
            createError("Please select a valid starting unit.")
        );

        return res.status(400).send(html);
    }

    if (
        typeof to !== "string" ||
        !isValidUnit(to, weightUnits)
    ) {
        const html = await renderPage(
            "weight.html",
            createError("Please select a valid target unit.")
        );

        return res.status(400).send(html);
    }

    const result = convertWeight(value, from, to);

    const html = await renderPage(
        "weight.html",
        createResult(value, from, result, to)
    );

    res.send(html);
});

export default router;