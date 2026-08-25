import { Router } from "express";
import { createResult, renderPage } from "../utils/format.js";
import { convertLength } from "../converters/length.js";

const router=Router()

router.get("/", async (_req, res) => {
  const html = await renderPage("length.html");
  res.send(html);
});


router.post("/", async (req, res) => {
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

export default router;