import express from "express";
import path from "node:path";
import fs from "node:fs/promises";

const app = express();
const PORT = 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(process.cwd(), "public")))

app.get("/", (_req, res) => {
    res.send(`
        <h1>Unit Converter</h1>

    <ul>
      <li><a href="/length">Length</a></li>
      <li><a href="/weight">Weight</a></li>
      <li><a href="/temperature">Temperature</a></li>
    </ul>
        `)
});
app.get("/length", async (_req, res) => {
    const html = await fs.readFile(path.join(process.cwd(), "src/views/length.html"), "utf-8")
    res.send(html)
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);

})


