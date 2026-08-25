import { Router } from "express";
import { renderPage } from "../utils/format.js";

const router = Router();

router.get("/",async (_req, res) => {
  const html = await renderPage("index.html");
  res.send(html);
});
export default router;