import express from "express";
import path from "node:path";
import fs from "node:fs/promises";
import indexRouter from "./routes/index.js";
import lengthRouter from "./routes/length.js";
import weightRouter from "./routes/weight.js";
import temperatureRouter from "./routes/temperature.js";

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(process.cwd(), "public")));
app.use("/", indexRouter);
app.use("/length", lengthRouter);
app.use("/weight", weightRouter);
app.use("/temperature", temperatureRouter);
if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

export default app;