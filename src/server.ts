import express from "express";
import path from "node:path";
import fs from "node:fs/promises";
import { convertLength } from "./converters/length.js";
import { convertWeight } from "./converters/weight.js";
import { convertTemperature } from "./converters/temperature.js";
import { createResult, renderPage } from "./utils/format.js";

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(process.cwd(), "public")));

app.get("/", async (_req, res) => {
  const html = await fs.readFile(
    path.join(process.cwd(), "src/views/index.html"),
    "utf-8"
  );

  res.send(html);
});

app.get("/length", async (_req, res) => {
  const html = await fs.readFile(
    path.join(process.cwd(), "src/views/length.html"),
    "utf-8"
  );

  res.send(html);
});

app.get("/weight", async (_req, res) => {
  const html = await fs.readFile(
    path.join(process.cwd(), "src/views/weight.html"),
    "utf-8"
  );

  res.send(html);
});

app.get("/temperature", async (_req, res) => {
  const html = await fs.readFile(
    path.join(process.cwd(), "src/views/temperature.html"),
    "utf-8"
  );

  res.send(html);
});

app.post("/length", async (req, res) => {
  const value = Number(req.body.value);
  const from = req.body.from;
  const to = req.body.to;

  if (Number.isNaN(value)) {
    return res.status(400).send("Invalid value");
  }

  const result = convertLength(value, from, to);

  const html = await renderPage(
    "length.html",
    createResult(value, from, result, to)
  );

  res.send(html);
});

app.post("/weight", async (req, res) => {
  const value = Number(req.body.value);
  const from = req.body.from;
  const to = req.body.to;

  if (Number.isNaN(value)) {
    return res.status(400).send("Invalid value");
  }

  const result = convertWeight(value, from, to);

  const html = await renderPage(
    "weight.html",
    createResult(value, from, result, to)
  );

  res.send(html);
});

app.post("/temperature", async (req, res) => {
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

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});