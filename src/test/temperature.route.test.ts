import { describe, expect, it } from "vitest";
import request from "supertest";

import app from "../server.js";

describe("Temperature routes", () => {
  it("GET /temperature returns the temperature page", async () => {
    const response = await request(app)
      .get("/temperature");

    expect(response.status).toBe(200);
    expect(response.text).toContain("Temperature");
  });

  it("POST /temperature converts Celsius to Fahrenheit", async () => {
    const response = await request(app)
      .post("/temperature")
      .type("form")
      .send({
        value: "0",
        from: "celsius",
        to: "fahrenheit",
      });

    expect(response.status).toBe(200);
    expect(response.text).toContain("32");
    expect(response.text).toContain("fahrenheit");
  });

  it("rejects an invalid value", async () => {
    const response = await request(app)
      .post("/temperature")
      .type("form")
      .send({
        value: "hello",
        from: "celsius",
        to: "fahrenheit",
      });

    expect(response.status).toBe(400);
    expect(response.text).toContain("valid number");
  });

  it("rejects temperature below absolute zero", async () => {
    const response = await request(app)
      .post("/temperature")
      .type("form")
      .send({
        value: "-300",
        from: "celsius",
        to: "fahrenheit",
      });

    expect(response.status).toBe(400);
    expect(response.text).toContain("absolute zero");
  });
});