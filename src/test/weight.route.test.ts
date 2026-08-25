import { describe, expect, it } from "vitest";
import request from "supertest";

import app from "../server.js";

describe("Weight routes", () => {
  it("GET /weight returns the weight page", async () => {
    const response = await request(app)
      .get("/weight");

    expect(response.status).toBe(200);
    expect(response.text).toContain("Weight");
  });

  it("POST /weight converts kilograms to grams", async () => {
    const response = await request(app)
      .post("/weight")
      .type("form")
      .send({
        value: "1",
        from: "kilogram",
        to: "gram",
      });

    expect(response.status).toBe(200);
    expect(response.text).toContain("1000");
    expect(response.text).toContain("gram");
  });

  it("rejects an invalid value", async () => {
    const response = await request(app)
      .post("/weight")
      .type("form")
      .send({
        value: "hello",
        from: "kilogram",
        to: "gram",
      });

    expect(response.status).toBe(400);
    expect(response.text).toContain("valid number");
  });

  it("rejects an invalid unit", async () => {
    const response = await request(app)
      .post("/weight")
      .type("form")
      .send({
        value: "10",
        from: "banana",
        to: "gram",
      });

    expect(response.status).toBe(400);
    expect(response.text).toContain("valid starting unit");
  });
});