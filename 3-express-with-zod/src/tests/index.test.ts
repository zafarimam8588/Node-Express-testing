import { describe, it, expect } from "@jest/globals";
import request from "supertest";
import { app } from "../index";

describe("POST /sum", () => {
  it("should return the sum of two numbers", async () => {
    const res = await request(app).post("/sum").send({
      a: 5,
      b: 4,
    });

    expect(res.statusCode).toBe(200);
    expect(res.body.sum).toBe(9);
  });
});

describe("GET /sum", () => {
  it("should return the sum of two numbers", async () => {
    const res = await request(app)
      .get("/sum")
      .set({
        a: "1",
        b: "3",
      })
      .send();
    expect(res.statusCode).toBe(200);
    expect(res.body.sum).toBe(4);
  });
  it("should return 411 if no inputs are provided ", async () => {
    const res = await request(app).get("/sum").set({}).send({});
    expect(res.body.message).toBe("Incorrect inputs");
  });
});
