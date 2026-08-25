# 🌸 Unit Converter

<p align="center">
  <strong>A cute little unit converter built with TypeScript, Node.js, and Express ✨</strong>
</p>

<p align="center">
  Convert length, weight, and temperature values quickly and easily 🌷
</p>

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-5+-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Node.js-22+-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Express-5+-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express">
  <img src="https://img.shields.io/badge/Vitest-Testing-6E9F18?style=for-the-badge&logo=vitest&logoColor=white" alt="Vitest">
</p>

---

## 🧸 About the Project

**Unit Converter** is a simple server-rendered web application that converts values between different units of measurement.

The project was built as part of the
[roadmap.sh Unit Converter project](https://roadmap.sh/projects/unit-converter).

The goal wasn't just to make a converter work, but also to practice building a small backend application with:

- Express routing
- TypeScript
- Server-side validation
- HTML form handling
- Separation of concerns
- Unit testing
- Route testing
- Environment configuration

A tiny project, but lots of useful backend practice! 🌱

---

## ✨ Features

### 📏 Length

Convert between:

- Millimeter
- Centimeter
- Meter
- Kilometer
- Inch
- Foot
- Yard
- Mile

### ⚖️ Weight

Convert between:

- Milligram
- Gram
- Kilogram
- Ounce
- Pound

### 🌡️ Temperature

Convert between:

- Celsius
- Fahrenheit
- Kelvin

### 💕 Other Features

- 🎀 Cute and responsive user interface
- 🔢 Decimal number support
- 🔄 Same-unit conversion support
- 🛡️ Server-side input validation
- 🚫 Invalid unit validation
- 🥶 Absolute-zero temperature validation
- 🧪 Unit tests
- 🌐 HTTP route tests
- ⚙️ Environment-based configuration
- 🧩 Modular Express architecture
- 🚫 No database required

---

## 🌷 Preview

The application has a simple playful interface designed to make conversions feel a little less boring.

```text
                 🧸

            Unit Converter
      A tiny place to make
       conversions easy ✨

    ┌─────────────────────────┐
    │ 📏  Length              │
    └─────────────────────────┘

    ┌─────────────────────────┐
    │ ⚖️  Weight              │
    └─────────────────────────┘

    ┌─────────────────────────┐
    │ 🌡️  Temperature         │
    └─────────────────────────┘
```

---

# 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **TypeScript** | Main programming language |
| **Node.js** | JavaScript runtime |
| **Express** | Web server and routing |
| **HTML** | Page structure |
| **CSS** | Styling and responsive design |
| **Vitest** | Unit testing |
| **Supertest** | HTTP route testing |
| **dotenv** | Environment configuration |

---

# 📁 Project Structure

```text
Unit Converter/
│
├── public/
│   └── style.css
│
├── src/
│   │
│   ├── converters/
│   │   ├── length.ts
│   │   ├── weight.ts
│   │   └── temperature.ts
│   │
│   ├── routes/
│   │   ├── index.ts
│   │   ├── length.ts
│   │   ├── weight.ts
│   │   └── temperature.ts
│   │
│   ├── test/
│   │   ├── length.test.ts
│   │   ├── weight.test.ts
│   │   ├── temperature.test.ts
│   │   ├── length.route.test.ts
│   │   ├── weight.route.test.ts
│   │   └── temperature.route.test.ts
│   │
│   ├── utils/
│   │   ├── format.ts
│   │   └── validation.ts
│   │
│   ├── views/
│   │   ├── index.html
│   │   ├── length.html
│   │   ├── weight.html
│   │   └── temperature.html
│   │
│   └── server.ts
│
├── .env
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── tsconfig.json
```

---

# 🧩 How the Application Works

The application follows a simple request flow:

```text
             👩 User
                │
                ▼
          HTML Form
                │
                ▼
        Express Route
                │
                ▼
           Validation
                │
                ▼
       Converter Function
                │
                ▼
         Format Result
                │
                ▼
          HTML Template
                │
                ▼
            Response
                │
                ▼
             👩 User
```

For example:

```text
1 meter
   │
   ▼
POST /length
   │
   ▼
Validate input
   │
   ▼
convertLength()
   │
   ▼
100 centimeters
   │
   ▼
Render length.html
```

---

# 🚏 Routes

| Method | Endpoint | Description |
|:------:|----------|-------------|
| `GET` | `/` | Home page |
| `GET` | `/length` | Length converter page |
| `POST` | `/length` | Convert length |
| `GET` | `/weight` | Weight converter page |
| `POST` | `/weight` | Convert weight |
| `GET` | `/temperature` | Temperature converter page |
| `POST` | `/temperature` | Convert temperature |

---

# 🔢 Example Conversions

### 📏 Length

```text
1 meter → 100 centimeters

1 kilometer → 0.621371 miles

12 inches → 1 foot
```

### ⚖️ Weight

```text
1 kilogram → 1000 grams

1 kilogram → 2.204623 pounds

500 grams → 0.5 kilograms
```

### 🌡️ Temperature

```text
0 Celsius → 32 Fahrenheit

100 Celsius → 212 Fahrenheit

0 Celsius → 273.15 Kelvin
```

---

# 🛡️ Input Validation

The application doesn't rely only on browser validation.

All important input is validated on the **server**.

### Empty values

```text
❌ Empty input
```

The server returns:

```text
Please enter a value.
```

### Invalid numbers

```text
❌ hello
❌ abc
❌ Infinity
❌ NaN
```

The server returns:

```text
Please enter a valid number.
```

### Invalid units

For example:

```text
from = banana
```

is rejected because `banana` isn't a supported measurement unit.

### Temperature validation

Temperature has an additional physical constraint.

For example:

```text
-300 Celsius
```

is rejected because it is below absolute zero.

```text
🥶 That temperature is below absolute zero.
```

---

# 🧪 Testing

The project uses **Vitest** for unit tests and **Supertest** for HTTP route tests.

## Run all tests

```bash
npm test
```

The tests cover:

### Converter tests

```text
📏 Length
   ├── meters → centimeters
   ├── kilometers → meters
   ├── inches → feet
   ├── same-unit conversion
   └── decimal values

⚖️ Weight
   ├── kilograms → grams
   ├── grams → kilograms
   ├── kilograms → pounds
   ├── pounds → kilograms
   ├── same-unit conversion
   └── decimal values

🌡️ Temperature
   ├── Celsius → Fahrenheit
   ├── Fahrenheit → Celsius
   ├── Celsius → Kelvin
   ├── Kelvin → Celsius
   ├── Fahrenheit → Kelvin
   └── same-unit conversion
```

### Route tests

The HTTP routes are tested for:

- `GET` requests
- Successful `POST` requests
- Invalid numbers
- Invalid units
- Invalid temperatures

---

# 🏗️ Architecture

The project separates different responsibilities into different modules.

## 🚏 Routes

The route files handle HTTP requests.

```text
src/routes/
├── index.ts
├── length.ts
├── weight.ts
└── temperature.ts
```

They receive the request, validate the data, call the appropriate converter, and return the response.

---

## 🧮 Converters

The conversion logic lives separately from the routes.

```text
src/converters/
├── length.ts
├── weight.ts
└── temperature.ts
```

For example:

```typescript
convertLength(1, "meter", "centimeter");
```

returns:

```text
100
```

This makes the conversion logic easy to test independently.

---

## 🛡️ Validation

Validation lives in:

```text
src/utils/validation.ts
```

It checks whether:

- A value is a valid number
- A unit is supported
- A temperature is physically valid

This prevents the routes from becoming full of repeated validation logic.

---

## 🎨 Views

The HTML pages are stored separately:

```text
src/views/
├── index.html
├── length.html
├── weight.html
└── temperature.html
```

The HTML is **not written inside `server.ts`**.

This keeps the backend code cleaner and easier to maintain.

---

## 🎀 Formatting

Result rendering is handled by:

```text
src/utils/format.ts
```

For example:

```text
1 meter =
100 centimeter
```

is generated by the formatting utilities before being inserted into the HTML template.

---

# ⚙️ Environment Variables

The project uses `dotenv` for environment configuration.

Create a `.env` file:

```env
PORT=3000
```

You can also copy the example file:

```bash
cp .env.example .env
```

### Available variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | `3000` |

> 🔐 `.env` is ignored by Git so local configuration isn't committed.

---

# 🚀 Getting Started

## Prerequisites

Make sure you have installed:

- Node.js
- npm
- Git

Check your versions:

```bash
node --version
npm --version
```

---

## 1️⃣ Clone the repository

```bash
git clone <your-repository-url>
```

Then enter the project:

```bash
cd "Unit Converter"
```

---

## 2️⃣ Install dependencies

```bash
npm install
```

---

## 3️⃣ Configure environment variables

Create `.env`:

```bash
cp .env.example .env
```

Or create it manually:

```env
PORT=3000
```

---

## 4️⃣ Start the development server

```bash
npm run dev
```

You should see:

```text
Server running at http://localhost:3000
```

Open:

```text
http://localhost:3000
```

and start converting! 🌸

---

# 📜 NPM Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Compile TypeScript |
| `npm start` | Start the compiled application |
| `npm test` | Run Vitest tests |

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

### Tests

```bash
npm test
```

---

# 🌱 What I Practiced

This project helped me practice several backend concepts:

- Creating an Express server
- Working with HTTP methods
- Creating Express routers
- Handling HTML forms
- Parsing URL-encoded form data
- Serving static files
- Rendering HTML templates
- Separating business logic from routes
- Server-side validation
- Environment variables
- TypeScript modules
- Unit testing
- Integration/route testing
- Handling floating-point precision
- Structuring a small backend project

---

# 💡 Lessons Learned

### 1. Don't trust client-side validation

An HTML input can have:

```html
<input type="number" required>
```

but that doesn't mean the server will always receive a valid number.

The client can send a request manually, so the server must validate the data itself.

---

### 2. Keep business logic separate

Instead of putting conversion formulas directly inside routes:

```text
Route
   ❌
Conversion formula
```

the project uses:

```text
Route
   ↓
Converter
```

This makes the code easier to test and maintain.

---

### 3. Floating-point numbers aren't always exact

For example, JavaScript may produce:

```text
0.9999999999999998
```

instead of:

```text
1
```

for some calculations.

Because of this, tests for floating-point calculations use:

```typescript
toBeCloseTo()
```

instead of always using:

```typescript
toBe()
```

---

### 4. Keep server.ts small

The server entry point should mainly be responsible for connecting the application together:

```text
server.ts
   │
   ├── middleware
   ├── routes
   └── server startup
```

The actual business logic belongs elsewhere.

---

# 🗺️ Roadmap Project

This project was created following the **Unit Converter** challenge from roadmap.sh.

🔗 [View the project requirements](https://roadmap.sh/projects/unit-converter)

---

# 🎯 Future Improvements

Possible improvements for the future:

- [ ] Add more measurement categories
- [ ] Add area conversion
- [ ] Add volume conversion
- [ ] Add speed conversion
- [ ] Add time conversion
- [ ] Add a conversion history
- [ ] Add a dark mode 🌙
- [ ] Add more animations ✨
- [ ] Add end-to-end browser testing
- [ ] Deploy the application

---

# 💗 A Little Note

This project started as a simple:

```text
"convert one unit to another"
```

and turned into a small backend exercise covering:

```text
TypeScript
   +
Express
   +
Routing
   +
Validation
   +
Testing
   +
Clean Architecture
```

Sometimes the smallest projects are the best places to learn the fundamentals. 🌱✨

---

## 👩‍💻 Author

**Israa Elhalby**

Built with TypeScript, Express, and a little bit of ✨pink✨.

---

<p align="center">
  Made with 💗 and lots of ☕
</p>