import express from "express";
import path from "node:path";
import fs from "node:fs/promises";
import { convertLength } from "./converters/length.js";
import { convertWeight } from "./converters/weight.js";

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

app.get("/weight",async(req,res)=>{
    const html= await fs.readFile(path.join(process.cwd(),"src/views/weight.html"),"utf-8")
    res.send(html)
})


app.post("/length", async (req, res) => {
    const value = Number(req.body.value)
    const from = req.body.from
    const to = req.body.to


    if (Number.isNaN(value)) {
        return res.status(400).send("Invalid value");
    }
    const result = convertLength(value, from, to)

    res.send(`
        <h1>Length Converter</h1>
        <p>
           ${value} ${from} = ${result} ${to}
        </p>

        <a href="/length">Convert another value</a>
        
        `)

})

app.post("/weight", async (req, res) => {
    const value = Number(req.body.value)
    const from = req.body.from
    const to = req.body.to


    if (Number.isNaN(value)) {
        return res.status(400).send("Invalid value");
    }
    const result = convertWeight(value, from, to)

    res.send(`
        <h1>Weight Converter</h1>
        <p>
           ${value} ${from} = ${result} ${to}
        </p>

        <a href="/length">Convert another value</a>
        
        `)

})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);

})


