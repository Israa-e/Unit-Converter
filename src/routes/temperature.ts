import { Router } from "express";
import { convertTemperature } from "../converters/temperature.js";
import {
  createResult,
  renderPage,
} from "../utils/format.js";

const router = Router();

router.get("/", async (_req, res) => {
  const html = await renderPage("temperature.html");
  res.send(html);
});

router.post("/", async (req, res) => {
  const value = Number(req.body.value);
  const from = req.body.from;
  const to = req.body.to;

  if (Number.isNaN(value)) {
    return res.status(400).send("Invalid value");
  }

  const result = convertTemperature(value, from, to);

  const html = await renderPage(
    "temperature.html",
    createResult(value, from, result, to)
  );

  res.send(html);
});

export default router;