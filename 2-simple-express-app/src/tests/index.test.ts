import { describe, it, expect } from "@jest/globals";

import request from "supertest";
import { app } from "../index";

describe("POST /sum", () => {
  it("should return the sum of two numbers", async () => {
    const res = await request(app).post("/sum").send({
      a: 2,
      b: 3,
    });

    expect(res.statusCode).toBe(200);
    expect(res.body.sum).toBe(5);
  });

  it("should return -ve of when given two negative number", async () => {
    const res = await request(app).post("/sum").send({
      a: -1,
      b: -3,
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.sum).toBe(-4);
  });

  it("should return the sum of two zeros ", async () => {
    const res = await request(app).post("/sum").send({
      a: 0,
      b: 0,
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.sum).toBe(0);
  });
});
