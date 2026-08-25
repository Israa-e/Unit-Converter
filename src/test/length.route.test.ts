import { describe, expect, it } from "vitest";
import request from "supertest";

import app from "../server.js";

describe("Length routes", () => {
  it("GET /length returns the length page", async () => {
    const response = await request(app)
      .get("/length");

    expect(response.status).toBe(200);
    expect(response.text).toContain("Length");
  });

  it("POST /length converts meters to centimeters", async () => {
    const response = await request(app)
      .post("/length")
      .type("form")
      .send({
        value: "1",
        from: "meter",
        to: "centimeter",
      });

    expect(response.status).toBe(200);
    expect(response.text).toContain("100");
    expect(response.text).toContain("centimeter");
  });

  it("rejects an invalid value", async () => {
    const response = await request(app)
      .post("/length")
      .type("form")
      .send({
        value: "hello",
        from: "meter",
        to: "centimeter",
      });

    expect(response.status).toBe(400);
    expect(response.text).toContain("valid number");
  });

  it("rejects an invalid unit", async () => {
    const response = await request(app)
      .post("/length")
      .type("form")
      .send({
        value: "10",
        from: "banana",
        to: "meter",
      });

    expect(response.status).toBe(400);
    expect(response.text).toContain("valid starting unit");
  });
});