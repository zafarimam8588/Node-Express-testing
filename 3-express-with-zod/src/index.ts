import express from "express";
import { z } from "zod";

export const app = express();

app.use(express.json());

const zodSchema = z.object({
  a: z.number(),
  b: z.number(),
});

app.post("/sum", (req, res) => {
  const parsedResponse = zodSchema.safeParse(req.body);

  if (!parsedResponse.success) {
    res.status(411).json({
      message: "Incorrect inputs",
    });
    return;
  }
  const sum = parsedResponse.data.a + parsedResponse.data.b;

  res.status(200).json({ sum });
});

app.get("/sum", (req, res) => {
  const parsedResponse = zodSchema.safeParse({
    a: Number(req.headers["a"]),
    b: Number(req.headers["b"]),
  });

  if (!parsedResponse.success) {
    res.status(411).json({
      message: "Incorrect inputs",
    });
    return;
  }
  const sum = parsedResponse.data.a + parsedResponse.data.b;

  res.status(200).json({
    sum,
  });
});
